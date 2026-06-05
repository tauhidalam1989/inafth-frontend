import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import {
  ScreenService,
  Screen,
  ScreenRegion,
  AdvertisementSchedule,
  CreateScreenRegionRequest,
  CreateAdvertisementScheduleRequest,
  ScreenAdvertisementAssignment
} from '../../../../core/services/screen.service';
import { AdvertisementsService, Advertisement } from '../../../../core/services/advertisements.service';
import { interval, Subscription } from 'rxjs';
import { AlertDialogData } from '../../../../shared/components/alert-dialog/alert-dialog.component';
import { ConfirmDialogData } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { environment } from '../../../../../environments/environment';

interface PlayingVideoInfo {
  isPlaying: boolean;
  isPaused?: boolean;
  videoUrl?: string;
  videoTitle?: string;
  startedAt?: Date;
  pausedAt?: Date;
}

@Component({
  selector: 'app-screen-playback',
  templateUrl: './screen-playback.component.html',
  styleUrls: ['./screen-playback.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScreenPlaybackComponent implements OnInit, OnDestroy {
  currentLanguage: 'ar' | 'en' = 'ar';
  screens: Screen[] = [];
  selectedScreen: Screen | null = null;
  selectedScreenId: number | null = null;
  selectedAdvertisement: Advertisement | null = null;
  videoUrl: string = '';
  videoTitle: string = '';
  isMuted: boolean = false;
  
  // Advertisements
  advertisements: Advertisement[] = [];
  filteredAdvertisements: Advertisement[] = [];
  assignedAdvertisements: Advertisement[] = [];
  isLoadingAdvertisements = false;
  isLoadingAssignedAds = false;
  showAdvertisementModal = false;
  searchTerm: string = '';
  
  playingVideo: PlayingVideoInfo | null = null;
  isLoading = false;
  isPlaying = false;
  isPaused = false;
  
  // Screen settings
  orientation: 'portrait' | 'landscape' | 'auto' = 'landscape';
  screenSize: 'small' | 'medium' | 'large' | 'custom' = 'medium';
  screenWidth: number | null = null;
  screenHeight: number | null = null;
  /** IP address for quick edit (local testing) */
  screenIpForEdit: string = '';
  isUpdatingIp = false;
  isRefreshingPlayer = false;
  isApplyingToGroup = false;
  /** 0 = By Screen, 1 = By Group */
  activePlaybackTab = 0;

  // Screen Regions
  screenRegions: ScreenRegion[] = [];
  regionType: 'split_horizontal' | 'split_vertical' | 'custom' = 'split_horizontal';
  isLoadingRegions = false;
  showRegionSetup = false;
  showRegionEditor = false;
  selectedRegionForEdit: ScreenRegion | null = null;
  isSelectingRegion = false;
  regionSelectionStart: { x: number; y: number } | null = null;
  regionSelectionEnd: { x: number; y: number } | null = null;
  pendingSelections: Array<{ start: { x: number; y: number }; end: { x: number; y: number } }> = [];
  isResizingRegion = false;
  resizingHandle: 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | null = null;
  resizeStartPosition: { x: number; y: number } | null = null;
  resizeStartRegion: { x: number; y: number; width: number; height: number } | null = null;
  previewOrientation: 'landscape' | 'portrait' = 'landscape';
  previewScreenWidth = 800;
  previewScreenHeight = 450;
  
  // Advertisement Schedules
  advertisementSchedules: Map<number, AdvertisementSchedule> = new Map();
  editingScheduleAdId: number | null = null;
  showScheduleModal = false;
  scheduleFormData: any = {
    regionId: null,
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    priority: 0,
    isActive: true
  };
  
  // Status polling
  private statusPollSubscription?: Subscription;
  private readonly POLL_INTERVAL = 3000; // 3 seconds
  
  // Alert Dialog
  showAlertDialog = false;
  alertDialogData: AlertDialogData = {
    message: '',
    type: 'info'
  };
  
  // Confirm Dialog
  showConfirmDialog = false;
  confirmDialogData: ConfirmDialogData = {
    title: 'Confirm',
    message: '',
    confirmText: 'OK',
    cancelText: 'Cancel',
    type: 'warning'
  };
  confirmDialogCallback: (() => void) | null = null;

  /** Drag-reorder assigned ads (HTML5 DnD). */
  dragAssignedFromIndex: number | null = null;
  isSavingPlaylist = false;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private screenService: ScreenService,
    private advertisementsService: AdvertisementsService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Initialize preview dimensions
    this.previewScreenWidth = 800;
    this.previewScreenHeight = 450;
    this.previewOrientation = 'landscape';
    
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    // Only load screens for dropdown - don't load advertisements yet
    this.loadScreens();
    
    // Check if screenId is provided in query params
    this.route.queryParams.subscribe(params => {
      if (params['screenId']) {
        const screenId = parseInt(params['screenId']);
        if (!isNaN(screenId)) {
          // Wait for screens to load, then select the screen
          this.screenService.getScreens().subscribe({
            next: (screens) => {
              this.screens = screens;
              const screen = screens.find(s => s.id === screenId);
              if (screen) {
                // Set the selected screen ID to trigger selection
                this.selectedScreenId = screenId;
                this.onScreenChange();
              }
            },
            error: (error) => {
              console.error('Error loading screens:', error);
            }
          });
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.statusPollSubscription) {
      this.statusPollSubscription.unsubscribe();
    }
    
    // Clean up document event listeners
    document.removeEventListener('mousemove', this.onDocumentMouseMove);
    document.removeEventListener('mouseup', this.onDocumentMouseUp);
  }

  loadScreens(): void {
    this.isLoading = true;
    this.screenService.getScreens().subscribe({
      next: (screens) => {
        this.screens = screens;
        this.isLoading = false;
        // Don't auto-select - let user select manually
      },
      error: (error) => {
        console.error('Error loading screens:', error);
        this.isLoading = false;
      }
    });
  }

  /** Switch to By Screen tab and select the given screen (e.g. from By Group tab). */
  switchToByScreenAndSelect(screenId: number): void {
    this.activePlaybackTab = 0;
    this.selectedScreenId = screenId;
    this.onScreenChange();
  }

  /** Load this screen when selected from By Group tab (stay on By Group tab, show regions/ads/settings below). */
  loadScreenFromGroup(screenId: number): void {
    this.selectedScreenId = screenId;
    this.onScreenChange();
  }

  onScreenChange(): void {
    if (!this.selectedScreenId) {
      this.selectedScreen = null;
      this.selectedAdvertisement = null;
      this.assignedAdvertisements = [];
      this.advertisements = [];
      this.filteredAdvertisements = [];
      this.playingVideo = null;
      
      // Stop polling
      if (this.statusPollSubscription) {
        this.statusPollSubscription.unsubscribe();
      }
      return;
    }

    // Find the screen from the list to get basic info
    const screen = this.screens.find(s => s.id === this.selectedScreenId);
    if (!screen) {
      return;
    }

    // Reset previous selection
    this.selectedScreen = null;
    this.selectedAdvertisement = null;
    this.assignedAdvertisements = [];
    this.advertisements = [];
    this.filteredAdvertisements = [];
    this.playingVideo = null;
    
    // Stop previous polling
    if (this.statusPollSubscription) {
      this.statusPollSubscription.unsubscribe();
    }
    
    // Fetch full screen data with all related information (including assigned advertisements)
    this.isLoading = true;
    this.screenService.getScreenById(screen.id).subscribe({
      next: (fullScreenData) => {
        this.selectedScreen = fullScreenData;
        this.screenIpForEdit = fullScreenData.ipAddress || '';
        this.orientation = fullScreenData.orientation || 'landscape';
        this.screenSize = fullScreenData.screenSize || 'medium';
        this.screenWidth = fullScreenData.screenWidth || null;
        this.screenHeight = fullScreenData.screenHeight || null;
        
        // Use assignedAdvertisements directly from API response (single API call)
        if (fullScreenData.assignedAdvertisements && Array.isArray(fullScreenData.assignedAdvertisements)) {
          console.log('loadScreenForEdit - Using assignedAdvertisements from API:', fullScreenData.assignedAdvertisements.length);
          this.assignedAdvertisements = fullScreenData.assignedAdvertisements.map((ad) => ({
            ...ad,
            slideDurationSeconds:
              ad.slideDurationSeconds != null && !Number.isNaN(Number(ad.slideDurationSeconds))
                ? Number(ad.slideDurationSeconds)
                : 5
          }));
          this.isLoadingAssignedAds = false;
        } else {
          // Fallback: Load advertisements if not included in response
          this.loadAdvertisements().then(() => {
            this.loadAssignedAdvertisements();
          });
        }
        
        // Load screen regions and schedules
        this.loadScreenRegions();
        this.loadScreenSchedules();
        
        // Load playing video once - polling will start only if video is playing/paused
        this.loadPlayingVideo().then(() => {
          // Only start polling if video is actually playing or paused
          if (this.isPlaying || this.isPaused) {
            this.startStatusPolling();
          }
        });
        
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading screen details:', error);
        this.isLoading = false;
        this.showAlert('Failed to load screen details: ' + (error.error?.error || error.message), 'error');
      }
    });
  }

  loadAssignedAdvertisements(): void {
    // Check if screen has assignedAdvertisements directly from backend
    if (this.selectedScreen && (this.selectedScreen as any).assignedAdvertisements && Array.isArray((this.selectedScreen as any).assignedAdvertisements)) {
      console.log('loadAssignedAdvertisements - Using assignedAdvertisements from screen object:', (this.selectedScreen as any).assignedAdvertisements.length);
      this.assignedAdvertisements = (this.selectedScreen as any).assignedAdvertisements;
      this.isLoadingAssignedAds = false;
      return;
    }
    
    // Fallback: If assignedAdvertisements not available, filter from all ads
    if (!this.selectedScreen || !this.selectedScreen.assignedAds || this.selectedScreen.assignedAds.length === 0) {
      console.log('loadAssignedAdvertisements - No assigned ads for screen:', this.selectedScreen?.assignedAds);
      this.assignedAdvertisements = [];
      return;
    }

    console.log('loadAssignedAdvertisements - Loading ads for assigned IDs:', this.selectedScreen.assignedAds);
    this.isLoadingAssignedAds = true;
    
    // Load all advertisements and filter by assigned IDs
    this.advertisementsService.getAdvertisements({ type: 'video' }).subscribe({
      next: (response) => {
        console.log('loadAssignedAdvertisements - All advertisements loaded:', response.advertisements.length);
        console.log('loadAssignedAdvertisements - All advertisement IDs:', response.advertisements.map(ad => ad.id));
        
        this.assignedAdvertisements = response.advertisements.filter(ad => {
          const isAssigned = this.selectedScreen?.assignedAds?.includes(ad.id!);
          console.log(`loadAssignedAdvertisements - Ad ${ad.id} (${ad.title}): isAssigned=${isAssigned}`);
          return isAssigned;
        });
        
        console.log('loadAssignedAdvertisements - Filtered assigned advertisements:', this.assignedAdvertisements.length);
        console.log('loadAssignedAdvertisements - Assigned advertisement IDs:', this.assignedAdvertisements.map(ad => ad.id));
        this.isLoadingAssignedAds = false;
      },
      error: (error) => {
        console.error('Error loading assigned advertisements:', error);
        this.isLoadingAssignedAds = false;
      }
    });
  }

  loadPlayingVideo(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.selectedScreen) {
        resolve();
        return;
      }

      this.screenService.getPlayingVideo(this.selectedScreen.id).subscribe({
        next: (video) => {
          this.playingVideo = video;
          this.isPlaying = video.isPlaying;
          this.isPaused = video.isPaused || false;
          
          if (video.isPlaying && !this.isPaused) {
            this.videoUrl = video.videoUrl || '';
            this.videoTitle = video.videoTitle || '';
          }
          
          // If video stopped, stop polling
          if (!video.isPlaying && !video.isPaused) {
            if (this.statusPollSubscription) {
              this.statusPollSubscription.unsubscribe();
              this.statusPollSubscription = undefined;
            }
          }
          
          resolve();
        },
        error: (error) => {
          console.error('Error loading playing video:', error);
          this.playingVideo = { isPlaying: false, isPaused: false };
          this.isPlaying = false;
          this.isPaused = false;
          
          // Stop polling on error
          if (this.statusPollSubscription) {
            this.statusPollSubscription.unsubscribe();
            this.statusPollSubscription = undefined;
          }
          
          resolve();
        }
      });
    });
  }

  startStatusPolling(): void {
    // Stop existing polling
    if (this.statusPollSubscription) {
      this.statusPollSubscription.unsubscribe();
    }

    // Only poll if video is playing or paused
    // Don't poll if video is stopped/not playing
    this.statusPollSubscription = interval(this.POLL_INTERVAL).subscribe(() => {
      if (this.selectedScreen && (this.isPlaying || this.isPaused)) {
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

  loadAdvertisements(): Promise<void> {
    return new Promise((resolve) => {
      this.isLoadingAdvertisements = true;
      this.advertisementsService.getAdvertisements({ 
        type: 'video',
        status: 'active'
      }).subscribe({
        next: (response) => {
          this.advertisements = response.advertisements;
          this.filteredAdvertisements = [...this.advertisements];
          this.isLoadingAdvertisements = false;
          console.log('loadAdvertisements - Loaded', this.advertisements.length, 'advertisements');
          resolve();
        },
        error: (error) => {
          console.error('Error loading advertisements:', error);
          this.isLoadingAdvertisements = false;
          resolve();
        }
      });
    });
  }

  filterAdvertisements(): void {
    if (!this.searchTerm.trim()) {
      this.filteredAdvertisements = [...this.advertisements];
      return;
    }

    const search = this.searchTerm.toLowerCase();
    this.filteredAdvertisements = this.advertisements.filter(ad => 
      ad.title.toLowerCase().includes(search) ||
      (ad.description && ad.description.toLowerCase().includes(search))
    );
  }

  selectAdvertisement(advertisement: Advertisement): void {
    this.selectedAdvertisement = advertisement;
    this.videoUrl = advertisement.fileUrl;
    this.videoTitle = advertisement.title;
    this.showAdvertisementModal = true;
  }

  closeAdvertisementModal(): void {
    this.showAdvertisementModal = false;
  }

  confirmPlayAdvertisement(): void {
    if (!this.selectedScreen || !this.selectedAdvertisement) {
      return;
    }

    this.closeAdvertisementModal();
    this.playVideo();
  }

  playVideo(): void {
    if (!this.selectedScreen || !this.videoUrl.trim()) {
      this.showAlert(this.getTranslation('selectAdvertisement') || 'Please select an advertisement', 'warning');
      return;
    }

    // If selected ad is an image, build an image playlist from all assigned image ads
    let imagePlaylist: string[] | null = null;
    if (this.selectedAdvertisement && this.selectedAdvertisement.type === 'image') {
      const imageAds = this.assignedAdvertisements.filter(ad => ad.type === 'image' && ad.fileUrl);
      if (imageAds.length > 0) {
        // Rotate playlist so it starts from the selected image
        const selectedIndex = imageAds.findIndex(ad => ad.id === this.selectedAdvertisement!.id);
        const ordered = selectedIndex >= 0
          ? imageAds.slice(selectedIndex).concat(imageAds.slice(0, selectedIndex))
          : imageAds;
        imagePlaylist = ordered.map(ad => ad.fileUrl);
      }
    }

    this.isLoading = true;
    this.screenService.playVideo(
      this.selectedScreen.id,
      this.videoUrl.trim(),
      this.videoTitle.trim() || undefined,
      this.isMuted,
      imagePlaylist
    ).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          this.isPlaying = true;
          this.isPaused = false;
          this.loadPlayingVideo().then(() => {
            // Start polling when video starts playing
            this.startStatusPolling();
          });
          this.showAlert(result.message || this.getTranslation('videoPlaying') || 'Video is playing', 'success');
        } else {
          this.showAlert(result.message || this.getTranslation('playVideoFailed') || 'Failed to play video', 'error');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error playing video:', error);
        this.showAlert(error.error?.error || error.message || this.getTranslation('playVideoFailed') || 'Failed to play video', 'error');
      }
    });
  }

  pauseVideo(): void {
    if (!this.selectedScreen) return;

    this.isLoading = true;
    this.screenService.pauseVideo(this.selectedScreen.id).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          this.isPaused = true;
          this.isPlaying = false;
          this.loadPlayingVideo().then(() => {
            // Start polling when video is paused (to detect resume/stop)
            this.startStatusPolling();
          });
          this.showAlert(result.message || this.getTranslation('videoPaused') || 'Video is paused', 'success');
        } else {
          this.showAlert(result.message || this.getTranslation('pauseVideoFailed') || 'Failed to pause video', 'error');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error pausing video:', error);
        this.showAlert(error.error?.error || error.message || this.getTranslation('pauseVideoFailed') || 'Failed to pause video', 'error');
      }
    });
  }

  resumeVideo(): void {
    if (!this.selectedScreen) return;

    this.isLoading = true;
    this.screenService.resumeVideo(this.selectedScreen.id).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          this.isPlaying = true;
          this.isPaused = false;
          this.loadPlayingVideo().then(() => {
            // Start polling when video resumes
            this.startStatusPolling();
          });
          this.showAlert(result.message || this.getTranslation('videoResumed') || 'Video is resumed', 'success');
        } else {
          this.showAlert(result.message || this.getTranslation('resumeVideoFailed') || 'Failed to resume video', 'error');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error resuming video:', error);
        this.showAlert(error.error?.error || error.message || this.getTranslation('resumeVideoFailed') || 'Failed to resume video', 'error');
      }
    });
  }

  stopVideo(): void {
    if (!this.selectedScreen) return;

    this.showConfirm(
      this.getTranslation('confirmStopVideo') || 'Are you sure you want to stop the video?',
      () => {
        this.executeStopVideo();
      },
      'Confirm Stop Video',
      'warning'
    );
  }

  executeStopVideo(): void {
    if (!this.selectedScreen) return;

    this.isLoading = true;
    this.screenService.stopVideo(this.selectedScreen.id).subscribe({
      next: (result) => {
        this.isLoading = false;
        if (result.success) {
          this.isPlaying = false;
          this.isPaused = false;
          this.playingVideo = null;
          this.videoUrl = '';
          this.videoTitle = '';
          
          // Stop polling when video is stopped
          if (this.statusPollSubscription) {
            this.statusPollSubscription.unsubscribe();
            this.statusPollSubscription = undefined;
          }
          
          // Load once to confirm stopped state
          this.loadPlayingVideo();
          this.showAlert(result.message || this.getTranslation('videoStopped') || 'Video is stopped', 'success');
        } else {
          this.showAlert(result.message || this.getTranslation('stopVideoFailed') || 'Failed to stop video', 'error');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error stopping video:', error);
        this.showAlert(error.error?.error || error.message || this.getTranslation('stopVideoFailed') || 'Failed to stop video', 'error');
      }
    });
  }

  updateScreenSettings(): void {
    if (!this.selectedScreen) return;

    const updateData: any = {
      orientation: this.orientation,
      screenSize: this.screenSize
    };

    // Only include width/height if screen size is custom
    if (this.screenSize === 'custom') {
      // Convert to number, allow 0 as valid value
      updateData.screenWidth = (this.screenWidth !== null && this.screenWidth !== undefined) 
        ? Number(this.screenWidth) 
        : null;
      updateData.screenHeight = (this.screenHeight !== null && this.screenHeight !== undefined) 
        ? Number(this.screenHeight) 
        : null;
    } else {
      // Clear custom dimensions when not using custom size
      updateData.screenWidth = null;
      updateData.screenHeight = null;
    }

    console.log('updateScreenSettings - Sending payload:', JSON.stringify(updateData, null, 2));
    console.log('updateScreenSettings - screenWidth value:', this.screenWidth, 'type:', typeof this.screenWidth);
    console.log('updateScreenSettings - screenHeight value:', this.screenHeight, 'type:', typeof this.screenHeight);

    this.screenService.updateScreen(this.selectedScreen.id, updateData).subscribe({
      next: () => {
        this.showAlert(this.getTranslation('settingsUpdated') || 'Screen settings updated successfully', 'success');
        this.loadScreens();
      },
      error: (error) => {
        console.error('Error updating screen settings:', error);
        this.showAlert(error.error?.error || error.message || 'Failed to update screen settings', 'error');
      }
    });
  }

  /** Update screen IP for local testing (player will match by this IP when it connects). */
  updateScreenIp(): void {
    if (!this.selectedScreen) return;
    const newIp = this.screenIpForEdit.trim();
    this.isUpdatingIp = true;
    this.screenService.updateScreen(this.selectedScreen.id, { name: this.selectedScreen.name, ipAddress: newIp || null }).subscribe({
      next: (updated) => {
        this.isUpdatingIp = false;
        if (this.selectedScreen) this.selectedScreen.ipAddress = updated.ipAddress ?? null;
        this.showAlert(this.getTranslation('ipUpdated') || 'IP address updated. Open the player at the same IP to connect.', 'success');
      },
      error: (err) => {
        this.isUpdatingIp = false;
        this.showAlert(err.error?.error || err.message || 'Failed to update IP', 'error');
      }
    });
  }

  refreshPlayer(): void {
    if (!this.selectedScreen) return;
    this.isRefreshingPlayer = true;
    this.screenService.refreshPlayer(this.selectedScreen.id, {
      deviceId: this.selectedScreen.deviceId ?? undefined,
      ipAddress: this.selectedScreen.ipAddress ?? undefined
    }).subscribe({
      next: (res) => {
        this.isRefreshingPlayer = false;
        if (res.success) {
          this.showAlert(res.message || this.getTranslation('refreshSent') || 'Refresh command sent to player', 'success');
        } else {
          this.showAlert(res.message || 'No player connected for this screen.', 'warning');
        }
      },
      error: (err) => {
        this.isRefreshingPlayer = false;
        this.showAlert(err.error?.error || err.message || 'Failed to send refresh command', 'error');
      }
    });
  }

  applyToGroup(): void {
    if (!this.selectedScreen?.groupId) return;
    this.isApplyingToGroup = true;
    this.screenService.applyToGroup(this.selectedScreen.id).subscribe({
      next: (res) => {
        this.isApplyingToGroup = false;
        if (res.success) {
          this.showAlert(
            res.message || (res.screenCount != null ? `Layout and content applied to ${res.screenCount} screen(s) in group.` : 'Applied to group.'),
            'success'
          );
          this.screenService.getScreenById(this.selectedScreen!.id).subscribe({
            next: (fullScreenData) => {
              this.selectedScreen = fullScreenData;
              this.loadScreenRegions();
              this.loadScreenSchedules();
            }
          });
        } else {
          this.showAlert(res.message || 'Apply to group failed.', 'warning');
        }
      },
      error: (err) => {
        this.isApplyingToGroup = false;
        this.showAlert(err.error?.error || err.message || 'Failed to apply to group', 'error');
      }
    });
  }

  /**
   * Repairs UTF-8 mojibake for filename display (e.g. Arabic names from API).
   */
  decodeFileNameForDisplay(fileName: string | undefined): string {
    if (!fileName) return '';
    const hasHighBytes = [...fileName].some(c => (c.charCodeAt(0) & 0xff) > 127);
    if (!hasHighBytes) return fileName;
    try {
      const bytes = new Uint8Array([...fileName].map(c => c.charCodeAt(0) & 0xff));
      const decoded = new TextDecoder('utf-8').decode(bytes);
      const hasArabic = /[\u0600-\u06FF]/.test(decoded);
      if (hasArabic || (decoded.length > 0 && !/\uFFFD/.test(decoded))) {
        return decoded;
      }
    } catch {
      // ignore
    }
    return fileName;
  }

  /** Absolute URL for ad media (same origin rewrite as other screens). */
  resolveAdMediaUrl(fileUrl: string): string {
    if (!fileUrl) return fileUrl;
    const base = (environment.apiUrl || '').replace(/\/api\/?$/, '').trim();
    if (!base) return fileUrl;
    try {
      const u = new URL(fileUrl);
      if (u.hostname === 'localhost' && (u.port === '3000' || !u.port)) {
        return fileUrl.replace(u.origin, base);
      }
    } catch {
      /* relative */
    }
    return fileUrl;
  }

  private isImageFileUrl(url: string): boolean {
    if (!url) return false;
    return /\.(jpg|jpeg|png|gif|webp|bmp|svg|ico|tiff|tif|heic|heif|avif|jfif)$/i.test(url);
  }

  private isVideoFileUrl(url: string): boolean {
    if (!url) return false;
    return /\.(mp4|webm|mov|m4v|avi|mkv|ogv|ogg|mpg|mpeg)$/i.test(url);
  }

  showAssignedAdImagePreview(ad: Advertisement): boolean {
    return ad.type === 'image' || this.isImageFileUrl(ad.fileUrl || '');
  }

  showAssignedAdVideoPreview(ad: Advertisement): boolean {
    return ad.type === 'video' || this.isVideoFileUrl(ad.fileUrl || '');
  }

  getAssignedAdPreviewUrl(ad: Advertisement): string {
    return this.resolveAdMediaUrl(ad.thumbnailUrl || ad.fileUrl || '');
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }

  /** Player URL with this screen's deviceId so settings and play commands reach the same tab. */
  getPlayerUrl(): string {
    if (!this.selectedScreen?.deviceId) return '';
    const base = (environment.apiUrl || '').replace(/\/api\/?$/, '').trim();
    if (!base) return '';
    const sep = base.includes('?') ? '&' : '?';
    return `${base}/player/index.html${sep}deviceId=${encodeURIComponent(this.selectedScreen.deviceId)}`;
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

  formatFileSize(bytes: number): string {
    if (!bytes || bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }

  // ========== Screen Regions Methods ==========

  loadScreenRegions(): void {
    if (!this.selectedScreen) {
      console.log('⚠️ loadScreenRegions: No selected screen');
      return;
    }
    
    console.log('🔄 Loading screen regions for screen ID:', this.selectedScreen.id);
    this.isLoadingRegions = true;
    this.screenService.getScreenRegions(this.selectedScreen.id).subscribe({
      next: (response) => {
        console.log('📥 Raw response from getScreenRegions:', response);
        console.log('📥 Response.regions:', response.regions);
        
        // Convert string values to numbers for percentage fields
        const loadedRegions = (response.regions || []).map(region => ({
          ...region,
          widthPercentage: typeof region.widthPercentage === 'string' ? parseFloat(region.widthPercentage) : region.widthPercentage,
          heightPercentage: typeof region.heightPercentage === 'string' ? parseFloat(region.heightPercentage) : region.heightPercentage,
          xPosition: typeof region.xPosition === 'string' ? parseFloat(region.xPosition) : region.xPosition,
          yPosition: typeof region.yPosition === 'string' ? parseFloat(region.yPosition) : region.yPosition
        }));
        
        // Replace the array (don't merge, as backend is source of truth)
        this.screenRegions = loadedRegions;
        console.log('✅ Regions loaded. Total:', this.screenRegions.length);
        console.log('✅ Region IDs:', this.screenRegions.map(r => ({ id: r.id, position: r.regionPosition })));
        this.isLoadingRegions = false;
        
        // If no regions exist, show setup option
        if (this.screenRegions.length === 0) {
          console.log('ℹ️ No regions found, showing setup option');
          this.showRegionSetup = true;
        }
      },
      error: (error) => {
        console.error('❌ Error loading screen regions:', error);
        console.error('❌ Error details:', error.error);
        this.isLoadingRegions = false;
      }
    });
  }

  // Visual Region Selection Methods
  onScreenMouseDown(event: MouseEvent): void {
    if (!this.selectedScreen) {
      console.log('No screen selected');
      return;
    }
    
    const target = event.target as HTMLElement;
    
    // Check if clicking on a resize handle
    const resizeHandle = target.closest('.resize-handle') as HTMLElement;
    if (resizeHandle) {
      const handleType = resizeHandle.getAttribute('data-handle') as any;
      const regionId = parseInt(resizeHandle.getAttribute('data-region-id') || '0');
      const region = this.screenRegions.find(r => r.id === regionId);
      
      if (region) {
        this.startResizeRegion(event, region, handleType);
        return;
      }
    }
    
    // Don't start selection if clicking on a region overlay (unless it's a resize handle)
    if (target.closest('.region-overlay') && !resizeHandle) {
      console.log('Clicked on region overlay, ignoring');
      return;
    }
    
    event.preventDefault();
    event.stopPropagation();
    
    const screenPreview = event.currentTarget as HTMLElement;
    const rect = screenPreview.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
    
    console.log('Mouse down on screen preview:', { x, y, rect, clientX: event.clientX, clientY: event.clientY });
    console.log('📊 Current regions before new selection:', this.screenRegions.length, this.screenRegions.map(r => ({ id: r.id, position: r.regionPosition })));
    
    // Start new region selection - preserve existing regions
    this.isSelectingRegion = true;
    this.regionSelectionStart = { x, y };
    this.regionSelectionEnd = { x, y };
    // Don't clear selectedRegionForEdit - user might want to keep it selected
    // this.selectedRegionForEdit = null;
    this.isResizingRegion = false;
    
    // Add global mouse move and up listeners
    document.addEventListener('mousemove', this.onDocumentMouseMove);
    document.addEventListener('mouseup', this.onDocumentMouseUp);
  }

  startResizeRegion(event: MouseEvent, region: ScreenRegion, handleType: string): void {
    event.preventDefault();
    event.stopPropagation();
    
    this.isResizingRegion = true;
    this.resizingHandle = handleType as any;
    this.selectedRegionForEdit = region;
    this.isSelectingRegion = false;
    
    const screenPreview = document.querySelector('.screen-preview') as HTMLElement;
    if (!screenPreview) return;
    
    const rect = screenPreview.getBoundingClientRect();
    this.resizeStartPosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
    
    this.resizeStartRegion = {
      x: region.xPosition,
      y: region.yPosition,
      width: region.widthPercentage,
      height: region.heightPercentage
    };
    
    // Add global mouse move and up listeners
    document.addEventListener('mousemove', this.onDocumentMouseMove);
    document.addEventListener('mouseup', this.onDocumentMouseUp);
  }

  onScreenMouseMove = (event: MouseEvent): void => {
    // This is handled by document listener
  }

  onDocumentMouseMove = (event: MouseEvent): void => {
    const screenPreview = document.querySelector('.screen-preview') as HTMLElement;
    if (!screenPreview || !this.selectedScreen) return;
    
    const rect = screenPreview.getBoundingClientRect();
    const currentX = ((event.clientX - rect.left) / rect.width) * 100;
    const currentY = ((event.clientY - rect.top) / rect.height) * 100;
    
    // Handle region resizing
    if (this.isResizingRegion && this.resizingHandle && this.selectedRegionForEdit && this.resizeStartPosition && this.resizeStartRegion) {
      const deltaX = currentX - (this.resizeStartPosition.x / rect.width) * 100;
      const deltaY = currentY - (this.resizeStartPosition.y / rect.height) * 100;
      
      let newX = this.resizeStartRegion.x;
      let newY = this.resizeStartRegion.y;
      let newWidth = this.resizeStartRegion.width;
      let newHeight = this.resizeStartRegion.height;
      
      switch (this.resizingHandle) {
        case 'left':
          newX = Math.max(0, Math.min(this.resizeStartRegion.x + this.resizeStartRegion.width - 5, this.resizeStartRegion.x + deltaX));
          newWidth = this.resizeStartRegion.width - (newX - this.resizeStartRegion.x);
          break;
        case 'right':
          newWidth = Math.max(5, Math.min(100 - this.resizeStartRegion.x, this.resizeStartRegion.width + deltaX));
          break;
        case 'top':
          newY = Math.max(0, Math.min(this.resizeStartRegion.y + this.resizeStartRegion.height - 5, this.resizeStartRegion.y + deltaY));
          newHeight = this.resizeStartRegion.height - (newY - this.resizeStartRegion.y);
          break;
        case 'bottom':
          newHeight = Math.max(5, Math.min(100 - this.resizeStartRegion.y, this.resizeStartRegion.height + deltaY));
          break;
        case 'top-left':
          newX = Math.max(0, Math.min(this.resizeStartRegion.x + this.resizeStartRegion.width - 5, this.resizeStartRegion.x + deltaX));
          newY = Math.max(0, Math.min(this.resizeStartRegion.y + this.resizeStartRegion.height - 5, this.resizeStartRegion.y + deltaY));
          newWidth = this.resizeStartRegion.width - (newX - this.resizeStartRegion.x);
          newHeight = this.resizeStartRegion.height - (newY - this.resizeStartRegion.y);
          break;
        case 'top-right':
          newY = Math.max(0, Math.min(this.resizeStartRegion.y + this.resizeStartRegion.height - 5, this.resizeStartRegion.y + deltaY));
          newWidth = Math.max(5, Math.min(100 - this.resizeStartRegion.x, this.resizeStartRegion.width + deltaX));
          newHeight = this.resizeStartRegion.height - (newY - this.resizeStartRegion.y);
          break;
        case 'bottom-left':
          newX = Math.max(0, Math.min(this.resizeStartRegion.x + this.resizeStartRegion.width - 5, this.resizeStartRegion.x + deltaX));
          newWidth = this.resizeStartRegion.width - (newX - this.resizeStartRegion.x);
          newHeight = Math.max(5, Math.min(100 - this.resizeStartRegion.y, this.resizeStartRegion.height + deltaY));
          break;
        case 'bottom-right':
          newWidth = Math.max(5, Math.min(100 - this.resizeStartRegion.x, this.resizeStartRegion.width + deltaX));
          newHeight = Math.max(5, Math.min(100 - this.resizeStartRegion.y, this.resizeStartRegion.height + deltaY));
          break;
      }
      
      // Update the region in real-time (temporary visual update)
      if (this.selectedRegionForEdit) {
        this.selectedRegionForEdit.xPosition = newX;
        this.selectedRegionForEdit.yPosition = newY;
        this.selectedRegionForEdit.widthPercentage = newWidth;
        this.selectedRegionForEdit.heightPercentage = newHeight;
      }
      
      this.cdr.detectChanges();
      return;
    }
    
    // Handle new region selection
    if (this.isSelectingRegion && this.regionSelectionStart) {
      const x = Math.max(0, Math.min(100, currentX));
      const y = Math.max(0, Math.min(100, currentY));
      
      this.regionSelectionEnd = { x, y };
      this.cdr.detectChanges();
    }
  }

  onScreenMouseUp = (event: MouseEvent): void => {
    // This is handled by document listener
  }

  onDocumentMouseUp = (event: MouseEvent): void => {
    // Handle region resize completion
    if (this.isResizingRegion && this.selectedRegionForEdit && this.resizingHandle) {
      this.saveRegionResize();
      this.isResizingRegion = false;
      this.resizingHandle = null;
      this.resizeStartPosition = null;
      this.resizeStartRegion = null;
    }
    
    // Handle new region selection completion
    if (this.isSelectingRegion && this.regionSelectionStart && this.regionSelectionEnd) {
      // Calculate final selection bounds
      const width = Math.abs(this.regionSelectionEnd.x - this.regionSelectionStart.x);
      const height = Math.abs(this.regionSelectionEnd.y - this.regionSelectionStart.y);
      
      // Only add to pending selections if size is valid
      if (width >= 5 && height >= 5) {
        this.pendingSelections.push({
          start: { ...this.regionSelectionStart },
          end: { ...this.regionSelectionEnd }
        });
        console.log('✅ Selection added to pending. Total pending:', this.pendingSelections.length);
      }
      
      // Reset for next selection (but keep pending selections)
      this.isSelectingRegion = false;
      this.regionSelectionStart = null;
      this.regionSelectionEnd = null;
      console.log('Selection complete. Pending selections:', this.pendingSelections.length);
    }
    
    // Remove global listeners
    document.removeEventListener('mousemove', this.onDocumentMouseMove);
    document.removeEventListener('mouseup', this.onDocumentMouseUp);
  }

  saveRegionResize(): void {
    if (!this.selectedScreen || !this.selectedRegionForEdit) return;

    const regionData: Partial<CreateScreenRegionRequest> = {
      xPosition: this.selectedRegionForEdit.xPosition,
      yPosition: this.selectedRegionForEdit.yPosition,
      widthPercentage: this.selectedRegionForEdit.widthPercentage,
      heightPercentage: this.selectedRegionForEdit.heightPercentage
    };

    this.screenService.updateScreenRegion(this.selectedScreen.id, this.selectedRegionForEdit.id, regionData).subscribe({
      next: (response) => {
        // Update the region in the array
        const index = this.screenRegions.findIndex(r => r.id === this.selectedRegionForEdit!.id);
        if (index !== -1) {
          this.screenRegions[index] = response.region;
        }
        this.showAlert(this.getTranslation('regionUpdated') || 'Region updated successfully', 'success');
      },
      error: (error) => {
        console.error('Error updating region:', error);
        this.showAlert(error.error?.error || this.getTranslation('errorUpdatingRegion') || 'Error updating region', 'error');
        // Reload regions to revert changes
        this.loadScreenRegions();
      }
    });
  }

  onScreenMouseLeave(event: MouseEvent): void {
    // Don't cancel selection on mouse leave - let it continue
  }

  getSelectionLeft(): number {
    if (!this.regionSelectionStart || !this.regionSelectionEnd) return 0;
    const left = Math.min(this.regionSelectionStart.x, this.regionSelectionEnd.x);
    return (left / 100) * this.previewScreenWidth;
  }

  getSelectionTop(): number {
    if (!this.regionSelectionStart || !this.regionSelectionEnd) return 0;
    const top = Math.min(this.regionSelectionStart.y, this.regionSelectionEnd.y);
    return (top / 100) * this.previewScreenHeight;
  }

  getSelectionWidth(): number {
    if (!this.regionSelectionStart || !this.regionSelectionEnd) return 0;
    const width = Math.abs(this.regionSelectionEnd.x - this.regionSelectionStart.x);
    return (width / 100) * this.previewScreenWidth;
  }

  getSelectionHeight(): number {
    if (!this.regionSelectionStart || !this.regionSelectionEnd) return 0;
    const height = Math.abs(this.regionSelectionEnd.y - this.regionSelectionStart.y);
    return (height / 100) * this.previewScreenHeight;
  }

  getSelectionWidthPercent(): number {
    if (!this.regionSelectionStart || !this.regionSelectionEnd) return 0;
    return Math.abs(this.regionSelectionEnd.x - this.regionSelectionStart.x);
  }

  getSelectionHeightPercent(): number {
    if (!this.regionSelectionStart || !this.regionSelectionEnd) return 0;
    return Math.abs(this.regionSelectionEnd.y - this.regionSelectionStart.y);
  }

  // Helper methods for pending selections
  getPendingSelectionLeft(selection: { start: { x: number; y: number }; end: { x: number; y: number } }): number {
    return (Math.min(selection.start.x, selection.end.x) / 100) * this.previewScreenWidth;
  }

  getPendingSelectionTop(selection: { start: { x: number; y: number }; end: { x: number; y: number } }): number {
    return (Math.min(selection.start.y, selection.end.y) / 100) * this.previewScreenHeight;
  }

  getPendingSelectionWidth(selection: { start: { x: number; y: number }; end: { x: number; y: number } }): number {
    return (Math.abs(selection.end.x - selection.start.x) / 100) * this.previewScreenWidth;
  }

  getPendingSelectionHeight(selection: { start: { x: number; y: number }; end: { x: number; y: number } }): number {
    return (Math.abs(selection.end.y - selection.start.y) / 100) * this.previewScreenHeight;
  }

  saveSelectedRegion(): void {
    // For backward compatibility - if there's a current selection, add it to pending and save all
    if (this.regionSelectionStart && this.regionSelectionEnd) {
      const width = Math.abs(this.regionSelectionEnd.x - this.regionSelectionStart.x);
      const height = Math.abs(this.regionSelectionEnd.y - this.regionSelectionStart.y);
      
      if (width >= 5 && height >= 5) {
        this.pendingSelections.push({
          start: this.regionSelectionStart,
          end: this.regionSelectionEnd
        });
      }
    }
    
    this.saveAllPendingSelections();
  }

  saveAllPendingSelections(): void {
    if (!this.selectedScreen || this.pendingSelections.length === 0) {
      if (this.pendingSelections.length === 0) {
        this.showAlert(this.getTranslation('noSelectionsToSave') || 'No regions selected. Please select at least one region.', 'warning');
      }
      return;
    }

    console.log('💾 Saving', this.pendingSelections.length, 'regions');

    // Get all existing custom region positions to avoid duplicates
    const existingCustomPositions = this.screenRegions
      .filter(r => r.regionPosition && r.regionPosition.toString().startsWith('custom_'))
      .map(r => {
        const pos = r.regionPosition.toString();
        const match = pos.match(/custom_(\d+)/);
        return match ? parseInt(match[1]) : 0;
      });
    
    // Create all regions
    const regionsToCreate = this.pendingSelections.map((selection) => {
      const x = Math.min(selection.start.x, selection.end.x);
      const y = Math.min(selection.start.y, selection.end.y);
      const width = Math.abs(selection.end.x - selection.start.x);
      const height = Math.abs(selection.end.y - selection.start.y);

      // Find the next available number
      let nextNumber = 1;
      while (existingCustomPositions.includes(nextNumber)) {
        nextNumber++;
      }
      existingCustomPositions.push(nextNumber); // Add to list to avoid duplicates in same batch

      return {
        screenId: this.selectedScreen!.id,
        regionType: 'custom' as const,
        regionPosition: `custom_${nextNumber}` as any,
        widthPercentage: width,
        heightPercentage: height,
        xPosition: x,
        yPosition: y
      };
    });

    // Filter out invalid regions (too small)
    const validRegions = regionsToCreate.filter(r => r.widthPercentage >= 5 && r.heightPercentage >= 5);
    
    if (validRegions.length === 0) {
      this.showAlert(this.getTranslation('regionTooSmall') || 'All selected regions are too small. Please select larger areas.', 'warning');
      return;
    }

    if (validRegions.length < regionsToCreate.length) {
      this.showAlert(`${regionsToCreate.length - validRegions.length} region(s) were too small and were skipped.`, 'warning');
    }

    // Create regions one by one
    let createdCount = 0;
    let errorCount = 0;
    const totalRegions = validRegions.length;
    
    validRegions.forEach((regionData, index) => {
      this.screenService.createScreenRegion(this.selectedScreen!.id, regionData).subscribe({
        next: (response) => {
          createdCount++;
          
          if (response && response.region) {
            // Convert string values to numbers for percentage fields
            const newRegion = {
              ...response.region,
              widthPercentage: typeof response.region.widthPercentage === 'string' ? parseFloat(response.region.widthPercentage) : response.region.widthPercentage,
              heightPercentage: typeof response.region.heightPercentage === 'string' ? parseFloat(response.region.heightPercentage) : response.region.heightPercentage,
              xPosition: typeof response.region.xPosition === 'string' ? parseFloat(response.region.xPosition) : response.region.xPosition,
              yPosition: typeof response.region.yPosition === 'string' ? parseFloat(response.region.yPosition) : response.region.yPosition
            };
            
            this.screenRegions.push(newRegion);
          }
          
          // Check if all regions are created
          if (createdCount + errorCount === totalRegions) {
            console.log(`✅ Created ${createdCount} regions. Total regions now:`, this.screenRegions.length);
            this.pendingSelections = [];
            this.regionSelectionStart = null;
            this.regionSelectionEnd = null;
            
            if (errorCount > 0) {
              this.showAlert(`${createdCount} region(s) created successfully. ${errorCount} region(s) failed.`, errorCount > 0 ? 'warning' : 'success');
            } else {
              this.showAlert(this.getTranslation('regionsCreated') || `${createdCount} region(s) created successfully`, 'success');
            }
          }
        },
        error: (error) => {
          errorCount++;
          console.error(`❌ Error creating region ${index + 1}:`, error);
          
          // Check if all regions are processed
          if (createdCount + errorCount === totalRegions) {
            if (createdCount > 0) {
              this.showAlert(`${createdCount} region(s) created successfully. ${errorCount} region(s) failed.`, errorCount > 0 ? 'warning' : 'success');
            } else {
              this.showAlert(this.getTranslation('errorCreatingRegions') || 'Error creating regions', 'error');
            }
            this.pendingSelections = [];
            this.regionSelectionStart = null;
            this.regionSelectionEnd = null;
            // Reload to ensure consistency
            this.loadScreenRegions();
          }
        }
      });
    });
  }

  clearPendingSelections(): void {
    this.pendingSelections = [];
    this.regionSelectionStart = null;
    this.regionSelectionEnd = null;
    this.isSelectingRegion = false;
  }

  createGridLayout(rows: number, cols: number): void {
    if (!this.selectedScreen) return;

    // Calculate region dimensions
    const widthPercent = 100 / cols;
    const heightPercent = 100 / rows;

    // Delete existing regions first
    if (this.screenRegions.length > 0) {
      let deleted = 0;
      this.screenRegions.forEach(region => {
        this.screenService.deleteScreenRegion(this.selectedScreen!.id, region.id).subscribe({
          next: () => {
            deleted++;
            if (deleted === this.screenRegions.length) {
              this.createGridRegions(rows, cols, widthPercent, heightPercent);
            }
          },
          error: (error) => {
            console.error('Error deleting region:', error);
            deleted++;
            if (deleted === this.screenRegions.length) {
              this.createGridRegions(rows, cols, widthPercent, heightPercent);
            }
          }
        });
      });
    } else {
      this.createGridRegions(rows, cols, widthPercent, heightPercent);
    }
  }

  createGridRegions(rows: number, cols: number, widthPercent: number, heightPercent: number): void {
    if (!this.selectedScreen) return;

    const regions: any[] = [];
    let regionNumber = 1;

    // Get all existing custom region positions to avoid duplicates
    const existingCustomPositions = this.screenRegions
      .filter(r => r.regionPosition && r.regionPosition.toString().startsWith('custom_'))
      .map(r => {
        const pos = r.regionPosition.toString();
        const match = pos.match(/custom_(\d+)/);
        return match ? parseInt(match[1]) : 0;
      });

    // Create regions for each grid cell
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Find the next available number
        let nextNumber = 1;
        while (existingCustomPositions.includes(nextNumber)) {
          nextNumber++;
        }
        existingCustomPositions.push(nextNumber);

        regions.push({
          screenId: this.selectedScreen.id,
          regionType: 'custom' as const,
          regionPosition: `custom_${nextNumber}` as any,
          widthPercentage: widthPercent,
          heightPercentage: heightPercent,
          xPosition: col * widthPercent,
          yPosition: row * heightPercent
        });
        regionNumber++;
      }
    }

    // Clear existing regions array first to show clean state
    this.screenRegions = [];
    this.cdr.detectChanges();

    // Create all regions
    let created = 0;
    let errorCount = 0;
    const totalRegions = regions.length;

    regions.forEach((regionData, index) => {
      this.screenService.createScreenRegion(this.selectedScreen!.id, regionData).subscribe({
        next: (response) => {
          created++;
          if (response && response.region) {
            const newRegion = {
              ...response.region,
              widthPercentage: typeof response.region.widthPercentage === 'string' ? parseFloat(response.region.widthPercentage) : response.region.widthPercentage,
              heightPercentage: typeof response.region.heightPercentage === 'string' ? parseFloat(response.region.heightPercentage) : response.region.heightPercentage,
              xPosition: typeof response.region.xPosition === 'string' ? parseFloat(response.region.xPosition) : response.region.xPosition,
              yPosition: typeof response.region.yPosition === 'string' ? parseFloat(response.region.yPosition) : response.region.yPosition
            };
            this.screenRegions.push(newRegion);
            // Trigger change detection after each region is added to show boxes immediately
            this.cdr.detectChanges();
            console.log(`✅ Region ${created}/${totalRegions} added. Total regions:`, this.screenRegions.length);
          }

          if (created + errorCount === totalRegions) {
            // Final UI update to ensure all boxes are visible
            this.cdr.detectChanges();
            console.log(`✅ All regions created. Displaying ${this.screenRegions.length} boxes on screen.`);
            
            if (errorCount > 0) {
              this.showAlert(`${created} region(s) created successfully. ${errorCount} region(s) failed.`, errorCount > 0 ? 'warning' : 'success');
            } else {
              this.showAlert(this.getTranslation('regionsCreated') || `${rows}×${cols} grid created successfully (${totalRegions} regions)`, 'success');
            }
            this.pendingSelections = [];
            this.showRegionSetup = false; // Hide setup option since regions exist now
          }
        },
        error: (error) => {
          errorCount++;
          console.error(`❌ Error creating region ${index + 1}:`, error);
          if (created + errorCount === totalRegions) {
            if (created > 0) {
              this.showAlert(`${created} region(s) created successfully. ${errorCount} region(s) failed.`, errorCount > 0 ? 'warning' : 'success');
              // Reload to show what was created
              this.loadScreenRegions();
            } else {
              this.showAlert(this.getTranslation('errorCreatingRegions') || 'Error creating regions', 'error');
              this.loadScreenRegions();
            }
          }
        }
      });
    });
  }

  createQuickSplit(type: 'split_horizontal' | 'split_vertical'): void {
    if (type === 'split_horizontal') {
      this.createGridLayout(1, 2); // 1 row, 2 columns (Left/Right)
    } else {
      this.createGridLayout(2, 1); // 2 rows, 1 column (Top/Bottom)
    }
  }

  selectRegionForEdit(region: ScreenRegion): void {
    this.selectedRegionForEdit = region;
  }

  deleteRegion(regionId: number): void {
    if (!this.selectedScreen) return;

    this.showConfirm(
      this.getTranslation('confirmDeleteRegion') || 'Are you sure you want to delete this region?',
      () => {
        this.executeDeleteRegion(regionId);
      },
      'Confirm Delete Region',
      'danger'
    );
  }

  executeDeleteRegion(regionId: number): void {
    if (!this.selectedScreen) return;

    this.screenService.deleteScreenRegion(this.selectedScreen.id, regionId).subscribe({
      next: () => {
        this.loadScreenRegions();
        if (this.selectedRegionForEdit?.id === regionId) {
          this.selectedRegionForEdit = null;
        }
        this.showAlert(this.getTranslation('regionDeleted') || 'Region deleted successfully', 'success');
      },
      error: (error) => {
        console.error('Error deleting region:', error);
        this.showAlert(error.error?.error || this.getTranslation('errorDeletingRegion') || 'Error deleting region', 'error');
      }
    });
  }

  resetAllRegions(): void {
    if (!this.selectedScreen || this.screenRegions.length === 0) return;

    this.showConfirm(
      this.getTranslation('confirmResetRegions') || 'Are you sure you want to delete all regions? This action cannot be undone.',
      () => {
        this.executeResetAllRegions();
      },
      'Confirm Reset Regions',
      'danger'
    );
  }

  executeResetAllRegions(): void {
    if (!this.selectedScreen || this.screenRegions.length === 0) return;

    let deleted = 0;
    this.screenRegions.forEach(region => {
      this.screenService.deleteScreenRegion(this.selectedScreen!.id, region.id).subscribe({
        next: () => {
          deleted++;
          if (deleted === this.screenRegions.length) {
            this.loadScreenRegions();
            this.selectedRegionForEdit = null;
            this.regionSelectionStart = null;
            this.regionSelectionEnd = null;
            this.showAlert(this.getTranslation('regionsReset') || 'All regions have been reset', 'success');
          }
        },
        error: (error) => {
          console.error('Error deleting region:', error);
        }
      });
    });
  }

  getRegionDisplayName(region: ScreenRegion, index: number): string {
    if (region.regionPosition && region.regionPosition.toString().startsWith('custom_')) {
      const num = region.regionPosition.toString().replace('custom_', '');
      return `Region ${num}`;
    }
    return this.getTranslation(region.regionPosition as any) || region.regionPosition?.toString() || `Region ${index + 1}`;
  }

  getGridColumns(): number {
    if (this.screenRegions.length === 0) return 1;
    
    // Sort regions by position
    const sortedRegions = [...this.screenRegions].sort((a, b) => {
      const aY = Math.round(a.yPosition);
      const bY = Math.round(b.yPosition);
      if (aY !== bY) {
        return aY - bY; // Sort by row first
      }
      return Math.round(a.xPosition) - Math.round(b.xPosition); // Then by column
    });
    
    // Count regions in first row (same Y position)
    const firstRowY = Math.round(sortedRegions[0].yPosition);
    const firstRowCount = sortedRegions.filter(r => Math.round(r.yPosition) === firstRowY).length;
    
    const cols = firstRowCount || 1;
    console.log('📊 Grid Columns:', cols, 'Regions:', this.screenRegions.length, 'First row Y:', firstRowY, 'Regions:', sortedRegions.map(r => ({x: r.xPosition, y: r.yPosition})));
    return cols;
  }

  getGridRows(): number {
    if (this.screenRegions.length === 0) return 1;
    
    const cols = this.getGridColumns();
    const rows = Math.ceil(this.screenRegions.length / cols);
    
    console.log('📊 Grid Rows:', rows, 'Columns:', cols, 'Total regions:', this.screenRegions.length);
    return rows || 1;
  }

  getSortedRegions(): ScreenRegion[] {
    // Sort regions by row (y position) then by column (x position)
    return [...this.screenRegions].sort((a, b) => {
      const aY = Math.round(a.yPosition);
      const bY = Math.round(b.yPosition);
      if (aY !== bY) {
        return aY - bY;
      }
      return Math.round(a.xPosition) - Math.round(b.xPosition);
    });
  }

  getRegionWidth(region: ScreenRegion): string {
    const width = typeof region.widthPercentage === 'string' ? parseFloat(region.widthPercentage) : region.widthPercentage;
    return isNaN(width) ? '0.0' : width.toFixed(1);
  }

  getRegionHeight(region: ScreenRegion): string {
    const height = typeof region.heightPercentage === 'string' ? parseFloat(region.heightPercentage) : region.heightPercentage;
    return isNaN(height) ? '0.0' : height.toFixed(1);
  }

  getRegionX(region: ScreenRegion): string {
    const x = typeof region.xPosition === 'string' ? parseFloat(region.xPosition) : region.xPosition;
    return isNaN(x) ? '0.0' : x.toFixed(1);
  }

  getRegionY(region: ScreenRegion): string {
    const y = typeof region.yPosition === 'string' ? parseFloat(region.yPosition) : region.yPosition;
    return isNaN(y) ? '0.0' : y.toFixed(1);
  }

  togglePreviewOrientation(): void {
    this.previewOrientation = this.previewOrientation === 'landscape' ? 'portrait' : 'landscape';
    // Update dimensions based on orientation
    if (this.previewOrientation === 'portrait') {
      // Portrait: 450x800 (taller)
      this.previewScreenWidth = 450;
      this.previewScreenHeight = 800;
    } else {
      // Landscape: 800x450 (wider)
      this.previewScreenWidth = 800;
      this.previewScreenHeight = 450;
    }
  }

  getPreviewDimensions(): { width: number; height: number } {
    return {
      width: this.previewScreenWidth,
      height: this.previewScreenHeight
    };
  }

  // ========== Advertisement Schedules Methods ==========

  loadScreenSchedules(): void {
    if (!this.selectedScreen) return;

    this.screenService.getScreenSchedules(this.selectedScreen.id).subscribe({
      next: (response) => {
        // Convert schedules array to Map for easy lookup
        this.advertisementSchedules.clear();
        (response.schedules || []).forEach(schedule => {
          this.advertisementSchedules.set(schedule.adId, schedule);
        });
      },
      error: (error) => {
        console.error('Error loading screen schedules:', error);
      }
    });
  }

  getAdvertisementSchedule(adId: number): AdvertisementSchedule | null {
    return this.advertisementSchedules.get(adId) || null;
  }

  /**
   * Helper: get currently selected region ID for an advertisement.
   * - If a schedule exists with regionId, use that.
   * - Else, if there is exactly one region, default to that region.
   * - Else, no region selected (null).
   */
  getSelectedRegionIdForAd(adId: number): number | null {
    const schedule = this.getAdvertisementSchedule(adId);
    if (schedule && schedule.regionId != null) {
      return schedule.regionId;
    }
    if (this.screenRegions.length === 1) {
      return this.screenRegions[0].id;
    }
    return null;
  }

  /**
   * Wrapper for region select (template uses ngModel, we forward to existing onRegionChange).
   */
  onRegionSelectChange(adId: number, regionId: number | null): void {
    const value = regionId == null ? '' : String(regionId);
    this.onRegionChange(adId, { target: { value } });
  }

  openScheduleModal(adId: number): void {
    this.editingScheduleAdId = adId;
    const existingSchedule = this.getAdvertisementSchedule(adId);
    
    // Default region: use existing schedule's region if set, otherwise auto-select the only region when there is 1
    const defaultRegionId =
      existingSchedule && existingSchedule.regionId != null
        ? existingSchedule.regionId
        : (this.screenRegions.length === 1 ? this.screenRegions[0].id : null);

    // Defaults for new schedule: current date & time
    const now = new Date();
    const defaultStartDate = this.formatDateForInput(now);
    const defaultStartTime = now.toTimeString().slice(0, 5); // HH:mm

    // Initialize form data with existing schedule or defaults (current date/time)
    this.scheduleFormData = {
      regionId: defaultRegionId,
      startDate: existingSchedule?.startDate ? this.formatDateForInput(existingSchedule.startDate) : defaultStartDate,
      endDate: existingSchedule?.endDate ? this.formatDateForInput(existingSchedule.endDate) : '',
      startTime: existingSchedule?.startTime || defaultStartTime,
      endTime: existingSchedule?.endTime || '',
      priority: existingSchedule?.priority || 0,
      isActive: existingSchedule?.isActive !== false
    };
    
    this.showScheduleModal = true;
  }

  closeScheduleModal(): void {
    this.showScheduleModal = false;
    this.editingScheduleAdId = null;
  }

  saveAdvertisementSchedule(scheduleData: any): void {
    if (!this.selectedScreen || !this.editingScheduleAdId) return;

    const scheduleRequest: CreateAdvertisementScheduleRequest = {
      screenId: this.selectedScreen.id,
      adId: this.editingScheduleAdId,
      regionId: scheduleData.regionId || null,
      startDate: scheduleData.startDate || null,
      endDate: scheduleData.endDate || null,
      startTime: scheduleData.startTime || null,
      endTime: scheduleData.endTime || null,
      isActive: scheduleData.isActive !== undefined ? scheduleData.isActive : true,
      priority: scheduleData.priority || 0
    };

    this.screenService.createAdvertisementSchedule(this.selectedScreen.id, scheduleRequest).subscribe({
      next: (response) => {
        this.advertisementSchedules.set(this.editingScheduleAdId!, response.schedule);
        this.closeScheduleModal();
        this.showAlert(this.getTranslation('scheduleSaved') || 'Schedule saved successfully', 'success');
      },
      error: (error) => {
        console.error('Error saving schedule:', error);
        this.showAlert(error.error?.error || this.getTranslation('errorSavingSchedule') || 'Error saving schedule', 'error');
      }
    });
  }

  deleteAdvertisementSchedule(adId: number): void {
    if (!this.selectedScreen) return;

    this.showConfirm(
      this.getTranslation('confirmDeleteSchedule') || 'Are you sure you want to delete this schedule?',
      () => {
        this.executeDeleteAdvertisementSchedule(adId);
      },
      'Confirm Delete Schedule',
      'danger'
    );
  }

  executeDeleteAdvertisementSchedule(adId: number): void {
    if (!this.selectedScreen) return;

    this.screenService.deleteAdvertisementSchedule(this.selectedScreen.id, adId).subscribe({
      next: () => {
        this.advertisementSchedules.delete(adId);
        this.showAlert(this.getTranslation('scheduleDeleted') || 'Schedule deleted successfully', 'success');
      },
      error: (error) => {
        console.error('Error deleting schedule:', error);
        this.showAlert(error.error?.error || this.getTranslation('errorDeletingSchedule') || 'Error deleting schedule', 'error');
      }
    });
  }

  clampSlideDurationSeconds(v: number): number {
    if (Number.isNaN(v) || v < 1) return 5;
    return Math.min(600, Math.round(v));
  }

  getSlideDurationSeconds(ad: Advertisement): number {
    const ext = ad as Advertisement & { slideDurationSeconds?: number };
    if (typeof ext.slideDurationSeconds === 'number' && !Number.isNaN(ext.slideDurationSeconds)) {
      return this.clampSlideDurationSeconds(ext.slideDurationSeconds);
    }
    return 5;
  }

  onSlideDurationSecondsChange(ad: Advertisement, raw: string | number): void {
    const n = typeof raw === 'number' ? raw : parseInt(String(raw), 10);
    (ad as Advertisement & { slideDurationSeconds?: number }).slideDurationSeconds = this.clampSlideDurationSeconds(
      Number.isNaN(n) ? 5 : n
    );
  }

  buildPlaylistPayload(): ScreenAdvertisementAssignment[] {
    return this.assignedAdvertisements.map((ad) => ({
      adId: ad.id!,
      durationSeconds: this.getSlideDurationSeconds(ad)
    }));
  }

  saveAssignedPlaylist(): void {
    if (!this.selectedScreen?.id) return;
    this.isSavingPlaylist = true;
    this.screenService
      .updateScreen(this.selectedScreen.id, {
        name: this.selectedScreen.name,
        advertisementPlaylist: this.buildPlaylistPayload()
      })
      .subscribe({
        next: (updated) => {
          this.selectedScreen = updated;
          this.isSavingPlaylist = false;
          this.showAlert(
            this.getTranslation('playlistSaved') || 'Order and slide timing saved',
            'success'
          );
        },
        error: (err) => {
          this.isSavingPlaylist = false;
          this.showAlert(err.error?.error || 'Error saving playlist', 'error');
        }
      });
  }

  onAssignedDragStart(index: number, event: DragEvent): void {
    this.dragAssignedFromIndex = index;
    event.dataTransfer?.setData('text/plain', String(index));
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
    }
  }

  onAssignedDragOver(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  onAssignedDrop(index: number, event: DragEvent): void {
    event.preventDefault();
    const from = this.dragAssignedFromIndex;
    this.dragAssignedFromIndex = null;
    if (from == null || from === index) return;
    const next = [...this.assignedAdvertisements];
    const [moved] = next.splice(from, 1);
    next.splice(index, 0, moved);
    this.assignedAdvertisements = next;
    this.cdr.markForCheck();
  }

  /** Remove an advertisement from this screen's assigned list. */
  onRemoveAssignedAdvertisement(adId: number): void {
    if (!this.selectedScreen) return;

    const ad = this.assignedAdvertisements.find(a => a.id === adId);
    const title = ad?.title || `#${adId}`;

    this.showConfirm(
      this.getTranslation('confirmRemoveAssignedAd') || `Remove "${title}" from this screen?`,
      () => {
        const next = this.assignedAdvertisements.filter((a) => a.id !== adId);
        const playlist = next.map((a) => ({
          adId: a.id!,
          durationSeconds: this.getSlideDurationSeconds(a)
        }));

        this.screenService
          .updateScreen(this.selectedScreen!.id, {
            name: this.selectedScreen!.name,
            advertisementPlaylist: playlist
          })
          .subscribe({
          next: (updated) => {
            this.selectedScreen = updated;
            this.assignedAdvertisements = next;
            this.showAlert(this.getTranslation('advertisementRemoved') || 'Advertisement removed from screen', 'success');
          },
          error: (error) => {
            console.error('Error removing assigned advertisement:', error);
            this.showAlert(error.error?.error || this.getTranslation('errorRemovingAssignedAd') || 'Error removing advertisement', 'error');
          }
        });
      },
      this.getTranslation('delete') || 'Delete',
      'danger'
    );
  }

  formatDateForInput(date: Date | string | null): string {
    if (!date) return '';
    const d = typeof date === 'string' ? new Date(date) : date;
    // Use local date components to avoid UTC shifting (toISOString() can change the day)
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  onRegionChange(adId: number, event: any): void {
    if (!this.selectedScreen) return;

    const regionId = event.target.value ? parseInt(event.target.value) : null;
    const schedule = this.getAdvertisementSchedule(adId);

    if (schedule) {
      // Update existing schedule
      this.screenService.updateAdvertisementSchedule(this.selectedScreen.id, adId, { regionId }).subscribe({
        next: (response) => {
          this.advertisementSchedules.set(adId, response.schedule);
        },
        error: (error) => {
          console.error('Error updating region assignment:', error);
          this.showAlert(error.error?.error || 'Error updating region assignment', 'error');
        }
      });
    } else {
      // Create new schedule with region
      this.screenService.createAdvertisementSchedule(this.selectedScreen.id, {
        screenId: this.selectedScreen.id,
        adId: adId,
        regionId: regionId
      }).subscribe({
        next: (response) => {
          this.advertisementSchedules.set(adId, response.schedule);
        },
        error: (error) => {
          console.error('Error creating schedule:', error);
          this.showAlert(error.error?.error || 'Error creating schedule', 'error');
        }
      });
    }
  }

  isAssignedAdvertisement(adId: number): boolean {
    return this.selectedScreen?.assignedAds?.includes(adId) || false;
  }

  // Alert Dialog Methods
  showAlert(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info', title?: string): void {
    this.alertDialogData = {
      message,
      type,
      title,
      confirmText: 'OK'
    };
    this.showAlertDialog = true;
  }

  closeAlertDialog(): void {
    this.showAlertDialog = false;
  }

  // Confirm Dialog Methods
  showConfirm(message: string, onConfirm: () => void, title?: string, type: 'warning' | 'danger' | 'info' = 'warning'): void {
    this.confirmDialogData = {
      title: title || 'Confirm',
      message,
      confirmText: 'OK',
      cancelText: 'Cancel',
      type
    };
    this.confirmDialogCallback = onConfirm;
    this.showConfirmDialog = true;
  }

  onConfirmDialogConfirmed(): void {
    if (this.confirmDialogCallback) {
      this.confirmDialogCallback();
    }
    this.showConfirmDialog = false;
    this.confirmDialogCallback = null;
  }

  onConfirmDialogCancelled(): void {
    this.showConfirmDialog = false;
    this.confirmDialogCallback = null;
  }
}

