"use strict";
(self["webpackChunkscreening_frontend"] = self["webpackChunkscreening_frontend"] || []).push([["src_app_features_advertisements_advertisements_module_ts"],{

/***/ 9282:
/*!*********************************************************!*\
  !*** ./src/app/core/services/advertisements.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvertisementsService: () => (/* binding */ AdvertisementsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class AdvertisementsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || 'http://localhost:3000/api';
  }
  /**
   * Get all advertisements with optional filters
   */
  getAdvertisements(filters) {
    const params = {};
    if (filters?.type) params.type = filters.type;
    if (filters?.status) params.status = filters.status;
    if (filters?.search) params.search = filters.search;
    if (filters?.limit) params.limit = filters.limit.toString();
    if (filters?.page) params.page = filters.page.toString();
    return this.http.get(`${this.apiUrl}/advertisements`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      advertisements: response.advertisements.map(ad => ({
        ...ad,
        createdAt: ad.createdAt ? new Date(ad.createdAt) : undefined,
        updatedAt: ad.updatedAt ? new Date(ad.updatedAt) : undefined
      })),
      total: response.total
    })));
  }
  /**
   * Get advertisement by ID
   */
  getAdvertisementById(id) {
    return this.http.get(`${this.apiUrl}/advertisements/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.advertisement,
      createdAt: response.advertisement.createdAt ? new Date(response.advertisement.createdAt) : undefined,
      updatedAt: response.advertisement.updatedAt ? new Date(response.advertisement.updatedAt) : undefined
    })));
  }
  /**
   * Create advertisement with file upload
   */
  createAdvertisement(formData) {
    return this.http.post(`${this.apiUrl}/advertisements`, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.advertisement,
      createdAt: response.advertisement.createdAt ? new Date(response.advertisement.createdAt) : undefined,
      updatedAt: response.advertisement.updatedAt ? new Date(response.advertisement.updatedAt) : undefined
    })));
  }
  /**
   * Update advertisement
   */
  updateAdvertisement(id, formData) {
    return this.http.put(`${this.apiUrl}/advertisements/${id}`, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.advertisement,
      createdAt: response.advertisement.createdAt ? new Date(response.advertisement.createdAt) : undefined,
      updatedAt: response.advertisement.updatedAt ? new Date(response.advertisement.updatedAt) : undefined
    })));
  }
  /**
   * Delete advertisement
   */
  deleteAdvertisement(id) {
    return this.http.delete(`${this.apiUrl}/advertisements/${id}`);
  }
  static {
    this.ɵfac = function AdvertisementsService_Factory(t) {
      return new (t || AdvertisementsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AdvertisementsService,
      factory: AdvertisementsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4719:
/*!******************************************************************!*\
  !*** ./src/app/features/advertisements/advertisements.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvertisementsModule: () => (/* binding */ AdvertisementsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _components_advertising_banner_advertising_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/advertising-banner/advertising-banner.component */ 4426);
/* harmony import */ var _components_advertisements_advertisements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/advertisements/advertisements.component */ 9616);
/* harmony import */ var _components_view_advertisements_view_advertisements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/view-advertisements/view-advertisements.component */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);









const routes = [{
  path: '',
  component: _components_advertising_banner_advertising_banner_component__WEBPACK_IMPORTED_MODULE_1__.AdvertisingBannerComponent
}, {
  path: 'advertising-banner',
  component: _components_advertising_banner_advertising_banner_component__WEBPACK_IMPORTED_MODULE_1__.AdvertisingBannerComponent
}, {
  path: 'advertisements',
  component: _components_advertisements_advertisements_component__WEBPACK_IMPORTED_MODULE_2__.AdvertisementsComponent
}, {
  path: 'view-advertisements',
  component: _components_view_advertisements_view_advertisements_component__WEBPACK_IMPORTED_MODULE_3__.ViewAdvertisementsComponent
}];
class AdvertisementsModule {
  static {
    this.ɵfac = function AdvertisementsModule_Factory(t) {
      return new (t || AdvertisementsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AdvertisementsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdvertisementsModule, {
    declarations: [_components_advertising_banner_advertising_banner_component__WEBPACK_IMPORTED_MODULE_1__.AdvertisingBannerComponent, _components_advertisements_advertisements_component__WEBPACK_IMPORTED_MODULE_2__.AdvertisementsComponent, _components_view_advertisements_view_advertisements_component__WEBPACK_IMPORTED_MODULE_3__.ViewAdvertisementsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 9616:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/advertisements/components/advertisements/advertisements.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvertisementsComponent: () => (/* binding */ AdvertisementsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_mumbai_screen_screening_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ 5312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_cloud_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/cloud-storage.service */ 473);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_advertisements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/advertisements.service */ 9282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 8709);












const _c0 = () => [];
function AdvertisementsComponent_div_10_div_16_div_7_li_4_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 79);
  }
}
function AdvertisementsComponent_div_10_div_16_div_7_li_4_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 80);
  }
}
function AdvertisementsComponent_div_10_div_16_div_7_li_4_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 81);
  }
}
function AdvertisementsComponent_div_10_div_16_div_7_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AdvertisementsComponent_div_10_div_16_div_7_li_4_i_1_Template, 1, 0, "i", 75)(2, AdvertisementsComponent_div_10_div_16_div_7_li_4_i_2_Template, 1, 0, "i", 76)(3, AdvertisementsComponent_div_10_div_16_div_7_li_4_i_3_Template, 1, 0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", f_r4.type.startsWith("image/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", f_r4.type.startsWith("video/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !f_r4.type.startsWith("image/") && !f_r4.type.startsWith("video/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", f_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", (f_r4.size / 1024).toFixed(1), " KB)");
  }
}
function AdvertisementsComponent_div_10_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 70)(1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ul", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AdvertisementsComponent_div_10_div_16_div_7_li_4_Template, 7, 5, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.selectedFiles.length, " ", ctx_r1.getTranslation("filesSelected") || "file(s) selected", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.selectedFiles);
  }
}
function AdvertisementsComponent_div_10_div_16_div_8_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 85);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.filePreview, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AdvertisementsComponent_div_10_div_16_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedFiles[0].name, " ");
  }
}
function AdvertisementsComponent_div_10_div_16_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("multipleFilesSelected") || "Multiple files selected", " ");
  }
}
function AdvertisementsComponent_div_10_div_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AdvertisementsComponent_div_10_div_16_div_8_img_1_Template, 1, 1, "img", 83)(2, AdvertisementsComponent_div_10_div_16_div_8_div_2_Template, 3, 1, "div", 84)(3, AdvertisementsComponent_div_10_div_16_div_8_div_3_Template, 3, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedFiles[0].type.startsWith("image/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.selectedFiles[0].type.startsWith("image/") && ctx_r1.selectedFiles.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedFiles.length > 1 && !ctx_r1.selectedFiles[0].type.startsWith("image/"));
  }
}
function AdvertisementsComponent_div_10_div_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 88)(1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "small", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", ctx_r1.uploadProgress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.uploadProgress, "% uploaded");
  }
}
function AdvertisementsComponent_div_10_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdvertisementsComponent_div_10_div_16_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "small", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AdvertisementsComponent_div_10_div_16_div_7_Template, 5, 3, "div", 67)(8, AdvertisementsComponent_div_10_div_16_div_8_Template, 4, 3, "div", 68)(9, AdvertisementsComponent_div_10_div_16_div_9_Template, 5, 3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("uploadFile"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("multiple", !ctx_r1.editingAdvertisement);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("supportedFormatsMultiple") || "Supported: Images, Videos, Presentations (PPT/PPTX), Documents (PDF/DOC/DOCX). Select multiple files to create multiple ads at once.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedFiles.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.filePreview && ctx_r1.selectedFiles.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isUploading);
  }
}
function AdvertisementsComponent_div_10_div_17_div_7_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 85);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.filePreview, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AdvertisementsComponent_div_10_div_17_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.advertisementForm.value.fileUrl, " ");
  }
}
function AdvertisementsComponent_div_10_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AdvertisementsComponent_div_10_div_17_div_7_img_1_Template, 1, 1, "img", 83)(2, AdvertisementsComponent_div_10_div_17_div_7_div_2_Template, 3, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isImageUrl(ctx_r1.advertisementForm.value.fileUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isImageUrl(ctx_r1.advertisementForm.value.fileUrl) && ctx_r1.advertisementForm.value.fileUrl);
  }
}
function AdvertisementsComponent_div_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function AdvertisementsComponent_div_10_div_17_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onUrlInput($event));
    })("blur", function AdvertisementsComponent_div_10_div_17_Template_input_blur_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onUrlInput($event));
    })("change", function AdvertisementsComponent_div_10_div_17_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onUrlInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "small", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AdvertisementsComponent_div_10_div_17_div_7_Template, 3, 2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("fileUrl") || "File URL", " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterFileUrl") || "Enter file URL (e.g., https://example.com/video.mp4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("urlHint") || "Enter a direct link to an image, video, or document file", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.filePreview && !ctx_r1.selectedFile);
  }
}
function AdvertisementsComponent_div_10_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function AdvertisementsComponent_div_10_i_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 97);
  }
}
function AdvertisementsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AdvertisementsComponent_div_10_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.addAdvertisement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 45)(6, "div", 46)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 47)(10, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdvertisementsComponent_div_10_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r1.inputMethod = "file";
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onInputMethodChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdvertisementsComponent_div_10_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r1.inputMethod = "url";
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onInputMethodChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, AdvertisementsComponent_div_10_div_16_Template, 10, 6, "div", 51)(17, AdvertisementsComponent_div_10_div_17_Template, 8, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 45)(19, "div", 52)(20, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 52)(24, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "select", 56)(27, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 45)(34, "div", 46)(35, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "textarea", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, AdvertisementsComponent_div_10_div_38_Template, 3, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 60)(40, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdvertisementsComponent_div_10_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.cancelForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, AdvertisementsComponent_div_10_i_43_Template, 1, 0, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.editingAdvertisement ? ctx_r1.getTranslation("editAdvertisement") || "Edit Advertisement" : ctx_r1.getTranslation("addNewAdvertisement"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r1.advertisementForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getTranslation("inputMethod") || "Input Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("btn-primary", ctx_r1.inputMethod === "file")("btn-outline-secondary", ctx_r1.inputMethod !== "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("uploadFile") || "Upload File", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("btn-primary", ctx_r1.inputMethod === "url")("btn-outline-secondary", ctx_r1.inputMethod !== "url");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("enterUrl") || "Enter URL", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.inputMethod === "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.inputMethod === "url");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("title"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("status"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getTranslation("draft"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getTranslation("active"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getTranslation("inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getTranslation("description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.isLoading || ctx_r1.advertisementForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.editingAdvertisement ? ctx_r1.getTranslation("saveChanges") || "Save Changes" : ctx_r1.getTranslation("saveAdvertisement") || "Save Advertisement", " ");
  }
}
function AdvertisementsComponent_tr_69_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const advertisement_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", advertisement_r7.description, " ");
  }
}
function AdvertisementsComponent_tr_69_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const advertisement_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r1.getFileUrl(advertisement_r7.thumbnailUrl || advertisement_r7.fileUrl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getFileUrl(advertisement_r7.thumbnailUrl || advertisement_r7.fileUrl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", advertisement_r7.title);
  }
}
function AdvertisementsComponent_tr_69_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "video", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const advertisement_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r1.getFileUrl(advertisement_r7.fileUrl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getFileUrl(advertisement_r7.fileUrl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AdvertisementsComponent_tr_69_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdvertisementsComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 98)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AdvertisementsComponent_tr_69_div_4_Template, 2, 1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 100)(6, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 102)(9, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AdvertisementsComponent_tr_69_a_13_Template, 2, 3, "a", 105)(14, AdvertisementsComponent_tr_69_a_14_Template, 2, 2, "a", 105)(15, AdvertisementsComponent_tr_69_span_15_Template, 2, 0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td", 107)(17, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td", 109)(20, "div", 110)(21, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdvertisementsComponent_tr_69_Template_button_click_21_listener() {
      const advertisement_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.editAdvertisement(advertisement_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdvertisementsComponent_tr_69_Template_button_click_23_listener() {
      const advertisement_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.deleteAdvertisement(advertisement_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const advertisement_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](advertisement_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", advertisement_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](advertisement_r7.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTypeDisplayName(advertisement_r7.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r1.getFileUrl(advertisement_r7.fileUrl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.decodeFileNameForDisplay(advertisement_r7.fileName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", advertisement_r7.fileUrl && (advertisement_r7.type === "image" || ctx_r1.isImageUrl(advertisement_r7.fileUrl)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", advertisement_r7.fileUrl && advertisement_r7.type === "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(advertisement_r7.fileUrl && (advertisement_r7.type === "image" || ctx_r1.isImageUrl(advertisement_r7.fileUrl) || advertisement_r7.type === "video")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](advertisement_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusDisplayName(advertisement_r7.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r1.getTranslation("edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r1.getTranslation("delete"));
  }
}
function AdvertisementsComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noAdvertisementsFound"));
  }
}
function AdvertisementsComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getTranslation("loading"));
  }
}
function AdvertisementsComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function AdvertisementsComponent_div_73_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 125)(1, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdvertisementsComponent_div_73_li_6_Template_a_click_1_listener() {
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onPageChange(i_r10 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.currentPage === i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r10 + 1);
  }
}
function AdvertisementsComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 122)(1, "nav", 123)(2, "ul", 124)(3, "li", 125)(4, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdvertisementsComponent_div_73_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AdvertisementsComponent_div_73_li_6_Template, 3, 3, "li", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "li", 125)(8, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdvertisementsComponent_div_73_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0).constructor(ctx_r1.totalPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
// Using fetch API for direct upload instead of Azure SDK (browser-compatible)
class AdvertisementsComponent {
  constructor(languageService, cloudStorageService, translationService, advertisementsService, fb) {
    this.languageService = languageService;
    this.cloudStorageService = cloudStorageService;
    this.translationService = translationService;
    this.advertisementsService = advertisementsService;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.advertisements = [];
    this.filteredAdvertisements = [];
    this.searchTerm = '';
    this.selectedType = 'all';
    this.selectedStatus = 'all';
    this.showAddForm = false;
    this.editingAdvertisement = null;
    this.selectedFile = null;
    this.selectedFiles = []; // Multiple files for batch upload
    this.filePreview = null;
    this.inputMethod = 'file'; // Toggle between file upload and URL input
    this.isLoading = false;
    this.errorMessage = '';
    this.showConfirmDialog = false;
    this.confirmDialogData = {};
    this.itemToDelete = null;
    // Pagination
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalPages = 1;
    this.totalAdvertisements = 0;
    // Direct upload progress
    this.uploadProgress = 0;
    this.isUploading = false;
    this.cloudStorageConfig = null;
    this.advertisementForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      description: [''],
      type: ['image', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      status: ['draft', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      fileUrl: ['']
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    // Load cloud storage configuration
    this.cloudStorageService.getConfig().subscribe({
      next: config => {
        this.cloudStorageConfig = config;
      },
      error: error => {
        console.error('Error loading cloud storage config:', error);
      }
    });
    this.loadAdvertisements();
  }
  loadAdvertisements() {
    this.isLoading = true;
    this.errorMessage = '';
    const filters = {
      type: this.selectedType !== 'all' ? this.selectedType : undefined,
      status: this.selectedStatus !== 'all' ? this.selectedStatus : undefined,
      search: this.searchTerm || undefined,
      page: this.currentPage,
      limit: this.itemsPerPage
    };
    this.advertisementsService.getAdvertisements(filters).subscribe({
      next: response => {
        this.advertisements = response.advertisements;
        this.filteredAdvertisements = [...this.advertisements];
        this.totalAdvertisements = response.total;
        this.calculatePagination();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading advertisements:', error);
        this.errorMessage = this.getTranslation('errorLoadingAdvertisements') || 'Error loading advertisements';
        this.isLoading = false;
      }
    });
  }
  calculatePagination() {
    this.totalPages = Math.ceil(this.totalAdvertisements / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadAdvertisements();
  }
  filterAdvertisements() {
    this.currentPage = 1;
    this.loadAdvertisements();
  }
  onFileSelected(event) {
    const fileList = event.target?.files;
    if (!fileList?.length) return;
    this.selectedFiles = Array.from(fileList);
    this.selectedFile = this.selectedFiles[0];
    // Preview: first image in selection
    const firstImage = this.selectedFiles.find(f => f.type.startsWith('image/'));
    if (firstImage) {
      const reader = new FileReader();
      reader.onload = e => {
        this.filePreview = e.target.result;
      };
      reader.readAsDataURL(firstImage);
    } else {
      this.filePreview = null;
    }
    this.advertisementForm.patchValue({
      fileUrl: ''
    });
  }
  onInputMethodChange() {
    // Clear file selection when switching to URL
    if (this.inputMethod === 'url') {
      this.selectedFile = null;
      this.selectedFiles = [];
      this.filePreview = null;
      // Clear file input
      const fileInput = document.getElementById('file');
      if (fileInput) {
        fileInput.value = '';
      }
      // Update preview if URL exists (support all common image formats)
      const url = this.advertisementForm.value.fileUrl;
      if (url && url.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg|ico|tiff|tif|heic|heif|avif|jfif)$/i)) {
        this.filePreview = url;
      }
    } else {
      // Clear URL when switching to file
      this.advertisementForm.patchValue({
        fileUrl: ''
      });
      this.filePreview = null;
    }
  }
  onUrlInput(event) {
    // Get the URL value - try from event first, then form control
    let url = '';
    if (event && event.target) {
      url = event.target.value?.trim() || '';
      // Update form control with the value from input
      const fileUrlControl = this.advertisementForm.get('fileUrl');
      if (fileUrlControl && fileUrlControl.value !== url) {
        fileUrlControl.setValue(url, {
          emitEvent: false
        });
      }
    } else {
      // Get the URL value directly from the form control
      const fileUrlControl = this.advertisementForm.get('fileUrl');
      url = fileUrlControl?.value?.trim() || '';
    }
    // Also get from HTML input element as fallback
    if (!url) {
      const urlInputElement = document.getElementById('fileUrl');
      if (urlInputElement && urlInputElement.value) {
        url = urlInputElement.value.trim();
        // Update form control
        const fileUrlControl = this.advertisementForm.get('fileUrl');
        if (fileUrlControl) {
          fileUrlControl.setValue(url, {
            emitEvent: false
          });
        }
      }
    }
    // Mark the control as touched and dirty to detect form changes
    const fileUrlControl = this.advertisementForm.get('fileUrl');
    if (fileUrlControl) {
      fileUrlControl.markAsTouched();
      fileUrlControl.markAsDirty();
      fileUrlControl.updateValueAndValidity();
    }
    if (url) {
      this.selectedFile = null;
      this.selectedFiles = [];
      // Clear file input
      const fileInput = document.getElementById('file');
      if (fileInput) {
        fileInput.value = '';
      }
      // Update preview for image URLs (support all common image formats)
      if (url.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg|ico|tiff|tif|heic|heif|avif|jfif)$/i)) {
        this.filePreview = url;
      } else {
        this.filePreview = null;
      }
    } else {
      this.filePreview = null;
    }
  }
  addAdvertisement() {
    var _this = this;
    return (0,C_Users_PC_Desktop_mumbai_screen_screening_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Get the current form value for URL (ensure we get the latest value)
      // Try multiple ways to get URL value to ensure we capture it
      const formValue = _this.advertisementForm.getRawValue();
      const fileUrlControl = _this.advertisementForm.get('fileUrl');
      // Get URL value from multiple sources to ensure we capture it
      let inputUrl = '';
      if (fileUrlControl) {
        const controlValue = fileUrlControl.value;
        inputUrl = controlValue ? controlValue.toString().trim() : '';
      }
      if (!inputUrl && formValue.fileUrl) {
        inputUrl = formValue.fileUrl.toString().trim();
      }
      // Also check the HTML input element directly as a fallback
      if (!inputUrl) {
        const urlInputElement = document.getElementById('fileUrl');
        if (urlInputElement && urlInputElement.value) {
          inputUrl = urlInputElement.value.trim();
        }
      }
      // Validate that either file or URL is provided
      // IMPORTANT: If URL is entered, it should work regardless of which input method is selected
      // For editing: allow if existing advertisement has fileUrl, or if new file/URL is provided
      // For new: require file or URL
      const hasExistingFileUrl = _this.editingAdvertisement?.fileUrl;
      const hasNewFile = _this.selectedFiles.length > 0;
      // Accept any URL that starts with http:// or https:// or is a valid URL format
      const hasNewUrl = inputUrl.length > 0 && (inputUrl.startsWith('http://') || inputUrl.startsWith('https://') || inputUrl.startsWith('//'));
      // Debug logging
      console.log('🔍 Advertisement Validation Debug:', {
        inputMethod: _this.inputMethod,
        inputUrl: inputUrl,
        inputUrlLength: inputUrl.length,
        hasNewFile: hasNewFile,
        hasNewUrl: hasNewUrl,
        hasExistingFileUrl: hasExistingFileUrl,
        fileUrlControlValue: fileUrlControl?.value,
        formValueFileUrl: formValue.fileUrl,
        editingAdvertisement: _this.editingAdvertisement
      });
      // If we have URL, file, or existing fileUrl, proceed - no error
      if (!hasNewFile && !hasNewUrl && !hasExistingFileUrl) {
        // Check which input method is active to show appropriate error
        if (_this.inputMethod === 'url') {
          _this.errorMessage = _this.getTranslation('urlRequired') || 'File URL is required';
          // Mark fileUrl control as invalid
          if (fileUrlControl) {
            fileUrlControl.setErrors({
              required: true
            });
            fileUrlControl.markAsTouched();
          }
        } else {
          _this.errorMessage = _this.getTranslation('fileOrUrlRequired') || 'File or URL is required';
        }
        console.error('❌ Validation failed:', {
          errorMessage: _this.errorMessage,
          inputUrl: inputUrl,
          hasNewUrl: hasNewUrl
        });
        return;
      }
      // Clear any previous errors if we have file or URL
      _this.errorMessage = '';
      // Clear any errors on fileUrl control
      if (fileUrlControl && fileUrlControl.hasError('required')) {
        fileUrlControl.setErrors(null);
        fileUrlControl.updateValueAndValidity();
      }
      console.log('✅ Validation passed, proceeding with save');
      if (_this.advertisementForm.invalid) {
        _this.advertisementForm.markAllAsTouched();
        return;
      }
      _this.isLoading = true;
      _this.errorMessage = '';
      _this.uploadProgress = 0;
      _this.isUploading = false;
      // Multiple files: create one advertisement per file (only when adding new, not editing)
      if (!_this.editingAdvertisement && _this.selectedFiles.length > 1) {
        _this.saveMultipleAdvertisements(formValue, inputUrl);
        return;
      }
      // Single file or edit flow below
      // Check if we should use direct upload (Azure enabled)
      let useDirectUpload = _this.cloudStorageConfig?.enabled && _this.cloudStorageConfig?.provider === 'azure' && _this.selectedFile;
      let uploadedFileUrl = null;
      let uploadedFileName = null;
      let uploadedFileSize = null;
      let uploadedMimeType = null;
      // Direct upload to Azure if enabled
      if (useDirectUpload && _this.selectedFile) {
        try {
          _this.isUploading = true;
          const uploadResult = yield _this.uploadFileDirectly(_this.selectedFile);
          uploadedFileUrl = uploadResult.url;
          uploadedFileName = uploadResult.fileName;
          uploadedFileSize = uploadResult.fileSize;
          uploadedMimeType = uploadResult.mimeType;
          _this.isUploading = false;
          _this.uploadProgress = 100;
        } catch (error) {
          console.error('Direct upload failed, falling back to server upload:', error);
          _this.isUploading = false;
          _this.uploadProgress = 0;
          // Fall back to server upload
          useDirectUpload = false;
        }
      }
      const formData = new FormData();
      formData.append('title', formValue.title);
      formData.append('description', formValue.description || '');
      formData.append('status', formValue.status);
      // Get the latest URL value from form (use the same inputUrl we validated above)
      const userInputUrl = inputUrl; // Use the inputUrl we already validated
      // If URL is provided, use it directly (rewrite localhost:3000 to backend domain so backend stores correct URL)
      if (userInputUrl) {
        const urlToStore = _this.getFileUrl(userInputUrl);
        // Extract filename from URL or use title
        const urlFileName = urlToStore.split('/').pop()?.split('?')[0] || _this.advertisementForm.value.title || 'advertisement';
        // Try to determine mime type from URL extension
        let urlMimeType = 'application/octet-stream';
        const urlExtension = urlFileName.split('.').pop()?.toLowerCase();
        if (urlExtension) {
          if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg', 'ico', 'tiff', 'tif', 'heic', 'heif', 'avif', 'jfif'].includes(urlExtension)) {
            // Handle special mime types
            if (urlExtension === 'jpg') {
              urlMimeType = 'image/jpeg';
            } else if (urlExtension === 'svg') {
              urlMimeType = 'image/svg+xml';
            } else if (urlExtension === 'ico') {
              urlMimeType = 'image/x-icon';
            } else if (urlExtension === 'tiff' || urlExtension === 'tif') {
              urlMimeType = 'image/tiff';
            } else {
              urlMimeType = `image/${urlExtension}`;
            }
          } else if (['mp4', 'webm', 'ogg', 'mov', 'avi'].includes(urlExtension)) {
            urlMimeType = `video/${urlExtension === 'mov' ? 'quicktime' : urlExtension}`;
          } else if (['pdf'].includes(urlExtension)) {
            urlMimeType = 'application/pdf';
          }
        }
        // Log what we're sending
        console.log('📤 Sending to backend:', {
          fileUrl: urlToStore,
          fileName: urlFileName,
          fileSize: 0,
          mimeType: urlMimeType
        });
        formData.append('fileUrl', urlToStore);
        formData.append('fileName', urlFileName);
        formData.append('fileSize', '1'); // URL size unknown - use 1 instead of 0 (0 is falsy in backend check)
        formData.append('mimeType', urlMimeType);
      } else if (useDirectUpload && uploadedFileUrl) {
        // If direct upload was successful, send file URL instead of file (rewrite localhost to backend domain)
        formData.append('fileUrl', _this.getFileUrl(uploadedFileUrl));
        formData.append('fileName', uploadedFileName);
        formData.append('fileSize', uploadedFileSize.toString());
        formData.append('mimeType', uploadedMimeType);
      } else if (_this.selectedFile) {
        // Fallback to server upload
        formData.append('file', _this.selectedFile);
      }
      const operation = _this.editingAdvertisement ? _this.advertisementsService.updateAdvertisement(_this.editingAdvertisement.id, formData) : _this.advertisementsService.createAdvertisement(formData);
      operation.subscribe({
        next: () => {
          _this.isLoading = false;
          _this.isUploading = false;
          _this.uploadProgress = 0;
          _this.resetForm();
          _this.loadAdvertisements();
        },
        error: error => {
          console.error('Error saving advertisement:', error);
          _this.errorMessage = error.error?.error || _this.getTranslation('errorSavingAdvertisement') || 'Error saving advertisement';
          _this.isLoading = false;
          _this.isUploading = false;
          _this.uploadProgress = 0;
        }
      });
    })();
  }
  /**
   * Save multiple advertisements (one per selected file). Used when user selects multiple files.
   */
  saveMultipleAdvertisements(formValue, _inputUrl) {
    var _this2 = this;
    const files = this.selectedFiles;
    const useDirectUpload = !!(this.cloudStorageConfig?.enabled && this.cloudStorageConfig?.provider === 'azure');
    const createObservables = [];
    (0,C_Users_PC_Desktop_mumbai_screen_screening_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isUploading = true;
      _this2.isLoading = true;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        _this2.uploadProgress = Math.round((i + 1) / files.length * 100);
        const title = files.length > 1 ? `${formValue.title} - ${file.name}` : formValue.title;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', formValue.description || '');
        formData.append('status', formValue.status);
        if (useDirectUpload) {
          try {
            const result = yield _this2.uploadFileDirectly(file);
            formData.append('fileUrl', _this2.getFileUrl(result.url));
            formData.append('fileName', result.fileName);
            formData.append('fileSize', result.fileSize.toString());
            formData.append('mimeType', result.mimeType);
          } catch (err) {
            formData.append('file', file);
          }
        } else {
          formData.append('file', file);
        }
        createObservables.push(_this2.advertisementsService.createAdvertisement(formData));
      }
      _this2.uploadProgress = 100;
      _this2.isUploading = false;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)(createObservables).subscribe({
        next: () => {
          _this2.isLoading = false;
          _this2.uploadProgress = 0;
          _this2.resetForm();
          _this2.loadAdvertisements();
        },
        error: err => {
          console.error('Error saving multiple advertisements:', err);
          _this2.errorMessage = err.error?.error || _this2.getTranslation('errorSavingAdvertisement') || 'Error saving advertisements';
          _this2.isLoading = false;
          _this2.isUploading = false;
          _this2.uploadProgress = 0;
        }
      });
    })();
  }
  /**
   * Upload file directly to Azure Blob Storage using SAS token (browser-compatible)
   */
  uploadFileDirectly(file) {
    var _this3 = this;
    return (0,C_Users_PC_Desktop_mumbai_screen_screening_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Get SAS token from backend
      const sasTokenResult = yield _this3.cloudStorageService.generateSasToken(file.name, 'advertisements', 60 // 60 minutes expiry
      ).toPromise();
      if (!sasTokenResult?.success || !sasTokenResult.sasUrl || !sasTokenResult.blobUrl) {
        throw new Error(sasTokenResult?.error || 'Failed to generate SAS token');
      }
      // Ensure sasUrl is defined
      const sasUrl = sasTokenResult.sasUrl;
      if (!sasUrl) {
        throw new Error('SAS URL is not available');
      }
      // Upload using fetch API with progress tracking
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // Track upload progress
        xhr.upload.addEventListener('progress', event => {
          if (event.lengthComputable) {
            _this3.uploadProgress = Math.round(event.loaded / event.total * 100);
          }
        });
        // Handle completion
        xhr.addEventListener('load', () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve({
              url: sasTokenResult.blobUrl,
              fileName: file.name,
              fileSize: file.size,
              mimeType: file.type
            });
          } else {
            reject(new Error(`Upload failed with status ${xhr.status}`));
          }
        });
        // Handle errors
        xhr.addEventListener('error', () => {
          reject(new Error('Upload failed'));
        });
        // Start upload
        xhr.open('PUT', sasUrl);
        xhr.setRequestHeader('x-ms-blob-type', 'BlockBlob');
        xhr.setRequestHeader('Content-Type', file.type);
        xhr.send(file);
      });
    })();
  }
  editAdvertisement(advertisement) {
    this.editingAdvertisement = advertisement;
    this.selectedFile = null;
    this.selectedFiles = [];
    this.filePreview = this.getFileUrl(advertisement.thumbnailUrl || advertisement.fileUrl);
    // Determine input method based on whether fileUrl exists
    this.inputMethod = advertisement.fileUrl ? 'url' : 'file';
    this.advertisementForm.patchValue({
      title: advertisement.title,
      description: advertisement.description || '',
      type: advertisement.type,
      status: advertisement.status,
      fileUrl: advertisement.fileUrl || ''
    });
    this.showAddForm = true;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  deleteAdvertisement(advertisement) {
    if (!advertisement.id) return;
    this.itemToDelete = advertisement;
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: this.getTranslation('confirmDeleteAdvertisementMessage') || `Are you sure you want to delete "${advertisement.title}"?`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel'
    };
    this.showConfirmDialog = true;
  }
  onConfirmDelete() {
    if (this.itemToDelete?.id) {
      this.isLoading = true;
      this.advertisementsService.deleteAdvertisement(this.itemToDelete.id).subscribe({
        next: () => {
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
          this.loadAdvertisements();
        },
        error: error => {
          console.error('Error deleting advertisement:', error);
          this.isLoading = false;
          this.errorMessage = error.error?.error || 'Error deleting advertisement';
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
    this.advertisementForm.reset({
      type: 'image',
      status: 'draft',
      fileUrl: ''
    });
    this.selectedFile = null;
    this.selectedFiles = [];
    this.filePreview = null;
    this.inputMethod = 'file';
    this.editingAdvertisement = null;
    this.showAddForm = false;
    this.errorMessage = '';
    const fileInput = document.getElementById('file');
    if (fileInput) fileInput.value = '';
  }
  cancelForm() {
    this.resetForm();
  }
  getTypeDisplayName(type) {
    const types = {
      image: this.getTranslation('image'),
      video: this.getTranslation('video'),
      presentation: this.getTranslation('presentation'),
      document: this.getTranslation('document')
    };
    return types[type] || type;
  }
  getStatusDisplayName(status) {
    const statuses = {
      draft: this.getTranslation('draft'),
      active: this.getTranslation('active'),
      inactive: this.getTranslation('inactive'),
      expired: this.getTranslation('expired')
    };
    return statuses[status] || status;
  }
  isImageUrl(url) {
    if (!url) return false;
    // Support all common image formats
    return /\.(jpg|jpeg|png|gif|webp|bmp|svg|ico|tiff|tif|heic|heif|avif|jfif)$/i.test(url);
  }
  getFileUrl(fileUrl) {
    if (!fileUrl) return fileUrl;
    const base = (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl || '').replace(/\/api\/?$/, '').trim();
    if (!base) return fileUrl;
    try {
      const u = new URL(fileUrl);
      if (u.hostname === 'localhost' && (u.port === '3000' || !u.port)) return fileUrl.replace(u.origin, base);
    } catch (_) {}
    return fileUrl;
  }
  /**
   * Repairs UTF-8 mojibake: when the API returns a filename that was stored/sent as UTF-8
   * but interpreted as Latin-1 (e.g. Arabic appears as ØºØ±Ù...), decode it for display.
   */
  decodeFileNameForDisplay(fileName) {
    if (!fileName) return '';
    // If no high bytes (128-255), no mojibake to fix
    const hasHighBytes = [...fileName].some(c => (c.charCodeAt(0) & 0xff) > 127);
    if (!hasHighBytes) return fileName;
    try {
      const bytes = new Uint8Array([...fileName].map(c => c.charCodeAt(0) & 0xff));
      const decoded = new TextDecoder('utf-8').decode(bytes);
      // Use decoded result if it contains Arabic or looks like valid Unicode filename
      const hasArabic = /[\u0600-\u06FF]/.test(decoded);
      if (hasArabic || decoded.length > 0 && !/\uFFFD/.test(decoded)) {
        return decoded;
      }
    } catch {
      // ignore
    }
    return fileName;
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function AdvertisementsComponent_Factory(t) {
      return new (t || AdvertisementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_cloud_storage_service__WEBPACK_IMPORTED_MODULE_3__.CloudStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_advertisements_service__WEBPACK_IMPORTED_MODULE_5__.AdvertisementsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AdvertisementsComponent,
      selectors: [["app-advertisements"]],
      decls: 75,
      vars: 35,
      consts: [[1, "advertisements-container", 3, "dir"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "fas", "fa-ad"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], ["class", "add-advertisement-form", 4, "ngIf"], [1, "filters-section"], [1, "filters-card"], [1, "search-filter"], [1, "search-input"], [1, "fas", "fa-search"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "type-filter"], [1, "filter-label"], [1, "fas", "fa-filter"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "image"], ["value", "video"], ["value", "presentation"], ["value", "document"], [1, "status-filter"], [1, "fas", "fa-tag"], ["value", "draft"], ["value", "active"], ["value", "inactive"], ["value", "expired"], [1, "advertisements-list-section"], [1, "list-header"], [1, "total-count"], [1, "fas", "fa-list", "me-2"], [1, "table-container"], [1, "advertisements-table"], [4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "pagination-section", 4, "ngIf"], [3, "confirmed", "cancelled", "visible", "data"], [1, "add-advertisement-form"], [1, "form-card"], [1, "form-title"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group", "full-width"], [1, "input-method-toggle"], ["type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-upload", "me-1"], [1, "fas", "fa-link", "me-1"], ["class", "form-row", 4, "ngIf"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["for", "status"], ["id", "status", "formControlName", "status", 1, "form-control"], ["for", "description"], ["id", "description", "formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], ["for", "file"], ["type", "file", "id", "file", "accept", "image/*,video/*,.ppt,.pptx,.pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.webp,.bmp,.svg,.ico,.tiff,.tif,.heic,.heif,.avif,.jfif,.mp4,.webm,.ogg,.mov,.avi,.mkv", 1, "form-control", 3, "change", "multiple"], [1, "form-text", "text-muted"], ["class", "selected-files-list mt-2", 4, "ngIf"], ["class", "file-preview", 4, "ngIf"], ["class", "upload-progress", 4, "ngIf"], [1, "selected-files-list", "mt-2"], [1, "text-muted", "small"], [1, "list-unstyled", "small", "mb-0", "mt-1"], ["class", "d-flex align-items-center gap-2 py-1", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-2", "py-1"], ["class", "fas fa-file-image text-info", 4, "ngIf"], ["class", "fas fa-file-video text-primary", 4, "ngIf"], ["class", "fas fa-file", 4, "ngIf"], [1, "text-muted"], [1, "fas", "fa-file-image", "text-info"], [1, "fas", "fa-file-video", "text-primary"], [1, "fas", "fa-file"], [1, "file-preview"], ["alt", "Preview", 3, "src", 4, "ngIf"], ["class", "file-info", 4, "ngIf"], ["alt", "Preview", 3, "src"], [1, "file-info"], [1, "fas", "fa-files"], [1, "upload-progress"], [1, "progress-bar-container"], [1, "progress-bar"], [1, "progress-text"], ["for", "fileUrl"], ["type", "url", "id", "fileUrl", "formControlName", "fileUrl", 1, "form-control", 3, "input", "blur", "change", "placeholder"], [1, "fas", "fa-link"], [1, "alert", "alert-danger"], [1, "fas", "fa-exclamation-circle", "me-2"], [1, "fas", "fa-spinner", "fa-spin"], [1, "title-cell"], ["class", "description", 4, "ngIf"], [1, "type-cell"], [1, "type-badge"], [1, "file-cell"], ["target", "_blank", "rel", "noopener noreferrer", 1, "file-link", 3, "href"], [1, "preview-cell"], ["target", "_blank", "rel", "noopener noreferrer", "class", "preview-link", 3, "href", 4, "ngIf"], ["class", "preview-empty", 4, "ngIf"], [1, "status-cell"], [1, "status-badge"], [1, "actions-cell"], [1, "action-buttons"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "title"], [1, "fas", "fa-edit"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "title"], [1, "fas", "fa-trash"], [1, "description"], ["target", "_blank", "rel", "noopener noreferrer", 1, "preview-link", 3, "href"], ["loading", "lazy", 1, "preview-thumb", 3, "src", "alt"], ["muted", "", "playsinline", "", "preload", "metadata", 1, "preview-thumb", "preview-video", 3, "src"], [1, "preview-empty"], [1, "empty-state"], ["role", "alert", 1, "alert", "alert-danger"], [1, "pagination-section"], ["aria-label", "Advertisements pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "fas", "fa-chevron-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"]],
      template: function AdvertisementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdvertisementsComponent_Template_button_click_7_listener() {
            return ctx.showAddForm = !ctx.showAddForm;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, AdvertisementsComponent_div_10_Template, 45, 28, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdvertisementsComponent_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function AdvertisementsComponent_Template_input_input_16_listener() {
            return ctx.filterAdvertisements();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 15)(18, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "select", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdvertisementsComponent_Template_select_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.selectedType, $event) || (ctx.selectedType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdvertisementsComponent_Template_select_change_21_listener() {
            return ctx.filterAdvertisements();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 24)(33, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "select", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdvertisementsComponent_Template_select_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdvertisementsComponent_Template_select_change_36_listener() {
            return ctx.filterAdvertisements();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 30)(48, "div", 31)(49, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 34)(53, "table", 35)(54, "thead")(55, "tr")(56, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, AdvertisementsComponent_tr_69_Template, 25, 15, "tr", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, AdvertisementsComponent_div_70_Template, 4, 1, "div", 37)(71, AdvertisementsComponent_div_71_Template, 4, 1, "div", 37)(72, AdvertisementsComponent_div_72_Template, 3, 1, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, AdvertisementsComponent_div_73_Template, 10, 8, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "app-confirm-dialog", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("confirmed", function AdvertisementsComponent_Template_app_confirm_dialog_confirmed_74_listener() {
            return ctx.onConfirmDelete();
          })("cancelled", function AdvertisementsComponent_Template_app_confirm_dialog_cancelled_74_listener() {
            return ctx.onCancelDelete();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("advertisements"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("addAdvertisement"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAddForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx.getTranslation("searchAdvertisements"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("type"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedType);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("allTypes"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("image"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("video"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("presentation"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("document"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("status"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("allStatuses"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("draft"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("active"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("inactive"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("expired"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx.getTranslation("totalAdvertisements"), ": ", ctx.totalAdvertisements, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("type"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("file"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("preview") || "Preview");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("status"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("actions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filteredAdvertisements);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.filteredAdvertisements.length === 0 && !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.showConfirmDialog)("data", ctx.confirmDialogData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent],
      styles: [".advertisements-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n  background-color: #f8f9fa;\n  min-height: 100vh;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.advertisements-container[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.advertisements-container[dir=rtl][_ngcontent-%COMP%]   .advertisement-card[_ngcontent-%COMP%]   .advertisement-header[_ngcontent-%COMP%]   .advertisement-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.advertisements-container[dir=rtl][_ngcontent-%COMP%]   .advertisement-card[_ngcontent-%COMP%]   .advertisement-footer[_ngcontent-%COMP%]   .advertisement-stats[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.advertisements-container[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.advertisements-container[dir=rtl][_ngcontent-%COMP%]   .advertisement-stats[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0.5rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  padding: 20px 25px;\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #34495e;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n}\n.form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  width: 20px;\n  margin-right: 8px;\n}\n\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border: 2px solid #e9ecef;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  background: rgba(255, 255, 255, 0.9);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #00695c;\n  box-shadow: 0 0 0 0.2rem rgba(0, 105, 92, 0.25);\n  background: #fff;\n}\n.form-control[_ngcontent-%COMP%]::placeholder, .form-select[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.form-control.is-invalid[_ngcontent-%COMP%], .form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 5px;\n  font-weight: 500;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 10px 20px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  border: none;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #004d40 0%, #26a69a 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:focus {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 0 0 0.2rem rgba(0, 105, 92, 0.25);\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #218838 0%, #1ea085 100%);\n}\n\n.btn-outline-danger[_ngcontent-%COMP%] {\n  border: 2px solid #dc3545;\n  color: #dc3545;\n  background: transparent;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: white;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 2px solid #6c757d;\n  color: #6c757d;\n  background: transparent;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #6c757d;\n  color: white;\n}\n\n.advertisement-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  padding: 20px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n  height: 100%;\n}\n.advertisement-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);\n  border-color: #00695c;\n}\n.advertisement-card.inactive[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  background: #f8f9fa;\n}\n.advertisement-card.inactive[_ngcontent-%COMP%]   .advertisement-title[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.advertisement-card.inactive[_ngcontent-%COMP%]   .advertisement-description[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 15px;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-header[_ngcontent-%COMP%]   .advertisement-type[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-header[_ngcontent-%COMP%]   .advertisement-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-header[_ngcontent-%COMP%]   .advertisement-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  font-size: 0.875rem;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-image[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-body[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-body[_ngcontent-%COMP%]   .advertisement-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n  margin-bottom: 10px;\n  font-size: 1.1rem;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-body[_ngcontent-%COMP%]   .advertisement-description[_ngcontent-%COMP%] {\n  color: #495057;\n  line-height: 1.6;\n  margin-bottom: 15px;\n  font-size: 0.95rem;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-body[_ngcontent-%COMP%]   .advertisement-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-body[_ngcontent-%COMP%]   .advertisement-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  width: 16px;\n  margin-right: 8px;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n  padding-top: 15px;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-footer[_ngcontent-%COMP%]   .advertisement-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-footer[_ngcontent-%COMP%]   .advertisement-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n}\n.advertisement-card[_ngcontent-%COMP%]   .advertisement-footer[_ngcontent-%COMP%]   .advertisement-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #00695c;\n}\n\n.badge.bg-primary[_ngcontent-%COMP%] {\n  background-color: #00695c !important;\n}\n.badge.bg-success[_ngcontent-%COMP%] {\n  background-color: #28a745 !important;\n}\n.badge.bg-info[_ngcontent-%COMP%] {\n  background-color: #17a2b8 !important;\n}\n.badge.bg-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107 !important;\n  color: #212529 !important;\n}\n.badge.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d !important;\n}\n\n.advertisement-stats[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 8px 12px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n\n.text-center[_ngcontent-%COMP%]   .fa-ad[_ngcontent-%COMP%] {\n  color: #dee2e6;\n}\n.text-center[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 10px;\n}\n.text-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  margin-bottom: 0;\n}\n\n@media (max-width: 768px) {\n  .advertisements-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    flex-direction: column;\n    text-align: center;\n    gap: 10px;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 5px;\n  }\n  .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n  }\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .advertisement-card[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .advertisement-card[_ngcontent-%COMP%]   .advertisement-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n    align-items: stretch;\n  }\n  .advertisement-card[_ngcontent-%COMP%]   .advertisement-header[_ngcontent-%COMP%]   .advertisement-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .advertisement-card[_ngcontent-%COMP%]   .advertisement-footer[_ngcontent-%COMP%]   .advertisement-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    text-align: center;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .advertisements-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 12px 15px;\n  }\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .advertisement-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .advertisement-card[_ngcontent-%COMP%]   .advertisement-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .advertisement-card[_ngcontent-%COMP%]   .advertisement-description[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .advertisement-card[_ngcontent-%COMP%]   .advertisement-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n  .form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n    font-size: 0.95rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 8px 14px;\n    font-size: 0.85rem;\n  }\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n  margin-bottom: 24px;\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n  position: relative;\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: white;\n  border-bottom: none;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f3f4;\n  transition: all 0.2s ease;\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.draft[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.active[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.inactive[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expired[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  vertical-align: middle;\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .title-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #2c3e50;\n  display: block;\n  margin-bottom: 4px;\n}\n.table-container[_ngcontent-%COMP%]   .title-cell[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 4px;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .type-badge.image[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.1);\n  color: #004085;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .type-badge.video[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  color: #721c24;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .type-badge.presentation[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #856404;\n}\n.table-container[_ngcontent-%COMP%]   .type-cell[_ngcontent-%COMP%]   .type-badge.document[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.1);\n  color: #383d41;\n}\n.table-container[_ngcontent-%COMP%]   .file-cell[_ngcontent-%COMP%]   .file-link[_ngcontent-%COMP%] {\n  color: #00695c;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .file-cell[_ngcontent-%COMP%]   .file-link[_ngcontent-%COMP%]:hover {\n  color: #4db6ac;\n  text-decoration: underline;\n}\n.table-container[_ngcontent-%COMP%]   .file-cell[_ngcontent-%COMP%]   .file-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .preview-cell[_ngcontent-%COMP%] {\n  width: 1%;\n  white-space: nowrap;\n}\n.table-container[_ngcontent-%COMP%]   .preview-cell[_ngcontent-%COMP%]   .preview-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\n.table-container[_ngcontent-%COMP%]   .preview-cell[_ngcontent-%COMP%]   .preview-thumb[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 32px;\n  object-fit: cover;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n  background: #fff;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);\n}\n.table-container[_ngcontent-%COMP%]   .preview-cell[_ngcontent-%COMP%]   .preview-video[_ngcontent-%COMP%] {\n  display: block;\n}\n.table-container[_ngcontent-%COMP%]   .preview-cell[_ngcontent-%COMP%]   .preview-empty[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .location-cell[_ngcontent-%COMP%]   .location-path[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #495057;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.draft[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #856404;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.active[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.1);\n  color: #155724;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.inactive[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.1);\n  color: #383d41;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.expired[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  color: #721c24;\n}\n.table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #495057;\n}\n.table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  color: #00695c;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  width: 1%;\n  text-align: right;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.actions-cell[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.actions-cell[_ngcontent-%COMP%] {\n  position: sticky;\n  right: 0;\n  z-index: 3;\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.actions-cell[_ngcontent-%COMP%] {\n  z-index: 5;\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.actions-cell[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: -8px 0 12px rgba(0, 0, 0, 0.04);\n}\n.table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td.actions-cell[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 12px;\n  font-size: 1.25rem;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  border: none;\n  min-width: 120px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n\n.add-advertisement-form[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  padding: 24px;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n  margin-bottom: 20px;\n  font-size: 1.25rem;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .upload-progress[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 10px;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .upload-progress[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background-color: #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .upload-progress[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #00695c 0%, #4db6ac 100%);\n  transition: width 0.3s ease;\n  border-radius: 4px;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .upload-progress[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-weight: 500;\n  font-size: 0.875rem;\n  display: block;\n  text-align: center;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .input-method-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .input-method-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 16px;\n  font-weight: 500;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .input-method-toggle[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  border: 2px solid #00695c;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .input-method-toggle[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #6c757d;\n  border: 2px solid #e9ecef;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .input-method-toggle[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #00695c;\n  color: #00695c;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .input-method-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 200px;\n  object-fit: contain;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  color: #495057;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border: 1px solid #e9ecef;\n  border-radius: 16px;\n  padding: 16px;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]:hover {\n  border-color: #00695c;\n  box-shadow: 0 8px 25px rgba(0, 105, 92, 0.15);\n  transform: translateY(-2px);\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-bottom: 6px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #495057;\n  margin-bottom: 10px;\n  min-height: 20px;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .card-content.selected[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-weight: 700;\n  background: rgba(0, 105, 92, 0.1);\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  padding: 6px 12px;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #6c757d;\n  transition: all 0.2s ease;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #00695c;\n  color: white;\n  border-color: #00695c;\n  transform: scale(1.02);\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  background: #f8f9fa;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  max-height: 200px;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease;\n  display: block !important;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  color: #495057;\n  transition: all 0.2s ease;\n  border-bottom: 1px solid #f1f3f4;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #00695c;\n  font-weight: 600;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f3f4;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  border: none;\n  min-width: 120px;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n  transform: translateY(-1px);\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n.add-advertisement-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.2);\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  display: flex;\n  gap: 20px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  transition: all 0.3s ease;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 280px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n  font-size: 14px;\n  z-index: 1;\n  pointer-events: none;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 12px 16px 12px 42px;\n  border: 1.5px solid #e9ecef;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  background: #fafbfc;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n  font-size: 0.85rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .type-filter[_ngcontent-%COMP%], .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%] {\n  min-width: 180px;\n  flex: 0 0 auto;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .type-filter[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%], .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #6c757d;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .type-filter[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 0.7rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .type-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border: 1.5px solid #e9ecef;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  background: #fafbfc;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2300695c' d='M6 9L1 4h10z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  background-size: 12px;\n  padding-right: 40px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .type-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background-color: white;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2300695c' d='M6 9L1 4h10z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  background-size: 12px;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .type-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover, .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: #00695c;\n  background-color: white;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: white;\n  border-radius: 16px;\n  padding: 16px 20px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.list-header[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.list-header[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 1rem;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #dee2e6;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 12px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .add-advertisement-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[dir=rtl][_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: auto;\n  right: 14px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 42px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .type-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-position: left 14px center;\n  padding-left: 40px;\n  padding-right: 16px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .advertisements-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 6px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .file-cell[_ngcontent-%COMP%]   .file-link[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .file-cell[_ngcontent-%COMP%]   .file-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 6px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .advertisement-card[_ngcontent-%COMP%]   .advertisement-header[_ngcontent-%COMP%]   .advertisement-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 5px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .advertisement-card[_ngcontent-%COMP%]   .advertisement-body[_ngcontent-%COMP%]   .advertisement-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .advertisement-card[_ngcontent-%COMP%]   .advertisement-footer[_ngcontent-%COMP%]   .advertisement-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 5px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .advertisement-stats[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWR2ZXJ0aXNlbWVudHMvY29tcG9uZW50cy9hZHZlcnRpc2VtZW50cy9hZHZlcnRpc2VtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNERBQUE7QUFDRjtBQUVJO0VBQ0UsaUJBQUE7QUFBTjtBQUtRO0VBQ0UsMkJBQUE7QUFIVjtBQVFRO0VBQ0UsMkJBQUE7QUFOVjtBQVdJO0VBQ0UsaUJBQUE7QUFUTjtBQWFNO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQVhSOztBQWtCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7QUFmRjtBQWlCRTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBZko7QUFpQkk7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUFmTjtBQW1CRTtFQUNFLGFBQUE7QUFqQko7O0FBcUJBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFsQkY7QUFvQkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBbEJKOztBQXNCQTs7RUFFRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQW5CRjtBQXFCRTs7RUFDRSxxQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7QUFsQko7QUFxQkU7O0VBQ0UsY0FBQTtBQWxCSjtBQXFCRTs7RUFDRSxxQkFBQTtFQUNBLGdEQUFBO0FBbEJKOztBQXNCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtB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ZGRpbmc6IDIwcHg7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcblxuICAmW2Rpcj1cInJ0bFwiXSB7XG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmFkdmVydGlzZW1lbnQtY2FyZCB7XG4gICAgICAuYWR2ZXJ0aXNlbWVudC1oZWFkZXIge1xuICAgICAgICAuYWR2ZXJ0aXNlbWVudC1hY3Rpb25zIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFkdmVydGlzZW1lbnQtZm9vdGVyIHtcbiAgICAgICAgLmFkdmVydGlzZW1lbnQtc3RhdHMge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLWxhYmVsIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgIC5hZHZlcnRpc2VtZW50LXN0YXRzIHtcbiAgICAgIC5iYWRnZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBZHZlcnRpc2VtZW50IEZvcm1cbi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuICAgIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICBoNSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuXG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gIH1cbn1cblxuLmZvcm0tbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzM0NDk1ZTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGkge1xuICAgIGNvbG9yOiAjMDA2OTVjO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG59XG5cbi5mb3JtLWNvbnRyb2wsXG4uZm9ybS1zZWxlY3Qge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMDUsIDkyLCAwLjI1KTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWRiNWJkO1xuICB9XG5cbiAgJi5pcy1pbnZhbGlkIHtcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjIwLCA1MywgNjksIDAuMjUpO1xuICB9XG59XG5cbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8vIEJ1dHRvbnNcbi5idG4ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJvcmRlcjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDRkNDAgMCUsICMyNmE2OWEgMTAwJSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMDUsIDkyLCAwLjI1KTtcbiAgfVxufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1IDAlLCAjMjBjOTk3IDEwMCUpO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyMTg4MzggMCUsICMxZWEwODUgMTAwJSk7XG4gIH1cbn1cblxuLmJ0bi1vdXRsaW5lLWRhbmdlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYzM1NDU7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzZjNzU3ZDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi8vIEFkdmVydGlzZW1lbnQgQ2FyZHNcbi5hZHZlcnRpc2VtZW50LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcbiAgfVxuXG4gICYuaW5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXG4gICAgLmFkdmVydGlzZW1lbnQtdGl0bGUge1xuICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgfVxuXG4gICAgLmFkdmVydGlzZW1lbnQtZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6ICNhZGI1YmQ7XG4gICAgfVxuICB9XG5cbiAgLmFkdmVydGlzZW1lbnQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgLmFkdmVydGlzZW1lbnQtdHlwZSB7XG4gICAgICAuYmFkZ2Uge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hZHZlcnRpc2VtZW50LWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICAuYnRuIHtcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFkdmVydGlzZW1lbnQtaW1hZ2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFkdmVydGlzZW1lbnQtYm9keSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIC5hZHZlcnRpc2VtZW50LXRpdGxlIHtcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG5cbiAgICAuYWR2ZXJ0aXNlbWVudC1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIH1cblxuICAgIC5hZHZlcnRpc2VtZW50LWRldGFpbHMge1xuICAgICAgLmRldGFpbC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcblxuICAgICAgICBpIHtcbiAgICAgICAgICBjb2xvcjogIzAwNjk1YztcbiAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hZHZlcnRpc2VtZW50LWZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICAuYWR2ZXJ0aXNlbWVudC1zdGF0cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogMTBweDtcblxuICAgICAgLnN0YXQtaXRlbSB7XG4gICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIGNvbG9yOiAjMDA2OTVjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENhdGVnb3J5IEJhZGdlIENvbG9yc1xuLmJhZGdlIHtcbiAgJi5iZy1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTVjICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmLmJnLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbiAgfVxuXG4gICYuYmctaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xuICB9XG5cbiAgJi5iZy13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbiAgfVxuXG4gICYuYmctc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gQWR2ZXJ0aXNlbWVudCBTdGF0c1xuLmFkdmVydGlzZW1lbnQtc3RhdHMge1xuICAuYmFkZ2Uge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbi8vIEVtcHR5IFN0YXRlXG4udGV4dC1jZW50ZXIge1xuICAuZmEtYWQge1xuICAgIGNvbG9yOiAjZGVlMmU2O1xuICB9XG5cbiAgaDUge1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogI2FkYjViZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgRGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFkdmVydGlzZW1lbnRzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gIH1cblxuICAuY2FyZCB7XG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICB9XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLmFkdmVydGlzZW1lbnQtY2FyZCB7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIC5hZHZlcnRpc2VtZW50LWhlYWRlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgICAgIC5hZHZlcnRpc2VtZW50LWFjdGlvbnMge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWR2ZXJ0aXNlbWVudC1mb290ZXIge1xuICAgICAgLmFkdmVydGlzZW1lbnQtc3RhdHMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYWR2ZXJ0aXNlbWVudHMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgIH1cblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gIH1cblxuICAuYWR2ZXJ0aXNlbWVudC1jYXJkIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuXG4gICAgLmFkdmVydGlzZW1lbnQtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5hZHZlcnRpc2VtZW50LWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cblxuICAgIC5hZHZlcnRpc2VtZW50LWltYWdlIHtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tY29udHJvbCxcbiAgLmZvcm0tc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICB9XG5cbiAgLmJ0biB7XG4gICAgcGFkZGluZzogOHB4IDE0cHg7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG59XG5cbi8vIFRhYmxlIFN0eWxpbmdcbi50YWJsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xuICAvLyBQcmV2ZW50IGxhc3QgY29sdW1uIChBY3Rpb25zKSBmcm9tIGJlaW5nIGNsaXBwZWQgb24gbmFycm93IHNjcmVlbnNcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIFxuICAuYWR2ZXJ0aXNlbWVudHMtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAvLyBBbGxvdyBzdGlja3kgY2VsbHMgdG8gbGF5ZXIgY29ycmVjdGx5XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XG4gICAgICBcbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIFxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0Ym9keSB7XG4gICAgICB0ciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmM2Y0O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLmRyYWZ0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjA1KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksIDAuMDUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLmluYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgMTE3LCAxMjUsIDAuMDUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLmV4cGlyZWQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksIDAuMDUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMTZweCAxMnB4O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnRpdGxlLWNlbGwge1xuICAgIHN0cm9uZyB7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICBcbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuICB9XG4gIFxuICAudHlwZS1jZWxsIHtcbiAgICAudHlwZS1iYWRnZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBcbiAgICAgICYuaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xuICAgICAgICBjb2xvcjogIzAwNDA4NTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi52aWRlbyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksIDAuMSk7XG4gICAgICAgIGNvbG9yOiAjNzIxYzI0O1xuICAgICAgfVxuICAgICAgXG4gICAgICAmLnByZXNlbnRhdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMSk7XG4gICAgICAgIGNvbG9yOiAjODU2NDA0O1xuICAgICAgfVxuICAgICAgXG4gICAgICAmLmRvY3VtZW50IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDExNywgMTI1LCAwLjEpO1xuICAgICAgICBjb2xvcjogIzM4M2Q0MTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5maWxlLWNlbGwge1xuICAgIC5maWxlLWxpbmsge1xuICAgICAgY29sb3I6ICMwMDY5NWM7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNnB4O1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjNGRiNmFjO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnByZXZpZXctY2VsbCB7XG4gICAgd2lkdGg6IDElO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAucHJldmlldy1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuICAgIC5wcmV2aWV3LXRodW1iIHtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgIH1cblxuICAgIC5wcmV2aWV3LXZpZGVvIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5wcmV2aWV3LWVtcHR5IHtcbiAgICAgIGNvbG9yOiAjYWRiNWJkO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5sb2NhdGlvbi1jZWxsIHtcbiAgICAubG9jYXRpb24tcGF0aCB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgfVxuICB9XG4gIFxuICAuc3RhdHVzLWNlbGwge1xuICAgIC5zdGF0dXMtYmFkZ2Uge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgXG4gICAgICAmLmRyYWZ0IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MywgNywgMC4xKTtcbiAgICAgICAgY29sb3I6ICM4NTY0MDQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTY3LCA2OSwgMC4xKTtcbiAgICAgICAgY29sb3I6ICMxNTU3MjQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgICYuaW5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgMTE3LCAxMjUsIDAuMSk7XG4gICAgICAgIGNvbG9yOiAjMzgzZDQxO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmLmV4cGlyZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xuICAgICAgICBjb2xvcjogIzcyMWMyNDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5kYXRlLWNlbGwge1xuICAgIC5kYXRlLWluZm8ge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgXG4gICAgICBkaXYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIFxuICAgICAgICBpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgICBjb2xvcjogIzAwNjk1YztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmFjdGlvbnMtY2VsbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMSU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogOHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIFxuICAgICAgLmJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBcbiAgICAgICAgaSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdGlja3kgQWN0aW9ucyBjb2x1bW4gKHJpZ2h0IHNpZGUpIGZvciBob3Jpem9udGFsIHNjcm9sbGluZyB0YWJsZXNcbiAgLmFkdmVydGlzZW1lbnRzLXRhYmxlIHtcbiAgICB0aGVhZCB0aC5hY3Rpb25zLWNlbGwsXG4gICAgdGJvZHkgdGQuYWN0aW9ucy1jZWxsIHtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICByaWdodDogMDtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgfVxuXG4gICAgLy8gS2VlcCBoZWFkZXIgY2VsbCBhYm92ZSBib2R5IGNlbGxzXG4gICAgdGhlYWQgdGguYWN0aW9ucy1jZWxsIHtcbiAgICAgIHotaW5kZXg6IDU7XG4gICAgICAvLyBFbnN1cmUgc3RpY2t5IGhlYWRlciBrZWVwcyBpdHMgZ3JhZGllbnQgKGluaGVyaXRzIGZyb20gdGhlYWQsIGJ1dCBiZSBleHBsaWNpdClcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XG4gICAgfVxuXG4gICAgLy8gR2l2ZSBib2R5IHN0aWNreSBjZWxscyBhbiBvcGFxdWUgYmFja2dyb3VuZCBzbyB0ZXh0IGJlbmVhdGggZG9lc24ndCBzaG93IHRocm91Z2hcbiAgICB0Ym9keSB0ZC5hY3Rpb25zLWNlbGwge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJveC1zaGFkb3c6IC04cHggMCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgfVxuXG4gICAgLy8gT24gcm93IGhvdmVyLCBrZWVwIHN0aWNreSBjZWxsIGJhY2tncm91bmQgY29uc2lzdGVudCB3aXRoIHJvdyBob3ZlclxuICAgIHRib2R5IHRyOmhvdmVyIHRkLmFjdGlvbnMtY2VsbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIH1cbiAgfVxufVxuXG4vLyBQYWdlIEhlYWRlclxuLnBhZ2UtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2Y4ZjlmYSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xuICBcbiAgLmhlYWRlci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBcbiAgICAucGFnZS10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICMwMDY5NWM7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjLCAjNGRiNmFjKTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBcbiAgICAgIC5idG4ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgXG4gICAgICAgICYuYnRuLXByaW1hcnkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAxMDUsIDkyLCAwLjMpO1xuICAgICAgICAgIFxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDEwNSwgOTIsIDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEZvcm0gU3R5bGluZ1xuLmFkZC1hZHZlcnRpc2VtZW50LWZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBcbiAgLmZvcm0tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIFxuICAgIC5mb3JtLXRpdGxlIHtcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuICB9XG4gIFxuICAuZm9ybS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgZmxleDogMTtcbiAgICAgIFxuICAgICAgJi5mdWxsLXdpZHRoIHtcbiAgICAgICAgZmxleDogMSAxIDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAudXBsb2FkLXByb2dyZXNzIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcblxuICAgIC5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtdGV4dCB7XG4gICAgICBjb2xvcjogIzAwNjk1YztcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gSW5wdXQgTWV0aG9kIFRvZ2dsZVxuICAuaW5wdXQtbWV0aG9kLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgIC5idG4ge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgICAmLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA2OTVjO1xuICAgICAgfVxuXG4gICAgICAmLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcbiAgICAgICAgICBjb2xvcjogIzAwNjk1YztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpbGUtcHJldmlldyB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBcbiAgICBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cbiAgfVxuICBcbiAgLmZpbGUtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgfVxuICBcbiAgLnNlbGVjdGlvbi1jYXJkcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE4MHB4LCAxZnIpKTtcbiAgICBnYXA6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBcbiAgICAuc2VsZWN0aW9uLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2Y4ZjlmYSAxMDAlKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDEwNSwgOTIsIDAuMTUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jYXJkLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICBjb2xvcjogIzAwNjk1YztcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgXG4gICAgICAgIGkge1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICAgICAgXG4gICAgICAgICAgJi5yb3RhdGVkIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2OTVjO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgKyA4cHgpO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuMnMgZWFzZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgXG4gICAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcbiAgICAgICAgICBcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgICAgICAgY29sb3I6ICMwMDY5NWM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG4gIFxuICAuZm9ybS1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYzZjQ7XG4gICAgXG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgIFxuICAgICAgJi5idG4tc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAmLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMTA1LCA5MiwgMC4zKTtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMTA1LCA5MiwgMC40KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAxMDUsIDkyLCAwLjIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEZpbHRlcnMgU2VjdGlvblxuLmZpbHRlcnMtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIFxuICAuZmlsdGVycy1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cbiAgICBcbiAgICAuc2VhcmNoLWZpbHRlciB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgbWluLXdpZHRoOiAyODBweDtcbiAgICAgIFxuICAgICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXG4gICAgICAgIGkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAxNHB4O1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICBjb2xvcjogI2FkYjViZDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4IDEycHggNDJweDtcbiAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZiZmM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEwNSwgOTIsIDAuMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYWRiNWJkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAudHlwZS1maWx0ZXIsXG4gICAgLnN0YXR1cy1maWx0ZXIge1xuICAgICAgbWluLXdpZHRoOiAxODBweDtcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgXG4gICAgICAuZmlsdGVyLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICBcbiAgICAgICAgaSB7XG4gICAgICAgICAgY29sb3I6ICMwMDY5NWM7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTllY2VmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgMTIgMTInJTNFJTNDcGF0aCBmaWxsPSclMjMwMDY5NWMnIGQ9J002IDlMMSA0aDEweicvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTRweCBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTJweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxMiAxMiclM0UlM0NwYXRoIGZpbGw9JyUyMzAwNjk1YycgZD0nTTYgOUwxIDRoMTB6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTRweCBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMnB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEwNSwgOTIsIDAuMSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBMaXN0IEhlYWRlclxuLmxpc3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcbiAgXG4gIC50b3RhbC1jb3VudCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBcbiAgICBpIHtcbiAgICAgIGNvbG9yOiAjMDA2OTVjO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbXB0eSBTdGF0ZVxuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XG4gIFxuICBpIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgY29sb3I6ICNkZWUyZTY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuICBcbiAgaDUge1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuICBcbiAgcCB7XG4gICAgY29sb3I6ICNhZGI1YmQ7XG4gIH1cbn1cblxuLy8gUlRMIFNwZWNpZmljIEFkanVzdG1lbnRzXG5bZGlyPVwicnRsXCJdIHtcbiAgLmZvcm0tbGFiZWwge1xuICAgIGkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG4gIH1cblxuICAuYnRuIHtcbiAgICBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuICB9XG4gIFxuICAucGFnZS1oZWFkZXIge1xuICAgIC5oZWFkZXItY29udGVudCB7XG4gICAgICAucGFnZS10aXRsZSB7XG4gICAgICAgIGkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAuaGVhZGVyLWFjdGlvbnMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuYWRkLWFkdmVydGlzZW1lbnQtZm9ybSB7XG4gICAgLmZvcm0tYWN0aW9ucyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICB9XG4gIFxuICAuZmlsdGVycy1zZWN0aW9uIHtcbiAgICAuZmlsdGVycy1jYXJkIHtcbiAgICAgIC5zZWFyY2gtZmlsdGVyIHtcbiAgICAgICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgcmlnaHQ6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnR5cGUtZmlsdGVyLFxuICAgICAgLnN0YXR1cy1maWx0ZXIge1xuICAgICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDE0cHggY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAudGFibGUtY29udGFpbmVyIHtcbiAgICAuYWR2ZXJ0aXNlbWVudHMtdGFibGUge1xuICAgICAgdGhlYWQgdGgge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGJvZHkgdGQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmRhdGUtY2VsbCAuZGF0ZS1pbmZvIGRpdiBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgfVxuICAgIFxuICAgIC5maWxlLWNlbGwgLmZpbGUtbGluayB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICBcbiAgICAgIGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuYWR2ZXJ0aXNlbWVudC1jYXJkIHtcbiAgICAuYWR2ZXJ0aXNlbWVudC1oZWFkZXIge1xuICAgICAgLmFkdmVydGlzZW1lbnQtYWN0aW9ucyB7XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgIGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWR2ZXJ0aXNlbWVudC1ib2R5IHtcbiAgICAgIC5hZHZlcnRpc2VtZW50LWRldGFpbHMge1xuICAgICAgICAuZGV0YWlsLWl0ZW0ge1xuICAgICAgICAgIGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWR2ZXJ0aXNlbWVudC1mb290ZXIge1xuICAgICAgLmFkdmVydGlzZW1lbnQtc3RhdHMge1xuICAgICAgICAuc3RhdC1pdGVtIHtcbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFkdmVydGlzZW1lbnQtc3RhdHMge1xuICAgIC5iYWRnZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4426:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/advertisements/components/advertising-banner/advertising-banner.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvertisingBannerComponent: () => (/* binding */ AdvertisingBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function AdvertisingBannerComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AdvertisingBannerComponent_div_9_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.addBanner());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 29)(6, "div", 30)(7, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 30)(11, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 29)(15, "div", 30)(16, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 30)(20, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 29)(24, "div", 30)(25, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 30)(29, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 43)(33, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdvertisingBannerComponent_div_9_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showAddForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getTranslation("addNewBanner"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.bannerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("bannerTitle"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterBannerTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("bannerDescription"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterBannerDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("imageUrl"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterImageUrl"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("priority"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterPriority"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("startDate"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("endDate"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.bannerForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("addBanner"), " ");
  }
}
function AdvertisingBannerComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "div", 48)(3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 50)(6, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 52)(9, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 55)(12, "h3", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 58)(17, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 62)(28, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdvertisingBannerComponent_div_29_Template_button_click_28_listener() {
      const banner_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleBannerStatus(banner_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdvertisingBannerComponent_div_29_Template_button_click_30_listener() {
      const banner_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.deleteBanner(banner_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const banner_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.getTranslation("priority"), ": ", banner_r4.priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](banner_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusDisplayName(banner_r4.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", banner_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", banner_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](banner_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](banner_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.getTranslation("from"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 17, banner_r4.startDate, "short"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.getTranslation("to"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](26, 20, banner_r4.endDate, "short"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](banner_r4.status === "active" ? "btn-warning" : "btn-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", banner_r4.status === "active" ? ctx_r1.getTranslation("deactivate") : ctx_r1.getTranslation("activate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("delete"), " ");
  }
}
function AdvertisingBannerComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noBannersFound"));
  }
}
class AdvertisingBannerComponent {
  constructor(languageService, translationService, fb) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.banners = [];
    this.filteredBanners = [];
    this.searchTerm = '';
    this.selectedStatus = 'all';
    this.showAddForm = false;
    this.bannerForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      imageUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      priority: [5, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(10)]],
      startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadBanners();
  }
  loadBanners() {
    // Mock data - replace with actual API call
    this.banners = [{
      id: 1,
      title: 'شريط إعلاني ترحيبي',
      description: 'شريط إعلاني ترحيبي للمستخدمين الجدد في النظام',
      imageUrl: 'https://via.placeholder.com/800x200/667eea/ffffff?text=Welcome+Banner',
      priority: 1,
      startDate: new Date(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      // 30 days from now
      status: 'active'
    }, {
      id: 2,
      title: 'إعلان الخدمات الجديدة',
      description: 'إعلان عن الخدمات الجديدة المتاحة في النظام',
      imageUrl: 'https://via.placeholder.com/800x200/28a745/ffffff?text=New+Services',
      priority: 2,
      startDate: new Date(),
      endDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
      // 45 days from now
      status: 'active'
    }, {
      id: 3,
      title: 'إعلان الصيانة',
      description: 'إعلان عن مواعيد الصيانة المجدولة',
      imageUrl: 'https://via.placeholder.com/800x200/ffc107/000000?text=Maintenance',
      priority: 3,
      startDate: new Date(),
      endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      // 15 days from now
      status: 'inactive'
    }];
    this.filteredBanners = [...this.banners];
  }
  filterBanners() {
    this.filteredBanners = this.banners.filter(banner => {
      const matchesSearch = banner.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || banner.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.selectedStatus === 'all' || banner.status === this.selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }
  addBanner() {
    if (this.bannerForm.valid) {
      const formValue = this.bannerForm.value;
      const banner = {
        id: this.banners.length + 1,
        title: formValue.title,
        description: formValue.description,
        imageUrl: formValue.imageUrl,
        priority: formValue.priority,
        startDate: new Date(formValue.startDate),
        endDate: new Date(formValue.endDate),
        status: 'inactive'
      };
      this.banners.unshift(banner);
      this.filterBanners();
      this.resetForm();
      this.showAddForm = false;
    }
  }
  resetForm() {
    this.bannerForm.reset({
      priority: 5
    });
  }
  toggleBannerStatus(banner) {
    banner.status = banner.status === 'active' ? 'inactive' : 'active';
  }
  deleteBanner(id) {
    if (confirm(this.getTranslation('confirmDelete'))) {
      this.banners = this.banners.filter(b => b.id !== id);
      this.filterBanners();
    }
  }
  getStatusDisplayName(status) {
    const statuses = {
      active: this.getTranslation('active'),
      inactive: this.getTranslation('inactive')
    };
    return statuses[status] || status;
  }
  // Use centralized translation service
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function AdvertisingBannerComponent_Factory(t) {
      return new (t || AdvertisingBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdvertisingBannerComponent,
      selectors: [["app-advertising-banner"]],
      decls: 31,
      vars: 14,
      consts: [[1, "advertising-banner-container", 3, "dir"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "fas", "fa-list"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], ["class", "add-banner-form", 4, "ngIf"], [1, "filters-section"], [1, "filters-card"], [1, "search-filter"], [1, "search-input"], [1, "fas", "fa-search"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "status-filter"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "banners-list"], [1, "list-header"], [1, "total-count"], [1, "banners-grid"], ["class", "banner-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "add-banner-form"], [1, "form-card"], [1, "form-title"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["for", "description"], ["id", "description", "formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], ["for", "imageUrl"], ["type", "url", "id", "imageUrl", "formControlName", "imageUrl", 1, "form-control", 3, "placeholder"], ["for", "priority"], ["type", "number", "id", "priority", "formControlName", "priority", "min", "1", "max", "10", 1, "form-control", 3, "placeholder"], ["for", "startDate"], ["type", "date", "id", "startDate", "formControlName", "startDate", 1, "form-control"], ["for", "endDate"], ["type", "date", "id", "endDate", "formControlName", "endDate", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "banner-card"], [1, "card-header"], [1, "banner-priority"], [1, "priority-badge"], [1, "banner-status"], [1, "status-badge"], [1, "card-body"], [1, "banner-image"], [1, "banner-img", 3, "src", "alt"], [1, "banner-info"], [1, "banner-title"], [1, "banner-description"], [1, "banner-dates"], [1, "date-item"], [1, "fas", "fa-calendar-plus"], [1, "fas", "fa-calendar-minus"], [1, "card-actions"], [1, "btn", "btn-sm", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "empty-state"]],
      template: function AdvertisingBannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdvertisingBannerComponent_Template_button_click_6_listener() {
            return ctx.showAddForm = !ctx.showAddForm;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AdvertisingBannerComponent_div_9_Template, 37, 15, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AdvertisingBannerComponent_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AdvertisingBannerComponent_Template_input_input_15_listener() {
            return ctx.filterBanners();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14)(17, "select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AdvertisingBannerComponent_Template_select_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdvertisingBannerComponent_Template_select_change_17_listener() {
            return ctx.filterBanners();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 19)(25, "div", 20)(26, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, AdvertisingBannerComponent_div_29_Template, 32, 23, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AdvertisingBannerComponent_div_30_Template, 4, 1, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("advertisingBanner"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("addNewBanner"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.getTranslation("searchBanners"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("allStatuses"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("active"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("inactive"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.getTranslation("totalBanners"), ": ", ctx.filteredBanners.length, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredBanners);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredBanners.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: [".advertising-banner-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 1.8rem;\n}\n\n.add-banner-form[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 25px 0;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 8px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.form-control[type=textarea][_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.filters-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.search-filter[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n}\n.search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 45px;\n  width: 100%;\n}\n\n.status-filter[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.banners-list[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.list-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.total-count[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n\n.banners-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 20px;\n}\n\n.banner-card[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.banner-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 15px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.banner-priority[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n.banner-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.banner-status.active[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.banner-status.inactive[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.banner-image[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.banner-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n}\n\n.banner-info[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 10px 0;\n}\n.banner-info[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin: 0 0 20px 0;\n  line-height: 1.5;\n}\n\n.banner-dates[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.date-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.date-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  color: #00695c;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f8f9fa;\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  border-top: 1px solid #e9ecef;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #00695c;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #004d40;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n.btn.btn-warning[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #212529;\n}\n.btn.btn-warning[_ngcontent-%COMP%]:hover {\n  background: #e0a800;\n}\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6c757d;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #adb5bd;\n  margin-bottom: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: auto;\n  right: 15px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 45px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[dir=rtl][_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n@media (max-width: 1200px) {\n  .advertising-banner-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .banners-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    justify-content: center;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n  .filters-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-filter[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .status-filter[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .banners-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .card-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n@media (max-width: 480px) {\n  .advertising-banner-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .form-card[_ngcontent-%COMP%], .filters-card[_ngcontent-%COMP%], .banners-list[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .card-header[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .banner-img[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWR2ZXJ0aXNlbWVudHMvY29tcG9uZW50cy9hZHZlcnRpc2luZy1iYW5uZXIvYWR2ZXJ0aXNpbmctYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUFGO0FBRUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0FBSEo7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBTEY7O0FBU0E7RUFDRSxtQkFBQTtBQU5GOztBQVNBO0VBQ0Us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RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQXBDSjtBQXVDRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFyQ0o7QUF3Q0U7RUFDRSwyQkFBQTtBQXRDSjtBQXlDRTtFQUNFLDJCQUFBO0FBdkNKOztBQTRDQTtFQUNFO0lBQ0UsYUFBQTtFQXpDRjtFQTRDQTtJQUNFLDREQUFBO0VBMUNGO0FBQ0Y7QUE2Q0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0Esb0JBQUE7RUEzQ0Y7RUE4Q0E7SUFDRSxpQkFBQTtJQUNBLHVCQUFBO0VBNUNGO0VBOENFO0lBQ0UsaUJBQUE7RUE1Q0o7RUFnREE7SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUE5Q0Y7RUFpREE7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0VBL0NGO0VBa0RBO0lBQ0UsZUFBQTtFQWhERjtFQW1EQTtJQUNFLGVBQUE7RUFqREY7RUFvREE7SUFDRSwwQkFBQTtFQWxERjtFQXFEQTtJQUNFLHdCQUFBO0VBbkRGO0VBcURFO0lBQ0UsT0FBQTtFQW5ESjtFQXVEQTtJQUNFLHdCQUFBO0VBckRGO0VBdURFO0lBQ0UsT0FBQTtFQXJESjtBQUNGO0FBeURBO0VBQ0U7SUFDRSxhQUFBO0VBdkRGO0VBMERBOzs7SUFHRSxhQUFBO0VBeERGO0VBMkRBOzs7SUFHRSxhQUFBO0VBekRGO0VBNERBO0lBQ0UsaUJBQUE7RUExREY7RUE0REU7SUFDRSxpQkFBQTtFQTFESjtFQThEQTtJQUNFLGFBQUE7RUE1REY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hZHZlcnRpc2luZy1iYW5uZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vLyBQYWdlIEhlYWRlclxyXG4ucGFnZS1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTVweDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBtYXJnaW46IDA7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogIzAwNjk1YztcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIEJhbm5lciBGb3JtXHJcbi5hZGQtYmFubmVyLWZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbn1cclxuXHJcbi5mb3JtLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbjogMCAwIDI1cHggMDtcclxufVxyXG5cclxuLmZvcm0tcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdhcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IDEycHggMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2FkYjViZDtcclxuICB9XHJcbiAgXHJcbiAgJlt0eXBlPVwidGV4dGFyZWFcIl0ge1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLy8gRmlsdGVycyBTZWN0aW9uXHJcbi5maWx0ZXJzLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXJzLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmlsdGVyIHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnN0YXR1cy1maWx0ZXIge1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi8vIEJhbm5lcnMgTGlzdFxyXG4uYmFubmVycy1saXN0IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG59XHJcblxyXG4ubGlzdC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbn1cclxuXHJcbi50b3RhbC1jb3VudCB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxufVxyXG5cclxuLmJhbm5lcnMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uYmFubmVyLWNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxufVxyXG5cclxuLmJhbm5lci1wcmlvcml0eSB7XHJcbiAgLnByaW9yaXR5LWJhZGdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlM2YyZmQ7XHJcbiAgICBjb2xvcjogIzE1NjVjMDtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxufVxyXG5cclxuLmJhbm5lci1zdGF0dXMge1xyXG4gIC5zdGF0dXMtYmFkZ2Uge1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gICYuYWN0aXZlIC5zdGF0dXMtYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gIH1cclxuICBcclxuICAmLmluYWN0aXZlIC5zdGF0dXMtYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZDdkYTtcclxuICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmJhbm5lci1pbWFnZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iYW5uZXItaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG59XHJcblxyXG4uYmFubmVyLWluZm8ge1xyXG4gIC5iYW5uZXItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYW5uZXItZGVzY3JpcHRpb24ge1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxufVxyXG5cclxuLmJhbm5lci1kYXRlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmRhdGUtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBcclxuICBpIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1hY3Rpb25zIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIH1cclxuICBcclxuICAmLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDY5NWM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDA0ZDQwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1YTYyNjg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZDogIzI4YTc0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyMTg4Mzg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYzEwNztcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2UwYTgwMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4tZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYzgyMzMzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLmJ0bi1zbSB7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjBweCAyMHB4O1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIFxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgY29sb3I6ICNhZGI1YmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUlRMIFN1cHBvcnRcclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgLnNlYXJjaC1pbnB1dCBpIHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1pbnB1dCAuZm9ybS1jb250cm9sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgRGVzaWduXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuYWR2ZXJ0aXNpbmctYmFubmVyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuYmFubmVycy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5oZWFkZXItY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZmlsdGVycy1jYXJkIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1maWx0ZXIge1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzLWZpbHRlciB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5iYW5uZXJzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgXHJcbiAgICAuYnRuIHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBcclxuICAgIC5idG4ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmFkdmVydGlzaW5nLWJhbm5lci1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY2FyZCxcclxuICAuZmlsdGVycy1jYXJkLFxyXG4gIC5iYW5uZXJzLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyLFxyXG4gIC5jYXJkLWJvZHksXHJcbiAgLmNhcmQtYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYmFubmVyLWltZyB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8002:
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/advertisements/components/view-advertisements/view-advertisements.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewAdvertisementsComponent: () => (/* binding */ ViewAdvertisementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function ViewAdvertisementsComponent_tr_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 62)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td")(13, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td")(28, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "td")(32, "div", 66)(33, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const advertisement_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", advertisement_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", advertisement_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](advertisement_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](advertisement_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.getTypeBadgeClass(advertisement_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getTypeDisplayName(advertisement_r1.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.getStatusBadgeClass(advertisement_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusDisplayName(advertisement_r1.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 17, advertisement_r1.startDate, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](20, 20, advertisement_r1.endDate, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 23, advertisement_r1.clicks));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 25, advertisement_r1.impressions));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.getCTRClass(advertisement_r1.ctr));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](30, 27, advertisement_r1.ctr, "1.2-2"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r1.getTranslation("viewDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r1.getTranslation("edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r1.getTranslation("delete"));
  }
}
function ViewAdvertisementsComponent_div_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noAdvertisementsFound"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getTranslation("tryAdjustingFilters"));
  }
}
class ViewAdvertisementsComponent {
  constructor(languageService, translationService) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.currentLanguage = 'ar';
    this.advertisements = [];
    this.filteredAdvertisements = [];
    this.searchTerm = '';
    this.selectedType = 'all';
    this.selectedStatus = 'all';
    this.selectedDateRange = 'all';
    this.sortField = 'title';
    this.sortDirection = 'asc';
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadAdvertisements();
  }
  loadAdvertisements() {
    // Mock data - replace with actual API call
    this.advertisements = [{
      id: 1,
      title: 'إعلان المنتجات الجديدة',
      description: 'إعلان عن أحدث المنتجات في المتجر',
      type: 'banner',
      status: 'active',
      imageUrl: 'https://via.placeholder.com/100x60/667eea/ffffff?text=Ad1',
      startDate: new Date(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      clicks: 150,
      impressions: 2500,
      ctr: 6.0
    }, {
      id: 2,
      title: 'عرض خاص للعملاء',
      description: 'عرض حصري للعملاء المسجلين',
      type: 'popup',
      status: 'active',
      imageUrl: 'https://via.placeholder.com/100x60/28a745/ffffff?text=Ad2',
      startDate: new Date(),
      endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      clicks: 75,
      impressions: 1200,
      ctr: 6.25
    }, {
      id: 3,
      title: 'إعلان الخدمات',
      description: 'إعلان عن الخدمات المتاحة',
      type: 'sidebar',
      status: 'expired',
      imageUrl: 'https://via.placeholder.com/100x60/ffc107/000000?text=Ad3',
      startDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      clicks: 25,
      impressions: 800,
      ctr: 3.125
    }, {
      id: 4,
      title: 'إعلان العروض الموسمية',
      description: 'عروض خاصة للموسم الحالي',
      type: 'banner',
      status: 'inactive',
      imageUrl: 'https://via.placeholder.com/100x60/dc3545/ffffff?text=Ad4',
      startDate: new Date(),
      endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      clicks: 0,
      impressions: 0,
      ctr: 0
    }];
    this.filteredAdvertisements = [...this.advertisements];
  }
  filterAdvertisements() {
    this.filteredAdvertisements = this.advertisements.filter(advertisement => {
      const matchesSearch = advertisement.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || advertisement.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.selectedType === 'all' || advertisement.type === this.selectedType;
      const matchesStatus = this.selectedStatus === 'all' || advertisement.status === this.selectedStatus;
      const matchesDateRange = this.filterByDateRange(advertisement);
      return matchesSearch && matchesType && matchesStatus && matchesDateRange;
    });
  }
  filterByDateRange(advertisement) {
    if (this.selectedDateRange === 'all') return true;
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(startOfDay.getTime() - startOfDay.getDay() * 24 * 60 * 60 * 1000);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    switch (this.selectedDateRange) {
      case 'today':
        return advertisement.startDate >= startOfDay;
      case 'week':
        return advertisement.startDate >= startOfWeek;
      case 'month':
        return advertisement.startDate >= startOfMonth;
      default:
        return true;
    }
  }
  toggleSort(field) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.sortAdvertisements();
  }
  sortAdvertisements() {
    this.filteredAdvertisements.sort((a, b) => {
      let aValue = a[this.sortField];
      let bValue = b[this.sortField];
      if (this.sortField === 'ctr') {
        aValue = a.ctr;
        bValue = b.ctr;
      }
      if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
  getTotalImpressions() {
    return this.advertisements.reduce((total, ad) => total + ad.impressions, 0);
  }
  getTotalClicks() {
    return this.advertisements.reduce((total, ad) => total + ad.clicks, 0);
  }
  getAverageCTR() {
    const totalImpressions = this.getTotalImpressions();
    if (totalImpressions === 0) return 0;
    return this.getTotalClicks() / totalImpressions * 100;
  }
  getTypeDisplayName(type) {
    const types = {
      banner: this.getTranslation('banner'),
      popup: this.getTranslation('popup'),
      sidebar: this.getTranslation('sidebar')
    };
    return types[type] || type;
  }
  getStatusDisplayName(status) {
    const statuses = {
      active: this.getTranslation('active'),
      inactive: this.getTranslation('inactive'),
      expired: this.getTranslation('expired')
    };
    return statuses[status] || status;
  }
  getTypeBadgeClass(type) {
    const badgeClasses = {
      banner: 'bg-primary',
      popup: 'bg-success',
      sidebar: 'bg-info'
    };
    return badgeClasses[type] || 'bg-secondary';
  }
  getStatusBadgeClass(status) {
    const badgeClasses = {
      active: 'bg-success',
      inactive: 'bg-secondary',
      expired: 'bg-danger'
    };
    return badgeClasses[status] || 'bg-secondary';
  }
  getCTRClass(ctr) {
    if (ctr >= 5) return 'ctr-high';
    if (ctr >= 2) return 'ctr-medium';
    return 'ctr-low';
  }
  getSortIcon(field) {
    if (this.sortField !== field) return 'fas fa-sort';
    return this.sortDirection === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
  }
  exportData() {
    // Implement export functionality
    console.log('Exporting data...');
  }
  printReport() {
    // Implement print functionality
    window.print();
  }
  // Use centralized translation service
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function ViewAdvertisementsComponent_Factory(t) {
      return new (t || ViewAdvertisementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ViewAdvertisementsComponent,
      selectors: [["app-view-advertisements"]],
      decls: 151,
      vars: 70,
      consts: [[1, "view-advertisements-container", 3, "dir"], [1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "page-title"], [1, "fas", "fa-chart-line", "me-2"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-filter", "me-2"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-3"], ["for", "searchViewAdvertisements", 1, "form-label"], [1, "fas", "fa-search", "me-2"], ["type", "text", "id", "searchViewAdvertisements", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], ["for", "typeFilterView", 1, "form-label"], [1, "fas", "fa-tag", "me-2"], ["id", "typeFilterView", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "banner"], ["value", "popup"], ["value", "sidebar"], ["for", "statusFilterView", 1, "form-label"], [1, "fas", "fa-toggle-on", "me-2"], ["id", "statusFilterView", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "active"], ["value", "inactive"], ["value", "expired"], ["for", "dateRangeFilter", 1, "form-label"], [1, "fas", "fa-calendar", "me-2"], ["id", "dateRangeFilter", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "today"], ["value", "week"], ["value", "month"], [1, "stat-card", "bg-primary", "text-white"], [1, "stat-icon"], [1, "fas", "fa-eye"], [1, "stat-content"], [1, "stat-card", "bg-success", "text-white"], [1, "fas", "fa-mouse-pointer"], [1, "stat-card", "bg-info", "text-white"], [1, "fas", "fa-percentage"], [1, "stat-card", "bg-warning", "text-white"], [1, "fas", "fa-ad"], [1, "row"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-table", "me-2"], [1, "table-actions"], [1, "btn", "btn-outline-primary", "btn-sm", "me-2", 3, "click"], [1, "fas", "fa-download", "me-1"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fas", "fa-print", "me-1"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-dark"], [1, "sortable", 3, "click"], [1, "ms-1"], [4, "ngFor", "ngForOf"], ["class", "text-center py-5", 4, "ngIf"], [1, "advertisement-info"], [1, "ad-thumbnail", 3, "src", "alt"], [1, "ad-details"], [1, "text-muted", "d-block"], [1, "badge", 3, "ngClass"], [1, "ctr-value", 3, "ngClass"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-outline-info", 3, "title"], [1, "btn", "btn-outline-primary", 3, "title"], [1, "fas", "fa-edit"], [1, "btn", "btn-outline-danger", 3, "title"], [1, "fas", "fa-trash"], [1, "text-center", "py-5"], [1, "fas", "fa-chart-bar", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"]],
      template: function ViewAdvertisementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2)(8, "div", 3)(9, "div", 6)(10, "div", 7)(11, "h5", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ViewAdvertisementsComponent_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function ViewAdvertisementsComponent_Template_input_input_20_listener() {
            return ctx.filterAdvertisements();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12)(22, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "select", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ViewAdvertisementsComponent_Template_select_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedType, $event) || (ctx.selectedType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ViewAdvertisementsComponent_Template_select_change_25_listener() {
            return ctx.filterAdvertisements();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 12)(35, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "select", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ViewAdvertisementsComponent_Template_select_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ViewAdvertisementsComponent_Template_select_change_38_listener() {
            return ctx.filterAdvertisements();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 12)(48, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "select", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ViewAdvertisementsComponent_Template_select_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedDateRange, $event) || (ctx.selectedDateRange = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ViewAdvertisementsComponent_Template_select_change_51_listener() {
            return ctx.filterAdvertisements();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 2)(61, "div", 3)(62, "div", 11)(63, "div", 12)(64, "div", 35)(65, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 38)(68, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 12)(74, "div", 39)(75, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 38)(78, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](80, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 12)(84, "div", 41)(85, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 38)(88, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](90, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 12)(94, "div", 43)(95, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 38)(98, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 45)(103, "div", 3)(104, "div", 6)(105, "div", 7)(106, "div", 46)(107, "h5", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 48)(111, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAdvertisementsComponent_Template_button_click_111_listener() {
            return ctx.exportData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAdvertisementsComponent_Template_button_click_114_listener() {
            return ctx.printReport();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 10)(118, "div", 53)(119, "table", 54)(120, "thead", 55)(121, "tr")(122, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAdvertisementsComponent_Template_th_click_122_listener() {
            return ctx.toggleSort("title");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAdvertisementsComponent_Template_th_click_125_listener() {
            return ctx.toggleSort("type");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAdvertisementsComponent_Template_th_click_128_listener() {
            return ctx.toggleSort("status");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAdvertisementsComponent_Template_th_click_131_listener() {
            return ctx.toggleSort("startDate");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAdvertisementsComponent_Template_th_click_134_listener() {
            return ctx.toggleSort("endDate");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAdvertisementsComponent_Template_th_click_137_listener() {
            return ctx.toggleSort("clicks");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAdvertisementsComponent_Template_th_click_140_listener() {
            return ctx.toggleSort("impressions");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAdvertisementsComponent_Template_th_click_143_listener() {
            return ctx.toggleSort("ctr");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](149, ViewAdvertisementsComponent_tr_149_Template, 39, 30, "tr", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](150, ViewAdvertisementsComponent_div_150_Template, 6, 2, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("viewAdvertisements"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("filters"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("search"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.getTranslation("searchAdvertisements"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("type"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedType);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("allTypes"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("banner"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("popup"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("sidebar"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("status"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("allStatuses"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("active"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("inactive"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("expired"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("dateRange"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDateRange);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("allDates"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("today"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("thisWeek"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("thisMonth"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 63, ctx.getTotalImpressions()));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("totalImpressions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](80, 65, ctx.getTotalClicks()));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("totalClicks"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](90, 67, ctx.getAverageCTR(), "1.2-2"), "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("averageCTR"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.advertisements.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("totalAdvertisements"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.getTranslation("advertisementsList"), " (", ctx.filteredAdvertisements.length, ") ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("export"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("print"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getSortIcon("title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("type"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getSortIcon("type"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("status"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getSortIcon("status"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("startDate"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getSortIcon("startDate"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("endDate"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getSortIcon("endDate"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("clicks"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getSortIcon("clicks"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("impressions"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getSortIcon("impressions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("ctr"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getSortIcon("ctr"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("actions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredAdvertisements);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredAdvertisements.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: [".view-advertisements-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #f8f9fa;\n  min-height: 100vh;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.view-advertisements-container[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.view-advertisements-container[dir=rtl][_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.view-advertisements-container[dir=rtl][_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.view-advertisements-container[dir=rtl][_ngcontent-%COMP%]   .advertisement-info[_ngcontent-%COMP%]   .ad-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n  display: flex;\n  align-items: center;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  padding: 20px 25px;\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #34495e;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n}\n.form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n  width: 20px;\n  margin-right: 8px;\n}\n\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border: 2px solid #e9ecef;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  background: rgba(255, 255, 255, 0.9);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n  background: #fff;\n}\n.form-control[_ngcontent-%COMP%]::placeholder, .form-select[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  padding: 25px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  opacity: 0.8;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 5px 0;\n  font-size: 2rem;\n  font-weight: 700;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.9;\n  font-size: 0.9rem;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n  padding: 15px 12px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  opacity: 0.7;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 126, 234, 0.05);\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 15px 12px;\n  vertical-align: middle;\n  border-top: 1px solid #e9ecef;\n}\n\n.advertisement-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.advertisement-info[_ngcontent-%COMP%]   .ad-thumbnail[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 8px;\n  object-fit: cover;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.advertisement-info[_ngcontent-%COMP%]   .ad-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n  display: block;\n  margin-bottom: 2px;\n}\n.advertisement-info[_ngcontent-%COMP%]   .ad-details[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n\n.ctr-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.ctr-value.text-success[_ngcontent-%COMP%] {\n  color: #28a745 !important;\n}\n.ctr-value.text-warning[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n}\n.ctr-value.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.table-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.table-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  padding: 6px 10px;\n  font-size: 0.8rem;\n  transition: all 0.3s ease;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.text-center[_ngcontent-%COMP%]   .fa-chart-bar[_ngcontent-%COMP%] {\n  color: #dee2e6;\n}\n.text-center[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 10px;\n}\n.text-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  margin-bottom: 0;\n}\n\n@media (max-width: 768px) {\n  .view-advertisements-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    flex-direction: column;\n    text-align: center;\n    gap: 10px;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 5px;\n  }\n  .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n  }\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 20px;\n    flex-direction: column;\n    text-align: center;\n    gap: 15px;\n  }\n  .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .advertisement-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 10px;\n  }\n  .advertisement-info[_ngcontent-%COMP%]   .ad-thumbnail[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .table-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 5px;\n  }\n  .table-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .view-advertisements-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 12px 15px;\n  }\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n    font-size: 0.95rem;\n  }\n  .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n    font-size: 0.8rem;\n  }\n  .advertisement-info[_ngcontent-%COMP%]   .ad-thumbnail[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 5px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .advertisement-info[_ngcontent-%COMP%]   .ad-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 5px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWR2ZXJ0aXNlbWVudHMvY29tcG9uZW50cy92aWV3LWFkdmVydGlzZW1lbnRzL3ZpZXctYWR2ZXJ0aXNlbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0FBQ0Y7QUFFSTtFQUNFLGlCQUFBO0FBQU47QUFJTTtFQUNFLGlCQUFBO0FBRlI7QUFNSTtFQUNFLDJCQUFBO0FBSk47QUFRTTtFQUNFLGlCQUFBO0FBTlI7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVRGO0FBV0U7RUFDRSxjQUFBO0FBVEo7O0FBY0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FBWEY7QUFhRTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBWEo7QUFhSTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQVhOO0FBZUU7RUFDRSxhQUFBO0FBYko7O0FBaUJBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFkRjtBQWdCRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFkSjs7QUFrQkE7O0VBRUUseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7QUFmRjtBQWlCRTs7RUFDRSxxQkFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0JBQUE7QUFkSjtBQWlCRTs7RUFDRSxjQUFBO0FBZEo7O0FBbUJBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBaEJGO0FB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Rko7RUE4RkU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQTVGSjtBQUNGO0FBbUdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBakdOO0FBc0dJO0VBQ0UsaUJBQUE7QUFwR047QUEwR007RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUF4R1I7QUE4R0k7RUFDRSxpQkFBQTtBQTVHTjtBQWtITTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWhIUjtBQXVITTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXJIUiIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3LWFkdmVydGlzZW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHJcbiAgJltkaXI9XCJydGxcIl0ge1xyXG4gICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdC1jYXJkIHtcclxuICAgICAgLnN0YXQtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtYWN0aW9ucyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIH1cclxuXHJcbiAgICAuYWR2ZXJ0aXNlbWVudC1pbmZvIHtcclxuICAgICAgLmFkLWRldGFpbHMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpIHtcclxuICAgIGNvbG9yOiAjNjY3ZWVhO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRmlsdGVycyBDYXJkXHJcbi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xyXG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMzNDQ5NWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogIzY2N2VlYTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLFxyXG4uZm9ybS1zZWxlY3Qge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzY2N2VlYTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMjUpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gIH1cclxufVxyXG5cclxuLy8gU3RhdGlzdGljcyBDYXJkc1xyXG4uc3RhdC1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG5cclxuICAuc3RhdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgLnN0YXQtY29udGVudCB7XHJcbiAgICBoNCB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRhYmxlIFN0eWxlc1xyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gIHRoZWFkIHtcclxuICAgIHRoIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblxyXG4gICAgICAmLnNvcnRhYmxlIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0Ym9keSB7XHJcbiAgICB0ciB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMDUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxMnB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkdmVydGlzZW1lbnQgSW5mbyBpbiBUYWJsZVxyXG4uYWR2ZXJ0aXNlbWVudC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNXB4O1xyXG5cclxuICAuYWQtdGh1bWJuYWlsIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuXHJcbiAgLmFkLWRldGFpbHMge1xyXG4gICAgc3Ryb25nIHtcclxuICAgICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgc21hbGwge1xyXG4gICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCYWRnZXNcclxuLmJhZGdlIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vLyBDVFIgVmFsdWVcclxuLmN0ci12YWx1ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbiAgJi50ZXh0LXN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICYudGV4dC13YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLnRleHQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUYWJsZSBBY3Rpb25zXHJcbi50YWJsZS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuXHJcbiAgLmJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEJ1dHRvbiBHcm91cCBpbiBUYWJsZVxyXG4uYnRuLWdyb3VwIHtcclxuICAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFbXB0eSBTdGF0ZVxyXG4udGV4dC1jZW50ZXIge1xyXG4gIC5mYS1jaGFydC1iYXIge1xyXG4gICAgY29sb3I6ICNkZWUyZTY7XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgRGVzaWduXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC52aWV3LWFkdmVydGlzZW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnBhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE1cHg7XHJcblxyXG4gICAgLnN0YXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdC1jb250ZW50IHtcclxuICAgICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmFkdmVydGlzZW1lbnQtaW5mbyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgIC5hZC10aHVtYm5haWwge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhYmxlLWFjdGlvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNXB4O1xyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC52aWV3LWFkdmVydGlzZW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0YXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgIC5zdGF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXQtY29udGVudCB7XHJcbiAgICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sLFxyXG4gIC5mb3JtLXNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgfVxyXG5cclxuICAudGFibGUge1xyXG4gICAgdGhlYWQgdGgsXHJcbiAgICB0Ym9keSB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggOHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hZHZlcnRpc2VtZW50LWluZm8ge1xyXG4gICAgLmFkLXRodW1ibmFpbCB7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSVEwgU3BlY2lmaWMgQWRqdXN0bWVudHNcclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgLmZvcm0tbGFiZWwge1xyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGF0LWNhcmQge1xyXG4gICAgLnN0YXQtY29udGVudCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhYmxlIHtcclxuICAgIHRoZWFkIHRoIHtcclxuICAgICAgJi5zb3J0YWJsZSBpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFkdmVydGlzZW1lbnQtaW5mbyB7XHJcbiAgICAuYWQtZGV0YWlscyB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhYmxlLWFjdGlvbnMge1xyXG4gICAgLmJ0biB7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLWdyb3VwIHtcclxuICAgIC5idG4ge1xyXG4gICAgICBpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_advertisements_advertisements_module_ts.js.map