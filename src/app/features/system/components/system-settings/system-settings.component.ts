import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { NotificationConfigService, NotificationChannelConfig, ChannelType, EmailConfig, SMSConfig, PushConfig, WhatsAppConfig } from '../../../../core/services/notification-config.service';
import { CloudStorageService, CloudStorageConfig, CloudProvider } from '../../../../core/services/cloud-storage.service';

@Component({
  selector: 'app-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.scss']
})
export class SystemSettingsComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  activeTab: ChannelType | 'cloud-storage' = 'email';
  isLoading = false;
  saveMessage: string = '';
  saveMessageType: 'success' | 'error' = 'success';
  testMessage: string = '';
  testMessageType: 'success' | 'error' = 'success';

  // Form groups for each channel
  emailForm: FormGroup;
  smsForm: FormGroup;
  pushForm: FormGroup;
  whatsappForm: FormGroup;
  cloudStorageForm: FormGroup;

  // Channel configurations
  emailConfig: NotificationChannelConfig | null = null;
  smsConfig: NotificationChannelConfig | null = null;
  pushConfig: NotificationChannelConfig | null = null;
  whatsappConfig: NotificationChannelConfig | null = null;
  cloudStorageConfig: CloudStorageConfig | null = null;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private notificationConfigService: NotificationConfigService,
    private cloudStorageService: CloudStorageService,
    private fb: FormBuilder
  ) {
    // Initialize Email Form
    this.emailForm = this.fb.group({
      isEnabled: [true],
      smtp_host: ['', Validators.required],
      smtp_port: [587, [Validators.required, Validators.min(1), Validators.max(65535)]],
      smtp_secure: [false],
      smtp_user: ['', Validators.required],
      smtp_password: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      from_name: ['', Validators.required]
    });

    // Initialize SMS Form
    this.smsForm = this.fb.group({
      isEnabled: [false],
      provider: ['', Validators.required],
      api_key: ['', Validators.required],
      api_secret: ['', Validators.required],
      sender_id: ['', Validators.required]
    });

    // Initialize Push Form
    this.pushForm = this.fb.group({
      isEnabled: [false],
      provider: ['', Validators.required],
      server_key: ['', Validators.required],
      project_id: ['', Validators.required],
      service_account: ['']
    });

    // Initialize WhatsApp Form
    this.whatsappForm = this.fb.group({
      isEnabled: [false],
      provider: ['', Validators.required],
      api_key: ['', Validators.required],
      api_secret: ['', Validators.required],
      phone_number_id: ['', Validators.required],
      business_account_id: ['', Validators.required]
    });

    // Initialize Cloud Storage Form
    this.cloudStorageForm = this.fb.group({
      provider: ['local', Validators.required],
      enabled: [true],
      // AWS S3
      awsAccessKeyId: [''],
      awsSecretAccessKey: [''],
      awsRegion: [''],
      awsBucket: [''],
      // Google Cloud Storage
      gcsProjectId: [''],
      gcsBucket: [''],
      gcsKeyFile: [''],
      // Azure Blob Storage
      azureAccountName: [''],
      azureContainer: [''],
      azureAuthMethod: ['account-key'],
      azureAccountKey: [''],
      azureClientId: [''],
      azureTenantId: [''],
      azureClientSecret: [''],
      // Local storage
      localUploadPath: ['./uploads'],
      baseUrl: ['http://localhost:3000']
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadConfigurations();
    this.loadCloudStorageConfig();
  }

  loadConfigurations(): void {
    this.isLoading = true;
    this.notificationConfigService.getChannelConfigs().subscribe({
      next: (configs) => {
        configs.forEach(config => {
          switch (config.channelType) {
            case 'email':
              this.emailConfig = config;
              this.populateEmailForm(config);
              break;
            case 'sms':
              this.smsConfig = config;
              this.populateSMSForm(config);
              break;
            case 'push':
              this.pushConfig = config;
              this.populatePushForm(config);
              break;
            case 'whatsapp':
              this.whatsappConfig = config;
              this.populateWhatsAppForm(config);
              break;
          }
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading configurations:', error);
        this.isLoading = false;
      }
    });
  }

  populateEmailForm(config: NotificationChannelConfig): void {
    const emailConfig = config.configData as EmailConfig;
    this.emailForm.patchValue({
      isEnabled: config.isEnabled,
      smtp_host: emailConfig.smtp_host || '',
      smtp_port: emailConfig.smtp_port || 587,
      smtp_secure: emailConfig.smtp_secure || false,
      smtp_user: emailConfig.smtp_user || '',
      smtp_password: emailConfig.smtp_password || '',
      from_email: emailConfig.from_email || '',
      from_name: emailConfig.from_name || ''
    });
  }

  populateSMSForm(config: NotificationChannelConfig): void {
    const smsConfig = config.configData as SMSConfig;
    this.smsForm.patchValue({
      isEnabled: config.isEnabled,
      provider: smsConfig.provider || '',
      api_key: smsConfig.api_key || '',
      api_secret: smsConfig.api_secret || '',
      sender_id: smsConfig.sender_id || ''
    });
  }

  populatePushForm(config: NotificationChannelConfig): void {
    const pushConfig = config.configData as PushConfig;
    this.pushForm.patchValue({
      isEnabled: config.isEnabled,
      provider: pushConfig.provider || '',
      server_key: pushConfig.server_key || '',
      project_id: pushConfig.project_id || '',
      service_account: pushConfig.service_account || ''
    });
  }

  populateWhatsAppForm(config: NotificationChannelConfig): void {
    const whatsappConfig = config.configData as WhatsAppConfig;
    this.whatsappForm.patchValue({
      isEnabled: config.isEnabled,
      provider: whatsappConfig.provider || '',
      api_key: whatsappConfig.api_key || '',
      api_secret: whatsappConfig.api_secret || '',
      phone_number_id: whatsappConfig.phone_number_id || '',
      business_account_id: whatsappConfig.business_account_id || ''
    });
  }

  switchTab(tab: ChannelType | 'cloud-storage'): void {
    this.activeTab = tab;
    this.saveMessage = '';
    this.testMessage = '';
    
    // Reload cloud storage config when switching to cloud storage tab
    if (tab === 'cloud-storage') {
      this.loadCloudStorageConfig();
    }
  }

  loadCloudStorageConfig(): void {
    this.isLoading = true;
    console.log('Loading cloud storage config...');
    this.cloudStorageService.getConfig().subscribe({
      next: (config) => {
        console.log('Cloud storage config loaded:', config);
        this.cloudStorageConfig = config;
        if (config) {
          console.log('Populating form with config:', config);
          this.populateCloudStorageForm(config);
        } else {
          console.log('No config found, using defaults');
          // If no config exists, reset form to defaults
          this.cloudStorageForm.patchValue({
            provider: 'local',
            enabled: true,
            localUploadPath: './uploads',
            baseUrl: 'http://localhost:3000'
          });
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading cloud storage config:', error);
        this.isLoading = false;
      }
    });
  }

  populateCloudStorageForm(config: CloudStorageConfig): void {
    this.cloudStorageForm.patchValue({
      provider: config.provider,
      enabled: config.enabled,
      awsAccessKeyId: config.awsAccessKeyId || '',
      awsSecretAccessKey: config.awsSecretAccessKey || '',
      awsRegion: config.awsRegion || '',
      awsBucket: config.awsBucket || '',
      gcsProjectId: config.gcsProjectId || '',
      gcsBucket: config.gcsBucket || '',
      gcsKeyFile: config.gcsKeyFile || '',
      azureAccountName: config.azureAccountName || '',
      azureContainer: config.azureContainer || '',
      azureAuthMethod: config.azureAuthMethod || 'account-key',
      azureAccountKey: config.azureAccountKey || '',
      azureClientId: config.azureClientId || '',
      azureTenantId: config.azureTenantId || '',
      azureClientSecret: config.azureClientSecret || '',
      localUploadPath: config.localUploadPath || './uploads',
      baseUrl: config.baseUrl || 'http://localhost:3000'
    });
    
    // Update validators based on provider
    this.updateCloudStorageValidators(config.provider);
  }

  saveCloudStorageConfig(): void {
    if (this.cloudStorageForm.invalid) {
      this.cloudStorageForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.saveMessage = '';

    const formValue = this.cloudStorageForm.value;
    const config: CloudStorageConfig = {
      provider: formValue.provider,
      enabled: formValue.enabled,
      awsAccessKeyId: formValue.awsAccessKeyId,
      awsSecretAccessKey: formValue.awsSecretAccessKey,
      awsRegion: formValue.awsRegion,
      awsBucket: formValue.awsBucket,
      gcsProjectId: formValue.gcsProjectId,
      gcsBucket: formValue.gcsBucket,
      gcsKeyFile: formValue.gcsKeyFile,
      azureAccountName: formValue.azureAccountName,
      azureContainer: formValue.azureContainer,
      azureAuthMethod: formValue.azureAuthMethod,
      azureAccountKey: formValue.azureAccountKey,
      azureClientId: formValue.azureClientId,
      azureTenantId: formValue.azureTenantId,
      azureClientSecret: formValue.azureClientSecret,
      localUploadPath: formValue.localUploadPath,
      baseUrl: formValue.baseUrl
    };

    this.cloudStorageService.saveConfig(config).subscribe({
      next: (savedConfig) => {
        this.isLoading = false;
        this.cloudStorageConfig = savedConfig;
        this.saveMessage = this.getTranslation('configurationSaved') || 'Configuration saved successfully';
        this.saveMessageType = 'success';
        setTimeout(() => {
          this.saveMessage = '';
        }, 3000);
      },
      error: (error) => {
        console.error('Error saving cloud storage config:', error);
        this.isLoading = false;
        this.saveMessage = error.error?.error || this.getTranslation('errorSavingConfiguration') || 'Error saving configuration';
        this.saveMessageType = 'error';
        setTimeout(() => {
          this.saveMessage = '';
        }, 5000);
      }
    });
  }

  onCloudStorageProviderChange(): void {
    const provider = this.cloudStorageForm.value.provider;
    
    // If we have existing config for this provider, keep those values
    // Otherwise, reset provider-specific fields
    if (this.cloudStorageConfig && this.cloudStorageConfig.provider === provider) {
      // Keep existing values, just update validators
      this.updateCloudStorageValidators(provider);
    } else {
      // Reset all provider-specific fields when switching to a different provider
      this.cloudStorageForm.patchValue({
        awsAccessKeyId: '',
        awsSecretAccessKey: '',
        awsRegion: '',
        awsBucket: '',
        gcsProjectId: '',
        gcsBucket: '',
        gcsKeyFile: '',
        azureAccountName: '',
        azureContainer: '',
        azureAuthMethod: 'account-key',
        azureAccountKey: '',
        azureClientId: '',
        azureTenantId: '',
        azureClientSecret: ''
      });

      // Update validators based on provider
      this.updateCloudStorageValidators(provider);
    }
  }

  updateCloudStorageValidators(provider: CloudProvider): void {
    // Remove all validators first
    Object.keys(this.cloudStorageForm.controls).forEach(key => {
      if (key !== 'provider' && key !== 'enabled' && key !== 'localUploadPath' && key !== 'baseUrl') {
        this.cloudStorageForm.get(key)?.clearValidators();
        this.cloudStorageForm.get(key)?.updateValueAndValidity();
      }
    });

    // Add validators based on provider
    if (provider === 'aws-s3') {
      this.cloudStorageForm.get('awsAccessKeyId')?.setValidators([Validators.required]);
      this.cloudStorageForm.get('awsSecretAccessKey')?.setValidators([Validators.required]);
      this.cloudStorageForm.get('awsRegion')?.setValidators([Validators.required]);
      this.cloudStorageForm.get('awsBucket')?.setValidators([Validators.required]);
    } else if (provider === 'google-cloud') {
      this.cloudStorageForm.get('gcsProjectId')?.setValidators([Validators.required]);
      this.cloudStorageForm.get('gcsBucket')?.setValidators([Validators.required]);
    } else if (provider === 'azure') {
      this.cloudStorageForm.get('azureAccountName')?.setValidators([Validators.required]);
      this.cloudStorageForm.get('azureContainer')?.setValidators([Validators.required]);
      this.cloudStorageForm.get('azureAuthMethod')?.setValidators([Validators.required]);
      // Update validators based on auth method
      this.updateAzureAuthValidators();
    }

    // Update validity
    Object.keys(this.cloudStorageForm.controls).forEach(key => {
      this.cloudStorageForm.get(key)?.updateValueAndValidity();
    });
  }

  onAzureAuthMethodChange(): void {
    this.updateAzureAuthValidators();
  }

  updateAzureAuthValidators(): void {
    const authMethod = this.cloudStorageForm.value.azureAuthMethod;
    
    // Clear validators for both auth methods
    this.cloudStorageForm.get('azureAccountKey')?.clearValidators();
    this.cloudStorageForm.get('azureClientId')?.clearValidators();
    this.cloudStorageForm.get('azureTenantId')?.clearValidators();
    this.cloudStorageForm.get('azureClientSecret')?.clearValidators();
    
    // Set validators based on auth method
    if (authMethod === 'account-key') {
      this.cloudStorageForm.get('azureAccountKey')?.setValidators([Validators.required]);
    } else if (authMethod === 'azure-ad') {
      this.cloudStorageForm.get('azureClientId')?.setValidators([Validators.required]);
      this.cloudStorageForm.get('azureTenantId')?.setValidators([Validators.required]);
      this.cloudStorageForm.get('azureClientSecret')?.setValidators([Validators.required]);
    }
    
    // Update validity
    this.cloudStorageForm.get('azureAccountKey')?.updateValueAndValidity();
    this.cloudStorageForm.get('azureClientId')?.updateValueAndValidity();
    this.cloudStorageForm.get('azureTenantId')?.updateValueAndValidity();
    this.cloudStorageForm.get('azureClientSecret')?.updateValueAndValidity();
  }

  saveConfiguration(channelType: ChannelType): void {
    let form: FormGroup;
    let configData: any;

    switch (channelType) {
      case 'email':
        if (this.emailForm.invalid) return;
        form = this.emailForm;
        configData = {
          smtp_host: form.value.smtp_host,
          smtp_port: form.value.smtp_port,
          smtp_secure: form.value.smtp_secure,
          smtp_user: form.value.smtp_user,
          smtp_password: form.value.smtp_password,
          from_email: form.value.from_email,
          from_name: form.value.from_name
        };
        break;
      case 'sms':
        if (this.smsForm.invalid) return;
        form = this.smsForm;
        configData = {
          provider: form.value.provider,
          api_key: form.value.api_key,
          api_secret: form.value.api_secret,
          sender_id: form.value.sender_id
        };
        break;
      case 'push':
        if (this.pushForm.invalid) return;
        form = this.pushForm;
        configData = {
          provider: form.value.provider,
          server_key: form.value.server_key,
          project_id: form.value.project_id,
          service_account: form.value.service_account
        };
        break;
      case 'whatsapp':
        if (this.whatsappForm.invalid) return;
        form = this.whatsappForm;
        configData = {
          provider: form.value.provider,
          api_key: form.value.api_key,
          api_secret: form.value.api_secret,
          phone_number_id: form.value.phone_number_id,
          business_account_id: form.value.business_account_id
        };
        break;
      default:
        return;
    }

    this.isLoading = true;
    this.saveMessage = '';

    this.notificationConfigService.upsertChannelConfig(
      channelType,
      form.value.isEnabled,
      configData
    ).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.saveMessage = response.message || this.getTranslation('configurationSaved');
        this.saveMessageType = 'success';
        this.loadConfigurations();
        setTimeout(() => {
          this.saveMessage = '';
        }, 3000);
      },
      error: (error) => {
        console.error('Error saving configuration:', error);
        this.isLoading = false;
        this.saveMessage = error.error?.error || this.getTranslation('errorSavingConfiguration');
        this.saveMessageType = 'error';
        setTimeout(() => {
          this.saveMessage = '';
        }, 5000);
      }
    });
  }

  testCloudStorageConfig(): void {
    if (this.cloudStorageForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.testMessage = '';
    
    const formValue = this.cloudStorageForm.value;
    const config: CloudStorageConfig = {
      provider: formValue.provider,
      enabled: formValue.enabled,
      awsAccessKeyId: formValue.awsAccessKeyId,
      awsSecretAccessKey: formValue.awsSecretAccessKey,
      awsRegion: formValue.awsRegion,
      awsBucket: formValue.awsBucket,
      gcsProjectId: formValue.gcsProjectId,
      gcsBucket: formValue.gcsBucket,
      gcsKeyFile: formValue.gcsKeyFile,
      azureAccountName: formValue.azureAccountName,
      azureContainer: formValue.azureContainer,
      azureAuthMethod: formValue.azureAuthMethod,
      azureAccountKey: formValue.azureAccountKey,
      azureClientId: formValue.azureClientId,
      azureTenantId: formValue.azureTenantId,
      azureClientSecret: formValue.azureClientSecret,
      localUploadPath: formValue.localUploadPath,
      baseUrl: formValue.baseUrl
    };

    this.cloudStorageService.testConfig(config).subscribe({
      next: (result) => {
        this.isLoading = false;
        this.testMessage = result.message;
        this.testMessageType = result.success ? 'success' : 'error';
        setTimeout(() => {
          this.testMessage = '';
        }, 5000);
      },
      error: (error) => {
        this.isLoading = false;
        this.testMessage = error.error?.message || error.error?.error || this.getTranslation('errorTestingConfiguration') || 'Error testing configuration';
        this.testMessageType = 'error';
        setTimeout(() => {
          this.testMessage = '';
        }, 5000);
      }
    });
  }

  testConfiguration(channelType: ChannelType): void {
    this.isLoading = true;
    this.testMessage = '';

    this.notificationConfigService.testChannelConfig(channelType).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.testMessage = response.message;
        this.testMessageType = response.success ? 'success' : 'error';
        setTimeout(() => {
          this.testMessage = '';
        }, 5000);
      },
      error: (error) => {
        console.error('Error testing configuration:', error);
        this.isLoading = false;
        this.testMessage = error.error?.error || this.getTranslation('errorTestingConfiguration');
        this.testMessageType = 'error';
        setTimeout(() => {
          this.testMessage = '';
        }, 5000);
      }
    });
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}

