import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-screen-management',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2>{{ getTranslation('screenManagement') }}</h2>
          <p>{{ getTranslation('comingSoon') }}</p>
        </div>
      </div>
    </div>
  `
})
export class ScreenManagementComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}

