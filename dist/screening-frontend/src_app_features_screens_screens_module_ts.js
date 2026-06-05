"use strict";
(self["webpackChunkscreening_frontend"] = self["webpackChunkscreening_frontend"] || []).push([["src_app_features_screens_screens_module_ts"],{

/***/ 5471:
/*!************************************************************************************!*\
  !*** ./src/app/features/screens/components/group-layout/group-layout.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupLayoutComponent: () => (/* binding */ GroupLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/screen.service */ 2588);
/* harmony import */ var _core_services_advertisements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/advertisements.service */ 9282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);







function GroupLayoutComponent_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const g_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", g_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](g_r1.name);
  }
}
function GroupLayoutComponent_label_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("screensInGroup") || "Screens in this group");
  }
}
function GroupLayoutComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("noScreensInGroup") || "No screens in this group.", " ");
  }
}
function GroupLayoutComponent_div_15_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const screen_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](screen_r4.ipAddress);
  }
}
function GroupLayoutComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_15_div_1_Template_div_click_0_listener() {
      const screen_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectScreen(screen_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GroupLayoutComponent_div_15_div_1_span_3_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const screen_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", (ctx_r1.selectedScreen == null ? null : ctx_r1.selectedScreen.id) === screen_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](screen_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", screen_r4.ipAddress);
  }
}
function GroupLayoutComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GroupLayoutComponent_div_15_div_1_Template, 4, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.screensInGroup);
  }
}
function GroupLayoutComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("loading") || "Loading...");
  }
}
function GroupLayoutComponent_div_17_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GroupLayoutComponent_div_17_div_7_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 53)(1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", i_r6 + 1, " of ", ctx_r1.screenRegions.length, "");
  }
}
function GroupLayoutComponent_div_17_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49)(1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GroupLayoutComponent_div_17_div_7_div_1_div_5_Template, 3, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"](" ", ctx_r1.getTranslation("createdRegions") || "Created Regions", " (", ctx_r1.screenRegions.length, ") \u2014 ", ctx_r1.getGridColumns(), "\u00D7", ctx_r1.getGridRows(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("grid-template-columns", "repeat(" + ctx_r1.getGridColumns() + ", 1fr)")("grid-template-rows", "repeat(" + ctx_r1.getGridRows() + ", 1fr)")("display", "grid")("grid-auto-flow", "row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.getSortedRegions());
  }
}
function GroupLayoutComponent_div_17_div_7_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_17_div_7_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.resetRegions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isCreatingRegions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("reset") || "Reset", " ");
  }
}
function GroupLayoutComponent_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GroupLayoutComponent_div_17_div_7_div_1_Template, 6, 13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 41)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 42)(6, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_17_div_7_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.createGridLayout(1, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " 1\u00D71 (Full) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_17_div_7_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.createGridLayout(1, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " 1\u00D72 (Left/Right) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_17_div_7_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.createGridLayout(2, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " 2\u00D71 (Top/Bottom) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_17_div_7_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.createGridLayout(2, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " 2\u00D72 (4 Boxes) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_17_div_7_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.createGridLayout(2, 3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " 2\u00D73 (6 Boxes) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_17_div_7_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.createGridLayout(3, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " 3\u00D72 (6 Boxes) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_17_div_7_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.createGridLayout(3, 3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " 3\u00D73 (9 Boxes) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_17_div_7_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.createGridLayout(4, 4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " 4\u00D74 (16 Boxes) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, GroupLayoutComponent_div_17_div_7_button_30_Template, 3, 2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.screenRegions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("selectGridLayout") || "Select Grid Layout:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isCreatingRegions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isCreatingRegions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isCreatingRegions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isCreatingRegions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isCreatingRegions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isCreatingRegions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isCreatingRegions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isCreatingRegions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.screenRegions.length > 0);
  }
}
function GroupLayoutComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GroupLayoutComponent_div_17_div_6_Template, 2, 0, "div", 37)(7, GroupLayoutComponent_div_17_div_7_Template, 31, 11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("screenRegions") || "Screen Regions", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingRegions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingRegions);
  }
}
function GroupLayoutComponent_div_18_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("noAdvertisementsAssigned") || "No advertisements assigned to this screen. Assign and configure ads in By Screen, then apply to this group.", " ");
  }
}
function GroupLayoutComponent_div_18_div_7_div_5_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ad_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.formatFileSize(ad_r9.fileSize));
  }
}
function GroupLayoutComponent_div_18_div_7_div_5_div_15_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", region_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", i_r12 + 1, " of ", ctx_r1.screenRegions.length, " ");
  }
}
function GroupLayoutComponent_div_18_div_7_div_5_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 83)(1, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "select", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GroupLayoutComponent_div_18_div_7_div_5_div_15_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ad_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onRegionSelectChange(ad_r9.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GroupLayoutComponent_div_18_div_7_div_5_div_15_option_6_Template, 2, 3, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ad_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("assignToRegion") || "Assign to Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.getSelectedRegionIdForAd(ad_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("selectRegion") || "Select region");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.getSortedRegions());
  }
}
function GroupLayoutComponent_div_18_div_7_div_5_div_16_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ad_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getAdvertisementSchedule(ad_r9.id).startTime, "");
  }
}
function GroupLayoutComponent_div_18_div_7_div_5_div_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GroupLayoutComponent_div_18_div_7_div_5_div_16_div_8_span_2_Template, 2, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ad_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDateForInput(ctx_r1.getAdvertisementSchedule(ad_r9.id).startDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r1.getAdvertisementSchedule(ad_r9.id)) == null ? null : tmp_7_0.startTime);
  }
}
function GroupLayoutComponent_div_18_div_7_div_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 83)(1, "div", 86)(2, "div", 87)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_18_div_7_div_5_div_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ad_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openScheduleModal(ad_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, GroupLayoutComponent_div_18_div_7_div_5_div_16_div_8_Template, 3, 2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ad_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("scheduled") || "Scheduled", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r1.getTranslation("editSchedule") || "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r1.getAdvertisementSchedule(ad_r9.id)) == null ? null : tmp_7_0.startDate);
  }
}
function GroupLayoutComponent_div_18_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 66)(1, "div", 67)(2, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_18_div_7_div_5_Template_button_click_2_listener() {
      const ad_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onRemoveAssignedAdvertisement(ad_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5)(5, "div", 70)(6, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 73)(12, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, GroupLayoutComponent_div_18_div_7_div_5_span_14_Template, 2, 1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, GroupLayoutComponent_div_18_div_7_div_5_div_15_Template, 7, 5, "div", 76)(16, GroupLayoutComponent_div_18_div_7_div_5_div_16_Template, 9, 3, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 77)(18, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_18_div_7_div_5_Template_button_click_18_listener() {
      const ad_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openPreview(ad_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_18_div_7_div_5_Template_button_click_21_listener() {
      const ad_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openScheduleModal(ad_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ad_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r1.getTranslation("remove") || "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ad_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("assigned") || "Assigned", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ad_r9.type || "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ad_r9.fileSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.screenRegions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.getAdvertisementSchedule(ad_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("View") || "View", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r1.getTranslation("schedule") || "Schedule");
  }
}
function GroupLayoutComponent_div_18_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 61)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GroupLayoutComponent_div_18_div_7_div_5_Template, 23, 9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mt-4", ((tmp_2_0 = ctx_r1.fullScreen.assignedAdvertisements == null ? null : ctx_r1.fullScreen.assignedAdvertisements.length) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("assignedAdvertisements") || "Assigned Advertisements", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.fullScreen.assignedAdvertisements);
  }
}
function GroupLayoutComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GroupLayoutComponent_div_18_p_6_Template, 2, 1, "p", 58)(7, GroupLayoutComponent_div_18_div_7_Template, 6, 4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("assignAdvertisements") || "Assign Advertisements", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.fullScreen.assignedAdvertisements == null ? null : ctx_r1.fullScreen.assignedAdvertisements.length) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.fullScreen.assignedAdvertisements == null ? null : ctx_r1.fullScreen.assignedAdvertisements.length) !== null && tmp_3_0 !== undefined ? tmp_3_0 : 0) > 0);
  }
}
function GroupLayoutComponent_div_19_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 106);
  }
}
function GroupLayoutComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 94)(7, "div", 95)(8, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "select", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GroupLayoutComponent_div_19_Template_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.orientation, $event) || (ctx_r1.orientation = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 95)(18, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "select", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GroupLayoutComponent_div_19_Template_select_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.screenSize, $event) || (ctx_r1.screenSize = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_19_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.saveSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, GroupLayoutComponent_div_19_span_28_Template, 1, 0, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("settings") || "Settings", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("orientation") || "Orientation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.orientation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("landscape") || "Landscape");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("portrait") || "Portrait");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("auto") || "Auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("screenSize") || "Screen size");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.screenSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("small") || "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("medium") || "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("large") || "Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isSavingSettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isSavingSettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("saveSettings") || "Save settings", " ");
  }
}
function GroupLayoutComponent_div_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 106);
  }
}
function GroupLayoutComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 5)(2, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_20_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.applyToGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GroupLayoutComponent_div_20_span_5_Template, 1, 0, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("applyToGroupHelp") || "When layout, ads and settings are ready, apply to all screens in this group.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isApplyingToGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isApplyingToGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("applyToGroup") || "Apply to this group", " ");
  }
}
function GroupLayoutComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx_r1.selectedAdForPreview.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.selectedAdForPreview.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function GroupLayoutComponent_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "video", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.selectedAdForPreview.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function GroupLayoutComponent_div_28_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.formatFileSize(ctx_r1.selectedAdForPreview.fileSize));
  }
}
function GroupLayoutComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GroupLayoutComponent_div_28_div_1_Template, 2, 2, "div", 111)(2, GroupLayoutComponent_div_28_div_2_Template, 2, 1, "div", 112)(3, GroupLayoutComponent_div_28_p_3_Template, 2, 1, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedAdForPreview.type === "image" && ctx_r1.selectedAdForPreview.fileUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedAdForPreview.type === "video" && ctx_r1.selectedAdForPreview.fileUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedAdForPreview.fileSize);
  }
}
function GroupLayoutComponent_div_33_div_9_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", region_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", i_r19 + 1, " of ", ctx_r1.screenRegions.length, "");
  }
}
function GroupLayoutComponent_div_33_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 107)(1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "select", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GroupLayoutComponent_div_33_div_9_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.regionId, $event) || (ctx_r1.scheduleFormData.regionId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GroupLayoutComponent_div_33_div_9_option_6_Template, 2, 3, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("assignToRegion") || "Assign to Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.regionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noRegion") || "No Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.getSortedRegions());
  }
}
function GroupLayoutComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "div", 119)(2, "div", 17)(3, "div", 18)(4, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_33_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeScheduleModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, GroupLayoutComponent_div_33_div_9_Template, 7, 5, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 122)(11, "div", 123)(12, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GroupLayoutComponent_div_33_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.startDate, $event) || (ctx_r1.scheduleFormData.startDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 123)(16, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GroupLayoutComponent_div_33_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.startTime, $event) || (ctx_r1.scheduleFormData.startTime = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 122)(20, "div", 123)(21, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GroupLayoutComponent_div_33_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.endDate, $event) || (ctx_r1.scheduleFormData.endDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 123)(25, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GroupLayoutComponent_div_33_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.endTime, $event) || (ctx_r1.scheduleFormData.endTime = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 107)(29, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GroupLayoutComponent_div_33_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.priority, $event) || (ctx_r1.scheduleFormData.priority = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 127)(33, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GroupLayoutComponent_div_33_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.isActive, $event) || (ctx_r1.scheduleFormData.isActive = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 22)(37, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_33_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeScheduleModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_div_33_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.saveAdvertisementSchedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx_r1.showScheduleModal ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("show", ctx_r1.showScheduleModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("advertisementSchedule") || "Advertisement Schedule", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.screenRegions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("startDate") || "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("startTime") || "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("endDate") || "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("endTime") || "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.endTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("priority") || "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("active") || "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("cancel") || "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTranslation("save") || "Save");
  }
}
class GroupLayoutComponent {
  constructor(languageService, translationService, screenService, advertisementsService, cdr) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.screenService = screenService;
    this.advertisementsService = advertisementsService;
    this.cdr = cdr;
    this.currentLanguage = 'ar';
    this.groups = [];
    this.screens = [];
    this.screensInGroup = [];
    this.selectedGroupId = null;
    this.selectedScreen = null;
    /** Full screen details when a screen is selected (for regions, ads, settings) */
    this.fullScreen = null;
    this.isLoadingGroups = false;
    this.isLoadingScreens = false;
    this.isLoadingDetails = false;
    this.isApplyingToGroup = false;
    this.isSavingSettings = false;
    this.isSavingAds = false;
    // Regions
    this.screenRegions = [];
    this.isLoadingRegions = false;
    this.isCreatingRegions = false;
    // Advertisements & schedules (region assignment per ad)
    this.allAdvertisements = [];
    this.assignedAdIds = [];
    this.advertisementSchedules = new Map();
    this.isLoadingAds = false;
    // Preview modal (View button)
    this.showPreviewModal = false;
    this.selectedAdForPreview = null;
    // Schedule modal
    this.showScheduleModal = false;
    this.editingScheduleAdId = null;
    this.scheduleFormData = {
      regionId: null,
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      priority: 0,
      isActive: true
    };
    // Settings
    this.orientation = 'landscape';
    this.screenSize = 'medium';
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadGroups();
    this.loadScreens();
    this.loadAdvertisements();
  }
  loadGroups() {
    this.isLoadingGroups = true;
    this.screenService.getScreenGroups().subscribe({
      next: groups => {
        this.groups = groups;
        this.isLoadingGroups = false;
        if (this.selectedGroupId && !this.groups.find(g => g.id === this.selectedGroupId)) {
          this.selectedGroupId = null;
          this.onGroupChange();
        }
      },
      error: () => {
        this.isLoadingGroups = false;
      }
    });
  }
  loadScreens() {
    this.isLoadingScreens = true;
    this.screenService.getScreens().subscribe({
      next: screens => {
        this.screens = screens;
        this.isLoadingScreens = false;
        this.updateScreensInGroup();
      },
      error: () => {
        this.isLoadingScreens = false;
      }
    });
  }
  loadAdvertisements() {
    this.advertisementsService.getAdvertisements({
      status: 'active',
      limit: 500
    }).subscribe({
      next: res => {
        this.allAdvertisements = res.advertisements || [];
      }
    });
  }
  onGroupChange() {
    this.selectedScreen = null;
    this.fullScreen = null;
    this.screenRegions = [];
    this.assignedAdIds = [];
    this.updateScreensInGroup();
  }
  updateScreensInGroup() {
    if (this.selectedGroupId == null) {
      this.screensInGroup = [];
      return;
    }
    const gid = Number(this.selectedGroupId);
    this.screensInGroup = this.screens.filter(s => {
      const sg = s.groupId != null ? Number(s.groupId) : null;
      return sg !== null && sg === gid;
    });
  }
  selectScreen(screen) {
    this.selectedScreen = screen;
    this.fullScreen = null;
    this.screenRegions = [];
    this.assignedAdIds = [];
    this.loadScreenDetails(screen.id);
  }
  loadScreenDetails(screenId) {
    this.isLoadingDetails = true;
    this.advertisementSchedules.clear();
    this.screenService.getScreenById(screenId).subscribe({
      next: screen => {
        this.fullScreen = screen;
        this.assignedAdIds = screen.assignedAds ? [...screen.assignedAds] : [];
        this.orientation = screen.orientation || 'landscape';
        this.screenSize = screen.screenSize || 'medium';
        this.isLoadingDetails = false;
        this.loadScreenRegions(screenId);
        this.loadScreenSchedules(screenId);
      },
      error: () => {
        this.isLoadingDetails = false;
        this.showMessage('error', 'Failed to load screen details');
      }
    });
  }
  loadScreenSchedules(screenId) {
    this.screenService.getScreenSchedules(screenId).subscribe({
      next: res => {
        this.advertisementSchedules.clear();
        (res.schedules || []).forEach(s => this.advertisementSchedules.set(s.adId, s));
        this.cdr.detectChanges();
      }
    });
  }
  getGridColumns() {
    if (this.screenRegions.length === 0) return 1;
    const sorted = [...this.screenRegions].sort((a, b) => {
      const aY = Math.round(a.yPosition);
      const bY = Math.round(b.yPosition);
      if (aY !== bY) return aY - bY;
      return Math.round(a.xPosition) - Math.round(b.xPosition);
    });
    const firstRowY = Math.round(sorted[0].yPosition);
    return sorted.filter(r => Math.round(r.yPosition) === firstRowY).length;
  }
  getGridRows() {
    if (this.screenRegions.length === 0) return 1;
    return Math.ceil(this.screenRegions.length / this.getGridColumns()) || 1;
  }
  getSortedRegions() {
    return [...this.screenRegions].sort((a, b) => {
      const aY = Math.round(a.yPosition);
      const bY = Math.round(b.yPosition);
      if (aY !== bY) return aY - bY;
      return Math.round(a.xPosition) - Math.round(b.xPosition);
    });
  }
  getAdvertisementSchedule(adId) {
    return this.advertisementSchedules.get(adId) || null;
  }
  getSelectedRegionIdForAd(adId) {
    const schedule = this.getAdvertisementSchedule(adId);
    if (schedule && schedule.regionId != null) return schedule.regionId;
    if (this.screenRegions.length === 1) return this.screenRegions[0].id;
    return null;
  }
  onRegionSelectChange(adId, regionId) {
    if (!this.selectedScreen) return;
    const schedule = this.getAdvertisementSchedule(adId);
    if (schedule) {
      this.screenService.updateAdvertisementSchedule(this.selectedScreen.id, adId, {
        regionId
      }).subscribe({
        next: res => {
          this.advertisementSchedules.set(adId, res.schedule);
          this.cdr.detectChanges();
        }
      });
    } else {
      this.screenService.createAdvertisementSchedule(this.selectedScreen.id, {
        screenId: this.selectedScreen.id,
        adId,
        regionId: regionId ?? undefined
      }).subscribe({
        next: res => {
          this.advertisementSchedules.set(adId, res.schedule);
          this.cdr.detectChanges();
        }
      });
    }
  }
  onRemoveAssignedAdvertisement(adId) {
    if (!this.selectedScreen || !this.fullScreen) return;
    const nextIds = (this.fullScreen.assignedAds || []).filter(id => id !== adId);
    this.screenService.updateScreen(this.selectedScreen.id, {
      name: this.fullScreen.name,
      advertisementIds: nextIds
    }).subscribe({
      next: screen => {
        this.fullScreen = screen;
        this.assignedAdIds = screen.assignedAds ? [...screen.assignedAds] : [];
        this.advertisementSchedules.delete(adId);
        this.showMessage('success', this.getTranslation('advertisementRemoved') || 'Advertisement removed');
        this.cdr.detectChanges();
      }
    });
  }
  formatFileSize(bytes) {
    if (!bytes || bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }
  openPreview(ad) {
    this.selectedAdForPreview = ad;
    this.showPreviewModal = true;
  }
  closePreview() {
    this.showPreviewModal = false;
    this.selectedAdForPreview = null;
  }
  formatDateForInput(date) {
    if (!date) return '';
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toISOString().split('T')[0];
  }
  openScheduleModal(adId) {
    this.editingScheduleAdId = adId;
    const existing = this.getAdvertisementSchedule(adId);
    const now = new Date();
    this.scheduleFormData = {
      regionId: existing?.regionId ?? (this.screenRegions.length === 1 ? this.screenRegions[0].id : null),
      startDate: existing?.startDate ? this.formatDateForInput(existing.startDate) : this.formatDateForInput(now),
      endDate: existing?.endDate ? this.formatDateForInput(existing.endDate) : '',
      startTime: existing?.startTime ?? now.toTimeString().slice(0, 5),
      endTime: existing?.endTime ?? '',
      priority: existing?.priority ?? 0,
      isActive: existing?.isActive !== false
    };
    this.showScheduleModal = true;
  }
  closeScheduleModal() {
    this.showScheduleModal = false;
    this.editingScheduleAdId = null;
  }
  saveAdvertisementSchedule() {
    if (!this.selectedScreen || this.editingScheduleAdId == null) return;
    const d = this.scheduleFormData;
    const payload = {
      screenId: this.selectedScreen.id,
      adId: this.editingScheduleAdId,
      regionId: d.regionId,
      startDate: d.startDate || null,
      endDate: d.endDate || null,
      startTime: d.startTime || null,
      endTime: d.endTime || null,
      isActive: d.isActive,
      priority: d.priority
    };
    const existing = this.getAdvertisementSchedule(this.editingScheduleAdId);
    const req = existing ? this.screenService.updateAdvertisementSchedule(this.selectedScreen.id, this.editingScheduleAdId, payload) : this.screenService.createAdvertisementSchedule(this.selectedScreen.id, payload);
    req.subscribe({
      next: res => {
        this.advertisementSchedules.set(this.editingScheduleAdId, res.schedule);
        this.closeScheduleModal();
        this.showMessage('success', this.getTranslation('scheduleSaved') || 'Schedule saved.');
        this.cdr.detectChanges();
      },
      error: err => {
        this.showMessage('error', err.error?.error || 'Failed to save schedule');
      }
    });
  }
  loadScreenRegions(screenId) {
    this.isLoadingRegions = true;
    this.screenService.getScreenRegions(screenId).subscribe({
      next: res => {
        this.screenRegions = res.regions || [];
        this.isLoadingRegions = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoadingRegions = false;
      }
    });
  }
  createGridLayout(rows, cols) {
    if (!this.selectedScreen) return;
    const screenId = this.selectedScreen.id;
    const widthPercent = 100 / cols;
    const heightPercent = 100 / rows;
    const createRegions = () => {
      const regions = [];
      let nextNumber = 1;
      const existing = this.screenRegions.filter(r => r.regionPosition && String(r.regionPosition).startsWith('custom_')).map(r => {
        const m = String(r.regionPosition).match(/custom_(\d+)/);
        return m ? parseInt(m[1], 10) : 0;
      });
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          while (existing.includes(nextNumber)) nextNumber++;
          existing.push(nextNumber);
          regions.push({
            screenId,
            regionType: 'custom',
            regionPosition: `custom_${nextNumber}`,
            widthPercentage: widthPercent,
            heightPercentage: heightPercent,
            xPosition: col * widthPercent,
            yPosition: row * heightPercent
          });
          nextNumber++;
        }
      }
      this.isCreatingRegions = true;
      let created = 0;
      const total = regions.length;
      regions.forEach(regionData => {
        this.screenService.createScreenRegion(screenId, regionData).subscribe({
          next: response => {
            if (response?.region) this.screenRegions.push(response.region);
            created++;
            if (created === total) {
              this.isCreatingRegions = false;
              this.showMessage('success', `Layout ${rows}×${cols} created (${total} regions).`);
              this.cdr.detectChanges();
            }
          },
          error: () => {
            created++;
            if (created === total) {
              this.isCreatingRegions = false;
              this.loadScreenRegions(screenId);
            }
          }
        });
      });
    };
    if (this.screenRegions.length > 0) {
      let deleted = 0;
      this.screenRegions.forEach(region => {
        this.screenService.deleteScreenRegion(screenId, region.id).subscribe({
          next: () => {
            deleted++;
            if (deleted === this.screenRegions.length) {
              this.screenRegions = [];
              createRegions();
            }
          },
          error: () => {
            deleted++;
            if (deleted === this.screenRegions.length) {
              this.screenRegions = [];
              createRegions();
            }
          }
        });
      });
    } else {
      createRegions();
    }
  }
  resetRegions() {
    if (!this.selectedScreen || !confirm(this.getTranslation('confirmResetRegions') || 'Reset all regions for this screen?')) return;
    const screenId = this.selectedScreen.id;
    if (this.screenRegions.length === 0) return;
    let deleted = 0;
    this.screenRegions.forEach(region => {
      this.screenService.deleteScreenRegion(screenId, region.id).subscribe({
        next: () => {
          deleted++;
          if (deleted === this.screenRegions.length) {
            this.screenRegions = [];
            this.showMessage('success', this.getTranslation('regionsReset') || 'Regions reset.');
            this.cdr.detectChanges();
          }
        }
      });
    });
  }
  toggleAd(adId) {
    const i = this.assignedAdIds.indexOf(adId);
    if (i >= 0) this.assignedAdIds.splice(i, 1);else this.assignedAdIds.push(adId);
  }
  isAdAssigned(adId) {
    return this.assignedAdIds.includes(adId);
  }
  saveAssignedAds() {
    if (!this.selectedScreen || !this.fullScreen) return;
    this.isSavingAds = true;
    this.screenService.updateScreen(this.selectedScreen.id, {
      name: this.fullScreen.name,
      advertisementIds: this.assignedAdIds
    }).subscribe({
      next: () => {
        this.isSavingAds = false;
        this.showMessage('success', this.getTranslation('adsSaved') || 'Advertisements saved.');
        this.loadScreenDetails(this.selectedScreen.id);
      },
      error: () => {
        this.isSavingAds = false;
        this.showMessage('error', 'Failed to save advertisements');
      }
    });
  }
  saveSettings() {
    if (!this.selectedScreen || !this.fullScreen) return;
    this.isSavingSettings = true;
    this.screenService.updateScreen(this.selectedScreen.id, {
      name: this.fullScreen.name,
      orientation: this.orientation,
      screenSize: this.screenSize
    }).subscribe({
      next: () => {
        this.isSavingSettings = false;
        this.showMessage('success', this.getTranslation('settingsSaved') || 'Settings saved.');
      },
      error: () => {
        this.isSavingSettings = false;
        this.showMessage('error', 'Failed to save settings');
      }
    });
  }
  applyToGroup() {
    if (!this.selectedScreen?.groupId) return;
    this.isApplyingToGroup = true;
    this.screenService.applyToGroup(this.selectedScreen.id).subscribe({
      next: res => {
        this.isApplyingToGroup = false;
        this.showMessage('success', res.message || (res.screenCount != null ? `Applied to ${res.screenCount} screen(s) in group.` : 'Applied to group.'));
        this.loadScreens();
      },
      error: err => {
        this.isApplyingToGroup = false;
        this.showMessage('error', err.error?.error || err.message || 'Failed to apply to group');
      }
    });
  }
  showMessage(type, text) {
    if (type === 'error') console.error(text);
    alert(text);
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function GroupLayoutComponent_Factory(t) {
      return new (t || GroupLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__.ScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_advertisements_service__WEBPACK_IMPORTED_MODULE_3__.AdvertisementsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: GroupLayoutComponent,
      selectors: [["app-group-layout"]],
      decls: 35,
      vars: 33,
      consts: [[1, "group-layout-container", 3, "dir"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "fas", "fa-layer-group", "me-2"], [1, "card-body"], [1, "form-label"], [1, "form-select", "mb-3", 3, "ngModelChange", "ngModel", "disabled"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "form-label", 4, "ngIf"], ["class", "text-muted py-2", 4, "ngIf"], ["class", "screens-in-group-list mb-3", 4, "ngIf"], ["class", "text-center py-3", 4, "ngIf"], ["class", "card mb-4", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-backdrop", "fade", 3, "click"], ["class", "modal fade", "tabindex", "-1", "role", "dialog", 3, "show", "display", 4, "ngIf"], [1, "text-muted", "py-2"], [1, "screens-in-group-list", "mb-3"], ["class", "screen-chip", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "screen-chip", 3, "click"], [1, "screen-name"], ["class", "screen-meta", 4, "ngIf"], [1, "screen-meta"], [1, "text-center", "py-3"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "ms-2"], [1, "fas", "fa-th-large", "me-2"], ["class", "text-center py-2", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-2"], ["class", "grid-preview-wrap mb-3", 4, "ngIf"], [1, "form-label", "mb-2"], [1, "btn-group", "d-flex", "flex-wrap", "gap-2", "mb-3"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "fas", "fa-square", "me-1"], [1, "fas", "fa-columns", "me-1"], [1, "fas", "fa-grip-lines", "me-1"], [1, "fas", "fa-th", "me-1"], ["type", "button", "class", "btn btn-outline-danger", 3, "disabled", "click", 4, "ngIf"], [1, "grid-preview-wrap", "mb-3"], [1, "grid-preview-label"], [1, "grid-preview"], ["class", "grid-cell", 4, "ngFor", "ngForOf"], [1, "grid-cell"], [1, "grid-cell-number"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click", "disabled"], [1, "fas", "fa-redo", "me-1"], [1, "fas", "fa-bullhorn", "me-2"], ["class", "text-muted small mb-3", 4, "ngIf"], ["class", "assigned-ads-section", 3, "mt-4", 4, "ngIf"], [1, "text-muted", "small", "mb-3"], [1, "assigned-ads-section"], [1, "assigned-ads-header"], [1, "fas", "fa-check-circle", "me-2"], [1, "row", "g-3", "mt-2"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4"], [1, "assigned-ad-card", "card", "h-100"], ["type", "button", 1, "btn", "btn-sm", "border-0", "position-absolute", "remove-ad-btn", 3, "click", "title"], [1, "fas", "fa-times"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "badge", "bg-success"], [1, "fas", "fa-check", "me-1"], [1, "mb-2"], [1, "badge", "bg-info", "me-1"], ["class", "text-muted small", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [1, "mt-3", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "flex-grow-1", 3, "click"], [1, "fas", "fa-play", "me-1"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click", "title"], [1, "fas", "fa-calendar-alt"], [1, "text-muted", "small"], [1, "mt-2"], [1, "form-label", "small", "mb-1"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [1, "schedule-info", "p-2", "bg-light", "rounded", "small"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-calendar-alt", "me-1"], ["type", "button", 1, "btn", "btn-sm", "btn-link", "p-0", 3, "click", "title"], [1, "fas", "fa-edit"], ["class", "mt-1 text-muted", 4, "ngIf"], [1, "mt-1", "text-muted"], [1, "fas", "fa-cog", "me-2"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "landscape"], ["value", "portrait"], ["value", "auto"], ["value", "small"], ["value", "medium"], ["value", "large"], ["type", "button", 1, "btn", "btn-primary", "mt-3", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", 4, "ngIf"], [1, "fas", "fa-save", "me-1"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "mb-3"], ["type", "button", 1, "btn", "btn-success", "btn-lg", 3, "click", "disabled"], [1, "fas", "fa-object-group", "me-1"], [1, "modal-body"], ["class", "text-center mb-3", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["class", "text-muted small mb-0 mt-2", 4, "ngIf"], [1, "text-center", "mb-3"], [1, "img-fluid", 2, "max-height", "70vh", 3, "src", "alt"], [1, "text-center"], ["controls", "", 1, "w-100", 2, "max-height", "70vh", 3, "src"], [1, "text-muted", "small", "mb-0", "mt-2"], ["role", "document", 1, "modal-dialog"], [1, "fas", "fa-calendar-alt", "me-2"], ["class", "mb-3", 4, "ngIf"], [1, "row", "g-3", "mb-3"], [1, "col-6"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "time", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "100", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-check", "mb-3"], ["type", "checkbox", "id", "scheduleActive", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "scheduleActive", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
      template: function GroupLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "select", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GroupLayoutComponent_Template_select_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedGroupId, $event) || (ctx.selectedGroupId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GroupLayoutComponent_Template_select_ngModelChange_9_listener() {
            return ctx.onGroupChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, GroupLayoutComponent_option_12_Template, 2, 2, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, GroupLayoutComponent_label_13_Template, 2, 1, "label", 10)(14, GroupLayoutComponent_div_14_Template, 2, 1, "div", 11)(15, GroupLayoutComponent_div_15_Template, 2, 1, "div", 12)(16, GroupLayoutComponent_div_16_Template, 4, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, GroupLayoutComponent_div_17_Template, 8, 3, "div", 14)(18, GroupLayoutComponent_div_18_Template, 8, 3, "div", 14)(19, GroupLayoutComponent_div_19_Template, 31, 14, "div", 14)(20, GroupLayoutComponent_div_20_Template, 8, 4, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "h5", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_Template_button_click_27_listener() {
            return ctx.closePreview();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, GroupLayoutComponent_div_28_Template, 4, 3, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 22)(30, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_Template_button_click_30_listener() {
            return ctx.closePreview();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_Template_div_click_32_listener() {
            return ctx.closePreview();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, GroupLayoutComponent_div_33_Template, 41, 20, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupLayoutComponent_Template_div_click_34_listener() {
            return ctx.closeScheduleModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("groupLayout") || "Group Layout", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("selectGroup") || "Select Group");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedGroupId);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isLoadingGroups || ctx.groups.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("selectGroup") || "Select a group...");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.groups);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedGroupId);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedGroupId && ctx.screensInGroup.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.screensInGroup.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedScreen && ctx.isLoadingDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fullScreen && !ctx.isLoadingDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fullScreen && !ctx.isLoadingDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fullScreen && !ctx.isLoadingDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fullScreen && !ctx.isLoadingDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx.showPreviewModal ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("show", ctx.showPreviewModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.getTranslation("advertisementDetails") || "Advertisement", ": ", ctx.selectedAdForPreview == null ? null : ctx.selectedAdForPreview.title, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedAdForPreview);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getTranslation("close") || "Close");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx.showPreviewModal ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("show", ctx.showPreviewModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showScheduleModal && ctx.editingScheduleAdId !== null);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx.showScheduleModal ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("show", ctx.showScheduleModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
      styles: [".group-layout-container[_ngcontent-%COMP%]   .grid-preview-wrap[_ngcontent-%COMP%] {\n  border: 1px solid #28a745;\n  border-radius: 8px;\n  padding: 10px 12px;\n  background: #f8f9fa;\n}\n.group-layout-container[_ngcontent-%COMP%]   .grid-preview-wrap[_ngcontent-%COMP%]   .grid-preview-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #495057;\n  margin-bottom: 8px;\n}\n.group-layout-container[_ngcontent-%COMP%]   .grid-preview-wrap[_ngcontent-%COMP%]   .grid-preview[_ngcontent-%COMP%] {\n  display: grid !important;\n  grid-auto-flow: row !important;\n  gap: 4px !important;\n  min-height: 80px;\n  max-height: 140px;\n  width: 100%;\n}\n.group-layout-container[_ngcontent-%COMP%]   .grid-preview-wrap[_ngcontent-%COMP%]   .grid-preview[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%] {\n  border: 1px solid #28a745;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  min-height: 36px;\n}\n.group-layout-container[_ngcontent-%COMP%]   .grid-preview-wrap[_ngcontent-%COMP%]   .grid-preview[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%]   .grid-cell-number[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #333;\n}\n.group-layout-container[_ngcontent-%COMP%]   .assigned-ads-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #28a745;\n  color: #fff;\n  border-radius: 8px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.group-layout-container[_ngcontent-%COMP%]   .assigned-ad-card[_ngcontent-%COMP%] {\n  position: relative;\n  border: 2px solid #28a745 !important;\n  border-radius: 12px;\n  background: linear-gradient(to bottom, #ffffff 0%, #f0fff4 100%);\n}\n.group-layout-container[_ngcontent-%COMP%]   .assigned-ad-card[_ngcontent-%COMP%]   .remove-ad-btn[_ngcontent-%COMP%] {\n  top: -2px;\n  right: 4px;\n  z-index: 2;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #dc3545;\n  font-size: 18px;\n  font-weight: 700;\n}\n.group-layout-container[_ngcontent-%COMP%]   .assigned-ad-card[_ngcontent-%COMP%]   .remove-ad-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 53, 69, 0.1);\n}\n.group-layout-container[_ngcontent-%COMP%]   .ad-checkbox-list[_ngcontent-%COMP%] {\n  max-height: 280px;\n  overflow-y: auto;\n  padding-right: 8px;\n}\n.group-layout-container[_ngcontent-%COMP%]   .screens-in-group-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.group-layout-container[_ngcontent-%COMP%]   .screen-chip[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 2px solid #e9ecef;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: border-color 0.2s, background 0.2s;\n}\n.group-layout-container[_ngcontent-%COMP%]   .screen-chip[_ngcontent-%COMP%]:hover {\n  border-color: #00695c;\n  background: rgba(0, 105, 92, 0.06);\n}\n.group-layout-container[_ngcontent-%COMP%]   .screen-chip.selected[_ngcontent-%COMP%] {\n  border-color: #00695c;\n  background: rgba(0, 105, 92, 0.12);\n}\n.group-layout-container[_ngcontent-%COMP%]   .screen-chip[_ngcontent-%COMP%]   .screen-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-inline-end: 8px;\n}\n.group-layout-container[_ngcontent-%COMP%]   .screen-chip[_ngcontent-%COMP%]   .screen-meta[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NyZWVucy9jb21wb25lbnRzL2dyb3VwLWxheW91dC9ncm91cC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUdJO0VBQ0Usd0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFETjtBQUdNO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURSO0FBR1E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQURWO0FBT0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0VBQUE7QUFOSjtBQVFJO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5OO0FBUU07RUFDRSxrQ0FBQTtBQU5SO0FBV0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFUSjtBQVlFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBVko7QUFhRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtBQVhKO0FBYUk7RUFDRSxxQkFBQTtFQUNBLGtDQUFBO0FBWE47QUFjSTtFQUNFLHFCQUFBO0VBQ0Esa0NBQUE7QUFaTjtBQWVJO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQWJOO0FBZ0JJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBZE4iLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAtbGF5b3V0LWNvbnRhaW5lciB7XHJcbiAgLmdyaWQtcHJldmlldy13cmFwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG5cclxuICAgIC5ncmlkLXByZXZpZXctbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1wcmV2aWV3IHtcclxuICAgICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xyXG4gICAgICBncmlkLWF1dG8tZmxvdzogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGdhcDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5ncmlkLWNlbGwge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XHJcblxyXG4gICAgICAgIC5ncmlkLWNlbGwtbnVtYmVyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFzc2lnbmVkLWFkcy1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI4YTc0NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFzc2lnbmVkLWFkLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI4YTc0NSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYgMCUsICNmMGZmZjQgMTAwJSk7XHJcblxyXG4gICAgLnJlbW92ZS1hZC1idG4ge1xyXG4gICAgICB0b3A6IC0ycHg7XHJcbiAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWQtY2hlY2tib3gtbGlzdCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyODBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAuc2NyZWVucy1pbi1ncm91cC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2NyZWVuLWNoaXAge1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYmFja2dyb3VuZCAwLjJzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTA1LCA5MiwgMC4wNik7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMDUsIDkyLCAwLjEyKTtcclxuICAgIH1cclxuXHJcbiAgICAuc2NyZWVuLW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBtYXJnaW4taW5saW5lLWVuZDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zY3JlZW4tbWV0YSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6265:
/*!**************************************************************************************!*\
  !*** ./src/app/features/screens/components/screen-create/screen-create.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenCreateComponent: () => (/* binding */ ScreenCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/screen.service */ 2588);
/* harmony import */ var _core_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/location.service */ 3415);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/user.service */ 3443);
/* harmony import */ var _core_services_advertisements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/advertisements.service */ 9282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);












function ScreenCreateComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54)(1, "div", 3)(2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_11_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.showSuccessMessage = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.successMessage, " ");
  }
}
function ScreenCreateComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("screenNameRequired") || "Screen name is required", " ");
  }
}
function ScreenCreateComponent_div_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_55_div_1_Template_div_click_0_listener($event) {
      const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      ctx_r1.selectGroup(group_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", group_r5.name, " ");
  }
}
function ScreenCreateComponent_div_55_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("noGroupsAvailable") || "No groups available", " ");
  }
}
function ScreenCreateComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_55_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ScreenCreateComponent_div_55_div_1_Template, 2, 1, "div", 60)(2, ScreenCreateComponent_div_55_div_2_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.availableGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.availableGroups.length === 0);
  }
}
function ScreenCreateComponent_div_68_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_68_div_1_Template_div_click_0_listener($event) {
      const subsite_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      ctx_r1.selectSubsite(subsite_r8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subsite_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", subsite_r8.name, " ");
  }
}
function ScreenCreateComponent_div_68_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("noSubsitesAvailable") || "No subsites available", " ");
  }
}
function ScreenCreateComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_68_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ScreenCreateComponent_div_68_div_1_Template, 2, 1, "div", 60)(2, ScreenCreateComponent_div_68_div_2_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.availableSubsites);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.availableSubsites.length === 0);
  }
}
function ScreenCreateComponent_div_76_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_76_div_1_Template_div_click_0_listener($event) {
      const section_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      ctx_r1.selectSection(section_r11);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", section_r11.name, " ");
  }
}
function ScreenCreateComponent_div_76_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("noSectionsAvailable") || "No sections available", " ");
  }
}
function ScreenCreateComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_76_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ScreenCreateComponent_div_76_div_1_Template, 2, 1, "div", 60)(2, ScreenCreateComponent_div_76_div_2_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.availableSections);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.availableSections.length === 0);
  }
}
function ScreenCreateComponent_div_89_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_89_div_1_Template_div_click_0_listener($event) {
      const user_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      ctx_r1.toggleUser(user_r14.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ScreenCreateComponent_div_89_div_1_Template_input_change_1_listener() {
      const user_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.toggleUser(user_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r1.isUserSelected(user_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r14.username);
  }
}
function ScreenCreateComponent_div_89_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("noUsersAvailable") || "No users available", " ");
  }
}
function ScreenCreateComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_89_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ScreenCreateComponent_div_89_div_1_Template, 4, 2, "div", 64)(2, ScreenCreateComponent_div_89_div_2_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.availableUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.availableUsers.length === 0);
  }
}
function ScreenCreateComponent_button_106_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 70);
  }
}
function ScreenCreateComponent_button_106_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 71);
  }
}
function ScreenCreateComponent_button_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_button_106_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.resetScreen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ScreenCreateComponent_button_106_i_1_Template, 1, 0, "i", 68)(2, ScreenCreateComponent_button_106_span_2_Template, 1, 0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", ctx_r1.getTranslation("resetScreenHelp") || "Clear all schedules, ad assignments, and regions for this screen to prevent ghost playback");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.isResetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isResetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isResetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("resetScreen") || "Reset screen", " ");
  }
}
function ScreenCreateComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 72)(1, "div", 73)(2, "div", 74)(3, "div", 75)(4, "h5", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_110_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.showCreateGroupModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 79)(10, "div", 80)(11, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ScreenCreateComponent_div_110_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newGroupName, $event) || (ctx_r1.newGroupName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 80)(17, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "textarea", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ScreenCreateComponent_div_110_Template_textarea_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newGroupDescription, $event) || (ctx_r1.newGroupDescription = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 83)(21, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_110_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.createGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_110_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.showCreateGroupModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("display", ctx_r1.showCreateGroupModal ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx_r1.showCreateGroupModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getTranslation("createGroup") || "Create Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("groupName") || "Group Name", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newGroupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterGroupName") || "Enter group name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getTranslation("description") || "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newGroupDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("enterDescription") || "Enter description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.newGroupName.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("create") || "Create", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("cancel") || "Cancel", " ");
  }
}
function ScreenCreateComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 86);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx_r1.showCreateGroupModal);
  }
}
function ScreenCreateComponent_div_112_div_10_label_1_video_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "video", 105);
  }
  if (rf & 2) {
    const ad_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getFileUrl(ad_r19.fileUrl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ScreenCreateComponent_div_112_div_10_label_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 106);
  }
  if (rf & 2) {
    const ad_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getAdPreviewUrl(ad_r19), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ad_r19.title);
  }
}
function ScreenCreateComponent_div_112_div_10_label_1_div_5_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 111);
  }
}
function ScreenCreateComponent_div_112_div_10_label_1_div_5_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 112);
  }
}
function ScreenCreateComponent_div_112_div_10_label_1_div_5_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 113);
  }
}
function ScreenCreateComponent_div_112_div_10_label_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ScreenCreateComponent_div_112_div_10_label_1_div_5_i_1_Template, 1, 0, "i", 108)(2, ScreenCreateComponent_div_112_div_10_label_1_div_5_i_2_Template, 1, 0, "i", 109)(3, ScreenCreateComponent_div_112_div_10_label_1_div_5_i_3_Template, 1, 0, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ad_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ad_r19.type === "presentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ad_r19.type === "document");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ad_r19.type !== "presentation" && ad_r19.type !== "document");
  }
}
function ScreenCreateComponent_div_112_div_10_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 98)(1, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ScreenCreateComponent_div_112_div_10_label_1_Template_input_change_1_listener() {
      const ad_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.togglePendingAdvertisement(ad_r19.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ScreenCreateComponent_div_112_div_10_label_1_video_3_Template, 1, 1, "video", 101)(4, ScreenCreateComponent_div_112_div_10_label_1_img_4_Template, 1, 2, "img", 102)(5, ScreenCreateComponent_div_112_div_10_label_1_div_5_Template, 4, 3, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ad_r19 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("ad-picker-card--selected", ad_r19.id != null && ctx_r1.isPendingAdvertisementSelected(ad_r19.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ad_r19.id != null && ctx_r1.isPendingAdvertisementSelected(ad_r19.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.showVideoPreview(ad_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.showVideoPreview(ad_r19) && ctx_r1.showImagePreview(ad_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.showVideoPreview(ad_r19) && !ctx_r1.showImagePreview(ad_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ad_r19.title);
  }
}
function ScreenCreateComponent_div_112_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ScreenCreateComponent_div_112_div_10_label_1_Template, 8, 7, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.availableAdvertisements);
  }
}
function ScreenCreateComponent_div_112_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("noAdvertisementsAvailable") || "No advertisements available", " ");
  }
}
function ScreenCreateComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 87)(1, "div", 88)(2, "div", 74)(3, "div", 75)(4, "h5", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_112_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.closeAdvertisementModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ScreenCreateComponent_div_112_div_10_Template, 2, 1, "div", 91)(11, ScreenCreateComponent_div_112_p_11_Template, 2, 1, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 93)(13, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_112_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.closeAdvertisementModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_112_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.submitAdvertisementModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("display", ctx_r1.showAdvertisementModal ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx_r1.showAdvertisementModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-labelledby", "adPickerTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getTranslation("selectAdvertisements") || "Select Advertisements");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", ctx_r1.getTranslation("cancel") || "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.availableAdvertisements.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.availableAdvertisements.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("cancel") || "Cancel", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("submit") || "Submit", " ");
  }
}
function ScreenCreateComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_div_113_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.closeAdvertisementModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx_r1.showAdvertisementModal);
  }
}
class ScreenCreateComponent {
  constructor(languageService, translationService, screenService, locationService, userService, advertisementsService, router, route, fb) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.screenService = screenService;
    this.locationService = locationService;
    this.userService = userService;
    this.advertisementsService = advertisementsService;
    this.router = router;
    this.route = route;
    this.fb = fb;
    this.currentLanguage = 'ar';
    this.editingScreen = null;
    this.showSuccessMessage = false;
    this.successMessage = '';
    this.isResetting = false;
    // Location selection
    this.availableSubsites = [];
    this.availableSections = [];
    this.availableSpecialDivisions = [];
    this.selectedSubsite = null;
    this.selectedSection = null;
    this.selectedSpecialDivision = null;
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
    // User selection
    this.availableUsers = [];
    this.selectedUserIds = [];
    this.showUserDropdown = false;
    // Advertisement selection (modal picker with previews)
    this.availableAdvertisements = [];
    this.selectedAdvertisementIds = [];
    this.showAdvertisementModal = false;
    /** Working set while the picker modal is open; committed on Submit */
    this.pendingAdvertisementIds = [];
    // Screen groups
    this.availableGroups = [];
    this.selectedGroup = null;
    this.showGroupDropdown = false;
    this.showCreateGroupModal = false;
    this.newGroupName = '';
    this.newGroupDescription = '';
    this.manualForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      ipAddress: [''],
      macAddress: [''],
      groupId: [null],
      subsiteId: [null],
      sectionId: [null],
      specialDivisionId: [null],
      assignedUserIds: [[]],
      advertisementIds: [[]],
      // Display settings
      orientation: ['landscape'],
      screenSize: ['medium'],
      screenWidth: [null],
      screenHeight: [null]
    });
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadLocationData();
    this.loadUsers();
    this.loadAdvertisements();
    this.loadScreenGroups();
    // Check query params
    this.route.queryParams.subscribe(params => {
      // If editing existing screen (check both 'edit' and 'id' for backward compatibility)
      if (params['edit']) {
        const screenId = parseInt(params['edit']);
        if (!isNaN(screenId)) {
          this.loadScreenForEdit(screenId);
        }
      } else if (params['id']) {
        const screenId = parseInt(params['id']);
        if (!isNaN(screenId)) {
          this.loadScreenForEdit(screenId);
        }
      }
      // If registering discovered device
      else if (params['deviceId']) {
        this.populateFormFromDevice(params);
      }
    });
  }
  populateFormFromDevice(params) {
    // Pre-fill form with device details
    this.manualForm.patchValue({
      name: params['name'] || '',
      ipAddress: params['ipAddress'] || '',
      macAddress: params['macAddress'] || ''
    });
  }
  loadScreenForEdit(screenId) {
    // Use getScreenById API to fetch full screen details
    this.screenService.getScreenById(screenId).subscribe({
      next: screen => {
        this.editingScreen = screen;
        this.populateForm(screen);
      },
      error: error => {
        console.error('Error loading screen for edit:', error);
        alert(this.getTranslation('errorLoadingScreen') || 'Error loading screen details');
      }
    });
  }
  populateForm(screen) {
    this.manualForm.patchValue({
      name: screen.name,
      ipAddress: screen.ipAddress || '',
      macAddress: screen.macAddress || '',
      groupId: screen.groupId,
      subsiteId: screen.subsiteId,
      sectionId: screen.sectionId,
      specialDivisionId: screen.specialDivisionId,
      assignedUserIds: screen.assignedUserIds || (screen.assignedUserId ? [screen.assignedUserId] : []),
      advertisementIds: screen.assignedAds || [],
      // Display settings
      orientation: screen.orientation || 'landscape',
      screenSize: screen.screenSize || 'medium',
      screenWidth: screen.screenWidth || null,
      screenHeight: screen.screenHeight || null
    });
    this.selectedAdvertisementIds = screen.assignedAds || [];
    // Update form control with advertisement IDs
    this.manualForm.patchValue({
      advertisementIds: this.selectedAdvertisementIds
    });
    if (screen.subsiteId) {
      this.selectedSubsite = this.availableSubsites.find(s => s.id === screen.subsiteId) || null;
      if (this.selectedSubsite) {
        this.loadSections();
      }
    }
    if (screen.sectionId) {
      this.selectedSection = this.availableSections.find(s => s.id === screen.sectionId) || null;
      if (this.selectedSection) {
        this.loadSpecialDivisions();
      }
    }
    if (screen.specialDivisionId) {
      this.selectedSpecialDivision = this.availableSpecialDivisions.find(d => d.id === screen.specialDivisionId) || null;
    }
    if (screen.assignedUserId) {
      // Support both single user (for backward compatibility) and multiple users
      this.selectedUserIds = Array.isArray(screen.assignedUserId) ? screen.assignedUserId : [screen.assignedUserId];
    } else if (screen.assignedUserIds && Array.isArray(screen.assignedUserIds)) {
      this.selectedUserIds = screen.assignedUserIds;
    }
    if (screen.groupId) {
      this.selectedGroup = this.availableGroups.find(g => g.id === screen.groupId) || null;
    }
  }
  formatDateForInput(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  handleClickOutside(event) {
    const target = event.target;
    if (!target.closest('.selection-card') && !target.closest('.dropdown-menu')) {
      this.showSubsiteDropdown = false;
      this.showSectionDropdown = false;
      this.showSpecialDivisionDropdown = false;
      this.showUserDropdown = false;
      this.showGroupDropdown = false;
    }
  }
  // ========== Data Loading Methods ==========
  loadLocationData() {
    this.locationService.getSubsites().subscribe({
      next: subsites => {
        this.availableSubsites = subsites;
      },
      error: error => {
        console.error('Error loading subsites:', error);
      }
    });
  }
  loadUsers() {
    this.userService.getUsers().subscribe({
      next: users => {
        this.availableUsers = users.filter(u => u.isActive);
      },
      error: error => {
        console.error('Error loading users:', error);
      }
    });
  }
  loadAdvertisements() {
    this.advertisementsService.getAdvertisements().subscribe({
      next: response => {
        this.availableAdvertisements = response.advertisements || response;
      },
      error: error => {
        console.error('Error loading advertisements:', error);
      }
    });
  }
  loadScreenGroups() {
    this.screenService.getScreenGroups().subscribe({
      next: groups => {
        this.availableGroups = groups;
      },
      error: error => {
        console.error('Error loading screen groups:', error);
      }
    });
  }
  // ========== Location Selection Methods ==========
  openSubsiteSelector() {
    // Close other dropdowns
    this.showGroupDropdown = false;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
    this.showUserDropdown = false;
    // Toggle subsite dropdown
    this.showSubsiteDropdown = !this.showSubsiteDropdown;
    // Load subsites if not loaded
    if (this.showSubsiteDropdown && this.availableSubsites.length === 0) {
      this.loadLocationData();
    }
  }
  selectSubsite(subsite) {
    this.selectedSubsite = subsite;
    this.selectedSection = null;
    this.selectedSpecialDivision = null;
    this.showSubsiteDropdown = false;
    this.manualForm.patchValue({
      subsiteId: subsite.id
    });
    this.loadSections();
  }
  loadSections() {
    if (!this.selectedSubsite) return;
    this.locationService.getSections().subscribe({
      next: sections => {
        this.availableSections = sections.filter(s => s.location === this.selectedSubsite?.name);
      },
      error: error => {
        console.error('Error loading sections:', error);
        this.availableSections = [];
      }
    });
  }
  openSectionSelector() {
    if (!this.selectedSubsite) return;
    // Close other dropdowns
    this.showGroupDropdown = false;
    this.showSubsiteDropdown = false;
    this.showSpecialDivisionDropdown = false;
    this.showUserDropdown = false;
    // Toggle section dropdown
    this.showSectionDropdown = !this.showSectionDropdown;
    // Load sections if not loaded
    if (this.showSectionDropdown && this.availableSections.length === 0) {
      this.loadSections();
    }
  }
  selectSection(section) {
    this.selectedSection = section;
    this.selectedSpecialDivision = null;
    this.showSectionDropdown = false;
    this.manualForm.patchValue({
      sectionId: section.id
    });
    this.loadSpecialDivisions();
  }
  loadSpecialDivisions() {
    if (!this.selectedSection) return;
    this.locationService.getSpecialDivisions().subscribe({
      next: divisions => {
        this.availableSpecialDivisions = divisions.filter(d => d.location === this.selectedSection?.location);
      },
      error: error => {
        console.error('Error loading special divisions:', error);
        this.availableSpecialDivisions = [];
      }
    });
  }
  openSpecialDivisionSelector() {
    if (!this.selectedSection) return;
    // Close other dropdowns
    this.showGroupDropdown = false;
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    this.showUserDropdown = false;
    // Toggle special division dropdown
    this.showSpecialDivisionDropdown = !this.showSpecialDivisionDropdown;
    // Load special divisions if not loaded
    if (this.showSpecialDivisionDropdown && this.availableSpecialDivisions.length === 0) {
      this.loadSpecialDivisions();
    }
  }
  selectSpecialDivision(division) {
    this.selectedSpecialDivision = division;
    this.showSpecialDivisionDropdown = false;
    this.manualForm.patchValue({
      specialDivisionId: division.id
    });
  }
  // ========== User Selection Methods ==========
  openUserSelector() {
    // Close other dropdowns
    this.showGroupDropdown = false;
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
    // Toggle user dropdown
    this.showUserDropdown = !this.showUserDropdown;
    // Load users if not loaded
    if (this.showUserDropdown && this.availableUsers.length === 0) {
      this.loadUsers();
    }
  }
  toggleUser(userId) {
    const index = this.selectedUserIds.indexOf(userId);
    if (index > -1) {
      this.selectedUserIds.splice(index, 1);
    } else {
      this.selectedUserIds.push(userId);
    }
    this.manualForm.patchValue({
      assignedUserIds: this.selectedUserIds
    });
  }
  isUserSelected(userId) {
    return this.selectedUserIds.includes(userId);
  }
  // ========== Advertisement Selection Methods ==========
  openAdvertisementSelector() {
    this.showGroupDropdown = false;
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
    this.showUserDropdown = false;
    const open = () => {
      this.pendingAdvertisementIds = [...this.selectedAdvertisementIds];
      this.showAdvertisementModal = true;
    };
    if (this.availableAdvertisements.length === 0) {
      this.advertisementsService.getAdvertisements().subscribe({
        next: response => {
          this.availableAdvertisements = response.advertisements || response;
          open();
        },
        error: error => {
          console.error('Error loading advertisements:', error);
        }
      });
    } else {
      open();
    }
  }
  closeAdvertisementModal() {
    this.showAdvertisementModal = false;
  }
  submitAdvertisementModal() {
    this.selectedAdvertisementIds = [...this.pendingAdvertisementIds];
    this.manualForm.patchValue({
      advertisementIds: this.selectedAdvertisementIds
    });
    this.showAdvertisementModal = false;
  }
  togglePendingAdvertisement(adId) {
    if (adId == null) return;
    const index = this.pendingAdvertisementIds.indexOf(adId);
    if (index > -1) {
      this.pendingAdvertisementIds.splice(index, 1);
    } else {
      this.pendingAdvertisementIds.push(adId);
    }
  }
  isPendingAdvertisementSelected(adId) {
    return this.pendingAdvertisementIds.includes(adId);
  }
  getAdPreviewUrl(ad) {
    const url = ad.thumbnailUrl || ad.fileUrl;
    return this.getFileUrl(url);
  }
  getFileUrl(fileUrl) {
    if (!fileUrl) return fileUrl;
    const base = (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || '').replace(/\/api\/?$/, '').trim();
    if (!base) return fileUrl;
    try {
      const u = new URL(fileUrl);
      if (u.hostname === 'localhost' && (u.port === '3000' || !u.port)) {
        return fileUrl.replace(u.origin, base);
      }
    } catch {
      /* relative or invalid */
    }
    return fileUrl;
  }
  isImageUrl(url) {
    if (!url) return false;
    return /\.(jpg|jpeg|png|gif|webp|bmp|svg|ico|tiff|tif|heic|heif|avif|jfif)$/i.test(url);
  }
  showImagePreview(ad) {
    return ad.type === 'image' || this.isImageUrl(ad.fileUrl || '');
  }
  showVideoPreview(ad) {
    return ad.type === 'video';
  }
  // ========== Group Selection Methods ==========
  openGroupSelector() {
    // Close other dropdowns
    this.showSubsiteDropdown = false;
    this.showSectionDropdown = false;
    this.showSpecialDivisionDropdown = false;
    this.showUserDropdown = false;
    // Toggle group dropdown
    this.showGroupDropdown = !this.showGroupDropdown;
    // Load groups if not loaded
    if (this.showGroupDropdown && this.availableGroups.length === 0) {
      this.loadScreenGroups();
    }
  }
  selectGroup(group) {
    this.selectedGroup = group;
    this.showGroupDropdown = false;
    this.manualForm.patchValue({
      groupId: group.id
    });
  }
  openCreateGroupModal() {
    this.showCreateGroupModal = true;
    this.newGroupName = '';
    this.newGroupDescription = '';
  }
  createGroup() {
    if (!this.newGroupName.trim()) return;
    this.screenService.createScreenGroup(this.newGroupName.trim(), this.newGroupDescription.trim() || undefined).subscribe({
      next: group => {
        this.availableGroups.push(group);
        this.selectedGroup = group;
        this.manualForm.patchValue({
          groupId: group.id
        });
        this.showCreateGroupModal = false;
        this.newGroupName = '';
        this.newGroupDescription = '';
      },
      error: error => {
        console.error('Error creating group:', error);
        alert('Failed to create group: ' + (error.error?.error || error.message));
      }
    });
  }
  // ========== Screen Creation ==========
  resetForm() {
    this.manualForm.reset();
    this.selectedSubsite = null;
    this.selectedSection = null;
    this.selectedSpecialDivision = null;
    this.selectedUserIds = [];
    this.selectedGroup = null;
    this.selectedAdvertisementIds = [];
  }
  saveScreen() {
    if (this.manualForm.invalid) {
      this.manualForm.markAllAsTouched();
      return;
    }
    const formValue = this.manualForm.value;
    const screenData = {
      name: formValue.name,
      ipAddress: formValue.ipAddress || null,
      macAddress: formValue.macAddress || null,
      groupId: formValue.groupId || null,
      subsiteId: formValue.subsiteId || null,
      sectionId: formValue.sectionId || null,
      specialDivisionId: formValue.specialDivisionId || null,
      assignedUserIds: this.selectedUserIds.length > 0 ? this.selectedUserIds : [],
      advertisementIds: this.selectedAdvertisementIds.length > 0 ? this.selectedAdvertisementIds : formValue.advertisementIds || [],
      // Display settings
      orientation: formValue.orientation || null,
      screenSize: formValue.screenSize || null,
      screenWidth: formValue.screenWidth ? parseInt(formValue.screenWidth) : null,
      screenHeight: formValue.screenHeight ? parseInt(formValue.screenHeight) : null
    };
    // Combine date and time
    if (this.editingScreen) {
      // Update existing screen
      this.screenService.updateScreen(this.editingScreen.id, screenData).subscribe({
        next: screen => {
          this.showSuccessMessage = true;
          this.successMessage = this.getTranslation('screenUpdatedSuccessfully') || 'Screen updated successfully';
          setTimeout(() => {
            this.showSuccessMessage = false;
            this.router.navigate(['/screens/list']);
          }, 2000);
        },
        error: error => {
          console.error('Error updating screen:', error);
          alert('Failed to update screen: ' + (error.error?.error || error.message));
        }
      });
    } else {
      // Create new screen
      this.screenService.createScreen(screenData).subscribe({
        next: screen => {
          this.showSuccessMessage = true;
          this.successMessage = this.getTranslation('screenCreatedSuccessfully') || 'Screen created successfully';
          this.resetForm();
          setTimeout(() => {
            this.showSuccessMessage = false;
            this.router.navigate(['/screens/list']);
          }, 2000);
        },
        error: error => {
          console.error('Error creating screen:', error);
          alert('Failed to create screen: ' + (error.error?.error || error.message));
        }
      });
    }
  }
  /**
   * Reset all screen-related data (schedules, ad assignments, regions) for this screen.
   * Clears ghost playback; leaves screen with one default full-screen region.
   */
  resetScreen() {
    if (!this.editingScreen?.id) return;
    const msg = this.getTranslation('confirmResetScreen') || 'Reset this screen? All schedules, ad assignments, and regions will be cleared. A single full-screen region will be recreated. This helps prevent ghost video playback.';
    if (!confirm(msg)) return;
    this.isResetting = true;
    this.screenService.resetScreen(this.editingScreen.id).subscribe({
      next: res => {
        this.isResetting = false;
        this.showSuccessMessage = true;
        this.successMessage = res.message || this.getTranslation('screenResetSuccessfully') || 'Screen reset successfully.';
        if (typeof window !== 'undefined') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        this.loadScreenForEdit(this.editingScreen.id);
      },
      error: err => {
        this.isResetting = false;
        console.error('Error resetting screen:', err);
        alert('Failed to reset screen: ' + (err.error?.error || err.message));
      }
    });
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function ScreenCreateComponent_Factory(t) {
      return new (t || ScreenCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_screen_service__WEBPACK_IMPORTED_MODULE_3__.ScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_location_service__WEBPACK_IMPORTED_MODULE_4__.LocationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_advertisements_service__WEBPACK_IMPORTED_MODULE_6__.AdvertisementsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ScreenCreateComponent,
      selectors: [["app-screen-create"]],
      hostBindings: function ScreenCreateComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_click_HostBindingHandler($event) {
            return ctx.handleClickOutside($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"]);
        }
      },
      decls: 114,
      vars: 60,
      consts: [[1, "screen-create-container", 3, "dir"], [1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "page-title"], [1, "fas", "fa-plus-circle", "me-2"], ["routerLink", "/screens/list", 1, "btn", "btn-secondary"], [1, "fas", "fa-arrow-left", "me-2"], ["class", "row mb-3", 4, "ngIf"], [1, "row"], [1, "card"], [1, "card-header", "bg-success", "text-white"], [1, "mb-0"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "form-section", "mb-4"], [1, "section-title"], [1, "fas", "fa-info-circle", "me-2"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-md-3"], ["type", "text", "formControlName", "ipAddress", "placeholder", "192.168.1.100", 1, "form-control"], ["type", "text", "formControlName", "macAddress", "placeholder", "00:00:00:00:00:00", 1, "form-control"], [1, "fas", "fa-layer-group", "me-2"], [1, "selection-cards"], [1, "selection-card"], [1, "card-label"], [1, "card-content", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "fas", "fa-chevron-down"], ["type", "button", 1, "btn", "btn-outline-success", "btn-sm", "ms-2", 3, "click"], [1, "fas", "fa-plus"], ["class", "dropdown-menu", 3, "click", 4, "ngIf"], [1, "fas", "fa-map-marker-alt", "me-2"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click", "disabled"], [1, "fas", "fa-user", "me-2"], [1, "fas", "fa-ad", "me-2"], [1, "selection-card", "full-width"], [1, "fas", "fa-th-large"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary"], [1, "fas", "fa-save", "me-2"], ["type", "button", "class", "btn btn-warning", 3, "disabled", "title", "click", 4, "ngIf"], ["type", "button", "routerLink", "/screens/list", 1, "btn", "btn-secondary"], [1, "fas", "fa-times", "me-2"], ["class", "modal fade", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], ["class", "modal fade advertisement-picker-modal", "tabindex", "-1", "role", "dialog", "aria-modal", "true", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", "click", 4, "ngIf"], [1, "row", "mb-3"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fas", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "invalid-feedback"], [1, "dropdown-menu", 3, "click"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-item", 4, "ngIf"], [1, "dropdown-item", 3, "click"], [1, "dropdown-item"], ["class", "dropdown-item checkbox-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "checkbox-item", 3, "click"], ["type", "checkbox", 3, "change", "checked"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled", "title"], ["class", "fas fa-undo me-2", 4, "ngIf"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], [1, "fas", "fa-undo", "me-2"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-success", "text-white"], [1, "modal-title", "d-flex", "align-items-center", "gap-2"], [1, "fas", "fa-plus-circle", "flex-shrink-0"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-success", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-backdrop", "fade"], ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "modal", "fade", "advertisement-picker-modal"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable", "modal-dialog-centered"], ["id", "adPickerTitle", 1, "modal-title", "d-flex", "align-items-center", "gap-2"], [1, "fas", "fa-ad", "flex-shrink-0"], ["class", "ad-picker-grid", 4, "ngIf"], ["class", "text-muted text-center py-4 mb-0", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-check", "me-2"], [1, "ad-picker-grid"], ["class", "ad-picker-card", 3, "ad-picker-card--selected", 4, "ngFor", "ngForOf"], [1, "ad-picker-card"], ["type", "checkbox", 1, "ad-picker-checkbox", 3, "change", "checked"], [1, "ad-picker-preview"], ["class", "ad-picker-video", "muted", "", "playsinline", "", "preload", "metadata", 3, "src", 4, "ngIf"], ["loading", "lazy", 3, "src", "alt", 4, "ngIf"], ["class", "ad-picker-fallback", 4, "ngIf"], [1, "ad-picker-title"], ["muted", "", "playsinline", "", "preload", "metadata", 1, "ad-picker-video", 3, "src"], ["loading", "lazy", 3, "src", "alt"], [1, "ad-picker-fallback"], ["class", "fas fa-file-powerpoint", 4, "ngIf"], ["class", "fas fa-file-pdf", 4, "ngIf"], ["class", "fas fa-file", 4, "ngIf"], [1, "fas", "fa-file-powerpoint"], [1, "fas", "fa-file-pdf"], [1, "fas", "fa-file"], [1, "text-muted", "text-center", "py-4", "mb-0"], [1, "modal-backdrop", "fade", 3, "click"]],
      template: function ScreenCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ScreenCreateComponent_div_11_Template, 6, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 10)(13, "div", 3)(14, "div", 11)(15, "div", 12)(16, "h5", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 14)(20, "form", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ScreenCreateComponent_Template_form_ngSubmit_20_listener() {
            return ctx.saveScreen();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 16)(22, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 19)(26, "div", 20)(27, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ScreenCreateComponent_div_32_Template, 2, 1, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 25)(34, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 25)(38, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 16)(42, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 29)(46, "div", 30)(47, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_Template_div_click_49_listener($event) {
            ctx.openGroupSelector();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_Template_button_click_51_listener($event) {
            ctx.openGroupSelector();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_Template_button_click_53_listener($event) {
            ctx.openCreateGroupModal();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, ScreenCreateComponent_div_55_Template, 3, 2, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 16)(57, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 29)(61, "div", 30)(62, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_Template_div_click_64_listener($event) {
            ctx.openSubsiteSelector();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_Template_button_click_66_listener($event) {
            ctx.openSubsiteSelector();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, ScreenCreateComponent_div_68_Template, 3, 2, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 30)(70, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_Template_div_click_72_listener($event) {
            ctx.openSectionSelector();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_Template_button_click_74_listener($event) {
            ctx.openSectionSelector();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, ScreenCreateComponent_div_76_Template, 3, 2, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 16)(78, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 29)(82, "div", 30)(83, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_Template_div_click_85_listener($event) {
            ctx.openUserSelector();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_Template_button_click_87_listener($event) {
            ctx.openUserSelector();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](88, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, ScreenCreateComponent_div_89_Template, 3, 2, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 16)(91, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](92, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 29)(95, "div", 42)(96, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_Template_div_click_98_listener($event) {
            ctx.openAdvertisementSelector();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScreenCreateComponent_Template_button_click_100_listener($event) {
            ctx.openAdvertisementSelector();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](101, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "div", 44)(103, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](104, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](106, ScreenCreateComponent_button_106_Template, 4, 5, "button", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](108, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](110, ScreenCreateComponent_div_110_Template, 27, 14, "div", 50)(111, ScreenCreateComponent_div_111_Template, 1, 2, "div", 51)(112, ScreenCreateComponent_div_112_Template, 18, 11, "div", 52)(113, ScreenCreateComponent_div_113_Template, 1, 2, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_8_0;
          let tmp_10_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("createScreen") || "Create Screen", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("backToList") || "Back to List", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showSuccessMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("addManualScreen") || "Add Manual Screen", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.manualForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("basicInformation") || "Basic Information", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("screenName") || "Screen Name", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx.manualForm.get("name")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.manualForm.get("name")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx.getTranslation("enterScreenName") || "Enter screen name");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.manualForm.get("name")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.manualForm.get("name")) == null ? null : tmp_10_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("ipAddress") || "IP Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("macAddress") || "MAC Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("screenGroup") || "Screen Group", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("dropdown-open", ctx.showGroupDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("group") || "Group");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("selected", ctx.selectedGroup);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.selectedGroup ? ctx.selectedGroup.name : ctx.getTranslation("nothingSelected") || "Nothing Selected", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("rotated", ctx.showGroupDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showGroupDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("locationAssignment") || "Location Assignment", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("dropdown-open", ctx.showSubsiteDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("subsites") || "Subsite");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("selected", ctx.selectedSubsite);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.selectedSubsite ? ctx.selectedSubsite.name : ctx.getTranslation("nothingSelected") || "Nothing Selected", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("rotated", ctx.showSubsiteDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showSubsiteDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("sections") || "Section");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("selected", ctx.selectedSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.selectedSection ? ctx.selectedSection.name : ctx.getTranslation("nothingSelected") || "Nothing Selected", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.selectedSubsite);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("rotated", ctx.showSectionDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showSectionDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("userAssignment") || "User Assignment", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("dropdown-open", ctx.showUserDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("assignedUser") || "Assigned User");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.selectedUserIds.length > 0 ? ctx.selectedUserIds.length + " " + (ctx.getTranslation("selected") || "selected") : ctx.getTranslation("nothingSelected") || "Nothing Selected", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("rotated", ctx.showUserDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showUserDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("advertisements") || "Advertisements", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTranslation("selectAdvertisements") || "Select Advertisements");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.selectedAdvertisementIds.length > 0 ? ctx.selectedAdvertisementIds.length + " " + (ctx.getTranslation("selected") || "selected") : ctx.getTranslation("nothingSelected") || "Nothing Selected", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.editingScreen ? ctx.getTranslation("update") || "Update" : ctx.getTranslation("create") || "Create", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editingScreen);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("cancel") || "Cancel", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showCreateGroupModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showCreateGroupModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAdvertisementModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAdvertisementModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink],
      styles: [".screen-create-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.screen-create-container[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.screen-create-container[dir=rtl][_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.screen-create-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-bottom: 0;\n}\n.screen-create-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.screen-create-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.screen-create-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 0 0;\n  padding: 15px 20px;\n  font-weight: 600;\n}\n.screen-create-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header.bg-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n}\n.screen-create-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header.bg-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n}\n.screen-create-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.screen-create-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.screen-create-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.screen-create-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.1rem;\n  margin-bottom: 16px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #e9ecef;\n}\n.screen-create-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 8px;\n}\n.screen-create-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #34495e;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n.screen-create-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n}\n.screen-create-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border: 1px solid #e9ecef;\n  border-radius: 16px;\n  padding: 16px;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  z-index: 1;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]:hover {\n  border-color: #00695c;\n  box-shadow: 0 8px 25px rgba(0, 105, 92, 0.15);\n  transform: translateY(-2px);\n  z-index: 2;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card.dropdown-open[_ngcontent-%COMP%] {\n  z-index: 1000;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-bottom: 6px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #495057;\n  margin-bottom: 10px;\n  min-height: 20px;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .card-content.selected[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-weight: 700;\n  background: rgba(0, 105, 92, 0.1);\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  padding: 6px 12px;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #6c757d;\n  transition: all 0.2s ease;\n  margin-top: 8px;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #00695c;\n  color: white;\n  border-color: #00695c;\n  transform: scale(1.02);\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  background: #f8f9fa;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  z-index: 1001;\n  max-height: 200px;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease;\n  display: block !important;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  color: #495057;\n  transition: all 0.2s ease;\n  border-bottom: 1px solid #f1f3f4;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #00695c;\n  font-weight: 600;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.checkbox-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.screen-create-container[_ngcontent-%COMP%]   .selection-cards[_ngcontent-%COMP%]   .selection-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.checkbox-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.screen-create-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding-top: 20px;\n  border-top: 1px solid #e9ecef;\n  margin-top: 20px;\n}\n.screen-create-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 12px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  border: none;\n}\n.screen-create-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.screen-create-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n.screen-create-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.screen-create-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.screen-create-container[_ngcontent-%COMP%]   .advertisement-picker-modal[_ngcontent-%COMP%] {\n  z-index: 1060;\n}\n.screen-create-container[_ngcontent-%COMP%]   .advertisement-picker-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  max-height: min(70vh, 560px);\n  overflow-y: auto;\n}\n.screen-create-container[_ngcontent-%COMP%]   .ad-picker-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 14px;\n}\n.screen-create-container[_ngcontent-%COMP%]   .ad-picker-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin: 0;\n  padding: 10px;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  background: #fff;\n  cursor: pointer;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.screen-create-container[_ngcontent-%COMP%]   .ad-picker-card[_ngcontent-%COMP%]:hover {\n  border-color: #28a745;\n  box-shadow: 0 4px 14px rgba(40, 167, 69, 0.2);\n}\n.screen-create-container[_ngcontent-%COMP%]   .ad-picker-card--selected[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background: rgba(40, 167, 69, 0.06);\n  box-shadow: 0 0 0 1px rgba(40, 167, 69, 0.35);\n}\n.screen-create-container[_ngcontent-%COMP%]   .ad-picker-card[_ngcontent-%COMP%]   .ad-picker-checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  inset-inline-start: 12px;\n  z-index: 2;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: #28a745;\n}\n.screen-create-container[_ngcontent-%COMP%]   .ad-picker-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16/10;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f1f3f4;\n  margin-bottom: 8px;\n}\n.screen-create-container[_ngcontent-%COMP%]   .ad-picker-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .screen-create-container[_ngcontent-%COMP%]   .ad-picker-preview[_ngcontent-%COMP%]   .ad-picker-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  pointer-events: none;\n}\n.screen-create-container[_ngcontent-%COMP%]   .ad-picker-fallback[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  font-size: 2rem;\n}\n.screen-create-container[_ngcontent-%COMP%]   .ad-picker-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #343a40;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-align: center;\n}\n.screen-create-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border: none;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.screen-create-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 0 0;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: nowrap;\n  \n\n}\n.screen-create-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.25rem;\n  flex: 1 1 auto;\n  min-width: 0;\n  margin: 0;\n}\n.screen-create-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 0;\n  padding: 0.5rem;\n}\n.screen-create-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.screen-create-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n}\n.screen-create-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #00695c;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NyZWVucy9jb21wb25lbnRzL3NjcmVlbi1jcmVhdGUvc2NyZWVuLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUVJO0VBQ0UsaUJBQUE7QUFBTjtBQUlNO0VBQ0UsaUJBQUE7QUFGUjtBQU9FO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKO0FBT0k7RUFDRSxjQUFBO0VBQ0EscURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUFMTjtBQVNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtBQVBKO0FBU0k7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQTjtBQVNNO0VBQ0UsNkRBQUE7QUFQUjtBQVVNO0VBQ0UsNkRBQUE7QUFSUjtBQVdNO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FBVFI7QUFhSTtFQUNFLGFBQUE7QUFYTjtBQWVFO0VBQ0UsbUJBQUE7QUFiSjtBQWVJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFiTjtBQWVNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBYlI7QUFpQkk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBZk47QUFrQkk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBaEJOO0FBa0JNO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7QUFoQlI7QUFxQkU7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFuQko7QUFxQkk7RUFDRSw2REFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtBQW5CTjtBQXFCTTtFQUNFLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUFuQlI7QUF1Qk07RUFDRSxhQUFBO0FBckJSO0FBd0JNO0VBQ0UsaUJBQUE7QUF0QlI7QUF5Qk07RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUF2QlI7QUEwQk07RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUF4QlI7QUEwQlE7RUFDRSxtQkFBQTtBQXhCVjtBQTJCUTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBekJWO0FBNkJNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBM0JSO0FBNkJRO0VBQ0UsK0JBQUE7QUEzQlY7QUE2QlU7RUFDRSx5QkFBQTtBQTNCWjtBQStCUTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUE3QlY7QUFnQ1E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQTlCVjtBQWtDTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FBaENSO0FBa0NRO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFoQ1Y7RUFrQ1E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFoQ1Y7QUFDRjtBQW1DUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUFqQ1Y7QUFtQ1U7RUFDRSxtQkFBQTtBQWpDWjtBQW9DVTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBbENaO0FBcUNVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQW5DWjtBQXFDWTtFQUNFLGVBQUE7QUFuQ2Q7QUEyQ0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQXpDSjtBQTJDSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQXpDTjtBQTJDTTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0FBekNSO0FBMkNRO0VBQ0UsMkJBQUE7RUFDQSw0Q0FBQTtBQXpDVjtBQTZDTTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBM0NSO0FBNkNRO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQTNDVjtBQWlERTtFQUNFLGFBQUE7QUEvQ0o7QUFpREk7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FBL0NOO0FBbURFO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0EsU0FBQTtBQWpESjtBQW9ERTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3REFBQTtBQWxESjtBQW9ESTtFQUNFLHFCQUFBO0VBQ0EsNkNBQUE7QUFsRE47QUFxREk7RUFDRSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7QUFuRE47QUFzREk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQXBETjtBQXdERTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF0REo7QUF3REk7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQXRETjtBQTBERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXhESjtBQTJERTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBekRKO0FBOERNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUE1RFI7QUE4RFE7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQVVBLG1GQUFBO0FBckVWO0FBNkRVO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQTNEWjtBQStEVTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQTdEWjtBQWlFUTtFQUNFLGFBQUE7QUEvRFY7QUFpRVU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBL0RaO0FBaUVZO0VBQ0UscUJBQUE7RUFDQSwyQ0FBQTtBQS9EZCIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4tY3JlYXRlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcblxuICAmW2Rpcj1cInJ0bFwiXSB7XG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmZvcm0tc2VjdGlvbiB7XG4gICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgXG4gICAgaSB7XG4gICAgICBjb2xvcjogIzAwNjk1YztcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMsICM0ZGI2YWMpO1xuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAmLmJnLXN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1IDAlLCAjMjBjOTk3IDEwMCUpO1xuICAgICAgfVxuXG4gICAgICAmLmJnLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xuICAgICAgfVxuXG4gICAgICBoNSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBwYWRkaW5nOiAyNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTllY2VmO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICMwMDY5NWM7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLWxhYmVsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzM0NDk1ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZWxlY3Rpb24tY2FyZHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgXG4gICAgLnNlbGVjdGlvbi1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZmZmYgMCUsICNmOGY5ZmEgMTAwJSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMCwgMTA1LCA5MiwgMC4xNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgIH1cblxuICAgICAgLy8gV2hlbiBkcm9wZG93biBpcyBvcGVuLCBpbmNyZWFzZSB6LWluZGV4XG4gICAgICAmLmRyb3Bkb3duLW9wZW4ge1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgfVxuXG4gICAgICAmLmZ1bGwtd2lkdGgge1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgIH1cblxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICBjb2xvcjogIzAwNjk1YztcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgICAgIGkge1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG5cbiAgICAgICAgICAmLnJvdGF0ZWQge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2OTVjO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYygxMDAlICsgOHB4KTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgIHotaW5kZXg6IDEwMDE7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBhbmltYXRpb246IHNsaWRlRG93biAwLjJzIGVhc2U7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmM2Y0O1xuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgICAgICAgY29sb3I6ICMwMDY5NWM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuY2hlY2tib3gtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogMTBweDtcblxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgJi5idG4tcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDEwNSwgOTIsIDAuMyk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLCAxMDUsIDkyLCAwLjQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuYnRuLXNlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFkdmVydGlzZW1lbnQtcGlja2VyLW1vZGFsIHtcbiAgICB6LWluZGV4OiAxMDYwO1xuXG4gICAgLm1vZGFsLWJvZHkge1xuICAgICAgbWF4LWhlaWdodDogbWluKDcwdmgsIDU2MHB4KTtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLmFkLXBpY2tlci1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE0MHB4LCAxZnIpKTtcbiAgICBnYXA6IDE0cHg7XG4gIH1cblxuICAuYWQtcGlja2VyLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoNDAsIDE2NywgNjksIDAuMik7XG4gICAgfVxuXG4gICAgJi0tc2VsZWN0ZWQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTY3LCA2OSwgMC4wNik7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSg0MCwgMTY3LCA2OSwgMC4zNSk7XG4gICAgfVxuXG4gICAgLmFkLXBpY2tlci1jaGVja2JveCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEycHg7XG4gICAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDEycHg7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBhY2NlbnQtY29sb3I6ICMyOGE3NDU7XG4gICAgfVxuICB9XG5cbiAgLmFkLXBpY2tlci1wcmV2aWV3IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYXNwZWN0LXJhdGlvOiAxNiAvIDEwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICNmMWYzZjQ7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgaW1nLFxuICAgIC5hZC1waWNrZXItdmlkZW8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmFkLXBpY2tlci1mYWxsYmFjayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICAuYWQtcGlja2VyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMzQzYTQwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubW9kYWwge1xuICAgIC5tb2RhbC1kaWFsb2cge1xuICAgICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAgICAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG5cbiAgICAgICAgICAubW9kYWwtdGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEJvb3RzdHJhcCAuYnRuLWNsb3NlIHVzZXMgbmVnYXRpdmUgbWFyZ2lucyB0aGF0IGNvbGxhcHNlIGludG8gdGhlIHRpdGxlIGluIFJUTCAqL1xuICAgICAgICAgIC5idG4tY2xvc2Uge1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1vZGFsLWJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG5cbiAgICAgICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG5cbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEwNSwgOTIsIDAuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1237:
/*!********************************************************************************************!*\
  !*** ./src/app/features/screens/components/screen-dashboard/screen-dashboard.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenDashboardComponent: () => (/* binding */ ScreenDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/screen.service */ 2588);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);






function ScreenDashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 14)(2, "div", 24)(3, "div", 12)(4, "div", 25)(5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 28)(8, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 14)(13, "div", 24)(14, "div", 12)(15, "div", 25)(16, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 28)(19, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14)(24, "div", 24)(25, "div", 12)(26, "div", 25)(27, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 28)(30, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 14)(35, "div", 24)(36, "div", 12)(37, "div", 25)(38, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 28)(41, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getTranslation("totalScreens") || "Total Screens");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.totalScreens);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getTranslation("onlineScreens") || "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.onlineScreens);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getTranslation("offlineScreens") || "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.offlineScreens);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getTranslation("playingScreens") || "Playing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.playingScreens);
  }
}
function ScreenDashboardComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getTranslation("loading") || "Loading...");
  }
}
class ScreenDashboardComponent {
  constructor(languageService, translationService, screenService, router) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.screenService = screenService;
    this.router = router;
    this.currentLanguage = 'ar';
    this.screens = [];
    this.totalScreens = 0;
    this.onlineScreens = 0;
    this.offlineScreens = 0;
    this.playingScreens = 0;
    this.isLoading = false;
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadScreens();
  }
  loadScreens() {
    this.isLoading = true;
    this.screenService.getScreens().subscribe({
      next: screens => {
        this.screens = screens;
        this.totalScreens = screens.length;
        this.onlineScreens = screens.filter(s => s.status === 'online').length;
        this.offlineScreens = screens.filter(s => s.status === 'offline').length;
        this.playingScreens = screens.filter(s => s.status === 'playing').length;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading screens:', error);
        this.isLoading = false;
      }
    });
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function ScreenDashboardComponent_Factory(t) {
      return new (t || ScreenDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__.ScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ScreenDashboardComponent,
      selectors: [["app-screen-dashboard"]],
      decls: 35,
      vars: 9,
      consts: [[1, "screen-dashboard-container", 3, "dir"], [1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "page-title"], [1, "fas", "fa-tachometer-alt", "me-2"], ["class", "row mb-4", 4, "ngIf"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-bolt", "me-2"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-3"], ["routerLink", "/screens/discover", 1, "btn", "btn-primary", "w-100"], [1, "fas", "fa-search", "me-2"], ["routerLink", "/screens/create", 1, "btn", "btn-success", "w-100"], [1, "fas", "fa-plus-circle", "me-2"], ["routerLink", "/screens/list", 1, "btn", "btn-info", "w-100"], [1, "fas", "fa-list", "me-2"], ["routerLink", "/screens/grouping", 1, "btn", "btn-warning", "w-100"], [1, "fas", "fa-layer-group", "me-2"], ["class", "row", 4, "ngIf"], [1, "card", "stat-card"], [1, "d-flex", "align-items-center"], [1, "stat-icon", "bg-primary"], [1, "fas", "fa-tv"], [1, "ms-3"], [1, "text-muted", "mb-0"], [1, "stat-icon", "bg-success"], [1, "fas", "fa-check-circle"], [1, "stat-icon", "bg-secondary"], [1, "fas", "fa-times-circle"], [1, "stat-icon", "bg-warning"], [1, "fas", "fa-play-circle"], [1, "row"], [1, "col-12", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"]],
      template: function ScreenDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ScreenDashboardComponent_div_8_Template, 45, 8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 2)(10, "div", 3)(11, "div", 8)(12, "div", 9)(13, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 14)(23, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 14)(27, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 14)(31, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ScreenDashboardComponent_div_34_Template, 5, 1, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("screenDashboard") || "Screen Dashboard", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("quickActions") || "Quick Actions", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("scanNetwork") || "Scan Network", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("createScreen") || "Create Screen", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("viewAllScreens") || "View All Screens", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("manageGroups") || "Manage Groups", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: [".screen-dashboard-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n  min-height: 100vh;\n}\n.screen-dashboard-container[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-bottom: 0;\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  margin-bottom: 20px;\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.5rem;\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon.bg-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon.bg-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon.bg-secondary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6c757d 0%, #adb5bd 100%);\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon.bg-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffc107 0%, #ffca2c 100%);\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0;\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin: 0;\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  padding: 15px 20px;\n  font-weight: 600;\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 12px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  border: none;\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(0, 105, 92, 0.3);\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 105, 92, 0.4);\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #17a2b8 0%, #5bc0de 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(23, 162, 184, 0.3);\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(23, 162, 184, 0.4);\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffc107 0%, #ffca2c 100%);\n  color: #212529;\n  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);\n}\n.screen-dashboard-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(255, 193, 7, 0.4);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NyZWVucy9jb21wb25lbnRzL3NjcmVlbi1kYXNoYm9hcmQvc2NyZWVuLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGO0FBRUk7RUFDRSxpQkFBQTtBQUFOO0FBSUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUNFLGNBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQUZOO0FBTUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1JO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQUpOO0FBT0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFMTjtBQU9NO0VBQ0UsNkRBQUE7QUFMUjtBQVFNO0VBQ0UsNkRBQUE7QUFOUjtBQVNNO0VBQ0UsNkRBQUE7QUFQUjtBQVVNO0VBQ0UsNkRBQUE7QUFSUjtBQVlJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFWTjtBQWFJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQVhOO0FBZUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0FBYko7QUFlSTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWJOO0FBZU07RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFiUjtBQWlCSTtFQUNFLGFBQUE7QUFmTjtBQWlCTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQWZSO0FBaUJRO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7QUFmVjtBQWlCVTtFQUNFLDJCQUFBO0VBQ0EsNENBQUE7QUFmWjtBQW1CUTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0FBakJWO0FBbUJVO0VBQ0UsMkJBQUE7RUFDQSw2Q0FBQTtBQWpCWjtBQXFCUTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0FBbkJWO0FBcUJVO0VBQ0UsMkJBQUE7RUFDQSw4Q0FBQTtBQW5CWjtBQXVCUTtFQUNFLDZEQUFBO0VBQ0EsY0FBQTtFQUNBLDZDQUFBO0FBckJWO0FBdUJVO0VBQ0UsMkJBQUE7RUFDQSw2Q0FBQTtBQXJCWiIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4tZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgJltkaXI9XCJydGxcIl0ge1xyXG4gICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdlLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjLCAjNGRiNmFjKTtcclxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0YXQtY2FyZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGF0LWljb24ge1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuXHJcbiAgICAgICYuYmctcHJpbWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5iZy1zdWNjZXNzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1IDAlLCAjMjBjOTk3IDEwMCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJnLXNlY29uZGFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZjNzU3ZCAwJSwgI2FkYjViZCAxMDAlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5iZy13YXJuaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZjMTA3IDAlLCAjZmZjYTJjIDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDYge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgIGg1IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICYuYnRuLXByaW1hcnkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAxMDUsIDkyLCAwLjMpO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLCAxMDUsIDkyLCAwLjQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5idG4tc3VjY2VzcyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1IDAlLCAjMjBjOTk3IDEwMCUpO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjMpO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSg0MCwgMTY3LCA2OSwgMC40KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYnRuLWluZm8ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE3YTJiOCAwJSwgIzViYzBkZSAxMDAlKTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgyMywgMTYyLCAxODQsIDAuMyk7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDIzLCAxNjIsIDE4NCwgMC40KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYnRuLXdhcm5pbmcge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmYzEwNyAwJSwgI2ZmY2EyYyAxMDAlKTtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDI1NSwgMTkzLCA3LCAwLjMpO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgyNTUsIDE5MywgNywgMC40KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3737:
/*!********************************************************************************************!*\
  !*** ./src/app/features/screens/components/screen-discovery/screen-discovery.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenDiscoveryComponent: () => (/* binding */ ScreenDiscoveryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/screen.service */ 2588);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);







const _c0 = (a0, a1, a2) => ({
  "bg-success": a0,
  "bg-warning": a1,
  "bg-secondary": a2
});
const _c1 = () => ["/screens/create"];
const _c2 = a0 => ({
  id: a0
});
function ScreenDiscoveryComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 3)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenDiscoveryComponent_div_15_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.showSuccessMessage = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.successMessage, " ");
  }
}
function ScreenDiscoveryComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 19)(3, "div", 20)(4, "div", 21)(5, "div", 22)(6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 24)(9, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 27)(14, "strong", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 29)(17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getTranslation("scanning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getTranslation("scanningNetwork"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getTranslation("scanningDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.scanProgress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx_r1.scanProgress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-valuenow", ctx_r1.scanProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.scanProgress, "% ");
  }
}
function ScreenDiscoveryComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 3)(2, "div", 31)(3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ScreenDiscoveryComponent_div_17_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ScreenDiscoveryComponent_div_17_Template_input_input_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.filterDevices());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx_r1.getTranslation("searchDevices"));
  }
}
function ScreenDiscoveryComponent_div_18_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenDiscoveryComponent_div_18_div_10_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.startScanning());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noDevicesFound"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("startScan"), " ");
  }
}
function ScreenDiscoveryComponent_div_18_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div", 20)(3, "div", 50)(4, "div")(5, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 54)(13, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 60)(31, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenDiscoveryComponent_div_18_div_11_div_1_Template_button_click_31_listener() {
      const device_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openRegisterForm(device_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const device_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("registered", device_r6.isRegistered);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r1.getDeviceTypeIcon(device_r6.deviceType));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", device_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getDeviceTypeLabel(device_r6.deviceType));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.getStatusBadgeClass(device_r6.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", device_r6.status === "online" ? ctx_r1.getTranslation("online") : ctx_r1.getTranslation("offline"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("ipAddress"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", device_r6.ipAddress, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("macAddress"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](device_r6.macAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("lastSeen"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](29, 24, device_r6.lastSeen, "short"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("btn-success", !device_r6.isRegistered)("btn-secondary", device_r6.isRegistered);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", device_r6.isRegistered);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fa-plus", !device_r6.isRegistered)("fa-check", device_r6.isRegistered);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", device_r6.isRegistered ? ctx_r1.getTranslation("registered") : ctx_r1.getTranslation("register"), " ");
  }
}
function ScreenDiscoveryComponent_div_18_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ScreenDiscoveryComponent_div_18_div_11_div_1_Template, 34, 27, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.filteredDevices);
  }
}
function ScreenDiscoveryComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "div", 3)(2, "div", 19)(3, "div", 36)(4, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ScreenDiscoveryComponent_div_18_div_10_Template, 7, 2, "div", 40)(11, ScreenDiscoveryComponent_div_18_div_11_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("discoveredDevices"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.filteredDevices.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.filteredDevices.length === 0 && !ctx_r1.isScanning);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.filteredDevices.length > 0);
  }
}
function ScreenDiscoveryComponent_div_19_tr_29_span_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const screen_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" / ", screen_r8.sectionName, "");
  }
}
function ScreenDiscoveryComponent_div_19_tr_29_span_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const screen_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" / ", screen_r8.specialDivisionName, "");
  }
}
function ScreenDiscoveryComponent_div_19_tr_29_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ScreenDiscoveryComponent_div_19_tr_29_span_6_span_2_Template, 2, 1, "span", 65)(3, ScreenDiscoveryComponent_div_19_tr_29_span_6_span_3_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const screen_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", screen_r8.subsiteName || "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", screen_r8.sectionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", screen_r8.specialDivisionName);
  }
}
function ScreenDiscoveryComponent_div_19_tr_29_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ScreenDiscoveryComponent_div_19_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ScreenDiscoveryComponent_div_19_tr_29_span_6_Template, 4, 3, "span", 65)(7, ScreenDiscoveryComponent_div_19_tr_29_span_7_Template, 2, 0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td")(13, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td")(16, "div", 67)(17, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenDiscoveryComponent_div_19_tr_29_Template_button_click_19_listener() {
      const screen_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.deleteScreen(screen_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const screen_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](screen_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](screen_r8.ipAddress || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", screen_r8.subsiteName || screen_r8.sectionName || screen_r8.specialDivisionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !screen_r8.subsiteName && !screen_r8.sectionName && !screen_r8.specialDivisionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](screen_r8.groupName || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](screen_r8.assignedUserName || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](12, _c0, screen_r8.status === "online", screen_r8.status === "playing", screen_r8.status === "offline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", screen_r8.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx_r1.getTranslation("edit") || "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c2, screen_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx_r1.getTranslation("delete") || "Delete");
  }
}
function ScreenDiscoveryComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 19)(3, "div", 36)(4, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 20)(10, "div", 62)(11, "table", 63)(12, "thead")(13, "tr")(14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ScreenDiscoveryComponent_div_19_tr_29_Template, 21, 19, "tr", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("registeredScreens") || "Registered Screens", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.registeredScreens.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getTranslation("name") || "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getTranslation("ipAddress") || "IP Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getTranslation("location") || "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getTranslation("group") || "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getTranslation("assignedUser") || "Assigned User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getTranslation("status") || "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getTranslation("actions") || "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.registeredScreens);
  }
}
class ScreenDiscoveryComponent {
  constructor(languageService, translationService, screenService, router) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.screenService = screenService;
    this.router = router;
    this.currentLanguage = 'ar';
    this.isScanning = false;
    this.scanProgress = 0;
    this.discoveredDevices = [];
    this.filteredDevices = [];
    this.searchTerm = '';
    this.scanSubscription = null;
    this.showSuccessMessage = false;
    this.successMessage = '';
    this.registeredScreens = [];
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadRegisteredScreens();
  }
  loadRegisteredScreens() {
    this.screenService.getScreens().subscribe(screens => {
      this.registeredScreens = screens;
    }, error => {
      console.error('Error loading registered screens:', error);
    });
  }
  ngOnDestroy() {
    if (this.scanSubscription) {
      this.scanSubscription.unsubscribe();
    }
  }
  startScanning() {
    this.isScanning = true;
    this.scanProgress = 0;
    this.discoveredDevices = [];
    this.filteredDevices = [];
    // Start network scanning
    this.scanSubscription = this.screenService.scanNetwork().subscribe(({
      isScanning,
      progress
    }) => {
      this.isScanning = isScanning;
      this.scanProgress = progress;
      // When scanning completes, fetch discovered devices
      if (!isScanning && progress === 100) {
        this.loadDiscoveredDevices();
      }
    }, error => {
      console.error('Scanning error:', error);
      this.isScanning = false;
      this.scanProgress = 0;
    });
  }
  loadDiscoveredDevices() {
    this.screenService.getDiscoveredDevices().subscribe(devices => {
      this.discoveredDevices = devices;
      this.filteredDevices = [...devices];
    }, error => {
      console.error('Error loading devices:', error);
    });
  }
  filterDevices() {
    if (!this.searchTerm.trim()) {
      this.filteredDevices = [...this.discoveredDevices];
      return;
    }
    const search = this.searchTerm.toLowerCase();
    this.filteredDevices = this.discoveredDevices.filter(device => device.name.toLowerCase().includes(search) || device.ipAddress.includes(search) || device.macAddress.toLowerCase().includes(search));
  }
  openRegisterForm(device) {
    // Redirect to create screen page with device details as query params
    this.router.navigate(['/screens/create'], {
      queryParams: {
        deviceId: device.id,
        name: device.name,
        ipAddress: device.ipAddress,
        macAddress: device.macAddress,
        deviceType: device.deviceType
      }
    });
  }
  getDeviceTypeIcon(type) {
    switch (type) {
      case 'android-tv':
        return 'fab fa-android';
      case 'smart-tv':
        return 'fas fa-tv';
      default:
        return 'fas fa-desktop';
    }
  }
  getDeviceTypeLabel(type) {
    switch (type) {
      case 'android-tv':
        return 'Android TV';
      case 'smart-tv':
        return 'Smart TV';
      default:
        return 'Unknown';
    }
  }
  getStatusBadgeClass(status) {
    return status === 'online' ? 'bg-success' : 'bg-secondary';
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  // ========== Manual Screen Creation ==========
  openManualForm() {
    this.router.navigate(['/screens/create']);
  }
  deleteScreen(screenId) {
    if (confirm(this.getTranslation('confirmDeleteScreen') || 'Are you sure you want to delete this screen?')) {
      this.screenService.deleteScreen(screenId).subscribe({
        next: () => {
          this.showSuccessMessage = true;
          this.successMessage = this.getTranslation('screenDeletedSuccessfully') || 'Screen deleted successfully';
          this.loadRegisteredScreens();
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);
        },
        error: error => {
          console.error('Error deleting screen:', error);
          alert('Failed to delete screen: ' + (error.error?.error || error.message));
        }
      });
    }
  }
  static {
    this.ɵfac = function ScreenDiscoveryComponent_Factory(t) {
      return new (t || ScreenDiscoveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__.ScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ScreenDiscoveryComponent,
      selectors: [["app-screen-discovery"]],
      decls: 20,
      vars: 12,
      consts: [[1, "screen-discovery-container", 3, "dir"], [1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "page-title"], [1, "fas", "fa-search", "me-2"], [1, "d-flex", "gap-2"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-sync-alt", "me-2"], ["class", "row mb-3", 4, "ngIf"], ["class", "row mb-4", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row", "mb-3"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fas", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center", "mb-3"], ["role", "status", 1, "spinner-border", "text-primary", "me-3"], [1, "visually-hidden"], [1, "flex-grow-1"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "text-end"], [1, "text-primary"], [1, "progress", 2, "height", "25px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary"], [1, "input-group"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "row"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-tv", "me-2"], [1, "badge", "bg-primary", "ms-2"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "text-center", "py-5"], [1, "fas", "fa-tv", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], [1, "btn", "btn-primary", 3, "click"], [1, "row", "g-3"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4"], [1, "card", "h-100", "device-card"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-3"], [1, "card-title", "mb-1"], [1, "me-2"], [1, "badge", 3, "ngClass"], [1, "device-info", "mb-3"], [1, "mb-2"], [1, "fas", "fa-network-wired", "me-2", "text-muted"], [1, "fas", "fa-fingerprint", "me-2", "text-muted"], [1, "font-monospace"], [1, "fas", "fa-clock", "me-2", "text-muted"], [1, "d-grid", "gap-2"], [1, "btn", "btn-sm", 3, "click", "disabled"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-primary", 3, "routerLink", "queryParams", "title"], [1, "fas", "fa-edit"], [1, "btn", "btn-danger", 3, "click", "title"], [1, "fas", "fa-trash"]],
      template: function ScreenDiscoveryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenDiscoveryComponent_Template_button_click_9_listener() {
            return ctx.openManualForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenDiscoveryComponent_Template_button_click_12_listener() {
            return ctx.startScanning();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ScreenDiscoveryComponent_div_15_Template, 6, 1, "div", 12)(16, ScreenDiscoveryComponent_div_16_Template, 19, 8, "div", 13)(17, ScreenDiscoveryComponent_div_17_Template, 6, 2, "div", 12)(18, ScreenDiscoveryComponent_div_18_Template, 12, 4, "div", 14)(19, ScreenDiscoveryComponent_div_19_Template, 30, 10, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("networkScanning"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("addManualScreen") || "Add Manual Screen", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isScanning);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fa-spin", ctx.isScanning);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isScanning ? ctx.getTranslation("scanning") : ctx.getTranslation("startScan"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSuccessMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isScanning);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isScanning && ctx.discoveredDevices.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isScanning);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.registeredScreens.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
      styles: [".screen-discovery-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: 100vh;\n}\n.screen-discovery-container[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.screen-discovery-container[dir=rtl][_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.screen-discovery-container[dir=rtl][_ngcontent-%COMP%]   .device-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-right: 12px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 10px 20px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  border: none;\n  color: white;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  border: none;\n  color: white;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 105, 92, 0.3);\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border-bottom: 2px solid #e9ecef;\n  padding: 16px 20px;\n  font-weight: 600;\n  color: #2c3e50;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 8px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-width: 3px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  height: 28px;\n  background-color: #e9ecef;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  transition: width 0.5s ease;\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: white;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e9ecef;\n  border-right: none;\n  border-radius: 12px 0 0 12px;\n  color: #00695c;\n  padding: 10px 16px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-left: none;\n  border-radius: 0 12px 12px 0;\n  padding: 10px 16px;\n  transition: all 0.3s ease;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00695c;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border: 2px solid #e9ecef;\n  border-radius: 15px;\n  overflow: hidden;\n  height: 100%;\n  background: white;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  border-color: #4db6ac;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card.registered[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background: linear-gradient(135deg, #f8fff9 0%, #ffffff 100%);\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card.registered[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: #2c3e50;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 8px;\n  font-size: 1.2rem;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .badge.bg-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .badge.bg-secondary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6c757d 0%, #868e96 100%) !important;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .device-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 16px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .device-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .device-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .device-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  width: 20px;\n  margin-right: 8px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .device-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-right: 6px;\n  font-weight: 600;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .device-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .font-monospace[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", monospace;\n  font-size: 0.8rem;\n  color: #495057;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-weight: 600;\n  padding: 8px 16px;\n  transition: all 0.3s ease;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  border: none;\n  color: white;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6c757d 0%, #868e96 100%);\n  border: none;\n  color: white;\n  cursor: not-allowed;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .device-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  margin-bottom: 16px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 1rem;\n  margin-bottom: 24px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n  padding: 16px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: scale(1.01);\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  vertical-align: middle;\n  border-bottom: 1px solid #e9ecef;\n  color: #2c3e50;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .badge.bg-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .badge.bg-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%) !important;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .badge.bg-secondary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6c757d 0%, #868e96 100%) !important;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 6px 12px;\n  margin: 0 2px;\n  transition: all 0.3s ease;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  border: none;\n  color: white;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 105, 92, 0.3);\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);\n  border: none;\n  color: white;\n}\n.screen-discovery-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);\n}\n.screen-discovery-container[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 12px;\n}\n.screen-discovery-container[dir=rtl][_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n.screen-discovery-container[dir=rtl][_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.screen-discovery-container[dir=rtl][_ngcontent-%COMP%]   .device-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n.screen-discovery-container[dir=rtl][_ngcontent-%COMP%]   .device-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 6px;\n}\n.screen-discovery-container[dir=rtl][_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-right: 1px solid #e9ecef;\n  border-left: none;\n  border-radius: 0 12px 12px 0;\n}\n.screen-discovery-container[dir=rtl][_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-left: 1px solid #e9ecef;\n  border-right: none;\n  border-radius: 12px 0 0 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NyZWVucy9jb21wb25lbnRzL3NjcmVlbi1kaXNjb3Zlcnkvc2NyZWVuLWRpc2NvdmVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUNGO0FBRUk7RUFDRSxpQkFBQTtBQUFOO0FBR0k7RUFDRSxpQkFBQTtBQUROO0FBSUk7RUFDRSxpQkFBQTtBQUZOO0FBT0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTEo7QUFPSTtFQUNFLGNBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBTE47QUFVRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7QUFSSjtBQVVJO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVJOO0FBVU07RUFDRSwyQkFBQTtFQUNBLDZDQUFBO0FBUlI7QUFZSTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFWTjtBQVlNO0VBQ0UsMkJBQUE7RUFDQSw0Q0FBQTtBQVZSO0FBYU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQWlCRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FBZko7QUFtQkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFqQko7QUFtQkk7RUFDRSw2REFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFqQk47QUFtQk07RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFqQlI7QUFtQlE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFqQlY7QUFvQlE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBbEJWO0FBdUJJO0VBQ0UsYUFBQTtBQXJCTjtBQTBCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUF4Qko7QUEyQkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7QUF6Qko7QUEyQkk7RUFDRSwyQkFBQTtFQUNBLDZEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXpCTjtBQStCSTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBN0JOO0FBZ0NJO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQTlCTjtBQWdDTTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0FBOUJSO0FBb0NFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFsQ0o7QUFvQ0k7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7QUFsQ047QUFxQ0k7RUFDRSxxQkFBQTtFQUNBLDZEQUFBO0FBbkNOO0FBcUNNO0VBQ0UsY0FBQTtBQW5DUjtBQXVDSTtFQUNFLGFBQUE7QUFyQ047QUF3Q0k7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBdENOO0FBd0NNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF0Q1I7QUEwQ0k7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXhDTjtBQTBDTTtFQUNFLHdFQUFBO0FBeENSO0FBMkNNO0VBQ0Usd0VBQUE7QUF6Q1I7QUE2Q0k7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQTNDTjtBQTZDTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBM0NSO0FBNkNRO0VBQ0UsZ0JBQUE7QUEzQ1Y7QUE4Q1E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBNUNWO0FBK0NRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUE3Q1Y7QUFnRFE7RUFDRSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQTlDVjtBQW1ESTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBakROO0FBbURNO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWpEUjtBQW1EUTtFQUNFLDJCQUFBO0VBQ0EsNkNBQUE7QUFqRFY7QUFxRE07RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFuRFI7QUFzRE07RUFDRSxZQUFBO0FBcERSO0FBMERFO0VBQ0Usa0JBQUE7QUF4REo7QUEwREk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUF4RE47QUEyREk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBekROO0FBNERJO0VBQ0UsbUJBQUE7QUExRE47QUErREU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBN0RKO0FBZ0VFO0VBQ0UsZ0JBQUE7QUE5REo7QUFnRUk7RUFDRSw2REFBQTtFQUNBLFlBQUE7QUE5RE47QUFnRU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBOURSO0FBbUVNO0VBQ0UseUJBQUE7QUFqRVI7QUFtRVE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBakVWO0FBb0VRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBbEVWO0FBb0VVO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFsRVo7QUFvRVk7RUFDRSx3RUFBQTtBQWxFZDtBQXFFWTtFQUNFLHdFQUFBO0FBbkVkO0FBc0VZO0VBQ0Usd0VBQUE7QUFwRWQ7QUE2RUk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBM0VOO0FBNkVNO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTNFUjtBQTZFUTtFQUNFLDJCQUFBO0VBQ0EsNENBQUE7QUEzRVY7QUErRU07RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBN0VSO0FBK0VRO0VBQ0UsMkJBQUE7RUFDQSw2Q0FBQTtBQTdFVjtBQXNGTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQXBGUjtBQTBGUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXhGVjtBQTJGUTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQXpGVjtBQWdHUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQTlGVjtBQWlHUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQS9GVjtBQXFHTTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQW5HUjtBQXNHTTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQXBHUiIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4tZGlzY292ZXJ5LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgJltkaXI9XCJydGxcIl0ge1xyXG4gICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuZGV2aWNlLWluZm8ge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFBhZ2UgSGVhZGVyXHJcbiAgLnBhZ2UtdGl0bGUge1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YywgIzRkYjZhYyk7XHJcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWN0aW9uIEJ1dHRvbnNcclxuICAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgJi5idG4tc3VjY2VzcyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUgMCUsICMyMGM5OTcgMTAwJSk7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg0MCwgMTY3LCA2OSwgMC4zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuYnRuLXByaW1hcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMTA1LCA5MiwgMC4zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFN1Y2Nlc3MgTWVzc2FnZVxyXG4gIC5hbGVydCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcblxyXG4gIC8vIFNjYW5uaW5nIFByb2dyZXNzIENhcmRcclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2Y4ZjlmYSAxMDAlKTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICMyYzNlNTA7XHJcblxyXG4gICAgICBoNSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhZGdlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2Nhbm5pbmcgUHJvZ3Jlc3NcclxuICAuc3Bpbm5lci1ib3JkZXIge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBib3JkZXItd2lkdGg6IDNweDtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2U7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTZWFyY2ggSW5wdXRcclxuICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4IDAgMCAxMnB4O1xyXG4gICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcclxuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRGV2aWNlIENhcmRzXHJcbiAgLmRldmljZS1jYXJkIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzRkYjZhYztcclxuICAgIH1cclxuXHJcbiAgICAmLnJlZ2lzdGVyZWQge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZmZjkgMCUsICNmZmZmZmYgMTAwJSk7XHJcblxyXG4gICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFkZ2Uge1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG5cclxuICAgICAgJi5iZy1zdWNjZXNzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1IDAlLCAjMjBjOTk3IDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYmctc2Vjb25kYXJ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmM3NTdkIDAlLCAjODY4ZTk2IDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGV2aWNlLWluZm8ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvbnQtbW9ub3NwYWNlIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICYuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUgMCUsICMyMGM5OTcgMTAwJSk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNDAsIDE2NywgNjksIDAuMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2Yzc1N2QgMCUsICM4NjhlOTYgMTAwJSk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEVtcHR5IFN0YXRlXHJcbiAgLnRleHQtY2VudGVyIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6ICNhZGI1YmQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZWdpc3RlcmVkIFNjcmVlbnMgVGFibGVcclxuICAudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC50YWJsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgIHRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgdGgge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRib2R5IHtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgICAgICAgY29sb3I6ICMyYzNlNTA7XHJcblxyXG4gICAgICAgICAgLmJhZGdlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuXHJcbiAgICAgICAgICAgICYuYmctc3VjY2VzcyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSAwJSwgIzIwYzk5NyAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmJnLXdhcm5pbmcge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmMxMDcgMCUsICNmZjk4MDAgMTAwJSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5iZy1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2Yzc1N2QgMCUsICM4NjhlOTYgMTAwJSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi1ncm91cCB7XHJcbiAgICAuYnRuIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgbWFyZ2luOiAwIDJweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICYuYnRuLXByaW1hcnkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMTA1LCA5MiwgMC4zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWRhbmdlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RjMzU0NSAwJSwgI2M4MjMzMyAxMDAlKTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyMjAsIDUzLCA2OSwgMC4zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJUTCBTdXBwb3J0XHJcbiAgJltkaXI9XCJydGxcIl0ge1xyXG4gICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICBpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICBoNSB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhZGdlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRldmljZS1pbmZvIHtcclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U5ZWNlZjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6353:
/*!******************************************************************************************!*\
  !*** ./src/app/features/screens/components/screen-grouping/screen-grouping.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenGroupingComponent: () => (/* binding */ ScreenGroupingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/screen.service */ 2588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);






function ScreenGroupingComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragstart", function ScreenGroupingComponent_div_19_Template_div_dragstart_0_listener($event) {
      const screen_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onDragStart($event, screen_r2));
    })("dragend", function ScreenGroupingComponent_div_19_Template_div_dragend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const screen_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("draggable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", screen_r2.name, " ");
  }
}
function ScreenGroupingComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getTranslation("noScreensAvailable") || "No screens available", " ");
  }
}
function ScreenGroupingComponent_div_23_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragstart", function ScreenGroupingComponent_div_23_div_12_Template_div_dragstart_0_listener($event) {
      const screen_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onDragStart($event, screen_r7));
    })("dragend", function ScreenGroupingComponent_div_23_div_12_Template_div_dragend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenGroupingComponent_div_23_div_12_Template_button_click_3_listener() {
      const screen_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.removeScreenFromGroup(screen_r7.id, group_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const screen_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("draggable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", screen_r7.name, " ");
  }
}
function ScreenGroupingComponent_div_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getTranslation("dragScreensHere") || "Drag screens here", " ");
  }
}
function ScreenGroupingComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 33)(7, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenGroupingComponent_div_23_Template_button_click_7_listener() {
      const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.openEditGroupModal(group_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenGroupingComponent_div_23_Template_button_click_9_listener() {
      const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.deleteGroup(group_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragover", function ScreenGroupingComponent_div_23_Template_div_dragover_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onDragOver($event));
    })("drop", function ScreenGroupingComponent_div_23_Template_div_drop_11_listener($event) {
      const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onDrop($event, group_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ScreenGroupingComponent_div_23_div_12_Template, 5, 2, "div", 16)(13, ScreenGroupingComponent_div_23_div_13_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx_r2.getTranslation("edit") || "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx_r2.getTranslation("delete") || "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-group-id", group_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.getScreensInGroup(group_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.getScreensInGroup(group_r5.id).length === 0);
  }
}
function ScreenGroupingComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "div", 11)(2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenGroupingComponent_div_24_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.openCreateGroupModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.getTranslation("noGroupsCreated") || "No groups created yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getTranslation("createGroup") || "Create Group", " ");
  }
}
function ScreenGroupingComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "div", 47)(3, "div", 48)(4, "h5", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenGroupingComponent_div_25_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.showCreateGroupModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 51)(9, "div", 52)(10, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ScreenGroupingComponent_div_25_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.newGroupName, $event) || (ctx_r2.newGroupName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 52)(16, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "textarea", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ScreenGroupingComponent_div_25_Template_textarea_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.newGroupDescription, $event) || (ctx_r2.newGroupDescription = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 57)(20, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenGroupingComponent_div_25_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.createGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenGroupingComponent_div_25_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.showCreateGroupModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx_r2.showCreateGroupModal ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx_r2.showCreateGroupModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getTranslation("createGroup") || "Create Group", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.getTranslation("groupName") || "Group Name", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newGroupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx_r2.getTranslation("enterGroupName") || "Enter group name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.getTranslation("description") || "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newGroupDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx_r2.getTranslation("enterDescription") || "Enter description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.newGroupName.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getTranslation("create") || "Create", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getTranslation("cancel") || "Cancel", " ");
  }
}
function ScreenGroupingComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 62);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx_r2.showCreateGroupModal);
  }
}
function ScreenGroupingComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "div", 47)(3, "div", 63)(4, "h5", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenGroupingComponent_div_27_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeEditGroupModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 51)(9, "div", 52)(10, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ScreenGroupingComponent_div_27_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.editingGroupName, $event) || (ctx_r2.editingGroupName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 52)(16, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "textarea", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ScreenGroupingComponent_div_27_Template_textarea_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.editingGroupDescription, $event) || (ctx_r2.editingGroupDescription = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 57)(20, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenGroupingComponent_div_27_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.saveEditGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenGroupingComponent_div_27_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeEditGroupModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx_r2.showEditGroupModal ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx_r2.showEditGroupModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getTranslation("editGroup") || "Edit Group", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.getTranslation("groupName") || "Group Name", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingGroupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx_r2.getTranslation("enterGroupName") || "Enter group name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.getTranslation("description") || "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingGroupDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx_r2.getTranslation("enterDescription") || "Enter description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.editingGroupName.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getTranslation("save") || "Save", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getTranslation("cancel") || "Cancel", " ");
  }
}
function ScreenGroupingComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenGroupingComponent_div_28_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeEditGroupModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx_r2.showEditGroupModal);
  }
}
class ScreenGroupingComponent {
  constructor(languageService, translationService, screenService) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.screenService = screenService;
    this.currentLanguage = 'ar';
    this.screens = [];
    this.groups = [];
    this.ungroupedScreens = [];
    this.draggedScreen = null;
    this.showCreateGroupModal = false;
    this.newGroupName = '';
    this.newGroupDescription = '';
    this.showEditGroupModal = false;
    this.editingGroupId = null;
    this.editingGroupName = '';
    this.editingGroupDescription = '';
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadData();
  }
  loadData() {
    this.screenService.getScreens().subscribe({
      next: screens => {
        this.screens = screens;
        this.updateUngroupedScreens();
      },
      error: error => {
        console.error('Error loading screens:', error);
      }
    });
    this.screenService.getScreenGroups().subscribe({
      next: groups => {
        this.groups = groups;
      },
      error: error => {
        console.error('Error loading groups:', error);
      }
    });
  }
  updateUngroupedScreens() {
    this.ungroupedScreens = this.screens.filter(screen => !screen.groupId);
  }
  getScreensInGroup(groupId) {
    return this.screens.filter(screen => screen.groupId === groupId);
  }
  // Drag and Drop handlers
  onDragStart(event, screen) {
    this.draggedScreen = screen;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', screen.id.toString());
    }
    if (event.target) {
      event.target.classList.add('dragging');
    }
  }
  onDragEnd(event) {
    if (event.target) {
      event.target.classList.remove('dragging');
    }
    this.draggedScreen = null;
  }
  onDragOver(event) {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
    if (event.currentTarget) {
      event.currentTarget.classList.add('drag-over');
    }
  }
  onDrop(event, groupId) {
    event.preventDefault();
    if (event.currentTarget) {
      event.currentTarget.classList.remove('drag-over');
    }
    if (!this.draggedScreen) return;
    const screenId = this.draggedScreen.id;
    const updateData = {
      name: this.draggedScreen.name,
      groupId: groupId || null
    };
    this.screenService.updateScreen(screenId, updateData).subscribe({
      next: updatedScreen => {
        // Update local screen data
        const index = this.screens.findIndex(s => s.id === screenId);
        if (index > -1) {
          this.screens[index] = updatedScreen;
        }
        this.updateUngroupedScreens();
      },
      error: error => {
        console.error('Error updating screen group:', error);
        alert('Failed to move screen: ' + (error.error?.error || error.message));
      }
    });
  }
  removeScreenFromGroup(screenId, groupId) {
    const screen = this.screens.find(s => s.id === screenId);
    if (!screen) return;
    const updateData = {
      name: screen.name,
      groupId: null
    };
    this.screenService.updateScreen(screenId, updateData).subscribe({
      next: updatedScreen => {
        const index = this.screens.findIndex(s => s.id === screenId);
        if (index > -1) {
          this.screens[index] = updatedScreen;
        }
        this.updateUngroupedScreens();
      },
      error: error => {
        console.error('Error removing screen from group:', error);
        alert('Failed to remove screen from group: ' + (error.error?.error || error.message));
      }
    });
  }
  openCreateGroupModal() {
    this.showCreateGroupModal = true;
    this.newGroupName = '';
    this.newGroupDescription = '';
  }
  createGroup() {
    if (!this.newGroupName.trim()) return;
    this.screenService.createScreenGroup(this.newGroupName.trim(), this.newGroupDescription.trim() || undefined).subscribe({
      next: group => {
        this.groups.push(group);
        this.showCreateGroupModal = false;
        this.newGroupName = '';
        this.newGroupDescription = '';
      },
      error: error => {
        console.error('Error creating group:', error);
        alert('Failed to create group: ' + (error.error?.error || error.message));
      }
    });
  }
  openEditGroupModal(group) {
    this.editingGroupId = group.id;
    this.editingGroupName = group.name;
    this.editingGroupDescription = group.description || '';
    this.showEditGroupModal = true;
  }
  closeEditGroupModal() {
    this.showEditGroupModal = false;
    this.editingGroupId = null;
    this.editingGroupName = '';
    this.editingGroupDescription = '';
  }
  saveEditGroup() {
    if (this.editingGroupId == null || !this.editingGroupName.trim()) return;
    this.screenService.updateScreenGroup(this.editingGroupId, this.editingGroupName.trim(), this.editingGroupDescription.trim() || undefined).subscribe({
      next: updated => {
        const idx = this.groups.findIndex(g => g.id === this.editingGroupId);
        if (idx > -1) this.groups[idx] = updated;
        this.closeEditGroupModal();
        alert(this.getTranslation('groupUpdated') || 'Group updated successfully.');
      },
      error: err => {
        console.error('Error updating group:', err);
        alert(err.error?.error || err.message || this.getTranslation('errorUpdatingGroup') || 'Failed to update group.');
      }
    });
  }
  deleteGroup(groupId) {
    if (!confirm(this.getTranslation('confirmDeleteGroup') || 'Are you sure you want to delete this group?')) {
      return;
    }
    this.screenService.deleteScreenGroup(groupId).subscribe({
      next: () => {
        this.loadData();
        alert(this.getTranslation('groupDeleted') || 'Group deleted successfully.');
      },
      error: err => {
        console.error('Error deleting group:', err);
        alert(err.error?.error || err.message || this.getTranslation('errorDeletingGroup') || 'Failed to delete group.');
      }
    });
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function ScreenGroupingComponent_Factory(t) {
      return new (t || ScreenGroupingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__.ScreenService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ScreenGroupingComponent,
      selectors: [["app-screen-grouping"]],
      decls: 29,
      vars: 12,
      consts: [[1, "screen-grouping-container", 3, "dir"], [1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "page-title"], [1, "fas", "fa-layer-group", "me-2"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-plus-circle", "me-2"], [1, "row"], [1, "col-md-4"], [1, "card"], [1, "card-header", "bg-info", "text-white"], [1, "mb-0"], [1, "fas", "fa-tv", "me-2"], [1, "card-body", "screens-list", 3, "dragover", "drop"], ["class", "screen-item", 3, "draggable", "dragstart", "dragend", 4, "ngFor", "ngForOf"], ["class", "text-center text-muted py-3", 4, "ngIf"], [1, "col-md-8"], [1, "row", "g-3"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], ["class", "col-md-6", 4, "ngIf"], ["class", "modal fade", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", "click", 4, "ngIf"], [1, "screen-item", 3, "dragstart", "dragend", "draggable"], [1, "fas", "fa-grip-vertical", "me-2"], [1, "text-center", "text-muted", "py-3"], [1, "col-md-6"], [1, "card", "group-card"], [1, "card-header", "bg-primary", "text-white"], [1, "d-flex", "justify-content-between", "align-items-center", "group-header"], [1, "mb-0", "group-name"], [1, "d-flex", "gap-1"], [1, "btn", "btn-sm", "btn-light", "edit-group-btn", 3, "click", "title"], [1, "fas", "fa-pen"], [1, "btn", "btn-sm", "btn-danger", "delete-group-btn", 3, "click", "title"], [1, "fas", "fa-trash"], [1, "card-body", "group-drop-zone", 3, "dragover", "drop"], [1, "btn", "btn-sm", "btn-danger", "float-end", 3, "click"], [1, "fas", "fa-times"], [1, "card-body", "text-center", "py-5"], [1, "fas", "fa-layer-group", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], [1, "btn", "btn-primary", 3, "click"], [1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-success", "text-white"], [1, "modal-title"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-success", 3, "click", "disabled"], [1, "fas", "fa-save", "me-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-times", "me-2"], [1, "modal-backdrop", "fade"], [1, "modal-header", "bg-primary", "text-white"], [1, "fas", "fa-pen", "me-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "modal-backdrop", "fade", 3, "click"]],
      template: function ScreenGroupingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenGroupingComponent_Template_button_click_8_listener() {
            return ctx.openCreateGroupModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "h5", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragover", function ScreenGroupingComponent_Template_div_dragover_18_listener($event) {
            return ctx.onDragOver($event);
          })("drop", function ScreenGroupingComponent_Template_div_drop_18_listener($event) {
            return ctx.onDrop($event, null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ScreenGroupingComponent_div_19_Template, 3, 2, "div", 16)(20, ScreenGroupingComponent_div_20_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 18)(22, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ScreenGroupingComponent_div_23_Template, 14, 6, "div", 20)(24, ScreenGroupingComponent_div_24_Template, 9, 2, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ScreenGroupingComponent_div_25_Template, 26, 14, "div", 22)(26, ScreenGroupingComponent_div_26_Template, 1, 2, "div", 23)(27, ScreenGroupingComponent_div_27_Template, 25, 14, "div", 22)(28, ScreenGroupingComponent_div_28_Template, 1, 2, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("screenGrouping") || "Screen Grouping", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("createGroup") || "Create Group", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("availableScreens") || "Available Screens", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ungroupedScreens);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ungroupedScreens.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.groups);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.groups.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showCreateGroupModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showCreateGroupModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showEditGroupModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showEditGroupModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
      styles: [".screen-grouping-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n  min-height: 100vh;\n}\n.screen-grouping-container[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-bottom: 0;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n  height: 100%;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 0 0;\n  padding: 15px 20px;\n  font-weight: 600;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header.bg-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #17a2b8 0%, #5bc0de 100%);\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header.bg-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .screen-grouping-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 200px;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%] {\n  min-height: 400px;\n  max-height: 600px;\n  overflow-y: auto;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .group-drop-zone[_ngcontent-%COMP%] {\n  min-height: 300px;\n  padding: 16px;\n  border: 2px dashed #e9ecef;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  background: #fafbfc;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .group-drop-zone.drag-over[_ngcontent-%COMP%] {\n  border-color: #00695c;\n  background: rgba(0, 105, 92, 0.05);\n  border-style: solid;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: move;\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]:hover {\n  border-color: #00695c;\n  box-shadow: 0 4px 12px rgba(0, 105, 92, 0.15);\n  transform: translateX(4px);\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .screen-item.dragging[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  transform: scale(0.95);\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   i.fa-grip-vertical[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-right: 8px;\n  cursor: grab;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   i.fa-grip-vertical[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 0.75rem;\n  border-radius: 6px;\n  background: linear-gradient(135deg, #dc3545 0%, #e4606d 100%);\n  border: none;\n  color: white;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .group-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .group-header[_ngcontent-%COMP%]   .group-name[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  min-width: 0;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .group-header[_ngcontent-%COMP%]   .edit-group-btn[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  font-size: 0.75rem;\n  border-radius: 6px;\n  color: #0d6efd;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .group-header[_ngcontent-%COMP%]   .edit-group-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.9);\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .group-header[_ngcontent-%COMP%]   .delete-group-btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.75rem;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .group-header[_ngcontent-%COMP%]   .delete-group-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.05);\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  border: none;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 12px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border: none;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 0 0;\n  padding: 20px;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n}\n.screen-grouping-container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #00695c;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NyZWVucy9jb21wb25lbnRzL3NjcmVlbi1ncm91cGluZy9zY3JlZW4tZ3JvdXBpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUVJO0VBQ0UsaUJBQUE7QUFBTjtBQUlFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUk7RUFDRSxjQUFBO0VBQ0EscURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUFGTjtBQU1FO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFKSjtBQU1JO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSk47QUFNTTtFQUNFLDZEQUFBO0FBSlI7QUFPTTtFQUNFLDZEQUFBO0FBTFI7QUFRTTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBTlI7QUFVSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQVJOO0FBWUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQWFFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQWFJO0VBQ0UscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBWE47QUFlRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFiSjtBQWVJO0VBQ0UscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0FBYk47QUFnQkk7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUFkTjtBQWlCSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFmTjtBQWlCTTtFQUNFLGdCQUFBO0FBZlI7QUFtQkk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBakJOO0FBbUJNO0VBQ0UscUJBQUE7QUFqQlI7QUF3Qk07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBdEJSO0FBd0JRO0VBQ0UsT0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBdEJWO0FBeUJRO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQXZCVjtBQXdCVTtFQUNFLG9DQUFBO0FBdEJaO0FBMEJRO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUF4QlY7QUEwQlU7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FBeEJaO0FBK0JFO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7QUE3Qko7QUErQkk7RUFDRSwyQkFBQTtFQUNBLDZDQUFBO0FBN0JOO0FBbUNNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFqQ1I7QUFtQ1E7RUFDRSw0QkFBQTtFQUNBLGFBQUE7QUFqQ1Y7QUFtQ1U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBakNaO0FBcUNRO0VBQ0UsYUFBQTtBQW5DVjtBQXFDVTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFuQ1o7QUFxQ1k7RUFDRSxxQkFBQTtFQUNBLDJDQUFBO0FBbkNkIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcmVlbi1ncm91cGluZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gICZbZGlyPVwicnRsXCJdIHtcclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFnZS10aXRsZSB7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YywgIzRkYjZhYyk7XHJcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgICYuYmctaW5mbyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE3YTJiOCAwJSwgIzViYzBkZSAxMDAlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5iZy1wcmltYXJ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoNSwgaDYge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2NyZWVucy1saXN0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmdyb3VwLWRyb3Atem9uZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI2U5ZWNlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmJmYztcclxuXHJcbiAgICAmLmRyYWctb3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMDUsIDkyLCAwLjA1KTtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zY3JlZW4taXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDEwNSwgOTIsIDAuMTUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAmLmRyYWdnaW5nIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgfVxyXG5cclxuICAgIGkuZmEtZ3JpcC12ZXJ0aWNhbCB7XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgY3Vyc29yOiBncmFiO1xyXG5cclxuICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWRhbmdlciB7XHJcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZGMzNTQ1IDAlLCAjZTQ2MDZkIDEwMCUpO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdyb3VwLWNhcmQge1xyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgLmdyb3VwLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDEycHg7IC8vIEFkZCBzcGFjaW5nIGJldHdlZW4gZ3JvdXAgbmFtZSBhbmQgZGVsZXRlIGJ1dHRvblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAuZ3JvdXAtbmFtZSB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMDsgLy8gQWxsb3cgdGV4dCB0cnVuY2F0aW9uIGlmIG5lZWRlZFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVkaXQtZ3JvdXAtYnRuIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwZDZlZmQ7XHJcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlbGV0ZS1ncm91cC1idG4ge1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmbGV4LXNocmluazogMDsgLy8gUHJldmVudCBidXR0b24gZnJvbSBzaHJpbmtpbmdcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4tc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1IDAlLCAjMjBjOTk3IDEwMCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjMpO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSg0MCwgMTY3LCA2OSwgMC40KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2RhbCB7XHJcbiAgICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgICAgICAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgICAubW9kYWwtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG5cclxuICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcblxyXG4gICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7433:
/*!**********************************************************************************!*\
  !*** ./src/app/features/screens/components/screen-list/screen-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenListComponent: () => (/* binding */ ScreenListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/screen.service */ 2588);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);






const _c0 = (a0, a1, a2) => ({
  "bg-success": a0,
  "bg-warning": a1,
  "bg-secondary": a2
});
function ScreenListComponent_tr_40_span_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const screen_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" / ", screen_r2.sectionName, "");
  }
}
function ScreenListComponent_tr_40_span_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const screen_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" / ", screen_r2.specialDivisionName, "");
  }
}
function ScreenListComponent_tr_40_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ScreenListComponent_tr_40_span_6_span_2_Template, 2, 1, "span", 19)(3, ScreenListComponent_tr_40_span_6_span_3_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const screen_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", screen_r2.subsiteName || "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", screen_r2.sectionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", screen_r2.specialDivisionName);
  }
}
function ScreenListComponent_tr_40_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ScreenListComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ScreenListComponent_tr_40_span_6_Template, 4, 3, "span", 19)(7, ScreenListComponent_tr_40_span_7_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td")(13, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td")(16, "div", 22)(17, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenListComponent_tr_40_Template_button_click_17_listener() {
      const screen_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.editScreen(screen_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScreenListComponent_tr_40_Template_button_click_19_listener() {
      const screen_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.deleteScreen(screen_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const screen_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](screen_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](screen_r2.ipAddress || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", screen_r2.subsiteName || screen_r2.sectionName || screen_r2.specialDivisionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !screen_r2.subsiteName && !screen_r2.sectionName && !screen_r2.specialDivisionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](screen_r2.groupName || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](screen_r2.assignedUserName || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](10, _c0, screen_r2.status === "online", screen_r2.status === "playing", screen_r2.status === "offline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", screen_r2.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r2.getTranslation("edit") || "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r2.getTranslation("delete") || "Delete");
  }
}
function ScreenListComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.getTranslation("noScreensFound") || "No screens found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getTranslation("createScreen") || "Create Screen", " ");
  }
}
class ScreenListComponent {
  constructor(languageService, translationService, screenService, router) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.screenService = screenService;
    this.router = router;
    this.currentLanguage = 'ar';
    this.screens = [];
    this.isLoading = false;
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadScreens();
  }
  loadScreens() {
    this.isLoading = true;
    this.screenService.getScreens().subscribe({
      next: screens => {
        this.screens = screens;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading screens:', error);
        this.isLoading = false;
      }
    });
  }
  editScreen(screen) {
    this.router.navigate(['/screens/create'], {
      queryParams: {
        edit: screen.id
      }
    });
  }
  deleteScreen(screenId) {
    if (confirm(this.getTranslation('confirmDeleteScreen') || 'Are you sure you want to delete this screen?')) {
      this.screenService.deleteScreen(screenId).subscribe({
        next: () => {
          this.loadScreens();
        },
        error: error => {
          console.error('Error deleting screen:', error);
          alert('Failed to delete screen: ' + (error.error?.error || error.message));
        }
      });
    }
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function ScreenListComponent_Factory(t) {
      return new (t || ScreenListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__.ScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ScreenListComponent,
      selectors: [["app-screen-list"]],
      decls: 42,
      vars: 14,
      consts: [[1, "screen-list-container", 3, "dir"], [1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "page-title"], [1, "fas", "fa-list", "me-2"], ["routerLink", "/screens/create", 1, "btn", "btn-success"], [1, "fas", "fa-plus-circle", "me-2"], [1, "row"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-tv", "me-2"], [1, "badge", "bg-primary", "ms-2"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "badge", 3, "ngClass"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-primary", 3, "click", "title"], [1, "fas", "fa-edit"], [1, "btn", "btn-danger", 3, "click", "title"], [1, "fas", "fa-trash"], [1, "text-muted"], ["colspan", "7", 1, "text-center", "py-5"], [1, "fas", "fa-tv", "fa-3x", "text-muted", "mb-3"], ["routerLink", "/screens/create", 1, "btn", "btn-primary"]],
      template: function ScreenListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "div", 3)(13, "div", 10)(14, "div", 11)(15, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15)(21, "div", 16)(22, "table", 17)(23, "thead")(24, "tr")(25, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ScreenListComponent_tr_40_Template, 21, 14, "tr", 18)(41, ScreenListComponent_tr_41_Template, 8, 2, "tr", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("screenList") || "Screen List", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("createScreen") || "Create Screen", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("registeredScreens") || "Registered Screens", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.screens.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTranslation("name") || "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTranslation("ipAddress") || "IP Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTranslation("location") || "Location");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTranslation("group") || "Group");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTranslation("assignedUser") || "Assigned User");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTranslation("status") || "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTranslation("actions") || "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.screens);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.screens.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: [".screen-list-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n  min-height: 100vh;\n}\n.screen-list-container[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.screen-list-container[dir=rtl][_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .screen-list-container[dir=rtl][_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.screen-list-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-bottom: 0;\n}\n.screen-list-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.screen-list-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.screen-list-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  padding: 15px 20px;\n  font-weight: 600;\n}\n.screen-list-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.screen-list-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n  padding: 15px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.2s;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 15px;\n  vertical-align: middle;\n  border-bottom: 1px solid #e9ecef;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .badge.bg-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .badge.bg-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffc107 0%, #ffca2c 100%) !important;\n  color: #212529;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .badge.bg-secondary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6c757d 0%, #adb5bd 100%) !important;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  border: none;\n  color: white;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 105, 92, 0.3);\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dc3545 0%, #e4606d 100%);\n  border: none;\n  color: white;\n}\n.screen-list-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);\n}\n.screen-list-container[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  border: none;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 12px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);\n}\n.screen-list-container[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NyZWVucy9jb21wb25lbnRzL3NjcmVlbi1saXN0L3NjcmVlbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFSTtFQUNFLGlCQUFBO0FBQU47QUFJTTtFQUNFLGlCQUFBO0FBRlI7QUFPRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQU9JO0VBQ0UsY0FBQTtFQUNBLHFEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FBTE47QUFTRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVNJO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUE47QUFTTTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQVBSO0FBV0k7RUFDRSxVQUFBO0FBVE47QUFhRTtFQUNFLGdCQUFBO0FBWEo7QUFhSTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtBQVhOO0FBYU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBWFI7QUFnQk07RUFDRSwyQkFBQTtBQWRSO0FBZ0JRO0VBQ0UsbUJBQUE7QUFkVjtBQWlCUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBZlY7QUFpQlU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWZaO0FBaUJZO0VBQ0Usd0VBQUE7QUFmZDtBQWtCWTtFQUNFLHdFQUFBO0VBQ0EsY0FBQTtBQWhCZDtBQW1CWTtFQUNFLHdFQUFBO0FBakJkO0FBc0JZO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBcEJkO0FBc0JjO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXBCaEI7QUFzQmdCO0VBQ0UsMkJBQUE7RUFDQSw0Q0FBQTtBQXBCbEI7QUF3QmM7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBdEJoQjtBQXdCZ0I7RUFDRSwyQkFBQTtFQUNBLDZDQUFBO0FBdEJsQjtBQWdDRTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0FBOUJKO0FBZ0NJO0VBQ0UsMkJBQUE7RUFDQSw2Q0FBQTtBQTlCTiIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4tbGlzdC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gICZbZGlyPVwicnRsXCJdIHtcclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgdGgsIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhZ2UtdGl0bGUge1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgXHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMsICM0ZGI2YWMpO1xyXG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgIGg1IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWJsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgIHRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjk1YyAwJSwgIzRkYjZhYyAxMDAlKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgdGgge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRib2R5IHtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxuXHJcbiAgICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG5cclxuICAgICAgICAgICAgJi5iZy1zdWNjZXNzIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1IDAlLCAjMjBjOTk3IDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYmctd2FybmluZyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmYzEwNyAwJSwgI2ZmY2EyYyAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmJnLXNlY29uZGFyeSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZjNzU3ZCAwJSwgI2FkYjViZCAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ0bi1ncm91cCB7XHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgICAgICAgICAmLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDEwNSwgOTIsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAmLmJ0bi1kYW5nZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RjMzU0NSAwJSwgI2U0NjA2ZCAxMDAlKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjIwLCA1MywgNjksIDAuMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSAwJSwgIzIwYzk5NyAxMDAlKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSg0MCwgMTY3LCA2OSwgMC4zKTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoNDAsIDE2NywgNjksIDAuNCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5345:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/screens/components/screen-management/screen-management.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenManagementComponent: () => (/* binding */ ScreenManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);



class ScreenManagementComponent {
  constructor(languageService, translationService) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.currentLanguage = 'ar';
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  static {
    this.ɵfac = function ScreenManagementComponent_Factory(t) {
      return new (t || ScreenManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ScreenManagementComponent,
      selectors: [["app-screen-management"]],
      decls: 7,
      vars: 2,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"]],
      template: function ScreenManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("screenManagement"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTranslation("comingSoon"));
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 7753:
/*!****************************************************************************************!*\
  !*** ./src/app/features/screens/components/screen-monitor/screen-monitor.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenMonitorComponent: () => (/* binding */ ScreenMonitorComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/screen.service */ 2588);
/* harmony import */ var _core_services_advertisements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/advertisements.service */ 9282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 8709);









const _c0 = (a0, a1, a2) => ({
  "bg-success": a0,
  "bg-warning": a1,
  "bg-secondary": a2
});
function ScreenMonitorComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getTranslation("loading") || "Loading...");
  }
}
function ScreenMonitorComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getTranslation("noScreensFound") || "No screens found");
  }
}
function ScreenMonitorComponent_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const screen_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](screen_r3.ipAddress);
  }
}
function ScreenMonitorComponent_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const screen_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](screen_r3.location);
  }
}
function ScreenMonitorComponent_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const screen_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](screen_r3.groupName);
  }
}
function ScreenMonitorComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScreenMonitorComponent_div_12_Template_div_click_0_listener() {
      const screen_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.selectScreen(screen_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 21)(2, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ScreenMonitorComponent_div_12_div_7_Template, 4, 1, "div", 25)(8, ScreenMonitorComponent_div_12_div_8_Template, 4, 1, "div", 25)(9, ScreenMonitorComponent_div_12_div_9_Template, 4, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const screen_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", (ctx_r0.selectedScreen == null ? null : ctx_r0.selectedScreen.id) === screen_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](screen_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r0.getScreenStatusClass(screen_r3.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.getScreenStatusText(screen_r3.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", screen_r3.ipAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", screen_r3.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", screen_r3.groupName);
  }
}
function ScreenMonitorComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getTranslation("selectScreenToMonitor") || "Select a Screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getTranslation("selectScreenFromLeft") || "Select a screen from the left panel to view its status and control playback");
  }
}
function ScreenMonitorComponent_div_15_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getTranslation("loading") || "Loading...");
  }
}
function ScreenMonitorComponent_div_15_div_1_div_3_div_6_ng_container_1_video_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "video", 76);
  }
  if (rf & 2) {
    const regionAd_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", regionAd_r6.advertisement.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("muted", true);
  }
}
function ScreenMonitorComponent_div_15_div_1_div_3_div_6_ng_container_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 77);
  }
  if (rf & 2) {
    const regionAd_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", regionAd_r6.advertisement.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function ScreenMonitorComponent_div_15_div_1_div_3_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ScreenMonitorComponent_div_15_div_1_div_3_div_6_ng_container_1_video_1_Template, 1, 2, "video", 74)(2, ScreenMonitorComponent_div_15_div_1_div_3_div_6_ng_container_1_img_2_Template, 1, 1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const regionAd_r6 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", regionAd_r6.advertisement.type === "video" && (ctx_r0.isScheduleActive(regionAd_r6.schedule) || ctx_r0.selectedScreen && ctx_r0.selectedScreen.status === "playing") && ctx_r0.selectedScreen && ctx_r0.selectedScreen.status === "playing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", regionAd_r6.advertisement.type === "image" && (ctx_r0.isScheduleActive(regionAd_r6.schedule) || ctx_r0.selectedScreen && ctx_r0.selectedScreen.status === "playing") && ctx_r0.selectedScreen && ctx_r0.selectedScreen.status === "playing");
  }
}
function ScreenMonitorComponent_div_15_div_1_div_3_div_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("fa-image", ctx_r0.getAdvertisementForRegion(region_r7.id).advertisement.type === "image")("fa-video", ctx_r0.getAdvertisementForRegion(region_r7.id).advertisement.type === "video")("fa-file-powerpoint", ctx_r0.getAdvertisementForRegion(region_r7.id).advertisement.type === "presentation")("fa-file", ctx_r0.getAdvertisementForRegion(region_r7.id).advertisement.type === "document");
  }
}
function ScreenMonitorComponent_div_15_div_1_div_3_div_6_div_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](2, _c0, ctx_r0.getScheduleStatus(ctx_r0.getAdvertisementForRegion(region_r7.id).schedule) === "active", ctx_r0.getScheduleStatus(ctx_r0.getAdvertisementForRegion(region_r7.id).schedule) === "upcoming", ctx_r0.getScheduleStatus(ctx_r0.getAdvertisementForRegion(region_r7.id).schedule) === "ended"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.getScheduleStatus(ctx_r0.getAdvertisementForRegion(region_r7.id).schedule) === "active" ? ctx_r0.getTranslation("playing") || "Playing" : ctx_r0.getScheduleStatus(ctx_r0.getAdvertisementForRegion(region_r7.id).schedule) === "upcoming" ? ctx_r0.getTranslation("upcoming") || "Upcoming" : ctx_r0.getTranslation("ended") || "Ended", " ");
  }
}
function ScreenMonitorComponent_div_15_div_1_div_3_div_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80)(1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ScreenMonitorComponent_div_15_div_1_div_3_div_6_div_6_span_3_Template, 2, 6, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_7_0;
    const region_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getAdvertisementForRegion(region_r7.id).advertisement.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r0.getAdvertisementForRegion(region_r7.id)) == null ? null : tmp_7_0.schedule);
  }
}
function ScreenMonitorComponent_div_15_div_1_div_3_div_6_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScreenMonitorComponent_div_15_div_1_div_3_div_6_button_8_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const region_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      ctx_r0.playVideoInRegion(region_r7.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", ctx_r0.getTranslation("play") || "Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
  }
}
function ScreenMonitorComponent_div_15_div_1_div_3_div_6_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScreenMonitorComponent_div_15_div_1_div_3_div_6_button_9_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const region_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      ctx_r0.playVideoInRegion(region_r7.id, true);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", ctx_r0.getTranslation("muteAudio") || "Play muted");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
  }
}
function ScreenMonitorComponent_div_15_div_1_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ScreenMonitorComponent_div_15_div_1_div_3_div_6_ng_container_1_Template, 3, 2, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 57)(3, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ScreenMonitorComponent_div_15_div_1_div_3_div_6_span_5_Template, 2, 8, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ScreenMonitorComponent_div_15_div_1_div_3_div_6_div_6_Template, 4, 2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ScreenMonitorComponent_div_15_div_1_div_3_div_6_button_8_Template, 2, 2, "button", 62)(9, ScreenMonitorComponent_div_15_div_1_div_3_div_6_button_9_Template, 2, 2, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScreenMonitorComponent_div_15_div_1_div_3_div_6_Template_button_click_10_listener($event) {
      const region_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      ctx_r0.stopVideoInRegion(region_r7.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScreenMonitorComponent_div_15_div_1_div_3_div_6_Template_button_click_12_listener($event) {
      const region_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      ctx_r0.pauseVideoInRegion(region_r7.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScreenMonitorComponent_div_15_div_1_div_3_div_6_Template_button_click_14_listener($event) {
      const region_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      ctx_r0.resumeVideoInRegion(region_r7.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScreenMonitorComponent_div_15_div_1_div_3_div_6_Template_button_click_16_listener($event) {
      const region_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      ctx_r0.setFullscreenInRegion(region_r7.id, true);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScreenMonitorComponent_div_15_div_1_div_3_div_6_Template_button_click_18_listener($event) {
      const region_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      ctx_r0.setFullscreenInRegion(region_r7.id, false);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const region_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("left", region_r7.xPosition, "%")("top", region_r7.yPosition, "%")("width", region_r7.widthPercentage, "%")("height", region_r7.heightPercentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("has-advertisement", ctx_r0.getAdvertisementForRegion(region_r7.id))("playing", ctx_r0.getAdvertisementForRegion(region_r7.id) && ctx_r0.getScheduleStatus(ctx_r0.getAdvertisementForRegion(region_r7.id).schedule) === "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.getAdvertisementForRegion(region_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getRegionName(region_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.getAdvertisementForRegion(region_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.getAdvertisementForRegion(region_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.getAdvertisementForRegion(region_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.getAdvertisementForRegion(region_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", ctx_r0.getTranslation("stop") || "Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", ctx_r0.getTranslation("pause") || "Pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", ctx_r0.getTranslation("resume") || "Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", ctx_r0.getTranslation("fullscreen") || "Full Screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", ctx_r0.getTranslation("exitFullscreen") || "Exit Full Screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
  }
}
function ScreenMonitorComponent_div_15_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 51)(2, "h6", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ScreenMonitorComponent_div_15_div_1_div_3_div_6_Template, 20, 28, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("screenPreview") || "Screen Preview", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("aspect-ratio", "16/9");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.screenRegions);
  }
}
function ScreenMonitorComponent_div_15_div_1_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 88);
  }
}
function ScreenMonitorComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ScreenMonitorComponent_div_15_div_1_div_2_Template, 4, 1, "div", 38)(3, ScreenMonitorComponent_div_15_div_1_div_3_Template, 7, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 36)(5, "div", 40)(6, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 37)(10, "div", 43)(11, "div", 44)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 44)(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 44)(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 44)(27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 44)(32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 45)(38, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScreenMonitorComponent_div_15_div_1_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.refreshPlayer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, ScreenMonitorComponent_div_15_div_1_span_39_Template, 1, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isLoadingRegions || ctx_r0.isLoadingSchedules);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isLoadingRegions && !ctx_r0.isLoadingSchedules);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("screenDetails") || "Screen Details", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("ipAddress") || "IP Address", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.selectedScreen.ipAddress || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("macAddress") || "MAC Address", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.selectedScreen.macAddress || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("location") || "Location", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.selectedScreen.location || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("group") || "Group", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.selectedScreen.groupName || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.getTranslation("lastConnected") || "Last Connected", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](36, 17, ctx_r0.selectedScreen.lastConnected, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.isRefreshingPlayer)("title", ctx_r0.getTranslation("refreshPlayer") || "Refresh player page (index.html)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isRefreshingPlayer);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.getTranslation("refreshPlayer") || "Refresh player", " ");
  }
}
function ScreenMonitorComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ScreenMonitorComponent_div_15_div_1_Template, 42, 20, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.screenRegions.length > 0);
  }
}
function ScreenMonitorComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 89)(1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScreenMonitorComponent_div_16_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.showMessage = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "message-" + ctx_r0.messageType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("fa-check-circle", ctx_r0.messageType === "success")("fa-exclamation-circle", ctx_r0.messageType === "error")("fa-exclamation-triangle", ctx_r0.messageType === "warning")("fa-info-circle", ctx_r0.messageType === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
class ScreenMonitorComponent {
  constructor(languageService, translationService, screenService, advertisementsService) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.screenService = screenService;
    this.advertisementsService = advertisementsService;
    this.currentLanguage = 'ar';
    this.screens = [];
    this.selectedScreen = null;
    this.playingVideo = null;
    this.isLoading = false;
    this.showMessage = false;
    this.message = '';
    this.messageType = 'info';
    this.showConfirmDialog = false;
    this.confirmDialogData = {};
    // Screen Regions and Schedules
    this.screenRegions = [];
    this.advertisementSchedules = [];
    this.regionAdvertisements = new Map();
    this.isLoadingRegions = false;
    this.isLoadingSchedules = false;
    // Quick IP edit for local testing
    this.screenIpForEdit = '';
    this.isUpdatingIp = false;
    this.isRefreshingPlayer = false;
    this.POLL_INTERVAL = 3000; // 3 seconds
  }
  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadScreens();
  }
  ngOnDestroy() {
    if (this.statusPollSubscription) {
      this.statusPollSubscription.unsubscribe();
    }
  }
  loadScreens() {
    this.isLoading = true;
    this.screenService.getScreens().subscribe({
      next: screens => {
        this.screens = screens;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading screens:', error);
        this.isLoading = false;
        this.showMessageBanner('error', this.getTranslation('errorLoadingScreens') || 'Error loading screens');
      }
    });
  }
  selectScreen(screen) {
    // Stop previous polling
    if (this.statusPollSubscription) {
      this.statusPollSubscription.unsubscribe();
    }
    this.playingVideo = null;
    this.isLoading = true;
    // Fetch full screen data via API (single API call with all details)
    this.screenService.getScreenById(screen.id).subscribe({
      next: fullScreenData => {
        this.selectedScreen = fullScreenData;
        this.screenIpForEdit = fullScreenData.ipAddress || '';
        this.isLoading = false;
        // Load playing video info
        this.loadPlayingVideo();
        // Load screen regions and schedules
        this.loadScreenRegionsAndSchedules();
      },
      error: error => {
        console.error('Error loading screen details:', error);
        this.isLoading = false;
        this.showMessageBanner('error', this.getTranslation('errorLoadingScreenDetails') || 'Error loading screen details');
        // Fallback to basic screen data
        this.selectedScreen = screen;
        this.screenIpForEdit = screen.ipAddress || '';
        this.loadPlayingVideo();
        this.loadScreenRegionsAndSchedules();
      }
    });
  }
  updateScreenIp() {
    if (!this.selectedScreen) return;
    const newIp = this.screenIpForEdit.trim();
    this.isUpdatingIp = true;
    this.screenService.updateScreen(this.selectedScreen.id, {
      name: this.selectedScreen.name,
      ipAddress: newIp || null
    }).subscribe({
      next: updated => {
        this.isUpdatingIp = false;
        if (this.selectedScreen) this.selectedScreen.ipAddress = updated.ipAddress ?? null;
        this.showMessageBanner('success', this.translationService.getTranslation('ipUpdated', this.currentLanguage) || 'IP updated. Open player at same IP to connect.');
      },
      error: err => {
        this.isUpdatingIp = false;
        this.showMessageBanner('error', err.error?.error || err.message || 'Failed to update IP');
      }
    });
  }
  refreshPlayer() {
    if (!this.selectedScreen) {
      this.showMessageBanner('error', this.getTranslation('selectScreen') || 'Please select a screen');
      return;
    }
    this.isRefreshingPlayer = true;
    this.screenService.refreshPlayer(this.selectedScreen.id, {
      deviceId: this.selectedScreen.deviceId ?? undefined,
      ipAddress: this.selectedScreen.ipAddress ?? undefined
    }).subscribe({
      next: res => {
        this.isRefreshingPlayer = false;
        if (res.success) {
          this.showMessageBanner('success', res.message || this.getTranslation('refreshSent') || 'Refresh command sent to player');
        } else {
          this.showMessageBanner('warning', res.message || 'No player connected for this screen.');
        }
      },
      error: err => {
        this.isRefreshingPlayer = false;
        this.showMessageBanner('error', err.error?.error || err.message || 'Failed to send refresh command');
      }
    });
  }
  loadPlayingVideo() {
    if (!this.selectedScreen) {
      return;
    }
    this.screenService.getPlayingVideo(this.selectedScreen.id).subscribe({
      next: video => {
        this.playingVideo = video;
        // Start polling if video is playing or paused
        if (video.isPlaying || video.isPaused) {
          this.startStatusPolling();
        } else {
          // Stop polling if video is not playing
          if (this.statusPollSubscription) {
            this.statusPollSubscription.unsubscribe();
            this.statusPollSubscription = undefined;
          }
        }
      },
      error: error => {
        console.error('Error loading playing video:', error);
        this.playingVideo = {
          isPlaying: false,
          isPaused: false
        };
      }
    });
  }
  startStatusPolling() {
    // Stop existing polling
    if (this.statusPollSubscription) {
      this.statusPollSubscription.unsubscribe();
    }
    // Only poll if video is playing or paused
    this.statusPollSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(this.POLL_INTERVAL).subscribe(() => {
      if (this.selectedScreen && (this.playingVideo?.isPlaying || this.playingVideo?.isPaused)) {
        this.loadPlayingVideo();
      } else {
        // If video is not playing and not paused, stop polling
        if (this.statusPollSubscription) {
          this.statusPollSubscription.unsubscribe();
          this.statusPollSubscription = undefined;
        }
      }
    });
  }
  getAvailableVideoUrl() {
    if (!this.selectedScreen) {
      return null;
    }
    // First check if there's a currently playing video
    if (this.playingVideo?.videoUrl) {
      return this.playingVideo.videoUrl;
    }
    // Fallback: Check assigned advertisements from the screen data
    if (this.selectedScreen.assignedAdvertisements && Array.isArray(this.selectedScreen.assignedAdvertisements) && this.selectedScreen.assignedAdvertisements.length > 0) {
      // Get the first video advertisement
      const videoAd = this.selectedScreen.assignedAdvertisements.find(ad => ad.type === 'video' && ad.fileUrl);
      if (videoAd && videoAd.fileUrl) {
        return videoAd.fileUrl;
      }
      // If no video, check for any advertisement with fileUrl
      const anyAd = this.selectedScreen.assignedAdvertisements.find(ad => ad.fileUrl);
      if (anyAd && anyAd.fileUrl) {
        return anyAd.fileUrl;
      }
    }
    return null;
  }
  playVideoFullScreen() {
    if (!this.selectedScreen) {
      this.showMessageBanner('error', this.getTranslation('selectScreen') || 'Please select a screen');
      return;
    }
    const videoUrl = this.getAvailableVideoUrl();
    if (!videoUrl) {
      // Check if there are assigned advertisements but no video URL found
      if (this.selectedScreen.assignedAdvertisements && this.selectedScreen.assignedAdvertisements.length > 0) {
        // Try to get first video advertisement
        const videoAd = this.selectedScreen.assignedAdvertisements.find(ad => ad.type === 'video' && ad.fileUrl) || this.selectedScreen.assignedAdvertisements.find(ad => ad.fileUrl);
        if (videoAd && videoAd.fileUrl) {
          // Use this advertisement's URL for full-screen
          this.isLoading = true;
          this.screenService.playVideo(this.selectedScreen.id, videoAd.fileUrl, videoAd.title || videoAd.fileName, false, null
          // No regionId = full-screen
          ).subscribe({
            next: result => {
              this.isLoading = false;
              if (result.success) {
                this.showMessageBanner('success', result.message || this.getTranslation('videoPlaying') || 'Video is playing in full-screen');
                this.loadPlayingVideo();
              } else {
                this.showMessageBanner('error', result.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
              }
            },
            error: error => {
              this.isLoading = false;
              console.error('Error playing video:', error);
              this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
            }
          });
          return;
        }
      }
      this.showMessageBanner('warning', this.getTranslation('noVideoAvailable') || 'No video available to play');
      return;
    }
    // Play full-screen (no regionId)
    this.isLoading = true;
    this.screenService.playVideo(this.selectedScreen.id, videoUrl, this.playingVideo?.videoTitle, false, null
    // No regionId = full-screen
    ).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || this.getTranslation('videoPlaying') || 'Video is playing in full-screen');
          this.loadPlayingVideo();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error playing video:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
      }
    });
  }
  playVideo() {
    if (!this.selectedScreen) {
      this.showMessageBanner('error', this.getTranslation('selectScreen') || 'Please select a screen');
      return;
    }
    const videoUrl = this.getAvailableVideoUrl();
    if (!videoUrl) {
      // Check if there are assigned advertisements but no video URL found
      if (this.selectedScreen.assignedAdvertisements && this.selectedScreen.assignedAdvertisements.length > 0) {
        // Try to get first video advertisement
        const videoAd = this.selectedScreen.assignedAdvertisements.find(ad => ad.type === 'video' && ad.fileUrl) || this.selectedScreen.assignedAdvertisements.find(ad => ad.fileUrl);
        if (videoAd && videoAd.fileUrl) {
          // Use this advertisement's URL
          this.isLoading = true;
          this.screenService.playVideo(this.selectedScreen.id, videoAd.fileUrl, videoAd.title || videoAd.fileName).subscribe({
            next: result => {
              this.isLoading = false;
              if (result.success) {
                if (this.selectedScreen) {
                  this.selectedScreen.status = 'playing';
                }
                this.showMessageBanner('success', result.message || this.getTranslation('videoPlaying') || 'Video is playing');
                this.loadPlayingVideo();
                this.loadScreenRegionsAndSchedules();
              } else {
                this.showMessageBanner('error', result.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
              }
            },
            error: error => {
              this.isLoading = false;
              console.error('Error playing video:', error);
              this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
            }
          });
          return;
        }
      }
      this.showMessageBanner('warning', this.getTranslation('noVideoAvailable') || 'No video available to play');
      return;
    }
    this.isLoading = true;
    this.screenService.playVideo(this.selectedScreen.id, videoUrl, this.playingVideo?.videoTitle).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          if (this.selectedScreen) {
            this.selectedScreen.status = 'playing';
          }
          this.showMessageBanner('success', result.message || this.getTranslation('videoPlaying') || 'Video is playing');
          this.loadPlayingVideo();
          this.loadScreenRegionsAndSchedules();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error playing video:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
      }
    });
  }
  stopVideo() {
    if (!this.selectedScreen) {
      return;
    }
    this.confirmDialogData = {
      title: this.getTranslation('confirmStopVideo') || 'Stop Video',
      message: this.getTranslation('confirmStopVideoMessage') || 'Are you sure you want to stop the video?',
      confirmText: this.getTranslation('stop') || 'Stop',
      cancelText: this.getTranslation('cancel') || 'Cancel',
      onConfirm: () => {
        this.executeStopVideo();
      }
    };
    this.showConfirmDialog = true;
  }
  pauseVideo() {
    if (!this.selectedScreen) {
      return;
    }
    this.isLoading = true;
    this.screenService.pauseVideo(this.selectedScreen.id).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || this.getTranslation('videoPaused') || 'Video is paused');
          this.loadPlayingVideo();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('pauseVideoFailed') || 'Failed to pause video');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error pausing video:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('pauseVideoFailed') || 'Failed to pause video');
      }
    });
  }
  resumeVideo() {
    if (!this.selectedScreen) {
      return;
    }
    this.isLoading = true;
    this.screenService.resumeVideo(this.selectedScreen.id).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || this.getTranslation('videoResumed') || 'Video is resumed');
          this.loadPlayingVideo();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('resumeVideoFailed') || 'Failed to resume video');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error resuming video:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('resumeVideoFailed') || 'Failed to resume video');
      }
    });
  }
  toggleFullscreen() {
    if (!this.selectedScreen) {
      return;
    }
    // Send fullscreen command to the device
    // This would require a backend API endpoint for fullscreen
    this.showMessageBanner('info', this.getTranslation('fullscreenNotImplemented') || 'Fullscreen feature not yet implemented');
  }
  onConfirmDialogConfirmed() {
    this.showConfirmDialog = false;
    // Execute callback if provided
    if (this.confirmDialogData.onConfirm) {
      this.confirmDialogData.onConfirm();
      return;
    }
    // Default: execute full-screen stop
    this.executeStopVideo();
  }
  executeStopVideo() {
    if (!this.selectedScreen) {
      return;
    }
    this.isLoading = true;
    this.screenService.stopVideo(this.selectedScreen.id).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || this.getTranslation('videoStopped') || 'Video is stopped');
          this.playingVideo = null;
          // Stop polling
          if (this.statusPollSubscription) {
            this.statusPollSubscription.unsubscribe();
            this.statusPollSubscription = undefined;
          }
          // Load once to confirm stopped state
          this.loadPlayingVideo();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('stopVideoFailed') || 'Failed to stop video');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error stopping video:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('stopVideoFailed') || 'Failed to stop video');
      }
    });
  }
  onConfirmDialogCancelled() {
    this.showConfirmDialog = false;
  }
  showMessageBanner(type, message) {
    this.messageType = type;
    this.message = message;
    this.showMessage = true;
    // Auto-hide after 5 seconds
    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  getScreenStatusClass(status) {
    switch (status) {
      case 'online':
        return 'status-online';
      case 'offline':
        return 'status-offline';
      case 'playing':
        return 'status-playing';
      case 'paused':
        return 'status-paused';
      default:
        return 'status-unknown';
    }
  }
  getScreenStatusText(status) {
    switch (status) {
      case 'online':
        return this.getTranslation('online') || 'Online';
      case 'offline':
        return this.getTranslation('offline') || 'Offline';
      case 'playing':
        return this.getTranslation('playing') || 'Playing';
      case 'paused':
        return this.getTranslation('paused') || 'Paused';
      default:
        return status;
    }
  }
  // ========== Screen Regions and Schedules Methods ==========
  loadScreenRegionsAndSchedules() {
    if (!this.selectedScreen) {
      return;
    }
    this.isLoadingRegions = true;
    this.isLoadingSchedules = true;
    // Load regions and schedules in parallel
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)({
      regions: this.screenService.getScreenRegions(this.selectedScreen.id),
      schedules: this.screenService.getScreenSchedules(this.selectedScreen.id)
    }).subscribe({
      next: response => {
        // Load regions
        this.screenRegions = response.regions.regions || [];
        this.isLoadingRegions = false;
        // Load schedules
        this.advertisementSchedules = response.schedules.schedules || [];
        this.isLoadingSchedules = false;
        // Load advertisement details for each schedule
        this.loadAdvertisementDetails();
      },
      error: error => {
        console.error('Error loading regions and schedules:', error);
        this.isLoadingRegions = false;
        this.isLoadingSchedules = false;
        this.screenRegions = [];
        this.advertisementSchedules = [];
        this.regionAdvertisements.clear();
      }
    });
  }
  loadAdvertisementDetails() {
    if (!this.selectedScreen) {
      this.regionAdvertisements.clear();
      return;
    }
    // No schedules: show assigned ads (e.g. images) in first region so preview and Play work without schedule
    if (this.advertisementSchedules.length === 0) {
      this.regionAdvertisements.clear();
      const assigned = this.selectedScreen.assignedAdvertisements;
      if (this.screenRegions.length > 0 && assigned && assigned.length > 0) {
        const firstRegion = this.screenRegions[0];
        const firstAd = assigned.find(a => a && a.fileUrl);
        if (firstAd && firstRegion) {
          const dummySchedule = {
            id: 0,
            screenId: this.selectedScreen.id,
            adId: firstAd.id ?? 0,
            regionId: firstRegion.id,
            startDate: null,
            endDate: null,
            startTime: null,
            endTime: null,
            isActive: true,
            priority: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          };
          this.regionAdvertisements.set(firstRegion.id, {
            advertisement: firstAd,
            schedule: dummySchedule
          });
        }
      }
      return;
    }
    // Get unique advertisement IDs from schedules
    const adIds = [...new Set(this.advertisementSchedules.map(s => s.adId))];
    // Load all advertisement details in parallel
    const adRequests = adIds.map(adId => this.advertisementsService.getAdvertisementById(adId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(ad => ({
      adId,
      advertisement: ad
    }))));
    if (adRequests.length === 0) {
      this.regionAdvertisements.clear();
      return;
    }
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(adRequests).subscribe({
      next: results => {
        this.regionAdvertisements.clear();
        // Map advertisements to their schedules and regions
        results.forEach(({
          adId,
          advertisement
        }) => {
          const schedule = this.advertisementSchedules.find(s => s.adId === adId);
          if (schedule && schedule.regionId) {
            this.regionAdvertisements.set(schedule.regionId, {
              advertisement,
              schedule
            });
          }
        });
      },
      error: error => {
        console.error('Error loading advertisement details:', error);
        this.regionAdvertisements.clear();
      }
    });
  }
  getAdvertisementForRegion(regionId) {
    return this.regionAdvertisements.get(regionId) || null;
  }
  getRegionName(region) {
    const positionMap = {
      'left': {
        ar: 'يسار',
        en: 'Left'
      },
      'right': {
        ar: 'يمين',
        en: 'Right'
      },
      'top': {
        ar: 'أعلى',
        en: 'Top'
      },
      'bottom': {
        ar: 'أسفل',
        en: 'Bottom'
      },
      'custom': {
        ar: 'مخصص',
        en: 'Custom'
      }
    };
    const position = positionMap[region.regionPosition] || {
      ar: region.regionPosition,
      en: region.regionPosition
    };
    return this.currentLanguage === 'ar' ? position.ar : position.en;
  }
  isScheduleActive(schedule) {
    if (!schedule.isActive) {
      return false;
    }
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Minutes since midnight
    // Check date range
    if (schedule.startDate) {
      const startDate = new Date(schedule.startDate);
      startDate.setHours(0, 0, 0, 0);
      if (now < startDate) {
        return false; // Not started yet
      }
    }
    if (schedule.endDate) {
      const endDate = new Date(schedule.endDate);
      endDate.setHours(23, 59, 59, 999);
      if (now > endDate) {
        return false; // Already ended
      }
    }
    // Check time range
    if (schedule.startTime) {
      const [startHour, startMin] = schedule.startTime.split(':').map(Number);
      const startMinutes = startHour * 60 + startMin;
      if (currentTime < startMinutes) {
        return false; // Not started yet today
      }
    }
    if (schedule.endTime) {
      const [endHour, endMin] = schedule.endTime.split(':').map(Number);
      const endMinutes = endHour * 60 + endMin;
      if (currentTime > endMinutes) {
        return false; // Already ended today
      }
    }
    return true;
  }
  playVideoInRegion(regionId, muted = false) {
    if (!this.selectedScreen) {
      return;
    }
    const regionAd = this.regionAdvertisements.get(regionId);
    if (!regionAd || !regionAd.advertisement.fileUrl) {
      this.showMessageBanner('warning', this.getTranslation('noAdvertisementAssigned') || 'No advertisement assigned to this region');
      return;
    }
    this.isLoading = true;
    this.screenService.playVideoInRegion(this.selectedScreen.id, regionAd.advertisement.fileUrl, regionAd.advertisement.title || 'Advertisement', regionId, muted).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          if (this.selectedScreen) {
            this.selectedScreen.status = 'playing';
          }
          this.showMessageBanner('success', result.message || this.getTranslation('videoPlaying') || 'Video is playing');
          this.loadScreenRegionsAndSchedules();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error playing video in region:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('playVideoFailed') || 'Failed to play video');
      }
    });
  }
  pauseVideoInRegion(regionId) {
    if (!this.selectedScreen) {
      return;
    }
    this.isLoading = true;
    this.screenService.pauseVideoInRegion(this.selectedScreen.id, regionId).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || this.getTranslation('videoPaused') || 'Video paused in region');
          this.loadScreenRegionsAndSchedules();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('pauseVideoFailed') || 'Failed to pause video');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error pausing video in region:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('pauseVideoFailed') || 'Failed to pause video');
      }
    });
  }
  resumeVideoInRegion(regionId) {
    if (!this.selectedScreen) {
      return;
    }
    this.isLoading = true;
    this.screenService.resumeVideoInRegion(this.selectedScreen.id, regionId).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || this.getTranslation('videoResumed') || 'Video resumed in region');
          this.loadScreenRegionsAndSchedules();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('resumeVideoFailed') || 'Failed to resume video');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error resuming video in region:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('resumeVideoFailed') || 'Failed to resume video');
      }
    });
  }
  setFullscreenInRegion(regionId, enabled) {
    if (!this.selectedScreen) {
      return;
    }
    this.isLoading = true;
    this.screenService.setFullscreenInRegion(this.selectedScreen.id, regionId, enabled).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          this.showMessageBanner('success', result.message || (enabled ? 'Fullscreen enabled' : 'Fullscreen disabled'));
        } else {
          this.showMessageBanner('error', result.message || 'Failed to set fullscreen');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error setting fullscreen:', error);
        this.showMessageBanner('error', error.error?.error || error.message || 'Failed to set fullscreen');
      }
    });
  }
  stopVideoInRegion(regionId) {
    if (!this.selectedScreen) {
      return;
    }
    this.confirmDialogData = {
      title: this.getTranslation('confirmStopVideo') || 'Stop Video',
      message: this.getTranslation('confirmStopVideoMessage') || 'Are you sure you want to stop the video in this region?',
      confirmText: this.getTranslation('stop') || 'Stop',
      cancelText: this.getTranslation('cancel') || 'Cancel',
      onConfirm: () => {
        this.executeStopVideoInRegion(regionId);
      }
    };
    this.showConfirmDialog = true;
  }
  executeStopVideoInRegion(regionId) {
    if (!this.selectedScreen) {
      return;
    }
    this.isLoading = true;
    this.screenService.stopVideoInRegion(this.selectedScreen.id, regionId).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          // Reflect stopped state in UI so preview hides
          if (this.selectedScreen) {
            this.selectedScreen.status = 'online';
          }
          this.showMessageBanner('success', result.message || this.getTranslation('videoStopped') || 'Video stopped');
          this.loadScreenRegionsAndSchedules();
        } else {
          this.showMessageBanner('error', result.message || this.getTranslation('stopVideoFailed') || 'Failed to stop video');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error stopping video in region:', error);
        this.showMessageBanner('error', error.error?.error || error.message || this.getTranslation('stopVideoFailed') || 'Failed to stop video');
      }
    });
  }
  getScheduleStatus(schedule) {
    if (!schedule.isActive) {
      return 'ended';
    }
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    // Check if it's upcoming
    if (schedule.startDate) {
      const startDate = new Date(schedule.startDate);
      startDate.setHours(0, 0, 0, 0);
      if (now < startDate) {
        return 'upcoming';
      }
    }
    if (schedule.startTime) {
      const [startHour, startMin] = schedule.startTime.split(':').map(Number);
      const startMinutes = startHour * 60 + startMin;
      if (currentTime < startMinutes) {
        return 'upcoming';
      }
    }
    // Check if it's ended
    if (schedule.endDate) {
      const endDate = new Date(schedule.endDate);
      endDate.setHours(23, 59, 59, 999);
      if (now > endDate) {
        return 'ended';
      }
    }
    if (schedule.endTime) {
      const [endHour, endMin] = schedule.endTime.split(':').map(Number);
      const endMinutes = endHour * 60 + endMin;
      if (currentTime > endMinutes) {
        return 'ended';
      }
    }
    return 'active';
  }
  static {
    this.ɵfac = function ScreenMonitorComponent_Factory(t) {
      return new (t || ScreenMonitorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_screen_service__WEBPACK_IMPORTED_MODULE_2__.ScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_advertisements_service__WEBPACK_IMPORTED_MODULE_3__.AdvertisementsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ScreenMonitorComponent,
      selectors: [["app-screen-monitor"]],
      decls: 18,
      vars: 11,
      consts: [[1, "screen-monitor-container", 3, "dir"], [1, "monitor-content"], [1, "screens-sidebar"], [1, "sidebar-header"], [1, "fas", "fa-list", "me-2"], [1, "badge", "bg-primary", "ms-2"], [1, "screens-list"], ["class", "text-center py-4", 4, "ngIf"], ["class", "text-center py-4 text-muted", 4, "ngIf"], ["class", "screen-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "screen-details-panel"], ["class", "no-selection", 4, "ngIf"], ["class", "selected-screen-details", 4, "ngIf"], ["class", "message-banner", 3, "ngClass", 4, "ngIf"], [3, "confirmed", "cancelled", "data", "visible"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "mt-2"], [1, "text-center", "py-4", "text-muted"], [1, "fas", "fa-tv", "fa-2x", "mb-2"], [1, "screen-item", 3, "click"], [1, "screen-item-header"], [1, "screen-name"], [1, "status-badge", 3, "ngClass"], [1, "screen-item-info"], ["class", "info-row", 4, "ngIf"], [1, "info-row"], [1, "fas", "fa-network-wired", "me-1"], [1, "fas", "fa-map-marker-alt", "me-1"], [1, "fas", "fa-layer-group", "me-1"], [1, "no-selection"], [1, "no-selection-content"], [1, "fas", "fa-mouse-pointer", "fa-3x", "mb-3"], [1, "text-muted"], [1, "selected-screen-details"], ["class", "card mt-4", 4, "ngIf"], [1, "card", "mt-4"], [1, "card-body"], ["class", "text-center py-3", 4, "ngIf"], [4, "ngIf"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-info-circle", "me-2"], [1, "details-grid"], [1, "detail-item"], [1, "mt-3"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click", "disabled", "title"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", 4, "ngIf"], [1, "fas", "fa-sync-alt", "me-1"], [1, "text-center", "py-3"], [1, "mt-2", "small", "text-muted"], [1, "screen-preview-container", "mb-4"], [1, "mb-3"], [1, "fas", "fa-desktop", "me-2"], [1, "screen-preview"], ["class", "preview-region", 3, "left", "top", "width", "height", "has-advertisement", "playing", 4, "ngFor", "ngForOf"], [1, "preview-region"], [1, "region-label"], [1, "region-number"], ["class", "region-badge", 4, "ngIf"], ["class", "region-info-overlay", 4, "ngIf"], [1, "region-preview-controls"], ["class", "btn btn-xs btn-success", 3, "disabled", "title", "click", 4, "ngIf"], ["class", "btn btn-xs btn-dark", 3, "disabled", "title", "click", 4, "ngIf"], [1, "btn", "btn-xs", "btn-danger", 3, "click", "disabled", "title"], [1, "fas", "fa-stop"], [1, "btn", "btn-xs", "btn-warning", 3, "click", "disabled", "title"], [1, "fas", "fa-pause"], [1, "btn", "btn-xs", "btn-info", 3, "click", "disabled", "title"], [1, "fas", "fa-play-circle"], [1, "btn", "btn-xs", "btn-primary", 3, "click", "disabled", "title"], [1, "fas", "fa-expand"], [1, "btn", "btn-xs", "btn-secondary", 3, "click", "disabled", "title"], [1, "fas", "fa-compress"], ["class", "region-live-preview", "muted", "", "autoplay", "", "loop", "", "playsinline", "", 3, "src", "muted", 4, "ngIf"], ["class", "region-live-preview", "alt", "Advertisement preview", 3, "src", 4, "ngIf"], ["muted", "", "autoplay", "", "loop", "", "playsinline", "", 1, "region-live-preview", 3, "src", "muted"], ["alt", "Advertisement preview", 1, "region-live-preview", 3, "src"], [1, "region-badge"], [1, "fas"], [1, "region-info-overlay"], [1, "ad-title-small"], ["class", "status-badge-small", 3, "ngClass", 4, "ngIf"], [1, "status-badge-small", 3, "ngClass"], [1, "btn", "btn-xs", "btn-success", 3, "click", "disabled", "title"], [1, "fas", "fa-play"], [1, "btn", "btn-xs", "btn-dark", 3, "click", "disabled", "title"], [1, "fas", "fa-volume-mute"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "message-banner", 3, "ngClass"], [1, "message-content"], [1, "message-close", 3, "click"], [1, "fas", "fa-times"]],
      template: function ScreenMonitorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ScreenMonitorComponent_div_10_Template, 4, 1, "div", 7)(11, ScreenMonitorComponent_div_11_Template, 4, 1, "div", 8)(12, ScreenMonitorComponent_div_12_Template, 10, 8, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ScreenMonitorComponent_div_14_Template, 7, 2, "div", 11)(15, ScreenMonitorComponent_div_15_Template, 2, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ScreenMonitorComponent_div_16_Template, 7, 10, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "app-confirm-dialog", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("confirmed", function ScreenMonitorComponent_Template_app_confirm_dialog_confirmed_17_listener() {
            return ctx.onConfirmDialogConfirmed();
          })("cancelled", function ScreenMonitorComponent_Template_app_confirm_dialog_cancelled_17_listener() {
            return ctx.onConfirmDialogCancelled();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx.currentLanguage === "ar" ? "rtl" : "ltr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("screens") || "Screens", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.screens.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.screens.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.screens);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.selectedScreen);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedScreen);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.confirmDialogData)("visible", ctx.showConfirmDialog);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
      styles: [".screen-monitor-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: 100vh;\n  background: #f8f9fa;\n}\n.screen-monitor-container[dir=rtl][_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.screen-monitor-container[dir=rtl][_ngcontent-%COMP%]   .monitor-content[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.screen-monitor-container[dir=rtl][_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%] {\n  border-left: 2px solid #e9ecef;\n  border-right: none;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  text-align: center;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-right: 12px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin-top: 8px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .monitor-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  max-width: 1600px;\n  margin: 0 auto;\n  height: calc(100vh - 10px);\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%] {\n  width: 350px;\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border-right: 2px solid #e9ecef;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 2px solid #e9ecef;\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  display: flex;\n  align-items: center;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 8px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  padding: 4px 12px;\n  border-radius: 12px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n  box-shadow: 0 4px 12px rgba(0, 105, 92, 0.15);\n  border-color: #00695c;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e0f2f1 0%, #ffffff 100%);\n  border-color: #00695c;\n  box-shadow: 0 4px 12px rgba(0, 105, 92, 0.2);\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item.active[_ngcontent-%COMP%]   .screen-name[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-weight: 700;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .screen-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .screen-item-header[_ngcontent-%COMP%]   .screen-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0;\n  flex: 1;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .screen-item-header[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .screen-item-header[_ngcontent-%COMP%]   .status-badge.status-online[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .screen-item-header[_ngcontent-%COMP%]   .status-badge.status-offline[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .screen-item-header[_ngcontent-%COMP%]   .status-badge.status-playing[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  color: #0c5460;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .screen-item-header[_ngcontent-%COMP%]   .status-badge.status-paused[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .screen-item-header[_ngcontent-%COMP%]   .status-badge.status-unknown[_ngcontent-%COMP%] {\n  background-color: #e2e3e5;\n  color: #383d41;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .screen-item-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .screen-item-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  width: 16px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%]   .screen-item-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #495057;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding-right: 12px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .no-selection[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .no-selection[_ngcontent-%COMP%]   .no-selection-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .no-selection[_ngcontent-%COMP%]   .no-selection-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  margin-bottom: 16px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .no-selection[_ngcontent-%COMP%]   .no-selection-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .no-selection[_ngcontent-%COMP%]   .no-selection-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin: 0;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .screen-info-header[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .screen-info-header[_ngcontent-%COMP%]   .screen-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .screen-info-header[_ngcontent-%COMP%]   .screen-title-section[_ngcontent-%COMP%]   .screen-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .screen-info-header[_ngcontent-%COMP%]   .screen-title-section[_ngcontent-%COMP%]   .screen-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 12px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .screen-info-header[_ngcontent-%COMP%]   .screen-title-section[_ngcontent-%COMP%]   .status-badge-large[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .screen-info-header[_ngcontent-%COMP%]   .screen-title-section[_ngcontent-%COMP%]   .status-badge-large.status-online[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .screen-info-header[_ngcontent-%COMP%]   .screen-title-section[_ngcontent-%COMP%]   .status-badge-large.status-offline[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .screen-info-header[_ngcontent-%COMP%]   .screen-title-section[_ngcontent-%COMP%]   .status-badge-large.status-playing[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  color: #0c5460;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .screen-info-header[_ngcontent-%COMP%]   .screen-title-section[_ngcontent-%COMP%]   .status-badge-large.status-paused[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: white;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border-bottom: 2px solid #e9ecef;\n  padding: 16px 20px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  display: flex;\n  align-items: center;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  margin-right: 8px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .no-video-playing[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .no-video-playing[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  margin-bottom: 12px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .no-video-playing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .playing-video-info[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 20px;\n  border-radius: 12px;\n  border-left: 4px solid #00695c;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .playing-video-info[_ngcontent-%COMP%]   .video-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .playing-video-info[_ngcontent-%COMP%]   .video-title-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n  margin: 0;\n  flex: 1;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .playing-video-info[_ngcontent-%COMP%]   .video-title-section[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .playing-video-info[_ngcontent-%COMP%]   .video-title-section[_ngcontent-%COMP%]   .badge.bg-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .playing-video-info[_ngcontent-%COMP%]   .video-title-section[_ngcontent-%COMP%]   .badge.bg-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n  color: #212529;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .playing-video-info[_ngcontent-%COMP%]   .video-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .playing-video-info[_ngcontent-%COMP%]   .video-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  min-width: 120px;\n  color: #495057;\n  font-weight: 600;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .playing-video-info[_ngcontent-%COMP%]   .video-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #212529;\n  word-break: break-word;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .btn-control[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .btn-control[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .btn-control[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .btn-control[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .btn-control.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  color: white;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .btn-control.btn-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);\n  color: white;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .btn-control.btn-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffc107 0%, #ffca2c 100%);\n  color: white;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .btn-control.btn-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);\n  color: white;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .btn-control.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #212529;\n  font-size: 1rem;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .message-banner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 80px;\n  right: 24px;\n  z-index: 1000;\n  min-width: 300px;\n  max-width: 500px;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .message-banner.message-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  color: white;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .message-banner.message-error[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);\n  color: white;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .message-banner.message-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffc107 0%, #ffca2c 100%);\n  color: #212529;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .message-banner.message-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);\n  color: white;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .message-banner[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .message-banner[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .message-banner[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .message-banner[_ngcontent-%COMP%]   .message-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: inherit;\n  font-size: 1.25rem;\n  cursor: pointer;\n  padding: 0;\n  margin-left: 16px;\n  opacity: 0.8;\n  transition: opacity 0.2s;\n}\n.screen-monitor-container[_ngcontent-%COMP%]   .message-banner[_ngcontent-%COMP%]   .message-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n@media (max-width: 1200px) {\n  .screen-monitor-container[_ngcontent-%COMP%]   .monitor-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .screen-monitor-container[_ngcontent-%COMP%]   .monitor-content[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 400px;\n    border-right: none;\n    border-bottom: 2px solid #e9ecef;\n  }\n  .screen-monitor-container[_ngcontent-%COMP%]   .monitor-content[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .screen-monitor-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .screen-monitor-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .screen-monitor-container[_ngcontent-%COMP%]   .monitor-content[_ngcontent-%COMP%]   .screens-sidebar[_ngcontent-%COMP%]   .screens-list[_ngcontent-%COMP%]   .screen-item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .screen-monitor-container[_ngcontent-%COMP%]   .monitor-content[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .screen-monitor-container[_ngcontent-%COMP%]   .monitor-content[_ngcontent-%COMP%]   .screen-details-panel[_ngcontent-%COMP%]   .selected-screen-details[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .screen-monitor-container[_ngcontent-%COMP%]   .message-banner[_ngcontent-%COMP%] {\n    right: 16px;\n    left: 16px;\n    min-width: auto;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .screen-monitor-container[_ngcontent-%COMP%]   .message-banner[_ngcontent-%COMP%] {\n  right: auto;\n  left: 24px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .screen-monitor-container[_ngcontent-%COMP%]   .controls-grid[_ngcontent-%COMP%]   .btn-control[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n\n.screen-preview-container[_ngcontent-%COMP%]   .preview-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.875rem;\n  padding: 6px 12px;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .preview-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n}\n.screen-preview-container[_ngcontent-%COMP%]   .preview-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .preview-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background: #1a1a1a;\n  border: 2px solid #333;\n  border-radius: 8px;\n  overflow: hidden;\n  min-height: 300px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 2px solid #4caf50;\n  background: rgba(0, 0, 0, 0.95);\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-live-preview[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region.has-advertisement[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.2);\n  border-color: #4caf50;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region.playing[_ngcontent-%COMP%] {\n  border-color: #4caf50;\n  box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);\n  animation: _ngcontent-%COMP%_pulse-border 2s infinite;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  z-index: 10;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-label[_ngcontent-%COMP%]   .region-number[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.9);\n  color: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 600;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-label[_ngcontent-%COMP%]   .region-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 2px 4px;\n  border-radius: 4px;\n  font-size: 8px;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-info-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  left: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.8);\n  padding: 4px 6px;\n  border-radius: 4px;\n  z-index: 10;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-info-overlay[_ngcontent-%COMP%]   .ad-title-small[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 9px;\n  font-weight: 600;\n  margin-bottom: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-info-overlay[_ngcontent-%COMP%]   .status-badge-small[_ngcontent-%COMP%] {\n  font-size: 8px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-preview-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  display: flex;\n  gap: 4px;\n  z-index: 20;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 4px;\n  border-radius: 4px;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-preview-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 10px;\n  line-height: 1;\n  border: none;\n  border-radius: 3px;\n  min-width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-preview-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin: 0;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-preview-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.1);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-preview-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-preview-controls[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-preview-controls[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-preview-controls[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #212529;\n}\n.screen-preview-container[_ngcontent-%COMP%]   .screen-preview[_ngcontent-%COMP%]   .preview-region[_ngcontent-%COMP%]   .region-preview-controls[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%] {\n  background: #17a2b8;\n  color: white;\n}\n\n@keyframes _ngcontent-%COMP%_pulse-border {\n  0%, 100% {\n    box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 20px rgba(76, 175, 80, 0.8);\n  }\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  padding: 16px;\n  background: #fff;\n  transition: all 0.3s ease;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-color: #4caf50;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #e9ecef;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 4px 8px;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-content[_ngcontent-%COMP%]   .advertisement-info[_ngcontent-%COMP%]   .ad-header[_ngcontent-%COMP%]   .ad-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-content[_ngcontent-%COMP%]   .advertisement-info[_ngcontent-%COMP%]   .ad-header[_ngcontent-%COMP%]   .ad-title-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n  font-size: 0.95rem;\n  flex: 1;\n  margin-right: 12px;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-content[_ngcontent-%COMP%]   .advertisement-info[_ngcontent-%COMP%]   .ad-header[_ngcontent-%COMP%]   .ad-title-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00695c;\n  font-size: 0.85rem;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-content[_ngcontent-%COMP%]   .advertisement-info[_ngcontent-%COMP%]   .ad-header[_ngcontent-%COMP%]   .ad-title-section[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 4px 8px;\n  white-space: nowrap;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-content[_ngcontent-%COMP%]   .advertisement-info[_ngcontent-%COMP%]   .ad-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-content[_ngcontent-%COMP%]   .advertisement-info[_ngcontent-%COMP%]   .ad-details[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-content[_ngcontent-%COMP%]   .advertisement-info[_ngcontent-%COMP%]   .ad-details[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  text-align: center;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-content[_ngcontent-%COMP%]   .no-advertisement[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 6px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.regions-list[_ngcontent-%COMP%]   .region-card[_ngcontent-%COMP%]   .region-content[_ngcontent-%COMP%]   .no-advertisement[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NyZWVucy9jb21wb25lbnRzL3NjcmVlbi1tb25pdG9yL3NjcmVlbi1tb25pdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVJO0VBQ0UsaUJBQUE7QUFBTjtBQUdJO0VBQ0UsMkJBQUE7QUFETjtBQUlJO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQUZOO0FBTUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFNSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpOO0FBTU07RUFDRSxjQUFBO0VBQ0EscURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUpSO0FBUUk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTk47QUFVRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFSSjtBQVlFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQVlJO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkRBQUE7QUFWTjtBQVlNO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVlI7QUFZUTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQVZWO0FBYVE7RUFDRSxpQkFBQTtFQUNBLDZEQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVhWO0FBZ0JJO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQWROO0FBZ0JNO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBZFI7QUFnQlE7RUFDRSwwQkFBQTtFQUNBLDZDQUFBO0VBQ0EscUJBQUE7QUFkVjtBQWlCUTtFQUNFLDZEQUFBO0VBQ0EscUJBQUE7RUFDQSw0Q0FBQTtBQWZWO0FBaUJVO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBZlo7QUFtQlE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBakJWO0FBbUJVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBakJaO0FBb0JVO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQWxCWjtBQW9CWTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQWxCZDtBQXFCWTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQW5CZDtBQXNCWTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQXBCZDtBQXVCWTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQXJCZDtBQXdCWTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQXRCZDtBQTRCVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQTFCWjtBQTRCWTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBMUJkO0FBNkJZO0VBQ0UsY0FBQTtBQTNCZDtBQW9DRTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBbENKO0FBb0NJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBbENOO0FBb0NNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBbENSO0FBb0NRO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBbENWO0FBcUNRO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFuQ1Y7QUFzQ1E7RUFDRSxjQUFBO0VBQ0EsU0FBQTtBQXBDVjtBQTBDTTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXhDUjtBQTBDUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBeENWO0FBMENVO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBeENaO0FBMENZO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBeENkO0FBNENVO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQTFDWjtBQTRDWTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQTFDZDtBQTZDWTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQTNDZDtBQThDWTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQTVDZDtBQStDWTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQTdDZDtBQW1ETTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBakRSO0FBbURRO0VBQ0UsNkRBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBakRWO0FBbURVO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBakRaO0FBbURZO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBakRkO0FBc0RRO0VBQ0UsYUFBQTtBQXBEVjtBQXdETTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBdERSO0FBd0RRO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBdERWO0FBeURRO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUF2RFY7QUEyRE07RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBekRSO0FBMkRRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXpEVjtBQTJEVTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBekRaO0FBNERVO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUExRFo7QUE0RFk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUExRGQ7QUE2RFk7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUEzRGQ7QUFpRVU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUEvRFo7QUFpRVk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQS9EZDtBQWtFWTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQWhFZDtBQXNFTTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUFwRVI7QUFzRVE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBcEVWO0FBc0VVO0VBQ0UsaUJBQUE7QUFwRVo7QUF1RVU7RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0FBckVaO0FBd0VVO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBdEVaO0FBeUVVO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FBdkVaO0FBMEVVO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FBeEVaO0FBMkVVO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FBekVaO0FBNEVVO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FBMUVaO0FBNkVVO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FBM0VaO0FBZ0ZNO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQTlFUjtBQWdGUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUE5RVY7QUFnRlU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTlFWjtBQWlGVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBL0VaO0FBdUZFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBckZKO0FBdUZJO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FBckZOO0FBd0ZJO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FBdEZOO0FBeUZJO0VBQ0UsNkRBQUE7RUFDQSxjQUFBO0FBdkZOO0FBMEZJO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FBeEZOO0FBMkZJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUF6Rk47QUEyRk07RUFDRSxrQkFBQTtBQXpGUjtBQTRGTTtFQUNFLE9BQUE7QUExRlI7QUE4Rkk7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBNUZOO0FBOEZNO0VBQ0UsVUFBQTtBQTVGUjtBQWlHRTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBL0ZKO0VBaUdFO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VBL0ZKO0FBQ0Y7O0FBb0dBO0VBRUk7SUFDRSxzQkFBQTtFQWxHSjtFQW9HSTtJQUNFLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0NBQUE7RUFsR047RUFxR0k7SUFDRSxXQUFBO0VBbkdOO0FBQ0Y7QUF3R0E7RUFDRTtJQUNFLGFBQUE7RUF0R0Y7RUF5R0k7SUFDRSxrQkFBQTtFQXZHTjtFQThHUTtJQUNFLGFBQUE7RUE1R1Y7RUFtSFE7SUFDRSwwQkFBQTtFQWpIVjtFQW9IUTtJQUNFLDBCQUFBO0VBbEhWO0VBd0hFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VBdEhKO0FBQ0Y7QUE2SEk7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQTNITjtBQWdJUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQTlIVjs7QUF3SUk7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBcklOO0FBdUlNO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtBQXJJUjtBQXdJTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQXRJUjtBQXlJTTtFQUNFLG1CQUFBO0FBdklSO0FBNElFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FBMUlKO0FBNElJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQTFJTjtBQTRJTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTFJUjtBQTZJTTtFQUNFLGtDQUFBO0VBQ0EscUJBQUE7QUEzSVI7QUE4SU07RUFDRSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUNBQUE7QUE1SVI7QUErSU07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUE3SVI7QUErSVE7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBN0lWO0FBZ0pRO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUE5SVY7QUFrSk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFoSlI7QUFrSlE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFoSlY7QUFtSlE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBakpWO0FBcUpNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBbkpSO0FBcUpRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQW5KVjtBQXFKVTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FBbkpaO0FBc0pVO0VBQ0UscUJBQUE7RUFDQSx3Q0FBQTtBQXBKWjtBQXVKVTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQXJKWjtBQXdKVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQXRKWjtBQXlKVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQXZKWjtBQTBKVTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQXhKWjtBQTJKVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQXpKWjs7QUFpS0E7RUFDRTtJQUNFLDJDQUFBO0VBOUpGO0VBZ0tBO0lBQ0UsMkNBQUE7RUE5SkY7QUFDRjtBQW1LRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQWpLSjtBQW1LSTtFQUNFLHdDQUFBO0VBQ0EscUJBQUE7QUFqS047QUFvS0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQWxLTjtBQW9LTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFsS1I7QUFvS1E7RUFDRSxjQUFBO0FBbEtWO0FBc0tNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQXBLUjtBQTJLVTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF6S1o7QUEyS1k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQXpLZDtBQTJLYztFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQXpLaEI7QUE2S1k7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUEzS2Q7QUFnTFE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBOUtWO0FBZ0xVO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBOUtaO0FBZ0xZO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBOUtkO0FBb0xNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWxMUjtBQW9MUTtFQUNFLGNBQUE7QUFsTFYiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NyZWVuLW1vbml0b3ItY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcblxyXG4gICZbZGlyPVwicnRsXCJdIHtcclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vbml0b3ItY29udGVudCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2NyZWVucy1zaWRlYmFyIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFnZS1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMsICM0ZGI2YWMpO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2Utc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb25pdG9yLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMjRweDtcclxuICAgIG1heC13aWR0aDogMTYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHB4KTtcclxuICB9XHJcblxyXG4gIC8vIExlZnQgU2lkZWJhciAtIFNjcmVlbnMgTGlzdFxyXG4gIC5zY3JlZW5zLXNpZGViYXIge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2U5ZWNlZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuc2lkZWJhci1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U5ZWNlZjtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2Y4ZjlmYSAxMDAlKTtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNjcmVlbnMtbGlzdCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcblxyXG4gICAgICAuc2NyZWVuLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAxMDUsIDkyLCAwLjE1KTtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMGYyZjEgMCUsICNmZmZmZmYgMTAwJSk7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMTA1LCA5MiwgMC4yKTtcclxuXHJcbiAgICAgICAgICAuc2NyZWVuLW5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zY3JlZW4taXRlbS1oZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICAgICAgICAgIC5zY3JlZW4tbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3RhdHVzLWJhZGdlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgICAgICAgJi5zdGF0dXMtb25saW5lIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnN0YXR1cy1vZmZsaW5lIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnN0YXR1cy1wbGF5aW5nIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlY2YxO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMGM1NDYwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnN0YXR1cy1wYXVzZWQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM4NTY0MDQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc3RhdHVzLXVua25vd24ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUzZTU7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzODNkNDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zY3JlZW4taXRlbS1pbmZvIHtcclxuICAgICAgICAgIC5pbmZvLXJvdyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSaWdodCBQYW5lbCAtIFNjcmVlbiBEZXRhaWxzXHJcbiAgLnNjcmVlbi1kZXRhaWxzLXBhbmVsIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuXHJcbiAgICAubm8tc2VsZWN0aW9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiAgICAgIC5uby1zZWxlY3Rpb24tY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6ICNhZGI1YmQ7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VsZWN0ZWQtc2NyZWVuLWRldGFpbHMge1xyXG4gICAgICAuc2NyZWVuLWluZm8taGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblxyXG4gICAgICAgIC5zY3JlZW4tdGl0bGUtc2VjdGlvbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAuc2NyZWVuLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwNjk1YztcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3RhdHVzLWJhZGdlLWxhcmdlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgICAgICAgICAmLnN0YXR1cy1vbmxpbmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMxNTU3MjQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc3RhdHVzLW9mZmxpbmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc3RhdHVzLXBsYXlpbmcge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwYzU0NjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc3RhdHVzLXBhdXNlZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNjZDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzg1NjQwNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmZmZmIDAlLCAjZjhmOWZhIDEwMCUpO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubm8tdmlkZW8tcGxheWluZyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjBweDtcclxuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogI2FkYjViZDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wbGF5aW5nLXZpZGVvLWluZm8ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwNjk1YztcclxuXHJcbiAgICAgICAgLnZpZGVvLXRpdGxlLXNlY3Rpb24ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICAgICAgICAgJi5iZy1zdWNjZXNzIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5iZy13YXJuaW5nIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmlkZW8tZGV0YWlscyB7XHJcbiAgICAgICAgICAuZGV0YWlsLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZ2FwOiA4cHg7XHJcblxyXG4gICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRyb2xzLWdyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XHJcbiAgICAgICAgZ2FwOiAxMnB4O1xyXG5cclxuICAgICAgICAuYnRuLWNvbnRyb2wge1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5idG4tc3VjY2VzcyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUgMCUsICMyMGM5OTcgMTAwJSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmJ0bi1kYW5nZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZGMzNTQ1IDAlLCAjYzgyMzMzIDEwMCUpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5idG4td2FybmluZyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmMxMDcgMCUsICNmZmNhMmMgMTAwJSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmJ0bi1pbmZvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE3YTJiOCAwJSwgIzEzODQ5NiAxMDAlKTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuYnRuLXByaW1hcnkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA2OTVjIDAlLCAjNGRiNmFjIDEwMCUpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGV0YWlscy1ncmlkIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuXHJcbiAgICAgICAgLmRldGFpbC1pdGVtIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZ2FwOiA0cHg7XHJcblxyXG4gICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBNZXNzYWdlIEJhbm5lclxyXG4gIC5tZXNzYWdlLWJhbm5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDgwcHg7XHJcbiAgICByaWdodDogMjRweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcblxyXG4gICAgJi5tZXNzYWdlLXN1Y2Nlc3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1IDAlLCAjMjBjOTk3IDEwMCUpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5tZXNzYWdlLWVycm9yIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RjMzU0NSAwJSwgI2M4MjMzMyAxMDAlKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICYubWVzc2FnZS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmYzEwNyAwJSwgI2ZmY2EyYyAxMDAlKTtcclxuICAgICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5tZXNzYWdlLWluZm8ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTdhMmI4IDAlLCAjMTM4NDk2IDEwMCUpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2UtY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMTJweDtcclxuICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLWNsb3NlIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5zY3JlZW4tbW9uaXRvci1jb250YWluZXIge1xyXG4gICAgLm1vbml0b3ItY29udGVudCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAuc2NyZWVucy1zaWRlYmFyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zY3JlZW4tZGV0YWlscy1wYW5lbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zY3JlZW4tbW9uaXRvci1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICAucGFnZS1oZWFkZXIge1xyXG4gICAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1vbml0b3ItY29udGVudCB7XHJcbiAgICAgIC5zY3JlZW5zLXNpZGViYXIge1xyXG4gICAgICAgIC5zY3JlZW5zLWxpc3Qge1xyXG4gICAgICAgICAgLnNjcmVlbi1pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zY3JlZW4tZGV0YWlscy1wYW5lbCB7XHJcbiAgICAgICAgLnNlbGVjdGVkLXNjcmVlbi1kZXRhaWxzIHtcclxuICAgICAgICAgIC5jb250cm9scy1ncmlkIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRldGFpbHMtZ3JpZCB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLWJhbm5lciB7XHJcbiAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSVEwgU3VwcG9ydFxyXG5bZGlyPVwicnRsXCJdIHtcclxuICAuc2NyZWVuLW1vbml0b3ItY29udGFpbmVyIHtcclxuICAgIC5tZXNzYWdlLWJhbm5lciB7XHJcbiAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICBsZWZ0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250cm9scy1ncmlkIHtcclxuICAgICAgLmJ0bi1jb250cm9sIHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTY3JlZW4gUHJldmlldyBTdHlsZXNcclxuLnNjcmVlbi1wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgLnByZXZpZXctY29udHJvbHMge1xyXG4gICAgLmJ0biB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JlZW4tcHJldmlldyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMxYTFhMWE7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuICAgIC5wcmV2aWV3LXJlZ2lvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzRjYWY1MDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjk1KTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgIC5yZWdpb24tbGl2ZS1wcmV2aWV3IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaW5zZXQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5oYXMtYWR2ZXJ0aXNlbWVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTc1LCA4MCwgMC4yKTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM0Y2FmNTA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYucGxheWluZyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNGNhZjUwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoNzYsIDE3NSwgODAsIDAuNSk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZS1ib3JkZXIgMnMgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWdpb24tbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogNHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgICAgICAucmVnaW9uLW51bWJlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjkpO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogMnB4IDZweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVnaW9uLWJhZGdlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJweCA0cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWdpb24taW5mby1vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgICAgICAuYWQtdGl0bGUtc21hbGwge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0dXMtYmFkZ2Utc21hbGwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycHggNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWdpb24tcHJldmlldy1jb250cm9scyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDRweDtcclxuICAgICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5idG4tZGFuZ2VyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuYnRuLXdhcm5pbmcge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xyXG4gICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmJ0bi1pbmZvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE3YTJiODtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZS1ib3JkZXIge1xyXG4gIDAlLCAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoNzYsIDE3NSwgODAsIDAuNSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjgpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gU2NyZWVuIFJlZ2lvbnMgJiBBZHZlcnRpc2VtZW50cyBTdHlsZXNcclxuLnJlZ2lvbnMtbGlzdCB7XHJcbiAgLnJlZ2lvbi1jYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzRjYWY1MDtcclxuICAgIH1cclxuXHJcbiAgICAucmVnaW9uLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG5cclxuICAgICAgaDUge1xyXG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjNGNhZjUwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJhZGdlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZWdpb24tY29udGVudCB7XHJcbiAgICAgIC5hZHZlcnRpc2VtZW50LWluZm8ge1xyXG4gICAgICAgIC5hZC1oZWFkZXIge1xyXG4gICAgICAgICAgLmFkLXRpdGxlLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFkLWRldGFpbHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBnYXA6IDRweDtcclxuXHJcbiAgICAgICAgICAuc21hbGwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uby1hZHZlcnRpc2VtZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogI2FkYjViZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9741:
/*!******************************************************************************************!*\
  !*** ./src/app/features/screens/components/screen-playback/screen-playback.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenPlaybackComponent: () => (/* binding */ ScreenPlaybackComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/language.service */ 3318);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/translation.service */ 2243);
/* harmony import */ var _core_services_screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/screen.service */ 2588);
/* harmony import */ var _core_services_advertisements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/advertisements.service */ 9282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 8709);
/* harmony import */ var _shared_components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/alert-dialog/alert-dialog.component */ 5997);
/* harmony import */ var _group_layout_group_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../group-layout/group-layout.component */ 5471);













function ScreenPlaybackComponent_div_14_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const screen_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", screen_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", screen_r3.name, " - ", screen_r3.location || "No location", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("status-badge " + ctx_r1.getScreenStatusClass(screen_r3.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getScreenStatusText(screen_r3.status), " ");
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("groupName") || "Group Name", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedScreen.groupName);
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47)(1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noGroupAssigned") || "No group assigned");
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_43_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedScreen.subsiteName, " ");
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_43_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedScreen.sectionName, " ");
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_43_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedScreen.specialDivisionName, " ");
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_43_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("noLocationAssigned") || "No location assigned", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 54)(1, "div", 55)(2, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ScreenPlaybackComponent_div_14_div_11_div_43_span_6_Template, 3, 1, "span", 58)(7, ScreenPlaybackComponent_div_14_div_11_div_43_span_7_Template, 3, 1, "span", 58)(8, ScreenPlaybackComponent_div_14_div_11_div_43_span_8_Template, 3, 1, "span", 58)(9, ScreenPlaybackComponent_div_14_div_11_div_43_span_9_Template, 2, 1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("locationInformation") || "Location Information", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.subsiteName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.sectionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.specialDivisionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.selectedScreen.subsiteName && !ctx_r1.selectedScreen.sectionName && !ctx_r1.selectedScreen.specialDivisionName);
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_44_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedScreen.assignedUserName, " ");
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_44_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" +", ctx_r1.selectedScreen.assignedUserIds.length - 1, " ", ctx_r1.getTranslation("more") || "more", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_44_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("noUserAssigned") || "No user assigned", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 54)(1, "div", 55)(2, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ScreenPlaybackComponent_div_14_div_11_div_44_span_6_Template, 3, 1, "span", 65)(7, ScreenPlaybackComponent_div_14_div_11_div_44_span_7_Template, 2, 2, "span", 66)(8, ScreenPlaybackComponent_div_14_div_11_div_44_span_8_Template, 2, 1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("assignedUsers") || "Assigned Users", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.assignedUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.assignedUserIds && ctx_r1.selectedScreen.assignedUserIds.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.selectedScreen.assignedUserName && (!ctx_r1.selectedScreen.assignedUserIds || ctx_r1.selectedScreen.assignedUserIds.length === 0));
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_45_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("startDate") || "Start Date", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 2, ctx_r1.selectedScreen.startDate, "shortDate"));
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_45_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("endDate") || "End Date", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 2, ctx_r1.selectedScreen.endDate, "shortDate"));
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_45_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("startTime") || "Start Time", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedScreen.startTime);
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_45_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("endTime") || "End Time", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedScreen.endTime);
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_45_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47)(1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noScheduleSet") || "No schedule set");
  }
}
function ScreenPlaybackComponent_div_14_div_11_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 54)(1, "div", 44)(2, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ScreenPlaybackComponent_div_14_div_11_div_45_div_5_Template, 6, 5, "div", 50)(6, ScreenPlaybackComponent_div_14_div_11_div_45_div_6_Template, 6, 5, "div", 50)(7, ScreenPlaybackComponent_div_14_div_11_div_45_div_7_Template, 5, 2, "div", 50)(8, ScreenPlaybackComponent_div_14_div_11_div_45_div_8_Template, 5, 2, "div", 50)(9, ScreenPlaybackComponent_div_14_div_11_div_45_div_9_Template, 3, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 44)(11, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 47)(15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 47)(20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("schedule") || "Schedule", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.endTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.selectedScreen.startDate && !ctx_r1.selectedScreen.endDate && !ctx_r1.selectedScreen.startTime && !ctx_r1.selectedScreen.endTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("displaySettings") || "Display Settings", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("orientation") || "Orientation", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedScreen.orientation || "landscape");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("screenSize") || "Screen Size", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedScreen.screenSize || "medium");
  }
}
function ScreenPlaybackComponent_div_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "div", 44)(3, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 47)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 47)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 47)(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 47)(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 48)(27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 47)(32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 44)(38, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, ScreenPlaybackComponent_div_14_div_11_div_41_Template, 5, 2, "div", 50)(42, ScreenPlaybackComponent_div_14_div_11_div_42_Template, 3, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, ScreenPlaybackComponent_div_14_div_11_div_43_Template, 10, 5, "div", 51)(44, ScreenPlaybackComponent_div_14_div_11_div_44_Template, 9, 4, "div", 51)(45, ScreenPlaybackComponent_div_14_div_11_div_45_Template, 24, 11, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("basicInformation") || "Basic Information", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("screenName") || "Screen Name", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedScreen.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("status") || "Status", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("status-badge " + ctx_r1.getScreenStatusClass(ctx_r1.selectedScreen.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getScreenStatusText(ctx_r1.selectedScreen.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("ipAddress") || "IP Address", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedScreen.ipAddress || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("macAddress") || "MAC Address", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedScreen.macAddress || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("deviceId") || "Device ID", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedScreen.deviceId || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("lastConnected") || "Last Connected", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](36, 21, ctx_r1.selectedScreen.lastConnected, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("groupInformation") || "Group Information", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.groupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.selectedScreen.groupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.subsiteName || ctx_r1.selectedScreen.sectionName || ctx_r1.selectedScreen.specialDivisionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.assignedUserName || ctx_r1.selectedScreen.assignedUserIds && ctx_r1.selectedScreen.assignedUserIds.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen.startDate || ctx_r1.selectedScreen.endDate || ctx_r1.selectedScreen.startTime || ctx_r1.selectedScreen.endTime);
  }
}
function ScreenPlaybackComponent_div_14_div_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("loading") || "Loading...", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_12_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 96)(1, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_div_14_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.resetAllRegions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", ctx_r1.getTranslation("resetRegions") || "Reset All Regions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("reset") || "Reset", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_12_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 99)(1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ul", 102)(7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("howToUse") || "How to use:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("instruction1") || "Click and drag on the screen preview below to select a custom area");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("instruction2") || "OR use the quick split buttons (Left/Right or Top/Bottom) to divide the screen automatically");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("instruction3") || "Click \"Save Selected Region\" after selecting an area");
  }
}
function ScreenPlaybackComponent_div_14_div_12_div_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_div_16_div_8_Template_div_click_0_listener() {
      const region_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectRegionForEdit(region_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 111)(2, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_div_16_div_8_Template_button_click_4_listener($event) {
      const region_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      ctx_r1.deleteRegion(region_r7.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const region_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", "transparent")("border", "2px solid #28a745")("border-radius", "8px");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected", (ctx_r1.selectedRegionForEdit == null ? null : ctx_r1.selectedRegionForEdit.id) === region_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-index", i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("font-size", "28px")("font-weight", "700")("color", "#333333");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", i_r8 + 1, " of ", ctx_r1.screenRegions.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("position", "absolute")("top", "12px")("right", "12px")("background", "rgba(255, 255, 255, 0.95)")("border", "2px solid #dc3545")("color", "#dc3545")("width", "36px")("height", "36px")("border-radius", "8px")("display", "flex")("align-items", "center")("justify-content", "center")("font-size", "18px")("font-weight", "bold")("cursor", "pointer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", ctx_r1.getTranslation("delete") || "Delete");
  }
}
function ScreenPlaybackComponent_div_14_div_12_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 103)(1, "h6", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "small", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 107)(7, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ScreenPlaybackComponent_div_14_div_12_div_16_div_8_Template, 6, 48, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r1.getTranslation("createdRegions") || "Created Regions", " (", ctx_r1.screenRegions.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Grid: ", ctx_r1.getGridColumns(), "\u00D7", ctx_r1.getGridRows(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("grid-template-columns", "repeat(" + ctx_r1.getGridColumns() + ", 1fr)")("grid-template-rows", "repeat(" + ctx_r1.getGridRows() + ", minmax(180px, 1fr))")("display", "grid")("grid-auto-flow", "row");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-cols", ctx_r1.getGridColumns())("data-rows", ctx_r1.getGridRows());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.getSortedRegions());
  }
}
function ScreenPlaybackComponent_div_14_div_12_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 115)(1, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r1.pendingSelections.length, " ", ctx_r1.getTranslation("regionsSelected") || "region(s) selected", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_12_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_button_49_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.saveAllPendingSelections());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isSelectingRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r1.getTranslation("saveAllRegions") || "Create All Regions", " (", ctx_r1.pendingSelections.length, ") ");
  }
}
function ScreenPlaybackComponent_div_14_div_12_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_button_50_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.clearPendingSelections());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isSelectingRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("clearSelections") || "Clear All", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ScreenPlaybackComponent_div_14_div_12_div_6_Template, 3, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 74)(8, "div", 75)(9, "div")(10, "h5", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, ScreenPlaybackComponent_div_14_div_12_div_14_Template, 4, 2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, ScreenPlaybackComponent_div_14_div_12_div_15_Template, 13, 4, "div", 79)(16, ScreenPlaybackComponent_div_14_div_12_div_16_Template, 9, 15, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 81)(18, "div", 82)(19, "div", 83)(20, "label", 84)(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 85)(24, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.createGridLayout(1, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " 1\u00D71 (Full) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.createGridLayout(1, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, " 1\u00D72 (Left/Right) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.createGridLayout(2, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " 2\u00D71 (Top/Bottom) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.createGridLayout(2, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, " 2\u00D72 (4 Boxes) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.createGridLayout(2, 3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, " 2\u00D73 (6 Boxes) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.createGridLayout(3, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, " 3\u00D72 (6 Boxes) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.createGridLayout(3, 3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " 3\u00D73 (9 Boxes) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_12_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.createGridLayout(4, 4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, " 4\u00D74 (16 Boxes) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, ScreenPlaybackComponent_div_14_div_12_div_48_Template, 4, 2, "div", 91)(49, ScreenPlaybackComponent_div_14_div_12_button_49_Template, 3, 3, "button", 92)(50, ScreenPlaybackComponent_div_14_div_12_button_50_Template, 3, 2, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("screenRegions") || "Screen Regions", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingRegions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("screenRegions") || "Screen Regions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("setupScreenRegions") || "Select areas on the screen to create regions for different advertisements", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.screenRegions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.screenRegions.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.screenRegions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("selectGridLayout") || "Select Grid Layout:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isSelectingRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isSelectingRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isSelectingRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isSelectingRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isSelectingRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isSelectingRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isSelectingRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isSelectingRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.pendingSelections.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.pendingSelections.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.pendingSelections.length > 0);
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("loading") || "Loading...", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_7_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 119);
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 131);
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 126)(1, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_13_div_7_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.saveAssignedPlaylist());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ScreenPlaybackComponent_div_14_div_13_div_7_i_4_Template, 1, 0, "i", 129)(5, ScreenPlaybackComponent_div_14_div_13_div_7_span_5_Template, 1, 0, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("assignedPlaylistHint") || "Drag cards to set playback order. Set seconds per image slide, then save.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isSavingPlaylist);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.isSavingPlaylist);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.isSavingPlaylist);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("saveOrderAndTiming") || "Save order & slide timing", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ad_r14.description, " ");
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_video_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "video", 166);
  }
  if (rf & 2) {
    const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.resolveAdMediaUrl(ad_r14.fileUrl), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_img_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 167);
  }
  if (rf & 2) {
    const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.getAssignedAdPreviewUrl(ad_r14), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", ad_r14.title);
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_21_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 172);
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_21_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 173);
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_21_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 174);
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_21_i_1_Template, 1, 0, "i", 169)(2, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_21_i_2_Template, 1, 0, "i", 170)(3, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_21_i_3_Template, 1, 0, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ad_r14.type === "presentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ad_r14.type === "document");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ad_r14.type !== "presentation" && ad_r14.type !== "document");
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_30_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", region_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", i_r17 + 1, " of ", ctx_r1.screenRegions.length, " ");
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 175)(1, "label", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "select", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_30_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onRegionSelectChange(ad_r14.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "option", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_30_option_6_Template, 2, 3, "option", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("assignToRegion") || "Assign to Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.getSelectedRegionIdForAd(ad_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noRegion") || "No Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.screenRegions);
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_31_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getAdvertisementSchedule(ad_r14.id).startTime, " ");
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_31_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_31_div_8_span_2_Template, 2, 1, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDateForInput(ctx_r1.getAdvertisementSchedule(ad_r14.id).startDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r1.getAdvertisementSchedule(ad_r14.id)) == null ? null : tmp_9_0.startTime);
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 175)(1, "div", 181)(2, "div", 182)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_31_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openScheduleModal(ad_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_31_div_8_Template, 3, 2, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("scheduled") || "Scheduled", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", ctx_r1.getTranslation("editSchedule") || "Edit Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r1.getAdvertisementSchedule(ad_r14.id)) == null ? null : tmp_9_0.startDate);
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dragstart", function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_Template_div_dragstart_0_listener($event) {
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onAssignedDragStart(i_r13, $event));
    })("dragover", function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_Template_div_dragover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onAssignedDragOver($event));
    })("drop", function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_Template_div_drop_0_listener($event) {
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onAssignedDrop(i_r13, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 135)(2, "div", 136)(3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_Template_button_click_3_listener($event) {
      const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      ctx_r1.onRemoveAssignedAdvertisement(ad_r14.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 32)(6, "div", 139)(7, "div", 140)(8, "div", 141)(9, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "h6", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_p_13_Template, 2, 1, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 146)(15, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_video_19_Template, 1, 1, "video", 150)(20, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_img_20_Template, 1, 2, "img", 151)(21, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_21_Template, 4, 3, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 153)(23, "div", 154)(24, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 156)(27, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_Template_input_ngModelChange_29_listener($event) {
      const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onSlideDurationSecondsChange(ad_r14, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_30_Template, 7, 4, "div", 159)(31, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_div_31_Template, 9, 3, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 160)(33, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_Template_button_click_33_listener($event) {
      const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      ctx_r1.selectAdvertisement(ad_r14);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "i", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_13_div_8_div_1_Template_button_click_36_listener($event) {
      const ad_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      ctx_r1.openScheduleModal(ad_r14.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ad_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx_r1.getTranslation("delete") || "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ad_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ad_r14.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("assigned") || "Assigned", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.showAssignedAdVideoPreview(ad_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.showAssignedAdVideoPreview(ad_r14) && ctx_r1.showAssignedAdImagePreview(ad_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.showAssignedAdVideoPreview(ad_r14) && !ctx_r1.showAssignedAdImagePreview(ad_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("bg-success", ad_r14.status === "active")("bg-secondary", ad_r14.status === "inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ad_r14.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("slideDurationSec") || "Slide duration (sec)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.getSlideDurationSeconds(ad_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.screenRegions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.getAdvertisementSchedule(ad_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("View") || "View", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", ctx_r1.getTranslation("schedule") || "Schedule");
  }
}
function ScreenPlaybackComponent_div_14_div_13_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ScreenPlaybackComponent_div_14_div_13_div_8_div_1_Template, 38, 18, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.assignedAdvertisements);
  }
}
function ScreenPlaybackComponent_div_14_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29)(1, "div", 122)(2, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ScreenPlaybackComponent_div_14_div_13_div_6_Template, 3, 1, "div", 73)(7, ScreenPlaybackComponent_div_14_div_13_div_7_Template, 7, 5, "div", 124)(8, ScreenPlaybackComponent_div_14_div_13_div_8_Template, 2, 1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("assignedAdvertisements") || "Assigned Advertisements", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingAssignedAds);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingAssignedAds && ctx_r1.assignedAdvertisements.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingAssignedAds);
  }
}
function ScreenPlaybackComponent_div_14_div_14_div_11_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", region_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", i_r22 + 1, " of ", ctx_r1.screenRegions.length, " ");
  }
}
function ScreenPlaybackComponent_div_14_div_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 199)(1, "label", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "select", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_14_div_11_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.regionId, $event) || (ctx_r1.scheduleFormData.regionId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "option", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ScreenPlaybackComponent_div_14_div_14_div_11_option_6_Template, 2, 3, "option", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("assignToRegion") || "Assign to Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.regionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("noRegion") || "No Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.screenRegions);
  }
}
function ScreenPlaybackComponent_div_14_div_14_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_14_button_44_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      ctx_r1.deleteAdvertisementSchedule(ctx_r1.editingScheduleAdId);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closeScheduleModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("delete") || "Delete", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "div", 189)(2, "div", 12)(3, "div", 13)(4, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_14_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closeScheduleModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 190)(9, "form", null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ScreenPlaybackComponent_div_14_div_14_div_11_Template, 7, 5, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 192)(13, "div", 193)(14, "label", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_14_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.startDate, $event) || (ctx_r1.scheduleFormData.startDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 193)(18, "label", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_14_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.startTime, $event) || (ctx_r1.scheduleFormData.startTime = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 192)(22, "div", 193)(23, "label", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_14_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.endDate, $event) || (ctx_r1.scheduleFormData.endDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 193)(27, "label", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_14_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.endTime, $event) || (ctx_r1.scheduleFormData.endTime = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 199)(31, "label", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_14_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.priority, $event) || (ctx_r1.scheduleFormData.priority = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "small", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 199)(37, "div", 202)(38, "input", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_14_Template_input_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleFormData.isActive, $event) || (ctx_r1.scheduleFormData.isActive = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 205)(42, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_14_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closeScheduleModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, ScreenPlaybackComponent_div_14_div_14_button_44_Template, 3, 1, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_14_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.saveAdvertisementSchedule(ctx_r1.scheduleFormData));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r1.showScheduleModal ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("show", ctx_r1.showScheduleModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("advertisementSchedule") || "Advertisement Schedule", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.screenRegions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("startDate") || "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("startTime") || "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("endDate") || "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("endTime") || "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.endTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("priority") || "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("priorityHint") || "Higher priority advertisements will play first", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleFormData.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("active") || "Active", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("cancel") || "Cancel", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.getAdvertisementSchedule(ctx_r1.editingScheduleAdId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("save") || "Save", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 211);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("show", ctx_r1.showScheduleModal);
  }
}
function ScreenPlaybackComponent_div_14_div_16_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "label", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "input", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_16_div_28_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.screenWidth, $event) || (ctx_r1.screenWidth = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 44)(6, "label", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_16_div_28_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.screenHeight, $event) || (ctx_r1.screenHeight = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 55)(10, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("screenWidth") || "Screen Width (px)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.screenWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r1.selectedScreen || ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("screenHeight") || "Screen Height (px)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.screenHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r1.selectedScreen || ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("enterCustomDimensions") || "Enter custom screen dimensions in pixels (e.g., 1024 x 245)", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_16_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 131);
  }
}
function ScreenPlaybackComponent_div_14_div_16_button_37_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 131);
  }
}
function ScreenPlaybackComponent_div_14_div_16_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_16_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.applyToGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ScreenPlaybackComponent_div_14_div_16_button_37_span_1_Template, 1, 0, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r1.selectedScreen || ctx_r1.isApplyingToGroup)("title", ctx_r1.getTranslation("applyToGroup") || "Apply current layout and content to all screens in this group");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.isApplyingToGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("applyToGroup") || "Save & apply to this group", " ");
  }
}
function ScreenPlaybackComponent_div_14_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 32)(5, "div", 43)(6, "div", 44)(7, "label", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "select", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_16_Template_select_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.orientation, $event) || (ctx_r1.orientation = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "option", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "option", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "option", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 44)(17, "label", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "select", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_div_14_div_16_Template_select_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.screenSize, $event) || (ctx_r1.screenSize = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "option", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "option", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "option", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "option", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, ScreenPlaybackComponent_div_14_div_16_div_28_Template, 13, 7, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 224)(30, "button", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_16_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.updateScreenSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "i", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_div_14_div_16_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.refreshPlayer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, ScreenPlaybackComponent_div_14_div_16_span_34_Template, 1, 0, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "i", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, ScreenPlaybackComponent_div_14_div_16_button_37_Template, 4, 4, "button", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("screenSettings") || "Screen Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("orientation") || "Orientation", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.orientation);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r1.selectedScreen || ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("landscape") || "Landscape");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("portrait") || "Portrait");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("auto") || "Auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("screenSize") || "Screen Size", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.screenSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r1.selectedScreen || ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("small") || "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("medium") || "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("large") || "Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("custom") || "Custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.screenSize === "custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r1.selectedScreen || ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("saveSettings") || "Save Settings", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r1.selectedScreen || ctx_r1.isRefreshingPlayer);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.isRefreshingPlayer);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getTranslation("refreshPlayer") || "Refresh player", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen && ctx_r1.selectedScreen.groupId);
  }
}
function ScreenPlaybackComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 32)(6, "div", 33)(7, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_div_14_Template_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selectedScreenId, $event) || (ctx_r1.selectedScreenId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ScreenPlaybackComponent_div_14_Template_select_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onScreenChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ScreenPlaybackComponent_div_14_option_10_Template, 4, 6, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ScreenPlaybackComponent_div_14_div_11_Template, 46, 24, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ScreenPlaybackComponent_div_14_div_12_Template, 51, 19, "div", 38)(13, ScreenPlaybackComponent_div_14_div_13_Template, 9, 4, "div", 38)(14, ScreenPlaybackComponent_div_14_div_14_Template, 48, 22, "div", 39)(15, ScreenPlaybackComponent_div_14_div_15_Template, 1, 2, "div", 40)(16, ScreenPlaybackComponent_div_14_div_16_Template, 38, 21, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("selectScreen") || "Select Screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedScreenId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isLoading || ctx_r1.screens.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("selectScreen") || "Select a screen...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.screens);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen && ctx_r1.assignedAdvertisements.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.showScheduleModal && ctx_r1.editingScheduleAdId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.showScheduleModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedScreen);
  }
}
function ScreenPlaybackComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-group-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ScreenPlaybackComponent_div_23_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 237)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("description") || "Description", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedAdvertisement.description);
  }
}
function ScreenPlaybackComponent_div_23_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 237)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("thumbnail") || "Thumbnail", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.selectedAdvertisement.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function ScreenPlaybackComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 190)(1, "div", 236)(2, "div", 193)(3, "div", 237)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ScreenPlaybackComponent_div_23_div_8_Template, 5, 2, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 237)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 237)(15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 193)(20, "div", 237)(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "p", 239)(24, "a", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 237)(27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 237)(32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 237)(37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, ScreenPlaybackComponent_div_23_div_41_Template, 4, 2, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("title") || "Title", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedAdvertisement.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedAdvertisement.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("type") || "Type", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedAdvertisement.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("status") || "Status", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("bg-success", ctx_r1.selectedAdvertisement.status === "active")("bg-secondary", ctx_r1.selectedAdvertisement.status === "inactive")("bg-warning", ctx_r1.selectedAdvertisement.status === "draft")("bg-danger", ctx_r1.selectedAdvertisement.status === "expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedAdvertisement.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("videoUrl") || "Video URL", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", ctx_r1.selectedAdvertisement.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedAdvertisement.fileUrl, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("fileName") || "File Name", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.decodeFileNameForDisplay(ctx_r1.selectedAdvertisement.fileName));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("fileSize") || "File Size", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.formatFileSize(ctx_r1.selectedAdvertisement.fileSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getTranslation("mimeType") || "MIME Type", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedAdvertisement.mimeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedAdvertisement.thumbnailUrl);
  }
}
function ScreenPlaybackComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 242)(1, "div", 243)(2, "span", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getTranslation("loading") || "Loading...");
  }
}
class ScreenPlaybackComponent {
  constructor(languageService, translationService, screenService, advertisementsService, route, cdr) {
    this.languageService = languageService;
    this.translationService = translationService;
    this.screenService = screenService;
    this.advertisementsService = advertisementsService;
    this.route = route;
    this.cdr = cdr;
    this.currentLanguage = 'ar';
    this.screens = [];
    this.selectedScreen = null;
    this.selectedScreenId = null;
    this.selectedAdvertisement = null;
    this.videoUrl = '';
    this.videoTitle = '';
    this.isMuted = false;
    // Advertisements
    this.advertisements = [];
    this.filteredAdvertisements = [];
    this.assignedAdvertisements = [];
    this.isLoadingAdvertisements = false;
    this.isLoadingAssignedAds = false;
    this.showAdvertisementModal = false;
    this.searchTerm = '';
    this.playingVideo = null;
    this.isLoading = false;
    this.isPlaying = false;
    this.isPaused = false;
    // Screen settings
    this.orientation = 'landscape';
    this.screenSize = 'medium';
    this.screenWidth = null;
    this.screenHeight = null;
    /** IP address for quick edit (local testing) */
    this.screenIpForEdit = '';
    this.isUpdatingIp = false;
    this.isRefreshingPlayer = false;
    this.isApplyingToGroup = false;
    /** 0 = By Screen, 1 = By Group */
    this.activePlaybackTab = 0;
    // Screen Regions
    this.screenRegions = [];
    this.regionType = 'split_horizontal';
    this.isLoadingRegions = false;
    this.showRegionSetup = false;
    this.showRegionEditor = false;
    this.selectedRegionForEdit = null;
    this.isSelectingRegion = false;
    this.regionSelectionStart = null;
    this.regionSelectionEnd = null;
    this.pendingSelections = [];
    this.isResizingRegion = false;
    this.resizingHandle = null;
    this.resizeStartPosition = null;
    this.resizeStartRegion = null;
    this.previewOrientation = 'landscape';
    this.previewScreenWidth = 800;
    this.previewScreenHeight = 450;
    // Advertisement Schedules
    this.advertisementSchedules = new Map();
    this.editingScheduleAdId = null;
    this.showScheduleModal = false;
    this.scheduleFormData = {
      regionId: null,
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      priority: 0,
      isActive: true
    };
    this.POLL_INTERVAL = 3000; // 3 seconds
    // Alert Dialog
    this.showAlertDialog = false;
    this.alertDialogData = {
      message: '',
      type: 'info'
    };
    // Confirm Dialog
    this.showConfirmDialog = false;
    this.confirmDialogData = {
      title: 'Confirm',
      message: '',
      confirmText: 'OK',
      cancelText: 'Cancel',
      type: 'warning'
    };
    this.confirmDialogCallback = null;
    /** Drag-reorder assigned ads (HTML5 DnD). */
    this.dragAssignedFromIndex = null;
    this.isSavingPlaylist = false;
    this.onScreenMouseMove = event => {
      // This is handled by document listener
    };
    this.onDocumentMouseMove = event => {
      const screenPreview = document.querySelector('.screen-preview');
      if (!screenPreview || !this.selectedScreen) return;
      const rect = screenPreview.getBoundingClientRect();
      const currentX = (event.clientX - rect.left) / rect.width * 100;
      const currentY = (event.clientY - rect.top) / rect.height * 100;
      // Handle region resizing
      if (this.isResizingRegion && this.resizingHandle && this.selectedRegionForEdit && this.resizeStartPosition && this.resizeStartRegion) {
        const deltaX = currentX - this.resizeStartPosition.x / rect.width * 100;
        const deltaY = currentY - this.resizeStartPosition.y / rect.height * 100;
        let newX = this.resizeStartRegion.x;
        let newY = this.resizeStartRegion.y;
        let newWidth = this.resizeStartRegion.width;
        let newHeight = this.resizeStartRegion.height;
        switch (this.resizingHandle) {
          case 'left':
            newX = Math.max(0, Math.min(this.resizeStartRegion.x + this.resizeStartRegion.width - 5, this.resizeStartRegion.x + deltaX));
            newWidth = this.resizeStartRegion.width - (newX - this.resizeStartRegion.x);
            break;
          case 'right':
            newWidth = Math.max(5, Math.min(100 - this.resizeStartRegion.x, this.resizeStartRegion.width + deltaX));
            break;
          case 'top':
            newY = Math.max(0, Math.min(this.resizeStartRegion.y + this.resizeStartRegion.height - 5, this.resizeStartRegion.y + deltaY));
            newHeight = this.resizeStartRegion.height - (newY - this.resizeStartRegion.y);
            break;
          case 'bottom':
            newHeight = Math.max(5, Math.min(100 - this.resizeStartRegion.y, this.resizeStartRegion.height + deltaY));
            break;
          case 'top-left':
            newX = Math.max(0, Math.min(this.resizeStartRegion.x + this.resizeStartRegion.width - 5, this.resizeStartRegion.x + deltaX));
            newY = Math.max(0, Math.min(this.resizeStartRegion.y + this.resizeStartRegion.height - 5, this.resizeStartRegion.y + deltaY));
            newWidth = this.resizeStartRegion.width - (newX - this.resizeStartRegion.x);
            newHeight = this.resizeStartRegion.height - (newY - this.resizeStartRegion.y);
            break;
          case 'top-right':
            newY = Math.max(0, Math.min(this.resizeStartRegion.y + this.resizeStartRegion.height - 5, this.resizeStartRegion.y + deltaY));
            newWidth = Math.max(5, Math.min(100 - this.resizeStartRegion.x, this.resizeStartRegion.width + deltaX));
            newHeight = this.resizeStartRegion.height - (newY - this.resizeStartRegion.y);
            break;
          case 'bottom-left':
            newX = Math.max(0, Math.min(this.resizeStartRegion.x + this.resizeStartRegion.width - 5, this.resizeStartRegion.x + deltaX));
            newWidth = this.resizeStartRegion.width - (newX - this.resizeStartRegion.x);
            newHeight = Math.max(5, Math.min(100 - this.resizeStartRegion.y, this.resizeStartRegion.height + deltaY));
            break;
          case 'bottom-right':
            newWidth = Math.max(5, Math.min(100 - this.resizeStartRegion.x, this.resizeStartRegion.width + deltaX));
            newHeight = Math.max(5, Math.min(100 - this.resizeStartRegion.y, this.resizeStartRegion.height + deltaY));
            break;
        }
        // Update the region in real-time (temporary visual update)
        if (this.selectedRegionForEdit) {
          this.selectedRegionForEdit.xPosition = newX;
          this.selectedRegionForEdit.yPosition = newY;
          this.selectedRegionForEdit.widthPercentage = newWidth;
          this.selectedRegionForEdit.heightPercentage = newHeight;
        }
        this.cdr.detectChanges();
        return;
      }
      // Handle new region selection
      if (this.isSelectingRegion && this.regionSelectionStart) {
        const x = Math.max(0, Math.min(100, currentX));
        const y = Math.max(0, Math.min(100, currentY));
        this.regionSelectionEnd = {
          x,
          y
        };
        this.cdr.detectChanges();
      }
    };
    this.onScreenMouseUp = event => {
      // This is handled by document listener
    };
    this.onDocumentMouseUp = event => {
      // Handle region resize completion
      if (this.isResizingRegion && this.selectedRegionForEdit && this.resizingHandle) {
        this.saveRegionResize();
        this.isResizingRegion = false;
        this.resizingHandle = null;
        this.resizeStartPosition = null;
        this.resizeStartRegion = null;
      }
      // Handle new region selection completion
      if (this.isSelectingRegion && this.regionSelectionStart && this.regionSelectionEnd) {
        // Calculate final selection bounds
        const width = Math.abs(this.regionSelectionEnd.x - this.regionSelectionStart.x);
        const height = Math.abs(this.regionSelectionEnd.y - this.regionSelectionStart.y);
        // Only add to pending selections if size is valid
        if (width >= 5 && height >= 5) {
          this.pendingSelections.push({
            start: {
              ...this.regionSelectionStart
            },
            end: {
              ...this.regionSelectionEnd
            }
          });
          console.log('✅ Selection added to pending. Total pending:', this.pendingSelections.length);
        }
        // Reset for next selection (but keep pending selections)
        this.isSelectingRegion = false;
        this.regionSelectionStart = null;
        this.regionSelectionEnd = null;
        console.log('Selection complete. Pending selections:', this.pendingSelections.length);
      }
      // Remove global listeners
      document.removeEventListener('mousemove', this.onDocumentMouseMove);
      document.removeEventListener('mouseup', this.onDocumentMouseUp);
    };
  }
  ngOnInit() {
    // Initialize preview dimensions
    this.previewScreenWidth = 800;
    this.previewScreenHeight = 450;
    this.previewOrientation = 'landscape';
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    // Only load screens for dropdown - don't load advertisements yet
    this.loadScreens();
    // Check if screenId is provided in query params
    this.route.queryParams.subscribe(params => {
      if (params['screenId']) {
        const screenId = parseInt(params['screenId']);
        if (!isNaN(screenId)) {
          // Wait for screens to load, then select the screen
          this.screenService.getScreens().subscribe({
            next: screens => {
              this.screens = screens;
              const screen = screens.find(s => s.id === screenId);
              if (screen) {
                // Set the selected screen ID to trigger selection
                this.selectedScreenId = screenId;
                this.onScreenChange();
              }
            },
            error: error => {
              console.error('Error loading screens:', error);
            }
          });
        }
      }
    });
  }
  ngOnDestroy() {
    if (this.statusPollSubscription) {
      this.statusPollSubscription.unsubscribe();
    }
    // Clean up document event listeners
    document.removeEventListener('mousemove', this.onDocumentMouseMove);
    document.removeEventListener('mouseup', this.onDocumentMouseUp);
  }
  loadScreens() {
    this.isLoading = true;
    this.screenService.getScreens().subscribe({
      next: screens => {
        this.screens = screens;
        this.isLoading = false;
        // Don't auto-select - let user select manually
      },
      error: error => {
        console.error('Error loading screens:', error);
        this.isLoading = false;
      }
    });
  }
  /** Switch to By Screen tab and select the given screen (e.g. from By Group tab). */
  switchToByScreenAndSelect(screenId) {
    this.activePlaybackTab = 0;
    this.selectedScreenId = screenId;
    this.onScreenChange();
  }
  /** Load this screen when selected from By Group tab (stay on By Group tab, show regions/ads/settings below). */
  loadScreenFromGroup(screenId) {
    this.selectedScreenId = screenId;
    this.onScreenChange();
  }
  onScreenChange() {
    if (!this.selectedScreenId) {
      this.selectedScreen = null;
      this.selectedAdvertisement = null;
      this.assignedAdvertisements = [];
      this.advertisements = [];
      this.filteredAdvertisements = [];
      this.playingVideo = null;
      // Stop polling
      if (this.statusPollSubscription) {
        this.statusPollSubscription.unsubscribe();
      }
      return;
    }
    // Find the screen from the list to get basic info
    const screen = this.screens.find(s => s.id === this.selectedScreenId);
    if (!screen) {
      return;
    }
    // Reset previous selection
    this.selectedScreen = null;
    this.selectedAdvertisement = null;
    this.assignedAdvertisements = [];
    this.advertisements = [];
    this.filteredAdvertisements = [];
    this.playingVideo = null;
    // Stop previous polling
    if (this.statusPollSubscription) {
      this.statusPollSubscription.unsubscribe();
    }
    // Fetch full screen data with all related information (including assigned advertisements)
    this.isLoading = true;
    this.screenService.getScreenById(screen.id).subscribe({
      next: fullScreenData => {
        this.selectedScreen = fullScreenData;
        this.screenIpForEdit = fullScreenData.ipAddress || '';
        this.orientation = fullScreenData.orientation || 'landscape';
        this.screenSize = fullScreenData.screenSize || 'medium';
        this.screenWidth = fullScreenData.screenWidth || null;
        this.screenHeight = fullScreenData.screenHeight || null;
        // Use assignedAdvertisements directly from API response (single API call)
        if (fullScreenData.assignedAdvertisements && Array.isArray(fullScreenData.assignedAdvertisements)) {
          console.log('loadScreenForEdit - Using assignedAdvertisements from API:', fullScreenData.assignedAdvertisements.length);
          this.assignedAdvertisements = fullScreenData.assignedAdvertisements.map(ad => ({
            ...ad,
            slideDurationSeconds: ad.slideDurationSeconds != null && !Number.isNaN(Number(ad.slideDurationSeconds)) ? Number(ad.slideDurationSeconds) : 5
          }));
          this.isLoadingAssignedAds = false;
        } else {
          // Fallback: Load advertisements if not included in response
          this.loadAdvertisements().then(() => {
            this.loadAssignedAdvertisements();
          });
        }
        // Load screen regions and schedules
        this.loadScreenRegions();
        this.loadScreenSchedules();
        // Load playing video once - polling will start only if video is playing/paused
        this.loadPlayingVideo().then(() => {
          // Only start polling if video is actually playing or paused
          if (this.isPlaying || this.isPaused) {
            this.startStatusPolling();
          }
        });
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading screen details:', error);
        this.isLoading = false;
        this.showAlert('Failed to load screen details: ' + (error.error?.error || error.message), 'error');
      }
    });
  }
  loadAssignedAdvertisements() {
    // Check if screen has assignedAdvertisements directly from backend
    if (this.selectedScreen && this.selectedScreen.assignedAdvertisements && Array.isArray(this.selectedScreen.assignedAdvertisements)) {
      console.log('loadAssignedAdvertisements - Using assignedAdvertisements from screen object:', this.selectedScreen.assignedAdvertisements.length);
      this.assignedAdvertisements = this.selectedScreen.assignedAdvertisements;
      this.isLoadingAssignedAds = false;
      return;
    }
    // Fallback: If assignedAdvertisements not available, filter from all ads
    if (!this.selectedScreen || !this.selectedScreen.assignedAds || this.selectedScreen.assignedAds.length === 0) {
      console.log('loadAssignedAdvertisements - No assigned ads for screen:', this.selectedScreen?.assignedAds);
      this.assignedAdvertisements = [];
      return;
    }
    console.log('loadAssignedAdvertisements - Loading ads for assigned IDs:', this.selectedScreen.assignedAds);
    this.isLoadingAssignedAds = true;
    // Load all advertisements and filter by assigned IDs
    this.advertisementsService.getAdvertisements({
      type: 'video'
    }).subscribe({
      next: response => {
        console.log('loadAssignedAdvertisements - All advertisements loaded:', response.advertisements.length);
        console.log('loadAssignedAdvertisements - All advertisement IDs:', response.advertisements.map(ad => ad.id));
        this.assignedAdvertisements = response.advertisements.filter(ad => {
          const isAssigned = this.selectedScreen?.assignedAds?.includes(ad.id);
          console.log(`loadAssignedAdvertisements - Ad ${ad.id} (${ad.title}): isAssigned=${isAssigned}`);
          return isAssigned;
        });
        console.log('loadAssignedAdvertisements - Filtered assigned advertisements:', this.assignedAdvertisements.length);
        console.log('loadAssignedAdvertisements - Assigned advertisement IDs:', this.assignedAdvertisements.map(ad => ad.id));
        this.isLoadingAssignedAds = false;
      },
      error: error => {
        console.error('Error loading assigned advertisements:', error);
        this.isLoadingAssignedAds = false;
      }
    });
  }
  loadPlayingVideo() {
    return new Promise(resolve => {
      if (!this.selectedScreen) {
        resolve();
        return;
      }
      this.screenService.getPlayingVideo(this.selectedScreen.id).subscribe({
        next: video => {
          this.playingVideo = video;
          this.isPlaying = video.isPlaying;
          this.isPaused = video.isPaused || false;
          if (video.isPlaying && !this.isPaused) {
            this.videoUrl = video.videoUrl || '';
            this.videoTitle = video.videoTitle || '';
          }
          // If video stopped, stop polling
          if (!video.isPlaying && !video.isPaused) {
            if (this.statusPollSubscription) {
              this.statusPollSubscription.unsubscribe();
              this.statusPollSubscription = undefined;
            }
          }
          resolve();
        },
        error: error => {
          console.error('Error loading playing video:', error);
          this.playingVideo = {
            isPlaying: false,
            isPaused: false
          };
          this.isPlaying = false;
          this.isPaused = false;
          // Stop polling on error
          if (this.statusPollSubscription) {
            this.statusPollSubscription.unsubscribe();
            this.statusPollSubscription = undefined;
          }
          resolve();
        }
      });
    });
  }
  startStatusPolling() {
    // Stop existing polling
    if (this.statusPollSubscription) {
      this.statusPollSubscription.unsubscribe();
    }
    // Only poll if video is playing or paused
    // Don't poll if video is stopped/not playing
    this.statusPollSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.interval)(this.POLL_INTERVAL).subscribe(() => {
      if (this.selectedScreen && (this.isPlaying || this.isPaused)) {
        this.loadPlayingVideo();
      } else {
        // If video is not playing and not paused, stop polling
        if (this.statusPollSubscription) {
          this.statusPollSubscription.unsubscribe();
          this.statusPollSubscription = undefined;
        }
      }
    });
  }
  loadAdvertisements() {
    return new Promise(resolve => {
      this.isLoadingAdvertisements = true;
      this.advertisementsService.getAdvertisements({
        type: 'video',
        status: 'active'
      }).subscribe({
        next: response => {
          this.advertisements = response.advertisements;
          this.filteredAdvertisements = [...this.advertisements];
          this.isLoadingAdvertisements = false;
          console.log('loadAdvertisements - Loaded', this.advertisements.length, 'advertisements');
          resolve();
        },
        error: error => {
          console.error('Error loading advertisements:', error);
          this.isLoadingAdvertisements = false;
          resolve();
        }
      });
    });
  }
  filterAdvertisements() {
    if (!this.searchTerm.trim()) {
      this.filteredAdvertisements = [...this.advertisements];
      return;
    }
    const search = this.searchTerm.toLowerCase();
    this.filteredAdvertisements = this.advertisements.filter(ad => ad.title.toLowerCase().includes(search) || ad.description && ad.description.toLowerCase().includes(search));
  }
  selectAdvertisement(advertisement) {
    this.selectedAdvertisement = advertisement;
    this.videoUrl = advertisement.fileUrl;
    this.videoTitle = advertisement.title;
    this.showAdvertisementModal = true;
  }
  closeAdvertisementModal() {
    this.showAdvertisementModal = false;
  }
  confirmPlayAdvertisement() {
    if (!this.selectedScreen || !this.selectedAdvertisement) {
      return;
    }
    this.closeAdvertisementModal();
    this.playVideo();
  }
  playVideo() {
    if (!this.selectedScreen || !this.videoUrl.trim()) {
      this.showAlert(this.getTranslation('selectAdvertisement') || 'Please select an advertisement', 'warning');
      return;
    }
    // If selected ad is an image, build an image playlist from all assigned image ads
    let imagePlaylist = null;
    if (this.selectedAdvertisement && this.selectedAdvertisement.type === 'image') {
      const imageAds = this.assignedAdvertisements.filter(ad => ad.type === 'image' && ad.fileUrl);
      if (imageAds.length > 0) {
        // Rotate playlist so it starts from the selected image
        const selectedIndex = imageAds.findIndex(ad => ad.id === this.selectedAdvertisement.id);
        const ordered = selectedIndex >= 0 ? imageAds.slice(selectedIndex).concat(imageAds.slice(0, selectedIndex)) : imageAds;
        imagePlaylist = ordered.map(ad => ad.fileUrl);
      }
    }
    this.isLoading = true;
    this.screenService.playVideo(this.selectedScreen.id, this.videoUrl.trim(), this.videoTitle.trim() || undefined, this.isMuted, imagePlaylist).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          this.isPlaying = true;
          this.isPaused = false;
          this.loadPlayingVideo().then(() => {
            // Start polling when video starts playing
            this.startStatusPolling();
          });
          this.showAlert(result.message || this.getTranslation('videoPlaying') || 'Video is playing', 'success');
        } else {
          this.showAlert(result.message || this.getTranslation('playVideoFailed') || 'Failed to play video', 'error');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error playing video:', error);
        this.showAlert(error.error?.error || error.message || this.getTranslation('playVideoFailed') || 'Failed to play video', 'error');
      }
    });
  }
  pauseVideo() {
    if (!this.selectedScreen) return;
    this.isLoading = true;
    this.screenService.pauseVideo(this.selectedScreen.id).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          this.isPaused = true;
          this.isPlaying = false;
          this.loadPlayingVideo().then(() => {
            // Start polling when video is paused (to detect resume/stop)
            this.startStatusPolling();
          });
          this.showAlert(result.message || this.getTranslation('videoPaused') || 'Video is paused', 'success');
        } else {
          this.showAlert(result.message || this.getTranslation('pauseVideoFailed') || 'Failed to pause video', 'error');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error pausing video:', error);
        this.showAlert(error.error?.error || error.message || this.getTranslation('pauseVideoFailed') || 'Failed to pause video', 'error');
      }
    });
  }
  resumeVideo() {
    if (!this.selectedScreen) return;
    this.isLoading = true;
    this.screenService.resumeVideo(this.selectedScreen.id).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          this.isPlaying = true;
          this.isPaused = false;
          this.loadPlayingVideo().then(() => {
            // Start polling when video resumes
            this.startStatusPolling();
          });
          this.showAlert(result.message || this.getTranslation('videoResumed') || 'Video is resumed', 'success');
        } else {
          this.showAlert(result.message || this.getTranslation('resumeVideoFailed') || 'Failed to resume video', 'error');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error resuming video:', error);
        this.showAlert(error.error?.error || error.message || this.getTranslation('resumeVideoFailed') || 'Failed to resume video', 'error');
      }
    });
  }
  stopVideo() {
    if (!this.selectedScreen) return;
    this.showConfirm(this.getTranslation('confirmStopVideo') || 'Are you sure you want to stop the video?', () => {
      this.executeStopVideo();
    }, 'Confirm Stop Video', 'warning');
  }
  executeStopVideo() {
    if (!this.selectedScreen) return;
    this.isLoading = true;
    this.screenService.stopVideo(this.selectedScreen.id).subscribe({
      next: result => {
        this.isLoading = false;
        if (result.success) {
          this.isPlaying = false;
          this.isPaused = false;
          this.playingVideo = null;
          this.videoUrl = '';
          this.videoTitle = '';
          // Stop polling when video is stopped
          if (this.statusPollSubscription) {
            this.statusPollSubscription.unsubscribe();
            this.statusPollSubscription = undefined;
          }
          // Load once to confirm stopped state
          this.loadPlayingVideo();
          this.showAlert(result.message || this.getTranslation('videoStopped') || 'Video is stopped', 'success');
        } else {
          this.showAlert(result.message || this.getTranslation('stopVideoFailed') || 'Failed to stop video', 'error');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error stopping video:', error);
        this.showAlert(error.error?.error || error.message || this.getTranslation('stopVideoFailed') || 'Failed to stop video', 'error');
      }
    });
  }
  updateScreenSettings() {
    if (!this.selectedScreen) return;
    const updateData = {
      orientation: this.orientation,
      screenSize: this.screenSize
    };
    // Only include width/height if screen size is custom
    if (this.screenSize === 'custom') {
      // Convert to number, allow 0 as valid value
      updateData.screenWidth = this.screenWidth !== null && this.screenWidth !== undefined ? Number(this.screenWidth) : null;
      updateData.screenHeight = this.screenHeight !== null && this.screenHeight !== undefined ? Number(this.screenHeight) : null;
    } else {
      // Clear custom dimensions when not using custom size
      updateData.screenWidth = null;
      updateData.screenHeight = null;
    }
    console.log('updateScreenSettings - Sending payload:', JSON.stringify(updateData, null, 2));
    console.log('updateScreenSettings - screenWidth value:', this.screenWidth, 'type:', typeof this.screenWidth);
    console.log('updateScreenSettings - screenHeight value:', this.screenHeight, 'type:', typeof this.screenHeight);
    this.screenService.updateScreen(this.selectedScreen.id, updateData).subscribe({
      next: () => {
        this.showAlert(this.getTranslation('settingsUpdated') || 'Screen settings updated successfully', 'success');
        this.loadScreens();
      },
      error: error => {
        console.error('Error updating screen settings:', error);
        this.showAlert(error.error?.error || error.message || 'Failed to update screen settings', 'error');
      }
    });
  }
  /** Update screen IP for local testing (player will match by this IP when it connects). */
  updateScreenIp() {
    if (!this.selectedScreen) return;
    const newIp = this.screenIpForEdit.trim();
    this.isUpdatingIp = true;
    this.screenService.updateScreen(this.selectedScreen.id, {
      name: this.selectedScreen.name,
      ipAddress: newIp || null
    }).subscribe({
      next: updated => {
        this.isUpdatingIp = false;
        if (this.selectedScreen) this.selectedScreen.ipAddress = updated.ipAddress ?? null;
        this.showAlert(this.getTranslation('ipUpdated') || 'IP address updated. Open the player at the same IP to connect.', 'success');
      },
      error: err => {
        this.isUpdatingIp = false;
        this.showAlert(err.error?.error || err.message || 'Failed to update IP', 'error');
      }
    });
  }
  refreshPlayer() {
    if (!this.selectedScreen) return;
    this.isRefreshingPlayer = true;
    this.screenService.refreshPlayer(this.selectedScreen.id, {
      deviceId: this.selectedScreen.deviceId ?? undefined,
      ipAddress: this.selectedScreen.ipAddress ?? undefined
    }).subscribe({
      next: res => {
        this.isRefreshingPlayer = false;
        if (res.success) {
          this.showAlert(res.message || this.getTranslation('refreshSent') || 'Refresh command sent to player', 'success');
        } else {
          this.showAlert(res.message || 'No player connected for this screen.', 'warning');
        }
      },
      error: err => {
        this.isRefreshingPlayer = false;
        this.showAlert(err.error?.error || err.message || 'Failed to send refresh command', 'error');
      }
    });
  }
  applyToGroup() {
    if (!this.selectedScreen?.groupId) return;
    this.isApplyingToGroup = true;
    this.screenService.applyToGroup(this.selectedScreen.id).subscribe({
      next: res => {
        this.isApplyingToGroup = false;
        if (res.success) {
          this.showAlert(res.message || (res.screenCount != null ? `Layout and content applied to ${res.screenCount} screen(s) in group.` : 'Applied to group.'), 'success');
          this.screenService.getScreenById(this.selectedScreen.id).subscribe({
            next: fullScreenData => {
              this.selectedScreen = fullScreenData;
              this.loadScreenRegions();
              this.loadScreenSchedules();
            }
          });
        } else {
          this.showAlert(res.message || 'Apply to group failed.', 'warning');
        }
      },
      error: err => {
        this.isApplyingToGroup = false;
        this.showAlert(err.error?.error || err.message || 'Failed to apply to group', 'error');
      }
    });
  }
  /**
   * Repairs UTF-8 mojibake for filename display (e.g. Arabic names from API).
   */
  decodeFileNameForDisplay(fileName) {
    if (!fileName) return '';
    const hasHighBytes = [...fileName].some(c => (c.charCodeAt(0) & 0xff) > 127);
    if (!hasHighBytes) return fileName;
    try {
      const bytes = new Uint8Array([...fileName].map(c => c.charCodeAt(0) & 0xff));
      const decoded = new TextDecoder('utf-8').decode(bytes);
      const hasArabic = /[\u0600-\u06FF]/.test(decoded);
      if (hasArabic || decoded.length > 0 && !/\uFFFD/.test(decoded)) {
        return decoded;
      }
    } catch {
      // ignore
    }
    return fileName;
  }
  /** Absolute URL for ad media (same origin rewrite as other screens). */
  resolveAdMediaUrl(fileUrl) {
    if (!fileUrl) return fileUrl;
    const base = (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || '').replace(/\/api\/?$/, '').trim();
    if (!base) return fileUrl;
    try {
      const u = new URL(fileUrl);
      if (u.hostname === 'localhost' && (u.port === '3000' || !u.port)) {
        return fileUrl.replace(u.origin, base);
      }
    } catch {
      /* relative */
    }
    return fileUrl;
  }
  isImageFileUrl(url) {
    if (!url) return false;
    return /\.(jpg|jpeg|png|gif|webp|bmp|svg|ico|tiff|tif|heic|heif|avif|jfif)$/i.test(url);
  }
  showAssignedAdImagePreview(ad) {
    return ad.type === 'image' || this.isImageFileUrl(ad.fileUrl || '');
  }
  showAssignedAdVideoPreview(ad) {
    return ad.type === 'video';
  }
  getAssignedAdPreviewUrl(ad) {
    return this.resolveAdMediaUrl(ad.thumbnailUrl || ad.fileUrl || '');
  }
  getTranslation(key) {
    return this.translationService.getTranslation(key, this.currentLanguage);
  }
  /** Player URL with this screen's deviceId so settings and play commands reach the same tab. */
  getPlayerUrl() {
    if (!this.selectedScreen?.deviceId) return '';
    const base = (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl || '').replace(/\/api\/?$/, '').trim();
    if (!base) return '';
    const sep = base.includes('?') ? '&' : '?';
    return `${base}/player/index.html${sep}deviceId=${encodeURIComponent(this.selectedScreen.deviceId)}`;
  }
  getScreenStatusClass(status) {
    switch (status) {
      case 'online':
        return 'status-online';
      case 'offline':
        return 'status-offline';
      case 'playing':
        return 'status-playing';
      case 'paused':
        return 'status-paused';
      default:
        return 'status-unknown';
    }
  }
  getScreenStatusText(status) {
    switch (status) {
      case 'online':
        return this.getTranslation('online') || 'Online';
      case 'offline':
        return this.getTranslation('offline') || 'Offline';
      case 'playing':
        return this.getTranslation('playing') || 'Playing';
      case 'paused':
        return this.getTranslation('paused') || 'Paused';
      default:
        return status;
    }
  }
  formatFileSize(bytes) {
    if (!bytes || bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }
  // ========== Screen Regions Methods ==========
  loadScreenRegions() {
    if (!this.selectedScreen) {
      console.log('⚠️ loadScreenRegions: No selected screen');
      return;
    }
    console.log('🔄 Loading screen regions for screen ID:', this.selectedScreen.id);
    this.isLoadingRegions = true;
    this.screenService.getScreenRegions(this.selectedScreen.id).subscribe({
      next: response => {
        console.log('📥 Raw response from getScreenRegions:', response);
        console.log('📥 Response.regions:', response.regions);
        // Convert string values to numbers for percentage fields
        const loadedRegions = (response.regions || []).map(region => ({
          ...region,
          widthPercentage: typeof region.widthPercentage === 'string' ? parseFloat(region.widthPercentage) : region.widthPercentage,
          heightPercentage: typeof region.heightPercentage === 'string' ? parseFloat(region.heightPercentage) : region.heightPercentage,
          xPosition: typeof region.xPosition === 'string' ? parseFloat(region.xPosition) : region.xPosition,
          yPosition: typeof region.yPosition === 'string' ? parseFloat(region.yPosition) : region.yPosition
        }));
        // Replace the array (don't merge, as backend is source of truth)
        this.screenRegions = loadedRegions;
        console.log('✅ Regions loaded. Total:', this.screenRegions.length);
        console.log('✅ Region IDs:', this.screenRegions.map(r => ({
          id: r.id,
          position: r.regionPosition
        })));
        this.isLoadingRegions = false;
        // If no regions exist, show setup option
        if (this.screenRegions.length === 0) {
          console.log('ℹ️ No regions found, showing setup option');
          this.showRegionSetup = true;
        }
      },
      error: error => {
        console.error('❌ Error loading screen regions:', error);
        console.error('❌ Error details:', error.error);
        this.isLoadingRegions = false;
      }
    });
  }
  // Visual Region Selection Methods
  onScreenMouseDown(event) {
    if (!this.selectedScreen) {
      console.log('No screen selected');
      return;
    }
    const target = event.target;
    // Check if clicking on a resize handle
    const resizeHandle = target.closest('.resize-handle');
    if (resizeHandle) {
      const handleType = resizeHandle.getAttribute('data-handle');
      const regionId = parseInt(resizeHandle.getAttribute('data-region-id') || '0');
      const region = this.screenRegions.find(r => r.id === regionId);
      if (region) {
        this.startResizeRegion(event, region, handleType);
        return;
      }
    }
    // Don't start selection if clicking on a region overlay (unless it's a resize handle)
    if (target.closest('.region-overlay') && !resizeHandle) {
      console.log('Clicked on region overlay, ignoring');
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const screenPreview = event.currentTarget;
    const rect = screenPreview.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, (event.clientX - rect.left) / rect.width * 100));
    const y = Math.max(0, Math.min(100, (event.clientY - rect.top) / rect.height * 100));
    console.log('Mouse down on screen preview:', {
      x,
      y,
      rect,
      clientX: event.clientX,
      clientY: event.clientY
    });
    console.log('📊 Current regions before new selection:', this.screenRegions.length, this.screenRegions.map(r => ({
      id: r.id,
      position: r.regionPosition
    })));
    // Start new region selection - preserve existing regions
    this.isSelectingRegion = true;
    this.regionSelectionStart = {
      x,
      y
    };
    this.regionSelectionEnd = {
      x,
      y
    };
    // Don't clear selectedRegionForEdit - user might want to keep it selected
    // this.selectedRegionForEdit = null;
    this.isResizingRegion = false;
    // Add global mouse move and up listeners
    document.addEventListener('mousemove', this.onDocumentMouseMove);
    document.addEventListener('mouseup', this.onDocumentMouseUp);
  }
  startResizeRegion(event, region, handleType) {
    event.preventDefault();
    event.stopPropagation();
    this.isResizingRegion = true;
    this.resizingHandle = handleType;
    this.selectedRegionForEdit = region;
    this.isSelectingRegion = false;
    const screenPreview = document.querySelector('.screen-preview');
    if (!screenPreview) return;
    const rect = screenPreview.getBoundingClientRect();
    this.resizeStartPosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
    this.resizeStartRegion = {
      x: region.xPosition,
      y: region.yPosition,
      width: region.widthPercentage,
      height: region.heightPercentage
    };
    // Add global mouse move and up listeners
    document.addEventListener('mousemove', this.onDocumentMouseMove);
    document.addEventListener('mouseup', this.onDocumentMouseUp);
  }
  saveRegionResize() {
    if (!this.selectedScreen || !this.selectedRegionForEdit) return;
    const regionData = {
      xPosition: this.selectedRegionForEdit.xPosition,
      yPosition: this.selectedRegionForEdit.yPosition,
      widthPercentage: this.selectedRegionForEdit.widthPercentage,
      heightPercentage: this.selectedRegionForEdit.heightPercentage
    };
    this.screenService.updateScreenRegion(this.selectedScreen.id, this.selectedRegionForEdit.id, regionData).subscribe({
      next: response => {
        // Update the region in the array
        const index = this.screenRegions.findIndex(r => r.id === this.selectedRegionForEdit.id);
        if (index !== -1) {
          this.screenRegions[index] = response.region;
        }
        this.showAlert(this.getTranslation('regionUpdated') || 'Region updated successfully', 'success');
      },
      error: error => {
        console.error('Error updating region:', error);
        this.showAlert(error.error?.error || this.getTranslation('errorUpdatingRegion') || 'Error updating region', 'error');
        // Reload regions to revert changes
        this.loadScreenRegions();
      }
    });
  }
  onScreenMouseLeave(event) {
    // Don't cancel selection on mouse leave - let it continue
  }
  getSelectionLeft() {
    if (!this.regionSelectionStart || !this.regionSelectionEnd) return 0;
    const left = Math.min(this.regionSelectionStart.x, this.regionSelectionEnd.x);
    return left / 100 * this.previewScreenWidth;
  }
  getSelectionTop() {
    if (!this.regionSelectionStart || !this.regionSelectionEnd) return 0;
    const top = Math.min(this.regionSelectionStart.y, this.regionSelectionEnd.y);
    return top / 100 * this.previewScreenHeight;
  }
  getSelectionWidth() {
    if (!this.regionSelectionStart || !this.regionSelectionEnd) return 0;
    const width = Math.abs(this.regionSelectionEnd.x - this.regionSelectionStart.x);
    return width / 100 * this.previewScreenWidth;
  }
  getSelectionHeight() {
    if (!this.regionSelectionStart || !this.regionSelectionEnd) return 0;
    const height = Math.abs(this.regionSelectionEnd.y - this.regionSelectionStart.y);
    return height / 100 * this.previewScreenHeight;
  }
  getSelectionWidthPercent() {
    if (!this.regionSelectionStart || !this.regionSelectionEnd) return 0;
    return Math.abs(this.regionSelectionEnd.x - this.regionSelectionStart.x);
  }
  getSelectionHeightPercent() {
    if (!this.regionSelectionStart || !this.regionSelectionEnd) return 0;
    return Math.abs(this.regionSelectionEnd.y - this.regionSelectionStart.y);
  }
  // Helper methods for pending selections
  getPendingSelectionLeft(selection) {
    return Math.min(selection.start.x, selection.end.x) / 100 * this.previewScreenWidth;
  }
  getPendingSelectionTop(selection) {
    return Math.min(selection.start.y, selection.end.y) / 100 * this.previewScreenHeight;
  }
  getPendingSelectionWidth(selection) {
    return Math.abs(selection.end.x - selection.start.x) / 100 * this.previewScreenWidth;
  }
  getPendingSelectionHeight(selection) {
    return Math.abs(selection.end.y - selection.start.y) / 100 * this.previewScreenHeight;
  }
  saveSelectedRegion() {
    // For backward compatibility - if there's a current selection, add it to pending and save all
    if (this.regionSelectionStart && this.regionSelectionEnd) {
      const width = Math.abs(this.regionSelectionEnd.x - this.regionSelectionStart.x);
      const height = Math.abs(this.regionSelectionEnd.y - this.regionSelectionStart.y);
      if (width >= 5 && height >= 5) {
        this.pendingSelections.push({
          start: this.regionSelectionStart,
          end: this.regionSelectionEnd
        });
      }
    }
    this.saveAllPendingSelections();
  }
  saveAllPendingSelections() {
    if (!this.selectedScreen || this.pendingSelections.length === 0) {
      if (this.pendingSelections.length === 0) {
        this.showAlert(this.getTranslation('noSelectionsToSave') || 'No regions selected. Please select at least one region.', 'warning');
      }
      return;
    }
    console.log('💾 Saving', this.pendingSelections.length, 'regions');
    // Get all existing custom region positions to avoid duplicates
    const existingCustomPositions = this.screenRegions.filter(r => r.regionPosition && r.regionPosition.toString().startsWith('custom_')).map(r => {
      const pos = r.regionPosition.toString();
      const match = pos.match(/custom_(\d+)/);
      return match ? parseInt(match[1]) : 0;
    });
    // Create all regions
    const regionsToCreate = this.pendingSelections.map(selection => {
      const x = Math.min(selection.start.x, selection.end.x);
      const y = Math.min(selection.start.y, selection.end.y);
      const width = Math.abs(selection.end.x - selection.start.x);
      const height = Math.abs(selection.end.y - selection.start.y);
      // Find the next available number
      let nextNumber = 1;
      while (existingCustomPositions.includes(nextNumber)) {
        nextNumber++;
      }
      existingCustomPositions.push(nextNumber); // Add to list to avoid duplicates in same batch
      return {
        screenId: this.selectedScreen.id,
        regionType: 'custom',
        regionPosition: `custom_${nextNumber}`,
        widthPercentage: width,
        heightPercentage: height,
        xPosition: x,
        yPosition: y
      };
    });
    // Filter out invalid regions (too small)
    const validRegions = regionsToCreate.filter(r => r.widthPercentage >= 5 && r.heightPercentage >= 5);
    if (validRegions.length === 0) {
      this.showAlert(this.getTranslation('regionTooSmall') || 'All selected regions are too small. Please select larger areas.', 'warning');
      return;
    }
    if (validRegions.length < regionsToCreate.length) {
      this.showAlert(`${regionsToCreate.length - validRegions.length} region(s) were too small and were skipped.`, 'warning');
    }
    // Create regions one by one
    let createdCount = 0;
    let errorCount = 0;
    const totalRegions = validRegions.length;
    validRegions.forEach((regionData, index) => {
      this.screenService.createScreenRegion(this.selectedScreen.id, regionData).subscribe({
        next: response => {
          createdCount++;
          if (response && response.region) {
            // Convert string values to numbers for percentage fields
            const newRegion = {
              ...response.region,
              widthPercentage: typeof response.region.widthPercentage === 'string' ? parseFloat(response.region.widthPercentage) : response.region.widthPercentage,
              heightPercentage: typeof response.region.heightPercentage === 'string' ? parseFloat(response.region.heightPercentage) : response.region.heightPercentage,
              xPosition: typeof response.region.xPosition === 'string' ? parseFloat(response.region.xPosition) : response.region.xPosition,
              yPosition: typeof response.region.yPosition === 'string' ? parseFloat(response.region.yPosition) : response.region.yPosition
            };
            this.screenRegions.push(newRegion);
          }
          // Check if all regions are created
          if (createdCount + errorCount === totalRegions) {
            console.log(`✅ Created ${createdCount} regions. Total regions now:`, this.screenRegions.length);
            this.pendingSelections = [];
            this.regionSelectionStart = null;
            this.regionSelectionEnd = null;
            if (errorCount > 0) {
              this.showAlert(`${createdCount} region(s) created successfully. ${errorCount} region(s) failed.`, errorCount > 0 ? 'warning' : 'success');
            } else {
              this.showAlert(this.getTranslation('regionsCreated') || `${createdCount} region(s) created successfully`, 'success');
            }
          }
        },
        error: error => {
          errorCount++;
          console.error(`❌ Error creating region ${index + 1}:`, error);
          // Check if all regions are processed
          if (createdCount + errorCount === totalRegions) {
            if (createdCount > 0) {
              this.showAlert(`${createdCount} region(s) created successfully. ${errorCount} region(s) failed.`, errorCount > 0 ? 'warning' : 'success');
            } else {
              this.showAlert(this.getTranslation('errorCreatingRegions') || 'Error creating regions', 'error');
            }
            this.pendingSelections = [];
            this.regionSelectionStart = null;
            this.regionSelectionEnd = null;
            // Reload to ensure consistency
            this.loadScreenRegions();
          }
        }
      });
    });
  }
  clearPendingSelections() {
    this.pendingSelections = [];
    this.regionSelectionStart = null;
    this.regionSelectionEnd = null;
    this.isSelectingRegion = false;
  }
  createGridLayout(rows, cols) {
    if (!this.selectedScreen) return;
    // Calculate region dimensions
    const widthPercent = 100 / cols;
    const heightPercent = 100 / rows;
    // Delete existing regions first
    if (this.screenRegions.length > 0) {
      let deleted = 0;
      this.screenRegions.forEach(region => {
        this.screenService.deleteScreenRegion(this.selectedScreen.id, region.id).subscribe({
          next: () => {
            deleted++;
            if (deleted === this.screenRegions.length) {
              this.createGridRegions(rows, cols, widthPercent, heightPercent);
            }
          },
          error: error => {
            console.error('Error deleting region:', error);
            deleted++;
            if (deleted === this.screenRegions.length) {
              this.createGridRegions(rows, cols, widthPercent, heightPercent);
            }
          }
        });
      });
    } else {
      this.createGridRegions(rows, cols, widthPercent, heightPercent);
    }
  }
  createGridRegions(rows, cols, widthPercent, heightPercent) {
    if (!this.selectedScreen) return;
    const regions = [];
    let regionNumber = 1;
    // Get all existing custom region positions to avoid duplicates
    const existingCustomPositions = this.screenRegions.filter(r => r.regionPosition && r.regionPosition.toString().startsWith('custom_')).map(r => {
      const pos = r.regionPosition.toString();
      const match = pos.match(/custom_(\d+)/);
      return match ? parseInt(match[1]) : 0;
    });
    // Create regions for each grid cell
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Find the next available number
        let nextNumber = 1;
        while (existingCustomPositions.includes(nextNumber)) {
          nextNumber++;
        }
        existingCustomPositions.push(nextNumber);
        regions.push({
          screenId: this.selectedScreen.id,
          regionType: 'custom',
          regionPosition: `custom_${nextNumber}`,
          widthPercentage: widthPercent,
          heightPercentage: heightPercent,
          xPosition: col * widthPercent,
          yPosition: row * heightPercent
        });
        regionNumber++;
      }
    }
    // Clear existing regions array first to show clean state
    this.screenRegions = [];
    this.cdr.detectChanges();
    // Create all regions
    let created = 0;
    let errorCount = 0;
    const totalRegions = regions.length;
    regions.forEach((regionData, index) => {
      this.screenService.createScreenRegion(this.selectedScreen.id, regionData).subscribe({
        next: response => {
          created++;
          if (response && response.region) {
            const newRegion = {
              ...response.region,
              widthPercentage: typeof response.region.widthPercentage === 'string' ? parseFloat(response.region.widthPercentage) : response.region.widthPercentage,
              heightPercentage: typeof response.region.heightPercentage === 'string' ? parseFloat(response.region.heightPercentage) : response.region.heightPercentage,
              xPosition: typeof response.region.xPosition === 'string' ? parseFloat(response.region.xPosition) : response.region.xPosition,
              yPosition: typeof response.region.yPosition === 'string' ? parseFloat(response.region.yPosition) : response.region.yPosition
            };
            this.screenRegions.push(newRegion);
            // Trigger change detection after each region is added to show boxes immediately
            this.cdr.detectChanges();
            console.log(`✅ Region ${created}/${totalRegions} added. Total regions:`, this.screenRegions.length);
          }
          if (created + errorCount === totalRegions) {
            // Final UI update to ensure all boxes are visible
            this.cdr.detectChanges();
            console.log(`✅ All regions created. Displaying ${this.screenRegions.length} boxes on screen.`);
            if (errorCount > 0) {
              this.showAlert(`${created} region(s) created successfully. ${errorCount} region(s) failed.`, errorCount > 0 ? 'warning' : 'success');
            } else {
              this.showAlert(this.getTranslation('regionsCreated') || `${rows}×${cols} grid created successfully (${totalRegions} regions)`, 'success');
            }
            this.pendingSelections = [];
            this.showRegionSetup = false; // Hide setup option since regions exist now
          }
        },
        error: error => {
          errorCount++;
          console.error(`❌ Error creating region ${index + 1}:`, error);
          if (created + errorCount === totalRegions) {
            if (created > 0) {
              this.showAlert(`${created} region(s) created successfully. ${errorCount} region(s) failed.`, errorCount > 0 ? 'warning' : 'success');
              // Reload to show what was created
              this.loadScreenRegions();
            } else {
              this.showAlert(this.getTranslation('errorCreatingRegions') || 'Error creating regions', 'error');
              this.loadScreenRegions();
            }
          }
        }
      });
    });
  }
  createQuickSplit(type) {
    if (type === 'split_horizontal') {
      this.createGridLayout(1, 2); // 1 row, 2 columns (Left/Right)
    } else {
      this.createGridLayout(2, 1); // 2 rows, 1 column (Top/Bottom)
    }
  }
  selectRegionForEdit(region) {
    this.selectedRegionForEdit = region;
  }
  deleteRegion(regionId) {
    if (!this.selectedScreen) return;
    this.showConfirm(this.getTranslation('confirmDeleteRegion') || 'Are you sure you want to delete this region?', () => {
      this.executeDeleteRegion(regionId);
    }, 'Confirm Delete Region', 'danger');
  }
  executeDeleteRegion(regionId) {
    if (!this.selectedScreen) return;
    this.screenService.deleteScreenRegion(this.selectedScreen.id, regionId).subscribe({
      next: () => {
        this.loadScreenRegions();
        if (this.selectedRegionForEdit?.id === regionId) {
          this.selectedRegionForEdit = null;
        }
        this.showAlert(this.getTranslation('regionDeleted') || 'Region deleted successfully', 'success');
      },
      error: error => {
        console.error('Error deleting region:', error);
        this.showAlert(error.error?.error || this.getTranslation('errorDeletingRegion') || 'Error deleting region', 'error');
      }
    });
  }
  resetAllRegions() {
    if (!this.selectedScreen || this.screenRegions.length === 0) return;
    this.showConfirm(this.getTranslation('confirmResetRegions') || 'Are you sure you want to delete all regions? This action cannot be undone.', () => {
      this.executeResetAllRegions();
    }, 'Confirm Reset Regions', 'danger');
  }
  executeResetAllRegions() {
    if (!this.selectedScreen || this.screenRegions.length === 0) return;
    let deleted = 0;
    this.screenRegions.forEach(region => {
      this.screenService.deleteScreenRegion(this.selectedScreen.id, region.id).subscribe({
        next: () => {
          deleted++;
          if (deleted === this.screenRegions.length) {
            this.loadScreenRegions();
            this.selectedRegionForEdit = null;
            this.regionSelectionStart = null;
            this.regionSelectionEnd = null;
            this.showAlert(this.getTranslation('regionsReset') || 'All regions have been reset', 'success');
          }
        },
        error: error => {
          console.error('Error deleting region:', error);
        }
      });
    });
  }
  getRegionDisplayName(region, index) {
    if (region.regionPosition && region.regionPosition.toString().startsWith('custom_')) {
      const num = region.regionPosition.toString().replace('custom_', '');
      return `Region ${num}`;
    }
    return this.getTranslation(region.regionPosition) || region.regionPosition?.toString() || `Region ${index + 1}`;
  }
  getGridColumns() {
    if (this.screenRegions.length === 0) return 1;
    // Sort regions by position
    const sortedRegions = [...this.screenRegions].sort((a, b) => {
      const aY = Math.round(a.yPosition);
      const bY = Math.round(b.yPosition);
      if (aY !== bY) {
        return aY - bY; // Sort by row first
      }
      return Math.round(a.xPosition) - Math.round(b.xPosition); // Then by column
    });
    // Count regions in first row (same Y position)
    const firstRowY = Math.round(sortedRegions[0].yPosition);
    const firstRowCount = sortedRegions.filter(r => Math.round(r.yPosition) === firstRowY).length;
    const cols = firstRowCount || 1;
    console.log('📊 Grid Columns:', cols, 'Regions:', this.screenRegions.length, 'First row Y:', firstRowY, 'Regions:', sortedRegions.map(r => ({
      x: r.xPosition,
      y: r.yPosition
    })));
    return cols;
  }
  getGridRows() {
    if (this.screenRegions.length === 0) return 1;
    const cols = this.getGridColumns();
    const rows = Math.ceil(this.screenRegions.length / cols);
    console.log('📊 Grid Rows:', rows, 'Columns:', cols, 'Total regions:', this.screenRegions.length);
    return rows || 1;
  }
  getSortedRegions() {
    // Sort regions by row (y position) then by column (x position)
    return [...this.screenRegions].sort((a, b) => {
      const aY = Math.round(a.yPosition);
      const bY = Math.round(b.yPosition);
      if (aY !== bY) {
        return aY - bY;
      }
      return Math.round(a.xPosition) - Math.round(b.xPosition);
    });
  }
  getRegionWidth(region) {
    const width = typeof region.widthPercentage === 'string' ? parseFloat(region.widthPercentage) : region.widthPercentage;
    return isNaN(width) ? '0.0' : width.toFixed(1);
  }
  getRegionHeight(region) {
    const height = typeof region.heightPercentage === 'string' ? parseFloat(region.heightPercentage) : region.heightPercentage;
    return isNaN(height) ? '0.0' : height.toFixed(1);
  }
  getRegionX(region) {
    const x = typeof region.xPosition === 'string' ? parseFloat(region.xPosition) : region.xPosition;
    return isNaN(x) ? '0.0' : x.toFixed(1);
  }
  getRegionY(region) {
    const y = typeof region.yPosition === 'string' ? parseFloat(region.yPosition) : region.yPosition;
    return isNaN(y) ? '0.0' : y.toFixed(1);
  }
  togglePreviewOrientation() {
    this.previewOrientation = this.previewOrientation === 'landscape' ? 'portrait' : 'landscape';
    // Update dimensions based on orientation
    if (this.previewOrientation === 'portrait') {
      // Portrait: 450x800 (taller)
      this.previewScreenWidth = 450;
      this.previewScreenHeight = 800;
    } else {
      // Landscape: 800x450 (wider)
      this.previewScreenWidth = 800;
      this.previewScreenHeight = 450;
    }
  }
  getPreviewDimensions() {
    return {
      width: this.previewScreenWidth,
      height: this.previewScreenHeight
    };
  }
  // ========== Advertisement Schedules Methods ==========
  loadScreenSchedules() {
    if (!this.selectedScreen) return;
    this.screenService.getScreenSchedules(this.selectedScreen.id).subscribe({
      next: response => {
        // Convert schedules array to Map for easy lookup
        this.advertisementSchedules.clear();
        (response.schedules || []).forEach(schedule => {
          this.advertisementSchedules.set(schedule.adId, schedule);
        });
      },
      error: error => {
        console.error('Error loading screen schedules:', error);
      }
    });
  }
  getAdvertisementSchedule(adId) {
    return this.advertisementSchedules.get(adId) || null;
  }
  /**
   * Helper: get currently selected region ID for an advertisement.
   * - If a schedule exists with regionId, use that.
   * - Else, if there is exactly one region, default to that region.
   * - Else, no region selected (null).
   */
  getSelectedRegionIdForAd(adId) {
    const schedule = this.getAdvertisementSchedule(adId);
    if (schedule && schedule.regionId != null) {
      return schedule.regionId;
    }
    if (this.screenRegions.length === 1) {
      return this.screenRegions[0].id;
    }
    return null;
  }
  /**
   * Wrapper for region select (template uses ngModel, we forward to existing onRegionChange).
   */
  onRegionSelectChange(adId, regionId) {
    const value = regionId == null ? '' : String(regionId);
    this.onRegionChange(adId, {
      target: {
        value
      }
    });
  }
  openScheduleModal(adId) {
    this.editingScheduleAdId = adId;
    const existingSchedule = this.getAdvertisementSchedule(adId);
    // Default region: use existing schedule's region if set, otherwise auto-select the only region when there is 1
    const defaultRegionId = existingSchedule && existingSchedule.regionId != null ? existingSchedule.regionId : this.screenRegions.length === 1 ? this.screenRegions[0].id : null;
    // Defaults for new schedule: current date & time
    const now = new Date();
    const defaultStartDate = this.formatDateForInput(now);
    const defaultStartTime = now.toTimeString().slice(0, 5); // HH:mm
    // Initialize form data with existing schedule or defaults (current date/time)
    this.scheduleFormData = {
      regionId: defaultRegionId,
      startDate: existingSchedule?.startDate ? this.formatDateForInput(existingSchedule.startDate) : defaultStartDate,
      endDate: existingSchedule?.endDate ? this.formatDateForInput(existingSchedule.endDate) : '',
      startTime: existingSchedule?.startTime || defaultStartTime,
      endTime: existingSchedule?.endTime || '',
      priority: existingSchedule?.priority || 0,
      isActive: existingSchedule?.isActive !== false
    };
    this.showScheduleModal = true;
  }
  closeScheduleModal() {
    this.showScheduleModal = false;
    this.editingScheduleAdId = null;
  }
  saveAdvertisementSchedule(scheduleData) {
    if (!this.selectedScreen || !this.editingScheduleAdId) return;
    const scheduleRequest = {
      screenId: this.selectedScreen.id,
      adId: this.editingScheduleAdId,
      regionId: scheduleData.regionId || null,
      startDate: scheduleData.startDate || null,
      endDate: scheduleData.endDate || null,
      startTime: scheduleData.startTime || null,
      endTime: scheduleData.endTime || null,
      isActive: scheduleData.isActive !== undefined ? scheduleData.isActive : true,
      priority: scheduleData.priority || 0
    };
    this.screenService.createAdvertisementSchedule(this.selectedScreen.id, scheduleRequest).subscribe({
      next: response => {
        this.advertisementSchedules.set(this.editingScheduleAdId, response.schedule);
        this.closeScheduleModal();
        this.showAlert(this.getTranslation('scheduleSaved') || 'Schedule saved successfully', 'success');
      },
      error: error => {
        console.error('Error saving schedule:', error);
        this.showAlert(error.error?.error || this.getTranslation('errorSavingSchedule') || 'Error saving schedule', 'error');
      }
    });
  }
  deleteAdvertisementSchedule(adId) {
    if (!this.selectedScreen) return;
    this.showConfirm(this.getTranslation('confirmDeleteSchedule') || 'Are you sure you want to delete this schedule?', () => {
      this.executeDeleteAdvertisementSchedule(adId);
    }, 'Confirm Delete Schedule', 'danger');
  }
  executeDeleteAdvertisementSchedule(adId) {
    if (!this.selectedScreen) return;
    this.screenService.deleteAdvertisementSchedule(this.selectedScreen.id, adId).subscribe({
      next: () => {
        this.advertisementSchedules.delete(adId);
        this.showAlert(this.getTranslation('scheduleDeleted') || 'Schedule deleted successfully', 'success');
      },
      error: error => {
        console.error('Error deleting schedule:', error);
        this.showAlert(error.error?.error || this.getTranslation('errorDeletingSchedule') || 'Error deleting schedule', 'error');
      }
    });
  }
  clampSlideDurationSeconds(v) {
    if (Number.isNaN(v) || v < 1) return 5;
    return Math.min(600, Math.round(v));
  }
  getSlideDurationSeconds(ad) {
    const ext = ad;
    if (typeof ext.slideDurationSeconds === 'number' && !Number.isNaN(ext.slideDurationSeconds)) {
      return this.clampSlideDurationSeconds(ext.slideDurationSeconds);
    }
    return 5;
  }
  onSlideDurationSecondsChange(ad, raw) {
    const n = typeof raw === 'number' ? raw : parseInt(String(raw), 10);
    ad.slideDurationSeconds = this.clampSlideDurationSeconds(Number.isNaN(n) ? 5 : n);
  }
  buildPlaylistPayload() {
    return this.assignedAdvertisements.map(ad => ({
      adId: ad.id,
      durationSeconds: this.getSlideDurationSeconds(ad)
    }));
  }
  saveAssignedPlaylist() {
    if (!this.selectedScreen?.id) return;
    this.isSavingPlaylist = true;
    this.screenService.updateScreen(this.selectedScreen.id, {
      name: this.selectedScreen.name,
      advertisementPlaylist: this.buildPlaylistPayload()
    }).subscribe({
      next: updated => {
        this.selectedScreen = updated;
        this.isSavingPlaylist = false;
        this.showAlert(this.getTranslation('playlistSaved') || 'Order and slide timing saved', 'success');
      },
      error: err => {
        this.isSavingPlaylist = false;
        this.showAlert(err.error?.error || 'Error saving playlist', 'error');
      }
    });
  }
  onAssignedDragStart(index, event) {
    this.dragAssignedFromIndex = index;
    event.dataTransfer?.setData('text/plain', String(index));
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
    }
  }
  onAssignedDragOver(event) {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }
  onAssignedDrop(index, event) {
    event.preventDefault();
    const from = this.dragAssignedFromIndex;
    this.dragAssignedFromIndex = null;
    if (from == null || from === index) return;
    const next = [...this.assignedAdvertisements];
    const [moved] = next.splice(from, 1);
    next.splice(index, 0, moved);
    this.assignedAdvertisements = next;
    this.cdr.markForCheck();
  }
  /** Remove an advertisement from this screen's assigned list. */
  onRemoveAssignedAdvertisement(adId) {
    if (!this.selectedScreen) return;
    const ad = this.assignedAdvertisements.find(a => a.id === adId);
    const title = ad?.title || `#${adId}`;
    this.showConfirm(this.getTranslation('confirmRemoveAssignedAd') || `Remove "${title}" from this screen?`, () => {
      const next = this.assignedAdvertisements.filter(a => a.id !== adId);
      const playlist = next.map(a => ({
        adId: a.id,
        durationSeconds: this.getSlideDurationSeconds(a)
      }));
      this.screenService.updateScreen(this.selectedScreen.id, {
        name: this.selectedScreen.name,
        advertisementPlaylist: playlist
      }).subscribe({
        next: updated => {
          this.selectedScreen = updated;
          this.assignedAdvertisements = next;
          this.showAlert(this.getTranslation('advertisementRemoved') || 'Advertisement removed from screen', 'success');
        },
        error: error => {
          console.error('Error removing assigned advertisement:', error);
          this.showAlert(error.error?.error || this.getTranslation('errorRemovingAssignedAd') || 'Error removing advertisement', 'error');
        }
      });
    }, this.getTranslation('delete') || 'Delete', 'danger');
  }
  formatDateForInput(date) {
    if (!date) return '';
    const d = typeof date === 'string' ? new Date(date) : date;
    // Use local date components to avoid UTC shifting (toISOString() can change the day)
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
  onRegionChange(adId, event) {
    if (!this.selectedScreen) return;
    const regionId = event.target.value ? parseInt(event.target.value) : null;
    const schedule = this.getAdvertisementSchedule(adId);
    if (schedule) {
      // Update existing schedule
      this.screenService.updateAdvertisementSchedule(this.selectedScreen.id, adId, {
        regionId
      }).subscribe({
        next: response => {
          this.advertisementSchedules.set(adId, response.schedule);
        },
        error: error => {
          console.error('Error updating region assignment:', error);
          this.showAlert(error.error?.error || 'Error updating region assignment', 'error');
        }
      });
    } else {
      // Create new schedule with region
      this.screenService.createAdvertisementSchedule(this.selectedScreen.id, {
        screenId: this.selectedScreen.id,
        adId: adId,
        regionId: regionId
      }).subscribe({
        next: response => {
          this.advertisementSchedules.set(adId, response.schedule);
        },
        error: error => {
          console.error('Error creating schedule:', error);
          this.showAlert(error.error?.error || 'Error creating schedule', 'error');
        }
      });
    }
  }
  isAssignedAdvertisement(adId) {
    return this.selectedScreen?.assignedAds?.includes(adId) || false;
  }
  // Alert Dialog Methods
  showAlert(message, type = 'info', title) {
    this.alertDialogData = {
      message,
      type,
      title,
      confirmText: 'OK'
    };
    this.showAlertDialog = true;
  }
  closeAlertDialog() {
    this.showAlertDialog = false;
  }
  // Confirm Dialog Methods
  showConfirm(message, onConfirm, title, type = 'warning') {
    this.confirmDialogData = {
      title: title || 'Confirm',
      message,
      confirmText: 'OK',
      cancelText: 'Cancel',
      type
    };
    this.confirmDialogCallback = onConfirm;
    this.showConfirmDialog = true;
  }
  onConfirmDialogConfirmed() {
    if (this.confirmDialogCallback) {
      this.confirmDialogCallback();
    }
    this.showConfirmDialog = false;
    this.confirmDialogCallback = null;
  }
  onConfirmDialogCancelled() {
    this.showConfirmDialog = false;
    this.confirmDialogCallback = null;
  }
  static {
    this.ɵfac = function ScreenPlaybackComponent_Factory(t) {
      return new (t || ScreenPlaybackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_screen_service__WEBPACK_IMPORTED_MODULE_3__.ScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_advertisements_service__WEBPACK_IMPORTED_MODULE_4__.AdvertisementsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ScreenPlaybackComponent,
      selectors: [["app-screen-playback"]],
      decls: 38,
      vars: 30,
      consts: [["scheduleForm", "ngForm"], [1, "screen-playback-container"], [1, "page-header"], [1, "page-title"], [1, "fas", "fa-play-circle"], [1, "page-subtitle"], ["role", "tablist", 1, "nav", "nav-tabs", "mb-3"], ["role", "presentation", 1, "nav-item"], ["type", "button", "role", "tab", 1, "nav-link", 3, "click"], ["class", "content-wrapper", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-between", "align-items-center"], [1, "form-check", "form-switch", "mb-0"], ["type", "checkbox", "id", "muteToggle", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "muteToggle", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-play", "me-2"], [1, "modal-backdrop", "fade", 3, "click"], ["class", "loading-overlay", 4, "ngIf"], [3, "closed", "visible", "data"], [3, "confirmed", "cancelled", "visible", "data"], [1, "content-wrapper"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "screen-selection"], [1, "form-select", 3, "ngModelChange", "change", "ngModel", "disabled"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "selected-screen-info mt-3", 4, "ngIf"], ["class", "card mb-4", 4, "ngIf"], ["class", "modal fade", "tabindex", "-1", "role", "dialog", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [3, "ngValue"], [1, "selected-screen-info", "mt-3"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "section-title"], [1, "fas", "fa-info-circle", "me-2"], [1, "info-item"], [1, "info-item", "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "fas", "fa-layer-group", "me-2"], ["class", "info-item", 4, "ngIf"], ["class", "row mt-3", 4, "ngIf"], [1, "badge", "bg-primary"], [1, "text-muted"], [1, "row", "mt-3"], [1, "col-12", "mb-3"], [1, "fas", "fa-map-marker-alt", "me-2"], [1, "location-path"], ["class", "badge bg-info me-2", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "badge", "bg-info", "me-2"], [1, "fas", "fa-building", "me-1"], [1, "fas", "fa-door-open", "me-1"], [1, "fas", "fa-map-pin", "me-1"], [1, "fas", "fa-user", "me-2"], ["class", "badge bg-success me-2", 4, "ngIf"], ["class", "badge bg-secondary", 4, "ngIf"], [1, "badge", "bg-success", "me-2"], [1, "fas", "fa-user-check", "me-1"], [1, "badge", "bg-secondary"], [1, "fas", "fa-calendar-alt", "me-2"], [1, "fas", "fa-cog", "me-2"], [1, "fas", "fa-th-large", "me-2"], ["class", "text-center py-3", 4, "ngIf"], [1, "region-setup-editor"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "mb-1"], [1, "text-muted", "mb-0", "small"], ["class", "btn-group", 4, "ngIf"], ["class", "alert alert-info mb-3", 4, "ngIf"], ["class", "grid-preview-container mb-4", 4, "ngIf"], [1, "region-actions", "mb-3"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap"], [1, "grid-options"], [1, "form-label", "mb-2"], ["role", "group", 1, "btn-group", "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "fas", "fa-square", "me-1"], [1, "fas", "fa-columns", "me-1"], [1, "fas", "fa-grip-lines", "me-1"], [1, "fas", "fa-th", "me-1"], ["class", "selection-info", 4, "ngIf"], ["type", "button", "class", "btn btn-success btn-lg", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-danger", 3, "disabled", "click", 4, "ngIf"], [1, "text-center", "py-3"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "title"], [1, "fas", "fa-redo", "me-1"], [1, "alert", "alert-info", "mb-3"], [1, "d-flex", "align-items-start"], [1, "fas", "fa-info-circle", "me-2", "mt-1"], [1, "mb-0", "mt-2", "small"], [1, "grid-preview-container", "mb-4"], [1, "mb-3", "text-white"], [1, "fas", "fa-th", "me-2"], [1, "text-muted", "ms-2"], [1, "grid-display"], [1, "grid-preview"], ["class", "grid-cell", 3, "selected", "background", "border", "border-radius", "click", 4, "ngFor", "ngForOf"], [1, "grid-cell", 3, "click"], [1, "grid-cell-content"], [1, "grid-cell-number"], [1, "btn-remove-region", 3, "click", "title"], [1, "fas", "fa-times"], [1, "selection-info"], [1, "badge", "bg-info"], [1, "fas", "fa-layer-group", "me-1"], ["type", "button", 1, "btn", "btn-success", "btn-lg", 3, "click", "disabled"], [1, "fas", "fa-save", "me-1"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click", "disabled"], [1, "fas", "fa-times", "me-1"], [1, "card-header", "bg-success", "text-white"], [1, "fas", "fa-check-circle", "me-2"], ["class", "d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-2", "mb-3"], [1, "text-muted", "small"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "click", "disabled"], ["class", "fas fa-save me-1", 4, "ngIf"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", 4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "row", "g-3"], ["class", "col-md-6 col-lg-4", "draggable", "true", 3, "dragstart", "dragover", "drop", 4, "ngFor", "ngForOf"], ["draggable", "true", 1, "col-md-6", "col-lg-4", 3, "dragstart", "dragover", "drop"], [1, "advertisement-card", "assigned", "position-relative"], [1, "card", "h-100"], ["type", "button", 1, "btn", "btn-sm", "border-0", "position-absolute", 2, "top", "-3px", "right", "0px", "z-index", "2", "width", "30px", "height", "30px", "border-radius", "999px", "display", "flex", "align-items", "center", "justify-content", "center", 3, "click", "title"], [1, "fas", "fa-times", 2, "font-size", "18px", "font-weight", "700", "color", "#dc3545"], [1, "d-flex", "justify-content-between", "align-items-start", "gap-2", "mb-2", "assigned-ad-top-row"], [1, "assigned-ad-main", "flex-grow-1", "min-w-0"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], ["title", "Drag to reorder", 1, "text-muted", 2, "cursor", "grab"], [1, "fas", "fa-grip-vertical"], [1, "card-title", "mb-0"], ["class", "card-text text-muted small mt-1 mb-0", 4, "ngIf"], [1, "assigned-ad-header", "d-flex", "flex-column", "align-items-stretch"], [1, "badge", "bg-success", "mb-2", "align-self-end"], [1, "fas", "fa-check", "me-1"], [1, "assigned-ad-thumb"], ["muted", "", "playsinline", "", "preload", "metadata", 3, "src", 4, "ngIf"], ["loading", "lazy", 3, "src", "alt", 4, "ngIf"], ["class", "assigned-ad-thumb-fallback", 4, "ngIf"], [1, "assigned-ad-meta"], [1, "assigned-ad-badges"], [1, "badge"], [1, "mt-2", "d-flex", "flex-wrap", "align-items-center", "gap-2"], [1, "form-label", "small", "mb-0"], ["type", "number", "min", "1", "max", "600", 1, "form-control", "form-control-sm", 2, "max-width", "5.5rem", 3, "ngModelChange", "ngModel"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2", "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-primary", "flex-fill", 3, "click"], [1, "fas", "fa-play", "me-1"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "title"], [1, "fas", "fa-calendar-alt"], [1, "card-text", "text-muted", "small", "mt-1", "mb-0"], ["muted", "", "playsinline", "", "preload", "metadata", 3, "src"], ["loading", "lazy", 3, "src", "alt"], [1, "assigned-ad-thumb-fallback"], ["class", "fas fa-file-powerpoint", 4, "ngIf"], ["class", "fas fa-file-pdf", 4, "ngIf"], ["class", "fas fa-file", 4, "ngIf"], [1, "fas", "fa-file-powerpoint"], [1, "fas", "fa-file-pdf"], [1, "fas", "fa-file"], [1, "mt-2"], [1, "form-label", "small"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "schedule-info", "p-2", "bg-light", "rounded", "small"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-calendar-alt", "me-1"], [1, "btn", "btn-sm", "btn-link", "p-0", 3, "click", "title"], [1, "fas", "fa-edit"], ["class", "mt-1 text-muted", 4, "ngIf"], [1, "mt-1", "text-muted"], [4, "ngIf"], ["role", "document", 1, "modal-dialog"], [1, "modal-body"], ["class", "mb-3", 4, "ngIf"], [1, "row", "g-3", "mb-3"], [1, "col-md-6"], [1, "form-label"], ["type", "date", "name", "startDate", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "time", "name", "startTime", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "endDate", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "time", "name", "endTime", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-3"], ["type", "number", "name", "priority", "min", "0", "max", "100", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-text", "text-muted"], [1, "form-check"], ["type", "checkbox", "name", "isActive", "id", "isActive", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "isActive", 1, "form-check-label"], [1, "modal-footer"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["name", "regionId", 1, "form-select", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-trash", "me-1"], [1, "modal-backdrop", "fade"], ["for", "orientation", 1, "form-label"], ["id", "orientation", 1, "form-select", 3, "ngModelChange", "ngModel", "disabled"], ["value", "landscape"], ["value", "portrait"], ["value", "auto"], ["for", "screenSize", 1, "form-label"], ["id", "screenSize", 1, "form-select", 3, "ngModelChange", "ngModel", "disabled"], ["value", "small"], ["value", "medium"], ["value", "large"], ["value", "custom"], ["class", "row", 4, "ngIf"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-save", "me-2"], [1, "fas", "fa-sync-alt", "me-1"], ["type", "button", "class", "btn btn-success", 3, "disabled", "title", "click", 4, "ngIf"], ["for", "screenWidth", 1, "form-label"], ["type", "number", "id", "screenWidth", "placeholder", "e.g., 1024", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["for", "screenHeight", 1, "form-label"], ["type", "number", "id", "screenHeight", "placeholder", "e.g., 245", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "fas", "fa-info-circle", "me-1"], ["type", "button", 1, "btn", "btn-success", 3, "click", "disabled", "title"], [1, "fas", "fa-object-group", "me-1"], [1, "row", "mb-3"], [1, "info-item", "mb-3"], ["class", "info-item mb-3", 4, "ngIf"], [1, "text-break", "small"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "img-thumbnail", 2, "max-width", "200px", 3, "src"], [1, "loading-overlay"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"]],
      template: function ScreenPlaybackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ul", 6)(8, "li", 7)(9, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_Template_button_click_9_listener() {
            return ctx.activePlaybackTab = 0;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "li", 7)(12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_Template_button_click_12_listener() {
            return ctx.activePlaybackTab = 1;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, ScreenPlaybackComponent_div_14_Template, 17, 12, "div", 9)(15, ScreenPlaybackComponent_div_15_Template, 2, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_Template_button_click_22_listener() {
            return ctx.closeAdvertisementModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, ScreenPlaybackComponent_div_23_Template, 42, 25, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 17)(25, "div", 18)(26, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScreenPlaybackComponent_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.isMuted, $event) || (ctx.isMuted = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_Template_button_click_29_listener() {
            return ctx.closeAdvertisementModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_Template_button_click_31_listener() {
            return ctx.confirmPlayAdvertisement();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScreenPlaybackComponent_Template_div_click_34_listener() {
            return ctx.closeAdvertisementModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, ScreenPlaybackComponent_div_35_Template, 4, 1, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "app-alert-dialog", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("closed", function ScreenPlaybackComponent_Template_app_alert_dialog_closed_36_listener() {
            return ctx.closeAlertDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "app-confirm-dialog", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("confirmed", function ScreenPlaybackComponent_Template_app_confirm_dialog_confirmed_37_listener() {
            return ctx.onConfirmDialogConfirmed();
          })("cancelled", function ScreenPlaybackComponent_Template_app_confirm_dialog_cancelled_37_listener() {
            return ctx.onConfirmDialogCancelled();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("videoPlaybackControl") || "Video Playback Control", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.getTranslation("controlVideoPlayback") || "Control video playback on your screens");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx.activePlaybackTab === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("byScreen") || "By Screen", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx.activePlaybackTab === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("byGroup") || "By Group", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activePlaybackTab === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activePlaybackTab === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx.showAdvertisementModal ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("show", ctx.showAdvertisementModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("advertisementDetails") || "Advertisement Details", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedAdvertisement);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.isMuted);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("muteAudio") || "Mute audio on screen", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("cancel") || "Cancel", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.selectedScreen);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.getTranslation("playOnScreen") || "Play on Screen", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx.showAdvertisementModal ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("show", ctx.showAdvertisementModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", ctx.showAlertDialog)("data", ctx.alertDialogData);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", ctx.showConfirmDialog)("data", ctx.confirmDialogData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmDialogComponent, _shared_components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_6__.AlertDialogComponent, _group_layout_group_layout_component__WEBPACK_IMPORTED_MODULE_7__.GroupLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
      styles: ["@charset \"UTF-8\";\n.screen-playback-container {\n  padding: 24px;\n  min-height: 100vh;\n  background: #f8f9fa;\n}\n.screen-playback-container[dir=rtl] .page-title {\n  text-align: right;\n}\n.screen-playback-container .page-header {\n  margin-bottom: 32px;\n  text-align: center;\n}\n.screen-playback-container .page-header .page-title {\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.screen-playback-container .page-header .page-title i {\n  color: #00695c;\n  background: linear-gradient(135deg, #00695c, #4db6ac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-right: 12px;\n}\n.screen-playback-container .page-header .page-subtitle {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin-top: 8px;\n}\n.screen-playback-container .content-wrapper {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.screen-playback-container .card {\n  background: white;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.screen-playback-container .card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);\n}\n.screen-playback-container .card .card-header {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border-bottom: 2px solid #e9ecef;\n  padding: 16px 20px;\n  color: #2c3e50;\n}\n.screen-playback-container .card .card-header .card-title {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  display: flex;\n  align-items: center;\n}\n.screen-playback-container .card .card-header .card-title i {\n  color: #00695c;\n  margin-right: 8px;\n}\n.screen-playback-container .card .card-header.bg-success {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  color: white;\n  border-bottom: none;\n}\n.screen-playback-container .card .card-header.bg-success .card-title {\n  color: white;\n}\n.screen-playback-container .card .card-header.bg-success .card-title i {\n  color: white;\n}\n.screen-playback-container .card .card-body {\n  padding: 24px;\n}\n.screen-playback-container .screen-selection select {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid #e0e0e0;\n  border-radius: 12px;\n  font-size: 1rem;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n.screen-playback-container .screen-selection select:focus {\n  border-color: #00695c;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.screen-playback-container .screen-selection select:disabled {\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n}\n.screen-playback-container .selected-screen-info {\n  background: #f8f9fa;\n  padding: 20px;\n  border-radius: 12px;\n  border-left: 4px solid #00695c;\n}\n.screen-playback-container .selected-screen-info .section-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #00695c;\n  margin-bottom: 16px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e0e0e0;\n  display: flex;\n  align-items: center;\n}\n.screen-playback-container .selected-screen-info .section-title i {\n  font-size: 1rem;\n  color: #00695c;\n  margin-right: 8px;\n}\n.screen-playback-container .selected-screen-info .info-item {\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.screen-playback-container .selected-screen-info .info-item strong {\n  min-width: 120px;\n  color: #495057;\n  font-weight: 600;\n}\n.screen-playback-container .selected-screen-info .info-item span {\n  color: #212529;\n}\n.screen-playback-container .selected-screen-info .info-item .badge {\n  font-size: 0.875rem;\n  padding: 6px 12px;\n}\n.screen-playback-container .selected-screen-info .location-path {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.screen-playback-container .selected-screen-info .location-path .badge {\n  font-size: 0.875rem;\n  padding: 8px 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.screen-playback-container .status-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.screen-playback-container .status-badge.status-online {\n  background-color: #d4edda;\n  color: #155724;\n}\n.screen-playback-container .status-badge.status-offline {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.screen-playback-container .status-badge.status-playing {\n  background-color: #d1ecf1;\n  color: #0c5460;\n}\n.screen-playback-container .status-badge.status-paused {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.screen-playback-container .status-badge.status-unknown {\n  background-color: #e2e3e5;\n  color: #383d41;\n}\n.screen-playback-container .form-group label {\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 8px;\n}\n.screen-playback-container .form-group .form-control {\n  padding: 12px;\n  border: 2px solid #e0e0e0;\n  border-radius: 12px;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n.screen-playback-container .form-group .form-control:focus {\n  border-color: #00695c;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.screen-playback-container .form-group .form-control:disabled {\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n}\n.screen-playback-container .form-group .form-select {\n  padding: 12px;\n  border: 2px solid #e0e0e0;\n  border-radius: 12px;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n.screen-playback-container .form-group .form-select:focus {\n  border-color: #00695c;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);\n}\n.screen-playback-container .form-group .form-select:disabled {\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n}\n.screen-playback-container .btn {\n  border-radius: 12px;\n  padding: 10px 20px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  border: none;\n}\n.screen-playback-container .btn.btn-primary {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n}\n.screen-playback-container .btn.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 105, 92, 0.3);\n}\n.screen-playback-container .btn.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.screen-playback-container .btn.btn-success {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  color: white;\n}\n.screen-playback-container .btn.btn-success:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);\n}\n.screen-playback-container .btn.btn-success:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.screen-playback-container .btn.btn-warning {\n  background: linear-gradient(135deg, #ffc107 0%, #ffca2c 100%);\n  color: white;\n}\n.screen-playback-container .btn.btn-warning:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);\n}\n.screen-playback-container .btn.btn-warning:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.screen-playback-container .btn.btn-info {\n  background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);\n  color: white;\n}\n.screen-playback-container .btn.btn-info:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(23, 162, 184, 0.3);\n}\n.screen-playback-container .btn.btn-info:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.screen-playback-container .btn.btn-danger {\n  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);\n  color: white;\n}\n.screen-playback-container .btn.btn-danger:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);\n}\n.screen-playback-container .btn.btn-danger:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.screen-playback-container .btn i {\n  margin-right: 8px;\n}\n.screen-playback-container .playing-video-info {\n  background: #f8f9fa;\n  padding: 20px;\n  border-radius: 12px;\n  border-left: 4px solid #00695c;\n}\n.screen-playback-container .playing-video-info h5 {\n  color: #495057;\n  margin-bottom: 16px;\n  font-weight: 600;\n}\n.screen-playback-container .playing-video-info .video-details .detail-item {\n  margin-bottom: 12px;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.screen-playback-container .playing-video-info .video-details .detail-item strong {\n  min-width: 100px;\n  color: #495057;\n}\n.screen-playback-container .playing-video-info .video-details .detail-item span {\n  color: #212529;\n  word-break: break-word;\n}\n.screen-playback-container .advertisement-card {\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  /* Fixed column: badge + thumb + type/size \u2014 avoids empty gap on the left */\n}\n.screen-playback-container .advertisement-card:hover {\n  transform: translateY(-2px);\n}\n.screen-playback-container .advertisement-card .card {\n  border: 2px solid #e0e0e0;\n  transition: border-color 0.2s;\n}\n.screen-playback-container .advertisement-card .card:hover {\n  border-color: #00695c;\n  box-shadow: 0 4px 12px rgba(0, 105, 92, 0.15);\n}\n.screen-playback-container .advertisement-card.assigned .card {\n  border-color: #28a745;\n  background: linear-gradient(to bottom, #ffffff 0%, #f0fff4 100%);\n}\n.screen-playback-container .advertisement-card.assigned .card:hover {\n  border-color: #20c997;\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.2);\n}\n.screen-playback-container .advertisement-card .assigned-ad-main {\n  min-width: 0;\n}\n.screen-playback-container .advertisement-card .assigned-ad-top-row {\n  align-items: flex-start;\n}\n.screen-playback-container .advertisement-card .assigned-ad-header {\n  flex-shrink: 0;\n  width: 118px;\n}\n.screen-playback-container .advertisement-card .assigned-ad-thumb {\n  width: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f1f3f4;\n  aspect-ratio: 16/10;\n  border: 1px solid rgba(40, 167, 69, 0.25);\n}\n.screen-playback-container .advertisement-card .assigned-ad-thumb img,\n.screen-playback-container .advertisement-card .assigned-ad-thumb video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  pointer-events: none;\n}\n.screen-playback-container .advertisement-card .assigned-ad-meta {\n  margin-top: 0.4rem;\n  text-align: end;\n  font-size: 0.7rem;\n  line-height: 1.35;\n}\n.screen-playback-container .advertisement-card .assigned-ad-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  justify-content: flex-end;\n  margin-bottom: 0;\n}\n.screen-playback-container .advertisement-card .assigned-ad-badges .badge {\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 0.2em 0.45em;\n}\n.screen-playback-container .advertisement-card .assigned-ad-thumb-fallback {\n  width: 100%;\n  height: 100%;\n  min-height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  font-size: 1.75rem;\n}\n.screen-playback-container .table .advertisement-row {\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.screen-playback-container .table .advertisement-row:hover {\n  background-color: #f8f9fa;\n}\n.screen-playback-container .table .advertisement-row.selected {\n  background-color: #e0f2f1;\n  border-left: 4px solid #00695c;\n}\n.screen-playback-container .table .advertisement-row.assigned-ad {\n  background-color: #f0fff4;\n  border-left: 3px solid #28a745;\n}\n.screen-playback-container .table .advertisement-row.assigned-ad:hover {\n  background-color: #e8f5e9;\n}\n.screen-playback-container .selected-advertisement-info {\n  border-left: 4px solid #00695c;\n}\n.screen-playback-container .modal.show {\n  display: block;\n}\n.screen-playback-container .modal .modal-content {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n.screen-playback-container .modal .modal-content .modal-header {\n  background: linear-gradient(135deg, #00695c 0%, #4db6ac 100%);\n  color: white;\n  border-bottom: none;\n  border-radius: 12px 12px 0 0;\n}\n.screen-playback-container .modal .modal-content .modal-header .btn-close {\n  filter: invert(1);\n}\n.screen-playback-container .modal .modal-content .modal-body .info-item p {\n  margin: 0;\n  color: #495057;\n}\n.screen-playback-container .modal .modal-content .modal-footer {\n  border-top: 1px solid #e0e0e0;\n}\n.screen-playback-container .modal-backdrop.show {\n  opacity: 0.5;\n}\n.screen-playback-container .loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.screen-playback-container .loading-overlay .spinner-border {\n  width: 3rem;\n  height: 3rem;\n}\n\n@media (max-width: 768px) {\n  .screen-playback-container {\n    padding: 16px;\n  }\n  .screen-playback-container .page-header .page-title {\n    font-size: 2rem;\n  }\n  .screen-playback-container .controls-row {\n    flex-direction: column;\n  }\n  .screen-playback-container .controls-row .btn {\n    width: 100%;\n  }\n  .screen-playback-container .selected-screen-info .info-item {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .screen-playback-container .selected-screen-info .info-item strong {\n    min-width: auto;\n    margin-bottom: 4px;\n  }\n}\n[dir=rtl] .controls-row .btn i {\n  margin-right: 0;\n  margin-left: 8px;\n}\n[dir=rtl] .region-setup-editor .screen-editor-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  border: 2px dashed #dee2e6;\n}\n[dir=rtl] .region-setup-editor .screen-editor-container .orientation-controls {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n[dir=rtl] .region-setup-editor .screen-editor-container .orientation-controls .btn-group .btn.active {\n  background-color: #0d6efd;\n  color: white;\n  border-color: #0d6efd;\n}\n[dir=rtl] .region-setup-editor .screen-preview-wrapper {\n  position: relative;\n  border: 3px solid #2c3e50 !important;\n  border-radius: 12px;\n  background: #000 !important;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n  overflow: visible;\n  margin: 20px auto;\n  min-width: 450px !important;\n  min-height: 300px !important;\n  display: block !important;\n  width: 800px !important;\n  height: 450px !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n[dir=rtl] .region-setup-editor .screen-preview-wrapper::before {\n  content: \"Screen Preview\";\n  position: absolute;\n  top: -25px;\n  left: 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  z-index: 100;\n  background: white;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n[dir=rtl] .region-setup-editor .screen-preview-wrapper.landscape {\n  width: 800px !important;\n  height: 450px !important;\n}\n[dir=rtl] .region-setup-editor .screen-preview-wrapper.portrait {\n  width: 450px !important;\n  height: 800px !important;\n}\n[dir=rtl] .region-setup-editor .screen-preview {\n  position: relative;\n  width: 100% !important;\n  height: 100% !important;\n  min-width: 100% !important;\n  min-height: 100% !important;\n  background: #000000 !important;\n  cursor: crosshair;\n  border-radius: 8px;\n  overflow: hidden;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  border: 2px solid #555 !important;\n  display: block !important;\n  box-sizing: border-box;\n  visibility: visible !important;\n  opacity: 1 !important;\n  z-index: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);\n  background-size: 50px 50px;\n  background-color: #000000;\n}\n[dir=rtl] .region-setup-editor .screen-preview:hover {\n  border-color: #555;\n}\n[dir=rtl] .region-setup-editor .screen-preview:active {\n  cursor: crosshair;\n}\n[dir=rtl] .region-setup-editor .screen-preview.selecting {\n  cursor: crosshair !important;\n  border-color: #FF9800;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay {\n  position: absolute;\n  border: 3px solid #4CAF50;\n  background: rgba(76, 175, 80, 0.3);\n  cursor: move;\n  transition: all 0.1s ease;\n  z-index: 10;\n  pointer-events: auto;\n  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.5), inset 0 0 20px rgba(76, 175, 80, 0.1);\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay.resizing {\n  border-color: #FF9800;\n  box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.6), 0 0 20px rgba(255, 152, 0, 0.8), inset 0 0 30px rgba(255, 152, 0, 0.2);\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay:hover {\n  background: rgba(76, 175, 80, 0.4);\n  border-color: #45a049;\n  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.6), inset 0 0 30px rgba(76, 175, 80, 0.2);\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay.selected {\n  border-color: #2196F3;\n  background: rgba(33, 150, 243, 0.4);\n  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.6), 0 0 20px rgba(33, 150, 243, 0.8), inset 0 0 30px rgba(33, 150, 243, 0.2);\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .region-label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 4px 8px;\n  font-size: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 11;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .region-label .region-name {\n  font-weight: 600;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .region-label .btn-remove-region {\n  padding: 2px 6px;\n  font-size: 10px;\n  line-height: 1;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .region-info {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 2px 8px;\n  font-size: 10px;\n  text-align: center;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle {\n  position: absolute;\n  background: #FFFFFF;\n  border: 2px solid #4CAF50;\n  z-index: 15;\n  pointer-events: auto;\n  cursor: pointer;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle:hover {\n  background: #FF9800;\n  border-color: #FF9800;\n  box-shadow: 0 0 5px rgba(255, 152, 0, 0.8);\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle.resize-handle-left, [dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle.resize-handle-right {\n  width: 8px;\n  height: 100%;\n  top: 0;\n  cursor: ew-resize;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle.resize-handle-left {\n  left: -4px;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle.resize-handle-right {\n  right: -4px;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle.resize-handle-top, [dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle.resize-handle-bottom {\n  width: 100%;\n  height: 8px;\n  left: 0;\n  cursor: ns-resize;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle.resize-handle-top {\n  top: -4px;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle.resize-handle-bottom {\n  bottom: -4px;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle.resize-handle-top-left {\n  width: 12px;\n  height: 12px;\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n  border-radius: 50%;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle.resize-handle-top-right {\n  width: 12px;\n  height: 12px;\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n  border-radius: 50%;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle.resize-handle-bottom-left {\n  width: 12px;\n  height: 12px;\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n  border-radius: 50%;\n}\n[dir=rtl] .region-setup-editor .screen-preview .region-overlay .resize-handle.resize-handle-bottom-right {\n  width: 12px;\n  height: 12px;\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n  border-radius: 50%;\n}\n[dir=rtl] .region-setup-editor .screen-preview .selection-rectangle {\n  position: absolute;\n  border: 4px solid #FFFFFF !important;\n  border-width: 4px !important;\n  border-style: solid !important;\n  border-color: #FFFFFF !important;\n  background: rgba(255, 255, 255, 0.05) !important;\n  pointer-events: none;\n  z-index: 20;\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.8), 0 0 15px rgba(255, 255, 255, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8));\n  outline: 2px solid #FFFFFF !important;\n  outline-offset: -2px;\n}\n[dir=rtl] .region-setup-editor .screen-preview .selection-rectangle.pending-selection {\n  border: 3px solid #4CAF50 !important;\n  background: rgba(76, 175, 80, 0.15) !important;\n  z-index: 15;\n  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.5), 0 0 10px rgba(76, 175, 80, 0.6);\n}\n[dir=rtl] .region-setup-editor .screen-preview .selection-rectangle.pending-selection .pending-selection-label {\n  position: absolute;\n  top: -20px;\n  left: 0;\n  background: #4CAF50;\n  color: white;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n[dir=rtl] .region-setup-editor .screen-preview .screen-helper-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  pointer-events: none;\n  z-index: 5;\n  width: 80%;\n}\n[dir=rtl] .region-setup-editor .screen-preview .screen-helper-text .helper-content {\n  background: rgba(0, 0, 0, 0.6);\n  padding: 20px;\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n}\n[dir=rtl] .region-setup-editor .screen-preview .screen-helper-text .helper-text-main {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n[dir=rtl] .region-setup-editor .screen-preview .screen-helper-text .helper-text-sub {\n  font-size: 12px;\n  opacity: 0.8;\n}\n[dir=rtl] .region-setup-editor .screen-preview .screen-helper-text.selection-complete .helper-content {\n  background: rgba(76, 175, 80, 0.7);\n}\n[dir=rtl] .region-setup-editor .grid-preview-container {\n  padding: 20px;\n  background: #2a2a2a;\n  border-radius: 12px;\n  border: 2px solid #444;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container h6 {\n  color: #fff;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display {\n  width: 100%;\n  overflow-x: auto;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview {\n  display: grid !important;\n  grid-auto-flow: row !important;\n  gap: 12px !important;\n  background: #1a1a1a;\n  border: 2px solid #555;\n  border-radius: 12px;\n  padding: 12px;\n  min-height: 400px;\n  height: auto;\n  width: 100%;\n  max-width: 100%;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview[data-cols=\"1\"] {\n  grid-template-columns: repeat(1, 1fr) !important;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview[data-cols=\"2\"] {\n  grid-template-columns: repeat(2, 1fr) !important;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview[data-cols=\"3\"] {\n  grid-template-columns: repeat(3, 1fr) !important;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview[data-cols=\"4\"] {\n  grid-template-columns: repeat(4, 1fr) !important;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview > * {\n  min-width: 0;\n  min-height: 0;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview .grid-cell {\n  background: transparent !important;\n  border: 2px solid #28a745 !important;\n  border-radius: 8px !important;\n  display: flex !important;\n  flex-direction: column !important;\n  align-items: center !important;\n  justify-content: center !important;\n  cursor: pointer !important;\n  transition: all 0.3s ease !important;\n  position: relative !important;\n  min-height: 180px !important;\n  width: 100% !important;\n  height: 100% !important;\n  box-shadow: none !important;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview .grid-cell:hover {\n  background: rgba(40, 167, 69, 0.05) !important;\n  border-color: #28a745 !important;\n  border-width: 3px !important;\n  transform: scale(1.01) !important;\n  z-index: 10 !important;\n  box-shadow: 0 2px 8px rgba(40, 167, 69, 0.2) !important;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview .grid-cell.selected {\n  background: rgba(40, 167, 69, 0.08) !important;\n  border-color: #28a745 !important;\n  border-width: 3px !important;\n  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.2), 0 2px 8px rgba(40, 167, 69, 0.2) !important;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview .grid-cell .grid-cell-content {\n  text-align: center;\n  padding: 20px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview .grid-cell .grid-cell-content .grid-cell-number {\n  font-size: 28px !important;\n  font-weight: 700 !important;\n  color: #333333 !important;\n  text-shadow: none !important;\n  margin-bottom: 15px !important;\n  letter-spacing: 0.5px !important;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview .grid-cell .grid-cell-content .btn-remove-region {\n  position: absolute !important;\n  top: 12px !important;\n  right: 12px !important;\n  background: rgba(255, 255, 255, 0.95) !important;\n  border: 2px solid #dc3545 !important;\n  color: #dc3545 !important;\n  width: 36px !important;\n  height: 36px !important;\n  border-radius: 8px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n  font-size: 18px !important;\n  font-weight: bold !important;\n  opacity: 0.9 !important;\n  transition: all 0.2s ease !important;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2) !important;\n  cursor: pointer !important;\n  z-index: 100 !important;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview .grid-cell .grid-cell-content .btn-remove-region:hover {\n  opacity: 1 !important;\n  background: #dc3545 !important;\n  color: #fff !important;\n  border-color: #dc3545 !important;\n  transform: scale(1.15) rotate(90deg) !important;\n  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.4) !important;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview .grid-cell .grid-cell-content .btn-remove-region:active {\n  transform: scale(1.05) rotate(90deg) !important;\n}\n[dir=rtl] .region-setup-editor .grid-preview-container .grid-display .grid-preview .grid-cell .grid-cell-content .btn-remove-region i {\n  transition: transform 0.2s ease !important;\n}\n[dir=rtl] .region-setup-editor .region-actions {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 15px;\n  background: white;\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n}\n[dir=rtl] .region-setup-editor .region-actions .grid-options {\n  width: 100%;\n}\n[dir=rtl] .region-setup-editor .region-actions .grid-options .btn-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n[dir=rtl] .region-setup-editor .region-actions .grid-options .btn-group .btn {\n  flex: 0 0 auto;\n  min-width: 120px;\n}\n[dir=rtl] .region-setup-editor .region-actions .selection-info .badge {\n  font-size: 14px;\n  padding: 8px 12px;\n}\n[dir=rtl] .region-setup-editor .region-actions .btn-lg {\n  padding: 10px 20px;\n  font-size: 16px;\n  font-weight: 600;\n}\n[dir=rtl] .region-setup-editor .regions-list {\n  margin-top: 20px;\n}\n[dir=rtl] .region-setup-editor .regions-list .region-card {\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n[dir=rtl] .region-setup-editor .regions-list .region-card:hover {\n  background: #f8f9fa;\n  transform: translateY(-2px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n[dir=rtl] .region-setup-editor .regions-list .region-card.border-primary {\n  border-color: #2196F3 !important;\n  background: #e3f2fd;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NyZWVucy9jb21wb25lbnRzL3NjcmVlbi1wbGF5YmFjay9zY3JlZW4tcGxheWJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUNJO0VBQ0UsaUJBQUE7QUFDTjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFETjtBQUdNO0VBQ0UsY0FBQTtFQUNBLHFEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUtJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUhOO0FBT0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFMSjtBQVFFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtBQU5KO0FBUUk7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FBTk47QUFTSTtFQUNFLDZEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFQTjtBQVNNO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUFI7QUFTUTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQVBWO0FBV007RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVRSO0FBV1E7RUFDRSxZQUFBO0FBVFY7QUFXVTtFQUNFLFlBQUE7QUFUWjtBQWVJO0VBQ0UsYUFBQTtBQWJOO0FBa0JJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdEQUFBO0FBaEJOO0FBa0JNO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7QUFoQlI7QUFtQk07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBakJSO0FBc0JFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXBCSjtBQXNCSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBcEJOO0FBc0JNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXBCUjtBQXdCSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUF0Qk47QUF3Qk07RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQXRCUjtBQXlCTTtFQUNFLGNBQUE7QUF2QlI7QUEwQk07RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBeEJSO0FBNEJJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUExQk47QUE0Qk07RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUExQlI7QUErQkU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUE3Qko7QUErQkk7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUE3Qk47QUFnQ0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUE5Qk47QUFpQ0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUEvQk47QUFrQ0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFoQ047QUFtQ0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFqQ047QUFzQ0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQXBDTjtBQXVDTTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0RBQUE7QUFyQ047QUF1Q007RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtBQXJDUjtBQXdDTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUF0Q1I7QUEwQ0k7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdEQUFBO0FBeENOO0FBMENNO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7QUF4Q1I7QUEyQ007RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBekNSO0FBK0NFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFFQSxZQUFBO0FBOUNKO0FBZ0RJO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FBOUNOO0FBZ0RNO0VBQ0UsMkJBQUE7RUFDQSw0Q0FBQTtBQTlDUjtBQWlETTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQS9DUjtBQW1ESTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtBQWpETjtBQW1ETTtFQUNFLDJCQUFBO0VBQ0EsNkNBQUE7QUFqRFI7QUFvRE07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFsRFI7QUFzREk7RUFDRSw2REFBQTtFQUNBLFlBQUE7QUFwRE47QUFzRE07RUFDRSwyQkFBQTtFQUNBLDZDQUFBO0FBcERSO0FBdURNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBckRSO0FBeURJO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FBdkROO0FBeURNO0VBQ0UsMkJBQUE7RUFDQSw4Q0FBQTtBQXZEUjtBQTBETTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQXhEUjtBQTRESTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtBQTFETjtBQTRETTtFQUNFLDJCQUFBO0VBQ0EsNkNBQUE7QUExRFI7QUE2RE07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUEzRFI7QUErREk7RUFDRSxpQkFBQTtBQTdETjtBQWlFRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUEvREo7QUFpRUk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQS9ETjtBQW1FTTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQWpFUjtBQW1FUTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQWpFVjtBQW9FUTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQWxFVjtBQXdFRTtFQUNFLGVBQUE7RUFDQSwyQ0FBQTtFQWtDQSwyRUFBQTtBQXZHSjtBQXVFSTtFQUNFLDJCQUFBO0FBckVOO0FBd0VJO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtBQXRFTjtBQXdFTTtFQUNFLHFCQUFBO0VBQ0EsNkNBQUE7QUF0RVI7QUEwRUk7RUFDRSxxQkFBQTtFQUNBLGdFQUFBO0FBeEVOO0FBMEVNO0VBQ0UscUJBQUE7RUFDQSw2Q0FBQTtBQXhFUjtBQTRFSTtFQUNFLFlBQUE7QUExRU47QUE2RUk7RUFDRSx1QkFBQTtBQTNFTjtBQStFSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBN0VOO0FBZ0ZJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUE5RU47QUFnRk07O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQTlFUjtBQWtGSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFoRk47QUFtRkk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBakZOO0FBbUZNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBakZSO0FBcUZJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBbkZOO0FBd0ZJO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0FBdEZOO0FBd0ZNO0VBQ0UseUJBQUE7QUF0RlI7QUF5Rk07RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0FBdkZSO0FBMEZNO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtBQXhGUjtBQTJGTTtFQUNFLHlCQUFBO0FBekZSO0FBOEZFO0VBQ0UsOEJBQUE7QUE1Rko7QUFnR0k7RUFDRSxjQUFBO0FBOUZOO0FBaUdJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUEvRk47QUFpR007RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBL0ZSO0FBaUdRO0VBQ0UsaUJBQUE7QUEvRlY7QUFxR1U7RUFDRSxTQUFBO0VBQ0EsY0FBQTtBQW5HWjtBQXdHTTtFQUNFLDZCQUFBO0FBdEdSO0FBNEdJO0VBQ0UsWUFBQTtBQTFHTjtBQThHRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUE1R0o7QUE4R0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTVHTjs7QUFrSEE7RUFDRTtJQUNFLGFBQUE7RUEvR0Y7RUFrSEk7SUFDRSxlQUFBO0VBaEhOO0VBb0hFO0lBQ0Usc0JBQUE7RUFsSEo7RUFvSEk7SUFDRSxXQUFBO0VBbEhOO0VBdUhJO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQXJITjtFQXVITTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQXJIUjtBQUNGO0FBK0hNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBN0hSO0FBb0lJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFsSU47QUFvSU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFsSVI7QUFxSVU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQW5JWjtBQXlJSTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUF2SU47QUF5SU07RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF2SVI7QUEwSU07RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FBeElSO0FBMklNO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQXpJUjtBQTZJSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFnQkEseUpBQ0U7RUFFRiwwQkFBQTtFQUNBLHlCQUFBO0FBNUpOO0FBMElNO0VBQ0Usa0JBQUE7QUF4SVI7QUEySU07RUFDRSxpQkFBQTtBQXpJUjtBQTRJTTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7QUExSVI7QUFvSk07RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtRkFDRTtBQW5KVjtBQXNKUTtFQUNFLHFCQUFBO0VBQ0Esb0hBQ0U7QUFySlo7QUEwSlE7RUFDRSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUZBQ0U7QUF6Slo7QUE2SlE7RUFDRSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsdUhBQ0U7QUE1Slo7QUFpS1E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQS9KVjtBQWlLVTtFQUNFLGdCQUFBO0FBL0paO0FBa0tVO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWhLWjtBQW9LUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFsS1Y7QUFzS1E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBcEtWO0FBc0tVO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0FBcEtaO0FBdUtVO0VBRUUsVUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsaUJBQUE7QUF0S1o7QUF5S1U7RUFDRSxVQUFBO0FBdktaO0FBMEtVO0VBQ0UsV0FBQTtBQXhLWjtBQTJLVTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBMUtaO0FBNktVO0VBQ0UsU0FBQTtBQTNLWjtBQThLVTtFQUNFLFlBQUE7QUE1S1o7QUErS1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTdLWjtBQWdMVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBOUtaO0FBaUxVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUEvS1o7QUFrTFU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWhMWjtBQXFMTTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnREFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLG9IQUNFO0VBR0Ysa0JBQUE7RUFHQSxxREFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7QUF4TFI7QUEwTFE7RUFDRSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLDZFQUNFO0FBekxaO0FBNExVO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQTFMWjtBQStMTTtFQUNFO0lBQ0UsVUFBQTtFQTdMUjtFQStMTTtJQUNFLFlBQUE7RUE3TFI7QUFDRjtBQWdNTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBOUxSO0FBZ01RO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBOUxWO0FBaU1RO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUEvTFY7QUFrTVE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQWhNVjtBQW9NVTtFQUNFLGtDQUFBO0FBbE1aO0FBd01JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQXRNTjtBQXdNTTtFQUNFLFdBQUE7QUF0TVI7QUF5TU07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUF2TVI7QUF5TVE7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUF2TVY7QUEwTVU7RUFDRSxnREFBQTtBQXhNWjtBQTBNVTtFQUNFLGdEQUFBO0FBeE1aO0FBME1VO0VBQ0UsZ0RBQUE7QUF4TVo7QUEwTVU7RUFDRSxnREFBQTtBQXhNWjtBQTRNVTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBMU1aO0FBNk1VO0VBQ0Usa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQTNNWjtBQTZNWTtFQUNFLDhDQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1REFBQTtBQTNNZDtBQThNWTtFQUNFLDhDQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLHlGQUNFO0FBN01oQjtBQWlOWTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBL01kO0FBaU5jO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FBL01oQjtBQWtOYztFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdEQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUFoTmhCO0FBa05nQjtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0NBQUE7RUFDQSx3REFBQTtBQWhObEI7QUFtTmdCO0VBQ0UsK0NBQUE7QUFqTmxCO0FBb05nQjtFQUNFLDBDQUFBO0FBbE5sQjtBQTJOSTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQXpOTjtBQTJOTTtFQUNFLFdBQUE7QUF6TlI7QUEyTlE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF6TlY7QUEyTlU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUF6Tlo7QUErTlE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUE3TlY7QUFpT007RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQS9OUjtBQW1PSTtFQUNFLGdCQUFBO0FBak9OO0FBbU9NO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBak9SO0FBbU9RO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdDQUFBO0FBak9WO0FBb09RO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtBQWxPViIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4tcGxheWJhY2stY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcblxyXG4gICZbZGlyPVwicnRsXCJdIHtcclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFnZS1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMsICM0ZGI2YWMpO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2Utc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCA2cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZmZmYgMCUsICNmOGY5ZmEgMTAwJSk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xyXG5cclxuICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJnLXN1Y2Nlc3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUgMCUsICMyMGM5OTcgMTAwJSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNjcmVlbi1zZWxlY3Rpb24ge1xyXG4gICAgc2VsZWN0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMDUsIDkyLCAwLjEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZC1zY3JlZW4taW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwMDY5NWM7XHJcblxyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8taXRlbSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2NhdGlvbi1wYXRoIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBnYXA6IDhweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3RhdHVzLWJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAmLnN0YXR1cy1vbmxpbmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xyXG4gICAgICBjb2xvcjogIzE1NTcyNDtcclxuICAgIH1cclxuXHJcbiAgICAmLnN0YXR1cy1vZmZsaW5lIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcclxuICAgICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0dXMtcGxheWluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XHJcbiAgICAgIGNvbG9yOiAjMGM1NDYwO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdHVzLXBhdXNlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XHJcbiAgICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdHVzLXVua25vd24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlM2U1O1xyXG4gICAgICBjb2xvcjogIzM4M2Q0MTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjk1YztcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEwNSwgOTIsIDAuMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLXNlbGVjdCB7XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTA1LCA5MiwgMC4xKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBCdXR0b24gU3R5bGVzXHJcbiAgLmJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgLy8gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMTA1LCA5MiwgMC4zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmJ0bi1zdWNjZXNzIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSAwJSwgIzIwYzk5NyAxMDAlKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg0MCwgMTY3LCA2OSwgMC4zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmJ0bi13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmYzEwNyAwJSwgI2ZmY2EyYyAxMDAlKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyNTUsIDE5MywgNywgMC4zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmJ0bi1pbmZvIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE3YTJiOCAwJSwgIzEzODQ5NiAxMDAlKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyMywgMTYyLCAxODQsIDAuMyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5idG4tZGFuZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RjMzU0NSAwJSwgI2M4MjMzMyAxMDAlKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyMjAsIDUzLCA2OSwgMC4zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGxheWluZy12aWRlby1pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwNjk1YztcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC52aWRlby1kZXRhaWxzIHtcclxuICAgICAgLmRldGFpbC1pdGVtIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcblxyXG4gICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hZHZlcnRpc2VtZW50LWNhcmQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIGJveC1zaGFkb3cgMC4ycztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2UwZTBlMDtcclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDY5NWM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDEwNSwgOTIsIDAuMTUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5hc3NpZ25lZCAuY2FyZCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiAwJSwgI2YwZmZmNCAxMDAlKTtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzIwYzk5NztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNDAsIDE2NywgNjksIDAuMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXNzaWduZWQtYWQtbWFpbiB7XHJcbiAgICAgIG1pbi13aWR0aDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuYXNzaWduZWQtYWQtdG9wLXJvdyB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEZpeGVkIGNvbHVtbjogYmFkZ2UgKyB0aHVtYiArIHR5cGUvc2l6ZSDDosKAwpQgYXZvaWRzIGVtcHR5IGdhcCBvbiB0aGUgbGVmdCAqL1xyXG4gICAgLmFzc2lnbmVkLWFkLWhlYWRlciB7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICB3aWR0aDogMTE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFzc2lnbmVkLWFkLXRodW1iIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgYmFja2dyb3VuZDogI2YxZjNmNDtcclxuICAgICAgYXNwZWN0LXJhdGlvOiAxNiAvIDEwO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQwLCAxNjcsIDY5LCAwLjI1KTtcclxuXHJcbiAgICAgIGltZyxcclxuICAgICAgdmlkZW8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hc3NpZ25lZC1hZC1tZXRhIHtcclxuICAgICAgbWFyZ2luLXRvcDogMC40cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zNTtcclxuICAgIH1cclxuXHJcbiAgICAuYXNzaWduZWQtYWQtYmFkZ2VzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBnYXA6IDRweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjY1cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZzogMC4yZW0gMC40NWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFzc2lnbmVkLWFkLXRodW1iLWZhbGxiYWNrIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogNzBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGFibGUge1xyXG4gICAgLmFkdmVydGlzZW1lbnQtcm93IHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmMmYxO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwNjk1YztcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hc3NpZ25lZC1hZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmNDtcclxuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMyOGE3NDU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYXNzaWduZWQtYWQ6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZTk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZC1hZHZlcnRpc2VtZW50LWluZm8ge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMDA2OTVjO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsIHtcclxuICAgICYuc2hvdyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgICAgIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDY5NWMgMCUsICM0ZGI2YWMgMTAwJSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcclxuXHJcbiAgICAgICAgLmJ0bi1jbG9zZSB7XHJcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCgxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAuaW5mby1pdGVtIHtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm1vZGFsLWZvb3RlciB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICAmLnNob3cge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9hZGluZy1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG5cclxuICAgIC5zcGlubmVyLWJvcmRlciB7XHJcbiAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIERlc2lnblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc2NyZWVuLXBsYXliYWNrLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIC5wYWdlLWhlYWRlciB7XHJcbiAgICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udHJvbHMtcm93IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdGVkLXNjcmVlbi1pbmZvIHtcclxuICAgICAgLmluZm8taXRlbSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJUTCBTdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5jb250cm9scy1yb3cge1xyXG4gICAgLmJ0biB7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTY3JlZW4gUmVnaW9uIEVkaXRvciBTdHlsZXNcclxuICAucmVnaW9uLXNldHVwLWVkaXRvciB7XHJcbiAgICAuc2NyZWVuLWVkaXRvci1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjZGVlMmU2O1xyXG4gICAgICBcclxuICAgICAgLm9yaWVudGF0aW9uLWNvbnRyb2xzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJ0bi1ncm91cCB7XHJcbiAgICAgICAgICAuYnRuLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGQ2ZWZkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zY3JlZW4tcHJldmlldy13cmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjMmMzZTUwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgbWluLXdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4taGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA0NTBweCAhaW1wb3J0YW50O1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ1NjcmVlbiBQcmV2aWV3JztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMjVweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYubGFuZHNjYXBlIHtcclxuICAgICAgICB3aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYucG9ydHJhaXQge1xyXG4gICAgICAgIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogODAwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zY3JlZW4tcHJldmlldyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzU1NSAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzU1NTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLnNlbGVjdGluZyB7XHJcbiAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXIgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGRjk4MDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEdyaWQgcGF0dGVybiBmb3IgYmV0dGVyIHZpc2liaWxpdHlcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgMXB4LCB0cmFuc3BhcmVudCAxcHgpLFxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSAxcHgsIHRyYW5zcGFyZW50IDFweCk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cclxuICAgICAgLnJlZ2lvbi1vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzRDQUY1MDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjMpO1xyXG4gICAgICAgIGN1cnNvcjogbW92ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgICAgMCAwIDAgMnB4IHJnYmEoNzYsIDE3NSwgODAsIDAuNSksXHJcbiAgICAgICAgICBpbnNldCAwIDAgMjBweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICYucmVzaXppbmcge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRkY5ODAwO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogXHJcbiAgICAgICAgICAgIDAgMCAwIDNweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjYpLFxyXG4gICAgICAgICAgICAwIDAgMjBweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjgpLFxyXG4gICAgICAgICAgICBpbnNldCAwIDAgMzBweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjQpO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNDVhMDQ5O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogXHJcbiAgICAgICAgICAgIDAgMCAwIDNweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjYpLFxyXG4gICAgICAgICAgICBpbnNldCAwIDAgMzBweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMyMTk2RjM7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMzLCAxNTAsIDI0MywgMC40KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAwIDAgMCAzcHggcmdiYSgzMywgMTUwLCAyNDMsIDAuNiksXHJcbiAgICAgICAgICAgIDAgMCAyMHB4IHJnYmEoMzMsIDE1MCwgMjQzLCAwLjgpLFxyXG4gICAgICAgICAgICBpbnNldCAwIDAgMzBweCByZ2JhKDMzLCAxNTAsIDI0MywgMC4yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZWdpb24tbGFiZWwge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgei1pbmRleDogMTE7XHJcblxyXG4gICAgICAgICAgLnJlZ2lvbi1uYW1lIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLXJlbW92ZS1yZWdpb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlZ2lvbi1pbmZvIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJlc2l6ZSBIYW5kbGVzXHJcbiAgICAgICAgLnJlc2l6ZS1oYW5kbGUge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XHJcbiAgICAgICAgICB6LWluZGV4OiAxNTtcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGOTgwMDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRkY5ODAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuOCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICYucmVzaXplLWhhbmRsZS1sZWZ0LFxyXG4gICAgICAgICAgJi5yZXNpemUtaGFuZGxlLXJpZ2h0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogZXctcmVzaXplO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmLnJlc2l6ZS1oYW5kbGUtbGVmdCB7XHJcbiAgICAgICAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICYucmVzaXplLWhhbmRsZS1yaWdodCB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmLnJlc2l6ZS1oYW5kbGUtdG9wLFxyXG4gICAgICAgICAgJi5yZXNpemUtaGFuZGxlLWJvdHRvbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBucy1yZXNpemU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICYucmVzaXplLWhhbmRsZS10b3Age1xyXG4gICAgICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICYucmVzaXplLWhhbmRsZS1ib3R0b20ge1xyXG4gICAgICAgICAgICBib3R0b206IC00cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICYucmVzaXplLWhhbmRsZS10b3AtbGVmdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIHRvcDogLTZweDtcclxuICAgICAgICAgICAgbGVmdDogLTZweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBud3NlLXJlc2l6ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmLnJlc2l6ZS1oYW5kbGUtdG9wLXJpZ2h0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgdG9wOiAtNnB4O1xyXG4gICAgICAgICAgICByaWdodDogLTZweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBuZXN3LXJlc2l6ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmLnJlc2l6ZS1oYW5kbGUtYm90dG9tLWxlZnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBib3R0b206IC02cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC02cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogbmVzdy1yZXNpemU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJi5yZXNpemUtaGFuZGxlLWJvdHRvbS1yaWdodCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTZweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC02cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogbndzZS1yZXNpemU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZWxlY3Rpb24tcmVjdGFuZ2xlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgIWltcG9ydGFudDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgICBib3gtc2hhZG93OiBcclxuICAgICAgICAgIDAgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuOCksXHJcbiAgICAgICAgICAwIDAgMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgICAgICBpbnNldCAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1ha2Ugd2hpdGUgYm9yZGVyIHZlcnkgdmlzaWJsZSBvbiBibGFjayBiYWNrZ3JvdW5kXHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSk7XHJcbiAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgICAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcclxuICAgICAgICBcclxuICAgICAgICAmLnBlbmRpbmctc2VsZWN0aW9uIHtcclxuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM0Q0FGNTAgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzYsIDE3NSwgODAsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAxNTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAwIDAgMCAycHggcmdiYSg3NiwgMTc1LCA4MCwgMC41KSxcclxuICAgICAgICAgICAgMCAwIDEwcHggcmdiYSg3NiwgMTc1LCA4MCwgMC42KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLnBlbmRpbmctc2VsZWN0aW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgIDAlLCAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2NyZWVuLWhlbHBlci10ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBcclxuICAgICAgICAuaGVscGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuaGVscGVyLXRleHQtbWFpbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuaGVscGVyLXRleHQtc3ViIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5zZWxlY3Rpb24tY29tcGxldGUge1xyXG4gICAgICAgICAgLmhlbHBlci1jb250ZW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyYTJhMmE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM0NDQ7XHJcbiAgICAgIFxyXG4gICAgICBoNiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5ncmlkLWRpc3BsYXkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmdyaWQtcHJldmlldyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBncmlkLWF1dG8tZmxvdzogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBnYXA6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxYTFhMWE7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBGb3JjZSBncmlkIGxheW91dCBmb3IgY29tbW9uIGNhc2VzIHVzaW5nIGRhdGEgYXR0cmlidXRlc1xyXG4gICAgICAgICAgJltkYXRhLWNvbHM9XCIxXCJdIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJltkYXRhLWNvbHM9XCIyXCJdIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJltkYXRhLWNvbHM9XCIzXCJdIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJltkYXRhLWNvbHM9XCI0XCJdIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBFbnN1cmUgZ3JpZCBjZWxscyBkb24ndCBjb2xsYXBzZVxyXG4gICAgICAgICAgPiAqIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuZ3JpZC1jZWxsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzI4YTc0NSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjA1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlci13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoNDAsIDE2NywgNjksIDAuMikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTY3LCA2OSwgMC4wOCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAgICAgMCAwIDAgMnB4IHJnYmEoNDAsIDE2NywgNjksIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDJweCA4cHggcmdiYSg0MCwgMTY3LCA2OSwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZ3JpZC1jZWxsLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmdyaWQtY2VsbC1udW1iZXIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuYnRuLXJlbW92ZS1yZWdpb24ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGMzNTQ1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpIHJvdGF0ZSg5MGRlZykgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDIyMCwgNTMsIDY5LCAwLjQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lvbi1hY3Rpb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAxNXB4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgIFxyXG4gICAgICAuZ3JpZC1vcHRpb25zIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBcclxuICAgICAgICAuYnRuLWdyb3VwIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNlbGVjdGlvbi1pbmZvIHtcclxuICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuYnRuLWxnIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmVnaW9ucy1saXN0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAgIC5yZWdpb24tY2FyZCB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmJvcmRlci1wcmltYXJ5IHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzIxOTZGMyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2UzZjJmZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 3897:
/*!****************************************************!*\
  !*** ./src/app/features/screens/screens.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreensModule: () => (/* binding */ ScreensModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _components_screen_management_screen_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/screen-management/screen-management.component */ 5345);
/* harmony import */ var _components_screen_discovery_screen_discovery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/screen-discovery/screen-discovery.component */ 3737);
/* harmony import */ var _components_screen_dashboard_screen_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/screen-dashboard/screen-dashboard.component */ 1237);
/* harmony import */ var _components_screen_create_screen_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/screen-create/screen-create.component */ 6265);
/* harmony import */ var _components_screen_list_screen_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/screen-list/screen-list.component */ 7433);
/* harmony import */ var _components_screen_grouping_screen_grouping_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/screen-grouping/screen-grouping.component */ 6353);
/* harmony import */ var _components_screen_monitor_screen_monitor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/screen-monitor/screen-monitor.component */ 7753);
/* harmony import */ var _components_screen_playback_screen_playback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/screen-playback/screen-playback.component */ 9741);
/* harmony import */ var _components_group_layout_group_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/group-layout/group-layout.component */ 5471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);















const routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: _components_screen_dashboard_screen_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.ScreenDashboardComponent
}, {
  path: 'discover',
  component: _components_screen_discovery_screen_discovery_component__WEBPACK_IMPORTED_MODULE_2__.ScreenDiscoveryComponent
}, {
  path: 'create',
  component: _components_screen_create_screen_create_component__WEBPACK_IMPORTED_MODULE_4__.ScreenCreateComponent
}, {
  path: 'list',
  component: _components_screen_list_screen_list_component__WEBPACK_IMPORTED_MODULE_5__.ScreenListComponent
}, {
  path: 'grouping',
  component: _components_screen_grouping_screen_grouping_component__WEBPACK_IMPORTED_MODULE_6__.ScreenGroupingComponent
}, {
  path: 'monitor',
  component: _components_screen_monitor_screen_monitor_component__WEBPACK_IMPORTED_MODULE_7__.ScreenMonitorComponent
}, {
  path: 'playback',
  component: _components_screen_playback_screen_playback_component__WEBPACK_IMPORTED_MODULE_8__.ScreenPlaybackComponent
}];
class ScreensModule {
  static {
    this.ɵfac = function ScreensModule_Factory(t) {
      return new (t || ScreensModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: ScreensModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ScreensModule, {
    declarations: [_components_screen_management_screen_management_component__WEBPACK_IMPORTED_MODULE_1__.ScreenManagementComponent, _components_screen_discovery_screen_discovery_component__WEBPACK_IMPORTED_MODULE_2__.ScreenDiscoveryComponent, _components_screen_dashboard_screen_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.ScreenDashboardComponent, _components_screen_create_screen_create_component__WEBPACK_IMPORTED_MODULE_4__.ScreenCreateComponent, _components_screen_list_screen_list_component__WEBPACK_IMPORTED_MODULE_5__.ScreenListComponent, _components_screen_grouping_screen_grouping_component__WEBPACK_IMPORTED_MODULE_6__.ScreenGroupingComponent, _components_screen_monitor_screen_monitor_component__WEBPACK_IMPORTED_MODULE_7__.ScreenMonitorComponent, _components_screen_playback_screen_playback_component__WEBPACK_IMPORTED_MODULE_8__.ScreenPlaybackComponent, _components_group_layout_group_layout_component__WEBPACK_IMPORTED_MODULE_9__.GroupLayoutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 9240:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interval: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ 4876);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_screens_screens_module_ts.js.map