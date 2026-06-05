import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { TranslationService } from '../../../core/services/translation.service';
import { AuthService, User } from '../../../core/services/auth.service';
import { NotificationManagementService } from '../../../core/services/notification.service';
import { Subscription } from 'rxjs';

interface Notification {
  id: number;
  message: string;
  time: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() mobileMenuToggle = new EventEmitter<void>();
  
  currentLanguage: 'ar' | 'en' = 'ar';
  unreadCount: number = 0;
  recentNotifications: Notification[] = [];
  showLogoutConfirm: boolean = false;
  currentUser: User | null = null;
  welcomeMessage: string = '';
  
  private subscriptions: Subscription[] = [];
  
  logoutConfirmData = {
    title: '',
    message: '',
    confirmText: 'OK',
    cancelText: 'Cancel',
    type: 'warning' as 'warning' | 'danger' | 'info'
  };

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private authService: AuthService,
    private notificationService: NotificationManagementService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Load current user
    this.loadCurrentUser();
    
    // Subscribe to user changes
    const userSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.updateWelcomeMessage();
      this.cdr.detectChanges();
    });
    this.subscriptions.push(userSub);

    // Subscribe to language changes
    const langSub = this.languageService.currentLanguage$.subscribe((lang: 'ar' | 'en') => {
      console.log('Header: Language changed to:', lang);
      this.currentLanguage = lang;
      this.updateWelcomeMessage();
      this.loadNotifications(); // Reload notifications with new language
      this.cdr.detectChanges(); // Force change detection
    });
    this.subscriptions.push(langSub);

    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    console.log('Header: Initialized with language:', this.currentLanguage);

    this.loadNotifications();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  loadCurrentUser(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.updateWelcomeMessage();
  }

  updateWelcomeMessage(): void {
    if (this.currentUser) {
      if (this.currentLanguage === 'ar') {
        this.welcomeMessage = `مرحباً، ${this.currentUser.username}`;
      } else {
        this.welcomeMessage = `Welcome, ${this.currentUser.username}`;
      }
    } else {
      this.welcomeMessage = this.currentLanguage === 'ar' ? 'مرحباً' : 'Welcome';
    }
  }

  loadNotifications(): void {
    // Load real notifications from API - get sent notifications (most recent)
    // Only show notifications for the current user
    const filters: any = {
      status: 'sent',
      limit: 5,
      page: 1
    };
    
    // Add userId filter if user is logged in
    if (this.currentUser?.id) {
      filters.userId = this.currentUser.id;
    }
    
    this.notificationService.getNotifications(filters).subscribe({
      next: (response) => {
        // Show count of sent notifications (recent ones)
        // Since there's no 'unread' status, we'll show count of recent sent notifications
        this.unreadCount = response.notifications.length;
        
        // Map to header notification format
        this.recentNotifications = response.notifications.slice(0, 5).map(notification => {
          const timeAgo = this.getTimeAgo(notification.sentAt || notification.createdAt);
          return {
            id: notification.id || 0,
            message: notification.message || notification.title || '',
            time: timeAgo,
            type: this.mapNotificationType(notification.type || 'info')
          };
        });
        
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading notifications:', error);
        // Fallback to empty notifications on error
        this.unreadCount = 0;
        this.recentNotifications = [];
      }
    });
  }

  getTimeAgo(date: Date | undefined): string {
    if (!date) return '';
    
    const now = new Date();
    const notificationDate = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - notificationDate.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
      return this.currentLanguage === 'ar' ? 'الآن' : 'Just now';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return this.currentLanguage === 'ar' 
        ? `منذ ${minutes} دقيقة` 
        : `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return this.currentLanguage === 'ar' 
        ? `منذ ${hours} ساعة` 
        : `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return this.currentLanguage === 'ar' 
        ? `منذ ${days} يوم` 
        : `${days} day${days > 1 ? 's' : ''} ago`;
    }
  }

  mapNotificationType(type: string): 'info' | 'success' | 'warning' | 'error' {
    switch (type) {
      case 'success':
        return 'success';
      case 'warning':
      case 'urgent':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'info';
    }
  }

  toggleLanguage(): void {
    const newLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
    this.languageService.setLanguage(newLanguage);
  }

  toggleMobileMenu(event?: Event): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.mobileMenuToggle.emit();
  }

  logout(): void {
    // Show confirmation dialog
    this.logoutConfirmData = {
      title: this.currentLanguage === 'ar' ? 'تأكيد تسجيل الخروج' : 'Confirm Logout',
      message: this.getTranslation('confirmLogoutMessage'),
      confirmText: this.currentLanguage === 'ar' ? 'تأكيد' : 'OK',
      cancelText: this.currentLanguage === 'ar' ? 'إلغاء' : 'Cancel',
      type: 'warning'
    };
    this.showLogoutConfirm = true;
  }

  onLogoutConfirmed(): void {
    this.showLogoutConfirm = false;
    // Call the auth service logout method
    this.authService.logout();
    
    // Navigate to login page
    this.router.navigate(['/auth/login']);
    
    console.log('User logged out successfully');
  }

  onLogoutCancelled(): void {
    this.showLogoutConfirm = false;
  }

  // Use centralized translation service
  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
