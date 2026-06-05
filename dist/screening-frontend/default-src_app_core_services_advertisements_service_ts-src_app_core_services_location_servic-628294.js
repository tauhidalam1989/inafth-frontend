"use strict";
(self["webpackChunkscreening_frontend"] = self["webpackChunkscreening_frontend"] || []).push([["default-src_app_core_services_advertisements_service_ts-src_app_core_services_location_servic-628294"],{

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

/***/ 2588:
/*!*************************************************!*\
  !*** ./src/app/core/services/screen.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenService: () => (/* binding */ ScreenService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4876);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);





class ScreenService {
  /** Backend base URL (no /api) for rewriting localhost:3000 in video URLs */
  getBackendBaseUrl() {
    return (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || '').replace(/\/api\/?$/, '').trim();
  }
  /**
   * Normalize video URL for production: rewrite localhost:3000 (or relative paths) to current backend domain.
   * Ensures play payloads use the domain instead of localhost when deployed.
   */
  normalizeVideoUrl(url) {
    if (!url || !url.trim()) return url;
    const base = this.getBackendBaseUrl();
    if (!base) return url;
    const trimmed = url.trim();
    try {
      // Relative URL (e.g. /uploads/...)
      if (!/^https?:\/\//i.test(trimmed)) {
        const pathPart = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
        return base.replace(/\/$/, '') + pathPart;
      }
      const u = new URL(trimmed);
      if (u.hostname === 'localhost' && (u.port === '3000' || !u.port)) return trimmed.replace(u.origin, base);
      if (u.hostname === '127.0.0.1' && (u.port === '3000' || !u.port)) return trimmed.replace(u.origin, base);
    } catch (_) {}
    return url;
  }
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  /** Parse a DATE-only value into a local Date (prevents timezone day shift). */
  parseDateOnlyLocal(value) {
    if (!value) return null;
    if (value instanceof Date) {
      return new Date(value.getFullYear(), value.getMonth(), value.getDate(), 0, 0, 0, 0);
    }
    if (typeof value === 'string') {
      const m = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (m) {
        return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 0, 0, 0, 0);
      }
      const dt = new Date(value);
      if (!Number.isNaN(dt.getTime())) {
        return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, 0, 0, 0);
      }
    }
    return null;
  }
  /**
   * Start network scanning to discover Android TV devices
   * Backend API: POST /api/screens/scan
   * Response: { scanId: string, status: 'started' }
   *
   * Then polls: GET /api/screens/scan/:scanId/status
   * Response: { progress: number, status: 'scanning' | 'completed' }
   */
  scanNetwork() {
    // Start scan on backend
    return this.http.post(`${this.apiUrl}/screens/scan`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(response => {
      // Poll for scan progress every 500ms
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(0, 500).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(step => {
        return this.http.get(`${this.apiUrl}/screens/scan/${response.scanId}/status`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(scanStatus => ({
          isScanning: scanStatus.status === 'scanning',
          progress: scanStatus.progress || 0
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
          // If polling fails, check if we should stop
          if (step > 20) {
            // After 10 seconds, stop
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
              isScanning: false,
              progress: 100
            });
          }
          // Continue with estimated progress
          const estimatedProgress = Math.min(step / 20 * 100, 100);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
            isScanning: estimatedProgress < 100,
            progress: Math.round(estimatedProgress)
          });
        }));
      }),
      // Stop polling when scan is complete
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => {
        if (result.progress >= 100 || !result.isScanning) {
          return {
            isScanning: false,
            progress: 100
          };
        }
        return result;
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Scan error:', error);
      // Fallback to simulated scanning if backend is not available
      const totalTime = 10000;
      const interval = 100;
      const steps = totalTime / interval;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(0, interval).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(step => {
        const progress = Math.min(step / steps * 100, 100);
        const isScanning = progress < 100;
        return {
          isScanning,
          progress: Math.round(progress)
        };
      }));
    }));
  }
  /**
   * Get discovered devices from network scan
   * Backend API: GET /api/screens/discover
   * Response: DiscoveredDevice[]
   */
  getDiscoveredDevices() {
    return this.http.get(`${this.apiUrl}/screens/discover`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(devices => devices.map(device => ({
      ...device,
      lastSeen: new Date(device.lastSeen)
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching discovered devices:', error);
      // Return empty array if backend is not available
      return [];
    }));
  }
  /**
   * Register a discovered device as a screen
   * Backend API: POST /api/screens/register
   * Body: { deviceId: string, name: string, location: string }
   * Response: Screen
   */
  registerScreen(deviceId, name, location) {
    return this.http.post(`${this.apiUrl}/screens/register`, {
      deviceId,
      name,
      location
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(screen => ({
      ...screen,
      lastConnected: new Date(screen.lastConnected)
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error registering screen:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Get all registered screens
   * Backend API: GET /api/screens
   * Response: Screen[]
   */
  getScreens() {
    return this.http.get(`${this.apiUrl}/screens`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(screens => screens.map(screen => ({
      ...screen,
      lastConnected: new Date(screen.lastConnected),
      startDate: screen.startDate ? new Date(screen.startDate) : null,
      endDate: screen.endDate ? new Date(screen.endDate) : null
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching screens:', error);
      return [];
    }));
  }
  /**
   * Create a screen manually (without device discovery)
   * Backend API: POST /api/screens
   * Body: CreateScreenRequest
   * Response: Screen
   */
  createScreen(data) {
    return this.http.post(`${this.apiUrl}/screens`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(screen => ({
      ...screen,
      lastConnected: new Date(screen.lastConnected),
      startDate: screen.startDate ? new Date(screen.startDate) : null,
      endDate: screen.endDate ? new Date(screen.endDate) : null
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error creating screen:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Update a screen
   * Backend API: PUT /api/screens/:id
   * Body: CreateScreenRequest
   * Response: Screen
   */
  updateScreen(screenId, data) {
    return this.http.put(`${this.apiUrl}/screens/${screenId}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(screen => ({
      ...screen,
      lastConnected: new Date(screen.lastConnected),
      startDate: screen.startDate ? new Date(screen.startDate) : null,
      endDate: screen.endDate ? new Date(screen.endDate) : null
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error updating screen:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Get all screen groups
   * Backend API: GET /api/screens/groups
   * Response: ScreenGroup[]
   */
  getScreenGroups() {
    return this.http.get(`${this.apiUrl}/screens/groups`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(groups => groups.map(group => ({
      ...group,
      createdAt: new Date(group.createdAt),
      updatedAt: new Date(group.updatedAt)
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching screen groups:', error);
      return [];
    }));
  }
  /**
   * Create a screen group
   * Backend API: POST /api/screens/groups
   * Body: { name: string, description?: string }
   * Response: ScreenGroup
   */
  createScreenGroup(name, description) {
    return this.http.post(`${this.apiUrl}/screens/groups`, {
      name,
      description
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(group => ({
      ...group,
      createdAt: new Date(group.createdAt),
      updatedAt: new Date(group.updatedAt)
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error creating screen group:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Update a screen group.
   * Backend API: PUT /api/screens/groups/:id
   * Body: { name: string, description?: string }
   */
  updateScreenGroup(groupId, name, description) {
    return this.http.put(`${this.apiUrl}/screens/groups/${groupId}`, {
      name,
      description
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(group => ({
      ...group,
      createdAt: new Date(group.createdAt),
      updatedAt: new Date(group.updatedAt)
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error updating screen group:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Delete a screen group.
   * Backend API: DELETE /api/screens/groups/:id
   */
  deleteScreenGroup(groupId) {
    return this.http.delete(`${this.apiUrl}/screens/groups/${groupId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error deleting screen group:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Get screen status
   * Backend API: GET /api/screens/:id/status
   * Response: { status: string, isOnline: boolean }
   */
  getScreenStatus(screenId) {
    return this.http.get(`${this.apiUrl}/screens/${screenId}/status`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching screen status:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
        status: 'unknown',
        isOnline: false
      });
    }));
  }
  /**
   * Delete/Unregister a screen
   * Backend API: DELETE /api/screens/:id
   * Response: { success: boolean }
   */
  deleteScreen(screenId) {
    return this.http.delete(`${this.apiUrl}/screens/${screenId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.success), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error deleting screen:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Reset all screen-related data (schedules, ad assignments, regions) for this screen.
   * Clears ghost playback; screen gets one default full-screen region.
   * Backend API: POST /api/screens/:id/reset
   */
  resetScreen(screenId) {
    return this.http.post(`${this.apiUrl}/screens/${screenId}/reset`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error resetting screen:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Send refresh command to player (index.html) so it hard-refreshes the page.
   * Pass deviceId/ipAddress from the selected screen so backend can find the player even if DB is stale.
   * Backend API: POST /api/screens/:id/refresh
   */
  refreshPlayer(screenId, options) {
    const body = {};
    if (options?.deviceId) body.deviceId = options.deviceId;
    if (options?.ipAddress) body.ipAddress = options.ipAddress;
    return this.http.post(`${this.apiUrl}/screens/${screenId}/refresh`, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error sending refresh to player:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Apply current layout, assigned ads, and schedules to all screens in the same group.
   * Backend API: POST /api/screens/:id/apply-to-group
   */
  applyToGroup(screenId) {
    return this.http.post(`${this.apiUrl}/screens/${screenId}/apply-to-group`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error applying to group:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Play video on a screen
   * Backend API: POST /api/screens/:id/play
   * Body: { videoUrl: string, videoTitle?: string }
   * Response: { success: boolean, message: string }
   */
  playVideo(screenId, videoUrl, videoTitle, muted, imagePlaylist) {
    const normalizedUrl = this.normalizeVideoUrl(videoUrl);
    return this.http.post(`${this.apiUrl}/screens/${screenId}/play`, {
      videoUrl: normalizedUrl,
      videoTitle,
      muted: muted ?? false,
      imagePlaylist: imagePlaylist || null
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error playing video:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Stop video playback on a screen
   * Backend API: POST /api/screens/:id/stop
   * Response: { success: boolean, message: string }
   */
  stopVideo(screenId, regionId) {
    return this.http.post(`${this.apiUrl}/screens/${screenId}/stop`, {
      regionId: regionId || null
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error stopping video:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Play video in a specific region
   * Backend API: POST /api/screens/:id/play
   * Response: { success: boolean, message: string }
   */
  playVideoInRegion(screenId, videoUrl, videoTitle, regionId, muted) {
    const normalizedUrl = this.normalizeVideoUrl(videoUrl);
    return this.http.post(`${this.apiUrl}/screens/${screenId}/play`, {
      videoUrl: normalizedUrl,
      videoTitle,
      regionId,
      muted: muted ?? false
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error playing video in region:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Stop video in a specific region
   * Backend API: POST /api/screens/:id/stop
   * Response: { success: boolean, message: string }
   */
  stopVideoInRegion(screenId, regionId) {
    return this.http.post(`${this.apiUrl}/screens/${screenId}/stop`, {
      regionId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error stopping video in region:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Pause video playback on a screen
   * Backend API: POST /api/screens/:id/pause
   * Response: { success: boolean, message: string }
   */
  pauseVideo(screenId, regionId) {
    return this.http.post(`${this.apiUrl}/screens/${screenId}/pause`, {
      regionId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error pausing video:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  pauseVideoInRegion(screenId, regionId) {
    return this.http.post(`${this.apiUrl}/screens/${screenId}/pause`, {
      regionId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error pausing video in region:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Resume video playback on a screen
   * Backend API: POST /api/screens/:id/resume
   * Response: { success: boolean, message: string }
   */
  resumeVideo(screenId, regionId) {
    return this.http.post(`${this.apiUrl}/screens/${screenId}/resume`, {
      regionId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error resuming video:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  resumeVideoInRegion(screenId, regionId) {
    return this.http.post(`${this.apiUrl}/screens/${screenId}/resume`, {
      regionId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error resuming video in region:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Get currently playing video info
   * Backend API: GET /api/screens/:id/playing
   * Response: { isPlaying: boolean, videoUrl?: string, videoTitle?: string, startedAt?: Date }
   */
  getPlayingVideo(screenId) {
    return this.http.get(`${this.apiUrl}/screens/${screenId}/playing`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => ({
      ...result,
      startedAt: result.startedAt ? new Date(result.startedAt) : undefined,
      pausedAt: result.pausedAt ? new Date(result.pausedAt) : undefined
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error getting playing video:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
        isPlaying: false,
        isPaused: false
      });
    }));
  }
  /**
   * Get screen by ID with full details
   * Backend API: GET /api/screens/:id
   * Response: Screen
   */
  getScreenById(screenId) {
    return this.http.get(`${this.apiUrl}/screens/${screenId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(screen => ({
      ...screen,
      lastConnected: new Date(screen.lastConnected),
      startDate: screen.startDate ? new Date(screen.startDate) : null,
      endDate: screen.endDate ? new Date(screen.endDate) : null
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching screen:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  // ========== Screen Regions Methods ==========
  /**
   * Get regions for a screen
   * Backend API: GET /api/screens/:id/regions
   */
  getScreenRegions(screenId) {
    return this.http.get(`${this.apiUrl}/screens/${screenId}/regions`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching screen regions:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Create a screen region
   * Backend API: POST /api/screens/:id/regions
   */
  createScreenRegion(screenId, data) {
    return this.http.post(`${this.apiUrl}/screens/${screenId}/regions`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error creating screen region:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Update a screen region
   * Backend API: PUT /api/screens/:id/regions/:regionId
   */
  updateScreenRegion(screenId, regionId, data) {
    return this.http.put(`${this.apiUrl}/screens/${screenId}/regions/${regionId}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error updating screen region:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Delete a screen region
   * Backend API: DELETE /api/screens/:id/regions/:regionId
   */
  deleteScreenRegion(screenId, regionId) {
    return this.http.delete(`${this.apiUrl}/screens/${screenId}/regions/${regionId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error deleting screen region:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  // ========== Advertisement Schedules Methods ==========
  /**
   * Get schedules for a screen
   * Backend API: GET /api/screens/:id/schedules
   */
  getScreenSchedules(screenId) {
    return this.http.get(`${this.apiUrl}/screens/${screenId}/schedules`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => ({
      ...res,
      schedules: (res.schedules || []).map(s => ({
        ...s,
        startDate: this.parseDateOnlyLocal(s.startDate),
        endDate: this.parseDateOnlyLocal(s.endDate)
      }))
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching screen schedules:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Create or update an advertisement schedule
   * Backend API: POST /api/screens/:id/schedules
   */
  createAdvertisementSchedule(screenId, data) {
    return this.http.post(`${this.apiUrl}/screens/${screenId}/schedules`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error creating advertisement schedule:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Update an advertisement schedule
   * Backend API: PUT /api/screens/:id/schedules/:adId
   */
  updateAdvertisementSchedule(screenId, adId, data) {
    return this.http.put(`${this.apiUrl}/screens/${screenId}/schedules/${adId}`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error updating advertisement schedule:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /**
   * Delete an advertisement schedule
   * Backend API: DELETE /api/screens/:id/schedules/:adId
   */
  deleteAdvertisementSchedule(screenId, adId) {
    return this.http.delete(`${this.apiUrl}/screens/${screenId}/schedules/${adId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error deleting advertisement schedule:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  setFullscreen(screenId, regionId, enabled = true) {
    return this.http.post(`${this.apiUrl}/screens/${screenId}/fullscreen`, {
      regionId,
      enabled
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error setting fullscreen:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  setFullscreenInRegion(screenId, regionId, enabled = true) {
    return this.http.post(`${this.apiUrl}/screens/${screenId}/fullscreen`, {
      regionId,
      enabled
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error setting fullscreen in region:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function ScreenService_Factory(t) {
      return new (t || ScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: ScreenService,
      factory: ScreenService.ɵfac,
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

/***/ 1962:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 5152);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;

/***/ }),

/***/ 4876:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 3942);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 9397);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isDate */ 5602);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

/***/ }),

/***/ 9103:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2510);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}

/***/ }),

/***/ 2083:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 9103);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 8113);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 967);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}

/***/ }),

/***/ 2400:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1962);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 8473:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 2083);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 8113:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 5602:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDate: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_services_advertisements_service_ts-src_app_core_services_location_servic-628294.js.map