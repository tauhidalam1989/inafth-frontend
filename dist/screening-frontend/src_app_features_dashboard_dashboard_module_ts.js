"use strict";
(self["webpackChunkscreening_frontend"] = self["webpackChunkscreening_frontend"] || []).push([["src_app_features_dashboard_dashboard_module_ts"],{

/***/ 1626:
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/screen.service */ 2588);
/* harmony import */ var _core_services_advertisements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/advertisements.service */ 9282);
/* harmony import */ var _core_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/location.service */ 3415);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/notification.service */ 5567);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/user.service */ 3443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);










const _c0 = () => ["/screens/list"];
const _c1 = () => ["/advertisements/advertisements"];
const _c2 = () => ["/screens/create"];
const _c3 = () => ["/screens/discover"];
const _c4 = () => ["/screens/playback"];
const _c5 = () => ["/notifications/notifications"];
const _c6 = () => ["/locations"];
const _c7 = a0 => ({
  edit: a0
});
const _c8 = a0 => ["/screens/create", a0];
const _c9 = a0 => ["/advertisements/advertisements", a0];
function DashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.getTranslation("loading") || "Loading...");
  }
}
function DashboardComponent_div_13_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_div_13_Template_div_click_0_listener() {
      const card_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.navigateTo(card_r3.route));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 47)(4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DashboardComponent_div_13_div_8_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("border-left-color", card_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("clickable", card_r3.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", card_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](card_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](card_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.getTranslation(card_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", card_r3.route);
  }
}
function DashboardComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.getTranslation("noScreens") || "No screens found");
  }
}
function DashboardComponent_div_25_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const screen_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r0.getTranslation("lastConnected") || "Last connected", ": ", ctx_r0.formatDate(screen_r4.lastConnected), " ");
  }
}
function DashboardComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 59)(5, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DashboardComponent_div_25_div_1_span_7_Template, 2, 2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const screen_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c7, screen_r4.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](screen_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r0.getScreenStatusClass(screen_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", screen_r4.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", screen_r4.lastConnected);
  }
}
function DashboardComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DashboardComponent_div_25_div_1_Template, 10, 10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.recentScreens);
  }
}
function DashboardComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.getTranslation("noAdvertisements") || "No advertisements found");
  }
}
function DashboardComponent_div_36_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ad_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.formatDate(ad_r5.updatedAt), " ");
  }
}
function DashboardComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 59)(5, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, DashboardComponent_div_36_div_1_span_9_Template, 2, 1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ad_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c7, ad_r5.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ad_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r0.getAdvertisementStatusClass(ad_r5.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ad_r5.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ad_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ad_r5.updatedAt);
  }
}
function DashboardComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DashboardComponent_div_36_div_1_Template, 12, 11, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.recentAdvertisements);
  }
}
class DashboardComponent {
  constructor(languageService, translationService, screenService, advertisementsService, locationService, notificationService, userService, router) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.screenService = screenService;
    this.advertisementsService = advertisementsService;
    this.locationService = locationService;
    this.notificationService = notificationService;
    this.userService = userService;
    this.router = router;
    this.currentLanguage = 'ar';
    this.showModal = false;
    this.isLoading = false;
    // Statistics
    this.metricCards = [];
    // Screens
    this.screens = [];
    this.totalScreens = 0;
    this.onlineScreens = 0;
    this.offlineScreens = 0;
    this.playingScreens = 0;
    this.recentScreens = [];
    // Advertisements
    this.advertisements = [];
    this.totalAdvertisements = 0;
    this.activeAdvertisements = 0;
    this.draftAdvertisements = 0;
    this.recentAdvertisements = [];
    // Locations
    this.locations = [];
    this.totalLocations = 0;
    this.activeLocations = 0;
    this.sections = [];
    this.totalSections = 0;
    // Notifications
    this.totalNotifications = 0;
    this.sentNotifications = 0;
    // Users
    this.totalUsers = 0;
    this.activeUsers = 0;
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadAllData();
  }
  loadAllData() {
    this.isLoading = true;
    // Load all data in parallel
    this.loadScreens();
    this.loadAdvertisements();
    this.loadLocations();
    this.loadSections();
    this.loadNotifications();
    this.loadUsers();
  }
  loadScreens() {
    this.screenService.getScreens().subscribe({
      next: screens => {
        this.screens = screens;
        this.totalScreens = screens.length;
        this.onlineScreens = screens.filter(s => s.status === 'online' || s.status === 'playing').length;
        this.offlineScreens = screens.filter(s => s.status === 'offline').length;
        this.playingScreens = screens.filter(s => s.status === 'playing').length;
        this.recentScreens = screens.slice(0, 5);
        this.updateMetricCards();
      },
      error: error => {
        console.error('Error loading screens:', error);
        this.updateMetricCards();
      }
    });
  }
  loadAdvertisements() {
    this.advertisementsService.getAdvertisements().subscribe({
      next: response => {
        this.advertisements = response.advertisements;
        this.totalAdvertisements = response.total;
        this.activeAdvertisements = this.advertisements.filter(a => a.status === 'active').length;
        this.draftAdvertisements = this.advertisements.filter(a => a.status === 'draft').length;
        this.recentAdvertisements = this.advertisements.sort((a, b) => {
          const dateA = a.updatedAt || a.createdAt || new Date(0);
          const dateB = b.updatedAt || b.createdAt || new Date(0);
          return dateB.getTime() - dateA.getTime();
        }).slice(0, 5);
        this.updateMetricCards();
      },
      error: error => {
        console.error('Error loading advertisements:', error);
        this.updateMetricCards();
      }
    });
  }
  loadLocations() {
    this.locationService.getSubsites().subscribe({
      next: locations => {
        this.locations = locations;
        this.totalLocations = locations.length;
        this.activeLocations = locations.filter(l => l.status === 'active').length;
        this.updateMetricCards();
      },
      error: error => {
        console.error('Error loading locations:', error);
        this.updateMetricCards();
      }
    });
  }
  loadSections() {
    this.locationService.getSections().subscribe({
      next: sections => {
        this.sections = sections;
        this.totalSections = sections.length;
        this.updateMetricCards();
      },
      error: error => {
        console.error('Error loading sections:', error);
        this.updateMetricCards();
      }
    });
  }
  loadNotifications() {
    this.notificationService.getNotifications({
      limit: 100
    }).subscribe({
      next: response => {
        this.totalNotifications = response.notifications.length;
        this.sentNotifications = response.notifications.filter(n => n.status === 'sent').length;
        this.updateMetricCards();
      },
      error: error => {
        console.error('Error loading notifications:', error);
        this.updateMetricCards();
      }
    });
  }
  loadUsers() {
    this.userService.getUsers().subscribe({
      next: users => {
        this.totalUsers = users.length;
        this.activeUsers = users.filter(u => u.isActive).length;
        this.updateMetricCards();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading users:', error);
        this.updateMetricCards();
        this.isLoading = false;
      }
    });
  }
  updateMetricCards() {
    this.metricCards = [{
      id: 'dashboardTotalScreens',
      icon: 'fas fa-tv',
      value: this.totalScreens,
      color: '#00695c',
      route: '/screens/list'
    }, {
      id: 'dashboardOnlineScreens',
      icon: 'fas fa-check-circle',
      value: this.onlineScreens,
      color: '#4caf50',
      route: '/screens/list'
    }, {
      id: 'dashboardPlayingScreens',
      icon: 'fas fa-play-circle',
      value: this.playingScreens,
      color: '#2196f3',
      route: '/screens/playback'
    }, {
      id: 'dashboardAdvertisements',
      icon: 'fas fa-bullhorn',
      value: this.totalAdvertisements,
      color: '#ff9ff3',
      route: '/advertisements/advertisements'
    }, {
      id: 'dashboardActiveAdvertisements',
      icon: 'fas fa-check',
      value: this.activeAdvertisements,
      color: '#4caf50',
      route: '/advertisements/advertisements'
    }, {
      id: 'dashboardLocations',
      icon: 'fas fa-map-marker-alt',
      value: this.totalLocations,
      color: '#45b7d1',
      route: '/locations'
    }, {
      id: 'dashboardSections',
      icon: 'fas fa-th-large',
      value: this.totalSections,
      color: '#96ceb4',
      route: '/locations/sections'
    }, {
      id: 'dashboardNotifications',
      icon: 'fas fa-bell',
      value: this.totalNotifications,
      color: '#4ecdc4',
      route: '/notifications/notifications'
    }, {
      id: 'dashboardUsersPermissions',
      icon: 'fas fa-users',
      value: this.totalUsers,
      color: '#96ceb4',
      route: '/users'
    }];
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  navigateTo(route) {
    if (route) {
      this.router.navigate([route]);
    }
  }
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  onViewClick() {
    this.router.navigate(['/notifications/notifications']);
    this.closeModal();
  }
  onCancelClick() {
    this.closeModal();
  }
  getScreenStatusClass(status) {
    switch (status) {
      case 'online':
      case 'playing':
        return 'status-online';
      case 'offline':
        return 'status-offline';
      default:
        return 'status-unknown';
    }
  }
  getAdvertisementStatusClass(status) {
    switch (status) {
      case 'active':
        return 'status-active';
      case 'draft':
        return 'status-draft';
      case 'inactive':
        return 'status-inactive';
      default:
        return 'status-unknown';
    }
  }
  formatDate(date) {
    if (!date) return '';
    return new Date(date).toLocaleDateString(this.currentLanguage === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__.ScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_advertisements_service__WEBPACK_IMPORTED_MODULE_3__.AdvertisementsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_location_service__WEBPACK_IMPORTED_MODULE_4__.LocationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 112,
      vars: 55,
      consts: [[1, "dashboard", 3, "dir"], ["class", "loading-overlay", 4, "ngIf"], [1, "dashboard-header"], [1, "dashboard-title"], [1, "fas", "fa-tachometer-alt"], [1, "dashboard-subtitle"], [1, "metrics-section"], [1, "section-title"], [1, "fas", "fa-chart-bar"], [1, "metrics-grid"], ["class", "metric-card", 3, "border-left-color", "clickable", "click", 4, "ngFor", "ngForOf"], [1, "dashboard-grid"], [1, "dashboard-card"], [1, "card-header"], [1, "card-title"], [1, "fas", "fa-tv"], [1, "view-all-link", 3, "routerLink"], [1, "fas", "fa-arrow-right"], [1, "card-content"], ["class", "empty-state", 4, "ngIf"], ["class", "items-list", 4, "ngIf"], [1, "fas", "fa-bullhorn"], [1, "fas", "fa-server"], [1, "status-list"], [1, "status-item"], [1, "status-label"], [1, "status-value"], [1, "status-online"], [1, "status-offline"], [1, "status-active"], [1, "status-draft"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-users"], [1, "fas", "fa-bolt"], [1, "actions-grid"], [1, "action-item", 3, "routerLink"], [1, "fas", "fa-plus-circle"], [1, "fas", "fa-search"], [1, "fas", "fa-play-circle"], [1, "fas", "fa-bell"], [1, "news-section"], [1, "news-message"], [1, "fas", "fa-info-circle", "news-icon"], [1, "loading-overlay"], [1, "spinner"], [1, "metric-card", 3, "click"], [1, "metric-icon"], [1, "metric-content"], [1, "metric-value"], [1, "metric-label"], ["class", "metric-arrow", 4, "ngIf"], [1, "metric-arrow"], [1, "fas", "fa-chevron-right"], [1, "empty-state"], [1, "items-list"], ["class", "item-row", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "item-row", 3, "routerLink"], [1, "item-info"], [1, "item-name"], [1, "item-meta"], [1, "item-badge"], ["class", "item-date", 4, "ngIf"], [1, "item-action"], [1, "item-date"], [1, "item-type"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 4, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6)(9, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, DashboardComponent_div_13_Template, 9, 11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "h3", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, DashboardComponent_div_24_Template, 4, 1, "div", 19)(25, DashboardComponent_div_25_Template, 2, 1, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "h3", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, DashboardComponent_div_35_Template, 4, 1, "div", 19)(36, DashboardComponent_div_36_Template, 2, 1, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 12)(38, "div", 13)(39, "h3", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 18)(43, "div", 23)(44, "div", 24)(45, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 26)(49, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 24)(54, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 26)(58, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 24)(63, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 26)(67, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 24)(70, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 26)(74, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 12)(77, "div", 13)(78, "h3", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 18)(82, "div", 34)(83, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](84, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](88, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](92, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](96, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](100, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](104, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "div", 40)(108, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](109, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("dashboard") || "Dashboard", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("dashboardOverview") || "Complete overview of your system");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("statistics") || "Statistics", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.metricCards);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("recentScreens") || "Recent Screens", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](47, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("viewAll") || "View All", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recentScreens.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recentScreens.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("recentAdvertisements") || "Recent Advertisements", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](48, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("viewAll") || "View All", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recentAdvertisements.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recentAdvertisements.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("systemStatus") || "System Status", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("screens") || "Screens", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.onlineScreens, " ", ctx.getTranslation("online") || "Online", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.offlineScreens, " ", ctx.getTranslation("offline") || "Offline", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("advertisements") || "Advertisements", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.activeAdvertisements, " ", ctx.getTranslation("active") || "Active", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.draftAdvertisements, " ", ctx.getTranslation("draft") || "Draft", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("locations") || "Locations", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.activeLocations, " ", ctx.getTranslation("active") || "Active", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("users") || "Users", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.activeUsers, " ", ctx.getTranslation("active") || "Active", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("quickActions") || "Quick Actions", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](49, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("addScreen") || "Add Screen");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](50, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("addAdvertisement") || "Add Advertisement");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](51, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("scanDevices") || "Scan Devices");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](52, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("playbackControl") || "Playback Control");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](53, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("sendNotification") || "Send Notification");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](54, _c6));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("manageLocations") || "Manage Locations");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("noNews"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
      styles: [".dashboard[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n  min-height: calc(100vh - 200px);\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #00695c;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.loading-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: #00695c;\n  font-size: 1.1rem;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.dashboard-header[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.dashboard-header[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.dashboard-header[_ngcontent-%COMP%]   .dashboard-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #7f8c8d;\n  margin: 0;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n\n.metrics-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n\n.metric-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border-left: 4px solid;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n}\n.metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n.metric-card.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.metric-card.clickable[_ngcontent-%COMP%]:hover   .metric-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(5px);\n}\n\n.metric-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.metric-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin-bottom: 5px;\n  line-height: 1;\n}\n\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #7f8c8d;\n  font-weight: 500;\n}\n\n.metric-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n  opacity: 0;\n  transition: all 0.3s ease;\n  color: #00695c;\n  font-size: 1.2rem;\n}\n\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 25px;\n  margin-bottom: 30px;\n}\n@media (max-width: 991px) {\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.dashboard-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 20px 25px;\n  border-bottom: 1px solid #e9ecef;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n\n.view-all-link[_ngcontent-%COMP%] {\n  color: #00695c;\n  text-decoration: none;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  transition: all 0.3s ease;\n}\n.view-all-link[_ngcontent-%COMP%]:hover {\n  color: #004d40;\n  gap: 10px;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 20px 25px;\n}\n\n.items-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  border-radius: 8px;\n  background: #f8f9fa;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  color: inherit;\n}\n.item-row[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateX(5px);\n}\n.item-row[_ngcontent-%COMP%]:hover   .item-action[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.item-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 8px;\n  font-size: 1rem;\n}\n\n.item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.item-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.item-badge.status-online[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.item-badge.status-offline[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.item-badge.status-active[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.item-badge.status-draft[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.item-badge.status-inactive[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n\n.item-type[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  background: #e9ecef;\n  color: #495057;\n  text-transform: capitalize;\n}\n\n.item-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n\n.item-action[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  transition: all 0.3s ease;\n  color: #00695c;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #7f8c8d;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 15px;\n  color: #bdc3c7;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n}\n\n.status-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.status-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  background: #f8f9fa;\n  border-radius: 8px;\n}\n\n.status-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 500;\n  color: #2c3e50;\n}\n.status-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n\n.status-value[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.status-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.status-value[_ngcontent-%COMP%]   span.status-online[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-value[_ngcontent-%COMP%]   span.status-offline[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-value[_ngcontent-%COMP%]   span.status-active[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-value[_ngcontent-%COMP%]   span.status-draft[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 15px;\n}\n\n.action-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #2c3e50;\n  transition: all 0.3s ease;\n  gap: 10px;\n}\n.action-item[_ngcontent-%COMP%]:hover {\n  background: #00695c;\n  color: white;\n  transform: translateY(-5px);\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.action-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.action-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #00695c;\n  transition: all 0.3s ease;\n}\n.action-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: center;\n  font-size: 0.9rem;\n}\n.action-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.news-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 30px;\n}\n\n.news-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  color: #7f8c8d;\n  font-size: 1.1rem;\n}\n\n.news-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #3498db;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 4px solid;\n}\n[dir=rtl][_ngcontent-%COMP%]   .metric-card.clickable[_ngcontent-%COMP%]:hover   .metric-arrow[_ngcontent-%COMP%] {\n  transform: translateX(-5px);\n}\n[dir=rtl][_ngcontent-%COMP%]   .metric-arrow[_ngcontent-%COMP%] {\n  right: auto;\n  left: 20px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]:hover {\n  transform: translateX(-5px);\n}\n[dir=rtl][_ngcontent-%COMP%]   .view-all-link[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n@media (max-width: 768px) {\n  .dashboard[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .dashboard-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .metric-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .metric-value[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .card-content[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n  }\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .item-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n  }\n}\n@media (max-width: 480px) {\n  .metric-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 15px;\n  }\n  .metric-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    font-size: 2rem;\n  }\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .status-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .status-value[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQUY7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFLQTtFQUNFO0lBQUssdUJBQUE7RUFETDtFQUVBO0lBQU8seUJBQUE7RUFDUDtBQUNGO0FBRUE7RUFDRSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQUo7QUFFSTtFQUNFLGNBQUE7QUFBTjtBQUlFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUZKOztBQU9BO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFKRjtBQU1FO0VBQ0UsY0FBQTtBQUpKOztBQVNBO0VBQ0UsbUJBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNB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O0FBMkNBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBeENGOztBQTZDRTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUExQ0o7QUE0Q0k7RUFDRSwyQkFBQTtBQTFDTjtBQThDRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBNUNKO0FBK0NFO0VBQ0UsMkJBQUE7QUE3Q0o7QUFnREU7RUFDRSwyQkFBQTtBQTlDSjs7QUFtREE7RUFDRTtJQUNFLGFBQUE7RUFoREY7RUFvREU7SUFDRSxpQkFBQTtFQWxESjtFQXFERTtJQUNFLGVBQUE7RUFuREo7RUF1REE7SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUFyREY7RUF3REE7SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUF0REY7RUF5REE7SUFDRSxhQUFBO0VBdkRGO0VBMERBO0lBQ0UsZUFBQTtFQXhERjtFQTJEQTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7RUF6REY7RUE0REE7SUFDRSxrQkFBQTtFQTFERjtFQTZEQTtJQUNFLHFDQUFBO0VBM0RGO0VBOERBO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFFBQUE7RUE1REY7QUFDRjtBQStEQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7RUE3REY7RUFnRUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUE5REY7RUFpRUE7SUFDRSwwQkFBQTtFQS9ERjtFQWtFQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0VBaEVGO0VBbUVBO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUFqRUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcclxufVxyXG5cclxuLy8gTG9hZGluZyBPdmVybGF5XHJcbi5sb2FkaW5nLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgXHJcbiAgLnNwaW5uZXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwMDY5NWM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwNjk1YztcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuLy8gRGFzaGJvYXJkIEhlYWRlclxyXG4uZGFzaGJvYXJkLWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBcclxuICAuZGFzaGJvYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTVweDtcclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGFzaGJvYXJkLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTZWN0aW9uIFRpdGxlXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBcclxuICBpIHtcclxuICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWV0cmljcyBTZWN0aW9uXHJcbi5tZXRyaWNzLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5tZXRyaWNzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ubWV0cmljLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICBcclxuICAmLmNsaWNrYWJsZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAubWV0cmljLWFycm93IHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWV0cmljLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5tZXRyaWMtY29udGVudCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLm1ldHJpYy12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5tZXRyaWMtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubWV0cmljLWFycm93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBjb2xvcjogIzAwNjk1YztcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLy8gRGFzaGJvYXJkIEdyaWRcclxuLmRhc2hib2FyZC1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG4gIGdhcDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEYXNoYm9hcmQgQ2FyZFxyXG4uZGFzaGJvYXJkLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweCAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2ZmZmZmZiAxMDAlKTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogIzAwNjk1YztcclxuICB9XHJcbn1cclxuXHJcbi52aWV3LWFsbC1saW5rIHtcclxuICBjb2xvcjogIzAwNjk1YztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA0ZDQwO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweCAyNXB4O1xyXG59XHJcblxyXG4vLyBJdGVtcyBMaXN0XHJcbi5pdGVtcy1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uaXRlbS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbiAgICBcclxuICAgIC5pdGVtLWFjdGlvbiB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaXRlbS1pbmZvIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uaXRlbS1uYW1lIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5pdGVtLW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaXRlbS1iYWRnZSB7XHJcbiAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBcclxuICAmLnN0YXR1cy1vbmxpbmUge1xyXG4gICAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gIH1cclxuICBcclxuICAmLnN0YXR1cy1vZmZsaW5lIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICB9XHJcbiAgXHJcbiAgJi5zdGF0dXMtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNkNGVkZGE7XHJcbiAgICBjb2xvcjogIzE1NTcyNDtcclxuICB9XHJcbiAgXHJcbiAgJi5zdGF0dXMtZHJhZnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjNjZDtcclxuICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gIH1cclxuICBcclxuICAmLnN0YXR1cy1pbmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xyXG4gICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaXRlbS10eXBlIHtcclxuICBwYWRkaW5nOiA0cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uaXRlbS1kYXRlIHtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5pdGVtLWFjdGlvbiB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgY29sb3I6ICMwMDY5NWM7XHJcbn1cclxuXHJcbi8vIEVtcHR5IFN0YXRlXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBjb2xvcjogI2JkYzNjNztcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFN0YXR1cyBMaXN0XHJcbi5zdGF0dXMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTVweDtcclxufVxyXG5cclxuLnN0YXR1cy1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBcclxuICBpIHtcclxuICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gIH1cclxufVxyXG5cclxuLnN0YXR1cy12YWx1ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDE1cHg7XHJcbiAgXHJcbiAgc3BhbiB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgXHJcbiAgICAmLnN0YXR1cy1vbmxpbmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xyXG4gICAgICBjb2xvcjogIzE1NTcyNDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5zdGF0dXMtb2ZmbGluZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XHJcbiAgICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLnN0YXR1cy1hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xyXG4gICAgICBjb2xvcjogIzE1NTcyNDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5zdGF0dXMtZHJhZnQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmM2NkO1xyXG4gICAgICBjb2xvcjogIzg1NjQwNDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFjdGlvbnMgR3JpZFxyXG4uYWN0aW9ucy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xyXG4gIGdhcDogMTVweDtcclxufVxyXG5cclxuLmFjdGlvbi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGdhcDogMTBweDtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDY5NWM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMTA1LCA5MiwgMC4zKTtcclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogIzAwNjk1YztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAmOmhvdmVyIGkge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTmV3cyBTZWN0aW9uXHJcbi5uZXdzLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm5ld3MtbWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTVweDtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLm5ld3MtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbn1cclxuXHJcbi8vIFJUTCBTdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5tZXRyaWMtY2FyZCB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkO1xyXG4gICAgXHJcbiAgICAmLmNsaWNrYWJsZTpob3ZlciAubWV0cmljLWFycm93IHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubWV0cmljLWFycm93IHtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW0tcm93OmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcclxuICB9XHJcbiAgXHJcbiAgLnZpZXctYWxsLWxpbmsge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmRhc2hib2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZGFzaGJvYXJkLWhlYWRlciB7XHJcbiAgICAuZGFzaGJvYXJkLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kYXNoYm9hcmQtc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXRyaWNzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXNoYm9hcmQtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1ldHJpYy1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXRyaWMtdmFsdWUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbnMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIH1cclxuICBcclxuICAuaXRlbS1tZXRhIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLm1ldHJpYy1jYXJkIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXRyaWMtaWNvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbnMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXR1cy1pdGVtIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXR1cy12YWx1ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2125:
/*!********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 1626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent
}];
class DashboardModule {
  static {
    this.ɵfac = function DashboardModule_Factory(t) {
      return new (t || DashboardModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_dashboard_dashboard_module_ts.js.map