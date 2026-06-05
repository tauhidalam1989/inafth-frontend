import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export type ChannelType = 'email' | 'sms' | 'push' | 'whatsapp';

export interface EmailConfig {
  smtp_host: string;
  smtp_port: number;
  smtp_secure: boolean;
  smtp_user: string;
  smtp_password: string;
  from_email: string;
  from_name: string;
}

export interface SMSConfig {
  provider: string;
  api_key: string;
  api_secret: string;
  sender_id: string;
}

export interface PushConfig {
  provider: string;
  server_key: string;
  project_id: string;
  service_account: string;
}

export interface WhatsAppConfig {
  provider: string;
  api_key: string;
  api_secret: string;
  phone_number_id: string;
  business_account_id: string;
}

export type ChannelConfig = EmailConfig | SMSConfig | PushConfig | WhatsAppConfig;

export interface NotificationChannelConfig {
  id?: number;
  channelType: ChannelType;
  isEnabled: boolean;
  configData: ChannelConfig;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number | null;
}

export interface NotificationChannelConfigResponse {
  success: boolean;
  config?: NotificationChannelConfig;
  message?: string;
}

export interface NotificationChannelConfigListResponse {
  success: boolean;
  configs: NotificationChannelConfig[];
}

export interface TestConfigResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationConfigService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  /**
   * Get all channel configurations
   */
  getChannelConfigs(): Observable<NotificationChannelConfig[]> {
    return this.http.get<NotificationChannelConfigListResponse>(`${this.apiUrl}/notification-configs`).pipe(
      map(response => response.configs.map(config => ({
        ...config,
        createdAt: config.createdAt ? new Date(config.createdAt) : undefined,
        updatedAt: config.updatedAt ? new Date(config.updatedAt) : undefined
      })))
    );
  }

  /**
   * Get configuration for a specific channel
   */
  getChannelConfig(channelType: ChannelType): Observable<NotificationChannelConfig> {
    return this.http.get<NotificationChannelConfigResponse>(`${this.apiUrl}/notification-configs/${channelType}`).pipe(
      map(response => ({
        ...response.config!,
        createdAt: response.config?.createdAt ? new Date(response.config.createdAt) : undefined,
        updatedAt: response.config?.updatedAt ? new Date(response.config.updatedAt) : undefined
      }))
    );
  }

  /**
   * Create or update channel configuration
   */
  upsertChannelConfig(
    channelType: ChannelType,
    isEnabled: boolean,
    configData: ChannelConfig
  ): Observable<NotificationChannelConfigResponse> {
    return this.http.post<NotificationChannelConfigResponse>(
      `${this.apiUrl}/notification-configs/${channelType}`,
      { isEnabled, configData }
    );
  }

  /**
   * Update channel enabled status
   */
  updateChannelStatus(channelType: ChannelType, isEnabled: boolean): Observable<{ success: boolean; message: string }> {
    return this.http.put<{ success: boolean; message: string }>(
      `${this.apiUrl}/notification-configs/${channelType}/status`,
      { isEnabled }
    );
  }

  /**
   * Test channel configuration
   */
  testChannelConfig(channelType: ChannelType): Observable<TestConfigResponse> {
    return this.http.post<TestConfigResponse>(
      `${this.apiUrl}/notification-configs/${channelType}/test`,
      {}
    );
  }
}

