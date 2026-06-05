import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';

interface Advertisement {
  id: number;
  title: string;
  description: string;
  type: 'banner' | 'popup' | 'sidebar';
  status: 'active' | 'inactive' | 'expired';
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  clicks: number;
  impressions: number;
  ctr: number;
}

@Component({
  selector: 'app-view-advertisements',
  templateUrl: './view-advertisements.component.html',
  styleUrls: ['./view-advertisements.component.scss']
})
export class ViewAdvertisementsComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  advertisements: Advertisement[] = [];
  filteredAdvertisements: Advertisement[] = [];
  searchTerm: string = '';
  selectedType: string = 'all';
  selectedStatus: string = 'all';
  selectedDateRange: string = 'all';
  sortField: string = 'title';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();

    this.loadAdvertisements();
  }

  loadAdvertisements(): void {
    // Mock data - replace with actual API call
    this.advertisements = [
      {
        id: 1,
        title: 'إعلان المنتجات الجديدة',
        description: 'إعلان عن أحدث المنتجات في المتجر',
        type: 'banner',
        status: 'active',
        imageUrl: 'https://via.placeholder.com/100x60/667eea/ffffff?text=Ad1',
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        clicks: 150,
        impressions: 2500,
        ctr: 6.0
      },
      {
        id: 2,
        title: 'عرض خاص للعملاء',
        description: 'عرض حصري للعملاء المسجلين',
        type: 'popup',
        status: 'active',
        imageUrl: 'https://via.placeholder.com/100x60/28a745/ffffff?text=Ad2',
        startDate: new Date(),
        endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        clicks: 75,
        impressions: 1200,
        ctr: 6.25
      },
      {
        id: 3,
        title: 'إعلان الخدمات',
        description: 'إعلان عن الخدمات المتاحة',
        type: 'sidebar',
        status: 'expired',
        imageUrl: 'https://via.placeholder.com/100x60/ffc107/000000?text=Ad3',
        startDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        clicks: 25,
        impressions: 800,
        ctr: 3.125
      },
      {
        id: 4,
        title: 'إعلان العروض الموسمية',
        description: 'عروض خاصة للموسم الحالي',
        type: 'banner',
        status: 'inactive',
        imageUrl: 'https://via.placeholder.com/100x60/dc3545/ffffff?text=Ad4',
        startDate: new Date(),
        endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        clicks: 0,
        impressions: 0,
        ctr: 0
      }
    ];
    this.filteredAdvertisements = [...this.advertisements];
  }

  filterAdvertisements(): void {
    this.filteredAdvertisements = this.advertisements.filter(advertisement => {
      const matchesSearch = advertisement.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           advertisement.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.selectedType === 'all' || advertisement.type === this.selectedType;
      const matchesStatus = this.selectedStatus === 'all' || advertisement.status === this.selectedStatus;
      const matchesDateRange = this.filterByDateRange(advertisement);
      return matchesSearch && matchesType && matchesStatus && matchesDateRange;
    });
  }

  filterByDateRange(advertisement: Advertisement): boolean {
    if (this.selectedDateRange === 'all') return true;
    
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(startOfDay.getTime() - startOfDay.getDay() * 24 * 60 * 60 * 1000);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    switch (this.selectedDateRange) {
      case 'today':
        return advertisement.startDate >= startOfDay;
      case 'week':
        return advertisement.startDate >= startOfWeek;
      case 'month':
        return advertisement.startDate >= startOfMonth;
      default:
        return true;
    }
  }

  toggleSort(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.sortAdvertisements();
  }

  sortAdvertisements(): void {
    this.filteredAdvertisements.sort((a, b) => {
      let aValue: any = a[this.sortField as keyof Advertisement];
      let bValue: any = b[this.sortField as keyof Advertisement];

      if (this.sortField === 'ctr') {
        aValue = a.ctr;
        bValue = b.ctr;
      }

      if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  getTotalImpressions(): number {
    return this.advertisements.reduce((total, ad) => total + ad.impressions, 0);
  }

  getTotalClicks(): number {
    return this.advertisements.reduce((total, ad) => total + ad.clicks, 0);
  }

  getAverageCTR(): number {
    const totalImpressions = this.getTotalImpressions();
    if (totalImpressions === 0) return 0;
    return (this.getTotalClicks() / totalImpressions) * 100;
  }

  getTypeDisplayName(type: string): string {
    const types = {
      banner: this.getTranslation('banner'),
      popup: this.getTranslation('popup'),
      sidebar: this.getTranslation('sidebar')
    };
    return types[type as keyof typeof types] || type;
  }

  getStatusDisplayName(status: string): string {
    const statuses = {
      active: this.getTranslation('active'),
      inactive: this.getTranslation('inactive'),
      expired: this.getTranslation('expired')
    };
    return statuses[status as keyof typeof statuses] || status;
  }

  getTypeBadgeClass(type: string): string {
    const badgeClasses = {
      banner: 'bg-primary',
      popup: 'bg-success',
      sidebar: 'bg-info'
    };
    return badgeClasses[type as keyof typeof badgeClasses] || 'bg-secondary';
  }

  getStatusBadgeClass(status: string): string {
    const badgeClasses = {
      active: 'bg-success',
      inactive: 'bg-secondary',
      expired: 'bg-danger'
    };
    return badgeClasses[status as keyof typeof badgeClasses] || 'bg-secondary';
  }

  getCTRClass(ctr: number): string {
    if (ctr >= 5) return 'ctr-high';
    if (ctr >= 2) return 'ctr-medium';
    return 'ctr-low';
  }

  getSortIcon(field: string): string {
    if (this.sortField !== field) return 'fas fa-sort';
    return this.sortDirection === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
  }

  exportData(): void {
    // Implement export functionality
    console.log('Exporting data...');
  }

  printReport(): void {
    // Implement print functionality
    window.print();
  }

  // Use centralized translation service
  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
