import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { ScreenService, DiscoveredDevice, Screen } from '../../../../core/services/screen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-screen-discovery',
  templateUrl: './screen-discovery.component.html',
  styleUrls: ['./screen-discovery.component.scss']
})
export class ScreenDiscoveryComponent implements OnInit, OnDestroy {
  currentLanguage: 'ar' | 'en' = 'ar';
  isScanning = false;
  scanProgress = 0;
  discoveredDevices: DiscoveredDevice[] = [];
  filteredDevices: DiscoveredDevice[] = [];
  searchTerm: string = '';
  scanSubscription: Subscription | null = null;
  showSuccessMessage = false;
  successMessage = '';
  registeredScreens: Screen[] = [];

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private screenService: ScreenService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadRegisteredScreens();
  }

  loadRegisteredScreens(): void {
    this.screenService.getScreens().subscribe(
      screens => {
        this.registeredScreens = screens;
      },
      error => {
        console.error('Error loading registered screens:', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.scanSubscription) {
      this.scanSubscription.unsubscribe();
    }
  }

  startScanning(): void {
    this.isScanning = true;
    this.scanProgress = 0;
    this.discoveredDevices = [];
    this.filteredDevices = [];

    // Start network scanning
    this.scanSubscription = this.screenService.scanNetwork().subscribe(
      ({ isScanning, progress }) => {
        this.isScanning = isScanning;
        this.scanProgress = progress;

        // When scanning completes, fetch discovered devices
        if (!isScanning && progress === 100) {
          this.loadDiscoveredDevices();
        }
      },
      error => {
        console.error('Scanning error:', error);
        this.isScanning = false;
        this.scanProgress = 0;
      }
    );
  }

  loadDiscoveredDevices(): void {
    this.screenService.getDiscoveredDevices().subscribe(
      devices => {
        this.discoveredDevices = devices;
        this.filteredDevices = [...devices];
      },
      error => {
        console.error('Error loading devices:', error);
      }
    );
  }

  filterDevices(): void {
    if (!this.searchTerm.trim()) {
      this.filteredDevices = [...this.discoveredDevices];
      return;
    }

    const search = this.searchTerm.toLowerCase();
    this.filteredDevices = this.discoveredDevices.filter(device =>
      device.name.toLowerCase().includes(search) ||
      device.ipAddress.includes(search) ||
      device.macAddress.toLowerCase().includes(search)
    );
  }

  openRegisterForm(device: DiscoveredDevice): void {
    // Redirect to create screen page with device details as query params
    this.router.navigate(['/screens/create'], {
      queryParams: {
        deviceId: device.id,
        name: device.name,
        ipAddress: device.ipAddress,
        macAddress: device.macAddress,
        deviceType: device.deviceType
      }
    });
  }

  getDeviceTypeIcon(type: string): string {
    switch (type) {
      case 'android-tv':
        return 'fab fa-android';
      case 'smart-tv':
        return 'fas fa-tv';
      default:
        return 'fas fa-desktop';
    }
  }

  getDeviceTypeLabel(type: string): string {
    switch (type) {
      case 'android-tv':
        return 'Android TV';
      case 'smart-tv':
        return 'Smart TV';
      default:
        return 'Unknown';
    }
  }

  getStatusBadgeClass(status: string): string {
    return status === 'online' ? 'bg-success' : 'bg-secondary';
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }

  // ========== Manual Screen Creation ==========
  openManualForm(): void {
    this.router.navigate(['/screens/create']);
  }

  deleteScreen(screenId: number): void {
    if (confirm(this.getTranslation('confirmDeleteScreen') || 'Are you sure you want to delete this screen?')) {
      this.screenService.deleteScreen(screenId).subscribe({
        next: () => {
          this.showSuccessMessage = true;
          this.successMessage = this.getTranslation('screenDeletedSuccessfully') || 'Screen deleted successfully';
          this.loadRegisteredScreens();
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);
        },
        error: (error) => {
          console.error('Error deleting screen:', error);
          alert('Failed to delete screen: ' + (error.error?.error || error.message));
        }
      });
    }
  }
}

