"use strict";
(self["webpackChunkscreening_frontend"] = self["webpackChunkscreening_frontend"] || []).push([["src_app_features_users_users_module_ts"],{

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

/***/ 3443:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);





class UserService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getUsers() {
    return this.http.get(`${this.apiUrl}/users`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(users => users.map(u => ({
      ...u,
      createdAt: new Date(u.createdAt),
      updatedAt: new Date(u.updatedAt),
      permissions: u.permissions ? {
        ...u.permissions,
        createdAt: u.permissions.createdAt ? new Date(u.permissions.createdAt) : undefined,
        updatedAt: u.permissions.updatedAt ? new Date(u.permissions.updatedAt) : undefined
      } : undefined
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching users:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  getUserById(id) {
    return this.http.get(`${this.apiUrl}/users/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(u => ({
      ...u,
      createdAt: new Date(u.createdAt),
      updatedAt: new Date(u.updatedAt),
      permissions: u.permissions ? {
        ...u.permissions,
        createdAt: u.permissions.createdAt ? new Date(u.permissions.createdAt) : undefined,
        updatedAt: u.permissions.updatedAt ? new Date(u.permissions.updatedAt) : undefined
      } : undefined
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching user:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  createUser(user) {
    return this.http.post(`${this.apiUrl}/users`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(u => ({
      ...u,
      createdAt: new Date(u.createdAt),
      updatedAt: new Date(u.updatedAt),
      permissions: u.permissions ? {
        ...u.permissions,
        createdAt: u.permissions.createdAt ? new Date(u.permissions.createdAt) : undefined,
        updatedAt: u.permissions.updatedAt ? new Date(u.permissions.updatedAt) : undefined
      } : undefined
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error creating user:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  updateUser(id, user) {
    return this.http.put(`${this.apiUrl}/users/${id}`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(u => ({
      ...u,
      createdAt: new Date(u.createdAt),
      updatedAt: new Date(u.updatedAt),
      permissions: u.permissions ? {
        ...u.permissions,
        createdAt: u.permissions.createdAt ? new Date(u.permissions.createdAt) : undefined,
        updatedAt: u.permissions.updatedAt ? new Date(u.permissions.updatedAt) : undefined
      } : undefined
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error updating user:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  deleteUser(id) {
    return this.http.delete(`${this.apiUrl}/users/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error deleting user:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4814:
/*!********************************************************************************************!*\
  !*** ./src/app/features/users/components/users-permissions/users-permissions.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersPermissionsComponent: () => (/* binding */ UsersPermissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/user.service */ 3443);
/* harmony import */ var _core_services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/location.service */ 3415);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 8709);










const _c0 = () => ({
  standalone: true
});
function UsersPermissionsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r0.twoFactorMessageType === "success" ? "alert-success" : "alert-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.twoFactorMessage, " ");
  }
}
function UsersPermissionsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_div_15_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.start2FASetup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Generate QR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
  }
}
function UsersPermissionsComponent_div_17_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function UsersPermissionsComponent_div_17_input_5_Template_input_ngModelChange_0_listener($event) {
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.twoFactorSetupDigits[i_r5], $event) || (ctx_r0.twoFactorSetupDigits[i_r5] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UsersPermissionsComponent_div_17_input_5_Template_input_ngModelChange_0_listener($event) {
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.onOtpChange("setup", i_r5, $event));
    })("keydown", function UsersPermissionsComponent_div_17_input_5_Template_input_keydown_0_listener($event) {
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.onOtpKeyDown("setup", i_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", "setup-otp-" + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.twoFactorSetupDigits[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("autocomplete", i_r5 === 0 ? "one-time-code" : "off");
  }
}
function UsersPermissionsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "div", 7)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "6-digit code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, UsersPermissionsComponent_div_17_input_5_Template, 1, 5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 27)(7, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_div_17_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.confirm2FASetup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Enable 2FA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 36)(13, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Scan with Google Authenticator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.twoFactorSetupDigits);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.twoFactorQrDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function UsersPermissionsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "QR will appear here");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Generate QR");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " on the left, then enter the 6\u2011digit code to enable 2FA. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function UsersPermissionsComponent_div_19_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function UsersPermissionsComponent_div_19_input_5_Template_input_ngModelChange_0_listener($event) {
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.twoFactorDisableDigits[i_r8], $event) || (ctx_r0.twoFactorDisableDigits[i_r8] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UsersPermissionsComponent_div_19_input_5_Template_input_ngModelChange_0_listener($event) {
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.onOtpChange("disable", i_r8, $event));
    })("keydown", function UsersPermissionsComponent_div_19_input_5_Template_input_keydown_0_listener($event) {
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.onOtpKeyDown("disable", i_r8, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", "disable-otp-" + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.twoFactorDisableDigits[i_r8]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("autocomplete", i_r8 === 0 ? "one-time-code" : "off");
  }
}
function UsersPermissionsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "div", 7)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "6-digit code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, UsersPermissionsComponent_div_19_input_5_Template, 1, 5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 27)(7, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_div_19_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.disable2FAForCurrentUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Disable 2FA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.twoFactorDisableDigits);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
  }
}
function UsersPermissionsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_div_21_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.showSuccessBanner = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("modifiedSuccessfully"));
  }
}
function UsersPermissionsComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r0.showUserList = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.errorMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("addNewUser"), " ");
  }
}
function UsersPermissionsComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r0.showUserList = true;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.loadUsers());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("showUserList"), " ");
  }
}
function UsersPermissionsComponent_div_31_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function UsersPermissionsComponent_div_31_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 124)(1, "div", 125)(2, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function UsersPermissionsComponent_div_31_div_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("passwordRequired"));
  }
}
function UsersPermissionsComponent_div_31_div_21_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("passwordMinLength"));
  }
}
function UsersPermissionsComponent_div_31_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UsersPermissionsComponent_div_31_div_21_span_1_Template, 2, 1, "span", 128)(2, UsersPermissionsComponent_div_31_div_21_span_2_Template, 2, 1, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.userForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.userForm.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
  }
}
function UsersPermissionsComponent_div_31_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("leavePasswordEmptyToKeepCurrent"), " ");
  }
}
function UsersPermissionsComponent_div_31_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subsite_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", subsite_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](subsite_r13.name);
  }
}
function UsersPermissionsComponent_div_31_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", section_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](section_r14.name);
  }
}
function UsersPermissionsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function UsersPermissionsComponent_div_31_Template_form_ngSubmit_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.saveUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, UsersPermissionsComponent_div_31_div_6_Template, 3, 1, "div", 60)(7, UsersPermissionsComponent_div_31_div_7_Template, 4, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 62)(9, "div", 63)(10, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 63)(14, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 63)(18, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, UsersPermissionsComponent_div_31_div_21_Template, 3, 2, "div", 70)(22, UsersPermissionsComponent_div_31_small_22_Template, 2, 1, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 63)(24, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 63)(28, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 63)(32, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "select", 77)(35, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, UsersPermissionsComponent_div_31_option_37_Template, 2, 2, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 63)(39, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "select", 81)(42, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, UsersPermissionsComponent_div_31_option_44_Template, 2, 2, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 63)(46, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "select", 83)(49, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 63)(56, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "select", 88)(59, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 92)(66, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "textarea", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 95)(70, "h4", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 98)(74, "div", 99)(75, "h5", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 101)(78, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](79, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 101)(83, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 101)(88, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](89, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 99)(93, "h5", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 101)(96, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](97, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 101)(101, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](102, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "div", 101)(106, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](107, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div", 99)(111, "h5", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "div", 101)(114, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](115, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "div", 101)(119, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](120, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 101)(124, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "div", 113)(129, "h5", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "div", 115)(132, "div", 101)(133, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](134, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "div", 101)(138, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](139, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "div", 101)(143, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](144, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "div", 101)(148, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](149, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "div", 120)(153, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_div_31_Template_button_click_153_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.editingUser ? ctx_r0.cancelEdit() : ctx_r0.showUserList = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_12_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.editingUser ? ctx_r0.getTranslation("editUser") : ctx_r0.getTranslation("addNewUser"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage && !ctx_r0.showUserList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("username"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r0.getTranslation("enterUsername"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("email"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r0.getTranslation("enterEmail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r0.getTranslation("password"), " ", ctx_r0.editingUser ? "" : "*", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ((tmp_10_0 = ctx_r0.userForm.get("password")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r0.userForm.get("password")) == null ? null : tmp_10_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r0.editingUser ? ctx_r0.getTranslation("enterPasswordToChange") : ctx_r0.getTranslation("enterPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx_r0.userForm.get("password")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r0.userForm.get("password")) == null ? null : tmp_12_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.editingUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("phone1"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r0.getTranslation("enterPhone1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("phone2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r0.getTranslation("enterSubMobileNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("subsites"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("selectSubsite"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.subsites);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("section"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("selectSection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("type"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("regularUser"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("adminUser"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("superUser"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("validity"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("manager"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("supervisor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("coordinator"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("notes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r0.getTranslation("enterNotes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("permissions"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("accountsAndAuthorizations"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("authorityToAddModifyAccounts"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("authorityToViewAccounts"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("authorityToDeleteAccounts"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("ads"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("authorityToAddModifyAds"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("authorityToDisplayAds"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("authorityToDeleteAds"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("subsites"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("permissionToAddModifySites"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("permissionToViewSites"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("permissionToDeleteSites"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("otherPowers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("notificationSendingPermission"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("notificationViewingPermission"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("notificationDeletionPermission"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("active"), "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.editingUser ? ctx_r0.getTranslation("cancel") : ctx_r0.getTranslation("cancelAndShowList"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.userForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.editingUser ? ctx_r0.getTranslation("saveChanges") : ctx_r0.getTranslation("save"), " ");
  }
}
function UsersPermissionsComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function UsersPermissionsComponent_div_32_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 138)(2, "div", 139)(3, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 143)(8, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 145)(11, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 147)(14, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td", 149)(17, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td", 151)(20, "span", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td", 153)(23, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td", 155)(26, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "td", 157)(29, "div", 158)(30, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_div_32_tr_28_Template_button_click_30_listener() {
      const user_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.editUser(user_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_div_32_tr_28_Template_button_click_32_listener() {
      const user_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.deleteUser(user_r16.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "i", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r16 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](user_r16.isActive ? "active" : "inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r16.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r16.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r16.phone1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r16.subsiteName || ctx_r0.getSubsiteName(user_r16.subsiteId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r16.sectionName || ctx_r0.getSectionName(user_r16.sectionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](user_r16.userType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getTypeDisplayName(user_r16.userType), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getValidityDisplayName(user_r16.validity));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](user_r16.isActive ? "active" : "inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r16.isActive ? ctx_r0.getTranslation("active") : ctx_r0.getTranslation("inactive"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx_r0.getTranslation("edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx_r0.getTranslation("delete"));
  }
}
function UsersPermissionsComponent_div_32_div_29_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_div_32_div_29_ng_container_6_Template_button_click_1_listener() {
      const page_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.goToPage(page_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const page_r19 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](page_r19 === ctx_r0.currentPage ? "btn-primary" : "btn-outline-secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", page_r19, " ");
  }
}
function UsersPermissionsComponent_div_32_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 163)(1, "div", 164)(2, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_div_32_div_29_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.goToPage(ctx_r0.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_div_32_div_29_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.goToPage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, UsersPermissionsComponent_div_32_div_29_ng_container_6_Template, 3, 3, "ng-container", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_div_32_div_29_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.goToPage(ctx_r0.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersPermissionsComponent_div_32_div_29_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.goToPage(ctx_r0.totalPages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 167)(12, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 169)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "select", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function UsersPermissionsComponent_div_32_div_29_Template_select_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.itemsPerPage, $event) || (ctx_r0.itemsPerPage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UsersPermissionsComponent_div_32_div_29_Template_select_change_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.onItemsPerPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "option", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "option", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "option", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "option", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("previous"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("first"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.getVisiblePages());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.currentPage >= ctx_r0.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("next"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.currentPage >= ctx_r0.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("last"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate5"](" ", ctx_r0.getTranslation("showing"), " ", (ctx_r0.currentPage - 1) * ctx_r0.itemsPerPage + 1, " - ", ctx_r0.Math.min(ctx_r0.currentPage * ctx_r0.itemsPerPage, ctx_r0.filteredUsers.length), " ", ctx_r0.getTranslation("of"), " ", ctx_r0.filteredUsers.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("itemsPerPage"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.itemsPerPage);
  }
}
function UsersPermissionsComponent_div_32_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("noUsersFound"));
  }
}
function UsersPermissionsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UsersPermissionsComponent_div_32_div_1_Template, 3, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 131)(3, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 133)(6, "table", 134)(7, "thead")(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, UsersPermissionsComponent_div_32_tr_28_Template, 34, 16, "tr", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, UsersPermissionsComponent_div_32_div_29_Template, 26, 16, "div", 136)(30, UsersPermissionsComponent_div_32_div_30_Template, 4, 1, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r0.getTranslation("totalUsers"), ": ", ctx_r0.filteredUsers.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("username"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("phone1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("subsites"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("section"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("validity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getTranslation("actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.paginatedUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.filteredUsers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.filteredUsers.length === 0);
  }
}
class UsersPermissionsComponent {
  constructor(languageService, translationService, userService, locationService, authService, fb) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.userService = userService;
    this.locationService = locationService;
    this.authService = authService;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.users = [];
    this.filteredUsers = [];
    this.showUserList = true; // Show user list by default
    this.showSuccessBanner = false;
    this.editingUser = null;
    this.isLoading = false;
    this.errorMessage = '';
    // 2FA UI state (for current logged-in user)
    this.currentUsernameFor2FA = '';
    this.twoFactorEnabled = null;
    this.twoFactorPassword = '';
    this.twoFactorQrDataUrl = '';
    this.twoFactorSetupCode = '';
    this.twoFactorDisableCode = '';
    this.twoFactorSetupDigits = Array(6).fill('');
    this.twoFactorDisableDigits = Array(6).fill('');
    this.twoFactorMessage = '';
    this.twoFactorMessageType = 'success';
    // Confirm dialog
    this.showConfirmDialog = false;
    this.confirmDialogData = {
      title: '',
      message: '',
      confirmText: 'OK',
      cancelText: 'Cancel',
      type: 'danger'
    };
    this.itemToDelete = null;
    // Location dropdowns
    this.subsites = [];
    this.sections = [];
    this.specialDivisions = [];
    // Pagination properties
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalPages = 1;
    this.paginatedUsers = [];
    // Search and filter
    this.searchTerm = '';
    this.selectedType = 'all';
    this.selectedValidity = 'all';
    this.selectedStatus = 'all';
    // Math property for template use
    this.Math = Math;
    this.userForm = this.fb.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6)]],
      phone1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      phone2: [''],
      subsiteId: [null],
      sectionId: [null],
      specialDivisionId: [null],
      userType: ['regular-user', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      validity: ['coordinator', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      notes: [''],
      isActive: [true],
      // Permissions
      addModifyAccounts: [false],
      viewAccounts: [false],
      deleteAccounts: [false],
      addModifyAds: [false],
      displayAds: [false],
      deleteAds: [false],
      addModifySites: [false],
      viewSites: [false],
      deleteSites: [false],
      notificationSending: [false],
      notificationViewing: [false],
      notificationDeletion: [false]
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadLocationData();
    const currentUser = this.authService.getCurrentUser();
    this.currentUsernameFor2FA = currentUser?.email || currentUser?.username || '';
    this.twoFactorEnabled = typeof currentUser?.twoFactorEnabled === 'boolean' ? currentUser.twoFactorEnabled : null;
    // Only load users if showing the list initially
    if (this.showUserList) {
      this.loadUsers();
    }
  }
  start2FASetup() {
    if (!this.currentUsernameFor2FA || !this.twoFactorPassword) {
      this.twoFactorMessageType = 'error';
      this.twoFactorMessage = this.getTranslation('fieldRequired') || 'Required fields missing';
      return;
    }
    this.isLoading = true;
    this.twoFactorMessage = '';
    this.authService.setup2FA(this.currentUsernameFor2FA, this.twoFactorPassword).subscribe({
      next: resp => {
        this.isLoading = false;
        this.twoFactorQrDataUrl = resp.qrDataUrl;
        this.twoFactorSetupCode = '';
        this.twoFactorSetupDigits = Array(6).fill('');
        this.twoFactorMessageType = 'success';
        this.twoFactorMessage = 'Scan the QR code, then enter the 6-digit code to enable 2FA.';
      },
      error: error => {
        console.error('2FA setup error:', error);
        this.isLoading = false;
        this.twoFactorMessageType = 'error';
        this.twoFactorMessage = error?.error?.error || 'Failed to start 2FA setup';
      }
    });
  }
  confirm2FASetup() {
    const code = this.getOtpCode(this.twoFactorSetupDigits);
    this.twoFactorSetupCode = code;
    if (!this.currentUsernameFor2FA || !this.twoFactorPassword || code.length !== 6) {
      this.twoFactorMessageType = 'error';
      this.twoFactorMessage = this.getTranslation('fieldRequired') || 'Required fields missing';
      return;
    }
    this.isLoading = true;
    this.twoFactorMessage = '';
    this.authService.verifySetup2FA(this.currentUsernameFor2FA, this.twoFactorPassword, this.twoFactorSetupCode).subscribe({
      next: () => {
        this.isLoading = false;
        this.twoFactorEnabled = true;
        this.twoFactorQrDataUrl = '';
        this.twoFactorSetupCode = '';
        this.twoFactorSetupDigits = Array(6).fill('');
        this.twoFactorMessageType = 'success';
        this.twoFactorMessage = '2FA enabled successfully.';
        // Update cached user so UI stays consistent
        const cu = this.authService.getCurrentUser();
        if (cu) {
          cu.twoFactorEnabled = true;
          localStorage.setItem('currentUser', JSON.stringify(cu));
        }
      },
      error: error => {
        console.error('2FA verify-setup error:', error);
        this.isLoading = false;
        this.twoFactorMessageType = 'error';
        this.twoFactorMessage = error?.error?.error || 'Invalid code. Please try again.';
      }
    });
  }
  disable2FAForCurrentUser() {
    const code = this.getOtpCode(this.twoFactorDisableDigits);
    this.twoFactorDisableCode = code;
    if (!this.currentUsernameFor2FA || !this.twoFactorPassword || code.length !== 6) {
      this.twoFactorMessageType = 'error';
      this.twoFactorMessage = this.getTranslation('fieldRequired') || 'Required fields missing';
      return;
    }
    this.isLoading = true;
    this.twoFactorMessage = '';
    this.authService.disable2FA(this.currentUsernameFor2FA, this.twoFactorPassword, this.twoFactorDisableCode).subscribe({
      next: () => {
        this.isLoading = false;
        this.twoFactorEnabled = false;
        this.twoFactorDisableCode = '';
        this.twoFactorDisableDigits = Array(6).fill('');
        this.twoFactorQrDataUrl = '';
        this.twoFactorSetupCode = '';
        this.twoFactorSetupDigits = Array(6).fill('');
        this.twoFactorMessageType = 'success';
        this.twoFactorMessage = '2FA disabled successfully.';
        const cu = this.authService.getCurrentUser();
        if (cu) {
          cu.twoFactorEnabled = false;
          localStorage.setItem('currentUser', JSON.stringify(cu));
        }
      },
      error: error => {
        console.error('2FA disable error:', error);
        this.isLoading = false;
        this.twoFactorMessageType = 'error';
        this.twoFactorMessage = error?.error?.error || 'Failed to disable 2FA';
      }
    });
  }
  getOtpCode(digits) {
    return (digits || []).join('').replace(/\D/g, '').slice(0, 6);
  }
  onOtpChange(kind, index, value) {
    const arr = kind === 'setup' ? this.twoFactorSetupDigits : this.twoFactorDisableDigits;
    const digits = (value ?? '').toString().replace(/\D/g, '');
    if (!digits) {
      arr[index] = '';
      return;
    }
    // Normalize current box (single digit) OR distribute pasted/autofilled digits
    const toApply = digits.slice(0, 6 - index).split('');
    toApply.forEach((d, offset) => {
      arr[index + offset] = d;
    });
    // If more than one digit came in (paste/autofill), move focus to the last filled box
    if (toApply.length > 1) {
      const focusIndex = Math.min(index + toApply.length - 1, 5);
      setTimeout(() => {
        const el = document.getElementById(`${kind}-otp-${focusIndex}`);
        el?.focus();
      });
      return;
    }
    // Single digit typed: advance focus
    if (index < 5) {
      setTimeout(() => {
        const next = document.getElementById(`${kind}-otp-${index + 1}`);
        next?.focus();
        next?.select?.();
      });
    }
  }
  onOtpKeyDown(kind, index, event) {
    if (event.key !== 'Backspace') return;
    const arr = kind === 'setup' ? this.twoFactorSetupDigits : this.twoFactorDisableDigits;
    const current = arr[index] || '';
    // If current box is empty, go back
    if (!current && index > 0) {
      const prev = document.getElementById(`${kind}-otp-${index - 1}`);
      prev?.focus();
      prev?.select?.();
      event.preventDefault();
    }
  }
  loadLocationData() {
    // Load subsites
    this.locationService.getSubsites().subscribe({
      next: subsites => {
        this.subsites = subsites;
      },
      error: error => {
        console.error('Error loading subsites:', error);
      }
    });
    // Load sections
    this.locationService.getSections().subscribe({
      next: sections => {
        this.sections = sections;
      },
      error: error => {
        console.error('Error loading sections:', error);
      }
    });
    // Load special divisions
    this.locationService.getSpecialDivisions().subscribe({
      next: divisions => {
        this.specialDivisions = divisions;
      },
      error: error => {
        console.error('Error loading special divisions:', error);
      }
    });
  }
  loadUsers() {
    this.isLoading = true;
    this.errorMessage = '';
    this.userService.getUsers().subscribe({
      next: users => {
        this.users = users;
        this.filteredUsers = [...this.users];
        this.calculatePagination();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading users:', error);
        this.errorMessage = error.error?.error || 'Failed to load users';
        this.isLoading = false;
        // Keep empty array on error
        this.users = [];
        this.filteredUsers = [];
        this.calculatePagination();
      }
    });
  }
  filterUsers() {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) || user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) || user.phone1.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.selectedType === 'all' || user.userType === this.selectedType;
      const matchesValidity = this.selectedValidity === 'all' || user.validity === this.selectedValidity;
      const matchesStatus = this.selectedStatus === 'all' || this.selectedStatus === 'active' && user.isActive || this.selectedStatus === 'inactive' && !user.isActive;
      return matchesSearch && matchesType && matchesValidity && matchesStatus;
    });
    this.calculatePagination();
  }
  calculatePagination() {
    this.totalPages = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
    this.updatePaginatedUsers();
  }
  updatePaginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedUsers = this.filteredUsers.slice(startIndex, endIndex);
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedUsers();
    }
  }
  getVisiblePages() {
    const pages = [];
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(totalPages);
      }
    }
    return pages;
  }
  onItemsPerPageChange() {
    this.currentPage = 1;
    this.calculatePagination();
  }
  saveUser() {
    if (this.userForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      const formValue = this.userForm.value;
      const permissions = {
        addModifyAccounts: formValue.addModifyAccounts || false,
        viewAccounts: formValue.viewAccounts || false,
        deleteAccounts: formValue.deleteAccounts || false,
        addModifyAds: formValue.addModifyAds || false,
        displayAds: formValue.displayAds || false,
        deleteAds: formValue.deleteAds || false,
        addModifySites: formValue.addModifySites || false,
        viewSites: formValue.viewSites || false,
        deleteSites: formValue.deleteSites || false,
        notificationSending: formValue.notificationSending || false,
        notificationViewing: formValue.notificationViewing || false,
        notificationDeletion: formValue.notificationDeletion || false
      };
      const userData = {
        username: formValue.username,
        email: formValue.email,
        phone1: formValue.phone1,
        phone2: formValue.phone2 || undefined,
        subsiteId: formValue.subsiteId || undefined,
        sectionId: formValue.sectionId || undefined,
        specialDivisionId: formValue.specialDivisionId || undefined,
        userType: formValue.userType,
        validity: formValue.validity,
        notes: formValue.notes || undefined,
        isActive: formValue.isActive !== undefined ? formValue.isActive : true,
        permissions
      };
      // Only include password if provided (required for create, optional for update)
      if (formValue.password && formValue.password.trim() !== '') {
        userData.password = formValue.password;
      }
      if (this.editingUser) {
        // Update existing user
        this.userService.updateUser(this.editingUser.id, userData).subscribe({
          next: updatedUser => {
            const index = this.users.findIndex(u => u.id === this.editingUser.id);
            if (index !== -1) {
              this.users[index] = updatedUser;
            }
            this.showSuccessMessage();
            this.errorMessage = ''; // Clear any previous errors
            this.loadUsers(); // Reload to get fresh data
            this.editingUser = null;
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: error => {
            console.error('Error updating user:', error);
            this.errorMessage = error.error?.error || 'Failed to update user';
            this.isLoading = false;
          }
        });
      } else {
        // Create new user
        this.userService.createUser(userData).subscribe({
          next: newUser => {
            this.showSuccessMessage();
            this.errorMessage = ''; // Clear any previous errors
            this.loadUsers(); // Reload to get fresh data
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: error => {
            console.error('Error creating user:', error);
            this.errorMessage = error.error?.error || 'Failed to create user';
            this.isLoading = false;
          }
        });
      }
    }
  }
  editUser(user) {
    this.editingUser = user;
    // For editing, password is optional (only update if provided)
    // Remove password required validator when editing, keep minLength
    this.userForm.get('password')?.clearValidators();
    this.userForm.get('password')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6)]);
    this.userForm.get('password')?.updateValueAndValidity();
    this.userForm.patchValue({
      username: user.username,
      email: user.email,
      password: '',
      // Clear password field when editing
      phone1: user.phone1,
      phone2: user.phone2 || '',
      subsiteId: user.subsiteId || null,
      sectionId: user.sectionId || null,
      specialDivisionId: user.specialDivisionId || null,
      userType: user.userType,
      validity: user.validity,
      notes: user.notes || '',
      isActive: user.isActive,
      // Permissions
      addModifyAccounts: user.permissions?.addModifyAccounts || false,
      viewAccounts: user.permissions?.viewAccounts || false,
      deleteAccounts: user.permissions?.deleteAccounts || false,
      addModifyAds: user.permissions?.addModifyAds || false,
      displayAds: user.permissions?.displayAds || false,
      deleteAds: user.permissions?.deleteAds || false,
      addModifySites: user.permissions?.addModifySites || false,
      viewSites: user.permissions?.viewSites || false,
      deleteSites: user.permissions?.deleteSites || false,
      notificationSending: user.permissions?.notificationSending || false,
      notificationViewing: user.permissions?.notificationViewing || false,
      notificationDeletion: user.permissions?.notificationDeletion || false
    });
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Hide the user list to show the form
    this.showUserList = false;
  }
  cancelEdit() {
    this.editingUser = null;
    // Restore password required validator
    this.userForm.get('password')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6)]);
    this.userForm.get('password')?.updateValueAndValidity();
    this.resetForm();
    this.showUserList = true;
  }
  deleteUser(id) {
    this.itemToDelete = id;
    const userName = this.users.find(u => u.id === id)?.username || 'this user';
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: `${this.getTranslation('confirmDeleteMessage') || 'Are you sure you want to delete? This action cannot be undone.'} (${userName})`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel',
      type: 'danger'
    };
    this.showConfirmDialog = true;
  }
  onConfirmDelete() {
    if (this.itemToDelete !== null) {
      this.isLoading = true;
      this.userService.deleteUser(this.itemToDelete).subscribe({
        next: () => {
          this.loadUsers(); // Reload to get fresh data
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
        },
        error: error => {
          console.error('Error deleting user:', error);
          this.errorMessage = error.error?.error || 'Failed to delete user';
          this.isLoading = false;
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
  resetForm() {
    this.userForm.reset({
      username: '',
      email: '',
      password: '',
      phone1: '',
      phone2: '',
      subsiteId: null,
      sectionId: null,
      specialDivisionId: null,
      userType: 'regular-user',
      validity: 'coordinator',
      notes: '',
      isActive: true,
      addModifyAccounts: false,
      viewAccounts: false,
      deleteAccounts: false,
      addModifyAds: false,
      displayAds: false,
      deleteAds: false,
      addModifySites: false,
      viewSites: false,
      deleteSites: false,
      notificationSending: false,
      notificationViewing: false,
      notificationDeletion: false
    });
    this.errorMessage = '';
  }
  showSuccessMessage() {
    this.showSuccessBanner = true;
    setTimeout(() => {
      this.showSuccessBanner = false;
    }, 3000);
  }
  getTypeDisplayName(type) {
    const types = {
      'regular-user': this.getTranslation('regularUser'),
      'admin-user': this.getTranslation('adminUser'),
      'super-user': this.getTranslation('superUser')
    };
    return types[type] || type;
  }
  getValidityDisplayName(validity) {
    const validities = {
      'manager': this.getTranslation('manager'),
      'supervisor': this.getTranslation('supervisor'),
      'coordinator': this.getTranslation('coordinator')
    };
    return validities[validity] || validity;
  }
  getSubsiteName(id) {
    if (!id) return '-';
    const subsite = this.subsites.find(s => s.id === id);
    return subsite ? subsite.name : '-';
  }
  getSectionName(id) {
    if (!id) return '-';
    const section = this.sections.find(s => s.id === id);
    return section ? section.name : '-';
  }
  getSpecialDivisionName(id) {
    if (!id) return '-';
    const division = this.specialDivisions.find(d => d.id === id);
    return division ? division.name : '-';
  }
  // Use centralized translation service
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function UsersPermissionsComponent_Factory(t) {
      return new (t || UsersPermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: UsersPermissionsComponent,
      selectors: [["app-users-permissions"]],
      decls: 33,
      vars: 17,
      consts: [[1, "users-permissions-container", 3, "dir"], [1, "twofa-panel"], [1, "twofa-body"], ["class", "alert", 3, "ngClass", 4, "ngIf"], [1, "twofa-grid"], [1, "twofa-left"], [1, "twofa-stack"], [1, "twofa-field"], ["type", "text", "name", "twofaUsername", "readonly", "", 1, "form-control", "compact-input", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "twofaPassword", "autocomplete", "current-password", 1, "form-control", "compact-input", 3, "ngModelChange", "ngModel"], ["class", "twofa-field twofa-field-actions", 4, "ngIf"], [1, "twofa-right"], ["class", "twofa-right-inner", 4, "ngIf"], ["class", "twofa-right-inner twofa-right-placeholder", 4, "ngIf"], [3, "confirmed", "cancelled", "visible", "data"], ["class", "success-banner", 4, "ngIf"], [1, "page-header"], [1, "header-content"], [1, "header-left"], [1, "page-title"], [1, "fas", "fa-users"], [1, "header-actions"], ["type", "button", "class", "btn btn-primary compact-btn", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary compact-btn", 3, "click", 4, "ngIf"], ["class", "user-form-section", 4, "ngIf"], ["class", "users-list", 4, "ngIf"], [1, "alert", 3, "ngClass"], [1, "twofa-field", "twofa-field-actions"], [1, "sr-only"], ["type", "button", 1, "btn", "btn-primary", "compact-btn", "w-100", 3, "click", "disabled"], [1, "fas", "fa-qrcode"], [1, "twofa-right-inner"], ["role", "group", "aria-label", "6-digit code", 1, "otp-inputs"], ["class", "otp-input", "type", "text", "inputmode", "numeric", "maxlength", "1", 3, "id", "ngModel", "ngModelOptions", "ngModelChange", "keydown", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", "compact-btn", "w-100", 3, "click", "disabled"], [1, "fas", "fa-check"], [1, "twofa-qr-card"], [1, "twofa-qr-title"], [1, "fas", "fa-mobile-alt"], [1, "twofa-qr"], ["alt", "2FA QR Code", 3, "src"], ["type", "text", "inputmode", "numeric", "maxlength", "1", 1, "otp-input", 3, "ngModelChange", "keydown", "id", "ngModel", "ngModelOptions"], [1, "twofa-right-inner", "twofa-right-placeholder"], [1, "placeholder-title"], [1, "placeholder-text"], ["type", "button", 1, "btn", "btn-danger", "compact-btn", "w-100", 3, "click", "disabled"], [1, "fas", "fa-ban"], [1, "success-banner"], [1, "fas", "fa-check-circle"], [1, "close-banner", 3, "click"], [1, "fas", "fa-times"], ["type", "button", 1, "btn", "btn-primary", "compact-btn", 3, "click"], [1, "fas", "fa-plus"], ["type", "button", 1, "btn", "btn-secondary", "compact-btn", 3, "click"], [1, "fas", "fa-list"], [1, "user-form-section"], [1, "form-card", "compact-form"], [1, "form-title"], [1, "fas", "fa-user-edit"], [3, "ngSubmit", "formGroup"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], [1, "user-info-grid", "compact-grid"], [1, "info-card"], ["for", "username"], ["type", "text", "id", "username", "formControlName", "username", 1, "form-control", "compact-input", 3, "placeholder"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", "compact-input", 3, "placeholder"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control", "compact-input", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-text text-muted", 4, "ngIf"], ["for", "phone1"], ["type", "tel", "id", "phone1", "formControlName", "phone1", 1, "form-control", "compact-input", 3, "placeholder"], ["for", "phone2"], ["type", "tel", "id", "phone2", "formControlName", "phone2", 1, "form-control", "compact-input", 3, "placeholder"], ["for", "subsiteId"], ["id", "subsiteId", "formControlName", "subsiteId", 1, "form-control", "compact-input"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "sectionId"], ["id", "sectionId", "formControlName", "sectionId", 1, "form-control", "compact-input"], ["for", "userType"], ["id", "userType", "formControlName", "userType", 1, "form-control", "compact-input"], ["value", "regular-user"], ["value", "admin-user"], ["value", "super-user"], ["for", "validity"], ["id", "validity", "formControlName", "validity", 1, "form-control", "compact-input"], ["value", "manager"], ["value", "supervisor"], ["value", "coordinator"], [1, "info-card", "notes-card"], ["for", "notes"], ["id", "notes", "formControlName", "notes", "rows", "2", 1, "form-control", "compact-input", 3, "placeholder"], [1, "permissions-section", "compact-permissions"], [1, "permissions-title"], [1, "fas", "fa-shield-alt"], [1, "permissions-grid", "compact-permissions-grid"], [1, "permission-column", "compact-column"], [1, "column-title"], [1, "permission-item", "compact-item"], [1, "checkbox-label", "compact-checkbox"], ["type", "checkbox", "formControlName", "addModifyAccounts", 1, "form-check-input"], [1, "checkbox-text"], ["type", "checkbox", "formControlName", "viewAccounts", 1, "form-check-input"], ["type", "checkbox", "formControlName", "deleteAccounts", 1, "form-check-input"], ["type", "checkbox", "formControlName", "addModifyAds", 1, "form-check-input"], ["type", "checkbox", "formControlName", "displayAds", 1, "form-check-input"], ["type", "checkbox", "formControlName", "deleteAds", 1, "form-check-input"], ["type", "checkbox", "formControlName", "addModifySites", 1, "form-check-input"], ["type", "checkbox", "formControlName", "viewSites", 1, "form-check-input"], ["type", "checkbox", "formControlName", "deleteSites", 1, "form-check-input"], [1, "other-powers-section", "compact-other-powers"], [1, "section-title"], [1, "other-powers-grid", "compact-other-grid"], ["type", "checkbox", "formControlName", "notificationSending", 1, "form-check-input"], ["type", "checkbox", "formControlName", "notificationViewing", 1, "form-check-input"], ["type", "checkbox", "formControlName", "notificationDeletion", 1, "form-check-input"], ["type", "checkbox", "formControlName", "isActive", 1, "form-check-input"], [1, "form-actions", "compact-actions"], ["type", "submit", 1, "btn", "btn-primary", "compact-btn", 3, "disabled"], [1, "alert", "alert-danger"], [1, "fas", "fa-exclamation-circle"], [1, "loading-overlay"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "invalid-feedback"], [4, "ngIf"], [1, "form-text", "text-muted"], [1, "users-list"], [1, "list-header", "compact-header"], [1, "total-count"], [1, "table-container", "compact-table"], [1, "users-table", "compact-users-table"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "pagination-container compact-pagination", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "username-cell"], [1, "user-info"], [1, "user-avatar"], [1, "fas", "fa-user"], [1, "user-name"], [1, "email-cell"], [1, "email-text"], [1, "phone-cell"], [1, "phone-text"], [1, "subsites-cell"], [1, "subsites-text"], [1, "section-cell"], [1, "section-text"], [1, "type-cell"], [1, "type-badge"], [1, "validity-cell"], [1, "validity-text"], [1, "status-cell"], [1, "status-badge"], [1, "actions-cell"], [1, "action-buttons"], [1, "btn", "btn-sm", "btn-primary", 3, "click", "title"], [1, "fas", "fa-edit"], [1, "btn", "btn-sm", "btn-danger", 3, "click", "title"], [1, "fas", "fa-trash"], [1, "pagination-container", "compact-pagination"], [1, "pagination"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "pagination-info", "compact-pagination-info"], [1, "page-info"], [1, "items-per-page"], [1, "form-control", "compact-select", 3, "ngModelChange", "change", "ngModel"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "50"], [1, "btn", "btn-sm", 3, "click"], [1, "empty-state"]],
      template: function UsersPermissionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, UsersPermissionsComponent_div_3_Template, 2, 2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Username / Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function UsersPermissionsComponent_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.currentUsernameFor2FA, $event) || (ctx.currentUsernameFor2FA = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7)(12, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function UsersPermissionsComponent_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.twoFactorPassword, $event) || (ctx.twoFactorPassword = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, UsersPermissionsComponent_div_15_Template, 6, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, UsersPermissionsComponent_div_17_Template, 19, 3, "div", 12)(18, UsersPermissionsComponent_div_18_Template, 10, 0, "div", 13)(19, UsersPermissionsComponent_div_19_Template, 12, 2, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "app-confirm-dialog", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("confirmed", function UsersPermissionsComponent_Template_app_confirm_dialog_confirmed_20_listener() {
            return ctx.onConfirmDelete();
          })("cancelled", function UsersPermissionsComponent_Template_app_confirm_dialog_cancelled_20_listener() {
            return ctx.onCancelDelete();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, UsersPermissionsComponent_div_21_Template, 6, 1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "h1", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, UsersPermissionsComponent_button_29_Template, 3, 1, "button", 22)(30, UsersPermissionsComponent_button_30_Template, 3, 1, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, UsersPermissionsComponent_div_31_Template, 157, 58, "div", 24)(32, UsersPermissionsComponent_div_32_Template, 31, 15, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.twoFactorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.currentUsernameFor2FA);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.twoFactorPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.twoFactorEnabled !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.twoFactorEnabled !== true && ctx.twoFactorQrDataUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.twoFactorEnabled !== true && !ctx.twoFactorQrDataUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.twoFactorEnabled === true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.showConfirmDialog)("data", ctx.confirmDialogData);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showSuccessBanner);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("configureUserAccountsAndPermissions"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.editingUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.editingUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.showUserList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showUserList);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmDialogComponent],
      styles: [".users-permissions-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 100%;\n  max-width: 100%;\n  margin: 0;\n  overflow-x: hidden;\n}\n\n.twofa-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 16px 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  overflow: hidden;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: nowrap;\n  margin-bottom: 12px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #f1f3f4;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-header[_ngcontent-%COMP%]   .twofa-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n  color: #2c3e50;\n  min-width: 0;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-header[_ngcontent-%COMP%]   .twofa-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-header[_ngcontent-%COMP%]   .twofa-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-header[_ngcontent-%COMP%]   .badge.enabled[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.12);\n  color: #155724;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-header[_ngcontent-%COMP%]   .badge.disabled[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  color: #721c24;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: none;\n  margin: 0 0 12px 0;\n  white-space: normal;\n  word-break: break-word;\n  overflow-wrap: anywhere;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n  align-items: start;\n  justify-items: stretch;\n  width: 100%;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-left[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: flex;\n  justify-content: flex-start;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-right[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: flex;\n  justify-content: flex-start;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-stack[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n  align-items: start;\n  width: 100%;\n  max-width: none;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-right-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n  align-items: start;\n  width: 100%;\n  max-width: none;\n  background: #fafbfc;\n  border: 1px solid #e9ecef;\n  border-radius: 14px;\n  padding: 12px;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-right-placeholder[_ngcontent-%COMP%] {\n  min-height: 260px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  gap: 10px;\n  color: #6c757d;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-right-placeholder[_ngcontent-%COMP%]   .placeholder-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 800;\n  color: #2c3e50;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 0.85rem;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-right-placeholder[_ngcontent-%COMP%]   .placeholder-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-right-placeholder[_ngcontent-%COMP%]   .placeholder-text[_ngcontent-%COMP%] {\n  max-width: 360px;\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-field-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-field-actions[_ngcontent-%COMP%]   .sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-field-actions[_ngcontent-%COMP%]   .compact-btn[_ngcontent-%COMP%] {\n  height: 38px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  white-space: nowrap;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-disable[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-disable[_ngcontent-%COMP%]   .twofa-field-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-qr-card[_ngcontent-%COMP%] {\n  background: #fafbfc;\n  border: 1px solid #e9ecef;\n  border-radius: 14px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-qr-card[_ngcontent-%COMP%]   .twofa-qr-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n  color: #2c3e50;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-qr-card[_ngcontent-%COMP%]   .twofa-qr-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-qr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-qr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 240px;\n  height: auto;\n  aspect-ratio: 1/1;\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n  background: #fff;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .otp-inputs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 8px;\n  width: 100%;\n  max-width: 420px;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 38px;\n  border: 2px solid #e9ecef;\n  border-radius: 10px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 1rem;\n  outline: none;\n  background: rgba(255, 255, 255, 0.95);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:focus {\n  border-color: #00695c;\n  box-shadow: 0 0 0 0.2rem rgba(0, 105, 92, 0.18);\n}\n\n@media (max-width: 980px) {\n  .twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-row.twofa-row-single[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-verify[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .twofa-panel[_ngcontent-%COMP%]   .twofa-body[_ngcontent-%COMP%]   .twofa-qr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 220px;\n    height: 220px;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 1.8rem;\n}\n\n.add-user-form[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 25px 0;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 8px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.form-control[multiple][_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.filters-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.search-filter[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n}\n.search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 45px;\n  width: 100%;\n}\n\n.role-filter[_ngcontent-%COMP%], .status-filter[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.users-list[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.list-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.total-count[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n\n.users-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 20px;\n}\n\n.user-card[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.user-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: #00695c;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.5rem;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 5px 0;\n}\n\n.user-email[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n\n.user-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.user-status.active[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.user-status.inactive[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #6c757d;\n}\n.detail-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  color: #00695c;\n}\n\n.permissions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.permission-tag[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f8f9fa;\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  border-top: 1px solid #e9ecef;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #00695c;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #004d40;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n.btn.btn-warning[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #212529;\n}\n.btn.btn-warning[_ngcontent-%COMP%]:hover {\n  background: #e0a800;\n}\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6c757d;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #adb5bd;\n  margin-bottom: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: auto;\n  right: 15px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 45px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[dir=rtl][_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n@media (max-width: 1200px) {\n  .users-permissions-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .users-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    justify-content: center;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n  .filters-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-filter[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .role-filter[_ngcontent-%COMP%], .status-filter[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .users-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .card-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n@media (max-width: 480px) {\n  .users-permissions-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .form-card[_ngcontent-%COMP%], .filters-card[_ngcontent-%COMP%], .users-list[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .card-header[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .user-avatar[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n  }\n}\n.success-banner[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);\n  border: 1px solid #c3e6cb;\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #155724;\n  font-weight: 600;\n  position: relative;\n}\n.success-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #28a745;\n}\n.success-banner[_ngcontent-%COMP%]   .close-banner[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #155724;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.success-banner[_ngcontent-%COMP%]   .close-banner[_ngcontent-%COMP%]:hover {\n  background: rgba(21, 87, 36, 0.1);\n}\n\n.user-form-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.user-form-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 30px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f1f3f4;\n}\n.user-form-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 30px;\n  font-size: 1.5rem;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.user-form-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 1.25rem;\n}\n\n.user-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.user-info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #34495e;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #6c757d;\n}\n.user-info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 12px 16px;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  background: #fafbfc;\n  width: 100%;\n}\n.user-info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.user-info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n  font-size: 0.8rem;\n}\n.user-info-grid[_ngcontent-%COMP%]   .info-card.notes-card[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.user-info-grid[_ngcontent-%COMP%]   .info-card.notes-card[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n\n.permissions-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 24px;\n  font-size: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 1.125rem;\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 24px;\n  margin-bottom: 30px;\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-grid[_ngcontent-%COMP%]   .permission-column[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid #e9ecef;\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-grid[_ngcontent-%COMP%]   .permission-column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 16px;\n  font-size: 1rem;\n  text-align: center;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #00695c;\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-grid[_ngcontent-%COMP%]   .permission-column[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-grid[_ngcontent-%COMP%]   .permission-column[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-grid[_ngcontent-%COMP%]   .permission-column[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-grid[_ngcontent-%COMP%]   .permission-column[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 105, 92, 0.05);\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-grid[_ngcontent-%COMP%]   .permission-column[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  border: 2px solid #dee2e6;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-grid[_ngcontent-%COMP%]   .permission-column[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #00695c;\n  border-color: #00695c;\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-grid[_ngcontent-%COMP%]   .permission-column[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.permissions-section[_ngcontent-%COMP%]   .permissions-grid[_ngcontent-%COMP%]   .permission-column[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #495057;\n  line-height: 1.4;\n}\n.permissions-section[_ngcontent-%COMP%]   .other-powers-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid #e9ecef;\n}\n.permissions-section[_ngcontent-%COMP%]   .other-powers-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 16px;\n  font-size: 1rem;\n  text-align: center;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #00695c;\n}\n.permissions-section[_ngcontent-%COMP%]   .other-powers-section[_ngcontent-%COMP%]   .other-powers-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n}\n.permissions-section[_ngcontent-%COMP%]   .other-powers-section[_ngcontent-%COMP%]   .other-powers-grid[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.permissions-section[_ngcontent-%COMP%]   .other-powers-section[_ngcontent-%COMP%]   .other-powers-grid[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 105, 92, 0.05);\n}\n.permissions-section[_ngcontent-%COMP%]   .other-powers-section[_ngcontent-%COMP%]   .other-powers-grid[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  border: 2px solid #dee2e6;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.permissions-section[_ngcontent-%COMP%]   .other-powers-section[_ngcontent-%COMP%]   .other-powers-grid[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #00695c;\n  border-color: #00695c;\n}\n.permissions-section[_ngcontent-%COMP%]   .other-powers-section[_ngcontent-%COMP%]   .other-powers-grid[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.permissions-section[_ngcontent-%COMP%]   .other-powers-section[_ngcontent-%COMP%]   .other-powers-grid[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #495057;\n  line-height: 1.4;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  margin-top: 30px;\n  padding-top: 24px;\n  border-top: 1px solid #f1f3f4;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  border: none;\n  min-width: 140px;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n  transform: translateY(-1px);\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.2);\n}\n\n@media (max-width: 768px) {\n  .user-form-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .user-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .permissions-section[_ngcontent-%COMP%]   .permissions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .permissions-section[_ngcontent-%COMP%]   .other-powers-section[_ngcontent-%COMP%]   .other-powers-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: auto;\n  }\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #495057;\n  border-bottom: 2px solid #dee2e6;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f3f4;\n  transition: all 0.2s ease;\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: scale(1.01);\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.active[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.inactive[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  vertical-align: middle;\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n\n.username-cell[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n.username-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.username-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.username-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.75rem;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 110px;\n}\n\n.email-cell[_ngcontent-%COMP%]   .email-text[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-family: \"Courier New\", monospace;\n  font-size: 0.8rem;\n  background: #f8f9fa;\n  padding: 4px 8px;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n}\n\n.phone-cell[_ngcontent-%COMP%]   .phone-text[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", monospace;\n  color: #495057;\n  font-weight: 500;\n}\n\n.subsites-cell[_ngcontent-%COMP%]   .subsites-text[_ngcontent-%COMP%], .subsites-cell[_ngcontent-%COMP%]   .section-text[_ngcontent-%COMP%], .section-cell[_ngcontent-%COMP%]   .subsites-text[_ngcontent-%COMP%], .section-cell[_ngcontent-%COMP%]   .section-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n\n.type-cell[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.type-cell[_ngcontent-%COMP%]   .type-badge.regular-user[_ngcontent-%COMP%] {\n  background: rgba(23, 162, 184, 0.1);\n  color: #17a2b8;\n}\n.type-cell[_ngcontent-%COMP%]   .type-badge.admin-user[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  color: #dc3545;\n}\n.type-cell[_ngcontent-%COMP%]   .type-badge.super-user[_ngcontent-%COMP%] {\n  background: rgba(253, 126, 20, 0.1);\n  color: #fd7e14;\n}\n\n.validity-cell[_ngcontent-%COMP%]   .validity-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n\n.status-cell[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-cell[_ngcontent-%COMP%]   .status-badge.active[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.1);\n  color: #155724;\n}\n.status-cell[_ngcontent-%COMP%]   .status-badge.inactive[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  color: #721c24;\n}\n\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  transition: all 0.2s ease;\n  min-width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: #00695c;\n  border-color: #00695c;\n  color: white;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #004d40;\n  border-color: #004d40;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  border-color: #dc3545;\n  color: white;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n  border-color: #bd2130;\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 24px;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  justify-content: center;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  min-width: 40px;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #dee2e6;\n  color: #6c757d;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #00695c;\n  color: #00695c;\n  transform: translateY(-1px);\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: #00695c;\n  border-color: #00695c;\n  color: white;\n  cursor: default;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 1;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: white;\n  border-radius: 12px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-weight: 500;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .items-per-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .items-per-page[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-weight: 500;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .items-per-page[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-size: 0.8rem;\n  background: #fafbfc;\n  min-width: 60px;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .items-per-page[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n  .table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px 8px;\n    font-size: 0.8rem;\n  }\n  .table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding-left: 12px;\n  }\n  .table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, .table-container[_ngcontent-%COMP%]   .users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    padding-right: 12px;\n  }\n  .pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    font-size: 0.75rem;\n    min-width: 36px;\n  }\n  .pagination-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    text-align: center;\n  }\n  .pagination-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   .items-per-page[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border-radius: 16px;\n  padding: 16px 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.25rem;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 1.125rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .compact-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 0.8rem;\n  transition: all 0.3s ease;\n  border: none;\n  min-width: 120px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .compact-btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .compact-btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n  transform: translateY(-1px);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .compact-btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .compact-btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n\n.user-form-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.user-form-section[_ngcontent-%COMP%]   .compact-form[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f1f3f4;\n}\n.user-form-section[_ngcontent-%COMP%]   .compact-form[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 20px;\n  font-size: 1.25rem;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.user-form-section[_ngcontent-%COMP%]   .compact-form[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 1.125rem;\n}\n\n.user-info-grid.compact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.user-info-grid.compact-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #34495e;\n  margin-bottom: 6px;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #6c757d;\n}\n.user-info-grid.compact-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .compact-input[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  padding: 8px 12px;\n  font-size: 0.8rem;\n  transition: all 0.3s ease;\n  background: #fafbfc;\n  width: 100%;\n}\n.user-info-grid.compact-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .compact-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.user-info-grid.compact-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .compact-input[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n  font-size: 0.75rem;\n}\n.user-info-grid.compact-grid[_ngcontent-%COMP%]   .info-card.notes-card[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.user-info-grid.compact-grid[_ngcontent-%COMP%]   .info-card.notes-card[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 60px;\n}\n\n.permissions-section.compact-permissions[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .permissions-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 16px;\n  font-size: 1.125rem;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .permissions-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 1rem;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-permissions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-permissions-grid[_ngcontent-%COMP%]   .compact-column[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid #e9ecef;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-permissions-grid[_ngcontent-%COMP%]   .compact-column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 12px;\n  font-size: 0.9rem;\n  text-align: center;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #00695c;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-permissions-grid[_ngcontent-%COMP%]   .compact-column[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-permissions-grid[_ngcontent-%COMP%]   .compact-column[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-permissions-grid[_ngcontent-%COMP%]   .compact-column[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]   .compact-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px 8px;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-permissions-grid[_ngcontent-%COMP%]   .compact-column[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]   .compact-checkbox[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 105, 92, 0.05);\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-permissions-grid[_ngcontent-%COMP%]   .compact-column[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]   .compact-checkbox[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  border: 2px solid #dee2e6;\n  border-radius: 3px;\n  transition: all 0.2s ease;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-permissions-grid[_ngcontent-%COMP%]   .compact-column[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]   .compact-checkbox[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #00695c;\n  border-color: #00695c;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-permissions-grid[_ngcontent-%COMP%]   .compact-column[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]   .compact-checkbox[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-permissions-grid[_ngcontent-%COMP%]   .compact-column[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]   .compact-checkbox[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #495057;\n  line-height: 1.3;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-other-powers[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid #e9ecef;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-other-powers[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 12px;\n  font-size: 0.9rem;\n  text-align: center;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #00695c;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-other-powers[_ngcontent-%COMP%]   .compact-other-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-other-powers[_ngcontent-%COMP%]   .compact-other-grid[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]   .compact-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 6px 8px;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-other-powers[_ngcontent-%COMP%]   .compact-other-grid[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]   .compact-checkbox[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 105, 92, 0.05);\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-other-powers[_ngcontent-%COMP%]   .compact-other-grid[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]   .compact-checkbox[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  border: 2px solid #dee2e6;\n  border-radius: 3px;\n  transition: all 0.2s ease;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-other-powers[_ngcontent-%COMP%]   .compact-other-grid[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]   .compact-checkbox[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #00695c;\n  border-color: #00695c;\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-other-powers[_ngcontent-%COMP%]   .compact-other-grid[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]   .compact-checkbox[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-other-powers[_ngcontent-%COMP%]   .compact-other-grid[_ngcontent-%COMP%]   .compact-item[_ngcontent-%COMP%]   .compact-checkbox[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #495057;\n  line-height: 1.3;\n}\n\n.form-actions.compact-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid #f1f3f4;\n}\n.form-actions.compact-actions[_ngcontent-%COMP%]   .compact-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 0.8rem;\n  transition: all 0.3s ease;\n  border: none;\n  min-width: 120px;\n}\n.form-actions.compact-actions[_ngcontent-%COMP%]   .compact-btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.form-actions.compact-actions[_ngcontent-%COMP%]   .compact-btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n  transform: translateY(-1px);\n}\n.form-actions.compact-actions[_ngcontent-%COMP%]   .compact-btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.form-actions.compact-actions[_ngcontent-%COMP%]   .compact-btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n.form-actions.compact-actions[_ngcontent-%COMP%]   .compact-btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.2);\n}\n\n.list-header.compact-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: white;\n  border-radius: 12px;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.list-header.compact-header[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.8rem;\n}\n\n.table-container.compact-table[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8rem;\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  text-align: left;\n  font-weight: 600;\n  color: #495057;\n  border-bottom: 2px solid #dee2e6;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 16px;\n  width: 150px;\n  max-width: 150px;\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 16px;\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f3f4;\n  transition: all 0.2s ease;\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: scale(1.005);\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.active[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.05);\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.inactive[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.05);\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  vertical-align: middle;\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 16px;\n  width: 150px;\n  max-width: 150px;\n}\n.table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 16px;\n}\n\n.pagination-container.compact-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 20px;\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  justify-content: center;\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  min-width: 36px;\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #dee2e6;\n  color: #6c757d;\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #00695c;\n  color: #00695c;\n  transform: translateY(-1px);\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: #00695c;\n  border-color: #00695c;\n  color: white;\n  cursor: default;\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 1;\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .compact-pagination-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: white;\n  border-radius: 10px;\n  padding: 12px 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .compact-pagination-info[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  font-weight: 500;\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .compact-pagination-info[_ngcontent-%COMP%]   .items-per-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .compact-pagination-info[_ngcontent-%COMP%]   .items-per-page[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  font-weight: 500;\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .compact-pagination-info[_ngcontent-%COMP%]   .items-per-page[_ngcontent-%COMP%]   .compact-select[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 4px 8px;\n  font-size: 0.75rem;\n  background: #fafbfc;\n  min-width: 50px;\n}\n.pagination-container.compact-pagination[_ngcontent-%COMP%]   .compact-pagination-info[_ngcontent-%COMP%]   .items-per-page[_ngcontent-%COMP%]   .compact-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    text-align: center;\n  }\n  .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .user-info-grid.compact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-permissions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .permissions-section.compact-permissions[_ngcontent-%COMP%]   .compact-other-powers[_ngcontent-%COMP%]   .compact-other-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .form-actions.compact-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions.compact-actions[_ngcontent-%COMP%]   .compact-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: auto;\n  }\n  .table-container.compact-table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%] {\n    min-width: 700px;\n  }\n  .table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 6px;\n    font-size: 0.75rem;\n  }\n  .table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding-left: 12px;\n  }\n  .table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, .table-container.compact-table[_ngcontent-%COMP%]   .compact-users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    padding-right: 12px;\n  }\n  .pagination-container.compact-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 4px;\n  }\n  .pagination-container.compact-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 5px 8px;\n    font-size: 0.7rem;\n    min-width: 32px;\n  }\n  .pagination-container.compact-pagination[_ngcontent-%COMP%]   .compact-pagination-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n  }\n  .pagination-container.compact-pagination[_ngcontent-%COMP%]   .compact-pagination-info[_ngcontent-%COMP%]   .items-per-page[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdXNlcnMvY29tcG9uZW50cy91c2Vycy1wZXJtaXNzaW9ucy91c2Vycy1wZXJtaXNzaW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFHQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQURGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFGTjtBQUlNO0VBQ0UsY0FBQTtBQUZSO0FBS007RUFDRSxtQkFBQTtBQUhSO0FBT0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFMTjtBQU9NO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0FBTFI7QUFPTTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtBQUxSO0FBVUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQVJKO0FBV0k7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVROO0FBWUk7RUFDRSxhQUFBO0VBRUEsZ0RBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFYTjtBQWNJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQVpOO0FBZUk7RUFDRSxZQUFBO0VB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RSwwQkFBQTtJQUNBLFNBQUE7RUF6VUo7RUE2VUk7SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUEzVU47RUFnVkE7SUFDRSxzQkFBQTtFQTlVRjtFQWdWRTtJQUNFLFdBQUE7SUFDQSxlQUFBO0VBOVVKO0VBa1ZBO0lBQ0UsZ0JBQUE7RUFoVkY7RUFrVkU7SUFDRSxnQkFBQTtFQWhWSjtFQWtWSTs7SUFFRSxpQkFBQTtJQUNBLGtCQUFBO0VBaFZOO0VBa1ZNOztJQUNFLGtCQUFBO0VBL1VSO0VBa1ZNOztJQUNFLG1CQUFBO0VBL1VSO0VBc1ZFO0lBQ0UsZUFBQTtJQUNBLFFBQUE7RUFwVko7RUFzVkk7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQXBWTjtFQXdWRTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0VBdFZKO0VBd1ZJO0lBQ0UsdUJBQUE7RUF0Vk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi51c2Vycy1wZXJtaXNzaW9ucy1jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICAvLyBUaGlzIHBhZ2UgbGl2ZXMgaW5zaWRlIGAucGFnZS1jb250ZW50YCAod2hpY2ggYWxyZWFkeSBwcm92aWRlcyBwYWRkaW5nIGFuZCBzY3JvbGxpbmcpLlxuICAvLyBVc2luZyBhIGNlbnRlcmVkIG1heC13aWR0aCBoZXJlIGNhbiBjYXVzZSB0aGUgY29udGVudCB0byBhcHBlYXIgY3JvcHBlZCB3aGVuIHRoZSBzaWRlYmFyIGlzIG9wZW4uXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4vLyAyRkEgcGFuZWxcbi50d29mYS1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAudHdvZmEtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTJweDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmM2Y0O1xuXG4gICAgLnR3b2ZhLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgbWluLXdpZHRoOiAwO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICMwMDY5NWM7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5iYWRnZSB7XG4gICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cbiAgICAgICYuZW5hYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksIDAuMTIpO1xuICAgICAgICBjb2xvcjogIzE1NTcyNDtcbiAgICAgIH1cbiAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjEwKTtcbiAgICAgICAgY29sb3I6ICM3MjFjMjQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnR3b2ZhLWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgIC8vIE1ha2Ugc3VjY2Vzcy9lcnJvciBtZXNzYWdlIGJhbm5lciBmdWxsLXdpZHRoIChwcmV2ZW50cyBcInZlcnRpY2FsXCIgd3JhcHBpbmcpXG4gICAgLmFsZXJ0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4IDA7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICAgIH1cblxuICAgIC50d29mYS1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAvLyA2IC8gNiBsYXlvdXRcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudHdvZmEtbGVmdCB7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIC50d29mYS1yaWdodCB7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIC50d29mYS1zdGFjayB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICB9XG5cbiAgICAudHdvZmEtcmlnaHQtaW5uZXIge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgIH1cblxuICAgIC50d29mYS1yaWdodC1wbGFjZWhvbGRlciB7XG4gICAgICBtaW4taGVpZ2h0OiAyNjBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgY29sb3I6ICM2Yzc1N2Q7XG5cbiAgICAgIC5wbGFjZWhvbGRlci10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgIGNvbG9yOiAjMDA2OTVjO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wbGFjZWhvbGRlci10ZXh0IHtcbiAgICAgICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnR3b2ZhLWZpZWxkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA2cHg7XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnR3b2ZhLWZpZWxkLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAuc3Itb25seSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgfVxuXG4gICAgICAuY29tcGFjdC1idG4ge1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50d29mYS1kaXNhYmxlIHtcbiAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG5cbiAgICAgIC50d29mYS1maWVsZC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50d29mYS1xci1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmYWZiZmM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTBweDtcblxuICAgICAgLnR3b2ZhLXFyLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgY29sb3I6ICMwMDY5NWM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudHdvZmEtcXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMjQwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA2LWRpZ2l0IE9UUCBpbnB1dHMgKGVxdWFsIHNwYWNpbmcpXG4gICAgLm90cC1pbnB1dHMge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIG1pbm1heCgwLCAxZnIpKTtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDQyMHB4O1xuICAgIH1cblxuICAgIC5vdHAtaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMDUsIDkyLCAwLjE4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XG4gIC50d29mYS1wYW5lbCB7XG4gICAgLnR3b2ZhLWJvZHkge1xuICAgICAgLnR3b2ZhLWdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIH1cblxuICAgICAgLnR3b2ZhLXJvdy50d29mYS1yb3ctc2luZ2xlIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICB9XG5cbiAgICAgIC50d29mYS12ZXJpZnkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIH1cblxuICAgICAgLnR3b2ZhLXJvdyB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgfVxuXG4gICAgICAudHdvZmEtcXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBQYWdlIEhlYWRlclxuLnBhZ2UtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmhlYWRlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMjBweDtcbn1cblxuLnBhZ2UtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbjogMDtcbiAgXG4gIGkge1xuICAgIGNvbG9yOiAjMDA2OTVjO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG59XG5cbi8vIEFkZCBVc2VyIEZvcm1cbi5hZGQtdXNlci1mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZvcm0tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW46IDAgMCAyNXB4IDA7XG59XG5cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEwNSwgOTIsIDAuMSk7XG4gIH1cbiAgXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FkYjViZDtcbiAgfVxuICBcbiAgJlttdWx0aXBsZV0ge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLy8gRmlsdGVycyBTZWN0aW9uXG4uZmlsdGVycy1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZpbHRlcnMtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc2VhcmNoLWZpbHRlciB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTVweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgY29sb3I6ICNhZGI1YmQ7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmctbGVmdDogNDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4ucm9sZS1maWx0ZXIsXG4uc3RhdHVzLWZpbHRlciB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi8vIFVzZXJzIExpc3Rcbi51c2Vycy1saXN0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLmxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xufVxuXG4udG90YWwtY291bnQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG5cbi51c2Vycy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzgwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG59XG5cbi51c2VyLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG59XG5cbi51c2VyLWF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDY5NWM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi51c2VyLWluZm8ge1xuICBmbGV4OiAxO1xufVxuXG4udXNlci1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW46IDAgMCA1cHggMDtcbn1cblxuLnVzZXItZW1haWwge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi51c2VyLXN0YXR1cyB7XG4gIC5zdGF0dXMtYmFkZ2Uge1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgJi5hY3RpdmUgLnN0YXR1cy1iYWRnZSB7XG4gICAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcbiAgICBjb2xvcjogIzE1NTcyNDtcbiAgfVxuICBcbiAgJi5pbmFjdGl2ZSAuc3RhdHVzLWJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xuICAgIGNvbG9yOiAjNzIxYzI0O1xuICB9XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udXNlci1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZGV0YWlsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBcbiAgaSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgY29sb3I6ICMwMDY5NWM7XG4gIH1cbn1cblxuLnBlcm1pc3Npb25zLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xufVxuXG4ucGVybWlzc2lvbi10YWcge1xuICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xuICBjb2xvcjogIzE1NjVjMDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkLWFjdGlvbnMge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICB9XG4gIFxuICAmLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA2OTVjO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDRkNDA7XG4gICAgfVxuICB9XG4gIFxuICAmLmJ0bi1zZWNvbmRhcnkge1xuICAgIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzVhNjI2ODtcbiAgICB9XG4gIH1cbiAgXG4gICYuYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQ6ICMyOGE3NDU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzIxODgzODtcbiAgICB9XG4gIH1cbiAgXG4gICYuYnRuLXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQ6ICNmZmMxMDc7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBhODAwO1xuICAgIH1cbiAgfVxuICBcbiAgJi5idG4tZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNjODIzMzM7XG4gICAgfVxuICB9XG4gIFxuICAmLmJ0bi1zbSB7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBcbiAgaSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGNvbG9yOiAjYWRiNWJkO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4vLyBSVEwgU3VwcG9ydFxuW2Rpcj1cInJ0bFwiXSB7XG4gIC5zZWFyY2gtaW5wdXQgaSB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMTVweDtcbiAgfVxuICBcbiAgLnNlYXJjaC1pbnB1dCAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcbiAgfVxuICBcbiAgLmZvcm0tYWN0aW9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIFxuICAuY2FyZC1hY3Rpb25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnVzZXJzLXBlcm1pc3Npb25zLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICBcbiAgLnVzZXJzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIFxuICAucGFnZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5mb3JtLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG4gIFxuICAuZmlsdGVycy1jYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIFxuICAuc2VhcmNoLWZpbHRlciB7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICB9XG4gIFxuICAucm9sZS1maWx0ZXIsXG4gIC5zdGF0dXMtZmlsdGVyIHtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gIH1cbiAgXG4gIC51c2Vycy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICBcbiAgLmZvcm0tYWN0aW9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgIFxuICAgIC5idG4ge1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIH1cbiAgXG4gIC5jYXJkLWFjdGlvbnMge1xuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICBcbiAgICAuYnRuIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudXNlcnMtcGVybWlzc2lvbnMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIFxuICAuZm9ybS1jYXJkLFxuICAuZmlsdGVycy1jYXJkLFxuICAudXNlcnMtbGlzdCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLmNhcmQtaGVhZGVyLFxuICAuY2FyZC1ib2R5LFxuICAuY2FyZC1hY3Rpb25zIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIFxuICAucGFnZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC51c2VyLWF2YXRhciB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG5cbi8vIFN1Y2Nlc3MgQmFubmVyXG4uc3VjY2Vzcy1iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDRlZGRhIDAlLCAjYzNlNmNiIDEwMCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNlNmNiO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgY29sb3I6ICMxNTU3MjQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBjb2xvcjogIzI4YTc0NTtcbiAgfVxuICBcbiAgLmNsb3NlLWJhbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzE1NTcyNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMSwgODcsIDM2LCAwLjEpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VyIEZvcm0gU2VjdGlvblxuLnVzZXItZm9ybS1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgXG4gIC5mb3JtLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcbiAgICBcbiAgICAuZm9ybS10aXRsZSB7XG4gICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICMwMDY5NWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlciBJbmZvcm1hdGlvbiBHcmlkXG4udXNlci1pbmZvLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBcbiAgLmluZm8tY2FyZCB7XG4gICAgLmZvcm0tbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzNDQ5NWU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjYWRiNWJkO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJi5ub3Rlcy1jYXJkIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgICBcbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgbWluLWhlaWdodDogODBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUGVybWlzc2lvbnMgU2VjdGlvblxuLnBlcm1pc3Npb25zLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBcbiAgLnBlcm1pc3Npb25zLXRpdGxlIHtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgXG4gICAgaSB7XG4gICAgICBjb2xvcjogIzAwNjk1YztcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgfVxuICB9XG4gIFxuICAucGVybWlzc2lvbnMtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBcbiAgICAucGVybWlzc2lvbi1jb2x1bW4ge1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgICAgIFxuICAgICAgLmNvbHVtbi10aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA2OTVjO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucGVybWlzc2lvbi1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgIFxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMDUsIDkyLCAwLjA1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpjaGVja2VkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk1YztcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLmNoZWNrYm94LXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAub3RoZXItcG93ZXJzLXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgXG4gICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDY5NWM7XG4gICAgfVxuICAgIFxuICAgIC5vdGhlci1wb3dlcnMtZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgICBcbiAgICAgIC5wZXJtaXNzaW9uLWl0ZW0ge1xuICAgICAgICAuY2hlY2tib3gtbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEwNSwgOTIsIDAuMDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmNoZWNrZWQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTVjO1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuY2hlY2tib3gtdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gRm9ybSBBY3Rpb25zXG4uZm9ybS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYzZjQ7XG4gIFxuICAuYnRuIHtcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICBcbiAgICAmLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICYuYnRuLXByaW1hcnkge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAxMDUsIDkyLCAwLjMpO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMTA1LCA5MiwgMC40KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMTA1LCA5MiwgMC4yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudXNlci1mb3JtLXNlY3Rpb24ge1xuICAgIC5mb3JtLWNhcmQge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC51c2VyLWluZm8tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG4gIFxuICAucGVybWlzc2lvbnMtc2VjdGlvbiB7XG4gICAgLnBlcm1pc3Npb25zLWdyaWQge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5vdGhlci1wb3dlcnMtc2VjdGlvbiB7XG4gICAgICAub3RoZXItcG93ZXJzLWdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmZvcm0tYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAuYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUYWJsZSBTdHlsaW5nXG4udGFibGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgXG4gIC51c2Vycy10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIFxuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEgMCUsICNlOWVjZWYgMTAwJSk7XG4gICAgICBcbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIFxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0Ym9keSB7XG4gICAgICB0ciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmM2Y0O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjA1KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5pbmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4wNSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFRhYmxlIENlbGwgU3R5bGluZ1xuLnVzZXJuYW1lLWNlbGwge1xuICBtYXgtd2lkdGg6IDE1MHB4OyAvLyBMaW1pdCBtYXhpbXVtIHdpZHRoXG4gIFxuICAudXNlci1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7IC8vIFJlZHVjZWQgZ2FwXG4gICAgXG4gICAgLnVzZXItYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAyNHB4OyAvLyBTbWFsbGVyIGF2YXRhclxuICAgICAgaGVpZ2h0OiAyNHB4OyAvLyBTbWFsbGVyIGF2YXRhclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YywgIzRkYjZhYyk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxMnB4OyAvLyBTbWFsbGVyIGljb25cbiAgICAgIGZsZXgtc2hyaW5rOiAwOyAvLyBQcmV2ZW50IGF2YXRhciBmcm9tIHNocmlua2luZ1xuICAgIH1cbiAgICBcbiAgICAudXNlci1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTsgLy8gU21hbGxlciBmb250IHNpemVcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7IC8vIFRpZ2h0ZXIgbGluZSBoZWlnaHRcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBtYXgtd2lkdGg6IDExMHB4OyAvLyBMaW1pdCB0ZXh0IHdpZHRoXG4gICAgfVxuICB9XG59XG5cbi5lbWFpbC1jZWxsIHtcbiAgLmVtYWlsLXRleHQge1xuICAgIGNvbG9yOiAjMDA2OTVjO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICB9XG59XG5cbi5waG9uZS1jZWxsIHtcbiAgLnBob25lLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG4uc3Vic2l0ZXMtY2VsbCxcbi5zZWN0aW9uLWNlbGwge1xuICAuc3Vic2l0ZXMtdGV4dCxcbiAgLnNlY3Rpb24tdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgfVxufVxuXG4udHlwZS1jZWxsIHtcbiAgLnR5cGUtYmFkZ2Uge1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgXG4gICAgJi5yZWd1bGFyLXVzZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMywgMTYyLCAxODQsIDAuMSk7XG4gICAgICBjb2xvcjogIzE3YTJiODtcbiAgICB9XG4gICAgXG4gICAgJi5hZG1pbi11c2VyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksIDAuMSk7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICB9XG4gICAgXG4gICAgJi5zdXBlci11c2VyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjUzLCAxMjYsIDIwLCAwLjEpO1xuICAgICAgY29sb3I6ICNmZDdlMTQ7XG4gICAgfVxuICB9XG59XG5cbi52YWxpZGl0eS1jZWxsIHtcbiAgLnZhbGlkaXR5LXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gIH1cbn1cblxuLnN0YXR1cy1jZWxsIHtcbiAgLnN0YXR1cy1iYWRnZSB7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjEpO1xuICAgICAgY29sb3I6ICMxNTU3MjQ7XG4gICAgfVxuICAgIFxuICAgICYuaW5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcbiAgICAgIGNvbG9yOiAjNzIxYzI0O1xuICAgIH1cbiAgfVxufVxuXG4uYWN0aW9ucy1jZWxsIHtcbiAgLmFjdGlvbi1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIFxuICAgIC5idG4ge1xuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgbWluLXdpZHRoOiAzMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi5idG4tcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDY5NWM7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwNGQ0MDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDRkNDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi5idG4tZGFuZ2VyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzgyMzMzO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2JkMjEzMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBQYWdpbmF0aW9uIFN0eWxpbmdcbi5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgXG4gIC5wYWdpbmF0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICBcbiAgICAgICYuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcbiAgICAgICAgICBjb2xvcjogIzAwNjk1YztcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgICYuYnRuLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2OTVjO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBcbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnBhZ2luYXRpb24taW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xuICAgIFxuICAgIC5wYWdlLWluZm8ge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgXG4gICAgLml0ZW1zLXBlci1wYWdlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBcbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmJmYztcbiAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgICAgICBcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIFRhYmxlXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBcbiAgICAudXNlcnMtdGFibGUge1xuICAgICAgbWluLXdpZHRoOiA4MDBweDtcbiAgICAgIFxuICAgICAgdGhlYWQgdGgsXG4gICAgICB0Ym9keSB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAucGFnaW5hdGlvbi1jb250YWluZXIge1xuICAgIC5wYWdpbmF0aW9uIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogNnB4O1xuICAgICAgXG4gICAgICAuYnRuIHtcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAzNnB4O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAucGFnaW5hdGlvbi1pbmZvIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBcbiAgICAgIC5pdGVtcy1wZXItcGFnZSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBDb21wYWN0IEhlYWRlciBTdHlsaW5nXG4ucGFnZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmZmZmIDAlLCAjZjhmOWZhIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcbiAgXG4gIC5oZWFkZXItY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gICAgXG4gICAgLmhlYWRlci1sZWZ0IHtcbiAgICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIFxuICAgICAgICBpIHtcbiAgICAgICAgICBjb2xvcjogIzAwNjk1YztcbiAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIFxuICAgICAgLmNvbXBhY3QtYnRuIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgIFxuICAgICAgICAmLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gICAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuYnRuLXByaW1hcnkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAxMDUsIDkyLCAwLjMpO1xuICAgICAgICAgIFxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDEwNSwgOTIsIDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENvbXBhY3QgRm9ybSBTdHlsaW5nXG4udXNlci1mb3JtLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBcbiAgLmNvbXBhY3QtZm9ybSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xuICAgIFxuICAgIC5mb3JtLXRpdGxlIHtcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICMwMDY5NWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENvbXBhY3QgVXNlciBJbmZvcm1hdGlvbiBHcmlkXG4udXNlci1pbmZvLWdyaWQuY29tcGFjdC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgXG4gIC5pbmZvLWNhcmQge1xuICAgIC5mb3JtLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzQ0OTVlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgfVxuICAgIFxuICAgIC5jb21wYWN0LWlucHV0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjYWRiNWJkO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICYubm90ZXMtY2FyZCB7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgICAgXG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENvbXBhY3QgUGVybWlzc2lvbnMgU2VjdGlvblxuLnBlcm1pc3Npb25zLXNlY3Rpb24uY29tcGFjdC1wZXJtaXNzaW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIFxuICAucGVybWlzc2lvbnMtdGl0bGUge1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgXG4gICAgaSB7XG4gICAgICBjb2xvcjogIzAwNjk1YztcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5jb21wYWN0LXBlcm1pc3Npb25zLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgXG4gICAgLmNvbXBhY3QtY29sdW1uIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICBcbiAgICAgIC5jb2x1bW4tdGl0bGUge1xuICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDY5NWM7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jb21wYWN0LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIFxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jb21wYWN0LWNoZWNrYm94IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDZweCA4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEwNSwgOTIsIDAuMDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RlZTJlNjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5NWM7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEwNSwgOTIsIDAuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5jaGVja2JveC10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5jb21wYWN0LW90aGVyLXBvd2VycyB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgICBcbiAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDY5NWM7XG4gICAgfVxuICAgIFxuICAgIC5jb21wYWN0LW90aGVyLWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgXG4gICAgICAuY29tcGFjdC1pdGVtIHtcbiAgICAgICAgLmNvbXBhY3QtY2hlY2tib3gge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTA1LCA5MiwgMC4wNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpjaGVja2VkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk1YztcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLmNoZWNrYm94LXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBDb21wYWN0IEZvcm0gQWN0aW9uc1xuLmZvcm0tYWN0aW9ucy5jb21wYWN0LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjNmNDtcbiAgXG4gIC5jb21wYWN0LWJ0biB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgXG4gICAgJi5idG4tc2Vjb25kYXJ5IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmLmJ0bi1wcmltYXJ5IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMTA1LCA5MiwgMC4zKTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDEwNSwgOTIsIDAuNCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDEwNSwgOTIsIDAuMik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENvbXBhY3QgTGlzdCBIZWFkZXJcbi5saXN0LWhlYWRlci5jb21wYWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XG4gIFxuICAudG90YWwtY291bnQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbn1cblxuLy8gQ29tcGFjdCBUYWJsZVxuLnRhYmxlLWNvbnRhaW5lci5jb21wYWN0LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBcbiAgLmNvbXBhY3QtdXNlcnMtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgXG4gICAgdGhlYWQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2U5ZWNlZiAxMDAlKTtcbiAgICAgIFxuICAgICAgdGgge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7IC8vIFNldCBzcGVjaWZpYyB3aWR0aCBmb3IgdXNlcm5hbWUgY29sdW1uXG4gICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRib2R5IHtcbiAgICAgIHRyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYzZjQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjA1KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5pbmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4wNSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDhweDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIFxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4OyAvLyBTZXQgc3BlY2lmaWMgd2lkdGggZm9yIHVzZXJuYW1lIGNvbHVtblxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENvbXBhY3QgUGFnaW5hdGlvblxuLnBhZ2luYXRpb24tY29udGFpbmVyLmNvbXBhY3QtcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgXG4gIC5wYWdpbmF0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgbWluLXdpZHRoOiAzNnB4O1xuICAgICAgXG4gICAgICAmLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gICAgICAgICAgY29sb3I6ICMwMDY5NWM7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAmLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwNjk1YztcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5jb21wYWN0LXBhZ2luYXRpb24taW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xuICAgIFxuICAgIC5wYWdlLWluZm8ge1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIFxuICAgIC5pdGVtcy1wZXItcGFnZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNnB4O1xuICAgICAgXG4gICAgICBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbXBhY3Qtc2VsZWN0IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZiZmM7XG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEwNSwgOTIsIDAuMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBEZXNpZ24gZm9yIENvbXBhY3QgTGF5b3V0XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICAuaGVhZGVyLWNvbnRlbnQge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIFxuICAgICAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAudXNlci1pbmZvLWdyaWQuY29tcGFjdC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEycHg7XG4gIH1cbiAgXG4gIC5wZXJtaXNzaW9ucy1zZWN0aW9uLmNvbXBhY3QtcGVybWlzc2lvbnMge1xuICAgIC5jb21wYWN0LXBlcm1pc3Npb25zLWdyaWQge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIC5jb21wYWN0LW90aGVyLXBvd2VycyB7XG4gICAgICAuY29tcGFjdC1vdGhlci1ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5mb3JtLWFjdGlvbnMuY29tcGFjdC1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIC5jb21wYWN0LWJ0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICB9XG4gIH1cbiAgXG4gIC50YWJsZS1jb250YWluZXIuY29tcGFjdC10YWJsZSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBcbiAgICAuY29tcGFjdC11c2Vycy10YWJsZSB7XG4gICAgICBtaW4td2lkdGg6IDcwMHB4O1xuICAgICAgXG4gICAgICB0aGVhZCB0aCxcbiAgICAgIHRib2R5IHRkIHtcbiAgICAgICAgcGFkZGluZzogMTBweCA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAucGFnaW5hdGlvbi1jb250YWluZXIuY29tcGFjdC1wYWdpbmF0aW9uIHtcbiAgICAucGFnaW5hdGlvbiB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIFxuICAgICAgLmJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICBtaW4td2lkdGg6IDMycHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5jb21wYWN0LXBhZ2luYXRpb24taW5mbyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgXG4gICAgICAuaXRlbXMtcGVyLXBhZ2Uge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5401:
/*!************************************************!*\
  !*** ./src/app/features/users/users.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersModule: () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _components_users_permissions_users_permissions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/users-permissions/users-permissions.component */ 4814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: '',
  component: _components_users_permissions_users_permissions_component__WEBPACK_IMPORTED_MODULE_1__.UsersPermissionsComponent
}, {
  path: 'users-permissions',
  component: _components_users_permissions_users_permissions_component__WEBPACK_IMPORTED_MODULE_1__.UsersPermissionsComponent
}];
class UsersModule {
  static {
    this.ɵfac = function UsersModule_Factory(t) {
      return new (t || UsersModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UsersModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UsersModule, {
    declarations: [_components_users_permissions_users_permissions_component__WEBPACK_IMPORTED_MODULE_1__.UsersPermissionsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_users_users_module_ts.js.map