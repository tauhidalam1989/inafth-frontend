"use strict";
(self["webpackChunkscreening_frontend"] = self["webpackChunkscreening_frontend"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 4978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [
// Auth routes (no guard, no header/sidebar)
{
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/auth.module */ 663)).then(m => m.AuthModule)
}, {
  path: 'login',
  redirectTo: 'auth/login',
  pathMatch: 'full'
}, {
  path: 'register',
  redirectTo: 'auth/register',
  pathMatch: 'full'
}, {
  path: 'forgot-password',
  redirectTo: 'auth/forgot-password',
  pathMatch: 'full'
},
// Protected routes (with guard, with header/sidebar)
{
  path: '',
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  children: [{
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_advertisements_service_ts-src_app_core_services_location_servic-628294"), __webpack_require__.e("src_app_features_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/dashboard.module */ 2125)).then(m => m.DashboardModule)
  }, {
    path: 'dashboard',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_advertisements_service_ts-src_app_core_services_location_servic-628294"), __webpack_require__.e("src_app_features_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/dashboard.module */ 2125)).then(m => m.DashboardModule)
  }, {
    path: 'locations',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_locations_locations_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/locations/locations.module */ 6345)).then(m => m.LocationsModule)
  }, {
    path: 'advertisements',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_advertisements_advertisements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/advertisements/advertisements.module */ 4719)).then(m => m.AdvertisementsModule)
  }, {
    path: 'notifications',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/notifications/notifications.module */ 1201)).then(m => m.NotificationsModule)
  }, {
    path: 'whatsapp',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_whatsapp_whatsapp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/whatsapp/whatsapp.module */ 4567)).then(m => m.WhatsappModule)
  }, {
    path: 'users',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/users/users.module */ 5401)).then(m => m.UsersModule)
  }, {
    path: 'screens',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_advertisements_service_ts-src_app_core_services_location_servic-628294"), __webpack_require__.e("src_app_features_screens_screens_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/screens/screens.module */ 3897)).then(m => m.ScreensModule)
  }, {
    path: 'system',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_system_system_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/system/system.module */ 5173)).then(m => m.SystemModule)
  }]
},
// Catch all route
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/language.service */ 3318);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/auth.service */ 8010);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @azure/msal-angular */ 4715);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/header/header.component */ 9381);
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/sidebar/sidebar.component */ 1417);










function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.isMobileMenuOpen);
  }
}
function AppComponent_app_sidebar_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-sidebar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sidebarToggle", function AppComponent_app_sidebar_2_Template_app_sidebar_sidebarToggle_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSidebarToggle($event));
    })("closeMobileMenu", function AppComponent_app_sidebar_2_Template_app_sidebar_closeMobileMenu_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mobile-open", ctx_r1.isMobileMenuOpen)("collapsed", ctx_r1.isSidebarCollapsed);
  }
}
function AppComponent_app_header_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mobileMenuToggle", function AppComponent_app_header_4_Template_app_header_mobileMenuToggle_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(router, languageService, authService, msalService) {
    this.router = router;
    this.languageService = languageService;
    this.authService = authService;
    this.msalService = msalService;
    this.currentLanguage = 'ar';
    this.isSidebarCollapsed = false;
    this.isMobileMenuOpen = false;
    this.isToggling = false;
  }
  ngOnInit() {
    // Ensure MSAL is initialized and handle redirect result (Microsoft login)
    this.msalService.instance.initialize().then(() => {
      console.log('MSAL initialized successfully');
      // Handle redirect response (runs after Microsoft login completes)
      this.msalService.instance.handleRedirectPromise().then(result => {
        // IMPORTANT:
        // Only create local session when we have a fresh redirect result
        // (i.e. user just completed Microsoft login).
        // Do NOT auto-login on simple page refresh based on cached account.
        if (!result || !result.account) {
          console.log('No MSAL redirect result found – not auto-signing in.');
          return;
        }
        const account = result.account;
        if (!this.authService.isAuthenticated()) {
          this.msalService.instance.setActiveAccount(account);
          const email = account.username || '';
          const name = account.name || email;
          this.authService.setExternalLoginUser({
            username: name || email,
            email
          });
          console.log('Microsoft login mapped to local session for', email);
          this.router.navigate(['/']);
        }
      }).catch(err => {
        console.error('MSAL handleRedirectPromise error:', err);
      });
    }).catch(err => {
      console.error('MSAL initialization failed', err);
    });
    // Subscribe to language changes
    this.languageService.currentLanguage$.subscribe(lang => {
      console.log('App: Language changed to:', lang);
      console.log('App: Setting direction to:', lang === 'ar' ? 'RTL' : 'LTR');
      this.currentLanguage = lang;
      // Ensure document direction is set when language changes
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
      // Debug: Check document direction
      setTimeout(() => {
        console.log('Document dir attribute:', document.documentElement.getAttribute('dir'));
        console.log('Document lang attribute:', document.documentElement.getAttribute('lang'));
        // Check if app container has the right classes
        const appContainer = document.querySelector('.app-container');
        if (appContainer) {
          console.log('App container classes:', appContainer.className);
          console.log('App container dir attribute:', appContainer.getAttribute('dir'));
        }
      }, 100);
    });
    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    console.log('App: Initialized with language:', this.currentLanguage);
    // Load saved sidebar state
    this.loadSidebarState();
    // Listen to route changes to close mobile menu
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd)).subscribe(() => {
      this.closeMobileMenu();
    });
    // Check screen size on init
    this.checkScreenSize();
  }
  loadSidebarState() {
    const savedState = localStorage.getItem('sidebarCollapsed');
    this.isSidebarCollapsed = savedState === 'true';
  }
  onSidebarToggle(collapsed) {
    // On mobile, don't apply collapsed state (always show expanded)
    if (window.innerWidth >= 768) {
      this.isSidebarCollapsed = collapsed;
    } else {
      // On mobile, keep it expanded
      this.isSidebarCollapsed = false;
    }
  }
  onResize(event) {
    this.checkScreenSize();
  }
  onKeyDown(event) {
    // Ctrl+B (Windows/Linux) or Cmd+B (Mac) to toggle sidebar
    if ((event.ctrlKey || event.metaKey) && event.key === 'b') {
      event.preventDefault();
      this.toggleSidebar();
    }
  }
  checkScreenSize() {
    if (window.innerWidth >= 768) {
      this.closeMobileMenu();
    }
  }
  toggleMobileMenu() {
    // Prevent rapid toggling
    if (this.isToggling) {
      return;
    }
    this.isToggling = true;
    console.log('Toggle mobile menu called. Current state:', this.isMobileMenuOpen);
    const wasOpen = this.isMobileMenuOpen;
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // When opening mobile menu, ensure sidebar is expanded (not collapsed)
    if (!wasOpen && this.isMobileMenuOpen && window.innerWidth < 768) {
      this.isSidebarCollapsed = false;
    }
    console.log('New state:', this.isMobileMenuOpen, 'Sidebar collapsed:', this.isSidebarCollapsed);
    // Reset toggle flag after animation completes
    setTimeout(() => {
      this.isToggling = false;
    }, 300);
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  isAuthPage() {
    const currentRoute = this.router.url;
    return currentRoute.includes('/login') || currentRoute.includes('/register') || currentRoute.includes('/forgot-password') || currentRoute.includes('/auth');
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__.MsalService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"])("keydown", function AppComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
        }
      },
      decls: 7,
      vars: 12,
      consts: [[1, "app-container", 3, "dir"], ["class", "sidebar-overlay", 3, "active", "click", 4, "ngIf"], [3, "mobile-open", "collapsed", "sidebarToggle", "closeMobileMenu", 4, "ngIf"], [1, "main-content"], [3, "mobileMenuToggle", 4, "ngIf"], [1, "page-content"], [1, "sidebar-overlay", 3, "click"], [3, "sidebarToggle", "closeMobileMenu"], [3, "mobileMenuToggle"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_div_1_Template, 1, 2, "div", 1)(2, AppComponent_app_sidebar_2_Template, 1, 4, "app-sidebar", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AppComponent_app_header_4_Template, 1, 0, "app-header", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "main", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("rtl", ctx.currentLanguage === "ar")("ltr", ctx.currentLanguage === "en");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isMobileMenuOpen && !ctx.isAuthPage());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isAuthPage());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sidebar-collapsed", ctx.isSidebarCollapsed && !ctx.isAuthPage());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isAuthPage());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("auth-page", ctx.isAuthPage());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent],
      styles: [".app-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background-color: #ffffff !important;\n}\n\n.sidebar-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 998;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.sidebar-overlay.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n@media (min-width: 768px) {\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin-left: 280px;\n  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  width: calc(100% - 280px);\n}\n.main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 70px;\n  width: calc(100% - 70px);\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 240px;\n    width: calc(100% - 240px);\n  }\n  .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-left: 70px;\n    width: calc(100% - 70px);\n  }\n}\n@media (max-width: 767.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    width: 100% !important;\n  }\n  .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    width: 100% !important;\n  }\n}\n.main-content[_ngcontent-%COMP%]:has(.auth-page) {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  width: 100% !important;\n}\n\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n  overflow-y: auto;\n  background-color: #ffffff !important;\n}\n@media (max-width: 767.98px) {\n  .page-content[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n@media (max-width: 575.98px) {\n  .page-content[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n.page-content.auth-page[_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent !important;\n}\n.page-content.auth-page[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%], .page-content.auth-page[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%], .page-content.auth-page[_ngcontent-%COMP%]   .forgot-password-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n  margin: 0;\n  padding: 20px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 280px;\n  width: calc(100% - 280px);\n}\n[dir=rtl][_ngcontent-%COMP%]   .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 70px;\n  width: calc(100% - 70px);\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  [dir=rtl][_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    margin-right: 240px;\n    width: calc(100% - 240px);\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-right: 70px;\n    width: calc(100% - 70px);\n  }\n}\n@media (max-width: 767.98px) {\n  [dir=rtl][_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    margin-right: 0 !important;\n    width: 100% !important;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-right: 0 !important;\n    width: 100% !important;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]:has(.auth-page) {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  width: 100% !important;\n}\n\n.rtl[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 280px !important;\n}\n.rtl[_ngcontent-%COMP%]   .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 70px !important;\n}\n@media (max-width: 767.98px) {\n  .rtl[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    margin-right: 0 !important;\n  }\n  .rtl[_ngcontent-%COMP%]   .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-right: 0 !important;\n  }\n}\n.rtl[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]:has(.auth-page) {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.ltr[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 280px !important;\n  margin-right: 0 !important;\n}\n.ltr[_ngcontent-%COMP%]   .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 70px !important;\n  margin-right: 0 !important;\n}\n@media (max-width: 767.98px) {\n  .ltr[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n  .ltr[_ngcontent-%COMP%]   .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n}\n.ltr[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]:has(.auth-page) {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n@media (max-width: 1199.98px) {\n  .page-content[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}\n@media (max-width: 991.98px) {\n  .page-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .app-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .page-content[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n@media (max-width: 575.98px) {\n  .page-content[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n@media print {\n  .sidebar-overlay[_ngcontent-%COMP%], app-sidebar[_ngcontent-%COMP%], app-header[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .page-content[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n}\n.app-container[_ngcontent-%COMP%], .main-content[_ngcontent-%COMP%], .page-content[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  .app-container[_ngcontent-%COMP%], .main-content[_ngcontent-%COMP%], .page-content[_ngcontent-%COMP%] {\n    background-color: #ffffff !important;\n    color: #333 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQWpCRjtJQWtCSSxhQUFBO0VBQUY7QUFDRjs7QUFJQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlEQUFBO0VBQ0EseUJBQUE7QUFERjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtBQURKO0FBS0U7RUFkRjtJQWVJLGtCQUFBO0lBQ0EseUJBQUE7RUFGRjtFQUlFO0lBQ0UsaUJBQUE7SUFDQSx3QkFBQTtFQUZKO0FBQ0Y7QUFNRTtFQXpCRjtJQTBCSSx5QkFBQTtJQUNBLHNCQUFBO0VBSEY7RUFLRTtJQUNFLHlCQUFBO0lBQ0Esc0JBQUE7RUFISjtBQUNGO0FBT0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUFMSjs7QUFVQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQVBGO0FBVUU7RUFQRjtJQVFJLGFBQUE7RUFQRjtBQUNGO0FBU0U7RUFYRjtJQVlJLGFBQUE7RUFORjtBQUNGO0FBU0U7RUFDRSxVQUFBO0VBQ0Esa0NBQUE7QUFQSjtBQVVJOzs7RUFHRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBUk47O0FBZUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVpKO0FBY0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQVpOO0FBZUk7RUFYRjtJQVlJLG1CQUFBO0lBQ0EseUJBQUE7RUFaSjtFQWNJO0lBQ0Usa0JBQUE7SUFDQSx3QkFBQTtFQVpOO0FBQ0Y7QUFlSTtFQXJCRjtJQXNCSSwwQkFBQTtJQUNBLHNCQUFBO0VBWko7RUFjSTtJQUNFLDBCQUFBO0lBQ0Esc0JBQUE7RUFaTjtBQUNGO0FBZ0JJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FBZE47O0FBcUJFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtBQWxCSjtBQW9CSTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7QUFsQk47QUFxQkk7RUFURjtJQVVJLDBCQUFBO0VBbEJKO0VBb0JJO0lBQ0UsMEJBQUE7RUFsQk47QUFDRjtBQXNCSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFwQk47O0FBMEJFO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtBQXZCSjtBQXlCSTtFQUNFLDRCQUFBO0VBQ0EsMEJBQUE7QUF2Qk47QUEwQkk7RUFURjtJQVVJLHlCQUFBO0VBdkJKO0VBeUJJO0lBQ0UseUJBQUE7RUF2Qk47QUFDRjtBQTJCSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUF6Qk47O0FBK0JBO0VBQ0U7SUFDRSxhQUFBO0VBNUJGO0FBQ0Y7QUErQkE7RUFDRTtJQUNFLGFBQUE7RUE3QkY7QUFDRjtBQWdDQTtFQUNFO0lBQ0Usc0JBQUE7RUE5QkY7RUFpQ0E7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQS9CRjtFQWtDQTtJQUNFLGFBQUE7RUFoQ0Y7QUFDRjtBQW1DQTtFQUNFO0lBQ0UsYUFBQTtFQWpDRjtBQUNGO0FBcUNBO0VBQ0U7OztJQUdFLHdCQUFBO0VBbkNGO0VBc0NBO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtFQXBDRjtFQXVDQTtJQUNFLHFCQUFBO0VBckNGO0FBQ0Y7QUF5Q0E7OztFQUdFLG9DQUFBO0FBdkNGOztBQTJDQTtFQUNFOzs7SUFHRSxvQ0FBQTtJQUNBLHNCQUFBO0VBeENGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIFNpZGViYXIgT3ZlcmxheSBmb3IgTW9iaWxlXHJcbi5zaWRlYmFyLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHotaW5kZXg6IDk5ODtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICYuYWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNYWluIENvbnRlbnQgQXJlYVxyXG4ubWFpbi1jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tbGVmdDogMjgwcHg7IC8vIERlZmF1bHQgc2lkZWJhciB3aWR0aFxyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xyXG4gIFxyXG4gICYuc2lkZWJhci1jb2xsYXBzZWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7IC8vIENvbGxhcHNlZCBzaWRlYmFyIHdpZHRoXHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFRhYmxldCByZXNwb25zaXZlXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBcclxuICAgICYuc2lkZWJhci1jb2xsYXBzZWQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBNb2JpbGUgcmVzcG9uc2l2ZVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgICYuc2lkZWJhci1jb2xsYXBzZWQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBBdXRoIHBhZ2VzIC0gbm8gc2lkZWJhciBtYXJnaW5zXHJcbiAgJjpoYXMoLmF1dGgtcGFnZSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFBhZ2UgQ29udGVudFxyXG4ucGFnZS1jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgLy8gTW9iaWxlIHJlc3BvbnNpdmVcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLy8gQXV0aCBwYWdlcyBzdHlsaW5nXHJcbiAgJi5hdXRoLXBhZ2Uge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIC8vIEVuc3VyZSBhdXRoIHBhZ2VzIHRha2UgZnVsbCB3aWR0aFxyXG4gICAgLmxvZ2luLWNvbnRhaW5lcixcclxuICAgIC5yZWdpc3Rlci1jb250YWluZXIsXHJcbiAgICAuZm9yZ290LXBhc3N3b3JkLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI4MHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KTtcclxuICAgIFxyXG4gICAgJi5zaWRlYmFyLWNvbGxhcHNlZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyNDBweDtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcclxuICAgICAgXHJcbiAgICAgICYuc2lkZWJhci1jb2xsYXBzZWQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICAgICAgJi5zaWRlYmFyLWNvbGxhcHNlZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBdXRoIHBhZ2VzIC0gbm8gc2lkZWJhciBtYXJnaW5zXHJcbiAgICAmOmhhcyguYXV0aC1wYWdlKSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUlRML0xUUiBWaXN1YWwgSW5kaWNhdG9yc1xyXG4ucnRsIHtcclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgICYuc2lkZWJhci1jb2xsYXBzZWQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICAgICAgJi5zaWRlYmFyLWNvbGxhcHNlZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQXV0aCBwYWdlcyAtIG5vIHNpZGViYXIgbWFyZ2luc1xyXG4gICAgJjpoYXMoLmF1dGgtcGFnZSkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sdHIge1xyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgJi5zaWRlYmFyLWNvbGxhcHNlZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAgICYuc2lkZWJhci1jb2xsYXBzZWQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQXV0aCBwYWdlcyAtIG5vIHNpZGViYXIgbWFyZ2luc1xyXG4gICAgJjpoYXMoLmF1dGgtcGFnZSkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgQnJlYWtwb2ludHNcclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gIC5hcHAtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFByaW50IHN0eWxlc1xyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5zaWRlYmFyLW92ZXJsYXksXHJcbiAgYXBwLXNpZGViYXIsXHJcbiAgYXBwLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAucGFnZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEVuc3VyZSB3aGl0ZSBiYWNrZ3JvdW5kIGlzIGFsd2F5cyBhcHBsaWVkXHJcbi5hcHAtY29udGFpbmVyLFxyXG4ubWFpbi1jb250ZW50LFxyXG4ucGFnZS1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIE92ZXJyaWRlIGFueSBwb3RlbnRpYWwgZGFyayB0aGVtZSBwcmVmZXJlbmNlc1xyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgLmFwcC1jb250YWluZXIsXHJcbiAgLm1haW4tY29udGVudCxcclxuICAucGFnZS1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @azure/msal-angular */ 4715);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @azure/msal-browser */ 7526);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @azure/msal-browser */ 7395);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 8423);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);












class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__.MsalRedirectComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__.MsalInterceptor,
        multi: true
      }, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__.MsalGuard, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__.MsalService, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__.MsalBroadcastService],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__.MsalModule.forRoot(new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_10__.PublicClientApplication({
        auth: {
          clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.azure.clientId,
          authority: `https://login.microsoftonline.com/${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.azure.tenantId}`,
          redirectUri: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.azure.redirectUri,
          postLogoutRedirectUri: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.azure.postLogoutRedirectUri
        },
        cache: {
          cacheLocation: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserCacheLocation.LocalStorage
        }
      }), {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_11__.InteractionType.Redirect,
        authRequest: {
          scopes: ['openid', 'profile', 'email']
        }
      }, {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_11__.InteractionType.Redirect,
        protectedResourceMap: new Map([
          // Add backend API URLs here if you later secure them with Azure AD
        ])
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__.MsalModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 8423:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/language.service */ 3318);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ 8010);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ 4978);
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/role.guard */ 400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class CoreModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
  static {
    this.ɵfac = function CoreModule_Factory(t) {
      return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](CoreModule, 12));
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService, _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, _guards_role_guard__WEBPACK_IMPORTED_MODULE_3__.RoleGuard],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
  });
})();

/***/ }),

/***/ 4978:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    // Redirect to login page
    this.router.navigate(['/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 400:
/*!*******************************************!*\
  !*** ./src/app/core/guards/role.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleGuard: () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class RoleGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    const requiredRoles = route.data['roles'];
    const requiredPermissions = route.data['permissions'];
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login'], {
        queryParams: {
          returnUrl: state.url
        }
      });
      return false;
    }
    // Check roles if specified
    if (requiredRoles && requiredRoles.length > 0) {
      if (!this.authService.hasAnyRole(requiredRoles)) {
        this.router.navigate(['/unauthorized']);
        return false;
      }
    }
    // Check permissions if specified
    if (requiredPermissions && requiredPermissions.length > 0) {
      const hasAllPermissions = requiredPermissions.every(permission => this.authService.hasPermission(permission));
      if (!hasAllPermissions) {
        this.router.navigate(['/unauthorized']);
        return false;
      }
    }
    return true;
  }
  static {
    this.ɵfac = function RoleGuard_Factory(t) {
      return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RoleGuard,
      factory: RoleGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8010:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @azure/msal-angular */ 4715);






class AuthService {
  constructor(http, msalService) {
    this.http = http;
    this.msalService = msalService;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || 'http://localhost:3000/api';
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
    this.checkStoredAuth();
  }
  checkStoredAuth() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    }
  }
  /**
   * Mark user as authenticated using an external identity provider (e.g. Microsoft).
   * This does not verify password on our backend, it just maps the external user
   * into the existing User model so that AuthGuard and permission checks work.
   */
  setExternalLoginUser(payload) {
    const externalUser = {
      id: 0,
      username: payload.username,
      email: payload.email,
      userType: 'super-user',
      validity: 'manager',
      isActive: true,
      // Provide full permissions so UI continues to work; adjust if needed
      permissions: {
        addModifyAccounts: true,
        viewAccounts: true,
        deleteAccounts: true,
        addModifyAds: true,
        displayAds: true,
        deleteAds: true,
        addModifySites: true,
        viewSites: true,
        deleteSites: true,
        notificationSending: true,
        notificationViewing: true,
        notificationDeletion: true
      }
    };
    // Map to legacy fields for compatibility
    externalUser.role = 'admin';
    externalUser.name = externalUser.username;
    this.currentUserSubject.next(externalUser);
    this.isAuthenticatedSubject.next(true);
    localStorage.setItem('currentUser', JSON.stringify(externalUser));
  }
  /** Login result: either full user or requires 2FA step */
  login(credentials) {
    return this.http.post(`${this.apiUrl}/auth/login`, {
      username: credentials.username,
      password: credentials.password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (response.success && response.requiresTwoFactor && response.tempToken) {
        return {
          requiresTwoFactor: true,
          tempToken: response.tempToken
        };
      }
      if (response.success && response.user) {
        const user = this.normalizeUser(response.user);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return {
          user
        };
      }
      throw new Error('Invalid login response');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Login error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  /**
   * Normal password login WITHOUT 2FA step.
   * Used so OTP is required only for "Sign in with Google" flow.
   */
  loginNo2FA(credentials) {
    return this.http.post(`${this.apiUrl}/auth/login-no2fa`, {
      username: credentials.username,
      password: credentials.password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (response.success && response.user) {
        const user = this.normalizeUser(response.user);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }
      throw new Error('Invalid login-no2fa response');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Login-no2fa error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  /** Verify 2FA code and complete login */
  verify2FA(tempToken, code) {
    return this.http.post(`${this.apiUrl}/auth/2fa/verify`, {
      tempToken,
      code
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (response.success && response.user) {
        const user = this.normalizeUser(response.user);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }
      throw new Error('Invalid 2FA response');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('2FA verify error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  /** Start 2FA setup – returns QR code data URL */
  setup2FA(username, password) {
    return this.http.post(`${this.apiUrl}/auth/2fa/setup`, {
      username,
      password
    });
  }
  /** Complete 2FA setup after scanning QR */
  verifySetup2FA(username, password, code) {
    return this.http.post(`${this.apiUrl}/auth/2fa/verify-setup`, {
      username,
      password,
      code
    });
  }
  /** Disable 2FA */
  disable2FA(username, password, code) {
    return this.http.post(`${this.apiUrl}/auth/2fa/disable`, {
      username,
      password,
      code
    });
  }
  /** Get 2FA status */
  get2FAStatus(username, password) {
    return this.http.post(`${this.apiUrl}/auth/2fa/status`, {
      username,
      password
    });
  }
  /**
   * OTP-only 2FA login start (no password).
   * If 2FA is enabled => requiresOtp
   * If 2FA is disabled => server returns QR to start setup and then OTP to enable+login
   */
  otpLoginStart(usernameOrEmail) {
    return this.http.post(`${this.apiUrl}/auth/2fa/otp-login/start`, {
      usernameOrEmail
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (response?.success) {
        return {
          requiresSetup: !!response.requiresSetup,
          qrDataUrl: response.qrDataUrl
        };
      }
      throw new Error('Invalid otp login start response');
    }));
  }
  /**
   * OTP-only 2FA login verify (no password).
   * Returns full user on success (and enables 2FA if it was not enabled yet).
   */
  otpLoginVerify(usernameOrEmail, code) {
    return this.http.post(`${this.apiUrl}/auth/2fa/otp-login/verify`, {
      usernameOrEmail,
      code
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (response?.success && response.user) {
        const user = this.normalizeUser(response.user);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }
      throw new Error('Invalid otp login verify response');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('OTP login verify error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  normalizeUser(user) {
    const roleMap = {
      'super-user': 'admin',
      'admin-user': 'manager',
      'regular-user': 'user'
    };
    user.role = roleMap[user.userType] || 'user';
    user.name = user.username;
    return user;
  }
  logout() {
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('currentUser');
    // Intentionally do NOT sign out from Microsoft SSO here.
    // Signing out from MS triggers an external redirect (Microsoft logout page),
    // but for this app we only want an in-app logout.
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  isAuthenticated() {
    return this.isAuthenticatedSubject.value;
  }
  hasRole(role) {
    const user = this.getCurrentUser();
    return user ? user.role === role : false;
  }
  hasPermission(permission) {
    const user = this.getCurrentUser();
    if (!user || !user.permissions) {
      return false;
    }
    // Check permission based on the permission string
    // Map permission strings to UserPermissions properties
    const permissionMap = {
      'addModifyAccounts': 'addModifyAccounts',
      'viewAccounts': 'viewAccounts',
      'deleteAccounts': 'deleteAccounts',
      'addModifyAds': 'addModifyAds',
      'displayAds': 'displayAds',
      'deleteAds': 'deleteAds',
      'addModifySites': 'addModifySites',
      'viewSites': 'viewSites',
      'deleteSites': 'deleteSites',
      'notificationSending': 'notificationSending',
      'notificationViewing': 'notificationViewing',
      'notificationDeletion': 'notificationDeletion'
    };
    const permissionKey = permissionMap[permission];
    return permissionKey ? user.permissions[permissionKey] === true : false;
  }
  hasAnyRole(roles) {
    const user = this.getCurrentUser();
    if (!user || !user.role) {
      return false;
    }
    return roles.includes(user.role);
  }
  refreshToken() {
    // Mock token refresh - replace with actual API call
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      setTimeout(() => {
        const newToken = 'new-mock-token-' + Date.now();
        observer.next(newToken);
        observer.complete();
      }, 500);
    });
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__.MsalService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3318:
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class LanguageService {
  constructor() {
    this.currentLanguageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('ar');
    this.currentLanguage$ = this.currentLanguageSubject.asObservable();
    this.translations = {
      // Header translations
      'header.home': {
        ar: 'الصفحة الرئيسية',
        en: 'Home Page'
      },
      'header.subLocations': {
        ar: 'المواقع الفرعية',
        en: 'Sub-locations'
      },
      'header.sections': {
        ar: 'الأقسام',
        en: 'Sections'
      },
      'header.specialDivisions': {
        ar: 'التقسيمات الخاصة',
        en: 'Special Divisions'
      },
      'header.advertisingBanner': {
        ar: 'الشريط الاعلاني',
        en: 'Advertising Banner'
      },
      'header.advertisements': {
        ar: 'الإعلانات',
        en: 'Advertisements'
      },
      'header.viewAdvertisements': {
        ar: 'عرض الإعلانات',
        en: 'View Advertisements'
      },
      'header.notificationsEvaluation': {
        ar: 'الإشعارات والتقييم',
        en: 'Notifications and Evaluation'
      },
      'header.notifications': {
        ar: 'الإشعارات',
        en: 'Notifications'
      },
      'header.notificationSettings': {
        ar: 'إعدادات الإشعارات',
        en: 'Notification Settings'
      },
      'header.whatsappMessages': {
        ar: 'رسائل الواتس',
        en: 'WhatsApp Messages'
      },
      'header.whatsappTemplates': {
        ar: 'قوالب الواتس',
        en: 'WhatsApp Templates'
      },
      'header.usersPermissions': {
        ar: 'المستخدمين والصلاحيات',
        en: 'Users and Permissions'
      },
      'header.continue': {
        ar: 'واصل',
        en: 'Continue'
      },
      'header.evaluate': {
        ar: 'تقين',
        en: 'Evaluate'
      },
      'header.view': {
        ar: 'عرض',
        en: 'View'
      },
      'header.cancel': {
        ar: 'إلغاء',
        en: 'Cancel'
      },
      'header.noNews': {
        ar: 'لا توجد اخبار حاليا',
        en: 'No news currently'
      },
      // Dashboard metrics
      'dashboard.evaluationNotifications': {
        ar: 'إشعارات التقييم',
        en: 'Evaluation Notifications'
      },
      'dashboard.notifications': {
        ar: 'الإشعارات',
        en: 'Notifications'
      },
      'dashboard.subLocations': {
        ar: 'المواقع الفرعية',
        en: 'Sub-locations'
      },
      'dashboard.usersPermissions': {
        ar: 'المستخدمين والصلاحيات',
        en: 'Users and Permissions'
      },
      'dashboard.normalNews': {
        ar: 'أخبار عادية',
        en: 'Normal News'
      },
      'dashboard.advertisements': {
        ar: 'الإعلانات',
        en: 'Advertisements'
      }
    };
    // Load saved language preference or default to Arabic
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const defaultLanguage = savedLanguage === 'en' ? 'en' : 'ar';
    this.setLanguage(defaultLanguage);
  }
  getCurrentLanguage() {
    return this.currentLanguageSubject.value;
  }
  getSavedLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return savedLanguage === 'en' ? 'en' : 'ar';
  }
  setLanguage(language) {
    console.log('LanguageService: Setting language to:', language);
    this.currentLanguageSubject.next(language);
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', language);
    // Set document direction
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    console.log('LanguageService: Setting document direction to:', direction);
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    // Force a reflow to ensure changes are applied
    document.documentElement.style.display = 'none';
    document.documentElement.offsetHeight; // Trigger reflow
    document.documentElement.style.display = '';
  }
  translate(key) {
    const translation = this.translations[key];
    if (!translation) {
      return key;
    }
    return translation[this.getCurrentLanguage()];
  }
  toggleLanguage() {
    const currentLang = this.getCurrentLanguage();
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    this.setLanguage(newLang);
  }
  static {
    this.ɵfac = function LanguageService_Factory(t) {
      return new (t || LanguageService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LanguageService,
      factory: LanguageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5567:
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationManagementService: () => (/* binding */ NotificationManagementService),
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class NotificationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || 'http://localhost:3000/api';
  }
  /**
   * Get notification settings
   */
  getNotificationSettings(userId) {
    const params = {};
    if (userId) {
      params.userId = userId.toString();
    }
    return this.http.get(`${this.apiUrl}/notification-settings`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.settings));
  }
  /**
   * Save notification settings
   */
  saveNotificationSettings(settings, userId) {
    const body = {
      system_updates_email: settings.systemUpdatesEmail,
      system_updates_sms: settings.systemUpdatesSms,
      system_updates_push: settings.systemUpdatesPush,
      system_updates_whatsapp: settings.systemUpdatesWhatsapp,
      security_alerts_email: settings.securityAlertsEmail,
      security_alerts_sms: settings.securityAlertsSms,
      security_alerts_push: settings.securityAlertsPush,
      security_alerts_whatsapp: settings.securityAlertsWhatsapp,
      new_messages_email: settings.newMessagesEmail,
      new_messages_sms: settings.newMessagesSms,
      new_messages_push: settings.newMessagesPush,
      new_messages_whatsapp: settings.newMessagesWhatsapp,
      reminders_email: settings.remindersEmail,
      reminders_sms: settings.remindersSms,
      reminders_push: settings.remindersPush,
      reminders_whatsapp: settings.remindersWhatsapp,
      marketing_email: settings.marketingEmail,
      marketing_sms: settings.marketingSms,
      marketing_push: settings.marketingPush,
      marketing_whatsapp: settings.marketingWhatsapp
    };
    if (userId) {
      body.userId = userId;
    }
    return this.http.post(`${this.apiUrl}/notification-settings`, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.settings));
  }
  /**
   * Reset notification settings to defaults
   */
  resetNotificationSettings(userId) {
    const body = {};
    if (userId) {
      body.userId = userId;
    }
    return this.http.post(`${this.apiUrl}/notification-settings/reset`, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.settings));
  }
  static {
    this.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}
class NotificationManagementService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || 'http://localhost:3000/api';
  }
  /**
   * Get all notifications with optional filters
   */
  getNotifications(filters) {
    const params = {};
    if (filters?.status) params.status = filters.status;
    if (filters?.type) params.type = filters.type;
    if (filters?.category) params.category = filters.category;
    if (filters?.search) params.search = filters.search;
    if (filters?.limit) params.limit = filters.limit.toString();
    if (filters?.offset) params.offset = filters.offset.toString();
    if (filters?.page) params.page = filters.page.toString();
    if (filters?.userId) params.userId = filters.userId.toString();
    return this.http.get(`${this.apiUrl}/notifications`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      notifications: response.notifications.map(n => ({
        ...n,
        createdAt: n.createdAt ? new Date(n.createdAt) : undefined,
        updatedAt: n.updatedAt ? new Date(n.updatedAt) : undefined,
        scheduledDate: n.scheduledDate ? new Date(n.scheduledDate) : undefined,
        sentAt: n.sentAt ? new Date(n.sentAt) : undefined
      })),
      total: response.total
    })));
  }
  /**
   * Get a single notification by ID
   */
  getNotificationById(id) {
    return this.http.get(`${this.apiUrl}/notifications/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.notification,
      createdAt: response.notification.createdAt ? new Date(response.notification.createdAt) : undefined,
      updatedAt: response.notification.updatedAt ? new Date(response.notification.updatedAt) : undefined,
      scheduledDate: response.notification.scheduledDate ? new Date(response.notification.scheduledDate) : undefined,
      sentAt: response.notification.sentAt ? new Date(response.notification.sentAt) : undefined
    })));
  }
  /**
   * Create a new notification
   */
  createNotification(notification) {
    return this.http.post(`${this.apiUrl}/notifications`, notification).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.notification,
      createdAt: response.notification.createdAt ? new Date(response.notification.createdAt) : undefined,
      updatedAt: response.notification.updatedAt ? new Date(response.notification.updatedAt) : undefined,
      scheduledDate: response.notification.scheduledDate ? new Date(response.notification.scheduledDate) : undefined,
      sentAt: response.notification.sentAt ? new Date(response.notification.sentAt) : undefined
    })));
  }
  /**
   * Update a notification
   */
  updateNotification(id, notification) {
    return this.http.put(`${this.apiUrl}/notifications/${id}`, notification).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.notification,
      createdAt: response.notification.createdAt ? new Date(response.notification.createdAt) : undefined,
      updatedAt: response.notification.updatedAt ? new Date(response.notification.updatedAt) : undefined,
      scheduledDate: response.notification.scheduledDate ? new Date(response.notification.scheduledDate) : undefined,
      sentAt: response.notification.sentAt ? new Date(response.notification.sentAt) : undefined
    })));
  }
  /**
   * Delete a notification
   */
  deleteNotification(id) {
    return this.http.delete(`${this.apiUrl}/notifications/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => undefined));
  }
  /**
   * Send a notification
   */
  sendNotification(id) {
    return this.http.post(`${this.apiUrl}/notifications/${id}/send`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.notification,
      createdAt: response.notification.createdAt ? new Date(response.notification.createdAt) : undefined,
      updatedAt: response.notification.updatedAt ? new Date(response.notification.updatedAt) : undefined,
      scheduledDate: response.notification.scheduledDate ? new Date(response.notification.scheduledDate) : undefined,
      sentAt: response.notification.sentAt ? new Date(response.notification.sentAt) : undefined
    })));
  }
  /**
   * Schedule a notification
   */
  scheduleNotification(id, scheduledDate, scheduledTime) {
    return this.http.post(`${this.apiUrl}/notifications/${id}/schedule`, {
      scheduledDate,
      scheduledTime
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.notification,
      createdAt: response.notification.createdAt ? new Date(response.notification.createdAt) : undefined,
      updatedAt: response.notification.updatedAt ? new Date(response.notification.updatedAt) : undefined,
      scheduledDate: response.notification.scheduledDate ? new Date(response.notification.scheduledDate) : undefined,
      sentAt: response.notification.sentAt ? new Date(response.notification.sentAt) : undefined
    })));
  }
  static {
    this.ɵfac = function NotificationManagementService_Factory(t) {
      return new (t || NotificationManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NotificationManagementService,
      factory: NotificationManagementService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2243:
/*!******************************************************!*\
  !*** ./src/app/core/services/translation.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslationService: () => (/* binding */ TranslationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class TranslationService {
  constructor() {
    this.translations = {
      search: {
        ar: 'بحث',
        en: 'Search'
      },
      add: {
        ar: 'إضافة',
        en: 'Add'
      },
      edit: {
        ar: 'تعديل',
        en: 'Edit'
      },
      delete: {
        ar: 'حذف',
        en: 'Delete'
      },
      save: {
        ar: 'حفظ',
        en: 'Save'
      },
      saveChanges: {
        ar: 'حفظ التغييرات',
        en: 'Save Changes'
      },
      cancel: {
        ar: 'إلغاء',
        en: 'Cancel'
      },
      close: {
        ar: 'إغلاق',
        en: 'Close'
      },
      back: {
        ar: 'رجوع',
        en: 'Back'
      },
      next: {
        ar: 'التالي',
        en: 'Next'
      },
      previous: {
        ar: 'السابق',
        en: 'Previous'
      },
      submit: {
        ar: 'إرسال',
        en: 'Submit'
      },
      reset: {
        ar: 'إعادة تعيين',
        en: 'Reset'
      },
      confirm: {
        ar: 'تأكيد',
        en: 'Confirm'
      },
      yes: {
        ar: 'نعم',
        en: 'Yes'
      },
      no: {
        ar: 'لا',
        en: 'No'
      },
      ok: {
        ar: 'موافق',
        en: 'OK'
      },
      loading: {
        ar: 'جاري التحميل...',
        en: 'Loading...'
      },
      error: {
        ar: 'خطأ',
        en: 'Error'
      },
      success: {
        ar: 'نجح',
        en: 'Success'
      },
      warning: {
        ar: 'تحذير',
        en: 'Warning'
      },
      info: {
        ar: 'معلومات',
        en: 'Info'
      },
      noDataFound: {
        ar: 'لم يتم العثور على بيانات',
        en: 'No data found'
      },
      tryAdjustingFilters: {
        ar: 'جرب تعديل الفلاتر',
        en: 'Try adjusting filters'
      },
      confirmDelete: {
        ar: 'تأكيد الحذف',
        en: 'Confirm Delete'
      },
      confirmDeleteMessage: {
        ar: 'هل أنت متأكد من الحذف؟ لا يمكن التراجع عن هذا الإجراء.',
        en: 'Are you sure you want to delete? This action cannot be undone.'
      },
      confirmLogoutMessage: {
        ar: 'هل أنت متأكد من تسجيل الخروج؟',
        en: 'Are you sure you want to logout?'
      },
      actions: {
        ar: 'الإجراءات',
        en: 'Actions'
      },
      status: {
        ar: 'الحالة',
        en: 'Status'
      },
      type: {
        ar: 'النوع',
        en: 'Type'
      },
      description: {
        ar: 'الوصف',
        en: 'Description'
      },
      code: {
        ar: 'الرمز',
        en: 'Code'
      },
      name: {
        ar: 'الاسم',
        en: 'Name'
      },
      date: {
        ar: 'التاريخ',
        en: 'Date'
      },
      location: {
        ar: 'الموقع',
        en: 'Location'
      },
      priority: {
        ar: 'الأولوية',
        en: 'Priority'
      },
      category: {
        ar: 'الفئة',
        en: 'Category'
      },
      allLocations: {
        ar: 'جميع المواقع',
        en: 'All Locations'
      },
      active: {
        ar: 'نشط',
        en: 'Active'
      },
      inactive: {
        ar: 'غير نشط',
        en: 'Inactive'
      },
      pending: {
        ar: 'قيد الانتظار',
        en: 'Pending'
      },
      completed: {
        ar: 'مكتمل',
        en: 'Completed'
      },
      high: {
        ar: 'عالية',
        en: 'High'
      },
      medium: {
        ar: 'متوسطة',
        en: 'Medium'
      },
      low: {
        ar: 'منخفضة',
        en: 'Low'
      },
      all: {
        ar: 'الكل',
        en: 'All'
      },
      allTypes: {
        ar: 'جميع الأنواع',
        en: 'All Types'
      },
      allStatuses: {
        ar: 'جميع الحالات',
        en: 'All Statuses'
      },
      allCategories: {
        ar: 'جميع الفئات',
        en: 'All Categories'
      },
      allPriorities: {
        ar: 'جميع الأولويات',
        en: 'All Priorities'
      },
      preview: {
        ar: 'معاينة',
        en: 'Preview'
      },
      // Notifications
      notifications: {
        ar: 'إدارة الإشعارات',
        en: 'Notifications Management'
      },
      addNewNotification: {
        ar: 'إضافة إشعار جديد',
        en: 'Add New Notification'
      },
      notificationTitle: {
        ar: 'عنوان الإشعار',
        en: 'Notification Title'
      },
      notificationType: {
        ar: 'نوع الإشعار',
        en: 'Notification Type'
      },
      notificationMessage: {
        ar: 'رسالة الإشعار',
        en: 'Notification Message'
      },
      enterNotificationTitle: {
        ar: 'أدخل عنوان الإشعار',
        en: 'Enter notification title'
      },
      enterNotificationMessage: {
        ar: 'أدخل رسالة الإشعار',
        en: 'Enter notification message'
      },
      addNotification: {
        ar: 'إضافة الإشعار',
        en: 'Add Notification'
      },
      searchNotifications: {
        ar: 'البحث في الإشعارات...',
        en: 'Search notifications...'
      },
      totalNotifications: {
        ar: 'إجمالي الإشعارات',
        en: 'Total Notifications'
      },
      notificationDashboard: {
        ar: 'لوحة تحكم الإشعارات',
        en: 'Notification Dashboard'
      },
      notificationManagement: {
        ar: 'إدارة الإشعارات',
        en: 'Notification Management'
      },
      sentNotifications: {
        ar: 'الإشعارات المرسلة',
        en: 'Sent Notifications'
      },
      scheduledNotifications: {
        ar: 'الإشعارات المجدولة',
        en: 'Scheduled Notifications'
      },
      draftNotifications: {
        ar: 'الإشعارات المسودة',
        en: 'Draft Notifications'
      },
      fromLastMonth: {
        ar: 'من الشهر الماضي',
        en: 'from last month'
      },
      notificationTypes: {
        ar: 'أنواع الإشعارات',
        en: 'Notification Types'
      },
      recipients: {
        ar: 'مستلم',
        en: 'recipients'
      },
      systemUpdate: {
        ar: 'تحديث النظام',
        en: 'System Update'
      },
      securityAlert: {
        ar: 'تنبيه أمني',
        en: 'Security Alert'
      },
      reminderNotification: {
        ar: 'إشعار تذكير',
        en: 'Reminder Notification'
      },
      normal: {
        ar: 'عادي',
        en: 'Normal'
      },
      urgent: {
        ar: 'عاجل',
        en: 'Urgent'
      },
      sent: {
        ar: 'مرسل',
        en: 'Sent'
      },
      scheduled: {
        ar: 'مجدول',
        en: 'Scheduled'
      },
      draft: {
        ar: 'مسودة',
        en: 'Draft'
      },
      markAllAsRead: {
        ar: 'تحديد الكل كمقروء',
        en: 'Mark All as Read'
      },
      markAsRead: {
        ar: 'تحديد كمقروء',
        en: 'Mark as Read'
      },
      read: {
        ar: 'مقروء',
        en: 'Read'
      },
      unread: {
        ar: 'غير مقروء',
        en: 'Unread'
      },
      noNotificationsFound: {
        ar: 'لا توجد إشعارات مطابقة للبحث',
        en: 'No notifications found matching search'
      },
      general: {
        ar: 'عام',
        en: 'General'
      },
      system: {
        ar: 'النظام',
        en: 'System'
      },
      messages: {
        ar: 'الرسائل',
        en: 'Messages'
      },
      security: {
        ar: 'الأمان',
        en: 'Security'
      },
      // Notification Settings
      notificationSettings: {
        ar: 'إعدادات الإشعارات',
        en: 'Notification Settings'
      },
      resetToDefaults: {
        ar: 'إعادة تعيين للافتراضي',
        en: 'Reset to Defaults'
      },
      saveSettings: {
        ar: 'حفظ الإعدادات',
        en: 'Save Settings'
      },
      saving: {
        ar: 'جاري الحفظ...',
        en: 'Saving...'
      },
      systemUpdates: {
        ar: 'تحديثات النظام',
        en: 'System Updates'
      },
      systemUpdatesDescription: {
        ar: 'إشعارات حول تحديثات النظام والصيانة',
        en: 'Notifications about system updates and maintenance'
      },
      securityAlerts: {
        ar: 'تنبيهات الأمان',
        en: 'Security Alerts'
      },
      securityAlertsDescription: {
        ar: 'إشعارات حول محاولات تسجيل الدخول والأنشطة المشبوهة',
        en: 'Notifications about login attempts and suspicious activities'
      },
      newMessages: {
        ar: 'رسائل جديدة',
        en: 'New Messages'
      },
      newMessagesDescription: {
        ar: 'إشعارات عند استلام رسائل جديدة',
        en: 'Notifications when receiving new messages'
      },
      reminders: {
        ar: 'تذكيرات',
        en: 'Reminders'
      },
      remindersDescription: {
        ar: 'تذكيرات بالمواعيد والمهام المهمة',
        en: 'Reminders about important appointments and tasks'
      },
      marketing: {
        ar: 'إعلانات تسويقية',
        en: 'Marketing'
      },
      marketingDescription: {
        ar: 'إشعارات حول العروض والخدمات الجديدة',
        en: 'Notifications about new offers and services'
      },
      email: {
        ar: 'البريد الإلكتروني',
        en: 'Email'
      },
      sms: {
        ar: 'رسالة نصية',
        en: 'SMS'
      },
      push: {
        ar: 'إشعار',
        en: 'Push'
      },
      whatsapp: {
        ar: 'واتساب',
        en: 'WhatsApp'
      },
      settingsSavedSuccessfully: {
        ar: 'تم حفظ الإعدادات بنجاح',
        en: 'Settings saved successfully'
      },
      settingsResetToDefaults: {
        ar: 'تم إعادة تعيين الإعدادات للقيم الافتراضية',
        en: 'Settings reset to defaults'
      },
      // Sub-Locations
      subLocations: {
        ar: 'المواقع الفرعية',
        en: 'Sub-Locations'
      },
      addNewLocation: {
        ar: 'إضافة موقع جديد',
        en: 'Add New Location'
      },
      locationName: {
        ar: 'اسم الموقع',
        en: 'Location Name'
      },
      address: {
        ar: 'العنوان',
        en: 'Address'
      },
      locationType: {
        ar: 'نوع الموقع',
        en: 'Location Type'
      },
      enterLocationName: {
        ar: 'أدخل اسم الموقع',
        en: 'Enter location name'
      },
      enterAddress: {
        ar: 'أدخل عنوان الموقع',
        en: 'Enter address'
      },
      selectLocationType: {
        ar: 'اختر نوع الموقع',
        en: 'Select location type'
      },
      addLocation: {
        ar: 'إضافة الموقع',
        en: 'Add Location'
      },
      searchLocations: {
        ar: 'البحث في المواقع...',
        en: 'Search locations...'
      },
      totalLocations: {
        ar: 'إجمالي المواقع',
        en: 'Total Locations'
      },
      mainCenter: {
        ar: 'مركز رئيسي',
        en: 'Main Center'
      },
      branch: {
        ar: 'فرع',
        en: 'Branch'
      },
      office: {
        ar: 'مكتب',
        en: 'Office'
      },
      noLocationsFound: {
        ar: 'لا توجد مواقع مطابقة للبحث',
        en: 'No locations found matching search'
      },
      // Advertisements
      advertisements: {
        ar: 'الإعلانات',
        en: 'Advertisements'
      },
      addAdvertisement: {
        ar: 'إضافة إعلان',
        en: 'Add Advertisement'
      },
      addNewAdvertisement: {
        ar: 'إضافة إعلان جديد',
        en: 'Add New Advertisement'
      },
      title: {
        ar: 'العنوان',
        en: 'Title'
      },
      imageUrl: {
        ar: 'رابط الصورة',
        en: 'Image URL'
      },
      targetAudience: {
        ar: 'الجمهور المستهدف',
        en: 'Target Audience'
      },
      startDate: {
        ar: 'تاريخ البداية',
        en: 'Start Date'
      },
      endDate: {
        ar: 'تاريخ النهاية',
        en: 'End Date'
      },
      enterTitle: {
        ar: 'أدخل العنوان',
        en: 'Enter title'
      },
      enterDescription: {
        ar: 'أدخل الوصف',
        en: 'Enter description'
      },
      enterImageUrl: {
        ar: 'أدخل رابط الصورة',
        en: 'Enter image URL'
      },
      enterTargetAudience: {
        ar: 'أدخل الجمهور المستهدف',
        en: 'Enter target audience'
      },
      titleRequired: {
        ar: 'العنوان مطلوب',
        en: 'Title is required'
      },
      descriptionRequired: {
        ar: 'الوصف مطلوب',
        en: 'Description is required'
      },
      imageUrlRequired: {
        ar: 'رابط الصورة مطلوب',
        en: 'Image URL is required'
      },
      targetAudienceRequired: {
        ar: 'الجمهور المستهدف مطلوب',
        en: 'Target audience is required'
      },
      startDateRequired: {
        ar: 'تاريخ البداية مطلوب',
        en: 'Start date is required'
      },
      endDateRequired: {
        ar: 'تاريخ النهاية مطلوب',
        en: 'End date is required'
      },
      saveAdvertisement: {
        ar: 'حفظ الإعلان',
        en: 'Save Advertisement'
      },
      searchAdvertisements: {
        ar: 'البحث في الإعلانات',
        en: 'Search advertisements'
      },
      banner: {
        ar: 'شريط إعلاني',
        en: 'Banner'
      },
      popup: {
        ar: 'نافذة منبثقة',
        en: 'Popup'
      },
      uploadFile: {
        ar: 'رفع الملف',
        en: 'Upload File'
      },
      fileRequired: {
        ar: 'الملف مطلوب',
        en: 'File is required'
      },
      supportedFormats: {
        ar: 'الصيغ المدعومة: الصور، الفيديو',
        en: 'Supported: Images, Videos'
      },
      supportedFormatsMultiple: {
        ar: 'الصيغ المدعومة: صور، فيديو. اختر عدة ملفات لإنشاء عدة إعلانات مرة واحدة.',
        en: 'Supported: Images, Videos. Select multiple files to create multiple ads at once.'
      },
      filesSelected: {
        ar: 'ملف/ملفات محددة',
        en: 'file(s) selected'
      },
      multipleFilesSelected: {
        ar: 'تم تحديد عدة ملفات',
        en: 'Multiple files selected'
      },
      urlRequired: {
        ar: 'رابط الملف مطلوب',
        en: 'File URL is required'
      },
      fileOrUrlRequired: {
        ar: 'الملف أو الرابط مطلوب',
        en: 'File or URL is required'
      },
      inputMethod: {
        ar: 'طريقة الإدخال',
        en: 'Input Method'
      },
      enterUrl: {
        ar: 'أدخل الرابط',
        en: 'Enter URL'
      },
      fileUrl: {
        ar: 'رابط الملف',
        en: 'File URL'
      },
      enterFileUrl: {
        ar: 'أدخل رابط الملف (مثال: https://example.com/video.mp4)',
        en: 'Enter file URL (e.g., https://example.com/video.mp4)'
      },
      urlHint: {
        ar: 'أدخل رابطاً مباشراً لصورة أو فيديو أو مستند',
        en: 'Enter a direct link to an image, video, or document file'
      },
      assignToUser: {
        ar: 'تعيين للمستخدم',
        en: 'Assign to User'
      },
      selectUser: {
        ar: 'اختر المستخدم',
        en: 'Select User'
      },
      confirmDeleteAdvertisementMessage: {
        ar: 'هل أنت متأكد من حذف هذا الإعلان؟',
        en: 'Are you sure you want to delete this advertisement?'
      },
      assignedTo: {
        ar: 'معين إلى',
        en: 'Assigned To'
      },
      file: {
        ar: 'الملف',
        en: 'File'
      },
      dates: {
        ar: 'التواريخ',
        en: 'Dates'
      },
      editAdvertisement: {
        ar: 'تعديل الإعلان',
        en: 'Edit Advertisement'
      },
      errorLoadingAdvertisements: {
        ar: 'خطأ في تحميل الإعلانات',
        en: 'Error loading advertisements'
      },
      errorSavingAdvertisement: {
        ar: 'خطأ في حفظ الإعلان',
        en: 'Error saving advertisement'
      },
      image: {
        ar: 'صورة',
        en: 'Image'
      },
      video: {
        ar: 'فيديو',
        en: 'Video'
      },
      presentation: {
        ar: 'عرض تقديمي',
        en: 'Presentation'
      },
      document: {
        ar: 'مستند',
        en: 'Document'
      },
      expired: {
        ar: 'منتهي الصلاحية',
        en: 'Expired'
      },
      sidebar: {
        ar: 'شريط جانبي',
        en: 'Sidebar'
      },
      deactivate: {
        ar: 'إلغاء التفعيل',
        en: 'Deactivate'
      },
      activate: {
        ar: 'تفعيل',
        en: 'Activate'
      },
      clicks: {
        ar: 'النقرات',
        en: 'Clicks'
      },
      impressions: {
        ar: 'المشاهدات',
        en: 'Impressions'
      },
      noAdvertisementsFound: {
        ar: 'لم يتم العثور على إعلانات',
        en: 'No advertisements found'
      },
      // View Advertisements
      viewAdvertisements: {
        ar: 'عرض الإعلانات',
        en: 'View Advertisements'
      },
      manageAdvertisements: {
        ar: 'إدارة الإعلانات',
        en: 'Manage Advertisements'
      },
      filters: {
        ar: 'الفلاتر',
        en: 'Filters'
      },
      dateRange: {
        ar: 'نطاق التاريخ',
        en: 'Date Range'
      },
      allDates: {
        ar: 'جميع التواريخ',
        en: 'All Dates'
      },
      today: {
        ar: 'اليوم',
        en: 'Today'
      },
      thisWeek: {
        ar: 'هذا الأسبوع',
        en: 'This Week'
      },
      thisMonth: {
        ar: 'هذا الشهر',
        en: 'This Month'
      },
      totalImpressions: {
        ar: 'إجمالي المشاهدات',
        en: 'Total Impressions'
      },
      totalClicks: {
        ar: 'إجمالي النقرات',
        en: 'Total Clicks'
      },
      averageCTR: {
        ar: 'متوسط معدل النقر',
        en: 'Average CTR'
      },
      totalAdvertisements: {
        ar: 'إجمالي الإعلانات',
        en: 'Total Advertisements'
      },
      advertisementsList: {
        ar: 'قائمة الإعلانات',
        en: 'Advertisements List'
      },
      export: {
        ar: 'تصدير',
        en: 'Export'
      },
      print: {
        ar: 'طباعة',
        en: 'Print'
      },
      ctr: {
        ar: 'معدل النقر',
        en: 'CTR'
      },
      viewDetails: {
        ar: 'عرض التفاصيل',
        en: 'View Details'
      },
      // Advertising Banner
      advertisingBanner: {
        ar: 'إدارة الشريط الإعلاني',
        en: 'Advertising Banner Management'
      },
      addNewBanner: {
        ar: 'إضافة إعلان جديد',
        en: 'Add New Banner'
      },
      bannerTitle: {
        ar: 'عنوان الإعلان',
        en: 'Banner Title'
      },
      bannerDescription: {
        ar: 'وصف الإعلان',
        en: 'Banner Description'
      },
      enterBannerTitle: {
        ar: 'أدخل عنوان الإعلان',
        en: 'Enter banner title'
      },
      enterBannerDescription: {
        ar: 'أدخل وصف الإعلان',
        en: 'Enter banner description'
      },
      enterPriority: {
        ar: '1-10',
        en: '1-10'
      },
      addBanner: {
        ar: 'إضافة الإعلان',
        en: 'Add Banner'
      },
      searchBanners: {
        ar: 'البحث في الإعلانات...',
        en: 'Search banners...'
      },
      totalBanners: {
        ar: 'إجمالي الإعلانات',
        en: 'Total Banners'
      },
      from: {
        ar: 'من',
        en: 'From'
      },
      to: {
        ar: 'إلى',
        en: 'To'
      },
      noBannersFound: {
        ar: 'لا توجد إعلانات مطابقة للبحث',
        en: 'No banners found matching search'
      },
      // Sections
      sections: {
        ar: 'الأقسام',
        en: 'Sections'
      },
      addSection: {
        ar: 'إضافة قسم',
        en: 'Add Section'
      },
      editSection: {
        ar: 'تعديل قسم',
        en: 'Edit Section'
      },
      addNewSection: {
        ar: 'إضافة قسم جديد',
        en: 'Add New Section'
      },
      sectionName: {
        ar: 'اسم القسم',
        en: 'Section Name'
      },
      sectionCode: {
        ar: 'رمز القسم',
        en: 'Section Code'
      },
      sectionType: {
        ar: 'نوع القسم',
        en: 'Section Type'
      },
      sectionStatus: {
        ar: 'حالة القسم',
        en: 'Section Status'
      },
      enterSectionName: {
        ar: 'أدخل اسم القسم',
        en: 'Enter section name'
      },
      enterSectionCode: {
        ar: 'أدخل رمز القسم',
        en: 'Enter section code'
      },
      enterSectionDescription: {
        ar: 'أدخل وصف القسم',
        en: 'Enter section description'
      },
      selectSectionType: {
        ar: 'أدخل نوع القسم',
        en: 'Enter section type'
      },
      sectionNameRequired: {
        ar: 'اسم القسم مطلوب',
        en: 'Section name is required'
      },
      sectionCodeRequired: {
        ar: 'رمز القسم مطلوب',
        en: 'Section code is required'
      },
      sectionTypeRequired: {
        ar: 'نوع القسم مطلوب',
        en: 'Section type is required'
      },
      saveSection: {
        ar: 'حفظ القسم',
        en: 'Save Section'
      },
      sectionsList: {
        ar: 'قائمة الأقسام',
        en: 'Sections List'
      },
      noSectionsFound: {
        ar: 'لم يتم العثور على أقسام',
        en: 'No sections found'
      },
      showSectionsList: {
        ar: 'عرض قائمة الأقسام',
        en: 'Show Sections List'
      },
      sectionUpdatedSuccessfully: {
        ar: 'تم تحديث القسم بنجاح!',
        en: 'Section updated successfully!'
      },
      sectionAddedSuccessfully: {
        ar: 'تم إضافة القسم بنجاح!',
        en: 'Section added successfully!'
      },
      createdDate: {
        ar: 'تاريخ الإنشاء',
        en: 'Created Date'
      },
      residential: {
        ar: 'سكني',
        en: 'Residential'
      },
      commercial: {
        ar: 'تجاري',
        en: 'Commercial'
      },
      industrial: {
        ar: 'صناعي',
        en: 'Industrial'
      },
      mixed: {
        ar: 'مختلط',
        en: 'Mixed'
      },
      underConstruction: {
        ar: 'قيد الإنشاء',
        en: 'Under Construction'
      },
      // Special Divisions
      specialDivisions: {
        ar: 'الأقسام الخاصة',
        en: 'Special Divisions'
      },
      addSpecialDivision: {
        ar: 'إضافة قسم خاص',
        en: 'Add Special Division'
      },
      editSpecialDivision: {
        ar: 'تعديل قسم خاص',
        en: 'Edit Special Division'
      },
      addNewSpecialDivision: {
        ar: 'إضافة قسم خاص جديد',
        en: 'Add New Special Division'
      },
      divisionName: {
        ar: 'اسم القسم الخاص',
        en: 'Special Division Name'
      },
      divisionCode: {
        ar: 'رمز القسم الخاص',
        en: 'Special Division Code'
      },
      enterDivisionName: {
        ar: 'أدخل اسم القسم الخاص',
        en: 'Enter special division name'
      },
      enterDivisionCode: {
        ar: 'أدخل رمز القسم الخاص',
        en: 'Enter special division code'
      },
      enterDivisionDescription: {
        ar: 'أدخل وصف القسم الخاص',
        en: 'Enter special division description'
      },
      selectCategory: {
        ar: 'أدخل الفئة',
        en: 'Enter category'
      },
      divisionNameRequired: {
        ar: 'اسم القسم الخاص مطلوب',
        en: 'Special division name is required'
      },
      divisionCodeRequired: {
        ar: 'رمز القسم الخاص مطلوب',
        en: 'Special division code is required'
      },
      categoryRequired: {
        ar: 'الفئة مطلوبة',
        en: 'Category is required'
      },
      government: {
        ar: 'حكومي',
        en: 'Government'
      },
      educational: {
        ar: 'تعليمي',
        en: 'Educational'
      },
      healthcare: {
        ar: 'صحي',
        en: 'Healthcare'
      },
      religious: {
        ar: 'ديني',
        en: 'Religious'
      },
      recreational: {
        ar: 'ترفيهي',
        en: 'Recreational'
      },
      saveDivision: {
        ar: 'حفظ القسم الخاص',
        en: 'Save Special Division'
      },
      searchDivisions: {
        ar: 'البحث في الأقسام الخاصة',
        en: 'Search special divisions'
      },
      specialDivisionsList: {
        ar: 'قائمة الأقسام الخاصة',
        en: 'Special Divisions List'
      },
      noDivisionsFound: {
        ar: 'لم يتم العثور على أقسام خاصة',
        en: 'No special divisions found'
      },
      showDivisionsList: {
        ar: 'عرض قائمة الأقسام',
        en: 'Show Divisions List'
      },
      divisionUpdatedSuccessfully: {
        ar: 'تم تحديث القسم بنجاح!',
        en: 'Division updated successfully!'
      },
      divisionAddedSuccessfully: {
        ar: 'تم إضافة القسم بنجاح!',
        en: 'Division added successfully!'
      },
      // Users and Permissions
      usersAndPermissions: {
        ar: 'إدارة المستخدمين والصلاحيات',
        en: 'Users and Permissions Management'
      },
      addNewUser: {
        ar: 'إضافة مستخدم جديد',
        en: 'Add New User'
      },
      userName: {
        ar: 'اسم المستخدم',
        en: 'User Name'
      },
      enterUserName: {
        ar: 'أدخل اسم المستخدم',
        en: 'Enter user name'
      },
      enterEmail: {
        ar: 'أدخل البريد الإلكتروني',
        en: 'Enter email'
      },
      password: {
        ar: 'كلمة المرور',
        en: 'Password'
      },
      enterPassword: {
        ar: 'أدخل كلمة المرور',
        en: 'Enter password'
      },
      enterPasswordToChange: {
        ar: 'أدخل كلمة المرور الجديدة لتغييرها',
        en: 'Enter new password to change'
      },
      passwordRequired: {
        ar: 'كلمة المرور مطلوبة',
        en: 'Password is required'
      },
      passwordMinLength: {
        ar: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
        en: 'Password must be at least 6 characters'
      },
      leavePasswordEmptyToKeepCurrent: {
        ar: 'اتركه فارغاً للاحتفاظ بالكلمة الحالية',
        en: 'Leave empty to keep current password'
      },
      role: {
        ar: 'الصلاحية',
        en: 'Role'
      },
      permissions: {
        ar: 'الصلاحيات',
        en: 'Permissions'
      },
      addUser: {
        ar: 'إضافة المستخدم',
        en: 'Add User'
      },
      searchUsers: {
        ar: 'البحث في المستخدمين...',
        en: 'Search users...'
      },
      allRoles: {
        ar: 'جميع الصلاحيات',
        en: 'All Roles'
      },
      totalUsers: {
        ar: 'إجمالي المستخدمين',
        en: 'Total Users'
      },
      lastLogin: {
        ar: 'آخر تسجيل دخول',
        en: 'Last Login'
      },
      noUsersFound: {
        ar: 'لا توجد مستخدمين مطابقين للبحث',
        en: 'No users found matching search'
      },
      user: {
        ar: 'المستخدم',
        en: 'User'
      },
      manager: {
        ar: 'مدير',
        en: 'Manager'
      },
      // For demo credentials display (with colon)
      managerLabel: {
        ar: 'مدير:',
        en: 'Manager:'
      },
      userLabel: {
        ar: 'مستخدم:',
        en: 'User:'
      },
      admin: {
        ar: 'مدير النظام',
        en: 'System Admin'
      },
      // Screen Regions & Schedules
      screenRegions: {
        ar: 'مناطق الشاشة',
        en: 'Screen Regions'
      },
      setupScreenRegions: {
        ar: 'قسّم شاشتك إلى مناطق متعددة لتشغيل إعلانات مختلفة في نفس الوقت',
        en: 'Divide your screen into multiple areas to play different advertisements simultaneously'
      },
      regionType: {
        ar: 'نوع المنطقة',
        en: 'Region Type'
      },
      leftRight: {
        ar: 'يسار / يمين',
        en: 'Left / Right'
      },
      topBottom: {
        ar: 'أعلى / أسفل',
        en: 'Top / Bottom'
      },
      createRegions: {
        ar: 'إنشاء المناطق',
        en: 'Create Regions'
      },
      assignToRegion: {
        ar: 'تعيين إلى المنطقة',
        en: 'Assign to Region'
      },
      noRegion: {
        ar: 'لا توجد منطقة',
        en: 'No Region'
      },
      position: {
        ar: 'الموضع',
        en: 'Position'
      },
      regionsCreated: {
        ar: 'تم إنشاء مناطق الشاشة بنجاح',
        en: 'Screen regions created successfully'
      },
      errorCreatingRegions: {
        ar: 'خطأ في إنشاء المناطق',
        en: 'Error creating regions'
      },
      advertisementSchedule: {
        ar: 'جدولة الإعلان',
        en: 'Advertisement Schedule'
      },
      editSchedule: {
        ar: 'تعديل الجدول',
        en: 'Edit Schedule'
      },
      scheduleSaved: {
        ar: 'تم حفظ الجدول بنجاح',
        en: 'Schedule saved successfully'
      },
      errorSavingSchedule: {
        ar: 'خطأ في حفظ الجدول',
        en: 'Error saving schedule'
      },
      scheduleDeleted: {
        ar: 'تم حذف الجدول بنجاح',
        en: 'Schedule deleted successfully'
      },
      errorDeletingSchedule: {
        ar: 'خطأ في حذف الجدول',
        en: 'Error deleting schedule'
      },
      confirmDeleteSchedule: {
        ar: 'هل أنت متأكد من حذف هذا الجدول؟',
        en: 'Are you sure you want to delete this schedule?'
      },
      priorityHint: {
        ar: 'الإعلانات ذات الأولوية الأعلى ستُشغل أولاً',
        en: 'Higher priority advertisements will play first'
      },
      left: {
        ar: 'يسار',
        en: 'Left'
      },
      right: {
        ar: 'يمين',
        en: 'Right'
      },
      top: {
        ar: 'أعلى',
        en: 'Top'
      },
      bottom: {
        ar: 'أسفل',
        en: 'Bottom'
      },
      upcoming: {
        ar: 'قادم',
        en: 'Upcoming'
      },
      ended: {
        ar: 'انتهى',
        en: 'Ended'
      },
      noAdvertisementAssigned: {
        ar: 'لا يوجد إعلان مخصص لهذا القسم',
        en: 'No advertisement assigned to this division'
      },
      screenPreview: {
        ar: 'معاينة الشاشة',
        en: 'Screen Preview'
      },
      dashboard: {
        ar: 'لوحة التحكم',
        en: 'Dashboard'
      },
      dashboardOverview: {
        ar: 'نظرة عامة كاملة على نظامك',
        en: 'Complete overview of your system'
      },
      statistics: {
        ar: 'الإحصائيات',
        en: 'Statistics'
      },
      recentScreens: {
        ar: 'الشاشات الأخيرة',
        en: 'Recent Screens'
      },
      recentAdvertisements: {
        ar: 'الإعلانات الأخيرة',
        en: 'Recent Advertisements'
      },
      systemStatus: {
        ar: 'حالة النظام',
        en: 'System Status'
      },
      viewAll: {
        ar: 'عرض الكل',
        en: 'View All'
      },
      noScreens: {
        ar: 'لم يتم العثور على شاشات',
        en: 'No screens found'
      },
      noAdvertisements: {
        ar: 'لم يتم العثور على إعلانات',
        en: 'No advertisements found'
      },
      addScreen: {
        ar: 'إضافة شاشة',
        en: 'Add Screen'
      },
      scanDevices: {
        ar: 'فحص الأجهزة',
        en: 'Scan Devices'
      },
      playbackControl: {
        ar: 'التحكم في التشغيل',
        en: 'Playback Control'
      },
      sendNotification: {
        ar: 'إرسال إشعار',
        en: 'Send Notification'
      },
      manageLocations: {
        ar: 'إدارة المواقع',
        en: 'Manage Locations'
      },
      dashboardTotalScreens: {
        ar: 'إجمالي الشاشات',
        en: 'Total Screens'
      },
      dashboardOnlineScreens: {
        ar: 'الشاشات المتصلة',
        en: 'Online Screens'
      },
      dashboardPlayingScreens: {
        ar: 'الشاشات قيد التشغيل',
        en: 'Playing Screens'
      },
      dashboardAdvertisements: {
        ar: 'الإعلانات',
        en: 'Advertisements'
      },
      dashboardActiveAdvertisements: {
        ar: 'الإعلانات النشطة',
        en: 'Active Advertisements'
      },
      dashboardLocations: {
        ar: 'المواقع',
        en: 'Locations'
      },
      dashboardSections: {
        ar: 'الأقسام',
        en: 'Sections'
      },
      dashboardNotifications: {
        ar: 'الإشعارات',
        en: 'Notifications'
      },
      dashboardUsersPermissions: {
        ar: 'المستخدمون والصلاحيات',
        en: 'Users & Permissions'
      },
      noNews: {
        ar: 'لا توجد أخبار حالياً',
        en: 'No news available'
      },
      locations: {
        ar: 'المواقع',
        en: 'Locations'
      },
      users: {
        ar: 'المستخدمون',
        en: 'Users'
      },
      // WhatsApp Messages
      whatsappMessages: {
        ar: 'رسائل واتساب',
        en: 'WhatsApp Messages'
      },
      sendNewMessage: {
        ar: 'إرسال رسالة جديدة',
        en: 'Send New Message'
      },
      individual: {
        ar: 'فردي',
        en: 'Individual'
      },
      bulk: {
        ar: 'جماعي',
        en: 'Bulk'
      },
      sendMode: {
        ar: 'وضع الإرسال',
        en: 'Send Mode'
      },
      selectTemplate: {
        ar: 'اختر القالب',
        en: 'Select Template'
      },
      enterVariableValue: {
        ar: 'أدخل قيمة المتغير',
        en: 'Enter variable value'
      },
      selectUsers: {
        ar: 'اختر المستخدمين',
        en: 'Select Users'
      },
      sendToAllUsers: {
        ar: 'إرسال لجميع المستخدمين',
        en: 'Send to All Users'
      },
      selectedUsers: {
        ar: 'المستخدمون المحددون',
        en: 'Selected Users'
      },
      errorLoadingMessages: {
        ar: 'خطأ في تحميل الرسائل',
        en: 'Error loading messages'
      },
      errorSendingMessages: {
        ar: 'خطأ في إرسال الرسائل',
        en: 'Error sending messages'
      },
      messagesSent: {
        ar: 'الرسائل المرسلة',
        en: 'Messages Sent'
      },
      messagesFailed: {
        ar: 'الرسائل الفاشلة',
        en: 'Messages Failed'
      },
      recipient: {
        ar: 'المستقبل',
        en: 'Recipient'
      },
      messageContent: {
        ar: 'محتوى الرسالة',
        en: 'Message Content'
      },
      noMessagesFound: {
        ar: 'لا توجد رسائل',
        en: 'No messages found'
      },
      resend: {
        ar: 'إعادة إرسال',
        en: 'Resend'
      },
      totalMessages: {
        ar: 'إجمالي الرسائل',
        en: 'Total Messages'
      },
      phoneNumber: {
        ar: 'رقم الهاتف',
        en: 'Phone Number'
      },
      recipientName: {
        ar: 'اسم المستلم',
        en: 'Recipient Name'
      },
      recipientNameOptional: {
        ar: 'اسم المستلم (اختياري)',
        en: 'Recipient Name (Optional)'
      },
      messageType: {
        ar: 'نوع الرسالة',
        en: 'Message Type'
      },
      templateName: {
        ar: 'اسم القالب',
        en: 'Template Name'
      },
      messageText: {
        ar: 'نص الرسالة',
        en: 'Message Text'
      },
      enterMessageText: {
        ar: 'أدخل نص الرسالة',
        en: 'Enter message text'
      },
      sendMessage: {
        ar: 'إرسال الرسالة',
        en: 'Send Message'
      },
      searchMessages: {
        ar: 'البحث في الرسائل...',
        en: 'Search messages...'
      },
      welcomeMessage: {
        ar: 'رسالة أهلاً بك',
        en: 'Welcome Message'
      },
      reminder: {
        ar: 'تذكير',
        en: 'Reminder'
      },
      send: {
        ar: 'إرسال',
        en: 'Send'
      },
      // WhatsApp Templates
      whatsappTemplates: {
        ar: 'قوالب واتساب',
        en: 'WhatsApp Templates'
      },
      addTemplate: {
        ar: 'إضافة قالب',
        en: 'Add Template'
      },
      addNewTemplate: {
        ar: 'إضافة قالب جديد',
        en: 'Add New Template'
      },
      enterTemplateName: {
        ar: 'أدخل اسم القالب',
        en: 'Enter template name'
      },
      templateNameRequired: {
        ar: 'اسم القالب مطلوب',
        en: 'Template name is required'
      },
      templateContent: {
        ar: 'محتوى القالب',
        en: 'Template Content'
      },
      enterTemplateContent: {
        ar: 'أدخل محتوى القالب',
        en: 'Enter template content'
      },
      templateContentRequired: {
        ar: 'محتوى القالب مطلوب',
        en: 'Template content is required'
      },
      templateVariablesInfo: {
        ar: 'استخدم {{variableName}} لإضافة متغيرات ديناميكية. مثال: {{name}} أو {{date}}',
        en: 'Use {{variableName}} to add dynamic variables. Example: {{name}} or {{date}}'
      },
      saveTemplate: {
        ar: 'حفظ القالب',
        en: 'Save Template'
      },
      editTemplate: {
        ar: 'تعديل القالب',
        en: 'Edit Template'
      },
      searchTemplates: {
        ar: 'البحث في القوالب...',
        en: 'Search templates...'
      },
      templates: {
        ar: 'القوالب',
        en: 'Templates'
      },
      variables: {
        ar: 'المتغيرات',
        en: 'Variables'
      },
      usage: {
        ar: 'استخدام القالب',
        en: 'Template Usage'
      },
      lastUsed: {
        ar: 'آخر استخدام',
        en: 'Last Used'
      },
      never: {
        ar: 'أبداً',
        en: 'Never'
      },
      noTemplatesFound: {
        ar: 'لا توجد قوالب مطابقة للبحث',
        en: 'No templates found matching search'
      },
      errorLoadingTemplates: {
        ar: 'خطأ في تحميل القوالب',
        en: 'Error loading templates'
      },
      errorCreatingTemplate: {
        ar: 'خطأ في إنشاء القالب',
        en: 'Error creating template'
      },
      errorUpdatingTemplate: {
        ar: 'خطأ في تحديث القالب',
        en: 'Error updating template'
      },
      errorDeletingTemplate: {
        ar: 'خطأ في حذف القالب',
        en: 'Error deleting template'
      },
      // Sidebar specific
      screeningSystem: {
        ar: 'نظام التصفية',
        en: 'Screening System'
      },
      expandSidebar: {
        ar: 'توسيع الشريط الجانبي',
        en: 'Expand Sidebar'
      },
      collapseSidebar: {
        ar: 'طي الشريط الجانبي',
        en: 'Collapse Sidebar'
      },
      adminUser: {
        ar: 'المستخدم المسؤول',
        en: 'Admin User'
      },
      systemAdministrator: {
        ar: 'مدير النظام',
        en: 'System Administrator'
      },
      systemSettings: {
        ar: 'إعدادات النظام',
        en: 'System Settings'
      },
      systemLogs: {
        ar: 'سجلات النظام',
        en: 'System Logs'
      },
      searchLogs: {
        ar: 'البحث في السجلات...',
        en: 'Search logs...'
      },
      allLevels: {
        ar: 'جميع المستويات',
        en: 'All Levels'
      },
      allModules: {
        ar: 'جميع الوحدات',
        en: 'All Modules'
      },
      allActions: {
        ar: 'جميع الإجراءات',
        en: 'All Actions'
      },
      totalLogs: {
        ar: 'إجمالي السجلات',
        en: 'Total Logs'
      },
      noLogsFound: {
        ar: 'لا توجد سجلات',
        en: 'No logs found'
      },
      errorLoadingLogs: {
        ar: 'خطأ في تحميل السجلات',
        en: 'Error loading logs'
      },
      confirmDeleteLogMessage: {
        ar: 'هل أنت متأكد من حذف هذا السجل؟',
        en: 'Are you sure you want to delete this log entry?'
      },
      level: {
        ar: 'المستوى',
        en: 'Level'
      },
      module: {
        ar: 'الوحدة',
        en: 'Module'
      },
      action: {
        ar: 'الإجراء',
        en: 'Action'
      },
      debug: {
        ar: 'تصحيح',
        en: 'Debug'
      },
      // Notification Channel Configuration
      emailConfiguration: {
        ar: 'إعدادات البريد الإلكتروني',
        en: 'Email Configuration'
      },
      emailConfigurationDescription: {
        ar: 'قم بتكوين إعدادات SMTP لإرسال الإشعارات عبر البريد الإلكتروني',
        en: 'Configure SMTP settings to send notifications via email'
      },
      smsConfiguration: {
        ar: 'إعدادات الرسائل النصية',
        en: 'SMS Configuration'
      },
      smsConfigurationDescription: {
        ar: 'قم بتكوين مزود SMS لإرسال الإشعارات عبر الرسائل النصية',
        en: 'Configure SMS provider to send notifications via SMS'
      },
      pushConfiguration: {
        ar: 'إعدادات الإشعارات الفورية',
        en: 'Push Notification Configuration'
      },
      pushConfigurationDescription: {
        ar: 'قم بتكوين خدمة الإشعارات الفورية لإرسال الإشعارات إلى الأجهزة المحمولة',
        en: 'Configure push notification service to send notifications to mobile devices'
      },
      whatsappConfiguration: {
        ar: 'إعدادات واتساب',
        en: 'WhatsApp Configuration'
      },
      whatsappConfigurationDescription: {
        ar: 'قم بتكوين واتساب لإرسال الإشعارات عبر واتساب',
        en: 'Configure WhatsApp to send notifications via WhatsApp'
      },
      enableEmailNotifications: {
        ar: 'تفعيل إشعارات البريد الإلكتروني',
        en: 'Enable Email Notifications'
      },
      enableSMSNotifications: {
        ar: 'تفعيل إشعارات الرسائل النصية',
        en: 'Enable SMS Notifications'
      },
      enablePushNotifications: {
        ar: 'تفعيل الإشعارات الفورية',
        en: 'Enable Push Notifications'
      },
      enableWhatsAppNotifications: {
        ar: 'تفعيل إشعارات واتساب',
        en: 'Enable WhatsApp Notifications'
      },
      smtpHost: {
        ar: 'خادم SMTP',
        en: 'SMTP Host'
      },
      smtpPort: {
        ar: 'منفذ SMTP',
        en: 'SMTP Port'
      },
      smtpUsername: {
        ar: 'اسم مستخدم SMTP',
        en: 'SMTP Username'
      },
      smtpPassword: {
        ar: 'كلمة مرور SMTP',
        en: 'SMTP Password'
      },
      fromEmail: {
        ar: 'البريد الإلكتروني المرسل',
        en: 'From Email'
      },
      fromName: {
        ar: 'اسم المرسل',
        en: 'From Name'
      },
      useSecureConnection: {
        ar: 'استخدام اتصال آمن',
        en: 'Use Secure Connection'
      },
      smtpHostRequired: {
        ar: 'خادم SMTP مطلوب',
        en: 'SMTP host is required'
      },
      smtpPortRequired: {
        ar: 'منفذ SMTP مطلوب',
        en: 'SMTP port is required'
      },
      smtpUsernameRequired: {
        ar: 'اسم مستخدم SMTP مطلوب',
        en: 'SMTP username is required'
      },
      smtpPasswordRequired: {
        ar: 'كلمة مرور SMTP مطلوبة',
        en: 'SMTP password is required'
      },
      fromEmailRequired: {
        ar: 'البريد الإلكتروني المرسل مطلوب',
        en: 'From email is required'
      },
      fromNameRequired: {
        ar: 'اسم المرسل مطلوب',
        en: 'From name is required'
      },
      smsProvider: {
        ar: 'مزود SMS',
        en: 'SMS Provider'
      },
      pushProvider: {
        ar: 'مزود الإشعارات الفورية',
        en: 'Push Provider'
      },
      whatsappProvider: {
        ar: 'مزود واتساب',
        en: 'WhatsApp Provider'
      },
      selectProvider: {
        ar: 'اختر المزود',
        en: 'Select Provider'
      },
      apiKey: {
        ar: 'مفتاح API',
        en: 'API Key'
      },
      apiSecret: {
        ar: 'سر API',
        en: 'API Secret'
      },
      senderId: {
        ar: 'معرف المرسل',
        en: 'Sender ID'
      },
      serverKey: {
        ar: 'مفتاح الخادم',
        en: 'Server Key'
      },
      projectId: {
        ar: 'معرف المشروع',
        en: 'Project ID'
      },
      serviceAccount: {
        ar: 'حساب الخدمة',
        en: 'Service Account'
      },
      phoneNumberId: {
        ar: 'معرف رقم الهاتف',
        en: 'Phone Number ID'
      },
      businessAccountId: {
        ar: 'معرف حساب الأعمال',
        en: 'Business Account ID'
      },
      smsProviderRequired: {
        ar: 'مزود SMS مطلوب',
        en: 'SMS provider is required'
      },
      pushProviderRequired: {
        ar: 'مزود الإشعارات الفورية مطلوب',
        en: 'Push provider is required'
      },
      whatsappProviderRequired: {
        ar: 'مزود واتساب مطلوب',
        en: 'WhatsApp provider is required'
      },
      apiKeyRequired: {
        ar: 'مفتاح API مطلوب',
        en: 'API key is required'
      },
      apiSecretRequired: {
        ar: 'سر API مطلوب',
        en: 'API secret is required'
      },
      senderIdRequired: {
        ar: 'معرف المرسل مطلوب',
        en: 'Sender ID is required'
      },
      serverKeyRequired: {
        ar: 'مفتاح الخادم مطلوب',
        en: 'Server key is required'
      },
      projectIdRequired: {
        ar: 'معرف المشروع مطلوب',
        en: 'Project ID is required'
      },
      phoneNumberIdRequired: {
        ar: 'معرف رقم الهاتف مطلوب',
        en: 'Phone number ID is required'
      },
      businessAccountIdRequired: {
        ar: 'معرف حساب الأعمال مطلوب',
        en: 'Business account ID is required'
      },
      serviceAccountPlaceholder: {
        ar: 'أدخل JSON لحساب الخدمة (اختياري)',
        en: 'Enter service account JSON (optional)'
      },
      testConfiguration: {
        ar: 'اختبار الإعدادات',
        en: 'Test Configuration'
      },
      saveConfiguration: {
        ar: 'حفظ الإعدادات',
        en: 'Save Configuration'
      },
      configurationSaved: {
        ar: 'تم حفظ الإعدادات بنجاح',
        en: 'Configuration saved successfully'
      },
      errorSavingConfiguration: {
        ar: 'خطأ في حفظ الإعدادات',
        en: 'Error saving configuration'
      },
      errorTestingConfiguration: {
        ar: 'خطأ في اختبار الإعدادات',
        en: 'Error testing configuration'
      },
      other: {
        ar: 'أخرى',
        en: 'Other'
      },
      cloudStorage: {
        ar: 'التخزين السحابي',
        en: 'Cloud Storage'
      },
      cloudStorageConfiguration: {
        ar: 'إعدادات التخزين السحابي',
        en: 'Cloud Storage Configuration'
      },
      cloudStorageConfigurationDescription: {
        ar: 'قم بتكوين مزود التخزين السحابي لرفع الملفات (الصور، الفيديو، العروض التقديمية، المستندات)',
        en: 'Configure cloud storage provider for file uploads (images, videos, presentations, documents)'
      },
      enableCloudStorage: {
        ar: 'تفعيل التخزين السحابي',
        en: 'Enable Cloud Storage'
      },
      cloudStorageProvider: {
        ar: 'مزود التخزين السحابي',
        en: 'Cloud Storage Provider'
      },
      cloudStorageProviderRequired: {
        ar: 'مزود التخزين السحابي مطلوب',
        en: 'Cloud storage provider is required'
      },
      localStorage: {
        ar: 'التخزين المحلي',
        en: 'Local Storage'
      },
      awsS3Configuration: {
        ar: 'إعدادات AWS S3',
        en: 'AWS S3 Configuration'
      },
      awsAccessKeyId: {
        ar: 'معرف مفتاح الوصول AWS',
        en: 'AWS Access Key ID'
      },
      awsSecretAccessKey: {
        ar: 'مفتاح الوصول السري AWS',
        en: 'AWS Secret Access Key'
      },
      awsRegion: {
        ar: 'منطقة AWS',
        en: 'AWS Region'
      },
      awsBucket: {
        ar: 'دلو AWS',
        en: 'AWS Bucket'
      },
      googleCloudStorageConfiguration: {
        ar: 'إعدادات Google Cloud Storage',
        en: 'Google Cloud Storage Configuration'
      },
      gcsProjectId: {
        ar: 'معرف المشروع GCS',
        en: 'GCS Project ID'
      },
      gcsBucket: {
        ar: 'دلو GCS',
        en: 'GCS Bucket'
      },
      gcsKeyFile: {
        ar: 'ملف المفتاح GCS',
        en: 'GCS Key File'
      },
      gcsKeyFilePlaceholder: {
        ar: 'الصق محتوى ملف المفتاح JSON هنا',
        en: 'Paste JSON key file content here'
      },
      azureBlobStorageConfiguration: {
        ar: 'إعدادات Azure Blob Storage',
        en: 'Azure Blob Storage Configuration'
      },
      azureAccountName: {
        ar: 'اسم حساب Azure',
        en: 'Azure Account Name'
      },
      azureAccountKey: {
        ar: 'مفتاح حساب Azure',
        en: 'Azure Account Key'
      },
      azureContainer: {
        ar: 'حاوية Azure',
        en: 'Azure Container'
      },
      azureAuthMethod: {
        ar: 'طريقة المصادقة',
        en: 'Authentication Method'
      },
      azureAccountKeyAuth: {
        ar: 'مفتاح الحساب',
        en: 'Account Key'
      },
      azureADAuth: {
        ar: 'Azure AD',
        en: 'Azure AD'
      },
      azureClientId: {
        ar: 'معرف العميل (Client ID)',
        en: 'Client ID'
      },
      azureTenantId: {
        ar: 'معرف المستأجر (Tenant ID)',
        en: 'Tenant ID'
      },
      azureClientSecret: {
        ar: 'سر العميل',
        en: 'Client Secret'
      },
      azureClientSecretHint: {
        ar: 'قم بإنشاء سر العميل من Azure Portal > App Registrations > Certificates & secrets',
        en: 'Create client secret from Azure Portal > App Registrations > Certificates & secrets'
      },
      localStorageConfiguration: {
        ar: 'إعدادات التخزين المحلي',
        en: 'Local Storage Configuration'
      },
      localUploadPath: {
        ar: 'مسار التحميل المحلي',
        en: 'Local Upload Path'
      },
      baseUrl: {
        ar: 'عنوان URL الأساسي',
        en: 'Base URL'
      },
      // Header specific
      toggleMenu: {
        ar: 'تبديل القائمة',
        en: 'Toggle Menu'
      },
      switchLanguage: {
        ar: 'تبديل اللغة',
        en: 'Switch Language'
      },
      recentNotifications: {
        ar: 'إشعارات حديثة',
        en: 'Recent Notifications'
      },
      viewAllNotifications: {
        ar: 'عرض جميع الإشعارات',
        en: 'View All Notifications'
      },
      userProfile: {
        ar: 'الملف الشخصي',
        en: 'User Profile'
      },
      profile: {
        ar: 'الملف الشخصي',
        en: 'Profile'
      },
      settings: {
        ar: 'الإعدادات',
        en: 'Settings'
      },
      logout: {
        ar: 'تسجيل الخروج',
        en: 'Logout'
      },
      // e Notices and Evaluation
      eNoticesAndEvaluation: {
        ar: 'الإشعارات الإلكترونية والتقييم',
        en: 'e Notices and Evaluation'
      },
      // Display Ads
      displayAds: {
        ar: 'الإعلانات المعروضة',
        en: 'Display Ads'
      },
      // Subsites
      subsites: {
        ar: 'المواقع الفرعية',
        en: 'Subsites'
      },
      // Notification Form
      nothingSelected: {
        ar: 'لا يوجد اختيار',
        en: 'Nothing Selected'
      },
      schedulingDate: {
        ar: 'تاريخ الجدولة',
        en: 'Scheduling Date'
      },
      schedulingTime: {
        ar: 'وقت الجدولة',
        en: 'Scheduling Time'
      },
      sendToAll: {
        ar: 'إرسال للجميع',
        en: 'Send to all'
      },
      notificationContent: {
        ar: 'محتوى الإشعار',
        en: 'Notification Content'
      },
      enterNotificationContent: {
        ar: 'أدخل محتوى الإشعار هنا...',
        en: 'Enter notification content here...'
      },
      important: {
        ar: 'مهم',
        en: 'Important'
      },
      section: {
        ar: 'القسم',
        en: 'Section'
      },
      assessmentManagement: {
        ar: 'إدارة التقييم',
        en: 'Assessment Management'
      },
      enterData: {
        ar: 'أدخل البيانات',
        en: 'Enter Data'
      },
      noRatings: {
        ar: 'لا توجد تقييمات',
        en: 'No Ratings'
      },
      clickToViewRatings: {
        ar: 'انقر لعرض التقييمات',
        en: 'Click to view ratings'
      },
      viewRatings: {
        ar: 'عرض التقييمات',
        en: 'View Ratings'
      },
      duplicate: {
        ar: 'تكرار',
        en: 'Duplicate'
      },
      first: {
        ar: 'الأول',
        en: 'First'
      },
      last: {
        ar: 'الأخير',
        en: 'Last'
      },
      // User Management
      configureUserAccountsAndPermissions: {
        ar: 'تكوين حسابات المستخدمين والصلاحيات',
        en: 'Configure User Accounts and Permissions'
      },
      modifiedSuccessfully: {
        ar: 'تم التعديل بنجاح',
        en: 'Modified successfully'
      },
      username: {
        ar: 'اسم المستخدم',
        en: 'Username'
      },
      phone1: {
        ar: 'رقم الهاتف 1',
        en: 'Phone 1'
      },
      phone2: {
        ar: 'رقم الهاتف 2',
        en: 'Phone 2'
      },
      enterUsername: {
        ar: 'أدخل اسم المستخدم',
        en: 'Enter username'
      },
      enterPhone1: {
        ar: 'أدخل رقم الهاتف 1',
        en: 'Enter phone 1'
      },
      enterSubMobileNo: {
        ar: 'أدخل رقم الهاتف الفرعي',
        en: 'Enter sub-mobile no'
      },
      selectSubsite: {
        ar: 'اختر الموقع الفرعي',
        en: 'Select subsite'
      },
      selectSection: {
        ar: 'اختر القسم',
        en: 'Select section'
      },
      selectSpecialDivision: {
        ar: 'اختر القسم الخاص',
        en: 'Select special division'
      },
      selectType: {
        ar: 'اختر النوع',
        en: 'Select type'
      },
      selectValidity: {
        ar: 'اختر الصلاحية',
        en: 'Select validity'
      },
      enterNotes: {
        ar: 'أدخل الملاحظات',
        en: 'Enter notes'
      },
      mainBranch: {
        ar: 'الفرع الرئيسي',
        en: 'Main Branch'
      },
      northBranch: {
        ar: 'الفرع الشمالي',
        en: 'North Branch'
      },
      eastBranch: {
        ar: 'الفرع الشرقي',
        en: 'East Branch'
      },
      corporateServices: {
        ar: 'الخدمات المالية',
        en: 'Corporate Services'
      },
      itDepartment: {
        ar: 'القسم التقني',
        en: 'IT Department'
      },
      hrDepartment: {
        ar: 'القسم الموارد البشرية',
        en: 'HR Department'
      },
      staff: {
        ar: 'الموظفون',
        en: 'Staff'
      },
      management: {
        ar: 'الإدارة',
        en: 'Management'
      },
      technical: {
        ar: 'التقني',
        en: 'Technical'
      },
      regularUser: {
        ar: 'المستخدم العادي',
        en: 'Regular User'
      },
      superUser: {
        ar: 'المستخدم المطور',
        en: 'Super User'
      },
      supervisor: {
        ar: 'المشرف',
        en: 'Supervisor'
      },
      coordinator: {
        ar: 'المنظم',
        en: 'Coordinator'
      },
      accountsAndAuthorizations: {
        ar: 'حسابات والصلاحيات',
        en: 'Accounts and Authorizations'
      },
      authorityToAddModifyAccounts: {
        ar: 'السلطة لإضافة وتعديل الحسابات',
        en: 'Authority to add and modify accounts'
      },
      authorityToViewAccounts: {
        ar: 'السلطة لعرض الحسابات',
        en: 'Authority to view accounts'
      },
      authorityToDeleteAccounts: {
        ar: 'السلطة لحذف الحسابات',
        en: 'Authority to delete accounts'
      },
      authorityToAddModifyAds: {
        ar: 'السلطة لإضافة وتعديل الإعلانات',
        en: 'Authority to add and modify ads'
      },
      authorityToDisplayAds: {
        ar: 'السلطة لعرض الإعلانات',
        en: 'Authority to display ads'
      },
      authorityToDeleteAds: {
        ar: 'السلطة لحذف الإعلانات',
        en: 'Authority to delete ads'
      },
      permissionToAddModifySites: {
        ar: 'الصلاحية لإضافة وتعديل المواقع',
        en: 'Permission to add and modify sites'
      },
      permissionToViewSites: {
        ar: 'الصلاحية لعرض المواقع',
        en: 'Permission to view sites'
      },
      permissionToDeleteSites: {
        ar: 'الصلاحية لحذف المواقع',
        en: 'Permission to delete sites'
      },
      otherPowers: {
        ar: 'الصلاحيات الأخرى',
        en: 'Other Powers'
      },
      notificationSendingPermission: {
        ar: 'الصلاحية لإرسال الإشعارات',
        en: 'Permission to send notifications'
      },
      notificationViewingPermission: {
        ar: 'الصلاحية لعرض الإشعارات',
        en: 'Permission to view notifications'
      },
      notificationDeletionPermission: {
        ar: 'الصلاحية لحذف الإشعارات',
        en: 'Permission to delete notifications'
      },
      editUser: {
        ar: 'تعديل المستخدم',
        en: 'Edit User'
      },
      showUserList: {
        ar: 'عرض قائمة المستخدمين',
        en: 'Show User List'
      },
      cancelAndShowList: {
        ar: 'إلغاء التعديل وعرض القائمة',
        en: 'Cancel and show list'
      },
      showing: {
        ar: 'عرض',
        en: 'Showing'
      },
      of: {
        ar: 'من',
        en: 'of'
      },
      itemsPerPage: {
        ar: 'عناصر في الصفحة',
        en: 'Items per page'
      },
      // Common form fields
      enterLocation: {
        ar: 'أدخل الموقع',
        en: 'Enter Location'
      },
      locationRequired: {
        ar: 'الموقع مطلوب',
        en: 'Location is required'
      },
      searchSections: {
        ar: 'البحث في الأقسام...',
        en: 'Search sections...'
      },
      // tryAdjustingFilters: { ar: 'جرب تعديل الفلاتر', en: 'Try adjusting filters' },
      //descriptionRequired: { ar: 'الوصف مطلوب', en: 'Description is required' },
      // Screens specific
      screens: {
        ar: 'الشاشات',
        en: 'Screens'
      },
      networkScanning: {
        ar: 'فحص الشبكة',
        en: 'Network Scanning'
      },
      screenManagement: {
        ar: 'إدارة الشاشات',
        en: 'Screen Management'
      },
      startScan: {
        ar: 'بدء الفحص',
        en: 'Start Scan'
      },
      scanning: {
        ar: 'جاري الفحص...',
        en: 'Scanning...'
      },
      scanningNetwork: {
        ar: 'جارٍ فحص الشبكة',
        en: 'Scanning Network'
      },
      scanningDescription: {
        ar: 'جارٍ البحث عن أجهزة Android TV على الشبكة',
        en: 'Searching for Android TV devices on the network'
      },
      discoveredDevices: {
        ar: 'الأجهزة المكتشفة',
        en: 'Discovered Devices'
      },
      noDevicesFound: {
        ar: 'لم يتم العثور على أجهزة',
        en: 'No devices found'
      },
      searchDevices: {
        ar: 'البحث في الأجهزة...',
        en: 'Search devices...'
      },
      register: {
        ar: 'تسجيل',
        en: 'Register'
      },
      registered: {
        ar: 'مسجل',
        en: 'Registered'
      },
      registerScreen: {
        ar: 'تسجيل الشاشة',
        en: 'Register Screen'
      },
      screenName: {
        ar: 'اسم الشاشة',
        en: 'Screen Name'
      },
      enterScreenName: {
        ar: 'أدخل اسم الشاشة',
        en: 'Enter screen name'
      },
      screenNameRequired: {
        ar: 'اسم الشاشة مطلوب',
        en: 'Screen name is required'
      },
      ipAddress: {
        ar: 'عنوان IP',
        en: 'IP Address'
      },
      macAddress: {
        ar: 'عنوان MAC',
        en: 'MAC Address'
      },
      lastSeen: {
        ar: 'آخر ظهور',
        en: 'Last Seen'
      },
      online: {
        ar: 'متصل',
        en: 'Online'
      },
      offline: {
        ar: 'غير متصل',
        en: 'Offline'
      },
      deviceInfo: {
        ar: 'معلومات الجهاز',
        en: 'Device Information'
      },
      screenRegisteredSuccessfully: {
        ar: 'تم تسجيل الشاشة بنجاح!',
        en: 'Screen registered successfully!'
      },
      comingSoon: {
        ar: 'قريباً',
        en: 'Coming Soon'
      },
      screenDashboard: {
        ar: 'لوحة تحكم الشاشات',
        en: 'Screen Dashboard'
      },
      screenList: {
        ar: 'قائمة الشاشات',
        en: 'Screen List'
      },
      screenGrouping: {
        ar: 'تجميع الشاشات',
        en: 'Screen Grouping'
      },
      createScreen: {
        ar: 'إنشاء شاشة',
        en: 'Create Screen'
      },
      addManualScreen: {
        ar: 'إضافة شاشة يدوياً',
        en: 'Add Manual Screen'
      },
      editScreen: {
        ar: 'تعديل الشاشة',
        en: 'Edit Screen'
      },
      screenCreatedSuccessfully: {
        ar: 'تم إنشاء الشاشة بنجاح',
        en: 'Screen created successfully'
      },
      screenUpdatedSuccessfully: {
        ar: 'تم تحديث الشاشة بنجاح',
        en: 'Screen updated successfully'
      },
      screenDeletedSuccessfully: {
        ar: 'تم حذف الشاشة بنجاح',
        en: 'Screen deleted successfully'
      },
      confirmDeleteScreen: {
        ar: 'هل أنت متأكد من حذف هذه الشاشة؟',
        en: 'Are you sure you want to delete this screen?'
      },
      resetScreen: {
        ar: 'إعادة تعيين الشاشة',
        en: 'Reset screen'
      },
      confirmResetScreen: {
        ar: 'إعادة تعيين هذه الشاشة؟ سيتم مسح جميع الجداول والإعلانات والمناطق المعينة. سيتم إنشاء منطقة واحدة ملء الشاشة. يساعد ذلك في منع تشغيل الفيديو الوهمي.',
        en: 'Reset this screen? All schedules, ad assignments, and regions will be cleared. A single full-screen region will be recreated. This helps prevent ghost video playback.'
      },
      screenResetSuccessfully: {
        ar: 'تم إعادة تعيين الشاشة بنجاح.',
        en: 'Screen reset successfully.'
      },
      resetScreenHelp: {
        ar: 'مسح جميع الجداول والإعلانات والمناطق لهذه الشاشة لمنع التشغيل الوهمي',
        en: 'Clear all schedules, ad assignments, and regions for this screen to prevent ghost playback'
      },
      totalScreens: {
        ar: 'إجمالي الشاشات',
        en: 'Total Screens'
      },
      onlineScreens: {
        ar: 'الشاشات المتصلة',
        en: 'Online Screens'
      },
      offlineScreens: {
        ar: 'الشاشات غير المتصلة',
        en: 'Offline Screens'
      },
      playingScreens: {
        ar: 'الشاشات قيد التشغيل',
        en: 'Playing Screens'
      },
      quickActions: {
        ar: 'إجراءات سريعة',
        en: 'Quick Actions'
      },
      scanNetwork: {
        ar: 'فحص الشبكة',
        en: 'Scan Network'
      },
      viewAllScreens: {
        ar: 'عرض جميع الشاشات',
        en: 'View All Screens'
      },
      manageGroups: {
        ar: 'إدارة المجموعات',
        en: 'Manage Groups'
      },
      backToList: {
        ar: 'العودة إلى القائمة',
        en: 'Back to List'
      },
      registeredScreens: {
        ar: 'الشاشات المسجلة',
        en: 'Registered Screens'
      },
      noScreensFound: {
        ar: 'لم يتم العثور على شاشات',
        en: 'No screens found'
      },
      screenGroup: {
        ar: 'مجموعة الشاشات',
        en: 'Screen Group'
      },
      group: {
        ar: 'المجموعة',
        en: 'Group'
      },
      createGroup: {
        ar: 'إنشاء مجموعة',
        en: 'Create Group'
      },
      groupName: {
        ar: 'اسم المجموعة',
        en: 'Group Name'
      },
      enterGroupName: {
        ar: 'أدخل اسم المجموعة',
        en: 'Enter group name'
      },
      confirmDeleteGroup: {
        ar: 'هل أنت متأكد من حذف هذه المجموعة؟',
        en: 'Are you sure you want to delete this group?'
      },
      locationAssignment: {
        ar: 'تعيين الموقع',
        en: 'Location Assignment'
      },
      userAssignment: {
        ar: 'تعيين المستخدم',
        en: 'User Assignment'
      },
      assignedUser: {
        ar: 'المستخدم المعين',
        en: 'Assigned User'
      },
      selectAdvertisements: {
        ar: 'اختر الإعلانات',
        en: 'Select Advertisements'
      },
      schedule: {
        ar: 'الجدولة',
        en: 'Schedule'
      },
      startTime: {
        ar: 'وقت البدء',
        en: 'Start Time'
      },
      endTime: {
        ar: 'وقت الانتهاء',
        en: 'End Time'
      },
      basicInformation: {
        ar: 'المعلومات الأساسية',
        en: 'Basic Information'
      },
      noGroupsAvailable: {
        ar: 'لا توجد مجموعات متاحة',
        en: 'No groups available'
      },
      noScreensAvailable: {
        ar: 'لا توجد شاشات متاحة',
        en: 'No screens available'
      },
      noSubsitesAvailable: {
        ar: 'لا توجد مواقع فرعية متاحة',
        en: 'No subsites available'
      },
      noSectionsAvailable: {
        ar: 'لا توجد أقسام متاحة',
        en: 'No sections available'
      },
      noSpecialDivisionsAvailable: {
        ar: 'لا توجد أقسام خاصة متاحة',
        en: 'No special divisions available'
      },
      noUsersAvailable: {
        ar: 'لا يوجد مستخدمون متاحون',
        en: 'No users available'
      },
      noAdvertisementsAvailable: {
        ar: 'لا توجد إعلانات متاحة',
        en: 'No advertisements available'
      },
      selected: {
        ar: 'محدد',
        en: 'selected'
      },
      availableScreens: {
        ar: 'الشاشات المتاحة',
        en: 'Available Screens'
      },
      dragScreensHere: {
        ar: 'اسحب الشاشات هنا',
        en: 'Drag screens here'
      },
      noGroupsCreated: {
        ar: 'لم يتم إنشاء مجموعات بعد',
        en: 'No groups created yet'
      },
      update: {
        ar: 'تحديث',
        en: 'Update'
      },
      create: {
        ar: 'إنشاء',
        en: 'Create'
      },
      // Screen Monitor & Playback
      screenMonitor: {
        ar: 'مراقب الشاشات',
        en: 'Screen Monitor'
      },
      monitorAndControlScreens: {
        ar: 'راقب و تحكم في جميع شاشاتك في الوقت الفعلي',
        en: 'Monitor and control all your screens in real-time'
      },
      selectScreenToMonitor: {
        ar: 'اختر شاشة',
        en: 'Select a Screen'
      },
      selectScreenFromLeft: {
        ar: 'اختر شاشة من اللوحة اليسرى لعرض حالتها والتحكم في التشغيل',
        en: 'Select a screen from the left panel to view its status and control playback'
      },
      currentlyPlaying: {
        ar: 'قيد التشغيل حالياً',
        en: 'Currently Playing'
      },
      noVideoPlaying: {
        ar: 'لا يوجد فيديو قيد التشغيل حالياً',
        en: 'No video is currently playing'
      },
      unknownVideo: {
        ar: 'فيديو غير معروف',
        en: 'Unknown Video'
      },
      playbackControls: {
        ar: 'أدوات التحكم في التشغيل',
        en: 'Playback Controls'
      },
      play: {
        ar: 'تشغيل',
        en: 'Play'
      },
      playFullScreen: {
        ar: 'تشغيل ملء الشاشة',
        en: 'Play Full Screen'
      },
      stop: {
        ar: 'إيقاف',
        en: 'Stop'
      },
      pause: {
        ar: 'إيقاف مؤقت',
        en: 'Pause'
      },
      resume: {
        ar: 'استئناف',
        en: 'Resume'
      },
      fullscreen: {
        ar: 'ملء الشاشة',
        en: 'Full Screen'
      },
      exitFullscreen: {
        ar: 'الخروج من ملء الشاشة',
        en: 'Exit Full Screen'
      },
      screenDetails: {
        ar: 'تفاصيل الشاشة',
        en: 'Screen Details'
      },
      lastConnected: {
        ar: 'آخر اتصال',
        en: 'Last Connected'
      },
      videoUrl: {
        ar: 'رابط الفيديو',
        en: 'Video URL'
      },
      startedAt: {
        ar: 'بدأ في',
        en: 'Started At'
      },
      pausedAt: {
        ar: 'تم الإيقاف المؤقت في',
        en: 'Paused At'
      },
      playing: {
        ar: 'قيد التشغيل',
        en: 'Playing'
      },
      paused: {
        ar: 'متوقف مؤقتاً',
        en: 'Paused'
      },
      videoPlaybackControl: {
        ar: 'التحكم في تشغيل الفيديو',
        en: 'Video Playback Control'
      },
      controlVideoPlayback: {
        ar: 'التحكم في تشغيل الفيديو على شاشاتك',
        en: 'Control video playback on your screens'
      },
      selectScreen: {
        ar: 'اختر الشاشة',
        en: 'Select Screen'
      },
      deviceId: {
        ar: 'معرف الجهاز',
        en: 'Device ID'
      },
      groupInformation: {
        ar: 'معلومات المجموعة',
        en: 'Group Information'
      },
      noGroupAssigned: {
        ar: 'لم يتم تعيين مجموعة',
        en: 'No group assigned'
      },
      locationInformation: {
        ar: 'معلومات الموقع',
        en: 'Location Information'
      },
      noLocationAssigned: {
        ar: 'لم يتم تعيين موقع',
        en: 'No location assigned'
      },
      assignedUsers: {
        ar: 'المستخدمون المعينون',
        en: 'Assigned Users'
      },
      noUserAssigned: {
        ar: 'لم يتم تعيين مستخدم',
        en: 'No user assigned'
      },
      noScheduleSet: {
        ar: 'لم يتم تعيين جدول',
        en: 'No schedule set'
      },
      displaySettings: {
        ar: 'إعدادات العرض',
        en: 'Display Settings'
      },
      orientation: {
        ar: 'الاتجاه',
        en: 'Orientation'
      },
      screenSize: {
        ar: 'حجم الشاشة',
        en: 'Screen Size'
      },
      landscape: {
        ar: 'أفقي',
        en: 'Landscape'
      },
      portrait: {
        ar: 'عمودي',
        en: 'Portrait'
      },
      auto: {
        ar: 'تلقائي',
        en: 'Auto'
      },
      small: {
        ar: 'صغير',
        en: 'Small'
      },
      large: {
        ar: 'كبير',
        en: 'Large'
      },
      custom: {
        ar: 'مخصص',
        en: 'Custom'
      },
      screenWidth: {
        ar: 'عرض الشاشة (بكسل)',
        en: 'Screen Width (px)'
      },
      screenHeight: {
        ar: 'ارتفاع الشاشة (بكسل)',
        en: 'Screen Height (px)'
      },
      enterCustomDimensions: {
        ar: 'أدخل أبعاد الشاشة المخصصة بالبكسل (مثال: 1024 × 245)',
        en: 'Enter custom screen dimensions in pixels (e.g., 1024 x 245)'
      },
      assignedAdvertisements: {
        ar: 'الإعلانات المعينة',
        en: 'Assigned Advertisements'
      },
      assigned: {
        ar: 'معين',
        en: 'Assigned'
      },
      View: {
        ar: 'عرض',
        en: 'View'
      },
      screenSettings: {
        ar: 'إعدادات الشاشة',
        en: 'Screen Settings'
      },
      advertisementDetails: {
        ar: 'تفاصيل الإعلان',
        en: 'Advertisement Details'
      },
      fileName: {
        ar: 'اسم الملف',
        en: 'File Name'
      },
      fileSize: {
        ar: 'حجم الملف',
        en: 'File Size'
      },
      mimeType: {
        ar: 'نوع MIME',
        en: 'MIME Type'
      },
      thumbnail: {
        ar: 'الصورة المصغرة',
        en: 'Thumbnail'
      },
      playOnScreen: {
        ar: 'تشغيل على الشاشة',
        en: 'Play on Screen'
      },
      selectAdvertisement: {
        ar: 'يرجى اختيار إعلان',
        en: 'Please select an advertisement'
      },
      videoPlaying: {
        ar: 'الفيديو قيد التشغيل',
        en: 'Video is playing'
      },
      playVideoFailed: {
        ar: 'فشل تشغيل الفيديو',
        en: 'Failed to play video'
      },
      videoPaused: {
        ar: 'تم إيقاف الفيديو مؤقتاً',
        en: 'Video is paused'
      },
      pauseVideoFailed: {
        ar: 'فشل إيقاف الفيديو مؤقتاً',
        en: 'Failed to pause video'
      },
      videoResumed: {
        ar: 'تم استئناف الفيديو',
        en: 'Video is resumed'
      },
      resumeVideoFailed: {
        ar: 'فشل استئناف الفيديو',
        en: 'Failed to resume video'
      },
      confirmStopVideo: {
        ar: 'إيقاف الفيديو',
        en: 'Stop Video'
      },
      confirmStopVideoMessage: {
        ar: 'هل أنت متأكد من إيقاف الفيديو؟',
        en: 'Are you sure you want to stop the video?'
      },
      videoStopped: {
        ar: 'تم إيقاف الفيديو',
        en: 'Video is stopped'
      },
      stopVideoFailed: {
        ar: 'فشل إيقاف الفيديو',
        en: 'Failed to stop video'
      },
      settingsUpdated: {
        ar: 'تم تحديث إعدادات الشاشة بنجاح',
        en: 'Screen settings updated successfully'
      },
      ipUpdated: {
        ar: 'تم تحديث عنوان IP. افتح المشغل على نفس العنوان للاتصال.',
        en: 'IP address updated. Open the player at the same IP to connect.'
      },
      setIpForLocalTest: {
        ar: 'تعيين IP للاختبار المحلي',
        en: 'Set IP for local test'
      },
      updateIp: {
        ar: 'تحديث IP',
        en: 'Update IP'
      },
      errorLoadingScreens: {
        ar: 'خطأ في تحميل الشاشات',
        en: 'Error loading screens'
      },
      noVideoAvailable: {
        ar: 'لا يوجد فيديو متاح للتشغيل',
        en: 'No video available to play'
      },
      fullscreenNotImplemented: {
        ar: 'ميزة ملء الشاشة غير متاحة بعد',
        en: 'Fullscreen feature not yet implemented'
      },
      more: {
        ar: 'المزيد',
        en: 'more'
      },
      // Login/Auth specific
      appTitle: {
        ar: 'منصة الأوقاف',
        en: 'Waqf Platform'
      },
      appSubtitle: {
        ar: 'نظام إدارة الأوقاف الشامل',
        en: 'Comprehensive Waqf Management System'
      },
      loginTitle: {
        ar: 'تسجيل الدخول',
        en: 'Login'
      },
      loginSubtitle: {
        ar: 'أدخل بياناتك للوصول إلى النظام',
        en: 'Enter your credentials to access the system'
      },
      rememberMe: {
        ar: 'تذكرني',
        en: 'Remember me'
      },
      forgotPassword: {
        ar: 'نسيت كلمة المرور؟',
        en: 'Forgot password?'
      },
      loginButton: {
        ar: 'تسجيل الدخول',
        en: 'Login'
      },
      loginError: {
        ar: 'خطأ في تسجيل الدخول. يرجى التحقق من اسم المستخدم وكلمة المرور.',
        en: 'Login error. Please check your username and password.'
      },
      fieldRequired: {
        ar: 'هذا الحقل مطلوب',
        en: 'This field is required'
      },
      verificationCode: {
        ar: 'رمز التحقق',
        en: 'Verification Code'
      },
      verifyButton: {
        ar: 'تحقق',
        en: 'Verify'
      },
      demoCredentials: {
        ar: 'بيانات تجريبية:',
        en: 'Demo Credentials:'
      },
      copyright: {
        ar: '© 2024 منصة الأوقاف. جميع الحقوق محفوظة.',
        en: '© All rights reserved.'
      },
      // Screen Regions & Schedules - Additional keys
      clickAndDragToSelect: {
        ar: 'انقر واسحب لتحديد منطقة',
        en: 'Click and drag to select an area'
      },
      saveRegion: {
        ar: 'حفظ المنطقة المحددة',
        en: 'Save Selected Region'
      },
      createdRegions: {
        ar: 'المناطق المُنشأة',
        en: 'Created Regions'
      },
      regionCreated: {
        ar: 'تم إنشاء المنطقة بنجاح',
        en: 'Region created successfully'
      },
      regionTooSmall: {
        ar: 'المنطقة صغيرة جداً. يرجى تحديد منطقة أكبر.',
        en: 'Region is too small. Please select a larger area.'
      },
      confirmDeleteRegion: {
        ar: 'هل أنت متأكد من حذف هذه المنطقة؟',
        en: 'Are you sure you want to delete this region?'
      },
      regionDeleted: {
        ar: 'تم حذف المنطقة بنجاح',
        en: 'Region deleted successfully'
      },
      errorDeletingRegion: {
        ar: 'خطأ في حذف المنطقة',
        en: 'Error deleting region'
      },
      confirmResetRegions: {
        ar: 'هل أنت متأكد من حذف جميع المناطق؟ لا يمكن التراجع عن هذا الإجراء.',
        en: 'Are you sure you want to delete all regions? This action cannot be undone.'
      },
      regionsReset: {
        ar: 'تم إعادة تعيين جميع المناطق',
        en: 'All regions have been reset'
      },
      resetRegions: {
        ar: 'إعادة تعيين المناطق',
        en: 'Reset All Regions'
      },
      editRegions: {
        ar: 'تعديل المناطق',
        en: 'Edit Regions'
      },
      hideEditor: {
        ar: 'إخفاء المحرر',
        en: 'Hide Editor'
      },
      howToUse: {
        ar: 'كيفية الاستخدام:',
        en: 'How to use:'
      },
      instruction1: {
        ar: 'انقر واسحب على معاينة الشاشة أدناه لتحديد منطقة مخصصة',
        en: 'Click and drag on the screen preview below to select a custom area'
      },
      instruction2: {
        ar: 'أو استخدم أزرار التقسيم السريع (يسار/يمين أو أعلى/أسفل) لتقسيم الشاشة تلقائياً',
        en: 'OR use the quick split buttons (Left/Right or Top/Bottom) to divide the screen automatically'
      },
      instruction3: {
        ar: 'انقر على "حفظ المنطقة المحددة" بعد تحديد منطقة',
        en: 'Click "Save Selected Region" after selecting an area'
      },
      orUseQuickSplit: {
        ar: 'أو استخدم أزرار التقسيم السريع أدناه',
        en: 'or use quick split buttons below'
      },
      regionSelected: {
        ar: 'تم تحديد المنطقة!',
        en: 'Region selected!'
      },
      clickSaveToCreate: {
        ar: 'انقر على زر "حفظ المنطقة المحددة" أدناه',
        en: 'Click "Save Selected Region" button below'
      },
      resizeLeft: {
        ar: 'تغيير حجم اليسار',
        en: 'Resize Left'
      },
      resizeRight: {
        ar: 'تغيير حجم اليمين',
        en: 'Resize Right'
      },
      resizeTop: {
        ar: 'تغيير حجم الأعلى',
        en: 'Resize Top'
      },
      resizeBottom: {
        ar: 'تغيير حجم الأسفل',
        en: 'Resize Bottom'
      },
      resizeTopLeft: {
        ar: 'تغيير حجم الأعلى-اليسار',
        en: 'Resize Top-Left'
      },
      resizeTopRight: {
        ar: 'تغيير حجم الأعلى-اليمين',
        en: 'Resize Top-Right'
      },
      resizeBottomLeft: {
        ar: 'تغيير حجم الأسفل-اليسار',
        en: 'Resize Bottom-Left'
      },
      resizeBottomRight: {
        ar: 'تغيير حجم الأسفل-اليمين',
        en: 'Resize Bottom-Right'
      },
      regionUpdated: {
        ar: 'تم تحديث المنطقة بنجاح',
        en: 'Region updated successfully'
      },
      errorUpdatingRegion: {
        ar: 'خطأ في تحديث المنطقة',
        en: 'Error updating region'
      },
      saveAllRegions: {
        ar: 'إنشاء جميع المناطق',
        en: 'Create All Regions'
      },
      clearSelections: {
        ar: 'مسح الكل',
        en: 'Clear All'
      },
      noSelectionsToSave: {
        ar: 'لا توجد مناطق محددة للحفظ',
        en: 'No regions selected. Please select at least one region.'
      },
      regionsSelected: {
        ar: 'منطقة محددة',
        en: 'region(s) selected'
      },
      selectGridLayout: {
        ar: 'اختر تخطيط الشبكة:',
        en: 'Select Grid Layout:'
      },
      gridLayoutHint: {
        ar: 'اختر كيفية تقسيم الشاشة إلى مناطق',
        en: 'Choose how to divide your screen into regions'
      },
      creatingRegions: {
        ar: 'جارٍ إنشاء المناطق...',
        en: 'Creating regions...'
      },
      // Group layout / By Group
      groupLayout: {
        ar: 'تخطيط المجموعة',
        en: 'Group Layout'
      },
      selectGroup: {
        ar: 'اختر المجموعة',
        en: 'Select Group'
      },
      screensInGroup: {
        ar: 'الشاشات في هذه المجموعة',
        en: 'Screens in this group'
      },
      noScreensInGroup: {
        ar: 'لا توجد شاشات في هذه المجموعة.',
        en: 'No screens in this group.'
      },
      noAdvertisementsAssigned: {
        ar: 'لا توجد إعلانات معينة لهذه الشاشة. عيّن وضبط الإعلانات في "حسب الشاشة" ثم طبّق على هذه المجموعة.',
        en: 'No advertisements assigned to this screen. Assign and configure ads in By Screen, then apply to this group.'
      },
      selectRegion: {
        ar: 'اختر المنطقة',
        en: 'Select region'
      },
      applyToGroupHelp: {
        ar: 'عندما يكون التخطيط والإعلانات والإعدادات جاهزة، طبّق على جميع الشاشات في هذه المجموعة.',
        en: 'When layout, ads and settings are ready, apply to all screens in this group.'
      },
      applyToGroup: {
        ar: 'تطبيق على هذه المجموعة',
        en: 'Apply to this group'
      },
      remove: {
        ar: 'إزالة',
        en: 'Remove'
      },
      advertisementRemoved: {
        ar: 'تمت إزالة الإعلان',
        en: 'Advertisement removed'
      },
      adsSaved: {
        ar: 'تم حفظ الإعلانات',
        en: 'Advertisements saved'
      },
      settingsSaved: {
        ar: 'تم حفظ الإعدادات',
        en: 'Settings saved'
      },
      byScreen: {
        ar: 'حسب الشاشة',
        en: 'By Screen'
      },
      byGroup: {
        ar: 'حسب المجموعة',
        en: 'By Group'
      },
      groupDeleted: {
        ar: 'تم حذف المجموعة بنجاح',
        en: 'Group deleted successfully.'
      },
      errorDeletingGroup: {
        ar: 'فشل حذف المجموعة',
        en: 'Failed to delete group.'
      },
      editGroup: {
        ar: 'تعديل المجموعة',
        en: 'Edit Group'
      },
      groupUpdated: {
        ar: 'تم تحديث المجموعة بنجاح',
        en: 'Group updated successfully.'
      },
      errorUpdatingGroup: {
        ar: 'فشل تحديث المجموعة',
        en: 'Failed to update group.'
      }
    };
  }
  getTranslation(key, language) {
    const translation = this.translations[key];
    if (translation) {
      return translation[language];
    }
    return key; // Return key if translation not found
  }
  getAllTranslations() {
    return this.translations;
  }
  static {
    this.ɵfac = function TranslationService_Factory(t) {
      return new (t || TranslationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TranslationService,
      factory: TranslationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5997:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/alert-dialog/alert-dialog.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialogComponent: () => (/* binding */ AlertDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function AlertDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertDialogComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertDialogComponent_div_0_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3)(3, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertDialogComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertDialogComponent_div_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.data.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.title || ctx_r1.getTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("icon-" + ctx_r1.data.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.getIcon());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("btn-" + ctx_r1.data.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.data.confirmText || "OK", " ");
  }
}
class AlertDialogComponent {
  constructor() {
    this.data = {
      message: '',
      confirmText: 'OK',
      type: 'info'
    };
    this.visible = false;
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  getTitle() {
    if (this.data.title) return this.data.title;
    switch (this.data.type) {
      case 'success':
        return 'Success';
      case 'error':
        return 'Error';
      case 'warning':
        return 'Warning';
      default:
        return 'Information';
    }
  }
  getIcon() {
    switch (this.data.type) {
      case 'success':
        return 'fas fa-check-circle';
      case 'error':
        return 'fas fa-exclamation-circle';
      case 'warning':
        return 'fas fa-exclamation-triangle';
      default:
        return 'fas fa-info-circle';
    }
  }
  onConfirm() {
    this.closed.emit();
  }
  onOverlayClick() {
    this.closed.emit();
  }
  static {
    this.ɵfac = function AlertDialogComponent_Factory(t) {
      return new (t || AlertDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertDialogComponent,
      selectors: [["app-alert-dialog"]],
      inputs: {
        data: "data",
        visible: "visible"
      },
      outputs: {
        closed: "closed"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "alert-dialog-overlay", 3, "click", 4, "ngIf"], [1, "alert-dialog-overlay", 3, "click"], [1, "alert-dialog", 3, "click"], [1, "dialog-header"], [1, "dialog-title"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "dialog-body"], [1, "dialog-icon"], [1, "dialog-message"], [1, "dialog-actions"], [1, "btn", "btn-primary", 3, "click"]],
      template: function AlertDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertDialogComponent_div_0_Template, 15, 11, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".alert-dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n\n.alert-dialog[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  max-width: 500px;\n  width: 90%;\n  max-height: 90vh;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n.alert-dialog.success[_ngcontent-%COMP%] {\n  border-top: 4px solid #28a745;\n}\n.alert-dialog.error[_ngcontent-%COMP%] {\n  border-top: 4px solid #dc3545;\n}\n.alert-dialog.warning[_ngcontent-%COMP%] {\n  border-top: 4px solid #ffc107;\n}\n.alert-dialog.info[_ngcontent-%COMP%] {\n  border-top: 4px solid #17a2b8;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e9ecef;\n}\n.dialog-header[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n}\n.dialog-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n}\n.dialog-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #333;\n}\n\n.dialog-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n}\n.dialog-body[_ngcontent-%COMP%]   .dialog-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  font-size: 32px;\n}\n.dialog-body[_ngcontent-%COMP%]   .dialog-icon.icon-success[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.1);\n  color: #28a745;\n}\n.dialog-body[_ngcontent-%COMP%]   .dialog-icon.icon-error[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  color: #dc3545;\n}\n.dialog-body[_ngcontent-%COMP%]   .dialog-icon.icon-warning[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #ffc107;\n}\n.dialog-body[_ngcontent-%COMP%]   .dialog-icon.icon-info[_ngcontent-%COMP%] {\n  background: rgba(23, 162, 184, 0.1);\n  color: #17a2b8;\n}\n.dialog-body[_ngcontent-%COMP%]   .dialog-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: #555;\n  line-height: 1.5;\n}\n\n.dialog-actions[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.dialog-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border-radius: 6px;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.dialog-actions[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n.dialog-actions[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n.dialog-actions[_ngcontent-%COMP%]   .btn.btn-error[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.dialog-actions[_ngcontent-%COMP%]   .btn.btn-error[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n.dialog-actions[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #333;\n}\n.dialog-actions[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:hover {\n  background: #e0a800;\n}\n.dialog-actions[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%] {\n  background: #17a2b8;\n  color: white;\n}\n.dialog-actions[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:hover {\n  background: #138496;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7QUFDRTtFQUNFLDZCQUFBO0FBQ0o7QUFFRTtFQUNFLDZCQUFBO0FBQUo7QUFHRTtFQUNFLDZCQUFBO0FBREo7QUFJRTtFQUNFLDZCQUFBO0FBRko7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFIRjtBQUtFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFISjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSko7QUFNSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUpOOztBQVNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBTkY7QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU5KO0FBUUk7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7QUFOTjtBQVNJO0VBQ0Usa0NBQUE7RUFDQSxjQUFBO0FBUE47QUFVSTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtBQVJOO0FBV0k7RUFDRSxtQ0FBQTtFQUNBLGNBQUE7QUFUTjtBQWFFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFYSjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBWkY7QUFjRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFaSjtBQWNJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBWk47QUFjTTtFQUNFLG1CQUFBO0FBWlI7QUFnQkk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFkTjtBQWdCTTtFQUNFLG1CQUFBO0FBZFI7QUFrQkk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFoQk47QUFrQk07RUFDRSxtQkFBQTtBQWhCUjtBQW9CSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQWxCTjtBQW9CTTtFQUNFLG1CQUFBO0FBbEJSOztBQXdCQTtFQUNFO0lBQ0UsVUFBQTtFQXJCRjtFQXVCQTtJQUNFLFVBQUE7RUFyQkY7QUFDRjtBQXdCQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBdEJGO0VBd0JBO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VBdEJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtZGlhbG9nLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5hbGVydC1kaWFsb2cge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgZWFzZTtcclxuICBcclxuICAmLnN1Y2Nlc3Mge1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMyOGE3NDU7XHJcbiAgfVxyXG4gIFxyXG4gICYuZXJyb3Ige1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNkYzM1NDU7XHJcbiAgfVxyXG4gIFxyXG4gICYud2FybmluZyB7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgI2ZmYzEwNztcclxuICB9XHJcbiAgXHJcbiAgJi5pbmZvIHtcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMTdhMmI4O1xyXG4gIH1cclxufVxyXG5cclxuLmRpYWxvZy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAyNHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIFxyXG4gIC5kaWFsb2ctdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2UtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGlhbG9nLWJvZHkge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gIC5kaWFsb2ctaWNvbiB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgXHJcbiAgICAmLmljb24tc3VjY2VzcyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksIDAuMSk7XHJcbiAgICAgIGNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmljb24tZXJyb3Ige1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xyXG4gICAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5pY29uLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjEpO1xyXG4gICAgICBjb2xvcjogI2ZmYzEwNztcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5pY29uLWluZm8ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzLCAxNjIsIDE4NCwgMC4xKTtcclxuICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5kaWFsb2ctbWVzc2FnZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlhbG9nLWFjdGlvbnMge1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIFxyXG4gIC5idG4ge1xyXG4gICAgcGFkZGluZzogMTBweCAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBcclxuICAgICYuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjE4ODM4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuYnRuLWVycm9yIHtcclxuICAgICAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2M4MjMzMztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmJ0bi13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmYzEwNztcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTBhODAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuYnRuLWluZm8ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMTdhMmI4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTM4NDk2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZVVwIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8709:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDialogComponent: () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function ConfirmDialogComponent_div_0_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.data.cancelText, " ");
  }
}
function ConfirmDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3)(3, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConfirmDialogComponent_div_0_button_11_Template, 2, 1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.data.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.cancelText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("btn-" + ctx_r1.data.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.data.confirmText, " ");
  }
}
class ConfirmDialogComponent {
  constructor() {
    this.data = {
      title: 'تأكيد',
      message: 'هل أنت متأكد من هذا الإجراء؟',
      confirmText: 'تأكيد',
      cancelText: 'إلغاء',
      type: 'info'
    };
    this.visible = false;
    this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onConfirm() {
    this.confirmed.emit();
  }
  onCancel() {
    this.cancelled.emit();
  }
  onOverlayClick() {
    this.cancelled.emit();
  }
  static {
    this.ɵfac = function ConfirmDialogComponent_Factory(t) {
      return new (t || ConfirmDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmDialogComponent,
      selectors: [["app-confirm-dialog"]],
      inputs: {
        data: "data",
        visible: "visible"
      },
      outputs: {
        confirmed: "confirmed",
        cancelled: "cancelled"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "confirm-dialog-overlay", 3, "click", 4, "ngIf"], [1, "confirm-dialog-overlay", 3, "click"], [1, "confirm-dialog", 3, "click"], [1, "dialog-header"], [1, "dialog-title"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "dialog-body"], [1, "dialog-message"], [1, "dialog-actions"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"]],
      template: function ConfirmDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmDialogComponent_div_0_Template, 14, 8, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".confirm-dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 20px;\n}\n\n.confirm-dialog[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  max-width: 450px;\n  width: 100%;\n  animation: _ngcontent-%COMP%_dialogSlideIn 0.3s ease;\n}\n.confirm-dialog.warning[_ngcontent-%COMP%] {\n  border-top: 4px solid #f39c12;\n}\n.confirm-dialog.danger[_ngcontent-%COMP%] {\n  border-top: 4px solid #e74c3c;\n}\n.confirm-dialog.info[_ngcontent-%COMP%] {\n  border-top: 4px solid #3498db;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 20px 0;\n}\n\n.dialog-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: #7f8c8d;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #2c3e50;\n}\n\n.dialog-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.dialog-message[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7f8c8d;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: flex-end;\n  padding: 0 20px 20px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: #00695c;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #004d40;\n}\n.btn-primary.btn-warning[_ngcontent-%COMP%] {\n  background: #f39c12;\n}\n.btn-primary.btn-warning[_ngcontent-%COMP%]:hover {\n  background: #e67e22;\n}\n.btn-primary.btn-danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n}\n.btn-primary.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #c0392b;\n}\n.btn-primary.btn-info[_ngcontent-%COMP%] {\n  background: #3498db;\n}\n.btn-primary.btn-info[_ngcontent-%COMP%]:hover {\n  background: #2980b9;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #95a5a6;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #7f8c8d;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .dialog-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n\n@keyframes _ngcontent-%COMP%_dialogSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-30px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .confirm-dialog-overlay[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .confirm-dialog[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .dialog-header[_ngcontent-%COMP%] {\n    padding: 15px 15px 0;\n  }\n  .dialog-body[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .dialog-actions[_ngcontent-%COMP%] {\n    padding: 0 15px 15px;\n    flex-direction: column;\n  }\n  .dialog-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dialog-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUNFO0VBQ0UsNkJBQUE7QUFDSjtBQUVFO0VBQ0UsNkJBQUE7QUFBSjtBQUdFO0VBQ0UsNkJBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFGRjs7QUFLQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRkY7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUZKOztBQU1BO0VBQ0UsYUFBQTtBQUhGOztBQU1BO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSEY7QUFLRTtFQUNFLDJCQUFBO0FBSEo7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFKRjtBQU1FO0VBQ0UsbUJBQUE7QUFKSjtBQU9FO0VBQ0UsbUJBQUE7QUFMSjtBQU9JO0VBQ0UsbUJBQUE7QUFMTjtBQVNFO0VBQ0UsbUJBQUE7QUFQSjtBQVNJO0VBQ0UsbUJBQUE7QUFQTjtBQVdFO0VBQ0UsbUJBQUE7QUFUSjtBQVdJO0VBQ0UsbUJBQUE7QUFUTjs7QUFjQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQVhGO0FBYUU7RUFDRSxtQkFBQTtBQVhKOztBQWlCRTtFQUNFLDJCQUFBO0FBZEo7QUFpQkU7RUFDRSxxQkFBQTtBQWZKOztBQW9CQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHdDQUFBO0VBakJGO0VBbUJBO0lBQ0UsVUFBQTtJQUNBLGlDQUFBO0VBakJGO0FBQ0Y7QUFxQkE7RUFDRTtJQUNFLGFBQUE7RUFuQkY7RUFzQkE7SUFDRSxlQUFBO0VBcEJGO0VBdUJBO0lBQ0Usb0JBQUE7RUFyQkY7RUF3QkE7SUFDRSxhQUFBO0VBdEJGO0VBeUJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFBQTtFQXZCRjtFQXlCRTtJQUNFLFdBQUE7RUF2Qko7RUEyQkE7SUFDRSxpQkFBQTtFQXpCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tZGlhbG9nLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jb25maXJtLWRpYWxvZyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbmltYXRpb246IGRpYWxvZ1NsaWRlSW4gMC4zcyBlYXNlO1xyXG4gIFxyXG4gICYud2FybmluZyB7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgI2YzOWMxMjtcclxuICB9XHJcbiAgXHJcbiAgJi5kYW5nZXIge1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNlNzRjM2M7XHJcbiAgfVxyXG4gIFxyXG4gICYuaW5mbyB7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzM0OThkYjtcclxuICB9XHJcbn1cclxuXHJcbi5kaWFsb2ctaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwO1xyXG59XHJcblxyXG4uZGlhbG9nLXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gIH1cclxufVxyXG5cclxuLmRpYWxvZy1ib2R5IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uZGlhbG9nLW1lc3NhZ2Uge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLmRpYWxvZy1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjMDA2OTVjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDRkNDA7XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZDogI2YzOWMxMjtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlNjdlMjI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2MwMzkyYjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4taW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjOTVhNWE2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM3ZjhjOGQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSVEwgU3VwcG9ydFxyXG5bZGlyPVwicnRsXCJdIHtcclxuICAuZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2UtYnRuIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFuaW1hdGlvbnNcclxuQGtleWZyYW1lcyBkaWFsb2dTbGlkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpIHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbmZpcm0tZGlhbG9nLW92ZXJsYXkge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbmZpcm0tZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmRpYWxvZy1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaWFsb2ctYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDE1cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbiAgICAuYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5kaWFsb2ctdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9381:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ 8709);









const _c0 = () => ["/users"];
const _c1 = () => ["/system-settings"];
const _c2 = () => ["/notifications/notifications"];
function HeaderComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.unreadCount > 99 ? "99+" : ctx_r0.unreadCount, " ");
  }
}
function HeaderComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.unreadCount, " ");
  }
}
function HeaderComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.currentLanguage === "ar" ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0625\u0634\u0639\u0627\u0631\u0627\u062A" : "No notifications");
  }
}
function HeaderComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 54)(4, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("notification-" + notification_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("fa-info-circle", notification_r2.type === "info")("fa-check-circle", notification_r2.type === "success")("fa-exclamation-triangle", notification_r2.type === "warning")("fa-times-circle", notification_r2.type === "error")("fa-bell", notification_r2.type !== "info" && notification_r2.type !== "success" && notification_r2.type !== "warning" && notification_r2.type !== "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notification_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", notification_r2.time, " ");
  }
}
function HeaderComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58)(1, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("viewAllNotifications") || "View All Notifications", " ");
  }
}
function HeaderComponent_small_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.userType === "super-user" ? ctx_r0.currentLanguage === "ar" ? "\u0645\u0633\u062A\u062E\u062F\u0645 \u0641\u0627\u0626\u0642" : "Super User" : ctx_r0.currentUser.userType === "admin-user" ? ctx_r0.currentLanguage === "ar" ? "\u0645\u062F\u064A\u0631" : "Admin" : ctx_r0.currentLanguage === "ar" ? "\u0645\u0633\u062A\u062E\u062F\u0645" : "User", " ");
  }
}
function HeaderComponent_li_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 63)(1, "div", 64)(2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 66)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.currentUser.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.currentUser.email);
  }
}
function HeaderComponent_li_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "li", 43);
  }
}
class HeaderComponent {
  constructor(languageService, translationService, authService, notificationService, router, cdr) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.authService = authService;
    this.notificationService = notificationService;
    this.router = router;
    this.cdr = cdr;
    this.mobileMenuToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.currentLanguage = 'ar';
    this.unreadCount = 0;
    this.recentNotifications = [];
    this.showLogoutConfirm = false;
    this.currentUser = null;
    this.welcomeMessage = '';
    this.subscriptions = [];
    this.logoutConfirmData = {
      title: '',
      message: '',
      confirmText: 'OK',
      cancelText: 'Cancel',
      type: 'warning'
    };
  }
  ngOnInit() {
    // Load current user
    this.loadCurrentUser();
    // Subscribe to user changes
    const userSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.updateWelcomeMessage();
      this.cdr.detectChanges();
    });
    this.subscriptions.push(userSub);
    // Subscribe to language changes
    const langSub = this.languageService.currentLanguage$.subscribe(lang => {
      console.log('Header: Language changed to:', lang);
      this.currentLanguage = lang;
      this.updateWelcomeMessage();
      this.loadNotifications(); // Reload notifications with new language
      this.cdr.detectChanges(); // Force change detection
    });
    this.subscriptions.push(langSub);
    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    console.log('Header: Initialized with language:', this.currentLanguage);
    this.loadNotifications();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  loadCurrentUser() {
    this.currentUser = this.authService.getCurrentUser();
    this.updateWelcomeMessage();
  }
  updateWelcomeMessage() {
    if (this.currentUser) {
      if (this.currentLanguage === 'ar') {
        this.welcomeMessage = `مرحباً، ${this.currentUser.username}`;
      } else {
        this.welcomeMessage = `Welcome, ${this.currentUser.username}`;
      }
    } else {
      this.welcomeMessage = this.currentLanguage === 'ar' ? 'مرحباً' : 'Welcome';
    }
  }
  loadNotifications() {
    // Load real notifications from API - get sent notifications (most recent)
    // Only show notifications for the current user
    const filters = {
      status: 'sent',
      limit: 5,
      page: 1
    };
    // Add userId filter if user is logged in
    if (this.currentUser?.id) {
      filters.userId = this.currentUser.id;
    }
    this.notificationService.getNotifications(filters).subscribe({
      next: response => {
        // Show count of sent notifications (recent ones)
        // Since there's no 'unread' status, we'll show count of recent sent notifications
        this.unreadCount = response.notifications.length;
        // Map to header notification format
        this.recentNotifications = response.notifications.slice(0, 5).map(notification => {
          const timeAgo = this.getTimeAgo(notification.sentAt || notification.createdAt);
          return {
            id: notification.id || 0,
            message: notification.message || notification.title || '',
            time: timeAgo,
            type: this.mapNotificationType(notification.type || 'info')
          };
        });
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('Error loading notifications:', error);
        // Fallback to empty notifications on error
        this.unreadCount = 0;
        this.recentNotifications = [];
      }
    });
  }
  getTimeAgo(date) {
    if (!date) return '';
    const now = new Date();
    const notificationDate = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - notificationDate.getTime()) / 1000);
    if (diffInSeconds < 60) {
      return this.currentLanguage === 'ar' ? 'الآن' : 'Just now';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return this.currentLanguage === 'ar' ? `منذ ${minutes} دقيقة` : `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return this.currentLanguage === 'ar' ? `منذ ${hours} ساعة` : `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return this.currentLanguage === 'ar' ? `منذ ${days} يوم` : `${days} day${days > 1 ? 's' : ''} ago`;
    }
  }
  mapNotificationType(type) {
    switch (type) {
      case 'success':
        return 'success';
      case 'warning':
      case 'urgent':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'info';
    }
  }
  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
    this.languageService.setLanguage(newLanguage);
  }
  toggleMobileMenu(event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.mobileMenuToggle.emit();
  }
  logout() {
    // Show confirmation dialog
    this.logoutConfirmData = {
      title: this.currentLanguage === 'ar' ? 'تأكيد تسجيل الخروج' : 'Confirm Logout',
      message: this.getTranslation('confirmLogoutMessage'),
      confirmText: this.currentLanguage === 'ar' ? 'تأكيد' : 'OK',
      cancelText: this.currentLanguage === 'ar' ? 'إلغاء' : 'Cancel',
      type: 'warning'
    };
    this.showLogoutConfirm = true;
  }
  onLogoutConfirmed() {
    this.showLogoutConfirm = false;
    // Call the auth service logout method
    this.authService.logout();
    // Navigate to login page
    this.router.navigate(['/auth/login']);
    console.log('User logged out successfully');
  }
  onLogoutCancelled() {
    this.showLogoutConfirm = false;
  }
  // Use centralized translation service
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      outputs: {
        mobileMenuToggle: "mobileMenuToggle"
      },
      decls: 59,
      vars: 28,
      consts: [[1, "header", 2, "background", "linear-gradient(180deg, #004d40 0%, #00695c 100%) !important", 3, "dir"], [1, "header-container"], [1, "header-left"], [1, "mobile-menu-toggle"], ["type", "button", 1, "btn", "btn-link", "mobile-menu-btn", 3, "click", "title"], [1, "fas", "fa-bars"], [1, "logo-section"], ["src", "assets/logo/screen.jpeg", "alt", "Logo", 1, "logo"], [1, "header-right"], [1, "header-actions"], [1, "welcome-message", "d-none", "d-lg-block"], [1, "welcome-text"], [1, "language-toggle"], [1, "btn", "btn-outline-light", "btn-sm", 3, "click", "title"], [1, "fas", "fa-globe"], [1, "d-none", "d-sm-inline"], [1, "notifications-dropdown", "dropdown"], ["data-bs-toggle", "dropdown", 1, "btn", "btn-link", "position-relative", "notification-btn", 3, "title"], [1, "fas", "fa-bell"], ["class", "notification-badge", 4, "ngIf"], [1, "dropdown-menu", "dropdown-menu-end", "notification-dropdown-menu"], [1, "notification-header"], [1, "notification-header-content"], [1, "notification-title"], ["class", "notification-count-badge", 4, "ngIf"], [1, "notification-list"], ["class", "notification-empty", 4, "ngIf"], ["class", "notification-item", 3, "class", 4, "ngFor", "ngForOf"], ["class", "notification-footer", 4, "ngIf"], [1, "user-profile", "dropdown"], ["data-bs-toggle", "dropdown", 1, "btn", "btn-link", "d-flex", "align-items-center", 3, "title"], [1, "user-avatar"], [1, "fas", "fa-user"], [1, "user-info", "d-none", "d-md-inline"], [1, "user-name"], ["class", "user-role d-block", 4, "ngIf"], [1, "fas", "fa-chevron-down", "ms-1", "d-none", "d-md-inline"], [1, "dropdown-menu", "dropdown-menu-end"], ["class", "dropdown-header", 4, "ngIf"], ["class", "dropdown-divider", 4, "ngIf"], [1, "dropdown-item", 3, "routerLink"], [1, "fas", "fa-user", "me-2"], [1, "fas", "fa-cog", "me-2"], [1, "dropdown-divider"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-sign-out-alt", "me-2"], [3, "confirmed", "cancelled", "visible", "data"], [1, "notification-badge"], [1, "notification-count-badge"], [1, "notification-empty"], [1, "fas", "fa-bell-slash"], [1, "notification-item"], [1, "notification-icon-wrapper"], [1, "fas"], [1, "notification-content"], [1, "notification-message"], [1, "notification-time"], [1, "fas", "fa-clock"], [1, "notification-footer"], [1, "view-all-btn", 3, "routerLink"], [1, "fas", "fa-eye"], [1, "fas", "fa-chevron-right"], [1, "user-role", "d-block"], [1, "dropdown-header"], [1, "user-profile-header"], [1, "user-avatar-large"], [1, "user-details"], [1, "text-muted", "d-block"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_4_listener($event) {
            return ctx.toggleMobileMenu($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12)(14, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_14_listener() {
            return ctx.toggleLanguage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 16)(19, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, HeaderComponent_span_21_Template, 2, 1, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 20)(23, "div", 21)(24, "div", 22)(25, "h5", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, HeaderComponent_span_28_Template, 2, 1, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, HeaderComponent_div_30_Template, 4, 1, "div", 26)(31, HeaderComponent_div_31_Template, 9, 14, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, HeaderComponent_div_32_Template, 5, 3, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 29)(34, "button", 30)(35, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 33)(38, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, HeaderComponent_small_40_Template, 2, 1, "small", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ul", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, HeaderComponent_li_43_Template, 9, 2, "li", 38)(44, HeaderComponent_li_44_Template, 1, 0, "li", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "li")(46, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "li")(50, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "li", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "li")(55, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_55_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "app-confirm-dialog", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("confirmed", function HeaderComponent_Template_app_confirm_dialog_confirmed_58_listener() {
            return ctx.onLogoutConfirmed();
          })("cancelled", function HeaderComponent_Template_app_confirm_dialog_cancelled_58_listener() {
            return ctx.onLogoutCancelled();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.getTranslation("toggleMenu"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.welcomeMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.getTranslation("switchLanguage"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.currentLanguage === "ar" ? "EN" : "\u0639\u0631\u0628\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.getTranslation("notifications"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-expanded", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("recentNotifications") || "Recent Notifications", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.recentNotifications.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.recentNotifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.recentNotifications.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.getTranslation("userProfile"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.currentUser == null ? null : ctx.currentUser.username) || ctx.getTranslation("adminUser"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](26, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.getTranslation("profile"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](27, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.getTranslation("settings"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.getTranslation("logout"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", ctx.showLogoutConfirm)("data", ctx.logoutConfirmData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogComponent],
      styles: ["@charset \"UTF-8\";\n.header {\n  background: linear-gradient(180deg, #004d40 0%, #00695c 100%);\n  color: white;\n  padding: 0;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  top: 0;\n  z-index: 1000;\n  width: 100%;\n  min-height: 70px;\n  display: flex;\n  background: linear-gradient(180deg, #004d40 0%, #00695c 100%) !important;\n}\n.header.header {\n  background: linear-gradient(180deg, #004d40 0%, #00695c 100%) !important;\n}\n\napp-header .header,\napp-header header.header,\napp-header .header.header {\n  background: linear-gradient(180deg, #004d40 0%, #00695c 100%) !important;\n}\n\nheader.header {\n  background: linear-gradient(180deg, #004d40 0%, #00695c 100%) !important;\n}\n\n.header,\n.header.header,\napp-header .header {\n  background: linear-gradient(180deg, #004d40 0%, #00695c 100%) !important;\n}\n\n.header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  max-width: 100%;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.header-left {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.header-left .logo-section {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n  margin-left: 12px;\n}\n[dir=rtl] .header-left .logo-section {\n  margin-left: 0;\n  margin-right: 12px;\n}\n.header-left .logo-section .logo {\n  width: 44px;\n  height: 44px;\n  border-radius: 0;\n  object-fit: contain;\n}\n@media (min-width: 576px) {\n  .header-left .logo-section .logo {\n    width: 56px;\n    height: 56px;\n  }\n}\n.header-left .logo-section .app-title {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n@media (min-width: 576px) {\n  .header-left .logo-section .app-title {\n    font-size: 1.25rem;\n  }\n}\n\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex: 1;\n  justify-content: flex-end;\n}\n@media (max-width: 767.98px) {\n  .header-right {\n    gap: 0.5rem;\n  }\n}\n\n.mobile-menu-toggle {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n@media (min-width: 992px) {\n  .mobile-menu-toggle {\n    display: none;\n  }\n}\n.mobile-menu-toggle .mobile-menu-btn {\n  color: white;\n  padding: 0.5rem 0.75rem;\n  font-size: 1.5rem;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-width: 44px;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\n.mobile-menu-toggle .mobile-menu-btn:hover {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n}\n.mobile-menu-toggle .mobile-menu-btn:active {\n  transform: scale(0.95);\n}\n.mobile-menu-toggle .mobile-menu-btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);\n}\n.mobile-menu-toggle .mobile-menu-btn i {\n  font-size: 1.5rem;\n}\n\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n@media (max-width: 767.98px) {\n  .header-actions {\n    gap: 0.5rem;\n  }\n}\n\n.welcome-message {\n  padding: 0.5rem 1rem;\n  color: white;\n  font-size: 0.9rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.welcome-message .welcome-text {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.welcome-message .welcome-text::before {\n  content: \"\uD83D\uDC4B\";\n  font-size: 1.1rem;\n}\n@media (max-width: 991.98px) {\n  .welcome-message {\n    display: none !important;\n  }\n}\n\n.language-toggle .btn {\n  color: white;\n  border-color: rgba(255, 255, 255, 0.5);\n  padding: 0.375rem 0.75rem;\n  font-size: 0.875rem;\n}\n.language-toggle .btn:hover {\n  border-color: white;\n  background: rgba(255, 255, 255, 0.1);\n}\n.language-toggle .btn i {\n  margin-right: 0.25rem;\n}\n\n.notifications-dropdown {\n  position: relative;\n}\n.notifications-dropdown .notification-btn {\n  color: white;\n  padding: 0.5rem;\n  position: relative;\n  border: none;\n  background: transparent;\n  transition: all 0.3s ease;\n}\n.notifications-dropdown .notification-btn:hover {\n  color: rgba(255, 255, 255, 0.9);\n  transform: scale(1.1);\n}\n.notifications-dropdown .notification-btn:focus {\n  box-shadow: none;\n  outline: none;\n}\n.notifications-dropdown .notification-btn i {\n  font-size: 1.2rem;\n}\n.notifications-dropdown .notification-btn .notification-badge {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  background: #dc3545;\n  color: white;\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.15rem 0.4rem;\n  border-radius: 10px;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #004d40;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  animation: pulse 2s infinite;\n}\n.notifications-dropdown .dropdown-menu {\n  min-width: 380px;\n  max-width: 420px;\n  padding: 0;\n  max-height: 500px;\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  margin-top: 10px !important;\n}\n.notifications-dropdown .dropdown-menu::-webkit-scrollbar {\n  width: 6px;\n}\n.notifications-dropdown .dropdown-menu::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.notifications-dropdown .dropdown-menu::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.notifications-dropdown .dropdown-menu::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.notifications-dropdown .notification-header {\n  background: linear-gradient(135deg, #00695c 0%, #004d40 100%);\n  padding: 1rem 1.25rem;\n  border-bottom: none;\n}\n.notifications-dropdown .notification-header .notification-header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.notifications-dropdown .notification-header .notification-title {\n  margin: 0;\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.notifications-dropdown .notification-header .notification-title i {\n  font-size: 1rem;\n  opacity: 0.9;\n}\n.notifications-dropdown .notification-header .notification-count-badge {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 0.85rem;\n  font-weight: 700;\n  padding: 0.35rem 0.7rem;\n  border-radius: 20px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.notifications-dropdown .notification-list {\n  max-height: 350px;\n  overflow-y: auto;\n  background: #ffffff;\n}\n.notifications-dropdown .notification-list .notification-empty {\n  padding: 3rem 2rem;\n  text-align: center;\n  color: #6c757d;\n}\n.notifications-dropdown .notification-list .notification-empty i {\n  font-size: 3rem;\n  color: #dee2e6;\n  margin-bottom: 1rem;\n  display: block;\n}\n.notifications-dropdown .notification-list .notification-empty p {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.notifications-dropdown .notification-list .notification-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #f0f0f0;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.notifications-dropdown .notification-list .notification-item:hover {\n  background: #f8f9fa;\n  transform: translateX(3px);\n}\n.notifications-dropdown .notification-list .notification-item:last-child {\n  border-bottom: none;\n}\n.notifications-dropdown .notification-list .notification-item .notification-icon-wrapper {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.notifications-dropdown .notification-list .notification-item .notification-icon-wrapper i {\n  color: white;\n}\n.notifications-dropdown .notification-list .notification-item.notification-info .notification-icon-wrapper {\n  background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%);\n}\n.notifications-dropdown .notification-list .notification-item.notification-success .notification-icon-wrapper {\n  background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);\n}\n.notifications-dropdown .notification-list .notification-item.notification-warning .notification-icon-wrapper {\n  background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);\n}\n.notifications-dropdown .notification-list .notification-item.notification-error .notification-icon-wrapper {\n  background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);\n}\n.notifications-dropdown .notification-list .notification-item .notification-content {\n  flex: 1;\n  min-width: 0;\n}\n.notifications-dropdown .notification-list .notification-item .notification-content .notification-message {\n  margin: 0 0 0.5rem 0;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  color: #212529;\n  word-wrap: break-word;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.notifications-dropdown .notification-list .notification-item .notification-content .notification-time {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.notifications-dropdown .notification-list .notification-item .notification-content .notification-time i {\n  font-size: 0.7rem;\n  opacity: 0.7;\n}\n.notifications-dropdown .notification-footer {\n  background: #f8f9fa;\n  padding: 0.75rem 1.25rem;\n  border-top: 1px solid #e9ecef;\n}\n.notifications-dropdown .notification-footer .view-all-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  color: #00695c;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.notifications-dropdown .notification-footer .view-all-btn:hover {\n  background: #e9ecef;\n  color: #004d40;\n  gap: 0.75rem;\n}\n.notifications-dropdown .notification-footer .view-all-btn i:first-child {\n  font-size: 0.85rem;\n}\n.notifications-dropdown .notification-footer .view-all-btn i:last-child {\n  font-size: 0.7rem;\n  margin-left: auto;\n}\n\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n.user-profile .btn {\n  color: white;\n  padding: 0.5rem;\n  text-decoration: none;\n}\n.user-profile .btn:hover {\n  color: rgba(255, 255, 255, 0.8);\n}\n.user-profile .btn .user-avatar {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 0.5rem;\n}\n.user-profile .btn .user-avatar i {\n  font-size: 16px;\n}\n.user-profile .btn .user-info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-left: 0.5rem;\n}\n.user-profile .btn .user-info .user-name {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: white;\n  line-height: 1.2;\n}\n.user-profile .btn .user-info .user-role {\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1;\n  margin-top: 0.125rem;\n}\n.user-profile .btn .user-name {\n  font-weight: 500;\n}\n.user-profile .dropdown-menu {\n  min-width: 250px;\n}\n.user-profile .dropdown-menu .dropdown-header {\n  padding: 1rem;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.user-profile .dropdown-menu .dropdown-header .user-profile-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.user-profile .dropdown-menu .dropdown-header .user-profile-header .user-avatar-large {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.user-profile .dropdown-menu .dropdown-header .user-profile-header .user-details {\n  flex: 1;\n  min-width: 0;\n}\n.user-profile .dropdown-menu .dropdown-header .user-profile-header .user-details strong {\n  display: block;\n  font-size: 0.95rem;\n  color: #212529;\n  margin-bottom: 0.25rem;\n}\n.user-profile .dropdown-menu .dropdown-header .user-profile-header .user-details small {\n  font-size: 0.8rem;\n  color: #6c757d;\n  word-wrap: break-word;\n}\n.user-profile .dropdown-menu .dropdown-item {\n  padding: 0.5rem 1rem;\n}\n.user-profile .dropdown-menu .dropdown-item:hover {\n  background-color: #f8f9fa;\n}\n.user-profile .dropdown-menu .dropdown-item i {\n  width: 16px;\n  margin-right: 0.5rem;\n}\n.user-profile .dropdown-menu .dropdown-item:last-child {\n  color: #dc3545;\n}\n.user-profile .dropdown-menu .dropdown-item:last-child:hover {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.user-profile .dropdown-menu .dropdown-item:last-child i {\n  color: #dc3545;\n}\n\n.header[dir=rtl] .header-container {\n  flex-direction: row;\n}\n.header[dir=rtl] .header-left {\n  justify-content: flex-start;\n}\n.header[dir=rtl] .header-right {\n  justify-content: flex-end;\n}\n\n[dir=rtl] .search-container .search-icon {\n  left: auto;\n  right: 12px;\n}\n[dir=rtl] .search-container .search-input {\n  padding: 0.5rem 2.5rem 0.5rem 0.5rem;\n}\n[dir=rtl] .language-toggle .btn i {\n  margin-right: 0;\n  margin-left: 0.25rem;\n}\n[dir=rtl] .user-profile .btn .user-avatar {\n  margin-right: 0;\n  margin-left: 0.5rem;\n}\n[dir=rtl] .user-profile .dropdown-menu .dropdown-item i {\n  margin-right: 0;\n  margin-left: 0.5rem;\n}\n[dir=rtl] .notifications-dropdown .dropdown-menu {\n  right: auto !important;\n  left: 0 !important;\n}\n[dir=rtl] .user-profile .dropdown-menu {\n  right: auto !important;\n  left: 0 !important;\n}\n@media (max-width: 767.98px) {\n  [dir=rtl] .notifications-dropdown .dropdown-menu,\n  [dir=rtl] .user-profile .dropdown-menu {\n    right: auto !important;\n    left: 0 !important;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .header-container {\n    padding: 0.75rem 1rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .header {\n    min-height: 60px;\n  }\n  .header-container {\n    padding: 0.5rem 0.75rem;\n    flex-wrap: nowrap;\n  }\n  .header-left {\n    flex-shrink: 0;\n  }\n  .header-left .logo-section {\n    gap: 0.5rem;\n  }\n  .header-left .logo-section .app-title {\n    font-size: 1rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 150px;\n  }\n  .header-right {\n    gap: 0.5rem;\n    flex-shrink: 0;\n    min-width: 0;\n  }\n  .search-section {\n    display: none;\n  }\n  .header-actions {\n    gap: 0.375rem;\n    flex-shrink: 0;\n  }\n  .mobile-menu-toggle .btn {\n    padding: 0.4rem;\n    font-size: 1.1rem;\n    min-width: 40px;\n    min-height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .language-toggle .btn {\n    padding: 0.35rem 0.5rem;\n    font-size: 0.8rem;\n    min-width: 40px;\n    min-height: 40px;\n  }\n  .language-toggle .btn span {\n    display: none;\n  }\n  .language-toggle .btn i {\n    margin-right: 0;\n  }\n  .notifications-dropdown .btn {\n    padding: 0.4rem;\n    min-width: 40px;\n    min-height: 40px;\n    font-size: 1.1rem;\n  }\n  .notifications-dropdown .btn .badge {\n    font-size: 0.65rem;\n    padding: 0.2rem 0.4rem;\n    top: 2px;\n    right: 2px;\n  }\n  .notifications-dropdown .dropdown-menu {\n    min-width: 280px;\n    max-width: 90vw;\n    right: 0 !important;\n    left: auto !important;\n    transform: translateX(0);\n  }\n  .user-profile .btn {\n    padding: 0.4rem;\n    min-width: 40px;\n    min-height: 40px;\n  }\n  .user-profile .btn .user-avatar {\n    width: 28px;\n    height: 28px;\n    margin-right: 0;\n  }\n  .user-profile .btn .user-avatar i {\n    font-size: 14px;\n  }\n  .user-profile .btn .user-info {\n    display: none;\n  }\n  .user-profile .btn i.fa-chevron-down {\n    display: none;\n  }\n  .user-profile .dropdown-menu {\n    min-width: 220px;\n    max-width: 90vw;\n    right: 0 !important;\n    left: auto !important;\n    transform: translateX(0);\n  }\n}\n@media (max-width: 575.98px) {\n  .header {\n    min-height: 56px;\n  }\n  .header-container {\n    padding: 0.4rem 0.5rem;\n  }\n  .header-left .logo-section {\n    gap: 0.375rem;\n  }\n  .header-left .logo-section .app-title {\n    font-size: 0.9rem;\n    max-width: 120px;\n  }\n  .header-right {\n    gap: 0.375rem;\n  }\n  .header-actions {\n    gap: 0.25rem;\n  }\n  .mobile-menu-toggle {\n    margin-right: 0.25rem;\n  }\n  .mobile-menu-toggle .mobile-menu-btn {\n    padding: 0.4rem 0.6rem;\n    font-size: 1.3rem;\n    min-width: 40px;\n    min-height: 40px;\n  }\n  .mobile-menu-toggle .mobile-menu-btn i {\n    font-size: 1.3rem;\n  }\n  .language-toggle .btn {\n    padding: 0.3rem 0.4rem;\n    font-size: 0.75rem;\n    min-width: 36px;\n    min-height: 36px;\n  }\n  .notifications-dropdown .notification-btn {\n    padding: 0.35rem;\n    font-size: 1rem;\n    min-width: 36px;\n    min-height: 36px;\n  }\n  .notifications-dropdown .dropdown-menu {\n    min-width: 280px;\n    max-width: 95vw;\n    margin-top: 8px !important;\n  }\n  .notifications-dropdown .notification-header {\n    padding: 0.875rem 1rem;\n  }\n  .notifications-dropdown .notification-header .notification-title {\n    font-size: 1rem;\n  }\n  .notifications-dropdown .notification-header .notification-count-badge {\n    font-size: 0.8rem;\n    padding: 0.3rem 0.6rem;\n  }\n  .notifications-dropdown .notification-list {\n    max-height: 300px;\n  }\n  .notifications-dropdown .notification-list .notification-item {\n    padding: 0.875rem 1rem;\n    gap: 0.75rem;\n  }\n  .notifications-dropdown .notification-list .notification-item .notification-icon-wrapper {\n    width: 36px;\n    height: 36px;\n    font-size: 1rem;\n  }\n  .notifications-dropdown .notification-list .notification-item .notification-content .notification-message {\n    font-size: 0.85rem;\n  }\n  .notifications-dropdown .notification-list .notification-item .notification-content .notification-time {\n    font-size: 0.7rem;\n  }\n  .notifications-dropdown .notification-footer {\n    padding: 0.625rem 1rem;\n  }\n  .notifications-dropdown .notification-footer .view-all-btn {\n    font-size: 0.85rem;\n    padding: 0.4rem;\n  }\n  .user-profile .btn {\n    padding: 0.35rem;\n    min-width: 36px;\n    min-height: 36px;\n  }\n  .user-profile .btn .user-avatar {\n    width: 26px;\n    height: 26px;\n  }\n  .user-profile .btn .user-avatar i {\n    font-size: 13px;\n  }\n  .user-profile .dropdown-menu {\n    min-width: 200px;\n    max-width: 95vw;\n  }\n}\n@media (max-width: 375px) {\n  .header-left .logo-section .app-title {\n    display: none;\n  }\n  .header-right {\n    gap: 0.25rem;\n  }\n  .header-actions {\n    gap: 0.2rem;\n  }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .header-container {\n    padding: 0.75rem 1.25rem;\n  }\n  .search-section {\n    min-width: 200px;\n    max-width: 300px;\n  }\n  .header-actions {\n    gap: 0.625rem;\n  }\n}\n@media (min-width: 1200px) {\n  .header-container {\n    padding: 0.875rem 1.5rem;\n    max-width: 1600px;\n    margin: 0 auto;\n  }\n  .search-section {\n    min-width: 300px;\n    max-width: 450px;\n  }\n  .header-actions {\n    gap: 1rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .header {\n    background: linear-gradient(180deg, #004d40 0%, #00695c 100%);\n  }\n  .search-input {\n    background: rgba(255, 255, 255, 0.8);\n  }\n  .search-input:focus {\n    background: white;\n  }\n  .dropdown-menu {\n    background: #2c3e50;\n    border-color: #34495e;\n  }\n  .dropdown-menu .dropdown-item {\n    color: #ecf0f1;\n  }\n  .dropdown-menu .dropdown-item:hover {\n    background-color: #34495e;\n  }\n  .dropdown-menu .dropdown-header {\n    color: #bdc3c7;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7RUFFQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFJQSx3RUFBQTtBQUZGO0FBS0U7RUFDRSx3RUFBQTtBQUhKOztBQVFBOzs7RUFHRSx3RUFBQTtBQUxGOztBQVNBO0VBQ0Usd0VBQUE7QUFORjs7QUFVQTs7O0VBR0Usd0VBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFQRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFSRjtBQVVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxpQkFBQTtBQVRKO0FBWUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFWTjtBQWFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWE47QUFjTTtFQVBGO0lBUUksV0FBQTtJQUNBLFlBQUE7RUFYTjtBQUNGO0FBY0k7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVpOO0FBY007RUFMRjtJQU1JLGtCQUFBO0VBWE47QUFDRjs7QUFpQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBZEY7QUFnQkU7RUFQRjtJQVFJLFdBQUE7RUFiRjtBQUNGOztBQWlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFkRjtBQWdCRTtFQUxGO0lBTUksYUFBQTtFQWJGO0FBQ0Y7QUFlRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQWJKO0FBZUk7RUFDRSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFiTjtBQWdCSTtFQUNFLHNCQUFBO0FBZE47QUFpQkk7RUFDRSxhQUFBO0VBQ0EsOENBQUE7QUFmTjtBQWtCSTtFQUNFLGlCQUFBO0FBaEJOOztBQXNCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBbkJGO0FBcUJFO0VBTkY7SUFPSSxXQUFBO0VBbEJGO0FBQ0Y7O0FBc0JBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBbkJGO0FBcUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQW5CSjtBQXFCSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQW5CTjtBQXVCRTtFQWxCRjtJQW1CSSx3QkFBQTtFQXBCRjtBQUNGOztBQXlCRTtFQUNFLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUF0Qko7QUF3Qkk7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0FBdEJOO0FBeUJJO0VBQ0UscUJBQUE7QUF2Qk47O0FBNkJBO0VBQ0Usa0JBQUE7QUExQkY7QUE0QkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUExQko7QUE0Qkk7RUFDRSwrQkFBQTtFQUNBLHFCQUFBO0FBMUJOO0FBNkJJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBM0JOO0FBOEJJO0VBQ0UsaUJBQUE7QUE1Qk47QUErQkk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBN0JOO0FBaUNFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQS9CSjtBQWtDSTtFQUNFLFVBQUE7QUFoQ047QUFtQ0k7RUFDRSxtQkFBQTtBQWpDTjtBQW9DSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFsQ047QUFvQ007RUFDRSxtQkFBQTtBQWxDUjtBQXVDRTtFQUNFLDZEQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXJDSjtBQXVDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBckNOO0FBd0NJO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQXRDTjtBQXdDTTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBdENSO0FBMENJO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMENBQUE7QUF4Q047QUE0Q0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUExQ0o7QUE0Q0k7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQTFDTjtBQTRDTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBMUNSO0FBNkNNO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBM0NSO0FBK0NJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUE3Q047QUErQ007RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0FBN0NSO0FBZ0RNO0VBQ0UsbUJBQUE7QUE5Q1I7QUFpRE07RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUEvQ1I7QUFpRFE7RUFDRSxZQUFBO0FBL0NWO0FBbURNO0VBQ0UsNkRBQUE7QUFqRFI7QUFvRE07RUFDRSw2REFBQTtBQWxEUjtBQXFETTtFQUNFLDZEQUFBO0FBbkRSO0FBc0RNO0VBQ0UsNkRBQUE7QUFwRFI7QUF1RE07RUFDRSxPQUFBO0VBQ0EsWUFBQTtBQXJEUjtBQXVEUTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQXJEVjtBQXdEUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF0RFY7QUF3RFU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUF0RFo7QUE2REU7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7QUEzREo7QUE2REk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUEzRE47QUE2RE07RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBM0RSO0FBOERNO0VBQ0Usa0JBQUE7QUE1RFI7QUErRE07RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBN0RSOztBQW1FQTtFQUNFO0lBQ0UsbUJBQUE7RUFoRUY7RUFrRUE7SUFDRSxxQkFBQTtFQWhFRjtBQUNGO0FBcUVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQW5FSjtBQXFFSTtFQUNFLCtCQUFBO0FBbkVOO0FBc0VJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQXBFTjtBQXNFTTtFQUNFLGVBQUE7QUFwRVI7QUF3RUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdEVOO0FBd0VNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXRFUjtBQXlFTTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUF2RVI7QUEyRUk7RUFDRSxnQkFBQTtBQXpFTjtBQTZFRTtFQUNFLGdCQUFBO0FBM0VKO0FBNkVJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUEzRU47QUE2RU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBM0VSO0FBNkVRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBM0VWO0FBOEVRO0VBQ0UsT0FBQTtFQUNBLFlBQUE7QUE1RVY7QUE4RVU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUE1RVo7QUErRVU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQTdFWjtBQW1GSTtFQUNFLG9CQUFBO0FBakZOO0FBbUZNO0VBQ0UseUJBQUE7QUFqRlI7QUFvRk07RUFDRSxXQUFBO0VBQ0Esb0JBQUE7QUFsRlI7QUFzRk07RUFDRSxjQUFBO0FBcEZSO0FBc0ZRO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBcEZWO0FBdUZRO0VBQ0UsY0FBQTtBQXJGVjs7QUErRkU7RUFDRSxtQkFBQTtBQTVGSjtBQStGRTtFQUNFLDJCQUFBO0FBN0ZKO0FBZ0dFO0VBQ0UseUJBQUE7QUE5Rko7O0FBb0dJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFqR047QUFvR0k7RUFDRSxvQ0FBQTtBQWxHTjtBQXNHRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQXBHSjtBQXVHRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQXJHSjtBQXdHRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQXRHSjtBQXlHRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUF2R0o7QUEwR0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBeEdKO0FBMkdFO0VBQ0U7O0lBRUUsc0JBQUE7SUFDQSxrQkFBQTtFQXpHSjtBQUNGOztBQThHQTtFQUNFO0lBQ0UscUJBQUE7RUEzR0Y7QUFDRjtBQStHQTtFQUNFO0lBQ0UsZ0JBQUE7RUE3R0Y7RUFnSEE7SUFDRSx1QkFBQTtJQUNBLGlCQUFBO0VBOUdGO0VBaUhBO0lBQ0UsY0FBQTtFQS9HRjtFQWlIRTtJQUNFLFdBQUE7RUEvR0o7RUFpSEk7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7RUEvR047RUFvSEE7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7RUFsSEY7RUFxSEE7SUFDRSxhQUFBO0VBbkhGO0VBc0hBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUFwSEY7RUF3SEU7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQXRISjtFQTJIRTtJQUNFLHVCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUF6SEo7RUEySEk7SUFDRSxhQUFBO0VBekhOO0VBNEhJO0lBQ0UsZUFBQTtFQTFITjtFQWdJRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQTlISjtFQWdJSTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtFQTlITjtFQWtJRTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSx3QkFBQTtFQWhJSjtFQXFJRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFuSUo7RUFxSUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFuSU47RUFxSU07SUFDRSxlQUFBO0VBbklSO0VBdUlJO0lBQ0UsYUFBQTtFQXJJTjtFQXdJSTtJQUNFLGFBQUE7RUF0SU47RUEwSUU7SUFDRSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0Esd0JBQUE7RUF4SUo7QUFDRjtBQTRJQTtFQUNFO0lBQ0UsZ0JBQUE7RUExSUY7RUE2SUE7SUFDRSxzQkFBQTtFQTNJRjtFQStJRTtJQUNFLGFBQUE7RUE3SUo7RUErSUk7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VBN0lOO0VBa0pBO0lBQ0UsYUFBQTtFQWhKRjtFQW1KQTtJQUNFLFlBQUE7RUFqSkY7RUFvSkE7SUFDRSxxQkFBQTtFQWxKRjtFQW9KRTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFsSko7RUFvSkk7SUFDRSxpQkFBQTtFQWxKTjtFQXdKRTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUF0Sko7RUEySkU7SUFDRSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUF6Sko7RUE0SkU7SUFDRSxnQkFBQTtJQUNBLGVBQUE7SUFDQSwwQkFBQTtFQTFKSjtFQTZKRTtJQUNFLHNCQUFBO0VBM0pKO0VBNkpJO0lBQ0UsZUFBQTtFQTNKTjtFQThKSTtJQUNFLGlCQUFBO0lBQ0Esc0JBQUE7RUE1Sk47RUFnS0U7SUFDRSxpQkFBQTtFQTlKSjtFQWdLSTtJQUNFLHNCQUFBO0lBQ0EsWUFBQTtFQTlKTjtFQWdLTTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQTlKUjtFQWtLUTtJQUNFLGtCQUFBO0VBaEtWO0VBbUtRO0lBQ0UsaUJBQUE7RUFqS1Y7RUF1S0U7SUFDRSxzQkFBQTtFQXJLSjtFQXVLSTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQXJLTjtFQTJLRTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBektKO0VBMktJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUF6S047RUEyS007SUFDRSxlQUFBO0VBektSO0VBOEtFO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBNUtKO0FBQ0Y7QUFpTEE7RUFHTTtJQUNFLGFBQUE7RUFqTE47RUFzTEE7SUFDRSxZQUFBO0VBcExGO0VBdUxBO0lBQ0UsV0FBQTtFQXJMRjtBQUNGO0FBeUxBO0VBQ0U7SUFDRSx3QkFBQTtFQXZMRjtFQTBMQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUF4TEY7RUEyTEE7SUFDRSxhQUFBO0VBekxGO0FBQ0Y7QUE2TEE7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0VBM0xGO0VBOExBO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQTVMRjtFQStMQTtJQUNFLFNBQUE7RUE3TEY7QUFDRjtBQWlNQTtFQUVFO0lBQ0UsNkRBQUE7RUFoTUY7RUFtTUE7SUFDRSxvQ0FBQTtFQWpNRjtFQW1NRTtJQUNFLGlCQUFBO0VBak1KO0VBcU1BO0lBQ0UsbUJBQUE7SUFDQSxxQkFBQTtFQW5NRjtFQXFNRTtJQUNFLGNBQUE7RUFuTUo7RUFxTUk7SUFDRSx5QkFBQTtFQW5NTjtFQXVNRTtJQUNFLGNBQUE7RUFyTUo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDA0ZDQwIDAlLCAjMDA2OTVjIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuIC8vIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gXG4gIFxuICAvLyBFbnN1cmUgdGhlIGdyZWVuIGdyYWRpZW50IGlzIGFsd2F5cyBhcHBsaWVkXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDRkNDAgMCUsICMwMDY5NWMgMTAwJSkgIWltcG9ydGFudDtcbiAgXG4gIC8vIEFkZGl0aW9uYWwgc3BlY2lmaWNpdHkgdG8gb3ZlcnJpZGUgYW55IGNvbmZsaWN0aW5nIHN0eWxlc1xuICAmLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwNGQ0MCAwJSwgIzAwNjk1YyAxMDAlKSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIEZvcmNlIHRoZSBoZWFkZXIgYmFja2dyb3VuZCB3aXRoIG1heGltdW0gc3BlY2lmaWNpdHlcbmFwcC1oZWFkZXIgLmhlYWRlcixcbmFwcC1oZWFkZXIgaGVhZGVyLmhlYWRlcixcbmFwcC1oZWFkZXIgLmhlYWRlci5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDA0ZDQwIDAlLCAjMDA2OTVjIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZGl0aW9uYWwgc3BlY2lmaWNpdHkgZm9yIHRoZSBoZWFkZXIgZWxlbWVudFxuaGVhZGVyLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDRkNDAgMCUsICMwMDY5NWMgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLy8gT3ZlcnJpZGUgYW55IHBvdGVudGlhbCBCb290c3RyYXAgb3IgZ2xvYmFsIHN0eWxlc1xuLmhlYWRlcixcbi5oZWFkZXIuaGVhZGVyLFxuYXBwLWhlYWRlciAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwNGQ0MCAwJSwgIzAwNjk1YyAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gTGVmdCBTaWRlIC0gTG9nbyBhbmQgQXBwIFRpdGxlXG4uaGVhZGVyLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgXG4gIC5sb2dvLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNzVyZW07XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgLy8gQWRkIGJyZWF0aGluZyByb29tIHNvIHRoZSBsb2dvIGRvZXNuJ3Qgc3RpY2sgdG8gdGhlIHNpZGViYXIgZWRnZVxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIFxuICAgIC8vIFJUTDogc3BhY2luZyBzaG91bGQgYmUgb24gdGhlIG90aGVyIHNpZGVcbiAgICBbZGlyPVwicnRsXCJdICYge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIC5sb2dvIHtcbiAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47IC8vIEVuc3VyZXMgbG9nbyBtYWludGFpbnMgYXNwZWN0IHJhdGlvXG4gICAgIC8vIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDBkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAwJSk7IC8vIE1ha2VzIFNWRyB3aGl0ZSBmb3IgaGVhZGVyXG4gICAgICBcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hcHAtdGl0bGUge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSaWdodCBTaWRlIC0gQWxsIE90aGVyIEVsZW1lbnRzXG4uaGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cbn1cblxuLy8gTW9iaWxlIE1lbnUgVG9nZ2xlXG4ubW9iaWxlLW1lbnUtdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBkaXNwbGF5OiBub25lOyAvLyBIaWRlIG9uIGRlc2t0b3AgKDk5MnB4KyksIHNob3cgb24gbW9iaWxlL3RhYmxldFxuICB9XG4gIFxuICAubW9iaWxlLW1lbnUtYnRuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG1pbi13aWR0aDogNDRweDtcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICBcbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIH1cbiAgICBcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIH1cbiAgICBcbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgfVxufVxuXG4vLyBIZWFkZXIgQWN0aW9uc1xuLmhlYWRlci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAgIGdhcDogMC41cmVtO1xuICB9XG59XG5cbi8vIFdlbGNvbWUgTWVzc2FnZVxuLndlbGNvbWUtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBcbiAgLndlbGNvbWUtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnw7DCn8KRwosnO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gTGFuZ3VhZ2UgVG9nZ2xlXG4ubGFuZ3VhZ2UtdG9nZ2xlIHtcbiAgLmJ0biB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgfVxuICAgIFxuICAgIGkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xuICAgIH1cbiAgfVxufVxuXG4vLyBOb3RpZmljYXRpb25zIERyb3Bkb3duXG4ubm90aWZpY2F0aW9ucy1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC5ub3RpZmljYXRpb24tYnRuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuICAgIFxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICAgIFxuICAgIC5ub3RpZmljYXRpb24tYmFkZ2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAycHg7XG4gICAgICByaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmc6IDAuMTVyZW0gMC40cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG1pbi13aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA0ZDQwO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gICAgfVxuICB9XG4gIFxuICAuZHJvcGRvd24tbWVudSB7XG4gICAgbWluLXdpZHRoOiAzODBweDtcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIFxuICAgIC8vIEN1c3RvbSBzY3JvbGxiYXJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogNnB4O1xuICAgIH1cbiAgICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIH1cbiAgICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjYzFjMWMxO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2E4YThhODtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5ub3RpZmljYXRpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjMDA0ZDQwIDEwMCUpO1xuICAgIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIFxuICAgIC5ub3RpZmljYXRpb24taGVhZGVyLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIFxuICAgIC5ub3RpZmljYXRpb24tdGl0bGUge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDAuNXJlbTtcbiAgICAgIFxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAubm90aWZpY2F0aW9uLWNvdW50LWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nOiAwLjM1cmVtIDAuN3JlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgfVxuICB9XG4gIFxuICAubm90aWZpY2F0aW9uLWxpc3Qge1xuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBcbiAgICAubm90aWZpY2F0aW9uLWVtcHR5IHtcbiAgICAgIHBhZGRpbmc6IDNyZW0gMnJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBjb2xvcjogI2RlZTJlNjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGdhcDogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuICAgICAgXG4gICAgICAubm90aWZpY2F0aW9uLWljb24td3JhcHBlciB7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgXG4gICAgICAgIGkge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAmLm5vdGlmaWNhdGlvbi1pbmZvIC5ub3RpZmljYXRpb24taWNvbi13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzIxOTZmMyAwJSwgIzE5NzZkMiAxMDAlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi5ub3RpZmljYXRpb24tc3VjY2VzcyAubm90aWZpY2F0aW9uLWljb24td3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0Y2FmNTAgMCUsICMzODhlM2MgMTAwJSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgICYubm90aWZpY2F0aW9uLXdhcm5pbmcgLm5vdGlmaWNhdGlvbi1pY29uLXdyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmY5ODAwIDAlLCAjZjU3YzAwIDEwMCUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmLm5vdGlmaWNhdGlvbi1lcnJvciAubm90aWZpY2F0aW9uLWljb24td3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNDQzMzYgMCUsICNkMzJmMmYgMTAwJSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5ub3RpZmljYXRpb24tY29udGVudCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgXG4gICAgICAgIC5ub3RpZmljYXRpb24tbWVzc2FnZSB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgIGxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubm90aWZpY2F0aW9uLXRpbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDAuMzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICAgIFxuICAgICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAubm90aWZpY2F0aW9uLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgXG4gICAgLnZpZXctYWxsLWJ0biB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICBjb2xvcjogIzAwNjk1YztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICAgICAgICBjb2xvcjogIzAwNGQ0MDtcbiAgICAgICAgZ2FwOiAwLjc1cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpOmxhc3QtY2hpbGQge1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxufVxuXG4vLyBVc2VyIFByb2ZpbGVcbi51c2VyLXByb2ZpbGUge1xuICAuYnRuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgfVxuICAgIFxuICAgIC51c2VyLWF2YXRhciB7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgIFxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnVzZXItaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgIFxuICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC51c2VyLXJvbGUge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnVzZXItbmFtZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgXG4gICAgLmRyb3Bkb3duLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgXG4gICAgICAudXNlci1wcm9maWxlLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMC43NXJlbTtcbiAgICAgICAgXG4gICAgICAgIC51c2VyLWF2YXRhci1sYXJnZSB7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudXNlci1kZXRhaWxzIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICBcbiAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaSB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLy8gU3BlY2lhbCBzdHlsaW5nIGZvciBsb2dvdXQgYnV0dG9uXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gICAgICAgICAgY29sb3I6ICM3MjFjMjQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGkge1xuICAgICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJUTCBoZWFkZXIgYmFyOiBmaXJzdCBET00gYmxvY2sgKGxvZ28pIMOiwobCkiBpbmxpbmUtc3RhcnQgKHJpZ2h0KTsgYWN0aW9ucyDDosKGwpIgaW5saW5lLWVuZCAobGVmdCkuXG4vLyBTY29wZWQgdG8gLmhlYWRlciBvbmx5IMOiwoDClCBkbyBub3QgdXNlIHJvdy1yZXZlcnNlIGhlcmUgKGl0IGRvdWJsZWQgd2l0aCBkaXI9cnRsIGFuZCBsb29rZWQgTFRSKS5cbi5oZWFkZXJbZGlyPVwicnRsXCJdIHtcbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAuaGVhZGVyLWxlZnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5oZWFkZXItcmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbn1cblxuW2Rpcj1cInJ0bFwiXSB7XG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICAuc2VhcmNoLWljb24ge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgICBcbiAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAyLjVyZW0gMC41cmVtIDAuNXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5sYW5ndWFnZS10b2dnbGUgLmJ0biBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gIH1cbiAgXG4gIC51c2VyLXByb2ZpbGUgLmJ0biAudXNlci1hdmF0YXIge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICB9XG4gIFxuICAudXNlci1wcm9maWxlIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIGkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICB9XG4gIFxuICAubm90aWZpY2F0aW9ucy1kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC51c2VyLXByb2ZpbGUgLmRyb3Bkb3duLW1lbnUge1xuICAgIHJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAubm90aWZpY2F0aW9ucy1kcm9wZG93biAuZHJvcGRvd24tbWVudSxcbiAgICAudXNlci1wcm9maWxlIC5kcm9wZG93bi1tZW51IHtcbiAgICAgIHJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgQnJlYWtwb2ludHNcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICB9XG4gIFxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLmhlYWRlciB7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgfVxuICBcbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIFxuICAuaGVhZGVyLWxlZnQge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIFxuICAgIC5sb2dvLXNlY3Rpb24ge1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICBcbiAgICAgIC5hcHAtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmhlYWRlci1yaWdodCB7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG4gIFxuICAuc2VhcmNoLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZ2FwOiAwLjM3NXJlbTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuICBcbiAgLm1vYmlsZS1tZW51LXRvZ2dsZSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuICBcbiAgLmxhbmd1YWdlLXRvZ2dsZSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nOiAwLjM1cmVtIDAuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIFxuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAubm90aWZpY2F0aW9ucy1kcm9wZG93biB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBcbiAgICAgIC5iYWRnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgIG1pbi13aWR0aDogMjgwcHg7XG4gICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgfVxuICBcbiAgLnVzZXItcHJvZmlsZSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgXG4gICAgICAudXNlci1hdmF0YXIge1xuICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIFxuICAgICAgICBpIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnVzZXItaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGkuZmEtY2hldnJvbi1kb3duIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgbWluLXdpZHRoOiAyMjBweDtcbiAgICAgIG1heC13aWR0aDogOTB2dztcbiAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuaGVhZGVyIHtcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICB9XG4gIFxuICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC40cmVtIDAuNXJlbTtcbiAgfVxuICBcbiAgLmhlYWRlci1sZWZ0IHtcbiAgICAubG9nby1zZWN0aW9uIHtcbiAgICAgIGdhcDogMC4zNzVyZW07XG4gICAgICBcbiAgICAgIC5hcHAtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5oZWFkZXItcmlnaHQge1xuICAgIGdhcDogMC4zNzVyZW07XG4gIH1cbiAgXG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZ2FwOiAwLjI1cmVtO1xuICB9XG4gIFxuICAubW9iaWxlLW1lbnUtdG9nZ2xlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gICAgXG4gICAgLm1vYmlsZS1tZW51LWJ0biB7XG4gICAgICBwYWRkaW5nOiAwLjRyZW0gMC42cmVtO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAubGFuZ3VhZ2UtdG9nZ2xlIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjRyZW07XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBtaW4td2lkdGg6IDM2cHg7XG4gICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgIH1cbiAgfVxuICBcbiAgLm5vdGlmaWNhdGlvbnMtZHJvcGRvd24ge1xuICAgIC5ub3RpZmljYXRpb24tYnRuIHtcbiAgICAgIHBhZGRpbmc6IDAuMzVyZW07XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBtaW4td2lkdGg6IDM2cHg7XG4gICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgIH1cbiAgICBcbiAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICBtaW4td2lkdGg6IDI4MHB4O1xuICAgICAgbWF4LXdpZHRoOiA5NXZ3O1xuICAgICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5ub3RpZmljYXRpb24taGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDAuODc1cmVtIDFyZW07XG4gICAgICBcbiAgICAgIC5ub3RpZmljYXRpb24tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5ub3RpZmljYXRpb24tY291bnQtYmFkZ2Uge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgcGFkZGluZzogMC4zcmVtIDAuNnJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLm5vdGlmaWNhdGlvbi1saXN0IHtcbiAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgXG4gICAgICAubm90aWZpY2F0aW9uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAwLjg3NXJlbSAxcmVtO1xuICAgICAgICBnYXA6IDAuNzVyZW07XG4gICAgICAgIFxuICAgICAgICAubm90aWZpY2F0aW9uLWljb24td3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1jb250ZW50IHtcbiAgICAgICAgICAubm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAubm90aWZpY2F0aW9uLXRpbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5ub3RpZmljYXRpb24tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmc6IDAuNjI1cmVtIDFyZW07XG4gICAgICBcbiAgICAgIC52aWV3LWFsbC1idG4ge1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC51c2VyLXByb2ZpbGUge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZzogMC4zNXJlbTtcbiAgICAgIG1pbi13aWR0aDogMzZweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgICBcbiAgICAgIC51c2VyLWF2YXRhciB7XG4gICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgIFxuICAgICAgICBpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIG1heC13aWR0aDogOTV2dztcbiAgICB9XG4gIH1cbn1cblxuLy8gRXh0cmEgc21hbGwgZGV2aWNlc1xuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5oZWFkZXItbGVmdCB7XG4gICAgLmxvZ28tc2VjdGlvbiB7XG4gICAgICAuYXBwLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5oZWFkZXItcmlnaHQge1xuICAgIGdhcDogMC4yNXJlbTtcbiAgfVxuICBcbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBnYXA6IDAuMnJlbTtcbiAgfVxufVxuXG4vLyBUYWJsZXQgcmVzcG9uc2l2ZSAoNzY4cHggLSA5OTFweClcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIH1cbiAgXG4gIC5zZWFyY2gtc2VjdGlvbiB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyLWFjdGlvbnMge1xuICAgIGdhcDogMC42MjVyZW07XG4gIH1cbn1cblxuLy8gTGFyZ2Ugc2NyZWVucyAoMTIwMHB4KylcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAuODc1cmVtIDEuNXJlbTtcbiAgICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLnNlYXJjaC1zZWN0aW9uIHtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gIH1cbiAgXG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG59XG5cbi8vIERhcmsgdGhlbWUgc3VwcG9ydFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAvLyBLZWVwIHRoZSBncmVlbiBncmFkaWVudCBmb3IgaGVhZGVyIGV2ZW4gaW4gZGFyayBtb2RlXG4gIC5oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDRkNDAgMCUsICMwMDY5NWMgMTAwJSk7XG4gIH1cbiAgXG4gIC5zZWFyY2gtaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbiAgfVxuICBcbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQ6ICMyYzNlNTA7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzQ0OTVlO1xuICAgIFxuICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgIGNvbG9yOiAjZWNmMGYxO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NDk1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmRyb3Bkb3duLWhlYWRlciB7XG4gICAgICBjb2xvcjogI2JkYzNjNztcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4333:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinnerComponent: () => (/* binding */ LoadingSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function LoadingSpinnerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
class LoadingSpinnerComponent {
  constructor() {
    this.size = 'medium';
    this.message = '';
    this.overlay = false;
  }
  static {
    this.ɵfac = function LoadingSpinnerComponent_Factory(t) {
      return new (t || LoadingSpinnerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingSpinnerComponent,
      selectors: [["app-loading-spinner"]],
      inputs: {
        size: "size",
        message: "message",
        overlay: "overlay"
      },
      decls: 6,
      vars: 5,
      consts: [[1, "loading-spinner"], [1, "spinner"], [1, "bounce1"], [1, "bounce2"], [1, "bounce3"], ["class", "message", 4, "ngIf"], [1, "message"]],
      template: function LoadingSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoadingSpinnerComponent_div_5_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.size);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("overlay", ctx.overlay);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.loading-spinner.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  z-index: 9999;\n}\n.loading-spinner.small[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n}\n.loading-spinner.large[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  transform: scale(1.4);\n}\n\n.spinner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n\n.bounce1[_ngcontent-%COMP%], .bounce2[_ngcontent-%COMP%], .bounce3[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #00695c;\n  animation: _ngcontent-%COMP%_bounce 1.4s ease-in-out infinite both;\n}\n\n.bounce1[_ngcontent-%COMP%] {\n  animation-delay: -0.32s;\n}\n\n.bounce2[_ngcontent-%COMP%] {\n  animation-delay: -0.16s;\n}\n\n.bounce3[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  color: #666;\n  font-size: 14px;\n  text-align: center;\n}\n\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n@media (max-width: 768px) {\n  .loading-spinner[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .message[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLHFCQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0RBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSx1QkFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0U7SUFDRSxtQkFBQTtFQUZGO0VBSUE7SUFDRSxtQkFBQTtFQUZGO0FBQ0Y7QUFPRTtFQUNFLDJCQUFBO0FBTEo7O0FBVUE7RUFDRTtJQUNFLGFBQUE7RUFQRjtFQVVBO0lBQ0UsZUFBQTtFQVJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1zcGlubmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIFxyXG4gICYub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gIH1cclxuICBcclxuICAmLnNtYWxsIC5zcGlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcclxuICB9XHJcbiAgXHJcbiAgJi5sYXJnZSAuc3Bpbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDZweDtcclxufVxyXG5cclxuLmJvdW5jZTEsIC5ib3VuY2UyLCAuYm91bmNlMyB7XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTVjO1xyXG4gIGFuaW1hdGlvbjogYm91bmNlIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuLmJvdW5jZTEge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG59XHJcblxyXG4uYm91bmNlMiB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbn1cclxuXHJcbi5ib3VuY2UzIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XHJcbiAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5zcGlubmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgRGVzaWduXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5sb2FkaW5nLXNwaW5uZXIge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4815:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationComponent: () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function PaginationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" \u0639\u0631\u0636 ", ctx_r0.startItem, " \u0625\u0644\u0649 ", ctx_r0.endItem, " \u0645\u0646 ", ctx_r0.totalItems, " \u0639\u0646\u0635\u0631 ");
  }
}
function PaginationComponent_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_2_button_6_Template_button_click_0_listener() {
      const page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToPage(page_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", page_r4 === ctx_r0.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r4, " ");
  }
}
function PaginationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToFirst());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToPrevious());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_div_2_button_6_Template, 2, 3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToNext());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_2_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToLast());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.isLastPage());
  }
}
class PaginationComponent {
  constructor() {
    this.currentPage = 1;
    this.totalPages = 1;
    this.totalItems = 0;
    this.itemsPerPage = 10;
    this.showPageNumbers = true;
    this.showItemsInfo = true;
    this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pages = [];
    this.startItem = 0;
    this.endItem = 0;
  }
  ngOnChanges(changes) {
    if (changes['totalPages'] || changes['currentPage']) {
      this.generatePages();
      this.calculateItemRange();
    }
  }
  generatePages() {
    this.pages = [];
    const maxVisiblePages = 5;
    if (this.totalPages <= maxVisiblePages) {
      for (let i = 1; i <= this.totalPages; i++) {
        this.pages.push(i);
      }
    } else {
      let start = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
      let end = Math.min(this.totalPages, start + maxVisiblePages - 1);
      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }
      for (let i = start; i <= end; i++) {
        this.pages.push(i);
      }
    }
  }
  calculateItemRange() {
    this.startItem = (this.currentPage - 1) * this.itemsPerPage + 1;
    this.endItem = Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChanged.emit(page);
    }
  }
  goToFirst() {
    this.goToPage(1);
  }
  goToLast() {
    this.goToPage(this.totalPages);
  }
  goToPrevious() {
    this.goToPage(this.currentPage - 1);
  }
  goToNext() {
    this.goToPage(this.currentPage + 1);
  }
  isFirstPage() {
    return this.currentPage === 1;
  }
  isLastPage() {
    return this.currentPage === this.totalPages;
  }
  static {
    this.ɵfac = function PaginationComponent_Factory(t) {
      return new (t || PaginationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaginationComponent,
      selectors: [["app-pagination"]],
      inputs: {
        currentPage: "currentPage",
        totalPages: "totalPages",
        totalItems: "totalItems",
        itemsPerPage: "itemsPerPage",
        showPageNumbers: "showPageNumbers",
        showItemsInfo: "showItemsInfo"
      },
      outputs: {
        pageChanged: "pageChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 2,
      consts: [[1, "pagination-container"], ["class", "items-info", 4, "ngIf"], ["class", "pagination-controls", 4, "ngIf"], [1, "items-info"], [1, "items-text"], [1, "pagination-controls"], [1, "pagination-btn", 3, "click", "disabled"], [1, "fas", "fa-angle-double-left"], [1, "fas", "fa-angle-left"], [1, "page-numbers"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "fas", "fa-angle-right"], [1, "fas", "fa-angle-double-right"], [1, "page-btn", 3, "click"]],
      template: function PaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_div_1_Template, 3, 3, "div", 1)(2, PaginationComponent_div_2_Template, 11, 13, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemsInfo);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPageNumbers && ctx.totalPages > 1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  margin: 20px 0;\n}\n\n.items-info[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  font-size: 0.9rem;\n}\n\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.pagination-btn[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  color: #495057;\n  padding: 8px 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n}\n.pagination-btn[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.pagination-btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n\n.page-btn[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  color: #495057;\n  padding: 8px 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-width: 40px;\n  font-size: 0.9rem;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: #00695c;\n  border-color: #00695c;\n  color: white;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]   i.fa-angle-left[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n[dir=rtl][_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]   i.fa-angle-right[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n[dir=rtl][_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]   i.fa-angle-double-left[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n[dir=rtl][_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]   i.fa-angle-double-right[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n\n@media (max-width: 768px) {\n  .pagination-container[_ngcontent-%COMP%] {\n    gap: 15px;\n    margin: 15px 0;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .pagination-btn[_ngcontent-%COMP%], .page-btn[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    min-width: 36px;\n    font-size: 0.85rem;\n  }\n  .page-numbers[_ngcontent-%COMP%] {\n    gap: 3px;\n  }\n  .items-info[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .page-numbers[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .pagination-btn[_ngcontent-%COMP%], .page-btn[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    min-width: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGRjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUZKO0FBS0U7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUhKOztBQVNFO0VBQ0UscUJBQUE7QUFOSjtBQVNFO0VBQ0UscUJBQUE7QUFQSjtBQVVFO0VBQ0UscUJBQUE7QUFSSjtBQVdFO0VBQ0UscUJBQUE7QUFUSjs7QUFjQTtFQUNFO0lBQ0UsU0FBQTtJQUNBLGNBQUE7RUFYRjtFQWNBO0lBQ0UsUUFBQTtFQVpGO0VBZUE7O0lBRUUsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUFiRjtFQWdCQTtJQUNFLFFBQUE7RUFkRjtFQWlCQTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7RUFmRjtBQUNGO0FBa0JBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLFNBQUE7RUFoQkY7RUFtQkE7SUFDRSxTQUFBO0VBakJGO0VBb0JBOztJQUVFLGlCQUFBO0lBQ0EsZUFBQTtFQWxCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5pdGVtcy1pbmZvIHtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24tY29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiA0MHB4O1xyXG4gIFxyXG4gICY6aG92ZXI6bm90KC5kaXNhYmxlZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2FkYjViZDtcclxuICB9XHJcbiAgXHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuICBcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2UtbnVtYmVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLnBhZ2UtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIG1pbi13aWR0aDogNDBweDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBcclxuICAmOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYWRiNWJkO1xyXG4gIH1cclxuICBcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2OTVjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUlRMIFN1cHBvcnRcclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgLnBhZ2luYXRpb24tYnRuIGkuZmEtYW5nbGUtbGVmdCB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uLWJ0biBpLmZhLWFuZ2xlLXJpZ2h0IHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24tYnRuIGkuZmEtYW5nbGUtZG91YmxlLWxlZnQge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbi1idG4gaS5mYS1hbmdsZS1kb3VibGUtcmlnaHQge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnBhZ2luYXRpb24tY29udGFpbmVyIHtcclxuICAgIGdhcDogMTVweDtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbi1jb250cm9scyB7XHJcbiAgICBnYXA6IDZweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24tYnRuLFxyXG4gIC5wYWdlLWJ0biB7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIG1pbi13aWR0aDogMzZweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbnVtYmVycyB7XHJcbiAgICBnYXA6IDNweDtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW1zLWluZm8ge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnBhZ2luYXRpb24tY29udHJvbHMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtbnVtYmVycyB7XHJcbiAgICBvcmRlcjogLTE7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uLWJ0bixcclxuICAucGFnZS1idG4ge1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1417:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ 8709);








const _c0 = () => ({
  exact: true
});
function SidebarComponent_li_6_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r2.label);
  }
}
function SidebarComponent_li_6_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("rotated", menuItem_r2.isExpanded);
  }
}
function SidebarComponent_li_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_6_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toggleMenu(menuItem_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_li_6_div_1_span_2_Template, 2, 1, "span", 25)(3, SidebarComponent_li_6_div_1_div_3_Template, 2, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("expanded", menuItem_r2.isExpanded)("has-children", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](menuItem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isCollapsed);
  }
}
function SidebarComponent_li_6_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r2.label);
  }
}
function SidebarComponent_li_6_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](menuItem_r2.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", menuItem_r2.badge, " ");
  }
}
function SidebarComponent_li_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_li_6_a_2_span_2_Template, 2, 1, "span", 25)(3, SidebarComponent_li_6_a_2_span_3_Template, 2, 3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", menuItem_r2.route)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](menuItem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r2.badge && !ctx_r2.isCollapsed);
  }
}
function SidebarComponent_li_6_ul_3_li_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](subItem_r4.label);
  }
}
function SidebarComponent_li_6_ul_3_li_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](subItem_r4.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", subItem_r4.badge, " ");
  }
}
function SidebarComponent_li_6_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 35)(1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_li_6_ul_3_li_1_span_3_Template, 2, 1, "span", 38)(4, SidebarComponent_li_6_ul_3_li_1_span_4_Template, 2, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subItem_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r2.isMenuActive(subItem_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", subItem_r4.route)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](subItem_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", subItem_r4.badge && !ctx_r2.isCollapsed);
  }
}
function SidebarComponent_li_6_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_6_ul_3_li_1_Template, 5, 9, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("expanded", menuItem_r2.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menuItem_r2.children);
  }
}
function SidebarComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_6_div_1_Template, 4, 8, "div", 20)(2, SidebarComponent_li_6_a_2_Template, 4, 7, "a", 21)(3, SidebarComponent_li_6_ul_3_Template, 2, 3, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r2.isMenuActive(menuItem_r2))("has-active-child", ctx_r2.hasActiveChild(menuItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r2.children && menuItem_r2.children.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !menuItem_r2.children || menuItem_r2.children.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r2.children && menuItem_r2.children.length > 0);
  }
}
function SidebarComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.currentUser.email);
  }
}
class SidebarComponent {
  constructor(languageService, translationService, authService, router, cdr) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.authService = authService;
    this.router = router;
    this.cdr = cdr;
    this.sidebarToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.closeMobileMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.currentLanguage = 'ar';
    this.isCollapsed = false;
    this.menuItems = [];
    this.showLogoutConfirm = false;
    this.currentUser = null;
    this.subscriptions = [];
    this.logoutConfirmData = {
      title: '',
      message: '',
      confirmText: 'OK',
      cancelText: 'Cancel',
      type: 'warning'
    };
  }
  ngOnInit() {
    // Load current user
    this.loadCurrentUser();
    // Subscribe to user changes
    const userSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.cdr.detectChanges();
    });
    this.subscriptions.push(userSub);
    // Subscribe to language changes
    const langSub = this.languageService.currentLanguage$.subscribe(lang => {
      console.log('Sidebar: Language changed to:', lang);
      console.log('Sidebar: Direction will be:', lang === 'ar' ? 'RTL' : 'LTR');
      this.currentLanguage = lang;
      this.initializeMenuItems(); // Re-initialize menu items with new language
      this.cdr.detectChanges(); // Force change detection
      // Debug: Check if classes are applied
      setTimeout(() => {
        const sidebarElement = document.querySelector('.sidebar');
        if (sidebarElement) {
          console.log('Sidebar element found:', sidebarElement);
          console.log('Sidebar classes:', sidebarElement.className);
          console.log('Sidebar has rtl class:', sidebarElement.classList.contains('rtl'));
          console.log('Sidebar has ltr class:', sidebarElement.classList.contains('ltr'));
          console.log('Sidebar dir attribute:', sidebarElement.getAttribute('dir'));
          const computedStyle = window.getComputedStyle(sidebarElement);
          console.log('Sidebar left position:', computedStyle.left);
          console.log('Sidebar right position:', computedStyle.right);
          console.log('Sidebar position:', computedStyle.position);
        } else {
          console.log('Sidebar element not found!');
        }
      }, 100);
    });
    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    console.log('Sidebar: Initialized with language:', this.currentLanguage);
    // Load saved sidebar state
    this.loadSidebarState();
    this.initializeMenuItems();
    // Debug: Log current path and menu items
    console.log('Current path:', window.location.pathname);
    console.log('Menu items:', this.menuItems);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  loadCurrentUser() {
    this.currentUser = this.authService.getCurrentUser();
  }
  getUserDisplayName() {
    return this.currentUser?.username || this.getTranslation('adminUser') || 'Admin User';
  }
  getUserRole() {
    if (!this.currentUser) {
      return this.getTranslation('systemAdministrator') || 'System Administrator';
    }
    const roleMap = {
      'super-user': {
        ar: 'مستخدم فائق',
        en: 'Super User'
      },
      'admin-user': {
        ar: 'مدير',
        en: 'Admin'
      },
      'regular-user': {
        ar: 'مستخدم',
        en: 'User'
      }
    };
    const role = roleMap[this.currentUser.userType] || roleMap['regular-user'];
    return this.currentLanguage === 'ar' ? role.ar : role.en;
  }
  loadSidebarState() {
    const savedState = localStorage.getItem('sidebarCollapsed');
    this.isCollapsed = savedState === 'true';
  }
  saveSidebarState() {
    localStorage.setItem('sidebarCollapsed', this.isCollapsed.toString());
  }
  initializeMenuItems() {
    this.menuItems = [{
      id: 'dashboard',
      label: this.getTranslation('dashboard'),
      icon: 'fas fa-tachometer-alt',
      route: '/dashboard'
    }, {
      id: 'locations',
      label: this.getTranslation('locations'),
      icon: 'fas fa-map-marker-alt',
      children: [{
        id: 'locations',
        label: this.getTranslation('locations'),
        icon: 'fas fa-share-alt',
        route: '/locations'
      }, {
        id: 'sections',
        label: this.getTranslation('sections'),
        icon: 'fas fa-th-large',
        route: '/locations/sections'
      }]
    }, {
      id: 'advertisements',
      label: this.getTranslation('advertisements'),
      icon: 'fas fa-bullhorn',
      children: [
      // {
      //   id: 'advertising-banner',
      //   label: this.getTranslation('advertisingBanner'),
      //   icon: 'fas fa-image',
      //   route: '/advertisements/banner'
      // },
      {
        id: 'manage-advertisements',
        label: this.getTranslation('manageAdvertisements') || 'Manage Advertisements',
        icon: 'fas fa-cog',
        route: '/advertisements/advertisements'
      }
      // {
      //   id: 'view-advertisements',
      //   label: this.getTranslation('viewAdvertisements'),
      //   icon: 'fas fa-eye',
      //   route: '/advertisements'
      // }
      ]
    },
    // {
    //   id: 'display-ads',
    //   label: this.getTranslation('displayAds'),
    //   icon: 'fas fa-broadcast-tower',
    //   route: '/display-ads'
    // },
    // {
    //   id: 'notifications',
    //   label: this.getTranslation('notifications'),
    //   icon: 'fas fa-bell',
    //   children: [
    //     {
    //       id: 'notification-dashboard',
    //       label: this.getTranslation('notificationDashboard'),
    //       icon: 'fas fa-chart-line',
    //       route: '/notifications/dashboard'
    //     },
    //     {
    //       id: 'notifications-management',
    //       label: this.getTranslation('notificationManagement'),
    //       icon: 'fas fa-list',
    //       route: '/notifications/notifications'
    //     },
    //     {
    //       id: 'notification-settings',
    //       label: this.getTranslation('notificationSettings'),
    //       icon: 'fas fa-cog',
    //       route: '/notifications/notification-settings'
    //     }
    //   ]
    // },
    // {
    //   id: 'e-notices-evaluation',
    //   label: this.getTranslation('eNoticesAndEvaluation'),
    //   icon: 'fas fa-clipboard-check',
    //   route: '/e-notices-evaluation',
    //   badge: 'NEW',
    //   badgeClass: 'badge-warning'
    // },
    // {
    //   id: 'whatsapp',
    //   label: this.getTranslation('whatsapp'),
    //   icon: 'fab fa-whatsapp',
    //   children: [
    //     {
    //       id: 'whatsapp-messages',
    //       label: this.getTranslation('whatsappMessages'),
    //       icon: 'fas fa-comment',
    //       route: '/whatsapp'
    //     },
    //     {
    //       id: 'whatsapp-templates',
    //       label: this.getTranslation('whatsappTemplates'),
    //       icon: 'fas fa-file-code',
    //       route: '/whatsapp/whatsapp-templates'
    //     }
    //   ]
    // },
    {
      id: 'screens',
      label: this.getTranslation('screens'),
      icon: 'fas fa-tv',
      children: [{
        id: 'screen-dashboard',
        label: this.getTranslation('screenDashboard') || 'Screen Dashboard',
        icon: 'fas fa-tachometer-alt',
        route: '/screens/dashboard'
      }, {
        id: 'screen-create',
        label: this.getTranslation('createScreen') || 'Create Screen',
        icon: 'fas fa-plus-circle',
        route: '/screens/create'
      }, {
        id: 'screen-list',
        label: this.getTranslation('screenList') || 'Screen List',
        icon: 'fas fa-list',
        route: '/screens/list'
      }, {
        id: 'screen-grouping',
        label: this.getTranslation('screenGrouping') || 'Screen Grouping',
        icon: 'fas fa-layer-group',
        route: '/screens/grouping'
      }, {
        id: 'screen-monitor',
        label: this.getTranslation('screenMonitor') || 'Screen Monitor',
        icon: 'fas fa-desktop',
        route: '/screens/monitor'
      }, {
        id: 'screen-playback',
        label: this.getTranslation('videoPlaybackControl') || 'Video Playback Control',
        icon: 'fas fa-play-circle',
        route: '/screens/playback'
      }]
    }, {
      id: 'users',
      label: this.getTranslation('users'),
      icon: 'fas fa-users',
      children: [{
        id: 'users-permissions',
        label: this.getTranslation('usersAndPermissions'),
        icon: 'fas fa-user-shield',
        route: '/users'
      }]
    }, {
      id: 'system',
      label: this.getTranslation('system'),
      icon: 'fas fa-cogs',
      children: [{
        id: 'system-settings',
        label: this.getTranslation('systemSettings'),
        icon: 'fas fa-wrench',
        route: '/system/settings'
      }, {
        id: 'system-logs',
        label: this.getTranslation('systemLogs'),
        icon: 'fas fa-file-alt',
        route: '/system/logs'
      }]
    }];
  }
  toggleMenu(menuItem) {
    if (menuItem.children && menuItem.children.length > 0) {
      menuItem.isExpanded = !menuItem.isExpanded;
      console.log('Toggling menu:', menuItem.id, 'Expanded:', menuItem.isExpanded);
    }
  }
  toggleSidebar(event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    // On mobile, toggle collapse state but don't save it (always show expanded when menu opens)
    if (window.innerWidth < 768) {
      // On mobile, just close the menu, don't toggle collapse state
      this.closeMobileMenu.emit();
      return;
    }
    // Desktop: toggle collapse state normally
    this.isCollapsed = !this.isCollapsed;
    // When collapsing, close all expanded submenus
    if (this.isCollapsed) {
      this.menuItems.forEach(item => item.isExpanded = false);
    }
    this.saveSidebarState();
    this.sidebarToggle.emit(this.isCollapsed);
  }
  isMenuActive(menuItem) {
    if (menuItem.route) {
      const currentPath = window.location.pathname;
      const isActive = currentPath === menuItem.route || currentPath.startsWith(menuItem.route + '/');
      // console.log(`Checking route ${menuItem.route} against ${currentPath}: ${isActive}`);
      return isActive;
    }
    if (menuItem.children) {
      return menuItem.children.some(child => this.isMenuActive(child));
    }
    return false;
  }
  hasActiveChild(menuItem) {
    if (menuItem.children) {
      return menuItem.children.some(child => this.isMenuActive(child));
    }
    return false;
  }
  // Helper method to check if a route is exactly active
  isRouteExactlyActive(route) {
    return window.location.pathname === route;
  }
  // Helper method to check if a route is partially active
  isRoutePartiallyActive(route) {
    const currentPath = window.location.pathname;
    return currentPath === route || currentPath.startsWith(route + '/');
  }
  // Use centralized translation service
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  logout() {
    // Show confirmation dialog
    this.logoutConfirmData = {
      title: this.currentLanguage === 'ar' ? 'تأكيد تسجيل الخروج' : 'Confirm Logout',
      message: this.getTranslation('confirmLogoutMessage'),
      confirmText: this.currentLanguage === 'ar' ? 'تأكيد' : 'OK',
      cancelText: this.currentLanguage === 'ar' ? 'إلغاء' : 'Cancel',
      type: 'warning'
    };
    this.showLogoutConfirm = true;
  }
  onLogoutConfirmed() {
    this.showLogoutConfirm = false;
    // Call the auth service logout method
    this.authService.logout();
    // Navigate to login page
    this.router.navigate(['/auth/login']);
    console.log('User logged out successfully from sidebar');
  }
  onLogoutCancelled() {
    this.showLogoutConfirm = false;
  }
  static {
    this.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      outputs: {
        sidebarToggle: "sidebarToggle",
        closeMobileMenu: "closeMobileMenu"
      },
      decls: 22,
      vars: 26,
      consts: [[1, "sidebar", 3, "dir"], [1, "sidebar-header"], ["type", "button", 1, "toggle-btn", 3, "click", "title"], [1, "fas"], [1, "sidebar-nav"], [1, "nav-menu"], ["class", "nav-item", 3, "active", "has-active-child", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], [1, "user-info"], [1, "user-avatar"], [1, "fas", "fa-user"], [1, "user-details"], [1, "user-name"], [1, "user-role"], ["class", "user-email", 4, "ngIf"], [1, "logout-section"], [1, "btn", "btn-outline-light", "btn-sm", "w-100", 3, "click", "title"], [1, "fas", "fa-sign-out-alt", "me-2"], [3, "confirmed", "cancelled", "visible", "data"], [1, "nav-item"], ["class", "nav-link", 3, "expanded", "has-children", "click", 4, "ngIf"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["class", "submenu", 3, "expanded", 4, "ngIf"], [1, "nav-link", 3, "click"], [1, "nav-icon"], ["class", "nav-text", 4, "ngIf"], ["class", "nav-arrow", 4, "ngIf"], [1, "nav-text"], [1, "nav-arrow"], [1, "fas", "fa-chevron-down"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["class", "nav-badge", 3, "class", 4, "ngIf"], [1, "nav-badge"], [1, "submenu"], ["class", "submenu-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "submenu-item"], ["routerLinkActive", "active", 1, "submenu-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "submenu-icon"], ["class", "submenu-text", 4, "ngIf"], ["class", "submenu-badge", 3, "class", 4, "ngIf"], [1, "submenu-text"], [1, "submenu-badge"], [1, "user-email"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "aside", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_2_listener($event) {
            return ctx.toggleSidebar($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nav", 4)(5, "ul", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_6_Template, 4, 7, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 11)(12, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SidebarComponent_span_16_Template, 2, 1, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 15)(18, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_18_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "app-confirm-dialog", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("confirmed", function SidebarComponent_Template_app_confirm_dialog_confirmed_21_listener() {
            return ctx.onLogoutConfirmed();
          })("cancelled", function SidebarComponent_Template_app_confirm_dialog_cancelled_21_listener() {
            return ctx.onLogoutCancelled();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("left", ctx.currentLanguage === "en" ? "0" : "auto")("right", ctx.currentLanguage === "ar" ? "0" : "auto")("border-left", ctx.currentLanguage === "ar" ? "3px solid #ff6b6b" : "none")("border-right", ctx.currentLanguage === "en" ? "3px solid #4ecdc4" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("collapsed", ctx.isCollapsed)("rtl", ctx.currentLanguage === "ar")("ltr", ctx.currentLanguage === "en");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.isCollapsed ? ctx.getTranslation("expandSidebar") : ctx.getTranslation("collapseSidebar") + " (Ctrl+B)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.isCollapsed ? "fa-chevron-right" : "fa-chevron-left");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getUserDisplayName());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getUserRole());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentUser && ctx.currentUser.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.getTranslation("logout"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("logout"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.showLogoutConfirm)("data", ctx.logoutConfirmData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  background: linear-gradient(180deg, #004d40 0%, #00695c 100%);\n  color: white;\n  height: 100vh;\n  transition: all 0.3s ease;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 999;\n  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%]::before, .sidebar[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateX(-20px);\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 15px 10px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%], .sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%], .sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 100%;\n  top: 0;\n  width: 200px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(-10px);\n  transition: all 0.3s ease;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .submenu.expanded[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 767.98px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 280px !important;\n    max-width: 85vw;\n    height: 100vh;\n    transform: translateX(-100%);\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    box-shadow: 2px 0 20px rgba(0, 0, 0, 0.3);\n    z-index: 1001;\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%] {\n    width: 280px !important;\n    max-width: 85vw;\n    transform: translateX(-100%);\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%], .sidebar.collapsed[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%], .sidebar.collapsed[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%] {\n    display: block !important;\n    opacity: 1 !important;\n    transform: none !important;\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 260px;\n    max-width: 90vw;\n  }\n}\n@media (max-width: 375px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100vw;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .mobile-open[_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(0) !important;\n    visibility: visible !important;\n    width: 280px !important;\n  }\n  .mobile-open[_nghost-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%] {\n    transform: translateX(0) !important;\n    visibility: visible !important;\n    width: 280px !important;\n  }\n  .mobile-open[_nghost-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%], .mobile-open[_nghost-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%], .mobile-open[_nghost-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%] {\n    display: block !important;\n    opacity: 1 !important;\n    transform: none !important;\n  }\n  .mobile-open[_nghost-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .mobile-open[_nghost-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column;\n  }\n}\n@media (max-width: 767.98px) {\n  .mobile-open[_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 767.98px) {\n  [_nghost-%COMP%]:not(.mobile-open)   .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%) !important;\n  }\n}\n\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.toggle-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  color: white;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  touch-action: manipulation;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: scale(1.1);\n}\n.toggle-btn[_ngcontent-%COMP%]:active {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(0.95);\n}\n.toggle-btn[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media (max-width: 767.98px) {\n  .toggle-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .toggle-btn[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  height: calc(100vh - 160px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex: 1;\n  -webkit-overflow-scrolling: touch;\n  scroll-behavior: smooth;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255, 0.1);\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 3px;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n@media (max-width: 767.98px) {\n  .sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 4px;\n  }\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-item.has-active-child[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border-left-color: #4caf50;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 15px 25px;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: all 0.3s ease;\n  border-left: 3px solid transparent;\n  gap: 15px;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  border-left-color: #4caf50;\n}\n.nav-link[_ngcontent-%COMP%]:active {\n  background: rgba(255, 255, 255, 0.2);\n  transform: scale(0.98);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  border-left-color: #4caf50;\n}\n.nav-link.expanded[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n.nav-link.expanded[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.nav-link[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  text-align: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.nav-link[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  flex: 1;\n}\n.nav-link[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n  margin-left: auto;\n}\n.nav-link[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.nav-link[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%] {\n  background: #ff4757;\n  color: white;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 10px;\n}\n.nav-link[_ngcontent-%COMP%]   .nav-badge.badge-primary[_ngcontent-%COMP%] {\n  background: #3742fa;\n}\n.nav-link[_ngcontent-%COMP%]   .nav-badge.badge-success[_ngcontent-%COMP%] {\n  background: #2ed573;\n}\n.nav-link[_ngcontent-%COMP%]   .nav-badge.badge-warning[_ngcontent-%COMP%] {\n  background: #ffa502;\n}\n.nav-link[_ngcontent-%COMP%]   .nav-badge.badge-info[_ngcontent-%COMP%] {\n  background: #1e90ff;\n}\n\n.submenu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background: rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.3s ease;\n}\n.submenu.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.submenu[_ngcontent-%COMP%]   .submenu-item.active[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border-left-color: #4caf50;\n}\n.submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 25px 12px 55px;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: all 0.3s ease;\n  border-left: 3px solid transparent;\n  gap: 12px;\n  -webkit-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  border-left-color: #4caf50;\n}\n.submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]:active {\n  background: rgba(255, 255, 255, 0.2);\n  transform: scale(0.98);\n}\n.submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]   .submenu-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  text-align: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]   .submenu-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 400;\n  flex: 1;\n}\n.submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]   .submenu-badge[_ngcontent-%COMP%] {\n  background: #ff4757;\n  color: white;\n  padding: 2px 6px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 600;\n  margin-left: 8px;\n}\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  flex-shrink: 0;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 1rem;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.8;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.6);\n  margin-top: 0.25rem;\n  word-break: break-word;\n  opacity: 0.7;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .logout-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.5);\n  color: white;\n  font-size: 0.875rem;\n  padding: 0.5rem 0.75rem;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .logout-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  border-color: white;\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .logout-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);\n}\n.sidebar-footer[_ngcontent-%COMP%]   .logout-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);\n}\n[dir=rtl][_ngcontent-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  transform: translateX(20px);\n}\n[dir=rtl][_ngcontent-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  right: 100%;\n  left: auto;\n  transform: translateX(10px);\n}\n[dir=rtl][_ngcontent-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .submenu.expanded[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n@media (max-width: 767.98px) {\n  [dir=rtl][_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(100%);\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .sidebar.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 3px solid transparent;\n}\n[dir=rtl][_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, [dir=rtl][_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right-color: #4caf50;\n}\n[dir=rtl][_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: auto;\n}\n[dir=rtl][_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 10px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%] {\n  padding: 12px 55px 12px 25px;\n  border-left: none;\n  border-right: 3px solid transparent;\n}\n[dir=rtl][_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]:hover, [dir=rtl][_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-link.active[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right-color: #4caf50;\n}\n[dir=rtl][_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]   .submenu-badge[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n[dir=rtl].collapsed[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  transform: scaleX(-1) rotate(180deg);\n}\n\n.rtl[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  right: 0 !important;\n  left: auto !important;\n  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1) !important;\n  border-left: 3px solid #ff6b6b !important;\n}\n.rtl[_ngcontent-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  transform: translateX(20px) !important;\n}\n.rtl[_ngcontent-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  right: 100% !important;\n  left: auto !important;\n  transform: translateX(10px) !important;\n}\n.rtl[_ngcontent-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .submenu.expanded[_ngcontent-%COMP%] {\n  transform: translateX(0) !important;\n}\n@media (max-width: 767.98px) {\n  .rtl[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(100%) !important;\n  }\n  .rtl[_ngcontent-%COMP%]   .sidebar.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0) !important;\n  }\n  .rtl[_ngcontent-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%] {\n    transform: translateX(-100%) !important;\n  }\n}\n\n.ltr[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  left: 0 !important;\n  right: auto !important;\n  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1) !important;\n  border-right: 3px solid #4ecdc4 !important;\n}\n.ltr[_ngcontent-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  transform: translateX(-20px) !important;\n}\n.ltr[_ngcontent-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  left: 100% !important;\n  right: auto !important;\n  transform: translateX(-10px) !important;\n}\n.ltr[_ngcontent-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%]   .submenu.expanded[_ngcontent-%COMP%] {\n  transform: translateX(0) !important;\n}\n@media (max-width: 767.98px) {\n  .ltr[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%) !important;\n  }\n  .ltr[_ngcontent-%COMP%]   .sidebar.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0) !important;\n  }\n  .ltr[_ngcontent-%COMP%]   .sidebar.collapsed[_ngcontent-%COMP%] {\n    transform: translateX(-100%) !important;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 16px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%] {\n    height: calc(100vh - 200px);\n    padding: 10px 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 14px 20px;\n    min-height: 50px;\n    touch-action: manipulation;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 24px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%] {\n    padding: 12px 20px 12px 55px;\n    min-height: 45px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]   .submenu-icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 20px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]   .submenu-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n    border-top: 1px solid rgba(255, 255, 255, 0.15);\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .logout-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.875rem;\n    min-height: 40px;\n  }\n}\n@media (max-width: 575.98px) {\n  .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n    padding: 12px 15px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%] {\n    height: calc(100vh - 180px);\n    padding: 8px 0;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 12px 15px;\n    min-height: 48px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 22px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%] {\n    padding: 10px 15px 10px 50px;\n    min-height: 42px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]   .submenu-icon[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 18px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]   .submenu-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n    padding: 12px 15px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  z-index: 998;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease, visibility 0.3s ease;\n  touch-action: none;\n}\n.sidebar-overlay.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n@media (min-width: 768px) {\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 240px;\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 13px 20px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n@media (min-width: 1200px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 16px 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFRTtFQUVFLHdCQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7QUFGSjtBQUlJO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0FBRk47QUFLSTtFQUNFLHlCQUFBO0FBSE47QUFTVTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFQWjtBQVNZOzs7RUFHRSxhQUFBO0FBUGQ7QUFXVTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQVRaO0FBV1k7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQVRkO0FBZ0JJO0VBQ0UsdUJBQUE7QUFkTjtBQWlCSTtFQUNFLGFBQUE7QUFmTjtBQW9CRTtFQWhGRjtJQWlGSSx1QkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSx1REFBQTtJQUNBLHlDQUFBO0lBQ0EsYUFBQTtFQWpCRjtFQW9CRTtJQUNFLHVCQUFBO0lBQ0EsZUFBQTtJQUNBLDRCQUFBO0VBbEJKO0VBcUJJOzs7SUFHRSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0EsMEJBQUE7RUFuQk47RUFzQkk7SUFDRSx3QkFBQTtFQXBCTjtBQUNGO0FBeUJFO0VBL0dGO0lBZ0hJLFlBQUE7SUFDQSxlQUFBO0VBdEJGO0FBQ0Y7QUF5QkU7RUFySEY7SUFzSEksV0FBQTtJQUNBLGdCQUFBO0VBdEJGO0FBQ0Y7O0FBMkJFO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLDhCQUFBO0lBQ0EsdUJBQUE7RUF4Qko7RUEyQkk7SUFDRSxtQ0FBQTtJQUNBLDhCQUFBO0lBQ0EsdUJBQUE7RUF6Qk47RUE0Qk07OztJQUdFLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSwwQkFBQTtFQTFCUjtFQTZCTTtJQUNFLGtDQUFBO0VBM0JSO0VBOEJNO0lBQ0Usd0JBQUE7SUFDQSxzQkFBQTtFQTVCUjtBQUNGO0FBa0NFO0VBRUk7SUFDRSx3QkFBQTtJQUNBLHNCQUFBO0VBakNOO0FBQ0Y7O0FBd0NFO0VBQ0U7SUFDRSx1Q0FBQTtFQXJDSjtBQUNGOztBQXlDQTtFQUNFLGFBQUE7RUFDQSxpREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQXRDRjs7QUF5Q0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMEJBQUE7QUF0Q0Y7QUF3Q0U7RUFDRSxvQ0FBQTtFQUNBLHFCQUFBO0FBdENKO0FBeUNFO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtBQXZDSjtBQTBDRTtFQUNFLGVBQUE7QUF4Q0o7QUEyQ0U7RUE5QkY7SUErQkksV0FBQTtJQUNBLFlBQUE7RUF4Q0Y7RUEwQ0U7SUFDRSxlQUFBO0VBeENKO0FBQ0Y7O0FBNENBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0FBekNGO0FBNENFO0VBQ0UsVUFBQTtBQTFDSjtBQTZDRTtFQUNFLG9DQUFBO0FBM0NKO0FBOENFO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtBQTVDSjtBQThDSTtFQUNFLG9DQUFBO0FBNUNOO0FBaURFO0VBQ0U7SUFDRSxVQUFBO0VBL0NKO0FBQ0Y7O0FBbURBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQWhERjs7QUFtREE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBaERGO0FBb0RJO0VBQ0UscUNBQUE7RUFDQSwwQkFBQTtBQWxETjs7QUF1REE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7QUFwREY7QUFzREU7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQXBESjtBQXVERTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QUFyREo7QUF3REU7RUFDRSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQXRESjtBQXlERTtFQUNFLG9DQUFBO0FBdkRKO0FBeURJO0VBQ0UseUJBQUE7QUF2RE47QUEyREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXpESjtBQTRERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7QUExREo7QUE2REU7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0FBM0RKO0FBNkRJO0VBQ0UsZUFBQTtBQTNETjtBQStERTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTdESjtBQStESTtFQUNFLG1CQUFBO0FBN0ROO0FBZ0VJO0VBQ0UsbUJBQUE7QUE5RE47QUFpRUk7RUFDRSxtQkFBQTtBQS9ETjtBQWtFSTtFQUNFLG1CQUFBO0FBaEVOOztBQXFFQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBbEVGO0FBb0VFO0VBQ0UsaUJBQUE7QUFsRUo7QUF1RU07RUFDRSxvQ0FBQTtFQUNBLDBCQUFBO0FBckVSO0FBeUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7QUF2RU47QUF5RU07RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQXZFUjtBQTBFTTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QUF4RVI7QUEyRU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXpFUjtBQTRFTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7QUExRVI7QUE2RU07RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUEzRVI7O0FBaUZBO0VBQ0UsYUFBQTtFQUNBLDhDQUFBO0VBQ0EsY0FBQTtBQTlFRjtBQWdGRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQTlFSjtBQWdGSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBOUVOO0FBZ0ZNO0VBQ0UsZUFBQTtBQTlFUjtBQWtGSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQWhGTjtBQWtGTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFoRlI7QUFtRk07RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFqRlI7QUFvRk07RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFsRlI7QUF3Rkk7RUFDRSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBdEZOO0FBd0ZNO0VBQ0UsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUF0RlI7QUF5Rk07RUFDRSxrREFBQTtBQXZGUjtBQTBGTTtFQUNFLG9CQUFBO0FBeEZSOztBQWdHRTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7QUE3Rko7QUFnR007RUFDRSwyQkFBQTtBQTlGUjtBQWlHTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUEvRlI7QUFpR1E7RUFDRSx3QkFBQTtBQS9GVjtBQXFHSTtFQXRCRjtJQXVCSSwyQkFBQTtFQWxHSjtFQW9HSTtJQUNFLHdCQUFBO0VBbEdOO0VBcUdJO0lBQ0UsNEJBQUE7RUFuR047QUFDRjtBQXVHRTtFQUNFLGlCQUFBO0VBQ0EsbUNBQUE7QUFyR0o7QUF1R0k7RUFFRSxpQkFBQTtFQUNBLDJCQUFBO0FBdEdOO0FBeUdJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBdkdOO0FBMEdJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBeEdOO0FBOEdNO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0FBNUdSO0FBOEdRO0VBRUUsaUJBQUE7RUFDQSwyQkFBQTtBQTdHVjtBQWdIUTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQTlHVjtBQW9IRTtFQUNFLHFCQUFBO0FBbEhKO0FBcUhFO0VBQ0Usb0NBQUE7QUFuSEo7O0FBeUhFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0VBQ0EseUNBQUE7QUF0SEo7QUF5SE07RUFDRSxzQ0FBQTtBQXZIUjtBQTBITTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtBQXhIUjtBQTBIUTtFQUNFLG1DQUFBO0FBeEhWO0FBOEhJO0VBdkJGO0lBd0JJLHNDQUFBO0VBM0hKO0VBNkhJO0lBQ0UsbUNBQUE7RUEzSE47RUE4SEk7SUFDRSx1Q0FBQTtFQTVITjtBQUNGOztBQWtJRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvREFBQTtFQUNBLDBDQUFBO0FBL0hKO0FBa0lNO0VBQ0UsdUNBQUE7QUFoSVI7QUFtSU07RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7QUFqSVI7QUFtSVE7RUFDRSxtQ0FBQTtBQWpJVjtBQXVJSTtFQXZCRjtJQXdCSSx1Q0FBQTtFQXBJSjtFQXNJSTtJQUNFLG1DQUFBO0VBcElOO0VBdUlJO0lBQ0UsdUNBQUE7RUFySU47QUFDRjs7QUEySUE7RUFFSTtJQUNFLGtCQUFBO0lBQ0Esa0RBQUE7RUF6SUo7RUEySUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUF6SU47RUE2SUU7SUFDRSwyQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlDQUFBO0VBM0lKO0VBOElFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLDBCQUFBO0VBNUlKO0VBOElJO0lBQ0UsZUFBQTtJQUNBLFdBQUE7RUE1SU47RUErSUk7SUFDRSxlQUFBO0VBN0lOO0VBaUpFO0lBQ0UsNEJBQUE7SUFDQSxnQkFBQTtFQS9JSjtFQWlKSTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VBL0lOO0VBa0pJO0lBQ0UsZUFBQTtFQWhKTjtFQW9KRTtJQUNFLGtCQUFBO0lBQ0EsK0NBQUE7RUFsSko7RUFxSk07SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQW5KUjtFQXFKUTtJQUNFLGVBQUE7RUFuSlY7RUF3SlE7SUFDRSxrQkFBQTtFQXRKVjtFQXlKUTtJQUNFLGtCQUFBO0VBdkpWO0VBNkpNO0lBQ0UsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VBM0pSO0FBQ0Y7QUFrS0E7RUFFSTtJQUNFLGtCQUFBO0VBaktKO0VBbUtJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFqS047RUFxS0U7SUFDRSwyQkFBQTtJQUNBLGNBQUE7RUFuS0o7RUFzS0U7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0VBcEtKO0VBc0tJO0lBQ0UsZUFBQTtJQUNBLFdBQUE7RUFwS047RUF1S0k7SUFDRSxlQUFBO0VBcktOO0VBeUtFO0lBQ0UsNEJBQUE7SUFDQSxnQkFBQTtFQXZLSjtFQXlLSTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VBdktOO0VBMEtJO0lBQ0UsZUFBQTtFQXhLTjtFQTRLRTtJQUNFLGtCQUFBO0VBMUtKO0VBNktNO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUEzS1I7RUErS1E7SUFDRSxpQkFBQTtFQTdLVjtFQWdMUTtJQUNFLGlCQUFBO0VBOUtWO0FBQ0Y7QUFzTEE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtFQUNBLGtCQUFBO0FBcExGO0FBc0xFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBcExKO0FBdUxFO0VBbkJGO0lBb0JJLGFBQUE7RUFwTEY7QUFDRjs7QUF3TEE7RUFDRTtJQUNFLFlBQUE7RUFyTEY7RUF1TEU7SUFDRSxXQUFBO0VBckxKO0VBd0xFO0lBQ0UsYUFBQTtFQXRMSjtFQXlMRTtJQUNFLGtCQUFBO0VBdkxKO0VBeUxJO0lBQ0UsZUFBQTtFQXZMTjtBQUNGO0FBNkxBO0VBQ0U7SUFDRSxZQUFBO0VBM0xGO0VBNkxFO0lBQ0UsV0FBQTtFQTNMSjtFQThMRTtJQUNFLGFBQUE7RUE1TEo7RUErTEU7SUFDRSxrQkFBQTtFQTdMSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNpZGViYXIge1xuICB3aWR0aDogMjgwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDRkNDAgMCUsICMwMDY5NWMgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm94LXNoYWRvdzogMnB4IDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAvLyBFbnN1cmUgc2lkZWJhciBkb2Vzbid0IGFwcGVhciB0d2ljZVxuICAmOjpiZWZvcmUsXG4gICY6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gICYuY29sbGFwc2VkIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBcbiAgICAubmF2LXRleHQge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgfVxuICAgIFxuICAgIC50b2dnbGUtYnRuIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLnNpZGViYXItY29udGVudCB7XG4gICAgICAubmF2LW1lbnUge1xuICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcblxuICAgICAgICAgICAgLm5hdi10ZXh0LFxuICAgICAgICAgICAgLm5hdi1hcnJvdyxcbiAgICAgICAgICAgIC5uYXYtYmFkZ2Uge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdWJtZW51IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zaWRlYmFyLWhlYWRlciB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc2lkZWJhci1mb290ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBNb2JpbGUgcmVzcG9uc2l2ZVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICB3aWR0aDogMjgwcHggIWltcG9ydGFudDsgLy8gRm9yY2UgZnVsbCB3aWR0aCBvbiBtb2JpbGVcbiAgICBtYXgtd2lkdGg6IDg1dnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgei1pbmRleDogMTAwMTsgLy8gSGlnaGVyIHRoYW4gaGVhZGVyICgxMDAwKSBhbmQgb3ZlcmxheSAoOTk4KVxuICAgIFxuICAgIC8vIE9uIG1vYmlsZSwgYWx3YXlzIHNob3cgZXhwYW5kZWQgKGlnbm9yZSBjb2xsYXBzZWQgc3RhdGUpXG4gICAgJi5jb2xsYXBzZWQge1xuICAgICAgd2lkdGg6IDI4MHB4ICFpbXBvcnRhbnQ7IC8vIEZvcmNlIGZ1bGwgd2lkdGggZXZlbiB3aGVuIGNvbGxhcHNlZCBjbGFzcyBpcyBwcmVzZW50XG4gICAgICBtYXgtd2lkdGg6IDg1dnc7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgXG4gICAgICAvLyBFbnN1cmUgYWxsIGNvbnRlbnQgaXMgdmlzaWJsZSBvbiBtb2JpbGVcbiAgICAgIC5uYXYtdGV4dCxcbiAgICAgIC5uYXYtYXJyb3csXG4gICAgICAubmF2LWJhZGdlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNpZGViYXItZm9vdGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLy8gU21hbGwgbW9iaWxlIGRldmljZXNcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgfVxuICBcbiAgLy8gRXh0cmEgc21hbGwgZGV2aWNlc1xuICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICB9XG59XG5cbi8vIEFwcGx5IG1vYmlsZS1vcGVuIGNsYXNzIHdoZW4gaG9zdCBoYXMgdGhlIGNsYXNzXG46aG9zdC5tb2JpbGUtb3BlbiB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAgIC5zaWRlYmFyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSAhaW1wb3J0YW50O1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDI4MHB4ICFpbXBvcnRhbnQ7IC8vIEFsd2F5cyBmdWxsIHdpZHRoIG9uIG1vYmlsZVxuICAgICAgXG4gICAgICAvLyBPbiBtb2JpbGUsIGFsd2F5cyBzaG93IGV4cGFuZGVkIHJlZ2FyZGxlc3Mgb2YgY29sbGFwc2VkIGNsYXNzXG4gICAgICAmLmNvbGxhcHNlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSAhaW1wb3J0YW50O1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAyODBweCAhaW1wb3J0YW50OyAvLyBGb3JjZSBmdWxsIHdpZHRoXG4gICAgICAgIFxuICAgICAgICAvLyBPdmVycmlkZSBjb2xsYXBzZWQgc3R5bGVzIG9uIG1vYmlsZSAtIHNob3cgYWxsIGNvbnRlbnRcbiAgICAgICAgLm5hdi10ZXh0LFxuICAgICAgICAubmF2LWFycm93LFxuICAgICAgICAubmF2LWJhZGdlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnNpZGViYXItaGVhZGVyIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuc2lkZWJhci1mb290ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvLyBFbnN1cmUgZm9vdGVyIGlzIHZpc2libGUgb24gbW9iaWxlXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAgIC5zaWRlYmFyIHtcbiAgICAgIC5zaWRlYmFyLWZvb3RlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gRW5zdXJlIHNpZGViYXIgaXMgcHJvcGVybHkgaGlkZGVuIG9uIG1vYmlsZSB3aGVuIG5vdCBvcGVuXG46aG9zdDpub3QoLm1vYmlsZS1vcGVuKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAgIC5zaWRlYmFyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnNpZGViYXItaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udG9nZ2xlLWJ0biB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICBcbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIFxuICAuZmFzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBcbiAgICAuZmFzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbn1cblxuLnNpZGViYXItbmF2IHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZmxleDogMTtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgXG4gIC8vIEN1c3RvbSBzY3JvbGxiYXJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG4gIH1cbiAgXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gSGlkZSBzY3JvbGxiYXIgb24gbW9iaWxlIGZvciBjbGVhbmVyIGxvb2tcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDRweDtcbiAgICB9XG4gIH1cbn1cblxuLm5hdi1tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubmF2LWl0ZW0ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmLmFjdGl2ZSxcbiAgJi5oYXMtYWN0aXZlLWNoaWxkIHtcbiAgICAubmF2LWxpbmsge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNGNhZjUwO1xuICAgIH1cbiAgfVxufVxuXG4ubmF2LWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZ2FwOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzRjYWY1MDtcbiAgfVxuICBcbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICB9XG4gIFxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0Y2FmNTA7XG4gIH1cblxuICAmLmV4cGFuZGVkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG5cbiAgICAubmF2LWFycm93IHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgLm5hdi1pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG5cbiAgLm5hdi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLm5hdi1hcnJvdyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcblxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5uYXYtYmFkZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNmZjQ3NTc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcblxuICAgICYuYmFkZ2UtcHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzc0MmZhO1xuICAgIH1cblxuICAgICYuYmFkZ2Utc3VjY2VzcyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMmVkNTczO1xuICAgIH1cblxuICAgICYuYmFkZ2Utd2FybmluZyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZhNTAyO1xuICAgIH1cblxuICAgICYuYmFkZ2UtaW5mbyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMWU5MGZmO1xuICAgIH1cbiAgfVxufVxuXG4uc3VibWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZTtcblxuICAmLmV4cGFuZGVkIHtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgfVxuXG4gIC5zdWJtZW51LWl0ZW0ge1xuICAgICYuYWN0aXZlIHtcbiAgICAgIC5zdWJtZW51LWxpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNGNhZjUwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJtZW51LWxpbmsge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMnB4IDI1cHggMTJweCA1NXB4O1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNGNhZjUwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgIH1cblxuICAgICAgLnN1Ym1lbnUtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG5cbiAgICAgIC5zdWJtZW51LXRleHQge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC5zdWJtZW51LWJhZGdlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmNDc1NztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zaWRlYmFyLWZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC51c2VyLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIC51c2VyLWF2YXRhciB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVzZXItZGV0YWlscyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuXG4gICAgICAudXNlci1yb2xlIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnVzZXItZW1haWwge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9nb3V0LXNlY3Rpb24ge1xuICAgIC5idG4ge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgfVxuXG4gICAgICBpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJUTCBTdXBwb3J0XG5bZGlyPVwicnRsXCJdIHtcbiAgLnNpZGViYXIge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgYm94LXNoYWRvdzogLTJweCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIFxuICAgICYuY29sbGFwc2VkIHtcbiAgICAgIC5uYXYtdGV4dCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnN1Ym1lbnUge1xuICAgICAgICByaWdodDogMTAwJTtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgICAgICBcbiAgICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIE1vYmlsZSByZXNwb25zaXZlIGZvciBSVExcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgIFxuICAgICAgJi5tb2JpbGUtb3BlbiB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi5jb2xsYXBzZWQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLm5hdi1saW5rIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBcbiAgICAmOmhvdmVyLFxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjNGNhZjUwO1xuICAgIH1cblxuICAgIC5uYXYtYXJyb3cge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLm5hdi1iYWRnZSB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cblxuICAuc3VibWVudSB7XG4gICAgLnN1Ym1lbnUtaXRlbSB7XG4gICAgICAuc3VibWVudS1saW5rIHtcbiAgICAgICAgcGFkZGluZzogMTJweCA1NXB4IDEycHggMjVweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICM0Y2FmNTA7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VibWVudS1iYWRnZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC50b2dnbGUtYnRuIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIH1cbiAgXG4gICYuY29sbGFwc2VkIC50b2dnbGUtYnRuIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSkgcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cblxuLy8gUlRML0xUUiBDbGFzc2VzIGZvciBleHBsaWNpdCBwb3NpdGlvbmluZ1xuLnJ0bCB7XG4gIC5zaWRlYmFyIHtcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAtMnB4IDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmZjZiNmIgIWltcG9ydGFudDsgLy8gVmlzdWFsIGluZGljYXRvciBmb3IgUlRMXG4gICAgXG4gICAgJi5jb2xsYXBzZWQge1xuICAgICAgLm5hdi10ZXh0IHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zdWJtZW51IHtcbiAgICAgICAgcmlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCkgIWltcG9ydGFudDtcbiAgICAgICAgXG4gICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIE1vYmlsZSByZXNwb25zaXZlIGZvciBSVExcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSAhaW1wb3J0YW50O1xuICAgICAgXG4gICAgICAmLm1vYmlsZS1vcGVuIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgICYuY29sbGFwc2VkIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubHRyIHtcbiAgLnNpZGViYXIge1xuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICByaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDJweCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzRlY2RjNCAhaW1wb3J0YW50OyAvLyBWaXN1YWwgaW5kaWNhdG9yIGZvciBMVFJcbiAgICBcbiAgICAmLmNvbGxhcHNlZCB7XG4gICAgICAubmF2LXRleHQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zdWJtZW51IHtcbiAgICAgICAgbGVmdDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICByaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIFxuICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBNb2JpbGUgcmVzcG9uc2l2ZSBmb3IgTFRSXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpICFpbXBvcnRhbnQ7XG4gICAgICBcbiAgICAgICYubW9iaWxlLW9wZW4ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi5jb2xsYXBzZWQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE1vYmlsZSByZXNwb25zaXZlIHN0eWxlc1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICAuc2lkZWJhci1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICBcbiAgICAgIC50b2dnbGUtYnRuIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc2lkZWJhci1uYXYge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICB9XG4gICAgXG4gICAgLm5hdi1saW5rIHtcbiAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICAgIFxuICAgICAgLm5hdi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLm5hdi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc3VibWVudSAuc3VibWVudS1saW5rIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweCAxMnB4IDU1cHg7XG4gICAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICAgICAgXG4gICAgICAuc3VibWVudS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnN1Ym1lbnUtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnNpZGViYXItZm9vdGVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgXG4gICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgLnVzZXItYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgXG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudXNlci1kZXRhaWxzIHtcbiAgICAgICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnVzZXItcm9sZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5sb2dvdXQtc2VjdGlvbiB7XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBTbWFsbCBtb2JpbGUgZGV2aWNlc1xuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICAuc2lkZWJhci1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgICAgXG4gICAgICAudG9nZ2xlLWJ0biB7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5zaWRlYmFyLW5hdiB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7XG4gICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICB9XG4gICAgXG4gICAgLm5hdi1saW5rIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICBcbiAgICAgIC5uYXYtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5uYXYtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnN1Ym1lbnUgLnN1Ym1lbnUtbGluayB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCA1MHB4O1xuICAgICAgbWluLWhlaWdodDogNDJweDtcbiAgICAgIFxuICAgICAgLnN1Ym1lbnUtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zdWJtZW51LXRleHQge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5zaWRlYmFyLWZvb3RlciB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgICBcbiAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAudXNlci1hdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnVzZXItZGV0YWlscyB7XG4gICAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnVzZXItcm9sZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gTW9iaWxlIG92ZXJsYXlcbi5zaWRlYmFyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgei1pbmRleDogOTk4O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCB2aXNpYmlsaXR5IDAuM3MgZWFzZTtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4vLyBUYWJsZXQgcmVzcG9uc2l2ZSAoNzY4cHggLSA5OTFweClcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgXG4gICAgJi5jb2xsYXBzZWQge1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgfVxuICAgIFxuICAgIC5zaWRlYmFyLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAxOHB4O1xuICAgIH1cbiAgICBcbiAgICAubmF2LWxpbmsge1xuICAgICAgcGFkZGluZzogMTNweCAyMHB4O1xuICAgICAgXG4gICAgICAubmF2LXRleHQge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIExhcmdlIHNjcmVlbnMgKDEyMDBweCspXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgXG4gICAgJi5jb2xsYXBzZWQge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgfVxuICAgIFxuICAgIC5zaWRlYmFyLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAyNXB4O1xuICAgIH1cbiAgICBcbiAgICAubmF2LWxpbmsge1xuICAgICAgcGFkZGluZzogMTZweCAzMHB4O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 9381);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 1417);
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ 8709);
/* harmony import */ var _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/alert-dialog/alert-dialog.component */ 5997);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pagination/pagination.component */ 4815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);










class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_4__.AlertDialogComponent, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_4__.AlertDialogComponent, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent]
  });
})();

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://192.168.1.12:3000/api',
  // Dev/local – production uses environment.prod.ts (domain)
  /** Auto-logout after this many minutes with no user activity (mouse, keyboard, scroll, touch). */
  idleLogoutMinutes: 60,
  buildDate: '2026-03-18T06:15:43.180Z',
  expirationDate: '2027-03-18T06:15:43.182Z',
  // Microsoft Entra (Azure AD) configuration for local development
  azure: {
    clientId: '6f498a92-cc4e-4260-98be-e989adfd363d',
    tenantId: '70ca47a3-3991-4823-8769-6da1f74d05c3',
    redirectUri: 'http://localhost:4200/',
    postLogoutRedirectUri: 'http://localhost:4200/'
  }
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);



// Check if the application has expired
function checkExpiration() {
  if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.expirationDate) {
    console.warn('Expiration date not set. Application may not have been built properly.');
    return true; // Allow app to run if expiration date is not set (development)
  }
  const expirationDate = new Date(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.expirationDate);
  const now = new Date();
  if (now > expirationDate) {
    // Application has expired
    document.body.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; background: #f5f5f5;">
        <div style="text-align: center; padding: 40px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 500px;">
          <h1 style="color: #d32f2f; margin-bottom: 20px;">Application Expired</h1>
          <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
            This application build has expired.
          </p>
          <p style="color: #999; font-size: 14px;">
            Build Date: ${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.buildDate ? new Date(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.buildDate).toLocaleDateString() : 'Unknown'}<br>
            Expiration Date: ${expirationDate.toLocaleDateString()}<br>
            Current Date: ${now.toLocaleDateString()}
          </p>
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            Please contact the administrator for a new build.
          </p>
        </div>
      </div>
    `;
    return false;
  }
  return true;
}
// Check expiration before bootstrapping
if (checkExpiration()) {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map