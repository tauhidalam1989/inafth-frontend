import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { LocationService, Section, Subsite } from '../../../../core/services/location.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  sections: Section[] = [];
  filteredSections: Section[] = [];
  locations: Subsite[] = []; // Locations for dropdown
  searchTerm: string = '';
  selectedType: string = 'all';
  selectedStatus: string = 'all';
  showUserList = true; // Show list by default
  showSuccessBanner = false;
  editingSection: Section | null = null;
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
  paginatedSections: Section[] = [];
  
  // Make Math accessible in template
  Math = Math;
  
  sectionForm: FormGroup;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private locationService: LocationService,
    private fb: FormBuilder
  ) {
    this.sectionForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      type: ['', Validators.required],
      status: ['active', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();

    this.loadLocations(); // Load locations first
    this.loadSections();
  }
  
  loadLocations(): void {
    this.locationService.getSubsites().subscribe({
      next: (locations) => {
        // Filter only active locations
        this.locations = locations.filter(loc => loc.status === 'active');
      },
      error: (error) => {
        console.error('Error loading locations:', error);
        this.locations = [];
      }
    });
  }

  loadSections(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.locationService.getSections().subscribe({
      next: (sections) => {
        this.sections = sections;
        this.filteredSections = [...this.sections];
        this.calculatePagination();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading sections:', error);
        this.errorMessage = error.error?.error || 'Failed to load sections';
        this.isLoading = false;
        this.sections = [];
        this.filteredSections = [];
        this.calculatePagination();
      }
    });
  }

  filterSections(): void {
    this.filteredSections = this.sections.filter(section => {
      const matchesSearch = section.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           section.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           (section.description || '').toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.selectedType === 'all' || section.type === this.selectedType;
      const matchesStatus = this.selectedStatus === 'all' || section.status === this.selectedStatus;
      return matchesSearch && matchesType && matchesStatus;
    });
    this.calculatePagination();
  }

  addSection(): void {
    if (this.sectionForm.valid) {
      this.saveSection();
    }
  }

  saveSection(): void {
    if (this.sectionForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      
      const formValue = this.sectionForm.value;
      const sectionData = {
        name: formValue.name,
        code: formValue.code,
        type: formValue.type,
        status: formValue.status,
        description: formValue.description,
        location: formValue.location
      };

      if (this.editingSection) {
        // Update existing section
        this.locationService.updateSection(this.editingSection.id, sectionData).subscribe({
          next: (updatedSection) => {
            const index = this.sections.findIndex(s => s.id === this.editingSection!.id);
            if (index !== -1) {
              this.sections[index] = updatedSection;
            }
            this.showSuccessMessage();
            this.loadSections(); // Reload to get fresh data
            this.editingSection = null;
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error updating section:', error);
            this.errorMessage = error.error?.error || 'Failed to update section';
            this.isLoading = false;
          }
        });
      } else {
        // Create new section
        this.locationService.createSection(sectionData).subscribe({
          next: (newSection) => {
            this.showSuccessMessage();
            this.loadSections(); // Reload to get fresh data
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error creating section:', error);
            this.errorMessage = error.error?.error || 'Failed to create section';
            this.isLoading = false;
          }
        });
      }
    }
  }

  editSection(section: Section): void {
    this.editingSection = section;
    this.sectionForm.patchValue({
      name: section.name,
      code: section.code,
      type: section.type,
      status: section.status,
      description: section.description,
      location: section.location
    });
    
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Hide the section list to show the form
    this.showUserList = false;
  }

  cancelEdit(): void {
    this.editingSection = null;
    this.resetForm();
    this.showUserList = true;
  }

  resetForm(): void {
    this.sectionForm.reset({
      type: '',
      status: 'active',
      location: this.locations.length > 0 ? this.locations[0].name : ''
    });
  }

  toggleSectionStatus(section: Section): void {
    let newStatus: 'active' | 'inactive' | 'under-construction';
    if (section.status === 'active') {
      newStatus = 'inactive';
    } else if (section.status === 'inactive') {
      newStatus = 'active';
    } else {
      newStatus = 'active';
    }
    
    this.locationService.updateSection(section.id, {
      name: section.name,
      code: section.code,
      type: section.type,
      status: newStatus,
      description: section.description ?? '',
      location: section.location
    }).subscribe({
      next: () => {
        this.loadSections(); // Reload to get fresh data
      },
      error: (error) => {
        console.error('Error updating section status:', error);
        this.errorMessage = error.error?.error || 'Failed to update section status';
      }
    });
  }

  deleteSection(id: number): void {
    this.itemToDelete = id;
    const sectionName = this.sections.find(s => s.id === id)?.name || 'this section';
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: `${this.getTranslation('confirmDeleteMessage') || 'Are you sure you want to delete? This action cannot be undone.'} (${sectionName})`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel',
      type: 'danger'
    };
    this.showConfirmDialog = true;
  }

  onConfirmDelete(): void {
    if (this.itemToDelete !== null) {
      this.isLoading = true;
      this.locationService.deleteSection(this.itemToDelete).subscribe({
        next: () => {
          this.loadSections(); // Reload to get fresh data
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
        },
        error: (error) => {
          console.error('Error deleting section:', error);
          this.errorMessage = error.error?.error || 'Failed to delete section';
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
    this.totalPages = Math.ceil(this.filteredSections.length / this.itemsPerPage);
    this.currentPage = Math.min(this.currentPage, this.totalPages);
    this.updatePaginatedSections();
  }

  updatePaginatedSections(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedSections = this.filteredSections.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedSections();
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

  getActiveCount(): number {
    return this.sections.filter(s => s.status === 'active').length;
  }

  getUnderConstructionCount(): number {
    return this.sections.filter(s => s.status === 'under-construction').length;
  }

  getInactiveCount(): number {
    return this.sections.filter(s => s.status === 'inactive').length;
  }

  getTypeDisplayName(type: string): string {
    const types = {
      residential: this.getTranslation('residential'),
      commercial: this.getTranslation('commercial'),
      industrial: this.getTranslation('industrial'),
      mixed: this.getTranslation('mixed')
    };
    return types[type as keyof typeof types] || type;
  }

  getStatusDisplayName(status: string): string {
    const statuses = {
      active: this.getTranslation('active'),
      inactive: this.getTranslation('inactive'),
      'under-construction': this.getTranslation('underConstruction')
    };
    return statuses[status as keyof typeof statuses] || status;
  }

  getTypeBadgeClass(type: string): string {
    const badgeClasses = {
      residential: 'bg-success',
      commercial: 'bg-primary',
      industrial: 'bg-warning',
      mixed: 'bg-info'
    };
    return badgeClasses[type as keyof typeof badgeClasses] || 'bg-secondary';
  }

  getStatusBadgeClass(status: string): string {
    const badgeClasses = {
      active: 'bg-success',
      inactive: 'bg-secondary',
      'under-construction': 'bg-warning'
    };
    return badgeClasses[status as keyof typeof badgeClasses] || 'bg-secondary';
  }

  // Use centralized translation service
  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
