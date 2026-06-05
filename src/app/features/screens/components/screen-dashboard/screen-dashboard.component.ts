import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { ScreenService, Screen } from '../../../../core/services/screen.service';

@Component({
  selector: 'app-screen-dashboard',
  templateUrl: './screen-dashboard.component.html',
  styleUrls: ['./screen-dashboard.component.scss']
})
export class ScreenDashboardComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  screens: Screen[] = [];
  totalScreens = 0;
  onlineScreens = 0;
  offlineScreens = 0;
  playingScreens = 0;
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
        this.totalScreens = screens.length;
        this.onlineScreens = screens.filter(s => s.status === 'online').length;
        this.offlineScreens = screens.filter(s => s.status === 'offline').length;
        this.playingScreens = screens.filter(s => s.status === 'playing').length;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading screens:', error);
        this.isLoading = false;
      }
    });
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
