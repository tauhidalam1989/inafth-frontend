import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  registerForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private languageService: LanguageService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      
      // Mock registration - replace with actual API call
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/login']);
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  private markFormGroupTouched(): void {
    Object.keys(this.registerForm.controls).forEach(key => {
      const control = this.registerForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.registerForm.get(fieldName);
    if (field?.invalid && field?.touched) {
      if (field.errors?.['required']) {
        return 'هذا الحقل مطلوب';
      }
      if (field.errors?.['email']) {
        return 'البريد الإلكتروني غير صحيح';
      }
      if (field.errors?.['minlength']) {
        return `يجب أن يكون الطول على الأقل ${field.errors['minlength'].requiredLength} أحرف`;
      }
      if (field.errors?.['passwordMismatch']) {
        return 'كلمة المرور غير متطابقة';
      }
    }
    return '';
  }

  getTranslation(key: string): string {
    const translations: { [key: string]: string } = {
      'register': 'تسجيل حساب جديد',
      'fullName': 'الاسم الكامل',
      'email': 'البريد الإلكتروني',
      'phone': 'رقم الهاتف',
      'password': 'كلمة المرور',
      'confirmPassword': 'تأكيد كلمة المرور',
      'agreeToTerms': 'أوافق على',
      'termsAndConditions': 'الشروط والأحكام',
      'enterFullName': 'أدخل الاسم الكامل',
      'enterEmail': 'أدخل البريد الإلكتروني',
      'enterPhone': 'أدخل رقم الهاتف',
      'enterPassword': 'أدخل كلمة المرور',
      'saveTemplate': 'حفظ القالب',
      'reset': 'إعادة تعيين',
      'cancel': 'إلغاء',
      'registering': 'جاري التسجيل...',
      'alreadyHaveAccount': 'لديك حساب بالفعل؟',
      'login': 'تسجيل الدخول'
    };
    return translations[key] || key;
  }
}
