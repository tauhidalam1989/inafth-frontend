import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { ScreenService, Screen, ScreenGroup, ScreenRegion, AdvertisementSchedule, CreateAdvertisementScheduleRequest } from '../../../../core/services/screen.service';
import { AdvertisementsService, Advertisement } from '../../../../core/services/advertisements.service';

@Component({
  selector: 'app-group-layout',
  templateUrl: './group-layout.component.html',
  styleUrls: ['./group-layout.component.scss']
})
export class GroupLayoutComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  groups: ScreenGroup[] = [];
  screens: Screen[] = [];
  screensInGroup: Screen[] = [];
  selectedGroupId: number | null = null;
  selectedScreen: Screen | null = null;
  /** Full screen details when a screen is selected (for regions, ads, settings) */
  fullScreen: Screen | null = null;
  isLoadingGroups = false;
  isLoadingScreens = false;
  isLoadingDetails = false;
  isApplyingToGroup = false;
  isSavingSettings = false;
  isSavingAds = false;

  // Regions
  screenRegions: ScreenRegion[] = [];
  isLoadingRegions = false;
  isCreatingRegions = false;

  // Advertisements & schedules (region assignment per ad)
  allAdvertisements: Advertisement[] = [];
  assignedAdIds: number[] = [];
  advertisementSchedules: Map<number, AdvertisementSchedule> = new Map();
  isLoadingAds = false;

  // Preview modal (View button)
  showPreviewModal = false;
  selectedAdForPreview: Advertisement | null = null;

  // Schedule modal
  showScheduleModal = false;
  editingScheduleAdId: number | null = null;
  scheduleFormData: {
    regionId: number | null;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    priority: number;
    isActive: boolean;
  } = {
    regionId: null,
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    priority: 0,
    isActive: true
  };

  // Settings
  orientation: 'portrait' | 'landscape' | 'auto' = 'landscape';
  screenSize: 'small' | 'medium' | 'large' | 'custom' = 'medium';

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private screenService: ScreenService,
    private advertisementsService: AdvertisementsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadGroups();
    this.loadScreens();
    this.loadAdvertisements();
  }

  loadGroups(): void {
    this.isLoadingGroups = true;
    this.screenService.getScreenGroups().subscribe({
      next: (groups) => {
        this.groups = groups;
        this.isLoadingGroups = false;
        if (this.selectedGroupId && !this.groups.find(g => g.id === this.selectedGroupId)) {
          this.selectedGroupId = null;
          this.onGroupChange();
        }
      },
      error: () => {
        this.isLoadingGroups = false;
      }
    });
  }

  loadScreens(): void {
    this.isLoadingScreens = true;
    this.screenService.getScreens().subscribe({
      next: (screens) => {
        this.screens = screens;
        this.isLoadingScreens = false;
        this.updateScreensInGroup();
      },
      error: () => {
        this.isLoadingScreens = false;
      }
    });
  }

  loadAdvertisements(): void {
    this.advertisementsService.getAdvertisements({ status: 'active', limit: 500 }).subscribe({
      next: (res) => {
        this.allAdvertisements = res.advertisements || [];
      }
    });
  }

  onGroupChange(): void {
    this.selectedScreen = null;
    this.fullScreen = null;
    this.screenRegions = [];
    this.assignedAdIds = [];
    this.updateScreensInGroup();
  }

  private updateScreensInGroup(): void {
    if (this.selectedGroupId == null) {
      this.screensInGroup = [];
      return;
    }
    const gid = Number(this.selectedGroupId);
    this.screensInGroup = this.screens.filter(s => {
      const sg = s.groupId != null ? Number(s.groupId) : null;
      return sg !== null && sg === gid;
    });
  }

  selectScreen(screen: Screen): void {
    this.selectedScreen = screen;
    this.fullScreen = null;
    this.screenRegions = [];
    this.assignedAdIds = [];
    this.loadScreenDetails(screen.id);
  }

  loadScreenDetails(screenId: number): void {
    this.isLoadingDetails = true;
    this.advertisementSchedules.clear();
    this.screenService.getScreenById(screenId).subscribe({
      next: (screen) => {
        this.fullScreen = screen;
        this.assignedAdIds = screen.assignedAds ? [...screen.assignedAds] : [];
        this.orientation = (screen.orientation as any) || 'landscape';
        this.screenSize = (screen.screenSize as any) || 'medium';
        this.isLoadingDetails = false;
        this.loadScreenRegions(screenId);
        this.loadScreenSchedules(screenId);
      },
      error: () => {
        this.isLoadingDetails = false;
        this.showMessage('error', 'Failed to load screen details');
      }
    });
  }

  loadScreenSchedules(screenId: number): void {
    this.screenService.getScreenSchedules(screenId).subscribe({
      next: (res) => {
        this.advertisementSchedules.clear();
        (res.schedules || []).forEach(s => this.advertisementSchedules.set(s.adId, s));
        this.cdr.detectChanges();
      }
    });
  }

  getGridColumns(): number {
    if (this.screenRegions.length === 0) return 1;
    const sorted = [...this.screenRegions].sort((a, b) => {
      const aY = Math.round(a.yPosition);
      const bY = Math.round(b.yPosition);
      if (aY !== bY) return aY - bY;
      return Math.round(a.xPosition) - Math.round(b.xPosition);
    });
    const firstRowY = Math.round(sorted[0].yPosition);
    return sorted.filter(r => Math.round(r.yPosition) === firstRowY).length;
  }

  getGridRows(): number {
    if (this.screenRegions.length === 0) return 1;
    return Math.ceil(this.screenRegions.length / this.getGridColumns()) || 1;
  }

  getSortedRegions(): ScreenRegion[] {
    return [...this.screenRegions].sort((a, b) => {
      const aY = Math.round(a.yPosition);
      const bY = Math.round(b.yPosition);
      if (aY !== bY) return aY - bY;
      return Math.round(a.xPosition) - Math.round(b.xPosition);
    });
  }

  getAdvertisementSchedule(adId: number): AdvertisementSchedule | null {
    return this.advertisementSchedules.get(adId) || null;
  }

  getSelectedRegionIdForAd(adId: number): number | null {
    const schedule = this.getAdvertisementSchedule(adId);
    if (schedule && schedule.regionId != null) return schedule.regionId;
    if (this.screenRegions.length === 1) return this.screenRegions[0].id;
    return null;
  }

  onRegionSelectChange(adId: number, regionId: number | null): void {
    if (!this.selectedScreen) return;
    const schedule = this.getAdvertisementSchedule(adId);
    if (schedule) {
      this.screenService.updateAdvertisementSchedule(this.selectedScreen.id, adId, { regionId }).subscribe({
        next: (res) => {
          this.advertisementSchedules.set(adId, res.schedule);
          this.cdr.detectChanges();
        }
      });
    } else {
      this.screenService.createAdvertisementSchedule(this.selectedScreen.id, {
        screenId: this.selectedScreen.id,
        adId,
        regionId: regionId ?? undefined
      }).subscribe({
        next: (res) => {
          this.advertisementSchedules.set(adId, res.schedule);
          this.cdr.detectChanges();
        }
      });
    }
  }

  onRemoveAssignedAdvertisement(adId: number): void {
    if (!this.selectedScreen || !this.fullScreen) return;
    const nextIds = (this.fullScreen.assignedAds || []).filter(id => id !== adId);
    this.screenService.updateScreen(this.selectedScreen.id, { name: this.fullScreen.name, advertisementIds: nextIds }).subscribe({
      next: (screen) => {
        this.fullScreen = screen;
        this.assignedAdIds = screen.assignedAds ? [...screen.assignedAds] : [];
        this.advertisementSchedules.delete(adId);
        this.showMessage('success', this.getTranslation('advertisementRemoved') || 'Advertisement removed');
        this.cdr.detectChanges();
      }
    });
  }

  formatFileSize(bytes: number): string {
    if (!bytes || bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }

  openPreview(ad: Advertisement): void {
    this.selectedAdForPreview = ad;
    this.showPreviewModal = true;
  }

  closePreview(): void {
    this.showPreviewModal = false;
    this.selectedAdForPreview = null;
  }

  formatDateForInput(date: Date | string | null): string {
    if (!date) return '';
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toISOString().split('T')[0];
  }

  openScheduleModal(adId: number): void {
    this.editingScheduleAdId = adId;
    const existing = this.getAdvertisementSchedule(adId);
    const now = new Date();
    this.scheduleFormData = {
      regionId: existing?.regionId ?? (this.screenRegions.length === 1 ? this.screenRegions[0].id : null),
      startDate: existing?.startDate ? this.formatDateForInput(existing.startDate) : this.formatDateForInput(now),
      endDate: existing?.endDate ? this.formatDateForInput(existing.endDate) : '',
      startTime: existing?.startTime ?? now.toTimeString().slice(0, 5),
      endTime: existing?.endTime ?? '',
      priority: existing?.priority ?? 0,
      isActive: existing?.isActive !== false
    };
    this.showScheduleModal = true;
  }

  closeScheduleModal(): void {
    this.showScheduleModal = false;
    this.editingScheduleAdId = null;
  }

  saveAdvertisementSchedule(): void {
    if (!this.selectedScreen || this.editingScheduleAdId == null) return;
    const d = this.scheduleFormData;
    const payload: CreateAdvertisementScheduleRequest = {
      screenId: this.selectedScreen.id,
      adId: this.editingScheduleAdId,
      regionId: d.regionId,
      startDate: d.startDate || null,
      endDate: d.endDate || null,
      startTime: d.startTime || null,
      endTime: d.endTime || null,
      isActive: d.isActive,
      priority: d.priority
    };
    const existing = this.getAdvertisementSchedule(this.editingScheduleAdId);
    const req = existing
      ? this.screenService.updateAdvertisementSchedule(this.selectedScreen.id, this.editingScheduleAdId, payload)
      : this.screenService.createAdvertisementSchedule(this.selectedScreen.id, payload);
    req.subscribe({
      next: (res) => {
        this.advertisementSchedules.set(this.editingScheduleAdId!, res.schedule);
        this.closeScheduleModal();
        this.showMessage('success', this.getTranslation('scheduleSaved') || 'Schedule saved.');
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.showMessage('error', err.error?.error || 'Failed to save schedule');
      }
    });
  }

  loadScreenRegions(screenId: number): void {
    this.isLoadingRegions = true;
    this.screenService.getScreenRegions(screenId).subscribe({
      next: (res) => {
        this.screenRegions = res.regions || [];
        this.isLoadingRegions = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoadingRegions = false;
      }
    });
  }

  createGridLayout(rows: number, cols: number): void {
    if (!this.selectedScreen) return;
    const screenId = this.selectedScreen.id;
    const widthPercent = 100 / cols;
    const heightPercent = 100 / rows;

    const createRegions = () => {
      const regions: any[] = [];
      let nextNumber = 1;
      const existing = this.screenRegions
        .filter(r => r.regionPosition && String(r.regionPosition).startsWith('custom_'))
        .map(r => {
          const m = String(r.regionPosition).match(/custom_(\d+)/);
          return m ? parseInt(m[1], 10) : 0;
        });
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          while (existing.includes(nextNumber)) nextNumber++;
          existing.push(nextNumber);
          regions.push({
            screenId,
            regionType: 'custom' as const,
            regionPosition: `custom_${nextNumber}` as any,
            widthPercentage: widthPercent,
            heightPercentage: heightPercent,
            xPosition: col * widthPercent,
            yPosition: row * heightPercent
          });
          nextNumber++;
        }
      }

      this.isCreatingRegions = true;
      let created = 0;
      const total = regions.length;
      regions.forEach((regionData) => {
        this.screenService.createScreenRegion(screenId, regionData).subscribe({
          next: (response) => {
            if (response?.region) this.screenRegions.push(response.region);
            created++;
            if (created === total) {
              this.isCreatingRegions = false;
              this.showMessage('success', `Layout ${rows}×${cols} created (${total} regions).`);
              this.cdr.detectChanges();
            }
          },
          error: () => {
            created++;
            if (created === total) {
              this.isCreatingRegions = false;
              this.loadScreenRegions(screenId);
            }
          }
        });
      });
    };

    if (this.screenRegions.length > 0) {
      let deleted = 0;
      this.screenRegions.forEach((region) => {
        this.screenService.deleteScreenRegion(screenId, region.id).subscribe({
          next: () => {
            deleted++;
            if (deleted === this.screenRegions.length) {
              this.screenRegions = [];
              createRegions();
            }
          },
          error: () => {
            deleted++;
            if (deleted === this.screenRegions.length) {
              this.screenRegions = [];
              createRegions();
            }
          }
        });
      });
    } else {
      createRegions();
    }
  }

  resetRegions(): void {
    if (!this.selectedScreen || !confirm(this.getTranslation('confirmResetRegions') || 'Reset all regions for this screen?')) return;
    const screenId = this.selectedScreen.id;
    if (this.screenRegions.length === 0) return;
    let deleted = 0;
    this.screenRegions.forEach((region) => {
      this.screenService.deleteScreenRegion(screenId, region.id).subscribe({
        next: () => {
          deleted++;
          if (deleted === this.screenRegions.length) {
            this.screenRegions = [];
            this.showMessage('success', this.getTranslation('regionsReset') || 'Regions reset.');
            this.cdr.detectChanges();
          }
        }
      });
    });
  }

  toggleAd(adId: number): void {
    const i = this.assignedAdIds.indexOf(adId);
    if (i >= 0) this.assignedAdIds.splice(i, 1);
    else this.assignedAdIds.push(adId);
  }

  isAdAssigned(adId: number): boolean {
    return this.assignedAdIds.includes(adId);
  }

  saveAssignedAds(): void {
    if (!this.selectedScreen || !this.fullScreen) return;
    this.isSavingAds = true;
    this.screenService.updateScreen(this.selectedScreen.id, { name: this.fullScreen.name, advertisementIds: this.assignedAdIds }).subscribe({
      next: () => {
        this.isSavingAds = false;
        this.showMessage('success', this.getTranslation('adsSaved') || 'Advertisements saved.');
        this.loadScreenDetails(this.selectedScreen!.id);
      },
      error: () => {
        this.isSavingAds = false;
        this.showMessage('error', 'Failed to save advertisements');
      }
    });
  }

  saveSettings(): void {
    if (!this.selectedScreen || !this.fullScreen) return;
    this.isSavingSettings = true;
    this.screenService.updateScreen(this.selectedScreen.id, {
      name: this.fullScreen.name,
      orientation: this.orientation,
      screenSize: this.screenSize
    }).subscribe({
      next: () => {
        this.isSavingSettings = false;
        this.showMessage('success', this.getTranslation('settingsSaved') || 'Settings saved.');
      },
      error: () => {
        this.isSavingSettings = false;
        this.showMessage('error', 'Failed to save settings');
      }
    });
  }

  applyToGroup(): void {
    if (!this.selectedScreen?.groupId) return;
    this.isApplyingToGroup = true;
    this.screenService.applyToGroup(this.selectedScreen.id).subscribe({
      next: (res: { success: boolean; message?: string; screenCount?: number }) => {
        this.isApplyingToGroup = false;
        this.showMessage('success', res.message || (res.screenCount != null ? `Applied to ${res.screenCount} screen(s) in group.` : 'Applied to group.'));
        this.loadScreens();
      },
      error: (err: { error?: { error?: string }; message?: string }) => {
        this.isApplyingToGroup = false;
        this.showMessage('error', err.error?.error || err.message || 'Failed to apply to group');
      }
    });
  }

  private showMessage(type: 'success' | 'error' | 'warning', text: string): void {
    if (type === 'error') console.error(text);
    alert(text);
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
