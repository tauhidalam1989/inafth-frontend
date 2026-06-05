import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { NotificationService } from '../../../../core/services/notification.service';


@Component({
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.component.html',
  styleUrls: ['./notification-settings.component.scss']
})
export class NotificationSettingsComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  settingsForm: FormGroup;
  isLoading = false;
  saveMessage: string = '';
  saveMessageType: 'success' | 'error' = 'success';

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private notificationService: NotificationService,
    private fb: FormBuilder
  ) {
    this.settingsForm = this.fb.group({
      system_updates_email: [true],
      system_updates_sms: [false],
      system_updates_push: [true],
      system_updates_whatsapp: [false],
      security_alerts_email: [true],
      security_alerts_sms: [true],
      security_alerts_push: [true],
      security_alerts_whatsapp: [true],
      new_messages_email: [false],
      new_messages_sms: [false],
      new_messages_push: [true],
      new_messages_whatsapp: [false],
      reminders_email: [true],
      reminders_sms: [false],
      reminders_push: [true],
      reminders_whatsapp: [false],
      marketing_email: [false],
      marketing_sms: [false],
      marketing_push: [false],
      marketing_whatsapp: [false]
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();

    this.loadSettings();
  }

  loadSettings(): void {
    this.isLoading = true;
    this.notificationService.getNotificationSettings().subscribe({
      next: (settings) => {
        // Map API response to form values
        this.settingsForm.patchValue({
          system_updates_email: settings.systemUpdatesEmail,
          system_updates_sms: settings.systemUpdatesSms,
          system_updates_push: settings.systemUpdatesPush,
          system_updates_whatsapp: settings.systemUpdatesWhatsapp,
          security_alerts_email: settings.securityAlertsEmail,
          security_alerts_sms: settings.securityAlertsSms,
          security_alerts_push: settings.securityAlertsPush,
          security_alerts_whatsapp: settings.securityAlertsWhatsapp,
          new_messages_email: settings.newMessagesEmail,
          new_messages_sms: settings.newMessagesSms,
          new_messages_push: settings.newMessagesPush,
          new_messages_whatsapp: settings.newMessagesWhatsapp,
          reminders_email: settings.remindersEmail,
          reminders_sms: settings.remindersSms,
          reminders_push: settings.remindersPush,
          reminders_whatsapp: settings.remindersWhatsapp,
          marketing_email: settings.marketingEmail,
          marketing_sms: settings.marketingSms,
          marketing_push: settings.marketingPush,
          marketing_whatsapp: settings.marketingWhatsapp
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading notification settings:', error);
        this.isLoading = false;
        this.resetToDefaults();
      }
    });
  }

  saveSettings(): void {
    if (this.settingsForm.valid) {
      this.isLoading = true;
      this.saveMessage = '';
      
      // Map form values to API format
      const settings = {
        systemUpdatesEmail: this.settingsForm.value.system_updates_email,
        systemUpdatesSms: this.settingsForm.value.system_updates_sms,
        systemUpdatesPush: this.settingsForm.value.system_updates_push,
        systemUpdatesWhatsapp: this.settingsForm.value.system_updates_whatsapp,
        securityAlertsEmail: this.settingsForm.value.security_alerts_email,
        securityAlertsSms: this.settingsForm.value.security_alerts_sms,
        securityAlertsPush: this.settingsForm.value.security_alerts_push,
        securityAlertsWhatsapp: this.settingsForm.value.security_alerts_whatsapp,
        newMessagesEmail: this.settingsForm.value.new_messages_email,
        newMessagesSms: this.settingsForm.value.new_messages_sms,
        newMessagesPush: this.settingsForm.value.new_messages_push,
        newMessagesWhatsapp: this.settingsForm.value.new_messages_whatsapp,
        remindersEmail: this.settingsForm.value.reminders_email,
        remindersSms: this.settingsForm.value.reminders_sms,
        remindersPush: this.settingsForm.value.reminders_push,
        remindersWhatsapp: this.settingsForm.value.reminders_whatsapp,
        marketingEmail: this.settingsForm.value.marketing_email,
        marketingSms: this.settingsForm.value.marketing_sms,
        marketingPush: this.settingsForm.value.marketing_push,
        marketingWhatsapp: this.settingsForm.value.marketing_whatsapp
      };

      this.notificationService.saveNotificationSettings(settings).subscribe({
        next: () => {
          this.isLoading = false;
          this.saveMessage = this.getTranslation('settingsSavedSuccessfully');
          this.saveMessageType = 'success';
          
          // Clear message after 3 seconds
          setTimeout(() => {
            this.saveMessage = '';
          }, 3000);
        },
        error: (error) => {
          console.error('Error saving notification settings:', error);
          this.isLoading = false;
          this.saveMessage = this.getTranslation('errorSavingSettings') || 'Error saving settings';
          this.saveMessageType = 'error';
          
          // Clear message after 5 seconds
          setTimeout(() => {
            this.saveMessage = '';
          }, 5000);
        }
      });
    }
  }

  resetToDefaults(): void {
    this.isLoading = true;
    this.notificationService.resetNotificationSettings().subscribe({
      next: (settings) => {
        // Map API response to form values
        this.settingsForm.patchValue({
          system_updates_email: settings.systemUpdatesEmail,
          system_updates_sms: settings.systemUpdatesSms,
          system_updates_push: settings.systemUpdatesPush,
          system_updates_whatsapp: settings.systemUpdatesWhatsapp,
          security_alerts_email: settings.securityAlertsEmail,
          security_alerts_sms: settings.securityAlertsSms,
          security_alerts_push: settings.securityAlertsPush,
          security_alerts_whatsapp: settings.securityAlertsWhatsapp,
          new_messages_email: settings.newMessagesEmail,
          new_messages_sms: settings.newMessagesSms,
          new_messages_push: settings.newMessagesPush,
          new_messages_whatsapp: settings.newMessagesWhatsapp,
          reminders_email: settings.remindersEmail,
          reminders_sms: settings.remindersSms,
          reminders_push: settings.remindersPush,
          reminders_whatsapp: settings.remindersWhatsapp,
          marketing_email: settings.marketingEmail,
          marketing_sms: settings.marketingSms,
          marketing_push: settings.marketingPush,
          marketing_whatsapp: settings.marketingWhatsapp
        });
        this.isLoading = false;
        this.saveMessage = this.getTranslation('settingsResetToDefaults');
        this.saveMessageType = 'success';
        
        // Clear message after 3 seconds
        setTimeout(() => {
          this.saveMessage = '';
        }, 3000);
      },
      error: (error) => {
        console.error('Error resetting notification settings:', error);
        this.isLoading = false;
        this.saveMessage = this.getTranslation('errorResettingSettings') || 'Error resetting settings';
        this.saveMessageType = 'error';
        
        // Clear message after 5 seconds
        setTimeout(() => {
          this.saveMessage = '';
        }, 5000);
      }
    });
  }

  // Use centralized translation service
  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
