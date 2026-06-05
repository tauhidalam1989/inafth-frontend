"use strict";
(self["webpackChunkscreening_frontend"] = self["webpackChunkscreening_frontend"] || []).push([["common"],{

/***/ 473:
/*!********************************************************!*\
  !*** ./src/app/core/services/cloud-storage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudStorageService: () => (/* binding */ CloudStorageService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class CloudStorageService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || 'http://localhost:3000/api';
  }
  /**
   * Get cloud storage configuration
   */
  getConfig() {
    return this.http.get(`${this.apiUrl}/cloud-storage/config`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.config));
  }
  /**
   * Save cloud storage configuration
   */
  saveConfig(config) {
    return this.http.post(`${this.apiUrl}/cloud-storage/config`, config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.config));
  }
  /**
   * Test cloud storage configuration
   */
  testConfig(config) {
    return this.http.post(`${this.apiUrl}/cloud-storage/test-config`, config || {});
  }
  /**
   * Generate SAS token for direct client upload
   */
  generateSasToken(fileName, folder, expiryMinutes) {
    return this.http.post(`${this.apiUrl}/cloud-storage/generate-sas-token`, {
      fileName,
      folder,
      expiryMinutes
    });
  }
  static {
    this.ɵfac = function CloudStorageService_Factory(t) {
      return new (t || CloudStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CloudStorageService,
      factory: CloudStorageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map