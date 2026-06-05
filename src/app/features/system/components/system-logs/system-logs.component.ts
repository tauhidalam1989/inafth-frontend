import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { SystemLogService, SystemLog, LogLevel } from '../../../../core/services/system-log.service';

@Component({
  selector: 'app-system-logs',
  templateUrl: './system-logs.component.html',
  styleUrls: ['./system-logs.component.scss']
})
export class SystemLogsComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  logs: SystemLog[] = [];
  filteredLogs: SystemLog[] = [];
  searchTerm: string = '';
  selectedLevel: string = 'all';
  selectedModule: string = 'all';
  selectedAction: string = 'all';
  startDate: string = '';
  endDate: string = '';
  isLoading = false;
  errorMessage: string = '';
  showConfirmDialog = false;
  confirmDialogData: any = {};
  itemToDelete: SystemLog | null = null;

  // Available filters
  availableModules: string[] = [];
  availableActions: string[] = [];

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 50;
  totalPages: number = 1;
  totalLogs: number = 0;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private systemLogService: SystemLogService
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadModules();
    this.loadActions();
    this.loadLogs();
  }

  loadModules(): void {
    this.systemLogService.getUniqueModules().subscribe({
      next: (modules) => {
        this.availableModules = modules;
      },
      error: (error) => {
        console.error('Error loading modules:', error);
      }
    });
  }

  loadActions(): void {
    this.systemLogService.getUniqueActions().subscribe({
      next: (actions) => {
        this.availableActions = actions;
      },
      error: (error) => {
        console.error('Error loading actions:', error);
      }
    });
  }

  loadLogs(): void {
    this.isLoading = true;
    this.errorMessage = '';

    const filters: any = {
      level: this.selectedLevel !== 'all' ? this.selectedLevel : undefined,
      module: this.selectedModule !== 'all' ? this.selectedModule : undefined,
      action: this.selectedAction !== 'all' ? this.selectedAction : undefined,
      search: this.searchTerm || undefined,
      startDate: this.startDate ? new Date(this.startDate) : undefined,
      endDate: this.endDate ? new Date(this.endDate) : undefined,
      page: this.currentPage,
      limit: this.itemsPerPage
    };

    this.systemLogService.getLogs(filters).subscribe({
      next: (response) => {
        this.logs = response.logs;
        this.filteredLogs = [...this.logs];
        this.totalLogs = response.total;
        this.calculatePagination();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading logs:', error);
        this.errorMessage = this.getTranslation('errorLoadingLogs') || 'Error loading logs';
        this.isLoading = false;
      }
    });
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.totalLogs / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadLogs();
  }

  filterLogs(): void {
    this.currentPage = 1;
    this.loadLogs();
  }

  deleteLog(log: SystemLog): void {
    if (!log.id) return;
    
    this.itemToDelete = log;
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: this.getTranslation('confirmDeleteLogMessage') || `Are you sure you want to delete this log entry?`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel'
    };
    this.showConfirmDialog = true;
  }

  onConfirmDelete(): void {
    if (this.itemToDelete?.id) {
      this.isLoading = true;
      this.systemLogService.deleteLog(this.itemToDelete.id).subscribe({
        next: () => {
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
          this.loadLogs();
        },
        error: (error) => {
          console.error('Error deleting log:', error);
          this.isLoading = false;
          this.errorMessage = error.error?.error || 'Error deleting log';
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

  getLevelDisplayName(level: LogLevel): string {
    const levels: { [key: string]: string } = {
      info: this.getTranslation('info'),
      warning: this.getTranslation('warning'),
      error: this.getTranslation('error'),
      success: this.getTranslation('success'),
      debug: this.getTranslation('debug')
    };
    return levels[level] || level;
  }

  getLevelIcon(level: LogLevel): string {
    const icons: { [key: string]: string } = {
      info: 'fa-info-circle',
      warning: 'fa-exclamation-triangle',
      error: 'fa-times-circle',
      success: 'fa-check-circle',
      debug: 'fa-bug'
    };
    return icons[level] || 'fa-info-circle';
  }

  getLevelCount(level: LogLevel): number {
    return this.logs.filter(l => l.level === level).length;
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}

