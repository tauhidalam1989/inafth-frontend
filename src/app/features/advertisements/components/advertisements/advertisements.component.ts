import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { AdvertisementsService, Advertisement, AdvertisementType, AdvertisementStatus } from '../../../../core/services/advertisements.service';
import { CloudStorageService, CloudStorageConfig } from '../../../../core/services/cloud-storage.service';
import { forkJoin } from 'rxjs';
// Using fetch API for direct upload instead of Azure SDK (browser-compatible)

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss']
})
export class AdvertisementsComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  advertisements: Advertisement[] = [];
  filteredAdvertisements: Advertisement[] = [];
  searchTerm: string = '';
  selectedType: string = 'all';
  selectedStatus: string = 'all';
  showAddForm = false;
  editingAdvertisement: Advertisement | null = null;
  advertisementForm: FormGroup;
  selectedFile: File | null = null;
  selectedFiles: File[] = []; // Multiple files for batch upload
  filePreview: string | null = null;
  inputMethod: 'file' | 'url' = 'file'; // Toggle between file upload and URL input
  isLoading = false;
  errorMessage: string = '';
  showConfirmDialog = false;
  confirmDialogData: any = {};
  itemToDelete: Advertisement | null = null;



  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;
  totalAdvertisements: number = 0;

  // Direct upload progress
  uploadProgress: number = 0;
  isUploading: boolean = false;
  cloudStorageConfig: CloudStorageConfig | null = null;

  constructor(
    private languageService: LanguageService,
    private cloudStorageService: CloudStorageService,
    private translationService: TranslationService,
    private advertisementsService: AdvertisementsService,
    private fb: FormBuilder
  ) {
    this.advertisementForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      type: ['image', Validators.required],
      status: ['draft', Validators.required],
      fileUrl: ['']
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.currentLanguage = this.languageService.getSavedLanguage();

    // Load cloud storage configuration
    this.cloudStorageService.getConfig().subscribe({
      next: (config) => {
        this.cloudStorageConfig = config;
      },
      error: (error) => {
        console.error('Error loading cloud storage config:', error);
      }
    });
    this.loadAdvertisements();
  }

  loadAdvertisements(): void {
    this.isLoading = true;
    this.errorMessage = '';

    const filters: any = {
      type: this.selectedType !== 'all' ? this.selectedType : undefined,
      status: this.selectedStatus !== 'all' ? this.selectedStatus : undefined,
      search: this.searchTerm || undefined,
      page: this.currentPage,
      limit: this.itemsPerPage
    };

    this.advertisementsService.getAdvertisements(filters).subscribe({
      next: (response) => {
        this.advertisements = response.advertisements;
        this.filteredAdvertisements = [...this.advertisements];
        this.totalAdvertisements = response.total;
        this.calculatePagination();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading advertisements:', error);
        this.errorMessage = this.getTranslation('errorLoadingAdvertisements') || 'Error loading advertisements';
        this.isLoading = false;
      }
    });
  }



  calculatePagination(): void {
    this.totalPages = Math.ceil(this.totalAdvertisements / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadAdvertisements();
  }

  filterAdvertisements(): void {
    this.currentPage = 1;
    this.loadAdvertisements();
  }

  onFileSelected(event: any): void {
    const fileList = event.target?.files as FileList;
    if (!fileList?.length) return;
    this.selectedFiles = Array.from(fileList);
    this.selectedFile = this.selectedFiles[0];
    // Preview: first image in selection
    const firstImage = this.selectedFiles.find(f => f.type.startsWith('image/'));
    if (firstImage) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.filePreview = e.target.result;
      };
      reader.readAsDataURL(firstImage);
    } else {
      this.filePreview = null;
    }
    this.advertisementForm.patchValue({ fileUrl: '' });
  }

  onInputMethodChange(): void {
    // Clear file selection when switching to URL
    if (this.inputMethod === 'url') {
      this.selectedFile = null;
      this.selectedFiles = [];
      this.filePreview = null;
      // Clear file input
      const fileInput = document.getElementById('file') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
      // Update preview if URL exists (support all common image formats)
      const url = this.advertisementForm.value.fileUrl;
      if (url && url.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg|ico|tiff|tif|heic|heif|avif|jfif)$/i)) {
        this.filePreview = url;
      }
    } else {
      // Clear URL when switching to file
      this.advertisementForm.patchValue({ fileUrl: '' });
      this.filePreview = null;
    }
  }

  onUrlInput(event?: any): void {
    // Get the URL value - try from event first, then form control
    let url = '';
    if (event && event.target) {
      url = event.target.value?.trim() || '';
      // Update form control with the value from input
      const fileUrlControl = this.advertisementForm.get('fileUrl');
      if (fileUrlControl && fileUrlControl.value !== url) {
        fileUrlControl.setValue(url, { emitEvent: false });
      }
    } else {
      // Get the URL value directly from the form control
      const fileUrlControl = this.advertisementForm.get('fileUrl');
      url = fileUrlControl?.value?.trim() || '';
    }
    
    // Also get from HTML input element as fallback
    if (!url) {
      const urlInputElement = document.getElementById('fileUrl') as HTMLInputElement;
      if (urlInputElement && urlInputElement.value) {
        url = urlInputElement.value.trim();
        // Update form control
        const fileUrlControl = this.advertisementForm.get('fileUrl');
        if (fileUrlControl) {
          fileUrlControl.setValue(url, { emitEvent: false });
        }
      }
    }
    
    // Mark the control as touched and dirty to detect form changes
    const fileUrlControl = this.advertisementForm.get('fileUrl');
    if (fileUrlControl) {
      fileUrlControl.markAsTouched();
      fileUrlControl.markAsDirty();
      fileUrlControl.updateValueAndValidity();
    }
    
    if (url) {
      this.selectedFile = null;
      this.selectedFiles = [];
      // Clear file input
      const fileInput = document.getElementById('file') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
      // Update preview for image URLs (support all common image formats)
      if (url.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg|ico|tiff|tif|heic|heif|avif|jfif)$/i)) {
        this.filePreview = url;
      } else {
        this.filePreview = null;
      }
    } else {
      this.filePreview = null;
    }
  }



  async addAdvertisement(): Promise<void> {
    // Get the current form value for URL (ensure we get the latest value)
    // Try multiple ways to get URL value to ensure we capture it
    const formValue = this.advertisementForm.getRawValue();
    const fileUrlControl = this.advertisementForm.get('fileUrl');
    
    // Get URL value from multiple sources to ensure we capture it
    let inputUrl = '';
    if (fileUrlControl) {
      const controlValue = fileUrlControl.value;
      inputUrl = controlValue ? controlValue.toString().trim() : '';
    }
    if (!inputUrl && formValue.fileUrl) {
      inputUrl = formValue.fileUrl.toString().trim();
    }
    
    // Also check the HTML input element directly as a fallback
    if (!inputUrl) {
      const urlInputElement = document.getElementById('fileUrl') as HTMLInputElement;
      if (urlInputElement && urlInputElement.value) {
        inputUrl = urlInputElement.value.trim();
      }
    }
    
    // Validate that either file or URL is provided
    // IMPORTANT: If URL is entered, it should work regardless of which input method is selected
    // For editing: allow if existing advertisement has fileUrl, or if new file/URL is provided
    // For new: require file or URL
    const hasExistingFileUrl = this.editingAdvertisement?.fileUrl;
    const hasNewFile = this.selectedFiles.length > 0;
    // Accept any URL that starts with http:// or https:// or is a valid URL format
    const hasNewUrl = inputUrl.length > 0 && (inputUrl.startsWith('http://') || inputUrl.startsWith('https://') || inputUrl.startsWith('//'));
    
    // Debug logging
    console.log('🔍 Advertisement Validation Debug:', {
      inputMethod: this.inputMethod,
      inputUrl: inputUrl,
      inputUrlLength: inputUrl.length,
      hasNewFile: hasNewFile,
      hasNewUrl: hasNewUrl,
      hasExistingFileUrl: hasExistingFileUrl,
      fileUrlControlValue: fileUrlControl?.value,
      formValueFileUrl: formValue.fileUrl,
      editingAdvertisement: this.editingAdvertisement
    });
    
    // If we have URL, file, or existing fileUrl, proceed - no error
    if (!hasNewFile && !hasNewUrl && !hasExistingFileUrl) {
      // Check which input method is active to show appropriate error
      if (this.inputMethod === 'url') {
        this.errorMessage = this.getTranslation('urlRequired') || 'File URL is required';
        // Mark fileUrl control as invalid
        if (fileUrlControl) {
          fileUrlControl.setErrors({ required: true });
          fileUrlControl.markAsTouched();
        }
      } else {
        this.errorMessage = this.getTranslation('fileOrUrlRequired') || 'File or URL is required';
      }
      console.error('❌ Validation failed:', {
        errorMessage: this.errorMessage,
        inputUrl: inputUrl,
        hasNewUrl: hasNewUrl
      });
      return;
    }
    
    // Clear any previous errors if we have file or URL
    this.errorMessage = '';
    // Clear any errors on fileUrl control
    if (fileUrlControl && fileUrlControl.hasError('required')) {
      fileUrlControl.setErrors(null);
      fileUrlControl.updateValueAndValidity();
    }
    console.log('✅ Validation passed, proceeding with save');

    if (this.advertisementForm.invalid) {
      this.advertisementForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.uploadProgress = 0;
    this.isUploading = false;

    // Multiple files: create one advertisement per file (only when adding new, not editing)
    if (!this.editingAdvertisement && this.selectedFiles.length > 1) {
      this.saveMultipleAdvertisements(formValue, inputUrl);
      return;
    }

    // Single file or edit flow below
    // Check if we should use direct upload (Azure enabled)
    let useDirectUpload = this.cloudStorageConfig?.enabled && 
                            this.cloudStorageConfig?.provider === 'azure' && 
                            this.selectedFile;

    let uploadedFileUrl: string | null = null;
    let uploadedFileName: string | null = null;
    let uploadedFileSize: number | null = null;
    let uploadedMimeType: string | null = null;

    // Direct upload to Azure if enabled
    if (useDirectUpload && this.selectedFile) {
      try {
        this.isUploading = true;
        const uploadResult = await this.uploadFileDirectly(this.selectedFile);
        uploadedFileUrl = uploadResult.url;
        uploadedFileName = uploadResult.fileName;
        uploadedFileSize = uploadResult.fileSize;
        uploadedMimeType = uploadResult.mimeType;
        this.isUploading = false;
        this.uploadProgress = 100;
      } catch (error: any) {
        console.error('Direct upload failed, falling back to server upload:', error);
        this.isUploading = false;
        this.uploadProgress = 0;
        // Fall back to server upload
        useDirectUpload = false;
      }
    }

    const formData = new FormData();
    formData.append('title', formValue.title);
    formData.append('description', formValue.description || '');
    formData.append('status', formValue.status);

    // Get the latest URL value from form (use the same inputUrl we validated above)
    const userInputUrl = inputUrl; // Use the inputUrl we already validated

    // If URL is provided, use it directly (rewrite localhost:3000 to backend domain so backend stores correct URL)
    if (userInputUrl) {
      const urlToStore = this.getFileUrl(userInputUrl);
      // Extract filename from URL or use title
      const urlFileName = urlToStore.split('/').pop()?.split('?')[0] || this.advertisementForm.value.title || 'advertisement';
      // Try to determine mime type from URL extension
      let urlMimeType = 'application/octet-stream';
      const urlExtension = urlFileName.split('.').pop()?.toLowerCase();
      if (urlExtension) {
        if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg', 'ico', 'tiff', 'tif', 'heic', 'heif', 'avif', 'jfif'].includes(urlExtension)) {
          // Handle special mime types
          if (urlExtension === 'jpg') {
            urlMimeType = 'image/jpeg';
          } else if (urlExtension === 'svg') {
            urlMimeType = 'image/svg+xml';
          } else if (urlExtension === 'ico') {
            urlMimeType = 'image/x-icon';
          } else if (urlExtension === 'tiff' || urlExtension === 'tif') {
            urlMimeType = 'image/tiff';
          } else {
            urlMimeType = `image/${urlExtension}`;
          }
        } else if (['mp4', 'webm', 'ogg', 'mov', 'avi'].includes(urlExtension)) {
          urlMimeType = `video/${urlExtension === 'mov' ? 'quicktime' : urlExtension}`;
        } else if (['pdf'].includes(urlExtension)) {
          urlMimeType = 'application/pdf';
        }
      }
      
      // Log what we're sending
      console.log('📤 Sending to backend:', {
        fileUrl: urlToStore,
        fileName: urlFileName,
        fileSize: 0,
        mimeType: urlMimeType
      });
      
      formData.append('fileUrl', urlToStore);
      formData.append('fileName', urlFileName);
      formData.append('fileSize', '1'); // URL size unknown - use 1 instead of 0 (0 is falsy in backend check)
      formData.append('mimeType', urlMimeType);
    } else if (useDirectUpload && uploadedFileUrl) {
      // If direct upload was successful, send file URL instead of file (rewrite localhost to backend domain)
      formData.append('fileUrl', this.getFileUrl(uploadedFileUrl));
      formData.append('fileName', uploadedFileName!);
      formData.append('fileSize', uploadedFileSize!.toString());
      formData.append('mimeType', uploadedMimeType!);
    } else if (this.selectedFile) {
      // Fallback to server upload
      formData.append('file', this.selectedFile);
    }

    const operation = this.editingAdvertisement
      ? this.advertisementsService.updateAdvertisement(this.editingAdvertisement.id!, formData)
      : this.advertisementsService.createAdvertisement(formData);

    operation.subscribe({
      next: () => {
        this.isLoading = false;
        this.isUploading = false;
        this.uploadProgress = 0;
        this.resetForm();
        this.loadAdvertisements();
      },
      error: (error) => {
        console.error('Error saving advertisement:', error);
        this.errorMessage = error.error?.error || this.getTranslation('errorSavingAdvertisement') || 'Error saving advertisement';
        this.isLoading = false;
        this.isUploading = false;
        this.uploadProgress = 0;
      }
    });
  }

  /**
   * Save multiple advertisements (one per selected file). Used when user selects multiple files.
   */
  private saveMultipleAdvertisements(formValue: any, _inputUrl: string): void {
    const files = this.selectedFiles;
    const useDirectUpload = !!(this.cloudStorageConfig?.enabled && this.cloudStorageConfig?.provider === 'azure');
    const createObservables: ReturnType<AdvertisementsService['createAdvertisement']>[] = [];

    (async () => {
      this.isUploading = true;
      this.isLoading = true;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.uploadProgress = Math.round(((i + 1) / files.length) * 100);
        const title = files.length > 1 ? `${formValue.title} - ${file.name}` : formValue.title;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', formValue.description || '');
        formData.append('status', formValue.status);

        if (useDirectUpload) {
          try {
            const result = await this.uploadFileDirectly(file);
            formData.append('fileUrl', this.getFileUrl(result.url));
            formData.append('fileName', result.fileName);
            formData.append('fileSize', result.fileSize.toString());
            formData.append('mimeType', result.mimeType);
          } catch (err) {
            formData.append('file', file);
          }
        } else {
          formData.append('file', file);
        }
        createObservables.push(this.advertisementsService.createAdvertisement(formData));
      }
      this.uploadProgress = 100;
      this.isUploading = false;

      forkJoin(createObservables).subscribe({
        next: () => {
          this.isLoading = false;
          this.uploadProgress = 0;
          this.resetForm();
          this.loadAdvertisements();
        },
        error: (err) => {
          console.error('Error saving multiple advertisements:', err);
          this.errorMessage = err.error?.error || this.getTranslation('errorSavingAdvertisement') || 'Error saving advertisements';
          this.isLoading = false;
          this.isUploading = false;
          this.uploadProgress = 0;
        }
      });
    })();
  }

  /**
   * Upload file directly to Azure Blob Storage using SAS token (browser-compatible)
   */
  async uploadFileDirectly(file: File): Promise<{ url: string; fileName: string; fileSize: number; mimeType: string }> {
    // Get SAS token from backend
    const sasTokenResult = await this.cloudStorageService.generateSasToken(
      file.name,
      'advertisements',
      60 // 60 minutes expiry
    ).toPromise();

    if (!sasTokenResult?.success || !sasTokenResult.sasUrl || !sasTokenResult.blobUrl) {
      throw new Error(sasTokenResult?.error || 'Failed to generate SAS token');
    }

    // Ensure sasUrl is defined
    const sasUrl = sasTokenResult.sasUrl;
    if (!sasUrl) {
      throw new Error('SAS URL is not available');
    }

    // Upload using fetch API with progress tracking
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      // Track upload progress
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          this.uploadProgress = Math.round((event.loaded / event.total) * 100);
        }
      });

      // Handle completion
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve({
            url: sasTokenResult.blobUrl!,
            fileName: file.name,
            fileSize: file.size,
            mimeType: file.type
          });
        } else {
          reject(new Error(`Upload failed with status ${xhr.status}`));
        }
      });

      // Handle errors
      xhr.addEventListener('error', () => {
        reject(new Error('Upload failed'));
      });

      // Start upload
      xhr.open('PUT', sasUrl);
      xhr.setRequestHeader('x-ms-blob-type', 'BlockBlob');
      xhr.setRequestHeader('Content-Type', file.type);
      xhr.send(file);
    });
  }

  editAdvertisement(advertisement: Advertisement): void {
    this.editingAdvertisement = advertisement;
    this.selectedFile = null;
    this.selectedFiles = [];
    this.filePreview = this.getFileUrl(advertisement.thumbnailUrl || advertisement.fileUrl);
    
    // Determine input method based on whether fileUrl exists
    this.inputMethod = advertisement.fileUrl ? 'url' : 'file';
    
    this.advertisementForm.patchValue({
      title: advertisement.title,
      description: advertisement.description || '',
      type: advertisement.type,
      status: advertisement.status,
      fileUrl: advertisement.fileUrl || ''
    });

    this.showAddForm = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteAdvertisement(advertisement: Advertisement): void {
    if (!advertisement.id) return;
    
    this.itemToDelete = advertisement;
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: this.getTranslation('confirmDeleteAdvertisementMessage') || `Are you sure you want to delete "${advertisement.title}"?`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel'
    };
    this.showConfirmDialog = true;
  }

  onConfirmDelete(): void {
    if (this.itemToDelete?.id) {
      this.isLoading = true;
      this.advertisementsService.deleteAdvertisement(this.itemToDelete.id).subscribe({
        next: () => {
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
          this.loadAdvertisements();
        },
        error: (error) => {
          console.error('Error deleting advertisement:', error);
          this.isLoading = false;
          this.errorMessage = error.error?.error || 'Error deleting advertisement';
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
    this.advertisementForm.reset({
      type: 'image',
      status: 'draft',
      fileUrl: ''
    });
    this.selectedFile = null;
    this.selectedFiles = [];
    this.filePreview = null;
    this.inputMethod = 'file';
    this.editingAdvertisement = null;
    this.showAddForm = false;
    this.errorMessage = '';
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  }

  cancelForm(): void {
    this.resetForm();
  }


  getTypeDisplayName(type: AdvertisementType): string {
    const types: { [key: string]: string } = {
      image: this.getTranslation('image'),
      video: this.getTranslation('video'),
      presentation: this.getTranslation('presentation'),
      document: this.getTranslation('document')
    };
    return types[type] || type;
  }

  getStatusDisplayName(status: AdvertisementStatus): string {
    const statuses: { [key: string]: string } = {
      draft: this.getTranslation('draft'),
      active: this.getTranslation('active'),
      inactive: this.getTranslation('inactive'),
      expired: this.getTranslation('expired')
    };
    return statuses[status] || status;
  }

  isImageUrl(url: string): boolean {
    if (!url) return false;
    // Support all common image formats
    return /\.(jpg|jpeg|png|gif|webp|bmp|svg|ico|tiff|tif|heic|heif|avif|jfif)$/i.test(url);
  }

  getFileUrl(fileUrl: string): string {
    if (!fileUrl) return fileUrl;
    const base = (environment.apiUrl || '').replace(/\/api\/?$/, '').trim();
    if (!base) return fileUrl;
    try {
      const u = new URL(fileUrl);
      if (u.hostname === 'localhost' && (u.port === '3000' || !u.port)) return fileUrl.replace(u.origin, base);
    } catch (_) {}
    return fileUrl;
  }

  /**
   * Repairs UTF-8 mojibake: when the API returns a filename that was stored/sent as UTF-8
   * but interpreted as Latin-1 (e.g. Arabic appears as ØºØ±Ù...), decode it for display.
   */
  decodeFileNameForDisplay(fileName: string | undefined): string {
    if (!fileName) return '';
    // If no high bytes (128-255), no mojibake to fix
    const hasHighBytes = [...fileName].some(c => (c.charCodeAt(0) & 0xff) > 127);
    if (!hasHighBytes) return fileName;
    try {
      const bytes = new Uint8Array([...fileName].map(c => c.charCodeAt(0) & 0xff));
      const decoded = new TextDecoder('utf-8').decode(bytes);
      // Use decoded result if it contains Arabic or looks like valid Unicode filename
      const hasArabic = /[\u0600-\u06FF]/.test(decoded);
      if (hasArabic || (decoded.length > 0 && !/\uFFFD/.test(decoded))) {
        return decoded;
      }
    } catch {
      // ignore
    }
    return fileName;
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
