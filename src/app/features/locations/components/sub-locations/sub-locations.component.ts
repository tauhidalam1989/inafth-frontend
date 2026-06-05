import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { LocationService, Subsite } from '../../../../core/services/location.service';

@Component({
  selector: 'app-sub-locations',
  templateUrl: './sub-locations.component.html',
  styleUrls: ['./sub-locations.component.scss']
})
export class SubLocationsComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  locations: Subsite[] = [];
  filteredLocations: Subsite[] = [];
  searchTerm: string = '';
  selectedStatus: string = 'all';
  showUserList = true; // Show list by default
  showSuccessBanner = false;
  editingLocation: Subsite | null = null;
  isLoading = false;
  errorMessage = '';
  
  // Confirm dialog
  showConfirmDialog = false;
  confirmDialogData = {
    title: '',
    message: '',
    confirmText: 'OK',
    cancelText: 'Cancel',
    type: 'danger' as 'warning' | 'danger' | 'info'
  };
  itemToDelete: number | null = null;
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;
  paginatedLocations: Subsite[] = [];
  
  // Make Math accessible in template
  Math = Math;
  
  locationForm: FormGroup;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private locationService: LocationService,
    private fb: FormBuilder
  ) {
    this.locationForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      type: ['', Validators.required],
      status: ['active', Validators.required]
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();

    this.loadLocations();
  }

  loadLocations(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.locationService.getSubsites().subscribe({
      next: (subsites) => {
        this.locations = subsites;
        this.filteredLocations = [...this.locations];
        this.calculatePagination();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading subsites:', error);
        this.errorMessage = error.error?.error || 'Failed to load locations';
        this.isLoading = false;
        this.locations = [];
        this.filteredLocations = [];
        this.calculatePagination();
      }
    });
  }

  filterLocations(): void {
    this.filteredLocations = this.locations.filter(location => {
      const matchesSearch = location.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           location.address.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.selectedStatus === 'all' || location.status === this.selectedStatus;
      return matchesSearch && matchesStatus;
    });
    this.calculatePagination();
  }

  addLocation(): void {
    if (this.locationForm.valid) {
      this.saveLocation();
    }
  }

  saveLocation(): void {
    if (this.locationForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      
      const formValue = this.locationForm.value;
      const locationData = {
        name: formValue.name,
        address: formValue.address,
        type: formValue.type,
        status: formValue.status
      };

      if (this.editingLocation) {
        // Update existing location
        this.locationService.updateSubsite(this.editingLocation.id, locationData).subscribe({
          next: (updatedLocation) => {
            const index = this.locations.findIndex(l => l.id === this.editingLocation!.id);
            if (index !== -1) {
              this.locations[index] = updatedLocation;
            }
            this.showSuccessMessage();
            this.loadLocations(); // Reload to get fresh data
            this.editingLocation = null;
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error updating location:', error);
            this.errorMessage = error.error?.error || 'Failed to update location';
            this.isLoading = false;
          }
        });
      } else {
        // Create new location
        this.locationService.createSubsite(locationData).subscribe({
          next: (newLocation) => {
            this.showSuccessMessage();
            this.loadLocations(); // Reload to get fresh data
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error creating location:', error);
            this.errorMessage = error.error?.error || 'Failed to create location';
            this.isLoading = false;
          }
        });
      }
    }
  }

  editLocation(location: Subsite): void {
    this.editingLocation = location;
    this.locationForm.patchValue({
      name: location.name,
      address: location.address,
      type: location.type,
      status: location.status
    });
    
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Hide the location list to show the form
    this.showUserList = false;
  }

  cancelEdit(): void {
    this.editingLocation = null;
    this.resetForm();
    this.showUserList = true;
  }

  resetForm(): void {
    this.locationForm.reset({
      type: '',
      status: 'active'
    });
  }

  toggleLocationStatus(location: Subsite): void {
    const newStatus = location.status === 'active' ? 'inactive' : 'active';
    this.locationService.updateSubsite(location.id, {
      name: location.name,
      address: location.address,
      type: location.type,
      status: newStatus
    }).subscribe({
      next: () => {
        this.loadLocations(); // Reload to get fresh data
      },
      error: (error) => {
        console.error('Error updating location status:', error);
        this.errorMessage = error.error?.error || 'Failed to update location status';
      }
    });
  }

  deleteLocation(id: number): void {
    this.itemToDelete = id;
    const locationName = this.locations.find(l => l.id === id)?.name || 'this location';
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: `${this.getTranslation('confirmDeleteMessage') || 'Are you sure you want to delete? This action cannot be undone.'} (${locationName})`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel',
      type: 'danger'
    };
    this.showConfirmDialog = true;
  }

  onConfirmDelete(): void {
    if (this.itemToDelete !== null) {
      this.isLoading = true;
      this.locationService.deleteSubsite(this.itemToDelete).subscribe({
        next: () => {
          this.loadLocations(); // Reload to get fresh data
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
        },
        error: (error) => {
          console.error('Error deleting location:', error);
          this.errorMessage = error.error?.error || 'Failed to delete location';
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
        }
      });
    }
  }

  onCancelDelete(): void {
    this.showConfirmDialog = false;
    this.itemToDelete = null;
  }

  showSuccessMessage(): void {
    this.showSuccessBanner = true;
    setTimeout(() => {
      this.showSuccessBanner = false;
    }, 3000);
  }

  // Pagination methods
  calculatePagination(): void {
    this.totalPages = Math.ceil(this.filteredLocations.length / this.itemsPerPage);
    this.currentPage = Math.min(this.currentPage, this.totalPages);
    this.updatePaginatedLocations();
  }

  updatePaginatedLocations(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedLocations = this.filteredLocations.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedLocations();
    }
  }

  getVisiblePages(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    
    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        pages.push(1);
        for (let i = this.totalPages - 3; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(this.totalPages);
      }
    }
    
    return pages;
  }

  onItemsPerPageChange(): void {
    this.currentPage = 1;
    this.calculatePagination();
  }

  getTypeDisplayName(type: string): string {
    const types = {
      'main-center': this.getTranslation('mainCenter'),
      'branch': this.getTranslation('branch'),
      'office': this.getTranslation('office')
    };
    return types[type as keyof typeof types] || type;
  }

  getStatusDisplayName(status: string): string {
    const statuses = {
      active: this.getTranslation('active'),
      inactive: this.getTranslation('inactive')
    };
    return statuses[status as keyof typeof statuses] || status;
  }

  getTypeBadgeClass(type: string): string {
    const badgeClasses = {
      'main-center': 'bg-primary',
      'branch': 'bg-success',
      'office': 'bg-info'
    };
    return badgeClasses[type as keyof typeof badgeClasses] || 'bg-secondary';
  }

  getStatusBadgeClass(status: string): string {
    const badgeClasses = {
      active: 'bg-success',
      inactive: 'bg-secondary'
    };
    return badgeClasses[status as keyof typeof badgeClasses] || 'bg-secondary';
  }

  // Use centralized translation service
  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
