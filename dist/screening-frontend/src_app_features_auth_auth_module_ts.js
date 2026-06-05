"use strict";
(self["webpackChunkscreening_frontend"] = self["webpackChunkscreening_frontend"] || []).push([["src_app_features_auth_auth_module_ts"],{

/***/ 663:
/*!**********************************************!*\
  !*** ./src/app/features/auth/auth.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 7146);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ 6350);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ 9982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);









const routes = [{
  path: '',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'register',
  component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent
}, {
  path: 'forgot-password',
  component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent
}];
class AuthModule {
  static {
    this.ɵfac = function AuthModule_Factory(t) {
      return new (t || AuthModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 9982:
/*!***************************************************************************************!*\
  !*** ./src/app/features/auth/components/forgot-password/forgot-password.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function ForgotPasswordComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldError("email"), " ");
  }
}
function ForgotPasswordComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 37);
  }
}
function ForgotPasswordComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 38);
  }
}
function ForgotPasswordComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.messageType === "success" ? "alert-success" : "alert-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.messageType === "success" ? "fas fa-check-circle" : "fas fa-exclamation-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
  }
}
class ForgotPasswordComponent {
  constructor(languageService, router, fb) {
    this.languageService = languageService;
    this.router = router;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.isLoading = false;
    this.message = '';
    this.messageType = 'error';
    this.forgotPasswordForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]]
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
  }
  onSubmit() {
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
  goToLogin() {
    this.router.navigate(['/login']);
  }
  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
  markFormGroupTouched() {
    Object.keys(this.forgotPasswordForm.controls).forEach(key => {
      const control = this.forgotPasswordForm.get(key);
      control?.markAsTouched();
    });
  }
  getFieldError(fieldName) {
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
  getTranslation(key) {
    const translations = {
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
  static {
    this.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 47,
      vars: 20,
      consts: [[1, "forgot-password-container", 3, "dir"], [1, "forgot-password-card"], [1, "card-header"], [1, "logo-section", "text-center", "mb-4"], [1, "logo-container"], ["src", "assets/logo/logo.svg", "alt", "Logo", 1, "logo"], [1, "app-title"], [1, "text-center", "mb-4"], [1, "fas", "fa-key", "me-2"], [1, "language-toggle"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "fas", "fa-globe", "me-1"], [1, "card-body"], [1, "text-muted"], [1, "forgot-password-form", 3, "ngSubmit", "formGroup"], [1, "form-group", "mb-4"], ["for", "email", 1, "form-label"], [1, "fas", "fa-envelope", "me-2"], ["type", "email", "id", "email", "formControlName", "email", "autocomplete", "email", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "d-grid", "mb-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-paper-plane me-2", 4, "ngIf"], ["class", "alert", 3, "ngClass", 4, "ngIf"], [1, "text-center", "mt-4"], ["type", "button", 1, "btn", "btn-link", "text-decoration-none", 3, "click"], [1, "fas", "fa-arrow-left", "me-2"], [1, "help-section", "mt-4"], [1, "card"], [1, "card-body", "text-center"], [1, "card-title"], [1, "fas", "fa-question-circle", "me-2"], [1, "card-text", "text-muted", "small"], ["href", "mailto:support@example.com", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "fas", "fa-envelope", "me-1"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-paper-plane", "me-2"], [1, "alert", 3, "ngClass"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_12_listener() {
            return ctx.toggleLanguage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "div", 7)(17, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_19_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15)(21, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ForgotPasswordComponent_div_25_Template, 2, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 20)(27, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ForgotPasswordComponent_span_28_Template, 1, 0, "span", 22)(29, ForgotPasswordComponent_i_29_Template, 1, 0, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ForgotPasswordComponent_div_31_Template, 3, 4, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25)(33, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_33_listener() {
            return ctx.goToLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 28)(37, "div", 29)(38, "div", 30)(39, "h6", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getTranslation("appTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("forgotPassword"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentLanguage === "ar" ? "English" : "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("forgotPasswordDescription"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("email"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_7_0 = ctx.forgotPasswordForm.get("email")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.forgotPasswordForm.get("email")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.getTranslation("enterEmail"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getFieldError("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading || ctx.forgotPasswordForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? ctx.getTranslation("sending") : ctx.getTranslation("sendResetLink"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("backToLogin"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("needHelp"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("contactSupport"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("contactUs"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: [".forgot-password-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(180deg, #004d40 0%, #00695c 100%);\n  padding: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.forgot-password-container[dir=rtl][_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {\n  left: 20px;\n  right: auto;\n}\n.forgot-password-container[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.forgot-password-container[dir=rtl][_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.forgot-password-container[dir=rtl][_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.forgot-password-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 20px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  padding: 40px;\n  width: 100%;\n  max-width: 500px;\n  position: relative;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.forgot-password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n.forgot-password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.forgot-password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.forgot-password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);\n}\n.forgot-password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .app-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n}\n.forgot-password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n  margin-bottom: 0;\n  font-size: 2rem;\n}\n.forgot-password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.forgot-password-card[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.forgot-password-card[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  padding: 8px 16px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.forgot-password-card[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n\n.forgot-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #34495e;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n  width: 20px;\n  margin-right: 0.5rem;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 2px solid #e9ecef;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  background: rgba(255, 255, 255, 0.9);\n}\n.forgot-password-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n  background: #fff;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.forgot-password-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 10px;\n  padding: 14px 24px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);\n}\n.forgot-password-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.forgot-password-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n  font-weight: 500;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .alert.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  color: #5a6fd8;\n  transform: translateX(-3px);\n}\n.btn-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: rgba(248, 249, 250, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n}\n.help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n  margin-right: 0.5rem;\n}\n.help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 1.5rem;\n  line-height: 1.5;\n}\n.help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 2px solid #6c757d;\n  border-radius: 25px;\n  padding: 8px 20px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(108, 117, 125, 0.3);\n}\n.help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n@media (max-width: 768px) {\n  .forgot-password-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .forgot-password-card[_ngcontent-%COMP%] {\n    padding: 30px 25px;\n    margin: 10px;\n  }\n  .forgot-password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .forgot-password-card[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {\n    position: static;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n  .forgot-password-card[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 200px;\n  }\n  .forgot-password-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n    font-size: 1rem;\n  }\n  .help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .forgot-password-card[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n  .forgot-password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .forgot-password-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n    font-size: 0.95rem;\n  }\n  .forgot-password-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    font-size: 0.95rem;\n  }\n  .help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .forgot-password-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0.5rem;\n}\n[dir=rtl][_ngcontent-%COMP%]   .forgot-password-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0.5rem;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0.5rem;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  transform: translateX(3px);\n}\n[dir=rtl][_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0.5rem;\n}\n[dir=rtl][_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkRBQUE7RUFDQSxhQUFBO0VBQ0EsNERBQUE7QUFDRjtBQUVJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFBTjtBQUdJO0VBQ0UsaUJBQUE7QUFETjtBQUtNO0VBQ0UsaUJBQUE7QUFIUjtBQU1NO0VBQ0UsaUJBQUE7QUFKUjs7QUFVQTtFQUNFLHFDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQVBGO0FBU0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBUEo7QUFTSTtFQUNFLG1CQUFBO0FBUE47QUFTTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVBSO0FBU1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUhBQUE7QUFQVjtBQVdNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBVFI7QUFhSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVhOO0FBYU07RUFDRSxjQUFBO0FBWFI7QUFnQkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBZEo7QUFnQkk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBZE47QUFnQk07RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0FBZFI7O0FBcUJFO0VBQ0UscUJBQUE7QUFsQko7QUFxQkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQW5CSjtBQXFCSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFuQk47QUF1QkU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQXJCSjtBQXVCSTtFQUNFLHFCQUFBO0VBQ0Esa0RBQUE7RUFDQSxnQkFBQTtBQXJCTjtBQXdCSTtFQUNFLGNBQUE7QUF0Qk47QUF5Qkk7RUFDRSxxQkFBQTtFQUNBLGdEQUFBO0FBdkJOO0FBMkJFO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF6Qko7QUEyQkk7RUFDRSwyQkFBQTtFQUNBLGdEQUFBO0FBekJOO0FBNEJJO0VBQ0Usd0JBQUE7QUExQk47QUE2Qkk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUEzQk47QUE4Qkk7RUFDRSxvQkFBQTtBQTVCTjtBQWdDRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBOUJKO0FBaUNFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBL0JKO0FBaUNJO0VBQ0UsaUJBQUE7QUEvQk47QUFrQ0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQWhDTjtBQW1DSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBakNOOztBQXNDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBbkNGOztBQXNDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBbkNGO0FBcUNFO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0FBbkNKO0FBc0NFO0VBQ0Usb0JBQUE7QUFwQ0o7O0FBeUNFO0VBQ0Usb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUF0Q0o7QUF3Q0k7RUFDRSxhQUFBO0FBdENOO0FBeUNJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXZDTjtBQXlDTTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQXZDUjtBQTJDSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBekNOO0FBNENJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQTFDTjtBQTRDTTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0FBMUNSO0FBNkNNO0VBQ0Usb0JBQUE7QUEzQ1I7O0FBa0RBO0VBQ0U7SUFDRSxhQUFBO0VBL0NGO0VBa0RBO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBaERGO0VBbURJO0lBQ0Usa0JBQUE7RUFqRE47RUFxREU7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFuREo7RUFxREk7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUFuRE47RUF5REU7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUF2REo7RUE2REk7SUFDRSxhQUFBO0VBM0ROO0FBQ0Y7QUFnRUE7RUFDRTtJQUNFLGtCQUFBO0VBOURGO0VBaUVJO0lBQ0UsaUJBQUE7RUEvRE47RUFxRUU7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0VBbkVKO0VBc0VFO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQXBFSjtFQTBFSTtJQUNFLGFBQUE7RUF4RU47RUEyRUk7SUFDRSxlQUFBO0VBekVOO0VBNEVJO0lBQ0UsbUJBQUE7RUExRU47QUFDRjtBQW1GTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQWpGUjtBQXNGTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQXBGUjtBQTBGSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQXhGTjtBQTJGSTtFQUNFLDBCQUFBO0FBekZOO0FBZ0dRO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBOUZWO0FBbUdRO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBakdWIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmdvdC1wYXNzd29yZC1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDA0ZDQwIDAlLCAjMDA2OTVjIDEwMCUpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5cclxuICAmW2Rpcj1cInJ0bFwiXSB7XHJcbiAgICAubGFuZ3VhZ2UtdG9nZ2xlIHtcclxuICAgICAgbGVmdDogMjBweDtcclxuICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tbGFiZWwge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVscC1zZWN0aW9uIHtcclxuICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuXHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgLmxvZ28tc2VjdGlvbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIFxyXG4gICAgICAubG9nby1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgwZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmFwcC10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICM2NjdlZWE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sYW5ndWFnZS10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkLWZvcm0ge1xyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzM0NDk1ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzY2N2VlYTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzY2N2VlYTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4yNSk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogI2FkYjViZDtcclxuICAgIH1cclxuXHJcbiAgICAmLmlzLWludmFsaWQge1xyXG4gICAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjI1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LXN1Y2Nlc3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xyXG4gICAgICBjb2xvcjogIzE1NTcyNDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XHJcbiAgICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRleHQtbXV0ZWQge1xyXG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi5idG4tbGluayB7XHJcbiAgY29sb3I6ICM2NjdlZWE7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNWE2ZmQ4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWxwLXNlY3Rpb24ge1xyXG4gIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDksIDI1MCwgMC44KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblxyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogIzY2N2VlYTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHQge1xyXG4gICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjNmM3NTdkO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMTA4LCAxMTcsIDEyNSwgMC4zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgRGVzaWduXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb3Jnb3QtcGFzc3dvcmQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuZm9yZ290LXBhc3N3b3JkLWNhcmQge1xyXG4gICAgcGFkZGluZzogMzBweCAyNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubGFuZ3VhZ2UtdG9nZ2xlIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcmdvdC1wYXNzd29yZC1mb3JtIHtcclxuICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlbHAtc2VjdGlvbiB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5mb3Jnb3QtcGFzc3dvcmQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDIwcHg7XHJcblxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9yZ290LXBhc3N3b3JkLWZvcm0ge1xyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlbHAtc2VjdGlvbiB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTcGVjaWZpYyBBZGp1c3RtZW50c1xyXG5bZGlyPVwicnRsXCJdIHtcclxuICAuZm9yZ290LXBhc3N3b3JkLWZvcm0ge1xyXG4gICAgLmZvcm0tbGFiZWwge1xyXG4gICAgICBpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLWxpbmsge1xyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVscC1zZWN0aW9uIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7146:
/*!*******************************************************************!*\
  !*** ./src/app/features/auth/components/login/login.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);









const _c0 = () => ({
  standalone: true
});
function LoginComponent_div_18_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function LoginComponent_div_18_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Sign in with Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_18_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("loading"), " ");
  }
}
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_div_18_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.googleEmail, $event) || (ctx_r1.googleEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 15)(7, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 21)(11, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_div_18_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.googlePassword, $event) || (ctx_r1.googlePassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_div_18_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.togglePasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, LoginComponent_div_18_div_14_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_div_18_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.submitEmailPasswordLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, LoginComponent_div_18_span_16_Template, 3, 0, "span", 27)(17, LoginComponent_div_18_span_17_Template, 3, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("email") || "Email", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.googleEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c0))("placeholder", ctx_r1.getTranslation("enterEmail") || "Enter your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("password"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r1.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.googlePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c0))("placeholder", ctx_r1.getTranslation("enterPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.showPassword ? "fa-eye-slash" : "fa-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isLoading || !(ctx_r1.googleEmail || "").trim() || !ctx_r1.googlePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
  }
}
function LoginComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Scan this QR with Google Authenticator");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.twoFactorSetupQrDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function LoginComponent_div_19_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.twoFactorError, " ");
  }
}
function LoginComponent_div_19_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function LoginComponent_div_19_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.twoFactorFlow === "verify-setup" ? "Verify & Enable 2FA" : ctx_r1.getTranslation("verifyButton") || "Verify Code", " ");
  }
}
function LoginComponent_div_19_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("loading"), " ");
  }
}
function LoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_div_19_div_1_Template, 6, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 15)(3, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_div_19_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.twoFactorCode, $event) || (ctx_r1.twoFactorCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, LoginComponent_div_19_div_8_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, LoginComponent_div_19_div_9_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 37)(11, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_div_19_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goBackToEmailPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_div_19_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSubmit2FA());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, LoginComponent_div_19_span_15_Template, 2, 1, "span", 27)(16, LoginComponent_div_19_span_16_Template, 3, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.twoFactorFlow === "verify-setup" && ctx_r1.twoFactorSetupQrDataUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.twoFactorFlow === "verify-setup" ? "6-digit code (to enable 2FA)" : ctx_r1.getTranslation("verificationCode") || "Google Authenticator code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.twoFactorCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.twoFactorError);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage && ctx_r1.isTwoFactorStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isLoading || !ctx_r1.twoFactorCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
  }
}
class LoginComponent {
  constructor(router, authService, http, languageService, translationService) {
    this.router = router;
    this.authService = authService;
    this.http = http;
    this.languageService = languageService;
    this.translationService = translationService;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || 'http://localhost:3000/api';
    this.isLoading = false;
    this.errorMessage = '';
    this.showPassword = false;
    this.currentLanguage = 'ar';
    this.isTwoFactorStep = false;
    this.twoFactorCode = '';
    this.twoFactorError = '';
    this.tempToken = null;
    this.twoFactorFlow = null;
    this.twoFactorSetupQrDataUrl = '';
    this.setupUsername = '';
    this.setupPassword = '';
    this.googleEmail = '';
    this.googlePassword = '';
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
  }
  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  goBackToEmailPassword() {
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
  submitEmailPasswordLogin() {
    const email = (this.googleEmail || '').trim();
    const password = this.googlePassword;
    if (!email || !password) {
      this.errorMessage = this.getTranslation('fieldRequired') || 'Email and password are required.';
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';
    this.twoFactorError = '';
    this.authService.login({
      username: email,
      password
    }).subscribe({
      next: result => {
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
            next: setup => {
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
  onSubmit2FA() {
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
          this.authService.login({
            username: this.setupUsername,
            password: this.setupPassword
          }).subscribe({
            next: loginResult => {
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
  resetAndNavigate() {
    this.isTwoFactorStep = false;
    this.twoFactorCode = '';
    this.tempToken = null;
    this.twoFactorFlow = null;
    this.twoFactorSetupQrDataUrl = '';
    this.setupUsername = '';
    this.setupPassword = '';
    this.router.navigate(['/']);
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 20,
      vars: 9,
      consts: [[1, "login-container", 3, "dir"], [1, "login-background"], [1, "login-overlay"], [1, "login-content"], [1, "login-card"], [1, "language-toggle"], [1, "lang-btn", 3, "click"], [1, "logo-section"], [1, "logo-container"], ["src", "../../../../../assets/logo/screen.jpeg", "alt", "Logo", 1, "logo"], [1, "form-section"], [1, "form-title"], [1, "form-subtitle"], ["class", "login-form", 4, "ngIf"], [1, "login-form"], [1, "form-group"], ["for", "googleEmail", 1, "form-label"], [1, "fas", "fa-envelope"], ["id", "googleEmail", "type", "email", "autocomplete", "email", "name", "googleEmail", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["for", "googlePassword", 1, "form-label"], [1, "fas", "fa-lock"], [1, "password-input"], ["id", "googlePassword", "autocomplete", "current-password", "name", "googlePassword", 1, "form-control", 3, "ngModelChange", "type", "ngModel", "ngModelOptions", "placeholder"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "fas"], ["class", "error-alert", 4, "ngIf"], ["type", "button", 1, "login-btn", "google-btn", 3, "click", "disabled"], [4, "ngIf"], [1, "error-alert"], [1, "fas", "fa-exclamation-triangle"], [1, "fab", "fa-google"], [1, "fas", "fa-spinner", "fa-spin"], ["class", "twofa-setup-qr", 4, "ngIf"], ["for", "twoFactorCode", 1, "form-label"], [1, "fas", "fa-shield-alt"], ["type", "text", "id", "twoFactorCode", "maxlength", "6", "inputmode", "numeric", "name", "twoFactorCode", "autocomplete", "one-time-code", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "error-message", 4, "ngIf"], [1, "twofa-actions"], ["type", "button", 1, "login-btn", "btn-back", 3, "click", "disabled"], [1, "fas", "fa-arrow-left"], ["type", "button", 1, "login-btn", 3, "click", "disabled"], [1, "twofa-setup-qr"], [1, "twofa-setup-qr-title"], [1, "fas", "fa-qrcode"], ["alt", "2FA QR Code", 1, "twofa-setup-qr-img", 3, "src"], [1, "error-message"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_6_listener() {
            return ctx.toggleLanguage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_8_listener() {
            return ctx.toggleLanguage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " English ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "h2", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 18, 17, "div", 13)(19, LoginComponent_div_19_Template, 17, 11, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.currentLanguage === "ar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.currentLanguage === "en");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("loginTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("loginSubtitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isTwoFactorStep);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isTwoFactorStep);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel],
      styles: [".login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background: linear-gradient(180deg, #004d40 0%, #00695c 100%);\n  padding: 20px;\n}\n\n.login-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"50\" cy=\"10\" r=\"0.5\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"10\" cy=\"60\" r=\"0.5\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"90\" cy=\"40\" r=\"0.5\" fill=\"white\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>');\n  z-index: 1;\n}\n\n.login-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 2;\n}\n\n.login-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  width: 100%;\n  max-width: 450px;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 40px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.language-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n  gap: 10px;\n}\n\n.lang-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 2px solid #e9ecef;\n  background: white;\n  color: #6c757d;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.lang-btn[_ngcontent-%COMP%]:hover {\n  border-color: #00695c;\n  color: #00695c;\n}\n.lang-btn.active[_ngcontent-%COMP%] {\n  background: #00695c;\n  color: white;\n  border-color: #00695c;\n}\n\n.logo-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 178%;\n  height: 138px;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 10px 0;\n}\n\n.app-subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 1rem;\n  margin: 0;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 10px 0;\n  text-align: center;\n}\n\n.form-subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  text-align: center;\n  margin: 0 0 30px 0;\n}\n\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 8px;\n}\n.form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  width: 20px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px 20px;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  background: white;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);\n}\n\n.password-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-input[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 5px;\n}\n.password-input[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover {\n  color: #00695c;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 0.85rem;\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.form-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n\n.checkbox-input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #00695c;\n}\n\n.checkbox-text[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  color: #00695c;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n.forgot-password[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.error-alert[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 15px;\n  border-radius: 8px;\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.9rem;\n}\n.error-alert[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  background: linear-gradient(135deg, #00695c, #004d40);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.login-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 105, 92, 0.3);\n}\n.login-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.login-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.twofa-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 20px;\n}\n.twofa-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.twofa-actions[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  background: #6c757d;\n  max-width: 120px;\n}\n.twofa-actions[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a6268;\n  box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);\n}\n\n.google-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4285f4 0%, #34a853 100%) !important;\n}\n.google-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 8px 25px rgba(66, 133, 244, 0.35);\n}\n\n.twofa-setup-qr[_ngcontent-%COMP%] {\n  margin: 0 0 18px 0;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: center;\n}\n\n.twofa-setup-qr-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: #2c3e50;\n  font-weight: 700;\n}\n\n.twofa-setup-qr-img[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  border-radius: 14px;\n  border: 1px solid #e9ecef;\n  background: #fff;\n}\n\n.google-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\n.google-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  overflow: hidden;\n}\n\n.google-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid #e9ecef;\n  background: #fafbfc;\n}\n.google-modal-header[_ngcontent-%COMP%]   .google-modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n  color: #2c3e50;\n}\n.google-modal-header[_ngcontent-%COMP%]   .google-modal-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n\n.modal-close[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #6c757d;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 105, 92, 0.08);\n  color: #00695c;\n}\n\n.google-modal-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.google-modal-body[_ngcontent-%COMP%]   .google-modal-hint[_ngcontent-%COMP%] {\n  margin: 0 0 14px 0;\n  color: #6c757d;\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n.google-modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.google-modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n\n.demo-credentials[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 20px;\n  margin-top: 25px;\n  text-align: center;\n}\n.demo-credentials[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin: 0 0 15px 0;\n  font-size: 1rem;\n}\n\n.credential-item[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n  margin-bottom: 8px;\n}\n.credential-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.credential-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n\n.login-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  font-size: 0.85rem;\n}\n.login-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  right: auto;\n  left: 15px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n@media (max-width: 768px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    padding: 30px 25px;\n  }\n  .logo-container[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);\n  }\n  .app-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .form-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .form-options[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n  .logo-container[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);\n  }\n  .app-title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .form-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    padding: 12px 15px;\n  }\n  .login-btn[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkRBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5aUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQURKOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSEY7QUFLRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBSEo7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQU5GOztBQVVBO0VBQ0UsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFXRTtFQUNFLG1CQUFBO0FBUko7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFURjtBQVdFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFUSjs7QUFhQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVZGO0FBWUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtBQVZKO0FBYUU7RUFDRSxjQUFBO0FBWEo7QUFjRTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7QUFaSjs7QUFnQkE7RUFDRSxrQkFBQTtBQWJGO0FBZUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFiSjtBQWVJO0VBQ0UsY0FBQTtBQWJOOztBQWtCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBZkY7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBZkY7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFmRjs7QUFrQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFmRjtBQWlCRTtFQUNFLDBCQUFBO0FBZko7O0FBbUJBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFoQkY7QUFrQkU7RUFDRSxjQUFBO0FBaEJKOztBQW9CQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQWpCRjtBQW1CRTtFQUNFLDJCQUFBO0VBQ0EsNENBQUE7QUFqQko7QUFvQkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFsQko7QUFxQkU7RUFDRSxlQUFBO0FBbkJKOztBQXdCQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFyQkY7QUF1QkU7RUFDRSxPQUFBO0FBckJKO0FBd0JFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQXRCSjtBQXdCSTtFQUNFLG1CQUFBO0VBQ0EsK0NBQUE7QUF0Qk47O0FBMkJBO0VBQ0Usd0VBQUE7QUF4QkY7QUEwQkU7RUFDRSwrQ0FBQTtBQXhCSjs7QUE2QkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBMUJGOztBQTZCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQTFCRjs7QUE4QkE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQTNCRjs7QUE4QkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQTNCRjtBQTZCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUEzQko7QUE2Qkk7RUFDRSxjQUFBO0FBM0JOOztBQWdDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTdCRjtBQStCRTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtBQTdCSjs7QUFpQ0E7RUFDRSxhQUFBO0FBOUJGO0FBZ0NFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQTlCSjtBQWlDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUEvQko7QUFrQ0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBaENKOztBQXFDQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWxDRjtBQW9DRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFsQ0o7O0FBc0NBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFuQ0Y7QUFxQ0U7RUFDRSxnQkFBQTtBQW5DSjtBQXNDRTtFQUNFLGNBQUE7QUFwQ0o7O0FBeUNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUF0Q0Y7QUF3Q0U7RUFDRSxTQUFBO0FBdENKOztBQTRDRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBekNKO0FBNENFO0VBQ0UsMkJBQUE7QUExQ0o7O0FBK0NBO0VBQ0U7SUFDRSxhQUFBO0VBNUNGO0VBK0NBO0lBQ0Usa0JBQUE7RUE3Q0Y7RUFnREE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQTlDRjtFQWdERTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSx5SEFBQTtFQTlDSjtFQWtEQTtJQUNFLGlCQUFBO0VBaERGO0VBbURBO0lBQ0UsaUJBQUE7RUFqREY7RUFvREE7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7RUFsREY7QUFDRjtBQXFEQTtFQUNFO0lBQ0Usa0JBQUE7RUFuREY7RUFzREE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQXBERjtFQXNERTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSx5SEFBQTtFQXBESjtFQXdEQTtJQUNFLGlCQUFBO0VBdERGO0VBeURBO0lBQ0UsaUJBQUE7RUF2REY7RUEwREE7SUFDRSxrQkFBQTtFQXhERjtFQTJEQTtJQUNFLGFBQUE7SUFDQSxlQUFBO0VBekRGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDRkNDAgMCUsICMwMDY5NWMgMTAwJSk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5sb2dpbi1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPjxkZWZzPjxwYXR0ZXJuIGlkPVwiZ3JhaW5cIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PGNpcmNsZSBjeD1cIjI1XCIgY3k9XCIyNVwiIHI9XCIxXCIgZmlsbD1cIndoaXRlXCIgb3BhY2l0eT1cIjAuMVwiLz48Y2lyY2xlIGN4PVwiNzVcIiBjeT1cIjc1XCIgcj1cIjFcIiBmaWxsPVwid2hpdGVcIiBvcGFjaXR5PVwiMC4xXCIvPjxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiMTBcIiByPVwiMC41XCIgZmlsbD1cIndoaXRlXCIgb3BhY2l0eT1cIjAuMVwiLz48Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjYwXCIgcj1cIjAuNVwiIGZpbGw9XCJ3aGl0ZVwiIG9wYWNpdHk9XCIwLjFcIi8+PGNpcmNsZSBjeD1cIjkwXCIgY3k9XCI0MFwiIHI9XCIwLjVcIiBmaWxsPVwid2hpdGVcIiBvcGFjaXR5PVwiMC4xXCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBmaWxsPVwidXJsKCUyM2dyYWluKVwiLz48L3N2Zz4nKTtcbiAgei1pbmRleDogMTtcbn1cblxuLmxvZ2luLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubG9naW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDUwcHg7XG59XG5cbi5sb2dpbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi8vIExhbmd1YWdlIFRvZ2dsZVxuLmxhbmd1YWdlLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5sYW5nLWJ0biB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gICAgY29sb3I6ICMwMDY5NWM7XG4gIH1cbiAgXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA2OTVjO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gIH1cbn1cblxuLy8gTG9nbyBTZWN0aW9uXG4ubG9nby1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gIC5sb2dvIHtcbiAgICB3aWR0aDogMTc4JTtcbiAgICBoZWlnaHQ6IDEzOHB4O1xuICAgLy8gb2JqZWN0LWZpdDogY29udGFpbjtcbiAgIC8vIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDBkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAwJSk7XG4gIH1cbn1cblxuLmFwcC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxuLmFwcC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLy8gRm9ybSBTZWN0aW9uXG4uZm9ybS1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZvcm0tdGl0bGUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDMwcHggMDtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgXG4gIGkge1xuICAgIGNvbG9yOiAjMDA2OTVjO1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcbiAgfVxuICBcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWRiNWJkO1xuICB9XG4gIFxuICAmLmlzLWludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcbiAgfVxufVxuXG4ucGFzc3dvcmQtaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAucGFzc3dvcmQtdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzAwNjk1YztcbiAgICB9XG4gIH1cbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xufVxuXG4uZm9ybS1vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTVweDtcbn1cblxuLmNoZWNrYm94LWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrYm94LWlucHV0IHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYWNjZW50LWNvbG9yOiAjMDA2OTVjO1xufVxuXG4uY2hlY2tib3gtdGV4dCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZCB7XG4gIGNvbG9yOiAjMDA2OTVjO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBcbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLmVycm9yLWFsZXJ0IHtcbiAgYmFja2dyb3VuZDogI2Y4ZDdkYTtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgXG4gIGkge1xuICAgIGNvbG9yOiAjZGMzNTQ1O1xuICB9XG59XG5cbi5sb2dpbi1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YywgIzAwNGQ0MCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAxMDUsIDkyLCAwLjMpO1xuICB9XG4gIFxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuICBcbiAgaSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbi8vIFR3b0ZBIHN0ZXAgYWN0aW9ucyAoQmFjayArIFZlcmlmeSlcbi50d29mYS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIC5sb2dpbi1idG4ge1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAuYnRuLWJhY2sge1xuICAgIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogIzVhNjI2ODtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMDgsIDExNywgMTI1LCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4uZ29vZ2xlLWJ0biB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0Mjg1ZjQgMCUsICMzNGE4NTMgMTAwJSkgIWltcG9ydGFudDtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoNjYsIDEzMywgMjQ0LCAwLjM1KTtcbiAgfVxufVxuXG4vLyBTZXR1cCBRUiAoc2hvd24gZHVyaW5nIDJGQSBlbmFibGluZyBvbiBsb2dpbiBwYWdlKVxuLnR3b2ZhLXNldHVwLXFyIHtcbiAgbWFyZ2luOiAwIDAgMThweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnR3b2ZhLXNldHVwLXFyLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50d29mYS1zZXR1cC1xci1pbWcge1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi8vIEdvb2dsZSBtb2RhbFxuLmdvb2dsZS1tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5nb29nbGUtbW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5nb29nbGUtbW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xuXG4gIC5nb29nbGUtbW9kYWwtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzJjM2U1MDtcblxuICAgIGkge1xuICAgICAgY29sb3I6ICMwMDY5NWM7XG4gICAgfVxuICB9XG59XG5cbi5tb2RhbC1jbG9zZSB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMDUsIDkyLCAwLjA4KTtcbiAgICBjb2xvcjogIzAwNjk1YztcbiAgfVxufVxuXG4uZ29vZ2xlLW1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAxNnB4O1xuXG4gIC5nb29nbGUtbW9kYWwtaGludCB7XG4gICAgbWFyZ2luOiAwIDAgMTRweCAwO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cblxuICAubW9kYWwtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTRweDtcbiAgfVxuXG4gIC5tb2RhbC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG59XG5cbi8vIERlbW8gQ3JlZGVudGlhbHNcbi5kZW1vLWNyZWRlbnRpYWxzIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgaDQge1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuLmNyZWRlbnRpYWwtaXRlbSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBcbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIFxuICBzdHJvbmcge1xuICAgIGNvbG9yOiAjMDA2OTVjO1xuICB9XG59XG5cbi8vIEZvb3RlclxuLmxvZ2luLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4vLyBSVEwgU3VwcG9ydFxuW2Rpcj1cInJ0bFwiXSB7XG4gIC5wYXNzd29yZC1pbnB1dCAucGFzc3dvcmQtdG9nZ2xlIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAxNXB4O1xuICB9XG4gIFxuICAuZm9ybS1vcHRpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9naW4tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIFxuICAubG9naW4tY2FyZCB7XG4gICAgcGFkZGluZzogMzBweCAyNXB4O1xuICB9XG4gIFxuICAubG9nby1jb250YWluZXIge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBcbiAgICAubG9nbyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgwZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgLmFwcC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgXG4gIC5mb3JtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICBcbiAgLmZvcm0tb3B0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5sb2dpbi1jYXJkIHtcbiAgICBwYWRkaW5nOiAyNXB4IDIwcHg7XG4gIH1cbiAgXG4gIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIFxuICAgIC5sb2dvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDBkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAwJSk7XG4gICAgfVxuICB9XG4gIFxuICAuYXBwLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICBcbiAgLmZvcm0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIFxuICAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIH1cbiAgXG4gIC5sb2dpbi1idG4ge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6350:
/*!*************************************************************************!*\
  !*** ./src/app/features/auth/components/register/register.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function RegisterComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldError("fullName"), " ");
  }
}
function RegisterComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldError("email"), " ");
  }
}
function RegisterComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldError("phone"), " ");
  }
}
function RegisterComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldError("password"), " ");
  }
}
function RegisterComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldError("confirmPassword"), " ");
  }
}
function RegisterComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldError("agreeToTerms"), " ");
  }
}
function RegisterComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 46);
  }
}
function RegisterComponent_i_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 8);
  }
}
function RegisterComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
class RegisterComponent {
  constructor(languageService, router, fb) {
    this.languageService = languageService;
    this.router = router;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.isLoading = false;
    this.errorMessage = '';
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.registerForm = this.fb.group({
      fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      agreeToTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.requiredTrue]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
  }
  passwordMatchValidator(form) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({
        passwordMismatch: true
      });
      return {
        passwordMismatch: true
      };
    }
    return null;
  }
  onSubmit() {
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
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
  markFormGroupTouched() {
    Object.keys(this.registerForm.controls).forEach(key => {
      const control = this.registerForm.get(key);
      control?.markAsTouched();
    });
  }
  getFieldError(fieldName) {
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
  getTranslation(key) {
    const translations = {
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
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 72,
      vars: 48,
      consts: [[1, "register-container", 3, "dir"], [1, "register-card"], [1, "card-header"], [1, "logo-section", "text-center", "mb-4"], [1, "logo-container"], ["src", "assets/logo/logo.svg", "alt", "Logo", 1, "logo"], [1, "app-title"], [1, "text-center", "mb-4"], [1, "fas", "fa-user-plus", "me-2"], [1, "language-toggle"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "fas", "fa-globe", "me-1"], [1, "card-body"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "form-group", "mb-3"], ["for", "fullName", 1, "form-label"], [1, "fas", "fa-user", "me-2"], ["type", "text", "id", "fullName", "formControlName", "fullName", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "email", 1, "form-label"], [1, "fas", "fa-envelope", "me-2"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["for", "phone", 1, "form-label"], [1, "fas", "fa-phone", "me-2"], ["type", "tel", "id", "phone", "formControlName", "phone", 1, "form-control", 3, "placeholder"], ["for", "password", 1, "form-label"], [1, "fas", "fa-lock", "me-2"], [1, "input-group"], ["id", "password", "formControlName", "password", 1, "form-control", 3, "type", "placeholder"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["for", "confirmPassword", 1, "form-label"], ["id", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control", 3, "type", "placeholder"], [1, "form-group", "mb-4"], [1, "form-check"], ["type", "checkbox", "id", "agreeToTerms", "formControlName", "agreeToTerms", 1, "form-check-input"], ["for", "agreeToTerms", 1, "form-check-label"], ["href", "#", 1, "text-primary"], [1, "d-grid", "mb-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-user-plus me-2", 4, "ngIf"], ["class", "alert alert-danger text-center", 4, "ngIf"], [1, "text-center", "mt-3"], [1, "mb-0"], ["routerLink", "/login", 1, "text-primary", "text-decoration-none"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "alert", "alert-danger", "text-center"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_12_listener() {
            return ctx.toggleLanguage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_16_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RegisterComponent_div_22_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14)(24, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14)(30, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, RegisterComponent_div_34_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14)(36, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_41_listener() {
            return ctx.togglePasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, RegisterComponent_div_43_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14)(45, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_50_listener() {
            return ctx.toggleConfirmPasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, RegisterComponent_div_52_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 32)(54, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, RegisterComponent_div_60_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 37)(62, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, RegisterComponent_span_63_Template, 1, 0, "span", 39)(64, RegisterComponent_i_64_Template, 1, 0, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, RegisterComponent_div_66_Template, 2, 1, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 42)(68, "p", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          let tmp_6_0;
          let tmp_10_0;
          let tmp_14_0;
          let tmp_18_0;
          let tmp_24_0;
          let tmp_29_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getTranslation("appTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("register"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentLanguage === "ar" ? "English" : "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("fullName"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx.registerForm.get("fullName")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.registerForm.get("fullName")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.getTranslation("enterFullName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getFieldError("fullName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("email"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_10_0 = ctx.registerForm.get("email")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.registerForm.get("email")) == null ? null : tmp_10_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.getTranslation("enterEmail"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getFieldError("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("phone"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_14_0 = ctx.registerForm.get("phone")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.registerForm.get("phone")) == null ? null : tmp_14_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.getTranslation("enterPhone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getFieldError("phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("password"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_18_0 = ctx.registerForm.get("password")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx.registerForm.get("password")) == null ? null : tmp_18_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.getTranslation("enterPassword"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.showPassword ? "fas fa-eye-slash" : "fas fa-eye");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getFieldError("password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("confirmPassword"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_24_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_24_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.getTranslation("confirmPassword"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showConfirmPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getFieldError("confirmPassword"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_29_0 = ctx.registerForm.get("agreeToTerms")) == null ? null : tmp_29_0.invalid) && ((tmp_29_0 = ctx.registerForm.get("agreeToTerms")) == null ? null : tmp_29_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("agreeToTerms"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getTranslation("termsAndConditions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getFieldError("agreeToTerms"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading || ctx.registerForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? ctx.getTranslation("registering") : ctx.getTranslation("register"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("alreadyHaveAccount"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("login"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: [".register-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(180deg, #004d40 0%, #00695c 100%);\n  padding: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.register-container[dir=rtl][_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {\n  left: 20px;\n  right: auto;\n}\n.register-container[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.register-container[dir=rtl][_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 0.375rem 0 0 0.375rem;\n  border-left: 1px solid #dee2e6;\n  border-right: none;\n}\n.register-container[dir=rtl][_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0 0.375rem 0.375rem 0;\n}\n.register-container[dir=rtl][_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.register-container[dir=rtl][_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0;\n}\n\n.register-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 20px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  padding: 40px;\n  width: 100%;\n  max-width: 500px;\n  position: relative;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.register-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n.register-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.register-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.register-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);\n}\n.register-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .app-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n}\n.register-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n  margin-bottom: 0;\n  font-size: 2rem;\n}\n.register-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.register-card[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.register-card[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  padding: 8px 16px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.register-card[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n\n.register-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.register-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #34495e;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n}\n.register-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n  width: 20px;\n  margin-right: 0.5rem;\n}\n.register-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 2px solid #e9ecef;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  background: rgba(255, 255, 255, 0.9);\n}\n.register-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n  background: #fff;\n}\n.register-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.register-form[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.register-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.register-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 2px solid #e9ecef;\n  border-left: none;\n  background: #f8f9fa;\n  color: #6c757d;\n  transition: all 0.3s ease;\n}\n.register-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n}\n.register-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.register-form[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.register-form[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 1.2em;\n  height: 1.2em;\n  margin-right: 0.5rem;\n  border: 2px solid #e9ecef;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n}\n.register-form[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #667eea;\n  border-color: #667eea;\n}\n.register-form[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n}\n.register-form[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.register-form[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 500;\n  line-height: 1.5;\n}\n.register-form[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n}\n.register-form[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.register-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 10px;\n  padding: 14px 24px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.register-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);\n}\n.register-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.register-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.register-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.register-form[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n  font-weight: 500;\n}\n.register-form[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  font-weight: 500;\n}\n.register-form[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.3s ease;\n}\n.register-form[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #5a6fd8;\n  text-decoration: underline;\n}\n\n@media (max-width: 768px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    padding: 30px 25px;\n    margin: 10px;\n  }\n  .register-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .register-card[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {\n    position: static;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n  .register-card[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 200px;\n  }\n  .register-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n    font-size: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .register-card[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n  .register-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .register-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n    font-size: 0.95rem;\n  }\n  .register-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    font-size: 0.95rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0.5rem;\n}\n[dir=rtl][_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0.5rem;\n}\n[dir=rtl][_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZEQUFBO0VBQ0EsYUFBQTtFQUNBLDREQUFBO0FBQ0Y7QUFFSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBQU47QUFHSTtFQUNFLGlCQUFBO0FBRE47QUFLTTtFQUNFLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUhSO0FBTU07RUFDRSxvQ0FBQTtBQUpSO0FBUUk7RUFDRSxpQkFBQTtBQU5OO0FBU0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFQTjs7QUFZQTtFQUNFLHFDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQVRGO0FBV0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFXSTtFQUNFLG1CQUFBO0FBVE47QUFXTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVRSO0FBV1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUhBQUE7QUFUVjtBQWFNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBWFI7QUFlSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWJOO0FBZU07RUFDRSxjQUFBO0FBYlI7QUFrQkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBaEJKO0FBa0JJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQWhCTjtBQWtCTTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7QUFoQlI7O0FBdUJFO0VBQ0UscUJBQUE7QUFwQko7QUF1QkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXJCSjtBQXVCSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFyQk47QUF5QkU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQXZCSjtBQXlCSTtFQUNFLHFCQUFBO0VBQ0Esa0RBQUE7RUFDQSxnQkFBQTtBQXZCTjtBQTBCSTtFQUNFLGNBQUE7QUF4Qk47QUEyQkk7RUFDRSxxQkFBQTtFQUNBLGdEQUFBO0FBekJOO0FBOEJJO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBNUJOO0FBK0JJO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBN0JOO0FBK0JNO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBN0JSO0FBZ0NNO0VBQ0UsZ0JBQUE7QUE5QlI7QUFtQ0U7RUFDRSxnQkFBQTtBQWpDSjtBQW1DSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFqQ047QUFtQ007RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBakNSO0FBb0NNO0VBQ0Usa0RBQUE7QUFsQ1I7QUFxQ007RUFDRSxxQkFBQTtBQW5DUjtBQXVDSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBckNOO0FBdUNNO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFyQ1I7QUF1Q1E7RUFDRSwwQkFBQTtBQXJDVjtBQTJDRTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBekNKO0FBMkNJO0VBQ0UsMkJBQUE7RUFDQSxnREFBQTtBQXpDTjtBQTRDSTtFQUNFLHdCQUFBO0FBMUNOO0FBNkNJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBM0NOO0FBOENJO0VBQ0Usb0JBQUE7QUE1Q047QUFnREU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQTlDSjtBQWlERTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBL0NKO0FBbURJO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQWpETjtBQW1ETTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQWpEUjs7QUF3REE7RUFDRTtJQUNFLGFBQUE7RUFyREY7RUF3REE7SUFDRSxrQkFBQTtJQUNBLFlBQUE7RUF0REY7RUF5REk7SUFDRSxrQkFBQTtFQXZETjtFQTJERTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQXpESjtFQTJESTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQXpETjtFQStERTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQTdESjtBQUNGO0FBaUVBO0VBQ0U7SUFDRSxrQkFBQTtFQS9ERjtFQWtFSTtJQUNFLGlCQUFBO0VBaEVOO0VBc0VFO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQXBFSjtFQXVFRTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7RUFyRUo7QUFDRjtBQTZFTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQTNFUjtBQWlGUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQS9FVjtBQXFGTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQW5GUiIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDA0ZDQwIDAlLCAjMDA2OTVjIDEwMCUpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5cclxuICAmW2Rpcj1cInJ0bFwiXSB7XHJcbiAgICAubGFuZ3VhZ2UtdG9nZ2xlIHtcclxuICAgICAgbGVmdDogMjBweDtcclxuICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tbGFiZWwge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAuYnRuIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbSAwIDAgMC4zNzVyZW07XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjM3NXJlbSAwLjM3NXJlbSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY2hlY2sge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuXHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgLmxvZ28tc2VjdGlvbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIFxyXG4gICAgICAubG9nby1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgwZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmFwcC10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICM2NjdlZWE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sYW5ndWFnZS10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmVnaXN0ZXItZm9ybSB7XHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMzQ0OTVlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjI1KTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gICAgfVxyXG5cclxuICAgICYuaXMtaW52YWxpZCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjIwLCA1MywgNjksIDAuMjUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3VwIHtcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcclxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0tY2hlY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuXHJcbiAgICAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgICAgIHdpZHRoOiAxLjJlbTtcclxuICAgICAgaGVpZ2h0OiAxLjJlbTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICY6Y2hlY2tlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2N2VlYTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM2NjdlZWE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMjUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmlzLWludmFsaWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzY2N2VlYTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAudGV4dC1jZW50ZXIge1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjNWE2ZmQ4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIERlc2lnblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sYW5ndWFnZS10b2dnbGUge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAuYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItZm9ybSB7XHJcbiAgICAuYnRuLXByaW1hcnkge1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5yZWdpc3Rlci1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDI1cHggMjBweDtcclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1mb3JtIHtcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXByaW1hcnkge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTcGVjaWZpYyBBZGp1c3RtZW50c1xyXG5bZGlyPVwicnRsXCJdIHtcclxuICAucmVnaXN0ZXItZm9ybSB7XHJcbiAgICAuZm9ybS1sYWJlbCB7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWdyb3VwIHtcclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_auth_auth_module_ts.js.map