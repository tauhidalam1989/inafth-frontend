import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';
  isLoading = false;
  errorMessage = '';
  showPassword = false;
  currentLanguage: 'ar' | 'en' = 'ar';
  isTwoFactorStep = false;
  twoFactorCode = '';
  twoFactorError = '';
  private tempToken: string | null = null;

  twoFactorFlow: 'verify-login' | 'verify-setup' | null = null;
  twoFactorSetupQrDataUrl = '';
  private setupUsername = '';
  private setupPassword = '';

  googleEmail = '';
  googlePassword = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    private languageService: LanguageService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  goBackToEmailPassword(): void {
    this.isTwoFactorStep = false;
    this.twoFactorCode = '';
    this.twoFactorError = '';
    this.errorMessage = '';
    this.tempToken = null;
    this.twoFactorFlow = null;
    this.twoFactorSetupQrDataUrl = '';
  }

  /**
   * Step 1: Verify email + password via /auth/login.
   * If valid and 2FA enabled → show OTP step.
   * If valid and 2FA not enabled → start 2FA setup (QR), then show OTP step.
   */
  submitEmailPasswordLogin(): void {
    const email = (this.googleEmail || '').trim();
    const password = this.googlePassword;

    if (!email || !password) {
      this.errorMessage = this.getTranslation('fieldRequired') || 'Email and password are required.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.twoFactorError = '';

    this.authService.login({ username: email, password }).subscribe({
      next: (result: any) => {
        if (result.requiresTwoFactor && result.tempToken) {
          this.tempToken = result.tempToken;
          this.twoFactorFlow = 'verify-login';
          this.twoFactorSetupQrDataUrl = '';
          this.isTwoFactorStep = true;
          this.isLoading = false;
          this.twoFactorCode = '';
          return;
        }
        if (result.user) {
          this.authService.logout();
          this.setupUsername = email;
          this.setupPassword = password;
          this.authService.setup2FA(email, password).subscribe({
            next: (setup) => {
              this.twoFactorFlow = 'verify-setup';
              this.twoFactorSetupQrDataUrl = setup.qrDataUrl;
              this.isTwoFactorStep = true;
              this.isLoading = false;
              this.twoFactorCode = '';
            },
            error: () => {
              this.isLoading = false;
              this.errorMessage = this.getTranslation('loginError') || 'Failed to start 2FA setup.';
            }
          });
          return;
        }

        this.isLoading = false;
        this.errorMessage = this.getTranslation('loginError');
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = this.getTranslation('loginError') || 'Invalid email or password.';
      }
    });
  }

  /**
   * Step 2: Handle 2FA verification.
   * For verify-login: call verify2FA with tempToken.
   * For verify-setup: call verifySetup2FA, then login again → verify2FA.
   */
  onSubmit2FA(): void {
    if (!this.twoFactorCode || this.twoFactorCode.length < 6) {
      this.twoFactorError = this.getTranslation('fieldRequired') || 'Enter 6-digit code.';
      return;
    }

    this.isLoading = true;
    this.twoFactorError = '';
    this.errorMessage = '';

    if (this.twoFactorFlow === 'verify-login' && this.tempToken) {
      this.authService.verify2FA(this.tempToken, this.twoFactorCode).subscribe({
        next: () => {
          this.isLoading = false;
          this.resetAndNavigate();
        },
        error: () => {
          this.isLoading = false;
          this.twoFactorError = this.getTranslation('loginError') || 'Invalid code. Try again.';
        }
      });
      return;
    }

    if (this.twoFactorFlow === 'verify-setup' && this.setupUsername && this.setupPassword) {
      const codeForSetup = this.twoFactorCode;
      this.authService.verifySetup2FA(this.setupUsername, this.setupPassword, codeForSetup).subscribe({
        next: () => {
          this.authService.login({ username: this.setupUsername, password: this.setupPassword }).subscribe({
            next: (loginResult: any) => {
              if (loginResult.requiresTwoFactor && loginResult.tempToken) {
                this.tempToken = loginResult.tempToken;
                this.twoFactorFlow = 'verify-login';
                this.twoFactorSetupQrDataUrl = '';
                this.twoFactorCode = '';
                this.isLoading = false;
              } else if (loginResult.user) {
                this.isLoading = false;
                this.resetAndNavigate();
              } else {
                this.isLoading = false;
                this.twoFactorError = this.getTranslation('loginError');
              }
            },
            error: () => {
              this.isLoading = false;
              this.twoFactorError = this.getTranslation('loginError');
            }
          });
        },
        error: () => {
          this.isLoading = false;
          this.twoFactorError = this.getTranslation('loginError') || 'Invalid code. Try again.';
        }
      });
      return;
    }

    this.isLoading = false;
  }

  private resetAndNavigate(): void {
    this.isTwoFactorStep = false;
    this.twoFactorCode = '';
    this.tempToken = null;
    this.twoFactorFlow = null;
    this.twoFactorSetupQrDataUrl = '';
    this.setupUsername = '';
    this.setupPassword = '';
    this.router.navigate(['/']);
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
