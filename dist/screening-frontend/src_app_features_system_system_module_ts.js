"use strict";
(self["webpackChunkscreening_frontend"] = self["webpackChunkscreening_frontend"] || []).push([["src_app_features_system_system_module_ts"],{

/***/ 2248:
/*!**************************************************************!*\
  !*** ./src/app/core/services/notification-config.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationConfigService: () => (/* binding */ NotificationConfigService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class NotificationConfigService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || 'http://localhost:3000/api';
  }
  /**
   * Get all channel configurations
   */
  getChannelConfigs() {
    return this.http.get(`${this.apiUrl}/notification-configs`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.configs.map(config => ({
      ...config,
      createdAt: config.createdAt ? new Date(config.createdAt) : undefined,
      updatedAt: config.updatedAt ? new Date(config.updatedAt) : undefined
    }))));
  }
  /**
   * Get configuration for a specific channel
   */
  getChannelConfig(channelType) {
    return this.http.get(`${this.apiUrl}/notification-configs/${channelType}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.config,
      createdAt: response.config?.createdAt ? new Date(response.config.createdAt) : undefined,
      updatedAt: response.config?.updatedAt ? new Date(response.config.updatedAt) : undefined
    })));
  }
  /**
   * Create or update channel configuration
   */
  upsertChannelConfig(channelType, isEnabled, configData) {
    return this.http.post(`${this.apiUrl}/notification-configs/${channelType}`, {
      isEnabled,
      configData
    });
  }
  /**
   * Update channel enabled status
   */
  updateChannelStatus(channelType, isEnabled) {
    return this.http.put(`${this.apiUrl}/notification-configs/${channelType}/status`, {
      isEnabled
    });
  }
  /**
   * Test channel configuration
   */
  testChannelConfig(channelType) {
    return this.http.post(`${this.apiUrl}/notification-configs/${channelType}/test`, {});
  }
  static {
    this.ɵfac = function NotificationConfigService_Factory(t) {
      return new (t || NotificationConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NotificationConfigService,
      factory: NotificationConfigService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2866:
/*!*****************************************************!*\
  !*** ./src/app/core/services/system-log.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemLogService: () => (/* binding */ SystemLogService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class SystemLogService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || 'http://localhost:3000/api';
  }
  /**
   * Get all system logs with optional filters
   */
  getLogs(filters) {
    const params = {};
    if (filters?.level) params.level = filters.level;
    if (filters?.module) params.module = filters.module;
    if (filters?.action) params.action = filters.action;
    if (filters?.userId) params.userId = filters.userId.toString();
    if (filters?.search) params.search = filters.search;
    if (filters?.startDate) params.startDate = filters.startDate.toISOString();
    if (filters?.endDate) params.endDate = filters.endDate.toISOString();
    if (filters?.limit) params.limit = filters.limit.toString();
    if (filters?.page) params.page = filters.page.toString();
    return this.http.get(`${this.apiUrl}/system-logs`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      logs: response.logs.map(log => ({
        ...log,
        createdAt: log.createdAt ? new Date(log.createdAt) : undefined
      })),
      total: response.total
    })));
  }
  /**
   * Get log by ID
   */
  getLogById(id) {
    return this.http.get(`${this.apiUrl}/system-logs/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.log,
      createdAt: response.log.createdAt ? new Date(response.log.createdAt) : undefined
    })));
  }
  /**
   * Get unique modules
   */
  getUniqueModules() {
    return this.http.get(`${this.apiUrl}/system-logs/modules/list`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.modules));
  }
  /**
   * Get unique actions
   */
  getUniqueActions() {
    return this.http.get(`${this.apiUrl}/system-logs/actions/list`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.actions));
  }
  /**
   * Delete log by ID
   */
  deleteLog(id) {
    return this.http.delete(`${this.apiUrl}/system-logs/${id}`);
  }
  /**
   * Cleanup old logs
   */
  cleanupOldLogs(daysToKeep = 90) {
    return this.http.delete(`${this.apiUrl}/system-logs/cleanup?days=${daysToKeep}`);
  }
  static {
    this.ɵfac = function SystemLogService_Factory(t) {
      return new (t || SystemLogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SystemLogService,
      factory: SystemLogService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8767:
/*!*********************************************************************************!*\
  !*** ./src/app/features/system/components/system-logs/system-logs.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemLogsComponent: () => (/* binding */ SystemLogsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_system_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/system-log.service */ 2866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 8709);







const _c0 = () => [];
function SystemLogsComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const module_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", module_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](module_r1);
  }
}
function SystemLogsComponent_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", action_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](action_r2);
  }
}
function SystemLogsComponent_tr_77_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64)(1, "small", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.getTranslation("viewDetails"), " ");
  }
}
function SystemLogsComponent_tr_77_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const log_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", log_r5.userName, " ");
  }
}
function SystemLogsComponent_tr_77_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SystemLogsComponent_tr_77_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const log_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", log_r5.ipAddress, " ");
  }
}
function SystemLogsComponent_tr_77_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SystemLogsComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 42)(2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 45)(6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 47)(9, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 49)(12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SystemLogsComponent_tr_77_div_14_Template, 4, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SystemLogsComponent_tr_77_div_16_Template, 3, 1, "div", 53)(17, SystemLogsComponent_tr_77_span_17_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SystemLogsComponent_tr_77_div_19_Template, 3, 1, "div", 56)(20, SystemLogsComponent_tr_77_span_20_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 57)(22, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td", 60)(28, "div", 61)(29, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemLogsComponent_tr_77_Template_button_click_29_listener() {
      const log_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.deleteLog(log_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const log_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](log_r5.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](log_r5.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r3.getLevelIcon(log_r5.level));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.getLevelDisplayName(log_r5.level), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r5.module);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r5.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", log_r5.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", log_r5.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", log_r5.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !log_r5.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", log_r5.ipAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !log_r5.ipAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](26, 17, log_r5.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r3.getTranslation("delete"));
  }
}
function SystemLogsComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.getTranslation("noLogsFound"));
  }
}
function SystemLogsComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.getTranslation("loading"));
  }
}
function SystemLogsComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.errorMessage, " ");
  }
}
function SystemLogsComponent_div_81_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 78)(1, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemLogsComponent_div_81_li_6_Template_a_click_1_listener() {
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onPageChange(i_r8 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r3.currentPage === i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r8 + 1);
  }
}
function SystemLogsComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 75)(1, "nav", 76)(2, "ul", 77)(3, "li", 78)(4, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemLogsComponent_div_81_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onPageChange(ctx_r3.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SystemLogsComponent_div_81_li_6_Template, 3, 3, "li", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li", 78)(8, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemLogsComponent_div_81_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onPageChange(ctx_r3.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r3.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-disabled", ctx_r3.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0).constructor(ctx_r3.totalPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r3.currentPage === ctx_r3.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-disabled", ctx_r3.currentPage === ctx_r3.totalPages);
  }
}
class SystemLogsComponent {
  constructor(languageService, translationService, systemLogService) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.systemLogService = systemLogService;
    this.currentLanguage = 'ar';
    this.logs = [];
    this.filteredLogs = [];
    this.searchTerm = '';
    this.selectedLevel = 'all';
    this.selectedModule = 'all';
    this.selectedAction = 'all';
    this.startDate = '';
    this.endDate = '';
    this.isLoading = false;
    this.errorMessage = '';
    this.showConfirmDialog = false;
    this.confirmDialogData = {};
    this.itemToDelete = null;
    // Available filters
    this.availableModules = [];
    this.availableActions = [];
    // Pagination
    this.currentPage = 1;
    this.itemsPerPage = 50;
    this.totalPages = 1;
    this.totalLogs = 0;
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadModules();
    this.loadActions();
    this.loadLogs();
  }
  loadModules() {
    this.systemLogService.getUniqueModules().subscribe({
      next: modules => {
        this.availableModules = modules;
      },
      error: error => {
        console.error('Error loading modules:', error);
      }
    });
  }
  loadActions() {
    this.systemLogService.getUniqueActions().subscribe({
      next: actions => {
        this.availableActions = actions;
      },
      error: error => {
        console.error('Error loading actions:', error);
      }
    });
  }
  loadLogs() {
    this.isLoading = true;
    this.errorMessage = '';
    const filters = {
      level: this.selectedLevel !== 'all' ? this.selectedLevel : undefined,
      module: this.selectedModule !== 'all' ? this.selectedModule : undefined,
      action: this.selectedAction !== 'all' ? this.selectedAction : undefined,
      search: this.searchTerm || undefined,
      startDate: this.startDate ? new Date(this.startDate) : undefined,
      endDate: this.endDate ? new Date(this.endDate) : undefined,
      page: this.currentPage,
      limit: this.itemsPerPage
    };
    this.systemLogService.getLogs(filters).subscribe({
      next: response => {
        this.logs = response.logs;
        this.filteredLogs = [...this.logs];
        this.totalLogs = response.total;
        this.calculatePagination();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading logs:', error);
        this.errorMessage = this.getTranslation('errorLoadingLogs') || 'Error loading logs';
        this.isLoading = false;
      }
    });
  }
  calculatePagination() {
    this.totalPages = Math.ceil(this.totalLogs / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadLogs();
  }
  filterLogs() {
    this.currentPage = 1;
    this.loadLogs();
  }
  deleteLog(log) {
    if (!log.id) return;
    this.itemToDelete = log;
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: this.getTranslation('confirmDeleteLogMessage') || `Are you sure you want to delete this log entry?`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel'
    };
    this.showConfirmDialog = true;
  }
  onConfirmDelete() {
    if (this.itemToDelete?.id) {
      this.isLoading = true;
      this.systemLogService.deleteLog(this.itemToDelete.id).subscribe({
        next: () => {
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
          this.loadLogs();
        },
        error: error => {
          console.error('Error deleting log:', error);
          this.isLoading = false;
          this.errorMessage = error.error?.error || 'Error deleting log';
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
  getLevelDisplayName(level) {
    const levels = {
      info: this.getTranslation('info'),
      warning: this.getTranslation('warning'),
      error: this.getTranslation('error'),
      success: this.getTranslation('success'),
      debug: this.getTranslation('debug')
    };
    return levels[level] || level;
  }
  getLevelIcon(level) {
    const icons = {
      info: 'fa-info-circle',
      warning: 'fa-exclamation-triangle',
      error: 'fa-times-circle',
      success: 'fa-check-circle',
      debug: 'fa-bug'
    };
    return icons[level] || 'fa-info-circle';
  }
  getLevelCount(level) {
    return this.logs.filter(l => l.level === level).length;
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function SystemLogsComponent_Factory(t) {
      return new (t || SystemLogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_system_log_service__WEBPACK_IMPORTED_MODULE_2__.SystemLogService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SystemLogsComponent,
      selectors: [["app-system-logs"]],
      decls: 83,
      vars: 48,
      consts: [[1, "system-logs-container", 3, "dir"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "fas", "fa-file-alt"], [1, "filters-section"], [1, "filters-card"], [1, "search-filter"], [1, "search-input"], [1, "fas", "fa-search"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "level-filter"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "info"], ["value", "warning"], ["value", "error"], ["value", "success"], ["value", "debug"], [1, "module-filter"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-filter"], [1, "date-filter"], ["type", "date", 1, "form-control", 3, "ngModelChange", "change", "ngModel", "placeholder"], [1, "logs-list-section"], [1, "list-header"], [1, "total-count"], [1, "fas", "fa-list", "me-2"], [1, "level-summary"], [1, "level-item", "info"], [1, "level-item", "warning"], [1, "level-item", "error"], [1, "level-item", "success"], [1, "level-item", "debug"], [1, "table-container"], [1, "logs-table"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "pagination-section", 4, "ngIf"], [3, "confirmed", "cancelled", "visible", "data"], [3, "value"], [1, "level-cell"], [1, "level-badge"], [1, "fas"], [1, "module-cell"], [1, "module-badge"], [1, "action-cell"], [1, "action-badge"], [1, "message-cell"], [1, "log-message"], ["class", "log-details", 4, "ngIf"], [1, "user-cell"], ["class", "user-info", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "ip-cell"], ["class", "ip-info", 4, "ngIf"], [1, "date-cell"], [1, "date-info"], [1, "fas", "fa-clock"], [1, "actions-cell"], [1, "action-buttons"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "title"], [1, "fas", "fa-trash"], [1, "log-details"], [1, "text-muted"], [1, "fas", "fa-info-circle"], [1, "user-info"], [1, "fas", "fa-user"], [1, "ip-info"], [1, "fas", "fa-network-wired"], [1, "empty-state"], [1, "fas", "fa-spinner", "fa-spin"], ["role", "alert", 1, "alert", "alert-danger"], [1, "fas", "fa-exclamation-circle", "me-2"], [1, "pagination-section"], ["aria-label", "Logs pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "fas", "fa-chevron-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"]],
      template: function SystemLogsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SystemLogsComponent_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function SystemLogsComponent_Template_input_input_11_listener() {
            return ctx.filterLogs();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11)(13, "select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SystemLogsComponent_Template_select_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedLevel, $event) || (ctx.selectedLevel = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SystemLogsComponent_Template_select_change_13_listener() {
            return ctx.filterLogs();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 19)(27, "select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SystemLogsComponent_Template_select_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedModule, $event) || (ctx.selectedModule = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SystemLogsComponent_Template_select_change_27_listener() {
            return ctx.filterLogs();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, SystemLogsComponent_option_30_Template, 2, 2, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 21)(32, "select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SystemLogsComponent_Template_select_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedAction, $event) || (ctx.selectedAction = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SystemLogsComponent_Template_select_change_32_listener() {
            return ctx.filterLogs();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, SystemLogsComponent_option_35_Template, 2, 2, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 22)(37, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SystemLogsComponent_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.startDate, $event) || (ctx.startDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SystemLogsComponent_Template_input_change_37_listener() {
            return ctx.filterLogs();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 22)(39, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SystemLogsComponent_Template_input_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.endDate, $event) || (ctx.endDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SystemLogsComponent_Template_input_change_39_listener() {
            return ctx.filterLogs();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 24)(41, "div", 25)(42, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 28)(46, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 34)(57, "table", 35)(58, "thead")(59, "tr")(60, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, SystemLogsComponent_tr_77_Template, 31, 20, "tr", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, SystemLogsComponent_div_78_Template, 4, 1, "div", 37)(79, SystemLogsComponent_div_79_Template, 4, 1, "div", 37)(80, SystemLogsComponent_div_80_Template, 3, 1, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, SystemLogsComponent_div_81_Template, 10, 8, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "app-confirm-dialog", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("confirmed", function SystemLogsComponent_Template_app_confirm_dialog_confirmed_82_listener() {
            return ctx.onConfirmDelete();
          })("cancelled", function SystemLogsComponent_Template_app_confirm_dialog_cancelled_82_listener() {
            return ctx.onCancelDelete();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("systemLogs"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx.getTranslation("searchLogs"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedLevel);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("allLevels"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("info"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("warning"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("error"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("success"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("debug"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedModule);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("allModules"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.availableModules);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedAction);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("allActions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.availableActions);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.startDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx.getTranslation("startDate"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.endDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx.getTranslation("endDate"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.getTranslation("totalLogs"), ": ", ctx.filteredLogs.length, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.getTranslation("info"), ": ", ctx.getLevelCount("info"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.getTranslation("warning"), ": ", ctx.getLevelCount("warning"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.getTranslation("error"), ": ", ctx.getLevelCount("error"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.getTranslation("success"), ": ", ctx.getLevelCount("success"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.getTranslation("debug"), ": ", ctx.getLevelCount("debug"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("level"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("module"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("action"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("message"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("user"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("ipAddress"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("date"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("actions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredLogs);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.filteredLogs.length === 0 && !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.showConfirmDialog)("data", ctx.confirmDialogData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
      styles: [".system-logs-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 12px;\n  font-size: 1.25rem;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  align-items: end;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n  font-size: 14px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 10px 14px 10px 40px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .level-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .module-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .action-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .date-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  background: #fafbfc;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .level-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .module-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .action-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .date-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n\n.logs-list-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: white;\n  border-radius: 16px;\n  padding: 16px 20px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.list-header[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.875rem;\n}\n.list-header[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 8px;\n}\n.list-header[_ngcontent-%COMP%]   .level-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.list-header[_ngcontent-%COMP%]   .level-summary[_ngcontent-%COMP%]   .level-item[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.list-header[_ngcontent-%COMP%]   .level-summary[_ngcontent-%COMP%]   .level-item.info[_ngcontent-%COMP%] {\n  background: rgba(23, 162, 184, 0.1);\n  color: #0c5460;\n}\n.list-header[_ngcontent-%COMP%]   .level-summary[_ngcontent-%COMP%]   .level-item.warning[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #856404;\n}\n.list-header[_ngcontent-%COMP%]   .level-summary[_ngcontent-%COMP%]   .level-item.error[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  color: #721c24;\n}\n.list-header[_ngcontent-%COMP%]   .level-summary[_ngcontent-%COMP%]   .level-item.success[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.1);\n  color: #155724;\n}\n.list-header[_ngcontent-%COMP%]   .level-summary[_ngcontent-%COMP%]   .level-item.debug[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.1);\n  color: #383d41;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: white;\n  border-bottom: none;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f3f4;\n  transition: all 0.2s ease;\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.info[_ngcontent-%COMP%] {\n  background: rgba(23, 162, 184, 0.03);\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.warning[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.03);\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.error[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.03);\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.success[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.03);\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.debug[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.03);\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  vertical-align: middle;\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .level-cell[_ngcontent-%COMP%]   .level-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-container[_ngcontent-%COMP%]   .level-cell[_ngcontent-%COMP%]   .level-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .level-cell[_ngcontent-%COMP%]   .level-badge.info[_ngcontent-%COMP%] {\n  background: rgba(23, 162, 184, 0.1);\n  color: #0c5460;\n}\n.table-container[_ngcontent-%COMP%]   .level-cell[_ngcontent-%COMP%]   .level-badge.warning[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #856404;\n}\n.table-container[_ngcontent-%COMP%]   .level-cell[_ngcontent-%COMP%]   .level-badge.error[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  color: #721c24;\n}\n.table-container[_ngcontent-%COMP%]   .level-cell[_ngcontent-%COMP%]   .level-badge.success[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.1);\n  color: #155724;\n}\n.table-container[_ngcontent-%COMP%]   .level-cell[_ngcontent-%COMP%]   .level-badge.debug[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.1);\n  color: #383d41;\n}\n.table-container[_ngcontent-%COMP%]   .module-cell[_ngcontent-%COMP%]   .module-badge[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .module-cell[_ngcontent-%COMP%]   .action-badge[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .action-cell[_ngcontent-%COMP%]   .module-badge[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .action-cell[_ngcontent-%COMP%]   .action-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 105, 92, 0.1);\n  color: #00695c;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n.table-container[_ngcontent-%COMP%]   .message-cell[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  max-width: 400px;\n}\n.table-container[_ngcontent-%COMP%]   .message-cell[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.table-container[_ngcontent-%COMP%]   .message-cell[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.table-container[_ngcontent-%COMP%]   .message-cell[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%]   .log-details[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:hover {\n  color: #00695c;\n}\n.table-container[_ngcontent-%COMP%]   .user-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .user-cell[_ngcontent-%COMP%]   .ip-info[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .ip-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .ip-cell[_ngcontent-%COMP%]   .ip-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #495057;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .user-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .user-cell[_ngcontent-%COMP%]   .ip-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .ip-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .ip-cell[_ngcontent-%COMP%]   .ip-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #495057;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #adb5bd;\n  margin-bottom: 16px;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%]   i.fa-spinner[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 1rem;\n  margin: 0;\n  font-weight: 500;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 6px 12px;\n  font-weight: 600;\n  font-size: 0.8rem;\n  transition: all 0.3s ease;\n  border: none;\n  cursor: pointer;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n.btn.btn-outline-danger[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545;\n  color: #dc3545;\n  background: transparent;\n}\n.btn.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: white;\n}\n\n.pagination-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #00695c;\n  border: 1px solid #e9ecef;\n  padding: 8px 12px;\n  border-radius: 8px;\n  margin: 0 4px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background: #00695c;\n  color: white;\n  border-color: #00695c;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  border-color: #00695c;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #adb5bd;\n  border-color: #e9ecef;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 12px 16px;\n  font-size: 0.875rem;\n  margin: 16px 20px;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  border: 1px solid rgba(220, 53, 69, 0.2);\n  color: #dc3545;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 12px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: auto;\n  right: 14px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 14px;\n  padding-right: 40px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   .ip-info[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n@media (max-width: 768px) {\n  .system-logs-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .filters-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%] {\n    grid-column: 1 !important;\n  }\n  .list-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .list-header[_ngcontent-%COMP%]   .level-summary[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .table-container[_ngcontent-%COMP%]   .logs-table[_ngcontent-%COMP%] {\n    min-width: 1000px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n  .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3lzdGVtL2NvbXBvbmVudHMvc3lzdGVtLWxvZ3Mvc3lzdGVtLWxvZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0E7RUFDRSw2REFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFBSjtBQUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQU47QUFFTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUFBUjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7QUFNRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUpKO0FBTUk7RUFDRSxpQkFBQTtBQUpOO0FBTU07RUFDRSxrQkFBQTtBQUpSO0FBTVE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUpWO0FBT1E7RUFDRSw0QkFBQTtBQUxWO0FBY007Ozs7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBVFI7QUFXUTs7OztFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUFOVjs7QUFjQTtFQUNFLG1CQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBWEY7QUFhRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBWEo7QUFhSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQVhOO0FBZUU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFiSjtBQWVJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFiTjtBQWVNO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0FBYlI7QUFnQk07RUFDRSxrQ0FBQTtFQUNBLGNBQUE7QUFkUjtBQWlCTTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtBQWZSO0FBa0JNO0VBQ0Usa0NBQUE7RUFDQSxjQUFBO0FBaEJSO0FBbUJNO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FBakJSOztBQXdCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXJCRjtBQXVCRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBckJKO0FBdUJJO0VBQ0UsNkRBQUE7QUFyQk47QUF1Qk07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFyQlI7QUF1QlE7RUFDRSxrQkFBQTtBQXJCVjtBQXdCUTtFQUNFLG1CQUFBO0FBdEJWO0FBNEJNO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtBQTFCUjtBQTRCUTtFQUNFLG1CQUFBO0FBMUJWO0FBNkJRO0VBQ0UsbUJBQUE7QUEzQlY7QUE4QlE7RUFDRSxvQ0FBQTtBQTVCVjtBQStCUTtFQUNFLG1DQUFBO0FBN0JWO0FBZ0NRO0VBQ0UsbUNBQUE7QUE5QlY7QUFpQ1E7RUFDRSxtQ0FBQTtBQS9CVjtBQWtDUTtFQUNFLHFDQUFBO0FBaENWO0FBbUNRO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQWpDVjtBQW1DVTtFQUNFLGtCQUFBO0FBakNaO0FBb0NVO0VBQ0UsbUJBQUE7QUFsQ1o7QUEwQ0k7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQXhDTjtBQTBDTTtFQUNFLG1CQUFBO0FBeENSO0FBMkNNO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0FBekNSO0FBNENNO0VBQ0Usa0NBQUE7RUFDQSxjQUFBO0FBMUNSO0FBNkNNO0VBQ0Usa0NBQUE7RUFDQSxjQUFBO0FBM0NSO0FBOENNO0VBQ0Usa0NBQUE7RUFDQSxjQUFBO0FBNUNSO0FBK0NNO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FBN0NSO0FBb0RJOzs7O0VBRUUsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQWhETjtBQXFESTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFuRE47QUFxRE07RUFDRSxlQUFBO0FBbkRSO0FBcURRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQW5EVjtBQXFEVTtFQUNFLGNBQUE7QUFuRFo7QUE0REk7Ozs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBeEROO0FBMERNOzs7O0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBckRSO0FBMkRJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQXpETjtBQTJETTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQXpEUjtBQStESTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUE3RE47O0FBbUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBaEVGO0FBa0VFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFoRUo7QUFrRUk7RUFDRSxjQUFBO0FBaEVOO0FBb0VFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFsRUo7O0FBdUVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBcEVGO0FBc0VFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQXBFSjtBQXVFRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBckVKO0FBdUVJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBckVOOztBQTJFQTtFQUNFLGdCQUFBO0FBeEVGO0FBMEVFO0VBQ0UsdUJBQUE7QUF4RUo7QUEyRU07RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQXpFUjtBQTJFUTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBekVWO0FBNkVNO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUEzRVI7QUE4RU07RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBNUVSO0FBOEVRO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUE1RVY7O0FBb0ZBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFqRkY7QUFtRkU7RUFDRSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtBQWpGSjs7QUF1RkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFwRko7QUF1RkU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQXJGSjtBQXdGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUF0Rko7QUEwRkk7RUFDRSxpQkFBQTtBQXhGTjtBQTJGSTtFQUNFLGlCQUFBO0FBekZOO0FBNkZFOzs7RUFHRSwyQkFBQTtBQTNGSjs7QUFnR0E7RUFDRTtJQUNFLGFBQUE7RUE3RkY7RUFnR0E7SUFDRSxxQ0FBQTtFQTlGRjtFQWdHRTtJQUNFLHlCQUFBO0VBOUZKO0VBa0dBO0lBQ0Usc0JBQUE7SUFDQSxvQkFBQTtJQUNBLFNBQUE7RUFoR0Y7RUFrR0U7SUFDRSx1QkFBQTtFQWhHSjtFQW9HQTtJQUNFLGdCQUFBO0VBbEdGO0VBb0dFO0lBQ0UsaUJBQUE7RUFsR0o7RUFzR0E7SUFDRSxzQkFBQTtJQUNBLFFBQUE7RUFwR0Y7RUFzR0U7SUFDRSxXQUFBO0VBcEdKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc3lzdGVtLWxvZ3MtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vLyBQYWdlIEhlYWRlciBTdHlsaW5nXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2Y4ZjlmYSAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcclxuICBcclxuICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgICBcclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIFxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMsICM0ZGI2YWMpO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEZpbHRlcnMgU2VjdGlvblxyXG4uZmlsdGVycy1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIFxyXG4gIC5maWx0ZXJzLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgXHJcbiAgICAuc2VhcmNoLWZpbHRlciB7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbiAgICAgIFxyXG4gICAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAxNHB4O1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICBjb2xvcjogI2FkYjViZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHggMTBweCA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGV2ZWwtZmlsdGVyLFxyXG4gICAgLm1vZHVsZS1maWx0ZXIsXHJcbiAgICAuYWN0aW9uLWZpbHRlcixcclxuICAgIC5kYXRlLWZpbHRlciB7XHJcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTG9ncyBMaXN0IFNlY3Rpb25cclxuLmxvZ3MtbGlzdC1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4ubGlzdC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDEycHg7XHJcbiAgXHJcbiAgLnRvdGFsLWNvdW50IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5sZXZlbC1zdW1tYXJ5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBcclxuICAgIC5sZXZlbC1pdGVtIHtcclxuICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgXHJcbiAgICAgICYuaW5mbyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMywgMTYyLCAxODQsIDAuMSk7XHJcbiAgICAgICAgY29sb3I6ICMwYzU0NjA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYud2FybmluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MywgNywgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzg1NjQwNDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5lcnJvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzcyMWMyNDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5zdWNjZXNzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLmRlYnVnIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgMTE3LCAxMjUsIDAuMSk7XHJcbiAgICAgICAgY29sb3I6ICMzODNkNDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRhYmxlIFN0eWxpbmdcclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgXHJcbiAgLmxvZ3MtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIFxyXG4gICAgdGhlYWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xyXG4gICAgICBcclxuICAgICAgdGgge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYuaW5mbyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzLCAxNjIsIDE4NCwgMC4wMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYud2FybmluZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5lcnJvciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5zdWNjZXNzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksIDAuMDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmRlYnVnIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA4LCAxMTcsIDEyNSwgMC4wMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTJweDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5sZXZlbC1jZWxsIHtcclxuICAgIC5sZXZlbC1iYWRnZSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDZweDtcclxuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICBcclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5pbmZvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzLCAxNjIsIDE4NCwgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzBjNTQ2MDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi53YXJuaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLmVycm9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLnN1Y2Nlc3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksIDAuMSk7XHJcbiAgICAgICAgY29sb3I6ICMxNTU3MjQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYuZGVidWcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA4LCAxMTcsIDEyNSwgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzM4M2Q0MTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubW9kdWxlLWNlbGwsXHJcbiAgLmFjdGlvbi1jZWxsIHtcclxuICAgIC5tb2R1bGUtYmFkZ2UsXHJcbiAgICAuYWN0aW9uLWJhZGdlIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xyXG4gICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubWVzc2FnZS1jZWxsIHtcclxuICAgIC5sb2ctbWVzc2FnZSB7XHJcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICBcclxuICAgICAgLmxvZy1kZXRhaWxzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnVzZXItY2VsbCxcclxuICAuaXAtY2VsbCB7XHJcbiAgICAudXNlci1pbmZvLFxyXG4gICAgLmlwLWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDZweDtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIFxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRlLWNlbGwge1xyXG4gICAgLmRhdGUtaW5mbyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogNnB4O1xyXG4gICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbnMtY2VsbCB7XHJcbiAgICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDZweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEVtcHR5IFN0YXRlXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDYwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbiAgICAmLmZhLXNwaW5uZXIge1xyXG4gICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCdXR0b25zXHJcbi5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgXHJcbiAgJi5idG4tc20ge1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgJi5idG4tb3V0bGluZS1kYW5nZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBQYWdpbmF0aW9uXHJcbi5wYWdpbmF0aW9uLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICAgIC5wYWdlLWl0ZW0ge1xyXG4gICAgICAucGFnZS1saW5rIHtcclxuICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwNjk1YztcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYuYWN0aXZlIC5wYWdlLWxpbmsge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5kaXNhYmxlZCAucGFnZS1saW5rIHtcclxuICAgICAgICBjb2xvcjogI2FkYjViZDtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICNhZGI1YmQ7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNlOWVjZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBbGVydFxyXG4uYWxlcnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgbWFyZ2luOiAxNnB4IDIwcHg7XHJcbiAgXHJcbiAgJi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLCA1MywgNjksIDAuMik7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5wYWdlLXRpdGxlIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQgaSB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAubG9ncy10YWJsZSB7XHJcbiAgICB0aGVhZCB0aCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0Ym9keSB0ZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudXNlci1pbmZvLFxyXG4gIC5pcC1pbmZvLFxyXG4gIC5kYXRlLWluZm8ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnN5c3RlbS1sb2dzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZmlsdGVycy1jYXJkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIC5zZWFyY2gtZmlsdGVyIHtcclxuICAgICAgZ3JpZC1jb2x1bW46IDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmxpc3QtaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIFxyXG4gICAgLmxldmVsLXN1bW1hcnkge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgXHJcbiAgICAubG9ncy10YWJsZSB7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNHB4O1xyXG4gICAgXHJcbiAgICAuYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9191:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/system/components/system-settings/system-settings.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemSettingsComponent: () => (/* binding */ SystemSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_notification_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/notification-config.service */ 2248);
/* harmony import */ var _core_services_cloud_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/cloud-storage.service */ 473);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);








function SystemSettingsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.saveMessage ? ctx_r0.saveMessageType === "success" ? "alert-success" : "alert-danger" : ctx_r0.testMessageType === "success" ? "alert-success" : "alert-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]((ctx_r0.saveMessage ? ctx_r0.saveMessageType : ctx_r0.testMessageType) === "success" ? "fas fa-check-circle" : "fas fa-exclamation-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.saveMessage || ctx_r0.testMessage, " ");
  }
}
function SystemSettingsComponent_div_23_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("smtpHostRequired"), " ");
  }
}
function SystemSettingsComponent_div_23_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("smtpPortRequired"), " ");
  }
}
function SystemSettingsComponent_div_23_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("smtpUsernameRequired"), " ");
  }
}
function SystemSettingsComponent_div_23_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("smtpPasswordRequired"), " ");
  }
}
function SystemSettingsComponent_div_23_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("fromEmailRequired"), " ");
  }
}
function SystemSettingsComponent_div_23_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("fromNameRequired"), " ");
  }
}
function SystemSettingsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 19)(9, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SystemSettingsComponent_div_23_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.saveConfiguration("email"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 21)(11, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 24)(15, "div", 21)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SystemSettingsComponent_div_23_div_19_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 21)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SystemSettingsComponent_div_23_div_24_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 21)(26, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 24)(30, "div", 21)(31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, SystemSettingsComponent_div_23_div_34_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 21)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, SystemSettingsComponent_div_23_div_39_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 24)(41, "div", 21)(42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, SystemSettingsComponent_div_23_div_45_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 21)(47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, SystemSettingsComponent_div_23_div_50_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 33)(52, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemSettingsComponent_div_23_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.testConfiguration("email"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_22_0;
    let tmp_23_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("emailConfiguration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("emailConfigurationDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.emailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("enableEmailNotifications"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("smtpHost"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx_r0.emailForm.get("smtp_host")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.emailForm.get("smtp_host")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r0.emailForm.get("smtp_host")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r0.emailForm.get("smtp_host")) == null ? null : tmp_7_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("smtpPort"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_9_0 = ctx_r0.emailForm.get("smtp_port")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r0.emailForm.get("smtp_port")) == null ? null : tmp_9_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx_r0.emailForm.get("smtp_port")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r0.emailForm.get("smtp_port")) == null ? null : tmp_10_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("useSecureConnection"), " (TLS/SSL) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("smtpUsername"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_13_0 = ctx_r0.emailForm.get("smtp_user")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r0.emailForm.get("smtp_user")) == null ? null : tmp_13_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx_r0.emailForm.get("smtp_user")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r0.emailForm.get("smtp_user")) == null ? null : tmp_14_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("smtpPassword"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_16_0 = ctx_r0.emailForm.get("smtp_password")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r0.emailForm.get("smtp_password")) == null ? null : tmp_16_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx_r0.emailForm.get("smtp_password")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r0.emailForm.get("smtp_password")) == null ? null : tmp_17_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("fromEmail"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_19_0 = ctx_r0.emailForm.get("from_email")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx_r0.emailForm.get("from_email")) == null ? null : tmp_19_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_20_0 = ctx_r0.emailForm.get("from_email")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx_r0.emailForm.get("from_email")) == null ? null : tmp_20_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("fromName"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_22_0 = ctx_r0.emailForm.get("from_name")) == null ? null : tmp_22_0.invalid) && ((tmp_22_0 = ctx_r0.emailForm.get("from_name")) == null ? null : tmp_22_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_23_0 = ctx_r0.emailForm.get("from_name")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx_r0.emailForm.get("from_name")) == null ? null : tmp_23_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isLoading || ctx_r0.emailForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("testConfiguration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isLoading || ctx_r0.emailForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.isLoading ? ctx_r0.getTranslation("saving") : ctx_r0.getTranslation("saveConfiguration"), " ");
  }
}
function SystemSettingsComponent_div_24_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("smsProviderRequired"), " ");
  }
}
function SystemSettingsComponent_div_24_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("apiKeyRequired"), " ");
  }
}
function SystemSettingsComponent_div_24_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("apiSecretRequired"), " ");
  }
}
function SystemSettingsComponent_div_24_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("senderIdRequired"), " ");
  }
}
function SystemSettingsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 19)(9, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SystemSettingsComponent_div_24_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.saveConfiguration("sms"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 21)(11, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 21)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "select", 39)(18, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Twilio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Vonage (Nexmo)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "AWS SNS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, SystemSettingsComponent_div_24_div_28_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 24)(30, "div", 21)(31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, SystemSettingsComponent_div_24_div_34_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 21)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, SystemSettingsComponent_div_24_div_39_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 21)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, SystemSettingsComponent_div_24_div_44_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 33)(46, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemSettingsComponent_div_24_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.testConfiguration("sms"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_17_0;
    let tmp_18_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("smsConfiguration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("smsConfigurationDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.smsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("enableSMSNotifications"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("smsProvider"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx_r0.smsForm.get("provider")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.smsForm.get("provider")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("selectProvider"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("other"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx_r0.smsForm.get("provider")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r0.smsForm.get("provider")) == null ? null : tmp_9_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("apiKey"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_11_0 = ctx_r0.smsForm.get("api_key")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r0.smsForm.get("api_key")) == null ? null : tmp_11_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx_r0.smsForm.get("api_key")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r0.smsForm.get("api_key")) == null ? null : tmp_12_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("apiSecret"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_14_0 = ctx_r0.smsForm.get("api_secret")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r0.smsForm.get("api_secret")) == null ? null : tmp_14_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx_r0.smsForm.get("api_secret")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r0.smsForm.get("api_secret")) == null ? null : tmp_15_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("senderId"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_17_0 = ctx_r0.smsForm.get("sender_id")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r0.smsForm.get("sender_id")) == null ? null : tmp_17_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx_r0.smsForm.get("sender_id")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx_r0.smsForm.get("sender_id")) == null ? null : tmp_18_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isLoading || ctx_r0.smsForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("testConfiguration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isLoading || ctx_r0.smsForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.isLoading ? ctx_r0.getTranslation("saving") : ctx_r0.getTranslation("saveConfiguration"), " ");
  }
}
function SystemSettingsComponent_div_25_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("pushProviderRequired"), " ");
  }
}
function SystemSettingsComponent_div_25_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("serverKeyRequired"), " ");
  }
}
function SystemSettingsComponent_div_25_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("projectIdRequired"), " ");
  }
}
function SystemSettingsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 19)(9, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SystemSettingsComponent_div_25_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.saveConfiguration("push"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 21)(11, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 21)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "select", 39)(18, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Firebase Cloud Messaging (FCM)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Apple Push Notification Service (APNS)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SystemSettingsComponent_div_25_div_26_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 21)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, SystemSettingsComponent_div_25_div_31_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 21)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, SystemSettingsComponent_div_25_div_36_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 21)(38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "textarea", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 33)(42, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemSettingsComponent_div_25_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.testConfiguration("push"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_15_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("pushConfiguration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("pushConfigurationDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.pushForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("enablePushNotifications"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("pushProvider"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx_r0.pushForm.get("provider")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.pushForm.get("provider")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("selectProvider"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("other"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx_r0.pushForm.get("provider")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r0.pushForm.get("provider")) == null ? null : tmp_9_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("serverKey"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_11_0 = ctx_r0.pushForm.get("server_key")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r0.pushForm.get("server_key")) == null ? null : tmp_11_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx_r0.pushForm.get("server_key")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r0.pushForm.get("server_key")) == null ? null : tmp_12_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("projectId"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_14_0 = ctx_r0.pushForm.get("project_id")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r0.pushForm.get("project_id")) == null ? null : tmp_14_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx_r0.pushForm.get("project_id")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r0.pushForm.get("project_id")) == null ? null : tmp_15_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("serviceAccount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.getTranslation("serviceAccountPlaceholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isLoading || ctx_r0.pushForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("testConfiguration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isLoading || ctx_r0.pushForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.isLoading ? ctx_r0.getTranslation("saving") : ctx_r0.getTranslation("saveConfiguration"), " ");
  }
}
function SystemSettingsComponent_div_26_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("whatsappProviderRequired"), " ");
  }
}
function SystemSettingsComponent_div_26_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("apiKeyRequired"), " ");
  }
}
function SystemSettingsComponent_div_26_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("apiSecretRequired"), " ");
  }
}
function SystemSettingsComponent_div_26_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("phoneNumberIdRequired"), " ");
  }
}
function SystemSettingsComponent_div_26_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("businessAccountIdRequired"), " ");
  }
}
function SystemSettingsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 19)(9, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SystemSettingsComponent_div_26_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.saveConfiguration("whatsapp"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 21)(11, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 21)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "select", 39)(18, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Twilio WhatsApp API");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Meta WhatsApp Business API");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SystemSettingsComponent_div_26_div_26_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 24)(28, "div", 21)(29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, SystemSettingsComponent_div_26_div_32_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 21)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, SystemSettingsComponent_div_26_div_37_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 24)(39, "div", 21)(40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, SystemSettingsComponent_div_26_div_43_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 21)(45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, SystemSettingsComponent_div_26_div_48_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 33)(50, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemSettingsComponent_div_26_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.testConfiguration("whatsapp"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_21_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("whatsappConfiguration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("whatsappConfigurationDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.whatsappForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("enableWhatsAppNotifications"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("whatsappProvider"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx_r0.whatsappForm.get("provider")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.whatsappForm.get("provider")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("selectProvider"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("other"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx_r0.whatsappForm.get("provider")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r0.whatsappForm.get("provider")) == null ? null : tmp_9_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("apiKey"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_11_0 = ctx_r0.whatsappForm.get("api_key")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r0.whatsappForm.get("api_key")) == null ? null : tmp_11_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx_r0.whatsappForm.get("api_key")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r0.whatsappForm.get("api_key")) == null ? null : tmp_12_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("apiSecret"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_14_0 = ctx_r0.whatsappForm.get("api_secret")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r0.whatsappForm.get("api_secret")) == null ? null : tmp_14_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx_r0.whatsappForm.get("api_secret")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r0.whatsappForm.get("api_secret")) == null ? null : tmp_15_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("phoneNumberId"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_17_0 = ctx_r0.whatsappForm.get("phone_number_id")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r0.whatsappForm.get("phone_number_id")) == null ? null : tmp_17_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx_r0.whatsappForm.get("phone_number_id")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx_r0.whatsappForm.get("phone_number_id")) == null ? null : tmp_18_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("businessAccountId"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_20_0 = ctx_r0.whatsappForm.get("business_account_id")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx_r0.whatsappForm.get("business_account_id")) == null ? null : tmp_20_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_21_0 = ctx_r0.whatsappForm.get("business_account_id")) == null ? null : tmp_21_0.invalid) && ((tmp_21_0 = ctx_r0.whatsappForm.get("business_account_id")) == null ? null : tmp_21_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isLoading || ctx_r0.whatsappForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("testConfiguration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isLoading || ctx_r0.whatsappForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.isLoading ? ctx_r0.getTranslation("saving") : ctx_r0.getTranslation("saveConfiguration"), " ");
  }
}
function SystemSettingsComponent_div_27_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("cloudStorageProviderRequired"), " ");
  }
}
function SystemSettingsComponent_div_27_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h4", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 24)(4, "div", 21)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 21)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 24)(13, "div", 21)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 21)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_10_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("awsS3Configuration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("awsAccessKeyId"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_4_0 = ctx_r0.cloudStorageForm.get("awsAccessKeyId")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.cloudStorageForm.get("awsAccessKeyId")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("awsSecretAccessKey"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx_r0.cloudStorageForm.get("awsSecretAccessKey")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.cloudStorageForm.get("awsSecretAccessKey")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("awsRegion"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx_r0.cloudStorageForm.get("awsRegion")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.cloudStorageForm.get("awsRegion")) == null ? null : tmp_8_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("awsBucket"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_10_0 = ctx_r0.cloudStorageForm.get("awsBucket")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r0.cloudStorageForm.get("awsBucket")) == null ? null : tmp_10_0.touched));
  }
}
function SystemSettingsComponent_div_27_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h4", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 24)(4, "div", 21)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 21)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 21)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "textarea", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("googleCloudStorageConfiguration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("gcsProjectId"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_4_0 = ctx_r0.cloudStorageForm.get("gcsProjectId")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.cloudStorageForm.get("gcsProjectId")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("gcsBucket"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx_r0.cloudStorageForm.get("gcsBucket")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.cloudStorageForm.get("gcsBucket")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("gcsKeyFile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.getTranslation("gcsKeyFilePlaceholder"));
  }
}
function SystemSettingsComponent_div_27_div_29_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("azureAccountKey"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_4_0 = ctx_r0.cloudStorageForm.get("azureAccountKey")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.cloudStorageForm.get("azureAccountKey")) == null ? null : tmp_4_0.touched));
  }
}
function SystemSettingsComponent_div_27_div_29_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 21)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 21)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "small", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    let tmp_8_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("azureClientId"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_4_0 = ctx_r0.cloudStorageForm.get("azureClientId")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.cloudStorageForm.get("azureClientId")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("azureTenantId"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx_r0.cloudStorageForm.get("azureTenantId")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.cloudStorageForm.get("azureTenantId")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("azureClientSecret"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx_r0.cloudStorageForm.get("azureClientSecret")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.cloudStorageForm.get("azureClientSecret")) == null ? null : tmp_8_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("azureClientSecretHint"));
  }
}
function SystemSettingsComponent_div_27_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h4", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 21)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 21)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 21)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SystemSettingsComponent_div_27_div_29_Template_select_change_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.onAzureAuthMethodChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SystemSettingsComponent_div_27_div_29_div_19_Template, 5, 3, "div", 62)(20, SystemSettingsComponent_div_27_div_29_div_20_Template, 15, 10, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("azureBlobStorageConfiguration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("azureAccountName"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_4_0 = ctx_r0.cloudStorageForm.get("azureAccountName")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.cloudStorageForm.get("azureAccountName")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("azureContainer"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx_r0.cloudStorageForm.get("azureContainer")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.cloudStorageForm.get("azureContainer")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("azureAuthMethod"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("azureAccountKeyAuth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("azureADAuth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.cloudStorageForm.value.azureAuthMethod === "account-key");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.cloudStorageForm.value.azureAuthMethod === "azure-ad");
  }
}
function SystemSettingsComponent_div_27_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h4", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 24)(4, "div", 21)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 21)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("localStorageConfiguration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("localUploadPath"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("baseUrl"));
  }
}
function SystemSettingsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 19)(9, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SystemSettingsComponent_div_27_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.saveCloudStorageConfig());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 21)(11, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 21)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SystemSettingsComponent_div_27_Template_select_change_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.onCloudStorageProviderChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "AWS S3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Google Cloud Storage");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Azure Blob Storage");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SystemSettingsComponent_div_27_div_26_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, SystemSettingsComponent_div_27_div_27_Template, 21, 13, "div", 62)(28, SystemSettingsComponent_div_27_div_28_Template, 16, 9, "div", 62)(29, SystemSettingsComponent_div_27_div_29_Template, 21, 12, "div", 62)(30, SystemSettingsComponent_div_27_div_30_Template, 12, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 33)(32, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemSettingsComponent_div_27_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.testCloudStorageConfig());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("cloudStorageConfiguration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("cloudStorageConfigurationDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.cloudStorageForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("enableCloudStorage"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("cloudStorageProvider"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx_r0.cloudStorageForm.get("provider")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.cloudStorageForm.get("provider")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getTranslation("localStorage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx_r0.cloudStorageForm.get("provider")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.cloudStorageForm.get("provider")) == null ? null : tmp_8_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.cloudStorageForm.value.provider === "aws-s3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.cloudStorageForm.value.provider === "google-cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.cloudStorageForm.value.provider === "azure");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.cloudStorageForm.value.provider === "local");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isLoading || ctx_r0.cloudStorageForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("testConfiguration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isLoading || ctx_r0.cloudStorageForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.isLoading ? ctx_r0.getTranslation("saving") : ctx_r0.getTranslation("saveConfiguration"), " ");
  }
}
class SystemSettingsComponent {
  constructor(languageService, translationService, notificationConfigService, cloudStorageService, fb) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.notificationConfigService = notificationConfigService;
    this.cloudStorageService = cloudStorageService;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.activeTab = 'email';
    this.isLoading = false;
    this.saveMessage = '';
    this.saveMessageType = 'success';
    this.testMessage = '';
    this.testMessageType = 'success';
    // Channel configurations
    this.emailConfig = null;
    this.smsConfig = null;
    this.pushConfig = null;
    this.whatsappConfig = null;
    this.cloudStorageConfig = null;
    // Initialize Email Form
    this.emailForm = this.fb.group({
      isEnabled: [true],
      smtp_host: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      smtp_port: [587, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(65535)]],
      smtp_secure: [false],
      smtp_user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      smtp_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      from_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      from_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    // Initialize SMS Form
    this.smsForm = this.fb.group({
      isEnabled: [false],
      provider: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      api_key: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      api_secret: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      sender_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    // Initialize Push Form
    this.pushForm = this.fb.group({
      isEnabled: [false],
      provider: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      server_key: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      project_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      service_account: ['']
    });
    // Initialize WhatsApp Form
    this.whatsappForm = this.fb.group({
      isEnabled: [false],
      provider: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      api_key: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      api_secret: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      phone_number_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      business_account_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    // Initialize Cloud Storage Form
    this.cloudStorageForm = this.fb.group({
      provider: ['local', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      enabled: [true],
      // AWS S3
      awsAccessKeyId: [''],
      awsSecretAccessKey: [''],
      awsRegion: [''],
      awsBucket: [''],
      // Google Cloud Storage
      gcsProjectId: [''],
      gcsBucket: [''],
      gcsKeyFile: [''],
      // Azure Blob Storage
      azureAccountName: [''],
      azureContainer: [''],
      azureAuthMethod: ['account-key'],
      azureAccountKey: [''],
      azureClientId: [''],
      azureTenantId: [''],
      azureClientSecret: [''],
      // Local storage
      localUploadPath: ['./uploads'],
      baseUrl: ['http://localhost:3000']
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadConfigurations();
    this.loadCloudStorageConfig();
  }
  loadConfigurations() {
    this.isLoading = true;
    this.notificationConfigService.getChannelConfigs().subscribe({
      next: configs => {
        configs.forEach(config => {
          switch (config.channelType) {
            case 'email':
              this.emailConfig = config;
              this.populateEmailForm(config);
              break;
            case 'sms':
              this.smsConfig = config;
              this.populateSMSForm(config);
              break;
            case 'push':
              this.pushConfig = config;
              this.populatePushForm(config);
              break;
            case 'whatsapp':
              this.whatsappConfig = config;
              this.populateWhatsAppForm(config);
              break;
          }
        });
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading configurations:', error);
        this.isLoading = false;
      }
    });
  }
  populateEmailForm(config) {
    const emailConfig = config.configData;
    this.emailForm.patchValue({
      isEnabled: config.isEnabled,
      smtp_host: emailConfig.smtp_host || '',
      smtp_port: emailConfig.smtp_port || 587,
      smtp_secure: emailConfig.smtp_secure || false,
      smtp_user: emailConfig.smtp_user || '',
      smtp_password: emailConfig.smtp_password || '',
      from_email: emailConfig.from_email || '',
      from_name: emailConfig.from_name || ''
    });
  }
  populateSMSForm(config) {
    const smsConfig = config.configData;
    this.smsForm.patchValue({
      isEnabled: config.isEnabled,
      provider: smsConfig.provider || '',
      api_key: smsConfig.api_key || '',
      api_secret: smsConfig.api_secret || '',
      sender_id: smsConfig.sender_id || ''
    });
  }
  populatePushForm(config) {
    const pushConfig = config.configData;
    this.pushForm.patchValue({
      isEnabled: config.isEnabled,
      provider: pushConfig.provider || '',
      server_key: pushConfig.server_key || '',
      project_id: pushConfig.project_id || '',
      service_account: pushConfig.service_account || ''
    });
  }
  populateWhatsAppForm(config) {
    const whatsappConfig = config.configData;
    this.whatsappForm.patchValue({
      isEnabled: config.isEnabled,
      provider: whatsappConfig.provider || '',
      api_key: whatsappConfig.api_key || '',
      api_secret: whatsappConfig.api_secret || '',
      phone_number_id: whatsappConfig.phone_number_id || '',
      business_account_id: whatsappConfig.business_account_id || ''
    });
  }
  switchTab(tab) {
    this.activeTab = tab;
    this.saveMessage = '';
    this.testMessage = '';
    // Reload cloud storage config when switching to cloud storage tab
    if (tab === 'cloud-storage') {
      this.loadCloudStorageConfig();
    }
  }
  loadCloudStorageConfig() {
    this.isLoading = true;
    console.log('Loading cloud storage config...');
    this.cloudStorageService.getConfig().subscribe({
      next: config => {
        console.log('Cloud storage config loaded:', config);
        this.cloudStorageConfig = config;
        if (config) {
          console.log('Populating form with config:', config);
          this.populateCloudStorageForm(config);
        } else {
          console.log('No config found, using defaults');
          // If no config exists, reset form to defaults
          this.cloudStorageForm.patchValue({
            provider: 'local',
            enabled: true,
            localUploadPath: './uploads',
            baseUrl: 'http://localhost:3000'
          });
        }
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading cloud storage config:', error);
        this.isLoading = false;
      }
    });
  }
  populateCloudStorageForm(config) {
    this.cloudStorageForm.patchValue({
      provider: config.provider,
      enabled: config.enabled,
      awsAccessKeyId: config.awsAccessKeyId || '',
      awsSecretAccessKey: config.awsSecretAccessKey || '',
      awsRegion: config.awsRegion || '',
      awsBucket: config.awsBucket || '',
      gcsProjectId: config.gcsProjectId || '',
      gcsBucket: config.gcsBucket || '',
      gcsKeyFile: config.gcsKeyFile || '',
      azureAccountName: config.azureAccountName || '',
      azureContainer: config.azureContainer || '',
      azureAuthMethod: config.azureAuthMethod || 'account-key',
      azureAccountKey: config.azureAccountKey || '',
      azureClientId: config.azureClientId || '',
      azureTenantId: config.azureTenantId || '',
      azureClientSecret: config.azureClientSecret || '',
      localUploadPath: config.localUploadPath || './uploads',
      baseUrl: config.baseUrl || 'http://localhost:3000'
    });
    // Update validators based on provider
    this.updateCloudStorageValidators(config.provider);
  }
  saveCloudStorageConfig() {
    if (this.cloudStorageForm.invalid) {
      this.cloudStorageForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.saveMessage = '';
    const formValue = this.cloudStorageForm.value;
    const config = {
      provider: formValue.provider,
      enabled: formValue.enabled,
      awsAccessKeyId: formValue.awsAccessKeyId,
      awsSecretAccessKey: formValue.awsSecretAccessKey,
      awsRegion: formValue.awsRegion,
      awsBucket: formValue.awsBucket,
      gcsProjectId: formValue.gcsProjectId,
      gcsBucket: formValue.gcsBucket,
      gcsKeyFile: formValue.gcsKeyFile,
      azureAccountName: formValue.azureAccountName,
      azureContainer: formValue.azureContainer,
      azureAuthMethod: formValue.azureAuthMethod,
      azureAccountKey: formValue.azureAccountKey,
      azureClientId: formValue.azureClientId,
      azureTenantId: formValue.azureTenantId,
      azureClientSecret: formValue.azureClientSecret,
      localUploadPath: formValue.localUploadPath,
      baseUrl: formValue.baseUrl
    };
    this.cloudStorageService.saveConfig(config).subscribe({
      next: savedConfig => {
        this.isLoading = false;
        this.cloudStorageConfig = savedConfig;
        this.saveMessage = this.getTranslation('configurationSaved') || 'Configuration saved successfully';
        this.saveMessageType = 'success';
        setTimeout(() => {
          this.saveMessage = '';
        }, 3000);
      },
      error: error => {
        console.error('Error saving cloud storage config:', error);
        this.isLoading = false;
        this.saveMessage = error.error?.error || this.getTranslation('errorSavingConfiguration') || 'Error saving configuration';
        this.saveMessageType = 'error';
        setTimeout(() => {
          this.saveMessage = '';
        }, 5000);
      }
    });
  }
  onCloudStorageProviderChange() {
    const provider = this.cloudStorageForm.value.provider;
    // If we have existing config for this provider, keep those values
    // Otherwise, reset provider-specific fields
    if (this.cloudStorageConfig && this.cloudStorageConfig.provider === provider) {
      // Keep existing values, just update validators
      this.updateCloudStorageValidators(provider);
    } else {
      // Reset all provider-specific fields when switching to a different provider
      this.cloudStorageForm.patchValue({
        awsAccessKeyId: '',
        awsSecretAccessKey: '',
        awsRegion: '',
        awsBucket: '',
        gcsProjectId: '',
        gcsBucket: '',
        gcsKeyFile: '',
        azureAccountName: '',
        azureContainer: '',
        azureAuthMethod: 'account-key',
        azureAccountKey: '',
        azureClientId: '',
        azureTenantId: '',
        azureClientSecret: ''
      });
      // Update validators based on provider
      this.updateCloudStorageValidators(provider);
    }
  }
  updateCloudStorageValidators(provider) {
    // Remove all validators first
    Object.keys(this.cloudStorageForm.controls).forEach(key => {
      if (key !== 'provider' && key !== 'enabled' && key !== 'localUploadPath' && key !== 'baseUrl') {
        this.cloudStorageForm.get(key)?.clearValidators();
        this.cloudStorageForm.get(key)?.updateValueAndValidity();
      }
    });
    // Add validators based on provider
    if (provider === 'aws-s3') {
      this.cloudStorageForm.get('awsAccessKeyId')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      this.cloudStorageForm.get('awsSecretAccessKey')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      this.cloudStorageForm.get('awsRegion')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      this.cloudStorageForm.get('awsBucket')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
    } else if (provider === 'google-cloud') {
      this.cloudStorageForm.get('gcsProjectId')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      this.cloudStorageForm.get('gcsBucket')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
    } else if (provider === 'azure') {
      this.cloudStorageForm.get('azureAccountName')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      this.cloudStorageForm.get('azureContainer')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      this.cloudStorageForm.get('azureAuthMethod')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      // Update validators based on auth method
      this.updateAzureAuthValidators();
    }
    // Update validity
    Object.keys(this.cloudStorageForm.controls).forEach(key => {
      this.cloudStorageForm.get(key)?.updateValueAndValidity();
    });
  }
  onAzureAuthMethodChange() {
    this.updateAzureAuthValidators();
  }
  updateAzureAuthValidators() {
    const authMethod = this.cloudStorageForm.value.azureAuthMethod;
    // Clear validators for both auth methods
    this.cloudStorageForm.get('azureAccountKey')?.clearValidators();
    this.cloudStorageForm.get('azureClientId')?.clearValidators();
    this.cloudStorageForm.get('azureTenantId')?.clearValidators();
    this.cloudStorageForm.get('azureClientSecret')?.clearValidators();
    // Set validators based on auth method
    if (authMethod === 'account-key') {
      this.cloudStorageForm.get('azureAccountKey')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
    } else if (authMethod === 'azure-ad') {
      this.cloudStorageForm.get('azureClientId')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      this.cloudStorageForm.get('azureTenantId')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      this.cloudStorageForm.get('azureClientSecret')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
    }
    // Update validity
    this.cloudStorageForm.get('azureAccountKey')?.updateValueAndValidity();
    this.cloudStorageForm.get('azureClientId')?.updateValueAndValidity();
    this.cloudStorageForm.get('azureTenantId')?.updateValueAndValidity();
    this.cloudStorageForm.get('azureClientSecret')?.updateValueAndValidity();
  }
  saveConfiguration(channelType) {
    let form;
    let configData;
    switch (channelType) {
      case 'email':
        if (this.emailForm.invalid) return;
        form = this.emailForm;
        configData = {
          smtp_host: form.value.smtp_host,
          smtp_port: form.value.smtp_port,
          smtp_secure: form.value.smtp_secure,
          smtp_user: form.value.smtp_user,
          smtp_password: form.value.smtp_password,
          from_email: form.value.from_email,
          from_name: form.value.from_name
        };
        break;
      case 'sms':
        if (this.smsForm.invalid) return;
        form = this.smsForm;
        configData = {
          provider: form.value.provider,
          api_key: form.value.api_key,
          api_secret: form.value.api_secret,
          sender_id: form.value.sender_id
        };
        break;
      case 'push':
        if (this.pushForm.invalid) return;
        form = this.pushForm;
        configData = {
          provider: form.value.provider,
          server_key: form.value.server_key,
          project_id: form.value.project_id,
          service_account: form.value.service_account
        };
        break;
      case 'whatsapp':
        if (this.whatsappForm.invalid) return;
        form = this.whatsappForm;
        configData = {
          provider: form.value.provider,
          api_key: form.value.api_key,
          api_secret: form.value.api_secret,
          phone_number_id: form.value.phone_number_id,
          business_account_id: form.value.business_account_id
        };
        break;
      default:
        return;
    }
    this.isLoading = true;
    this.saveMessage = '';
    this.notificationConfigService.upsertChannelConfig(channelType, form.value.isEnabled, configData).subscribe({
      next: response => {
        this.isLoading = false;
        this.saveMessage = response.message || this.getTranslation('configurationSaved');
        this.saveMessageType = 'success';
        this.loadConfigurations();
        setTimeout(() => {
          this.saveMessage = '';
        }, 3000);
      },
      error: error => {
        console.error('Error saving configuration:', error);
        this.isLoading = false;
        this.saveMessage = error.error?.error || this.getTranslation('errorSavingConfiguration');
        this.saveMessageType = 'error';
        setTimeout(() => {
          this.saveMessage = '';
        }, 5000);
      }
    });
  }
  testCloudStorageConfig() {
    if (this.cloudStorageForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.testMessage = '';
    const formValue = this.cloudStorageForm.value;
    const config = {
      provider: formValue.provider,
      enabled: formValue.enabled,
      awsAccessKeyId: formValue.awsAccessKeyId,
      awsSecretAccessKey: formValue.awsSecretAccessKey,
      awsRegion: formValue.awsRegion,
      awsBucket: formValue.awsBucket,
      gcsProjectId: formValue.gcsProjectId,
      gcsBucket: formValue.gcsBucket,
      gcsKeyFile: formValue.gcsKeyFile,
      azureAccountName: formValue.azureAccountName,
      azureContainer: formValue.azureContainer,
      azureAuthMethod: formValue.azureAuthMethod,
      azureAccountKey: formValue.azureAccountKey,
      azureClientId: formValue.azureClientId,
      azureTenantId: formValue.azureTenantId,
      azureClientSecret: formValue.azureClientSecret,
      localUploadPath: formValue.localUploadPath,
      baseUrl: formValue.baseUrl
    };
    this.cloudStorageService.testConfig(config).subscribe({
      next: result => {
        this.isLoading = false;
        this.testMessage = result.message;
        this.testMessageType = result.success ? 'success' : 'error';
        setTimeout(() => {
          this.testMessage = '';
        }, 5000);
      },
      error: error => {
        this.isLoading = false;
        this.testMessage = error.error?.message || error.error?.error || this.getTranslation('errorTestingConfiguration') || 'Error testing configuration';
        this.testMessageType = 'error';
        setTimeout(() => {
          this.testMessage = '';
        }, 5000);
      }
    });
  }
  testConfiguration(channelType) {
    this.isLoading = true;
    this.testMessage = '';
    this.notificationConfigService.testChannelConfig(channelType).subscribe({
      next: response => {
        this.isLoading = false;
        this.testMessage = response.message;
        this.testMessageType = response.success ? 'success' : 'error';
        setTimeout(() => {
          this.testMessage = '';
        }, 5000);
      },
      error: error => {
        console.error('Error testing configuration:', error);
        this.isLoading = false;
        this.testMessage = error.error?.error || this.getTranslation('errorTestingConfiguration');
        this.testMessageType = 'error';
        setTimeout(() => {
          this.testMessage = '';
        }, 5000);
      }
    });
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function SystemSettingsComponent_Factory(t) {
      return new (t || SystemSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_notification_config_service__WEBPACK_IMPORTED_MODULE_2__.NotificationConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_cloud_storage_service__WEBPACK_IMPORTED_MODULE_3__.CloudStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SystemSettingsComponent,
      selectors: [["app-system-settings"]],
      decls: 28,
      vars: 23,
      consts: [[1, "system-settings-container", 3, "dir"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "fas", "fa-cogs"], ["class", "messages-section", 4, "ngIf"], [1, "tabs-navigation"], [1, "tab-button", 3, "click"], [1, "fas", "fa-envelope"], [1, "fas", "fa-sms"], [1, "fas", "fa-mobile-alt"], [1, "fab", "fa-whatsapp"], [1, "fas", "fa-cloud"], ["class", "config-section", 4, "ngIf"], [1, "messages-section"], [1, "alert", 3, "ngClass"], [1, "config-section"], [1, "config-card"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-check-label"], ["type", "checkbox", "formControlName", "isEnabled", 1, "form-check-input"], [1, "form-row"], ["type", "text", "formControlName", "smtp_host", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "number", "formControlName", "smtp_port", 1, "form-control"], ["type", "checkbox", "formControlName", "smtp_secure", 1, "form-check-input"], ["type", "text", "formControlName", "smtp_user", 1, "form-control"], ["type", "password", "formControlName", "smtp_password", 1, "form-control"], ["type", "email", "formControlName", "from_email", 1, "form-control"], ["type", "text", "formControlName", "from_name", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "fas", "fa-vial"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "fas", "fa-save"], [1, "invalid-feedback"], ["formControlName", "provider", 1, "form-control"], ["value", ""], ["value", "twilio"], ["value", "nexmo"], ["value", "aws-sns"], ["value", "other"], ["type", "text", "formControlName", "api_key", 1, "form-control"], ["type", "password", "formControlName", "api_secret", 1, "form-control"], ["type", "text", "formControlName", "sender_id", 1, "form-control"], ["value", "fcm"], ["value", "apns"], ["type", "text", "formControlName", "server_key", 1, "form-control"], ["type", "text", "formControlName", "project_id", 1, "form-control"], ["formControlName", "service_account", "rows", "4", 1, "form-control", 3, "placeholder"], ["value", "meta"], ["type", "text", "formControlName", "phone_number_id", 1, "form-control"], ["type", "text", "formControlName", "business_account_id", 1, "form-control"], ["type", "checkbox", "formControlName", "enabled", 1, "form-check-input"], ["formControlName", "provider", 1, "form-control", 3, "change"], ["value", "local"], ["value", "aws-s3"], ["value", "google-cloud"], ["value", "azure"], [4, "ngIf"], [1, "section-title"], ["type", "text", "formControlName", "awsAccessKeyId", 1, "form-control"], ["type", "password", "formControlName", "awsSecretAccessKey", 1, "form-control"], ["type", "text", "formControlName", "awsRegion", "placeholder", "us-east-1", 1, "form-control"], ["type", "text", "formControlName", "awsBucket", 1, "form-control"], ["type", "text", "formControlName", "gcsProjectId", 1, "form-control"], ["type", "text", "formControlName", "gcsBucket", 1, "form-control"], ["formControlName", "gcsKeyFile", "rows", "4", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "azureAccountName", 1, "form-control"], ["type", "text", "formControlName", "azureContainer", 1, "form-control"], ["formControlName", "azureAuthMethod", 1, "form-control", 3, "change"], ["value", "account-key"], ["value", "azure-ad"], ["type", "password", "formControlName", "azureAccountKey", 1, "form-control"], ["type", "text", "formControlName", "azureClientId", "placeholder", "54a88f72-745d-432f-b63c-b6ac657b0e18", 1, "form-control"], ["type", "text", "formControlName", "azureTenantId", "placeholder", "70ca47a3-3991-4823-8769-6da1f74d05c3", 1, "form-control"], ["type", "password", "formControlName", "azureClientSecret", 1, "form-control"], [1, "form-text", "text-muted"], ["type", "text", "formControlName", "localUploadPath", "placeholder", "./uploads", 1, "form-control"], ["type", "url", "formControlName", "baseUrl", "placeholder", "http://localhost:3000", 1, "form-control"]],
      template: function SystemSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SystemSettingsComponent_div_6_Template, 4, 4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemSettingsComponent_Template_button_click_8_listener() {
            return ctx.switchTab("email");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemSettingsComponent_Template_button_click_11_listener() {
            return ctx.switchTab("sms");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemSettingsComponent_Template_button_click_14_listener() {
            return ctx.switchTab("push");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemSettingsComponent_Template_button_click_17_listener() {
            return ctx.switchTab("whatsapp");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SystemSettingsComponent_Template_button_click_20_listener() {
            return ctx.switchTab("cloud-storage");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SystemSettingsComponent_div_23_Template, 58, 33, "div", 13)(24, SystemSettingsComponent_div_24_Template, 52, 26, "div", 13)(25, SystemSettingsComponent_div_25_Template, 48, 24, "div", 13)(26, SystemSettingsComponent_div_26_Template, 56, 30, "div", 13)(27, SystemSettingsComponent_div_27_Template, 38, 17, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("systemSettings"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.saveMessage || ctx.testMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeTab === "email");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("email"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeTab === "sms");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("sms"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeTab === "push");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("push"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeTab === "whatsapp");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("whatsapp"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeTab === "cloud-storage");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("cloudStorage"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "email");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "sms");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "push");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "whatsapp");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "cloud-storage");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
      styles: [".system-settings-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 12px;\n  font-size: 1.25rem;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.messages-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.messages-section[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 12px 16px;\n  font-size: 0.875rem;\n}\n.messages-section[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.1);\n  border: 1px solid rgba(40, 167, 69, 0.2);\n  color: #155724;\n}\n.messages-section[_ngcontent-%COMP%]   .alert.alert-danger[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  border: 1px solid rgba(220, 53, 69, 0.2);\n  color: #dc3545;\n}\n\n.tabs-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  background: white;\n  border-radius: 16px;\n  padding: 8px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  flex-wrap: wrap;\n}\n.tabs-navigation[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 150px;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 12px;\n  background: transparent;\n  color: #6c757d;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.tabs-navigation[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.tabs-navigation[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #495057;\n}\n.tabs-navigation[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.tabs-navigation[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n\n.config-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.config-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f1f3f4;\n  overflow: hidden;\n}\n.config-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  padding: 24px;\n}\n.config-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-weight: 700;\n  font-size: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.config-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.config-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.9;\n  font-size: 0.875rem;\n}\n.config-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #34495e;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  background: #fafbfc;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n  font-size: 0.8rem;\n}\n\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 0.75rem;\n  margin-top: 5px;\n  font-weight: 500;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f3f4;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%] {\n  border: 2px solid #00695c;\n  color: #00695c;\n  background: transparent;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #00695c;\n  color: white;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 12px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 12px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n@media (max-width: 768px) {\n  .system-settings-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .tabs-navigation[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .tabs-navigation[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3lzdGVtL2NvbXBvbmVudHMvc3lzdGVtLXNldHRpbmdzL3N5c3RlbS1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFHQTtFQUNFLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQUFSOztBQU9BO0VBQ0UsbUJBQUE7QUFKRjtBQU1FO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSko7QUFNSTtFQUNFLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0FBSk47QUFPSTtFQUNFLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0FBTE47O0FBV0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQVJGO0FBVUU7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUFSSjtBQVVJO0VBQ0UsZUFBQTtBQVJOO0FBV0k7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFUTjtBQVlJO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7QUFWTjtBQVlNO0VBQ0UsNENBQUE7QUFWUjs7QUFpQkE7RUFDRSxtQkFBQTtBQWRGOztBQWlCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFkRjtBQWdCRTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFkSjtBQWdCSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFkTjtBQWdCTTtFQUNFLGlCQUFBO0FBZFI7QUFrQkk7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBaEJOO0FBb0JFO0VBQ0UsYUFBQTtBQWxCSjs7QUF1QkE7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsbUJBQUE7QUFwQkY7QUFzQkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXBCSjtBQXVCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFyQko7QUF1Qkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFyQk47O0FBMEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQXZCRjtBQXlCRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUF2Qko7QUEwQkU7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0FBeEJKO0FBMkJFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBekJKOztBQTZCQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUExQkY7O0FBNkJBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTFCRjs7QUE4QkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBM0JGO0FBNkJFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQTNCSjtBQTZCSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQTNCTjtBQThCSTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0FBNUJOO0FBOEJNO0VBQ0UsMkJBQUE7RUFDQSw0Q0FBQTtBQTVCUjtBQWdDSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBOUJOO0FBZ0NNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBOUJSOztBQXNDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQW5DSjtBQXVDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXJDTjtBQXlDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQXZDSjtBQTBDRTtFQUNFLDJCQUFBO0FBeENKOztBQTZDQTtFQUNFO0lBQ0UsYUFBQTtFQTFDRjtFQTZDQTtJQUNFLHNCQUFBO0VBM0NGO0VBNkNFO0lBQ0UsZUFBQTtFQTNDSjtFQStDQTtJQUNFLDBCQUFBO0VBN0NGO0VBZ0RBO0lBQ0Usc0JBQUE7RUE5Q0Y7RUFnREU7SUFDRSxXQUFBO0lBQ0EsdUJBQUE7RUE5Q0o7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zeXN0ZW0tc2V0dGluZ3MtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vLyBQYWdlIEhlYWRlciBTdHlsaW5nXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2Y4ZjlmYSAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcclxuICBcclxuICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgICBcclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIFxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMsICM0ZGI2YWMpO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE1lc3NhZ2VzIFNlY3Rpb25cclxuLm1lc3NhZ2VzLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgXHJcbiAgLmFsZXJ0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgXHJcbiAgICAmLmFsZXJ0LXN1Y2Nlc3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjEpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQwLCAxNjcsIDY5LCAwLjIpO1xyXG4gICAgICBjb2xvcjogIzE1NTcyNDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5hbGVydC1kYW5nZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMCwgNTMsIDY5LCAwLjIpO1xyXG4gICAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRhYnMgTmF2aWdhdGlvblxyXG4udGFicy1uYXZpZ2F0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBcclxuICAudGFiLWJ1dHRvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMTA1LCA5MiwgMC4zKTtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLCAxMDUsIDkyLCAwLjQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDb25maWcgU2VjdGlvblxyXG4uY29uZmlnLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5jb25maWctY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIFxyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDEycHg7XHJcbiAgICAgIFxyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZvcm0gU3R5bGluZ1xyXG4uZm9ybS1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMzQ0OTVlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBcclxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQ6ICNmYWZiZmM7XHJcbiAgXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAmLmlzLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjIwLCA1MywgNjksIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2RjMzU0NTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8vIEZvcm0gQWN0aW9uc1xyXG4uZm9ybS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgXHJcbiAgLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIFxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDEwNSwgOTIsIDAuMyk7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDEwNSwgOTIsIDAuNCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwNjk1YztcclxuICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBcclxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwNjk1YztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5wYWdlLXRpdGxlIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWItYnV0dG9uIHtcclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWhlYWRlciBoMyBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgRGVzaWduXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zeXN0ZW0tc2V0dGluZ3MtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJzLW5hdmlnYXRpb24ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAgLnRhYi1idXR0b24ge1xyXG4gICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tYWN0aW9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbiAgICAuYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5173:
/*!**************************************************!*\
  !*** ./src/app/features/system/system.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemModule: () => (/* binding */ SystemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _components_system_settings_system_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/system-settings/system-settings.component */ 9191);
/* harmony import */ var _components_system_logs_system_logs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/system-logs/system-logs.component */ 8767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);








const routes = [{
  path: 'settings',
  component: _components_system_settings_system_settings_component__WEBPACK_IMPORTED_MODULE_1__.SystemSettingsComponent
}, {
  path: 'logs',
  component: _components_system_logs_system_logs_component__WEBPACK_IMPORTED_MODULE_2__.SystemLogsComponent
}, {
  path: '',
  redirectTo: 'settings',
  pathMatch: 'full'
}];
class SystemModule {
  static {
    this.ɵfac = function SystemModule_Factory(t) {
      return new (t || SystemModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: SystemModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SystemModule, {
    declarations: [_components_system_settings_system_settings_component__WEBPACK_IMPORTED_MODULE_1__.SystemSettingsComponent, _components_system_logs_system_logs_component__WEBPACK_IMPORTED_MODULE_2__.SystemLogsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_system_system_module_ts.js.map