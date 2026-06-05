import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { UserService, User, UserPermissions } from '../../../../core/services/user.service';
import { LocationService, Subsite, Section, SpecialDivision } from '../../../../core/services/location.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-users-permissions',
  templateUrl: './users-permissions.component.html',
  styleUrls: ['./users-permissions.component.scss']
})
export class UsersPermissionsComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  users: User[] = [];
  filteredUsers: User[] = [];
  showUserList = true; // Show user list by default
  showSuccessBanner = false;
  editingUser: User | null = null;
  userForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  // 2FA UI state (for current logged-in user)
  currentUsernameFor2FA: string = '';
  twoFactorEnabled: boolean | null = null;
  twoFactorPassword: string = '';
  twoFactorQrDataUrl: string = '';
  twoFactorSetupCode: string = '';
  twoFactorDisableCode: string = '';
  twoFactorSetupDigits: string[] = Array(6).fill('');
  twoFactorDisableDigits: string[] = Array(6).fill('');
  twoFactorMessage: string = '';
  twoFactorMessageType: 'success' | 'error' = 'success';
  
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

  // Location dropdowns
  subsites: Subsite[] = [];
  sections: Section[] = [];
  specialDivisions: SpecialDivision[] = [];

  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;
  paginatedUsers: User[] = [];

  // Search and filter
  searchTerm: string = '';
  selectedType: string = 'all';
  selectedValidity: string = 'all';
  selectedStatus: string = 'all';

  // Math property for template use
  Math = Math;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private userService: UserService,
    private locationService: LocationService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone1: ['', Validators.required],
      phone2: [''],
      subsiteId: [null],
      sectionId: [null],
      specialDivisionId: [null],
      userType: ['regular-user', Validators.required],
      validity: ['coordinator', Validators.required],
      notes: [''],
      isActive: [true],
      
      // Permissions
      addModifyAccounts: [false],
      viewAccounts: [false],
      deleteAccounts: [false],
      addModifyAds: [false],
      displayAds: [false],
      deleteAds: [false],
      addModifySites: [false],
      viewSites: [false],
      deleteSites: [false],
      notificationSending: [false],
      notificationViewing: [false],
      notificationDeletion: [false]
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadLocationData();

    const currentUser = this.authService.getCurrentUser();
    this.currentUsernameFor2FA = currentUser?.email || currentUser?.username || '';
    this.twoFactorEnabled = typeof currentUser?.twoFactorEnabled === 'boolean' ? currentUser!.twoFactorEnabled! : null;

    // Only load users if showing the list initially
    if (this.showUserList) {
      this.loadUsers();
    }
  }

  start2FASetup(): void {
    if (!this.currentUsernameFor2FA || !this.twoFactorPassword) {
      this.twoFactorMessageType = 'error';
      this.twoFactorMessage = this.getTranslation('fieldRequired') || 'Required fields missing';
      return;
    }

    this.isLoading = true;
    this.twoFactorMessage = '';

    this.authService.setup2FA(this.currentUsernameFor2FA, this.twoFactorPassword).subscribe({
      next: (resp) => {
        this.isLoading = false;
        this.twoFactorQrDataUrl = resp.qrDataUrl;
        this.twoFactorSetupCode = '';
        this.twoFactorSetupDigits = Array(6).fill('');
        this.twoFactorMessageType = 'success';
        this.twoFactorMessage = 'Scan the QR code, then enter the 6-digit code to enable 2FA.';
      },
      error: (error) => {
        console.error('2FA setup error:', error);
        this.isLoading = false;
        this.twoFactorMessageType = 'error';
        this.twoFactorMessage = error?.error?.error || 'Failed to start 2FA setup';
      }
    });
  }

  confirm2FASetup(): void {
    const code = this.getOtpCode(this.twoFactorSetupDigits);
    this.twoFactorSetupCode = code;
    if (!this.currentUsernameFor2FA || !this.twoFactorPassword || code.length !== 6) {
      this.twoFactorMessageType = 'error';
      this.twoFactorMessage = this.getTranslation('fieldRequired') || 'Required fields missing';
      return;
    }

    this.isLoading = true;
    this.twoFactorMessage = '';

    this.authService.verifySetup2FA(this.currentUsernameFor2FA, this.twoFactorPassword, this.twoFactorSetupCode).subscribe({
      next: () => {
        this.isLoading = false;
        this.twoFactorEnabled = true;
        this.twoFactorQrDataUrl = '';
        this.twoFactorSetupCode = '';
        this.twoFactorSetupDigits = Array(6).fill('');
        this.twoFactorMessageType = 'success';
        this.twoFactorMessage = '2FA enabled successfully.';

        // Update cached user so UI stays consistent
        const cu = this.authService.getCurrentUser();
        if (cu) {
          cu.twoFactorEnabled = true;
          localStorage.setItem('currentUser', JSON.stringify(cu));
        }
      },
      error: (error) => {
        console.error('2FA verify-setup error:', error);
        this.isLoading = false;
        this.twoFactorMessageType = 'error';
        this.twoFactorMessage = error?.error?.error || 'Invalid code. Please try again.';
      }
    });
  }

  disable2FAForCurrentUser(): void {
    const code = this.getOtpCode(this.twoFactorDisableDigits);
    this.twoFactorDisableCode = code;
    if (!this.currentUsernameFor2FA || !this.twoFactorPassword || code.length !== 6) {
      this.twoFactorMessageType = 'error';
      this.twoFactorMessage = this.getTranslation('fieldRequired') || 'Required fields missing';
      return;
    }

    this.isLoading = true;
    this.twoFactorMessage = '';

    this.authService.disable2FA(this.currentUsernameFor2FA, this.twoFactorPassword, this.twoFactorDisableCode).subscribe({
      next: () => {
        this.isLoading = false;
        this.twoFactorEnabled = false;
        this.twoFactorDisableCode = '';
        this.twoFactorDisableDigits = Array(6).fill('');
        this.twoFactorQrDataUrl = '';
        this.twoFactorSetupCode = '';
        this.twoFactorSetupDigits = Array(6).fill('');
        this.twoFactorMessageType = 'success';
        this.twoFactorMessage = '2FA disabled successfully.';

        const cu = this.authService.getCurrentUser();
        if (cu) {
          cu.twoFactorEnabled = false;
          localStorage.setItem('currentUser', JSON.stringify(cu));
        }
      },
      error: (error) => {
        console.error('2FA disable error:', error);
        this.isLoading = false;
        this.twoFactorMessageType = 'error';
        this.twoFactorMessage = error?.error?.error || 'Failed to disable 2FA';
      }
    });
  }

  private getOtpCode(digits: string[]): string {
    return (digits || []).join('').replace(/\D/g, '').slice(0, 6);
  }

  onOtpChange(kind: 'setup' | 'disable', index: number, value: string): void {
    const arr = kind === 'setup' ? this.twoFactorSetupDigits : this.twoFactorDisableDigits;
    const digits = (value ?? '').toString().replace(/\D/g, '');

    if (!digits) {
      arr[index] = '';
      return;
    }

    // Normalize current box (single digit) OR distribute pasted/autofilled digits
    const toApply = digits.slice(0, 6 - index).split('');
    toApply.forEach((d, offset) => {
      arr[index + offset] = d;
    });

    // If more than one digit came in (paste/autofill), move focus to the last filled box
    if (toApply.length > 1) {
      const focusIndex = Math.min(index + toApply.length - 1, 5);
      setTimeout(() => {
        const el = document.getElementById(`${kind}-otp-${focusIndex}`) as HTMLInputElement | null;
        el?.focus();
      });
      return;
    }

    // Single digit typed: advance focus
    if (index < 5) {
      setTimeout(() => {
        const next = document.getElementById(`${kind}-otp-${index + 1}`) as HTMLInputElement | null;
        next?.focus();
        next?.select?.();
      });
    }
  }

  onOtpKeyDown(kind: 'setup' | 'disable', index: number, event: KeyboardEvent): void {
    if (event.key !== 'Backspace') return;
    const arr = kind === 'setup' ? this.twoFactorSetupDigits : this.twoFactorDisableDigits;
    const current = arr[index] || '';

    // If current box is empty, go back
    if (!current && index > 0) {
      const prev = document.getElementById(`${kind}-otp-${index - 1}`) as HTMLInputElement | null;
      prev?.focus();
      prev?.select?.();
      event.preventDefault();
    }
  }

  loadLocationData(): void {
    // Load subsites
    this.locationService.getSubsites().subscribe({
      next: (subsites) => {
        this.subsites = subsites;
      },
      error: (error) => {
        console.error('Error loading subsites:', error);
      }
    });

    // Load sections
    this.locationService.getSections().subscribe({
      next: (sections) => {
        this.sections = sections;
      },
      error: (error) => {
        console.error('Error loading sections:', error);
      }
    });

    // Load special divisions
    this.locationService.getSpecialDivisions().subscribe({
      next: (divisions) => {
        this.specialDivisions = divisions;
      },
      error: (error) => {
        console.error('Error loading special divisions:', error);
      }
    });
  }

  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = [...this.users];
        this.calculatePagination();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading users:', error);
        this.errorMessage = error.error?.error || 'Failed to load users';
        this.isLoading = false;
        // Keep empty array on error
        this.users = [];
        this.filteredUsers = [];
        this.calculatePagination();
      }
    });
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = 
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.phone1.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.selectedType === 'all' || user.userType === this.selectedType;
      const matchesValidity = this.selectedValidity === 'all' || user.validity === this.selectedValidity;
      const matchesStatus = this.selectedStatus === 'all' || 
        (this.selectedStatus === 'active' && user.isActive) ||
        (this.selectedStatus === 'inactive' && !user.isActive);
      return matchesSearch && matchesType && matchesValidity && matchesStatus;
    });
    this.calculatePagination();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
    this.updatePaginatedUsers();
  }

  updatePaginatedUsers(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedUsers = this.filteredUsers.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedUsers();
    }
  }

  getVisiblePages(): number[] {
    const pages: number[] = [];
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(totalPages);
      }
    }
    
    return pages;
  }

  onItemsPerPageChange(): void {
    this.currentPage = 1;
    this.calculatePagination();
  }

  saveUser() {
    if (this.userForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const formValue = this.userForm.value;
      const permissions: UserPermissions = {
        addModifyAccounts: formValue.addModifyAccounts || false,
        viewAccounts: formValue.viewAccounts || false,
        deleteAccounts: formValue.deleteAccounts || false,
        addModifyAds: formValue.addModifyAds || false,
        displayAds: formValue.displayAds || false,
        deleteAds: formValue.deleteAds || false,
        addModifySites: formValue.addModifySites || false,
        viewSites: formValue.viewSites || false,
        deleteSites: formValue.deleteSites || false,
        notificationSending: formValue.notificationSending || false,
        notificationViewing: formValue.notificationViewing || false,
        notificationDeletion: formValue.notificationDeletion || false
      };

      const userData: any = {
        username: formValue.username,
        email: formValue.email,
        phone1: formValue.phone1,
        phone2: formValue.phone2 || undefined,
        subsiteId: formValue.subsiteId || undefined,
        sectionId: formValue.sectionId || undefined,
        specialDivisionId: formValue.specialDivisionId || undefined,
        userType: formValue.userType,
        validity: formValue.validity,
        notes: formValue.notes || undefined,
        isActive: formValue.isActive !== undefined ? formValue.isActive : true,
        permissions
      };

      // Only include password if provided (required for create, optional for update)
      if (formValue.password && formValue.password.trim() !== '') {
        userData.password = formValue.password;
      }

      if (this.editingUser) {
        // Update existing user
        this.userService.updateUser(this.editingUser.id, userData).subscribe({
          next: (updatedUser) => {
            const index = this.users.findIndex(u => u.id === this.editingUser!.id);
            if (index !== -1) {
              this.users[index] = updatedUser;
            }
            this.showSuccessMessage();
            this.errorMessage = ''; // Clear any previous errors
            this.loadUsers(); // Reload to get fresh data
            this.editingUser = null;
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error updating user:', error);
            this.errorMessage = error.error?.error || 'Failed to update user';
            this.isLoading = false;
          }
        });
      } else {
        // Create new user
        this.userService.createUser(userData).subscribe({
          next: (newUser) => {
            this.showSuccessMessage();
            this.errorMessage = ''; // Clear any previous errors
            this.loadUsers(); // Reload to get fresh data
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error creating user:', error);
            this.errorMessage = error.error?.error || 'Failed to create user';
            this.isLoading = false;
          }
        });
      }
    }
  }

  editUser(user: User) {
    this.editingUser = user;
    // For editing, password is optional (only update if provided)
    // Remove password required validator when editing, keep minLength
    this.userForm.get('password')?.clearValidators();
    this.userForm.get('password')?.setValidators([Validators.minLength(6)]);
    this.userForm.get('password')?.updateValueAndValidity();
    
    this.userForm.patchValue({
      username: user.username,
      email: user.email,
      password: '', // Clear password field when editing
      phone1: user.phone1,
      phone2: user.phone2 || '',
      subsiteId: user.subsiteId || null,
      sectionId: user.sectionId || null,
      specialDivisionId: user.specialDivisionId || null,
      userType: user.userType,
      validity: user.validity,
      notes: user.notes || '',
      isActive: user.isActive,
      // Permissions
      addModifyAccounts: user.permissions?.addModifyAccounts || false,
      viewAccounts: user.permissions?.viewAccounts || false,
      deleteAccounts: user.permissions?.deleteAccounts || false,
      addModifyAds: user.permissions?.addModifyAds || false,
      displayAds: user.permissions?.displayAds || false,
      deleteAds: user.permissions?.deleteAds || false,
      addModifySites: user.permissions?.addModifySites || false,
      viewSites: user.permissions?.viewSites || false,
      deleteSites: user.permissions?.deleteSites || false,
      notificationSending: user.permissions?.notificationSending || false,
      notificationViewing: user.permissions?.notificationViewing || false,
      notificationDeletion: user.permissions?.notificationDeletion || false
    });
    
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Hide the user list to show the form
    this.showUserList = false;
  }

  cancelEdit() {
    this.editingUser = null;
    // Restore password required validator
    this.userForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
    this.userForm.get('password')?.updateValueAndValidity();
    this.resetForm();
    this.showUserList = true;
  }

  deleteUser(id: number): void {
    this.itemToDelete = id;
    const userName = this.users.find(u => u.id === id)?.username || 'this user';
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: `${this.getTranslation('confirmDeleteMessage') || 'Are you sure you want to delete? This action cannot be undone.'} (${userName})`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel',
      type: 'danger'
    };
    this.showConfirmDialog = true;
  }

  onConfirmDelete(): void {
    if (this.itemToDelete !== null) {
      this.isLoading = true;
      this.userService.deleteUser(this.itemToDelete).subscribe({
        next: () => {
          this.loadUsers(); // Reload to get fresh data
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
        },
        error: (error) => {
          console.error('Error deleting user:', error);
          this.errorMessage = error.error?.error || 'Failed to delete user';
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

  resetForm(): void {
    this.userForm.reset({
      username: '',
      email: '',
      password: '',
      phone1: '',
      phone2: '',
      subsiteId: null,
      sectionId: null,
      specialDivisionId: null,
      userType: 'regular-user',
      validity: 'coordinator',
      notes: '',
      isActive: true,
      addModifyAccounts: false,
      viewAccounts: false,
      deleteAccounts: false,
      addModifyAds: false,
      displayAds: false,
      deleteAds: false,
      addModifySites: false,
      viewSites: false,
      deleteSites: false,
      notificationSending: false,
      notificationViewing: false,
      notificationDeletion: false
    });
    this.errorMessage = '';
  }

  showSuccessMessage(): void {
    this.showSuccessBanner = true;
    setTimeout(() => {
      this.showSuccessBanner = false;
    }, 3000);
  }

  getTypeDisplayName(type: string): string {
    const types = {
      'regular-user': this.getTranslation('regularUser'),
      'admin-user': this.getTranslation('adminUser'),
      'super-user': this.getTranslation('superUser')
    };
    return types[type as keyof typeof types] || type;
  }

  getValidityDisplayName(validity: string): string {
    const validities = {
      'manager': this.getTranslation('manager'),
      'supervisor': this.getTranslation('supervisor'),
      'coordinator': this.getTranslation('coordinator')
    };
    return validities[validity as keyof typeof validities] || validity;
  }

  getSubsiteName(id?: number): string {
    if (!id) return '-';
    const subsite = this.subsites.find(s => s.id === id);
    return subsite ? subsite.name : '-';
  }

  getSectionName(id?: number): string {
    if (!id) return '-';
    const section = this.sections.find(s => s.id === id);
    return section ? section.name : '-';
  }

  getSpecialDivisionName(id?: number): string {
    if (!id) return '-';
    const division = this.specialDivisions.find(d => d.id === id);
    return division ? division.name : '-';
  }

  // Use centralized translation service
  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
