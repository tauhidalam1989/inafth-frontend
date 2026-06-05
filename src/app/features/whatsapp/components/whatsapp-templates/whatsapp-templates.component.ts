import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { WhatsAppTemplatesService, WhatsAppTemplate } from '../../../../core/services/whatsapp-templates.service';

@Component({
  selector: 'app-whatsapp-templates',
  templateUrl: './whatsapp-templates.component.html',
  styleUrls: ['./whatsapp-templates.component.scss']
})
export class WhatsappTemplatesComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  templates: WhatsAppTemplate[] = [];
  filteredTemplates: WhatsAppTemplate[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'all';
  selectedStatus: string = 'all';
  showAddForm = false;
  editingTemplate: WhatsAppTemplate | null = null;
  templateForm: FormGroup;
  isLoading = false;
  errorMessage: string = '';
  showConfirmDialog = false;
  confirmDialogData: any = {};
  itemToDelete: WhatsAppTemplate | null = null;
  detectedVariables: string[] = []; // Variables detected from content

  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;
  totalTemplates: number = 0;

  get paginatedTemplates(): WhatsAppTemplate[] {
    return this.filteredTemplates;
  }

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private whatsappTemplatesService: WhatsAppTemplatesService,
    private fb: FormBuilder
  ) {
    this.templateForm = this.fb.group({
      name: ['', Validators.required],
      category: ['system-updates', Validators.required],
      content: ['', Validators.required]
    });

    // Listen to content changes to extract variables in real-time
    this.templateForm.get('content')?.valueChanges.subscribe(content => {
      this.extractVariables(content);
    });
  }

  extractVariables(content: string): void {
    if (!content) {
      this.detectedVariables = [];
      return;
    }
    
    const variableRegex = /\{\{(\w+)\}\}/g;
    const variables: string[] = [];
    let match;
    while ((match = variableRegex.exec(content)) !== null) {
      if (!variables.includes(match[1])) {
        variables.push(match[1]);
      }
    }
    this.detectedVariables = variables;
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();

    this.loadTemplates();
  }

  loadTemplates(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.whatsappTemplatesService.getTemplates({
      category: this.selectedCategory === 'all' ? undefined : this.selectedCategory,
      status: this.selectedStatus === 'all' ? undefined : this.selectedStatus,
      search: this.searchTerm || undefined,
      page: this.currentPage,
      limit: this.itemsPerPage
    }).subscribe({
      next: (response) => {
        this.templates = response.templates;
        this.filteredTemplates = [...this.templates];
        this.totalTemplates = response.total;
        this.calculatePagination();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading templates:', error);
        this.errorMessage = this.getTranslation('errorLoadingTemplates') || 'Error loading templates';
        this.isLoading = false;
      }
    });
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.totalTemplates / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadTemplates();
  }

  filterTemplates(): void {
    this.currentPage = 1;
    this.loadTemplates();
  }

  addTemplate(): void {
    if (this.templateForm.valid) {
      this.isLoading = true;
      const formValue = this.templateForm.value;
      
      const templateData: Omit<WhatsAppTemplate, 'id' | 'createdAt' | 'updatedAt'> = {
        name: formValue.name,
        category: formValue.category,
        content: formValue.content,
        variables: [], // Will be extracted by backend
        status: 'active',
        usageCount: 0
      };

      if (this.editingTemplate?.id) {
        // Update existing template
        this.whatsappTemplatesService.updateTemplate(this.editingTemplate.id, templateData).subscribe({
          next: () => {
            this.isLoading = false;
            this.resetForm();
            this.loadTemplates();
          },
          error: (error) => {
            console.error('Error updating template:', error);
            this.isLoading = false;
            this.errorMessage = this.getTranslation('errorUpdatingTemplate') || 'Error updating template';
          }
        });
      } else {
        // Create new template
        this.whatsappTemplatesService.createTemplate(templateData).subscribe({
          next: () => {
            this.isLoading = false;
            this.resetForm();
            this.loadTemplates();
          },
          error: (error) => {
            console.error('Error creating template:', error);
            this.isLoading = false;
            this.errorMessage = this.getTranslation('errorCreatingTemplate') || 'Error creating template';
          }
        });
      }
    }
  }

  resetForm(): void {
    this.templateForm.reset({
      category: 'system-updates'
    });
    this.showAddForm = false;
    this.editingTemplate = null;
    this.detectedVariables = [];
  }

  editTemplate(template: WhatsAppTemplate): void {
    this.editingTemplate = template;
    this.templateForm.patchValue({
      name: template.name,
      category: template.category,
      content: template.content
    });
    // Extract and display variables from existing template
    this.detectedVariables = template.variables || [];
    this.showAddForm = true;
  }

  toggleTemplateStatus(template: WhatsAppTemplate): void {
    if (!template.id) return;
    
    const newStatus = template.status === 'active' ? 'inactive' : 'active';
    this.isLoading = true;
    
    this.whatsappTemplatesService.updateTemplate(template.id, { status: newStatus }).subscribe({
      next: () => {
        this.isLoading = false;
        this.loadTemplates();
      },
      error: (error) => {
        console.error('Error updating template status:', error);
        this.isLoading = false;
        this.errorMessage = this.getTranslation('errorUpdatingTemplate') || 'Error updating template';
      }
    });
  }

  deleteTemplate(template: WhatsAppTemplate): void {
    if (!template.id) return;
    
    this.itemToDelete = template;
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: this.getTranslation('confirmDeleteMessage') || `Are you sure you want to delete "${template.name}"?`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel'
    };
    this.showConfirmDialog = true;
  }

  onConfirmDelete(): void {
    if (this.itemToDelete?.id) {
      this.isLoading = true;
      this.whatsappTemplatesService.deleteTemplate(this.itemToDelete.id).subscribe({
        next: () => {
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
          this.loadTemplates();
        },
        error: (error) => {
          console.error('Error deleting template:', error);
          this.isLoading = false;
          this.errorMessage = this.getTranslation('errorDeletingTemplate') || 'Error deleting template';
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

  getActiveTemplatesCount(): number {
    return this.templates.filter(t => t.status === 'active').length;
  }

  getInactiveTemplatesCount(): number {
    return this.templates.filter(t => t.status === 'inactive').length;
  }

  getCategoryBadgeClass(category: string): string {
    const badgeClasses: { [key: string]: string } = {
      'system-updates': 'bg-primary',
      'security-alerts': 'bg-danger',
      'new-messages': 'bg-info',
      'reminders': 'bg-warning',
      'marketing': 'bg-success',
      // Legacy categories for backward compatibility
      'general': 'bg-secondary',
      'welcome': 'bg-success',
      'system': 'bg-primary',
      'reminder': 'bg-warning'
    };
    return badgeClasses[category] || 'bg-secondary';
  }

  getCategoryDisplayName(category: string): string {
    const categoryMap: { [key: string]: string } = {
      'system-updates': 'systemUpdates',
      'security-alerts': 'securityAlerts',
      'new-messages': 'newMessages',
      'reminders': 'reminders',
      'marketing': 'marketing',
      // Legacy categories for backward compatibility
      'general': 'general',
      'welcome': 'welcome',
      'system': 'system',
      'reminder': 'reminder'
    };
    
    const translationKey = categoryMap[category] || category;
    return this.getTranslation(translationKey) || category;
  }

  // Use centralized translation service
  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
