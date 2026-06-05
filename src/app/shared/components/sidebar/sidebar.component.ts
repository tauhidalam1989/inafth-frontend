import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { TranslationService } from '../../../core/services/translation.service';
import { AuthService, User } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  isExpanded?: boolean;
  badge?: string;
  badgeClass?: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Output() sidebarToggle = new EventEmitter<boolean>();
  @Output() closeMobileMenu = new EventEmitter<void>();
  
  currentLanguage: 'ar' | 'en' = 'ar';
  isCollapsed = false;
  menuItems: MenuItem[] = [];
  showLogoutConfirm: boolean = false;
  currentUser: User | null = null;
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
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Load current user
    this.loadCurrentUser();
    
    // Subscribe to user changes
    const userSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.cdr.detectChanges();
    });
    this.subscriptions.push(userSub);
    
    // Subscribe to language changes
    const langSub = this.languageService.currentLanguage$.subscribe((lang: 'ar' | 'en') => {
      console.log('Sidebar: Language changed to:', lang);
      console.log('Sidebar: Direction will be:', lang === 'ar' ? 'RTL' : 'LTR');
      this.currentLanguage = lang;
      this.initializeMenuItems(); // Re-initialize menu items with new language
      this.cdr.detectChanges(); // Force change detection
      
      // Debug: Check if classes are applied
      setTimeout(() => {
        const sidebarElement = document.querySelector('.sidebar');
        if (sidebarElement) {
          console.log('Sidebar element found:', sidebarElement);
          console.log('Sidebar classes:', sidebarElement.className);
          console.log('Sidebar has rtl class:', sidebarElement.classList.contains('rtl'));
          console.log('Sidebar has ltr class:', sidebarElement.classList.contains('ltr'));
          console.log('Sidebar dir attribute:', sidebarElement.getAttribute('dir'));
          
          const computedStyle = window.getComputedStyle(sidebarElement);
          console.log('Sidebar left position:', computedStyle.left);
          console.log('Sidebar right position:', computedStyle.right);
          console.log('Sidebar position:', computedStyle.position);
        } else {
          console.log('Sidebar element not found!');
        }
      }, 100);
    });

    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    console.log('Sidebar: Initialized with language:', this.currentLanguage);

    // Load saved sidebar state
    this.loadSidebarState();

    this.initializeMenuItems();
    
    // Debug: Log current path and menu items
    console.log('Current path:', window.location.pathname);
    console.log('Menu items:', this.menuItems);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  loadCurrentUser(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  getUserDisplayName(): string {
    return this.currentUser?.username || this.getTranslation('adminUser') || 'Admin User';
  }

  getUserRole(): string {
    if (!this.currentUser) {
      return this.getTranslation('systemAdministrator') || 'System Administrator';
    }
    
    const roleMap: { [key: string]: { ar: string; en: string } } = {
      'super-user': { ar: 'مستخدم فائق', en: 'Super User' },
      'admin-user': { ar: 'مدير', en: 'Admin' },
      'regular-user': { ar: 'مستخدم', en: 'User' }
    };
    
    const role = roleMap[this.currentUser.userType] || roleMap['regular-user'];
    return this.currentLanguage === 'ar' ? role.ar : role.en;
  }

  loadSidebarState(): void {
    const savedState = localStorage.getItem('sidebarCollapsed');
    this.isCollapsed = savedState === 'true';
  }

  saveSidebarState(): void {
    localStorage.setItem('sidebarCollapsed', this.isCollapsed.toString());
  }

  initializeMenuItems(): void {
    this.menuItems = [
      {
        id: 'dashboard',
        label: this.getTranslation('dashboard'),
        icon: 'fas fa-tachometer-alt',
        route: '/dashboard'
      },
      {
        id: 'locations',
        label: this.getTranslation('locations'),
        icon: 'fas fa-map-marker-alt',
        children: [
          {
            id: 'locations',
            label: this.getTranslation('locations'),
            icon: 'fas fa-share-alt',
            route: '/locations'
          },
          {
            id: 'sections',
            label: this.getTranslation('sections'),
            icon: 'fas fa-th-large',
            route: '/locations/sections'
          },
         
        ]
      },
      {
        id: 'advertisements',
        label: this.getTranslation('advertisements'),
        icon: 'fas fa-bullhorn',
        children: [
          // {
          //   id: 'advertising-banner',
          //   label: this.getTranslation('advertisingBanner'),
          //   icon: 'fas fa-image',
          //   route: '/advertisements/banner'
          // },
          {
            id: 'manage-advertisements',
            label: this.getTranslation('manageAdvertisements') || 'Manage Advertisements',
            icon: 'fas fa-cog',
            route: '/advertisements/advertisements'
          },
          // {
          //   id: 'view-advertisements',
          //   label: this.getTranslation('viewAdvertisements'),
          //   icon: 'fas fa-eye',
          //   route: '/advertisements'
          // }
        ]
      },
      // {
      //   id: 'display-ads',
      //   label: this.getTranslation('displayAds'),
      //   icon: 'fas fa-broadcast-tower',
      //   route: '/display-ads'
      // },
      // {
      //   id: 'notifications',
      //   label: this.getTranslation('notifications'),
      //   icon: 'fas fa-bell',
      //   children: [
      //     {
      //       id: 'notification-dashboard',
      //       label: this.getTranslation('notificationDashboard'),
      //       icon: 'fas fa-chart-line',
      //       route: '/notifications/dashboard'
      //     },
      //     {
      //       id: 'notifications-management',
      //       label: this.getTranslation('notificationManagement'),
      //       icon: 'fas fa-list',
      //       route: '/notifications/notifications'
      //     },
      //     {
      //       id: 'notification-settings',
      //       label: this.getTranslation('notificationSettings'),
      //       icon: 'fas fa-cog',
      //       route: '/notifications/notification-settings'
      //     }
      //   ]
      // },
      // {
      //   id: 'e-notices-evaluation',
      //   label: this.getTranslation('eNoticesAndEvaluation'),
      //   icon: 'fas fa-clipboard-check',
      //   route: '/e-notices-evaluation',
      //   badge: 'NEW',
      //   badgeClass: 'badge-warning'
      // },
      // {
      //   id: 'whatsapp',
      //   label: this.getTranslation('whatsapp'),
      //   icon: 'fab fa-whatsapp',
      //   children: [
      //     {
      //       id: 'whatsapp-messages',
      //       label: this.getTranslation('whatsappMessages'),
      //       icon: 'fas fa-comment',
      //       route: '/whatsapp'
      //     },
      //     {
      //       id: 'whatsapp-templates',
      //       label: this.getTranslation('whatsappTemplates'),
      //       icon: 'fas fa-file-code',
      //       route: '/whatsapp/whatsapp-templates'
      //     }
      //   ]
      // },
      {
        id: 'screens',
        label: this.getTranslation('screens'),
        icon: 'fas fa-tv',
        children: [
          {
            id: 'screen-dashboard',
            label: this.getTranslation('screenDashboard') || 'Screen Dashboard',
            icon: 'fas fa-tachometer-alt',
            route: '/screens/dashboard'
          },
          {
            id: 'screen-create',
            label: this.getTranslation('createScreen') || 'Create Screen',
            icon: 'fas fa-plus-circle',
            route: '/screens/create'
          },
          {
            id: 'screen-list',
            label: this.getTranslation('screenList') || 'Screen List',
            icon: 'fas fa-list',
            route: '/screens/list'
          },
          {
            id: 'screen-grouping',
            label: this.getTranslation('screenGrouping') || 'Screen Grouping',
            icon: 'fas fa-layer-group',
            route: '/screens/grouping'
          },
          {
            id: 'screen-monitor',
            label: this.getTranslation('screenMonitor') || 'Screen Monitor',
            icon: 'fas fa-desktop',
            route: '/screens/monitor'
          },
          {
            id: 'screen-playback',
            label: this.getTranslation('videoPlaybackControl') || 'Video Playback Control',
            icon: 'fas fa-play-circle',
            route: '/screens/playback'
          }
        ]
      },
      {
        id: 'users',
        label: this.getTranslation('users'),
        icon: 'fas fa-users',
        children: [
          {
            id: 'users-permissions',
            label: this.getTranslation('usersAndPermissions'),
            icon: 'fas fa-user-shield',
            route: '/users'
          }
        ]
      },
      {
        id: 'system',
        label: this.getTranslation('system'),
        icon: 'fas fa-cogs',
        children: [
          {
            id: 'system-settings',
            label: this.getTranslation('systemSettings'),
            icon: 'fas fa-wrench',
            route: '/system/settings'
          },
          {
            id: 'system-logs',
            label: this.getTranslation('systemLogs'),
            icon: 'fas fa-file-alt',
            route: '/system/logs'
          }
        ]
      }
    ];
  }

  toggleMenu(menuItem: MenuItem): void {
    if (menuItem.children && menuItem.children.length > 0) {
      menuItem.isExpanded = !menuItem.isExpanded;
      console.log('Toggling menu:', menuItem.id, 'Expanded:', menuItem.isExpanded);
    }
  }

  toggleSidebar(event?: Event): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    
    // On mobile, toggle collapse state but don't save it (always show expanded when menu opens)
    if (window.innerWidth < 768) {
      // On mobile, just close the menu, don't toggle collapse state
      this.closeMobileMenu.emit();
      return;
    }
    
    // Desktop: toggle collapse state normally
    this.isCollapsed = !this.isCollapsed;
    // When collapsing, close all expanded submenus
    if (this.isCollapsed) {
      this.menuItems.forEach(item => (item.isExpanded = false));
    }
    this.saveSidebarState();
    this.sidebarToggle.emit(this.isCollapsed);
  }

  isMenuActive(menuItem: MenuItem): boolean {
    if (menuItem.route) {
      const currentPath = window.location.pathname;
      const isActive = currentPath === menuItem.route || currentPath.startsWith(menuItem.route + '/');
     // console.log(`Checking route ${menuItem.route} against ${currentPath}: ${isActive}`);
      return isActive;
    }
    if (menuItem.children) {
      return menuItem.children.some(child => this.isMenuActive(child));
    }
    return false;
  }

  hasActiveChild(menuItem: MenuItem): boolean {
    if (menuItem.children) {
      return menuItem.children.some(child => this.isMenuActive(child));
    }
    return false;
  }

  // Helper method to check if a route is exactly active
  isRouteExactlyActive(route: string): boolean {
    return window.location.pathname === route;
  }

  // Helper method to check if a route is partially active
  isRoutePartiallyActive(route: string): boolean {
    const currentPath = window.location.pathname;
    return currentPath === route || currentPath.startsWith(route + '/');
  }

  // Use centralized translation service
  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
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
    
    console.log('User logged out successfully from sidebar');
  }

  onLogoutCancelled(): void {
    this.showLogoutConfirm = false;
  }
}
