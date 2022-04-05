"use strict";
(self["webpackChunklotus_acaddmy"] = self["webpackChunklotus_acaddmy"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _program_program_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./program/program.component */ 6850);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 3653);
/* harmony import */ var _enter_enter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enter/enter.component */ 1076);
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team/team.component */ 3975);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 5116);
/* harmony import */ var _program_lang_lang_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./program/lang/lang.component */ 5085);
/* harmony import */ var _arabic_basics_arabic_basics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./arabic-basics/arabic-basics.component */ 6320);
/* harmony import */ var _arabic_font_arabic_font_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./arabic-font/arabic-font.component */ 2432);
/* harmony import */ var _english_basics_english_basics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./english-basics/english-basics.component */ 858);
/* harmony import */ var _english_convarsation_english_convarsation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./english-convarsation/english-convarsation.component */ 3085);
/* harmony import */ var _program_computer_computer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./program/computer/computer.component */ 688);
/* harmony import */ var _program_computer_basics_basics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./program/computer/basics/basics.component */ 744);
/* harmony import */ var _program_computer_coding_coding_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./program/computer/coding/coding.component */ 2991);
/* harmony import */ var _program_computer_internet_internet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./program/computer/internet/internet.component */ 7797);
/* harmony import */ var _program_computer_html_html_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./program/computer/html/html.component */ 5230);
/* harmony import */ var _program_usy_mathm_usy_mathm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./program/usy-mathm/usy-mathm.component */ 2307);
/* harmony import */ var _usy_math_usy_math_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./usy-math/usy-math.component */ 3459);
/* harmony import */ var _vedic_math_vedic_math_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vedic-math/vedic-math.component */ 4407);
/* harmony import */ var _program_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./program/program-details/program-details.component */ 2237);
/* harmony import */ var _program_program_details_skills_skills_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./program/program-details/skills/skills.component */ 3883);
/* harmony import */ var _program_program_details_kids_kids_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./program/program-details/kids/kids.component */ 9096);
/* harmony import */ var _program_qraan_qraan_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./program/qraan/qraan.component */ 4996);
/* harmony import */ var _program_qraan_qraan_learning_qraan_learning_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./program/qraan/qraan-learning/qraan-learning.component */ 4290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 3184);



























const routes = [{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: 'program', component: _program_program_component__WEBPACK_IMPORTED_MODULE_0__.ProgramComponent, children: [{ path: 'lang', component: _program_lang_lang_component__WEBPACK_IMPORTED_MODULE_6__.LangComponent, children: [
                    { path: 'arabic-font', component: _arabic_font_arabic_font_component__WEBPACK_IMPORTED_MODULE_8__.ArabicFontComponent },
                    { path: 'arabic-basics', component: _arabic_basics_arabic_basics_component__WEBPACK_IMPORTED_MODULE_7__.ArabicBasicsComponent },
                    { path: 'english-basics', component: _english_basics_english_basics_component__WEBPACK_IMPORTED_MODULE_9__.EnglishBasicsComponent },
                    { path: 'english-conv', component: _english_convarsation_english_convarsation_component__WEBPACK_IMPORTED_MODULE_10__.EnglishConvarsationComponent },
                ] },
            { path: 'computer', component: _program_computer_computer_component__WEBPACK_IMPORTED_MODULE_11__.ComputerComponent, children: [
                    { path: 'basics', component: _program_computer_basics_basics_component__WEBPACK_IMPORTED_MODULE_12__.BasicsComponent },
                    { path: 'coding', component: _program_computer_coding_coding_component__WEBPACK_IMPORTED_MODULE_13__.CodingComponent },
                    { path: 'internet', component: _program_computer_internet_internet_component__WEBPACK_IMPORTED_MODULE_14__.InternetComponent },
                    { path: 'arabic-font', component: _arabic_font_arabic_font_component__WEBPACK_IMPORTED_MODULE_8__.ArabicFontComponent },
                    { path: 'html', component: _program_computer_html_html_component__WEBPACK_IMPORTED_MODULE_15__.HtmlComponent },
                ] },
            { path: 'usy-math', component: _program_usy_mathm_usy_mathm_component__WEBPACK_IMPORTED_MODULE_16__.UsyMathmComponent, children: [
                    { path: 'usy', component: _usy_math_usy_math_component__WEBPACK_IMPORTED_MODULE_17__.UsyMathComponent }, {
                        path: 'vedic', component: _vedic_math_vedic_math_component__WEBPACK_IMPORTED_MODULE_18__.VedicMathComponent
                    },
                ] },
            { path: 'skills', component: _program_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_19__.ProgramDetailsComponent, children: [
                    {
                        path: 'drawing', component: _program_program_details_kids_kids_component__WEBPACK_IMPORTED_MODULE_21__.KidsComponent
                    }, {
                        path: 'skill', component: _program_program_details_skills_skills_component__WEBPACK_IMPORTED_MODULE_20__.SkillsComponent
                    },
                ] },
            { path: 'quran', component: _program_qraan_qraan_component__WEBPACK_IMPORTED_MODULE_22__.QraanComponent, children: [
                    { path: 'quran-learning', component: _program_qraan_qraan_learning_qraan_learning_component__WEBPACK_IMPORTED_MODULE_23__.QraanLearningComponent
                    },
                ] }] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: 'sign', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__.SignInComponent },
    { path: 'enter', component: _enter_enter_component__WEBPACK_IMPORTED_MODULE_3__.EnterComponent },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_4__.TeamComponent },
    { path: 'contact', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__.ContactUsComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule.forRoot(routes, {
                initialNavigation: 'enabledBlocking'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);




class AppComponent {
    constructor() {
        this.title = 'lotus-acaddmy';
        this.loadedFeature = 'home';
        this.loadFeature = '';
    }
    onNavigate(feature) {
        this.loadedFeature = feature;
        this.loadFeature = '';
    }
    onNav(feature) {
        this.loadFeature = feature;
        this.loadedFeature = '';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _program_program_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./program/program.component */ 6850);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 3653);
/* harmony import */ var _enter_enter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter/enter.component */ 1076);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 5116);
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team/team.component */ 3975);
/* harmony import */ var _usy_math_usy_math_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./usy-math/usy-math.component */ 3459);
/* harmony import */ var _program_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./program/program-details/program-details.component */ 2237);
/* harmony import */ var _program_lang_lang_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./program/lang/lang.component */ 5085);
/* harmony import */ var _program_computer_computer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./program/computer/computer.component */ 688);
/* harmony import */ var _program_usy_mathm_usy_mathm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./program/usy-mathm/usy-mathm.component */ 2307);
/* harmony import */ var _vedic_math_vedic_math_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vedic-math/vedic-math.component */ 4407);
/* harmony import */ var _english_basics_english_basics_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./english-basics/english-basics.component */ 858);
/* harmony import */ var _english_convarsation_english_convarsation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./english-convarsation/english-convarsation.component */ 3085);
/* harmony import */ var _arabic_basics_arabic_basics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./arabic-basics/arabic-basics.component */ 6320);
/* harmony import */ var _arabic_font_arabic_font_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./arabic-font/arabic-font.component */ 2432);
/* harmony import */ var _program_computer_basics_basics_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./program/computer/basics/basics.component */ 744);
/* harmony import */ var _program_computer_office_office_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./program/computer/office/office.component */ 1691);
/* harmony import */ var _program_computer_internet_internet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./program/computer/internet/internet.component */ 7797);
/* harmony import */ var _program_computer_html_html_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./program/computer/html/html.component */ 5230);
/* harmony import */ var _program_program_details_kids_kids_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./program/program-details/kids/kids.component */ 9096);
/* harmony import */ var _program_program_details_skills_skills_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./program/program-details/skills/skills.component */ 3883);
/* harmony import */ var _program_qraan_qraan_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./program/qraan/qraan.component */ 4996);
/* harmony import */ var _program_qraan_qraan_learning_qraan_learning_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./program/qraan/qraan-learning/qraan-learning.component */ 4290);
/* harmony import */ var _program_computer_coding_coding_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./program/computer/coding/coding.component */ 2991);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 3184);


































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_28__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _program_program_component__WEBPACK_IMPORTED_MODULE_2__.ProgramComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__.SignInComponent,
        _enter_enter_component__WEBPACK_IMPORTED_MODULE_6__.EnterComponent,
        _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__.ContactUsComponent,
        _team_team_component__WEBPACK_IMPORTED_MODULE_8__.TeamComponent,
        _usy_math_usy_math_component__WEBPACK_IMPORTED_MODULE_9__.UsyMathComponent,
        _program_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_10__.ProgramDetailsComponent,
        _program_lang_lang_component__WEBPACK_IMPORTED_MODULE_11__.LangComponent,
        _program_computer_computer_component__WEBPACK_IMPORTED_MODULE_12__.ComputerComponent,
        _program_usy_mathm_usy_mathm_component__WEBPACK_IMPORTED_MODULE_13__.UsyMathmComponent,
        _vedic_math_vedic_math_component__WEBPACK_IMPORTED_MODULE_14__.VedicMathComponent,
        _english_basics_english_basics_component__WEBPACK_IMPORTED_MODULE_15__.EnglishBasicsComponent,
        _english_convarsation_english_convarsation_component__WEBPACK_IMPORTED_MODULE_16__.EnglishConvarsationComponent,
        _arabic_basics_arabic_basics_component__WEBPACK_IMPORTED_MODULE_17__.ArabicBasicsComponent,
        _arabic_font_arabic_font_component__WEBPACK_IMPORTED_MODULE_18__.ArabicFontComponent,
        _program_computer_basics_basics_component__WEBPACK_IMPORTED_MODULE_19__.BasicsComponent,
        _program_computer_office_office_component__WEBPACK_IMPORTED_MODULE_20__.OfficeComponent,
        _program_computer_internet_internet_component__WEBPACK_IMPORTED_MODULE_21__.InternetComponent,
        _program_computer_html_html_component__WEBPACK_IMPORTED_MODULE_22__.HtmlComponent,
        _program_program_details_kids_kids_component__WEBPACK_IMPORTED_MODULE_23__.KidsComponent,
        _program_program_details_skills_skills_component__WEBPACK_IMPORTED_MODULE_24__.SkillsComponent,
        _program_qraan_qraan_component__WEBPACK_IMPORTED_MODULE_25__.QraanComponent,
        _program_qraan_qraan_learning_qraan_learning_component__WEBPACK_IMPORTED_MODULE_26__.QraanLearningComponent,
        _program_computer_coding_coding_component__WEBPACK_IMPORTED_MODULE_27__.CodingComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_28__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HttpClientModule] }); })();


/***/ }),

/***/ 6320:
/*!**********************************************************!*\
  !*** ./src/app/arabic-basics/arabic-basics.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArabicBasicsComponent": () => (/* binding */ ArabicBasicsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ArabicBasicsComponent {
    constructor() {
        this.progSelect = 'arabic-basics';
    }
    ngOnInit() {
    }
}
ArabicBasicsComponent.ɵfac = function ArabicBasicsComponent_Factory(t) { return new (t || ArabicBasicsComponent)(); };
ArabicBasicsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArabicBasicsComponent, selectors: [["app-arabic-basics"]], decls: 49, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "p-3", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/\u0635\u0648\u0631\u0629_\u062F\u0648\u0631\u0629_\u0642\u0648\u0627\u0639\u062F_\u0627\u0644\u0644\u063A\u0629_\u0627\u0644\u0639\u0631\u0628\u064A\u0629_\u0623\u0641\u0642\u064A\u0629.jpg"], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"], ["src", "/assets/img/1_T4jrwppN6yjUDqKrF1XwrQ.jpeg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/112308443727870-400x225.jpeg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/icon.png", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"]], template: function ArabicBasicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0651\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0651\u0629 \u062A\u0639\u062A\u0628\u0631 \u0644\u063A\u0629\u064B \u0645\u0642\u062F\u0633\u0629 \u0639\u0644\u0649 \u0627\u0639\u062A\u0628\u0627\u0631 \u0623\u0646\u0647\u0627 \u0644\u063A\u0629 \u0627\u0644\u0642\u0631\u0622\u0646\u060C \u062D\u064A\u062B \u0644\u0627 \u062A\u062A\u0645 \u0627\u0644\u0635\u0644\u0627\u0629 \u0648\u0627\u0644\u0639\u0628\u0627\u062F\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649 \u0641\u064A \u0627\u0644\u062F\u064A\u0646 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A \u0625\u0644\u0627 \u0628\u0625\u062A\u0642\u0627\u0646 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0651\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0642 \u064A\u0642\u062F\u0651\u0645 \u0644\u0643\u0645 \u0623\u0647\u0645\u0651 \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0646\u0651\u062D\u0648 \u0648\u0627\u0644\u0625\u0645\u0644\u0627\u0621 \u0628\u0634\u0643\u0644 \u0645\u0628\u0633\u0651\u0637 \u0648\u0628\u0635\u0648\u0631\u0629 \u0645\u0646\u0638\u0651\u0645\u0629 \u0645\u0639 \u0623\u0645\u062B\u0644\u0629 \u0648\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0639\u0645\u0644\u064A\u0651\u0629. \u0648\u064A\u0634\u0645\u0644 \u0646\u0648\u0639\u064A\u0646 \u0645\u0646 \u0627\u0644\u0642\u0648\u0627\u0639\u062F: \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0646\u0651\u062D\u0648 \u0648\u0627\u0644\u0625\u0645\u0644\u0627\u0621. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0651\u0629 \u0623\u0648 \u0644\u063A\u0629 \u0627\u0644\u0636\u0627\u062F \u0647\u064A \u0648\u0627\u062D\u062F\u0629 \u0645\u0646 \u0623\u0643\u062B\u0631 \u0627\u0644\u0644\u063A\u0627\u062A \u0627\u0646\u062A\u0634\u0627\u0631\u0627\u064B \u0636\u0645\u0646 \u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0644\u063A\u0627\u062A \u0627\u0644\u0633\u0627\u0645\u064A\u0651\u0629\u060C \u0641\u064A \u062F\u0648\u0644 \u0627\u0644\u0648\u0637\u0646 \u0627\u0644\u0639\u0631\u0628\u064A \u0625\u0636\u0627\u0641\u0629\u064B \u0644\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0623\u062E\u0631\u0649 \u0645\u062B\u0644 \u062A\u0631\u0643\u064A\u0651\u0627\u060C \u0648\u0627\u0644\u0623\u062D\u0648\u0627\u0632\u060C \u0648\u0645\u0627\u0644\u064A \u0648\u062A\u0634\u0627\u062F\u060C \u0648\u0627\u0644\u0633\u0646\u063A\u0627\u0644\u060C \u0648\u0625\u062B\u064A\u0648\u0628\u064A\u0627\u060C \u0648\u0623\u0631\u064A\u062A\u064A\u0631\u064A\u0627\u060C \u0648\u0625\u064A\u0631\u0627\u0646\u060C \u0648\u062C\u0646\u0648\u0628\u064A \u0627\u0644\u0633\u0648\u062F\u0627\u0646. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0627\u0644\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644\u064A\u064E\u0651\u0629: \u0648\u0647\u064A \u0627\u0644\u0628\u062F\u0621 \u0628\u0627\u0644\u062C\u0645\u0644 \u0644\u064A\u062A\u0639\u0644\u0645 \u0627\u0644\u0637\u0627\u0644\u0628 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u062C\u0645\u0644 \u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0644\u063A\u0629 \u0648\u0645\u0641\u0631\u062F\u0627\u062A\u0647\u0627 \u0648\u062D\u0631\u0648\u0641\u0647\u0627\u060C \u062B\u0645 \u064A\u062A\u0645 \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0646\u0635\u0648\u0635 \u0625\u0644\u0649 \u0639\u0646\u0627\u0635\u0631\u0647\u0627 \u0627\u0644\u0623\u0648\u0644\u064A\u0629 \u0645\u0646 \u0623\u0635\u0648\u0627\u062A\u060C \u0648\u0623\u062D\u0631\u0641\u060C \u0648\u062A\u0631\u0627\u0643\u064A\u0628. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0627\u0644\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u0631\u0643\u064A\u0628\u064A\u064E\u0651\u0629: \u0648\u064A\u0628\u062F\u0623 \u0641\u064A\u0647\u0627 \u0627\u0644\u0637\u0627\u0644\u0628 \u062A\u0639\u0644\u0645 \u0627\u0644\u0623\u0635\u0648\u0627\u062A\u060C \u0648\u0627\u0644\u062D\u0631\u0648\u0641\u060C \u0648\u0627\u0644\u0643\u0644\u0645\u0627\u062A\u060C \u0648\u0627\u0644\u062C\u0645\u0644. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0627\u0644\u0623\u0635\u0648\u0627\u062A: \u0648\u0647\u064A \u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0641\u0638 \u0627\u0644\u0623\u0635\u0648\u0627\u062A \u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0623\u0641\u0636\u0644 \u0648\u0633\u064A\u0644\u0629 \u0644\u0646\u0637\u0642 \u0627\u0644\u062D\u0631\u0641 \u0628\u0634\u0643\u0644 \u0633\u0644\u064A\u0645. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u0627\u0644\u062D\u0631\u0648\u0641: \u062A\u0639\u0644\u0645 \u0627\u0644\u062D\u0631\u0648\u0641 \u0648\u0643\u0644 \u0645\u0627 \u064A\u062A\u0639\u0644\u0642 \u0628\u0647\u0627 \u0645\u0646 \u0631\u0633\u0645\u060C \u0648\u0623\u0634\u0643\u0627\u0644\u060C \u0648\u0636\u0628\u0637\u060C \u0648\u0643\u064A\u0641\u064A\u0629 \u0627\u062A\u0635\u0627\u0644 \u0627\u0644\u0623\u062D\u0631\u0641 \u0644\u062A\u0643\u0648\u0646 \u0627\u0644\u0643\u0644\u0645\u0629\u060C \u0648\u0645\u0627 \u0647\u064A\u0629 \u0623\u0634\u0643\u0627\u0644 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u063A\u064A\u0631 \u0627\u0644\u0635\u062D\u064A\u062D\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0627\u0644\u0643\u0644\u0645\u0627\u062A: \u062A\u0639\u0644\u0645 \u0643\u0644 \u0645\u0627\u064A\u062A\u0639\u0644\u0642 \u0628\u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0645\u0646 \u0635\u064A\u0627\u063A\u0629 \u0648\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0646\u0637\u0642\u060C \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u0645\u0648\u0631 \u0627\u0644\u0645\u062A\u0639\u0644\u0642\u0629 \u0628\u0627\u0644\u0639\u0628\u0627\u0631\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u0648\u0627\u0644\u0643\u0644\u0645\u0627\u062A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u0627\u0644\u062C\u0645\u0644: \u062A\u0639\u0644\u0645 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0646\u062D\u0648 \u0648\u0627\u0644\u062F\u0644\u0627\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0631\u0628\u0637 \u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0644\u062A\u0643\u0648\u0646 \u062C\u0645\u0644\u0629 \u0645\u0641\u064A\u062F\u0629\u060C \u0648\u0631\u0628\u0637 \u0627\u0644\u062C\u0645\u0644 \u0644\u062A\u0643\u0648\u0646 \u0627\u0644\u0646\u0635 \u0623\u0648 \u0627\u0644\u0645\u0648\u0636\u0648\u0639. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0627\u0644\u0631\u0624\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u062A\u0639\u0644\u0645 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0648\u0627\u062C\u0628 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0644\u0645\u064A\u0646 \u0644\u0641\u0647\u0645 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 \u0648\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0646\u0628\u0648\u064A\u0629\u060C \u0648\u0644\u0627 \u0628\u062F \u0645\u0646 \u062F\u0631\u0627\u0633\u0629 \u0627\u0644\u0639\u0644\u0648\u0645 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0645\u062B\u0644: \u0639\u0644\u0645 \u0627\u0644\u0646\u062D\u0648 \u0648\u0627\u0644\u0628\u0644\u0627\u063A\u0629\u060C \u0648\u0627\u0644\u0642\u0648\u0627\u0639\u062F \u0648\u0627\u0644\u0625\u0639\u0631\u0627\u0628\u060C \u0648\u0639\u0644\u0645 \u0627\u0644\u0628\u064A\u0627\u0646 \u0648\u0627\u0644\u0623\u062F\u0628. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.2);\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\r\n\r\n\r\n @media  (max-width: 768px){\r\n  body[_ngcontent-%COMP%]{\r\n    overflow-x: hidden;\r\n    padding: 0;\r\n  }\r\n  .card[_ngcontent-%COMP%] {\r\n    max-width :200px;\r\n    height : 215px;\r\n  }\r\n  .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width : 200px;\r\n    height:215px;\r\n    border-radius : 15px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyYWJpYy1iYXNpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtFQUNFLG1CQUFtQjs7RUFFbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7O0FBRTFCOzs7Q0FHQztFQUNDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYzs7RUFFZCxrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2Qyw2QkFBNkI7RUFDN0Isb0JBQW9CO0FBQ3RCOzs7Q0FDQztFQUNDLGNBQWM7QUFDaEI7OztDQUdDO0VBQ0MsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjOztFQUVkLFVBQVU7RUFDVixTQUFTO0VBQ1QsdUNBQXVDO0VBQ3ZDLFdBQVc7QUFDYjs7O0NBRUM7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7O0NBRUM7RUFDQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1COztFQUVuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDZCQUE2Qjs7QUFFL0I7OztDQUVDO0dBQ0UsaUJBQWlCO0dBQ2pCLG9CQUFvQjtHQUNwQixXQUFXO0dBQ1gsc0JBQXNCOztBQUV6Qjs7O0NBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFvQjtFQUN0QjtBQUNGIiwiZmlsZSI6ImFyYWJpYy1iYXNpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcblxyXG4gLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQgOiAyMTVweDtcclxuXHJcbiAgbWFyZ2luIDogMzBweCAxMHB4O1xyXG4gIHBhZGRpbmcgOiAyMHB4IDE1cHg7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gIGJveC1zaGFkb3cgOiAwIDVweCAyMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICB0cmFuc2l0aW9uIDogMC4zcyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG4gLmNhcmQ6aG92ZXIge1xyXG4gIGhlaWdodCA6IDQyMHB4O1xyXG59XHJcblxyXG5cclxuIC5jYXJkIC5pbWFnZSB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodCA6IDUwMHB4O1xyXG5cclxuICB0b3AgOiAtNDAlO1xyXG4gIGxlZnQ6IDhweDtcclxuICBib3gtc2hhZG93IDogMCA1cHggMjBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleCA6IDE7XHJcbn1cclxuXHJcbiAuY2FyZCAuaW1hZ2UgaW1nIHtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodDoyMTVweDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG5cclxuIC5jYXJkIC5jb250ZW50IHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gIHRvcCA6IC0xNDBweDtcclxuICBwYWRkaW5nIDogMTBweCAxNXB4O1xyXG4gIGNvbG9yIDogIzExMTtcclxuICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG5cclxuICB2aXNpYmlsaXR5IDogaGlkZGVuO1xyXG4gIG9wYWNpdHkgOiAwO1xyXG4gIHRyYW5zaXRpb24gOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxufVxyXG5cclxuIC5jYXJkOmhvdmVyIC5jb250ZW50IHtcclxuICAgbWFyZ2luLXRvcCA6IDMwcHg7XHJcbiAgIHZpc2liaWxpdHkgOiB2aXNpYmxlO1xyXG4gICBvcGFjaXR5IDogMTtcclxuICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxuXHJcbn1cclxuQG1lZGlhICAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgYm9keXtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuICAgIG1heC13aWR0aCA6MjAwcHg7XHJcbiAgICBoZWlnaHQgOiAyMTVweDtcclxuICB9XHJcbiAgLmNhcmQgLmltYWdlIGltZyB7XHJcbiAgICB3aWR0aCA6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OjIxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2432:
/*!******************************************************!*\
  !*** ./src/app/arabic-font/arabic-font.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArabicFontComponent": () => (/* binding */ ArabicFontComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ArabicFontComponent {
    constructor() {
        this.progSelect = 'arabic-font';
    }
    ngOnInit() {
    }
}
ArabicFontComponent.ɵfac = function ArabicFontComponent_Factory(t) { return new (t || ArabicFontComponent)(); };
ArabicFontComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArabicFontComponent, selectors: [["app-arabic-font"]], decls: 42, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/f37502a55eaec6c5c6e52bbfbdb96a29.jpg"], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"], ["src", "/assets/img/_1_.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/\u062A\u0639\u0644\u064A\u0645-\u0627\u0644\u062E\u0637-\u0627\u0644\u0639\u0631\u0628\u064A-\u0644\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/maxr3esdefault.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"]], template: function ArabicFontComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u0644\u062E\u0637 \u0627\u0644\u0639\u0631\u0628\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0627\u0644\u062E\u0637 \u0627\u0644\u0639\u0631\u0628\u064A \u0647\u0648 \u0641\u0646 \u0648\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0643\u062A\u0627\u0628\u0629 \u0641\u064A \u0645\u062E\u062A\u0644\u0641 \u0627\u0644\u0644\u063A\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0633\u062A\u0639\u0645\u0644 \u0627\u0644\u062D\u0631\u0648\u0641 \u0627\u0644\u0639\u0631\u0628\u064A\u0629. \u062A\u062A\u0645\u064A\u0632 \u0627\u0644\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0628\u0643\u0648\u0646\u0647\u0627 \u0645\u062A\u0635\u0644\u0629 \u0645\u0645\u0627 \u064A\u062C\u0639\u0644\u0647\u0627 \u0642\u0627\u0628\u0644\u0629 \u0644\u0627\u0643\u062A\u0633\u0627\u0628 \u0623\u0634\u0643\u0627\u0644 \u0647\u0646\u062F\u0633\u064A\u0629 \u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0645\u062F \u0648\u0627\u0644\u0631\u062C\u0639 \u0648\u0627\u0644\u0627\u0633\u062A\u062F\u0627\u0631\u0629 \u0648\u0627\u0644\u062A\u0632\u0648\u064A\u0629 \u0648\u0627\u0644\u062A\u0634\u0627\u0628\u0643 \u0648\u0627\u0644\u062A\u062F\u0627\u062E\u0644 \u0648\u0627\u0644\u062A\u0631\u0643\u064A\u0628 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u062E\u0637 \u0627\u0644\u0639\u0631\u0628\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0627\u0644\u062E\u0637 \u0627\u0644\u0639\u0631\u0628\u064A \u0647\u0648 \u0641\u0646 \u0648\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0643\u062A\u0627\u0628\u0629 \u0641\u064A \u0645\u062E\u062A\u0644\u0641 \u0627\u0644\u0644\u063A\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0633\u062A\u0639\u0645\u0644 \u0627\u0644\u062D\u0631\u0648\u0641 \u0627\u0644\u0639\u0631\u0628\u064A\u0629. \u062A\u062A\u0645\u064A\u0632 \u0627\u0644\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0628\u0643\u0648\u0646\u0647\u0627 \u0645\u062A\u0635\u0644\u0629 \u0645\u0645\u0627 \u064A\u062C\u0639\u0644\u0647\u0627 \u0642\u0627\u0628\u0644\u0629 \u0644\u0627\u0643\u062A\u0633\u0627\u0628 \u0623\u0634\u0643\u0627\u0644 \u0647\u0646\u062F\u0633\u064A\u0629 \u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0645\u062F \u0648\u0627\u0644\u0631\u062C\u0639 \u0648\u0627\u0644\u0627\u0633\u062A\u062F\u0627\u0631\u0629 \u0648\u0627\u0644\u062A\u0632\u0648\u064A\u0629 \u0648\u0627\u0644\u062A\u0634\u0627\u0628\u0643 \u0648\u0627\u0644\u062A\u062F\u0627\u062E\u0644 \u0648\u0627\u0644\u062A\u0631\u0643\u064A\u0628. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0638\u0647\u0648\u0631 \u0627\u0644\u062E\u0637 \u0627\u0644\u0639\u0631\u0628\u064A \u0648\u062A\u0646\u0648\u0639 \u0623\u0634\u0643\u0627\u0644\u0647 \u062C\u0627\u0621 \u0646\u062A\u064A\u062C\u0629 \u0645\u0631\u0648\u0646\u0629 \u0627\u0644\u062D\u0631\u0648\u0641 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0648\u0633\u0647\u0648\u0644\u0629 \u0627\u0646\u0633\u064A\u0627\u0628\u0647\u0627\u060C \u0648\u0627\u062E\u062A\u0644\u0627\u0641 \u0623\u0642\u0644\u0627\u0645\u0647\u0627\u060C \u0648\u0648\u0636\u0648\u062D \u0623\u0634\u0643\u0627\u0644\u0647\u0627. \u0648\u062A\u0646\u0648\u0639\u062A \u0623\u0634\u0643\u0627\u0644 \u0627\u0644\u062E\u0637 \u0627\u0644\u0639\u0631\u0628\u064A \u0648\u0623\u0635\u0628\u062D \u0644\u0643\u0644 \u062E\u0637 \u0642\u0648\u0627\u0639\u062F\u0647 \u0627\u0644\u062A\u064A \u062A\u062A\u062D\u0643\u0645 \u0628\u0647. \u0643\u0645\u0627 \u062A\u0648\u0633\u0639 \u0645\u062C\u0627\u0644 \u0627\u0644\u062E\u0637\u0648\u0637 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0648\u062A\u0634\u0639\u0628 \u0643\u062B\u064A\u0631\u064B\u0627\u060C \u0645\u0645\u0627 \u062C\u0639\u0644 \u0627\u0644\u0645\u0628\u062F\u0639\u064A\u0646 \u0648\u0627\u0644\u0645\u0647\u062A\u0645\u064A\u0646 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u062C\u0627\u0644 \u064A\u062A\u0633\u0627\u0628\u0642\u0648\u0646 \u0641\u064A \u0627\u0628\u062A\u0643\u0627\u0631 \u0623\u0634\u0643\u0627\u0644 \u0627\u0644\u062D\u0631\u0648\u0641 \u0648\u062A\u0643\u0648\u064A\u0646 \u062E\u0637\u0648\u0637 \u062C\u062F\u064A\u062F\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0623\u0648\u0644 \u0634\u064A\u0621 \u064A\u062C\u0628 \u062A\u0639\u0644\u0645\u0647 \u0647\u0648 \u0645\u0633\u0643\u0629 \u0627\u0644\u0642\u0644\u0645\u060C \u0648\u0644\u0627 \u062A\u0628\u062F\u0623 \u0641\u064A \u062A\u0639\u0644\u0645 \u0627\u0644\u062D\u0631\u0648\u0641 \u062D\u062A\u0649 \u062A\u062A\u0642\u0646 \u0645\u0633\u0643\u0629 \u0627\u0644\u0642\u0644\u0645 \u062C\u064A\u062F\u0627 \u062F\u0627\u0626\u0645\u0627\u064B \u0623\u0646\u0635\u062D \u0628\u0643\u062A\u0627\u0628\u0629 \u062C\u0645\u0644\u0629 \u0623\u0648 \u0627\u0644\u0628\u0633\u0645\u0644\u0629 \u0644\u062A\u0639\u0648\u0651\u062F \u064A\u062F\u0643 \u0639\u0644\u0649 \u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A \u0648\u062A\u0623\u0644\u0641 \u0627\u0644\u0642\u0644\u0645 \u0648\u062A\u0646\u062A\u0647\u064A \u0645\u0646 \u0623\u064A \u0645\u0634\u0627\u0643\u0644 \u0641\u064A \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u062A\u062E\u0635 \u0645\u0633\u0643\u0629 \u0627\u0644\u0642\u0644\u0645 \u062D\u062A\u0649 \u062A\u0631\u0643\u0632 \u0641\u064A \u0627\u0644\u062D\u0631\u0648\u0641 \u0628\u0633\u0647\u0648\u0644\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0627\u0628\u062F\u0623 \u0628\u062A\u0639\u0644\u0645 \u0627\u0644\u062D\u0631\u0648\u0641 \u0627\u0644\u0645\u0641\u0631\u062F\u0629 \u0628\u0642\u0648\u0627\u0639\u062F\u0647\u0627 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u062F\u0631\u0627\u0633\u0629 \u0627\u0644\u062D\u0631\u0648\u0641 \u0627\u0644\u0645\u062A\u0635\u0644\u0629\u060C \u0648\u0647\u064A (\u0634\u0643\u0644 \u0627\u0644\u062D\u0631\u0641 \u0648\u0639\u0644\u0627\u0642\u062A\u0647 \u0645\u0639 \u0628\u0642\u064A\u0629 \u0627\u0644\u062D\u0631\u0648\u0641) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0627\u0644\u0631\u0624\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ".\u062F\u0631\u0627\u0633\u0629 \u0627\u0644\u062E\u0637 \u0627\u0644\u0639\u0631\u0628\u064A \u0644\u064A\u0633\u062A \u0639\u0645\u0644\u064A\u0629 \u0633\u0647\u0644\u0629\u060C \u0648\u0644\u0627 \u0635\u0639\u0628\u0629 \u0625\u0630\u0627 \u0627\u062A\u0628\u0639\u062A \u0627\u0644\u0637\u0631\u064A\u0642 \u0627\u0644\u0635\u062D\u064A\u062D\u060C \u0641\u0642\u0637 \u062A\u062D\u062A\u0627\u062C \u0644\u0645\u0639\u0644\u0645 \u0645\u0628\u0627\u0634\u0631 \u0644\u0623\u0646 \u062A\u0639\u0644\u0645 \u0647\u0630\u0627 \u0627\u0644\u0641\u0646 \u0641\u064A \u0627\u0644\u0623\u0635\u0644 \u0628\u0627\u0644\u062A\u0644\u0642\u064A \u0644\u0643\u0646 \u0647\u0630\u0627 \u0627\u0644\u0645\u0642\u0627\u0644 \u064A\u0633\u0627\u0639\u062F \u0645\u0646 \u064A\u0635\u0639\u0628 \u0639\u0644\u064A\u0647 \u0625\u064A\u062C\u0627\u062F \u0627\u0644\u0645\u064F\u0639\u0644\u0645\u060C \u0648\u062D\u062A\u0649 \u0646\u0628\u062F\u0623 \u0623\u0630\u0643\u0631\u0643 \u0628\u0627\u0644\u0645\u0642\u0648\u0644\u0629 \u0627\u0644\u0634\u0647\u064A\u0631\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.2);\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyYWJpYy1mb250LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxtQkFBbUI7O0VBRW5CLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCOztBQUUxQjs7O0NBR0M7RUFDQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7O0VBRWQsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7O0NBQ0M7RUFDQyxjQUFjO0FBQ2hCOzs7Q0FHQztFQUNDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYzs7RUFFZCxVQUFVO0VBQ1YsU0FBUztFQUNULHVDQUF1QztFQUN2QyxXQUFXO0FBQ2I7OztDQUVDO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7OztDQUVDO0VBQ0MsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2QkFBNkI7O0FBRS9COzs7Q0FFQztHQUNFLGlCQUFpQjtHQUNqQixvQkFBb0I7R0FDcEIsV0FBVztHQUNYLHNCQUFzQjs7QUFFekIiLCJmaWxlIjoiYXJhYmljLWZvbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcblxyXG4gLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQgOiAyMTVweDtcclxuXHJcbiAgbWFyZ2luIDogMzBweCAxMHB4O1xyXG4gIHBhZGRpbmcgOiAyMHB4IDE1cHg7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gIGJveC1zaGFkb3cgOiAwIDVweCAyMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICB0cmFuc2l0aW9uIDogMC4zcyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG4gLmNhcmQ6aG92ZXIge1xyXG4gIGhlaWdodCA6IDQyMHB4O1xyXG59XHJcblxyXG5cclxuIC5jYXJkIC5pbWFnZSB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodCA6IDUwMHB4O1xyXG5cclxuICB0b3AgOiAtNDAlO1xyXG4gIGxlZnQ6IDhweDtcclxuICBib3gtc2hhZG93IDogMCA1cHggMjBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleCA6IDE7XHJcbn1cclxuXHJcbiAuY2FyZCAuaW1hZ2UgaW1nIHtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodDoyMTVweDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG5cclxuIC5jYXJkIC5jb250ZW50IHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gIHRvcCA6IC0xNDBweDtcclxuICBwYWRkaW5nIDogMTBweCAxNXB4O1xyXG4gIGNvbG9yIDogIzExMTtcclxuICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG5cclxuICB2aXNpYmlsaXR5IDogaGlkZGVuO1xyXG4gIG9wYWNpdHkgOiAwO1xyXG4gIHRyYW5zaXRpb24gOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxufVxyXG5cclxuIC5jYXJkOmhvdmVyIC5jb250ZW50IHtcclxuICAgbWFyZ2luLXRvcCA6IDMwcHg7XHJcbiAgIHZpc2liaWxpdHkgOiB2aXNpYmxlO1xyXG4gICBvcGFjaXR5IDogMTtcclxuICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2891:
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ 1813);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);







class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.user);
    }
    signUp(email, password) {
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAgr5yw_HD2KKxHSl-zsh5kxHGCl7A-5qI', { email: email,
            password: password,
            returnSecureToken: true })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handelError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(resData => {
            this.handelAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    signIn(email, password) {
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAgr5yw_HD2KKxHSl-zsh5kxHGCl7A-5qI', { email: email,
            password: password,
            returnSecureToken: true })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handelError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(resData => {
            this.handelAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    handelError(errorRes) {
        let errorMessage = 'An unkown error occurred !';
        if (!errorRes.error || !errorRes.error.error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exist already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email is not found';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'this password is invlaid';
                break;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
    }
    handelAuth(email, userId, token, expiresIn) {
        const expire = new Date(new Date().getTime() + +expiresIn * 1000);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User();
        user.email = email;
        user.id = userId;
        user._token = token;
        user._tokenExpirationDate = expire;
        this.subject.next(user);
        // this.autoLogout(expiresIn*1000)
        localStorage.setItem('userData', JSON.stringify(user));
    }
    logOut() {
        this.user._token = '';
        this.subject.next(this.user);
        this.router.navigate(['./sign']);
        // localStorage.clear()
        localStorage.removeItem('userData');
        if (this.activeTimer) {
            clearTimeout(this.activeTimer);
        }
        this.activeTimer = null;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5116:
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsComponent": () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);




class ContactUsComponent {
    constructor(http) {
        this.http = http;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            disc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('')
        });
    }
    ngOnInit() {
    }
    onsubmit() {
        const messages = this.form.getRawValue();
        this.http.post('https://lotus-acadmey-default-rtdb.firebaseio.com/messages.json', messages).subscribe();
        this.form.reset();
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ContactUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 23, vars: 1, consts: [["id", "sign  "], [1, "container", "mb-3"], [1, "fs-1", "text-secondary"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email", 1, "fs-4", "mx-2", "mt-3", "text-secondary"], ["type", "email", "formControlName", "email", 1, "form-control", "py-3"], [1, "form-group", "mt-4"], ["for", "text", "formControlName", "subject", 1, "fs-4", "mx-3", "text-secondary"], ["type", "text", 1, "form-control", "py-3"], ["for", "text", "formControlName", " disc", 1, "fs-4", "mx-3", "text-secondary"], ["rows", "4", 1, "form-control", "mb-2"], ["type", "submit", 1, "btn", "btn-primary", "px-5", "py-3", "mt-3"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_4_listener() { return ctx.onsubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0627\u0644\u0645\u0648\u0636\u0648\u0639");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " \u064A\u064F\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0637\u0644\u0628\u0643. \u0633\u0648\u0641 \u064A\u0633\u062A\u062C\u064A\u0628 \u0639\u0636\u0648 \u0645\u0646 \u0641\u0631\u064A\u0642 \u0627\u0644\u062F\u0639\u0645 \u0641\u064A \u0623\u0633\u0631\u0639 \u0648\u0642\u062A \u0645\u0645\u0643\u0646. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u0627\u0631\u0633\u0627\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 858:
/*!************************************************************!*\
  !*** ./src/app/english-basics/english-basics.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnglishBasicsComponent": () => (/* binding */ EnglishBasicsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class EnglishBasicsComponent {
    constructor() {
        this.progSelect = 'english-basics';
    }
    ngOnInit() {
    }
}
EnglishBasicsComponent.ɵfac = function EnglishBasicsComponent_Factory(t) { return new (t || EnglishBasicsComponent)(); };
EnglishBasicsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnglishBasicsComponent, selectors: [["app-english-basics"]], decls: 51, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "p-3", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/English Basics.png", "alt", "..."], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"], ["src", "/assets/img/2877585-scaled.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/unnamed.png", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/screen-2.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"]], template: function EnglishBasicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0634\u0631\u062D \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0644\u063A\u0647 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0647 \u0644\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646 \u0628\u0637\u0631\u064A\u0642\u0647 \u0645\u0628\u0633\u0637\u0647 \u0628\u0627\u0644\u0635\u0648\u0631 \u0648\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u0648\u0636\u064A\u062D\u064A\u0629 \u0634\u0631\u062D \u062C\u0645\u064A\u0639 \u062F\u0631\u0648\u0633 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0627\u0644\u0627\u0633\u0627\u0633\u064A\u0629 \u0643\u0627\u0645\u0644\u0629 \u0644\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0627\u0644\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u062A\u062A\u0636\u0645\u0646 \u0643\u0644 \u0645\u0627 \u062A\u062D\u062A\u0627\u062C \u0627\u0644\u064A\u0647 \u0645\u0646 \u0627\u062C\u0644 \u0627\u0646\u0637\u0644\u0627\u0642\u0629 \u0642\u0648\u064A\u0629 \u0641\u0642\u062F \u0627\u062E\u062A\u0631\u0646\u0627 \u0644\u0643 \u062F\u0631\u0648\u0633 \u062A\u062D\u062A\u0627\u062C \u0627\u0644\u064A\u0647\u0627 \u0628\u0634\u0643\u0644 \u062F\u0627\u0626\u0645 \u0648\u0633\u0648\u0641 \u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u063A\u0644\u0628 \u0645\u0641\u0631\u062F\u0627\u062A\u0647\u0627 \u0628\u0634\u0643\u0644 \u064A\u0648\u0645\u064A \u0648\u0645\u062A\u0643\u0631\u0631 . \u0648\u0647\u0630\u0647 \u0627\u0644\u062F\u0631\u0648\u0633 \u0647\u064A \u0627\u0644\u062D\u062C\u0631 \u0627\u0644\u0627\u0633\u0627\u0633 \u0644\u062A\u0639\u0644\u0645 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u0645\u0646 \u0627\u0644\u062F\u0648\u0631\u0629 \u064A\u062A\u0643\u0627\u0645\u0644 \u0645\u0639 \u0645\u0633\u0627\u0631 (\u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0648\u0627\u0644\u062A\u062D\u062F\u062B) \u0648\u0627\u0644\u0630\u064A \u0647\u0648 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0641\u064A \u0627\u0644\u062F\u0648\u0631\u0629 \u0648\u0627\u0644\u0630\u064A \u064A\u0647\u062F\u0641 \u0644\u0623\u0646 \u062A\u0643\u062A\u0633\u0628 \u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0641\u064A \u062C\u0645\u0644 \u0648\u062A\u0628\u062F\u0623 \u0641\u064A \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 \u0645\u0646 \u0623\u0648\u0644 \u064A\u0648\u0645\u060C \u0641\u064A \u0643\u0644 \u062F\u0631\u0633 \u0647\u0646\u0627\u0644\u0643 \u0642\u062F\u0631 \u0635\u063A\u064A\u0631 \u0645\u0646 \u0627\u0644\u0642\u0648\u0627\u0639\u062F \u0628\u0645\u0627 \u064A\u062E\u062F\u0645 \u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u062A\u0627\u0644\u064A \u0645\u0646 \u062F\u0631\u0633 \u0627\u0644\u0643\u0644\u0645\u0627\u062A\u060C \u0648\u0628\u0647\u0630\u0627 \u062A\u0643\u0648\u0646 \u0627\u0644\u062F\u0648\u0631\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0648\u0645\u062A\u0631\u0627\u0628\u0637\u0629 \u0643\u064A \u062A\u062A\u0645\u0643\u0646 \u0623\u0646\u062A \u0645\u0646 \u0628\u0646\u0627\u0621 \u0644\u063A\u062A\u0643 \u0628\u0634\u0643\u0644 \u0633\u0644\u064A\u0645 \u0648\u0635\u062D\u064A\u062D \u0625\u0646 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0645\u062F\u062E\u0644 \u0644\u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u062C\u0645\u0644\u0629 \u0641\u064A \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0639\u0628\u0627\u0631\u0629 \u0639\u0646 \u0645\u0642\u062F\u0645\u0629 \u0644\u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u062C\u0645\u0644\u0629 \u0641\u064A \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0628\u0623\u0628\u0633\u0637 \u0635\u0648\u0631\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0643\u0644\u0627\u0645 \u0641\u064A \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u064A\u062A\u0645 \u062A\u0635\u0646\u064A\u0641 \u062C\u0645\u064A\u0639 \u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0623\u0648 \u0623\u064A \u0644\u063A\u0629 \u0625\u0644\u0649 \u0645\u062C\u0645\u0648\u0639\u0627\u062A\u060C \u0623\u0641\u0639\u0627\u0644 \u0648\u0623\u0633\u0645\u0627\u0621 \u0648\u0635\u0641\u0627\u062A \u0648\u0636\u0645\u0627\u0626\u0631 \u0648 \u2026..\u0627\u0644\u062E\u060C \u0647\u0630\u0627 \u0627\u0644\u0623\u0645\u0631 \u0645\u0647\u0645 \u0641\u064A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0627\u0644\u0623\u0641\u0639\u0627\u0644 \u0641\u064A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u062A\u0639\u062A\u0628\u0631 \u0627\u0644\u0623\u0641\u0639\u0627\u0644 \u0645\u0646 \u0623\u0647\u0645 \u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0644\u063A\u0629\u060C \u0648\u0627\u0644\u0623\u0641\u0639\u0627\u0644 \u0644\u0647\u0627 \u0639\u062F\u0629 \u0623\u0634\u0643\u0627\u0644\u060C \u0648\u0644\u062D\u0633\u0646 \u0627\u0644\u062D\u0638 \u0623\u0646 \u0623\u0634\u0643\u0627\u0644 \u0627\u0644\u0623\u0641\u0639\u0627\u0644 \u0641\u064A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0645\u062D\u062F\u0648\u062F\u0629 \u0648\u0644\u062F\u064A\u0647\u0627 \u0642\u0648\u0627\u0639\u062F \u0623\u0628\u0633\u0637 \u0645\u0646 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0633\u0624\u0627\u0644 \u0641\u064A \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u0647\u0646\u0627\u0644\u0643 \u0637\u0631\u064A\u0642\u062A\u064A\u0646 \u0644\u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0633\u0624\u0627\u0644 \u0641\u064A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629\u060C \u0627\u0644\u0646\u0648\u0639 \u0627\u0644\u0623\u0648\u0644 \u0627\u0644\u0630\u064A \u064A\u0633\u0645\u0649 (Yes/No questions) \u0648 \u0647\u0646\u0627\u0644\u0643 \u0646\u0648\u0639\u064A\u0629 \u0623\u062E\u0631\u0649 \u0645\u0646 \u0627\u0644\u0623\u0633\u0626\u0644\u0629\u060C \u062A\u0633\u0645\u0649 \u0623\u0633\u0626\u0644\u0629 (wh) \u0644\u0623\u0646\u0646\u0627 \u0646\u0633\u062A\u062E\u062F\u0645 \u0643\u0644\u0645\u0627\u062A \u062A\u0628\u062F\u0623 \u0628\u0647\u0627\u0630\u064A\u0646 \u0627\u0644\u062D\u0631\u0641\u064A\u0646\u060C \u0648\u0647\u064A \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0645\u0646 \u0642\u0628\u064A\u0644 (\u0645\u062A\u0649\u060C \u0645\u0627\u0630\u0627\u060C \u0643\u064A\u0641\u060C \u0623\u064A\u0646 \u2026.\u0627\u0644\u062E) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u0627\u0644\u062A\u062F\u0631\u0628 \u0639\u0644\u0649 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u0644\u0644\u062A\u062F\u0631\u0628 \u0639\u0644\u0649 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0645 \u0623\u062E\u0630\u0647\u0627 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0627\u0644\u0631\u0624\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u064A\u0639\u062A\u0628\u0631 \u0628\u0631\u0646\u0627\u0645\u062C \u0634\u0631\u062D \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0645\u0635\u062F\u0631\u0627 \u0647\u0627\u0645\u0627 \u0648\u0645\u0631\u062C\u0639\u0627 \u0644\u062A\u0639\u0644\u0645 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0628\u0637\u0631\u064A\u0642\u0629 \u0633\u0647\u0644\u0629 \u0645\u0628\u0633\u0637\u0629 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0645\u0644\u062A\u064A\u0645\u064A\u062F\u064A\u0627 \u0648\u0630\u0644\u0643 \u0628\u0639\u0631\u0636 \u0648\u0634\u0631\u062D \u0627\u0644\u0642\u0648\u0627\u0639\u062F \u0645\u062A\u0628\u0648\u0639\u0629 \u0628\u0627\u0644\u0635\u0648\u062A \u0648\u0645\u0635\u0646\u0641\u0629 \u0628\u0634\u0643\u0644 \u062C\u064A\u062F \u062D\u062A\u0649 \u064A\u0633\u0647\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u062A\u0639\u0644\u0645 \u0627\u064A\u062C\u0627\u062F \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0629 \u0648\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u064A\u0647\u0627 \u0628\u0634\u0643\u0644 \u0633\u0631\u064A\u0639. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2xpc2gtYmFzaWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxtQkFBbUI7O0VBRW5CLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCOztBQUUxQjs7O0NBR0M7RUFDQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7O0VBRWQsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7O0NBQ0M7RUFDQyxjQUFjO0FBQ2hCOzs7Q0FHQztFQUNDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYzs7RUFFZCxVQUFVO0VBQ1YsU0FBUzs7RUFFVCxXQUFXO0FBQ2I7OztDQUVDO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7OztDQUVDO0VBQ0MsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2QkFBNkI7O0FBRS9COzs7Q0FFQztHQUNFLGlCQUFpQjtHQUNqQixvQkFBb0I7R0FDcEIsV0FBVztHQUNYLHNCQUFzQjs7QUFFekIiLCJmaWxlIjoiZW5nbGlzaC1iYXNpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcblxyXG4gLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQgOiAyMTVweDtcclxuXHJcbiAgbWFyZ2luIDogMzBweCAxMHB4O1xyXG4gIHBhZGRpbmcgOiAyMHB4IDE1cHg7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gIGJveC1zaGFkb3cgOiAwIDVweCAyMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICB0cmFuc2l0aW9uIDogMC4zcyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG4gLmNhcmQ6aG92ZXIge1xyXG4gIGhlaWdodCA6IDQyMHB4O1xyXG59XHJcblxyXG5cclxuIC5jYXJkIC5pbWFnZSB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodCA6IDUwMHB4O1xyXG5cclxuICB0b3AgOiAtNDAlO1xyXG4gIGxlZnQ6IDhweDtcclxuXHJcbiAgei1pbmRleCA6IDE7XHJcbn1cclxuXHJcbiAuY2FyZCAuaW1hZ2UgaW1nIHtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodDoyMTVweDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG5cclxuIC5jYXJkIC5jb250ZW50IHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gIHRvcCA6IC0xNDBweDtcclxuICBwYWRkaW5nIDogMTBweCAxNXB4O1xyXG4gIGNvbG9yIDogIzExMTtcclxuICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG5cclxuICB2aXNpYmlsaXR5IDogaGlkZGVuO1xyXG4gIG9wYWNpdHkgOiAwO1xyXG4gIHRyYW5zaXRpb24gOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxufVxyXG5cclxuIC5jYXJkOmhvdmVyIC5jb250ZW50IHtcclxuICAgbWFyZ2luLXRvcCA6IDMwcHg7XHJcbiAgIHZpc2liaWxpdHkgOiB2aXNpYmxlO1xyXG4gICBvcGFjaXR5IDogMTtcclxuICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3085:
/*!************************************************************************!*\
  !*** ./src/app/english-convarsation/english-convarsation.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnglishConvarsationComponent": () => (/* binding */ EnglishConvarsationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class EnglishConvarsationComponent {
    constructor() {
        this.progSelect = 'english-conv';
    }
    ngOnInit() {
    }
}
EnglishConvarsationComponent.ɵfac = function EnglishConvarsationComponent_Factory(t) { return new (t || EnglishConvarsationComponent)(); };
EnglishConvarsationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnglishConvarsationComponent, selectors: [["app-english-convarsation"]], decls: 48, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "p-3", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/Basic-English-Conversation-100-Daily-Topics-01.jpg"], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"], ["src", "/assets/img/552x414bb.png", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/thumbnails-conversation-starter.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/Exam-Conversation-with-Kids.png", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"]], template: function EnglishConvarsationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u062A\u0639\u0644\u0645 \u0645\u062D\u0627\u062F\u062B\u0629 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629 \u0648\u0627\u0644\u062D\u0648\u0627\u0631 \u0647\u0645\u0627 \u0623\u0633\u0644\u0648\u0628 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0628\u064A\u0646 \u0627\u0644\u0646\u0627\u0633\u060C \u0625\u0646\u0647\u0645\u0627 \u0645\u0647\u0627\u0631\u0629 \u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629 \u0644\u064A\u0633\u062A \u0635\u0639\u0628\u0629 \u0644\u0645\u0639\u0638\u0645 \u0627\u0644\u0623\u0641\u0631\u0627\u062F\u060C \u0648\u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0647\u064A \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u0645\u062B\u0627\u0644\u064A \u0644\u0644\u062A\u0648\u0627\u0635\u0644 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0646\u0648\u0627\u062D\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u062A\u064F\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629 \u0645\u0646 \u0623\u0647\u0645 \u062C\u0648\u0627\u0646\u0628 \u062A\u0639\u0644\u0645 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629\u060C \u0644\u0623\u0646\u0647\u0627 \u062A\u0639\u062A\u0628\u0631 \u0645\u0642\u064A\u0627\u0633 \u062A\u062D\u0633\u0646\u0643 \u0641\u064A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629. \u0641\u0643\u0644\u0645\u0627 \u0632\u0627\u062F \u0645\u0633\u062A\u0648\u064A \u062A\u062D\u062F\u062B \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629\u060C \u0643\u0644\u0645\u0627 \u0632\u0627\u062F \u0628\u0627\u0642\u064A \u062C\u0648\u0627\u0646\u0628 \u0627\u0644\u0644\u063A\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0645\u0635\u062D\u0648\u0628\u0629 \u0628\u062A\u0631\u062C\u0645\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u062C\u0645\u0644 \u0648\u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0627\u0644\u0648\u0627\u0631\u062F\u0629 \u0641\u064A \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629\u060C \u0648\u0627\u0644\u062A\u064A \u0645\u0646 \u062E\u0644\u0627\u0644\u0647\u0627 \u064A\u0645\u0643\u0646\u0643\u0645 \u062A\u0639\u0644\u0645 \u0627\u0644\u062A\u0639\u0628\u064A\u0631\u0627\u062A \u0648\u0627\u0644\u0639\u0628\u0627\u0631\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u0627\u0644\u062A\u064A \u064A\u0633\u062A\u062E\u062F\u0645\u0647\u0627 \u0645\u062A\u062D\u062F\u062B\u064A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0641\u064A \u062D\u064A\u0627\u062A\u0647\u0645 \u0627\u0644\u064A\u0648\u0645\u064A\u0629 \u0648\u0641\u064A \u0643\u0627\u0641\u0629 \u0645\u0646\u0627\u062D\u064A \u0627\u0644\u062D\u064A\u0627\u0629 \u0648\u0627\u0644\u062A\u064A \u0623\u062D\u064A\u0627\u0646\u0627 \u064A\u062D\u0627\u0631 \u0627\u0644\u0643\u062B\u064A\u0631\u064A\u0646 \u0641\u064A \u0641\u0647\u0645 \u0645\u0639\u0646\u0627\u0647\u0627\u060C \u0647\u0630\u0647 \u0627\u0644\u062A\u0639\u0628\u064A\u0631\u0627\u062A \u0645\u062A\u0631\u062C\u0645\u0629 \u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0648\u0645\u0646\u0637\u0648\u0642\u0629 \u0627\u064A\u0636\u0627. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0647\u064A \u0637\u0631\u064A\u0642\u0643 \u0625\u0644\u0649 \u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u0637\u0644\u0627\u0642\u0629 \u0641\u064A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u062A\u064F\u0632\u064A\u062F \u062D\u0635\u064A\u0644\u0629 \u0627\u0644\u0645\u0641\u0631\u062F\u0627\u062A \u0627\u0644\u0644\u063A\u0648\u064A\u0629 \u0648\u0627\u0644\u062A\u0639\u0627\u0628\u064A\u0631 \u0648\u0627\u0644\u0645\u0635\u0637\u0644\u062D\u0627\u062A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u062A\u0633\u0627\u0639\u062F\u0643 \u0639\u0644\u0649 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u062B\u0642\u0627\u0641\u0627\u062A \u0623\u062E\u0631\u064A\u060C \u0648\u0628\u0646\u0627\u0621 \u0635\u062F\u0627\u0642\u0627\u062A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u062A\u062A\u064A\u062D \u0644\u0643 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0628\u062F\u0621 \u0635\u062F\u0627\u0642\u0627\u062A \u0648\u0645\u0639\u0627\u0631\u0641 \u0647\u0627\u0645\u0629 \u0648\u0645\u062B\u0645\u0631\u0629 \u0641\u064A \u0639\u0645\u0644\u0643. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u062A\u0633\u0627\u0639\u062F\u0643 \u0639\u0644\u0649 \u0627\u0644\u062A\u0639\u0628\u064A\u0631 \u0639\u0646 \u0627\u0644\u0622\u0631\u0627\u0621 \u0648\u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u0645\u0641\u064A\u062F\u0629 \u0641\u064A \u0627\u0644\u0645\u0648\u0627\u0642\u0641 \u0627\u0644\u0647\u0627\u0645\u0629 \u0643\u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0627\u062A \u0627\u0644\u0648\u0638\u064A\u0641\u064A\u0629\u060C \u0648\u0625\u0644\u0642\u0627\u0621 \u0627\u0644\u062E\u0637\u0628. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u0627\u0644\u0631\u0624\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u062A\u0639\u0632\u0632 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0623\u064A\u0636\u0627 \u062D\u0635\u064A\u0644\u062A\u0643 \u0645\u0646 \u0627\u0644\u0645\u0641\u0631\u062F\u0627\u062A \u0627\u0644\u0644\u063A\u0648\u064A\u0629 \u0648\u0627\u0644\u062A\u0639\u0627\u0628\u064A\u0631. \u0641\u0645\u0639\u0638\u0645 \u062A\u0639\u0627\u0645\u0644\u0643 \u0627\u0644\u064A\u0648\u0645\u064A \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0639\u0628\u0627\u0631\u0629 \u0639\u0646 \u0627\u0644\u0639\u062F\u064A\u062F \u0648\u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A . \u0648\u062A\u0639\u0632\u064A\u0632 \u0645\u0647\u0627\u0631\u062A\u0643 \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0646\u0642\u0637\u0629 \u0633\u0648\u0641 \u064A\u0632\u064A\u062F \u0642\u062F\u0631\u0627\u062A\u0643 \u0627\u0644\u0644\u063A\u0648\u064A\u0629. \u0648\u0647\u0630\u0627 \u0645\u0627 \u0646\u0647\u062F\u0641 \u0644\u0647 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2xpc2gtY29udmFyc2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxtQkFBbUI7O0VBRW5CLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCOztBQUUxQjs7O0NBR0M7RUFDQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7O0VBRWQsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7O0NBQ0M7RUFDQyxjQUFjO0FBQ2hCOzs7Q0FHQztFQUNDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYzs7RUFFZCxVQUFVO0VBQ1YsU0FBUzs7RUFFVCxXQUFXO0FBQ2I7OztDQUVDO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7OztDQUVDO0VBQ0MsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2QkFBNkI7O0FBRS9COzs7Q0FFQztHQUNFLGlCQUFpQjtHQUNqQixvQkFBb0I7R0FDcEIsV0FBVztHQUNYLHNCQUFzQjs7QUFFekIiLCJmaWxlIjoiZW5nbGlzaC1jb252YXJzYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcblxyXG4gLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQgOiAyMTVweDtcclxuXHJcbiAgbWFyZ2luIDogMzBweCAxMHB4O1xyXG4gIHBhZGRpbmcgOiAyMHB4IDE1cHg7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gIGJveC1zaGFkb3cgOiAwIDVweCAyMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICB0cmFuc2l0aW9uIDogMC4zcyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG4gLmNhcmQ6aG92ZXIge1xyXG4gIGhlaWdodCA6IDQyMHB4O1xyXG59XHJcblxyXG5cclxuIC5jYXJkIC5pbWFnZSB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodCA6IDUwMHB4O1xyXG5cclxuICB0b3AgOiAtNDAlO1xyXG4gIGxlZnQ6IDhweDtcclxuXHJcbiAgei1pbmRleCA6IDE7XHJcbn1cclxuXHJcbiAuY2FyZCAuaW1hZ2UgaW1nIHtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodDoyMTVweDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG5cclxuIC5jYXJkIC5jb250ZW50IHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gIHRvcCA6IC0xNDBweDtcclxuICBwYWRkaW5nIDogMTBweCAxNXB4O1xyXG4gIGNvbG9yIDogIzExMTtcclxuICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG5cclxuICB2aXNpYmlsaXR5IDogaGlkZGVuO1xyXG4gIG9wYWNpdHkgOiAwO1xyXG4gIHRyYW5zaXRpb24gOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxufVxyXG5cclxuIC5jYXJkOmhvdmVyIC5jb250ZW50IHtcclxuICAgbWFyZ2luLXRvcCA6IDMwcHg7XHJcbiAgIHZpc2liaWxpdHkgOiB2aXNpYmxlO1xyXG4gICBvcGFjaXR5IDogMTtcclxuICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1076:
/*!******************************************!*\
  !*** ./src/app/enter/enter.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterComponent": () => (/* binding */ EnterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth.service */ 2891);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function EnterComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class EnterComponent {
    constructor(auth, route) {
        this.auth = auth;
        this.route = route;
        this.error = '';
        this.isLogging = false;
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]),
        });
    }
    ngOnInit() {
    }
    onlogin() {
        if (!this.signInForm) {
            return;
        }
        const email = this.signInForm.value.email;
        const password = this.signInForm.value.password;
        let authObs;
        authObs = this.auth.signIn(email, password);
        authObs.subscribe(resData => {
            console.log(resData);
            this.isLogging = true;
            this.route.navigate(['']);
        }, errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
        });
        this.signInForm.reset();
    }
}
EnterComponent.ɵfac = function EnterComponent_Factory(t) { return new (t || EnterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
EnterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EnterComponent, selectors: [["app-enter"]], decls: 35, vars: 2, consts: [["id", "enter "], [1, "container", "mt-5"], [1, "mt-5", "text-center", "fs-1", "text-secondary"], [1, "d-flex", "justify-content-center"], [1, "lead"], ["routerLink", "/sign", 1, "btn", "text-primary"], ["href", "https://accounts.google.com/", "target", "blank", 1, "btn", "border", "px-5", "py-4", "mx-4", "bg-light"], [1, "fab", "fa-google", "fa-2x", "mx-2", "text-primary"], ["href", "https://www.facebook.com/", "target", "blank", 1, "btn", "border", "px-5", "py-4", "mx-4", "bg-light"], [1, "fab", "fa-facebook", "fa-2x", "mx-2", "text-primary"], [1, "text-center", "my-3"], [1, "m-auto", 3, "formGroup", "ngSubmit"], ["class", "alert alert-danger my-2", 4, "ngIf"], [1, "content"], [1, "form-group"], ["for", "email", 1, "fs-4", "mx-2", "text-secondary"], ["type", "email", "placeholder", "Please Enter Your Email", "formControlName", "email", 1, "form-control", "py-3"], [1, "form-group", "mt-4"], ["for", "password", 1, "fs-4", "mx-3", "text-secondary"], ["type", "password", "placeholder", "Please Enter Your Password", "formControlName", "password", 1, "form-control", "py-3"], [1, "text-primary", "mt-2", "btn", "fs-5"], [1, "d-grid", "my-5"], ["type", "submit", 1, "btn", "btn-primary", "p-3"], [1, "alert", "alert-danger", "my-2"]], template: function EnterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u062D\u0633\u0627\u0628\u0643");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0647\u0644 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u0644\u062F\u064A\u0646\u0627 \u061F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0627\u0646\u0634\u0626 \u062D\u0633\u0627\u0628\u0643 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0639\u0646 \u0637\u0631\u064A\u0642 \u062C\u0648\u062D\u0644 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0639\u0646 \u0637\u0631\u064A\u0642 \u0641\u064A\u0633\u0628\u0648\u0643 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0627\u0648");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EnterComponent_Template_form_ngSubmit_19_listener() { return ctx.onlogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, EnterComponent_div_20_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u0647\u0644 \u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631\u061F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["form[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n@media  (max-width: 568px){\r\n  form[_ngcontent-%COMP%]{\r\n    width: 75%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoiZW50ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5AbWVkaWEgIChtYXgtd2lkdGg6IDU2OHB4KXtcclxuICBmb3Jte1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class FooterComponent {
    constructor() {
        this.featureCreat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    onselect(feature) {
        this.featureCreat.emit(feature);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], outputs: { featureCreat: "featureCreat" }, decls: 19, vars: 0, consts: [[1, "text-center", "bg-dark", "text-white", "px-0"], [1, "container", "p-0"], [1, "pt-5", "pb-3"], [1, "social", "d-flex", "justify-content-center"], ["href", "https://m.facebook.com/lotusacademy1", "target", "blank"], [1, "fab", "fa-facebook", "fa-3x", "text-white", "mx-2"], ["href", "https://twitter.com/LutasAcademy", "target", "blank"], [1, "fab", "fa-twitter", "fa-3x", "text-white", "mx-2"], ["href", "https://www.instagram.com/lutasacademy", "target", "blank"], [1, "fab", "fa-instagram", "fa-3x", "text-white", "mx-2"], ["href", "https://www.youtube.com/channel/UCLFPA2jnAFdm4gEZg6Q-gWQ", "target", "blank"], [1, "fab", "fa-youtube", "fa-3x", "text-white", "mx-2"], ["href", "https://www.linkedin.com/in/lutas-academy", "target", "blank"], [1, "fab", "fa-invision", "fa-3x", "text-white", "mx-2"], ["href", "mailto:lutasacademy@gmail.com", "target", "blank"], [1, "fab", "fa-google", "fa-3x", "text-white", "mx-2"], [1, "text-center", "py-4", "my-0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0627\u0644\u0644\u0648\u062A\u0633 \u0627\u0643\u0627\u062F\u064A\u0645\u064A \u00A92022 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth.service */ 2891);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function HeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onlogOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u062E\u0631\u0648\u062C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0633\u062C\u0644 \u0645\u062C\u0627\u0646\u0627");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u062F\u062E\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.isAuthenticated = false;
        this.islogin = false;
        this.authSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription;
    }
    ngOnInit() {
        this.authSub = this.auth.subject.subscribe(user => {
            // this.isAuthenticated = !user ? true : false
            if (user._token === "" || user._token == null) {
                this.isAuthenticated = false;
            }
            else {
                this.isAuthenticated = true;
                this.islogin = true;
            }
        });
    }
    onlogOut() {
        this.auth.logOut();
        this.islogin = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 26, vars: 3, consts: [[1, "row", "py-2"], [1, "col-xs-10", "px-0"], [1, "navbar", "navbar-white", "bg-white"], [1, "container-fluid", "row", "justify-content-center"], [1, "col-md-3", "mx-5", "image"], ["src", "/assets/img/WhatsApp Image 2022-01-30 at 12.12.41 PM.jpeg", "alt", "", 2, "width", "150px", "height", "150px"], [1, "navbar-nav", "col-md-7", "mx-5"], [1, "top", "d-flex", "justify-content-center"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "home", "aria-current", "page", 1, "nav-link", "btn", "btn-primary", "text-white", "rounded-pill", "mx-3", "px-2"], ["routerLinkActive", "active", "routerLink", "program", 1, "nav-link", "btn", "btn-outline-primary", "rounded-pill", "mx-3", "px-2"], ["class", "nav-link btn btn-primary text-white rounded-pill mx-3 px-2", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "nav-link btn btn-primary text-white rounded-pill mx-3 px-2", "routerLink", "sign", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-link btn btn-outline-primary rounded-pill px-2", "routerLink", "enter", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "team", "routerLinkActive", "active", 1, "nav-link", "btn", "btn-primary", "text-white", "rounded-pill", "mx-3", "px-2"], ["routerLink", "contact", "routerLinkActive", "active", 1, "nav-link", "btn", "btn-outline-primary", "rounded-pill", "px-2"], [1, "nav-link", "btn", "btn-primary", "text-white", "rounded-pill", "mx-3", "px-2", 2, "cursor", "pointer", 3, "click"], ["routerLink", "sign", "routerLinkActive", "active", 1, "nav-link", "btn", "btn-primary", "text-white", "rounded-pill", "mx-3", "px-2"], ["routerLink", "enter", "routerLinkActive", "active", 1, "nav-link", "btn", "btn-outline-primary", "rounded-pill", "px-2"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u062A\u0635\u0641\u062D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HeaderComponent_a_15_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HeaderComponent_a_17_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HeaderComponent_a_19_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u0627\u0644\u0641\u0631\u064A\u0642");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.islogin && ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.islogin);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function HomeComponent_section_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0627\u0644\u0633\u0648\u0631\u0648\u0628\u0627\u0646 (\u064A\u0648\u0633\u064A \u0645\u0627\u0633) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0647\u0648 \u0628\u0631\u0646\u0627\u0645\u062C \u062A\u0637\u0648\u064A\u0631 \u0639\u0642\u0644\u064A \u0645\u0645\u064A\u0632 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 \u0645\u062E\u0635\u0635 \u0644\u062A\u0641\u0639\u064A\u0644 \u0637\u0627\u0642\u062A\u0647\u0645 \u0627\u0644\u0639\u0642\u0644\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u0646\u0629 \u0641\u064A \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0639\u0645\u0631\u064A\u0629 \u0627\u0644\u062A\u064A \u064A\u0628\u0644\u063A \u0641\u064A\u0647\u0627 \u0627\u0644\u0639\u0642\u0644 \u0630\u0631\u0648\u0629 \u062A\u0637\u0648\u0631\u0647 \u0648\u0646\u0645\u0648\u0647 \u0644\u0639\u0645\u0631 \u0627\u0644\u0637\u0641\u0644 \u0628\u064A\u0646 4 \u0627\u0644\u064A 13 \u0633\u0646\u0629 \u0635\u0645\u0645 \u0647\u0630\u0627 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0644\u0625\u0633\u062A\u062B\u0645\u0627\u0631 \u0627\u0644\u0633\u0646\u0648\u0627\u062A \u0627\u0644\u0623\u0648\u0644\u0649 \u0645\u0646 \u062D\u064A\u0627\u0629 \u0627\u0644\u0623\u0637\u0641\u0627\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0643\u0648\u0631\u0633 \u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u0627 ( Vedic math)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0647\u0646\u0627\u0643 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0645\u064A\u0632\u0627\u062A \u0646\u0638\u0627\u0645 \u0627\u0644\u0641\u064A\u062F\u064A\u0629 ,\u0627\u0644\u062A\u0645\u0627\u0633\u0643 ,\u0627\u0644\u0645\u0631\u0648\u0646\u0647 \u0641\u0649 \u062D\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0647 ,\u0627\u0644\u062E\u064A\u0627\u0644 \u0648 \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 ,\u064A\u0639\u0632\u0632 \u0627\u0644\u0625\u0628\u062F\u0627\u0639 ,\u0645\u062E\u0627\u0637\u0628\u0629 \u0643\u0644 \u0627\u0644\u0641\u064A\u0626\u0627\u062A ,\u0633\u0631\u0639\u0629 \u0627\u0644\u0628\u062F\u064A\u0647\u0629 ,\u0627\u0644\u0641\u0639\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u0633\u0631\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u062A\u0639\u0644\u0645 \u0645\u0643\u0639\u0628 \u0631\u0648\u0628\u064A\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0647\u0648 \u0639\u0628\u0627\u0631\u0629\u064C \u0639\u0646 \u0623\u062D\u062C\u064A\u0629\u064D \u0639\u0644\u0649 \u0634\u0643\u0644 \u0645\u0643\u0639\u0628\u064D \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u062A\u0633\u0639\u0629 \u0645\u0631\u0628\u0639\u0627\u062A\u064D \u0639\u0644\u0649 \u0643\u0644 \u062C\u0627\u0646\u0628\u064D. \u0639\u0646\u062F \u0641\u062A\u062D \u0627\u0644\u0639\u0644\u0628\u0629 \u0644\u0623\u0648\u0644 \u0645\u0631\u0629\u064D \u0648\u0625\u062E\u0631\u0627\u062C\u0647 \u0645\u0646\u0647\u0627\u060C \u0641\u0625\u0646 \u0643\u0644 \u062C\u0627\u0646\u0628\u064D \u0645\u0646 \u0627\u0644\u0645\u0643\u0639\u0628 \u064A\u062D\u0648\u064A \u0639\u0644\u0649 \u0645\u0631\u0628\u0639\u0627\u062A\u064D \u0645\u062A\u0634\u0627\u0628\u0647\u0629\u064D \u0628\u0627\u0644\u0644\u0648\u0646. \u0627\u0644\u0647\u062F\u0641 \u0645\u0646 \u0627\u0644\u0644\u063A\u0632 \u0647\u0648 \u0625\u0639\u0627\u062F\u0629 \u0643\u0644 \u062C\u0627\u0646\u0628\u064D \u0625\u0644\u0649 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0623\u0635\u0644\u064A \u0628\u0639\u062F \u0623\u0646 \u062A\u0642\u0648\u0645 \u0628\u0625\u062F\u0627\u0631\u062A\u0647 \u0639\u062F\u0629 \u0645\u0631\u0627\u062A\u064D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_section_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u062D\u0627\u0633\u0628 \u0627\u0644\u0627\u0644\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0643\u0648\u0646\u0643 \u0637\u0641\u0644\u064B\u0627 \u0641\u064A \u0627\u0644\u0639\u0635\u0631 \u0627\u0644\u062D\u062F\u064A\u062B \u060C \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0642\u062F \u0627\u0633\u062A\u062E\u062F\u0645\u062A \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0623\u0648 \u0634\u0627\u0647\u062F\u062A\u0647\u0627 \u0623\u0648 \u0642\u0631\u0623\u062A \u0639\u0646\u0647\u0627. \u0647\u0630\u0627 \u0644\u0623\u0646\u0647\u0627 \u062C\u0632\u0621 \u0644\u0627 \u064A\u062A\u062C\u0632\u0623 \u0645\u0646 \u0648\u062C\u0648\u062F\u0646\u0627 \u0627\u0644\u064A\u0648\u0645\u064A.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " MS Office \u0645\u064A\u0643\u0631\u0648\u0633\u0648\u0641\u062A \u0627\u0648\u0641\u064A\u0633");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u064A\u062A\u0643\u0648\u0646 Microsoft Office \u0645\u0646 Microsoft Word \u060C \u0648\u0647\u064A \u0623\u062F\u0627\u0629 \u0642\u064A\u0627\u0633\u064A\u0629 \u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0643\u0644\u0645\u0627\u062A \u061B Microsoft Excel \u060C \u062D\u0632\u0645\u0629 \u062A\u0633\u062A\u062E\u062F\u0645 \u0644\u0625\u0646\u0634\u0627\u0621 \u0648\u062A\u062D\u0631\u064A\u0631 \u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0627\u0644\u0627\u0646\u062A\u0631\u0646\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0647\u064A \u0646\u0638\u0627\u0645 \u0627\u062A\u0635\u0627\u0644\u0627\u062A \u0639\u0627\u0644\u0645\u064A \u064A\u0633\u0645\u062D \u0628\u062A\u0628\u0627\u062F\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0628\u064A\u0646 \u0634\u0628\u0643\u0627\u062A \u0623\u0635\u063A\u0631 \u062A\u062A\u0635\u0644 \u0645\u0646 \u062E\u0644\u0627\u0644\u0647\u0627 \u0627\u0644\u062D\u0648\u0627\u0633\u064A\u0628 \u062D\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645. \u062A\u0639\u0645\u0644 \u0648\u0641\u0642 \u0623\u0646\u0638\u0645\u0629 \u0645\u062D\u062F\u062F\u0629 \u0648\u064A\u0639\u0631\u0641 \u0628\u0627\u0644\u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644 \u0627\u0644\u0645\u0648\u062D\u062F \u0648\u0647\u0648 \u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644 \u0625\u0646\u062A\u0631\u0646\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_section_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 (Web developer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 \u0647\u0648 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0630\u064A \u064A\u0646\u0637\u0648\u064A \u0639\u0644\u064A\u0647 \u062A\u0637\u0648\u064A\u0631 \u0645\u0648\u0642\u0639 \u0648\u064A\u0628 \u0644\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0623\u0648 \u0627\u0644\u0625\u0646\u062A\u0631\u0627\u0646\u062A. \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u062A\u0631\u0627\u0648\u062D \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 \u0645\u0646 \u062A\u0637\u0648\u064A\u0631 \u0635\u0641\u062D\u0629 \u062B\u0627\u0628\u062A\u0629 \u0648\u0627\u062D\u062F\u0629 \u0628\u0633\u064A\u0637\u0629 \u0645\u0646 \u0646\u0635 \u0639\u0627\u062F\u064A \u0625\u0644\u0649 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0648\u064A\u0628 \u0627\u0644\u0645\u0639\u0642\u062F\u0629 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0648\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " coding for kids \u062A\u0639\u0644\u064A\u0645 \u0628\u0631\u0645\u062C\u0629 \u0644\u0644\u0623\u0637\u0641\u0627\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0644\u0644\u0627\u0637\u0641\u0627\u0644 \u0645\u0646 6 \u0633\u0646\u0648\u0627\u062A \u0648\u0627\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646 \u0628\u0634\u0643\u0644 \u0633\u0647\u0644 \u0648\u0628\u0633\u064A\u0637, \u0634\u0631\u062D \u0623\u063A\u0644\u0628 \u0627\u0644\u0645\u0641\u0627\u0647\u064A\u0645 \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629 \u0648\u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0639\u0644\u0649 \u0623\u0644\u0639\u0627\u0628 \u0648\u0623\u0646\u0634\u0637\u0629 \u0648\u0631\u0642\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0633\u0643\u0631\u0627\u062A\u0634 SCRATCH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0633\u0643\u0631\u0627\u062A\u0634 SCRATCH \u0639\u0628\u0627\u0631\u0629 \u0639\u0646 \u0628\u064A\u0626\u0629 \u0628\u0631\u0645\u062C\u0629 \u0633\u0647\u0644\u0629 \u0648 \u0628\u0633\u064A\u0637\u0629 \u060C \u0645\u0648\u062C\u0647\u0629 \u0623\u0633\u0627\u0633\u0627 \u0644\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646 \u0648 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u062A\u0647\u062F\u0641 \u0625\u0644\u0649 \u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0625\u0628\u062F\u0627\u0639 \u0648 \u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0644\u062F\u0649 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0648 \u0627\u0644\u0643\u0628\u0627\u0631 \u0645\u0646 \u063A\u064A\u0631 \u0630\u0648\u064A \u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0635 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_section_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0642 \u064A\u0642\u062F\u0651\u0645 \u0644\u0643\u0645 \u0623\u0647\u0645\u0651 \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0646\u0651\u062D\u0648 \u0648\u0627\u0644\u0625\u0645\u0644\u0627\u0621 \u0628\u0634\u0643\u0644 \u0645\u0628\u0633\u0651\u0637 \u0648\u0628\u0635\u0648\u0631\u0629 \u0645\u0646\u0638\u0651\u0645\u0629 \u0645\u0639 \u0623\u0645\u062B\u0644\u0629 \u0648\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0639\u0645\u0644\u064A\u0651\u0629. \u0648\u064A\u0634\u0645\u0644 \u0646\u0648\u0639\u064A\u0646 \u0645\u0646 \u0627\u0644\u0642\u0648\u0627\u0639\u062F: \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0646\u0651\u062D\u0648 \u0648\u0627\u0644\u0625\u0645\u0644\u0627\u0621. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0627\u0644\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u062A\u062A\u0636\u0645\u0646 \u0643\u0644 \u0645\u0627 \u062A\u062D\u062A\u0627\u062C \u0627\u0644\u064A\u0647 \u0645\u0646 \u0627\u062C\u0644 \u0627\u0646\u0637\u0644\u0627\u0642\u0629 \u0642\u0648\u064A\u0629 \u0641\u0642\u062F \u0627\u062E\u062A\u0631\u0646\u0627 \u0644\u0643 \u062F\u0631\u0648\u0633 \u062A\u062D\u062A\u0627\u062C \u0627\u0644\u064A\u0647\u0627 \u0628\u0634\u0643\u0644 \u062F\u0627\u0626\u0645 \u0648\u0633\u0648\u0641 \u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u063A\u0644\u0628 \u0645\u0641\u0631\u062F\u0627\u062A\u0647\u0627 \u0628\u0634\u0643\u0644 \u064A\u0648\u0645\u064A \u0648\u0645\u062A\u0643\u0631\u0631 . \u0648\u0647\u0630\u0647 \u0627\u0644\u062F\u0631\u0648\u0633 \u0647\u064A \u0627\u0644\u062D\u062C\u0631 \u0627\u0644\u0627\u0633\u0627\u0633 \u0644\u062A\u0639\u0644\u0645 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 .");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u062A\u0639\u0644\u0651\u0645 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0641\u0631\u0646\u0633\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0623\u0645\u0633\u0649 \u0627\u0644\u062A\u062D\u062F\u064F\u062B \u0628\u0644\u063A\u0629 \u0623\u062C\u0646\u0628\u064A\u0629 \u0648\u0627\u062D\u062F\u0629 \u063A\u064A\u0631 \u0643\u0627\u0641 \u0641\u064A \u064A\u0648\u0645\u0646\u0627 \u0647\u0630\u0627\u060C \u0641\u0627\u0644\u062A\u062D\u062F\u062B \u0628\u0639\u062F\u0629 \u0644\u063A\u0627\u062A \u064A\u062A\u064A\u062D \u0644\u0643\u0644\u0651 \u0634\u062E\u0635 \u0632\u064A\u0627\u062F\u0629 \u0641\u0631\u0635\u0647 \u0641\u064A \u0633\u0648\u0642 \u0627\u0644\u0639\u0645\u0644 \u0641\u064A \u0628\u0644\u062F\u0647 \u0648\u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062F\u0648\u0644\u064A \u062A\u062D\u062A\u0644\u0651 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0641\u0631\u0646\u0633\u064A\u0629 \u0627\u0644\u0645\u0631\u062A\u0628\u0629 \u0627\u0644\u062B\u0627\u0644\u062B\u0629 \u0641\u064A \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0644\u063A\u0627\u062A \u0627\u0644\u0623\u0643\u062B\u0631 \u062A\u062F\u0627\u0648\u0644\u064B\u0627 \u0639\u0644\u0649 \u0634\u0628\u0643\u0629 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor() {
        this.programSelect = "";
    }
    ngOnInit() {
    }
    onclicked(feature) {
        this.programSelect = feature;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 101, vars: 4, consts: [["id", "one"], [1, "row", "mx-5", "mt-2"], [1, "col-md-6", "my-5"], [1, ""], [1, "fs-2", "mt-2"], ["routerLink", "../program", 1, "btn", "btn-primary", "btn-lg", "rounded-pill"], [1, "col-md-6"], ["src", "/assets/img/courses.jpg", "alt", "", 1, "img-fluid", "d-none", "d-md-block"], ["id", "two ", 1, "row"], ["id", "first", 1, "container", "col-md-10"], [1, "work", "row", "bg-light", "py-2"], [1, "col-md-2", "mx-4"], [1, "fas", "fa-arrow-left", "fa-2x", "mt-2", "d-none", "d-md-block", "text-danger"], [1, "col-md-2", "d-flex", "d-md-block", "px-2"], [1, "fas", "fa-microscope", "fa-5x", "mb-2", "text-primary", "p-2"], [1, "fas", "fa-hand-pointer", "fa-5x", "mb-2", "text-primary", "p-2"], [1, "fas", "fa-user-graduate", "fa-5x", "mb-2", "p-2", "text-primary"], [1, "fas", "fa-award", "fa-5x", "mb-2", "text-primary", "p-2"], [1, "container2", "p-0"], [1, "info", "bg-warning", "pt-2", "px-5", "text-center", "pb-3", 2, "height", "fit-content"], [1, "pt-5", "fs-1"], [1, "fs-3", "mt-4"], ["id", "three"], [1, "container", "mt-5"], [1, "mt-5"], [1, "lead"], [1, "grid"], [1, "btn", "btn-outline-primary", "rounded-pill", "p-3", "m-2", 3, "click"], ["id", "yothymath", "class", "mt-5", 4, "ngIf"], ["id", "computer", "class", "mt-5 ", 4, "ngIf"], ["id", "web", "class", "mt-5 ", 4, "ngIf"], ["id", "lang", "class", "mt-5 ", 4, "ngIf"], ["id", "five", 1, "mt-5"], [1, "container-fluid"], [1, "row"], [1, "col-md-8", "bg-light", "text-center"], [1, "content", "mt-5"], [1, "fs-1", "m-3"], [1, "lead", "m-3"], [1, "row", "m-5"], [1, "col-md-4", "mb-3"], [1, "far", "fa-comment", "fa-4x", "text-primary", "m-3"], [1, "text-center"], [1, "col-md-4"], [1, "fas", "fa-book-reader", "m-3", "fa-4x", "text-primary"], [1, "fas", "fa-briefcase", "m-3", "fa-4x", "text-primary"], [1, "col-md-4", "mt-5"], ["src", "/assets/img/WhatsApp Image 2022-01-29 at 1.44.53 PM.jpeg/", "alt", "", 1, "img-fluid", "mt-5"], ["id", "yothymath", 1, "mt-5"], [1, "row", "mx-3"], [1, "card", 2, "width", "18rem"], ["src", "/assets/img/271340835_1923144161208809_2232785223819993671_n.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], [1, "card-body", "px-3"], [1, "card-title"], [1, "card-text"], ["src", "/assets/img/271633403_2429958527140230_3076200020634969479_n.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], [1, "card-text", "my-3"], ["src", "/assets/img/\u0645\u0643\u0639\u0628-\u0631\u0648\u0628\u064A\u0643.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["id", "computer", 1, "mt-5"], [1, "collapse1"], [1, "row", "mx-5"], [1, "col"], ["src", "/assets/img/download (1).jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["src", "/assets/img/images.jpeg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["src", "/assets/img/New Project (90)(139).jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["id", "web", 1, "mt-5"], ["src", "/assets/img/203b0fb7-ae46-4ba7-a69e-8cc445b89db2.o.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["src", "/assets/img/coding-classes-for-kids.png", "alt", "...", 1, "card-img-top", 2, "height", "200px"], [1, "card-text", "my-4"], ["src", "/assets/img/6nYzMLXUjkaVomaBZ8sNRZ.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["id", "lang", 1, "mt-5"], [1, "collapse2"], ["src", "/assets/img/\u0635\u0648\u0631\u0629_\u062F\u0648\u0631\u0629_\u0642\u0648\u0627\u0639\u062F_\u0627\u0644\u0644\u063A\u0629_\u0627\u0644\u0639\u0631\u0628\u064A\u0629_\u0623\u0641\u0642\u064A\u0629.jpg"], ["src", "/assets/img/English Basics.png", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["src", "/assets/img/0909090909-627x400.png"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0627\u0637\u0645\u062D\u060C \u062A\u0639\u0644\u0651\u0645\u060C \u062A\u0642\u062F\u0651\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0645\u0647\u0627\u0631\u0627\u062A\u0643 \u0627\u0644\u0639\u0645\u0644\u064A\u0651\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0627\u0644\u062A\u062D\u0627\u0642 \u0628\u0628\u0631\u0627\u0645\u062C \u062A\u062F\u0631\u064A\u0628\u064A\u0651\u0629 \u0645\u062A\u0637\u0648\u0651\u0631\u0629\u060C \u0648\u0627\u0643\u062A\u0633\u0628 \u0634\u0647\u0627\u062F\u0627\u062A \u062A\u0633\u0627\u0639\u062F\u0643 \u0644\u0644\u062F\u062E\u0648\u0644 \u0641\u064A \u0633\u0648\u0642 \u0627\u0644\u0639\u0645\u0644 \u0648\u062A\u0637\u0648\u064A\u0631 \u0645\u0633\u064A\u0631\u062A\u0643 \u0627\u0644\u0645\u0647\u0646\u064A\u0629.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0643\u062A\u0634\u0641 \u0627\u0644\u0628\u0631\u0627\u0645\u062C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0647\u0646\u0627 \u062A\u0628\u062F\u0623 \u0631\u062D\u0644\u062A\u0643 \u0645\u0646 \u0627\u0644\u0639\u0650\u0644\u0645 \u0625\u0644\u0649 \u0627\u0644\u0639\u064E\u0645\u0644 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0627\u0643\u062A\u0634\u0641 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0645\u062C\u0645\u0648\u0639\u0629 \u0643\u0628\u064A\u0631\u0629 \u0648\u0645\u062A\u0646\u0648\u0639\u0629 \u0645\u0646 \u0623\u0643\u062B\u0631 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u062E\u0635\u0635\u0627\u062A \u0643\u0641\u0627\u0621\u0629 \u0648\u062C\u0648\u062F\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0627\u0644\u062A\u062D\u0642 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0628\u0623\u062D\u062F \u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0644\u062A\u0646\u0636\u0645\u0651 \u0625\u0644\u0649 \u0645\u062C\u062A\u0645\u0639 \u0645\u0646 \u0627\u0644\u0645\u062A\u0639\u0644\u0651\u0645\u064A\u0646 \u0627\u0644\u0631\u0651\u0627\u063A\u0628\u064A\u0646 \u0628\u0627\u0644\u062A\u0637\u0648\u0651\u0631\u060C \u0645\u062B\u0644\u0643 \u062A\u0645\u0627\u0645\u064B\u0627. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u062A\u0639\u0644\u0651\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0645\u0639 \u0623\u0643\u062B\u0631 \u0627\u0644\u0645\u062F\u0631\u0651\u0628\u064A\u0646 \u0643\u0641\u0627\u0621\u0629 \u0644\u062A\u0635\u0642\u0644 \u0645\u0647\u0627\u0631\u0627\u062A\u0643 \u0627\u0644\u0645\u0647\u0646\u064A\u0629 \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0651\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u0634\u0647\u0627\u062F\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u0644\u062A\u0639\u0632\u0651\u0632 \u0641\u0631\u0635\u0643 \u0641\u064A \u0625\u0637\u0644\u0627\u0642 \u0645\u0633\u064A\u0631\u062A\u0643 \u0627\u0644\u0645\u0647\u0646\u064A\u0629\u060C \u0623\u0648 \u062A\u0646\u0645\u064A\u062A\u0647\u0627 \u0648\u062A\u0637\u0648\u064A\u0631\u0647\u0627. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u0627\u0635\u0642\u0644 \u0645\u0647\u0627\u0631\u0627\u062A\u0643 \u0627\u0644\u0639\u0645\u0644\u064A\u0651\u0629 \u0645\u0639 \u062A\u062E\u0635\u0651\u0635\u0627\u062A \u0627\u0644\u0644\u0648\u062A\u0633 \u0627\u0643\u0627\u062F\u064A\u0645\u064A\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n\u0642\u0645 \u0628\u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0629 \u0645\u0647\u0646\u064A\u0629 \u0645\u062D\u062F\u062F\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0633\u0644\u0633\u0644\u0629 \u0645\u0646 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u0631\u0627\u0628\u0637\u0629. \u062C\u0633\u0651\u062F \u0623\u0641\u0643\u0627\u0631\u0643 \u0639\u0644\u0649 \u0623\u0631\u0636 \u0627\u0644\u0648\u0627\u0642\u0639 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0645\u0634\u0627\u0631\u064A\u0639 \u0639\u0645\u0644\u064A\u0651\u0629 \u0648\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0634\u0647\u0627\u062F\u0629 \u062A\u062E\u0635\u0635 \u0644\u0625\u0636\u0627\u0641\u062A\u0647\u0627 \u0625\u0644\u0649 \u0633\u064A\u0631\u062A\u0643 \u0627\u0644\u0630\u0627\u062A\u064A\u0629.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u0627\u0644\u062F\u0651\u0648\u0631\u0627\u062A \u0627\u0644\u0623\u0643\u062B\u0631 \u0637\u0644\u0628\u0627\u064B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u0627\u062E\u062A\u0631 \u0645\u0646 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0644\u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A\u0643 \u0641\u064A \u0645\u062C\u0627\u0644\u0627\u062A \u0645\u062E\u062A\u0644\u0641\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_59_listener() { return ctx.onclicked("usy"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0630\u0647\u0646\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_61_listener() { return ctx.onclicked("comp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u062D\u0627\u0633\u0628 \u0627\u0644\u0627\u0644\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_63_listener() { return ctx.onclicked("web"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_65_listener() { return ctx.onclicked("lang"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u0627\u0644\u0644\u063A\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HomeComponent_section_67_Template, 26, 0, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, HomeComponent_section_68_Template, 27, 0, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, HomeComponent_section_69_Template, 27, 0, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, HomeComponent_section_70_Template, 27, 0, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "section", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " \u062A\u0642\u062F\u0651\u0645 \u0645\u0639 \u0627\u0643\u0627\u062F\u064A\u0645\u064A\u0629 \u0627\u0644\u0644\u0648\u062A\u0633 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " \u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0645\u062C\u062A\u0645\u0639 \u0645\u062A\u0639\u0644\u0651\u0645\u064A \u0627\u0644\u0648\u062A\u0633 \u0644\u062A\u062D\u062F\u062B \u0646\u0642\u0644\u0629 \u0646\u0648\u0639\u064A\u0629 \u0641\u064A \u0645\u0633\u064A\u0631\u062A\u0643 \u0627\u0644\u0645\u0647\u0646\u064A\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0645\u0635\u0645\u0651\u0645\u0629 \u0644\u062A\u0632\u0648\u064A\u062F\u0643 \u0628\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062D\u062A\u0627\u062C\u0647\u0627 \u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u0637\u0627\u0642\u0627\u062A\u0643 \u0648\u0625\u0645\u0643\u0627\u0646\u064A\u0651\u0627\u062A\u0643 \u0627\u0644\u0630\u0627\u062A\u064A\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " \u0645\u062D\u062A\u0648\u0649 \u0639\u0627\u0644\u064A \u0627\u0644\u062C\u0648\u062F\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " \u0627\u0643\u062A\u0633\u0628 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0641\u064A \u0633\u0648\u0642 \u0627\u0644\u0639\u0645\u0644 \u0645\u0639 \u0646\u062E\u0628\u0629 \u0645\u0646 \u0623\u0641\u0636\u0644 \u0627\u0644\u062E\u0628\u0631\u0627\u0621 \u0648\u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " \u0627\u0644\u062A\u0651\u0639\u0644\u0651\u0645 \u0627\u0644\u0645\u0631\u0646 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u062A\u0639\u0644\u0651\u0645 \u0623\u064A\u0646\u0645\u0627 \u0643\u0646\u062A \u0648\u0641\u064A \u0623\u064A \u0648\u0642\u062A\u060C \u0639\u0628\u0631 \u062D\u0627\u0633\u0648\u0628\u0643 \u0627\u0644\u0634\u062E\u0635\u064A \u0623\u0648 \u0647\u0627\u062A\u0641\u0643 \u0627\u0644\u0645\u062A\u0646\u0642\u0644. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " \u0627\u0644\u062C\u0627\u0647\u0632\u064A\u0651\u0629 \u0627\u0644\u0645\u0647\u0646\u064A\u0651\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " \u062A\u0645\u064A\u0651\u0632 \u0641\u064A \u0633\u0648\u0642 \u0627\u0644\u0639\u0645\u0644 \u0628\u0645\u0647\u0627\u0631\u0627\u062A\u0643 \u0648\u0634\u063A\u0641\u0643 \u0644\u0644\u062A\u0639\u0644\u0645 \u0648\u0627\u0644\u062A\u0637\u0648\u0631. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.programSelect === "usy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.programSelect === "comp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.programSelect === "web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.programSelect === "lang");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 744:
/*!*************************************************************!*\
  !*** ./src/app/program/computer/basics/basics.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicsComponent": () => (/* binding */ BasicsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BasicsComponent {
    constructor() {
        this.progSelect = 'basic';
    }
    ngOnInit() {
    }
}
BasicsComponent.ɵfac = function BasicsComponent_Factory(t) { return new (t || BasicsComponent)(); };
BasicsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicsComponent, selectors: [["app-basics"]], decls: 51, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "p-3", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/download (1).jpg"], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"], ["src", "/assets/img/basic-computer-training-banner.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/Basic-parts-of-a-Computer.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/maxresdefault2.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"]], template: function BasicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u0644\u062D\u0627\u0633\u0628 \u0627\u0622\u0644\u0644\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0644\u0642\u062F \u0623\u0635\u0628\u062D \u0627\u0644\u062D\u0627\u0633\u0628 \u0627\u0622\u0644\u0644\u064A \u0627\u0644\u064A\u0648\u0645 \u0623\u062F\u0627\u0629 \u0631\u0626\u064A\u0633\u064A\u0629 \u0641\u064A \u0643\u0644 \u0623\u0646\u0648\u0627\u0639 \u0627\u0623\u0644\u0646\u0634\u0637\u0629 \u0644\u0645\u062E\u062A\u0644\u0641 \u0645\u062C\u0627\u0627\u0644\u062A . \u0648\u064A\u0639\u0631\u0641 \u0627\u0644\u062D\u0627\u0633\u0628 \u0627\u0622\u0644\u0644\u064A \u0628\u0623\u0646\u0647 \u0623\u062F\u0627\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u062A\u0642\u0628\u0644 \u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A\u060C \u0645\u0639\u0627\u0644\u062C\u062A\u0647\u0627 \u060C \u062D\u0641\u0638\u0647\u0627\u060C \u0648\u0625\u0646\u062A\u0627\u062C \u0645\u062E\u0631\u062C\u0627\u062A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u062D\u0627\u0633\u0628 \u0627\u0644\u0627\u0644\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0643\u0648\u0646\u0643 \u0637\u0641\u0644\u064B\u0627 \u0641\u064A \u0627\u0644\u0639\u0635\u0631 \u0627\u0644\u062D\u062F\u064A\u062B \u060C \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0642\u062F \u0627\u0633\u062A\u062E\u062F\u0645\u062A \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0623\u0648 \u0634\u0627\u0647\u062F\u062A\u0647\u0627 \u0623\u0648 \u0642\u0631\u0623\u062A \u0639\u0646\u0647\u0627. \u0647\u0630\u0627 \u0644\u0623\u0646\u0647\u0627 \u062C\u0632\u0621 \u0644\u0627 \u064A\u062A\u062C\u0632\u0623 \u0645\u0646 \u0648\u062C\u0648\u062F\u0646\u0627 \u0627\u0644\u064A\u0648\u0645\u064A.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u064A\u0642\u0648\u0645 \u0627\u0644\u062D\u0627\u0633\u0628 \u0627\u0622\u0644\u0644\u064A \u0627\u0648 \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0628\u0645\u0639\u0627\u0644\u062C\u0629 \u062A\u0642\u0627\u0631\u064A\u0631\u0643 \u062A\u0628\u0639\u0627 \u0623\u0644\u0648\u0627\u0645\u0631\u0643 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0644\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629 \u0641\u064A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C\n\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0643\u0648\u0636\u0639 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0641\u064A \u0627\u0644\u0648\u0633\u0637 \u0648\u0645\u0636\u0627\u0639\u0641\u0629 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0628\u064A\u0646 \u0627\u0623\u0644\u0633\u0637\u0631. \u0625\u0646 \u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u062A\u063A\u064A\u0631 \u0645\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u064A\n\u0642\u0645\u062A \u0628\u0625\u062F\u062E\u0627\u0644\u0647\u0627 \u060C \u0645\u062B\u0644 \u060C \u062A\u063A\u064A\u064A\u0631 \u0645\u0643\u0627\u0646 \u0627\u0644\u0646\u0635\u060C \u0641\u0631\u0632 \u0642\u0627\u0626\u0645\u0629 \u0645\u0627\u060C \u0623\u0648 \u062A\u0637\u0628\u064A\u0642 \u0628\u0639\u0636 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0629 \u0623\u0648 \u064A\u0645\u0643\u0646\u0643 \u0623\u0646 \u062A\u0642\u0648\u0645\n\u0628\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0646\u0635 \u0623\u0648 \u0628\u0639\u0636 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0646 \u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0622\u062E\u0631 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u062D\u0627\u0633\u0628 \u0627\u0644\u0622\u0644\u064A computer \u064A\u062A\u0643\u0648\u0646 \u0627\u0644\u062D\u0627\u0633\u0628 \u0627\u0644\u0622\u0644\u064A \u0645\u0646 \u0645\u0643\u0648\u0646\u064A\u0646 \u0623\u0633\u0627\u0633\u064A\u0646 \u0648 \u0647\u0645 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629 \u0633\u0648\u0641\u062A \u0648\u064A\u0631 \u0623\u064A \u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0646\u0638\u0627\u0645 \u0648 \u0623\u064A \u0634\u064A\u0626 \u064A\u0645\u0643\u0646 \u062D\u0644\u0647 \u0628\u0634\u0643\u0644 \u0628\u0631\u0645\u062C\u064A \u0648 \u0645\u0643\u0648\u0646\u0627\u062A \u0645\u0627\u062F\u064A\u0629 \u064A\u0639\u0646\u064A \u0647\u0627\u0631\u062F \u0648\u064A\u0631 \u0648 \u0647\u0630\u0647 \u062A\u0639\u0646\u064A \u0627\u0644\u0642\u0637\u0639 \u0627\u0644\u0645\u0644\u0645\u0648\u0633\u0629 \u0641\u064A \u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u0648\u0633\u0648\u0641 \u0646\u0642\u0648\u0645 \u0628\u0634\u0631\u062D\u0647\u0627 \u0628\u0627\u0644\u062A\u0641\u0635\u064A\u0644 \u0643\u0644 \u0645\u0643\u0648\u0646 \u0639\u0644\u0649 \u062D\u062F\u0649. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u0645\u0627\u062F\u064A\u0629 \u0647\u0627\u0631\u062F \u0648\u064A\u0631 (Hard Ware) \u0648 \u062A\u0639\u0631\u0641 \u0623\u064A\u0636\u0627\u064B \u0628\u0627\u0644\u0645\u0639\u062F\u0627\u062A \u0648\u0647\u064A \u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u0627\u0644\u0645\u0644\u0645\u0648\u0633\u0629 \u0648 \u062A\u062A\u0645\u062B\u0644 \u0641\u064A : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u0648\u062D\u062F\u0629 \u0627\u0644\u0625\u062F\u062E\u0627\u0644 input unit \u0645\u062B\u0644 (\u0627\u0644\u0641\u0623\u0631\u0629, \u0627\u0644\u0643\u064A\u0628\u0648\u0631\u062F, \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0648\u062D\u062F\u0629 \u0627\u0644\u0625\u062E\u0631\u0627\u062C Output unit \u0645\u062B\u0644 (\u0627\u0644\u0634\u0627\u0634\u0629, \u0627\u0644\u0637\u0627\u0628\u0639\u0629, \u0627\u0644\u0633\u0645\u0627\u0639\u0627\u062A). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0648\u062D\u062F\u0629 \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0645\u0631\u0643\u0632\u064A\u0629 CPU \u0648 \u0647\u064A \u0625\u062E\u062A\u0635\u0627\u0631 (Central Processing Unit). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0648 \u062A\u0646\u0642\u0633\u0645 \u0644\u0642\u0633\u0645\u064A\u0646 \u0648 \u0647\u0645\u0627 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629 \u0645\u062B\u0644 (RAM, ROM) \u0648\u0648\u062D\u062F\u0629 \u062A\u062E\u0632\u064A\u0646 \u062E\u0627\u0631\u062C\u064A\u0629 \u0645\u062B\u0644 (\u0627\u0644\u0641\u0644\u0627\u0634\u0629 USB, \u0627\u0644\u0623\u0642\u0631\u0627\u0635 CD, DVD). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629 \u0633\u0648\u0641\u062A \u0648\u064A\u0631 (Soft Ware) \u062A\u0646\u0642\u0633\u0645 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629 \u0625\u0644\u0649 \u0642\u0633\u0645\u064A\u0646 \u0648 \u0647\u0645\u0627 \u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0646\u0638\u0627\u0645 \u0648 \u0628\u0631\u0627\u0645\u062C \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0646\u0638\u0627\u0645 \u0648\u0647\u064A \u0623\u062D\u062F \u0627\u0646\u0648\u0627\u0639 \u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0627\u0644\u0645\u062E\u0635\u0635\u0629 \u0644\u064A\u0639\u0645\u0644 \u062C\u0647\u0627\u0632 \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0645\u0646 \u062E\u0644\u0627\u0644\u0647\u0627. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u0628\u0631\u0627\u0645\u062C \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0648\u0647\u064A \u062A\u0644\u0643 \u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u062A\u064A \u064A\u062A\u0645 \u0625\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 \u0645\u062B\u0644 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0623\u0648 \u062D\u062A\u0649 \u0627\u0644\u062A\u0635\u0641\u062D \u0639\u0628\u0631 \u0627\u0644\u0627\u0646\u062A\u0631\u0646\u062A \u0623\u0648 \u0644\u0639\u0628 \u0627\u0644\u0623\u0644\u0639\u0627\u0628. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0UsbUJBQW1COztFQUVuQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3Qjs7QUFFMUI7OztDQUdDO0VBQ0Msa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjOztFQUVkLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEI7OztDQUNDO0VBQ0MsY0FBYztBQUNoQjs7O0NBR0M7RUFDQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7O0VBRWQsVUFBVTtFQUNWLFNBQVM7O0VBRVQsV0FBVztBQUNiOzs7Q0FFQztFQUNDLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOzs7Q0FFQztFQUNDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7O0VBRW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNkJBQTZCOztBQUUvQjs7O0NBRUM7R0FDRSxpQkFBaUI7R0FDakIsb0JBQW9CO0dBQ3BCLFdBQVc7R0FDWCxzQkFBc0I7O0FBRXpCIiwiZmlsZSI6ImJhc2ljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuXHJcbiAgZGlzcGxheSA6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuXHJcbiAuY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodCA6IDIxNXB4O1xyXG5cclxuICBtYXJnaW4gOiAzMHB4IDEwcHg7XHJcbiAgcGFkZGluZyA6IDIwcHggMTVweDtcclxuXHJcbiAgZGlzcGxheSA6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgYm94LXNoYWRvdyA6IDAgNXB4IDIwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gIHRyYW5zaXRpb24gOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlci1yYWRpdXMgOiAxNXB4O1xyXG59XHJcbiAuY2FyZDpob3ZlciB7XHJcbiAgaGVpZ2h0IDogNDIwcHg7XHJcbn1cclxuXHJcblxyXG4gLmNhcmQgLmltYWdlIHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gIHdpZHRoIDogNTAwcHg7XHJcbiAgaGVpZ2h0IDogNTAwcHg7XHJcblxyXG4gIHRvcCA6IC00MCU7XHJcbiAgbGVmdDogOHB4O1xyXG5cclxuICB6LWluZGV4IDogMTtcclxufVxyXG5cclxuIC5jYXJkIC5pbWFnZSBpbWcge1xyXG4gIHdpZHRoIDogNTAwcHg7XHJcbiAgaGVpZ2h0OjIxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXMgOiAxNXB4O1xyXG59XHJcblxyXG4gLmNhcmQgLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgdG9wIDogLTE0MHB4O1xyXG4gIHBhZGRpbmcgOiAxMHB4IDE1cHg7XHJcbiAgY29sb3IgOiAjMTExO1xyXG4gIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcblxyXG4gIHZpc2liaWxpdHkgOiBoaWRkZW47XHJcbiAgb3BhY2l0eSA6IDA7XHJcbiAgdHJhbnNpdGlvbiA6IDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG59XHJcblxyXG4gLmNhcmQ6aG92ZXIgLmNvbnRlbnQge1xyXG4gICBtYXJnaW4tdG9wIDogMzBweDtcclxuICAgdmlzaWJpbGl0eSA6IHZpc2libGU7XHJcbiAgIG9wYWNpdHkgOiAxO1xyXG4gICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2991:
/*!*************************************************************!*\
  !*** ./src/app/program/computer/coding/coding.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodingComponent": () => (/* binding */ CodingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CodingComponent {
    constructor() {
        this.progSelect = 'coding';
    }
    ngOnInit() {
    }
}
CodingComponent.ɵfac = function CodingComponent_Factory(t) { return new (t || CodingComponent)(); };
CodingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodingComponent, selectors: [["app-coding"]], decls: 53, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/coding-classes-for-kids.png"], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"], ["src", "/assets/img/programming-for-kids-blog.png", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/coding_20200102.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/6nYzMLXUjkaVomaBZ8sNRZ.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"]], template: function CodingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " coding for kids \u062A\u0639\u0644\u064A\u0645 \u0628\u0631\u0645\u062C\u0629 \u0644\u0644\u0623\u0637\u0641\u0627\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0623\u0635\u0628\u062D\u062A \u0645\u0647\u0627\u0631\u0629 \u0648\u0627\u062C\u0628 \u062A\u0639\u0644\u0645\u0647\u0627 \u0627\u0644\u0627\u0646. \u0648\u0644\u0627\u0646 \u0627\u0644\u0637\u0641\u0648\u0644\u0629 \u0647\u064A \u0627\u0641\u0636\u0644 \u0648\u0642\u062A \u0644\u0628\u062F\u0621 \u062A\u0639\u0644\u0645 \u0639\u0644\u0648\u0645 \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0648\u0643\u064A\u0641\u064A\u0629 \u0639\u0645\u0644\u0647\u0627 \u0648\u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0641\u0643\u064A\u0631 \u0648\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0630\u0643\u0627\u0621 \u0644\u0644\u0637\u0641\u0644 \u0648\u0627\u0644\u0625\u0628\u062F\u0627\u0639 \u0648 \u062A\u062C\u0647\u064A\u0632\u0647 \u0644\u0644\u062A\u0641\u0643\u064A\u0631 \u0641\u0649 \u062D\u0644 \u0627\u0644\u0645\u0634\u0627\u0643\u0644 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Coding For Kids \u062A\u0639\u0644\u064A\u0645 \u0628\u0631\u0645\u062C\u0629 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 \u0648\u0627\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0644\u0644\u0627\u0637\u0641\u0627\u0644 \u0645\u0646 6 \u0633\u0646\u0648\u0627\u062A \u0648\u0627\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646 \u0628\u0634\u0643\u0644 \u0633\u0647\u0644 \u0648\u0628\u0633\u064A\u0637, \u0634\u0631\u062D \u0623\u063A\u0644\u0628 \u0627\u0644\u0645\u0641\u0627\u0647\u064A\u0645 \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629 \u0648\u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0639\u0644\u0649 \u0623\u0644\u0639\u0627\u0628 \u0648\u0623\u0646\u0634\u0637\u0629 \u0648\u0631\u0642\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0633\u062A\u0639\u0645\u0644 \u0647\u0630\u0647 \u0627\u0644\u062F\u0648\u0631\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629 \u0639\u0644\u0649 \u062A\u0637\u0648\u064A\u0631 \u0639\u0642\u0644 \u0627\u0644\u0637\u0641\u0644 \u0648\u062A\u0639\u0648\u064A\u062F\u0647 \u0639\u0644\u0649 \u0627\u0644\u062A\u062D\u062F\u064A\u0627\u062A \u0645\u0646\u0630 \u0627\u0644\u0635\u063A\u0631 . \u0633\u0648\u0641 \u064A\u062A\u0639\u0644\u0645 \u0643\u064A\u0641\u064A\u0629 \u0625\u0646\u0634\u0627\u0621 \u0623\u0644\u0639\u0627\u0628 \u0645\u062F\u0647\u0634\u0629 \u0648\u0635\u0648\u0631 \u0648\u0623\u063A\u0627\u0646\u064A \u0645\u062A\u062D\u0631\u0643\u0629 \u0641\u064A \u062F\u0642\u0627\u0626\u0642 \u0645\u0639\u062F\u0648\u062F\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0648\u0627\u062C\u0647\u0629 \"\u0627\u0644\u0633\u062D\u0628 \u0648\u0627\u0644\u0625\u0641\u0644\u0627\u062A\" \u0627\u0644\u0628\u0633\u064A\u0637\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u062A\u0639\u0644\u064A\u0645 \u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0628\u0631\u0645\u062C\u0629 \u0627\u0644\u062D\u0627\u0633\u0628 \u0627\u0644\u0622\u0644\u0649 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 \u0645\u0646 6 \u0633\u0646\u0648\u0627\u062A \u0648\u0627\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0628\u0625\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0623\u0644\u0639\u0627\u0628 \u0628\u0637\u0631\u064A\u0642\u0629 \u0634\u064A\u0642\u0629 \u0648\u0645\u0645\u062A\u0639\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0639\u0644\u0649 \u0634\u0643\u0644 \u0623\u0644\u0639\u0627\u0628 \u0639\u0644\u0649 \u0645\u0648\u0642\u0639 Code dot org ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u062A\u0639\u0644\u0645 \u0623\u063A\u0644\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629 \u0628\u0634\u0643\u0644 \u0645\u0628\u0633\u0637 \u0645\u0645\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u0637\u0641\u0644 \u0645\u0646 \u062A\u0639\u0644\u0645 \u0627\u0649 \u0644\u063A\u0629 \u0628\u0631\u0645\u062C\u0629 \u0623\u062E\u0631\u0649 \u0628\u0633\u0647\u0648\u0644\u0629 \u0648\u064A\u0633\u0631 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0627\u0644\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0633\u0643\u0631\u0627\u062A\u0634 Scratch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u064A\u0639\u0631\u0641 \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0645\u062B\u0644 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0648\u0627\u0644\u062D\u0631\u0648\u0641 \u0648\u0628\u0639\u0636 \u0627\u0644\u0643\u0644\u0645\u0627\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u064A\u0639\u0631\u0641 \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u062D\u0627\u0633\u0628 \u0627\u0644\u0622\u0644\u0649 \u0645\u062B\u0644 \u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0645\u0627\u0648\u0633 \u0648\u0627\u0644\u0643\u064A\u0628\u0648\u0631\u062F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u0644\u0627 \u064A\u0634\u062A\u0631\u0637 \u0645\u0639\u0631\u0641\u0629 \u0645\u0633\u0628\u0642\u0629 \u0644\u0644\u0623\u0647\u0644 \u0628\u0627\u0644\u0628\u0631\u0645\u062C\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u062A\u0648\u0641\u0631 \u0625\u0646\u062A\u0631\u0646\u062A \u0628\u0633\u0631\u0639\u0629 \u0645\u0639\u0642\u0648\u0644\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u0625\u0633\u062A\u062E\u062F\u0627\u0645 google chrome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0UsbUJBQW1COztFQUVuQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3Qjs7QUFFMUI7OztDQUdDO0VBQ0Msa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjOztFQUVkLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEI7OztDQUNDO0VBQ0MsY0FBYztBQUNoQjs7O0NBR0M7RUFDQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7O0VBRWQsVUFBVTtFQUNWLFNBQVM7O0VBRVQsV0FBVztBQUNiOzs7Q0FFQztFQUNDLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOzs7Q0FFQztFQUNDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7O0VBRW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNkJBQTZCOztBQUUvQjs7O0NBRUM7R0FDRSxpQkFBaUI7R0FDakIsb0JBQW9CO0dBQ3BCLFdBQVc7R0FDWCxzQkFBc0I7O0FBRXpCIiwiZmlsZSI6ImNvZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuXHJcbiAgZGlzcGxheSA6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuXHJcbiAuY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodCA6IDIxNXB4O1xyXG5cclxuICBtYXJnaW4gOiAzMHB4IDEwcHg7XHJcbiAgcGFkZGluZyA6IDIwcHggMTVweDtcclxuXHJcbiAgZGlzcGxheSA6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgYm94LXNoYWRvdyA6IDAgNXB4IDIwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gIHRyYW5zaXRpb24gOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlci1yYWRpdXMgOiAxNXB4O1xyXG59XHJcbiAuY2FyZDpob3ZlciB7XHJcbiAgaGVpZ2h0IDogNDIwcHg7XHJcbn1cclxuXHJcblxyXG4gLmNhcmQgLmltYWdlIHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gIHdpZHRoIDogNTAwcHg7XHJcbiAgaGVpZ2h0IDogNTAwcHg7XHJcblxyXG4gIHRvcCA6IC00MCU7XHJcbiAgbGVmdDogOHB4O1xyXG5cclxuICB6LWluZGV4IDogMTtcclxufVxyXG5cclxuIC5jYXJkIC5pbWFnZSBpbWcge1xyXG4gIHdpZHRoIDogNTAwcHg7XHJcbiAgaGVpZ2h0OjIxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXMgOiAxNXB4O1xyXG59XHJcblxyXG4gLmNhcmQgLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgdG9wIDogLTE0MHB4O1xyXG4gIHBhZGRpbmcgOiAxMHB4IDE1cHg7XHJcbiAgY29sb3IgOiAjMTExO1xyXG4gIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcblxyXG4gIHZpc2liaWxpdHkgOiBoaWRkZW47XHJcbiAgb3BhY2l0eSA6IDA7XHJcbiAgdHJhbnNpdGlvbiA6IDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG59XHJcblxyXG4gLmNhcmQ6aG92ZXIgLmNvbnRlbnQge1xyXG4gICBtYXJnaW4tdG9wIDogMzBweDtcclxuICAgdmlzaWJpbGl0eSA6IHZpc2libGU7XHJcbiAgIG9wYWNpdHkgOiAxO1xyXG4gICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 688:
/*!********************************************************!*\
  !*** ./src/app/program/computer/computer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputerComponent": () => (/* binding */ ComputerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);



class ComputerComponent {
    constructor() {
        this.progSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.programSelected = 'computer';
    }
    ngOnInit() {
    }
    onClick(feature) {
        this.progSelect.emit(feature);
    }
}
ComputerComponent.ɵfac = function ComputerComponent_Factory(t) { return new (t || ComputerComponent)(); };
ComputerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComputerComponent, selectors: [["app-computer"]], outputs: { progSelect: "progSelect" }, decls: 46, vars: 0, consts: [["id", "computer", 1, "mt-3"], [1, "container"], [1, "fs-2", "btn", "btn-outline-primary", "rounded-pill", "text-center", "mx-auto", "my-3"], [1, "row", "mx-5"], [1, "col", "mb-2"], [1, "card", "mb-2", 2, "width", "14rem"], ["src", "/assets/img/download (1).jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], [1, "card-body", "px-3"], [1, "card-title"], [1, "card-text"], ["routerLink", "./basics", 1, "btn", "btn-primary", "mt-4"], [1, "col"], [1, "card", 2, "width", "14rem"], ["src", "/assets/img/WhatsApp Image 2022-02-07 at 1.35.03 PM.jpeg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["routerLink", "html", 1, "btn", "btn-primary"], ["src", "/assets/img/internet.png", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["routerLink", "internet", 1, "btn", "btn-primary"], ["src", "/assets/img/coding-classes-for-kids.png", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["routerLink", "coding", 1, "btn", "btn-primary"]], template: function ComputerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0627\u0644\u0639\u0644\u0648\u0645 \u0648\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u062D\u0627\u0633\u0628 \u0627\u0644\u0627\u0644\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0643\u0648\u0646\u0643 \u0637\u0641\u0644\u064B\u0627 \u0641\u064A \u0627\u0644\u0639\u0635\u0631 \u0627\u0644\u062D\u062F\u064A\u062B \u060C \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0642\u062F \u0627\u0633\u062A\u062E\u062F\u0645\u062A \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0623\u0648 \u0634\u0627\u0647\u062F\u062A\u0647\u0627 \u0623\u0648 \u0642\u0631\u0623\u062A \u0639\u0646\u0647\u0627. \u0647\u0630\u0627 \u0644\u0623\u0646\u0647\u0627 \u062C\u0632\u0621 \u0644\u0627 \u064A\u062A\u062C\u0632\u0623 \u0645\u0646 \u0648\u062C\u0648\u062F\u0646\u0627 \u0627\u0644\u064A\u0648\u0645\u064A.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 (Web developer) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0641\u064A \u0631\u062D\u0644\u062A\u0643 \u0641\u064A \u062A\u0639\u0644\u0645 \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0648\u0627\u062D\u062A\u0631\u0627\u0641\u0647\u0627\u060C \u0646\u0648\u0641\u0631 \u0644\u0643 \u0645\u0648\u0633\u0648\u0639\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0644\u062C\u0645\u064A\u0639 \u0644\u063A\u0627\u062A \u0648\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629. \u0627\u0644\u0645\u0648\u0633\u0648\u0639\u0629 \u0628\u0645\u062B\u0644 \u0642\u0627\u0645\u0648\u0633 \u0623\u0648 \u0645\u0631\u062C\u0639 \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0628\u0631\u0645\u062C\u064A\u0646 \u0648 \u0645\u0637\u0648\u0631\u0648 \u0627\u0644\u0648\u064A\u0628");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0627\u0644\u0627\u0646\u062A\u0631\u0646\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0647\u064A \u0646\u0638\u0627\u0645 \u0627\u062A\u0635\u0627\u0644\u0627\u062A \u0639\u0627\u0644\u0645\u064A \u064A\u0633\u0645\u062D \u0628\u062A\u0628\u0627\u062F\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0628\u064A\u0646 \u0634\u0628\u0643\u0627\u062A \u0623\u0635\u063A\u0631 \u062A\u062A\u0635\u0644 \u0645\u0646 \u062E\u0644\u0627\u0644\u0647\u0627 \u0627\u0644\u062D\u0648\u0627\u0633\u064A\u0628 \u062D\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645. \u062A\u0639\u0645\u0644 \u0648\u0641\u0642 \u0623\u0646\u0638\u0645\u0629 \u0645\u062D\u062F\u062F\u0629 \u0648\u064A\u0639\u0631\u0641 \u0628\u0627\u0644\u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644 \u0627\u0644\u0645\u0648\u062D\u062F \u0648\u0647\u0648 \u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644 \u0625\u0646\u062A\u0631\u0646\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Coding For Kids \u062A\u0639\u0644\u064A\u0645 \u0628\u0631\u0645\u062C\u0629 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0644\u0644\u0627\u0637\u0641\u0627\u0644 \u0645\u0646 6 \u0633\u0646\u0648\u0627\u062A \u0648\u0627\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646 \u0628\u0634\u0643\u0644 \u0633\u0647\u0644 \u0648\u0628\u0633\u064A\u0637, \u0634\u0631\u062D \u0623\u063A\u0644\u0628 \u0627\u0644\u0645\u0641\u0627\u0647\u064A\u0645 \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629 \u0648\u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0639\u0644\u0649 \u0623\u0644\u0639\u0627\u0628 \u0648\u0623\u0646\u0634\u0637\u0629 \u0648\u0631\u0642\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wdXRlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5230:
/*!*********************************************************!*\
  !*** ./src/app/program/computer/html/html.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlComponent": () => (/* binding */ HtmlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HtmlComponent {
    constructor() {
        this.progSelect = 'html';
    }
    ngOnInit() {
    }
}
HtmlComponent.ɵfac = function HtmlComponent_Factory(t) { return new (t || HtmlComponent)(); };
HtmlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HtmlComponent, selectors: [["app-html"]], decls: 50, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/203b0fb7-ae46-4ba7-a69e-8cc445b89db2.o.jpg"], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"], ["src", "/assets/img/Create-website-using-HTML.png", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/css-illustration.png", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/javascript-illustration.png", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"]], template: function HtmlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 (Web developer) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 Web Development \u064A\u0639\u062A\u0628\u0631 \u0645\u0646 \u0623\u0643\u062B\u0631 \u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0646\u0645\u0648\u0627 \u0648\u062D\u0636\u0648\u0631\u0627 \u0648\u0647\u0648 \u0627\u0644\u0637\u0631\u064A\u0642 \u0627\u0644\u0630\u064A \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0625\u0644\u064A\u0647 \u0625\u0630\u0627 \u0644\u0645 \u062A\u0642\u0645 \u0628\u0643\u062A\u0627\u0628\u0629 \u0623\u064A \u0623\u0643\u0648\u0627\u062F \u0645\u0646 \u0642\u0628\u0644 \u0648\u0628\u0627\u0644\u062A\u0627\u0644\u064A \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0628\u062F\u0623 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631 \u0648\u0627\u0644\u0646\u0637\u0644\u0627\u0642 \u0646\u062D\u0648 \u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 (Web developer) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 \u0647\u0648 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0630\u064A \u064A\u0646\u0637\u0648\u064A \u0639\u0644\u064A\u0647 \u062A\u0637\u0648\u064A\u0631 \u0645\u0648\u0642\u0639 \u0648\u064A\u0628 \u0644\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0623\u0648 \u0627\u0644\u0625\u0646\u062A\u0631\u0627\u0646\u062A. \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u062A\u0631\u0627\u0648\u062D \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 \u0645\u0646 \u062A\u0637\u0648\u064A\u0631 \u0635\u0641\u062D\u0629 \u062B\u0627\u0628\u062A\u0629 \u0648\u0627\u062D\u062F\u0629 \u0628\u0633\u064A\u0637\u0629 \u0645\u0646 \u0646\u0635 \u0639\u0627\u062F\u064A \u0625\u0644\u0649 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0648\u064A\u0628 \u0627\u0644\u0645\u0639\u0642\u062F\u0629 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0648\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0645\u0639\u0631\u0641\u0629 \u0645\u0643\u0648\u0646\u0627\u062A \u0635\u0641\u062D\u0629 \u0627\u0644\u0648\u064A\u0628 \u0642\u0628\u0644 \u062A\u0639\u0644\u0645 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 \u0623\u0645\u0631 \u0623\u0633\u0627\u0633\u064A\u060C \u0641\u0647\u064A \u062A\u062A\u0643\u0648\u0646 \u0623\u0648\u0644\u064B\u0627 \u0645\u0646 \u0644\u063A\u0629 \u0627\u0644\u0647\u064A\u0643\u0644\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 HTML\u060C \u0648\u062B\u0627\u0646\u064A\u064B\u0627 \u0645\u0646 \u0644\u063A\u0629 \u0627\u0644\u062A\u0646\u0633\u064A\u0642 CSS\u060C \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0644\u063A\u0627\u062A \u0628\u0631\u0645\u062C\u0629 \u0645\u062B\u0644 \u062C\u0627\u0641\u0627 \u0633\u0643\u0631\u064A\u0628\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0644\u063A\u0629 HTML \u0645\u0646 \u0623\u062C\u0644 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062A\u064A \u0646\u0631\u064A\u062F \u0625\u0636\u0627\u0641\u062A\u0647\u0627 \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0644\u063A\u0629 CSS \u0645\u0646 \u0623\u062C\u0644 \u062A\u062D\u0633\u064A\u0646 \u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629 \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u0644\u063A\u0629 Javascript \u0648 \u0646\u0633\u062A\u062E\u062F\u0645\u0647\u0627 \u0644\u0625\u0636\u0627\u0641\u0629 \u0645\u0624\u062B\u0631\u0627\u062A \u0641\u064A \u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0648\u064A\u0628 \u0648 \u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u064A \u064A\u062A\u0645 \u0625\u062F\u062E\u0627\u0644\u0647\u0627 \u0648 \u0639\u0631\u0636\u0647\u0627 \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0627\u062A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u064A\u0645\u0643\u0646\u0643 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0647\u0630\u0647 \u0627\u0644\u0644\u063A\u0627\u062A \u0627\u0644\u062B\u0644\u0627\u062B \u0641\u0642\u0637 \u0644\u0628\u0646\u0627\u0621 \u0645\u0648\u0627\u0642\u0639 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0643\u0627\u0645\u0644\u0629, \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0644\u0644\u0647\u0627\u062A\u0641 \u0648 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0644\u0644\u062D\u0627\u0633\u0648\u0628 \u0648 \u0644\u064A\u0633 \u0641\u0642\u0637 \u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0635\u0641\u062D\u0627\u062A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0648\u0628\u0627\u0644\u062A\u0627\u0644\u064A \u0641\u0625\u0646 \u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0644\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0648\u064A\u0628 \u062A\u062A\u0643\u0648\u0646 \u0645\u0646 \u062B\u0644\u0627\u062B \u0637\u0628\u0642\u0627\u062A: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u0637\u0628\u0642\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 (Content): \u0648\u064A\u0628\u0646\u0649 \u0628\u0644\u063A\u0629 html \u060C \u0648\u0647\u0630\u0647 \u0627\u0644\u0637\u0628\u0642\u0629 \u0647\u064A \u0627\u0644\u062A\u064A \u062A\u0638\u0647\u0631 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 \u0645\u0646 \u0646\u0635\u0648\u0635 \u0648\u0631\u0648\u0627\u0628\u0637 \u0648\u062D\u0642\u0648\u0644 \u0648\u0645\u0627 \u0625\u0644\u0649 \u0630\u0644\u0643. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u0637\u0628\u0642\u0629 \u0627\u0644\u062A\u0646\u0633\u064A\u0642 (Presentation): \u0648\u062A\u0646\u0633\u0642 \u0628\u0644\u063A\u0629 css \u060C \u0648\u0647\u0630\u0647 \u0627\u0644\u0637\u0628\u0642\u0629 \u062A\u062A\u062D\u0643\u0645 \u0641\u064A \u0634\u0643\u0644 \u0638\u0647\u0648\u0631 \u0637\u0628\u0642\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649\u060C \u0645\u062B\u0644 \u062A\u0645\u0648\u0636\u0639 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0648\u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u062C\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0646\u0635\u0648\u0635 \u0648\u0645\u0627 \u0634\u0627\u0643\u0644. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u0637\u0628\u0642\u0629 \u0627\u0644\u062A\u0641\u0627\u0639\u0644 (Behavior): \u0648\u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646\u0647\u0627 \u0644\u063A\u0629 JavaScript \u060C \u0648\u0644\u063A\u0627\u062A \u0623\u062E\u0631\u0649 \u0645\u062B\u0644 php \u0648\u0647\u0630\u0647 \u0627\u0644\u0637\u0628\u0642\u0629 \u062A\u062A\u062D\u0643\u0645 \u0641\u064A \u0627\u0644\u0623\u062D\u062F\u0627\u062B \u0627\u0644\u062A\u064A \u062A\u0642\u0639 \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0628\u0645\u062C\u0631\u062F \u0636\u063A\u0637 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0639\u0644\u064A \u0631\u0627\u0628\u0637 \u0623\u0648 \u0625\u0631\u0633\u0627\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0642\u0648\u0644 \u0628\u0639\u062F \u0645\u0644\u0626\u0647\u0627\u060C \u0648\u062C\u0639\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0627 \u0645\u062A\u062C\u062F\u062F\u0627 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u064A\u0648\u0645. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u062A\u0646\u0638\u064A\u0645 \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0627\u0644\u0628\u062D\u062B \u0641\u064A\u0647\u0627 \u0648\u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u0631\u0632\u0646\u0627\u0645\u0627\u062A \u0627\u0644\u062A\u0642\u0648\u064A\u0645. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.2);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtFQUNFLG1CQUFtQjs7RUFFbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7O0FBRTFCOzs7Q0FHQztFQUNDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYzs7RUFFZCxrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2Qyw2QkFBNkI7RUFDN0Isb0JBQW9CO0FBQ3RCOzs7Q0FDQztFQUNDLGNBQWM7QUFDaEI7OztDQUdDO0VBQ0MsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjOztFQUVkLFVBQVU7RUFDVixTQUFTOztFQUVULFdBQVc7QUFDYjs7O0NBRUM7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7O0NBRUM7RUFDQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1COztFQUVuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDZCQUE2Qjs7QUFFL0I7OztDQUVDO0dBQ0UsaUJBQWlCO0dBQ2pCLG9CQUFvQjtHQUNwQixXQUFXO0dBQ1gsc0JBQXNCOztBQUV6QiIsImZpbGUiOiJodG1sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG5cclxuICBkaXNwbGF5IDogZmxleDtcclxuICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5cclxuIC5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoIDogNTAwcHg7XHJcbiAgaGVpZ2h0IDogMjE1cHg7XHJcblxyXG4gIG1hcmdpbiA6IDMwcHggMTBweDtcclxuICBwYWRkaW5nIDogMjBweCAxNXB4O1xyXG5cclxuICBkaXNwbGF5IDogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICBib3gtc2hhZG93IDogMCA1cHggMjBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgdHJhbnNpdGlvbiA6IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyLXJhZGl1cyA6IDE1cHg7XHJcbn1cclxuIC5jYXJkOmhvdmVyIHtcclxuICBoZWlnaHQgOiA0MjBweDtcclxufVxyXG5cclxuXHJcbiAuY2FyZCAuaW1hZ2Uge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQgOiA1MDBweDtcclxuXHJcbiAgdG9wIDogLTQwJTtcclxuICBsZWZ0OiA4cHg7XHJcblxyXG4gIHotaW5kZXggOiAxO1xyXG59XHJcblxyXG4gLmNhcmQgLmltYWdlIGltZyB7XHJcbiAgd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQ6MjE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1cyA6IDE1cHg7XHJcbn1cclxuXHJcbiAuY2FyZCAuY29udGVudCB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICB0b3AgOiAtMTQwcHg7XHJcbiAgcGFkZGluZyA6IDEwcHggMTVweDtcclxuICBjb2xvciA6ICMxMTE7XHJcbiAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuXHJcbiAgdmlzaWJpbGl0eSA6IGhpZGRlbjtcclxuICBvcGFjaXR5IDogMDtcclxuICB0cmFuc2l0aW9uIDogMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbn1cclxuXHJcbiAuY2FyZDpob3ZlciAuY29udGVudCB7XHJcbiAgIG1hcmdpbi10b3AgOiAzMHB4O1xyXG4gICB2aXNpYmlsaXR5IDogdmlzaWJsZTtcclxuICAgb3BhY2l0eSA6IDE7XHJcbiAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7797:
/*!*****************************************************************!*\
  !*** ./src/app/program/computer/internet/internet.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternetComponent": () => (/* binding */ InternetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class InternetComponent {
    constructor() {
        this.progSelect = 'internet';
    }
    ngOnInit() {
    }
}
InternetComponent.ɵfac = function InternetComponent_Factory(t) { return new (t || InternetComponent)(); };
InternetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InternetComponent, selectors: [["app-internet"]], decls: 50, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/\u0641\u0648\u0627\u0626\u062F-\u0627\u0644\u0627\u0646\u062A\u0631\u0646\u062A.jpg"], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"], ["src", "/assets/img/internet-company.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/hqdefault.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/New Project (90)(139).jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"]], template: function InternetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u062A\u0639\u0644\u0645 \u0648\u0627\u062D\u062A\u0631\u0641 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u064A\u0639\u062F\u0651 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0623\u0647\u0645\u0651 \u0634\u064A\u0621 \u0641\u064A \u0639\u0635\u0631\u0646\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u061B \u0641\u0647\u0648 \u0623\u0633\u0627\u0633 \u0644\u0644\u0646\u0647\u0636\u0629\u060C \u0648\u0623\u0633\u0627\u0633 \u0644\u062D\u064A\u0627\u062A\u0646\u0627 \u0627\u0644\u0639\u0645\u0644\u064A\u0651\u0629\u060C \u0641\u0643\u0644 \u0623\u0639\u0645\u0627\u0644\u0646\u0627 \u062A\u0639\u062A\u0645\u062F \u0639\u0644\u064A\u0647\u060C \u0643\u0645\u0627 \u0623\u0646\u0651\u0647 \u0623\u0635\u0628\u062D \u0623\u0633\u0627\u0633\u0627\u064B \u0644\u062D\u064A\u0627\u062A\u0646\u0627 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0651\u0629 \u0641\u0647\u0648 \u0623\u064A\u0636\u0627\u064B \u0623\u0633\u0627\u0633\u064C \u0644\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0645\u0648\u0627\u0642\u0639 \u0648\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u0627\u0646\u062A\u0631\u0646\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0647\u064A \u0646\u0638\u0627\u0645 \u0627\u062A\u0635\u0627\u0644\u0627\u062A \u0639\u0627\u0644\u0645\u064A \u064A\u0633\u0645\u062D \u0628\u062A\u0628\u0627\u062F\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0628\u064A\u0646 \u0634\u0628\u0643\u0627\u062A \u0623\u0635\u063A\u0631 \u062A\u062A\u0635\u0644 \u0645\u0646 \u062E\u0644\u0627\u0644\u0647\u0627 \u0627\u0644\u062D\u0648\u0627\u0633\u064A\u0628 \u062D\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645. \u062A\u0639\u0645\u0644 \u0648\u0641\u0642 \u0623\u0646\u0638\u0645\u0629 \u0645\u062D\u062F\u062F\u0629 \u0648\u064A\u0639\u0631\u0641 \u0628\u0627\u0644\u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644 \u0627\u0644\u0645\u0648\u062D\u062F \u0648\u0647\u0648 \u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644 \u0625\u0646\u062A\u0631\u0646\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u064A\u062A\u0636\u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u0645\u0642\u0631\u0631 \u0627\u0644\u0645\u0641\u0627\u0647\u064A\u0645 \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u0645\u062A\u0639\u0644\u0642\u0629 \u0628\u062A\u0635\u0641\u062D \u0634\u0628\u0643\u0629 \u0627\u0644\u0648\u064A\u0628\u060C \u0648\u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0628\u0634\u0643\u0644 \u0641\u0639\u0627\u0644\u060C \u0648\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0648\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0641\u0647\u0645 \u0645\u0639\u0646\u0649 \u062A\u0635\u0641\u062D \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0648\u0645\u0628\u0627\u062F\u0649\u0621 \u0627\u0644\u0623\u0645\u0646 \u0639\u0644\u0649 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0625\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u062A\u0635\u0641\u062D \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0648\u0625\u062F\u0627\u0631\u0629 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0648\u0627\u0644\u0625\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0648\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B \u0639\u0644\u0649 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u0627\u0644\u0628\u062D\u062B \u0628\u0641\u0639\u0627\u0644\u064A\u0629 \u0639\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0648\u062A\u0642\u064A\u064A\u0645 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0648\u064A\u0628 \u0628\u0634\u0643\u0644 \u062A\u062D\u0644\u064A\u0644\u064A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0641\u0647\u0645 \u062D\u0642\u0648\u0642 \u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u0648\u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0648\u0645\u0633\u0627\u0626\u0644 \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0641\u0647\u0645 \u0645\u0628\u0627\u062F\u0649\u0621 \u0627\u0644\u0645\u062C\u062A\u0645\u0639\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A\u064A\u0629\u060C \u0648\u0627\u0644\u0625\u062A\u0635\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u0625\u0631\u0633\u0627\u0644 \u0648\u062A\u0644\u0642\u064A \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0627\u0644\u062A\u062D\u0643\u0645 \u0641\u064A \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0647. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u062A\u0646\u0638\u064A\u0645 \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0627\u0644\u0628\u062D\u062B \u0641\u064A\u0647\u0627 \u0648\u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u0631\u0632\u0646\u0627\u0645\u0627\u062A \u0627\u0644\u062A\u0642\u0648\u064A\u0645. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0627\u0644\u0631\u0624\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u064A\u063A\u0637\u064A \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u0636\u0631\u0648\u0631\u064A\u0629 \u0644\u0641\u0647\u0645 \u0627\u0644\u0645\u0628\u0627\u062F\u0649\u0621 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0627\u0644\u0645\u062A\u0639\u0644\u0642\u0629 \u0628\u062A\u0635\u0641\u062D \u0627\u0644\u0648\u064A\u0628 \u0648\u0627\u0644\u0623\u0645\u0646 \u0639\u0644\u0649 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A. \u064A\u0635\u0627\u062F\u0642 \u0639\u0644\u0649 \u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0645\u0627\u0631\u0633\u0627\u062A \u0641\u064A \u0627\u0644\u0625\u0633\u062A\u0639\u0645\u0627\u0644 \u0627\u0644\u0641\u0627\u0639\u0644 \u0644\u0644\u0625\u0646\u062A\u0631\u0646\u062A. \u062A\u0645 \u062A\u0637\u0648\u064A\u0631\u0647 \u0628\u0645\u0633\u0627\u0647\u0645\u0627\u062A \u0645\u0646 \u0645\u0633\u062A\u062E\u062F\u0645\u064A \u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0639\u0627\u062F\u064A\u064A\u0646\u060C \u0648\u062E\u0628\u0631\u0627\u0621 \u0641\u064A \u0627\u0644\u0645\u062C\u0627\u0644 \u0648\u0627\u062E\u062A\u0635\u0627\u0635\u064A\u064A\u0646 \u0645\u0645\u0627\u0631\u0633\u064A\u0646 \u0644\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0645\u0646 \u0643\u0627\u0641\u0629 \u0623\u0646\u062D\u0627\u0621 \u0627\u0644\u0639\u0627\u0644\u0645. \u062A\u0636\u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0623\u0647\u0645\u064A\u0629 \u0648\u062A\u0646\u0648\u0651\u0639 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0631\u0631. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVybmV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxtQkFBbUI7O0VBRW5CLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCOztBQUUxQjs7O0NBR0M7RUFDQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7O0VBRWQsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7O0NBQ0M7RUFDQyxjQUFjO0FBQ2hCOzs7Q0FHQztFQUNDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYzs7RUFFZCxVQUFVO0VBQ1YsU0FBUzs7RUFFVCxXQUFXO0FBQ2I7OztDQUVDO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7OztDQUVDO0VBQ0MsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2QkFBNkI7O0FBRS9COzs7Q0FFQztHQUNFLGlCQUFpQjtHQUNqQixvQkFBb0I7R0FDcEIsV0FBVztHQUNYLHNCQUFzQjs7QUFFekIiLCJmaWxlIjoiaW50ZXJuZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcblxyXG4gLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQgOiAyMTVweDtcclxuXHJcbiAgbWFyZ2luIDogMzBweCAxMHB4O1xyXG4gIHBhZGRpbmcgOiAyMHB4IDE1cHg7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gIGJveC1zaGFkb3cgOiAwIDVweCAyMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICB0cmFuc2l0aW9uIDogMC4zcyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG4gLmNhcmQ6aG92ZXIge1xyXG4gIGhlaWdodCA6IDQyMHB4O1xyXG59XHJcblxyXG5cclxuIC5jYXJkIC5pbWFnZSB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodCA6IDUwMHB4O1xyXG5cclxuICB0b3AgOiAtNDAlO1xyXG4gIGxlZnQ6IDhweDtcclxuXHJcbiAgei1pbmRleCA6IDE7XHJcbn1cclxuXHJcbiAuY2FyZCAuaW1hZ2UgaW1nIHtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodDoyMTVweDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG5cclxuIC5jYXJkIC5jb250ZW50IHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gIHRvcCA6IC0xNDBweDtcclxuICBwYWRkaW5nIDogMTBweCAxNXB4O1xyXG4gIGNvbG9yIDogIzExMTtcclxuICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG5cclxuICB2aXNpYmlsaXR5IDogaGlkZGVuO1xyXG4gIG9wYWNpdHkgOiAwO1xyXG4gIHRyYW5zaXRpb24gOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxufVxyXG5cclxuIC5jYXJkOmhvdmVyIC5jb250ZW50IHtcclxuICAgbWFyZ2luLXRvcCA6IDMwcHg7XHJcbiAgIHZpc2liaWxpdHkgOiB2aXNpYmxlO1xyXG4gICBvcGFjaXR5IDogMTtcclxuICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1691:
/*!*************************************************************!*\
  !*** ./src/app/program/computer/office/office.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfficeComponent": () => (/* binding */ OfficeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class OfficeComponent {
    constructor() {
        this.progSelect = 'microsoft';
    }
    ngOnInit() {
    }
}
OfficeComponent.ɵfac = function OfficeComponent_Factory(t) { return new (t || OfficeComponent)(); };
OfficeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OfficeComponent, selectors: [["app-office"]], decls: 41, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "lead"], [1, "col-md-5"], [1, "card"], [1, "image"], ["src", "/assets/img/\u062A\u062D\u062F\u064A\u062B\u0627\u062A-\u0627\u0644\u0623\u0645\u0627\u0646-\u0641\u064A-\u0645\u0627\u064A\u0643\u0631\u0648\u0633\u0648\u0641\u062A-\u0623\u0648\u0641\u064A\u0633.jpg"], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"], ["src", "/assets/img/Microsoft-Word-Basic-and-Advanced.png", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/Powerpoint+Basics+-+Logo.jpg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"], ["src", "/assets/img/image-asset1.jpeg", "alt", "", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "300px", "width", "600px"]], template: function OfficeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0645\u064A\u0643\u0631\u0648\u0633\u0648\u0641\u062A \u0627\u0648\u0641\u064A\u0633");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Microsoft Office: Word, Excel, PowerPoint \u0645\u0646 \u0627\u0644\u0635\u0641\u0631 \u0644\u0644\u0627\u062D\u062A\u0631\u0627\u0641 \u062A\u0639\u0644\u0645 \u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0627\u0648\u0641\u064A\u0633 ; \u0627\u0644\u0648\u0648\u0631\u062F , \u0627\u0644\u0628\u0648\u0631\u0628\u0648\u064A\u0646\u062A \u0648 \u0627\u0644\u0627\u0643\u0633\u0644 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0645\u0628\u062A\u062F\u0626 \u0644\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0645\u062A\u0642\u062F\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " MS Office \u0645\u064A\u0643\u0631\u0648\u0633\u0648\u0641\u062A \u0627\u0648\u0641\u064A\u0633");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u064A\u062A\u0643\u0648\u0646 Microsoft Office \u0645\u0646 Microsoft Word \u060C \u0648\u0647\u064A \u0623\u062F\u0627\u0629 \u0642\u064A\u0627\u0633\u064A\u0629 \u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0643\u0644\u0645\u0627\u062A \u061B Microsoft Excel \u060C \u062D\u0632\u0645\u0629 \u062A\u0633\u062A\u062E\u062F\u0645 \u0644\u0625\u0646\u0634\u0627\u0621 \u0648\u062A\u062D\u0631\u064A\u0631 \u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0627\u0648\u0641\u064A\u0633 \u0645\u0646 \u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0647\u0627\u0645\u0629 \u0641\u064A \u062D\u064A\u0627\u062A\u0646\u0627 , \u0646\u062D\u062A\u0627\u062C\u0647\u0627 \u062A\u0642\u0631\u064A\u0628\u064B\u0627 \u0641\u064A \u0643\u0644 \u0634\u0649\u0621 \u0645\u0639\u0638\u0645 \u0627\u0644\u0648\u0642\u062A (ICDL Course) \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0643\u0648\u0631\u0633 \u0633\u0648\u0641 \u0646\u062A\u0639\u0644\u0645 \u0627\u0647\u0645 \u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0627\u0648\u0641\u064A\u0633 ; \u0627\u0644\u0648\u0631\u062F , \u0627\u0644\u0627\u0643\u0633\u0644 , \u0648\u0627\u0644\u0628\u0648\u0631\u0628\u0648\u064A\u0646\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Microsoft Word - \u0627\u0648\u0644\u064B\u0627 \u0627\u0644\u0648\u0631\u062F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0645\u064A\u0643\u0631\u0648\u0633\u0648\u0641\u062A \u0648\u0648\u0631\u062F \u0645\u0646 \u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0647\u0627\u0645\u0629 \u0641\u064A \u062D\u064A\u0627\u062A\u0646\u0627 \u0648\u0627\u0644\u0627\u0643\u062B\u0631 \u0627\u062D\u062A\u064A\u0627\u062C\u064B\u0627 \u0641\u064A \u0633\u0648\u0642 \u0627\u0644\u0639\u0645\u0644 \u0644\u0630\u0644\u0643 \u0644\u0627 \u064A\u0645\u0643\u0646\u0646\u0627 \u0627\u0644\u062A\u062E\u0644\u064A \u0639\u0646\u0647 \u0641\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u0648\u0631\u062F \u064A\u062A\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647 \u0645\u0646 \u0623\u062C\u0644 \u0643\u062A\u0627\u0628\u0629 \u0648 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0646\u0635\u0648\u0635 \u0648 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u062A\u0648\u0636\u064A\u062D\u064A\u0629 \u0648 \u064A\u0645\u0643\u0646 \u0639\u0645\u0644 \u062A\u0635\u0627\u0645\u064A\u0645 \u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644\u0647 \u0633\u064A\u0642\u0648\u0645 \u0647\u0630\u0627 \u0627\u0644\u0643\u0648\u0631\u0633 \u0628\u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0644\u0641\u0647\u0645 \u062C\u0645\u064A\u0639 \u0627\u062F\u0648\u0627\u062A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0628\u0643\u0644 \u0633\u0647\u0648\u0644\u0629 \u062E\u0637\u0648\u0629 \u0628\u062E\u0637\u0648\u0629 \u0648\u0627\u064A\u0636\u064B\u0627 \u0633\u062A\u062A\u0639\u0644\u0645 \u062A\u0642\u0646\u064A\u0627\u062A \u0648\u0627\u0633\u0627\u0644\u064A\u0628 \u062A\u0633\u0627\u0639\u062F\u0643 \u0639\u0644\u064A \u062A\u0648\u0641\u064A\u0631 \u0627\u0644\u0648\u0642\u062A \u0648\u0627\u0644\u0645\u062C\u0647\u0648\u062F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Microsoft Excel - \u062B\u0627\u0646\u064A\u064B\u0627 \u0627\u0644\u0627\u0643\u0633\u064A\u0644 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u0633\u062A\u062A\u0639\u0644\u0645 \u0637\u0631\u064A\u0642\u0629 \u0627\u0638\u0647\u0627\u0631 \u0628\u064A\u0627\u0646\u0627\u062A\u0643 \u0628\u0634\u0643\u0644 \u0627\u0641\u0636\u0644 \u0648 \u062A\u0639\u062F\u064A\u0644\u0647\u0627 \u0628\u0633\u0647\u0648\u0644\u0629 \u0639\u0646 \u0637\u0631\u064A\u0642 \u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0648\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A\u0629 \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u064A\u0629 \u0633\u062A\u062A\u0639\u0644\u0645 \u0643\u064A\u0641\u064A\u0629 \u0627\u0644\u0627\u0633\u062A\u0641\u0627\u062F\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0645\u0646 \u0628\u0631\u0646\u0627\u0645\u062C \u0645\u064A\u0643\u0631\u0648\u0633\u0648\u0641\u062A \u0627\u0643\u0633\u0644 \u0648\u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648 \u062A\u062D\u0644\u064A\u0644\u0647\u0627 \u0648\u0627\u062C\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0629 \u0628\u0643\u0644 \u0643\u0641\u0627\u0621\u0629 \u0648\u0633\u0647\u0648\u0644\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Microsoft PowerPoint - \u062B\u0627\u0644\u062B\u064B\u0627 \u0627\u0644\u0628\u0648\u0631\u0628\u0648\u064A\u0646\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u0645\u0646 \u0623\u0641\u0636\u0644 \u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0645\u0633\u062A\u0639\u0645\u0644\u0629 \u0641\u064A \u062A\u0635\u0645\u064A\u0645 \u0639\u0631\u0648\u0636 \u062A\u0642\u062F\u064A\u0645\u064A\u0629 \u0625\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0648\u0639\u0645\u0644 \u0627\u0644\u0628\u0631\u064A\u0632\u0646\u062A\u064A\u0634\u0646 \u0627\u0644\u0628\u0648\u0631\u0628\u0648\u064A\u0646\u062A \u0627\u0644\u0628\u0648\u0631\u0628\u0648\u064A\u0646\u062A \u064A\u062A\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647 \u0643\u0623\u062F\u0627\u0629 \u0639\u0631\u0636 \u0631\u0626\u064A\u0633\u064A\u0629 \u0641\u064A \u0627\u0644\u0645\u062F\u0627\u0631\u0633 \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0645\u0647\u0627\u0631\u0629 \u0627\u0633\u0627\u0633\u064A\u0629 \u062A\u062A\u0639\u0644\u0645\u0647\u0627 \u0648 \u062A\u0636\u064A\u0641\u0647\u0627 \u0644\u0645\u062C\u0645\u0648\u0639\u0629 \u0645\u0647\u0627\u0631\u0627\u062A\u0643 \u0646\u0638\u0631\u0627\u064B \u0644\u0623\u0647\u0645\u064A\u062A\u0647 \u0648 \u0643\u062B\u0631\u0629 \u0627\u0644\u0637\u0644\u0628 \u0639\u0644\u064A\u0647 \u0641\u0649 \u0633\u0648\u0642 \u0627\u0644\u0639\u0645\u0644 \u0644\u0627\u062D\u062A\u0648\u0627\u0626\u0647 \u0639\u0644\u0649 \u0645\u062C\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0642\u0648\u0627\u0644\u0628 \u0627\u0644\u0623\u0646\u064A\u0642\u0629 \u0627\u0644\u062A\u064A \u062A\u062C\u0639\u0644 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062A\u0642\u062F\u064A\u0645\u064A\u0629 \u0623\u0643\u062B\u0631 \u0628\u0633\u0627\u0637\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0UsbUJBQW1COztFQUVuQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3Qjs7QUFFMUI7OztDQUdDO0VBQ0Msa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjOztFQUVkLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEI7OztDQUNDO0VBQ0MsY0FBYztBQUNoQjs7O0NBR0M7RUFDQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7O0VBRWQsVUFBVTs7RUFFVixXQUFXO0FBQ2I7OztDQUVDO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7OztDQUVDO0VBQ0MsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2QkFBNkI7O0FBRS9COzs7Q0FFQztHQUNFLGlCQUFpQjtHQUNqQixvQkFBb0I7R0FDcEIsV0FBVztHQUNYLHNCQUFzQjs7QUFFekIiLCJmaWxlIjoib2ZmaWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG5cclxuICBkaXNwbGF5IDogZmxleDtcclxuICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5cclxuIC5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoIDogNTAwcHg7XHJcbiAgaGVpZ2h0IDogMjE1cHg7XHJcblxyXG4gIG1hcmdpbiA6IDMwcHggMTBweDtcclxuICBwYWRkaW5nIDogMjBweCAxNXB4O1xyXG5cclxuICBkaXNwbGF5IDogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICBib3gtc2hhZG93IDogMCA1cHggMjBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgdHJhbnNpdGlvbiA6IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyLXJhZGl1cyA6IDE1cHg7XHJcbn1cclxuIC5jYXJkOmhvdmVyIHtcclxuICBoZWlnaHQgOiA0MjBweDtcclxufVxyXG5cclxuXHJcbiAuY2FyZCAuaW1hZ2Uge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQgOiA1MDBweDtcclxuXHJcbiAgdG9wIDogLTQwJTtcclxuXHJcbiAgei1pbmRleCA6IDE7XHJcbn1cclxuXHJcbiAuY2FyZCAuaW1hZ2UgaW1nIHtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodDoyMTVweDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG5cclxuIC5jYXJkIC5jb250ZW50IHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gIHRvcCA6IC0xNDBweDtcclxuICBwYWRkaW5nIDogMTBweCAxNXB4O1xyXG4gIGNvbG9yIDogIzExMTtcclxuICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG5cclxuICB2aXNpYmlsaXR5IDogaGlkZGVuO1xyXG4gIG9wYWNpdHkgOiAwO1xyXG4gIHRyYW5zaXRpb24gOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxufVxyXG5cclxuIC5jYXJkOmhvdmVyIC5jb250ZW50IHtcclxuICAgbWFyZ2luLXRvcCA6IDMwcHg7XHJcbiAgIHZpc2liaWxpdHkgOiB2aXNpYmxlO1xyXG4gICBvcGFjaXR5IDogMTtcclxuICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5085:
/*!************************************************!*\
  !*** ./src/app/program/lang/lang.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangComponent": () => (/* binding */ LangComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);



class LangComponent {
    constructor() {
        this.progSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.programSelected = 'lang';
    }
    ngOnInit() {
    }
    onClick(feature) {
        this.progSelect.emit(feature);
    }
}
LangComponent.ɵfac = function LangComponent_Factory(t) { return new (t || LangComponent)(); };
LangComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LangComponent, selectors: [["app-lang"]], outputs: { progSelect: "progSelect" }, decls: 46, vars: 0, consts: [[1, "mt-5"], [1, "container"], [1, "fs-2", "btn", "btn-outline-primary", "rounded-pill", "mx-auto", "my-3"], [1, "row"], [1, "col-md-3", "mb-2"], [1, "card", "mb-2", 2, "width", "14rem"], ["src", "/assets/img/English Basics.png", "alt", "...", 1, "card-img-top", 2, "height", "200px"], [1, "card-body", "px-3"], [1, "card-title"], [1, "card-text"], ["routerLink", "english-basics", 1, "btn", "btn-primary", "mt-3"], [1, "col-md-3"], [1, "card", 2, "width", "14rem"], ["src", "/assets/img/Basic-English-Conversation-100-Daily-Topics-01.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["routerLink", "english-conv", 1, "btn", "btn-primary", "mt-5"], ["src", "/assets/img/\u0635\u0648\u0631\u0629_\u062F\u0648\u0631\u0629_\u0642\u0648\u0627\u0639\u062F_\u0627\u0644\u0644\u063A\u0629_\u0627\u0644\u0639\u0631\u0628\u064A\u0629_\u0623\u0641\u0642\u064A\u0629.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["routerLink", "arabic-basics", 1, "btn", "btn-primary", "my-4"], ["src", "/assets/img/Learning-Arabic.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], ["routerLink", "arabic-font", 1, "btn", "btn-primary"]], template: function LangComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0627\u0644\u0644\u063A\u0627\u062A \u0648\u0627\u0644\u0622\u062F\u0627\u0628 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0627\u0644\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u062A\u062A\u0636\u0645\u0646 \u0643\u0644 \u0645\u0627 \u062A\u062D\u062A\u0627\u062C \u0627\u0644\u064A\u0647 \u0645\u0646 \u0627\u062C\u0644 \u0627\u0646\u0637\u0644\u0627\u0642\u0629 \u0642\u0648\u064A\u0629 \u0641\u0642\u062F \u0627\u062E\u062A\u0631\u0646\u0627 \u0644\u0643 \u062F\u0631\u0648\u0633 \u062A\u062D\u062A\u0627\u062C \u0627\u0644\u064A\u0647\u0627 \u0628\u0634\u0643\u0644 \u062F\u0627\u0626\u0645 \u0648\u0633\u0648\u0641 \u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u063A\u0644\u0628 \u0645\u0641\u0631\u062F\u0627\u062A\u0647\u0627 \u0628\u0634\u0643\u0644 \u064A\u0648\u0645\u064A \u0648\u0645\u062A\u0643\u0631\u0631 . \u0648\u0647\u0630\u0647 \u0627\u0644\u062F\u0631\u0648\u0633 \u0647\u064A \u0627\u0644\u062D\u062C\u0631 \u0627\u0644\u0627\u0633\u0627\u0633 \u0644\u062A\u0639\u0644\u0645 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u062A\u064F\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629 \u0645\u0646 \u0623\u0647\u0645 \u062C\u0648\u0627\u0646\u0628 \u062A\u0639\u0644\u0645 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629\u060C \u0644\u0623\u0646\u0647\u0627 \u062A\u0639\u062A\u0628\u0631 \u0645\u0642\u064A\u0627\u0633 \u062A\u062D\u0633\u0646\u0643 \u0641\u064A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629. \u0641\u0643\u0644\u0645\u0627 \u0632\u0627\u062F \u0645\u0633\u062A\u0648\u064A \u062A\u062D\u062F\u062B \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629\u060C \u0643\u0644\u0645\u0627 \u0632\u0627\u062F \u0628\u0627\u0642\u064A \u062C\u0648\u0627\u0646\u0628 \u0627\u0644\u0644\u063A\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0642 \u064A\u0642\u062F\u0651\u0645 \u0644\u0643\u0645 \u0623\u0647\u0645\u0651 \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0646\u0651\u062D\u0648 \u0648\u0627\u0644\u0625\u0645\u0644\u0627\u0621 \u0628\u0634\u0643\u0644 \u0645\u0628\u0633\u0651\u0637 \u0648\u0628\u0635\u0648\u0631\u0629 \u0645\u0646\u0638\u0651\u0645\u0629 \u0645\u0639 \u0623\u0645\u062B\u0644\u0629 \u0648\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0639\u0645\u0644\u064A\u0651\u0629. \u0648\u064A\u0634\u0645\u0644 \u0646\u0648\u0639\u064A\u0646 \u0645\u0646 \u0627\u0644\u0642\u0648\u0627\u0639\u062F: \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0646\u0651\u062D\u0648 \u0648\u0627\u0644\u0625\u0645\u0644\u0627\u0621. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0627\u0644\u062E\u0637 \u0627\u0644\u0639\u0631\u0628\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u0627\u0644\u062E\u0637 \u0627\u0644\u0639\u0631\u0628\u064A \u0647\u0648 \u0641\u0646 \u0648\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0643\u062A\u0627\u0628\u0629 \u0641\u064A \u0645\u062E\u062A\u0644\u0641 \u0627\u0644\u0644\u063A\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0633\u062A\u0639\u0645\u0644 \u0627\u0644\u062D\u0631\u0648\u0641 \u0627\u0644\u0639\u0631\u0628\u064A\u0629. \u062A\u062A\u0645\u064A\u0632 \u0627\u0644\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0628\u0643\u0648\u0646\u0647\u0627 \u0645\u062A\u0635\u0644\u0629 \u0645\u0645\u0627 \u064A\u062C\u0639\u0644\u0647\u0627 \u0642\u0627\u0628\u0644\u0629 \u0644\u0627\u0643\u062A\u0633\u0627\u0628 \u0623\u0634\u0643\u0627\u0644 \u0647\u0646\u062F\u0633\u064A\u0629 \u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0645\u062F \u0648\u0627\u0644\u0631\u062C\u0639 \u0648\u0627\u0644\u0627\u0633\u062A\u062F\u0627\u0631\u0629 \u0648\u0627\u0644\u062A\u0632\u0648\u064A\u0629 \u0648\u0627\u0644\u062A\u0634\u0627\u0628\u0643 \u0648\u0627\u0644\u062A\u062F\u0627\u062E\u0644 \u0648\u0627\u0644\u062A\u0631\u0643\u064A\u0628. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9096:
/*!****************************************************************!*\
  !*** ./src/app/program/program-details/kids/kids.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KidsComponent": () => (/* binding */ KidsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class KidsComponent {
    constructor() {
        this.progSelect = 'draw';
    }
    ngOnInit() {
    }
}
KidsComponent.ɵfac = function KidsComponent_Factory(t) { return new (t || KidsComponent)(); };
KidsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KidsComponent, selectors: [["app-kids"]], decls: 48, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "p-3", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/img-20160916-57dbdf3458e2a.jpg"], [1, "content"], [1, "card-title"], [1, "card-text", "mt-3"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"], [1, "col-md-5", "mt-5"], ["src", "/assets/img/115dfg.jpg", 1, "img-fluid", "rounded-pill"], ["src", "/assets/img/drawing-image-1.jpg", 1, "img-fluid", "mt-5", "rounded-pill"], ["src", "/assets/img/istockphoto-535914541-1024x1024.jpg", 1, "img-fluid", "mt-5", "rounded-pill"]], template: function KidsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u062A\u0639\u0644\u0645 \u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0631\u0633\u0645 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0627\u062A\u0639\u0631\u0641 \u0639\u0644\u064A \u0627\u0647\u0645 \u062E\u0637\u0648\u0627\u062A \u062A\u0639\u0644\u0645 \u0627\u0644\u0631\u0633\u0645 \u0628\u0637\u0631\u064A\u0642\u0647 \u0639\u0644\u0645\u064A\u0647 \u0635\u062D\u064A\u062D\u0647 \u0644\u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u062A\u0643 \u0648\u0645\u0633\u062A\u0648\u0627\u0643 \u0641\u064A \u0648\u0642\u062A \u0642\u0644\u064A\u0644 \u0627\u0628\u062A\u062F\u0627\u0621\u0627 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631 \u0648\u0648\u0635\u0648\u0644\u0627 \u0627\u0644\u0649 \u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0631\u0633\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u064A\u062F\u0648\u064A\u0629 \u0643\u0627\u0644\u0631\u0633\u0645 \u062A\u0633\u0627\u0639\u062F \u0628\u0634\u0643\u0644 \u0643\u0628\u064A\u0631 \u0641\u064A \u062A\u0637\u0648\u064A\u0631 \u062D\u0631\u0643\u0629 \u0627\u0644\u0623\u0635\u0627\u0628\u0639 \u0644\u0644\u0637\u0641\u0644 \u060C \u0648\u0643\u0644 \u0627\u0644\u0645\u0641\u0627\u0635\u0644 \u0627\u0644\u062A\u064A \u064A\u062A\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 \u0641\u064A \u062D\u0631\u0643\u0629 \u0627\u0644\u0623\u0642\u0644\u0627\u0645 \u0648\u0627\u0644\u0631\u0633\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0643\u0648\u0631\u0633 \u0634\u0627\u0645\u0644 \u0644\u062A\u0639\u0644\u064A\u0645 \u0627\u0647\u0645 \u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0631\u0633\u0645 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631 \u0628\u0627\u0633\u0644\u0648\u0628 \u0639\u0644\u0645\u064A \u0633\u0647\u0644 \u0648\u0628\u0633\u064A\u0637 \u0633\u0648\u0627\u0621 \u0643\u0646\u062A \u0628\u062A\u0639\u0631\u0641 \u062A\u0631\u0633\u0645 \u0628\u0633 \u0646\u0641\u0633\u0643 \u062A\u0637\u0648\u0631 \u0645\u0646 \u0645\u0647\u0627\u0631\u062A\u0643 \u0648\u0645\u0633\u062A\u0648\u0627\u0643 \u0648\u062A\u0648\u0635\u0644 \u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641 \u0641\u064A \u0648\u0642\u062A \u0642\u0644\u064A\u0644 \u0627\u0648 \u0643\u0646\u062A \u0645\u0634 \u0628\u062A\u0639\u0631\u0641 \u062A\u0631\u0633\u0645 \u0648\u0646\u0641\u0633\u0643 \u062A\u062A\u0639\u0644\u0645 \u0644\u0643\u0646 \u0645\u0642\u062A\u0646\u0639 \u0627\u0646\u0643 \u0645\u0639\u0646\u062F\u0643\u0634 \u0627\u0644\u0645\u0648\u0647\u0628\u0647 \u0644\u0644\u0631\u0633\u0645 \u0647\u062A\u0639\u0631\u0641 \u0641\u064A \u0627\u0644\u0643\u0648\u0631\u0633 \u062F\u0647 \u0627\u0646 \u0627\u0644\u0631\u0633\u0645 \u0645\u0647\u0627\u0631\u0647 \u0627\u064A \u062D\u062F \u064A\u0642\u062F\u0631 \u064A\u0643\u062A\u0633\u0628\u0647\u0627 \u0628\u0627\u0644\u062A\u0639\u0644\u0645 \u0648\u0647\u062A\u062A\u0639\u0644\u0645 \u0627\u0632\u0627\u064A \u062A\u0643\u062A\u0633\u0628\u0647\u0627 \u0648\u062A\u0637\u0648\u0631\u0647\u0627 \u0648\u062A\u062F\u0631\u0628 \u0639\u0644\u064A\u0647\u0627 \u0628\u0633\u0647\u0648\u0644\u0647 \u0644\u062D\u062F \u0645\u0627\u062A\u0648\u0635\u0644 \u0644\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0644\u064A \u0628\u062A\u062A\u0645\u0646\u0627\u0647 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0647\u062A\u0639\u0631\u0641 \u0641\u064A \u0627\u0644\u0628\u062F\u0627\u064A\u0647 \u0627\u0632\u0627\u064A \u062A\u062A\u062D\u0643\u0645 \u0641\u064A \u0627\u0641\u0643\u0627\u0631\u0643 \u0643\u0631\u0633\u0627\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0647\u062A\u062A\u0639\u0644\u0645 \u0627\u0643\u062A\u0631 \u0639\u0646 \u0627\u0647\u0645 \u0639\u0646\u0627\u0635\u0631 \u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0644\u0648\u062D\u0627\u062A \u0648\u0627\u0632\u0627\u064A \u062A\u062F\u0631\u0628 \u0639\u0644\u064A\u0647\u0627 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u0647\u062A\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0638\u0644 \u0648\u0627\u0644\u0646\u0648\u0631 \u0648\u0627\u0644\u0645\u0646\u0638\u0648\u0631 \u0648\u0627\u0647\u0645\u064A\u0647 \u0645\u0639\u0631\u0641\u062A\u0647\u0645 \u0627\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u0633\u0645 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0627\u0645\u062B\u0644\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0647 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0647\u064A\u0643\u0648\u0646 \u0639\u0646\u062F\u0643 \u0627\u0644\u0642\u062F\u0631\u0647 \u0639\u0644\u064A \u062A\u062D\u0633\u064A\u0646 \u0630\u0627\u0643\u0631\u062A\u0643 \u0627\u0644\u0639\u0636\u0644\u064A\u0647 \u0648\u0645\u0647\u0627\u0631\u0647 \u0627\u064A\u062F\u0643 \u0648\u062A\u062D\u0633\u064A\u0646 \u0645\u0647\u0627\u0631\u0647 \u0639\u064A\u0646\u0643 \u0641\u064A \u0631\u0624\u064A\u0647 \u0648\u062A\u062D\u0644\u064A\u0644 \u0648\u062A\u0628\u0633\u064A\u0637 \u0627\u0644\u0644\u0648\u062D\u0627\u062A \u0628\u0633\u0647\u0648\u0644\u0647 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0647\u062A\u062A\u0639\u0631\u0641 \u0639\u0644\u064A \u0627\u0647\u0645 \u0627\u0644\u0627\u062F\u0648\u0627\u062A \u0648\u0637\u0631\u0642 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 \u0627\u0644\u0635\u062D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u0643\u0645\u0627\u0646 \u0647\u062A\u0639\u0631\u0641 \u0627\u064A\u0647 \u0627\u0634\u0647\u0631 \u0627\u0644\u0627\u062E\u0637\u0627\u0621 \u0627\u0644\u0644\u064A \u0628\u062A\u0639\u0645\u0644\u0647\u0627 \u0627\u062B\u0646\u0627\u0621 \u0631\u0633\u0645\u0643 \u0648\u062A\u0638\u0644\u064A\u0644\u0643 \u0648\u0627\u0632\u0627\u064A \u062A\u062A\u062C\u0646\u0628\u0647\u0627 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u0627\u0644\u0631\u0624\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u062A\u0633\u0627\u0639\u062F \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0641\u0646\u064A\u0629 \u0643\u0627\u0644\u0631\u0633\u0645 \u0628\u0634\u0643\u0644 \u0639\u0627\u0645 \u0641\u064A \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u062D\u0633 \u0627\u0644\u0641\u0646\u064A \u0648\u0627\u0644\u0625\u0628\u062F\u0627\u0639\u064A \u0644\u0644\u0623\u0637\u0641\u0627\u0644 \u062D\u064A\u062B \u0623\u0646 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0647\u0645 \u0623\u0643\u062B\u0631 \u0645\u0646 \u064A\u062D\u0635\u0644 \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0645\u064A\u0632\u0629\u060C \u062D\u064A\u062B \u062A\u062A\u0633\u0639 \u0623\u0641\u0642\u0647\u0645 \u0648\u0645\u062F\u0627\u0631\u0643\u0647\u0645 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0631\u0633\u0645 \u0648\u064A\u0632\u064A\u062F \u0644\u062F\u064A\u0647\u0645 \u0627\u0644\u062D\u0633 \u0627\u0644\u0625\u0628\u062F\u0627\u0639\u064A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtpZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtFQUNFLG1CQUFtQjs7RUFFbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7O0FBRTFCOzs7Q0FHQztFQUNDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYzs7RUFFZCxrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2Qyw2QkFBNkI7RUFDN0Isb0JBQW9CO0FBQ3RCOzs7Q0FDQztFQUNDLGNBQWM7QUFDaEI7OztDQUdDO0VBQ0MsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjOztFQUVkLFVBQVU7RUFDVixTQUFTOztFQUVULFdBQVc7QUFDYjs7O0NBRUM7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7O0NBRUM7RUFDQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1COztFQUVuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDZCQUE2Qjs7QUFFL0I7OztDQUVDO0dBQ0UsaUJBQWlCO0dBQ2pCLG9CQUFvQjtHQUNwQixXQUFXO0dBQ1gsc0JBQXNCOztBQUV6QiIsImZpbGUiOiJraWRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG5cclxuICBkaXNwbGF5IDogZmxleDtcclxuICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5cclxuIC5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoIDogNTAwcHg7XHJcbiAgaGVpZ2h0IDogMjE1cHg7XHJcblxyXG4gIG1hcmdpbiA6IDMwcHggMTBweDtcclxuICBwYWRkaW5nIDogMjBweCAxNXB4O1xyXG5cclxuICBkaXNwbGF5IDogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICBib3gtc2hhZG93IDogMCA1cHggMjBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgdHJhbnNpdGlvbiA6IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyLXJhZGl1cyA6IDE1cHg7XHJcbn1cclxuIC5jYXJkOmhvdmVyIHtcclxuICBoZWlnaHQgOiA0MjBweDtcclxufVxyXG5cclxuXHJcbiAuY2FyZCAuaW1hZ2Uge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQgOiA1MDBweDtcclxuXHJcbiAgdG9wIDogLTQwJTtcclxuICBsZWZ0OiA4cHg7XHJcblxyXG4gIHotaW5kZXggOiAxO1xyXG59XHJcblxyXG4gLmNhcmQgLmltYWdlIGltZyB7XHJcbiAgd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQ6MjE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1cyA6IDE1cHg7XHJcbn1cclxuXHJcbiAuY2FyZCAuY29udGVudCB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICB0b3AgOiAtMTQwcHg7XHJcbiAgcGFkZGluZyA6IDEwcHggMTVweDtcclxuICBjb2xvciA6ICMxMTE7XHJcbiAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuXHJcbiAgdmlzaWJpbGl0eSA6IGhpZGRlbjtcclxuICBvcGFjaXR5IDogMDtcclxuICB0cmFuc2l0aW9uIDogMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbn1cclxuXHJcbiAuY2FyZDpob3ZlciAuY29udGVudCB7XHJcbiAgIG1hcmdpbi10b3AgOiAzMHB4O1xyXG4gICB2aXNpYmlsaXR5IDogdmlzaWJsZTtcclxuICAgb3BhY2l0eSA6IDE7XHJcbiAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2237:
/*!**********************************************************************!*\
  !*** ./src/app/program/program-details/program-details.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramDetailsComponent": () => (/* binding */ ProgramDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);



class ProgramDetailsComponent {
    constructor() {
        this.progSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.programSelected = "kids";
    }
    ngOnInit() {
    }
    onClick(feature) {
        this.progSelect.emit(feature);
    }
}
ProgramDetailsComponent.ɵfac = function ProgramDetailsComponent_Factory(t) { return new (t || ProgramDetailsComponent)(); };
ProgramDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgramDetailsComponent, selectors: [["app-program-details"]], outputs: { progSelect: "progSelect" }, decls: 26, vars: 0, consts: [["id", "kids", 1, "mt-3"], [1, "container"], [1, "fs-2", "btn", "btn-outline-primary", "rounded-pill", "text-center", "mx-auto", "my-3"], [1, "row", "mx-5"], [1, "col", "mb-2"], [1, "card", 2, "width", "25rem"], ["src", "/assets/img/img-20160916-57dbdf3458e2a.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], [1, "card-body", "px-3"], [1, "card-title"], [1, "card-text", "my-3"], ["routerLink", "drawing", 1, "btn", "btn-primary", "my-4"], [1, "col"], ["src", "/assets/img/41Ak6Uot97L._AC_SY1000_.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], [1, "card-text", "my-1"], ["routerLink", "skill", 1, "btn", "btn-primary"]], template: function ProgramDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u0644\u0631\u0633\u0645 \u0648 \u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0627\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0631\u0633\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u064A\u062F\u0648\u064A\u0629 \u0643\u0627\u0644\u0631\u0633\u0645 \u062A\u0633\u0627\u0639\u062F \u0628\u0634\u0643\u0644 \u0643\u0628\u064A\u0631 \u0641\u064A \u062A\u0637\u0648\u064A\u0631 \u062D\u0631\u0643\u0629 \u0627\u0644\u0623\u0635\u0627\u0628\u0639 \u0644\u0644\u0637\u0641\u0644 \u060C \u0648\u0643\u0644 \u0627\u0644\u0645\u0641\u0627\u0635\u0644 \u0627\u0644\u062A\u064A \u064A\u062A\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 \u0641\u064A \u062D\u0631\u0643\u0629 \u0627\u0644\u0623\u0642\u0644\u0627\u0645 \u0648\u0627\u0644\u0631\u0633\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u062A\u0646\u0645\u064A\u0629 \u0645\u0647\u0627\u0631\u0627\u062A\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u062A\u0633\u0627\u0639\u062F\u0647 \u0639\u0644\u0649 \u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A \u062A\u0639\u0627\u0645\u0644\u0647 \u0645\u0639 \u0627\u0644\u0622\u062E\u0631\u064A\u0646 \u0648\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0647\u0645\u060C \u0648\u0627\u0644\u062A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u062A\u0639\u0631\u0641 \u0641\u064A \u0633\u0646 \u0645\u0628\u0643\u0631\u0629 \u0639\u0644\u0649 \u0627\u0647\u062A\u0645\u0627\u0645\u0627\u062A\u0647 \u0648\u0645\u064A\u0648\u0644\u0647\u060C \u0627\u0644\u0623\u0645\u0631 \u0627\u0644\u0630\u064A \u064A\u062E\u062A\u0635\u0631 \u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0648\u0642\u062A \u0641\u064A \u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u064A\u0645\u0643\u0646\u0647 \u0627\u0644\u0646\u062C\u0627\u062D \u0628\u0647\u0627 \u0645\u0633\u062A\u0642\u0628\u0644\u0627\u064B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3883:
/*!********************************************************************!*\
  !*** ./src/app/program/program-details/skills/skills.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SkillsComponent {
    constructor() {
        this.progSelect = 'skills';
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 49, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "p-3", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/41Ak6Uot97L._AC_SY1000_.jpg"], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"], [1, "col-md-5", "mt-5"], ["src", "/assets/img/7-mhrt-ssy-ltlym-tflk-fy-mr-lsntyn.jpg", 1, "img-fluid", "rounded-pill", 2, "height", "350px"], ["src", "/assets/img/\u0623\u0641\u0636\u0644-\u0627\u0644\u0623\u062F\u0648\u0627\u062A-\u0644\u062A\u0646\u0645\u064A\u0629-\u0645\u0647\u0627\u0631\u0627\u062A-\u0637\u0641\u0644\u0643.png", 1, "img-fluid", "mt-5", "rounded-pill"], ["src", "/assets/img/\u0623\u0644\u0639\u0627\u0628-\u0623\u0637\u0641\u0627\u0644-\u0639\u0645\u0631-\u0633\u0646\u062A\u064A\u0646.jpg", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "350px"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u062A\u0646\u0645\u064A\u0629 \u0645\u0647\u0627\u0631\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0647\u064A \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0648\u0627\u0644\u0642\u062F\u0631\u0629 \u0639\u0644\u0649 \u0623\u0646 \u062A\u0642\u0648\u0645 \u0628\u0646\u0634\u0627\u0637 \u0623\u0648 \u0641\u0639\u0644 \u0645\u0639\u064A\u0646 \u0628\u0637\u0631\u064A\u0642\u0629 \u062C\u064A\u062F\u0629 \u0648\u0645\u0646\u0636\u0628\u0637\u0629\u060C \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062E\u0636\u0648\u0639 \u0644\u0644\u0645\u0645\u0627\u0631\u0633\u0629 \u0648\u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u0645\u0633\u062A\u0645\u0631. \u0623\u0645\u0627 \u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0641\u0647\u0648 \u0645\u0646\u0647\u062C \u0623\u0648 \u0637\u0631\u064A\u0642\u0629 \u062A\u0639\u0645\u0644 \u0639\u0644\u0649 \u0627\u0643\u062A\u0633\u0627\u0628 \u0627\u0644\u0641\u0631\u062F \u0627\u0644\u0642\u062F\u0631\u0629 \u0639\u0644\u0649 \u062A\u0623\u062F\u064A\u0629 \u0641\u0639\u0644 \u0623\u0648 \u0646\u0634\u0627\u0637 \u062C\u062F\u064A\u062F \u062D\u062A\u0649 \u064A\u062A\u0645\u0643\u0646 \u0645\u0646 \u0625\u062A\u0642\u0627\u0646\u0647\u060C \u0648\u0641\u064A \u062D\u0627\u0644\u0629 \u062A\u0646\u0645\u064A\u0629 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0637\u0641\u0627\u0644\u060C \u0641\u0627\u0644\u0623\u0645\u0631 \u064A\u0639\u0646\u064A \u062A\u062F\u0631\u064A\u0628\u0647\u0645 \u0628\u0634\u0643\u0644 \u0645\u0633\u062A\u0645\u0631 \u0639\u0644\u0649 \u0627\u0644\u0627\u062A\u064A\u0627\u0646 \u0628\u0641\u0639\u0644 \u0645\u0639\u064A\u0646\u060C \u0623\u0648 \u0627\u062A\u0628\u0627\u0639 \u0645\u0646\u0647\u062C\u064A\u0629 \u0641\u064A \u0627\u0644\u062A\u0641\u0643\u064A\u0631 \u0648\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0627\u0644\u064A\u0648\u0645\u064A\u060C \u0633\u0648\u0627\u0621 \u0645\u0639 \u0623\u0633\u0631\u0647\u0645 \u0623\u0648 \u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0645\u0646 \u062D\u0648\u0644\u0647\u0645. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u062A\u0646\u0645\u064A\u0629 \u0645\u0647\u0627\u0631\u0627\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u062A\u0633\u0627\u0639\u062F\u0647 \u0639\u0644\u0649 \u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A \u062A\u0639\u0627\u0645\u0644\u0647 \u0645\u0639 \u0627\u0644\u0622\u062E\u0631\u064A\u0646 \u0648\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0647\u0645\u060C \u0648\u0627\u0644\u062A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u062A\u0639\u0631\u0641 \u0641\u064A \u0633\u0646 \u0645\u0628\u0643\u0631\u0629 \u0639\u0644\u0649 \u0627\u0647\u062A\u0645\u0627\u0645\u0627\u062A\u0647 \u0648\u0645\u064A\u0648\u0644\u0647\u060C \u0627\u0644\u0623\u0645\u0631 \u0627\u0644\u0630\u064A \u064A\u062E\u062A\u0635\u0631 \u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0648\u0642\u062A \u0641\u064A \u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u064A\u0645\u0643\u0646\u0647 \u0627\u0644\u0646\u062C\u0627\u062D \u0628\u0647\u0627 \u0645\u0633\u062A\u0642\u0628\u0644\u0627\u064B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0641\u0647\u0648 \u0645\u0646\u0647\u062C \u0623\u0648 \u0637\u0631\u064A\u0642\u0629 \u062A\u0639\u0645\u0644 \u0639\u0644\u0649 \u0627\u0643\u062A\u0633\u0627\u0628 \u0627\u0644\u0641\u0631\u062F \u0627\u0644\u0642\u062F\u0631\u0629 \u0639\u0644\u0649 \u062A\u0623\u062F\u064A\u0629 \u0641\u0639\u0644 \u0623\u0648 \u0646\u0634\u0627\u0637 \u062C\u062F\u064A\u062F \u062D\u062A\u0649 \u064A\u062A\u0645\u0643\u0646 \u0645\u0646 \u0625\u062A\u0642\u0627\u0646\u0647\u060C \u0648\u0641\u064A \u062D\u0627\u0644\u0629 \u062A\u0646\u0645\u064A\u0629 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0637\u0641\u0627\u0644\u060C \u0641\u0627\u0644\u0623\u0645\u0631 \u064A\u0639\u0646\u064A \u062A\u062F\u0631\u064A\u0628\u0647\u0645 \u0628\u0634\u0643\u0644 \u0645\u0633\u062A\u0645\u0631 \u0639\u0644\u0649 \u0627\u0644\u0627\u062A\u064A\u0627\u0646 \u0628\u0641\u0639\u0644 \u0645\u0639\u064A\u0646\u060C \u0623\u0648 \u0627\u062A\u0628\u0627\u0639 \u0645\u0646\u0647\u062C\u064A\u0629 \u0641\u064A \u0627\u0644\u062A\u0641\u0643\u064A\u0631 \u0648\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0627\u0644\u064A\u0648\u0645\u064A\u060C \u0633\u0648\u0627\u0621 \u0645\u0639 \u0623\u0633\u0631\u0647\u0645 \u0623\u0648 \u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0645\u0646 \u062D\u0648\u0644\u0647\u0645. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u062A\u0646\u0642\u0633\u0645 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0625\u0644\u0649 \u062E\u0645\u0633\u0629 \u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0648\u0630\u0644\u0643 \u0637\u0628\u0642\u064B\u0627 \u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0627 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0627\u0644\u062A\u0637\u0648\u0631 \u0627\u0644\u0645\u0639\u0631\u0641\u064A: \u064A\u0645\u062B\u0644 \u0627\u0644\u062A\u0637\u0648\u0631 \u0627\u0644\u0645\u0639\u0631\u0641\u064A \u0623\u062D\u062F \u0623\u0646\u0648\u0627\u0639 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0642\u062F\u0631\u0629 \u0627\u0644\u0637\u0641\u0644 \u0639\u0644\u0649 \u0627\u0644\u062A\u0639\u0644\u0645 \u0648\u062D\u0644 \u0627\u0644\u0645\u0633\u0627\u0626\u0644 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0644\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0639\u0627\u0637\u0641\u064A\u0629: \u0648\u0647\u0646\u0627 \u062A\u0638\u0647\u0631 \u0642\u062F\u0631\u0629 \u0627\u0644\u0637\u0641\u0644 \u0639\u0644\u0649 \u0627\u0644\u062A\u0641\u0627\u0639\u0644 \u0648\u0627\u0644\u062A\u062C\u0627\u0648\u0628 \u0645\u0639 \u0627\u0644\u0622\u062E\u0631\u064A\u0646 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0627\u0644\u0643\u0644\u0627\u0645 \u0648\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0644\u063A\u0629: \u0648\u0647\u064A \u0625\u062D\u062F\u0649 \u0623\u0646\u0648\u0627\u0639 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u0647\u0627\u0645\u0629 \u0627\u0644\u062A\u064A \u062A\u0639\u0628\u0631 \u0639\u0646 \u0645\u062F\u0649 \u0642\u062F\u0631\u0629 \u0627\u0644\u0637\u0641\u0644 \u0639\u0644\u0649 \u0641\u0647\u0645 \u0627\u0644\u0644\u063A\u0629 \u0648\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u0647\u064A\u0643\u0648\u0646 \u0639\u0646\u062F\u0643 \u0627\u0644\u0642\u062F\u0631\u0647 \u0639\u0644\u064A \u062A\u062D\u0633\u064A\u0646 \u0630\u0627\u0643\u0631\u062A\u0643 \u0627\u0644\u0639\u0636\u0644\u064A\u0647 \u0648\u0645\u0647\u0627\u0631\u0647 \u0627\u064A\u062F\u0643 \u0648\u062A\u062D\u0633\u064A\u0646 \u0645\u0647\u0627\u0631\u0647 \u0639\u064A\u0646\u0643 \u0641\u064A \u0631\u0624\u064A\u0647 \u0648\u062A\u062D\u0644\u064A\u0644 \u0648\u062A\u0628\u0633\u064A\u0637 \u0627\u0644\u0644\u0648\u062D\u0627\u062A \u0628\u0633\u0647\u0648\u0644\u0647 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u062D\u0631\u0643\u064A\u0629 \u0627\u0644\u062F\u0642\u064A\u0642\u0629: \u0648\u0647\u064A \u0648\u0627\u062D\u062F\u0629 \u0645\u0646 \u0623\u0646\u0648\u0627\u0639 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0648\u062A\u0645\u062B\u0644 \u0645\u062F\u0649 \u0642\u062F\u0631\u0629 \u0627\u0644\u0637\u0641\u0644 \u0639\u0644\u0649 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0639\u0636\u0644\u0627\u062A\u0647 \u0627\u0644\u0635\u063A\u064A\u0631\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u062D\u0631\u0643\u064A\u0629 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629: \u0648\u0647\u064A \u0623\u064A\u0636\u064B\u0627 \u0648\u0627\u062D\u062F\u0629 \u0645\u0646 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0648\u062A\u062A\u0645\u062B\u0644 \u0641\u064A \u0645\u062F\u0649 \u0642\u062F\u0631\u0629 \u0627\u0644\u0637\u0641\u0644 \u0639\u0644\u0649 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0639\u0636\u0644\u0627\u062A\u0647 \u0627\u0644\u0643\u0628\u064A\u0631\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0627\u0644\u0631\u0624\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0639\u0631\u0641\u0629 \u0645\u0627 \u064A\u0644\u0641\u062A \u0627\u0646\u062A\u0628\u0627\u0647 \u0627\u0644\u0623\u0637\u0641\u0627\u0644\u060C \u0648\u0645\u0627 \u0647\u064A \u0627\u0644\u0645\u0647\u0627\u0631\u0629 \u0627\u0644\u062A\u064A \u064A\u0633\u062A\u0637\u064A\u0639\u0648\u0646 \u0625\u062A\u0642\u0627\u0646\u0647\u0627\u060C \u0623\u0648 \u0627\u0644\u0645\u0648\u0647\u0628\u0629 \u0627\u0644\u062A\u064A \u064A\u0645\u062A\u0644\u0643\u0648\u0646\u0647\u0627\u060C \u0648\u0627\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 \u062A\u0648\u0641\u064A\u0631 \u0637\u0631\u064A\u0642\u0629 \u0622\u0645\u0646\u0629 \u0648\u0633\u0647\u0644\u0629 \u0644\u0647\u0645\u060C \u0644\u064A\u062A\u0645\u0643\u0651\u0646\u0648\u0627 \u0645\u0646 \u0627\u0643\u062A\u0634\u0627\u0641\u0647\u0627\u060C \u0648\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0637\u0631\u0642 \u0645\u0628\u062A\u0643\u0631\u0629 \u0648\u0633\u0647\u0644\u0629 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0645\u0627 \u064A\u0631\u064A\u062F\u0648\u0646\u060C \u0648\u062A\u0639\u0644\u064A\u0645\u0647\u0645 \u0645\u0647\u0627\u0631\u0627\u062A \u062D\u0644\u0651 \u0627\u0644\u0645\u0634\u0627\u0643\u0644\u060C \u0641\u0639\u0644\u0649 \u0633\u0628\u064A\u0644 \u0627\u0644\u0645\u062B\u0627\u0644 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u0637\u0641\u0644 \u064A\u0641\u0636\u0651\u0644 \u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u0627\u0644\u0646\u0628\u0627\u062A\u0627\u062A\u060C \u0641\u0645\u0646 \u0627\u0644\u0645\u0645\u0643\u0646 \u0648\u0636\u0639\u0647\u0627 \u0628\u0639\u064A\u062F\u0627\u064B \u0639\u0646\u0647\u060C \u0648\u062A\u0648\u0641\u064A\u0631 \u0644\u0647 \u0628\u062F\u064A\u0644 \u0642\u0631\u064A\u0628 \u0622\u0645\u0646\u060C \u0644\u064A\u0644\u0639\u0628 \u0628\u0647 \u0648\u064A\u0633\u062A\u0643\u0634\u0641\u0647. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0UsbUJBQW1COztFQUVuQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3Qjs7QUFFMUI7OztDQUdDO0VBQ0Msa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjOztFQUVkLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEI7OztDQUNDO0VBQ0MsY0FBYztBQUNoQjs7O0NBR0M7RUFDQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7O0VBRWQsVUFBVTtFQUNWLFNBQVM7O0VBRVQsV0FBVztBQUNiOzs7Q0FFQztFQUNDLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOzs7Q0FFQztFQUNDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7O0VBRW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNkJBQTZCOztBQUUvQjs7O0NBRUM7R0FDRSxpQkFBaUI7R0FDakIsb0JBQW9CO0dBQ3BCLFdBQVc7R0FDWCxzQkFBc0I7O0FBRXpCIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuXHJcbiAgZGlzcGxheSA6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuXHJcbiAuY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodCA6IDIxNXB4O1xyXG5cclxuICBtYXJnaW4gOiAzMHB4IDEwcHg7XHJcbiAgcGFkZGluZyA6IDIwcHggMTVweDtcclxuXHJcbiAgZGlzcGxheSA6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgYm94LXNoYWRvdyA6IDAgNXB4IDIwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gIHRyYW5zaXRpb24gOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlci1yYWRpdXMgOiAxNXB4O1xyXG59XHJcbiAuY2FyZDpob3ZlciB7XHJcbiAgaGVpZ2h0IDogNDIwcHg7XHJcbn1cclxuXHJcblxyXG4gLmNhcmQgLmltYWdlIHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gIHdpZHRoIDogNTAwcHg7XHJcbiAgaGVpZ2h0IDogNTAwcHg7XHJcblxyXG4gIHRvcCA6IC00MCU7XHJcbiAgbGVmdDogOHB4O1xyXG5cclxuICB6LWluZGV4IDogMTtcclxufVxyXG5cclxuIC5jYXJkIC5pbWFnZSBpbWcge1xyXG4gIHdpZHRoIDogNTAwcHg7XHJcbiAgaGVpZ2h0OjIxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXMgOiAxNXB4O1xyXG59XHJcblxyXG4gLmNhcmQgLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgdG9wIDogLTE0MHB4O1xyXG4gIHBhZGRpbmcgOiAxMHB4IDE1cHg7XHJcbiAgY29sb3IgOiAjMTExO1xyXG4gIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcblxyXG4gIHZpc2liaWxpdHkgOiBoaWRkZW47XHJcbiAgb3BhY2l0eSA6IDA7XHJcbiAgdHJhbnNpdGlvbiA6IDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG59XHJcblxyXG4gLmNhcmQ6aG92ZXIgLmNvbnRlbnQge1xyXG4gICBtYXJnaW4tdG9wIDogMzBweDtcclxuICAgdmlzaWJpbGl0eSA6IHZpc2libGU7XHJcbiAgIG9wYWNpdHkgOiAxO1xyXG4gICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6850:
/*!**********************************************!*\
  !*** ./src/app/program/program.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramComponent": () => (/* binding */ ProgramComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


const _c0 = function () { return ["lang"]; };
class ProgramComponent {
    constructor() {
        this.programSelected = "";
        this.progSelect = "";
    }
    ngOnInit() {
    }
    onSelected(feature) {
        this.programSelected = feature;
        this.progSelect = '';
    }
    onNavi(feat) {
        this.progSelect = feat;
        this.programSelected = '';
    }
}
ProgramComponent.ɵfac = function ProgramComponent_Factory(t) { return new (t || ProgramComponent)(); };
ProgramComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgramComponent, selectors: [["app-program"]], decls: 21, vars: 2, consts: [[1, "container-fluid"], [1, "row", "mx-1"], [1, "col-md-5"], [1, "list-group"], [1, "fs-3", "text-secondary", "px-3"], ["routerLinkActive", "active", 1, "list-group-item", "p-3", "clearfix", 3, "routerLink"], ["routerLink", "computer", "routerLinkActive", "active", 1, "list-group-item", "px-3", "py-3", "clearfix"], ["routerLink", "./usy-math", "routerLinkActive", "active", 1, "list-group-item", "py-3", "clearfix"], ["routerLink", "skills", "routerLinkActive", "active", 1, "list-group-item", "p-3", "clearfix"], ["routerLink", "quran", "routerLinkActive", "active", 1, "list-group-item", "p-3", "clearfix"], ["width", "700", "height", "400", "controls", ""], ["src", "/assets/vidio/VID-20220211-WA0001.mp4", "type", "video/mp4"]], template: function ProgramComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0627\u0644\u062A\u062E\u0635\u0635\u0627\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0627\u0644\u0644\u063A\u0627\u062A \u0648\u0627\u0644\u0622\u062F\u0627\u0628 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0627\u0644\u0639\u0644\u0648\u0645 \u0648\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0630\u0647\u0646\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u0631\u0633\u0645 \u0648 \u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "video", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "source", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4290:
/*!**************************************************************************!*\
  !*** ./src/app/program/qraan/qraan-learning/qraan-learning.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QraanLearningComponent": () => (/* binding */ QraanLearningComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class QraanLearningComponent {
    constructor() {
        this.progSelect = 'qraan-learning';
    }
    ngOnInit() {
    }
}
QraanLearningComponent.ɵfac = function QraanLearningComponent_Factory(t) { return new (t || QraanLearningComponent)(); };
QraanLearningComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QraanLearningComponent, selectors: [["app-qraan-learning"]], decls: 43, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "p-3", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/\u062A\u0639\u0644\u064A\u0645-\u0627\u0644\u0627\u0637\u0641\u0627\u0644-\u0627\u0644\u0642\u0631\u0622\u0646-\u0627\u0644\u0643\u0631\u064A\u0645.jpg"], [1, "content"], [1, "card-title"], [1, "card-text", "my-3"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"], [1, "col-md-5", "mt-5"], ["src", "/assets/img/\u0645\u0627_\u0647\u0648_\u0639\u062F\u062F_\u0633\u0648\u0631_\u0627\u0644\u0642\u0631\u0622\u0646_\u0627\u0644\u0643\u0631\u064A\u0645.jpg", 1, "img-fluid", "rounded-pill", 2, "height", "400px"], ["src", "/assets/img/2014_1447145089.jpg", 1, "img-fluid", "mt-5", "rounded-pill", 2, "width", "700px"], ["src", "/assets/img/1595808674.webp", 1, "img-fluid", "mt-5", "rounded-pill", 2, "height", "400px"]], template: function QraanLearningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 \u0647\u0648 \u062A\u0642\u0648\u064A\u0629 \u0639\u0644\u0627\u0642\u0629 \u0627\u0644\u0637\u0641\u0644 \u0628\u0627\u0644\u062E\u0627\u0644\u0642 \u0639\u0632 \u0648\u062C\u0644\u060C \u0648\u062A\u0639\u0644\u064A\u0645\u0647 \u0623\u062D\u0643\u0627\u0645\u060C \u0648\u0623\u0635\u0648\u0644 \u0627\u0644\u062F\u064A\u0646 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 \u0647\u0648 \u0643\u0644\u0627\u0645 \u0627\u0644\u0644\u0647 -\u062A\u0639\u0627\u0644\u0649-\u060C \u0627\u0644\u0645\u064F\u0646\u0632\u0644 \u0639\u0644\u0649 \u0646\u0628\u064A\u0651\u0647 \u0645\u062D\u0645\u062F -\u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645-\u060C \u0627\u0644\u0645\u0639\u062C\u0632 \u0628\u0644\u0641\u0638\u0647\u060C \u0627\u0644\u0645\u062A\u0639\u0628\u0651\u062F \u0628\u062A\u0644\u0627\u0648\u062A\u0647\u060C \u0627\u0644\u0645\u064F\u0641\u062A\u062A\u062D \u0628\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0627\u062A\u062D\u0629\u060C \u0648\u0627\u0644\u0645\u064F\u0646\u062A\u0647\u064A \u0628\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u0627\u0633\u060C \u0627\u0644\u0645\u0643\u062A\u0648\u0628 \u0641\u064A \u0627\u0644\u0645\u0635\u0627\u062D\u0641\u060C \u0648\u0627\u0644\u0645\u0646\u0642\u0648\u0644 \u0625\u0644\u064A\u0646\u0627 \u0628\u0627\u0644\u062A\u0648\u0627\u062A\u0631. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0637\u0641\u0648\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0631\u0627\u062D\u0644 \u0627\u0644\u0647\u0627\u0645\u0629 \u0641\u064A \u062D\u064A\u0627\u0629 \u0627\u0644\u0637\u0641\u0644 \u0641\u0647\u0648 \u064A\u062D\u0627\u0648\u0644 \u0641\u064A\u0647\u0627 \u0627\u0644\u0627\u0637\u0644\u0627\u0639\u060C \u0648\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0623\u0634\u064A\u0627\u0621 \u0627\u0644\u062A\u064A \u062A\u062A\u0631\u0633\u062E \u0641\u064A \u0630\u0647\u0646\u0647 \u0645\u0639 \u0645\u0631\u0648\u0631 \u0627\u0644\u0648\u0642\u062A \u0644\u0630\u0644\u0643 \u0641\u0623\u0646 \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645\u060C \u0648\u0647\u0645 \u0641\u064A \u0633\u0646 \u0635\u063A\u064A\u0631 \u0633\u0648\u0641 \u064A\u062C\u0639\u0644 \u0627\u0644\u0642\u0631\u0622\u0646 \u0645\u062D\u0641\u0648\u0638 \u0641\u064A \u0642\u0644\u0648\u0628\u0647\u0645\u060C \u0648\u064A\u062D\u0631\u0635\u0648\u0627 \u0639\u0644\u0649 \u062A\u0644\u0627\u0648\u062A\u0647 \u0628\u0627\u0633\u062A\u0645\u0631\u0627\u0631. \u0648\u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 \u0628\u0645\u0627 \u0641\u064A\u0647 \u0645\u0646 \u062A\u0639\u0627\u0644\u064A\u0645 \u062F\u064A\u0646 \u0627\u0644\u0625\u0633\u0644\u0627\u0645 \u0627\u0644\u062D\u0646\u064A\u0641 \u0633\u0648\u0641 \u064A\u0639\u0644\u0645 \u0623\u0637\u0641\u0627\u0644\u0643\u0645 \u0627\u0644\u0633\u0644\u0648\u0643\u064A\u0627\u062A \u0627\u0644\u0635\u062D\u064A\u062D\u0629\u060C \u0648\u0623\u0646 \u064A\u062E\u0627\u0641\u0648\u0627 \u0645\u0646 \u0627\u0644\u0644\u0647 \u0641\u064A \u0643\u0644 \u0623\u0641\u0639\u0627\u0644\u0647\u0645\u060C \u0648\u0623\u0646 \u064A\u062D\u0631\u0635\u0648\u0627 \u0639\u0644\u0649 \u0641\u0639\u0644 \u0627\u0644\u062E\u064A\u0631\u0627\u062A \u062D\u062A\u0649 \u064A\u0646\u0627\u0644\u0648\u0627 \u0627\u0644\u062C\u0646\u0629 \u0644\u0630\u0644\u0643 \u062A\u0628\u0642\u0649 \u062A\u0639\u0627\u0644\u064A\u0645 \u0627\u0644\u062F\u064A\u0646 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A \u0627\u0644\u062D\u0646\u064A\u0641 \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629 \u0641\u064A \u062C\u0645\u064A\u0639 \u0635\u0648\u0631 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 \u0631\u0627\u0633\u062E\u0629 \u0641\u064A \u0639\u0642\u0648\u0644 \u0623\u0637\u0641\u0627\u0644\u0646\u0627 \u0645\u0646\u0630 \u0627\u0644\u0635\u063A\u0631\u060C \u0648\u062D\u062A\u0649 \u0627\u0644\u0645\u0634\u064A\u0628. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u0628\u0639\u0636 \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u062A\u064A \u062A\u0633\u0627\u0639\u062F \u0639\u0644\u0649 \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0637\u0631\u064A\u0642\u0629 \u062A\u0641\u0633\u064A\u0631 \u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0642\u0631\u0622\u0646: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u062A\u0639\u062A\u0628\u0631 \u0637\u0631\u064A\u0642\u0629 \u0634\u0631\u062D\u060C \u0648\u062A\u0641\u0633\u064A\u0631 \u0645\u0639\u0627\u0646\u064A \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 \u0645\u0646 \u0623\u0643\u062B\u0631 \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u062A\u064A \u062A\u0633\u0627\u0639\u062F \u0627\u0644\u0637\u0641\u0644 \u0639\u0644\u0649 \u062D\u0641\u0638\u060C \u0648\u0641\u0647\u0645 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 \u0628\u0645\u0646\u062A\u0647\u0649 \u0627\u0644\u0633\u0647\u0648\u0644\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u062D\u0641\u064A\u0632\u060C \u0648\u0627\u0644\u062A\u0634\u062C\u064A\u0639: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0645\u0646 \u0623\u0643\u062B\u0631 \u0627\u0644\u0623\u0633\u0627\u0644\u064A\u0628 \u0627\u0644\u062A\u064A \u062A\u0633\u0639\u062F \u0627\u0644\u0637\u0641\u0644\u060C \u0648\u062A\u0634\u062C\u0639\u0647 \u0639\u0644\u0649 \u062A\u0646\u0641\u064A\u0630 \u0623\u064A \u0645\u0647\u0645\u0647 \u062A\u0633\u0646\u062F \u0623\u0644\u064A\u0647 \u0647\u064A \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u062D\u0641\u064A\u0632\u060C \u0648\u0627\u0644\u062A\u0634\u062C\u064A\u0639 \u0644\u0630\u0644\u0643 \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0628\u0639 \u0627\u0644\u0623\u0628\u0648\u064A\u0646 \u0646\u0641\u0633 \u0627\u0644\u0637\u0631\u064A\u0642\u0629 \u0645\u0639 \u0627\u0644\u0637\u0641\u0644 \u0639\u0646\u062F\u0645\u0627 \u064A\u0631\u064A\u062F\u0648\u0646 \u0645\u0646\u0647 \u0623\u0646 \u064A\u062D\u0641\u0638 \u0627\u0644\u0642\u0631\u0622\u0646 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0627\u0644\u0631\u0624\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u062A\u0639\u0644\u0645 \u0627\u0644\u0642\u0631\u0622\u0646 \u0641\u064A \u0627\u0644\u0635\u063A\u0631 \u0644\u0647 \u0641\u0648\u0627\u0626\u062F\u0647 \u0627\u0644\u0643\u0628\u064A\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u062C\u064A\u0627\u0644 \u0644\u0639\u0644\u064A \u0623\u0630\u0643\u0631 \u0645\u0646\u0647\u0627: - \u0627\u0644\u062A\u0639\u0644\u0642 \u0628\u0643\u062A\u0627\u0628 \u0627\u0644\u0644\u0647 \u0648\u062D\u0628\u0647 \u0648\u062A\u0639\u0638\u064A\u0645\u0647 \u0648\u062A\u0648\u0642\u064A\u0631\u0647. - \u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0644\u0633\u0627\u0646 \u0648\u0643\u0633\u0628 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0644\u063A\u0648\u064A\u0629 \u0648\u0641\u0647\u0645 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0648\u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u0644\u0633\u0627\u0646 \u0639\u0644\u0649 \u0627\u0644\u0641\u0635\u0627\u062D\u0629 \u0648\u0627\u0644\u0628\u064A\u0627\u0646. - \u0641\u0647\u0645 \u0645\u0628\u0627\u062F\u0626 \u0627\u0644\u062F\u064A\u0646 \u0648\u0642\u064A\u0645 \u0627\u0644\u0625\u0633\u0644\u0627\u0645 \u0648\u0623\u062D\u0643\u0627\u0645\u0647. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyYWFuLWxlYXJuaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxtQkFBbUI7O0VBRW5CLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCOztBQUUxQjs7O0NBR0M7RUFDQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7O0VBRWQsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7O0NBQ0M7RUFDQyxjQUFjO0FBQ2hCOzs7Q0FHQztFQUNDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYzs7RUFFZCxVQUFVO0VBQ1YsU0FBUzs7RUFFVCxXQUFXO0FBQ2I7OztDQUVDO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7OztDQUVDO0VBQ0MsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2QkFBNkI7O0FBRS9COzs7Q0FFQztHQUNFLGlCQUFpQjtHQUNqQixvQkFBb0I7R0FDcEIsV0FBVztHQUNYLHNCQUFzQjs7QUFFekIiLCJmaWxlIjoicXJhYW4tbGVhcm5pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcblxyXG4gLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQgOiAyMTVweDtcclxuXHJcbiAgbWFyZ2luIDogMzBweCAxMHB4O1xyXG4gIHBhZGRpbmcgOiAyMHB4IDE1cHg7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gIGJveC1zaGFkb3cgOiAwIDVweCAyMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICB0cmFuc2l0aW9uIDogMC4zcyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG4gLmNhcmQ6aG92ZXIge1xyXG4gIGhlaWdodCA6IDQyMHB4O1xyXG59XHJcblxyXG5cclxuIC5jYXJkIC5pbWFnZSB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodCA6IDUwMHB4O1xyXG5cclxuICB0b3AgOiAtNDAlO1xyXG4gIGxlZnQ6IDhweDtcclxuXHJcbiAgei1pbmRleCA6IDE7XHJcbn1cclxuXHJcbiAuY2FyZCAuaW1hZ2UgaW1nIHtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodDoyMTVweDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG5cclxuIC5jYXJkIC5jb250ZW50IHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gIHRvcCA6IC0xNDBweDtcclxuICBwYWRkaW5nIDogMTBweCAxNXB4O1xyXG4gIGNvbG9yIDogIzExMTtcclxuICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG5cclxuICB2aXNpYmlsaXR5IDogaGlkZGVuO1xyXG4gIG9wYWNpdHkgOiAwO1xyXG4gIHRyYW5zaXRpb24gOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxufVxyXG5cclxuIC5jYXJkOmhvdmVyIC5jb250ZW50IHtcclxuICAgbWFyZ2luLXRvcCA6IDMwcHg7XHJcbiAgIHZpc2liaWxpdHkgOiB2aXNpYmxlO1xyXG4gICBvcGFjaXR5IDogMTtcclxuICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4996:
/*!**************************************************!*\
  !*** ./src/app/program/qraan/qraan.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QraanComponent": () => (/* binding */ QraanComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);



class QraanComponent {
    constructor() {
        this.progSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.programSelected = 'qraan';
    }
    ngOnInit() {
    }
    onClick(feature) {
        this.progSelect.emit(feature);
    }
}
QraanComponent.ɵfac = function QraanComponent_Factory(t) { return new (t || QraanComponent)(); };
QraanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QraanComponent, selectors: [["app-qraan"]], outputs: { progSelect: "progSelect" }, decls: 16, vars: 0, consts: [["id", "kids", 1, "mt-3"], [1, "container"], [1, "fs-2", "btn", "btn-outline-primary", "rounded-pill", "text-center", "mx-auto", "my-3"], [1, "row", "mx-5"], [1, "col", "mb-2"], [1, "card", 2, "width", "30rem"], ["src", "/assets/img/images\u0642\u0631\u0627\u0646.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"], [1, "card-body", "px-3"], [1, "card-title"], [1, "card-text", "my-3"], ["routerLink", "quran-learning", 1, "btn", "btn-primary", "my-4"]], template: function QraanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 \u0647\u0648 \u0643\u0644\u0627\u0645 \u0627\u0644\u0644\u0647 -\u062A\u0639\u0627\u0644\u0649-\u060C \u0627\u0644\u0645\u064F\u0646\u0632\u0644 \u0639\u0644\u0649 \u0646\u0628\u064A\u0651\u0647 \u0645\u062D\u0645\u062F -\u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645-\u060C \u0627\u0644\u0645\u0639\u062C\u0632 \u0628\u0644\u0641\u0638\u0647\u060C \u0627\u0644\u0645\u062A\u0639\u0628\u0651\u062F \u0628\u062A\u0644\u0627\u0648\u062A\u0647\u060C \u0627\u0644\u0645\u064F\u0641\u062A\u062A\u062D \u0628\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0627\u062A\u062D\u0629\u060C \u0648\u0627\u0644\u0645\u064F\u0646\u062A\u0647\u064A \u0628\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u0627\u0633\u060C \u0627\u0644\u0645\u0643\u062A\u0648\u0628 \u0641\u064A \u0627\u0644\u0645\u0635\u0627\u062D\u0641\u060C \u0648\u0627\u0644\u0645\u0646\u0642\u0648\u0644 \u0625\u0644\u064A\u0646\u0627 \u0628\u0627\u0644\u062A\u0648\u0627\u062A\u0631. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxcmFhbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2307:
/*!**********************************************************!*\
  !*** ./src/app/program/usy-mathm/usy-mathm.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsyMathmComponent": () => (/* binding */ UsyMathmComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);



class UsyMathmComponent {
    constructor() {
        this.progSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.programSelected = 'usy-math';
    }
    ngOnInit() {
    }
    onClick(feature) {
        this.progSelect.emit(feature);
    }
}
UsyMathmComponent.ɵfac = function UsyMathmComponent_Factory(t) { return new (t || UsyMathmComponent)(); };
UsyMathmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsyMathmComponent, selectors: [["app-usy-mathm"]], outputs: { progSelect: "progSelect" }, decls: 26, vars: 0, consts: [["id", "yothymath", 1, "mt-3"], [1, "container"], [1, "fs-2", "btn", "btn-outline-primary", "rounded-pill", "text-center", "mx-auto", "my-3"], [1, "row", "mx-5"], [1, "col", "mb-2"], [1, "card", "mb-2", 2, "width", "25rem", "height", "35rem"], ["src", "/assets/img/271340835_1923144161208809_2232785223819993671_n.jpg", "alt", "...", 1, "card-img-top", 2, "height", "300px"], [1, "card-body", "px-3"], [1, "card-title"], [1, "card-text"], ["routerLink", "usy", 1, "btn", "btn-primary"], ["src", "/assets/img/271633403_2429958527140230_3076200020634969479_n.jpg", "alt", "...", 1, "card-img-top", 2, "height", "300px"], ["routerLink", "vedic", 1, "btn", "btn-primary"]], template: function UsyMathmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0632\u0647\u0646\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0630\u0647\u0646\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0647\u0648 \u0628\u0631\u0646\u0627\u0645\u062C \u062A\u0637\u0648\u064A\u0631 \u0639\u0642\u0644\u064A \u0645\u0645\u064A\u0632 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 \u0645\u062E\u0635\u0635 \u0644\u062A\u0641\u0639\u064A\u0644 \u0637\u0627\u0642\u062A\u0647\u0645 \u0627\u0644\u0639\u0642\u0644\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u0646\u0629 \u0641\u064A \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0639\u0645\u0631\u064A\u0629 \u0627\u0644\u062A\u064A \u064A\u0628\u0644\u063A \u0641\u064A\u0647\u0627 \u0627\u0644\u0639\u0642\u0644 \u0630\u0631\u0648\u0629 \u062A\u0637\u0648\u0631\u0647 \u0648\u0646\u0645\u0648\u0647 \u0644\u0639\u0645\u0631 \u0627\u0644\u0637\u0641\u0644 \u0628\u064A\u0646 4 \u0627\u0644\u064A 13 \u0633\u0646\u0629 \u0635\u0645\u0645 \u0647\u0630\u0627 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0644\u0625\u0633\u062A\u062B\u0645\u0627\u0631 \u0627\u0644\u0633\u0646\u0648\u0627\u062A \u0627\u0644\u0623\u0648\u0644\u0649 \u0645\u0646 \u062D\u064A\u0627\u0629 \u0627\u0644\u0623\u0637\u0641\u0627\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0643\u0648\u0631\u0633 \u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u0627 ( Vedic math)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0647\u0646\u0627\u0643 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0645\u064A\u0632\u0627\u062A \u0646\u0638\u0627\u0645 \u0627\u0644\u0641\u064A\u062F\u064A\u0629 ,\u0627\u0644\u062A\u0645\u0627\u0633\u0643 ,\u0627\u0644\u0645\u0631\u0648\u0646\u0647 \u0641\u0649 \u062D\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0647 ,\u0627\u0644\u062E\u064A\u0627\u0644 \u0648 \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 ,\u064A\u0639\u0632\u0632 \u0627\u0644\u0625\u0628\u062F\u0627\u0639 ,\u0645\u062E\u0627\u0637\u0628\u0629 \u0643\u0644 \u0627\u0644\u0641\u064A\u0626\u0627\u062A ,\u0633\u0631\u0639\u0629 \u0627\u0644\u0628\u062F\u064A\u0647\u0629 ,\u0627\u0644\u0641\u0639\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u0633\u0631\u0639\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0627\u0644\u062F\u0648\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".container[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzeS1tYXRobS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJ1c3ktbWF0aG0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3653:
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth.service */ 2891);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);







function SignInComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
} }
function SignInComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignInComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0644\u0648 \u0633\u0645\u062D\u062A \u0627\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0633\u0631 \u0645\u0646\u0627\u0633\u0628\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SignInComponent {
    constructor(auth, router, http) {
        this.auth = auth;
        this.router = router;
        this.http = http;
        this.isLoading = false;
        this.error = '';
        this.signForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('[a-zA-Z]+$')]),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]),
        });
        this.userName = this.signForm.value.userName;
    }
    ngOnInit() {
    }
    onSignIn() {
        if (!this.signForm.valid) {
            return;
        }
        const userData = this.signForm.getRawValue();
        this.http.put('https://lotus-acadmey-default-rtdb.firebaseio.com/UserData.json', userData).subscribe();
        const email = this.signForm.value.email;
        const password = this.signForm.value.password;
        let authObs;
        authObs = this.auth.signUp(email, password);
        authObs.subscribe(resData => {
            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/enter']);
        }, errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
        });
        this.signForm.reset();
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], inputs: { userName: "userName" }, decls: 53, vars: 4, consts: [["id", "sign mt-5 "], [1, "container"], [1, "mt-5", "text-center", "fs-1", "text-secondary"], [1, "d-flex", "justify-content-center"], [1, "lead"], ["routerLink", "/enter", 1, "btn", "text-primary"], ["href", "https://accounts.google.com/", "target", "blank", 1, "btn", "border", "px-5", "py-4", "mx-4", "bg-light"], [1, "fab", "fa-google", "fa-2x", "mx-2", "text-primary"], ["href", "https://www.facebook.com/", "target", "blank", 1, "btn", "border", "px-5", "py-4", "mx-4", "bg-light"], [1, "fab", "fa-facebook", "fa-2x", "mx-2", "text-primary"], [1, "text-center", "my-3"], [1, "m-auto", 3, "formGroup", "ngSubmit"], ["class", "alert alert-danger my-2", 4, "ngIf"], [1, "form-group"], ["for", "email", 1, "fs-4", "mx-2", "text-secondary"], ["type", "email", "placeholder", "Please Enter Your Email", "formControlName", "email", 1, "form-control", "py-3"], ["class", "text-danger", 4, "ngIf"], [1, "form-group", "mt-4"], ["for", "text", 1, "fs-4", "mx-3", "text-secondary"], ["type", "text", "placeholder", "Please Enter Your Name", "formControlName", "name", 1, "form-control", "py-3"], [1, "text-center"], ["type", "text", "placeholder", "Please Enter Your User Name ", "formControlName", "userName", 1, "form-control", "py-3"], ["for", "phone", 1, "fs-4", "mx-3", "text-secondary"], ["type", "tel", "placeholder", "Please Enter Your Phone Number", "formControlName", "phone", 1, "form-control", "py-3"], ["for", "password", 1, "fs-4", "mx-3", "text-secondary"], ["type", "password", "placeholder", "Please Enter Your Password", "formControlName", "password", 1, "form-control", "py-3"], [1, "d-grid", "my-5"], ["type", "submit", 1, "btn", "btn-primary", "p-3"], [1, "alert", "alert-danger", "my-2"], [1, "text-danger"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0623\u0646\u0634\u0649\u0621 \u062D\u0633\u0627\u0628\u0643 \u0627\u0644\u0645\u062C\u0627\u0646\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0647\u0644 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u0644\u062F\u064A\u0646\u0627 \u061F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0639\u0646 \u0637\u0631\u064A\u0642 \u062C\u0648\u062D\u0644 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0639\u0646 \u0637\u0631\u064A\u0642 \u0641\u064A\u0633\u0628\u0648\u0643 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0627\u0648");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_19_listener() { return ctx.onSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SignInComponent_div_20_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SignInComponent_span_25_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0630\u064A \u0633\u064A\u0639\u0631\u0651\u0641 \u0639\u0646\u0643 \u0641\u064A \u0645\u0633\u0627\u0642\u0627\u062A\u0643 (\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u063A\u064A\u064A\u0631\u0647 \u0644\u0627\u062D\u0642\u064B\u0627) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u0631\u0642\u0645 \u0627\u0644\u062A\u0644\u064A\u0641\u0648\u0646 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u0666 \u0623\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, SignInComponent_span_49_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " \u0633\u062C\u0644 \u0627\u0644\u0627\u0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !((tmp_2_0 = ctx.signForm.get("email")) == null ? null : tmp_2_0.valid) && ((tmp_2_0 = ctx.signForm.get("email")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !((tmp_3_0 = ctx.signForm.get("password")) == null ? null : tmp_3_0.valid) && ((tmp_3_0 = ctx.signForm.get("password")) == null ? null : tmp_3_0.touched));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["form[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n@media  (max-width: 568px){\r\n  form[_ngcontent-%COMP%]{\r\n    width: 75%;\r\n  }\r\n}\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%]{\r\n  border: 1px solid red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUdBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNpZ24taW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5AbWVkaWEgIChtYXgtd2lkdGg6IDU2OHB4KXtcclxuICBmb3Jte1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3975:
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamComponent": () => (/* binding */ TeamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TeamComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 82, vars: 0, consts: [[1, "container", "bg-light"], [1, "box"], [1, "imgBox"], ["src", "/assets/img/271340835_1923144161208809_2232785223819993671_n.jpg", "alt", "", 1, "img-fluid"], [1, "content"], ["src", "/assets/img/203b0fb7-ae46-4ba7-a69e-8cc445b89db2.o.jpg", "alt", "", 1, "img-fluid"], ["src", "/assets/img/COURSE-IMAGES-WEB2.0-770x450px-5-770x450.jpg", "alt", "", 1, "img-fluid", "px-2"], [1, "m-2"], ["src", "/assets/img/WhatsApp Image 2022-02-16 at 8.53.04 AM.jpeg", "alt", "", 1, "img-fluid", "px-2"], ["src", "/assets/img/coding-classes-for-kids.png", "alt", "", 1, "img-fluid"], ["src", "/assets/img/img-20160916-57dbdf3458e2a.jpg ", "alt", "", 1, "img-fluid", "px-2"], ["src", "/assets/img/download (2).jpg", "alt", "", 1, "img-fluid", "px-3"], ["src", "/assets/img/intelli-blog-image-7-3.-1.jpg", "alt", "", 1, "img-fluid"], ["src", "/assets/img/41Ak6Uot97L._AC_SY1000_.jpg", "alt", "", 1, "img-fluid", "px-2"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Noha El-Shabrawy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Usy Math Trainer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ahmed Shaltoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Software Engineer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Mohamed Shaltoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Computer Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Warda Ismael");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Arabic-font Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Eman Shaltoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Coding Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Mohamed Shaltoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Drawing Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Karima El-gogary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "french Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Eman Shaltoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Coding Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Mohamed Shaltoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Drawing Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap\");\r\n\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  font-size: 62.5%;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\r\n  background-color: #f0f0f0;\r\n  font-family: 'Poppins', sans-serif;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 15rem;\r\n  height: 15rem;\r\n  margin: 4rem;\r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .imgBox[_ngcontent-%COMP%] {\r\n  transform: translate(-3.5rem, -3.5rem);\r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n  transform: translate(3.5rem, 3.5rem);\r\n}\r\n\r\n\r\n.imgBox[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n\r\n.imgBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 18rem;\r\n  height: 18rem;\r\n  border-radius: 5%;\r\n\r\n}\r\n\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 1.5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #fff;\r\n  z-index: 1;\r\n  align-items: flex-end;\r\n  text-align: center;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n\r\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 1rem;\r\n  color: #111;\r\n  font-weight: 500;\r\n  line-height: 2rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n\r\n.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #555;\r\n  font-size: .8rem;\r\n  font-weight: 400;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n\r\n@media (max-width: 600px) {\r\n  .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n\r\n    transform: translate(0.5rem,4.3rem);\r\n  }\r\n  .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover   .imgBox[_ngcontent-%COMP%] {\r\n    transform: translate(0.5rem, -4.3rem);\r\n  }\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RkFBNkY7OztBQUc3RjtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7O0FBRW5COzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0U7O0lBRUUsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxxQ0FBcUM7RUFDdkM7OztBQUdGIiwiZmlsZSI6InRlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE1cmVtO1xyXG4gIGhlaWdodDogMTVyZW07XHJcbiAgbWFyZ2luOiA0cmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5ib3g6aG92ZXIgLmltZ0JveCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMuNXJlbSwgLTMuNXJlbSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmJveDpob3ZlciAuY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMy41cmVtLCAzLjVyZW0pO1xyXG59XHJcblxyXG4uaW1nQm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5pbWdCb3ggaW1nIHtcclxuICB3aWR0aDogMThyZW07XHJcbiAgaGVpZ2h0OiAxOHJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgei1pbmRleDogMTtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jb250ZW50IGgyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICMxMTE7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uY29udGVudCBzcGFuIHtcclxuICBjb2xvcjogIzU1NTtcclxuICBmb250LXNpemU6IC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciAuYm94OmhvdmVyIC5jb250ZW50IHtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjVyZW0sNC4zcmVtKTtcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuYm94OmhvdmVyIC5pbWdCb3gge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC41cmVtLCAtNC4zcmVtKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1813:
/*!*******************************!*\
  !*** ./src/app/user.model.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ 3459:
/*!************************************************!*\
  !*** ./src/app/usy-math/usy-math.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsyMathComponent": () => (/* binding */ UsyMathComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class UsyMathComponent {
    constructor() {
        this.progSelect = 'usy';
    }
    ngOnInit() {
    }
}
UsyMathComponent.ɵfac = function UsyMathComponent_Factory(t) { return new (t || UsyMathComponent)(); };
UsyMathComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsyMathComponent, selectors: [["app-usy-math"]], decls: 33, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "p-3", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/271340835_1923144161208809_2232785223819993671_n.jpg"], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"]], template: function UsyMathComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0630\u0647\u0646\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0627\u0637\u0641\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u0647 \u062D\u0627\u0633\u0628\u0629 \u0627\u0643\u064A\u062F \u0627\u0628\u0646\u0643 \u0628\u064A\u0648\u0627\u062C\u0629 \u0645\u0634\u0627\u0643\u0644 \u0632\u0649 \u0635\u0639\u0648\u0628\u0647 \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0648 \u062A\u0634\u062A\u062A \u0627\u0644\u0627\u0646\u062A\u0628\u0627\u0647 \u0648 \u0627\u0644\u0628\u0637\u0626 \u0648 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0627\u0635\u0627\u0628\u0639 \u0641\u0649 \u062D\u0644 \u0627\u0644\u0645\u0633\u0627\u0626\u0644 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u0627\u0644\u062D\u0644 \u0641\u0649 \u0643\u0648\u0631\u0633 UAS ABACUS \u0647\u0627\u0646\u062A\u0639\u0644\u0645 \u0627\u0632\u0627\u0649 \u0646\u062D\u0644 \u0627\u0644\u0645\u0633\u0627\u0626\u0644 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u0628\u062F\u0648\u0646 \u062E\u0648\u0641 \u0648 \u062A\u0648\u062A\u0631 \u0648 \u0639\u062F\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0627\u0635\u0627\u0628\u0639 \u0646\u0647\u0627\u0626\u0649 \u0648 \u0627\u0633\u0631\u0639 \u0645\u0646 \u0627\u0644\u0627\u0644\u0647 \u0627\u0644\u062D\u0627\u0633\u0628\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0630\u0647\u0646\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0647\u0648 \u0628\u0631\u0646\u0627\u0645\u062C \u062A\u0637\u0648\u064A\u0631 \u0639\u0642\u0644\u064A \u0645\u0645\u064A\u0632 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 \u0645\u062E\u0635\u0635 \u0644\u062A\u0641\u0639\u064A\u0644 \u0637\u0627\u0642\u062A\u0647\u0645 \u0627\u0644\u0639\u0642\u0644\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u0646\u0629 \u0641\u064A \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0639\u0645\u0631\u064A\u0629 \u0627\u0644\u062A\u064A \u064A\u0628\u0644\u063A \u0641\u064A\u0647\u0627 \u0627\u0644\u0639\u0642\u0644 \u0630\u0631\u0648\u0629 \u062A\u0637\u0648\u0631\u0647 \u0648\u0646\u0645\u0648\u0647 \u0644\u0639\u0645\u0631 \u0627\u0644\u0637\u0641\u0644 \u0628\u064A\u0646 4 \u0627\u0644\u064A 13 \u0633\u0646\u0629 \u0635\u0645\u0645 \u0647\u0630\u0627 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0644\u0625\u0633\u062A\u062B\u0645\u0627\u0631 \u0627\u0644\u0633\u0646\u0648\u0627\u062A \u0627\u0644\u0623\u0648\u0644\u0649 \u0645\u0646 \u062D\u064A\u0627\u0629 \u0627\u0644\u0623\u0637\u0641\u0627\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u2069\u0647\u0646\u062A\u0639\u0644\u0645 \u0627\u0644\u0636\u0631\u0628 \u0648 \u0627\u0644\u0642\u0633\u0645\u0647 \u0628\u0633\u0631\u0639\u0629 \u062C\u062F\u0627 \u0628\u0634\u0643\u0644 \u0627\u062D\u062A\u0631\u0627\u0641\u0649\u2069\u0647\u0646\u062A\u0639\u0644\u0645 \u0627\u0644\u0627\u0639\u062F\u0627\u062F \u0627\u0644\u0639\u0634\u0631\u064A\u0647 \u0648 \u0627\u0644\u0623\u0633\u0633 \u0648 \u0627\u0644\u062A\u0643\u0639\u064A\u0628 \u0648\u0627\u0644\u062A\u0631\u0628\u064A \u0637\u0631\u064A\u0642\u0629 \u062D\u0644 \u0645\u0643\u0639\u0628 \u0631\u0648\u0628\u064A\u0627\u0643\u0648\u0627\u0628 \u0627\u0644\u0633\u0631\u0639\u0629\n\u0627\u062D\u0636\u0631\u0647 \u0637\u0641\u0644\u0627 \u0648\u0627\u062E\u0630\u0647 \u0639\u0628\u0642\u0631\u064A\u0627 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0625\u0643\u062A\u0633\u0627\u0628 \u0627\u0644\u0637\u0641\u0644 \u0627\u0644\u0642\u062F\u0631\u0627\u062A \u0627\u0644\u0639\u0642\u0644\u064A\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629 : (\u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u2013 \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0629 \u2013 \u0627\u0644\u062A\u0635\u0648\u0631 \u2013 \u0627\u0644\u062E\u064A\u0627\u0644 \u2013 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u2013 \u0627\u0644\u0633\u0631\u0639\u0629 \u2013 \u0627\u0644\u062F\u0642\u0629 \u2013 \u0627\u0644\u0625\u0628\u062F\u0627\u0639 \u2013 \u0627\u0644\u062B\u0642\u0629 \u0628\u0627\u0644\u0646\u0641\u0633) \u0648\u0630\u0644\u0643 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0645\u062F\u0631\u0628\u064A\u0646 \u0630\u0648 \u062E\u0628\u0631\u0629 \u0639\u0627\u0644\u064A\u0629 \u0641\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u062C\u0627\u0644 \u0648\u0633\u064A\u0635\u0628\u062D \u0637\u0641\u0644\u0643 \u0623\u0643\u062B\u0631 \u0642\u062F\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u062A\u063A\u0644\u0628 \u0639\u0644\u0649 \u0636\u063A\u0648\u0637 \u0627\u0644\u0627\u0645\u062A\u062D\u0627\u0646\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0627\u0644\u0631\u0624\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0642\u062F\u0631\u0627\u062A \u0627\u0644\u0639\u0642\u0644\u064A\u0629 \u0644\u0644\u0637\u0641\u0644 . \u0648\u0630\u0644\u0643 \u0628\u0641\u0636\u0644 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0628\u064A\u0643\u0627\u0633 \u0628\u062F\u0644\u0627 \u0645\u0646 \u0627\u0644\u0627\u0644\u0629 \u0627\u0644\u062D\u0627\u0633\u0628\u0629 \u062D\u064A\u062B \u0627\u0643\u0633\u0628\u0647\u0645 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u0642\u0648\u064A\u0629 \u0648\u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0648\u0627\u0644\u0641\u0647\u0645 \u0648\u0627\u0644\u0627\u0646\u062A\u0628\u0627\u0647 \u0648\u0633\u0631\u0639\u0629 \u0627\u0644\u0628\u062F\u064A\u0647\u0629 \u0648\u0627\u0644\u0627\u0633\u062A\u064A\u0639\u0627\u0628 \u0648\u0627\u0644\u0625\u0628\u062F\u0627\u0639 \u0648\u0627\u0644\u062B\u0642\u0629 \u0628\u0627\u0644\u0646\u0641\u0633 \u0627\u0644\u062A\u064A \u062A\u0637\u0648\u0631\u0647\u0627 \u064A\u0648\u0633\u064A \u0645\u0627\u0633 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzeS1tYXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxtQkFBbUI7O0VBRW5CLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCOztBQUUxQjs7O0NBR0M7RUFDQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7O0VBRWQsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7O0NBQ0M7RUFDQyxjQUFjO0FBQ2hCOzs7Q0FHQztFQUNDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYzs7RUFFZCxVQUFVO0VBQ1YsU0FBUzs7RUFFVCxXQUFXO0FBQ2I7OztDQUVDO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7OztDQUVDO0VBQ0MsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2QkFBNkI7O0FBRS9COzs7Q0FFQztHQUNFLGlCQUFpQjtHQUNqQixvQkFBb0I7R0FDcEIsV0FBVztHQUNYLHNCQUFzQjs7QUFFekIiLCJmaWxlIjoidXN5LW1hdGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcblxyXG4gLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQgOiAyMTVweDtcclxuXHJcbiAgbWFyZ2luIDogMzBweCAxMHB4O1xyXG4gIHBhZGRpbmcgOiAyMHB4IDE1cHg7XHJcblxyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gIGJveC1zaGFkb3cgOiAwIDVweCAyMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICB0cmFuc2l0aW9uIDogMC4zcyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG4gLmNhcmQ6aG92ZXIge1xyXG4gIGhlaWdodCA6IDQyMHB4O1xyXG59XHJcblxyXG5cclxuIC5jYXJkIC5pbWFnZSB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodCA6IDUwMHB4O1xyXG5cclxuICB0b3AgOiAtNDAlO1xyXG4gIGxlZnQ6IDhweDtcclxuXHJcbiAgei1pbmRleCA6IDE7XHJcbn1cclxuXHJcbiAuY2FyZCAuaW1hZ2UgaW1nIHtcclxuICB3aWR0aCA6IDUwMHB4O1xyXG4gIGhlaWdodDoyMTVweDtcclxuICBib3JkZXItcmFkaXVzIDogMTVweDtcclxufVxyXG5cclxuIC5jYXJkIC5jb250ZW50IHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gIHRvcCA6IC0xNDBweDtcclxuICBwYWRkaW5nIDogMTBweCAxNXB4O1xyXG4gIGNvbG9yIDogIzExMTtcclxuICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG5cclxuICB2aXNpYmlsaXR5IDogaGlkZGVuO1xyXG4gIG9wYWNpdHkgOiAwO1xyXG4gIHRyYW5zaXRpb24gOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxufVxyXG5cclxuIC5jYXJkOmhvdmVyIC5jb250ZW50IHtcclxuICAgbWFyZ2luLXRvcCA6IDMwcHg7XHJcbiAgIHZpc2liaWxpdHkgOiB2aXNpYmxlO1xyXG4gICBvcGFjaXR5IDogMTtcclxuICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4407:
/*!****************************************************!*\
  !*** ./src/app/vedic-math/vedic-math.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VedicMathComponent": () => (/* binding */ VedicMathComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class VedicMathComponent {
    constructor() {
        this.progSelect = 'vedic';
    }
    ngOnInit() {
    }
}
VedicMathComponent.ɵfac = function VedicMathComponent_Factory(t) { return new (t || VedicMathComponent)(); };
VedicMathComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VedicMathComponent, selectors: [["app-vedic-math"]], decls: 55, vars: 0, consts: [["id", "sign  "], [1, "container-fluid", "bg-primary", "pt-5", 2, "height", "fit-content"], [1, "row"], [1, "col-md-5"], [1, "p-4", "text-white", 2, "font-size", "60px"], [1, "text-white", "p-3", "lead"], [1, "card"], [1, "image"], ["src", "/assets/img/271633403_2429958527140230_3076200020634969479_n.jpg"], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "container-fluid"], [1, "p-4"], [1, "lead", "bg-light", "p-4"]], template: function VedicMathComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u062D\u0644 \u0627\u0644\u0645\u0633\u0627\u0626\u0644 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0647 \u0628\u0637\u0631\u0642 \u0633\u0647\u0644\u0647 \u0648\u0645\u0645\u062A\u0639\u0629 \u0647\u0646\u062D\u0644 \u0643\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0647 \u062C\u0645\u0639 \u0648\u0637\u0631\u062D \u0636\u0631\u0628 \u0648\u0642\u0633\u0645\u0647 \u0643\u0633\u0648\u0631 \u0648 \u0627\u0633\u0633 \u062C\u0630\u0648\u0631 \u062A\u0631\u0628\u064A\u0639 \u0648\u062A\u0643\u0639\u064A\u0628 \u0628\u062F\u0648\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0649 \u0648\u0633\u064A\u0644\u0647 \u0645\u0633\u0627\u0639\u062F\u0647 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u062A\u0633\u0639\u0629 \u0644\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u064A\u0629: \u0647\u0646\u0627\u0643 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0645\u064A\u0632\u0627\u062A \u0646\u0638\u0627\u0645 \u0627\u0644\u0641\u064A\u062F\u064A\u0629 \u0627\u0644\u062A\u0645\u0627\u0633\u0643 \u0627\u0644\u0645\u0631\u0648\u0646\u0647 \u0641\u0649 \u062D\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0647 \u0627\u0644\u062E\u064A\u0627\u0644 \u0648 \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u064A\u0639\u0632\u0632 \u0627\u0644\u0625\u0628\u062F\u0627\u0639 \u0645\u062E\u0627\u0637\u0628\u0629 \u0643\u0644 \u0627\u0644\u0641\u064A\u0626\u0627\u062A \u0633\u0631\u0639\u0629 \u0627\u0644\u0628\u062F\u064A\u0647\u0629 \u0627\u0644\u0641\u0639\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u0633\u0631\u0639\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0643\u0648\u0631\u0633 \u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u0627 ( Vedic math)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0647\u0646\u0627\u0643 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0645\u064A\u0632\u0627\u062A \u0646\u0638\u0627\u0645 \u0627\u0644\u0641\u064A\u062F\u064A\u0629 ,\u0627\u0644\u062A\u0645\u0627\u0633\u0643 ,\u0627\u0644\u0645\u0631\u0648\u0646\u0647 \u0641\u0649 \u062D\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0647 ,\u0627\u0644\u062E\u064A\u0627\u0644 \u0648 \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 ,\u064A\u0639\u0632\u0632 \u0627\u0644\u0625\u0628\u062F\u0627\u0639 ,\u0645\u062E\u0627\u0637\u0628\u0629 \u0643\u0644 \u0627\u0644\u0641\u064A\u0626\u0627\u062A ,\u0633\u0631\u0639\u0629 \u0627\u0644\u0628\u062F\u064A\u0647\u0629 ,\u0627\u0644\u0641\u0639\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u0633\u0631\u0639\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0627\u0644\u0648\u0635\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u0627 \u0647\u0648 \u0645\u0635\u0637\u0644\u062D \u0627\u0637\u0644\u0642 \u0639\u0644\u0649 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0642\u062F\u064A\u0645 \u0644\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0647\u0646\u062F\u064A\u0629\u060C \u0627\u0644\u0630\u064A \u0627\u0643\u062A\u0634\u0641 \u0628\u064A\u0646 \u0639\u0627\u0645\u064A 1911 \u0648 1918 \u0645\u0646 \u0642\u0628\u0644 \u0633\u0631\u064A \u0628\u0647\u0627\u0631\u0627\u062A\u064A \u0643\u0631\u0633\u0646\u0627 \u062A\u064A\u0631\u062B\u0627\u062C\u064A (1884-1960). \u0648\u0641\u0642\u0627 \u0644\u0623\u0628\u062D\u0627\u062B\u0647\u060C \u062A\u0633\u062A\u0646\u062F \u062C\u0645\u064A\u0639 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0639\u0644\u0649 \u0633\u062A\u0629 \u0639\u0634\u0631 \u0633\u0648\u062A\u0631\u0627\u060C \u0623\u0648 \u0635\u064A\u063A\u0629 \u0643\u0644\u0645\u0627\u062A.\n\u0647\u0630\u0647 \u0627\u0644\u0635\u064A\u063A \u064A\u0639\u0645\u0644 \u0628\u0647\u0627 \u0627\u0644\u0639\u0642\u0644 \u0628\u0634\u0643\u0644 \u0637\u0628\u064A\u0639\u064A \u0648\u0628\u0627\u0644\u062A\u0627\u0644\u064A \u0641\u0647\u064A \u062A\u0633\u0627\u0639\u062F \u0641\u064A \u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u0637\u0627\u0644\u0628 \u0625\u0644\u0649 \u0627\u0644\u062D\u0644 \u0627\u0644\u0645\u0646\u0627\u0633\u0628. \u0648\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0641\u064A\u062F\u0649 \u064A\u062D\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062A \u0627\u0644\u0635\u0639\u0628\u0629 \u0648\u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0643\u0628\u064A\u0631\u0629 \u0641\u0648\u0631\u064B\u0627 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u0645\u062F\u0647\u0634\u0629 \u0648\u0627\u0644\u062C\u0645\u064A\u0644\u0629\u060C \u0648\u0628\u0627\u0644\u062A\u0627\u0644\u064A \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u064A\u0629 \u062A\u0639\u0646\u064A \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u062A\u064A \u064A\u0645\u0643\u0646 \u062A\u0646\u0641\u064A\u0630\u0647\u0627 \u0628\u0634\u0643\u0644 \u0639\u0642\u0644\u064A.\n\u0645\u0646 \u0627\u0644\u0645\u0632\u0627\u064A\u0627 \u0627\u0644\u062A\u064A \u064A\u0633\u062A\u062E\u062F\u0647\u0627 \u0646\u0638\u0627\u0645 \u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u064A\u0629 .\n\u064A\u0632\u062F\u0627\u062F \u0627\u0644\u0625\u0647\u062A\u0645\u0627\u0645 \u0628\u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u064A\u0629 \u0641\u064A \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u060C \u062D\u064A\u062B \u064A\u0628\u062D\u062B \u0645\u0639\u0644\u0645\u0648 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0639\u0646 \u0634\u064A\u0621 \u0623\u0641\u0636\u0644 \u0648\u064A\u062C\u062F\u0648\u0646 \u0623\u0646 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0641\u064A\u062F\u0649 \u0647\u0648 \u0627\u0644\u062D\u0644. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0645\u0627\u0630\u0627 \u0633\u062A\u062A\u0639\u0644\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0645\u064A\u0632\u0627\u062A \u0646\u0638\u0627\u0645 \u0627\u0644\u0641\u064A\u062F\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u062A\u0646\u0627\u0642\u0636 \u0628\u0634\u0643\u0644 \u0643\u0628\u064A\u0631 \u0645\u0639 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A\u0629:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0627\u0644\u062A\u0645\u0627\u0633\u0643 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0644\u0639\u0644 \u0627\u0644\u0645\u064A\u0632\u0629 \u0627\u0644\u0623\u0643\u062B\u0631 \u0625\u062B\u0627\u0631\u0629 \u0644\u0644\u0627\u0646\u062A\u0628\u0627\u0647 \u0644\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0641\u064A\u062F\u064A \u0647\u064A \u062A\u0645\u0627\u0633\u0643\u0647. \u0641\u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0645\u062C\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u063A\u064A\u0631 \u0645\u062A\u0631\u0627\u0628\u0637\u0629\u060C \u0641\u0625\u0646 \u0627\u0644\u0646\u0638\u0627\u0645 \u0628\u0623\u0643\u0645\u0644\u0647 \u0645\u062A\u0631\u0627\u0628\u0637 \u0628\u0634\u0643\u0644 \u062C\u0645\u064A\u0644 \u0648\u0645\u0648\u062D\u062F \u064A\u062C\u0639\u0644 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0645\u0633\u0644\u064A\u0629 \u0648\u0645\u0645\u062A\u0639\u0629 \u0648\u0634\u064A\u0642\u0629 \u0643\u0645\u0627 \u0627\u0646\u0647\u0627 \u062A\u0634\u062C\u0639 \u0639\u0644\u0649 \u0627\u0644\u0627\u0628\u062F\u0627\u0639. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0627\u0644\u0644\u064A\u0648\u0646\u0629 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0639\u0627\u062F\u0629 \u0645\u0627 \u064A\u062A\u0645\u0631\u062F \u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0627\u0630\u0643\u064A\u0627\u0621 \u0648 \u0627\u0644\u0645\u0628\u062F\u0639\u0648\u0646 \u0636\u062F \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A\u0629 \u0644\u0644\u062A\u0639\u0644\u064A\u0645 \u0644\u0623\u0646\u0647\u0627 \u0645\u0645\u0644\u0629\u060C \u0648\u0647\u0630\u0627 \u0628\u0633\u0628\u0628 \u0648\u062C\u0648\u062F \u0637\u0631\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629 \u0644\u0644\u0642\u064A\u0627\u0645 \u0628\u0639\u0645\u0644\u064A\u0629 \u062D\u0633\u0627\u0628\u064A\u0629\u060C \u0641\u0628\u0645\u062C\u0631\u062F \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0637\u0627\u0644\u0628 \u0644\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0641\u064A\u062F\u064A \u064A\u062A\u062D\u0635\u0644 \u0639\u0644\u0649 \u0643\u0644 \u0627\u0644\u0641\u0648\u0627\u0626\u062F \u0641\u064A\u0635\u0628\u062D \u0623\u0643\u062B\u0631 \u0625\u0628\u062F\u0627\u0639\u064B\u0627. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0627\u0644\u062E\u064A\u0627\u0644 \u0648 \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u064A\u0629 \u064A\u062A\u0645\u062B\u0644 \u0641\u064A \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0629 \u0630\u0647\u0646\u064A\u0627\u060C \u0643\u0645\u0627 \u0623\u0646\u0647 \u0628\u0627\u0633\u062A\u0637\u0627\u0639\u062A\u0646\u0627 \u0627\u0644\u0642\u064A\u0627\u0645 \u0628\u0647\u0627 \u0643\u062A\u0627\u0628\u064A\u0627. \u0641\u064A \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u064A\u0629 \u0644\u064A\u0633 \u0639\u0644\u064A\u0646\u0627 \u0627\u0644\u062A\u0642\u064A\u062F \u0628\u0627\u0644\u0642\u0648\u0627\u0639\u062F\u060C \u0628\u0644 \u0646\u0633\u062A\u0637\u064A\u0639 \u0627\u062E\u062A\u0631\u0627\u0639 \u0639\u0644\u0627\u0642\u0627\u062A \u062C\u062F\u064A\u062F\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u064A\u0639\u0632\u0632 \u0627\u0644\u0625\u0628\u062F\u0627\u0639 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u064A\u0629 \u0644\u0627 \u062A\u0633\u062A\u0639\u0645\u0644 \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u062A\u062D\u0644\u064A\u0644\u064A\u0629\u060C \u0648\u0644\u0627 \u0627\u0644\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u062B\u0627\u0628\u062A\u0629\u060C \u0648\u0647\u0630\u0627 \u0645\u0627 \u064A\u062C\u0639\u0644\u0647\u0627 \u0645\u062D\u0628\u0648\u0628\u0629 \u0645\u0646 \u0637\u0631\u0641 \u0627\u0644\u0637\u0644\u0627\u0628\u060C \u0648\u0647\u0630\u0627 \u0645\u0627 \u064A\u062C\u0639\u0644\u0647\u0645 \u0623\u062D\u0631\u0627\u0631 \u0644\u064A\u0628\u062F\u0639\u0648\u0627 \u0637\u0631\u0642 \u0648\u0642\u0648\u0627\u0639\u062F \u062C\u062F\u064A\u062F\u0629\u060C \u0648\u064A\u0633\u062A\u0639\u0645\u0644\u0648\u0627 \u0623\u0633\u0627\u0644\u064A\u0628\u0647\u0645 \u0627\u0644\u062E\u0627\u0635\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u0645\u062E\u0627\u0637\u0628\u0629 \u0643\u0644 \u0627\u0644\u0641\u0626\u0627\u062A: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u0628\u0628\u0633\u0627\u0637\u062A\u0647\u0627 \u062A\u0642\u0646\u064A\u0627\u062A\u0647\u0627 \u0648\u0642\u0648\u0627\u0639\u062F\u0647\u0627\u060C \u0648\u062D\u0631\u064A\u0629 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0645\u0631\u0627\u062F \u062A\u0637\u0628\u064A\u0642\u0647\u0627\u060C \u062A\u062C\u0639\u0644 \u0627\u0644\u0637\u0644\u0627\u0628 \u064A\u062A\u0645\u062A\u0639\u0648\u0646 \u0648\u064A\u0628\u062F\u0639\u0648\u0646\u060C \u0644\u0647\u0627\u0630\u0627 \u0641\u0625\u0646 \u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u0627 \u062A\u0644\u0627\u0626\u0645 \u0643\u0644 \u0634\u0631\u0627\u0626\u062D \u0627\u0644\u0645\u062C\u062A\u0645\u0639. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u0633\u0631\u0639\u0629 \u0627\u0644\u0628\u062F\u064A\u0647\u0629: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u0633\u0647\u0644\u0629 \u0627\u0644\u062A\u064A \u062A\u062A\u0645\u064A\u0632 \u0628\u0647\u0627 \u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u0627\u060C \u0648\u0627\u0639\u062A\u0645\u0627\u062F\u0647\u0627 \u0639\u0644\u0649 \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0630\u0647\u0646\u064A. \u062A\u062C\u0639\u0644 \u0633\u0631\u0639\u0629 \u0628\u062F\u064A\u0647\u0629 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u062A\u0646\u0645\u0648\u0627 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u0627\u0644\u0641\u0639\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u0633\u0631\u0639\u0629 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u0628\u0625\u0633\u062A\u0639\u0645\u0627\u0644 \u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u0627\u0644\u0641\u064A\u062F\u064A\u0629\u060C \u0646\u0633\u062A\u0637\u064A\u0639 \u062D\u0644 \u0623\u0639\u0642\u062F \u0627\u0644\u0645\u0633\u0627\u0626\u0644\u060C \u0648\u062D\u0633\u0627\u0628 \u0623\u0636\u062E\u0645 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0645\u0647\u0645\u0627 \u0643\u0627\u0646\u062A \u0637\u0648\u064A\u0644\u0629\u060C \u0628\u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0637\u0631\u0642\u060C \u0648\u0647\u0630\u0627 \u0645\u0627 \u064A\u062C\u0639\u0644\u0647\u0627 \u062C\u062F \u0641\u0639\u0627\u0644\u0629 \u0648\u0633\u0631\u064A\u0639\u0629 \u062C\u062F\u0627.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0627\u0644\u0631\u0624\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0642\u062F\u0631\u0627\u062A \u0627\u0644\u0639\u0642\u0644\u064A\u0629 \u0644\u0644\u0637\u0641\u0644 . \u0648\u0630\u0644\u0643 \u0628\u0641\u0636\u0644 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0628\u064A\u0643\u0627\u0633 \u0628\u062F\u0644\u0627 \u0645\u0646 \u0627\u0644\u0627\u0644\u0629 \u0627\u0644\u062D\u0627\u0633\u0628\u0629 \u062D\u064A\u062B \u0627\u0643\u0633\u0628\u0647\u0645 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u0642\u0648\u064A\u0629 \u0648\u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0648\u0627\u0644\u0641\u0647\u0645 \u0648\u0627\u0644\u0627\u0646\u062A\u0628\u0627\u0647 \u0648\u0633\u0631\u0639\u0629 \u0627\u0644\u0628\u062F\u064A\u0647\u0629 \u0648\u0627\u0644\u0627\u0633\u062A\u064A\u0639\u0627\u0628 \u0648\u0627\u0644\u0625\u0628\u062F\u0627\u0639 \u0648\u0627\u0644\u062B\u0642\u0629 \u0628\u0627\u0644\u0646\u0641\u0633 \u0627\u0644\u062A\u064A \u062A\u0637\u0648\u0631\u0647\u0627 \u064A\u0648\u0633\u064A \u0645\u0627\u0633 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position : relative;\r\n\r\n  display : flex;\r\n  align-items : center;\r\n  justify-content : center;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width : 500px;\r\n  height : 215px;\r\n\r\n  margin : 30px 10px;\r\n  padding : 20px 15px;\r\n\r\n  display : flex;\r\n  flex-direction : column;\r\n  box-shadow : 0 5px 20px rgba(0,0,0,0.5);\r\n  transition : 0.3s ease-in-out;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover {\r\n  height : 420px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  width : 500px;\r\n  height : 500px;\r\n\r\n  top : -40%;\r\n  left: 8px;\r\n\r\n  z-index : 1;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width : 500px;\r\n  height:215px;\r\n  border-radius : 15px;\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position : relative;\r\n  top : -140px;\r\n  padding : 10px 15px;\r\n  color : #111;\r\n  text-align : center;\r\n\r\n  visibility : hidden;\r\n  opacity : 0;\r\n  transition : 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\r\n   margin-top : 30px;\r\n   visibility : visible;\r\n   opacity : 1;\r\n   transition-delay: 0.2s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlZGljLW1hdGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtFQUNFLG1CQUFtQjs7RUFFbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7O0FBRTFCOzs7Q0FHQztFQUNDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYzs7RUFFZCxrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2Qyw2QkFBNkI7RUFDN0Isb0JBQW9CO0FBQ3RCOzs7Q0FDQztFQUNDLGNBQWM7QUFDaEI7OztDQUdDO0VBQ0MsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjOztFQUVkLFVBQVU7RUFDVixTQUFTOztFQUVULFdBQVc7QUFDYjs7O0NBRUM7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7O0NBRUM7RUFDQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1COztFQUVuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDZCQUE2Qjs7QUFFL0I7OztDQUVDO0dBQ0UsaUJBQWlCO0dBQ2pCLG9CQUFvQjtHQUNwQixXQUFXO0dBQ1gsc0JBQXNCOztBQUV6QiIsImZpbGUiOiJ2ZWRpYy1tYXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG5cclxuICBkaXNwbGF5IDogZmxleDtcclxuICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5cclxuIC5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoIDogNTAwcHg7XHJcbiAgaGVpZ2h0IDogMjE1cHg7XHJcblxyXG4gIG1hcmdpbiA6IDMwcHggMTBweDtcclxuICBwYWRkaW5nIDogMjBweCAxNXB4O1xyXG5cclxuICBkaXNwbGF5IDogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICBib3gtc2hhZG93IDogMCA1cHggMjBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgdHJhbnNpdGlvbiA6IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyLXJhZGl1cyA6IDE1cHg7XHJcbn1cclxuIC5jYXJkOmhvdmVyIHtcclxuICBoZWlnaHQgOiA0MjBweDtcclxufVxyXG5cclxuXHJcbiAuY2FyZCAuaW1hZ2Uge1xyXG4gIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQgOiA1MDBweDtcclxuXHJcbiAgdG9wIDogLTQwJTtcclxuICBsZWZ0OiA4cHg7XHJcblxyXG4gIHotaW5kZXggOiAxO1xyXG59XHJcblxyXG4gLmNhcmQgLmltYWdlIGltZyB7XHJcbiAgd2lkdGggOiA1MDBweDtcclxuICBoZWlnaHQ6MjE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1cyA6IDE1cHg7XHJcbn1cclxuXHJcbiAuY2FyZCAuY29udGVudCB7XHJcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICB0b3AgOiAtMTQwcHg7XHJcbiAgcGFkZGluZyA6IDEwcHggMTVweDtcclxuICBjb2xvciA6ICMxMTE7XHJcbiAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuXHJcbiAgdmlzaWJpbGl0eSA6IGhpZGRlbjtcclxuICBvcGFjaXR5IDogMDtcclxuICB0cmFuc2l0aW9uIDogMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbn1cclxuXHJcbiAuY2FyZDpob3ZlciAuY29udGVudCB7XHJcbiAgIG1hcmdpbi10b3AgOiAzMHB4O1xyXG4gICB2aXNpYmlsaXR5IDogdmlzaWJsZTtcclxuICAgb3BhY2l0eSA6IDE7XHJcbiAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map