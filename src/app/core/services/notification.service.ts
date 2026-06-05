import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface NotificationSettings {
  id?: number;
  userId?: number;
  systemUpdatesEmail: boolean;
  systemUpdatesSms: boolean;
  systemUpdatesPush: boolean;
  systemUpdatesWhatsapp: boolean;
  securityAlertsEmail: boolean;
  securityAlertsSms: boolean;
  securityAlertsPush: boolean;
  securityAlertsWhatsapp: boolean;
  newMessagesEmail: boolean;
  newMessagesSms: boolean;
  newMessagesPush: boolean;
  newMessagesWhatsapp: boolean;
  remindersEmail: boolean;
  remindersSms: boolean;
  remindersPush: boolean;
  remindersWhatsapp: boolean;
  marketingEmail: boolean;
  marketingSms: boolean;
  marketingPush: boolean;
  marketingWhatsapp: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface NotificationSettingsResponse {
  success: boolean;
  settings: NotificationSettings;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  /**
   * Get notification settings
   */
  getNotificationSettings(userId?: number): Observable<NotificationSettings> {
    const params: any = {};
    if (userId) {
      params.userId = userId.toString();
    }
    
    return this.http.get<NotificationSettingsResponse>(`${this.apiUrl}/notification-settings`, { params }).pipe(
      map(response => response.settings)
    );
  }

  /**
   * Save notification settings
   */
  saveNotificationSettings(settings: NotificationSettings, userId?: number): Observable<NotificationSettings> {
    const body: any = {
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
    };

    if (userId) {
      body.userId = userId;
    }

    return this.http.post<NotificationSettingsResponse>(`${this.apiUrl}/notification-settings`, body).pipe(
      map(response => response.settings)
    );
  }

  /**
   * Reset notification settings to defaults
   */
  resetNotificationSettings(userId?: number): Observable<NotificationSettings> {
    const body: any = {};
    if (userId) {
      body.userId = userId;
    }

    return this.http.post<NotificationSettingsResponse>(`${this.apiUrl}/notification-settings/reset`, body).pipe(
      map(response => response.settings)
    );
  }
}

// Notification Management Interfaces
export interface Notification {
  id?: number;
  title: string;
  type: 'normal' | 'urgent' | 'important' | 'info';
  message: string;
  category: string;
  priority: 'low' | 'medium' | 'high';
  status: 'draft' | 'scheduled' | 'sent';
  content?: string;
  sendToAll: boolean;
  subsiteId?: number;
  sectionId?: number;
  specialDivisionId?: number;
  subsiteName?: string;
  sectionName?: string;
  specialDivisionName?: string;
  scheduledDate?: Date;
  scheduledTime?: string;
  sentAt?: Date;
  createdBy?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface NotificationListResponse {
  success: boolean;
  notifications: Notification[];
  total: number;
}

export interface NotificationResponse {
  success: boolean;
  notification: Notification;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationManagementService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  /**
   * Get all notifications with optional filters
   */
  getNotifications(filters?: {
    status?: string;
    type?: string;
    category?: string;
    search?: string;
    limit?: number;
    offset?: number;
    page?: number;
    userId?: number; // Add userId filter
  }): Observable<{ notifications: Notification[]; total: number }> {
    const params: any = {};
    if (filters?.status) params.status = filters.status;
    if (filters?.type) params.type = filters.type;
    if (filters?.category) params.category = filters.category;
    if (filters?.search) params.search = filters.search;
    if (filters?.limit) params.limit = filters.limit.toString();
    if (filters?.offset) params.offset = filters.offset.toString();
    if (filters?.page) params.page = filters.page.toString();
    if (filters?.userId) params.userId = filters.userId.toString();

    return this.http.get<NotificationListResponse>(`${this.apiUrl}/notifications`, { params }).pipe(
      map(response => ({
        notifications: response.notifications.map(n => ({
          ...n,
          createdAt: n.createdAt ? new Date(n.createdAt) : undefined,
          updatedAt: n.updatedAt ? new Date(n.updatedAt) : undefined,
          scheduledDate: n.scheduledDate ? new Date(n.scheduledDate) : undefined,
          sentAt: n.sentAt ? new Date(n.sentAt) : undefined
        })),
        total: response.total
      }))
    );
  }

  /**
   * Get a single notification by ID
   */
  getNotificationById(id: number): Observable<Notification> {
    return this.http.get<NotificationResponse>(`${this.apiUrl}/notifications/${id}`).pipe(
      map(response => ({
        ...response.notification,
        createdAt: response.notification.createdAt ? new Date(response.notification.createdAt) : undefined,
        updatedAt: response.notification.updatedAt ? new Date(response.notification.updatedAt) : undefined,
        scheduledDate: response.notification.scheduledDate ? new Date(response.notification.scheduledDate) : undefined,
        sentAt: response.notification.sentAt ? new Date(response.notification.sentAt) : undefined
      }))
    );
  }

  /**
   * Create a new notification
   */
  createNotification(notification: Omit<Notification, 'id' | 'createdAt' | 'updatedAt'>): Observable<Notification> {
    return this.http.post<NotificationResponse>(`${this.apiUrl}/notifications`, notification).pipe(
      map(response => ({
        ...response.notification,
        createdAt: response.notification.createdAt ? new Date(response.notification.createdAt) : undefined,
        updatedAt: response.notification.updatedAt ? new Date(response.notification.updatedAt) : undefined,
        scheduledDate: response.notification.scheduledDate ? new Date(response.notification.scheduledDate) : undefined,
        sentAt: response.notification.sentAt ? new Date(response.notification.sentAt) : undefined
      }))
    );
  }

  /**
   * Update a notification
   */
  updateNotification(id: number, notification: Partial<Notification>): Observable<Notification> {
    return this.http.put<NotificationResponse>(`${this.apiUrl}/notifications/${id}`, notification).pipe(
      map(response => ({
        ...response.notification,
        createdAt: response.notification.createdAt ? new Date(response.notification.createdAt) : undefined,
        updatedAt: response.notification.updatedAt ? new Date(response.notification.updatedAt) : undefined,
        scheduledDate: response.notification.scheduledDate ? new Date(response.notification.scheduledDate) : undefined,
        sentAt: response.notification.sentAt ? new Date(response.notification.sentAt) : undefined
      }))
    );
  }

  /**
   * Delete a notification
   */
  deleteNotification(id: number): Observable<void> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/notifications/${id}`).pipe(
      map(() => undefined)
    );
  }

  /**
   * Send a notification
   */
  sendNotification(id: number): Observable<Notification> {
    return this.http.post<NotificationResponse>(`${this.apiUrl}/notifications/${id}/send`, {}).pipe(
      map(response => ({
        ...response.notification,
        createdAt: response.notification.createdAt ? new Date(response.notification.createdAt) : undefined,
        updatedAt: response.notification.updatedAt ? new Date(response.notification.updatedAt) : undefined,
        scheduledDate: response.notification.scheduledDate ? new Date(response.notification.scheduledDate) : undefined,
        sentAt: response.notification.sentAt ? new Date(response.notification.sentAt) : undefined
      }))
    );
  }

  /**
   * Schedule a notification
   */
  scheduleNotification(id: number, scheduledDate: Date, scheduledTime?: string): Observable<Notification> {
    return this.http.post<NotificationResponse>(`${this.apiUrl}/notifications/${id}/schedule`, {
      scheduledDate,
      scheduledTime
    }).pipe(
      map(response => ({
        ...response.notification,
        createdAt: response.notification.createdAt ? new Date(response.notification.createdAt) : undefined,
        updatedAt: response.notification.updatedAt ? new Date(response.notification.updatedAt) : undefined,
        scheduledDate: response.notification.scheduledDate ? new Date(response.notification.scheduledDate) : undefined,
        sentAt: response.notification.sentAt ? new Date(response.notification.sentAt) : undefined
      }))
    );
  }
}

