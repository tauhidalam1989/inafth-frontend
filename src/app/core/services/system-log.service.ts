import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export type LogLevel = 'info' | 'warning' | 'error' | 'success' | 'debug';

export interface SystemLog {
  id?: number;
  level: LogLevel;
  module: string;
  action: string;
  message: string;
  details?: Record<string, any> | null;
  userId?: number | null;
  ipAddress?: string | null;
  userAgent?: string | null;
  createdAt?: Date;
  userName?: string | null;
}

export interface SystemLogListResponse {
  success: boolean;
  logs: SystemLog[];
  total: number;
}

export interface SystemLogResponse {
  success: boolean;
  log: SystemLog;
}

@Injectable({
  providedIn: 'root'
})
export class SystemLogService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  /**
   * Get all system logs with optional filters
   */
  getLogs(filters?: {
    level?: LogLevel;
    module?: string;
    action?: string;
    userId?: number;
    search?: string;
    startDate?: Date;
    endDate?: Date;
    limit?: number;
    page?: number;
  }): Observable<{ logs: SystemLog[]; total: number }> {
    const params: any = {};
    if (filters?.level) params.level = filters.level;
    if (filters?.module) params.module = filters.module;
    if (filters?.action) params.action = filters.action;
    if (filters?.userId) params.userId = filters.userId.toString();
    if (filters?.search) params.search = filters.search;
    if (filters?.startDate) params.startDate = filters.startDate.toISOString();
    if (filters?.endDate) params.endDate = filters.endDate.toISOString();
    if (filters?.limit) params.limit = filters.limit.toString();
    if (filters?.page) params.page = filters.page.toString();

    return this.http.get<SystemLogListResponse>(`${this.apiUrl}/system-logs`, { params }).pipe(
      map(response => ({
        logs: response.logs.map(log => ({
          ...log,
          createdAt: log.createdAt ? new Date(log.createdAt) : undefined
        })),
        total: response.total
      }))
    );
  }

  /**
   * Get log by ID
   */
  getLogById(id: number): Observable<SystemLog> {
    return this.http.get<SystemLogResponse>(`${this.apiUrl}/system-logs/${id}`).pipe(
      map(response => ({
        ...response.log,
        createdAt: response.log.createdAt ? new Date(response.log.createdAt) : undefined
      }))
    );
  }

  /**
   * Get unique modules
   */
  getUniqueModules(): Observable<string[]> {
    return this.http.get<{ success: boolean; modules: string[] }>(`${this.apiUrl}/system-logs/modules/list`).pipe(
      map(response => response.modules)
    );
  }

  /**
   * Get unique actions
   */
  getUniqueActions(): Observable<string[]> {
    return this.http.get<{ success: boolean; actions: string[] }>(`${this.apiUrl}/system-logs/actions/list`).pipe(
      map(response => response.actions)
    );
  }

  /**
   * Delete log by ID
   */
  deleteLog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/system-logs/${id}`);
  }

  /**
   * Cleanup old logs
   */
  cleanupOldLogs(daysToKeep: number = 90): Observable<{ success: boolean; message: string; deletedCount: number }> {
    return this.http.delete<{ success: boolean; message: string; deletedCount: number }>(
      `${this.apiUrl}/system-logs/cleanup?days=${daysToKeep}`
    );
  }
}

