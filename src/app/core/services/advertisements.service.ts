import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export type AdvertisementType = 'image' | 'video' | 'presentation' | 'document';
export type AdvertisementStatus = 'draft' | 'active' | 'inactive' | 'expired';

export interface Advertisement {
  id?: number;
  title: string;
  description?: string | null;
  type: AdvertisementType;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  thumbnailUrl?: string | null;
  status: AdvertisementStatus;
  /** Set when ad is on a screen playlist: seconds each slide shows on the player. */
  slideDurationSeconds?: number;
  createdBy?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AdvertisementListResponse {
  success: boolean;
  advertisements: Advertisement[];
  total: number;
}

export interface AdvertisementResponse {
  success: boolean;
  advertisement: Advertisement;
}

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  /**
   * Get all advertisements with optional filters
   */
  getAdvertisements(filters?: {
    type?: string;
    status?: string;
    search?: string;
    limit?: number;
    page?: number;
  }): Observable<{ advertisements: Advertisement[]; total: number }> {
    const params: any = {};
    if (filters?.type) params.type = filters.type;
    if (filters?.status) params.status = filters.status;
    if (filters?.search) params.search = filters.search;
    if (filters?.limit) params.limit = filters.limit.toString();
    if (filters?.page) params.page = filters.page.toString();

    return this.http.get<AdvertisementListResponse>(`${this.apiUrl}/advertisements`, { params }).pipe(
      map(response => ({
        advertisements: response.advertisements.map(ad => ({
          ...ad,
          createdAt: ad.createdAt ? new Date(ad.createdAt) : undefined,
          updatedAt: ad.updatedAt ? new Date(ad.updatedAt) : undefined
        })),
        total: response.total
      }))
    );
  }

  /**
   * Get advertisement by ID
   */
  getAdvertisementById(id: number): Observable<Advertisement> {
    return this.http.get<AdvertisementResponse>(`${this.apiUrl}/advertisements/${id}`).pipe(
      map(response => ({
        ...response.advertisement,
        createdAt: response.advertisement.createdAt ? new Date(response.advertisement.createdAt) : undefined,
        updatedAt: response.advertisement.updatedAt ? new Date(response.advertisement.updatedAt) : undefined
      }))
    );
  }

  /**
   * Create advertisement with file upload
   */
  createAdvertisement(formData: FormData): Observable<Advertisement> {
    return this.http.post<AdvertisementResponse>(`${this.apiUrl}/advertisements`, formData).pipe(
      map(response => ({
        ...response.advertisement,
        createdAt: response.advertisement.createdAt ? new Date(response.advertisement.createdAt) : undefined,
        updatedAt: response.advertisement.updatedAt ? new Date(response.advertisement.updatedAt) : undefined
      }))
    );
  }

  /**
   * Update advertisement
   */
  updateAdvertisement(id: number, formData: FormData): Observable<Advertisement> {
    return this.http.put<AdvertisementResponse>(`${this.apiUrl}/advertisements/${id}`, formData).pipe(
      map(response => ({
        ...response.advertisement,
        createdAt: response.advertisement.createdAt ? new Date(response.advertisement.createdAt) : undefined,
        updatedAt: response.advertisement.updatedAt ? new Date(response.advertisement.updatedAt) : undefined
      }))
    );
  }

  /**
   * Delete advertisement
   */
  deleteAdvertisement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/advertisements/${id}`);
  }
}

