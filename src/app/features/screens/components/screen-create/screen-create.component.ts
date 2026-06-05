import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { ScreenService, Screen, ScreenGroup, CreateScreenRequest } from '../../../../core/services/screen.service';
import { LocationService, Subsite, Section, SpecialDivision } from '../../../../core/services/location.service';
import { UserService, User } from '../../../../core/services/user.service';
import { AdvertisementsService, Advertisement } from '../../../../core/services/advertisements.service';

@Component({
  selector: 'app-screen-create',
  templateUrl: './screen-create.component.html',
  styleUrls: ['./screen-create.component.scss']
})
export class ScreenCreateComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  manualForm: FormGroup;
  editingScreen: Screen | null = null;
  showSuccessMessage = false;
  successMessage = '';
  isResetting = false;

  // Location selection
  availableSubsites: Subsite[] = [];
  availableSections: Section[] = [];
  availableSpecialDivisions: SpecialDivision[] = [];
  selectedSubsite: Subsite | null = null;
  selectedSection: Section | null = null;
  selectedSpecialDivision: SpecialDivision | null = null;
  showSubsiteDropdown = false;
  showSectionDropdown = false;
  showSpecialDivisionDropdown = false;

  // User selection
  availableUsers: User[] = [];
  selectedUserIds: number[] = [];
  showUserDropdown = false;

  // Advertisement selection (modal picker with previews)
  availableAdvertisements: Advertisement[] = [];
  selectedAdvertisementIds: number[] = [];
  showAdvertisementModal = false;
  /** Working set while the picker modal is open; committed on Submit */
  pendingAdvertisementIds: number[] = [];

  // Screen groups
  availableGroups: ScreenGroup[] = [];
  selectedGroup: ScreenGroup | null = null;
  showGroupDropdown = false;
  showCreateGroupModal = false;
  newGroupName = '';
  newGroupDescription = '';

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private screenService: ScreenService,
    private locationService: LocationService,
    private userService: UserService,
    private advertisementsService: AdvertisementsService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.manualForm = this.fb.group({
      name: ['', Validators.required],
      ipAddress: [''],
      macAddress: [''],
      groupId: [null],
      subsiteId: [null],
      sectionId: [null],
      specialDivisionId: [null],
      assignedUserIds: [[]],
      advertisementIds: [[]],
      // Display settings
      orientation: ['landscape'],
      screenSize: ['medium'],
      screenWidth: [null],
      screenHeight: [null]
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadLocationData();
    this.loadUsers();
    this.loadAdvertisements();
    this.loadScreenGroups();

    // Check query params
    this.route.queryParams.subscribe(params => {
      // If editing existing screen (check both 'edit' and 'id' for backward compatibility)
      if (params['edit']) {
        const screenId = parseInt(params['edit']);
        if (!isNaN(screenId)) {
          this.loadScreenForEdit(screenId);
        }
      } else if (params['id']) {
        const screenId = parseInt(params['id']);
        if (!isNaN(screenId)) {
          this.loadScreenForEdit(screenId);
        }
      }
      // If registering discovered device
      else if (params['deviceId']) {
        this.populateFormFromDevice(params);
      }
    });
  }

  populateFormFromDevice(params: any): void {
    // Pre-fill form with device details
    this.manualForm.patchValue({
      name: params['name'] || '',
      ipAddress: params['ipAddress'] || '',
      macAddress: params['macAddress'] || ''
    });
  }

  loadScreenForEdit(screenId: number): void {
    // Use getScreenById API to fetch full screen details
    this.screenService.getScreenById(screenId).subscribe({
      next: (screen) => {
        this.editingScreen = screen;
        this.populateForm(screen);
      },
      error: (error) => {
        console.error('Error loading screen for edit:', error);
        alert(this.getTranslation('errorLoadingScreen') || 'Error loading screen details');
      }
    });
  }

  populateForm(screen: Screen): void {
    this.manualForm.patchValue({
      name: screen.name,
      ipAddress: screen.ipAddress || '',
      macAddress: screen.macAddress || '',
      groupId: screen.groupId,
      subsiteId: screen.subsiteId,
      sectionId: screen.sectionId,
      specialDivisionId: screen.specialDivisionId,
      assignedUserIds: screen.assignedUserIds || (screen.assignedUserId ? [screen.assignedUserId] : []),
      advertisementIds: screen.assignedAds || [],
      // Display settings
      orientation: screen.orientation || 'landscape',
      screenSize: screen.screenSize || 'medium',
      screenWidth: screen.screenWidth || null,
      screenHeight: screen.screenHeight || null
    });

    this.selectedAdvertisementIds = screen.assignedAds || [];
    // Update form control with advertisement IDs
    this.manualForm.patchValue({ advertisementIds: this.selectedAdvertisementIds });

    if (screen.subsiteId) {
      this.selectedSubsite = this.availableSubsites.find(s => s.id === screen.subsiteId) || null;
      if (this.selectedSubsite) {
        this.loadSections();
      }
    }

    if (screen.sectionId) {
      this.selectedSection = this.availableSections.find(s => s.id === screen.sectionId) || null;
      if (this.selectedSection) {
        this.loadSpecialDivisions();
      }
    }

    if (screen.specialDivisionId) {
      this.selectedSpecialDivision = this.availableSpecialDivisions.find(d => d.id === screen.specialDivisionId) || null;
    }

    if (screen.assignedUserId) {
      // Support both single user (for backward compatibility) and multiple users
      this.selectedUserIds = Array.isArray(screen.assignedUserId) 
        ? screen.assignedUserId 
        : [screen.assignedUserId];
    } else if (screen.assignedUserIds && Array.isArray(screen.assignedUserIds)) {
      this.selectedUserIds = screen.assignedUserIds;
    }

    if (screen.groupId) {
      this.selectedGroup = this.availableGroups.find(g => g.id === screen.groupId) || null;
    }
  }

  formatDateForInput(date: Date | string): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.selection-card') && !target.closest('.dropdown-menu')) {
      this.showSubsiteDropdown = false;
      this.showSectionDropdown = false;
      this.showSpecialDivisionDropdown = false;
      this.showUserDropdown = false;
      this.showGroupDropdown = false;
    }
  }

  // ========== Data Loading Methods ==========
  loadLocationData(): void {
    this.locationService.getSubsites().subscribe({
      next: (subsites) => {
        this.availableSubsites = subsites;
      },
      error: (error) => {
        console.error('Error loading subsites:', error);
      }
    });
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.availableUsers = users.filter(u => u.isActive);
      },
      error: (error) => {
        console.error('Error loading users:', error);
      }
    });
  }

  loadAdvertisements(): void {
    this.advertisementsService.getAdvertisements().subscribe({
      next: (response) => {
        this.availableAdvertisements = response.advertisements || response as any;
      },
      error: (error) => {
        console.error('Error loading advertisements:', error);
      }
    });
  }

  loadScreenGroups(): void {
    this.screenService.getScreenGroups().subscribe({
      next: (groups) => {
        this.availableGroups = groups;
      },
      error: (error) => {
        console.error('Error loading screen groups:', error);
      }
    });
  }

  // ========== Location Selection Methods ==========
  openSubsiteSelector(): void {
    // Close other dropdowns
    this.showGroupDropdown = false;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
    this.showUserDropdown = false;
    // Toggle subsite dropdown
    this.showSubsiteDropdown = !this.showSubsiteDropdown;
    
    // Load subsites if not loaded
    if (this.showSubsiteDropdown && this.availableSubsites.length === 0) {
      this.loadLocationData();
    }
  }

  selectSubsite(subsite: Subsite): void {
    this.selectedSubsite = subsite;
    this.selectedSection = null;
    this.selectedSpecialDivision = null;
    this.showSubsiteDropdown = false;
    this.manualForm.patchValue({ subsiteId: subsite.id });
    this.loadSections();
  }

  loadSections(): void {
    if (!this.selectedSubsite) return;
    this.locationService.getSections().subscribe({
      next: (sections) => {
        this.availableSections = sections.filter(s => s.location === this.selectedSubsite?.name);
      },
      error: (error) => {
        console.error('Error loading sections:', error);
        this.availableSections = [];
      }
    });
  }

  openSectionSelector(): void {
    if (!this.selectedSubsite) return;
    
    // Close other dropdowns
    this.showGroupDropdown = false;
    this.showSubsiteDropdown = false;
    this.showSpecialDivisionDropdown = false;
    this.showUserDropdown = false;
    // Toggle section dropdown
    this.showSectionDropdown = !this.showSectionDropdown;
    
    // Load sections if not loaded
    if (this.showSectionDropdown && this.availableSections.length === 0) {
      this.loadSections();
    }
  }

  selectSection(section: Section): void {
    this.selectedSection = section;
    this.selectedSpecialDivision = null;
    this.showSectionDropdown = false;
    this.manualForm.patchValue({ sectionId: section.id });
    this.loadSpecialDivisions();
  }

  loadSpecialDivisions(): void {
    if (!this.selectedSection) return;
    this.locationService.getSpecialDivisions().subscribe({
      next: (divisions) => {
        this.availableSpecialDivisions = divisions.filter(d => d.location === this.selectedSection?.location);
      },
      error: (error) => {
        console.error('Error loading special divisions:', error);
        this.availableSpecialDivisions = [];
      }
    });
  }

  openSpecialDivisionSelector(): void {
    if (!this.selectedSection) return;
    
    // Close other dropdowns
    this.showGroupDropdown = false;
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    this.showUserDropdown = false;
    // Toggle special division dropdown
    this.showSpecialDivisionDropdown = !this.showSpecialDivisionDropdown;
    
    // Load special divisions if not loaded
    if (this.showSpecialDivisionDropdown && this.availableSpecialDivisions.length === 0) {
      this.loadSpecialDivisions();
    }
  }

  selectSpecialDivision(division: SpecialDivision): void {
    this.selectedSpecialDivision = division;
    this.showSpecialDivisionDropdown = false;
    this.manualForm.patchValue({ specialDivisionId: division.id });
  }

  // ========== User Selection Methods ==========
  openUserSelector(): void {
    // Close other dropdowns
    this.showGroupDropdown = false;
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
    // Toggle user dropdown
    this.showUserDropdown = !this.showUserDropdown;
    
    // Load users if not loaded
    if (this.showUserDropdown && this.availableUsers.length === 0) {
      this.loadUsers();
    }
  }

  toggleUser(userId: number): void {
    const index = this.selectedUserIds.indexOf(userId);
    if (index > -1) {
      this.selectedUserIds.splice(index, 1);
    } else {
      this.selectedUserIds.push(userId);
    }
    this.manualForm.patchValue({ assignedUserIds: this.selectedUserIds });
  }

  isUserSelected(userId: number): boolean {
    return this.selectedUserIds.includes(userId);
  }

  // ========== Advertisement Selection Methods ==========
  openAdvertisementSelector(): void {
    this.showGroupDropdown = false;
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
    this.showUserDropdown = false;

    const open = () => {
      this.pendingAdvertisementIds = [...this.selectedAdvertisementIds];
      this.showAdvertisementModal = true;
    };

    if (this.availableAdvertisements.length === 0) {
      this.advertisementsService.getAdvertisements().subscribe({
        next: (response) => {
          this.availableAdvertisements = response.advertisements || (response as any);
          open();
        },
        error: (error) => {
          console.error('Error loading advertisements:', error);
        }
      });
    } else {
      open();
    }
  }

  closeAdvertisementModal(): void {
    this.showAdvertisementModal = false;
  }

  submitAdvertisementModal(): void {
    this.selectedAdvertisementIds = [...this.pendingAdvertisementIds];
    this.manualForm.patchValue({ advertisementIds: this.selectedAdvertisementIds });
    this.showAdvertisementModal = false;
  }

  togglePendingAdvertisement(adId: number | undefined): void {
    if (adId == null) return;
    const index = this.pendingAdvertisementIds.indexOf(adId);
    if (index > -1) {
      this.pendingAdvertisementIds.splice(index, 1);
    } else {
      this.pendingAdvertisementIds.push(adId);
    }
  }

  isPendingAdvertisementSelected(adId: number): boolean {
    return this.pendingAdvertisementIds.includes(adId);
  }

  getAdPreviewUrl(ad: Advertisement): string {
    const url = ad.thumbnailUrl || ad.fileUrl;
    return this.getFileUrl(url);
  }

  getFileUrl(fileUrl: string): string {
    if (!fileUrl) return fileUrl;
    const base = (environment.apiUrl || '').replace(/\/api\/?$/, '').trim();
    if (!base) return fileUrl;
    try {
      const u = new URL(fileUrl);
      if (u.hostname === 'localhost' && (u.port === '3000' || !u.port)) {
        return fileUrl.replace(u.origin, base);
      }
    } catch {
      /* relative or invalid */
    }
    return fileUrl;
  }

  isImageUrl(url: string): boolean {
    if (!url) return false;
    return /\.(jpg|jpeg|png|gif|webp|bmp|svg|ico|tiff|tif|heic|heif|avif|jfif)$/i.test(url);
  }

  showImagePreview(ad: Advertisement): boolean {
    return ad.type === 'image' || this.isImageUrl(ad.fileUrl || '');
  }

  showVideoPreview(ad: Advertisement): boolean {
    return ad.type === 'video';
  }

  // ========== Group Selection Methods ==========
  openGroupSelector(): void {
    // Close other dropdowns
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
    this.showUserDropdown = false;
    // Toggle group dropdown
    this.showGroupDropdown = !this.showGroupDropdown;
    
    // Load groups if not loaded
    if (this.showGroupDropdown && this.availableGroups.length === 0) {
      this.loadScreenGroups();
    }
  }

  selectGroup(group: ScreenGroup): void {
    this.selectedGroup = group;
    this.showGroupDropdown = false;
    this.manualForm.patchValue({ groupId: group.id });
  }

  openCreateGroupModal(): void {
    this.showCreateGroupModal = true;
    this.newGroupName = '';
    this.newGroupDescription = '';
  }

  createGroup(): void {
    if (!this.newGroupName.trim()) return;
    this.screenService.createScreenGroup(this.newGroupName.trim(), this.newGroupDescription.trim() || undefined).subscribe({
      next: (group) => {
        this.availableGroups.push(group);
        this.selectedGroup = group;
        this.manualForm.patchValue({ groupId: group.id });
        this.showCreateGroupModal = false;
        this.newGroupName = '';
        this.newGroupDescription = '';
      },
      error: (error) => {
        console.error('Error creating group:', error);
        alert('Failed to create group: ' + (error.error?.error || error.message));
      }
    });
  }

  // ========== Screen Creation ==========
  resetForm(): void {
    this.manualForm.reset();
    this.selectedSubsite = null;
    this.selectedSection = null;
    this.selectedSpecialDivision = null;
    this.selectedUserIds = [];
    this.selectedGroup = null;
    this.selectedAdvertisementIds = [];
  }

  saveScreen(): void {
    if (this.manualForm.invalid) {
      this.manualForm.markAllAsTouched();
      return;
    }

    const formValue = this.manualForm.value;
    const screenData: CreateScreenRequest = {
      name: formValue.name,
      ipAddress: formValue.ipAddress || null,
      macAddress: formValue.macAddress || null,
      groupId: formValue.groupId || null,
      subsiteId: formValue.subsiteId || null,
      sectionId: formValue.sectionId || null,
      specialDivisionId: formValue.specialDivisionId || null,
      assignedUserIds: this.selectedUserIds.length > 0 ? this.selectedUserIds : [],
      advertisementIds: this.selectedAdvertisementIds.length > 0 ? this.selectedAdvertisementIds : (formValue.advertisementIds || []),
      // Display settings
      orientation: formValue.orientation || null,
      screenSize: formValue.screenSize || null,
      screenWidth: formValue.screenWidth ? parseInt(formValue.screenWidth) : null,
      screenHeight: formValue.screenHeight ? parseInt(formValue.screenHeight) : null
    };

    // Combine date and time

    if (this.editingScreen) {
      // Update existing screen
      this.screenService.updateScreen(this.editingScreen.id, screenData).subscribe({
        next: (screen) => {
          this.showSuccessMessage = true;
          this.successMessage = this.getTranslation('screenUpdatedSuccessfully') || 'Screen updated successfully';
          setTimeout(() => {
            this.showSuccessMessage = false;
            this.router.navigate(['/screens/list']);
          }, 2000);
        },
        error: (error) => {
          console.error('Error updating screen:', error);
          alert('Failed to update screen: ' + (error.error?.error || error.message));
        }
      });
    } else {
      // Create new screen
      this.screenService.createScreen(screenData).subscribe({
        next: (screen) => {
          this.showSuccessMessage = true;
          this.successMessage = this.getTranslation('screenCreatedSuccessfully') || 'Screen created successfully';
          this.resetForm();
          setTimeout(() => {
            this.showSuccessMessage = false;
            this.router.navigate(['/screens/list']);
          }, 2000);
        },
        error: (error) => {
          console.error('Error creating screen:', error);
          alert('Failed to create screen: ' + (error.error?.error || error.message));
        }
      });
    }
  }

  /**
   * Reset all screen-related data (schedules, ad assignments, regions) for this screen.
   * Clears ghost playback; leaves screen with one default full-screen region.
   */
  resetScreen(): void {
    if (!this.editingScreen?.id) return;
    const msg = this.getTranslation('confirmResetScreen') ||
      'Reset this screen? All schedules, ad assignments, and regions will be cleared. A single full-screen region will be recreated. This helps prevent ghost video playback.';
    if (!confirm(msg)) return;
    this.isResetting = true;
    this.screenService.resetScreen(this.editingScreen.id).subscribe({
      next: (res) => {
        this.isResetting = false;
        this.showSuccessMessage = true;
        this.successMessage = res.message || (this.getTranslation('screenResetSuccessfully') || 'Screen reset successfully.');
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        this.loadScreenForEdit(this.editingScreen!.id);
      },
      error: (err) => {
        this.isResetting = false;
        console.error('Error resetting screen:', err);
        alert('Failed to reset screen: ' + (err.error?.error || err.message));
      }
    });
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
