"use strict";
(self["webpackChunkscreening_frontend"] = self["webpackChunkscreening_frontend"] || []).push([["src_app_features_whatsapp_whatsapp_module_ts"],{

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

/***/ 9197:
/*!************************************************************!*\
  !*** ./src/app/core/services/whatsapp-messages.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhatsAppMessagesService: () => (/* binding */ WhatsAppMessagesService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class WhatsAppMessagesService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || 'http://localhost:3000/api';
  }
  /**
   * Get all WhatsApp messages with optional filters
   */
  getMessages(filters) {
    const params = {};
    if (filters?.status) params.status = filters.status;
    if (filters?.messageType) params.messageType = filters.messageType;
    if (filters?.templateId) params.templateId = filters.templateId.toString();
    if (filters?.recipientUserId) params.recipientUserId = filters.recipientUserId.toString();
    if (filters?.search) params.search = filters.search;
    if (filters?.limit) params.limit = filters.limit.toString();
    if (filters?.page) params.page = filters.page.toString();
    return this.http.get(`${this.apiUrl}/whatsapp-messages`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      messages: response.messages.map(m => ({
        ...m,
        sentAt: m.sentAt ? new Date(m.sentAt) : null,
        deliveredAt: m.deliveredAt ? new Date(m.deliveredAt) : null,
        failedAt: m.failedAt ? new Date(m.failedAt) : null,
        createdAt: m.createdAt ? new Date(m.createdAt) : undefined,
        updatedAt: m.updatedAt ? new Date(m.updatedAt) : undefined
      })),
      total: response.total
    })));
  }
  /**
   * Get message by ID
   */
  getMessageById(id) {
    return this.http.get(`${this.apiUrl}/whatsapp-messages/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.message,
      sentAt: response.message.sentAt ? new Date(response.message.sentAt) : null,
      deliveredAt: response.message.deliveredAt ? new Date(response.message.deliveredAt) : null,
      failedAt: response.message.failedAt ? new Date(response.message.failedAt) : null,
      createdAt: response.message.createdAt ? new Date(response.message.createdAt) : undefined,
      updatedAt: response.message.updatedAt ? new Date(response.message.updatedAt) : undefined
    })));
  }
  /**
   * Send WhatsApp message(s) - individual or bulk
   */
  sendMessages(request) {
    return this.http.post(`${this.apiUrl}/whatsapp-messages`, request);
  }
  /**
   * Update message status
   */
  updateMessageStatus(id, status, errorMessage) {
    return this.http.put(`${this.apiUrl}/whatsapp-messages/${id}/status`, {
      status,
      errorMessage
    });
  }
  /**
   * Delete message
   */
  deleteMessage(id) {
    return this.http.delete(`${this.apiUrl}/whatsapp-messages/${id}`);
  }
  static {
    this.ɵfac = function WhatsAppMessagesService_Factory(t) {
      return new (t || WhatsAppMessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: WhatsAppMessagesService,
      factory: WhatsAppMessagesService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7460:
/*!*************************************************************!*\
  !*** ./src/app/core/services/whatsapp-templates.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhatsAppTemplatesService: () => (/* binding */ WhatsAppTemplatesService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class WhatsAppTemplatesService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || 'http://localhost:3000/api';
  }
  /**
   * Get all WhatsApp templates with optional filters
   */
  getTemplates(filters) {
    const params = {};
    if (filters?.category) params.category = filters.category;
    if (filters?.status) params.status = filters.status;
    if (filters?.search) params.search = filters.search;
    if (filters?.limit) params.limit = filters.limit.toString();
    if (filters?.offset) params.offset = filters.offset.toString();
    if (filters?.page) params.page = filters.page.toString();
    return this.http.get(`${this.apiUrl}/whatsapp-templates`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      templates: response.templates.map(t => ({
        ...t,
        lastUsed: t.lastUsed ? new Date(t.lastUsed) : null,
        createdAt: t.createdAt ? new Date(t.createdAt) : undefined,
        updatedAt: t.updatedAt ? new Date(t.updatedAt) : undefined
      })),
      total: response.total
    })));
  }
  /**
   * Get a single template by ID
   */
  getTemplateById(id) {
    return this.http.get(`${this.apiUrl}/whatsapp-templates/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.template,
      lastUsed: response.template.lastUsed ? new Date(response.template.lastUsed) : null,
      createdAt: response.template.createdAt ? new Date(response.template.createdAt) : undefined,
      updatedAt: response.template.updatedAt ? new Date(response.template.updatedAt) : undefined
    })));
  }
  /**
   * Create a new template
   */
  createTemplate(template) {
    return this.http.post(`${this.apiUrl}/whatsapp-templates`, template).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.template,
      lastUsed: response.template.lastUsed ? new Date(response.template.lastUsed) : null,
      createdAt: response.template.createdAt ? new Date(response.template.createdAt) : undefined,
      updatedAt: response.template.updatedAt ? new Date(response.template.updatedAt) : undefined
    })));
  }
  /**
   * Update a template
   */
  updateTemplate(id, template) {
    return this.http.put(`${this.apiUrl}/whatsapp-templates/${id}`, template).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
      ...response.template,
      lastUsed: response.template.lastUsed ? new Date(response.template.lastUsed) : null,
      createdAt: response.template.createdAt ? new Date(response.template.createdAt) : undefined,
      updatedAt: response.template.updatedAt ? new Date(response.template.updatedAt) : undefined
    })));
  }
  /**
   * Delete a template
   */
  deleteTemplate(id) {
    return this.http.delete(`${this.apiUrl}/whatsapp-templates/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => undefined));
  }
  /**
   * Increment template usage count
   */
  useTemplate(id) {
    return this.http.post(`${this.apiUrl}/whatsapp-templates/${id}/use`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => undefined));
  }
  static {
    this.ɵfac = function WhatsAppTemplatesService_Factory(t) {
      return new (t || WhatsAppTemplatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: WhatsAppTemplatesService,
      factory: WhatsAppTemplatesService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 766:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/whatsapp/components/whatsapp-messages/whatsapp-messages.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhatsappMessagesComponent: () => (/* binding */ WhatsappMessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_whatsapp_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/whatsapp-messages.service */ 9197);
/* harmony import */ var _core_services_whatsapp_templates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/whatsapp-templates.service */ 7460);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/user.service */ 3443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 8709);










const _c0 = () => [];
function WhatsappMessagesComponent_div_10_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r1.getTranslation("phoneNumber"), " ", ctx_r1.getTranslation("required"), " ");
  }
}
function WhatsappMessagesComponent_div_10_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45)(1, "div", 52)(2, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, WhatsappMessagesComponent_div_10_div_16_div_5_Template, 2, 2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 52)(7, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("phoneNumber"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ((tmp_3_0 = ctx_r1.messageForm.get("recipientPhone")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.messageForm.get("recipientPhone")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.messageForm.get("recipientPhone")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.messageForm.get("recipientPhone")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("recipientName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("recipientNameOptional"));
  }
}
function WhatsappMessagesComponent_div_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "label")(3, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function WhatsappMessagesComponent_div_10_div_17_Template_input_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSendToAllChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("sendToAllUsers"), " ");
  }
}
function WhatsappMessagesComponent_div_10_div_18_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 67)(1, "label", 68)(2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function WhatsappMessagesComponent_div_10_div_18_div_5_Template_input_change_2_listener() {
      const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleUserSelection(user_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 70)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r1.selectedUserIds.includes(user_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r5.phone1 || user_r5.phone2);
  }
}
function WhatsappMessagesComponent_div_10_div_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r1.getTranslation("selectUsers"), " ", ctx_r1.getTranslation("required"), " ");
  }
}
function WhatsappMessagesComponent_div_10_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, WhatsappMessagesComponent_div_10_div_18_div_5_Template, 8, 3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, WhatsappMessagesComponent_div_10_div_18_div_6_Template, 2, 2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("selectUsers"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.messageForm.get("recipientUserIds")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.messageForm.get("recipientUserIds")) == null ? null : tmp_4_0.touched));
  }
}
function WhatsappMessagesComponent_div_10_div_28_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const template_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", template_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", template_r6.name, " (", ctx_r1.getCategoryDisplayName(template_r6.category), ") ");
  }
}
function WhatsappMessagesComponent_div_10_div_28_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r1.getTranslation("selectTemplate"), " ", ctx_r1.getTranslation("required"), " ");
  }
}
function WhatsappMessagesComponent_div_10_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "select", 72)(5, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, WhatsappMessagesComponent_div_10_div_28_option_7_Template, 2, 3, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, WhatsappMessagesComponent_div_10_div_28_div_8_Template, 2, 2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_6_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("selectTemplate"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ((tmp_3_0 = ctx_r1.messageForm.get("templateId")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.messageForm.get("templateId")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("selectTemplate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.templates);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r1.messageForm.get("templateId")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.messageForm.get("templateId")) == null ? null : tmp_6_0.touched));
  }
}
function WhatsappMessagesComponent_div_10_div_29_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 78)(1, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const variable_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", "var_" + variable_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("{{" + variable_r7 + "}}");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", "var_" + variable_r7)("formControlName", variable_r7)("placeholder", ctx_r1.getTranslation("enterVariableValue"));
  }
}
function WhatsappMessagesComponent_div_10_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, WhatsappMessagesComponent_div_10_div_29_div_5_Template, 4, 5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("variables"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.templateVariables);
  }
}
function WhatsappMessagesComponent_div_10_div_30_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r1.getTranslation("messageText"), " ", ctx_r1.getTranslation("required"), " ");
  }
}
function WhatsappMessagesComponent_div_10_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "textarea", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, WhatsappMessagesComponent_div_10_div_30_div_5_Template, 2, 2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("messageText"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ((tmp_3_0 = ctx_r1.messageForm.get("messageContent")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.messageForm.get("messageContent")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterMessageText"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r1.messageForm.get("messageContent")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.messageForm.get("messageContent")) == null ? null : tmp_5_0.touched));
  }
}
function WhatsappMessagesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function WhatsappMessagesComponent_div_10_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.sendMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 45)(6, "div", 46)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 47)(10, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WhatsappMessagesComponent_div_10_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r1.messageForm.patchValue({
        sendMode: "individual"
      });
      ctx_r1.sendMode = "individual";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.updateFormValidators());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WhatsappMessagesComponent_div_10_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r1.messageForm.patchValue({
        sendMode: "bulk"
      });
      ctx_r1.sendMode = "bulk";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.updateFormValidators());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, WhatsappMessagesComponent_div_10_div_16_Template, 10, 6, "div", 51)(17, WhatsappMessagesComponent_div_10_div_17_Template, 5, 1, "div", 51)(18, WhatsappMessagesComponent_div_10_div_18_Template, 7, 3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 45)(20, "div", 52)(21, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "select", 54)(24, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, WhatsappMessagesComponent_div_10_div_28_Template, 9, 6, "div", 51)(29, WhatsappMessagesComponent_div_10_div_29_Template, 6, 2, "div", 51)(30, WhatsappMessagesComponent_div_10_div_30_Template, 6, 5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 55)(32, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WhatsappMessagesComponent_div_10_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r1.resetForm();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.showAddForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_18_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("sendNewMessage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.messageForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("sendMode"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("btn-primary", ctx_r1.sendMode === "individual")("btn-outline-primary", ctx_r1.sendMode !== "individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("individual"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("btn-primary", ctx_r1.sendMode === "bulk")("btn-outline-primary", ctx_r1.sendMode !== "bulk");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("bulk"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sendMode === "individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sendMode === "bulk");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sendMode === "bulk" && !ctx_r1.sendToAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("messageType"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("template"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx_r1.messageForm.get("messageType")) == null ? null : tmp_16_0.value) === "template");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.selectedTemplate && ctx_r1.templateVariables.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx_r1.messageForm.get("messageType")) == null ? null : tmp_18_0.value) === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.messageForm.invalid || ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.isLoading ? ctx_r1.getTranslation("sending") || "Sending..." : ctx_r1.getTranslation("sendMessage"), " ");
  }
}
function WhatsappMessagesComponent_tr_68_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", message_r9.recipientName || message_r9.recipientUserName, " ");
  }
}
function WhatsappMessagesComponent_tr_68_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", message_r9.templateName, " ");
  }
}
function WhatsappMessagesComponent_tr_68_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function WhatsappMessagesComponent_tr_68_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WhatsappMessagesComponent_tr_68_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.resendMessage(message_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx_r1.getTranslation("resend"));
  }
}
function WhatsappMessagesComponent_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 83)(2, "div", 84)(3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, WhatsappMessagesComponent_tr_68_div_6_Template, 2, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 88)(8, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, WhatsappMessagesComponent_tr_68_span_12_Template, 2, 1, "span", 91)(13, WhatsappMessagesComponent_tr_68_span_13_Template, 2, 0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td", 93)(15, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td", 95)(18, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td", 98)(24, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, WhatsappMessagesComponent_tr_68_button_25_Template, 2, 1, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WhatsappMessagesComponent_tr_68_Template_button_click_26_listener() {
      const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteMessage(message_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const message_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](message_r9.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", message_r9.recipientPhone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", message_r9.recipientName || message_r9.recipientUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", message_r9.messageContent.length > 100 ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](10, 13, message_r9.messageContent, 0, 100) + "..." : message_r9.messageContent, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", message_r9.templateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !message_r9.templateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](message_r9.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusDisplayName(message_r9.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](22, 17, message_r9.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", message_r9.status === "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx_r1.getTranslation("delete"));
  }
}
function WhatsappMessagesComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noMessagesFound"));
  }
}
function WhatsappMessagesComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 109);
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
function WhatsappMessagesComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function WhatsappMessagesComponent_div_72_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 115)(1, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WhatsappMessagesComponent_div_72_li_6_Template_a_click_1_listener() {
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange(i_r13 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.currentPage === i_r13 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r13 + 1);
  }
}
function WhatsappMessagesComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 112)(1, "nav", 113)(2, "ul", 114)(3, "li", 115)(4, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WhatsappMessagesComponent_div_72_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, WhatsappMessagesComponent_div_72_li_6_Template, 3, 3, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "li", 115)(8, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WhatsappMessagesComponent_div_72_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c0).constructor(ctx_r1.totalPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
class WhatsappMessagesComponent {
  constructor(languageService, translationService, whatsappMessagesService, whatsappTemplatesService, userService, fb) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.whatsappMessagesService = whatsappMessagesService;
    this.whatsappTemplatesService = whatsappTemplatesService;
    this.userService = userService;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.messages = [];
    this.filteredMessages = [];
    this.templates = [];
    this.users = [];
    this.searchTerm = '';
    this.selectedStatus = 'all';
    this.selectedType = 'all';
    this.showAddForm = false;
    this.isLoading = false;
    this.errorMessage = '';
    this.sendMode = 'individual';
    this.selectedTemplate = null;
    this.templateVariables = [];
    this.selectedUserIds = [];
    this.sendToAll = false;
    this.showConfirmDialog = false;
    this.confirmDialogData = {};
    this.itemToDelete = null;
    // Pagination
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalPages = 1;
    this.totalMessages = 0;
    this.messageForm = this.fb.group({
      sendMode: ['individual', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      recipientPhone: [''],
      recipientName: [''],
      recipientUserIds: [[]],
      sendToAll: [false],
      messageType: ['template', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      templateId: [''],
      messageContent: [''],
      variables: this.fb.group({})
    });
    // Watch for template changes
    this.messageForm.get('templateId')?.valueChanges.subscribe(templateId => {
      if (templateId) {
        this.onTemplateChange(templateId);
      } else {
        this.selectedTemplate = null;
        this.templateVariables = [];
        this.messageForm.setControl('variables', this.fb.group({}));
      }
    });
    // Watch for send mode changes
    this.messageForm.get('sendMode')?.valueChanges.subscribe(mode => {
      this.sendMode = mode;
      this.updateFormValidators();
    });
    // Watch for sendToAll changes
    this.messageForm.get('sendToAll')?.valueChanges.subscribe(sendToAll => {
      this.sendToAll = sendToAll;
      if (sendToAll) {
        this.selectedUserIds = [];
        this.messageForm.patchValue({
          recipientUserIds: []
        });
      }
      this.updateFormValidators();
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadMessages();
    this.loadTemplates();
    this.loadUsers();
  }
  updateFormValidators() {
    const recipientPhoneControl = this.messageForm.get('recipientPhone');
    const recipientUserIdsControl = this.messageForm.get('recipientUserIds');
    const sendToAllControl = this.messageForm.get('sendToAll');
    if (this.sendMode === 'individual') {
      recipientPhoneControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^\+?[0-9]{10,15}$/)]);
      recipientUserIdsControl?.clearValidators();
      sendToAllControl?.clearValidators();
    } else {
      recipientPhoneControl?.clearValidators();
      if (this.sendToAll) {
        recipientUserIdsControl?.clearValidators();
      } else {
        recipientUserIdsControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1)]);
      }
    }
    recipientPhoneControl?.updateValueAndValidity();
    recipientUserIdsControl?.updateValueAndValidity();
  }
  loadMessages() {
    this.isLoading = true;
    this.errorMessage = '';
    this.whatsappMessagesService.getMessages({
      status: this.selectedStatus === 'all' ? undefined : this.selectedStatus,
      messageType: this.selectedType === 'all' ? undefined : this.selectedType,
      search: this.searchTerm || undefined,
      page: this.currentPage,
      limit: this.itemsPerPage
    }).subscribe({
      next: response => {
        this.messages = response.messages;
        this.filteredMessages = [...this.messages];
        this.totalMessages = response.total;
        this.calculatePagination();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading messages:', error);
        this.errorMessage = this.getTranslation('errorLoadingMessages') || 'Error loading messages';
        this.isLoading = false;
      }
    });
  }
  loadTemplates() {
    this.whatsappTemplatesService.getTemplates({
      status: 'active'
    }).subscribe({
      next: response => {
        this.templates = response.templates;
      },
      error: error => {
        console.error('Error loading templates:', error);
      }
    });
  }
  loadUsers() {
    this.userService.getUsers().subscribe({
      next: users => {
        this.users = users.filter(u => u.isActive && (u.phone1 || u.phone2));
      },
      error: error => {
        console.error('Error loading users:', error);
      }
    });
  }
  onTemplateChange(templateId) {
    const template = this.templates.find(t => t.id === templateId);
    if (template) {
      this.selectedTemplate = template;
      this.templateVariables = template.variables || [];
      // Create form controls for each variable
      const variablesGroup = {};
      this.templateVariables.forEach(variable => {
        variablesGroup[variable] = [''];
      });
      this.messageForm.setControl('variables', this.fb.group(variablesGroup));
    }
  }
  calculatePagination() {
    this.totalPages = Math.ceil(this.totalMessages / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadMessages();
  }
  filterMessages() {
    this.currentPage = 1;
    this.loadMessages();
  }
  toggleUserSelection(userId) {
    const index = this.selectedUserIds.indexOf(userId);
    if (index > -1) {
      this.selectedUserIds.splice(index, 1);
    } else {
      this.selectedUserIds.push(userId);
    }
    this.messageForm.patchValue({
      recipientUserIds: this.selectedUserIds
    });
  }
  onSendToAllChange() {
    if (this.sendToAll) {
      this.selectedUserIds = [];
      this.messageForm.patchValue({
        recipientUserIds: []
      });
    }
  }
  sendMessage() {
    if (this.messageForm.valid) {
      this.isLoading = true;
      const formValue = this.messageForm.value;
      const request = {
        messageType: formValue.messageType,
        sendToAll: formValue.sendToAll || false
      };
      if (formValue.messageType === 'template' && formValue.templateId) {
        request.templateId = parseInt(formValue.templateId);
        request.variables = formValue.variables || {};
      } else if (formValue.messageType === 'text' && formValue.messageContent) {
        request.messageContent = formValue.messageContent;
      }
      if (this.sendMode === 'individual') {
        request.recipientPhone = formValue.recipientPhone;
      } else if (this.sendMode === 'bulk') {
        if (formValue.sendToAll) {
          request.sendToAll = true;
        } else {
          request.recipientUserIds = formValue.recipientUserIds || [];
        }
      }
      this.whatsappMessagesService.sendMessages(request).subscribe({
        next: response => {
          this.isLoading = false;
          this.resetForm();
          this.showAddForm = false;
          this.loadMessages();
          alert(response.message || 'Messages sent successfully');
        },
        error: error => {
          console.error('Error sending messages:', error);
          this.isLoading = false;
          this.errorMessage = error.error?.error || this.getTranslation('errorSendingMessages') || 'Error sending messages';
        }
      });
    }
  }
  resetForm() {
    this.messageForm.reset({
      sendMode: 'individual',
      messageType: 'template',
      sendToAll: false
    });
    this.selectedTemplate = null;
    this.templateVariables = [];
    this.selectedUserIds = [];
    this.sendToAll = false;
    this.messageForm.setControl('variables', this.fb.group({}));
  }
  resendMessage(message) {
    if (!message.id) return;
    this.isLoading = true;
    const request = {
      messageType: message.messageType,
      messageContent: message.messageContent
    };
    if (message.templateId) {
      request.templateId = message.templateId;
      request.variables = message.variables || {};
    }
    if (message.recipientPhone) {
      request.recipientPhone = message.recipientPhone;
    } else if (message.recipientUserId) {
      request.recipientUserIds = [message.recipientUserId];
    }
    this.whatsappMessagesService.sendMessages(request).subscribe({
      next: () => {
        this.isLoading = false;
        this.loadMessages();
      },
      error: error => {
        console.error('Error resending message:', error);
        this.isLoading = false;
        this.errorMessage = error.error?.error || 'Error resending message';
      }
    });
  }
  deleteMessage(message) {
    if (!message.id) return;
    this.itemToDelete = message;
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: this.getTranslation('confirmDeleteMessage') || `Are you sure you want to delete this message?`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel'
    };
    this.showConfirmDialog = true;
  }
  onConfirmDelete() {
    if (this.itemToDelete?.id) {
      this.isLoading = true;
      this.whatsappMessagesService.deleteMessage(this.itemToDelete.id).subscribe({
        next: () => {
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
          this.loadMessages();
        },
        error: error => {
          console.error('Error deleting message:', error);
          this.isLoading = false;
          this.errorMessage = error.error?.error || 'Error deleting message';
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
  getStatusCount(status) {
    return this.messages.filter(m => m.status === status).length;
  }
  getTypeDisplayName(type) {
    const types = {
      text: this.getTranslation('text'),
      template: this.getTranslation('template'),
      image: this.getTranslation('image'),
      document: this.getTranslation('document')
    };
    return types[type] || type;
  }
  getStatusDisplayName(status) {
    const statuses = {
      pending: this.getTranslation('pending'),
      sent: this.getTranslation('sent'),
      delivered: this.getTranslation('delivered'),
      failed: this.getTranslation('failed')
    };
    return statuses[status] || status;
  }
  getTypeIcon(type) {
    const icons = {
      text: 'fa-comment',
      template: 'fa-file-code',
      image: 'fa-image',
      document: 'fa-file-alt'
    };
    return icons[type] || 'fa-comment';
  }
  getStatusIcon(status) {
    const icons = {
      pending: 'fa-clock',
      sent: 'fa-check',
      delivered: 'fa-check-double',
      failed: 'fa-times'
    };
    return icons[status] || 'fa-clock';
  }
  getCategoryDisplayName(category) {
    const categoryMap = {
      'system-updates': 'systemUpdates',
      'security-alerts': 'securityAlerts',
      'new-messages': 'newMessages',
      'reminders': 'reminders',
      'marketing': 'marketing'
    };
    const translationKey = categoryMap[category] || category;
    return this.getTranslation(translationKey) || category;
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function WhatsappMessagesComponent_Factory(t) {
      return new (t || WhatsappMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_whatsapp_messages_service__WEBPACK_IMPORTED_MODULE_2__.WhatsAppMessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_whatsapp_templates_service__WEBPACK_IMPORTED_MODULE_3__.WhatsAppTemplatesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: WhatsappMessagesComponent,
      selectors: [["app-whatsapp-messages"]],
      decls: 74,
      vars: 39,
      consts: [[1, "whatsapp-messages-container", 3, "dir"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "fab", "fa-whatsapp"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], ["class", "add-message-form", 4, "ngIf"], [1, "filters-section"], [1, "filters-card"], [1, "search-filter"], [1, "search-input"], [1, "fas", "fa-search"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "status-filter"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "pending"], ["value", "sent"], ["value", "delivered"], ["value", "failed"], [1, "type-filter"], ["value", "template"], ["value", "text"], [1, "messages-list-section"], [1, "list-header"], [1, "total-count"], [1, "fas", "fa-list", "me-2"], [1, "status-summary"], [1, "status-item", "pending"], [1, "status-item", "sent"], [1, "status-item", "delivered"], [1, "status-item", "failed"], [1, "table-container"], [1, "messages-table"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "pagination-section", 4, "ngIf"], [3, "confirmed", "cancelled", "visible", "data"], [1, "add-message-form"], [1, "form-card"], [1, "form-title"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group", "full-width"], [1, "mode-selection"], ["type", "button", 1, "btn", 3, "click"], [1, "fas", "fa-user"], [1, "fas", "fa-users"], ["class", "form-row", 4, "ngIf"], [1, "form-group"], ["for", "messageType"], ["id", "messageType", "formControlName", "messageType", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["for", "recipientPhone"], ["type", "tel", "id", "recipientPhone", "formControlName", "recipientPhone", "placeholder", "+966501234567", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "recipientName"], ["type", "text", "id", "recipientName", "formControlName", "recipientName", 1, "form-control", 3, "placeholder"], [1, "invalid-feedback"], ["type", "checkbox", "formControlName", "sendToAll", 3, "change"], [1, "users-selection"], ["class", "user-checkbox", 4, "ngFor", "ngForOf"], [1, "user-checkbox"], [1, "user-checkbox-label"], ["type", "checkbox", 3, "change", "checked"], [1, "user-info"], ["for", "templateId"], ["id", "templateId", "formControlName", "templateId", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formGroupName", "variables", 1, "variables-inputs"], ["class", "variable-input", 4, "ngFor", "ngForOf"], [1, "variable-input"], [3, "for"], ["type", "text", 1, "form-control", 3, "id", "formControlName", "placeholder"], ["for", "messageContent"], ["id", "messageContent", "formControlName", "messageContent", "rows", "4", 1, "form-control", 3, "placeholder"], [1, "recipient-cell"], [1, "recipient-info"], [1, "phone-number"], [1, "fas", "fa-phone"], ["class", "recipient-name", 4, "ngIf"], [1, "content-cell"], [1, "message-content-preview"], [1, "template-cell"], ["class", "template-badge", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "status-cell"], [1, "status-badge"], [1, "date-cell"], [1, "date-info"], [1, "fas", "fa-clock"], [1, "actions-cell"], [1, "action-buttons"], ["class", "btn btn-sm btn-outline-warning", 3, "title", "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "title"], [1, "fas", "fa-trash"], [1, "recipient-name"], [1, "template-badge"], [1, "text-muted"], [1, "btn", "btn-sm", "btn-outline-warning", 3, "click", "title"], [1, "fas", "fa-redo"], [1, "empty-state"], [1, "fas", "fa-spinner", "fa-spin"], ["role", "alert", 1, "alert", "alert-danger"], [1, "fas", "fa-exclamation-circle", "me-2"], [1, "pagination-section"], ["aria-label", "Messages pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "fas", "fa-chevron-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"]],
      template: function WhatsappMessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WhatsappMessagesComponent_Template_button_click_7_listener() {
            return ctx.showAddForm = !ctx.showAddForm;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, WhatsappMessagesComponent_div_10_Template, 37, 25, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function WhatsappMessagesComponent_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function WhatsappMessagesComponent_Template_input_input_16_listener() {
            return ctx.filterMessages();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 15)(18, "select", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function WhatsappMessagesComponent_Template_select_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function WhatsappMessagesComponent_Template_select_change_18_listener() {
            return ctx.filterMessages();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 22)(30, "select", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function WhatsappMessagesComponent_Template_select_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedType, $event) || (ctx.selectedType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function WhatsappMessagesComponent_Template_select_change_30_listener() {
            return ctx.filterMessages();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 25)(38, "div", 26)(39, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 29)(43, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 34)(52, "table", 35)(53, "thead")(54, "tr")(55, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, WhatsappMessagesComponent_tr_68_Template, 28, 20, "tr", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, WhatsappMessagesComponent_div_69_Template, 4, 1, "div", 37)(70, WhatsappMessagesComponent_div_70_Template, 4, 1, "div", 37)(71, WhatsappMessagesComponent_div_71_Template, 3, 1, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, WhatsappMessagesComponent_div_72_Template, 10, 8, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "app-confirm-dialog", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("confirmed", function WhatsappMessagesComponent_Template_app_confirm_dialog_confirmed_73_listener() {
            return ctx.onConfirmDelete();
          })("cancelled", function WhatsappMessagesComponent_Template_app_confirm_dialog_cancelled_73_listener() {
            return ctx.onCancelDelete();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("whatsappMessages"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("sendNewMessage"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showAddForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx.getTranslation("searchMessages"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("allStatuses"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("pending"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("sent"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("delivered"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("failed"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("allTypes"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("template"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("text"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx.getTranslation("totalMessages"), ": ", ctx.filteredMessages.length, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.getTranslation("pending"), ": ", ctx.getStatusCount("pending"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.getTranslation("sent"), ": ", ctx.getStatusCount("sent"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.getTranslation("delivered"), ": ", ctx.getStatusCount("delivered"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.getTranslation("failed"), ": ", ctx.getStatusCount("failed"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("recipient"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("messageContent"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("template"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("status"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("date"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTranslation("actions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.filteredMessages);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.filteredMessages.length === 0 && !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.showConfirmDialog)("data", ctx.confirmDialogData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmDialogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
      styles: [".whatsapp-messages-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 12px;\n  font-size: 1.25rem;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  border: none;\n  min-width: 120px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n\n.add-message-form[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.add-message-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f1f3f4;\n}\n.add-message-form[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 20px;\n  font-size: 1.25rem;\n  text-align: center;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-row[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #34495e;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  background: #fafbfc;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 0.75rem;\n  margin-top: 5px;\n  font-weight: 500;\n}\n\n.mode-selection[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.mode-selection[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.mode-selection[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.mode-selection[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%] {\n  border: 2px solid #00695c;\n  color: #00695c;\n  background: transparent;\n}\n.mode-selection[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #00695c;\n  color: white;\n}\n\n.users-selection[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 12px;\n  background: #fafbfc;\n}\n.users-selection[_ngcontent-%COMP%]   .user-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.users-selection[_ngcontent-%COMP%]   .user-checkbox[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.users-selection[_ngcontent-%COMP%]   .user-checkbox[_ngcontent-%COMP%]   .user-checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.users-selection[_ngcontent-%COMP%]   .user-checkbox[_ngcontent-%COMP%]   .user-checkbox-label[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.users-selection[_ngcontent-%COMP%]   .user-checkbox[_ngcontent-%COMP%]   .user-checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.users-selection[_ngcontent-%COMP%]   .user-checkbox[_ngcontent-%COMP%]   .user-checkbox-label[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.users-selection[_ngcontent-%COMP%]   .user-checkbox[_ngcontent-%COMP%]   .user-checkbox-label[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-size: 0.875rem;\n}\n.users-selection[_ngcontent-%COMP%]   .user-checkbox[_ngcontent-%COMP%]   .user-checkbox-label[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n\n.variables-inputs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.variables-inputs[_ngcontent-%COMP%]   .variable-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #00695c;\n  margin-bottom: 6px;\n  font-size: 0.875rem;\n  font-family: \"Courier New\", monospace;\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n  font-size: 14px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 10px 14px 10px 40px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%], .filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .type-filter[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.messages-list-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: white;\n  border-radius: 16px;\n  padding: 16px 20px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.list-header[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.875rem;\n}\n.list-header[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 8px;\n}\n.list-header[_ngcontent-%COMP%]   .status-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.list-header[_ngcontent-%COMP%]   .status-summary[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.list-header[_ngcontent-%COMP%]   .status-summary[_ngcontent-%COMP%]   .status-item.pending[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #856404;\n}\n.list-header[_ngcontent-%COMP%]   .status-summary[_ngcontent-%COMP%]   .status-item.sent[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.1);\n  color: #0056b3;\n}\n.list-header[_ngcontent-%COMP%]   .status-summary[_ngcontent-%COMP%]   .status-item.delivered[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.1);\n  color: #155724;\n}\n.list-header[_ngcontent-%COMP%]   .status-summary[_ngcontent-%COMP%]   .status-item.failed[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  color: #721c24;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: white;\n  border-bottom: none;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f3f4;\n  transition: all 0.2s ease;\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.pending[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.sent[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.delivered[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.failed[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  vertical-align: middle;\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .recipient-cell[_ngcontent-%COMP%]   .recipient-info[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #2c3e50;\n  font-weight: 600;\n  font-size: 0.875rem;\n  margin-bottom: 4px;\n}\n.table-container[_ngcontent-%COMP%]   .recipient-cell[_ngcontent-%COMP%]   .recipient-info[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .recipient-cell[_ngcontent-%COMP%]   .recipient-info[_ngcontent-%COMP%]   .recipient-name[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n.table-container[_ngcontent-%COMP%]   .content-cell[_ngcontent-%COMP%]   .message-content-preview[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  max-width: 300px;\n}\n.table-container[_ngcontent-%COMP%]   .template-cell[_ngcontent-%COMP%]   .template-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 105, 92, 0.1);\n  color: #00695c;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: inline-block;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.pending[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #856404;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.sent[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.1);\n  color: #0056b3;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.delivered[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.1);\n  color: #155724;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.failed[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  color: #721c24;\n}\n.table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #495057;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #adb5bd;\n  margin-bottom: 16px;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%]   i.fa-spinner[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 1rem;\n  margin: 0;\n  font-weight: 500;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f3f4;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  border: none;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 6px 12px;\n  font-weight: 600;\n  font-size: 0.8rem;\n  transition: all 0.3s ease;\n  border: none;\n  cursor: pointer;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n.btn.btn-outline-warning[_ngcontent-%COMP%] {\n  border: 1px solid #ffc107;\n  color: #856404;\n  background: transparent;\n}\n.btn.btn-outline-warning[_ngcontent-%COMP%]:hover {\n  background: #ffc107;\n  color: white;\n}\n.btn.btn-outline-danger[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545;\n  color: #dc3545;\n  background: transparent;\n}\n.btn.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: white;\n}\n\n.pagination-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #00695c;\n  border: 1px solid #e9ecef;\n  padding: 8px 12px;\n  border-radius: 8px;\n  margin: 0 4px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background: #00695c;\n  color: white;\n  border-color: #00695c;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  border-color: #00695c;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #adb5bd;\n  border-color: #e9ecef;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 12px 16px;\n  font-size: 0.875rem;\n  margin: 16px 20px;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  border: 1px solid rgba(220, 53, 69, 0.2);\n  color: #dc3545;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 12px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: auto;\n  right: 14px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 14px;\n  padding-right: 40px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n@media (max-width: 768px) {\n  .whatsapp-messages-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mode-selection[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .list-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .list-header[_ngcontent-%COMP%]   .status-summary[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .table-container[_ngcontent-%COMP%]   .messages-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n  .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvd2hhdHNhcHAvY29tcG9uZW50cy93aGF0c2FwcC1tZXNzYWdlcy93aGF0c2FwcC1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFHQTtFQUNFLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQUFSO0FBSUk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBRk47QUFJTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlRO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7QUFGVjtBQUlVO0VBQ0UsMkJBQUE7RUFDQSw0Q0FBQTtBQUZaOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjtBQVVFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0FBUko7QUFVSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVJOOztBQWFBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBVkY7QUFhSTtFQUNFLGlCQUFBO0FB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Q0UsdUJBQUE7RUEzSUo7RUErSUE7SUFDRSxnQkFBQTtFQTdJRjtFQStJRTtJQUNFLGdCQUFBO0VBN0lKO0VBaUpBO0lBQ0Usc0JBQUE7SUFDQSxRQUFBO0VBL0lGO0VBaUpFO0lBQ0UsV0FBQTtFQS9JSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLndoYXRzYXBwLW1lc3NhZ2VzLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLy8gUGFnZSBIZWFkZXIgU3R5bGluZ1xyXG4ucGFnZS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZmZmYgMCUsICNmOGY5ZmEgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgXHJcbiAgLmhlYWRlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgXHJcbiAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBcclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjLCAjNGRiNmFjKTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZWFkZXItYWN0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMTJweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICYuYnRuLXByaW1hcnkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAxMDUsIDkyLCAwLjMpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMTA1LCA5MiwgMC40KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEZvcm0gU3R5bGluZ1xyXG4uYWRkLW1lc3NhZ2UtZm9ybSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBcclxuICAuZm9ybS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xyXG4gICAgXHJcbiAgICAuZm9ybS10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICBnYXA6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBcclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICAmLmZ1bGwtd2lkdGgge1xyXG4gICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMzQ0OTVlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQ6ICNmYWZiZmM7XHJcbiAgXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAmLmlzLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjIwLCA1MywgNjksIDAuMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vLyBNb2RlIFNlbGVjdGlvblxyXG4ubW9kZS1zZWxlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIFxyXG4gIC5idG4ge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIFxyXG4gICAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDEwNSwgOTIsIDAuMyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDY5NWM7XHJcbiAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDY5NWM7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBVc2VycyBTZWxlY3Rpb25cclxuLnVzZXJzLXNlbGVjdGlvbiB7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xyXG4gIFxyXG4gIC51c2VyLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIFxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnVzZXItY2hlY2tib3gtbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDEycHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiA0cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBWYXJpYWJsZXMgSW5wdXRzXHJcbi52YXJpYWJsZXMtaW5wdXRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gIGdhcDogMTJweDtcclxuICBcclxuICAudmFyaWFibGUtaW5wdXQge1xyXG4gICAgbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEZpbHRlcnMgU2VjdGlvblxyXG4uZmlsdGVycy1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIFxyXG4gIC5maWx0ZXJzLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIFxyXG4gICAgLnNlYXJjaC1maWx0ZXIge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgICBcclxuICAgICAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMTRweDtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgY29sb3I6ICNhZGI1YmQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxNHB4IDEwcHggNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0YXR1cy1maWx0ZXIsXHJcbiAgICAudHlwZS1maWx0ZXIge1xyXG4gICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTWVzc2FnZXMgTGlzdCBTZWN0aW9uXHJcbi5tZXNzYWdlcy1saXN0LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5saXN0LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgXHJcbiAgLnRvdGFsLWNvdW50IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0dXMtc3VtbWFyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgXHJcbiAgICAuc3RhdHVzLWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBcclxuICAgICAgJi5wZW5kaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLnNlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XHJcbiAgICAgICAgY29sb3I6ICMwMDU2YjM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYuZGVsaXZlcmVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLmZhaWxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzcyMWMyNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gVGFibGUgU3R5bGluZ1xyXG4udGFibGUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBcclxuICAubWVzc2FnZXMtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIFxyXG4gICAgdGhlYWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xyXG4gICAgICBcclxuICAgICAgdGgge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYucGVuZGluZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5zZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTIzLCAyNTUsIDAuMDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmRlbGl2ZXJlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5mYWlsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4wNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTJweDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yZWNpcGllbnQtY2VsbCB7XHJcbiAgICAucmVjaXBpZW50LWluZm8ge1xyXG4gICAgICAucGhvbmUtbnVtYmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5yZWNpcGllbnQtbmFtZSB7XHJcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50LWNlbGwge1xyXG4gICAgLm1lc3NhZ2UtY29udGVudC1wcmV2aWV3IHtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50ZW1wbGF0ZS1jZWxsIHtcclxuICAgIC50ZW1wbGF0ZS1iYWRnZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcclxuICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0dXMtY2VsbCB7XHJcbiAgICAuc3RhdHVzLWJhZGdlIHtcclxuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIFxyXG4gICAgICAmLnBlbmRpbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMSk7XHJcbiAgICAgICAgY29sb3I6ICM4NTY0MDQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYuc2VudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzAwNTZiMztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5kZWxpdmVyZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksIDAuMSk7XHJcbiAgICAgICAgY29sb3I6ICMxNTU3MjQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYuZmFpbGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRlLWNlbGwge1xyXG4gICAgLmRhdGUtaW5mbyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogNnB4O1xyXG4gICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbnMtY2VsbCB7XHJcbiAgICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDZweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEVtcHR5IFN0YXRlXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDYwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbiAgICAmLmZhLXNwaW5uZXIge1xyXG4gICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGb3JtIEFjdGlvbnNcclxuLmZvcm0tYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmM2Y0O1xyXG4gIFxyXG4gIC5idG4ge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIFxyXG4gICAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDEwNSwgOTIsIDAuMyk7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDEwNSwgOTIsIDAuNCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuYnRuLXNlY29uZGFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQnV0dG9uc1xyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICYuYnRuLXNtIHtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLW91dGxpbmUtd2FybmluZyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZjMTA3O1xyXG4gICAgY29sb3I6ICM4NTY0MDQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmMxMDc7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5idG4tb3V0bGluZS1kYW5nZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBQYWdpbmF0aW9uXHJcbi5wYWdpbmF0aW9uLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICAgIC5wYWdlLWl0ZW0ge1xyXG4gICAgICAucGFnZS1saW5rIHtcclxuICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwNjk1YztcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYuYWN0aXZlIC5wYWdlLWxpbmsge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5kaXNhYmxlZCAucGFnZS1saW5rIHtcclxuICAgICAgICBjb2xvcjogI2FkYjViZDtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICNhZGI1YmQ7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNlOWVjZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBbGVydFxyXG4uYWxlcnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgbWFyZ2luOiAxNnB4IDIwcHg7XHJcbiAgXHJcbiAgJi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLCA1MywgNjksIDAuMik7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5wYWdlLXRpdGxlIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQgaSB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAubWVzc2FnZXMtdGFibGUge1xyXG4gICAgdGhlYWQgdGgge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGJvZHkgdGQge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgRGVzaWduXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC53aGF0c2FwcC1tZXNzYWdlcy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UtaGVhZGVyIC5oZWFkZXItY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBcclxuICAgIC5oZWFkZXItYWN0aW9ucyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZm9ybS1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RlLXNlbGVjdGlvbiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAubGlzdC1oZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgXHJcbiAgICAuc3RhdHVzLXN1bW1hcnkge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgXHJcbiAgICAubWVzc2FnZXMtdGFibGUge1xyXG4gICAgICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNHB4O1xyXG4gICAgXHJcbiAgICAuYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 296:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/whatsapp/components/whatsapp-templates/whatsapp-templates.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhatsappTemplatesComponent: () => (/* binding */ WhatsappTemplatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_whatsapp_templates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/whatsapp-templates.service */ 7460);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 8709);








const _c0 = () => [];
function WhatsappTemplatesComponent_div_11_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("templateNameRequired"), " ");
  }
}
function WhatsappTemplatesComponent_div_11_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("templateContentRequired"), " ");
  }
}
function WhatsappTemplatesComponent_div_11_div_49_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const variable_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", "{{" + variable_r3 + "}}", " ");
  }
}
function WhatsappTemplatesComponent_div_11_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 72)(1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, WhatsappTemplatesComponent_div_11_div_49_span_6_Template, 2, 1, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("variables"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.detectedVariables);
  }
}
function WhatsappTemplatesComponent_div_11_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("saving") || "Saving...");
  }
}
function WhatsappTemplatesComponent_div_11_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.editingTemplate ? ctx_r1.getTranslation("saveChanges") : ctx_r1.getTranslation("saveTemplate"));
  }
}
function WhatsappTemplatesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 10)(3, "div", 45)(4, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 11)(8, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function WhatsappTemplatesComponent_div_11_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.addTemplate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 49)(10, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, WhatsappTemplatesComponent_div_11_div_14_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 49)(16, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "select", 56)(20, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 3)(31, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "textarea", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, WhatsappTemplatesComponent_div_11_div_35_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Example:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " in your content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, WhatsappTemplatesComponent_div_11_div_49_Template, 7, 2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 3)(51, "div", 63)(52, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, WhatsappTemplatesComponent_div_11_span_54_Template, 2, 1, "span", 66)(55, WhatsappTemplatesComponent_div_11_span_55_Template, 2, 1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WhatsappTemplatesComponent_div_11_Template_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WhatsappTemplatesComponent_div_11_Template_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    let tmp_14_0;
    let tmp_16_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editingTemplate ? ctx_r1.getTranslation("editTemplate") || "Edit Template" : ctx_r1.getTranslation("addNewTemplate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.templateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("templateName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_4_0 = ctx_r1.templateForm.get("name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.templateForm.get("name")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.getTranslation("enterTemplateName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r1.templateForm.get("name")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.templateForm.get("name")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("category"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("systemUpdates"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("securityAlerts"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("newMessages"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("reminders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("marketing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("templateContent"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_14_0 = ctx_r1.templateForm.get("content")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r1.templateForm.get("content")) == null ? null : tmp_14_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.getTranslation("enterTemplateContent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx_r1.templateForm.get("content")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r1.templateForm.get("content")) == null ? null : tmp_16_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("templateVariablesInfo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", "{{", "name", "}}", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", "{{", "date", "}}", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.detectedVariables.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.templateForm.invalid || ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("reset"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("cancel"), " ");
  }
}
function WhatsappTemplatesComponent_tr_79_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 100)(1, "small", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](template_r5.content.length > 80 ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](3, 1, template_r5.content, 0, 80) + "..." : template_r5.content);
  }
}
function WhatsappTemplatesComponent_tr_79_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const variable_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", "{{" + variable_r6 + "}}", " ");
  }
}
function WhatsappTemplatesComponent_tr_79_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WhatsappTemplatesComponent_tr_79_div_10_span_1_Template, 2, 1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", template_r5.variables);
  }
}
function WhatsappTemplatesComponent_tr_79_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WhatsappTemplatesComponent_tr_79_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 1, template_r5.lastUsed, "short"));
  }
}
function WhatsappTemplatesComponent_tr_79_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("never"));
  }
}
function WhatsappTemplatesComponent_tr_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 78)(2, "div", 79)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, WhatsappTemplatesComponent_tr_79_div_5_Template, 4, 5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 81)(7, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, WhatsappTemplatesComponent_tr_79_div_10_Template, 2, 1, "div", 84)(11, WhatsappTemplatesComponent_tr_79_span_11_Template, 2, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 86)(13, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, WhatsappTemplatesComponent_tr_79_div_18_Template, 5, 4, "div", 90)(19, WhatsappTemplatesComponent_tr_79_span_19_Template, 2, 1, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td", 91)(21, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td", 93)(24, "div", 94)(25, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WhatsappTemplatesComponent_tr_79_Template_button_click_25_listener() {
      const template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.editTemplate(template_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WhatsappTemplatesComponent_tr_79_Template_button_click_27_listener() {
      const template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleTemplateStatus(template_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WhatsappTemplatesComponent_tr_79_Template_button_click_29_listener() {
      const template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.deleteTemplate(template_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const template_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("inactive", template_r5.status === "inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](template_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", template_r5.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.getCategoryBadgeClass(template_r5.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getCategoryDisplayName(template_r5.category), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", template_r5.variables.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", template_r5.variables.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](template_r5.usageCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", template_r5.lastUsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !template_r5.lastUsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](template_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", template_r5.status === "active" ? ctx_r1.getTranslation("active") : ctx_r1.getTranslation("inactive"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r1.getTranslation("edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", template_r5.status === "active" ? "btn-success" : "btn-outline-success")("title", template_r5.status === "active" ? ctx_r1.getTranslation("deactivate") : ctx_r1.getTranslation("activate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](template_r5.status === "active" ? "fas fa-toggle-on" : "fas fa-toggle-off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r1.getTranslation("delete"));
  }
}
function WhatsappTemplatesComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noTemplatesFound"));
  }
}
function WhatsappTemplatesComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("loading"));
  }
}
function WhatsappTemplatesComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function WhatsappTemplatesComponent_div_83_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 115)(1, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WhatsappTemplatesComponent_div_83_li_7_Template_a_click_1_listener() {
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPageChange(i_r9 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.currentPage === i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r9 + 1);
  }
}
function WhatsappTemplatesComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 112)(1, "div", 3)(2, "nav", 113)(3, "ul", 114)(4, "li", 115)(5, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WhatsappTemplatesComponent_div_83_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, WhatsappTemplatesComponent_div_83_li_7_Template, 3, 3, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li", 115)(9, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WhatsappTemplatesComponent_div_83_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0).constructor(ctx_r1.totalPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
class WhatsappTemplatesComponent {
  get paginatedTemplates() {
    return this.filteredTemplates;
  }
  constructor(languageService, translationService, whatsappTemplatesService, fb) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.whatsappTemplatesService = whatsappTemplatesService;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.templates = [];
    this.filteredTemplates = [];
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.selectedStatus = 'all';
    this.showAddForm = false;
    this.editingTemplate = null;
    this.isLoading = false;
    this.errorMessage = '';
    this.showConfirmDialog = false;
    this.confirmDialogData = {};
    this.itemToDelete = null;
    this.detectedVariables = []; // Variables detected from content
    // Pagination properties
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalPages = 1;
    this.totalTemplates = 0;
    this.templateForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      category: ['system-updates', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    // Listen to content changes to extract variables in real-time
    this.templateForm.get('content')?.valueChanges.subscribe(content => {
      this.extractVariables(content);
    });
  }
  extractVariables(content) {
    if (!content) {
      this.detectedVariables = [];
      return;
    }
    const variableRegex = /\{\{(\w+)\}\}/g;
    const variables = [];
    let match;
    while ((match = variableRegex.exec(content)) !== null) {
      if (!variables.includes(match[1])) {
        variables.push(match[1]);
      }
    }
    this.detectedVariables = variables;
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadTemplates();
  }
  loadTemplates() {
    this.isLoading = true;
    this.errorMessage = '';
    this.whatsappTemplatesService.getTemplates({
      category: this.selectedCategory === 'all' ? undefined : this.selectedCategory,
      status: this.selectedStatus === 'all' ? undefined : this.selectedStatus,
      search: this.searchTerm || undefined,
      page: this.currentPage,
      limit: this.itemsPerPage
    }).subscribe({
      next: response => {
        this.templates = response.templates;
        this.filteredTemplates = [...this.templates];
        this.totalTemplates = response.total;
        this.calculatePagination();
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading templates:', error);
        this.errorMessage = this.getTranslation('errorLoadingTemplates') || 'Error loading templates';
        this.isLoading = false;
      }
    });
  }
  calculatePagination() {
    this.totalPages = Math.ceil(this.totalTemplates / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadTemplates();
  }
  filterTemplates() {
    this.currentPage = 1;
    this.loadTemplates();
  }
  addTemplate() {
    if (this.templateForm.valid) {
      this.isLoading = true;
      const formValue = this.templateForm.value;
      const templateData = {
        name: formValue.name,
        category: formValue.category,
        content: formValue.content,
        variables: [],
        // Will be extracted by backend
        status: 'active',
        usageCount: 0
      };
      if (this.editingTemplate?.id) {
        // Update existing template
        this.whatsappTemplatesService.updateTemplate(this.editingTemplate.id, templateData).subscribe({
          next: () => {
            this.isLoading = false;
            this.resetForm();
            this.loadTemplates();
          },
          error: error => {
            console.error('Error updating template:', error);
            this.isLoading = false;
            this.errorMessage = this.getTranslation('errorUpdatingTemplate') || 'Error updating template';
          }
        });
      } else {
        // Create new template
        this.whatsappTemplatesService.createTemplate(templateData).subscribe({
          next: () => {
            this.isLoading = false;
            this.resetForm();
            this.loadTemplates();
          },
          error: error => {
            console.error('Error creating template:', error);
            this.isLoading = false;
            this.errorMessage = this.getTranslation('errorCreatingTemplate') || 'Error creating template';
          }
        });
      }
    }
  }
  resetForm() {
    this.templateForm.reset({
      category: 'system-updates'
    });
    this.showAddForm = false;
    this.editingTemplate = null;
    this.detectedVariables = [];
  }
  editTemplate(template) {
    this.editingTemplate = template;
    this.templateForm.patchValue({
      name: template.name,
      category: template.category,
      content: template.content
    });
    // Extract and display variables from existing template
    this.detectedVariables = template.variables || [];
    this.showAddForm = true;
  }
  toggleTemplateStatus(template) {
    if (!template.id) return;
    const newStatus = template.status === 'active' ? 'inactive' : 'active';
    this.isLoading = true;
    this.whatsappTemplatesService.updateTemplate(template.id, {
      status: newStatus
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.loadTemplates();
      },
      error: error => {
        console.error('Error updating template status:', error);
        this.isLoading = false;
        this.errorMessage = this.getTranslation('errorUpdatingTemplate') || 'Error updating template';
      }
    });
  }
  deleteTemplate(template) {
    if (!template.id) return;
    this.itemToDelete = template;
    this.confirmDialogData = {
      title: this.getTranslation('confirmDelete') || 'Confirm Delete',
      message: this.getTranslation('confirmDeleteMessage') || `Are you sure you want to delete "${template.name}"?`,
      confirmText: this.getTranslation('delete') || 'Delete',
      cancelText: this.getTranslation('cancel') || 'Cancel'
    };
    this.showConfirmDialog = true;
  }
  onConfirmDelete() {
    if (this.itemToDelete?.id) {
      this.isLoading = true;
      this.whatsappTemplatesService.deleteTemplate(this.itemToDelete.id).subscribe({
        next: () => {
          this.isLoading = false;
          this.showConfirmDialog = false;
          this.itemToDelete = null;
          this.loadTemplates();
        },
        error: error => {
          console.error('Error deleting template:', error);
          this.isLoading = false;
          this.errorMessage = this.getTranslation('errorDeletingTemplate') || 'Error deleting template';
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
  getActiveTemplatesCount() {
    return this.templates.filter(t => t.status === 'active').length;
  }
  getInactiveTemplatesCount() {
    return this.templates.filter(t => t.status === 'inactive').length;
  }
  getCategoryBadgeClass(category) {
    const badgeClasses = {
      'system-updates': 'bg-primary',
      'security-alerts': 'bg-danger',
      'new-messages': 'bg-info',
      'reminders': 'bg-warning',
      'marketing': 'bg-success',
      // Legacy categories for backward compatibility
      'general': 'bg-secondary',
      'welcome': 'bg-success',
      'system': 'bg-primary',
      'reminder': 'bg-warning'
    };
    return badgeClasses[category] || 'bg-secondary';
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
      'welcome': 'welcome',
      'system': 'system',
      'reminder': 'reminder'
    };
    const translationKey = categoryMap[category] || category;
    return this.getTranslation(translationKey) || category;
  }
  // Use centralized translation service
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function WhatsappTemplatesComponent_Factory(t) {
      return new (t || WhatsappTemplatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_whatsapp_templates_service__WEBPACK_IMPORTED_MODULE_2__.WhatsAppTemplatesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: WhatsappTemplatesComponent,
      selectors: [["app-whatsapp-templates"]],
      decls: 85,
      vars: 40,
      consts: [[1, "whatsapp-templates-container", 3, "dir"], [1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "page-title"], [1, "fab", "fa-whatsapp", "me-2"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus", "me-2"], ["class", "row mb-4", 4, "ngIf"], [1, "card"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-4"], ["for", "searchTemplates", 1, "form-label"], [1, "fas", "fa-search", "me-2"], ["type", "text", "id", "searchTemplates", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], ["for", "categoryFilter", 1, "form-label"], [1, "fas", "fa-filter", "me-2"], ["id", "categoryFilter", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "system-updates"], ["value", "security-alerts"], ["value", "new-messages"], ["value", "reminders"], ["value", "marketing"], ["for", "statusFilter", 1, "form-label"], [1, "fas", "fa-toggle-on", "me-2"], ["id", "statusFilter", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "active"], ["value", "inactive"], [1, "templates-list-section"], [1, "list-header"], [1, "total-count"], [1, "fas", "fa-list", "me-2"], [1, "template-stats"], [1, "badge", "bg-success", "me-2"], [1, "badge", "bg-secondary"], [1, "table-container"], [1, "templates-table"], [3, "inactive", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "row", 4, "ngIf"], [3, "confirmed", "cancelled", "visible", "data"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-plus-circle", "me-2"], [1, "row", "g-3", 3, "ngSubmit", "formGroup"], [1, "col-md-6"], ["for", "templateName", 1, "form-label"], [1, "fas", "fa-tag", "me-2"], ["type", "text", "id", "templateName", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "templateCategory", 1, "form-label"], [1, "fas", "fa-folder", "me-2"], ["id", "templateCategory", "formControlName", "category", 1, "form-select"], ["for", "templateContent", 1, "form-label"], [1, "fas", "fa-comment", "me-2"], ["id", "templateContent", "formControlName", "content", "rows", "4", 1, "form-control", 3, "placeholder"], [1, "form-text", "text-muted"], [1, "fas", "fa-info-circle", "me-1"], ["class", "mt-2", 4, "ngIf"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "fas", "fa-save", "me-2"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-undo", "me-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-times", "me-2"], [1, "invalid-feedback"], [1, "mt-2"], [1, "alert", "alert-info", "mb-0", "py-2"], [1, "fas", "fa-code", "me-2"], [1, "ms-2"], ["class", "badge bg-primary me-1", 4, "ngFor", "ngForOf"], [1, "badge", "bg-primary", "me-1"], [1, "name-cell"], [1, "template-name"], ["class", "template-content-preview", 4, "ngIf"], [1, "category-cell"], [1, "category-badge", 3, "ngClass"], [1, "variables-cell"], ["class", "variables-list", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "usage-cell"], [1, "usage-info"], [1, "fas", "fa-chart-line", "me-1"], [1, "last-used-cell"], ["class", "last-used-info", 4, "ngIf"], [1, "status-cell"], [1, "status-badge"], [1, "actions-cell"], [1, "action-buttons"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "title"], [1, "fas", "fa-edit"], ["type", "button", 1, "btn", "btn-sm", 3, "click", "ngClass", "title"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "title"], [1, "fas", "fa-trash"], [1, "template-content-preview"], [1, "text-muted"], [1, "variables-list"], ["class", "variable-badge", 4, "ngFor", "ngForOf"], [1, "variable-badge"], [1, "last-used-info"], [1, "fas", "fa-clock", "me-1"], [1, "empty-state"], [1, "fas", "fa-inbox"], [1, "fas", "fa-spinner", "fa-spin"], ["role", "alert", 1, "alert", "alert-danger"], [1, "fas", "fa-exclamation-circle", "me-2"], [1, "row"], ["aria-label", "Templates pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "fas", "fa-chevron-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"]],
      template: function WhatsappTemplatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WhatsappTemplatesComponent_Template_button_click_8_listener() {
            return ctx.showAddForm = !ctx.showAddForm;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, WhatsappTemplatesComponent_div_11_Template, 62, 29, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function WhatsappTemplatesComponent_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function WhatsappTemplatesComponent_Template_input_input_21_listener() {
            return ctx.filterTemplates();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13)(23, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "select", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function WhatsappTemplatesComponent_Template_select_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function WhatsappTemplatesComponent_Template_select_change_26_listener() {
            return ctx.filterTemplates();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 13)(40, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "select", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function WhatsappTemplatesComponent_Template_select_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function WhatsappTemplatesComponent_Template_select_change_43_listener() {
            return ctx.filterTemplates();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 31)(51, "div", 32)(52, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 35)(56, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 38)(61, "table", 39)(62, "thead")(63, "tr")(64, "th");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, WhatsappTemplatesComponent_tr_79_Template, 31, 20, "tr", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, WhatsappTemplatesComponent_div_80_Template, 4, 1, "div", 41)(81, WhatsappTemplatesComponent_div_81_Template, 4, 1, "div", 41)(82, WhatsappTemplatesComponent_div_82_Template, 3, 1, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](83, WhatsappTemplatesComponent_div_83_Template, 11, 8, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "app-confirm-dialog", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("confirmed", function WhatsappTemplatesComponent_Template_app_confirm_dialog_confirmed_84_listener() {
            return ctx.onConfirmDelete();
          })("cancelled", function WhatsappTemplatesComponent_Template_app_confirm_dialog_cancelled_84_listener() {
            return ctx.onCancelDelete();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("whatsappTemplates"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("addTemplate"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAddForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("search"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", ctx.getTranslation("searchTemplates"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("category"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("allCategories"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("systemUpdates"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("securityAlerts"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("newMessages"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("reminders"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("marketing"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("status"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("allStatuses"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("active"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("inactive"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.getTranslation("templates"), ": ", ctx.filteredTemplates.length, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.getTranslation("active"), ": ", ctx.getActiveTemplatesCount(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.getTranslation("inactive"), ": ", ctx.getInactiveTemplatesCount(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("templateName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("category"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("variables"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("usage"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("lastUsed"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("status"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("actions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.paginatedTemplates);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.filteredTemplates.length === 0 && !ctx.isLoading);
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
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
      styles: [".whatsapp-templates-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 12px;\n  font-size: 1.25rem;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  border: none;\n  min-width: 120px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n  transform: translateY(-1px);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n\n.page-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 12px;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f1f3f4;\n  margin-bottom: 24px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  border-radius: 20px 20px 0 0;\n  padding: 20px 24px;\n  margin: -24px -24px 24px -24px;\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #34495e;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n}\n.form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  width: 20px;\n  margin-right: 8px;\n}\n\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  background: #fafbfc;\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder, .form-select[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n  font-size: 0.8rem;\n}\n.form-control.is-invalid[_ngcontent-%COMP%], .form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);\n}\n\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n\n.form-text[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n  margin-top: 5px;\n}\n.form-text[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  color: #00695c;\n  font-weight: 600;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 0.75rem;\n  margin-top: 5px;\n  font-weight: 500;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 12px 16px;\n  font-size: 0.875rem;\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: rgba(0, 105, 92, 0.1);\n  border: 1px solid rgba(0, 105, 92, 0.2);\n  color: #00695c;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  border: 1px solid rgba(220, 53, 69, 0.2);\n  color: #dc3545;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 10px 18px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  border: none;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  color: white;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #218838 0%, #1ea085 100%);\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  border: 1px solid #00695c;\n  color: #00695c;\n  background: transparent;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #00695c;\n  color: white;\n}\n\n.btn-outline-success[_ngcontent-%COMP%] {\n  border: 1px solid #28a745;\n  color: #28a745;\n  background: transparent;\n}\n.btn-outline-success[_ngcontent-%COMP%]:hover {\n  background: #28a745;\n  color: white;\n}\n\n.btn-outline-danger[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545;\n  color: #dc3545;\n  background: transparent;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: white;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #6c757d;\n  color: #6c757d;\n  background: transparent;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #6c757d;\n  color: white;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n\n.templates-list-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: white;\n  border-radius: 16px;\n  padding: 16px 20px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n}\n.list-header[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.875rem;\n}\n.list-header[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 8px;\n}\n.list-header[_ngcontent-%COMP%]   .template-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.list-header[_ngcontent-%COMP%]   .template-stats[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.list-header[_ngcontent-%COMP%]   .template-stats[_ngcontent-%COMP%]   .badge.bg-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745, #20c997) !important;\n  color: white;\n}\n.list-header[_ngcontent-%COMP%]   .template-stats[_ngcontent-%COMP%]   .badge.bg-secondary[_ngcontent-%COMP%] {\n  background: #6c757d !important;\n  color: white;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f3f4;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n}\n.table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: white;\n  border-bottom: none;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f3f4;\n  transition: all 0.2s ease;\n}\n.table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.inactive[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  background: rgba(108, 117, 125, 0.05);\n}\n.table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  vertical-align: middle;\n}\n.table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n.table-container[_ngcontent-%COMP%]   .name-cell[_ngcontent-%COMP%]   .template-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #2c3e50;\n  display: block;\n  margin-bottom: 4px;\n}\n.table-container[_ngcontent-%COMP%]   .name-cell[_ngcontent-%COMP%]   .template-name[_ngcontent-%COMP%]   .template-content-preview[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.table-container[_ngcontent-%COMP%]   .category-cell[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: inline-block;\n}\n.table-container[_ngcontent-%COMP%]   .category-cell[_ngcontent-%COMP%]   .category-badge.bg-primary[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.1);\n  color: #0056b3;\n}\n.table-container[_ngcontent-%COMP%]   .category-cell[_ngcontent-%COMP%]   .category-badge.bg-danger[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  color: #721c24;\n}\n.table-container[_ngcontent-%COMP%]   .category-cell[_ngcontent-%COMP%]   .category-badge.bg-info[_ngcontent-%COMP%] {\n  background: rgba(23, 162, 184, 0.1);\n  color: #0c5460;\n}\n.table-container[_ngcontent-%COMP%]   .category-cell[_ngcontent-%COMP%]   .category-badge.bg-warning[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #856404;\n}\n.table-container[_ngcontent-%COMP%]   .category-cell[_ngcontent-%COMP%]   .category-badge.bg-success[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.1);\n  color: #155724;\n}\n.table-container[_ngcontent-%COMP%]   .category-cell[_ngcontent-%COMP%]   .category-badge.bg-secondary[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.1);\n  color: #383d41;\n}\n.table-container[_ngcontent-%COMP%]   .variables-cell[_ngcontent-%COMP%]   .variables-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.table-container[_ngcontent-%COMP%]   .variables-cell[_ngcontent-%COMP%]   .variables-list[_ngcontent-%COMP%]   .variable-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 105, 92, 0.1);\n  color: #00695c;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n.table-container[_ngcontent-%COMP%]   .usage-cell[_ngcontent-%COMP%]   .usage-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #495057;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .usage-cell[_ngcontent-%COMP%]   .usage-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .last-used-cell[_ngcontent-%COMP%]   .last-used-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #495057;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .last-used-cell[_ngcontent-%COMP%]   .last-used-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 0.875rem;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: inline-block;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.active[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.1);\n  color: #155724;\n}\n.table-container[_ngcontent-%COMP%]   .status-cell[_ngcontent-%COMP%]   .status-badge.inactive[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.1);\n  color: #383d41;\n}\n.table-container[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #adb5bd;\n  margin-bottom: 16px;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%]   i.fa-spinner[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 1rem;\n  margin: 0;\n  font-weight: 500;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin-top: 24px;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #00695c;\n  border: 1px solid #e9ecef;\n  padding: 8px 12px;\n  border-radius: 8px;\n  margin: 0 4px;\n  transition: all 0.3s ease;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background: #00695c;\n  color: white;\n  border-color: #00695c;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  border-color: #00695c;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #adb5bd;\n  border-color: #e9ecef;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 12px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 6px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .usage-cell[_ngcontent-%COMP%]   .usage-info[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   .last-used-cell[_ngcontent-%COMP%]   .last-used-info[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n@media (max-width: 1200px) {\n  .whatsapp-templates-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n@media (max-width: 768px) {\n  .whatsapp-templates-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    flex-direction: column;\n    text-align: center;\n  }\n  .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 8px;\n  }\n  .list-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .list-header[_ngcontent-%COMP%]   .template-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .table-container[_ngcontent-%COMP%]   .templates-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n  .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .whatsapp-templates-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    margin: -16px -16px 16px -16px;\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvd2hhdHNhcHAvY29tcG9uZW50cy93aGF0c2FwcC10ZW1wbGF0ZXMvd2hhdHNhcHAtdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdBO0VBQ0UsNkRBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFOO0FBRU07RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FBQVI7QUFJSTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQUlNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZSO0FBSVE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUZWO0FBSVU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQUZaO0FBTVE7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtBQUpWO0FBTVU7RUFDRSwyQkFBQTtFQUNBLDRDQUFBO0FBSlo7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFURjtBQVdFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VB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O0lBQ0UsaUJBQUE7RUE5SEY7RUFpSUE7SUFDRSxhQUFBO0VBL0hGO0VBaUlFO0lBQ0UsOEJBQUE7SUFDQSxhQUFBO0VBL0hKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIud2hhdHNhcHAtdGVtcGxhdGVzLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLy8gUGFnZSBIZWFkZXIgU3R5bGluZ1xyXG4ucGFnZS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZmZmYgMCUsICNmOGY5ZmEgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgXHJcbiAgLmhlYWRlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgXHJcbiAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBcclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjLCAjNGRiNmFjKTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZWFkZXItYWN0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMTJweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICYuYnRuLXNlY29uZGFyeSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDEwNSwgOTIsIDAuMyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLCAxMDUsIDkyLCAwLjQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBcclxuICBpIHtcclxuICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YywgIzRkYjZhYyk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZvcm0gU3R5bGluZ1xyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xyXG4gICAgbWFyZ2luOiAtMjRweCAtMjRweCAyNHB4IC0yNHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgXHJcbiAgICBoNSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzQ0OTVlO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBcclxuICBpIHtcclxuICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wsXHJcbi5mb3JtLXNlbGVjdCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmJmYztcclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEwNSwgOTIsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gICYuaXMtaW52YWxpZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcclxuICB9XHJcbn1cclxuXHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmZvcm0tdGV4dCB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIFxyXG4gIGNvZGUge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBjb2xvcjogIzAwNjk1YztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgXHJcbiAgJi5hbGVydC1pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMTA1LCA5MiwgMC4yKTtcclxuICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gIH1cclxuICBcclxuICAmLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjAsIDUzLCA2OSwgMC4yKTtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQnV0dG9uc1xyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIH1cclxuICBcclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLXNtIHtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAxMDUsIDkyLCAwLjMpO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDEwNSwgOTIsIDAuNCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUgMCUsICMyMGM5OTcgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzIxODgzOCAwJSwgIzFlYTA4NSAxMDAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA2OTVjO1xyXG4gIGNvbG9yOiAjMDA2OTVjO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwNjk1YztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjhhNzQ1O1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzI4YTc0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYW5nZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRmlsdGVycyBTZWN0aW9uXHJcbi5maWx0ZXJzLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgXHJcbiAgLmZpbHRlcnMtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmNDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFRlbXBsYXRlcyBMaXN0IFNlY3Rpb25cclxuLnRlbXBsYXRlcy1saXN0LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5saXN0LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgXHJcbiAgLnRvdGFsLWNvdW50IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50ZW1wbGF0ZS1zdGF0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBcclxuICAgIC5iYWRnZSB7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIFxyXG4gICAgICAmLmJnLXN1Y2Nlc3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUsICMyMGM5OTcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLmJnLXNlY29uZGFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzZjNzU3ZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gVGFibGUgU3R5bGluZ1xyXG4udGFibGUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2Y0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBcclxuICAudGVtcGxhdGVzLXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBcclxuICAgIHRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcclxuICAgICAgXHJcbiAgICAgIHRoIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdGJvZHkge1xyXG4gICAgICB0ciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmluYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA4LCAxMTcsIDEyNSwgMC4wNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTJweDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1lLWNlbGwge1xyXG4gICAgLnRlbXBsYXRlLW5hbWUge1xyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudGVtcGxhdGUtY29udGVudC1wcmV2aWV3IHtcclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXRlZ29yeS1jZWxsIHtcclxuICAgIC5jYXRlZ29yeS1iYWRnZSB7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBcclxuICAgICAgJi5iZy1wcmltYXJ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjMDA1NmIzO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLmJnLWRhbmdlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzcyMWMyNDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5iZy1pbmZvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzLCAxNjIsIDE4NCwgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzBjNTQ2MDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5iZy13YXJuaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLmJnLXN1Y2Nlc3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksIDAuMSk7XHJcbiAgICAgICAgY29sb3I6ICMxNTU3MjQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYuYmctc2Vjb25kYXJ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgMTE3LCAxMjUsIDAuMSk7XHJcbiAgICAgICAgY29sb3I6ICMzODNkNDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnZhcmlhYmxlcy1jZWxsIHtcclxuICAgIC52YXJpYWJsZXMtbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZ2FwOiA0cHg7XHJcbiAgICAgIFxyXG4gICAgICAudmFyaWFibGUtYmFkZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnVzYWdlLWNlbGwge1xyXG4gICAgLnVzYWdlLWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDZweDtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIFxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5sYXN0LXVzZWQtY2VsbCB7XHJcbiAgICAubGFzdC11c2VkLWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDZweDtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIFxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0dXMtY2VsbCB7XHJcbiAgICAuc3RhdHVzLWJhZGdlIHtcclxuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIFxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTY3LCA2OSwgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzE1NTcyNDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5pbmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDExNywgMTI1LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjMzgzZDQxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3Rpb25zLWNlbGwge1xyXG4gICAgLmFjdGlvbi1idXR0b25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFbXB0eSBTdGF0ZVxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogI2FkYjViZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFxyXG4gICAgJi5mYS1zcGlubmVyIHtcclxuICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUGFnaW5hdGlvblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBcclxuICAucGFnZS1pdGVtIHtcclxuICAgIC5wYWdlLWxpbmsge1xyXG4gICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDY5NWM7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuZGlzYWJsZWQgLnBhZ2UtbGluayB7XHJcbiAgICAgIGNvbG9yOiAjYWRiNWJkO1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogI2FkYjViZDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNlOWVjZWY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5wYWdlLXRpdGxlIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0biBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0LWhlYWRlciAudG90YWwtY291bnQgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICBcclxuICAudGVtcGxhdGVzLXRhYmxlIHtcclxuICAgIHRoZWFkIHRoIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRib2R5IHRkIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC51c2FnZS1jZWxsIC51c2FnZS1pbmZvLFxyXG4gIC5sYXN0LXVzZWQtY2VsbCAubGFzdC11c2VkLWluZm8ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC53aGF0c2FwcC10ZW1wbGF0ZXMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAud2hhdHNhcHAtdGVtcGxhdGVzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmxpc3QtaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIFxyXG4gICAgLnRlbXBsYXRlLXN0YXRzIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIFxyXG4gICAgLnRlbXBsYXRlcy10YWJsZSB7XHJcbiAgICAgIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA0cHg7XHJcbiAgICBcclxuICAgIC5idG4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC53aGF0c2FwcC10ZW1wbGF0ZXMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICBtYXJnaW46IC0xNnB4IC0xNnB4IDE2cHggLTE2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4567:
/*!******************************************************!*\
  !*** ./src/app/features/whatsapp/whatsapp.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhatsappModule: () => (/* binding */ WhatsappModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _components_whatsapp_messages_whatsapp_messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/whatsapp-messages/whatsapp-messages.component */ 766);
/* harmony import */ var _components_whatsapp_templates_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/whatsapp-templates/whatsapp-templates.component */ 296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);








const routes = [{
  path: '',
  component: _components_whatsapp_messages_whatsapp_messages_component__WEBPACK_IMPORTED_MODULE_1__.WhatsappMessagesComponent
}, {
  path: 'whatsapp-messages',
  component: _components_whatsapp_messages_whatsapp_messages_component__WEBPACK_IMPORTED_MODULE_1__.WhatsappMessagesComponent
}, {
  path: 'whatsapp-templates',
  component: _components_whatsapp_templates_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_2__.WhatsappTemplatesComponent
}];
class WhatsappModule {
  static {
    this.ɵfac = function WhatsappModule_Factory(t) {
      return new (t || WhatsappModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: WhatsappModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WhatsappModule, {
    declarations: [_components_whatsapp_messages_whatsapp_messages_component__WEBPACK_IMPORTED_MODULE_1__.WhatsappMessagesComponent, _components_whatsapp_templates_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_2__.WhatsappTemplatesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_whatsapp_whatsapp_module_ts.js.map