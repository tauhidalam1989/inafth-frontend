"use strict";
(self["webpackChunkscreening_frontend"] = self["webpackChunkscreening_frontend"] || []).push([["src_app_features_locations_locations_module_ts"],{

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

/***/ 1660:
/*!******************************************************************************!*\
  !*** ./src/app/features/locations/components/sections/sections.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionsComponent: () => (/* binding */ SectionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/location.service */ 3415);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 8709);








function SectionsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showSuccessBanner = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingSection ? ctx_r1.getTranslation("sectionUpdatedSuccessfully") : ctx_r1.getTranslation("sectionAddedSuccessfully"), " ");
  }
}
function SectionsComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showUserList = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("addSection"), " ");
  }
}
function SectionsComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showUserList = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("showSectionsList"), " ");
  }
}
function SectionsComponent_div_12_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("sectionTypeRequired"), " ");
  }
}
function SectionsComponent_div_12_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const location_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", location_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", location_r6.name, " ");
  }
}
function SectionsComponent_div_12_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("locationRequired") || "Location is required", " ");
  }
}
function SectionsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SectionsComponent_div_12_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.saveSection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 25)(6, "div", 26)(7, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 26)(11, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 25)(15, "div", 26)(16, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SectionsComponent_div_12_div_19_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 26)(21, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "select", 35)(24, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 25)(31, "div", 26)(32, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "select", 40)(35, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, SectionsComponent_div_12_option_37_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, SectionsComponent_div_12_div_38_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 26)(40, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "textarea", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 45)(44, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_div_12_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.editingSection ? ctx_r1.cancelEdit() : ctx_r1.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_div_12_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showUserList = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_10_0;
    let tmp_16_0;
    let tmp_19_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingSection ? ctx_r1.getTranslation("editSection") : ctx_r1.getTranslation("addNewSection"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.sectionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("sectionName"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterSectionName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("sectionCode"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterSectionCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("sectionType"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx_r1.sectionForm.get("type")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.sectionForm.get("type")) == null ? null : tmp_8_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("selectSectionType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx_r1.sectionForm.get("type")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.sectionForm.get("type")) == null ? null : tmp_10_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("status"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("active"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("underConstruction"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("location"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_16_0 = ctx_r1.sectionForm.get("location")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r1.sectionForm.get("location")) == null ? null : tmp_16_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("selectLocation") || "Select Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.locations);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_19_0 = ctx_r1.sectionForm.get("location")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx_r1.sectionForm.get("location")) == null ? null : tmp_19_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterSectionDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingSection ? ctx_r1.getTranslation("cancel") : ctx_r1.getTranslation("reset"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.sectionForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingSection ? ctx_r1.getTranslation("saveChanges") : ctx_r1.getTranslation("saveSection"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("cancel"), " ");
  }
}
function SectionsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div", 53)(3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SectionsComponent_div_13_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function SectionsComponent_div_13_Template_input_input_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterSections());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 57)(7, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SectionsComponent_div_13_Template_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.selectedType, $event) || (ctx_r1.selectedType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SectionsComponent_div_13_Template_select_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterSections());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 64)(19, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SectionsComponent_div_13_Template_select_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.selectedStatus, $event) || (ctx_r1.selectedStatus = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SectionsComponent_div_13_Template_select_change_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterSections());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("searchSections"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("allTypes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("residential"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("commercial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("industrial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("mixed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("allStatuses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("active"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("underConstruction"));
  }
}
function SectionsComponent_div_14_tr_23_small_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](section_r9.description);
  }
}
function SectionsComponent_div_14_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 73)(3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div")(6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SectionsComponent_div_14_tr_23_small_8_Template, 2, 1, "small", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td")(13, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td")(18, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td")(24, "div", 79)(25, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_div_14_tr_23_Template_button_click_25_listener() {
      const section_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleSectionStatus(section_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_div_14_tr_23_Template_button_click_27_listener() {
      const section_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.editSection(section_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_div_14_tr_23_Template_button_click_29_listener() {
      const section_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.deleteSection(section_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const section_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](section_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", section_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](section_r9.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.getTypeBadgeClass(section_r9.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTypeDisplayName(section_r9.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](section_r9.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.getStatusBadgeClass(section_r9.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusDisplayName(section_r9.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](22, 14, section_r9.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](section_r9.status === "active" ? "btn-warning" : "btn-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", section_r9.status === "active" ? ctx_r1.getTranslation("deactivate") : ctx_r1.getTranslation("activate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r1.getTranslation("edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r1.getTranslation("delete"));
  }
}
function SectionsComponent_div_14_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noSectionsFound"));
  }
}
function SectionsComponent_div_14_div_25_li_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 98)(1, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_div_14_div_25_li_24_Template_button_click_1_listener() {
      const page_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(page_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", page_r12 === ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", page_r12, " ");
  }
}
function SectionsComponent_div_14_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 87)(1, "div", 88)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 89)(5, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SectionsComponent_div_14_div_25_Template_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.itemsPerPage, $event) || (ctx_r1.itemsPerPage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SectionsComponent_div_14_div_25_Template_select_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onItemsPerPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "nav", 96)(17, "ul", 97)(18, "li", 98)(19, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_div_14_div_25_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 98)(22, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_div_14_div_25_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SectionsComponent_div_14_div_25_li_24_Template, 3, 3, "li", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li", 98)(26, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_div_14_div_25_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li", 98)(29, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionsComponent_div_14_div_25_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.totalPages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate5"](" ", ctx_r1.getTranslation("showing"), " ", (ctx_r1.currentPage - 1) * ctx_r1.itemsPerPage + 1, " - ", ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.itemsPerPage, ctx_r1.filteredSections.length), " ", ctx_r1.getTranslation("of"), " ", ctx_r1.filteredSections.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("itemsPerPage"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.itemsPerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("previous"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("first"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.getVisiblePages());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("next"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("last"), " ");
  }
}
function SectionsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 68)(5, "table", 69)(6, "thead")(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SectionsComponent_div_14_tr_23_Template, 31, 17, "tr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SectionsComponent_div_14_div_24_Template, 4, 1, "div", 71)(25, SectionsComponent_div_14_div_25_Template, 31, 24, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.getTranslation("sectionsList"), ": ", ctx_r1.filteredSections.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("location"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("createdDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedSections);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.filteredSections.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.filteredSections.length > 0);
  }
}
class SectionsComponent {
  constructor(languageService, translationService, locationService, fb) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.locationService = locationService;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.sections = [];
    this.filteredSections = [];
    this.locations = []; // Locations for dropdown
    this.searchTerm = '';
    this.selectedType = 'all';
    this.selectedStatus = 'all';
    this.showUserList = true; // Show list by default
    this.showSuccessBanner = false;
    this.editingSection = null;
    this.isLoading = false;
    this.errorMessage = '';
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
    // Pagination
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalPages = 1;
    this.paginatedSections = [];
    // Make Math accessible in template
    this.Math = Math;
    this.sectionForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      status: ['active', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadLocations(); // Load locations first
    this.loadSections();
  }
  loadLocations() {
    this.locationService.getSubsites().subscribe({
      next: locations => {
        // Filter only active locations
        this.locations = locations.filter(loc => loc.status === 'active');
      },
      error: error => {
        console.error('Error loading locations:', error);
        this.locations = [];
      }
    });
  }
  loadSections() {
    this.isLoading = true;
    this.errorMessage = '';
    this.locationService.getSections().subscribe({
      next: sections => {
        this.sections = sections;
        this.filteredSections = [...this.sections];
        this.calculatePagination();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading sections:', error);
        this.errorMessage = error.error?.error || 'Failed to load sections';
        this.isLoading = false;
        this.sections = [];
        this.filteredSections = [];
        this.calculatePagination();
      }
    });
  }
  filterSections() {
    this.filteredSections = this.sections.filter(section => {
      const matchesSearch = section.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || section.code.toLowerCase().includes(this.searchTerm.toLowerCase()) || (section.description || '').toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.selectedType === 'all' || section.type === this.selectedType;
      const matchesStatus = this.selectedStatus === 'all' || section.status === this.selectedStatus;
      return matchesSearch && matchesType && matchesStatus;
    });
    this.calculatePagination();
  }
  addSection() {
    if (this.sectionForm.valid) {
      this.saveSection();
    }
  }
  saveSection() {
    if (this.sectionForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      const formValue = this.sectionForm.value;
      const sectionData = {
        name: formValue.name,
        code: formValue.code,
        type: formValue.type,
        status: formValue.status,
        description: formValue.description,
        location: formValue.location
      };
      if (this.editingSection) {
        // Update existing section
        this.locationService.updateSection(this.editingSection.id, sectionData).subscribe({
          next: updatedSection => {
            const index = this.sections.findIndex(s => s.id === this.editingSection.id);
            if (index !== -1) {
              this.sections[index] = updatedSection;
            }
            this.showSuccessMessage();
            this.loadSections(); // Reload to get fresh data
            this.editingSection = null;
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: error => {
            console.error('Error updating section:', error);
            this.errorMessage = error.error?.error || 'Failed to update section';
            this.isLoading = false;
          }
        });
      } else {
        // Create new section
        this.locationService.createSection(sectionData).subscribe({
          next: newSection => {
            this.showSuccessMessage();
            this.loadSections(); // Reload to get fresh data
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: error => {
            console.error('Error creating section:', error);
            this.errorMessage = error.error?.error || 'Failed to create section';
            this.isLoading = false;
          }
        });
      }
    }
  }
  editSection(section) {
    this.editingSection = section;
    this.sectionForm.patchValue({
      name: section.name,
      code: section.code,
      type: section.type,
      status: section.status,
      description: section.description,
      location: section.location
    });
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Hide the section list to show the form
    this.showUserList = false;
  }
  cancelEdit() {
    this.editingSection = null;
    this.resetForm();
    this.showUserList = true;
  }
  resetForm() {
    this.sectionForm.reset({
      type: '',
      status: 'active',
      location: this.locations.length > 0 ? this.locations[0].name : ''
    });
  }
  toggleSectionStatus(section) {
    let newStatus;
    if (section.status === 'active') {
      newStatus = 'inactive';
    } else if (section.status === 'inactive') {
      newStatus = 'active';
    } else {
      newStatus = 'active';
    }
    this.locationService.updateSection(section.id, {
      name: section.name,
      code: section.code,
      type: section.type,
      status: newStatus,
      description: section.description ?? '',
      location: section.location
    }).subscribe({
      next: () => {
        this.loadSections(); // Reload to get fresh data
      },
      error: error => {
        console.error('Error updating section status:', error);
        this.errorMessage = error.error?.error || 'Failed to update section status';
      }
    });
  }
  deleteSection(id) {
    this.itemToDelete = id;
    const sectionName = this.sections.find(s => s.id === id)?.name || 'this section';
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: `${this.getTranslation('confirmDeleteMessage') || 'Are you sure you want to delete? This action cannot be undone.'} (${sectionName})`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel',
      type: 'danger'
    };
    this.showConfirmDialog = true;
  }
  onConfirmDelete() {
    if (this.itemToDelete !== null) {
      this.isLoading = true;
      this.locationService.deleteSection(this.itemToDelete).subscribe({
        next: () => {
          this.loadSections(); // Reload to get fresh data
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
        },
        error: error => {
          console.error('Error deleting section:', error);
          this.errorMessage = error.error?.error || 'Failed to delete section';
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
  showSuccessMessage() {
    this.showSuccessBanner = true;
    setTimeout(() => {
      this.showSuccessBanner = false;
    }, 3000);
  }
  // Pagination methods
  calculatePagination() {
    this.totalPages = Math.ceil(this.filteredSections.length / this.itemsPerPage);
    this.currentPage = Math.min(this.currentPage, this.totalPages);
    this.updatePaginatedSections();
  }
  updatePaginatedSections() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedSections = this.filteredSections.slice(startIndex, endIndex);
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedSections();
    }
  }
  getVisiblePages() {
    const pages = [];
    const maxVisible = 5;
    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        pages.push(1);
        for (let i = this.totalPages - 3; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(this.totalPages);
      }
    }
    return pages;
  }
  onItemsPerPageChange() {
    this.currentPage = 1;
    this.calculatePagination();
  }
  getActiveCount() {
    return this.sections.filter(s => s.status === 'active').length;
  }
  getUnderConstructionCount() {
    return this.sections.filter(s => s.status === 'under-construction').length;
  }
  getInactiveCount() {
    return this.sections.filter(s => s.status === 'inactive').length;
  }
  getTypeDisplayName(type) {
    const types = {
      residential: this.getTranslation('residential'),
      commercial: this.getTranslation('commercial'),
      industrial: this.getTranslation('industrial'),
      mixed: this.getTranslation('mixed')
    };
    return types[type] || type;
  }
  getStatusDisplayName(status) {
    const statuses = {
      active: this.getTranslation('active'),
      inactive: this.getTranslation('inactive'),
      'under-construction': this.getTranslation('underConstruction')
    };
    return statuses[status] || status;
  }
  getTypeBadgeClass(type) {
    const badgeClasses = {
      residential: 'bg-success',
      commercial: 'bg-primary',
      industrial: 'bg-warning',
      mixed: 'bg-info'
    };
    return badgeClasses[type] || 'bg-secondary';
  }
  getStatusBadgeClass(status) {
    const badgeClasses = {
      active: 'bg-success',
      inactive: 'bg-secondary',
      'under-construction': 'bg-warning'
    };
    return badgeClasses[status] || 'bg-secondary';
  }
  // Use centralized translation service
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function SectionsComponent_Factory(t) {
      return new (t || SectionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SectionsComponent,
      selectors: [["app-sections"]],
      decls: 15,
      vars: 10,
      consts: [[1, "sections-container", 3, "dir"], [3, "confirmed", "cancelled", "visible", "data"], [1, "container-fluid"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "fas", "fa-folder"], [1, "header-actions"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["class", "add-section-form", 4, "ngIf"], ["class", "filters-section", 4, "ngIf"], ["class", "sections-list", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fas", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-list"], [1, "add-section-form"], [1, "form-card"], [1, "form-title"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["for", "code"], ["type", "text", "id", "code", "formControlName", "code", 1, "form-control", 3, "placeholder"], ["for", "type"], ["type", "text", "id", "type", "formControlName", "type", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "status"], ["id", "status", "formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], ["value", "under-construction"], ["for", "location"], ["id", "location", "formControlName", "location", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "description"], ["id", "description", "formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-times"], [1, "invalid-feedback"], [3, "value"], [1, "filters-section"], [1, "filters-card"], [1, "search-filter"], [1, "search-input"], [1, "fas", "fa-search"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "type-filter"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "residential"], ["value", "commercial"], ["value", "industrial"], ["value", "mixed"], [1, "status-filter"], [1, "sections-list"], [1, "list-header"], [1, "total-count"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-4", 4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "location-avatar", "me-2"], [1, "fw-bold"], ["class", "text-muted", 4, "ngIf"], [1, "badge", "bg-info"], [1, "badge", 3, "ngClass"], ["role", "group", 1, "btn-group"], [1, "btn", "btn-sm", 3, "click"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "title"], [1, "fas", "fa-edit"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "title"], [1, "fas", "fa-trash"], [1, "text-muted"], [1, "empty-state"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-4"], [1, "pagination-info"], [1, "mt-2"], [1, "form-label", "me-2"], [1, "form-select", "form-select-sm", "d-inline-block", "w-auto", 3, "ngModelChange", "change", "ngModel"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "50"], ["aria-label", "Sections pagination"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "page-link", 3, "click"]],
      template: function SectionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-confirm-dialog", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("confirmed", function SectionsComponent_Template_app_confirm_dialog_confirmed_1_listener() {
            return ctx.onConfirmDelete();
          })("cancelled", function SectionsComponent_Template_app_confirm_dialog_cancelled_1_listener() {
            return ctx.onCancelDelete();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SectionsComponent_div_3_Template, 4, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SectionsComponent_button_10_Template, 3, 1, "button", 9)(11, SectionsComponent_button_11_Template, 3, 1, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SectionsComponent_div_12_Template, 51, 27, "div", 11)(13, SectionsComponent_div_13_Template, 28, 13, "div", 12)(14, SectionsComponent_div_14_Template, 26, 12, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.showConfirmDialog)("data", ctx.confirmDialogData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSuccessBanner);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("sections"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editingSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editingSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showUserList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showUserList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showUserList);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
      styles: [".sections-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 1.8rem;\n}\n\n.add-section-form[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 25px 0;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 8px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.filters-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.search-filter[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n}\n.search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 45px;\n  width: 100%;\n}\n\n.type-filter[_ngcontent-%COMP%], .status-filter[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.sections-list[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.list-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.total-count[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6c757d;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #adb5bd;\n  margin-bottom: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  overflow: hidden;\n  margin-bottom: 20px;\n  transition: all 0.3s ease;\n}\n.table-responsive[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8rem;\n  margin-bottom: 0;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%) !important;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  text-align: left;\n  font-weight: 600;\n  color: white !important;\n  border: none;\n  background: transparent !important;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 16px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 16px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1px;\n  height: 16px;\n  background: rgba(255, 255, 255, 0.3);\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f3f4;\n  transition: all 0.2s ease;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #fafbfc;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #e8f5e8;\n  transform: scale(1.005);\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  vertical-align: middle;\n  border: none;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 16px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 16px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .location-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: #2E7D32;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 12px;\n  margin-right: 10px;\n  transition: all 0.3s ease;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .location-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 3px 10px rgba(46, 125, 50, 0.3);\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 2px;\n  font-size: 0.85rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #00695c;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #004d40;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n.btn.btn-warning[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #212529;\n}\n.btn.btn-warning[_ngcontent-%COMP%]:hover {\n  background: #e0a800;\n}\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #00695c;\n  border: 1px solid #00695c;\n  background: transparent;\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #00695c;\n  color: white;\n}\n.btn.btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  background: transparent;\n}\n.btn.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: white;\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border: 1px solid #6c757d;\n  background: transparent;\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #6c757d;\n  color: white;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  transition: all 0.3s ease;\n}\n.badge[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.badge.bg-info[_ngcontent-%COMP%] {\n  background: #e3f2fd !important;\n  color: #1976d2 !important;\n}\n.badge.bg-success[_ngcontent-%COMP%] {\n  background: #e8f5e8 !important;\n  color: #2e7d32 !important;\n}\n.badge.bg-warning[_ngcontent-%COMP%] {\n  background: #fff8e1 !important;\n  color: #f57c00 !important;\n}\n.badge.bg-secondary[_ngcontent-%COMP%] {\n  background: #f5f5f5 !important;\n  color: #616161 !important;\n}\n.badge.bg-primary[_ngcontent-%COMP%] {\n  background: #e3f2fd !important;\n  color: #1976d2 !important;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  margin: 0 2px;\n  font-size: 0.7rem;\n  padding: 6px 12px;\n  border: 1px solid transparent;\n  transition: all 0.3s ease;\n  font-weight: 500;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  transition: all 0.3s ease;\n}\n.pagination-container[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n\n.pagination-info[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n  font-size: 0.8rem;\n}\n.pagination-info[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #495057;\n  margin-bottom: 0;\n}\n.pagination-info[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  font-size: 0.8rem;\n  padding: 6px 10px;\n  min-width: 70px;\n  transition: all 0.3s ease;\n}\n.pagination-info[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #00695c;\n  box-shadow: 0 0 0 0.2rem rgba(0, 105, 92, 0.25);\n}\n\n.pagination[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  margin: 0 2px;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  color: #495057;\n  padding: 8px 12px;\n  font-size: 0.8rem;\n  transition: all 0.3s ease;\n  font-weight: 500;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #00695c;\n  color: #00695c;\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px rgba(0, 105, 92, 0.2);\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 105, 92, 0.25);\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #00695c;\n  border-color: #00695c;\n  color: white;\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px rgba(0, 105, 92, 0.3);\n}\n.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: auto;\n  right: 15px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 45px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n@media (max-width: 1200px) {\n  .sections-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n@media (max-width: 768px) {\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    justify-content: center;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n  .filters-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-filter[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .type-filter[_ngcontent-%COMP%], .status-filter[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n@media (max-width: 480px) {\n  .sections-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .form-card[_ngcontent-%COMP%], .filters-card[_ngcontent-%COMP%], .sections-list[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbG9jYXRpb25zL2NvbXBvbmVudHMvc2VjdGlvbnMvc2VjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQUY7QUFFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUtBO0VBQ0UsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRkY7QUFJRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7QUFISjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBUUE7RUFDRSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFB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QUFBO0VBOUZKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbnMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vLyBQYWdlIEhlYWRlclxyXG4ucGFnZS1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTVweDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBtYXJnaW46IDA7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogIzAwNjk1YztcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIFNlY3Rpb24gRm9ybVxyXG4uYWRkLXNlY3Rpb24tZm9ybSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmZvcm0tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxufVxyXG5cclxuLmZvcm0tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgbWFyZ2luOiAwIDAgMjVweCAwO1xyXG59XHJcblxyXG4uZm9ybS1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEwNSwgOTIsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDE1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi8vIEZpbHRlcnMgU2VjdGlvblxyXG4uZmlsdGVycy1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZmlsdGVycy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uc2VhcmNoLWZpbHRlciB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjb2xvcjogI2FkYjViZDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi50eXBlLWZpbHRlcixcclxuLnN0YXR1cy1maWx0ZXIge1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi8vIFNlY3Rpb25zIExpc3RcclxuLnNlY3Rpb25zLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbn1cclxuXHJcbi5saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxufVxyXG5cclxuLnRvdGFsLWNvdW50IHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBjb2xvcjogI2FkYjViZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNb2Rlcm4gQ29tcGFjdCBUYWJsZSBTdHlsaW5nXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBcclxuICAgIHRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICAgICAgdHIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdGJvZHkge1xyXG4gICAgICB0ciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBcclxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZiZmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2U4ZjVlODtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubG9jYXRpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzJFN0QzMjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoNDYsIDEyNSwgNTAsIDAuMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmZ3LWJvbGQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCdXR0b24gU3R5bGluZ1xyXG4uYnRuIHtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogIzAwNjk1YztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDRkNDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzVhNjI2ODtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4tc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzIxODgzODtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4td2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTBhODAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLmJ0bi1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjODIzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXNtIHtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogIzAwNjk1YztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDY5NWM7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDY5NWM7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4tb3V0bGluZS1kYW5nZXIge1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQmFkZ2UgU3R5bGluZ1xyXG4uYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB9XHJcbiAgXHJcbiAgJi5iZy1pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6ICNlM2YyZmQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICYuYmctc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThmNWU4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzJlN2QzMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAmLmJnLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjhlMSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmNTdjMDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgJi5iZy1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM2MTYxNjEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgJi5iZy1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlM2YyZmQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCdXR0b24gR3JvdXAgU3R5bGluZ1xyXG4uYnRuLWdyb3VwIHtcclxuICAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFBhZ2luYXRpb24gU3R5bGluZ1xyXG4ucGFnaW5hdGlvbi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLWluZm8ge1xyXG4gIC50ZXh0LW11dGVkIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXNlbGVjdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEwNSwgOTIsIDAuMjUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgXHJcbiAgLnBhZ2UtaXRlbSB7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgXHJcbiAgICAucGFnZS1saW5rIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAxMDUsIDkyLCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMDUsIDkyLCAwLjI1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuICAgICAgYmFja2dyb3VuZDogIzAwNjk1YztcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDEwNSwgOTIsIDAuMyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuZGlzYWJsZWQgLnBhZ2UtbGluayB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcclxuICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5zZWFyY2gtaW5wdXQgaSB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgRGVzaWduXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuc2VjdGlvbnMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuICBcclxuICAucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZpbHRlcnMtY2FyZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtZmlsdGVyIHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnR5cGUtZmlsdGVyLFxyXG4gIC5zdGF0dXMtZmlsdGVyIHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBcclxuICAgIC5idG4ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnNlY3Rpb25zLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jYXJkLFxyXG4gIC5maWx0ZXJzLWNhcmQsXHJcbiAgLnNlY3Rpb25zLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2610:
/*!************************************************************************************************!*\
  !*** ./src/app/features/locations/components/special-divisions/special-divisions.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpecialDivisionsComponent: () => (/* binding */ SpecialDivisionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/location.service */ 3415);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 8709);








function SpecialDivisionsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpecialDivisionsComponent_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showSuccessBanner = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingDivision ? ctx_r1.getTranslation("divisionUpdatedSuccessfully") : ctx_r1.getTranslation("divisionAddedSuccessfully"), " ");
  }
}
function SpecialDivisionsComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpecialDivisionsComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showUserList = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("addSpecialDivision"), " ");
  }
}
function SpecialDivisionsComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpecialDivisionsComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showUserList = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("showDivisionsList"), " ");
  }
}
function SpecialDivisionsComponent_div_12_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("categoryRequired"), " ");
  }
}
function SpecialDivisionsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SpecialDivisionsComponent_div_12_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.saveDivision());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 25)(6, "div", 26)(7, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 26)(11, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 25)(15, "div", 26)(16, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SpecialDivisionsComponent_div_12_div_19_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 26)(21, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "select", 35)(24, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 25)(33, "div", 26)(34, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 26)(38, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 44)(42, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpecialDivisionsComponent_div_12_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.editingDivision ? ctx_r1.cancelEdit() : ctx_r1.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpecialDivisionsComponent_div_12_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showUserList = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_10_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingDivision ? ctx_r1.getTranslation("editSpecialDivision") : ctx_r1.getTranslation("addNewSpecialDivision"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.divisionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("divisionName"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterDivisionName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("divisionCode"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterDivisionCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("category"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx_r1.divisionForm.get("category")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.divisionForm.get("category")) == null ? null : tmp_8_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("selectCategory"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx_r1.divisionForm.get("category")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.divisionForm.get("category")) == null ? null : tmp_10_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("priority"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("selectPriority") || "Select Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("high"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("low"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("location"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterLocation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterDivisionDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingDivision ? ctx_r1.getTranslation("cancel") : ctx_r1.getTranslation("reset"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.divisionForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingDivision ? ctx_r1.getTranslation("saveChanges") : ctx_r1.getTranslation("saveDivision"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("cancel"), " ");
  }
}
function SpecialDivisionsComponent_div_13_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const location_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", location_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](location_r7);
  }
}
function SpecialDivisionsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "div", 51)(3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SpecialDivisionsComponent_div_13_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function SpecialDivisionsComponent_div_13_Template_input_input_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterDivisions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 55)(7, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SpecialDivisionsComponent_div_13_Template_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.selectedCategory, $event) || (ctx_r1.selectedCategory = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SpecialDivisionsComponent_div_13_Template_select_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterDivisions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 63)(21, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SpecialDivisionsComponent_div_13_Template_select_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.selectedPriority, $event) || (ctx_r1.selectedPriority = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SpecialDivisionsComponent_div_13_Template_select_change_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterDivisions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 64)(31, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SpecialDivisionsComponent_div_13_Template_select_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.selectedLocation, $event) || (ctx_r1.selectedLocation = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SpecialDivisionsComponent_div_13_Template_select_change_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterDivisions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, SpecialDivisionsComponent_div_13_option_34_Template, 2, 2, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("searchDivisions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("allCategories"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("government"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("educational"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("healthcare"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("religious"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("recreational"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedPriority);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("allPriorities"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("high"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("low"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("allLocations"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.getUniqueLocations());
  }
}
function SpecialDivisionsComponent_div_14_tr_23_small_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const division_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](division_r9.description);
  }
}
function SpecialDivisionsComponent_div_14_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 75)(3, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div")(6, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SpecialDivisionsComponent_div_14_tr_23_small_8_Template, 2, 1, "small", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td")(13, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td")(16, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td")(24, "div", 81)(25, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpecialDivisionsComponent_div_14_tr_23_Template_button_click_25_listener() {
      const division_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.editDivision(division_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpecialDivisionsComponent_div_14_tr_23_Template_button_click_27_listener() {
      const division_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.deleteDivision(division_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const division_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](division_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", division_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](division_r9.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.getCategoryBadgeClass(division_r9.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getCategoryDisplayName(division_r9.category), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.getPriorityBadgeClass(division_r9.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getPriorityDisplayName(division_r9.priority), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](division_r9.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](22, 11, division_r9.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r1.getTranslation("edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r1.getTranslation("delete"));
  }
}
function SpecialDivisionsComponent_div_14_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noDivisionsFound"));
  }
}
function SpecialDivisionsComponent_div_14_div_25_li_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 99)(1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpecialDivisionsComponent_div_14_div_25_li_24_Template_button_click_1_listener() {
      const page_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(page_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", page_r12 === ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", page_r12, " ");
  }
}
function SpecialDivisionsComponent_div_14_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 88)(1, "div", 89)(2, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 90)(5, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SpecialDivisionsComponent_div_14_div_25_Template_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.itemsPerPage, $event) || (ctx_r1.itemsPerPage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SpecialDivisionsComponent_div_14_div_25_Template_select_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onItemsPerPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "nav", 97)(17, "ul", 98)(18, "li", 99)(19, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpecialDivisionsComponent_div_14_div_25_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 99)(22, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpecialDivisionsComponent_div_14_div_25_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SpecialDivisionsComponent_div_14_div_25_li_24_Template, 3, 3, "li", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li", 99)(26, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpecialDivisionsComponent_div_14_div_25_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li", 99)(29, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpecialDivisionsComponent_div_14_div_25_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.totalPages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate5"](" ", ctx_r1.getTranslation("showing"), " ", (ctx_r1.currentPage - 1) * ctx_r1.itemsPerPage + 1, " - ", ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.itemsPerPage, ctx_r1.filteredDivisions.length), " ", ctx_r1.getTranslation("of"), " ", ctx_r1.filteredDivisions.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("itemsPerPage"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.itemsPerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("previous"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("first"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.getVisiblePages());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("next"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("last"), " ");
  }
}
function SpecialDivisionsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 67)(1, "div", 68)(2, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 70)(5, "table", 71)(6, "thead")(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SpecialDivisionsComponent_div_14_tr_23_Template, 29, 14, "tr", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SpecialDivisionsComponent_div_14_div_24_Template, 4, 1, "div", 73)(25, SpecialDivisionsComponent_div_14_div_25_Template, 31, 24, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.getTranslation("specialDivisionsList"), ": ", ctx_r1.filteredDivisions.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("category"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("priority"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("location"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("createdDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedDivisions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.filteredDivisions.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.filteredDivisions.length > 0);
  }
}
class SpecialDivisionsComponent {
  constructor(languageService, translationService, locationService, fb) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.locationService = locationService;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.divisions = [];
    this.filteredDivisions = [];
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.selectedPriority = 'all';
    this.selectedLocation = 'all';
    this.showUserList = true; // Show list by default
    this.showSuccessBanner = false;
    this.editingDivision = null;
    this.isLoading = false;
    this.errorMessage = '';
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
    // Pagination
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalPages = 1;
    this.paginatedDivisions = [];
    // Make Math accessible in template
    this.Math = Math;
    this.divisionForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      location: ['المنطقة الجديدة', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadDivisions();
  }
  loadDivisions() {
    this.isLoading = true;
    this.errorMessage = '';
    this.locationService.getSpecialDivisions().subscribe({
      next: divisions => {
        this.divisions = divisions;
        this.filteredDivisions = [...this.divisions];
        this.calculatePagination();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading special divisions:', error);
        this.errorMessage = error.error?.error || 'Failed to load special divisions';
        this.isLoading = false;
        this.divisions = [];
        this.filteredDivisions = [];
        this.calculatePagination();
      }
    });
  }
  getUniqueLocations() {
    const locations = this.divisions.map(d => d.location).filter((location, index, self) => location && self.indexOf(location) === index).sort();
    return locations;
  }
  filterDivisions() {
    this.filteredDivisions = this.divisions.filter(division => {
      const matchesSearch = division.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || division.code.toLowerCase().includes(this.searchTerm.toLowerCase()) || (division.description || '').toLowerCase().includes(this.searchTerm.toLowerCase()) || division.location.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || division.category === this.selectedCategory;
      const matchesPriority = this.selectedPriority === 'all' || division.priority === this.selectedPriority;
      const matchesLocation = this.selectedLocation === 'all' || division.location === this.selectedLocation;
      return matchesSearch && matchesCategory && matchesPriority && matchesLocation;
    });
    this.calculatePagination();
  }
  addDivision() {
    if (this.divisionForm.valid) {
      this.saveDivision();
    }
  }
  saveDivision() {
    if (this.divisionForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      const formValue = this.divisionForm.value;
      const divisionData = {
        name: formValue.name,
        code: formValue.code,
        category: formValue.category,
        priority: formValue.priority,
        description: formValue.description,
        location: formValue.location
      };
      if (this.editingDivision) {
        // Update existing division
        this.locationService.updateSpecialDivision(this.editingDivision.id, divisionData).subscribe({
          next: updatedDivision => {
            const index = this.divisions.findIndex(d => d.id === this.editingDivision.id);
            if (index !== -1) {
              this.divisions[index] = updatedDivision;
            }
            this.showSuccessMessage();
            this.loadDivisions(); // Reload to get fresh data
            this.editingDivision = null;
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: error => {
            console.error('Error updating special division:', error);
            this.errorMessage = error.error?.error || 'Failed to update special division';
            this.isLoading = false;
          }
        });
      } else {
        // Create new division
        this.locationService.createSpecialDivision(divisionData).subscribe({
          next: newDivision => {
            this.showSuccessMessage();
            this.loadDivisions(); // Reload to get fresh data
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: error => {
            console.error('Error creating special division:', error);
            this.errorMessage = error.error?.error || 'Failed to create special division';
            this.isLoading = false;
          }
        });
      }
    }
  }
  editDivision(division) {
    this.editingDivision = division;
    this.divisionForm.patchValue({
      name: division.name,
      code: division.code,
      category: division.category,
      priority: division.priority,
      description: division.description,
      location: division.location
    });
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Hide the division list to show the form
    this.showUserList = false;
  }
  cancelEdit() {
    this.editingDivision = null;
    this.resetForm();
    this.showUserList = true;
  }
  resetForm() {
    this.divisionForm.reset({
      category: '',
      priority: '',
      location: 'المنطقة الجديدة'
    });
  }
  deleteDivision(id) {
    this.itemToDelete = id;
    const divisionName = this.divisions.find(d => d.id === id)?.name || 'this special division';
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: `${this.getTranslation('confirmDeleteMessage') || 'Are you sure you want to delete? This action cannot be undone.'} (${divisionName})`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel',
      type: 'danger'
    };
    this.showConfirmDialog = true;
  }
  onConfirmDelete() {
    if (this.itemToDelete !== null) {
      this.isLoading = true;
      this.locationService.deleteSpecialDivision(this.itemToDelete).subscribe({
        next: () => {
          this.loadDivisions(); // Reload to get fresh data
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
        },
        error: error => {
          console.error('Error deleting special division:', error);
          this.errorMessage = error.error?.error || 'Failed to delete special division';
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
  showSuccessMessage() {
    this.showSuccessBanner = true;
    setTimeout(() => {
      this.showSuccessBanner = false;
    }, 3000);
  }
  // Pagination methods
  calculatePagination() {
    this.totalPages = Math.ceil(this.filteredDivisions.length / this.itemsPerPage);
    this.currentPage = Math.min(this.currentPage, this.totalPages);
    this.updatePaginatedDivisions();
  }
  updatePaginatedDivisions() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDivisions = this.filteredDivisions.slice(startIndex, endIndex);
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedDivisions();
    }
  }
  getVisiblePages() {
    const pages = [];
    const maxVisible = 5;
    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        pages.push(1);
        for (let i = this.totalPages - 3; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(this.totalPages);
      }
    }
    return pages;
  }
  onItemsPerPageChange() {
    this.currentPage = 1;
    this.calculatePagination();
  }
  getHighPriorityCount() {
    return this.divisions.filter(d => d.priority === 'high').length;
  }
  getMediumPriorityCount() {
    return this.divisions.filter(d => d.priority === 'medium').length;
  }
  getLowPriorityCount() {
    return this.divisions.filter(d => d.priority === 'low').length;
  }
  getCategoryDisplayName(category) {
    const categories = {
      government: this.getTranslation('government'),
      educational: this.getTranslation('educational'),
      healthcare: this.getTranslation('healthcare'),
      religious: this.getTranslation('religious'),
      recreational: this.getTranslation('recreational')
    };
    return categories[category] || category;
  }
  getPriorityDisplayName(priority) {
    const priorities = {
      high: this.getTranslation('high'),
      medium: this.getTranslation('medium'),
      low: this.getTranslation('low')
    };
    return priorities[priority] || priority;
  }
  getCategoryBadgeClass(category) {
    const badgeClasses = {
      government: 'bg-primary',
      educational: 'bg-success',
      healthcare: 'bg-danger',
      religious: 'bg-warning',
      recreational: 'bg-info'
    };
    return badgeClasses[category] || 'bg-secondary';
  }
  getPriorityBadgeClass(priority) {
    const badgeClasses = {
      high: 'bg-danger',
      medium: 'bg-warning',
      low: 'bg-info'
    };
    return badgeClasses[priority] || 'bg-secondary';
  }
  getPriorityClass(priority) {
    const priorityClasses = {
      high: 'priority-high',
      medium: 'priority-medium',
      low: 'priority-low'
    };
    return priorityClasses[priority] || '';
  }
  // Use centralized translation service
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function SpecialDivisionsComponent_Factory(t) {
      return new (t || SpecialDivisionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SpecialDivisionsComponent,
      selectors: [["app-special-divisions"]],
      decls: 15,
      vars: 10,
      consts: [[1, "special-divisions-container", 3, "dir"], [3, "confirmed", "cancelled", "visible", "data"], [1, "container-fluid"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "fas", "fa-folder-open"], [1, "header-actions"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["class", "add-division-form", 4, "ngIf"], ["class", "filters-section", 4, "ngIf"], ["class", "divisions-list", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fas", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-list"], [1, "add-division-form"], [1, "form-card"], [1, "form-title"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["for", "code"], ["type", "text", "id", "code", "formControlName", "code", 1, "form-control", 3, "placeholder"], ["for", "category"], ["type", "text", "id", "category", "formControlName", "category", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "priority"], ["id", "priority", "formControlName", "priority", 1, "form-control"], ["value", ""], ["value", "high"], ["value", "medium"], ["value", "low"], ["for", "location"], ["type", "text", "id", "location", "formControlName", "location", 1, "form-control", 3, "placeholder"], ["for", "description"], ["id", "description", "formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-times"], [1, "invalid-feedback"], [1, "filters-section"], [1, "filters-card"], [1, "search-filter"], [1, "search-input"], [1, "fas", "fa-search"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "category-filter"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "government"], ["value", "educational"], ["value", "healthcare"], ["value", "religious"], ["value", "recreational"], [1, "priority-filter"], [1, "location-filter"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "divisions-list"], [1, "list-header"], [1, "total-count"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-4", 4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "location-avatar", "me-2"], [1, "fw-bold"], ["class", "text-muted", 4, "ngIf"], [1, "badge", "bg-info"], [1, "badge", 3, "ngClass"], ["role", "group", 1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "title"], [1, "fas", "fa-edit"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "title"], [1, "fas", "fa-trash"], [1, "text-muted"], [1, "empty-state"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-4"], [1, "pagination-info"], [1, "mt-2"], [1, "form-label", "me-2"], [1, "form-select", "form-select-sm", "d-inline-block", "w-auto", 3, "ngModelChange", "change", "ngModel"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "50"], ["aria-label", "Special Divisions pagination"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "page-link", 3, "click"]],
      template: function SpecialDivisionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-confirm-dialog", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("confirmed", function SpecialDivisionsComponent_Template_app_confirm_dialog_confirmed_1_listener() {
            return ctx.onConfirmDelete();
          })("cancelled", function SpecialDivisionsComponent_Template_app_confirm_dialog_cancelled_1_listener() {
            return ctx.onCancelDelete();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SpecialDivisionsComponent_div_3_Template, 4, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SpecialDivisionsComponent_button_10_Template, 3, 1, "button", 9)(11, SpecialDivisionsComponent_button_11_Template, 3, 1, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SpecialDivisionsComponent_div_12_Template, 49, 24, "div", 11)(13, SpecialDivisionsComponent_div_13_Template, 35, 17, "div", 12)(14, SpecialDivisionsComponent_div_14_Template, 26, 12, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.showConfirmDialog)("data", ctx.confirmDialogData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSuccessBanner);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("specialDivisions"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editingDivision);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editingDivision);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showUserList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showUserList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showUserList);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
      styles: [".special-divisions-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 1.8rem;\n}\n\n.add-division-form[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 25px 0;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 8px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.filters-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.search-filter[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n}\n.search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 45px;\n  width: 100%;\n}\n\n.category-filter[_ngcontent-%COMP%], .priority-filter[_ngcontent-%COMP%], .location-filter[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.divisions-list[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.list-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.total-count[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6c757d;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #adb5bd;\n  margin-bottom: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  overflow: hidden;\n  margin-bottom: 20px;\n  transition: all 0.3s ease;\n}\n.table-responsive[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8rem;\n  margin-bottom: 0;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%) !important;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  text-align: left;\n  font-weight: 600;\n  color: white !important;\n  border: none;\n  background: transparent !important;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 16px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 16px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1px;\n  height: 16px;\n  background: rgba(255, 255, 255, 0.3);\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f3f4;\n  transition: all 0.2s ease;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #fafbfc;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #e8f5e8;\n  transform: scale(1.005);\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  vertical-align: middle;\n  border: none;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 16px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 16px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .location-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: #2E7D32;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 12px;\n  margin-right: 10px;\n  transition: all 0.3s ease;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .location-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 3px 10px rgba(46, 125, 50, 0.3);\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 2px;\n  font-size: 0.85rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #00695c;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #004d40;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n.btn.btn-warning[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #212529;\n}\n.btn.btn-warning[_ngcontent-%COMP%]:hover {\n  background: #e0a800;\n}\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #00695c;\n  border: 1px solid #00695c;\n  background: transparent;\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #00695c;\n  color: white;\n}\n.btn.btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  background: transparent;\n}\n.btn.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: white;\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border: 1px solid #6c757d;\n  background: transparent;\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #6c757d;\n  color: white;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  transition: all 0.3s ease;\n}\n.badge[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.badge.bg-info[_ngcontent-%COMP%] {\n  background: #e3f2fd !important;\n  color: #1976d2 !important;\n}\n.badge.bg-success[_ngcontent-%COMP%] {\n  background: #e8f5e8 !important;\n  color: #2e7d32 !important;\n}\n.badge.bg-warning[_ngcontent-%COMP%] {\n  background: #fff8e1 !important;\n  color: #f57c00 !important;\n}\n.badge.bg-secondary[_ngcontent-%COMP%] {\n  background: #f5f5f5 !important;\n  color: #616161 !important;\n}\n.badge.bg-primary[_ngcontent-%COMP%] {\n  background: #e3f2fd !important;\n  color: #1976d2 !important;\n}\n.badge.bg-danger[_ngcontent-%COMP%] {\n  background: #ffebee !important;\n  color: #c62828 !important;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  margin: 0 2px;\n  font-size: 0.7rem;\n  padding: 6px 12px;\n  border: 1px solid transparent;\n  transition: all 0.3s ease;\n  font-weight: 500;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  transition: all 0.3s ease;\n}\n.pagination-container[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n\n.pagination-info[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n  font-size: 0.8rem;\n}\n.pagination-info[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #495057;\n  margin-bottom: 0;\n}\n.pagination-info[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  font-size: 0.8rem;\n  padding: 6px 10px;\n  min-width: 70px;\n  transition: all 0.3s ease;\n}\n.pagination-info[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #00695c;\n  box-shadow: 0 0 0 0.2rem rgba(0, 105, 92, 0.25);\n}\n\n.pagination[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  margin: 0 2px;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  color: #495057;\n  padding: 8px 12px;\n  font-size: 0.8rem;\n  transition: all 0.3s ease;\n  font-weight: 500;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #00695c;\n  color: #00695c;\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px rgba(0, 105, 92, 0.2);\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 105, 92, 0.25);\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #00695c;\n  border-color: #00695c;\n  color: white;\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px rgba(0, 105, 92, 0.3);\n}\n.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: auto;\n  right: 15px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 45px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n@media (max-width: 1200px) {\n  .special-divisions-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n@media (max-width: 768px) {\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    justify-content: center;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n  .filters-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-filter[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .category-filter[_ngcontent-%COMP%], .priority-filter[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n@media (max-width: 480px) {\n  .special-divisions-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .form-card[_ngcontent-%COMP%], .filters-card[_ngcontent-%COMP%], .divisions-list[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbG9jYXRpb25zL2NvbXBvbmVudHMvc3BlY2lhbC1kaXZpc2lvbnMvc3BlY2lhbC1kaXZpc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQUY7QUFFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUtBO0VBQ0UsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRkY7QUFJRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7QUFISjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBUUE7RUFDRSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtF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O0lBR0UsYUFBQTtFQTlGRjtFQWlHQTtJQUNFLGlCQUFBO0VBL0ZGO0VBaUdFO0lBQ0UsaUJBQUE7RUEvRko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVjaWFsLWRpdmlzaW9ucy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8vIFBhZ2UgSGVhZGVyXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbjogMDtcclxuICBcclxuICBpIHtcclxuICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgRGl2aXNpb24gRm9ybVxyXG4uYWRkLWRpdmlzaW9uLWZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbn1cclxuXHJcbi5mb3JtLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbjogMCAwIDI1cHggMDtcclxufVxyXG5cclxuLmZvcm0tcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdhcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IDEycHggMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2FkYjViZDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4vLyBGaWx0ZXJzIFNlY3Rpb25cclxuLmZpbHRlcnMtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmZpbHRlcnMtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnNlYXJjaC1maWx0ZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gIGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICNhZGI1YmQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2F0ZWdvcnktZmlsdGVyLFxyXG4ucHJpb3JpdHktZmlsdGVyLFxyXG4ubG9jYXRpb24tZmlsdGVyIHtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4vLyBEaXZpc2lvbnMgTGlzdFxyXG4uZGl2aXNpb25zLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbn1cclxuXHJcbi5saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxufVxyXG5cclxuLnRvdGFsLWNvdW50IHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBjb2xvcjogI2FkYjViZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNb2Rlcm4gQ29tcGFjdCBUYWJsZSBTdHlsaW5nXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBcclxuICAgIHRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICAgICAgdHIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdGJvZHkge1xyXG4gICAgICB0ciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBcclxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZiZmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2U4ZjVlODtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubG9jYXRpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzJFN0QzMjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoNDYsIDEyNSwgNTAsIDAuMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmZ3LWJvbGQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCdXR0b24gU3R5bGluZ1xyXG4uYnRuIHtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogIzAwNjk1YztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDRkNDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzVhNjI2ODtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4tc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzIxODgzODtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4td2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTBhODAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLmJ0bi1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjODIzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXNtIHtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogIzAwNjk1YztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDY5NWM7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDY5NWM7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4tb3V0bGluZS1kYW5nZXIge1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQmFkZ2UgU3R5bGluZ1xyXG4uYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB9XHJcbiAgXHJcbiAgJi5iZy1pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6ICNlM2YyZmQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICYuYmctc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThmNWU4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzJlN2QzMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAmLmJnLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjhlMSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmNTdjMDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgJi5iZy1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM2MTYxNjEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgJi5iZy1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlM2YyZmQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICYuYmctZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmViZWUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjYzYyODI4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCdXR0b24gR3JvdXAgU3R5bGluZ1xyXG4uYnRuLWdyb3VwIHtcclxuICAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFBhZ2luYXRpb24gU3R5bGluZ1xyXG4ucGFnaW5hdGlvbi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLWluZm8ge1xyXG4gIC50ZXh0LW11dGVkIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXNlbGVjdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEwNSwgOTIsIDAuMjUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgXHJcbiAgLnBhZ2UtaXRlbSB7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgXHJcbiAgICAucGFnZS1saW5rIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAxMDUsIDkyLCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMDUsIDkyLCAwLjI1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuICAgICAgYmFja2dyb3VuZDogIzAwNjk1YztcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDEwNSwgOTIsIDAuMyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuZGlzYWJsZWQgLnBhZ2UtbGluayB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcclxuICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5zZWFyY2gtaW5wdXQgaSB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgRGVzaWduXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuc3BlY2lhbC1kaXZpc2lvbnMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuICBcclxuICAucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZpbHRlcnMtY2FyZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtZmlsdGVyIHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmNhdGVnb3J5LWZpbHRlcixcclxuICAucHJpb3JpdHktZmlsdGVyIHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBcclxuICAgIC5idG4ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnNwZWNpYWwtZGl2aXNpb25zLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jYXJkLFxyXG4gIC5maWx0ZXJzLWNhcmQsXHJcbiAgLmRpdmlzaW9ucy1saXN0IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7294:
/*!****************************************************************************************!*\
  !*** ./src/app/features/locations/components/sub-locations/sub-locations.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubLocationsComponent: () => (/* binding */ SubLocationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/location.service */ 3415);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 8709);








function SubLocationsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showSuccessBanner = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingLocation ? ctx_r1.getTranslation("locationUpdatedSuccessfully") : ctx_r1.getTranslation("locationAddedSuccessfully"), " ");
  }
}
function SubLocationsComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showUserList = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("addNewLocation"), " ");
  }
}
function SubLocationsComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showUserList = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("showLocationsList"), " ");
  }
}
function SubLocationsComponent_div_12_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("locationTypeRequired") || "Location type is required", " ");
  }
}
function SubLocationsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SubLocationsComponent_div_12_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.saveLocation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 25)(6, "div", 26)(7, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 26)(11, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 25)(15, "div", 26)(16, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SubLocationsComponent_div_12_div_19_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 26)(21, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "select", 35)(24, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 38)(29, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_div_12_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.editingLocation ? ctx_r1.cancelEdit() : ctx_r1.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_div_12_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showUserList = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_10_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingLocation ? ctx_r1.getTranslation("editLocation") : ctx_r1.getTranslation("addNewLocation"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.locationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("locationName"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterLocationName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("address"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterAddress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("locationType"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx_r1.locationForm.get("type")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.locationForm.get("type")) == null ? null : tmp_8_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("selectLocationType") || "Enter location type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx_r1.locationForm.get("type")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.locationForm.get("type")) == null ? null : tmp_10_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("status"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("active"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingLocation ? ctx_r1.getTranslation("cancel") : ctx_r1.getTranslation("reset"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.locationForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingLocation ? ctx_r1.getTranslation("saveChanges") : ctx_r1.getTranslation("addLocation"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("cancel"), " ");
  }
}
function SubLocationsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SubLocationsComponent_div_13_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function SubLocationsComponent_div_13_Template_input_input_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterLocations());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 49)(7, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SubLocationsComponent_div_13_Template_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.selectedStatus, $event) || (ctx_r1.selectedStatus = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SubLocationsComponent_div_13_Template_select_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterLocations());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("searchLocations"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("allStatuses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("active"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("inactive"));
  }
}
function SubLocationsComponent_div_14_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 60)(3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td")(13, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td")(19, "div", 64)(20, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_div_14_tr_21_Template_button_click_20_listener() {
      const location_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleLocationStatus(location_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_div_14_tr_21_Template_button_click_22_listener() {
      const location_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.editLocation(location_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_div_14_tr_21_Template_button_click_24_listener() {
      const location_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.deleteLocation(location_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const location_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](location_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](location_r8.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.getTypeBadgeClass(location_r8.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTypeDisplayName(location_r8.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.getStatusBadgeClass(location_r8.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusDisplayName(location_r8.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 12, location_r8.updatedAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](location_r8.status === "active" ? "btn-warning" : "btn-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", location_r8.status === "active" ? ctx_r1.getTranslation("deactivate") : ctx_r1.getTranslation("activate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r1.getTranslation("edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r1.getTranslation("delete"));
  }
}
function SubLocationsComponent_div_14_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noLocationsFound"));
  }
}
function SubLocationsComponent_div_14_div_23_li_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 83)(1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_div_14_div_23_li_24_Template_button_click_1_listener() {
      const page_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(page_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", page_r11 === ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", page_r11, " ");
  }
}
function SubLocationsComponent_div_14_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71)(1, "div", 72)(2, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 74)(5, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SubLocationsComponent_div_14_div_23_Template_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.itemsPerPage, $event) || (ctx_r1.itemsPerPage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SubLocationsComponent_div_14_div_23_Template_select_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onItemsPerPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "nav", 81)(17, "ul", 82)(18, "li", 83)(19, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_div_14_div_23_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 83)(22, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_div_14_div_23_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SubLocationsComponent_div_14_div_23_li_24_Template, 3, 3, "li", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li", 83)(26, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_div_14_div_23_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li", 83)(29, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubLocationsComponent_div_14_div_23_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.totalPages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate5"](" ", ctx_r1.getTranslation("showing"), " ", (ctx_r1.currentPage - 1) * ctx_r1.itemsPerPage + 1, " - ", ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.itemsPerPage, ctx_r1.filteredLocations.length), " ", ctx_r1.getTranslation("of"), " ", ctx_r1.filteredLocations.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("itemsPerPage"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.itemsPerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("previous"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("first"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.getVisiblePages());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("next"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("last"), " ");
  }
}
function SubLocationsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 52)(1, "div", 53)(2, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 55)(5, "table", 56)(6, "thead")(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, SubLocationsComponent_div_14_tr_21_Template, 26, 15, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, SubLocationsComponent_div_14_div_22_Template, 4, 1, "div", 58)(23, SubLocationsComponent_div_14_div_23_Template, 31, 24, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.getTranslation("totalLocations"), ": ", ctx_r1.filteredLocations.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("lastUpdated"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedLocations);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.filteredLocations.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.filteredLocations.length > 0);
  }
}
class SubLocationsComponent {
  constructor(languageService, translationService, locationService, fb) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.locationService = locationService;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.locations = [];
    this.filteredLocations = [];
    this.searchTerm = '';
    this.selectedStatus = 'all';
    this.showUserList = true; // Show list by default
    this.showSuccessBanner = false;
    this.editingLocation = null;
    this.isLoading = false;
    this.errorMessage = '';
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
    // Pagination
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalPages = 1;
    this.paginatedLocations = [];
    // Make Math accessible in template
    this.Math = Math;
    this.locationForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      status: ['active', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadLocations();
  }
  loadLocations() {
    this.isLoading = true;
    this.errorMessage = '';
    this.locationService.getSubsites().subscribe({
      next: subsites => {
        this.locations = subsites;
        this.filteredLocations = [...this.locations];
        this.calculatePagination();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading subsites:', error);
        this.errorMessage = error.error?.error || 'Failed to load locations';
        this.isLoading = false;
        this.locations = [];
        this.filteredLocations = [];
        this.calculatePagination();
      }
    });
  }
  filterLocations() {
    this.filteredLocations = this.locations.filter(location => {
      const matchesSearch = location.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || location.address.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.selectedStatus === 'all' || location.status === this.selectedStatus;
      return matchesSearch && matchesStatus;
    });
    this.calculatePagination();
  }
  addLocation() {
    if (this.locationForm.valid) {
      this.saveLocation();
    }
  }
  saveLocation() {
    if (this.locationForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      const formValue = this.locationForm.value;
      const locationData = {
        name: formValue.name,
        address: formValue.address,
        type: formValue.type,
        status: formValue.status
      };
      if (this.editingLocation) {
        // Update existing location
        this.locationService.updateSubsite(this.editingLocation.id, locationData).subscribe({
          next: updatedLocation => {
            const index = this.locations.findIndex(l => l.id === this.editingLocation.id);
            if (index !== -1) {
              this.locations[index] = updatedLocation;
            }
            this.showSuccessMessage();
            this.loadLocations(); // Reload to get fresh data
            this.editingLocation = null;
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: error => {
            console.error('Error updating location:', error);
            this.errorMessage = error.error?.error || 'Failed to update location';
            this.isLoading = false;
          }
        });
      } else {
        // Create new location
        this.locationService.createSubsite(locationData).subscribe({
          next: newLocation => {
            this.showSuccessMessage();
            this.loadLocations(); // Reload to get fresh data
            this.resetForm();
            this.showUserList = true;
            this.isLoading = false;
          },
          error: error => {
            console.error('Error creating location:', error);
            this.errorMessage = error.error?.error || 'Failed to create location';
            this.isLoading = false;
          }
        });
      }
    }
  }
  editLocation(location) {
    this.editingLocation = location;
    this.locationForm.patchValue({
      name: location.name,
      address: location.address,
      type: location.type,
      status: location.status
    });
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Hide the location list to show the form
    this.showUserList = false;
  }
  cancelEdit() {
    this.editingLocation = null;
    this.resetForm();
    this.showUserList = true;
  }
  resetForm() {
    this.locationForm.reset({
      type: '',
      status: 'active'
    });
  }
  toggleLocationStatus(location) {
    const newStatus = location.status === 'active' ? 'inactive' : 'active';
    this.locationService.updateSubsite(location.id, {
      name: location.name,
      address: location.address,
      type: location.type,
      status: newStatus
    }).subscribe({
      next: () => {
        this.loadLocations(); // Reload to get fresh data
      },
      error: error => {
        console.error('Error updating location status:', error);
        this.errorMessage = error.error?.error || 'Failed to update location status';
      }
    });
  }
  deleteLocation(id) {
    this.itemToDelete = id;
    const locationName = this.locations.find(l => l.id === id)?.name || 'this location';
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: `${this.getTranslation('confirmDeleteMessage') || 'Are you sure you want to delete? This action cannot be undone.'} (${locationName})`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel',
      type: 'danger'
    };
    this.showConfirmDialog = true;
  }
  onConfirmDelete() {
    if (this.itemToDelete !== null) {
      this.isLoading = true;
      this.locationService.deleteSubsite(this.itemToDelete).subscribe({
        next: () => {
          this.loadLocations(); // Reload to get fresh data
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
        },
        error: error => {
          console.error('Error deleting location:', error);
          this.errorMessage = error.error?.error || 'Failed to delete location';
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
  showSuccessMessage() {
    this.showSuccessBanner = true;
    setTimeout(() => {
      this.showSuccessBanner = false;
    }, 3000);
  }
  // Pagination methods
  calculatePagination() {
    this.totalPages = Math.ceil(this.filteredLocations.length / this.itemsPerPage);
    this.currentPage = Math.min(this.currentPage, this.totalPages);
    this.updatePaginatedLocations();
  }
  updatePaginatedLocations() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedLocations = this.filteredLocations.slice(startIndex, endIndex);
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedLocations();
    }
  }
  getVisiblePages() {
    const pages = [];
    const maxVisible = 5;
    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        pages.push(1);
        for (let i = this.totalPages - 3; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(this.totalPages);
      }
    }
    return pages;
  }
  onItemsPerPageChange() {
    this.currentPage = 1;
    this.calculatePagination();
  }
  getTypeDisplayName(type) {
    const types = {
      'main-center': this.getTranslation('mainCenter'),
      'branch': this.getTranslation('branch'),
      'office': this.getTranslation('office')
    };
    return types[type] || type;
  }
  getStatusDisplayName(status) {
    const statuses = {
      active: this.getTranslation('active'),
      inactive: this.getTranslation('inactive')
    };
    return statuses[status] || status;
  }
  getTypeBadgeClass(type) {
    const badgeClasses = {
      'main-center': 'bg-primary',
      'branch': 'bg-success',
      'office': 'bg-info'
    };
    return badgeClasses[type] || 'bg-secondary';
  }
  getStatusBadgeClass(status) {
    const badgeClasses = {
      active: 'bg-success',
      inactive: 'bg-secondary'
    };
    return badgeClasses[status] || 'bg-secondary';
  }
  // Use centralized translation service
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function SubLocationsComponent_Factory(t) {
      return new (t || SubLocationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SubLocationsComponent,
      selectors: [["app-sub-locations"]],
      decls: 15,
      vars: 10,
      consts: [[1, "sub-locations-container", 3, "dir"], [3, "confirmed", "cancelled", "visible", "data"], [1, "container-fluid"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "fas", "fa-map-marker-alt"], [1, "header-actions"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["class", "add-location-form", 4, "ngIf"], ["class", "filters-section", 4, "ngIf"], ["class", "locations-list", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fas", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-list"], [1, "add-location-form"], [1, "form-card"], [1, "form-title"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["for", "address"], ["type", "text", "id", "address", "formControlName", "address", 1, "form-control", 3, "placeholder"], ["for", "type"], ["type", "text", "id", "type", "formControlName", "type", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "status"], ["id", "status", "formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-times"], [1, "invalid-feedback"], [1, "filters-section"], [1, "filters-card"], [1, "search-filter"], [1, "search-input"], [1, "fas", "fa-search"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "status-filter"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], [1, "locations-list"], [1, "list-header"], [1, "total-count"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-4", 4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "location-avatar", "me-2"], [1, "fw-bold"], [1, "badge", 3, "ngClass"], ["role", "group", 1, "btn-group"], [1, "btn", "btn-sm", 3, "click"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "title"], [1, "fas", "fa-edit"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "title"], [1, "fas", "fa-trash"], [1, "empty-state"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-4"], [1, "pagination-info"], [1, "text-muted"], [1, "mt-2"], [1, "form-label", "me-2"], [1, "form-select", "form-select-sm", "d-inline-block", "w-auto", 3, "ngModelChange", "change", "ngModel"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "50"], ["aria-label", "Sub-locations pagination"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "page-link", 3, "click"]],
      template: function SubLocationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-confirm-dialog", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("confirmed", function SubLocationsComponent_Template_app_confirm_dialog_confirmed_1_listener() {
            return ctx.onConfirmDelete();
          })("cancelled", function SubLocationsComponent_Template_app_confirm_dialog_cancelled_1_listener() {
            return ctx.onCancelDelete();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SubLocationsComponent_div_3_Template, 4, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SubLocationsComponent_button_10_Template, 3, 1, "button", 9)(11, SubLocationsComponent_button_11_Template, 3, 1, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SubLocationsComponent_div_12_Template, 36, 18, "div", 11)(13, SubLocationsComponent_div_13_Template, 14, 6, "div", 12)(14, SubLocationsComponent_div_14_Template, 24, 11, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.showConfirmDialog)("data", ctx.confirmDialogData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSuccessBanner);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("subLocations"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editingLocation);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editingLocation);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showUserList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showUserList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showUserList);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
      styles: [".sub-locations-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 1.8rem;\n}\n\n.add-location-form[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 25px 0;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 8px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.filters-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.search-filter[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n}\n.search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 45px;\n  width: 100%;\n}\n\n.status-filter[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.locations-list[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.list-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.total-count[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n\n.locations-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 20px;\n}\n\n.location-card[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.location-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.location-name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0;\n}\n\n.location-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.location-status.active[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.location-status.inactive[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.location-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #6c757d;\n}\n.info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  color: #00695c;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f8f9fa;\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  border-top: 1px solid #e9ecef;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #00695c;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #004d40;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n.btn.btn-warning[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #212529;\n}\n.btn.btn-warning[_ngcontent-%COMP%]:hover {\n  background: #e0a800;\n}\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6c757d;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #adb5bd;\n  margin-bottom: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: auto;\n  right: 15px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 45px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[dir=rtl][_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n@media (max-width: 1200px) {\n  .sub-locations-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .locations-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    justify-content: center;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n  .filters-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-filter[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .status-filter[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .locations-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .card-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n@media (max-width: 480px) {\n  .sub-locations-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .form-card[_ngcontent-%COMP%], .filters-card[_ngcontent-%COMP%], .locations-list[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .card-header[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n.table-responsive[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  overflow: hidden;\n  margin-bottom: 20px;\n  transition: all 0.3s ease;\n}\n.table-responsive[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8rem;\n  margin-bottom: 0;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%) !important;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  text-align: left;\n  font-weight: 600;\n  color: white !important;\n  border: none;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n  background: transparent !important;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 16px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 16px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1px;\n  height: 16px;\n  background: rgba(255, 255, 255, 0.3);\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f3f4;\n  transition: all 0.2s ease;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #fafbfc;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #e8f5e8;\n  transform: scale(1.005);\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  vertical-align: middle;\n  border: none;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 16px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 16px;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .location-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: #2E7D32;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 12px;\n  margin-right: 10px;\n  transition: all 0.3s ease;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .location-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 3px 10px rgba(46, 125, 50, 0.3);\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 2px;\n  font-size: 0.85rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: #2E7D32;\n  color: white;\n  border: none;\n  padding: 16px 20px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: white;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  border: none;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #2E7D32;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1B5E20;\n  box-shadow: 0 3px 10px rgba(46, 125, 50, 0.3);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n  box-shadow: 0 3px 10px rgba(108, 117, 125, 0.3);\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #2E7D32;\n  border-color: #2E7D32;\n  background: transparent;\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #2E7D32;\n  color: white;\n  box-shadow: 0 3px 10px rgba(46, 125, 50, 0.3);\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  transition: all 0.3s ease;\n}\n.badge[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.badge.bg-info[_ngcontent-%COMP%] {\n  background: #e3f2fd !important;\n  color: #1976d2 !important;\n}\n.badge.bg-success[_ngcontent-%COMP%] {\n  background: #e8f5e8 !important;\n  color: #2e7d32 !important;\n}\n.badge.bg-warning[_ngcontent-%COMP%] {\n  background: #fff8e1 !important;\n  color: #f57c00 !important;\n}\n.badge.bg-secondary[_ngcontent-%COMP%] {\n  background: #f5f5f5 !important;\n  color: #616161 !important;\n}\n.badge.bg-primary[_ngcontent-%COMP%] {\n  background: #e3f2fd !important;\n  color: #1976d2 !important;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  margin: 0 2px;\n  font-size: 0.7rem;\n  padding: 6px 12px;\n  border: 1px solid transparent;\n  transition: all 0.3s ease;\n  font-weight: 500;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn-group[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #2E7D32;\n  border-color: #2E7D32;\n  background: transparent;\n}\n.btn-group[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #2E7D32;\n  color: white;\n}\n.btn-group[_ngcontent-%COMP%]   .btn.btn-outline-danger[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  border-color: #d32f2f;\n  background: transparent;\n}\n.btn-group[_ngcontent-%COMP%]   .btn.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: #d32f2f;\n  color: white;\n}\n.btn-group[_ngcontent-%COMP%]   .btn.btn-outline-success[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  border-color: #2e7d32;\n  background: transparent;\n}\n.btn-group[_ngcontent-%COMP%]   .btn.btn-outline-success[_ngcontent-%COMP%]:hover {\n  background: #2e7d32;\n  color: white;\n}\n.btn-group[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%] {\n  background: #ff9800;\n  border-color: #ff9800;\n  color: white;\n}\n.btn-group[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:hover {\n  background: #f57c00;\n  border-color: #f57c00;\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px rgba(255, 152, 0, 0.3);\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  transition: all 0.3s ease;\n}\n.pagination-container[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n\n.pagination-info[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n  font-size: 0.8rem;\n}\n.pagination-info[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #495057;\n  margin-bottom: 0;\n}\n.pagination-info[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  font-size: 0.8rem;\n  padding: 6px 10px;\n  min-width: 70px;\n  transition: all 0.3s ease;\n}\n.pagination-info[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #00695c;\n  box-shadow: 0 0 0 0.2rem rgba(0, 105, 92, 0.25);\n}\n\n.pagination[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  margin: 0 2px;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  color: #495057;\n  padding: 8px 12px;\n  font-size: 0.8rem;\n  transition: all 0.3s ease;\n  font-weight: 500;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #00695c;\n  color: #00695c;\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px rgba(0, 105, 92, 0.2);\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 105, 92, 0.25);\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #00695c;\n  border-color: #00695c;\n  color: white;\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px rgba(0, 105, 92, 0.3);\n}\n.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbG9jYXRpb25zL2NvbXBvbmVudHMvc3ViLWxvY2F0aW9ucy9zdWItbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUFGO0FBRUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0FBSEo7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQVFBO0VBQ0UsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFB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QTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFoSEY7QUFrSEU7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FBaEhKOztBQXFIRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFsSEo7QUFxSEU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQW5ISjtBQXNIRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBcEhKO0FBc0hJO0VBQ0UscUJBQUE7RUFDQSwrQ0FBQTtBQXBITjs7QUF5SEE7RUFDRSxnQkFBQTtBQXRIRjtBQXdIRTtFQUNFLGFBQUE7QUF0SEo7QUF3SEk7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBdEhOO0FBd0hNO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0FBdEhSO0FBeUhNO0VBQ0UsK0NBQUE7QUF2SFI7QUEySEk7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNENBQUE7QUF6SE47QUE0SEk7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBMUhOIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yi1sb2NhdGlvbnMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vLyBQYWdlIEhlYWRlclxyXG4ucGFnZS1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTVweDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBtYXJnaW46IDA7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogIzAwNjk1YztcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIExvY2F0aW9uIEZvcm1cclxuLmFkZC1sb2NhdGlvbi1mb3JtIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG59XHJcblxyXG4uZm9ybS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBtYXJnaW46IDAgMCAyNXB4IDA7XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICBnYXA6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNhZGI1YmQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLy8gRmlsdGVycyBTZWN0aW9uXHJcbi5maWx0ZXJzLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXJzLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmlsdGVyIHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnN0YXR1cy1maWx0ZXIge1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi8vIExvY2F0aW9ucyBMaXN0XHJcbi5sb2NhdGlvbnMtbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxufVxyXG5cclxuLmxpc3QtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG59XHJcblxyXG4udG90YWwtY291bnQge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbn1cclxuXHJcbi5sb2NhdGlvbnMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ubG9jYXRpb24tY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxufVxyXG5cclxuLmxvY2F0aW9uLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubG9jYXRpb24tc3RhdHVzIHtcclxuICAuc3RhdHVzLWJhZGdlIHtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAmLmFjdGl2ZSAuc3RhdHVzLWJhZGdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNkNGVkZGE7XHJcbiAgICBjb2xvcjogIzE1NTcyNDtcclxuICB9XHJcbiAgXHJcbiAgJi5pbmFjdGl2ZSAuc3RhdHVzLWJhZGdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4uaW5mby1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIFxyXG4gIGkge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwNjk1YztcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWFjdGlvbnMge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogIzAwNjk1YztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDRkNDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzVhNjI2ODtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4tc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzIxODgzODtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4td2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTBhODAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLmJ0bi1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjODIzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXNtIHtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBjb2xvcjogI2FkYjViZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSVEwgU3VwcG9ydFxyXG5bZGlyPVwicnRsXCJdIHtcclxuICAuc2VhcmNoLWlucHV0IGkge1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWlucHV0IC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5zdWItbG9jYXRpb25zLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAubG9jYXRpb25zLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhlYWRlci1jb250ZW50IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZm9ybS1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0ZXJzLWNhcmQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWZpbHRlciB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0dXMtZmlsdGVyIHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmxvY2F0aW9ucy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuICAgIFxyXG4gICAgLmJ0biB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgXHJcbiAgICAuYnRuIHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5zdWItbG9jYXRpb25zLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jYXJkLFxyXG4gIC5maWx0ZXJzLWNhcmQsXHJcbiAgLmxvY2F0aW9ucy1saXN0IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWhlYWRlcixcclxuICAuY2FyZC1ib2R5LFxyXG4gIC5jYXJkLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE1vZGVybiBDb21wYWN0IFRhYmxlIFN0eWxpbmdcclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIFxyXG4gICAgdGhlYWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpICFpbXBvcnRhbnQ7IC8vIEFyYWJpYy9Jc2xhbWljIGdyZWVuIGNvbG9yXHJcbiAgICAgIFxyXG4gICAgICB0ciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGgge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmJmYztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZThmNWU4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5sb2NhdGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMkU3RDMyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSg0NiwgMTI1LCA1MCwgMC4zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuZnctYm9sZCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENhcmQgSGVhZGVyIFN0eWxpbmcgd2l0aCBBcmFiaWMvSXNsYW1pYyBHcmVlbiBDb2xvcnNcclxuLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyRTdEMzI7IC8vIEFyYWJpYy9Jc2xhbWljIGdyZWVuIGNvbG9yXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgICBcclxuICAgIGg1IHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBcclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEJ1dHRvbiBTdHlsaW5nIHdpdGggQXJhYmljL0lzbGFtaWMgR3JlZW4gQ29sb3JzXHJcbi5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIH1cclxuICBcclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogIzJFN0QzMjsgLy8gQXJhYmljL0lzbGFtaWMgZ3JlZW4gY29sb3JcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxQjVFMjA7IC8vIERhcmtlciBncmVlbiBvbiBob3ZlclxyXG4gICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoNDYsIDEyNSwgNTAsIDAuMyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzVhNjI2ODtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDEwOCwgMTE3LCAxMjUsIDAuMyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogIzJFN0QzMjtcclxuICAgIGJvcmRlci1jb2xvcjogIzJFN0QzMjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzJFN0QzMjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoNDYsIDEyNSwgNTAsIDAuMyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDb21wYWN0IEJhZGdlIFN0eWxpbmdcclxuLmJhZGdlIHtcclxuICBwYWRkaW5nOiA0cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIFxyXG4gICYuYmctaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTNmMmZkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzE5NzZkMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAmLmJnLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZjVlOCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMyZTdkMzIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgJi5iZy13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY4ZTEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZjU3YzAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICYuYmctc2Vjb25kYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNjE2MTYxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICYuYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTNmMmZkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzE5NzZkMiAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ29tcGFjdCBCdXR0b24gR3JvdXAgU3R5bGluZ1xyXG4uYnRuLWdyb3VwIHtcclxuICAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAgICAgY29sb3I6ICMyRTdEMzI7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzJFN0QzMjtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMkU3RDMyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmJ0bi1vdXRsaW5lLWRhbmdlciB7XHJcbiAgICAgIGNvbG9yOiAjZDMyZjJmO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNkMzJmMmY7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2QzMmYyZjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICAgICAgY29sb3I6ICMyZTdkMzI7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzJlN2QzMjtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmU3ZDMyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmJ0bi13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmOTgwMDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5ODAwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjU3YzAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y1N2MwMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBQYWdpbmF0aW9uIFN0eWxpbmdcclxuLnBhZ2luYXRpb24tY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1pbmZvIHtcclxuICAudGV4dC1tdXRlZCB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1zZWxlY3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMDUsIDkyLCAwLjI1KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIFxyXG4gIC5wYWdlLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIFxyXG4gICAgLnBhZ2UtbGluayB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMTA1LCA5MiwgMC4yKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTA1LCA5MiwgMC4yNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5hY3RpdmUgLnBhZ2UtbGluayB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDY5NWM7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAxMDUsIDkyLCAwLjMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmRpc2FibGVkIC5wYWdlLWxpbmsge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6345:
/*!********************************************************!*\
  !*** ./src/app/features/locations/locations.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationsModule: () => (/* binding */ LocationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _components_sub_locations_sub_locations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sub-locations/sub-locations.component */ 7294);
/* harmony import */ var _components_sections_sections_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sections/sections.component */ 1660);
/* harmony import */ var _components_special_divisions_special_divisions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/special-divisions/special-divisions.component */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);









const routes = [{
  path: '',
  redirectTo: 'locations',
  pathMatch: 'full'
}, {
  path: 'locations',
  component: _components_sub_locations_sub_locations_component__WEBPACK_IMPORTED_MODULE_1__.SubLocationsComponent
}, {
  path: 'sections',
  component: _components_sections_sections_component__WEBPACK_IMPORTED_MODULE_2__.SectionsComponent
}, {
  path: 'special-divisions',
  component: _components_special_divisions_special_divisions_component__WEBPACK_IMPORTED_MODULE_3__.SpecialDivisionsComponent
}];
class LocationsModule {
  static {
    this.ɵfac = function LocationsModule_Factory(t) {
      return new (t || LocationsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: LocationsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LocationsModule, {
    declarations: [_components_sub_locations_sub_locations_component__WEBPACK_IMPORTED_MODULE_1__.SubLocationsComponent, _components_sections_sections_component__WEBPACK_IMPORTED_MODULE_2__.SectionsComponent, _components_special_divisions_special_divisions_component__WEBPACK_IMPORTED_MODULE_3__.SpecialDivisionsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_locations_locations_module_ts.js.map