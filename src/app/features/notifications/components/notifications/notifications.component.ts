import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { NotificationManagementService, Notification } from '../../../../core/services/notification.service';
import { LocationService } from '../../../../core/services/location.service';
import { AuthService } from '../../../../core/services/auth.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  notifications: Notification[] = [];
  filteredNotifications: Notification[] = [];
  searchTerm: string = '';
  selectedType: string = 'all';
  selectedStatus: string = 'all';
  showAddForm = false;
  editingNotification: Notification | null = null;
  notificationForm: FormGroup;
  isLoading = false;
  errorMessage: string = '';
  showConfirmDialog = false;
  confirmDialogData: any = {};
  itemToDelete: Notification | null = null;

  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;
  totalNotifications: number = 0;

  // Three connected selection properties
  selectedSubsite: any | null = null;
  selectedSection: any | null = null;
  selectedSpecialDivision: any | null = null;

  // Available options for selection
  availableSubsites: any[] = [];
  availableSections: any[] = [];
  availableSpecialDivisions: any[] = [];

  // Dropdown visibility flags
  showSubsiteDropdown = false;
  showSectionDropdown = false;
  showSpecialDivisionDropdown = false;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private notificationService: NotificationManagementService,
    private locationService: LocationService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.notificationForm = this.fb.group({
      title: ['', Validators.required],
      type: ['normal', Validators.required], // Default to 'normal'
      message: ['', Validators.required],
      category: ['system-updates', Validators.required], // Default to 'system-updates'
      priority: ['medium', Validators.required],
      schedulingDate: [''],
      schedulingTime: [''],
      sendToAll: [false],
      content: ['']
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadNotifications();
    this.loadAvailableOptions(); // Load options for selection cards
    this.calculatePagination();
    
    // Close dropdowns when clicking outside - use a more reliable approach
    setTimeout(() => {
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const clickedCard = target.closest('.selection-card');
        const clickedDropdown = target.closest('.dropdown-menu');
        
        // Only close if clicking completely outside any selection card
        if (!clickedCard && !clickedDropdown) {
          this.closeAllDropdowns();
        }
      }, true); // Use capture phase to catch events early
    }, 200);
  }

  loadNotifications(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    const filters: any = {
      limit: this.itemsPerPage,
      page: this.currentPage
    };

    if (this.selectedStatus !== 'all') {
      filters.status = this.selectedStatus;
    }
    if (this.selectedType !== 'all') {
      filters.type = this.selectedType;
    }
    if (this.searchTerm) {
      filters.search = this.searchTerm;
    }
    
    // Add userId filter to show only user-specific notifications
    // TODO: Allow admins to see all notifications if needed
    const currentUser = this.authService?.getCurrentUser();
    if (currentUser?.id) {
      filters.userId = currentUser.id;
    }

    this.notificationService.getNotifications(filters).subscribe({
      next: (response) => {
        this.notifications = response.notifications;
        this.filteredNotifications = response.notifications;
        this.totalNotifications = response.total;
        this.calculatePagination();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading notifications:', error);
        this.errorMessage = this.getTranslation('errorLoadingNotifications') || 'Error loading notifications';
        this.isLoading = false;
      }
    });
  }

  loadAvailableOptions(): void {
    // Load subsites
    this.locationService.getSubsites().subscribe({
      next: (subsites) => {
        this.availableSubsites = subsites;
      },
      error: (error) => {
        console.error('Error loading subsites:', error);
      }
    });
  }

  openSubsiteSelector(): void {
    console.log('openSubsiteSelector called', 'Current state:', this.showSubsiteDropdown);
    this.showSubsiteDropdown = !this.showSubsiteDropdown;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
    
    if (this.availableSubsites.length === 0) {
      this.loadAvailableOptions();
    }
    console.log('After toggle:', this.showSubsiteDropdown, 'Available subsites:', this.availableSubsites.length);
  }

  openSectionSelector(): void {
    if (!this.selectedSubsite) return;
    
    this.showSectionDropdown = !this.showSectionDropdown;
    this.showSubsiteDropdown = false;
    this.showSpecialDivisionDropdown = false;
    
    // Always reload sections when opening dropdown to ensure fresh data
    this.locationService.getSections().subscribe({
      next: (sections) => {
        // Filter sections by location matching the selected subsite name
        // Show sections where location matches subsite name, or show all if no match found
        const filtered = sections.filter(s => s.location === this.selectedSubsite?.name);
        this.availableSections = filtered.length > 0 ? filtered : sections;
        
        console.log('Selected subsite:', this.selectedSubsite?.name);
        console.log('All sections:', sections.length);
        console.log('Filtered sections:', this.availableSections.length);
      },
      error: (error) => {
        console.error('Error loading sections:', error);
        this.availableSections = [];
      }
    });
  }

  openSpecialDivisionSelector(): void {
    if (!this.selectedSection) return;
    
    this.showSpecialDivisionDropdown = !this.showSpecialDivisionDropdown;
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    
    // Always reload special divisions when opening dropdown to ensure fresh data
    this.locationService.getSpecialDivisions().subscribe({
      next: (divisions) => {
        // Filter divisions where location matches the selected section location
        // Also show all divisions if no match found (for flexibility)
        const filtered = divisions.filter(d => d.location === this.selectedSection?.location);
        this.availableSpecialDivisions = filtered.length > 0 ? filtered : divisions;
        console.log('Selected section location:', this.selectedSection?.location);
        console.log('All divisions:', divisions);
        console.log('Filtered divisions:', this.availableSpecialDivisions);
      },
      error: (error) => {
        console.error('Error loading special divisions:', error);
        this.availableSpecialDivisions = [];
      }
    });
  }

  onSubsiteSelected(subsite: any): void {
    this.selectedSubsite = subsite;
    this.selectedSection = null;
    this.selectedSpecialDivision = null;
    this.availableSections = [];
    this.availableSpecialDivisions = [];
    this.showSubsiteDropdown = false;
  }

  onSectionSelected(section: any): void {
    this.selectedSection = section;
    this.selectedSpecialDivision = null;
    this.availableSpecialDivisions = [];
    this.showSectionDropdown = false;
  }

  onSpecialDivisionSelected(specialDivision: any): void {
    this.selectedSpecialDivision = specialDivision;
    this.showSpecialDivisionDropdown = false;
  }

  onSendToAllChange(): void {
    const sendToAll = this.notificationForm.get('sendToAll')?.value;
    if (sendToAll) {
      // Clear location selections when "Send to All" is checked
      this.selectedSubsite = null;
      this.selectedSection = null;
      this.selectedSpecialDivision = null;
    }
  }

  closeAllDropdowns(): void {
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
  }

  filterNotifications(): void {
    this.currentPage = 1;
    this.loadNotifications();
  }

  addNotification(): void {
    if (this.notificationForm.valid) {
      this.isLoading = true;
      const sendToAll = Boolean(this.notificationForm.value.sendToAll);
      
      const notificationData: Partial<Notification> = {
        title: this.notificationForm.value.title,
        type: this.notificationForm.value.type,
        message: this.notificationForm.value.message,
        category: this.notificationForm.value.category,
        priority: this.notificationForm.value.priority,
        content: this.notificationForm.value.content || '',
        sendToAll: sendToAll,
        scheduledDate: this.notificationForm.value.schedulingDate ? new Date(this.notificationForm.value.schedulingDate) : undefined,
        scheduledTime: this.notificationForm.value.schedulingTime || undefined,
        // Only include location IDs if sendToAll is false, otherwise set to null
        subsiteId: sendToAll ? null : (this.selectedSubsite?.id ?? null),
        sectionId: sendToAll ? null : (this.selectedSection?.id ?? null),
        specialDivisionId: sendToAll ? null : (this.selectedSpecialDivision?.id ?? null)
      };

      if (this.editingNotification?.id) {
        // Update existing notification
        this.notificationService.updateNotification(this.editingNotification.id, notificationData).subscribe({
          next: () => {
            this.isLoading = false;
            this.resetForm();
            this.loadNotifications();
          },
          error: (error) => {
            console.error('Error updating notification:', error);
            this.isLoading = false;
            this.errorMessage = this.getTranslation('errorUpdatingNotification') || 'Error updating notification';
          }
        });
      } else {
        // Create new notification
        notificationData.status = 'draft';
        this.notificationService.createNotification(notificationData as Omit<Notification, 'id' | 'createdAt' | 'updatedAt'>).subscribe({
          next: () => {
            this.isLoading = false;
            this.resetForm();
            this.loadNotifications();
          },
          error: (error) => {
            console.error('Error creating notification:', error);
            this.isLoading = false;
            this.errorMessage = this.getTranslation('errorCreatingNotification') || 'Error creating notification';
          }
        });
      }
    }
  }

  resetForm(): void {
    this.notificationForm.reset({
      type: 'normal',
      category: 'system-updates',
      priority: 'medium',
      sendToAll: false
    });
    this.showAddForm = false;
    this.editingNotification = null;
    this.selectedSubsite = null;
    this.selectedSection = null;
    this.selectedSpecialDivision = null;
  }


  markAsRead(notification: Notification): void {
    // In the new system, notifications don't have read/unread status
    // They have draft/scheduled/sent status instead
    console.log('Notification clicked:', notification.title);
  }

  markAllAsRead(): void {
    // In the new system, this method is not applicable
    // Notifications are either draft, scheduled, or sent
    console.log('Mark all as read - not applicable in new system');
  }

  deleteNotification(notification: Notification): void {
    if (!notification.id) return;
    
    this.itemToDelete = notification;
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete'),
      message: this.getTranslation('confirmDeleteMessage') || `Are you sure you want to delete "${notification.title}"?`,
      confirmText: this.getTranslation('delete'),
      cancelText: this.getTranslation('cancel')
    };
    this.showConfirmDialog = true;
  }

  onConfirmDelete(): void {
    if (this.itemToDelete?.id) {
      this.isLoading = true;
      this.notificationService.deleteNotification(this.itemToDelete.id).subscribe({
        next: () => {
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
          this.loadNotifications();
        },
        error: (error) => {
          console.error('Error deleting notification:', error);
          this.isLoading = false;
          this.errorMessage = this.getTranslation('errorDeletingNotification') || 'Error deleting notification';
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

  getUnreadCount(): number {
    // In the new system, count draft notifications instead
    return this.notifications.filter(n => n.status === 'draft').length;
  }

  getTypeDisplayName(type: string): string {
    const types = {
      info: this.getTranslation('info'),
      success: this.getTranslation('success'),
      warning: this.getTranslation('warning'),
      error: this.getTranslation('error')
    };
    return types[type as keyof typeof types] || type;
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
      'system': 'system',
      'messages': 'messages',
      'security': 'security'
    };
    
    const translationKey = categoryMap[category] || category;
    return this.getTranslation(translationKey) || category;
  }

  getPriorityDisplayName(priority: string): string {
    const priorities = {
      low: this.getTranslation('low'),
      medium: this.getTranslation('medium'),
      high: this.getTranslation('high')
    };
    return priorities[priority as keyof typeof priorities] || priority;
  }

  getStatusDisplayName(status: string): string {
    const statuses = {
      draft: this.getTranslation('draft'),
      scheduled: this.getTranslation('scheduled'),
      sent: this.getTranslation('sent')
    };
    return statuses[status as keyof typeof statuses] || status;
  }

  getTypeIcon(type: string): string {
    const icons = {
      info: 'fa-info-circle',
      success: 'fa-check-circle',
      warning: 'fa-exclamation-triangle',
      error: 'fa-times-circle'
    };
    return icons[type as keyof typeof icons] || 'fa-bell';
  }

  // Use centralized translation service
  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.totalNotifications / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadNotifications();
  }

  editNotification(notification: Notification): void {
    this.editingNotification = notification;
    
    // Populate form with notification data
    this.notificationForm.patchValue({
      title: notification.title,
      type: notification.type,
      message: notification.message,
      category: notification.category,
      priority: notification.priority,
      schedulingDate: notification.scheduledDate ? new Date(notification.scheduledDate).toISOString().split('T')[0] : '',
      schedulingTime: notification.scheduledTime || '',
      sendToAll: Boolean(notification.sendToAll),
      content: notification.content || ''
    });

    // Set selected locations only if sendToAll is false
    if (!notification.sendToAll && notification.subsiteId) {
      this.locationService.getSubsites().subscribe({
        next: (subsites) => {
          this.selectedSubsite = subsites.find(s => s.id === notification.subsiteId);
          if (this.selectedSubsite && notification.sectionId) {
            this.locationService.getSections().subscribe({
              next: (sections) => {
                this.selectedSection = sections.find(s => s.id === notification.sectionId);
                if (this.selectedSection && notification.specialDivisionId) {
                  this.locationService.getSpecialDivisions().subscribe({
                    next: (divisions) => {
                      this.selectedSpecialDivision = divisions.find(d => d.id === notification.specialDivisionId);
                    }
                  });
                }
              }
            });
          }
        }
      });
    } else {
      // Clear location selections if sendToAll is true
      this.selectedSubsite = null;
      this.selectedSection = null;
      this.selectedSpecialDivision = null;
    }

    this.showAddForm = true;
  }

  sendNotification(notification: Notification): void {
    if (!notification.id) return;
    
    this.isLoading = true;
    this.notificationService.sendNotification(notification.id).subscribe({
      next: () => {
        this.isLoading = false;
        this.loadNotifications();
      },
      error: (error) => {
        console.error('Error sending notification:', error);
        this.isLoading = false;
        this.errorMessage = this.getTranslation('errorSendingNotification') || 'Error sending notification';
      }
    });
  }

  duplicateNotification(notification: Notification): void {
    if (!notification.id) return;
    
    const duplicatedNotification: Omit<Notification, 'id' | 'createdAt' | 'updatedAt'> = {
      title: `${notification.title} (Copy)`,
      type: notification.type,
      message: notification.message,
      category: notification.category,
      priority: notification.priority,
      status: 'draft',
      content: notification.content || '',
      sendToAll: notification.sendToAll,
      subsiteId: notification.subsiteId,
      sectionId: notification.sectionId,
      specialDivisionId: notification.specialDivisionId,
      scheduledDate: notification.scheduledDate,
      scheduledTime: notification.scheduledTime
    };

    this.isLoading = true;
    this.notificationService.createNotification(duplicatedNotification).subscribe({
      next: () => {
        this.isLoading = false;
        this.loadNotifications();
      },
      error: (error) => {
        console.error('Error duplicating notification:', error);
        this.isLoading = false;
        this.errorMessage = this.getTranslation('errorDuplicatingNotification') || 'Error duplicating notification';
      }
    });
  }
}
