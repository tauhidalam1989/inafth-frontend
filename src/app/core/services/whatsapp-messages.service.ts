import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface WhatsAppMessage {
  id?: number;
  templateId?: number | null;
  recipientPhone: string;
  recipientName?: string | null;
  recipientUserId?: number | null;
  messageType: 'template' | 'text' | 'image' | 'document';
  messageContent: string;
  variables?: Record<string, string> | null;
  status: 'pending' | 'sent' | 'delivered' | 'failed';
  sentAt?: Date | null;
  deliveredAt?: Date | null;
  failedAt?: Date | null;
  errorMessage?: string | null;
  createdBy?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  templateName?: string | null;
  recipientUserName?: string | null;
}

export interface SendMessageRequest {
  templateId?: number;
  recipientPhone?: string;
  recipientUserIds?: number[];
  messageType: 'template' | 'text';
  messageContent?: string;
  variables?: Record<string, string>;
  sendToAll?: boolean;
}

export interface SendMessageResponse {
  success: boolean;
  message: string;
  messages?: WhatsAppMessage[];
  totalSent?: number;
  totalFailed?: number;
}

export interface WhatsAppMessageListResponse {
  success: boolean;
  messages: WhatsAppMessage[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class WhatsAppMessagesService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  /**
   * Get all WhatsApp messages with optional filters
   */
  getMessages(filters?: {
    status?: string;
    messageType?: string;
    templateId?: number;
    recipientUserId?: number;
    search?: string;
    limit?: number;
    page?: number;
  }): Observable<{ messages: WhatsAppMessage[]; total: number }> {
    const params: any = {};
    if (filters?.status) params.status = filters.status;
    if (filters?.messageType) params.messageType = filters.messageType;
    if (filters?.templateId) params.templateId = filters.templateId.toString();
    if (filters?.recipientUserId) params.recipientUserId = filters.recipientUserId.toString();
    if (filters?.search) params.search = filters.search;
    if (filters?.limit) params.limit = filters.limit.toString();
    if (filters?.page) params.page = filters.page.toString();

    return this.http.get<WhatsAppMessageListResponse>(`${this.apiUrl}/whatsapp-messages`, { params }).pipe(
      map(response => ({
        messages: response.messages.map(m => ({
          ...m,
          sentAt: m.sentAt ? new Date(m.sentAt) : null,
          deliveredAt: m.deliveredAt ? new Date(m.deliveredAt) : null,
          failedAt: m.failedAt ? new Date(m.failedAt) : null,
          createdAt: m.createdAt ? new Date(m.createdAt) : undefined,
          updatedAt: m.updatedAt ? new Date(m.updatedAt) : undefined
        })),
        total: response.total
      }))
    );
  }

  /**
   * Get message by ID
   */
  getMessageById(id: number): Observable<WhatsAppMessage> {
    return this.http.get<{ success: boolean; message: WhatsAppMessage }>(`${this.apiUrl}/whatsapp-messages/${id}`).pipe(
      map(response => ({
        ...response.message,
        sentAt: response.message.sentAt ? new Date(response.message.sentAt) : null,
        deliveredAt: response.message.deliveredAt ? new Date(response.message.deliveredAt) : null,
        failedAt: response.message.failedAt ? new Date(response.message.failedAt) : null,
        createdAt: response.message.createdAt ? new Date(response.message.createdAt) : undefined,
        updatedAt: response.message.updatedAt ? new Date(response.message.updatedAt) : undefined
      }))
    );
  }

  /**
   * Send WhatsApp message(s) - individual or bulk
   */
  sendMessages(request: SendMessageRequest): Observable<SendMessageResponse> {
    return this.http.post<SendMessageResponse>(`${this.apiUrl}/whatsapp-messages`, request);
  }

  /**
   * Update message status
   */
  updateMessageStatus(id: number, status: 'sent' | 'delivered' | 'failed', errorMessage?: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/whatsapp-messages/${id}/status`, { status, errorMessage });
  }

  /**
   * Delete message
   */
  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/whatsapp-messages/${id}`);
  }
}

