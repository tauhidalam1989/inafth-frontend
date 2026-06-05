import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { TranslationService } from '../../core/services/translation.service';
import { ScreenService, Screen } from '../../core/services/screen.service';
import { AdvertisementsService, Advertisement } from '../../core/services/advertisements.service';
import { LocationService, Subsite, Section } from '../../core/services/location.service';
import { NotificationManagementService } from '../../core/services/notification.service';
import { UserService } from '../../core/services/user.service';

interface MetricCard {
  id: string;
  icon: string;
  value: number;
  color: string;
  route?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  showModal = false;
  isLoading = false;

  // Statistics
  metricCards: MetricCard[] = [];
  
  // Screens
  screens: Screen[] = [];
  totalScreens = 0;
  onlineScreens = 0;
  offlineScreens = 0;
  playingScreens = 0;
  recentScreens: Screen[] = [];

  // Advertisements
  advertisements: Advertisement[] = [];
  totalAdvertisements = 0;
  activeAdvertisements = 0;
  draftAdvertisements = 0;
  recentAdvertisements: Advertisement[] = [];

  // Locations
  locations: Subsite[] = [];
  totalLocations = 0;
  activeLocations = 0;
  sections: Section[] = [];
  totalSections = 0;

  // Notifications
  totalNotifications = 0;
  sentNotifications = 0;

  // Users
  totalUsers = 0;
  activeUsers = 0;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private screenService: ScreenService,
    private advertisementsService: AdvertisementsService,
    private locationService: LocationService,
    private notificationService: NotificationManagementService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    
    this.loadAllData();
  }

  loadAllData(): void {
    this.isLoading = true;
    
    // Load all data in parallel
    this.loadScreens();
    this.loadAdvertisements();
    this.loadLocations();
    this.loadSections();
    this.loadNotifications();
    this.loadUsers();
  }

  loadScreens(): void {
    this.screenService.getScreens().subscribe({
      next: (screens) => {
        this.screens = screens;
        this.totalScreens = screens.length;
        this.onlineScreens = screens.filter(s => s.status === 'online' || s.status === 'playing').length;
        this.offlineScreens = screens.filter(s => s.status === 'offline').length;
        this.playingScreens = screens.filter(s => s.status === 'playing').length;
        this.recentScreens = screens.slice(0, 5);
        this.updateMetricCards();
      },
      error: (error) => {
        console.error('Error loading screens:', error);
        this.updateMetricCards();
      }
    });
  }

  loadAdvertisements(): void {
    this.advertisementsService.getAdvertisements().subscribe({
      next: (response) => {
        this.advertisements = response.advertisements;
        this.totalAdvertisements = response.total;
        this.activeAdvertisements = this.advertisements.filter(a => a.status === 'active').length;
        this.draftAdvertisements = this.advertisements.filter(a => a.status === 'draft').length;
        this.recentAdvertisements = this.advertisements
          .sort((a, b) => {
            const dateA = a.updatedAt || a.createdAt || new Date(0);
            const dateB = b.updatedAt || b.createdAt || new Date(0);
            return dateB.getTime() - dateA.getTime();
          })
          .slice(0, 5);
        this.updateMetricCards();
      },
      error: (error) => {
        console.error('Error loading advertisements:', error);
        this.updateMetricCards();
      }
    });
  }

  loadLocations(): void {
    this.locationService.getSubsites().subscribe({
      next: (locations) => {
        this.locations = locations;
        this.totalLocations = locations.length;
        this.activeLocations = locations.filter(l => l.status === 'active').length;
        this.updateMetricCards();
      },
      error: (error) => {
        console.error('Error loading locations:', error);
        this.updateMetricCards();
      }
    });
  }

  loadSections(): void {
    this.locationService.getSections().subscribe({
      next: (sections) => {
        this.sections = sections;
        this.totalSections = sections.length;
        this.updateMetricCards();
      },
      error: (error) => {
        console.error('Error loading sections:', error);
        this.updateMetricCards();
      }
    });
  }

  loadNotifications(): void {
    this.notificationService.getNotifications({ limit: 100 }).subscribe({
      next: (response) => {
        this.totalNotifications = response.notifications.length;
        this.sentNotifications = response.notifications.filter(n => n.status === 'sent').length;
        this.updateMetricCards();
      },
      error: (error) => {
        console.error('Error loading notifications:', error);
        this.updateMetricCards();
      }
    });
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.totalUsers = users.length;
        this.activeUsers = users.filter(u => u.isActive).length;
        this.updateMetricCards();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading users:', error);
        this.updateMetricCards();
        this.isLoading = false;
      }
    });
  }

  updateMetricCards(): void {
    this.metricCards = [
      {
        id: 'dashboardTotalScreens',
        icon: 'fas fa-tv',
        value: this.totalScreens,
        color: '#00695c',
        route: '/screens/list'
      },
      {
        id: 'dashboardOnlineScreens',
        icon: 'fas fa-check-circle',
        value: this.onlineScreens,
        color: '#4caf50',
        route: '/screens/list'
      },
      {
        id: 'dashboardPlayingScreens',
        icon: 'fas fa-play-circle',
        value: this.playingScreens,
        color: '#2196f3',
        route: '/screens/playback'
      },
      {
        id: 'dashboardAdvertisements',
        icon: 'fas fa-bullhorn',
        value: this.totalAdvertisements,
        color: '#ff9ff3',
        route: '/advertisements/advertisements'
      },
      {
        id: 'dashboardActiveAdvertisements',
        icon: 'fas fa-check',
        value: this.activeAdvertisements,
        color: '#4caf50',
        route: '/advertisements/advertisements'
      },
      {
        id: 'dashboardLocations',
        icon: 'fas fa-map-marker-alt',
        value: this.totalLocations,
        color: '#45b7d1',
        route: '/locations'
      },
      {
        id: 'dashboardSections',
        icon: 'fas fa-th-large',
        value: this.totalSections,
        color: '#96ceb4',
        route: '/locations/sections'
      },
      {
        id: 'dashboardNotifications',
        icon: 'fas fa-bell',
        value: this.totalNotifications,
        color: '#4ecdc4',
        route: '/notifications/notifications'
      },
      {
        id: 'dashboardUsersPermissions',
        icon: 'fas fa-users',
        value: this.totalUsers,
        color: '#96ceb4',
        route: '/users'
      }
    ];
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }

  navigateTo(route?: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onViewClick(): void {
    this.router.navigate(['/notifications/notifications']);
    this.closeModal();
  }

  onCancelClick(): void {
    this.closeModal();
  }

  getScreenStatusClass(status: string): string {
    switch (status) {
      case 'online':
      case 'playing':
        return 'status-online';
      case 'offline':
        return 'status-offline';
      default:
        return 'status-unknown';
    }
  }

  getAdvertisementStatusClass(status: string): string {
    switch (status) {
      case 'active':
        return 'status-active';
      case 'draft':
        return 'status-draft';
      case 'inactive':
        return 'status-inactive';
      default:
        return 'status-unknown';
    }
  }

  formatDate(date: Date | undefined): string {
    if (!date) return '';
    return new Date(date).toLocaleDateString(this.currentLanguage === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}
