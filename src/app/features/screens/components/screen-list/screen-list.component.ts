import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { ScreenService, Screen } from '../../../../core/services/screen.service';

@Component({
  selector: 'app-screen-list',
  templateUrl: './screen-list.component.html',
  styleUrls: ['./screen-list.component.scss']
})
export class ScreenListComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  screens: Screen[] = [];
  isLoading = false;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private screenService: ScreenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadScreens();
  }

  loadScreens(): void {
    this.isLoading = true;
    this.screenService.getScreens().subscribe({
      next: (screens) => {
        this.screens = screens;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading screens:', error);
        this.isLoading = false;
      }
    });
  }

  editScreen(screen: Screen): void {
    this.router.navigate(['/screens/create'], { 
      queryParams: { edit: screen.id } 
    });
  }

  deleteScreen(screenId: number): void {
    if (confirm(this.getTranslation('confirmDeleteScreen') || 'Are you sure you want to delete this screen?')) {
      this.screenService.deleteScreen(screenId).subscribe({
        next: () => {
          this.loadScreens();
        },
        error: (error) => {
          console.error('Error deleting screen:', error);
          alert('Failed to delete screen: ' + (error.error?.error || error.message));
        }
      });
    }
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
