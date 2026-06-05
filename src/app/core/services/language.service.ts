import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LanguageData {
  currentLanguage: 'ar' | 'en';
  translations: {
    [key: string]: {
      ar: string;
      en: string;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<'ar' | 'en'>('ar');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: LanguageData['translations'] = {
    // Header translations
    'header.home': {
      ar: 'الصفحة الرئيسية',
      en: 'Home Page'
    },
    'header.subLocations': {
      ar: 'المواقع الفرعية',
      en: 'Sub-locations'
    },
    'header.sections': {
      ar: 'الأقسام',
      en: 'Sections'
    },
    'header.specialDivisions': {
      ar: 'التقسيمات الخاصة',
      en: 'Special Divisions'
    },
    'header.advertisingBanner': {
      ar: 'الشريط الاعلاني',
      en: 'Advertising Banner'
    },
    'header.advertisements': {
      ar: 'الإعلانات',
      en: 'Advertisements'
    },
    'header.viewAdvertisements': {
      ar: 'عرض الإعلانات',
      en: 'View Advertisements'
    },
    'header.notificationsEvaluation': {
      ar: 'الإشعارات والتقييم',
      en: 'Notifications and Evaluation'
    },
    'header.notifications': {
      ar: 'الإشعارات',
      en: 'Notifications'
    },
    'header.notificationSettings': {
      ar: 'إعدادات الإشعارات',
      en: 'Notification Settings'
    },
    'header.whatsappMessages': {
      ar: 'رسائل الواتس',
      en: 'WhatsApp Messages'
    },
    'header.whatsappTemplates': {
      ar: 'قوالب الواتس',
      en: 'WhatsApp Templates'
    },
    'header.usersPermissions': {
      ar: 'المستخدمين والصلاحيات',
      en: 'Users and Permissions'
    },
    'header.continue': {
      ar: 'واصل',
      en: 'Continue'
    },
    'header.evaluate': {
      ar: 'تقين',
      en: 'Evaluate'
    },
    'header.view': {
      ar: 'عرض',
      en: 'View'
    },
    'header.cancel': {
      ar: 'إلغاء',
      en: 'Cancel'
    },
    'header.noNews': {
      ar: 'لا توجد اخبار حاليا',
      en: 'No news currently'
    },
    // Dashboard metrics
    'dashboard.evaluationNotifications': {
      ar: 'إشعارات التقييم',
      en: 'Evaluation Notifications'
    },
    'dashboard.notifications': {
      ar: 'الإشعارات',
      en: 'Notifications'
    },
    'dashboard.subLocations': {
      ar: 'المواقع الفرعية',
      en: 'Sub-locations'
    },
    'dashboard.usersPermissions': {
      ar: 'المستخدمين والصلاحيات',
      en: 'Users and Permissions'
    },
    'dashboard.normalNews': {
      ar: 'أخبار عادية',
      en: 'Normal News'
    },
    'dashboard.advertisements': {
      ar: 'الإعلانات',
      en: 'Advertisements'
    }
  };

  constructor() {
    // Load saved language preference or default to Arabic
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const defaultLanguage: 'ar' | 'en' = savedLanguage === 'en' ? 'en' : 'ar';
    this.setLanguage(defaultLanguage);
  }

  getCurrentLanguage(): 'ar' | 'en' {
    return this.currentLanguageSubject.value;
  }

  getSavedLanguage(): 'ar' | 'en' {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return savedLanguage === 'en' ? 'en' : 'ar';
  }

  setLanguage(language: 'ar' | 'en'): void {
    console.log('LanguageService: Setting language to:', language);
    this.currentLanguageSubject.next(language);
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', language);
    // Set document direction
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    console.log('LanguageService: Setting document direction to:', direction);
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // Force a reflow to ensure changes are applied
    document.documentElement.style.display = 'none';
    document.documentElement.offsetHeight; // Trigger reflow
    document.documentElement.style.display = '';
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      return key;
    }
    return translation[this.getCurrentLanguage()];
  }

  toggleLanguage(): void {
    const currentLang = this.getCurrentLanguage();
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    this.setLanguage(newLang);
  }
}
