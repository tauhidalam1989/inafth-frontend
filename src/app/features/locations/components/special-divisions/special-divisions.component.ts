import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { LocationService, SpecialDivision } from '../../../../core/services/location.service';

@Component({
  selector: 'app-special-divisions',
  templateUrl: './special-divisions.component.html',
  styleUrls: ['./special-divisions.component.scss']
})
export class SpecialDivisionsComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  divisions: SpecialDivision[] = [];
  filteredDivisions: SpecialDivision[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'all';
  selectedPriority: string = 'all';
  selectedLocation: string = 'all';
  showUserList = true; // Show list by default
  showSuccessBanner = false;
  editingDivision: SpecialDivision | null = null;
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
  paginatedDivisions: SpecialDivision[] = [];
  
  // Make Math accessible in template
  Math = Math;
  
  divisionForm: FormGroup;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private locationService: LocationService,
    private fb: FormBuilder
  ) {
    this.divisionForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      category: ['', Validators.required],
      priority: ['', Validators.required],
      description: ['', Validators.required],
      location: ['المنطقة الجديدة', Validators.required]
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();

    this.loadDivisions();
  }

  loadDivisions(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.locationService.getSpecialDivisions().subscribe({
      next: (divisions) => {
        this.divisions = divisions;
        this.filteredDivisions = [...this.divisions];
        this.calculatePagination();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading special divisions:', error);
        this.errorMessage = error.error?.error || 'Failed to load special divisions';
        this.isLoading = false;
        this.divisions = [];
        this.filteredDivisions = [];
        this.calculatePagination();
      }
    });
  }

  getUniqueLocations(): string[] {
    const locations = this.divisions
      .map(d => d.location)
      .filter((location, index, self) => location && self.indexOf(location) === index)
      .sort();
    return locations;
  }

  filterDivisions(): void {
    this.filteredDivisions = this.divisions.filter(division => {
      const matchesSearch = division.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           division.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           (division.description || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           division.location.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || division.category === this.selectedCategory;
      const matchesPriority = this.selectedPriority === 'all' || division.priority === this.selectedPriority;
      const matchesLocation = this.selectedLocation === 'all' || division.location === this.selectedLocation;
      return matchesSearch && matchesCategory && matchesPriority && matchesLocation;
    });
    this.calculatePagination();
  }

  addDivision(): void {
    if (this.divisionForm.valid) {
      this.saveDivision();
    }
  }

  saveDivision(): void {
    if (this.divisionForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      
      const formValue = this.divisionForm.value;
      const divisionData = {
        name: formValue.name,
        code: formValue.code,
        category: formValue.category,
        priority: formValue.priority,
        description: formValue.description,
        location: formValue.location
      };

      if (this.editingDivision) {
        // Update existing division
        this.locationService.updateSpecialDivision(this.editingDivision.id, divisionData).subscribe({
          next: (updatedDivision) => {
            const index = this.divisions.findIndex(d => d.id === this.editingDivision!.id);
            if (index !== -1) {
              this.divisions[index] = updatedDivision;
            }
            this.showSuccessMessage();
            this.loadDivisions(); // Reload to get fresh data
            this.editingDivision = null;
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error updating special division:', error);
            this.errorMessage = error.error?.error || 'Failed to update special division';
            this.isLoading = false;
          }
        });
      } else {
        // Create new division
        this.locationService.createSpecialDivision(divisionData).subscribe({
          next: (newDivision) => {
            this.showSuccessMessage();
            this.loadDivisions(); // Reload to get fresh data
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error creating special division:', error);
            this.errorMessage = error.error?.error || 'Failed to create special division';
            this.isLoading = false;
          }
        });
      }
    }
  }

  editDivision(division: SpecialDivision): void {
    this.editingDivision = division;
    this.divisionForm.patchValue({
      name: division.name,
      code: division.code,
      category: division.category,
      priority: division.priority,
      description: division.description,
      location: division.location
    });
    
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Hide the division list to show the form
    this.showUserList = false;
  }

  cancelEdit(): void {
    this.editingDivision = null;
    this.resetForm();
    this.showUserList = true;
  }

  resetForm(): void {
    this.divisionForm.reset({
      category: '',
      priority: '',
      location: 'المنطقة الجديدة'
    });
  }

  deleteDivision(id: number): void {
    this.itemToDelete = id;
    const divisionName = this.divisions.find(d => d.id === id)?.name || 'this special division';
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: `${this.getTranslation('confirmDeleteMessage') || 'Are you sure you want to delete? This action cannot be undone.'} (${divisionName})`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel',
      type: 'danger'
    };
    this.showConfirmDialog = true;
  }

  onConfirmDelete(): void {
    if (this.itemToDelete !== null) {
      this.isLoading = true;
      this.locationService.deleteSpecialDivision(this.itemToDelete).subscribe({
        next: () => {
          this.loadDivisions(); // Reload to get fresh data
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
        },
        error: (error) => {
          console.error('Error deleting special division:', error);
          this.errorMessage = error.error?.error || 'Failed to delete special division';
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
    this.totalPages = Math.ceil(this.filteredDivisions.length / this.itemsPerPage);
    this.currentPage = Math.min(this.currentPage, this.totalPages);
    this.updatePaginatedDivisions();
  }

  updatePaginatedDivisions(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDivisions = this.filteredDivisions.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedDivisions();
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

  getHighPriorityCount(): number {
    return this.divisions.filter(d => d.priority === 'high').length;
  }

  getMediumPriorityCount(): number {
    return this.divisions.filter(d => d.priority === 'medium').length;
  }

  getLowPriorityCount(): number {
    return this.divisions.filter(d => d.priority === 'low').length;
  }

  getCategoryDisplayName(category: string): string {
    const categories = {
      government: this.getTranslation('government'),
      educational: this.getTranslation('educational'),
      healthcare: this.getTranslation('healthcare'),
      religious: this.getTranslation('religious'),
      recreational: this.getTranslation('recreational')
    };
    return categories[category as keyof typeof categories] || category;
  }

  getPriorityDisplayName(priority: string): string {
    const priorities = {
      high: this.getTranslation('high'),
      medium: this.getTranslation('medium'),
      low: this.getTranslation('low')
    };
    return priorities[priority as keyof typeof priorities] || priority;
  }

  getCategoryBadgeClass(category: string): string {
    const badgeClasses = {
      government: 'bg-primary',
      educational: 'bg-success',
      healthcare: 'bg-danger',
      religious: 'bg-warning',
      recreational: 'bg-info'
    };
    return badgeClasses[category as keyof typeof badgeClasses] || 'bg-secondary';
  }

  getPriorityBadgeClass(priority: string): string {
    const badgeClasses = {
      high: 'bg-danger',
      medium: 'bg-warning',
      low: 'bg-info'
    };
    return badgeClasses[priority as keyof typeof badgeClasses] || 'bg-secondary';
  }

  getPriorityClass(priority: string): string {
    const priorityClasses = {
      high: 'priority-high',
      medium: 'priority-medium',
      low: 'priority-low'
    };
    return priorityClasses[priority as keyof typeof priorityClasses] || '';
  }

  // Use centralized translation service
  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
