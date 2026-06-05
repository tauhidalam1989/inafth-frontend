import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, timer, throwError, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface DiscoveredDevice {
  id: string;
  name: string;
  ipAddress: string;
  macAddress: string;
  deviceType: 'android-tv' | 'smart-tv' | 'unknown';
  status: 'online' | 'offline';
  lastSeen: Date;
  isRegistered: boolean;
}

export interface Screen {
  id: number;
  deviceId: string | null;
  name: string;
  ipAddress: string | null;
  macAddress: string | null;
  location: string | null;
  status: 'online' | 'offline' | 'playing';
  lastConnected: Date;
  assignedAds: number[];
  // Group
  groupId: number | null;
  groupName: string | null;
  // Location assignment
  subsiteId: number | null;
  sectionId: number | null;
  specialDivisionId: number | null;
  subsiteName: string | null;
  sectionName: string | null;
  specialDivisionName: string | null;
  // User assignment
  assignedUserId: number | null;
  assignedUserIds: number[] | null;
  assignedUserName: string | null;
  // Date and time
  startDate: Date | null;
  endDate: Date | null;
  startTime: string | null;
  endTime: string | null;
  // Display settings
  orientation?: 'portrait' | 'landscape' | 'auto' | null;
  screenSize?: 'small' | 'medium' | 'large' | 'custom' | null;
  screenWidth?: number | null;
  screenHeight?: number | null;
  // Assigned advertisements (full objects when fetched with details)
  assignedAdvertisements?: any[];
}

export interface ScreenGroup {
  id: number;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ScreenAdvertisementAssignment {
  adId: number;
  durationSeconds?: number;
}

export interface CreateScreenRequest {
  name: string | any;
  deviceId?: string | null;
  ipAddress?: string | null;
  macAddress?: string | null;
  location?: string | null;
  groupId?: number | null;
  subsiteId?: number | null;
  sectionId?: number | null;
  specialDivisionId?: number | null;
  assignedUserId?: number | null;
  assignedUserIds?: number[] | null;
  startDate?: string | null;
  endDate?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  advertisementIds?: number[];
  /** Order + seconds per slide; preferred over advertisementIds when saving playlist from dashboard. */
  advertisementPlaylist?: ScreenAdvertisementAssignment[];
  // Display settings
  orientation?: 'portrait' | 'landscape' | 'auto' | null;
  screenSize?: 'small' | 'medium' | 'large' | 'custom' | null;
  screenWidth?: number | null;
  screenHeight?: number | null;
}

export interface ScreenRegion {
  id: number;
  screenId: number;
  regionType: 'split_horizontal' | 'split_vertical' | 'custom';
  regionPosition: 'left' | 'right' | 'top' | 'bottom' | 'custom';
  widthPercentage: number;
  heightPercentage: number;
  xPosition: number;
  yPosition: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdvertisementSchedule {
  id: number;
  screenId: number;
  adId: number;
  regionId: number | null;
  startDate: Date | null;
  endDate: Date | null;
  startTime: string | null;
  endTime: string | null;
  isActive: boolean;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateScreenRegionRequest {
  screenId: number;
  regionType?: 'split_horizontal' | 'split_vertical' | 'custom';
  regionPosition: 'left' | 'right' | 'top' | 'bottom' | 'custom';
  widthPercentage?: number;
  heightPercentage?: number;
  xPosition?: number;
  yPosition?: number;
}

export interface CreateAdvertisementScheduleRequest {
  screenId: number;
  adId: number;
  regionId?: number | null;
  startDate?: string | null;
  endDate?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  isActive?: boolean;
  priority?: number;
}

export interface CreateScreenRegionRequest {
  screenId: number;
  regionType?: 'split_horizontal' | 'split_vertical' | 'custom';
  regionPosition: 'left' | 'right' | 'top' | 'bottom' | 'custom';
  widthPercentage?: number;
  heightPercentage?: number;
  xPosition?: number;
  yPosition?: number;
}

export interface AdvertisementSchedule {
  id: number;
  screenId: number;
  adId: number;
  regionId: number | null;
  startDate: Date | null;
  endDate: Date | null;
  startTime: string | null;
  endTime: string | null;
  isActive: boolean;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateAdvertisementScheduleRequest {
  screenId: number;
  adId: number;
  regionId?: number | null;
  startDate?: string | null;
  endDate?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  isActive?: boolean;
  priority?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private apiUrl = environment.apiUrl;

  /** Backend base URL (no /api) for rewriting localhost:3000 in video URLs */
  private getBackendBaseUrl(): string {
    return (environment.apiUrl || '').replace(/\/api\/?$/, '').trim();
  }

  /**
   * Normalize video URL for production: rewrite localhost:3000 (or relative paths) to current backend domain.
   * Ensures play payloads use the domain instead of localhost when deployed.
   */
  normalizeVideoUrl(url: string): string {
    if (!url || !url.trim()) return url;
    const base = this.getBackendBaseUrl();
    if (!base) return url;
    const trimmed = url.trim();
    try {
      // Relative URL (e.g. /uploads/...)
      if (!/^https?:\/\//i.test(trimmed)) {
        const pathPart = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
        return base.replace(/\/$/, '') + pathPart;
      }
      const u = new URL(trimmed);
      if (u.hostname === 'localhost' && (u.port === '3000' || !u.port)) return trimmed.replace(u.origin, base);
      if (u.hostname === '127.0.0.1' && (u.port === '3000' || !u.port)) return trimmed.replace(u.origin, base);
    } catch (_) {}
    return url;
  }

  constructor(private http: HttpClient) {}

  /** Parse a DATE-only value into a local Date (prevents timezone day shift). */
  private parseDateOnlyLocal(value: any): Date | null {
    if (!value) return null;
    if (value instanceof Date) {
      return new Date(value.getFullYear(), value.getMonth(), value.getDate(), 0, 0, 0, 0);
    }
    if (typeof value === 'string') {
      const m = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (m) {
        return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 0, 0, 0, 0);
      }
      const dt = new Date(value);
      if (!Number.isNaN(dt.getTime())) {
        return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, 0, 0, 0);
      }
    }
    return null;
  }

  /**
   * Start network scanning to discover Android TV devices
   * Backend API: POST /api/screens/scan
   * Response: { scanId: string, status: 'started' }
   * 
   * Then polls: GET /api/screens/scan/:scanId/status
   * Response: { progress: number, status: 'scanning' | 'completed' }
   */
  scanNetwork(): Observable<{ isScanning: boolean; progress: number }> {
    // Start scan on backend
    return this.http.post<{ scanId: string; status: string }>(`${this.apiUrl}/screens/scan`, {}).pipe(
      switchMap(response => {
        // Poll for scan progress every 500ms
        return timer(0, 500).pipe(
          switchMap(step => {
            return this.http.get<{ progress: number; status: string }>(`${this.apiUrl}/screens/scan/${response.scanId}/status`).pipe(
              map(scanStatus => ({
                isScanning: scanStatus.status === 'scanning',
                progress: scanStatus.progress || 0
              })),
              catchError(() => {
                // If polling fails, check if we should stop
                if (step > 20) { // After 10 seconds, stop
                  return of({ isScanning: false, progress: 100 });
                }
                // Continue with estimated progress
                const estimatedProgress = Math.min((step / 20) * 100, 100);
                return of({ isScanning: estimatedProgress < 100, progress: Math.round(estimatedProgress) });
              })
            );
          }),
          // Stop polling when scan is complete
          map(result => {
            if (result.progress >= 100 || !result.isScanning) {
              return { isScanning: false, progress: 100 };
            }
            return result;
          })
        );
      }),
      catchError(error => {
        console.error('Scan error:', error);
        // Fallback to simulated scanning if backend is not available
        const totalTime = 10000;
        const interval = 100;
        const steps = totalTime / interval;
        
        return timer(0, interval).pipe(
          map(step => {
            const progress = Math.min((step / steps) * 100, 100);
            const isScanning = progress < 100;
            return { isScanning, progress: Math.round(progress) };
          })
        );
      })
    );
  }

  /**
   * Get discovered devices from network scan
   * Backend API: GET /api/screens/discover
   * Response: DiscoveredDevice[]
   */
  getDiscoveredDevices(): Observable<DiscoveredDevice[]> {
    return this.http.get<DiscoveredDevice[]>(`${this.apiUrl}/screens/discover`).pipe(
      map(devices => devices.map(device => ({
        ...device,
        lastSeen: new Date(device.lastSeen)
      }))),
      catchError(error => {
        console.error('Error fetching discovered devices:', error);
        // Return empty array if backend is not available
        return [];
      })
    );
  }

  /**
   * Register a discovered device as a screen
   * Backend API: POST /api/screens/register
   * Body: { deviceId: string, name: string, location: string }
   * Response: Screen
   */
  registerScreen(deviceId: string, name: string, location: string): Observable<Screen> {
    return this.http.post<Screen>(`${this.apiUrl}/screens/register`, {
      deviceId,
      name,
      location
    }).pipe(
      map(screen => ({
        ...screen,
        lastConnected: new Date(screen.lastConnected)
      })),
      catchError(error => {
        console.error('Error registering screen:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Get all registered screens
   * Backend API: GET /api/screens
   * Response: Screen[]
   */
  getScreens(): Observable<Screen[]> {
    return this.http.get<Screen[]>(`${this.apiUrl}/screens`).pipe(
      map(screens => screens.map(screen => ({
        ...screen,
        lastConnected: new Date(screen.lastConnected),
        startDate: screen.startDate ? new Date(screen.startDate) : null,
        endDate: screen.endDate ? new Date(screen.endDate) : null
      }))),
      catchError(error => {
        console.error('Error fetching screens:', error);
        return [];
      })
    );
  }

  /**
   * Create a screen manually (without device discovery)
   * Backend API: POST /api/screens
   * Body: CreateScreenRequest
   * Response: Screen
   */
  createScreen(data: CreateScreenRequest): Observable<Screen> {
    return this.http.post<Screen>(`${this.apiUrl}/screens`, data).pipe(
      map(screen => ({
        ...screen,
        lastConnected: new Date(screen.lastConnected),
        startDate: screen.startDate ? new Date(screen.startDate) : null,
        endDate: screen.endDate ? new Date(screen.endDate) : null
      })),
      catchError(error => {
        console.error('Error creating screen:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Update a screen
   * Backend API: PUT /api/screens/:id
   * Body: CreateScreenRequest
   * Response: Screen
   */
  updateScreen(screenId: number, data: CreateScreenRequest): Observable<Screen> {
    return this.http.put<Screen>(`${this.apiUrl}/screens/${screenId}`, data).pipe(
      map(screen => ({
        ...screen,
        lastConnected: new Date(screen.lastConnected),
        startDate: screen.startDate ? new Date(screen.startDate) : null,
        endDate: screen.endDate ? new Date(screen.endDate) : null
      })),
      catchError(error => {
        console.error('Error updating screen:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Get all screen groups
   * Backend API: GET /api/screens/groups
   * Response: ScreenGroup[]
   */
  getScreenGroups(): Observable<ScreenGroup[]> {
    return this.http.get<ScreenGroup[]>(`${this.apiUrl}/screens/groups`).pipe(
      map(groups => groups.map(group => ({
        ...group,
        createdAt: new Date(group.createdAt),
        updatedAt: new Date(group.updatedAt)
      }))),
      catchError(error => {
        console.error('Error fetching screen groups:', error);
        return [];
      })
    );
  }

  /**
   * Create a screen group
   * Backend API: POST /api/screens/groups
   * Body: { name: string, description?: string }
   * Response: ScreenGroup
   */
  createScreenGroup(name: string, description?: string): Observable<ScreenGroup> {
    return this.http.post<ScreenGroup>(`${this.apiUrl}/screens/groups`, {
      name,
      description
    }).pipe(
      map(group => ({
        ...group,
        createdAt: new Date(group.createdAt),
        updatedAt: new Date(group.updatedAt)
      })),
      catchError(error => {
        console.error('Error creating screen group:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Update a screen group.
   * Backend API: PUT /api/screens/groups/:id
   * Body: { name: string, description?: string }
   */
  updateScreenGroup(groupId: number, name: string, description?: string): Observable<ScreenGroup> {
    return this.http.put<ScreenGroup>(`${this.apiUrl}/screens/groups/${groupId}`, { name, description }).pipe(
      map(group => ({
        ...group,
        createdAt: new Date(group.createdAt),
        updatedAt: new Date(group.updatedAt)
      })),
      catchError(error => {
        console.error('Error updating screen group:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Delete a screen group.
   * Backend API: DELETE /api/screens/groups/:id
   */
  deleteScreenGroup(groupId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/screens/groups/${groupId}`).pipe(
      catchError(error => {
        console.error('Error deleting screen group:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Get screen status
   * Backend API: GET /api/screens/:id/status
   * Response: { status: string, isOnline: boolean }
   */
  getScreenStatus(screenId: number): Observable<{ status: string; isOnline: boolean }> {
    return this.http.get<{ status: string; isOnline: boolean }>(`${this.apiUrl}/screens/${screenId}/status`).pipe(
      catchError(error => {
        console.error('Error fetching screen status:', error);
        return of({ status: 'unknown', isOnline: false });
      })
    );
  }

  /**
   * Delete/Unregister a screen
   * Backend API: DELETE /api/screens/:id
   * Response: { success: boolean }
   */
  deleteScreen(screenId: number): Observable<boolean> {
    return this.http.delete<{ success: boolean }>(`${this.apiUrl}/screens/${screenId}`).pipe(
      map(response => response.success),
      catchError(error => {
        console.error('Error deleting screen:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Reset all screen-related data (schedules, ad assignments, regions) for this screen.
   * Clears ghost playback; screen gets one default full-screen region.
   * Backend API: POST /api/screens/:id/reset
   */
  resetScreen(screenId: number): Observable<{ success: boolean; message?: string }> {
    return this.http.post<{ success: boolean; message?: string }>(
      `${this.apiUrl}/screens/${screenId}/reset`,
      {}
    ).pipe(
      catchError(error => {
        console.error('Error resetting screen:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Send refresh command to player (index.html) so it hard-refreshes the page.
   * Pass deviceId/ipAddress from the selected screen so backend can find the player even if DB is stale.
   * Backend API: POST /api/screens/:id/refresh
   */
  refreshPlayer(screenId: number, options?: { deviceId?: string | null; ipAddress?: string | null }): Observable<{ success: boolean; message?: string }> {
    const body: { deviceId?: string; ipAddress?: string } = {};
    if (options?.deviceId) body.deviceId = options.deviceId;
    if (options?.ipAddress) body.ipAddress = options.ipAddress;
    return this.http.post<{ success: boolean; message?: string }>(
      `${this.apiUrl}/screens/${screenId}/refresh`,
      body
    ).pipe(
      catchError(error => {
        console.error('Error sending refresh to player:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Apply current layout, assigned ads, and schedules to all screens in the same group.
   * Backend API: POST /api/screens/:id/apply-to-group
   */
  applyToGroup(screenId: number): Observable<{ success: boolean; message?: string; screenCount?: number }> {
    return this.http.post<{ success: boolean; message?: string; screenCount?: number }>(
      `${this.apiUrl}/screens/${screenId}/apply-to-group`,
      {}
    ).pipe(
      catchError(error => {
        console.error('Error applying to group:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Play video on a screen
   * Backend API: POST /api/screens/:id/play
   * Body: { videoUrl: string, videoTitle?: string }
   * Response: { success: boolean, message: string }
   */
  playVideo(
    screenId: number,
    videoUrl: string,
    videoTitle?: string,
    muted?: boolean,
    imagePlaylist?: string[] | null
  ): Observable<{ success: boolean; message: string }> {
    const normalizedUrl = this.normalizeVideoUrl(videoUrl);
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/screens/${screenId}/play`,
      { videoUrl: normalizedUrl, videoTitle, muted: muted ?? false, imagePlaylist: imagePlaylist || null }
    ).pipe(
      catchError(error => {
        console.error('Error playing video:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Stop video playback on a screen
   * Backend API: POST /api/screens/:id/stop
   * Response: { success: boolean, message: string }
   */
  stopVideo(screenId: number, regionId?: number | null): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/screens/${screenId}/stop`,
      { regionId: regionId || null }
    ).pipe(
      catchError(error => {
        console.error('Error stopping video:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Play video in a specific region
   * Backend API: POST /api/screens/:id/play
   * Response: { success: boolean, message: string }
   */
  playVideoInRegion(screenId: number, videoUrl: string, videoTitle: string, regionId: number, muted?: boolean): Observable<{ success: boolean; message: string }> {
    const normalizedUrl = this.normalizeVideoUrl(videoUrl);
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/screens/${screenId}/play`,
      { videoUrl: normalizedUrl, videoTitle, regionId, muted: muted ?? false }
    ).pipe(
      catchError(error => {
        console.error('Error playing video in region:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Stop video in a specific region
   * Backend API: POST /api/screens/:id/stop
   * Response: { success: boolean, message: string }
   */
  stopVideoInRegion(screenId: number, regionId: number): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/screens/${screenId}/stop`,
      { regionId }
    ).pipe(
      catchError(error => {
        console.error('Error stopping video in region:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Pause video playback on a screen
   * Backend API: POST /api/screens/:id/pause
   * Response: { success: boolean, message: string }
   */
  pauseVideo(screenId: number, regionId?: number | null): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/screens/${screenId}/pause`,
      { regionId }
    ).pipe(
      catchError(error => {
        console.error('Error pausing video:', error);
        return throwError(() => error);
      })
    );
  }

  pauseVideoInRegion(screenId: number, regionId: number): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/screens/${screenId}/pause`,
      { regionId }
    ).pipe(
      catchError(error => {
        console.error('Error pausing video in region:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Resume video playback on a screen
   * Backend API: POST /api/screens/:id/resume
   * Response: { success: boolean, message: string }
   */
  resumeVideo(screenId: number, regionId?: number | null): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/screens/${screenId}/resume`,
      { regionId }
    ).pipe(
      catchError(error => {
        console.error('Error resuming video:', error);
        return throwError(() => error);
      })
    );
  }

  resumeVideoInRegion(screenId: number, regionId: number): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/screens/${screenId}/resume`,
      { regionId }
    ).pipe(
      catchError(error => {
        console.error('Error resuming video in region:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Get currently playing video info
   * Backend API: GET /api/screens/:id/playing
   * Response: { isPlaying: boolean, videoUrl?: string, videoTitle?: string, startedAt?: Date }
   */
  getPlayingVideo(screenId: number): Observable<{ 
    isPlaying: boolean; 
    isPaused?: boolean;
    videoUrl?: string; 
    videoTitle?: string;
    startedAt?: Date;
    pausedAt?: Date;
  }> {
    return this.http.get<{ 
      isPlaying: boolean; 
      isPaused?: boolean;
      videoUrl?: string; 
      videoTitle?: string;
      startedAt?: string;
      pausedAt?: string;
    }>(`${this.apiUrl}/screens/${screenId}/playing`).pipe(
      map(result => ({
        ...result,
        startedAt: result.startedAt ? new Date(result.startedAt) : undefined,
        pausedAt: result.pausedAt ? new Date(result.pausedAt) : undefined
      })),
      catchError(error => {
        console.error('Error getting playing video:', error);
        return of({ isPlaying: false, isPaused: false });
      })
    );
  }

  /**
   * Get screen by ID with full details
   * Backend API: GET /api/screens/:id
   * Response: Screen
   */
  getScreenById(screenId: number): Observable<Screen> {
    return this.http.get<Screen>(`${this.apiUrl}/screens/${screenId}`).pipe(
      map(screen => ({
        ...screen,
        lastConnected: new Date(screen.lastConnected),
        startDate: screen.startDate ? new Date(screen.startDate) : null,
        endDate: screen.endDate ? new Date(screen.endDate) : null
      })),
      catchError(error => {
        console.error('Error fetching screen:', error);
        return throwError(() => error);
      })
    );
  }

  // ========== Screen Regions Methods ==========

  /**
   * Get regions for a screen
   * Backend API: GET /api/screens/:id/regions
   */
  getScreenRegions(screenId: number): Observable<{ success: boolean; regions: ScreenRegion[] }> {
    return this.http.get<{ success: boolean; regions: ScreenRegion[] }>(
      `${this.apiUrl}/screens/${screenId}/regions`
    ).pipe(
      catchError(error => {
        console.error('Error fetching screen regions:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Create a screen region
   * Backend API: POST /api/screens/:id/regions
   */
  createScreenRegion(screenId: number, data: CreateScreenRegionRequest): Observable<{ success: boolean; region: ScreenRegion }> {
    return this.http.post<{ success: boolean; region: ScreenRegion }>(
      `${this.apiUrl}/screens/${screenId}/regions`,
      data
    ).pipe(
      catchError(error => {
        console.error('Error creating screen region:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Update a screen region
   * Backend API: PUT /api/screens/:id/regions/:regionId
   */
  updateScreenRegion(screenId: number, regionId: number, data: Partial<CreateScreenRegionRequest>): Observable<{ success: boolean; region: ScreenRegion }> {
    return this.http.put<{ success: boolean; region: ScreenRegion }>(
      `${this.apiUrl}/screens/${screenId}/regions/${regionId}`,
      data
    ).pipe(
      catchError(error => {
        console.error('Error updating screen region:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Delete a screen region
   * Backend API: DELETE /api/screens/:id/regions/:regionId
   */
  deleteScreenRegion(screenId: number, regionId: number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(
      `${this.apiUrl}/screens/${screenId}/regions/${regionId}`
    ).pipe(
      catchError(error => {
        console.error('Error deleting screen region:', error);
        return throwError(() => error);
      })
    );
  }

  // ========== Advertisement Schedules Methods ==========

  /**
   * Get schedules for a screen
   * Backend API: GET /api/screens/:id/schedules
   */
  getScreenSchedules(screenId: number): Observable<{ success: boolean; schedules: AdvertisementSchedule[] }> {
    return this.http.get<{ success: boolean; schedules: AdvertisementSchedule[] }>(
      `${this.apiUrl}/screens/${screenId}/schedules`
    ).pipe(
      map(res => ({
        ...res,
        schedules: (res.schedules || []).map(s => ({
          ...s,
          startDate: this.parseDateOnlyLocal((s as any).startDate),
          endDate: this.parseDateOnlyLocal((s as any).endDate)
        }))
      })),
      catchError(error => {
        console.error('Error fetching screen schedules:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Create or update an advertisement schedule
   * Backend API: POST /api/screens/:id/schedules
   */
  createAdvertisementSchedule(screenId: number, data: CreateAdvertisementScheduleRequest): Observable<{ success: boolean; schedule: AdvertisementSchedule }> {
    return this.http.post<{ success: boolean; schedule: AdvertisementSchedule }>(
      `${this.apiUrl}/screens/${screenId}/schedules`,
      data
    ).pipe(
      catchError(error => {
        console.error('Error creating advertisement schedule:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Update an advertisement schedule
   * Backend API: PUT /api/screens/:id/schedules/:adId
   */
  updateAdvertisementSchedule(screenId: number, adId: number, data: Partial<CreateAdvertisementScheduleRequest>): Observable<{ success: boolean; schedule: AdvertisementSchedule }> {
    return this.http.put<{ success: boolean; schedule: AdvertisementSchedule }>(
      `${this.apiUrl}/screens/${screenId}/schedules/${adId}`,
      data
    ).pipe(
      catchError(error => {
        console.error('Error updating advertisement schedule:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Delete an advertisement schedule
   * Backend API: DELETE /api/screens/:id/schedules/:adId
   */
  deleteAdvertisementSchedule(screenId: number, adId: number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(
      `${this.apiUrl}/screens/${screenId}/schedules/${adId}`
    ).pipe(
      catchError(error => {
        console.error('Error deleting advertisement schedule:', error);
        return throwError(() => error);
      })
    );
  }

  setFullscreen(screenId: number, regionId?: number | null, enabled: boolean = true): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/screens/${screenId}/fullscreen`,
      { regionId, enabled }
    ).pipe(
      catchError(error => {
        console.error('Error setting fullscreen:', error);
        return throwError(() => error);
      })
    );
  }

  setFullscreenInRegion(screenId: number, regionId: number, enabled: boolean = true): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/screens/${screenId}/fullscreen`,
      { regionId, enabled }
    ).pipe(
      catchError(error => {
        console.error('Error setting fullscreen in region:', error);
        return throwError(() => error);
      })
    );
  }
}

