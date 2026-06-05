import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  forgotPasswordForm: FormGroup;
  isLoading = false;
  message = '';
  messageType: 'success' | 'error' = 'error';

  constructor(
    private languageService: LanguageService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      this.isLoading = true;
      this.message = '';
      
      // Mock password reset - replace with actual API call
      setTimeout(() => {
        this.isLoading = false;
        this.message = 'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني';
        this.messageType = 'success';
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  private markFormGroupTouched(): void {
    Object.keys(this.forgotPasswordForm.controls).forEach(key => {
      const control = this.forgotPasswordForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.forgotPasswordForm.get(fieldName);
    if (field?.invalid && field?.touched) {
      if (field.errors?.['required']) {
        return 'هذا الحقل مطلوب';
      }
      if (field.errors?.['email']) {
        return 'البريد الإلكتروني غير صحيح';
      }
    }
    return '';
  }

  getTranslation(key: string): string {
    const translations: { [key: string]: string } = {
      'forgotPassword': 'نسيت كلمة المرور',
      'forgotPasswordDescription': 'أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة تعيين كلمة المرور',
      'email': 'البريد الإلكتروني',
      'enterEmail': 'أدخل بريدك الإلكتروني',
      'sendResetLink': 'إرسال رابط إعادة التعيين',
      'sending': 'جاري الإرسال...',
      'backToLogin': 'العودة لتسجيل الدخول',
      'needHelp': 'تحتاج مساعدة؟',
      'contactSupport': 'تواصل مع فريق الدعم',
      'contactUs': 'اتصل بنا'
    };
    return translations[key] || key;
  }
}
