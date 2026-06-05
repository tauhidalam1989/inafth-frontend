import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface WhatsAppTemplate {
  id?: number;
  name: string;
  category: 'system-updates' | 'security-alerts' | 'new-messages' | 'reminders' | 'marketing';
  content: string;
  variables: string[];
  status: 'active' | 'inactive';
  usageCount: number;
  lastUsed?: Date | null;
  createdBy?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface WhatsAppTemplateListResponse {
  success: boolean;
  templates: WhatsAppTemplate[];
  total: number;
}

export interface WhatsAppTemplateResponse {
  success: boolean;
  template: WhatsAppTemplate;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class WhatsAppTemplatesService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  /**
   * Get all WhatsApp templates with optional filters
   */
  getTemplates(filters?: {
    category?: string;
    status?: string;
    search?: string;
    limit?: number;
    offset?: number;
    page?: number;
  }): Observable<{ templates: WhatsAppTemplate[]; total: number }> {
    const params: any = {};
    if (filters?.category) params.category = filters.category;
    if (filters?.status) params.status = filters.status;
    if (filters?.search) params.search = filters.search;
    if (filters?.limit) params.limit = filters.limit.toString();
    if (filters?.offset) params.offset = filters.offset.toString();
    if (filters?.page) params.page = filters.page.toString();

    return this.http.get<WhatsAppTemplateListResponse>(`${this.apiUrl}/whatsapp-templates`, { params }).pipe(
      map(response => ({
        templates: response.templates.map(t => ({
          ...t,
          lastUsed: t.lastUsed ? new Date(t.lastUsed) : null,
          createdAt: t.createdAt ? new Date(t.createdAt) : undefined,
          updatedAt: t.updatedAt ? new Date(t.updatedAt) : undefined
        })),
        total: response.total
      }))
    );
  }

  /**
   * Get a single template by ID
   */
  getTemplateById(id: number): Observable<WhatsAppTemplate> {
    return this.http.get<WhatsAppTemplateResponse>(`${this.apiUrl}/whatsapp-templates/${id}`).pipe(
      map(response => ({
        ...response.template,
        lastUsed: response.template.lastUsed ? new Date(response.template.lastUsed) : null,
        createdAt: response.template.createdAt ? new Date(response.template.createdAt) : undefined,
        updatedAt: response.template.updatedAt ? new Date(response.template.updatedAt) : undefined
      }))
    );
  }

  /**
   * Create a new template
   */
  createTemplate(template: Omit<WhatsAppTemplate, 'id' | 'createdAt' | 'updatedAt'>): Observable<WhatsAppTemplate> {
    return this.http.post<WhatsAppTemplateResponse>(`${this.apiUrl}/whatsapp-templates`, template).pipe(
      map(response => ({
        ...response.template,
        lastUsed: response.template.lastUsed ? new Date(response.template.lastUsed) : null,
        createdAt: response.template.createdAt ? new Date(response.template.createdAt) : undefined,
        updatedAt: response.template.updatedAt ? new Date(response.template.updatedAt) : undefined
      }))
    );
  }

  /**
   * Update a template
   */
  updateTemplate(id: number, template: Partial<WhatsAppTemplate>): Observable<WhatsAppTemplate> {
    return this.http.put<WhatsAppTemplateResponse>(`${this.apiUrl}/whatsapp-templates/${id}`, template).pipe(
      map(response => ({
        ...response.template,
        lastUsed: response.template.lastUsed ? new Date(response.template.lastUsed) : null,
        createdAt: response.template.createdAt ? new Date(response.template.createdAt) : undefined,
        updatedAt: response.template.updatedAt ? new Date(response.template.updatedAt) : undefined
      }))
    );
  }

  /**
   * Delete a template
   */
  deleteTemplate(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/whatsapp-templates/${id}`).pipe(
      map(() => undefined)
    );
  }

  /**
   * Increment template usage count
   */
  useTemplate(id: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/whatsapp-templates/${id}/use`, {}).pipe(
      map(() => undefined)
    );
  }
}

