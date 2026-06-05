import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { ScreenService, Screen, ScreenRegion, AdvertisementSchedule } from '../../../../core/services/screen.service';
import { AdvertisementsService, Advertisement } from '../../../../core/services/advertisements.service';
import { interval, Subscription, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

interface PlayingVideoInfo {
  isPlaying: boolean;
  isPaused?: boolean;
  videoUrl?: string;
  videoTitle?: string;
  startedAt?: Date;
  pausedAt?: Date;
}

@Component({
  selector: 'app-screen-monitor',
  templateUrl: './screen-monitor.component.html',
  styleUrls: ['./screen-monitor.component.scss']
})
export class ScreenMonitorComponent implements OnInit, OnDestroy {
  currentLanguage: 'ar' | 'en' = 'ar';
  screens: Screen[] = [];
  selectedScreen: Screen | null = null;
  playingVideo: PlayingVideoInfo | null = null;
  isLoading = false;
  showMessage = false;
  message = '';
  messageType: 'success' | 'error' | 'warning' | 'info' = 'info';
  showConfirmDialog = false;
  confirmDialogData: any = {};

  // Screen Regions and Schedules
  screenRegions: ScreenRegion[] = [];
  advertisementSchedules: AdvertisementSchedule[] = [];
  regionAdvertisements: Map<number, { advertisement: Advertisement; schedule: AdvertisementSchedule }> = new Map();
  isLoadingRegions = false;
  isLoadingSchedules = false;

  // Quick IP edit for local testing
  screenIpForEdit = '';
  isUpdatingIp = false;
  isRefreshingPlayer = false;

  // Status polling
  private statusPollSubscription?: Subscription;
  private readonly POLL_INTERVAL = 3000; // 3 seconds

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private screenService: ScreenService,
    private advertisementsService: AdvertisementsService
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadScreens();
  }

  ngOnDestroy(): void {
    if (this.statusPollSubscription) {
      this.statusPollSubscription.unsubscribe();
    }
  }

  loadScreens(): void {
    this.isLoading = true;
    this.screenService.getScreens().subscribe({
      next: (screens) => {
        this.screens = screens;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading screens:', error);
        this.isLoading = false;
        this.showMessageBanner('error', this.getTranslation('errorLoadingScreens') || 'Error loading screens');
      }
    });
  }

  selectScreen(screen: Screen): void {
    // Stop previous polling
    if (this.statusPollSubscription) {
      this.statusPollSubscription.unsubscribe();
    }
    
    this.playingVideo = null;
    this.isLoading = true;
    
    // Fetch full screen data via API (single API call with all details)
    this.screenService.getScreenById(screen.id).subscribe({
      next: (fullScreenData) => {
        this.selectedScreen = fullScreenData;
        this.screenIpForEdit = fullScreenData.ipAddress || '';
        this.isLoading = false;
        
        // Load playing video info
        this.loadPlayingVideo();
        
        // Load screen regions and schedules
        this.loadScreenRegionsAndSchedules();
      },
      error: (error) => {
        console.error('Error loading screen details:', error);
        this.isLoading = false;
        this.showMessageBanner('error', this.getTranslation('errorLoadingScreenDetails') || 'Error loading screen details');
        // Fallback to basic screen data
        this.selectedScreen = screen;
        this.screenIpForEdit = screen.ipAddress || '';
        this.loadPlayingVideo();
        this.loadScreenRegionsAndSchedules();
      }
    });
  }

  updateScreenIp(): void {
    if (!this.selectedScreen) return;
    const newIp = this.screenIpForEdit.trim();
    this.isUpdatingIp = true;
    this.screenService.updateScreen(this.selectedScreen.id, { name: this.selectedScreen.name, ipAddress: newIp || null }).subscribe({
      next: (updated) => {
        this.isUpdatingIp = false;
        if (this.selectedScreen) this.selectedScreen.ipAddress = updated.ipAddress ?? null;
        this.showMessageBanner('success', this.translationService.getTranslation('ipUpdated' as any, this.currentLanguage) || 'IP updated. Open player at same IP to connect.');
      },
      error: (err) => {
        this.isUpdatingIp = false;
        this.showMessageBanner('error', err.error?.error || err.message || 'Failed to update IP');
      }
    });
  }

  refreshPlayer(): void {
    if (!this.selectedScreen) {
      this.showMessageBanner('error', this.getTranslation('selectScreen') || 'Please select a screen');
      return;
    }
    this.isRefreshingPlayer = true;
    this.screenService.refreshPlayer(this.selectedScreen.id, {
      deviceId: this.selectedScreen.deviceId ?? undefined,
      ipAddress: this.selectedScreen.ipAddress ?? undefined
    }).subscribe({
      next: (res) => {
        this.isRefreshingPlayer = false;
        if (res.success) {
          this.showMessageBanner('success', res.message || this.getTranslation('refreshSent') || 'Refresh command sent to player');
        } else {
          this.showMessageBanner('warning', res.message || 'No player connected for this screen.');
        }
      },
      error: (err) => {
        this.isRefreshingPlayer = false;
        this.showMessageBanner('error', err.error?.error || err.message || 'Failed to send refresh command');
      }
    });
  }

  loadPlayingVideo(): void {
    if (!this.selectedScreen) {
      return;
    }

    this.screenService.getPlayingVideo(this.selectedScreen.id).subscribe({
      next: (video) => {
        this.playingVideo = video;
        
        // Start polling if video is playing or paused
        if (video.isPlaying || video.isPaused) {
          this.startStatusPolling();
        } else {
          // Stop polling if video is not playing
          if (this.statusPollSubscription) {
            this.statusPollSubscription.unsubscribe();
            this.statusPollSubscription = undefined;
          }
        }
      },
      error: (error) => {
        console.error('Error loading playing video:', error);
        this.playingVideo = { isPlaying: false, isPaused: false };
      }
    });
  }

  startStatusPolling(): void {
    // Stop existing polling
    if (this.statusPollSubscription) {
      this.statusPollSubscription.unsubscribe();
    }

    // Only poll if video is playing or paused
    this.statusPollSubscription = interval(this.POLL_INTERVAL).subscribe(() => {
      if (this.selectedScreen && (this.playingVideo?.isPlaying || this.playingVideo?.isPaused)) {
        this.loadPlayingVideo();
      } else {
        // If video is not playing and not paused, stop polling
        if (this.statusPollSubscription) {
          this.statusPollSubscription.unsubscribe();
          this.statusPollSubscription = undefined;
        }
      }
    });
  }

  getAvailableVideoUrl(): string | null {
    if (!this.selectedScreen) {
      return null;
    }

    // First check if there's a currently playing video
    if (this.playingVideo?.videoUrl) {
      return this.playingVideo.videoUrl;
    }

    // Fallback: Check assigned advertisements from the screen data
    if (this.selectedScreen.assignedAdvertisements && 
        Array.isArray(this.selectedScreen.assignedAdvertisements) && 
        this.selectedScreen.assignedAdvertisements.length > 0) {
      // Get the first video advertisement
      const videoAd = this.selectedScreen.assignedAdvertisements.find(
        ad => ad.type === 'video' && ad.fileUrl
      );
      if (videoAd && videoAd.fileUrl) {
        return videoAd.fileUrl;
      }
      
      // If no video, check for any advertisement with fileUrl
      const anyAd = this.selectedScreen.assignedAdvertisements.find(
        ad => ad.fileUrl
      );
      if (anyAd && anyAd.fileUrl) {
        return anyAd.fileUrl;
      }
    }

    return null;
  }

  playVideoFullScreen(): void {
    if (!this.selectedScreen) {
      this.showMessageBanner('error', this.getTranslation('selectScreen') || 'Please select a screen');
      return;
    }

    const videoUrl = this.getAvailableVideoUrl();
    if (!videoUrl) {
      // Check if there are assigned advertisements but no video URL found
      if (this.selectedScreen.assignedAdvertisements && 
          this.selectedScreen.assignedAdvertisements.length > 0) {
        // Try to get first video advertisement
        const videoAd = this.selectedScreen.assignedAdvertisements.find(
          ad => ad.type === 'video' && ad.fileUrl
        ) || this.selectedScreen.assignedAdvertisements.find(ad => ad.fileUrl);
        
        if (videoAd && videoAd.fileUrl) {
          // Use this advertisement's URL for full-screen
          this.isLoading = true;
          this.screenService.playVideo(
            this.selectedScreen.id,
            videoAd.fileUrl,
            videoAd.title || videoAd.fileName,
            false,
            null
            // No regionId = full-screen
          ).subscribe({
            next: (result) => {
              this.isLoading = false;
              if (result.success) {
                this.showMessageBanner('success', result.message || this.getTranslation('videoPlaying') || 'Video is playing in full-screen');
                this.loadPlayingVideo();
              } else {
                this.showMessageBanner('error', result.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
              }
            },
            error: (error) => {
              this.isLoading = false;
              console.error('Error playing video:', error);
              this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
            }
          });
          return;
        }
      }
      
      this.showMessageBanner('warning', this.getTranslation('noVideoAvailable') || 'No video available to play');
      return;
    }

    // Play full-screen (no regionId)
    this.isLoading = true;
    this.screenService.playVideo(
      this.selectedScreen.id,
      videoUrl,
      this.playingVideo?.videoTitle,
      false,
      null
      // No regionId = full-screen
    ).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || this.getTranslation('videoPlaying') || 'Video is playing in full-screen');
          this.loadPlayingVideo();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error playing video:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
      }
    });
  }

  playVideo(): void {
    if (!this.selectedScreen) {
      this.showMessageBanner('error', this.getTranslation('selectScreen') || 'Please select a screen');
      return;
    }

    const videoUrl = this.getAvailableVideoUrl();
    if (!videoUrl) {
      // Check if there are assigned advertisements but no video URL found
      if (this.selectedScreen.assignedAdvertisements && 
          this.selectedScreen.assignedAdvertisements.length > 0) {
        // Try to get first video advertisement
        const videoAd = this.selectedScreen.assignedAdvertisements.find(
          ad => ad.type === 'video' && ad.fileUrl
        ) || this.selectedScreen.assignedAdvertisements.find(ad => ad.fileUrl);
        
        if (videoAd && videoAd.fileUrl) {
          // Use this advertisement's URL
          this.isLoading = true;
          this.screenService.playVideo(
            this.selectedScreen.id,
            videoAd.fileUrl,
            videoAd.title || videoAd.fileName
          ).subscribe({
            next: (result) => {
              this.isLoading = false;
              if (result.success) {
              if (this.selectedScreen) {
                this.selectedScreen.status = 'playing';
              }
                this.showMessageBanner('success', result.message || this.getTranslation('videoPlaying') || 'Video is playing');
                this.loadPlayingVideo();
              this.loadScreenRegionsAndSchedules();
              } else {
                this.showMessageBanner('error', result.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
              }
            },
            error: (error) => {
              this.isLoading = false;
              console.error('Error playing video:', error);
              this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
            }
          });
          return;
        }
      }
      
      this.showMessageBanner('warning', this.getTranslation('noVideoAvailable') || 'No video available to play');
      return;
    }

    this.isLoading = true;
    this.screenService.playVideo(
      this.selectedScreen.id,
      videoUrl,
      this.playingVideo?.videoTitle
    ).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          if (this.selectedScreen) {
            this.selectedScreen.status = 'playing';
          }
          this.showMessageBanner('success', result.message || this.getTranslation('videoPlaying') || 'Video is playing');
          this.loadPlayingVideo();
          this.loadScreenRegionsAndSchedules();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error playing video:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
      }
    });
  }

  stopVideo(): void {
    if (!this.selectedScreen) {
      return;
    }

    this.confirmDialogData = {
      title: this.getTranslation('confirmStopVideo') || 'Stop Video',
      message: this.getTranslation('confirmStopVideoMessage') || 'Are you sure you want to stop the video?',
      confirmText: this.getTranslation('stop') || 'Stop',
      cancelText: this.getTranslation('cancel') || 'Cancel',
      onConfirm: () => {
        this.executeStopVideo();
      }
    };
    this.showConfirmDialog = true;
  }

  pauseVideo(): void {
    if (!this.selectedScreen) {
      return;
    }

    this.isLoading = true;
    this.screenService.pauseVideo(this.selectedScreen.id).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || this.getTranslation('videoPaused') || 'Video is paused');
          this.loadPlayingVideo();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('pauseVideoFailed') || 'Failed to pause video');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error pausing video:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('pauseVideoFailed') || 'Failed to pause video');
      }
    });
  }

  resumeVideo(): void {
    if (!this.selectedScreen) {
      return;
    }

    this.isLoading = true;
    this.screenService.resumeVideo(this.selectedScreen.id).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || this.getTranslation('videoResumed') || 'Video is resumed');
          this.loadPlayingVideo();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('resumeVideoFailed') || 'Failed to resume video');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error resuming video:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('resumeVideoFailed') || 'Failed to resume video');
      }
    });
  }

  toggleFullscreen(): void {
    if (!this.selectedScreen) {
      return;
    }

    // Send fullscreen command to the device
    // This would require a backend API endpoint for fullscreen
    this.showMessageBanner('info', this.getTranslation('fullscreenNotImplemented') || 'Fullscreen feature not yet implemented');
  }

  onConfirmDialogConfirmed(): void {
    this.showConfirmDialog = false;
    
    // Execute callback if provided
    if (this.confirmDialogData.onConfirm) {
      this.confirmDialogData.onConfirm();
      return;
    }
    
    // Default: execute full-screen stop
    this.executeStopVideo();
  }

  executeStopVideo(): void {
    if (!this.selectedScreen) {
      return;
    }

    this.isLoading = true;
    this.screenService.stopVideo(this.selectedScreen.id).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || this.getTranslation('videoStopped') || 'Video is stopped');
          this.playingVideo = null;
          
          // Stop polling
          if (this.statusPollSubscription) {
            this.statusPollSubscription.unsubscribe();
            this.statusPollSubscription = undefined;
          }
          
          // Load once to confirm stopped state
          this.loadPlayingVideo();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('stopVideoFailed') || 'Failed to stop video');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error stopping video:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('stopVideoFailed') || 'Failed to stop video');
      }
    });
  }

  onConfirmDialogCancelled(): void {
    this.showConfirmDialog = false;
  }

  showMessageBanner(type: 'success' | 'error' | 'warning' | 'info', message: string): void {
    this.messageType = type;
    this.message = message;
    this.showMessage = true;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }

  getScreenStatusClass(status: string): string {
    switch (status) {
      case 'online': return 'status-online';
      case 'offline': return 'status-offline';
      case 'playing': return 'status-playing';
      case 'paused': return 'status-paused';
      default: return 'status-unknown';
    }
  }

  getScreenStatusText(status: string): string {
    switch (status) {
      case 'online': return this.getTranslation('online') || 'Online';
      case 'offline': return this.getTranslation('offline') || 'Offline';
      case 'playing': return this.getTranslation('playing') || 'Playing';
      case 'paused': return this.getTranslation('paused') || 'Paused';
      default: return status;
    }
  }

  // ========== Screen Regions and Schedules Methods ==========

  loadScreenRegionsAndSchedules(): void {
    if (!this.selectedScreen) {
      return;
    }

    this.isLoadingRegions = true;
    this.isLoadingSchedules = true;

    // Load regions and schedules in parallel
    forkJoin({
      regions: this.screenService.getScreenRegions(this.selectedScreen.id),
      schedules: this.screenService.getScreenSchedules(this.selectedScreen.id)
    }).subscribe({
      next: (response) => {
        // Load regions
        this.screenRegions = response.regions.regions || [];
        this.isLoadingRegions = false;

        // Load schedules
        this.advertisementSchedules = response.schedules.schedules || [];
        this.isLoadingSchedules = false;

        // Load advertisement details for each schedule
        this.loadAdvertisementDetails();
      },
      error: (error) => {
        console.error('Error loading regions and schedules:', error);
        this.isLoadingRegions = false;
        this.isLoadingSchedules = false;
        this.screenRegions = [];
        this.advertisementSchedules = [];
        this.regionAdvertisements.clear();
      }
    });
  }

  loadAdvertisementDetails(): void {
    if (!this.selectedScreen) {
      this.regionAdvertisements.clear();
      return;
    }

    // No schedules: show assigned ads (e.g. images) in first region so preview and Play work without schedule
    if (this.advertisementSchedules.length === 0) {
      this.regionAdvertisements.clear();
      const assigned = this.selectedScreen.assignedAdvertisements;
      if (this.screenRegions.length > 0 && assigned && assigned.length > 0) {
        const firstRegion = this.screenRegions[0];
        const firstAd = assigned.find((a: any) => a && a.fileUrl);
        if (firstAd && firstRegion) {
          const dummySchedule = {
            id: 0,
            screenId: this.selectedScreen.id,
            adId: firstAd.id ?? 0,
            regionId: firstRegion.id,
            startDate: null,
            endDate: null,
            startTime: null,
            endTime: null,
            isActive: true,
            priority: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          } as AdvertisementSchedule;
          this.regionAdvertisements.set(firstRegion.id, { advertisement: firstAd, schedule: dummySchedule });
        }
      }
      return;
    }

    // Get unique advertisement IDs from schedules
    const adIds = [...new Set(this.advertisementSchedules.map(s => s.adId))];

    // Load all advertisement details in parallel
    const adRequests = adIds.map(adId => 
      this.advertisementsService.getAdvertisementById(adId).pipe(
        map(ad => ({ adId, advertisement: ad }))
      )
    );

    if (adRequests.length === 0) {
      this.regionAdvertisements.clear();
      return;
    }

    forkJoin(adRequests).subscribe({
      next: (results) => {
        this.regionAdvertisements.clear();

        // Map advertisements to their schedules and regions
        results.forEach(({ adId, advertisement }) => {
          const schedule = this.advertisementSchedules.find(s => s.adId === adId);
          if (schedule && schedule.regionId) {
            this.regionAdvertisements.set(schedule.regionId, {
              advertisement,
              schedule
            });
          }
        });
      },
      error: (error) => {
        console.error('Error loading advertisement details:', error);
        this.regionAdvertisements.clear();
      }
    });
  }

  getAdvertisementForRegion(regionId: number): { advertisement: Advertisement; schedule: AdvertisementSchedule } | null {
    return this.regionAdvertisements.get(regionId) || null;
  }

  getRegionName(region: ScreenRegion): string {
    const positionMap: { [key: string]: { ar: string; en: string } } = {
      'left': { ar: 'يسار', en: 'Left' },
      'right': { ar: 'يمين', en: 'Right' },
      'top': { ar: 'أعلى', en: 'Top' },
      'bottom': { ar: 'أسفل', en: 'Bottom' },
      'custom': { ar: 'مخصص', en: 'Custom' }
    };

    const position = positionMap[region.regionPosition] || { ar: region.regionPosition, en: region.regionPosition };
    return this.currentLanguage === 'ar' ? position.ar : position.en;
  }

  isScheduleActive(schedule: AdvertisementSchedule): boolean {
    if (!schedule.isActive) {
      return false;
    }

    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Minutes since midnight

    // Check date range
    if (schedule.startDate) {
      const startDate = new Date(schedule.startDate);
      startDate.setHours(0, 0, 0, 0);
      if (now < startDate) {
        return false; // Not started yet
      }
    }

    if (schedule.endDate) {
      const endDate = new Date(schedule.endDate);
      endDate.setHours(23, 59, 59, 999);
      if (now > endDate) {
        return false; // Already ended
      }
    }

    // Check time range
    if (schedule.startTime) {
      const [startHour, startMin] = schedule.startTime.split(':').map(Number);
      const startMinutes = startHour * 60 + startMin;
      if (currentTime < startMinutes) {
        return false; // Not started yet today
      }
    }

    if (schedule.endTime) {
      const [endHour, endMin] = schedule.endTime.split(':').map(Number);
      const endMinutes = endHour * 60 + endMin;
      if (currentTime > endMinutes) {
        return false; // Already ended today
      }
    }

    return true;
  }

  playVideoInRegion(regionId: number, muted: boolean = false): void {
    if (!this.selectedScreen) {
      return;
    }

    const regionAd = this.regionAdvertisements.get(regionId);
    if (!regionAd || !regionAd.advertisement.fileUrl) {
      this.showMessageBanner('warning', this.getTranslation('noAdvertisementAssigned') || 'No advertisement assigned to this region');
      return;
    }

    this.isLoading = true;
    this.screenService.playVideoInRegion(
      this.selectedScreen.id,
      regionAd.advertisement.fileUrl,
      regionAd.advertisement.title || 'Advertisement',
      regionId,
      muted
    ).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          if (this.selectedScreen) {
            this.selectedScreen.status = 'playing';
          }
          this.showMessageBanner('success', result.message || this.getTranslation('videoPlaying') || 'Video is playing');
          this.loadScreenRegionsAndSchedules();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error playing video in region:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
      }
    });
  }

  pauseVideoInRegion(regionId: number): void {
    if (!this.selectedScreen) {
      return;
    }

    this.isLoading = true;
    this.screenService.pauseVideoInRegion(this.selectedScreen.id, regionId).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || this.getTranslation('videoPaused') || 'Video paused in region');
          this.loadScreenRegionsAndSchedules();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('pauseVideoFailed') || 'Failed to pause video');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error pausing video in region:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('pauseVideoFailed') || 'Failed to pause video');
      }
    });
  }

  resumeVideoInRegion(regionId: number): void {
    if (!this.selectedScreen) {
      return;
    }

    this.isLoading = true;
    this.screenService.resumeVideoInRegion(this.selectedScreen.id, regionId).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || this.getTranslation('videoResumed') || 'Video resumed in region');
          this.loadScreenRegionsAndSchedules();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('resumeVideoFailed') || 'Failed to resume video');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error resuming video in region:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('resumeVideoFailed') || 'Failed to resume video');
      }
    });
  }

  setFullscreenInRegion(regionId: number, enabled: boolean): void {
    if (!this.selectedScreen) {
      return;
    }

    this.isLoading = true;
    this.screenService.setFullscreenInRegion(this.selectedScreen.id, regionId, enabled).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || (enabled ? 'Fullscreen enabled' : 'Fullscreen disabled'));
        } else {
          this.showMessageBanner('error', result.message || 'Failed to set fullscreen');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error setting fullscreen:', error);
        this.showMessageBanner('error', error.error?.error || error.message || 'Failed to set fullscreen');
      }
    });
  }

  stopVideoInRegion(regionId: number): void {
    if (!this.selectedScreen) {
      return;
    }

    this.confirmDialogData = {
      title: this.getTranslation('confirmStopVideo') || 'Stop Video',
      message: this.getTranslation('confirmStopVideoMessage') || 'Are you sure you want to stop the video in this region?',
      confirmText: this.getTranslation('stop') || 'Stop',
      cancelText: this.getTranslation('cancel') || 'Cancel',
      onConfirm: () => {
        this.executeStopVideoInRegion(regionId);
      }
    };
    this.showConfirmDialog = true;
  }

  executeStopVideoInRegion(regionId: number): void {
    if (!this.selectedScreen) {
      return;
    }

    this.isLoading = true;
    this.screenService.stopVideoInRegion(this.selectedScreen.id, regionId).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          // Reflect stopped state in UI so preview hides
          if (this.selectedScreen) {
            this.selectedScreen.status = 'online';
          }
          this.showMessageBanner('success', result.message || this.getTranslation('videoStopped') || 'Video stopped');
          this.loadScreenRegionsAndSchedules();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('stopVideoFailed') || 'Failed to stop video');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error stopping video in region:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('stopVideoFailed') || 'Failed to stop video');
      }
    });
  }

  getScheduleStatus(schedule: AdvertisementSchedule): 'active' | 'upcoming' | 'ended' {
    if (!schedule.isActive) {
      return 'ended';
    }

    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    // Check if it's upcoming
    if (schedule.startDate) {
      const startDate = new Date(schedule.startDate);
      startDate.setHours(0, 0, 0, 0);
      if (now < startDate) {
        return 'upcoming';
      }
    }

    if (schedule.startTime) {
      const [startHour, startMin] = schedule.startTime.split(':').map(Number);
      const startMinutes = startHour * 60 + startMin;
      if (currentTime < startMinutes) {
        return 'upcoming';
      }
    }

    // Check if it's ended
    if (schedule.endDate) {
      const endDate = new Date(schedule.endDate);
      endDate.setHours(23, 59, 59, 999);
      if (now > endDate) {
        return 'ended';
      }
    }

    if (schedule.endTime) {
      const [endHour, endMin] = schedule.endTime.split(':').map(Number);
      const endMinutes = endHour * 60 + endMin;
      if (currentTime > endMinutes) {
        return 'ended';
      }
    }

    return 'active';
  }
}
