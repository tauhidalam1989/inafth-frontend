import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';

interface Banner {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  priority: number;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'inactive';
}

@Component({
  selector: 'app-advertising-banner',
  templateUrl: './advertising-banner.component.html',
  styleUrls: ['./advertising-banner.component.scss']
})
export class AdvertisingBannerComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  banners: Banner[] = [];
  filteredBanners: Banner[] = [];
  searchTerm: string = '';
  selectedStatus: string = 'all';
  showAddForm = false;
  bannerForm: FormGroup;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private fb: FormBuilder
  ) {
    this.bannerForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      priority: [5, [Validators.required, Validators.min(1), Validators.max(10)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();

    this.loadBanners();
  }

  loadBanners(): void {
    // Mock data - replace with actual API call
    this.banners = [
      {
        id: 1,
        title: 'شريط إعلاني ترحيبي',
        description: 'شريط إعلاني ترحيبي للمستخدمين الجدد في النظام',
        imageUrl: 'https://via.placeholder.com/800x200/667eea/ffffff?text=Welcome+Banner',
        priority: 1,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        status: 'active'
      },
      {
        id: 2,
        title: 'إعلان الخدمات الجديدة',
        description: 'إعلان عن الخدمات الجديدة المتاحة في النظام',
        imageUrl: 'https://via.placeholder.com/800x200/28a745/ffffff?text=New+Services',
        priority: 2,
        startDate: new Date(),
        endDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000), // 45 days from now
        status: 'active'
      },
      {
        id: 3,
        title: 'إعلان الصيانة',
        description: 'إعلان عن مواعيد الصيانة المجدولة',
        imageUrl: 'https://via.placeholder.com/800x200/ffc107/000000?text=Maintenance',
        priority: 3,
        startDate: new Date(),
        endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
        status: 'inactive'
      }
    ];
    this.filteredBanners = [...this.banners];
  }

  filterBanners(): void {
    this.filteredBanners = this.banners.filter(banner => {
      const matchesSearch = banner.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           banner.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.selectedStatus === 'all' || banner.status === this.selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }

  addBanner(): void {
    if (this.bannerForm.valid) {
      const formValue = this.bannerForm.value;
      const banner: Banner = {
        id: this.banners.length + 1,
        title: formValue.title,
        description: formValue.description,
        imageUrl: formValue.imageUrl,
        priority: formValue.priority,
        startDate: new Date(formValue.startDate),
        endDate: new Date(formValue.endDate),
        status: 'inactive'
      };

      this.banners.unshift(banner);
      this.filterBanners();
      this.resetForm();
      this.showAddForm = false;
    }
  }

  resetForm(): void {
    this.bannerForm.reset({
      priority: 5
    });
  }

  toggleBannerStatus(banner: Banner): void {
    banner.status = banner.status === 'active' ? 'inactive' : 'active';
  }

  deleteBanner(id: number): void {
    if (confirm(this.getTranslation('confirmDelete'))) {
      this.banners = this.banners.filter(b => b.id !== id);
      this.filterBanners();
    }
  }

  getStatusDisplayName(status: string): string {
    const statuses = {
      active: this.getTranslation('active'),
      inactive: this.getTranslation('inactive')
    };
    return statuses[status as keyof typeof statuses] || status;
  }

  // Use centralized translation service
  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
