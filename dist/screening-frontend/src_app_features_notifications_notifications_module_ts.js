"use strict";
(self["webpackChunkscreening_frontend"] = self["webpackChunkscreening_frontend"] || []).push([["src_app_features_notifications_notifications_module_ts"],{

/***/ 3415:
/*!***************************************************!*\
  !*** ./src/app/core/services/location.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);





class LocationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  // ========== SUBSITES ==========
  getSubsites() {
    return this.http.get(`${this.apiUrl}/subsites`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(subsites => subsites.map(s => ({
      ...s,
      createdAt: new Date(s.createdAt),
      updatedAt: new Date(s.updatedAt)
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching subsites:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  getSubsiteById(id) {
    return this.http.get(`${this.apiUrl}/subsites/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(s => ({
      ...s,
      createdAt: new Date(s.createdAt),
      updatedAt: new Date(s.updatedAt)
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching subsite:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  createSubsite(subsite) {
    return this.http.post(`${this.apiUrl}/subsites`, subsite).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(s => ({
      ...s,
      createdAt: new Date(s.createdAt),
      updatedAt: new Date(s.updatedAt)
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error creating subsite:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  updateSubsite(id, subsite) {
    return this.http.put(`${this.apiUrl}/subsites/${id}`, subsite).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(s => ({
      ...s,
      createdAt: new Date(s.createdAt),
      updatedAt: new Date(s.updatedAt)
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error updating subsite:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  deleteSubsite(id) {
    return this.http.delete(`${this.apiUrl}/subsites/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error deleting subsite:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  // ========== SECTIONS ==========
  getSections() {
    return this.http.get(`${this.apiUrl}/sections`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(sections => sections.map(s => ({
      ...s,
      createdAt: new Date(s.createdAt),
      updatedAt: new Date(s.updatedAt)
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching sections:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  getSectionById(id) {
    return this.http.get(`${this.apiUrl}/sections/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(s => ({
      ...s,
      createdAt: new Date(s.createdAt),
      updatedAt: new Date(s.updatedAt)
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching section:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  createSection(section) {
    return this.http.post(`${this.apiUrl}/sections`, section).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(s => ({
      ...s,
      createdAt: new Date(s.createdAt),
      updatedAt: new Date(s.updatedAt)
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error creating section:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  updateSection(id, section) {
    return this.http.put(`${this.apiUrl}/sections/${id}`, section).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(s => ({
      ...s,
      createdAt: new Date(s.createdAt),
      updatedAt: new Date(s.updatedAt)
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error updating section:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  deleteSection(id) {
    return this.http.delete(`${this.apiUrl}/sections/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error deleting section:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  // ========== SPECIAL DIVISIONS ==========
  getSpecialDivisions() {
    return this.http.get(`${this.apiUrl}/special-divisions`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(divisions => divisions.map(d => ({
      ...d,
      createdAt: new Date(d.createdAt),
      updatedAt: new Date(d.updatedAt)
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching special divisions:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  getSpecialDivisionById(id) {
    return this.http.get(`${this.apiUrl}/special-divisions/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(d => ({
      ...d,
      createdAt: new Date(d.createdAt),
      updatedAt: new Date(d.updatedAt)
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching special division:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  createSpecialDivision(division) {
    return this.http.post(`${this.apiUrl}/special-divisions`, division).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(d => ({
      ...d,
      createdAt: new Date(d.createdAt),
      updatedAt: new Date(d.updatedAt)
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error creating special division:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  updateSpecialDivision(id, division) {
    return this.http.put(`${this.apiUrl}/special-divisions/${id}`, division).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(d => ({
      ...d,
      createdAt: new Date(d.createdAt),
      updatedAt: new Date(d.updatedAt)
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error updating special division:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  deleteSpecialDivision(id) {
    return this.http.delete(`${this.apiUrl}/special-divisions/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error deleting special division:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function LocationService_Factory(t) {
      return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: LocationService,
      factory: LocationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2988:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/notifications/components/notification-dashboard/notification-dashboard.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationDashboardComponent: () => (/* binding */ NotificationDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);





function NotificationDashboardComponent_div_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stat_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("positive", stat_r1.changeType === "increase")("negative", stat_r1.changeType === "decrease");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("fa-arrow-up", stat_r1.changeType === "increase")("fa-arrow-down", stat_r1.changeType === "decrease");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", stat_r1.change, "% ", ctx_r1.getTranslation("fromLastMonth"), " ");
  }
}
function NotificationDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 23)(4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NotificationDashboardComponent_div_7_div_9_Template, 3, 10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("border-left-color", stat_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", stat_r1.color + "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](stat_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", stat_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stat_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 11, stat_r1.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", stat_r1.change !== undefined);
  }
}
function NotificationDashboardComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const typeStat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](typeStat_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](typeStat_r3.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", typeStat_r3.percentage, "%")("background-color", typeStat_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", typeStat_r3.percentage, "%");
  }
}
function NotificationDashboardComponent_i_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 36);
  }
}
function NotificationDashboardComponent_i_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 37);
  }
}
function NotificationDashboardComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 41)(4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 43)(7, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("type-" + notification_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](notification_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getTranslation(notification_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", notification_r4.recipients, " ", ctx_r1.getTranslation("recipients"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 10, notification_r4.date, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("status-" + notification_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation(notification_r4.status), " ");
  }
}
class NotificationDashboardComponent {
  constructor(languageService, translationService) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.currentLanguage = 'ar';
    // Statistics cards
    this.stats = [];
    // Notification type statistics
    this.typeStats = [];
    // Recent notifications
    this.recentNotifications = [];
    // Chart data (for future implementation)
    this.chartData = null;
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      this.loadStatistics();
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadStatistics();
  }
  loadStatistics() {
    // TODO: Replace with actual API calls
    // Mock data for now
    this.stats = [{
      label: this.getTranslation('totalNotifications'),
      value: 1245,
      icon: 'fas fa-bell',
      color: '#00695c',
      change: 12,
      changeType: 'increase'
    }, {
      label: this.getTranslation('sentNotifications'),
      value: 1120,
      icon: 'fas fa-paper-plane',
      color: '#4caf50',
      change: 8,
      changeType: 'increase'
    }, {
      label: this.getTranslation('scheduledNotifications'),
      value: 85,
      icon: 'fas fa-clock',
      color: '#ff9800',
      change: -5,
      changeType: 'decrease'
    }, {
      label: this.getTranslation('draftNotifications'),
      value: 40,
      icon: 'fas fa-file-alt',
      color: '#9e9e9e',
      change: 2,
      changeType: 'increase'
    }];
    this.typeStats = [{
      type: this.getTranslation('normal'),
      count: 450,
      percentage: 36,
      color: '#2196f3'
    }, {
      type: this.getTranslation('urgent'),
      count: 320,
      percentage: 26,
      color: '#f44336'
    }, {
      type: this.getTranslation('reminder'),
      count: 280,
      percentage: 22,
      color: '#ff9800'
    }, {
      type: this.getTranslation('marketing'),
      count: 195,
      percentage: 16,
      color: '#9c27b0'
    }];
    this.recentNotifications = [{
      id: 1,
      title: this.getTranslation('systemUpdate'),
      type: 'normal',
      status: 'sent',
      date: new Date(),
      recipients: 150
    }, {
      id: 2,
      title: this.getTranslation('securityAlert'),
      type: 'urgent',
      status: 'sent',
      date: new Date(Date.now() - 3600000),
      recipients: 200
    }, {
      id: 3,
      title: this.getTranslation('reminderNotification'),
      type: 'reminder',
      status: 'scheduled',
      date: new Date(Date.now() + 86400000),
      recipients: 100
    }];
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function NotificationDashboardComponent_Factory(t) {
      return new (t || NotificationDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NotificationDashboardComponent,
      selectors: [["app-notification-dashboard"]],
      decls: 29,
      vars: 10,
      consts: [[1, "notification-dashboard", 3, "dir"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "fas", "fa-chart-line"], [1, "stats-grid"], ["class", "stat-card", 3, "border-left-color", 4, "ngFor", "ngForOf"], [1, "dashboard-content"], [1, "dashboard-card"], [1, "card-header"], [1, "card-title"], [1, "fas", "fa-chart-pie"], [1, "card-body"], [1, "type-stats"], ["class", "type-stat-item", 4, "ngFor", "ngForOf"], [1, "fas", "fa-history"], ["routerLink", "/notifications/notifications", 1, "view-all-link"], ["class", "fas fa-arrow-left", 4, "ngIf"], ["class", "fas fa-arrow-right", 4, "ngIf"], [1, "recent-notifications-list"], ["class", "recent-notification-item", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-label"], [1, "stat-value"], ["class", "stat-change", 3, "positive", "negative", 4, "ngIf"], [1, "stat-change"], [1, "fas"], [1, "type-stat-item"], [1, "type-stat-header"], [1, "type-stat-label"], [1, "type-stat-count"], [1, "type-stat-bar"], [1, "type-stat-fill"], [1, "type-stat-percentage"], [1, "fas", "fa-arrow-left"], [1, "fas", "fa-arrow-right"], [1, "recent-notification-item"], [1, "notification-icon"], [1, "fas", "fa-bell"], [1, "notification-details"], [1, "notification-title"], [1, "notification-meta"], [1, "notification-type"], [1, "notification-separator"], [1, "notification-recipients"], [1, "notification-date"], [1, "notification-status"]],
      template: function NotificationDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NotificationDashboardComponent_div_7_Template, 10, 13, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "h3", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12)(15, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, NotificationDashboardComponent_div_16_Template, 10, 7, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "h3", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, NotificationDashboardComponent_i_24_Template, 1, 0, "i", 17)(25, NotificationDashboardComponent_i_25_Template, 1, 0, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12)(27, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, NotificationDashboardComponent_div_28_Template, 20, 13, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("notificationDashboard"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.stats);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("notificationTypes"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.typeStats);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("recentNotifications"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("viewAll"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentLanguage === "ar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentLanguage === "en");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recentNotifications);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: [".notification-dashboard[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 100vh;\n  background: #f5f5f5;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #004d40 100%);\n  padding: 30px;\n  border-radius: 12px;\n  margin-bottom: 30px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.notification-dashboard[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n  font-size: 1.75rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-left: 4px solid;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.notification-dashboard[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  margin-bottom: 8px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 5px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-change[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-change.positive[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-change.negative[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-change[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .dashboard-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 20px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .dashboard-content[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .dashboard-content[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n}\n.notification-dashboard[_ngcontent-%COMP%]   .dashboard-content[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #333;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .dashboard-content[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .dashboard-content[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .view-all-link[_ngcontent-%COMP%] {\n  color: #00695c;\n  text-decoration: none;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  transition: color 0.2s;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .dashboard-content[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .view-all-link[_ngcontent-%COMP%]:hover {\n  color: #004d40;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .dashboard-content[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .type-stats[_ngcontent-%COMP%]   .type-stat-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .type-stats[_ngcontent-%COMP%]   .type-stat-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .type-stats[_ngcontent-%COMP%]   .type-stat-item[_ngcontent-%COMP%]   .type-stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .type-stats[_ngcontent-%COMP%]   .type-stat-item[_ngcontent-%COMP%]   .type-stat-header[_ngcontent-%COMP%]   .type-stat-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .type-stats[_ngcontent-%COMP%]   .type-stat-item[_ngcontent-%COMP%]   .type-stat-header[_ngcontent-%COMP%]   .type-stat-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #666;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .type-stats[_ngcontent-%COMP%]   .type-stat-item[_ngcontent-%COMP%]   .type-stat-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e0e0e0;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 5px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .type-stats[_ngcontent-%COMP%]   .type-stat-item[_ngcontent-%COMP%]   .type-stat-bar[_ngcontent-%COMP%]   .type-stat-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .type-stats[_ngcontent-%COMP%]   .type-stat-item[_ngcontent-%COMP%]   .type-stat-percentage[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #666;\n  text-align: right;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 15px;\n  border-bottom: 1px solid #eee;\n  transition: background 0.2s;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-icon.type-normal[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #2196f3;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-icon.type-urgent[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #f44336;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-icon.type-reminder[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #ff9800;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-icon.type-marketing[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #9c27b0;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-details[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 5px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-details[_ngcontent-%COMP%]   .notification-meta[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #666;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-details[_ngcontent-%COMP%]   .notification-meta[_ngcontent-%COMP%]   .notification-separator[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-status[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-status.status-sent[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #4caf50;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-status.status-scheduled[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #ff9800;\n}\n.notification-dashboard[_ngcontent-%COMP%]   .recent-notifications-list[_ngcontent-%COMP%]   .recent-notification-item[_ngcontent-%COMP%]   .notification-status.status-draft[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #9e9e9e;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .notification-dashboard[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 4px solid;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbm90aWZpY2F0aW9ucy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1kYXNoYm9hcmQvbm90aWZpY2F0aW9uLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLDZEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQ007RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ1I7QUFDUTtFQUNFLGlCQUFBO0FBQ1Y7QUFLRTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUhKO0FBS0k7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsMkNBQUE7QUFITjtBQUtNO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQUhSO0FBTU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBSlI7QUFNUTtFQUNFLGlCQUFBO0FBSlY7QUFRTTtFQUNFLE9BQUE7QUFOUjtBQVFRO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFOVjtBQVNRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBUFY7QUFVUTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQVJWO0FBVVU7RUFDRSxjQUFBO0FBUlo7QUFXVTtFQUNFLGNBQUE7QUFUWjtBQVlVO0VBQ0Usa0JBQUE7QUFWWjtBQWlCRTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUFmSjtBQWlCSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FBZk47QUFpQk07RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0FBZlI7QUFpQlE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBZlY7QUFpQlU7RUFDRSxjQUFBO0FBZlo7QUFtQlE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtBQWpCVjtBQW1CVTtFQUNFLGNBQUE7QUFqQlo7QUFzQk07RUFDRSxhQUFBO0FBcEJSO0FBMEJJO0VBQ0UsbUJBQUE7QUF4Qk47QUEwQk07RUFDRSxnQkFBQTtBQXhCUjtBQTJCTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBekJSO0FBMkJRO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBekJWO0FBNEJRO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBMUJWO0FBOEJNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBNUJSO0FBOEJRO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUE1QlY7QUFnQ007RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQTlCUjtBQW9DSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQWxDTjtBQW9DTTtFQUNFLG1CQUFBO0FBbENSO0FBcUNNO0VBQ0UsbUJBQUE7QUFuQ1I7QUFzQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBcENSO0FBc0NRO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBcENWO0FBdUNRO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBckNWO0FBd0NRO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBdENWO0FBeUNRO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBdkNWO0FBMkNNO0VBQ0UsT0FBQTtBQXpDUjtBQTJDUTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBekNWO0FBNENRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQTFDVjtBQTRDVTtFQUNFLFdBQUE7QUExQ1o7QUErQ007RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTdDUjtBQStDUTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQTdDVjtBQWdEUTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQTlDVjtBQWlEUTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQS9DVjs7QUF5REk7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FBdEROIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbi1kYXNoYm9hcmQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuXHJcbiAgLnBhZ2UtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICMwMDRkNDAgMTAwJSk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDE1cHg7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3RhdHMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgIC5zdGF0LWNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm94LXNoYWRvdyAwLjJzO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0YXQtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0YXQtY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgLnN0YXQtbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0LXZhbHVlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0LWNoYW5nZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogNXB4O1xyXG5cclxuICAgICAgICAgICYucG9zaXRpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzRjYWY1MDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLm5lZ2F0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kYXNoYm9hcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDIwcHg7XHJcblxyXG4gICAgLmRhc2hib2FyZC1jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xyXG5cclxuICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmlldy1hbGwtbGluayB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDRkNDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudHlwZS1zdGF0cyB7XHJcbiAgICAudHlwZS1zdGF0LWl0ZW0ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudHlwZS1zdGF0LWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgICAgICAudHlwZS1zdGF0LWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50eXBlLXN0YXQtY291bnQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnR5cGUtc3RhdC1iYXIge1xyXG4gICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICAudHlwZS1zdGF0LWZpbGwge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnR5cGUtc3RhdC1wZXJjZW50YWdlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZWNlbnQtbm90aWZpY2F0aW9ucy1saXN0IHtcclxuICAgIC5yZWNlbnQtbm90aWZpY2F0aW9uLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ub3RpZmljYXRpb24taWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgICAgICYudHlwZS1ub3JtYWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2UzZjJmZDtcclxuICAgICAgICAgIGNvbG9yOiAjMjE5NmYzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi50eXBlLXVyZ2VudCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZlYmVlO1xyXG4gICAgICAgICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnR5cGUtcmVtaW5kZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjNlMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmY5ODAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi50eXBlLW1hcmtldGluZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjNlNWY1O1xyXG4gICAgICAgICAgY29sb3I6ICM5YzI3YjA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubm90aWZpY2F0aW9uLWRldGFpbHMge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgIC5ub3RpZmljYXRpb24tdGl0bGUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1tZXRhIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6IDhweDtcclxuXHJcbiAgICAgICAgICAubm90aWZpY2F0aW9uLXNlcGFyYXRvciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm5vdGlmaWNhdGlvbi1zdGF0dXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgICYuc3RhdHVzLXNlbnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2U4ZjVlOTtcclxuICAgICAgICAgIGNvbG9yOiAjNGNhZjUwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5zdGF0dXMtc2NoZWR1bGVkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmYzZTA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmOTgwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc3RhdHVzLWRyYWZ0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5ub3RpZmljYXRpb24tZGFzaGJvYXJkIHtcclxuICAgIC5zdGF0LWNhcmQge1xyXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6334:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/notifications/components/notification-settings/notification-settings.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationSettingsComponent: () => (/* binding */ NotificationSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);






function NotificationSettingsComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 57);
  }
}
function NotificationSettingsComponent_i_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 58);
  }
}
function NotificationSettingsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.saveMessageType === "success" ? "alert-success" : "alert-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r0.saveMessageType === "success" ? "fas fa-check-circle" : "fas fa-exclamation-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.saveMessage, " ");
  }
}
function NotificationSettingsComponent_span_197_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 57);
  }
}
function NotificationSettingsComponent_i_198_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 58);
  }
}
class NotificationSettingsComponent {
  constructor(languageService, translationService, notificationService, fb) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.notificationService = notificationService;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.isLoading = false;
    this.saveMessage = '';
    this.saveMessageType = 'success';
    this.settingsForm = this.fb.group({
      system_updates_email: [true],
      system_updates_sms: [false],
      system_updates_push: [true],
      system_updates_whatsapp: [false],
      security_alerts_email: [true],
      security_alerts_sms: [true],
      security_alerts_push: [true],
      security_alerts_whatsapp: [true],
      new_messages_email: [false],
      new_messages_sms: [false],
      new_messages_push: [true],
      new_messages_whatsapp: [false],
      reminders_email: [true],
      reminders_sms: [false],
      reminders_push: [true],
      reminders_whatsapp: [false],
      marketing_email: [false],
      marketing_sms: [false],
      marketing_push: [false],
      marketing_whatsapp: [false]
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadSettings();
  }
  loadSettings() {
    this.isLoading = true;
    this.notificationService.getNotificationSettings().subscribe({
      next: settings => {
        // Map API response to form values
        this.settingsForm.patchValue({
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
        });
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading notification settings:', error);
        this.isLoading = false;
        this.resetToDefaults();
      }
    });
  }
  saveSettings() {
    if (this.settingsForm.valid) {
      this.isLoading = true;
      this.saveMessage = '';
      // Map form values to API format
      const settings = {
        systemUpdatesEmail: this.settingsForm.value.system_updates_email,
        systemUpdatesSms: this.settingsForm.value.system_updates_sms,
        systemUpdatesPush: this.settingsForm.value.system_updates_push,
        systemUpdatesWhatsapp: this.settingsForm.value.system_updates_whatsapp,
        securityAlertsEmail: this.settingsForm.value.security_alerts_email,
        securityAlertsSms: this.settingsForm.value.security_alerts_sms,
        securityAlertsPush: this.settingsForm.value.security_alerts_push,
        securityAlertsWhatsapp: this.settingsForm.value.security_alerts_whatsapp,
        newMessagesEmail: this.settingsForm.value.new_messages_email,
        newMessagesSms: this.settingsForm.value.new_messages_sms,
        newMessagesPush: this.settingsForm.value.new_messages_push,
        newMessagesWhatsapp: this.settingsForm.value.new_messages_whatsapp,
        remindersEmail: this.settingsForm.value.reminders_email,
        remindersSms: this.settingsForm.value.reminders_sms,
        remindersPush: this.settingsForm.value.reminders_push,
        remindersWhatsapp: this.settingsForm.value.reminders_whatsapp,
        marketingEmail: this.settingsForm.value.marketing_email,
        marketingSms: this.settingsForm.value.marketing_sms,
        marketingPush: this.settingsForm.value.marketing_push,
        marketingWhatsapp: this.settingsForm.value.marketing_whatsapp
      };
      this.notificationService.saveNotificationSettings(settings).subscribe({
        next: () => {
          this.isLoading = false;
          this.saveMessage = this.getTranslation('settingsSavedSuccessfully');
          this.saveMessageType = 'success';
          // Clear message after 3 seconds
          setTimeout(() => {
            this.saveMessage = '';
          }, 3000);
        },
        error: error => {
          console.error('Error saving notification settings:', error);
          this.isLoading = false;
          this.saveMessage = this.getTranslation('errorSavingSettings') || 'Error saving settings';
          this.saveMessageType = 'error';
          // Clear message after 5 seconds
          setTimeout(() => {
            this.saveMessage = '';
          }, 5000);
        }
      });
    }
  }
  resetToDefaults() {
    this.isLoading = true;
    this.notificationService.resetNotificationSettings().subscribe({
      next: settings => {
        // Map API response to form values
        this.settingsForm.patchValue({
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
        });
        this.isLoading = false;
        this.saveMessage = this.getTranslation('settingsResetToDefaults');
        this.saveMessageType = 'success';
        // Clear message after 3 seconds
        setTimeout(() => {
          this.saveMessage = '';
        }, 3000);
      },
      error: error => {
        console.error('Error resetting notification settings:', error);
        this.isLoading = false;
        this.saveMessage = this.getTranslation('errorResettingSettings') || 'Error resetting settings';
        this.saveMessageType = 'error';
        // Clear message after 5 seconds
        setTimeout(() => {
          this.saveMessage = '';
        }, 5000);
      }
    });
  }
  // Use centralized translation service
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function NotificationSettingsComponent_Factory(t) {
      return new (t || NotificationSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NotificationSettingsComponent,
      selectors: [["app-notification-settings"]],
      decls: 200,
      vars: 44,
      consts: [[1, "notification-settings-container", 3, "dir"], [1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "page-title"], [1, "fas", "fa-bell", "me-2"], [1, "header-actions"], [1, "btn", "btn-outline-secondary", "me-2", 3, "click"], [1, "fas", "fa-undo", "me-2"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-save me-2", 4, "ngIf"], ["class", "row mb-4", 4, "ngIf"], [1, "row"], [3, "ngSubmit", "formGroup"], [1, "settings-section", "mb-4"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-cog", "me-2"], [1, "text-white", "mb-0", 2, "opacity", "0.9"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-3"], [1, "notification-option"], [1, "form-check-label"], ["type", "checkbox", "formControlName", "system_updates_email", 1, "form-check-input"], [1, "fas", "fa-envelope", "me-2"], ["type", "checkbox", "formControlName", "system_updates_sms", 1, "form-check-input"], [1, "fas", "fa-sms", "me-2"], ["type", "checkbox", "formControlName", "system_updates_push", 1, "form-check-input"], [1, "fas", "fa-mobile-alt", "me-2"], ["type", "checkbox", "formControlName", "system_updates_whatsapp", 1, "form-check-input"], [1, "fab", "fa-whatsapp", "me-2"], [1, "fas", "fa-shield-alt", "me-2"], ["type", "checkbox", "formControlName", "security_alerts_email", 1, "form-check-input"], ["type", "checkbox", "formControlName", "security_alerts_sms", 1, "form-check-input"], ["type", "checkbox", "formControlName", "security_alerts_push", 1, "form-check-input"], ["type", "checkbox", "formControlName", "security_alerts_whatsapp", 1, "form-check-input"], [1, "fas", "fa-comments", "me-2"], ["type", "checkbox", "formControlName", "new_messages_email", 1, "form-check-input"], ["type", "checkbox", "formControlName", "new_messages_sms", 1, "form-check-input"], ["type", "checkbox", "formControlName", "new_messages_push", 1, "form-check-input"], ["type", "checkbox", "formControlName", "new_messages_whatsapp", 1, "form-check-input"], ["type", "checkbox", "formControlName", "reminders_email", 1, "form-check-input"], ["type", "checkbox", "formControlName", "reminders_sms", 1, "form-check-input"], ["type", "checkbox", "formControlName", "reminders_push", 1, "form-check-input"], ["type", "checkbox", "formControlName", "reminders_whatsapp", 1, "form-check-input"], [1, "fas", "fa-bullhorn", "me-2"], ["type", "checkbox", "formControlName", "marketing_email", 1, "form-check-input"], ["type", "checkbox", "formControlName", "marketing_sms", 1, "form-check-input"], ["type", "checkbox", "formControlName", "marketing_push", 1, "form-check-input"], ["type", "checkbox", "formControlName", "marketing_whatsapp", 1, "form-check-input"], [1, "d-flex", "justify-content-end", "gap-3"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-save", "me-2"], [1, "alert", 3, "ngClass"]],
      template: function NotificationSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationSettingsComponent_Template_button_click_9_listener() {
            return ctx.resetToDefaults();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationSettingsComponent_Template_button_click_12_listener() {
            return ctx.saveSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, NotificationSettingsComponent_span_13_Template, 1, 0, "span", 11)(14, NotificationSettingsComponent_i_14_Template, 1, 0, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, NotificationSettingsComponent_div_16_Template, 5, 4, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14)(18, "div", 3)(19, "form", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NotificationSettingsComponent_Template_form_ngSubmit_19_listener() {
            return ctx.saveSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16)(21, "div", 17)(22, "div", 18)(23, "h5", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 22)(29, "div", 23)(30, "div", 24)(31, "div", 25)(32, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 27)(34, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 24)(37, "div", 25)(38, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 29)(40, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 24)(43, "div", 25)(44, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 31)(46, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 24)(49, "div", 25)(50, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 33)(52, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 16)(55, "div", 17)(56, "div", 18)(57, "h5", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 22)(63, "div", 23)(64, "div", 24)(65, "div", 25)(66, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "input", 36)(68, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 24)(71, "div", 25)(72, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "input", 37)(74, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 24)(77, "div", 25)(78, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 38)(80, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 24)(83, "div", 25)(84, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "input", 39)(86, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 16)(89, "div", 17)(90, "div", 18)(91, "h5", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 22)(97, "div", 23)(98, "div", 24)(99, "div", 25)(100, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "input", 41)(102, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 24)(105, "div", 25)(106, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "input", 42)(108, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 24)(111, "div", 25)(112, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "input", 43)(114, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 24)(117, "div", 25)(118, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "input", 44)(120, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 16)(123, "div", 17)(124, "div", 18)(125, "h5", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 22)(131, "div", 23)(132, "div", 24)(133, "div", 25)(134, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "input", 45)(136, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 24)(139, "div", 25)(140, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "input", 46)(142, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 24)(145, "div", 25)(146, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](147, "input", 47)(148, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 24)(151, "div", 25)(152, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "input", 48)(154, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 16)(157, "div", 17)(158, "div", 18)(159, "h5", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 22)(165, "div", 23)(166, "div", 24)(167, "div", 25)(168, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "input", 50)(170, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 24)(173, "div", 25)(174, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](175, "input", 51)(176, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 24)(179, "div", 25)(180, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](181, "input", 52)(182, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "div", 24)(185, "div", 25)(186, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](187, "input", 53)(188, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "div", 14)(191, "div", 3)(192, "div", 54)(193, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationSettingsComponent_Template_button_click_193_listener() {
            return ctx.resetToDefaults();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](194, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](197, NotificationSettingsComponent_span_197_Template, 1, 0, "span", 11)(198, NotificationSettingsComponent_i_198_Template, 1, 0, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("notificationSettings"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("resetToDefaults"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? ctx.getTranslation("saving") : ctx.getTranslation("saveSettings"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.saveMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.settingsForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("systemUpdates"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTranslation("systemUpdatesDescription"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("email"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("sms"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("push"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("whatsapp"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("securityAlerts"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTranslation("securityAlertsDescription"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("email"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("sms"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("push"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("whatsapp"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("newMessages"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTranslation("newMessagesDescription"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("email"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("sms"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("push"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("whatsapp"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("reminders"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTranslation("remindersDescription"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("email"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("sms"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("push"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("whatsapp"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("marketing"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTranslation("marketingDescription"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("email"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("sms"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("push"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("whatsapp"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("resetToDefaults"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? ctx.getTranslation("saving") : ctx.getTranslation("saveSettings"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: [".notification-settings-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #f8f9fa;\n  min-height: 100vh;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.notification-settings-container[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.notification-settings-container[dir=rtl][_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.notification-settings-container[dir=rtl][_ngcontent-%COMP%]   .notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.notification-settings-container[dir=rtl][_ngcontent-%COMP%]   .d-flex.justify-content-end[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 500;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border-left: 4px solid #28a745;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border-left: 4px solid #dc3545;\n}\n.alert[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n.settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);\n}\n.settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #004d40 100%);\n  color: white;\n  padding: 20px 25px;\n  border: none;\n}\n.settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  opacity: 0.9;\n}\n.settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.9;\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n.settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: white;\n}\n\n.notification-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 15px;\n  border-radius: 10px;\n  background: #f8f9fa;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.notification-option[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #00695c;\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 105, 92, 0.2);\n}\n.notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  cursor: pointer;\n  font-weight: 500;\n  color: #34495e;\n  width: 100%;\n  transition: color 0.3s ease;\n}\n.notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  color: #00695c;\n}\n.notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #00695c;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #00695c;\n  border-color: #00695c;\n  box-shadow: 0 0 0 0.2rem rgba(0, 105, 92, 0.25);\n}\n.notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 105, 92, 0.25);\n}\n.notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 20px;\n  text-align: center;\n  color: #00695c;\n  font-size: 1.1rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 12px 24px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #004d40 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #004d40 0%, #003d33 100%);\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 2px solid #6c757d;\n  color: #6c757d;\n  background: transparent;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #6c757d;\n  color: white;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\n@media (max-width: 768px) {\n  .notification-settings-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    flex-direction: column;\n    text-align: center;\n    gap: 10px;\n    margin-bottom: 20px;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 5px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n    gap: 10px;\n  }\n  .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n  }\n  .settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n  }\n  .settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 5px;\n  }\n  .settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 0.85rem;\n  }\n  .settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .notification-option[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n  .notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .notification-settings-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 12px 15px;\n  }\n  .settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .settings-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .notification-option[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n  .notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 0.85rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 10px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .notification-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 4px solid;\n}\n[dir=rtl][_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%] {\n  border-right-color: #28a745;\n}\n[dir=rtl][_ngcontent-%COMP%]   .alert.alert-danger[_ngcontent-%COMP%] {\n  border-right-color: #dc3545;\n}\n\n@media print {\n  .notification-settings-container[_ngcontent-%COMP%] {\n    background: white;\n    padding: 0;\n  }\n  .notification-settings-container[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%], .notification-settings-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .notification-settings-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border: 1px solid #dee2e6;\n    break-inside: avoid;\n  }\n  .notification-settings-container[_ngcontent-%COMP%]   .notification-option[_ngcontent-%COMP%] {\n    background: white;\n    border: 1px solid #dee2e6;\n  }\n  .notification-settings-container[_ngcontent-%COMP%]   .notification-option[_ngcontent-%COMP%]:hover {\n    background: white;\n    transform: none;\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbm90aWZpY2F0aW9ucy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1zZXR0aW5ncy9ub3RpZmljYXRpb24tc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0FBQ0Y7QUFFSTtFQUNFLGlCQUFBO0FBQU47QUFHSTtFQUNFLDJCQUFBO0FBRE47QUFLTTtFQUNFLGlCQUFBO0FBSFI7QUFPSTtFQUNFLHNDQUFBO0FBTE47O0FBVUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUEY7QUFTRTtFQUNFLGNBQUE7QUFQSjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBUkY7O0FBWUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQVRGO0FBV0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQVRKO0FBWUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQVZKO0FBYUU7RUFDRSxpQkFBQTtBQVhKOztBQWlCRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQWRKO0FBZ0JJO0VBQ0UsMkJBQUE7RUFDQSwyQ0FBQTtBQWROO0FBaUJJO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBZk47QUFpQk07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBZlI7QUFpQlE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFmVjtBQW1CTTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWpCUjtBQXFC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O0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQW5GSjtBQXFGSTtFQUNFLDJCQUFBO0FBbkZOO0FBc0ZJO0VBQ0UsMkJBQUE7QUFwRk47O0FBMEZBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLFVBQUE7RUF2RkY7RUF5RkU7O0lBRUUsYUFBQTtFQXZGSjtFQTBGRTtJQUNFLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtFQXhGSjtFQTJGRTtJQUNFLGlCQUFBO0lBQ0EseUJBQUE7RUF6Rko7RUEyRkk7SUFDRSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQXpGTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbi1zZXR0aW5ncy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblxyXG4gICZbZGlyPVwicnRsXCJdIHtcclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlci1hY3Rpb25zIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5ub3RpZmljYXRpb24tb3B0aW9uIHtcclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmQtZmxleC5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpIHtcclxuICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLy8gQWxlcnQgTWVzc2FnZXNcclxuLmFsZXJ0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAmLmFsZXJ0LXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjhhNzQ1O1xyXG4gIH1cclxuXHJcbiAgJi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcclxuICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZGMzNTQ1O1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNldHRpbmdzIFNlY3Rpb25zXHJcbi5zZXR0aW5ncy1zZWN0aW9uIHtcclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjMDA0ZDQwIDEwMCUpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMjVweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgaDUge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE5vdGlmaWNhdGlvbiBPcHRpb25zXHJcbi5ub3RpZmljYXRpb24tb3B0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDEwNSwgOTIsIDAuMik7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzM0NDk1ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwNjk1YztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAmOmNoZWNrZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEwNSwgOTIsIDAuMjUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMDUsIDkyLCAwLjI1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQnV0dG9uc1xyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICMwMDRkNDAgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDRkNDAgMCUsICMwMDNkMzMgMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNmM3NTdkO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTcGlubmVyXHJcbi5zcGlubmVyLWJvcmRlciB7XHJcbiAgd2lkdGg6IDFyZW07XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIERlc2lnblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubm90aWZpY2F0aW9uLXNldHRpbmdzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnBhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWFjdGlvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2V0dGluZ3Mtc2VjdGlvbiB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG5cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6IDhweDtcclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ub3RpZmljYXRpb24tb3B0aW9uIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbiAgICAgIC5mb3JtLWNoZWNrLWlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5ub3RpZmljYXRpb24tc2V0dGluZ3MtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuc2V0dGluZ3Mtc2VjdGlvbiB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG5cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5vdGlmaWNhdGlvbi1vcHRpb24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuXHJcbiAgICAgIC5mb3JtLWNoZWNrLWlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUlRMIFNwZWNpZmljIEFkanVzdG1lbnRzXHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5ub3RpZmljYXRpb24tb3B0aW9uIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgLmZvcm0tY2hlY2staW5wdXQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbGVydCB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkO1xyXG5cclxuICAgICYuYWxlcnQtc3VjY2VzcyB7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzI4YTc0NTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2RjMzU0NTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFByaW50IFN0eWxlc1xyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5ub3RpZmljYXRpb24tc2V0dGluZ3MtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAuaGVhZGVyLWFjdGlvbnMsXHJcbiAgICAuYnRuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm5vdGlmaWNhdGlvbi1vcHRpb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2682:
/*!********************************************************************************************!*\
  !*** ./src/app/features/notifications/components/notifications/notifications.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsComponent: () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/notification.service */ 5567);
/* harmony import */ var _core_services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/location.service */ 3415);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 8709);










function NotificationsComponent_div_13_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_div_13_div_1_Template_div_click_0_listener($event) {
      const subsite_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      ctx_r1.onSubsiteSelected(subsite_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subsite_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", subsite_r5.name, " ");
  }
}
function NotificationsComponent_div_13_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("noSubsitesAvailable") || "No subsites available", " ");
  }
}
function NotificationsComponent_div_13_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_div_13_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NotificationsComponent_div_13_div_13_div_1_Template, 2, 1, "div", 129)(2, NotificationsComponent_div_13_div_13_div_2_Template, 2, 1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.availableSubsites);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.availableSubsites.length === 0);
  }
}
function NotificationsComponent_div_13_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_div_21_div_1_Template_div_click_0_listener() {
      const section_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSectionSelected(section_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", section_r8.name, " ");
  }
}
function NotificationsComponent_div_13_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("noSectionsAvailable") || "No sections available", " ");
  }
}
function NotificationsComponent_div_13_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_div_21_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NotificationsComponent_div_13_div_21_div_1_Template, 2, 1, "div", 129)(2, NotificationsComponent_div_13_div_21_div_2_Template, 2, 1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.availableSections);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.availableSections.length === 0);
  }
}
function NotificationsComponent_div_13_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_div_29_div_1_Template_div_click_0_listener() {
      const division_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSpecialDivisionSelected(division_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const division_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", division_r11.name, " ");
  }
}
function NotificationsComponent_div_13_div_29_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("noSpecialDivisionsAvailable") || "No special divisions available", " ");
  }
}
function NotificationsComponent_div_13_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_div_29_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NotificationsComponent_div_13_div_29_div_1_Template, 2, 1, "div", 129)(2, NotificationsComponent_div_13_div_29_div_2_Template, 2, 1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.availableSpecialDivisions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.availableSpecialDivisions.length === 0);
  }
}
function NotificationsComponent_div_13_span_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("saving") || "Saving...");
  }
}
function NotificationsComponent_div_13_span_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.editingNotification ? ctx_r1.getTranslation("saveChanges") : ctx_r1.getTranslation("addNotification"));
  }
}
function NotificationsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 44)(5, "div", 45, 0)(7, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_Template_div_click_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r1.openSubsiteSelector();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_Template_button_click_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r1.openSubsiteSelector();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, NotificationsComponent_div_13_div_13_Template, 3, 2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 45)(15, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_Template_div_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openSectionSelector());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_Template_button_click_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r1.openSectionSelector();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, NotificationsComponent_div_13_div_21_Template, 3, 2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 45)(23, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_Template_div_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openSpecialDivisionSelector());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_Template_button_click_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r1.openSpecialDivisionSelector();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, NotificationsComponent_div_13_div_29_Template, 3, 2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "form", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function NotificationsComponent_div_13_Template_form_ngSubmit_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.addNotification());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 53)(32, "div", 54)(33, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 54)(37, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "select", 58)(40, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 53)(49, "div", 54)(50, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 54)(54, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 63)(58, "label", 64)(59, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function NotificationsComponent_div_13_Template_input_change_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSendToAllChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 53)(63, "div", 54)(64, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "textarea", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 54)(68, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "select", 70)(71, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 53)(82, "div", 54)(83, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "select", 77)(86, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 81)(93, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 83)(96, "div", 84)(97, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "button", 87)(100, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "button", 88)(103, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "I");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "button", 89)(106, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "U");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](109, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "select", 92)(111, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "Helvetica Neue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "select", 92)(114, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "14");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "button", 93)(117, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](120, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](122, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](124, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](126, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](128, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](130, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](132, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](134, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](136, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](138, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](140, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](142, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](144, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](146, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](147, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "div", 124)(149, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_13_Template_button_click_149_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](150);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](152, NotificationsComponent_div_13_span_152_Template, 2, 1, "span", 127)(153, NotificationsComponent_div_13_span_153_Template, 2, 1, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.editingNotification ? ctx_r1.getTranslation("editNotification") || "Edit Notification" : ctx_r1.getTranslation("addNewNotification"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("subsites"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r1.selectedSubsite);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedSubsite ? ctx_r1.selectedSubsite.name : ctx_r1.getTranslation("nothingSelected"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("rotated", ctx_r1.showSubsiteDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.showSubsiteDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("sections"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r1.selectedSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedSection ? ctx_r1.selectedSection.name : "------", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r1.selectedSubsite);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("rotated", ctx_r1.showSectionDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.showSectionDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("specialDivisions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r1.selectedSpecialDivision);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedSpecialDivision ? ctx_r1.selectedSpecialDivision.name : "------", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r1.selectedSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("rotated", ctx_r1.showSpecialDivisionDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.showSpecialDivisionDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.notificationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("notificationTitle"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterNotificationTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("notificationType"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("urgent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("important"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("schedulingDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("schedulingTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("sendToAll"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("notificationMessage"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterNotificationMessage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("category"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("systemUpdates"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("securityAlerts"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("newMessages"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("reminders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("marketing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("priority"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("low"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("high"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("notificationContent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r1.notificationForm.valid || ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
  }
}
function NotificationsComponent_tr_67_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 161)(1, "small", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](notification_r13.message);
  }
}
function NotificationsComponent_tr_67_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("allLocations") || "All Locations");
  }
}
function NotificationsComponent_tr_67_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](notification_r13.subsiteName);
  }
}
function NotificationsComponent_tr_67_div_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_tr_67_div_14_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](notification_r13.sectionName);
  }
}
function NotificationsComponent_tr_67_div_14_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_tr_67_div_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](notification_r13.specialDivisionName);
  }
}
function NotificationsComponent_tr_67_div_14_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_tr_67_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NotificationsComponent_tr_67_div_14_span_1_Template, 2, 1, "span", 127)(2, NotificationsComponent_tr_67_div_14_span_2_Template, 2, 0, "span", 127)(3, NotificationsComponent_tr_67_div_14_span_3_Template, 2, 1, "span", 127)(4, NotificationsComponent_tr_67_div_14_span_4_Template, 2, 0, "span", 127)(5, NotificationsComponent_tr_67_div_14_span_5_Template, 2, 1, "span", 127)(6, NotificationsComponent_tr_67_div_14_span_6_Template, 2, 0, "span", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notification_r13.subsiteName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notification_r13.subsiteName && notification_r13.sectionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notification_r13.sectionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (notification_r13.subsiteName || notification_r13.sectionName) && notification_r13.specialDivisionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notification_r13.specialDivisionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !notification_r13.subsiteName && !notification_r13.sectionName && !notification_r13.specialDivisionName);
  }
}
function NotificationsComponent_tr_67_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 1, notification_r13.createdAt, "short"));
  }
}
function NotificationsComponent_tr_67_div_24_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", notification_r13.scheduledTime, "");
  }
}
function NotificationsComponent_tr_67_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NotificationsComponent_tr_67_div_24_span_5_Template, 2, 1, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 2, notification_r13.scheduledDate, "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notification_r13.scheduledTime);
  }
}
function NotificationsComponent_tr_67_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_tr_67_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_tr_67_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.editNotification(notification_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx_r1.getTranslation("edit"));
  }
}
function NotificationsComponent_tr_67_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_tr_67_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.sendNotification(notification_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx_r1.getTranslation("send"));
  }
}
function NotificationsComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 133)(2, "div", 134)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NotificationsComponent_tr_67_div_5_Template, 3, 1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 136)(7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 140)(12, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, NotificationsComponent_tr_67_div_13_Template, 4, 1, "div", 142)(14, NotificationsComponent_tr_67_div_14_Template, 7, 6, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 144)(16, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td", 146)(19, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td", 148)(22, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, NotificationsComponent_tr_67_div_23_Template, 5, 4, "div", 150)(24, NotificationsComponent_tr_67_div_24_Template, 6, 5, "div", 151)(25, NotificationsComponent_tr_67_div_25_Template, 2, 0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "td", 153)(27, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, NotificationsComponent_tr_67_button_28_Template, 2, 1, "button", 155)(29, NotificationsComponent_tr_67_button_29_Template, 2, 1, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_tr_67_Template_button_click_30_listener() {
      const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.duplicateNotification(notification_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "i", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_tr_67_Template_button_click_32_listener() {
      const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteNotification(notification_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const notification_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](notification_r13.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](notification_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notification_r13.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](notification_r13.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r1.getTypeIcon(notification_r13.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTypeDisplayName(notification_r13.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notification_r13.sendToAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !notification_r13.sendToAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](notification_r13.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusDisplayName(notification_r13.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](notification_r13.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getPriorityDisplayName(notification_r13.priority), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notification_r13.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notification_r13.scheduledDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !notification_r13.createdAt && !notification_r13.scheduledDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notification_r13.status === "draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", notification_r13.status === "draft" || notification_r13.status === "scheduled");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx_r1.getTranslation("duplicate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx_r1.getTranslation("delete"));
  }
}
function NotificationsComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 174)(1, "div", 175)(2, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_68_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_68_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_68_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_68_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_div_68_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.totalPages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("previous"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("first"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.currentPage.toString().padStart(2, "0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.currentPage >= ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r1.currentPage + 1).toString().padStart(2, "0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.currentPage >= ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("next"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.currentPage >= ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("last"), " ");
  }
}
function NotificationsComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noNotificationsFound"));
  }
}
function NotificationsComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("loading"));
  }
}
function NotificationsComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 181)(1, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
class NotificationsComponent {
  constructor(languageService, translationService, notificationService, locationService, authService, fb) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.notificationService = notificationService;
    this.locationService = locationService;
    this.authService = authService;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.notifications = [];
    this.filteredNotifications = [];
    this.searchTerm = '';
    this.selectedType = 'all';
    this.selectedStatus = 'all';
    this.showAddForm = false;
    this.editingNotification = null;
    this.isLoading = false;
    this.errorMessage = '';
    this.showConfirmDialog = false;
    this.confirmDialogData = {};
    this.itemToDelete = null;
    // Pagination properties
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalPages = 1;
    this.totalNotifications = 0;
    // Three connected selection properties
    this.selectedSubsite = null;
    this.selectedSection = null;
    this.selectedSpecialDivision = null;
    // Available options for selection
    this.availableSubsites = [];
    this.availableSections = [];
    this.availableSpecialDivisions = [];
    // Dropdown visibility flags
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
    this.notificationForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      type: ['normal', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      // Default to 'normal'
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      category: ['system-updates', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      // Default to 'system-updates'
      priority: ['medium', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      schedulingDate: [''],
      schedulingTime: [''],
      sendToAll: [false],
      content: ['']
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadNotifications();
    this.loadAvailableOptions(); // Load options for selection cards
    this.calculatePagination();
    // Close dropdowns when clicking outside - use a more reliable approach
    setTimeout(() => {
      document.addEventListener('click', event => {
        const target = event.target;
        const clickedCard = target.closest('.selection-card');
        const clickedDropdown = target.closest('.dropdown-menu');
        // Only close if clicking completely outside any selection card
        if (!clickedCard && !clickedDropdown) {
          this.closeAllDropdowns();
        }
      }, true); // Use capture phase to catch events early
    }, 200);
  }
  loadNotifications() {
    this.isLoading = true;
    this.errorMessage = '';
    const filters = {
      limit: this.itemsPerPage,
      page: this.currentPage
    };
    if (this.selectedStatus !== 'all') {
      filters.status = this.selectedStatus;
    }
    if (this.selectedType !== 'all') {
      filters.type = this.selectedType;
    }
    if (this.searchTerm) {
      filters.search = this.searchTerm;
    }
    // Add userId filter to show only user-specific notifications
    // TODO: Allow admins to see all notifications if needed
    const currentUser = this.authService?.getCurrentUser();
    if (currentUser?.id) {
      filters.userId = currentUser.id;
    }
    this.notificationService.getNotifications(filters).subscribe({
      next: response => {
        this.notifications = response.notifications;
        this.filteredNotifications = response.notifications;
        this.totalNotifications = response.total;
        this.calculatePagination();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading notifications:', error);
        this.errorMessage = this.getTranslation('errorLoadingNotifications') || 'Error loading notifications';
        this.isLoading = false;
      }
    });
  }
  loadAvailableOptions() {
    // Load subsites
    this.locationService.getSubsites().subscribe({
      next: subsites => {
        this.availableSubsites = subsites;
      },
      error: error => {
        console.error('Error loading subsites:', error);
      }
    });
  }
  openSubsiteSelector() {
    console.log('openSubsiteSelector called', 'Current state:', this.showSubsiteDropdown);
    this.showSubsiteDropdown = !this.showSubsiteDropdown;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
    if (this.availableSubsites.length === 0) {
      this.loadAvailableOptions();
    }
    console.log('After toggle:', this.showSubsiteDropdown, 'Available subsites:', this.availableSubsites.length);
  }
  openSectionSelector() {
    if (!this.selectedSubsite) return;
    this.showSectionDropdown = !this.showSectionDropdown;
    this.showSubsiteDropdown = false;
    this.showSpecialDivisionDropdown = false;
    // Always reload sections when opening dropdown to ensure fresh data
    this.locationService.getSections().subscribe({
      next: sections => {
        // Filter sections by location matching the selected subsite name
        // Show sections where location matches subsite name, or show all if no match found
        const filtered = sections.filter(s => s.location === this.selectedSubsite?.name);
        this.availableSections = filtered.length > 0 ? filtered : sections;
        console.log('Selected subsite:', this.selectedSubsite?.name);
        console.log('All sections:', sections.length);
        console.log('Filtered sections:', this.availableSections.length);
      },
      error: error => {
        console.error('Error loading sections:', error);
        this.availableSections = [];
      }
    });
  }
  openSpecialDivisionSelector() {
    if (!this.selectedSection) return;
    this.showSpecialDivisionDropdown = !this.showSpecialDivisionDropdown;
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    // Always reload special divisions when opening dropdown to ensure fresh data
    this.locationService.getSpecialDivisions().subscribe({
      next: divisions => {
        // Filter divisions where location matches the selected section location
        // Also show all divisions if no match found (for flexibility)
        const filtered = divisions.filter(d => d.location === this.selectedSection?.location);
        this.availableSpecialDivisions = filtered.length > 0 ? filtered : divisions;
        console.log('Selected section location:', this.selectedSection?.location);
        console.log('All divisions:', divisions);
        console.log('Filtered divisions:', this.availableSpecialDivisions);
      },
      error: error => {
        console.error('Error loading special divisions:', error);
        this.availableSpecialDivisions = [];
      }
    });
  }
  onSubsiteSelected(subsite) {
    this.selectedSubsite = subsite;
    this.selectedSection = null;
    this.selectedSpecialDivision = null;
    this.availableSections = [];
    this.availableSpecialDivisions = [];
    this.showSubsiteDropdown = false;
  }
  onSectionSelected(section) {
    this.selectedSection = section;
    this.selectedSpecialDivision = null;
    this.availableSpecialDivisions = [];
    this.showSectionDropdown = false;
  }
  onSpecialDivisionSelected(specialDivision) {
    this.selectedSpecialDivision = specialDivision;
    this.showSpecialDivisionDropdown = false;
  }
  onSendToAllChange() {
    const sendToAll = this.notificationForm.get('sendToAll')?.value;
    if (sendToAll) {
      // Clear location selections when "Send to All" is checked
      this.selectedSubsite = null;
      this.selectedSection = null;
      this.selectedSpecialDivision = null;
    }
  }
  closeAllDropdowns() {
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
  }
  filterNotifications() {
    this.currentPage = 1;
    this.loadNotifications();
  }
  addNotification() {
    if (this.notificationForm.valid) {
      this.isLoading = true;
      const sendToAll = Boolean(this.notificationForm.value.sendToAll);
      const notificationData = {
        title: this.notificationForm.value.title,
        type: this.notificationForm.value.type,
        message: this.notificationForm.value.message,
        category: this.notificationForm.value.category,
        priority: this.notificationForm.value.priority,
        content: this.notificationForm.value.content || '',
        sendToAll: sendToAll,
        scheduledDate: this.notificationForm.value.schedulingDate ? new Date(this.notificationForm.value.schedulingDate) : undefined,
        scheduledTime: this.notificationForm.value.schedulingTime || undefined,
        // Only include location IDs if sendToAll is false, otherwise set to null
        subsiteId: sendToAll ? null : this.selectedSubsite?.id ?? null,
        sectionId: sendToAll ? null : this.selectedSection?.id ?? null,
        specialDivisionId: sendToAll ? null : this.selectedSpecialDivision?.id ?? null
      };
      if (this.editingNotification?.id) {
        // Update existing notification
        this.notificationService.updateNotification(this.editingNotification.id, notificationData).subscribe({
          next: () => {
            this.isLoading = false;
            this.resetForm();
            this.loadNotifications();
          },
          error: error => {
            console.error('Error updating notification:', error);
            this.isLoading = false;
            this.errorMessage = this.getTranslation('errorUpdatingNotification') || 'Error updating notification';
          }
        });
      } else {
        // Create new notification
        notificationData.status = 'draft';
        this.notificationService.createNotification(notificationData).subscribe({
          next: () => {
            this.isLoading = false;
            this.resetForm();
            this.loadNotifications();
          },
          error: error => {
            console.error('Error creating notification:', error);
            this.isLoading = false;
            this.errorMessage = this.getTranslation('errorCreatingNotification') || 'Error creating notification';
          }
        });
      }
    }
  }
  resetForm() {
    this.notificationForm.reset({
      type: 'normal',
      category: 'system-updates',
      priority: 'medium',
      sendToAll: false
    });
    this.showAddForm = false;
    this.editingNotification = null;
    this.selectedSubsite = null;
    this.selectedSection = null;
    this.selectedSpecialDivision = null;
  }
  markAsRead(notification) {
    // In the new system, notifications don't have read/unread status
    // They have draft/scheduled/sent status instead
    console.log('Notification clicked:', notification.title);
  }
  markAllAsRead() {
    // In the new system, this method is not applicable
    // Notifications are either draft, scheduled, or sent
    console.log('Mark all as read - not applicable in new system');
  }
  deleteNotification(notification) {
    if (!notification.id) return;
    this.itemToDelete = notification;
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete'),
      message: this.getTranslation('confirmDeleteMessage') || `Are you sure you want to delete "${notification.title}"?`,
      confirmText: this.getTranslation('delete'),
      cancelText: this.getTranslation('cancel')
    };
    this.showConfirmDialog = true;
  }
  onConfirmDelete() {
    if (this.itemToDelete?.id) {
      this.isLoading = true;
      this.notificationService.deleteNotification(this.itemToDelete.id).subscribe({
        next: () => {
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
          this.loadNotifications();
        },
        error: error => {
          console.error('Error deleting notification:', error);
          this.isLoading = false;
          this.errorMessage = this.getTranslation('errorDeletingNotification') || 'Error deleting notification';
          this.showConfirmDialog = false;
          this.itemToDelete = null;
        }
      });
    }
  }
  onCancelDelete() {
    this.showConfirmDialog = false;
    this.itemToDelete = null;
  }
  getUnreadCount() {
    // In the new system, count draft notifications instead
    return this.notifications.filter(n => n.status === 'draft').length;
  }
  getTypeDisplayName(type) {
    const types = {
      info: this.getTranslation('info'),
      success: this.getTranslation('success'),
      warning: this.getTranslation('warning'),
      error: this.getTranslation('error')
    };
    return types[type] || type;
  }
  getCategoryDisplayName(category) {
    const categoryMap = {
      'system-updates': 'systemUpdates',
      'security-alerts': 'securityAlerts',
      'new-messages': 'newMessages',
      'reminders': 'reminders',
      'marketing': 'marketing',
      // Legacy categories for backward compatibility
      'general': 'general',
      'system': 'system',
      'messages': 'messages',
      'security': 'security'
    };
    const translationKey = categoryMap[category] || category;
    return this.getTranslation(translationKey) || category;
  }
  getPriorityDisplayName(priority) {
    const priorities = {
      low: this.getTranslation('low'),
      medium: this.getTranslation('medium'),
      high: this.getTranslation('high')
    };
    return priorities[priority] || priority;
  }
  getStatusDisplayName(status) {
    const statuses = {
      draft: this.getTranslation('draft'),
      scheduled: this.getTranslation('scheduled'),
      sent: this.getTranslation('sent')
    };
    return statuses[status] || status;
  }
  getTypeIcon(type) {
    const icons = {
      info: 'fa-info-circle',
      success: 'fa-check-circle',
      warning: 'fa-exclamation-triangle',
      error: 'fa-times-circle'
    };
    return icons[type] || 'fa-bell';
  }
  // Use centralized translation service
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  calculatePagination() {
    this.totalPages = Math.ceil(this.totalNotifications / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadNotifications();
  }
  editNotification(notification) {
    this.editingNotification = notification;
    // Populate form with notification data
    this.notificationForm.patchValue({
      title: notification.title,
      type: notification.type,
      message: notification.message,
      category: notification.category,
      priority: notification.priority,
      schedulingDate: notification.scheduledDate ? new Date(notification.scheduledDate).toISOString().split('T')[0] : '',
      schedulingTime: notification.scheduledTime || '',
      sendToAll: Boolean(notification.sendToAll),
      content: notification.content || ''
    });
    // Set selected locations only if sendToAll is false
    if (!notification.sendToAll && notification.subsiteId) {
      this.locationService.getSubsites().subscribe({
        next: subsites => {
          this.selectedSubsite = subsites.find(s => s.id === notification.subsiteId);
          if (this.selectedSubsite && notification.sectionId) {
            this.locationService.getSections().subscribe({
              next: sections => {
                this.selectedSection = sections.find(s => s.id === notification.sectionId);
                if (this.selectedSection && notification.specialDivisionId) {
                  this.locationService.getSpecialDivisions().subscribe({
                    next: divisions => {
                      this.selectedSpecialDivision = divisions.find(d => d.id === notification.specialDivisionId);
                    }
                  });
                }
              }
            });
          }
        }
      });
    } else {
      // Clear location selections if sendToAll is true
      this.selectedSubsite = null;
      this.selectedSection = null;
      this.selectedSpecialDivision = null;
    }
    this.showAddForm = true;
  }
  sendNotification(notification) {
    if (!notification.id) return;
    this.isLoading = true;
    this.notificationService.sendNotification(notification.id).subscribe({
      next: () => {
        this.isLoading = false;
        this.loadNotifications();
      },
      error: error => {
        console.error('Error sending notification:', error);
        this.isLoading = false;
        this.errorMessage = this.getTranslation('errorSendingNotification') || 'Error sending notification';
      }
    });
  }
  duplicateNotification(notification) {
    if (!notification.id) return;
    const duplicatedNotification = {
      title: `${notification.title} (Copy)`,
      type: notification.type,
      message: notification.message,
      category: notification.category,
      priority: notification.priority,
      status: 'draft',
      content: notification.content || '',
      sendToAll: notification.sendToAll,
      subsiteId: notification.subsiteId,
      sectionId: notification.sectionId,
      specialDivisionId: notification.specialDivisionId,
      scheduledDate: notification.scheduledDate,
      scheduledTime: notification.scheduledTime
    };
    this.isLoading = true;
    this.notificationService.createNotification(duplicatedNotification).subscribe({
      next: () => {
        this.isLoading = false;
        this.loadNotifications();
      },
      error: error => {
        console.error('Error duplicating notification:', error);
        this.isLoading = false;
        this.errorMessage = this.getTranslation('errorDuplicatingNotification') || 'Error duplicating notification';
      }
    });
  }
  static {
    this.ɵfac = function NotificationsComponent_Factory(t) {
      return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: NotificationsComponent,
      selectors: [["app-notifications"]],
      decls: 73,
      vars: 36,
      consts: [["subsiteCard", ""], [1, "notifications-container", 3, "dir"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "fas", "fa-bell"], [1, "header-actions"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-check-double"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], ["class", "add-notification-form", 4, "ngIf"], [1, "filters-section"], [1, "filters-card"], [1, "search-filter"], [1, "search-input"], [1, "fas", "fa-search"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "type-filter"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "normal"], ["value", "urgent"], ["value", "important"], ["value", "info"], [1, "status-filter"], ["value", "draft"], ["value", "scheduled"], ["value", "sent"], [1, "notifications-list"], [1, "list-header"], [1, "total-count"], [1, "unread-count"], [1, "table-container"], [1, "notifications-table"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "pagination-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [3, "confirmed", "cancelled", "visible", "data"], [1, "add-notification-form"], [1, "form-card"], [1, "form-title"], [1, "selection-cards"], [1, "selection-card"], [1, "card-label"], [1, "card-content", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "fas", "fa-chevron-down"], ["class", "dropdown-menu", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click", "disabled"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["for", "type"], ["id", "type", "formControlName", "type", 1, "form-control"], ["for", "schedulingDate"], ["type", "date", "id", "schedulingDate", "formControlName", "schedulingDate", 1, "form-control"], ["for", "schedulingTime"], ["type", "time", "id", "schedulingTime", "formControlName", "schedulingTime", 1, "form-control"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "sendToAll", 1, "form-check-input", 3, "change"], [1, "checkbox-text"], ["for", "message"], ["id", "message", "formControlName", "message", "rows", "3", 1, "form-control", 3, "placeholder"], ["for", "category"], ["id", "category", "formControlName", "category", 1, "form-control"], ["value", "system-updates"], ["value", "security-alerts"], ["value", "new-messages"], ["value", "reminders"], ["value", "marketing"], ["for", "priority"], ["id", "priority", "formControlName", "priority", 1, "form-control"], ["value", "low"], ["value", "medium"], ["value", "high"], [1, "rich-text-editor-section"], [1, "form-label"], [1, "rich-text-editor"], [1, "editor-toolbar"], ["type", "button", "title", "Magic", 1, "toolbar-btn"], [1, "fas", "fa-magic"], ["type", "button", "title", "Bold", 1, "toolbar-btn"], ["type", "button", "title", "Italic", 1, "toolbar-btn"], ["type", "button", "title", "Underline", 1, "toolbar-btn"], ["type", "button", "title", "Attachment", 1, "toolbar-btn"], [1, "fas", "fa-paperclip"], [1, "toolbar-select"], ["type", "button", "title", "Text Color", 1, "toolbar-btn"], [2, "color", "#ffc107"], ["type", "button", "title", "Left Align", 1, "toolbar-btn"], [1, "fas", "fa-align-left"], ["type", "button", "title", "Center Align", 1, "toolbar-btn"], [1, "fas", "fa-align-center"], ["type", "button", "title", "Right Align", 1, "toolbar-btn"], [1, "fas", "fa-align-right"], ["type", "button", "title", "Justify", 1, "toolbar-btn"], [1, "fas", "fa-align-justify"], ["type", "button", "title", "Bullet List", 1, "toolbar-btn"], [1, "fas", "fa-list-ul"], ["type", "button", "title", "Numbered List", 1, "toolbar-btn"], [1, "fas", "fa-list-ol"], ["type", "button", "title", "Text Style", 1, "toolbar-btn"], [1, "fas", "fa-text-height"], ["type", "button", "title", "Table", 1, "toolbar-btn"], [1, "fas", "fa-table"], ["type", "button", "title", "Link", 1, "toolbar-btn"], [1, "fas", "fa-link"], ["type", "button", "title", "Image", 1, "toolbar-btn"], [1, "fas", "fa-image"], ["type", "button", "title", "Video", 1, "toolbar-btn"], [1, "fas", "fa-video"], ["type", "button", "title", "Clear Formatting", 1, "toolbar-btn"], [1, "fas", "fa-times"], ["type", "button", "title", "Source Code", 1, "toolbar-btn"], [1, "fas", "fa-code"], ["type", "button", "title", "Help", 1, "toolbar-btn"], [1, "fas", "fa-question"], ["contenteditable", "true", 1, "editor-content"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "dropdown-menu", 3, "click"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-item", 4, "ngIf"], [1, "dropdown-item", 3, "click"], [1, "dropdown-item"], [1, "title-cell"], [1, "notification-title"], ["class", "notification-message", 4, "ngIf"], [1, "type-cell"], [1, "notification-type"], [1, "fas"], [1, "type-badge"], [1, "location-cell"], [1, "location-info"], ["class", "location-item all-locations", 4, "ngIf"], ["class", "location-path", 4, "ngIf"], [1, "status-cell"], [1, "status-badge"], [1, "priority-cell"], [1, "priority-badge"], [1, "date-cell"], [1, "date-info"], ["class", "created-date", 4, "ngIf"], ["class", "scheduled-date", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "actions-cell"], [1, "action-buttons"], ["class", "btn btn-sm btn-outline-primary", 3, "title", "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-success", 3, "title", "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-info", 3, "click", "title"], [1, "fas", "fa-copy"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "title"], [1, "fas", "fa-trash"], [1, "notification-message"], [1, "text-muted"], [1, "location-item", "all-locations"], [1, "fas", "fa-globe"], [1, "location-path"], [1, "created-date"], [1, "fas", "fa-calendar"], [1, "scheduled-date"], [1, "fas", "fa-clock"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "title"], [1, "fas", "fa-edit"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click", "title"], [1, "fas", "fa-paper-plane"], [1, "pagination-container"], [1, "pagination"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "btn", "btn-sm", "btn-primary", 3, "disabled"], [1, "empty-state"], [1, "loading-state"], [1, "fas", "fa-spinner", "fa-spin"], [1, "error-message"], [1, "alert", "alert-danger"]],
      template: function NotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6)(7, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_7_listener() {
            return ctx.markAllAsRead();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_10_listener() {
            return ctx.showAddForm = !ctx.showAddForm;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, NotificationsComponent_div_13_Template, 154, 52, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function NotificationsComponent_Template_input_input_19_listener() {
            return ctx.filterNotifications();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 18)(21, "select", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_Template_select_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedType, $event) || (ctx.selectedType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function NotificationsComponent_Template_select_change_21_listener() {
            return ctx.filterNotifications();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 25)(33, "select", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_Template_select_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function NotificationsComponent_Template_select_change_33_listener() {
            return ctx.filterNotifications();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 29)(43, "div", 30)(44, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 33)(49, "table", 34)(50, "thead")(51, "tr")(52, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, NotificationsComponent_tr_67_Template, 34, 24, "tr", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, NotificationsComponent_div_68_Template, 14, 12, "div", 36)(69, NotificationsComponent_div_69_Template, 4, 1, "div", 37)(70, NotificationsComponent_div_70_Template, 4, 1, "div", 38)(71, NotificationsComponent_div_71_Template, 3, 1, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "app-confirm-dialog", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("confirmed", function NotificationsComponent_Template_app_confirm_dialog_confirmed_72_listener() {
            return ctx.onConfirmDelete();
          })("cancelled", function NotificationsComponent_Template_app_confirm_dialog_cancelled_72_listener() {
            return ctx.onCancelDelete();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("notifications"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("markAllAsRead"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("addNewNotification"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showAddForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx.getTranslation("searchNotifications"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("allTypes"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("normal"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("urgent"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("important"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("info"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("allStatuses"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("draft"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("scheduled"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("sent"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.getTranslation("totalNotifications"), ": ", ctx.filteredNotifications.length, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.getTranslation("draft"), ": ", ctx.getUnreadCount(), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("notificationTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("notificationType"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("location"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("status"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("priority"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("date"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("actions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.filteredNotifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totalNotifications > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.filteredNotifications.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.showConfirmDialog)("data", ctx.confirmDialogData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmDialogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
      styles: [".notifications-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 12px;\n  font-size: 1.25rem;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  border: none;\n  min-width: 120px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n  transform: translateY(-1px);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n\n.add-notification-form[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f1f3f4;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 20px;\n  font-size: 1.25rem;\n  text-align: center;\n  position: relative;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 40px;\n  height: 3px;\n  background: linear-gradient(90deg, #00695c, #4db6ac);\n  border-radius: 2px;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #34495e;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #6c757d;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 6px;\n  font-size: 12px;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  background: #fafbfc;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n  font-size: 0.8rem;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  background: #fafbfc;\n  cursor: pointer;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f3f4;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  border: none;\n  min-width: 100px;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n  transform: translateY(-1px);\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n.add-notification-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.2);\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n  font-size: 14px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 10px 14px 10px 40px;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  background: #fafbfc;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n  font-size: 0.8rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .type-filter[_ngcontent-%COMP%], .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .type-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  background: #fafbfc;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .type-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n\n.notifications-list[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: white;\n  border-radius: 16px;\n  padding: 16px 20px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.list-header[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.875rem;\n}\n.list-header[_ngcontent-%COMP%]   .unread-count[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffc107, #fd7e14);\n  color: white;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.notifications-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 20px;\n}\n\n.notification-card[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.notification-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.notification-card.unread[_ngcontent-%COMP%] {\n  border-left: 4px solid #00695c;\n  background: #f8f9fa;\n}\n.notification-card.read[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 15px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.notification-type[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.notification-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.notification-type[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.notification-type.info[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n.notification-type.info[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.notification-type.success[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.notification-type.success[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.notification-type.warning[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.notification-type.warning[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.notification-type.error[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.notification-type.error[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n\n.notification-priority[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.notification-priority.low[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.notification-priority.medium[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.notification-priority.high[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.notification-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.notification-info[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 10px 0;\n}\n.notification-info[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin: 0 0 15px 0;\n  line-height: 1.5;\n}\n\n.notification-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  color: #00695c;\n}\n\n.notification-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.notification-status[_ngcontent-%COMP%]   .unread[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.notification-status[_ngcontent-%COMP%]   .read[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #6c757d;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f8f9fa;\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  border-top: 1px solid #e9ecef;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #00695c;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #004d40;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #adb5bd;\n  margin-bottom: 16px;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 1rem;\n  margin: 0;\n  font-weight: 500;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: auto;\n  right: 15px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 45px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[dir=rtl][_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[dir=rtl][_ngcontent-%COMP%]   .notification-card.unread[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 4px solid #00695c;\n}\n\n@media (max-width: 1200px) {\n  .notifications-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .notifications-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    justify-content: center;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n  .filters-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-filter[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .type-filter[_ngcontent-%COMP%], .status-filter[_ngcontent-%COMP%], .priority-filter[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .notifications-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .card-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .list-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .notifications-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .form-card[_ngcontent-%COMP%], .filters-card[_ngcontent-%COMP%], .notifications-list[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .card-header[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.selection-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border: 1px solid #e9ecef;\n  border-radius: 16px;\n  padding: 16px;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]:hover {\n  border-color: #00695c;\n  box-shadow: 0 8px 25px rgba(0, 105, 92, 0.15);\n  transform: translateY(-2px);\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-bottom: 6px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #495057;\n  margin-bottom: 10px;\n  min-height: 20px;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .card-content.selected[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-weight: 700;\n  background: rgba(0, 105, 92, 0.1);\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  padding: 6px 12px;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #6c757d;\n  transition: all 0.2s ease;\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #00695c;\n  color: white;\n  border-color: #00695c;\n  transform: scale(1.02);\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  background: #f8f9fa;\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  max-height: 200px;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease;\n  display: block !important;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  color: #495057;\n  transition: all 0.2s ease;\n  border-bottom: 1px solid #f1f3f4;\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #00695c;\n  font-weight: 600;\n}\n\n.rich-text-editor-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #34495e;\n  margin-bottom: 12px;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #6c757d;\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 16px;\n  overflow: hidden;\n  background: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]:focus-within {\n  border-color: #00695c;\n  box-shadow: 0 4px 20px rgba(0, 105, 92, 0.15);\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]   .editor-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  padding: 12px;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  border-bottom: 1px solid #e9ecef;\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]   .editor-toolbar[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]   .editor-toolbar[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%]:hover {\n  background: #00695c;\n  color: white;\n  border-color: #00695c;\n  transform: scale(1.05);\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]   .editor-toolbar[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]   .editor-toolbar[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]   .editor-toolbar[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], .rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]   .editor-toolbar[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%]   u[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]   .editor-toolbar[_ngcontent-%COMP%]   .toolbar-select[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-size: 0.75rem;\n  cursor: pointer;\n  min-width: 70px;\n  transition: all 0.2s ease;\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]   .editor-toolbar[_ngcontent-%COMP%]   .toolbar-select[_ngcontent-%COMP%]:hover {\n  border-color: #00695c;\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]   .editor-content[_ngcontent-%COMP%] {\n  min-height: 160px;\n  padding: 16px;\n  outline: none;\n  font-family: \"Inter\", \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #495057;\n  background: white;\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]   .editor-content[_ngcontent-%COMP%]:empty:before {\n  content: attr(data-placeholder);\n  color: #adb5bd;\n  font-style: italic;\n  font-size: 13px;\n}\n.rich-text-editor-section[_ngcontent-%COMP%]   .rich-text-editor[_ngcontent-%COMP%]   .editor-content[_ngcontent-%COMP%]:focus {\n  background: #fafbfc;\n}\n\n.checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-weight: 500;\n  color: #495057;\n  padding: 8px 12px;\n  border-radius: 10px;\n  transition: all 0.2s ease;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  border: 2px solid #dee2e6;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #00695c;\n  border-color: #00695c;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #495057;\n  border-bottom: 2px solid #dee2e6;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f3f4;\n  transition: all 0.2s ease;\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: scale(1.01);\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.draft[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.scheduled[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.sent[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  vertical-align: middle;\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .notification-type[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .notification-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 16px;\n  text-align: center;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .notification-type[_ngcontent-%COMP%]   i.fa-info-circle[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .notification-type[_ngcontent-%COMP%]   i.fa-exclamation-triangle[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .notification-type[_ngcontent-%COMP%]   i.fa-star[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .notification-type[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .notification-type[_ngcontent-%COMP%]   .type-badge.normal[_ngcontent-%COMP%] {\n  background: rgba(23, 162, 184, 0.1);\n  color: #17a2b8;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .notification-type[_ngcontent-%COMP%]   .type-badge.urgent[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #856404;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .notification-type[_ngcontent-%COMP%]   .type-badge.important[_ngcontent-%COMP%] {\n  background: rgba(253, 126, 20, 0.1);\n  color: #fd7e14;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .notification-type[_ngcontent-%COMP%]   .type-badge.info[_ngcontent-%COMP%] {\n  background: rgba(23, 162, 184, 0.1);\n  color: #17a2b8;\n}\n.table-container[_ngcontent-%COMP%]   .title-cell[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #2c3e50;\n  display: block;\n  margin-bottom: 4px;\n}\n.table-container[_ngcontent-%COMP%]   .title-cell[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.table-container[_ngcontent-%COMP%]   .location-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.table-container[_ngcontent-%COMP%]   .location-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .location-path[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  color: #495057;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.table-container[_ngcontent-%COMP%]   .location-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .location-path[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.table-container[_ngcontent-%COMP%]   .location-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .location-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #495057;\n}\n.table-container[_ngcontent-%COMP%]   .location-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .location-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 0.75rem;\n  width: 14px;\n}\n.table-container[_ngcontent-%COMP%]   .location-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .location-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.table-container[_ngcontent-%COMP%]   .location-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .location-item.all-locations[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-weight: 600;\n}\n.table-container[_ngcontent-%COMP%]   .location-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .location-item.all-locations[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: inline-block;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.draft[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #856404;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.scheduled[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.1);\n  color: #004085;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.sent[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.1);\n  color: #155724;\n}\n.table-container[_ngcontent-%COMP%]   .priority-cell[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: inline-block;\n}\n.table-container[_ngcontent-%COMP%]   .priority-cell[_ngcontent-%COMP%]   .priority-badge.low[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.1);\n  color: #155724;\n}\n.table-container[_ngcontent-%COMP%]   .priority-cell[_ngcontent-%COMP%]   .priority-badge.medium[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #856404;\n}\n.table-container[_ngcontent-%COMP%]   .priority-cell[_ngcontent-%COMP%]   .priority-badge.high[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  color: #721c24;\n}\n.table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 0.8rem;\n}\n.table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   .created-date[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   .scheduled-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #6c757d;\n}\n.table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   .created-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   .scheduled-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 0.7rem;\n}\n.table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   .scheduled-date[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-weight: 500;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  transition: all 0.2s ease;\n  min-width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline-danger[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  color: #dc3545;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: white;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #00695c;\n  color: #00695c;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #00695c;\n  color: white;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline-success[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  color: #28a745;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline-success[_ngcontent-%COMP%]:hover {\n  background: #28a745;\n  color: white;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline-info[_ngcontent-%COMP%] {\n  border-color: #17a2b8;\n  color: #17a2b8;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline-info[_ngcontent-%COMP%]:hover {\n  background: #17a2b8;\n  color: white;\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 24px;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  min-width: 40px;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #dee2e6;\n  color: #6c757d;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #00695c;\n  color: #00695c;\n  transform: translateY(-1px);\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: #00695c;\n  border-color: #00695c;\n  color: white;\n  cursor: default;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 1;\n}\n\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n  .table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px 8px;\n    font-size: 0.8rem;\n  }\n  .table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding-left: 12px;\n  }\n  .table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, .table-container[_ngcontent-%COMP%]   .notifications-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    padding-right: 12px;\n  }\n  .pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    font-size: 0.75rem;\n    min-width: 36px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbm90aWZpY2F0aW9ucy9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFHQTtFQUNFLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQUFSO0FBSUk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBRk47QUFJTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlRO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFGVjtBQUlVO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFGWjtBQU1RO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7QUFKVjtBQU1VO0VBQ0UsMkJBQUE7RUFDQSw0Q0FBQTtBQUpaOztBQWFBO0VBQ0UsbUJBQUE7QUFWRjtBQVlFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0FBVko7QUFZSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxr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QTRNUTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQTFNVjtBQTRNVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQTFNWjtBQThNUTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQTVNVjtBQThNVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQTVNWjs7QUFxTkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWxORjtBQW9ORTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFsTko7QUFvTkk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQWxOTjtBQW9OTTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQWxOUjtBQW9OUTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBbE5WO0FBcU5RO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBbk5WO0FBdU5NO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBck5SO0FBdU5RO0VBQ0UsVUFBQTtBQXJOVjs7QUE2TkE7RUFDRTtJQUNFLGdCQUFBO0VBMU5GO0VBNE5FO0lBQ0UsZ0JBQUE7RUExTko7RUE0Tkk7O0lBRUUsaUJBQUE7SUFDQSxpQkFBQTtFQTFOTjtFQTROTTs7SUFDRSxrQkFBQTtFQXpOUjtFQTROTTs7SUFDRSxtQkFBQTtFQXpOUjtFQWdPRTtJQUNFLGVBQUE7SUFDQSxRQUFBO0VBOU5KO0VBZ09JO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUE5Tk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb25zLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLy8gUGFnZSBIZWFkZXIgU3R5bGluZ1xyXG4ucGFnZS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZmZmYgMCUsICNmOGY5ZmEgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgXHJcbiAgLmhlYWRlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgXHJcbiAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBcclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjLCAjNGRiNmFjKTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZWFkZXItYWN0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMTJweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICYuYnRuLXNlY29uZGFyeSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDEwNSwgOTIsIDAuMyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLCAxMDUsIDkyLCAwLjQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRm9ybSBTdHlsaW5nXHJcbi5hZGQtbm90aWZpY2F0aW9uLWZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgXHJcbiAgLmZvcm0tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcclxuICAgIFxyXG4gICAgLmZvcm0tdGl0bGUge1xyXG4gICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgXHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC04cHg7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDY5NWMsICM0ZGI2YWMpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZm9ybS1yb3cge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIFxyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAuZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzM0NDk1ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICBcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNhZGI1YmQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5mb3JtLXNlbGVjdCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmJmYztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZm9ybS1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgICBcclxuICAgIC5idG4ge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgXHJcbiAgICAgICYuYnRuLXNlY29uZGFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDEwNSwgOTIsIDAuMyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMTA1LCA5MiwgMC40KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDEwNSwgOTIsIDAuMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGaWx0ZXJzIFNlY3Rpb24gU3R5bGluZ1xyXG4uZmlsdGVycy1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIFxyXG4gIC5maWx0ZXJzLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIFxyXG4gICAgLnNlYXJjaC1maWx0ZXIge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgICBcclxuICAgICAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMTRweDtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgY29sb3I6ICNhZGI1YmQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxNHB4IDEwcHggNDBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZiZmM7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnR5cGUtZmlsdGVyLFxyXG4gICAgLnN0YXR1cy1maWx0ZXIge1xyXG4gICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICBcclxuICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZiZmM7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTm90aWZpY2F0aW9ucyBMaXN0XHJcbi5ub3RpZmljYXRpb25zLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbn1cclxuXHJcbi8vIExpc3QgSGVhZGVyIFN0eWxpbmdcclxuLmxpc3QtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcclxuICBcclxuICAudG90YWwtY291bnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnVucmVhZC1jb3VudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZjMTA3LCAjZmQ3ZTE0KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbnMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gICYudW5yZWFkIHtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwNjk1YztcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgfVxyXG4gIFxyXG4gICYucmVhZCB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24tdHlwZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIFxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50eXBlLWJhZGdlIHtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAmLmluZm8ge1xyXG4gICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAudHlwZS1iYWRnZSB7IGJhY2tncm91bmQ6ICNkMWVjZjE7IGNvbG9yOiAjMGM1NDYwOyB9XHJcbiAgfVxyXG4gIFxyXG4gICYuc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogIzI4YTc0NTtcclxuICAgIC50eXBlLWJhZGdlIHsgYmFja2dyb3VuZDogI2Q0ZWRkYTsgY29sb3I6ICMxNTU3MjQ7IH1cclxuICB9XHJcbiAgXHJcbiAgJi53YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjZmZjMTA3O1xyXG4gICAgLnR5cGUtYmFkZ2UgeyBiYWNrZ3JvdW5kOiAjZmZmM2NkOyBjb2xvcjogIzg1NjQwNDsgfVxyXG4gIH1cclxuICBcclxuICAmLmVycm9yIHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgLnR5cGUtYmFkZ2UgeyBiYWNrZ3JvdW5kOiAjZjhkN2RhOyBjb2xvcjogIzcyMWMyNDsgfVxyXG4gIH1cclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1wcmlvcml0eSB7XHJcbiAgLnByaW9yaXR5LWJhZGdlIHtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAmLmxvdyAucHJpb3JpdHktYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gIH1cclxuICBcclxuICAmLm1lZGl1bSAucHJpb3JpdHktYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjNjZDtcclxuICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gIH1cclxuICBcclxuICAmLmhpZ2ggLnByaW9yaXR5LWJhZGdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24taW5mbyB7XHJcbiAgZmxleDogMTtcclxuICBcclxuICAubm90aWZpY2F0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gIH1cclxuICBcclxuICAubm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBtYXJnaW46IDAgMCAxNXB4IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1tZXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5tZXRhLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBcclxuICBpIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgfVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLXN0YXR1cyB7XHJcbiAgLnN0YXR1cy1pbmRpY2F0b3Ige1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC51bnJlYWQge1xyXG4gICAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gIH1cclxuICBcclxuICAucmVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1hY3Rpb25zIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIH1cclxuICBcclxuICAmLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDY5NWM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDA0ZDQwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1YTYyNjg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2M4MjMzMztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4tc20ge1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEVtcHR5IFN0YXRlIFN0eWxpbmdcclxuLmVtcHR5LXN0YXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcclxuICBcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5zZWFyY2gtaW5wdXQgaSB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3RpZmljYXRpb24tY2FyZC51bnJlYWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjMDA2OTVjO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5ub3RpZmljYXRpb25zLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAubm90aWZpY2F0aW9ucy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5oZWFkZXItY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0ZXJzLWNhcmQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWZpbHRlciB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC50eXBlLWZpbHRlcixcclxuICAuc3RhdHVzLWZpbHRlcixcclxuICAucHJpb3JpdHktZmlsdGVyIHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm5vdGlmaWNhdGlvbnMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBcclxuICAgIC5idG4ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2FyZC1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuICAgIFxyXG4gICAgLmJ0biB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0LWhlYWRlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubm90aWZpY2F0aW9ucy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY2FyZCxcclxuICAuZmlsdGVycy1jYXJkLFxyXG4gIC5ub3RpZmljYXRpb25zLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyLFxyXG4gIC5jYXJkLWJvZHksXHJcbiAgLmNhcmQtYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWFjdGlvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAgLmJ0biB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gU2VsZWN0aW9uIENhcmRzIFN0eWxpbmdcclxuLnNlbGVjdGlvbi1jYXJkcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE4MHB4LCAxZnIpKTtcclxuICBnYXA6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBcclxuICAuc2VsZWN0aW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2Y4ZjlmYSAxMDAlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDEwNSwgOTIsIDAuMTUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkLWxhYmVsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgXHJcbiAgICAgIGkge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5yb3RhdGVkIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2OTVjO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiBjYWxjKDEwMCUgKyA4cHgpO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuMnMgZWFzZTtcclxuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAgIEBrZXlmcmFtZXMgc2xpZGVEb3duIHtcclxuICAgICAgICBmcm9tIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmM2Y0O1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSaWNoIFRleHQgRWRpdG9yIFN0eWxpbmdcclxuLnJpY2gtdGV4dC1lZGl0b3Itc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBcclxuICAuZm9ybS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzM0NDk1ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gIH1cclxuICBcclxuICAucmljaC10ZXh0LWVkaXRvciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIFxyXG4gICAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAxMDUsIDkyLCAwLjE1KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmVkaXRvci10b29sYmFyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBnYXA6IDRweDtcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2U5ZWNlZiAxMDAlKTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICAgIFxyXG4gICAgICAudG9vbGJhci1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBtaW4td2lkdGg6IDMycHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwNjk1YztcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzdHJvbmcsIGVtLCB1IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnRvb2xiYXItc2VsZWN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZWRpdG9yLWNvbnRlbnQge1xyXG4gICAgICBtaW4taGVpZ2h0OiAxNjBweDtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgXHJcbiAgICAgICY6ZW1wdHk6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xyXG4gICAgICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZiZmM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENoZWNrYm94IEdyb3VwIFN0eWxpbmdcclxuLmNoZWNrYm94LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBcclxuICAuY2hlY2tib3gtbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvcm0tY2hlY2staW5wdXQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIFxyXG4gICAgICAmOmNoZWNrZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGVja2JveC10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRhYmxlIFN0eWxpbmdcclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgXHJcbiAgLm5vdGlmaWNhdGlvbnMtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIFxyXG4gICAgdGhlYWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xyXG4gICAgICBcclxuICAgICAgdGgge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmRyYWZ0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLnNjaGVkdWxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMywgMjU1LCAwLjA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5zZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksIDAuMDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDEycHg7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudHlwZS1jZWxsIHtcclxuICAgIC5ub3RpZmljYXRpb24tdHlwZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgICBcclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAmLmZhLWluZm8tY2lyY2xlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMTdhMmI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZjMTA3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmZhLXN0YXIge1xyXG4gICAgICAgICAgY29sb3I6ICNmZDdlMTQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudHlwZS1iYWRnZSB7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICYubm9ybWFsIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjMsIDE2MiwgMTg0LCAwLjEpO1xyXG4gICAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYudXJnZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMSk7XHJcbiAgICAgICAgICBjb2xvcjogIzg1NjQwNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5pbXBvcnRhbnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTMsIDEyNiwgMjAsIDAuMSk7XHJcbiAgICAgICAgICBjb2xvcjogI2ZkN2UxNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5pbmZvIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjMsIDE2MiwgMTg0LCAwLjEpO1xyXG4gICAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1jZWxsIHtcclxuICAgIC5ub3RpZmljYXRpb24tdGl0bGUge1xyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmxvY2F0aW9uLWNlbGwge1xyXG4gICAgLmxvY2F0aW9uLWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDRweDtcclxuICAgICAgXHJcbiAgICAgIC5sb2NhdGlvbi1wYXRoIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGdhcDogNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubG9jYXRpb24taXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmFsbC1sb2NhdGlvbnMge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0dXMtY2VsbCB7XHJcbiAgICAuc3RhdHVzLWJhZGdlIHtcclxuICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIFxyXG4gICAgICAmLmRyYWZ0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLnNjaGVkdWxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzAwNDA4NTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5zZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmlvcml0eS1jZWxsIHtcclxuICAgIC5wcmlvcml0eS1iYWRnZSB7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBcclxuICAgICAgJi5sb3cge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksIDAuMSk7XHJcbiAgICAgICAgY29sb3I6ICMxNTU3MjQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYubWVkaXVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLmhpZ2gge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksIDAuMSk7XHJcbiAgICAgICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmRhdGUtY2VsbCB7XHJcbiAgICAuZGF0ZS1pbmZvIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZ2FwOiA0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBcclxuICAgICAgLmNyZWF0ZWQtZGF0ZSxcclxuICAgICAgLnNjaGVkdWxlZC1kYXRlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNjaGVkdWxlZC1kYXRlIHtcclxuICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3Rpb25zLWNlbGwge1xyXG4gICAgLmFjdGlvbi1idXR0b25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgXHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBtaW4td2lkdGg6IDMycHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmJ0bi1vdXRsaW5lLWRhbmdlciB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbiAgICAgICAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNjk1YztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgICAgICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYuYnRuLW91dGxpbmUtaW5mbyB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxN2EyYjg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFBhZ2luYXRpb24gU3R5bGluZ1xyXG4ucGFnaW5hdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBcclxuICAucGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAuYnRuIHtcclxuICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgICAgXHJcbiAgICAgICYuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwNjk1YztcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICBcclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIFRhYmxlXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIFxyXG4gICAgLm5vdGlmaWNhdGlvbnMtdGFibGUge1xyXG4gICAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgICBcclxuICAgICAgdGhlYWQgdGgsXHJcbiAgICAgIHRib2R5IHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAucGFnaW5hdGlvbiB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgIFxyXG4gICAgICAuYnRuIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgbWluLXdpZHRoOiAzNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1201:
/*!****************************************************************!*\
  !*** ./src/app/features/notifications/notifications.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsModule: () => (/* binding */ NotificationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/notifications/notifications.component */ 2682);
/* harmony import */ var _components_notification_settings_notification_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/notification-settings/notification-settings.component */ 6334);
/* harmony import */ var _components_notification_dashboard_notification_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/notification-dashboard/notification-dashboard.component */ 2988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);









const routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: _components_notification_dashboard_notification_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.NotificationDashboardComponent
}, {
  path: 'notifications',
  component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_1__.NotificationsComponent
}, {
  path: 'notification-settings',
  component: _components_notification_settings_notification_settings_component__WEBPACK_IMPORTED_MODULE_2__.NotificationSettingsComponent
}];
class NotificationsModule {
  static {
    this.ɵfac = function NotificationsModule_Factory(t) {
      return new (t || NotificationsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: NotificationsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NotificationsModule, {
    declarations: [_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_1__.NotificationsComponent, _components_notification_settings_notification_settings_component__WEBPACK_IMPORTED_MODULE_2__.NotificationSettingsComponent, _components_notification_dashboard_notification_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.NotificationDashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_notifications_notifications_module_ts.js.map