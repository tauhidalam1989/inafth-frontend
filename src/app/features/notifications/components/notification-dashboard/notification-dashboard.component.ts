import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';

interface NotificationStat {
  label: string;
  value: number;
  icon: string;
  color: string;
  change?: number;
  changeType?: 'increase' | 'decrease';
}

interface NotificationTypeStat {
  type: string;
  count: number;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-notification-dashboard',
  templateUrl: './notification-dashboard.component.html',
  styleUrls: ['./notification-dashboard.component.scss']
})
export class NotificationDashboardComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  
  // Statistics cards
  stats: NotificationStat[] = [];
  
  // Notification type statistics
  typeStats: NotificationTypeStat[] = [];
  
  // Recent notifications
  recentNotifications: any[] = [];
  
  // Chart data (for future implementation)
  chartData: any = null;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      this.loadStatistics();
    });

    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadStatistics();
  }

  loadStatistics(): void {
    // TODO: Replace with actual API calls
    // Mock data for now
    this.stats = [
      {
        label: this.getTranslation('totalNotifications'),
        value: 1245,
        icon: 'fas fa-bell',
        color: '#00695c',
        change: 12,
        changeType: 'increase'
      },
      {
        label: this.getTranslation('sentNotifications'),
        value: 1120,
        icon: 'fas fa-paper-plane',
        color: '#4caf50',
        change: 8,
        changeType: 'increase'
      },
      {
        label: this.getTranslation('scheduledNotifications'),
        value: 85,
        icon: 'fas fa-clock',
        color: '#ff9800',
        change: -5,
        changeType: 'decrease'
      },
      {
        label: this.getTranslation('draftNotifications'),
        value: 40,
        icon: 'fas fa-file-alt',
        color: '#9e9e9e',
        change: 2,
        changeType: 'increase'
      }
    ];

    this.typeStats = [
      {
        type: this.getTranslation('normal'),
        count: 450,
        percentage: 36,
        color: '#2196f3'
      },
      {
        type: this.getTranslation('urgent'),
        count: 320,
        percentage: 26,
        color: '#f44336'
      },
      {
        type: this.getTranslation('reminder'),
        count: 280,
        percentage: 22,
        color: '#ff9800'
      },
      {
        type: this.getTranslation('marketing'),
        count: 195,
        percentage: 16,
        color: '#9c27b0'
      }
    ];

    this.recentNotifications = [
      {
        id: 1,
        title: this.getTranslation('systemUpdate'),
        type: 'normal',
        status: 'sent',
        date: new Date(),
        recipients: 150
      },
      {
        id: 2,
        title: this.getTranslation('securityAlert'),
        type: 'urgent',
        status: 'sent',
        date: new Date(Date.now() - 3600000),
        recipients: 200
      },
      {
        id: 3,
        title: this.getTranslation('reminderNotification'),
        type: 'reminder',
        status: 'scheduled',
        date: new Date(Date.now() + 86400000),
        recipients: 100
      }
    ];
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}

