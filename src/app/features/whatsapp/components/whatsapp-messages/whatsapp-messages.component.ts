import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { WhatsAppMessagesService, WhatsAppMessage } from '../../../../core/services/whatsapp-messages.service';
import { WhatsAppTemplatesService, WhatsAppTemplate } from '../../../../core/services/whatsapp-templates.service';
import { UserService, User } from '../../../../core/services/user.service';

@Component({
  selector: 'app-whatsapp-messages',
  templateUrl: './whatsapp-messages.component.html',
  styleUrls: ['./whatsapp-messages.component.scss']
})
export class WhatsappMessagesComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  messages: WhatsAppMessage[] = [];
  filteredMessages: WhatsAppMessage[] = [];
  templates: WhatsAppTemplate[] = [];
  users: User[] = [];
  searchTerm: string = '';
  selectedStatus: string = 'all';
  selectedType: string = 'all';
  showAddForm = false;
  messageForm: FormGroup;
  isLoading = false;
  errorMessage: string = '';
  sendMode: 'individual' | 'bulk' = 'individual';
  selectedTemplate: WhatsAppTemplate | null = null;
  templateVariables: string[] = [];
  selectedUserIds: number[] = [];
  sendToAll = false;
  showConfirmDialog = false;
  confirmDialogData: any = {};
  itemToDelete: WhatsAppMessage | null = null;

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;
  totalMessages: number = 0;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private whatsappMessagesService: WhatsAppMessagesService,
    private whatsappTemplatesService: WhatsAppTemplatesService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.messageForm = this.fb.group({
      sendMode: ['individual', Validators.required],
      recipientPhone: [''],
      recipientName: [''],
      recipientUserIds: [[]],
      sendToAll: [false],
      messageType: ['template', Validators.required],
      templateId: [''],
      messageContent: [''],
      variables: this.fb.group({})
    });

    // Watch for template changes
    this.messageForm.get('templateId')?.valueChanges.subscribe(templateId => {
      if (templateId) {
        this.onTemplateChange(templateId);
      } else {
        this.selectedTemplate = null;
        this.templateVariables = [];
        this.messageForm.setControl('variables', this.fb.group({}));
      }
    });

    // Watch for send mode changes
    this.messageForm.get('sendMode')?.valueChanges.subscribe(mode => {
      this.sendMode = mode;
      this.updateFormValidators();
    });

    // Watch for sendToAll changes
    this.messageForm.get('sendToAll')?.valueChanges.subscribe(sendToAll => {
      this.sendToAll = sendToAll;
      if (sendToAll) {
        this.selectedUserIds = [];
        this.messageForm.patchValue({ recipientUserIds: [] });
      }
      this.updateFormValidators();
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadMessages();
    this.loadTemplates();
    this.loadUsers();
  }

  updateFormValidators(): void {
    const recipientPhoneControl = this.messageForm.get('recipientPhone');
    const recipientUserIdsControl = this.messageForm.get('recipientUserIds');
    const sendToAllControl = this.messageForm.get('sendToAll');

    if (this.sendMode === 'individual') {
      recipientPhoneControl?.setValidators([Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/)]);
      recipientUserIdsControl?.clearValidators();
      sendToAllControl?.clearValidators();
    } else {
      recipientPhoneControl?.clearValidators();
      if (this.sendToAll) {
        recipientUserIdsControl?.clearValidators();
      } else {
        recipientUserIdsControl?.setValidators([Validators.required, Validators.minLength(1)]);
      }
    }

    recipientPhoneControl?.updateValueAndValidity();
    recipientUserIdsControl?.updateValueAndValidity();
  }

  loadMessages(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.whatsappMessagesService.getMessages({
      status: this.selectedStatus === 'all' ? undefined : this.selectedStatus,
      messageType: this.selectedType === 'all' ? undefined : this.selectedType,
      search: this.searchTerm || undefined,
      page: this.currentPage,
      limit: this.itemsPerPage
    }).subscribe({
      next: (response) => {
        this.messages = response.messages;
        this.filteredMessages = [...this.messages];
        this.totalMessages = response.total;
        this.calculatePagination();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading messages:', error);
        this.errorMessage = this.getTranslation('errorLoadingMessages') || 'Error loading messages';
        this.isLoading = false;
      }
    });
  }

  loadTemplates(): void {
    this.whatsappTemplatesService.getTemplates({ status: 'active' }).subscribe({
      next: (response) => {
        this.templates = response.templates;
      },
      error: (error) => {
        console.error('Error loading templates:', error);
      }
    });
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users.filter(u => u.isActive && (u.phone1 || u.phone2));
      },
      error: (error) => {
        console.error('Error loading users:', error);
      }
    });
  }

  onTemplateChange(templateId: number): void {
    const template = this.templates.find(t => t.id === templateId);
    if (template) {
      this.selectedTemplate = template;
      this.templateVariables = template.variables || [];
      
      // Create form controls for each variable
      const variablesGroup: any = {};
      this.templateVariables.forEach(variable => {
        variablesGroup[variable] = [''];
      });
      this.messageForm.setControl('variables', this.fb.group(variablesGroup));
    }
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.totalMessages / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadMessages();
  }

  filterMessages(): void {
    this.currentPage = 1;
    this.loadMessages();
  }

  toggleUserSelection(userId: number): void {
    const index = this.selectedUserIds.indexOf(userId);
    if (index > -1) {
      this.selectedUserIds.splice(index, 1);
    } else {
      this.selectedUserIds.push(userId);
    }
    this.messageForm.patchValue({ recipientUserIds: this.selectedUserIds });
  }

  onSendToAllChange(): void {
    if (this.sendToAll) {
      this.selectedUserIds = [];
      this.messageForm.patchValue({ recipientUserIds: [] });
    }
  }

  sendMessage(): void {
    if (this.messageForm.valid) {
      this.isLoading = true;
      const formValue = this.messageForm.value;
      
      const request: any = {
        messageType: formValue.messageType,
        sendToAll: formValue.sendToAll || false
      };

      if (formValue.messageType === 'template' && formValue.templateId) {
        request.templateId = parseInt(formValue.templateId);
        request.variables = formValue.variables || {};
      } else if (formValue.messageType === 'text' && formValue.messageContent) {
        request.messageContent = formValue.messageContent;
      }

      if (this.sendMode === 'individual') {
        request.recipientPhone = formValue.recipientPhone;
      } else if (this.sendMode === 'bulk') {
        if (formValue.sendToAll) {
          request.sendToAll = true;
        } else {
          request.recipientUserIds = formValue.recipientUserIds || [];
        }
      }

      this.whatsappMessagesService.sendMessages(request).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.resetForm();
          this.showAddForm = false;
          this.loadMessages();
          alert(response.message || 'Messages sent successfully');
        },
        error: (error) => {
          console.error('Error sending messages:', error);
          this.isLoading = false;
          this.errorMessage = error.error?.error || this.getTranslation('errorSendingMessages') || 'Error sending messages';
        }
      });
    }
  }

  resetForm(): void {
    this.messageForm.reset({
      sendMode: 'individual',
      messageType: 'template',
      sendToAll: false
    });
    this.selectedTemplate = null;
    this.templateVariables = [];
    this.selectedUserIds = [];
    this.sendToAll = false;
    this.messageForm.setControl('variables', this.fb.group({}));
  }

  resendMessage(message: WhatsAppMessage): void {
    if (!message.id) return;
    
    this.isLoading = true;
    const request: any = {
      messageType: message.messageType,
      messageContent: message.messageContent
    };

    if (message.templateId) {
      request.templateId = message.templateId;
      request.variables = message.variables || {};
    }

    if (message.recipientPhone) {
      request.recipientPhone = message.recipientPhone;
    } else if (message.recipientUserId) {
      request.recipientUserIds = [message.recipientUserId];
    }

    this.whatsappMessagesService.sendMessages(request).subscribe({
      next: () => {
        this.isLoading = false;
        this.loadMessages();
      },
      error: (error) => {
        console.error('Error resending message:', error);
        this.isLoading = false;
        this.errorMessage = error.error?.error || 'Error resending message';
      }
    });
  }

  deleteMessage(message: WhatsAppMessage): void {
    if (!message.id) return;
    
    this.itemToDelete = message;
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: this.getTranslation('confirmDeleteMessage') || `Are you sure you want to delete this message?`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel'
    };
    this.showConfirmDialog = true;
  }

  onConfirmDelete(): void {
    if (this.itemToDelete?.id) {
      this.isLoading = true;
      this.whatsappMessagesService.deleteMessage(this.itemToDelete.id).subscribe({
        next: () => {
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
          this.loadMessages();
        },
        error: (error) => {
          console.error('Error deleting message:', error);
          this.isLoading = false;
          this.errorMessage = error.error?.error || 'Error deleting message';
          this.showConfirmDialog = false;
          this.itemToDelete = null;
        }
      });
    }
  }

  onCancelDelete(): void {
    this.showConfirmDialog = false;
    this.itemToDelete = null;
  }

  getStatusCount(status: string): number {
    return this.messages.filter(m => m.status === status).length;
  }

  getTypeDisplayName(type: string): string {
    const types: { [key: string]: string } = {
      text: this.getTranslation('text'),
      template: this.getTranslation('template'),
      image: this.getTranslation('image'),
      document: this.getTranslation('document')
    };
    return types[type] || type;
  }

  getStatusDisplayName(status: string): string {
    const statuses: { [key: string]: string } = {
      pending: this.getTranslation('pending'),
      sent: this.getTranslation('sent'),
      delivered: this.getTranslation('delivered'),
      failed: this.getTranslation('failed')
    };
    return statuses[status] || status;
  }

  getTypeIcon(type: string): string {
    const icons: { [key: string]: string } = {
      text: 'fa-comment',
      template: 'fa-file-code',
      image: 'fa-image',
      document: 'fa-file-alt'
    };
    return icons[type] || 'fa-comment';
  }

  getStatusIcon(status: string): string {
    const icons: { [key: string]: string } = {
      pending: 'fa-clock',
      sent: 'fa-check',
      delivered: 'fa-check-double',
      failed: 'fa-times'
    };
    return icons[status] || 'fa-clock';
  }

  getCategoryDisplayName(category: string): string {
    const categoryMap: { [key: string]: string } = {
      'system-updates': 'systemUpdates',
      'security-alerts': 'securityAlerts',
      'new-messages': 'newMessages',
      'reminders': 'reminders',
      'marketing': 'marketing'
    };
    
    const translationKey = categoryMap[category] || category;
    return this.getTranslation(translationKey) || category;
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
