(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'ensclient';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/home/home.module */ "./src/app/home/home.module.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _app_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                ],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _app_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"]
                ],
                providers: [],
                bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact-persons-list/contact-persons-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/contact-persons-list/contact-persons-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactPersonsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPersonsListComponent", function() { return ContactPersonsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");









function ContactPersonsListComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E9\u05DD \u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactPersonsListComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("appearance", ctx_r2.fieldAppearance(i_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.editable(i_r12) ? "name-column-edit" : "name-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
} }
function ContactPersonsListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05DB\u05EA\u05D5\u05D1\u05EA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactPersonsListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("appearance", ctx_r4.fieldAppearance(i_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
} }
function ContactPersonsListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D8\u05DC\u05E4\u05D5\u05DF \u05E0\u05D9\u05D9\u05D3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactPersonsListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("appearance", ctx_r6.fieldAppearance(i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
} }
function ContactPersonsListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 16);
} }
function ContactPersonsListComponent_td_19_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPersonsListComponent_td_19_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.setRowEditable(i_r18, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactPersonsListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactPersonsListComponent_td_19_button_1_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", element_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.editable(i_r18));
} }
function ContactPersonsListComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function ContactPersonsListComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
} }
class ContactPersonsListComponent {
    constructor(_tableFb, _rowFb) {
        this._tableFb = _tableFb;
        this._rowFb = _rowFb;
        this.displayedColumns = ['name', 'address', 'phoneNumber', 'addButton'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.tableFormGrp = this._tableFb.group({
            rowsFormControl: this._tableFb.array([])
        });
        this.tableFormGrp = this._rowFb.group({
            rowsArr: this._rowFb.array(this.persons.map((person) => this._rowFb.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](person.name),
                phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](person.phoneNumber),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](person.address),
                editable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            })))
        });
        this.dataSource =
            new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.rowsArr.controls);
    }
    get rowsArr() {
        return this.tableFormGrp.get('rowsArr');
    }
    renderTable() {
        this.cpTable.renderRows();
    }
    addContactPerson() {
        //this.rowsArr.push(this.initEmptyRowForm());
        this.rowsArr.insert(0, this.initEmptyRowForm());
        this.renderTable();
    }
    initEmptyRowForm() {
        return this._rowFb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            editable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
        });
    }
    editable(index) {
        const editable = this.rowsArr.value[index].editable;
        return editable;
    }
    fieldAppearance(index) {
        const appearance = this.editable(index) ? 'fill' : 'none';
        return appearance;
    }
    setRowEditable(index, editable) {
        this.rowsArr.value[index].editable = editable;
        // this.rowsArr.at(0).get('editable').patchValue(true);
    }
}
ContactPersonsListComponent.ɵfac = function ContactPersonsListComponent_Factory(t) { return new (t || ContactPersonsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ContactPersonsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPersonsListComponent, selectors: [["app-contact-persons-list"]], viewQuery: function ContactPersonsListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cpTable = _t.first);
    } }, inputs: { persons: "persons" }, decls: 24, vars: 4, consts: [[1, "container-area", "contact-persons-list-container"], [1, "title"], [1, "contact-persons-table"], [3, "formGroup"], ["formArrayName", "rowsArr"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["cpTable", ""], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "formGroup", 4, "matCellDef"], ["matColumnDef", "address"], ["matColumnDef", "phoneNumber"], ["matColumnDef", "addButton"], ["mat-header-row", "", "class", "grey-bg", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "btn", "btn-primary", "mr-5", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 3, "formGroup"], [3, "ngClass", "appearance"], ["matInput", "", "type", "text", "formControlName", "name", 3, "readonly"], [1, "address-column", 3, "appearance"], ["matInput", "", "type", "text", "formControlName", "address", 3, "readonly"], [1, "phone-number-column", 3, "appearance"], ["matInput", "", "type", "text", "formControlName", "phoneNumber", 3, "readonly"], ["class", "btn btn-primary mr-5", 3, "click", 4, "ngIf"], ["mat-header-row", "", 1, "grey-bg"], ["mat-row", ""]], template: function ContactPersonsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05D0\u05E0\u05E9\u05D9 \u05E7\u05E9\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContactPersonsListComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContactPersonsListComponent_td_10_Template, 3, 4, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContactPersonsListComponent_th_12_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContactPersonsListComponent_td_13_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContactPersonsListComponent_th_15_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContactPersonsListComponent_td_16_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContactPersonsListComponent_th_18_Template, 1, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactPersonsListComponent_td_19_Template, 2, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContactPersonsListComponent_tr_20_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ContactPersonsListComponent_tr_21_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPersonsListComponent_Template_button_click_22_listener() { return ctx.addContactPerson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u05D4\u05D5\u05E1\u05E3 \u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.tableFormGrp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".contact-persons-list-container[_ngcontent-%COMP%] {\n  \n}\n.contact-persons-list-container[_ngcontent-%COMP%]   .contact-persons-table[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-right: 2em;\n  width: 100%;\n}\n.contact-persons-list-container[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: justify;\n}\n.contact-persons-list-container[_ngcontent-%COMP%]     .mat-row:nth-child(4n-1), .contact-persons-list-container[_ngcontent-%COMP%]     tr.mat-row:nth-child(4n) {\n  background-color: green;\n}\n.contact-persons-list-container[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.contact-persons-list-container[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: #E9F9FA;\n}\n.contact-persons-list-container[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  text-align: right;\n}\n.contact-persons-list-container[_ngcontent-%COMP%]   .name-column[_ngcontent-%COMP%], .contact-persons-list-container[_ngcontent-%COMP%]   .name-column-edit[_ngcontent-%COMP%] {\n  width: 15em;\n}\n.contact-persons-list-container[_ngcontent-%COMP%]   .name-column-edit[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  border-bottom: 1px red solid;\n}\n.contact-persons-list-container[_ngcontent-%COMP%]   .address-column[_ngcontent-%COMP%] {\n  width: 15em;\n}\n.contact-persons-list-container[_ngcontent-%COMP%]   .phone-number-column[_ngcontent-%COMP%] {\n  width: 15em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1wZXJzb25zLWxpc3QvQzpcXG5nLXByb2pzXFxlbnNjbGllbnQvc3JjXFxhcHBcXGNvbnRhY3QtcGVyc29ucy1saXN0XFxjb250YWN0LXBlcnNvbnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC1wZXJzb25zLWxpc3QvY29udGFjdC1wZXJzb25zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUF1Q0U7OztJQUFBO0FDM0NGO0FETUU7RUFDRyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDSkw7QURPRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDTEo7QURRRTs7RUFFRSx1QkFBQTtBQ05KO0FEU0U7RUFDRSx1QkFBQTtBQ1BKO0FEcUJFO0VBRUUseUJBQUE7QUNwQko7QUQ0QkU7RUFDRSxpQkFBQTtBQzFCSjtBRDZCRTtFQUNFLFdBQUE7QUMzQko7QURpQ0k7RUFDRSw0QkFBQTtBQy9CTjtBRG1DRTtFQUNFLFdBQUE7QUNqQ0o7QURvQ0U7RUFDRSxXQUFBO0FDbENKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1wZXJzb25zLWxpc3QvY29udGFjdC1wZXJzb25zLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLzo6bmctZGVlcCAubWF0LXJvdyB7XHJcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy99XHJcbi8vXHJcbi8vOjpuZy1kZWVwIC5tYXQtcm93Om50aC1jaGlsZCg0bi0xKSwgLm1hdC1yb3c6bnRoLWNoaWxkKDRuKSB7XHJcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4vL31cclxuXHJcblxyXG4uY29udGFjdC1wZXJzb25zLWxpc3QtY29udGFpbmVyIHtcclxuXHJcbiAgLmNvbnRhY3QtcGVyc29ucy10YWJsZSB7XHJcbiAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgdGgubWF0LWhlYWRlci1jZWxsLCAvKnRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwqLyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1yb3c6bnRoLWNoaWxkKDRuLTEpLFxyXG4gIDo6bmctZGVlcCB0ci5tYXQtcm93Om50aC1jaGlsZCg0bikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfVxyXG5cclxuICB0ci5tYXQtcm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLy90ci5tYXQtcm93IHtcclxuICAgIC8vaGVpZ2h0OiA0OHB4O1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAvL2NvbG9yOiByZWQ7XHJcbiAgLy99XHJcblxyXG4gIC8vdHIubWF0LXJvdzpudGgtY2hpbGQoNG4tMSksIHRyLm1hdC1yb3c6bnRoLWNoaWxkKDRuKSB7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAvL31cclxuXHJcblxyXG4gIHRyLm1hdC1yb3c6aG92ZXIge1xyXG4gICAgLy9oZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGOUZBO1xyXG4gIH1cclxuXHJcbiAgLyp0ci5tYXQtcm93OmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH0qL1xyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAubmFtZS1jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDE1ZW07XHJcbiAgfVxyXG5cclxuICAubmFtZS1jb2x1bW4tZWRpdCB7XHJcbiAgICBAZXh0ZW5kIC5uYW1lLWNvbHVtbjtcclxuXHJcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggcmVkIHNvbGlkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFkZHJlc3MtY29sdW1uIHtcclxuICAgIHdpZHRoOiAxNWVtO1xyXG4gIH1cclxuXHJcbiAgLnBob25lLW51bWJlci1jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDE1ZW07XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWN0LXBlcnNvbnMtbGlzdC1jb250YWluZXIge1xuICAvKnRyLm1hdC1yb3c6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfSovXG59XG4uY29udGFjdC1wZXJzb25zLWxpc3QtY29udGFpbmVyIC5jb250YWN0LXBlcnNvbnMtdGFibGUge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0LXBlcnNvbnMtbGlzdC1jb250YWluZXIgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250YWN0LXBlcnNvbnMtbGlzdC1jb250YWluZXIgOjpuZy1kZWVwIC5tYXQtcm93Om50aC1jaGlsZCg0bi0xKSxcbi5jb250YWN0LXBlcnNvbnMtbGlzdC1jb250YWluZXIgOjpuZy1kZWVwIHRyLm1hdC1yb3c6bnRoLWNoaWxkKDRuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmNvbnRhY3QtcGVyc29ucy1saXN0LWNvbnRhaW5lciB0ci5tYXQtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY29udGFjdC1wZXJzb25zLWxpc3QtY29udGFpbmVyIHRyLm1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGOUZBO1xufVxuLmNvbnRhY3QtcGVyc29ucy1saXN0LWNvbnRhaW5lciA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jb250YWN0LXBlcnNvbnMtbGlzdC1jb250YWluZXIgLm5hbWUtY29sdW1uLCAuY29udGFjdC1wZXJzb25zLWxpc3QtY29udGFpbmVyIC5uYW1lLWNvbHVtbi1lZGl0IHtcbiAgd2lkdGg6IDE1ZW07XG59XG4uY29udGFjdC1wZXJzb25zLWxpc3QtY29udGFpbmVyIC5uYW1lLWNvbHVtbi1lZGl0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCByZWQgc29saWQ7XG59XG4uY29udGFjdC1wZXJzb25zLWxpc3QtY29udGFpbmVyIC5hZGRyZXNzLWNvbHVtbiB7XG4gIHdpZHRoOiAxNWVtO1xufVxuLmNvbnRhY3QtcGVyc29ucy1saXN0LWNvbnRhaW5lciAucGhvbmUtbnVtYmVyLWNvbHVtbiB7XG4gIHdpZHRoOiAxNWVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPersonsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-persons-list',
                templateUrl: './contact-persons-list.component.html',
                styleUrls: ['./contact-persons-list.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { persons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cpTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"]]
        }] }); })();


/***/ }),

/***/ "./src/app/contact-persons/contact-persons.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/contact-persons/contact-persons.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactPersonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPersonsComponent", function() { return ContactPersonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactPersonsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactPersonsComponent.ɵfac = function ContactPersonsComponent_Factory(t) { return new (t || ContactPersonsComponent)(); };
ContactPersonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPersonsComponent, selectors: [["app-contact-persons"]], inputs: { persons: "persons" }, decls: 17, vars: 1, consts: [[1, "container-area", "contact-persons-container"], [1, "title"], [1, "details"], [1, "column"], [1, "action-label"], [1, "button", "action-btn"]], template: function ContactPersonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E8\u05D9\u05DB\u05D5\u05D6 \u05D0\u05E0\u05E9\u05D9 \u05E7\u05E9\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05DE\u05E1\u05E4\u05E8 \u05D0\u05E0\u05E9\u05D9 \u05E7\u05E9\u05E8 \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D0\u05E4\u05E9\u05E8\u05D9\u05D5\u05EA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05D1\u05D5\u05D8\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u05D0\u05D9\u05E4\u05D5\u05E1 \u05DE\u05DC\u05D0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D0\u05E0\u05E9\u05D9 \u05E7\u05E9\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.persons == null ? null : ctx.persons.length);
    } }, styles: [".contact-persons-container[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.contact-persons-container[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(4n-1), .contact-persons-container[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(4n) {\n  background-color: #eee;\n}\n.contact-persons-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1.7em;\n}\n.contact-persons-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  margin-right: 2em;\n}\n.contact-persons-container[_ngcontent-%COMP%]   .action-label[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  margin-right: 7%;\n}\n.contact-persons-container[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  margin-right: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1wZXJzb25zL0M6XFxuZy1wcm9qc1xcZW5zY2xpZW50L3NyY1xcYXBwXFxjb250YWN0LXBlcnNvbnNcXGNvbnRhY3QtcGVyc29ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC1wZXJzb25zL2NvbnRhY3QtcGVyc29ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQUNFLHVCQUFBO0FDTEo7QURRRTtFQUNFLHNCQUFBO0FDTko7QURTRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVFO0VBQ0UsaUJBQUE7QUNSSjtBRFdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDVEo7QURZRTtFQUNFLGdCQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXBlcnNvbnMvY29udGFjdC1wZXJzb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtcGVyc29ucy1jb250YWluZXIge1xyXG5cclxuICAvLzo6bmctZGVlcCAubWF0LXJvdzpob3ZlciAubWF0LWNlbGx7XHJcbiAgLy8gIGJhY2tncm91bmQtY29sb3I6ICNmZmY1YTI7XHJcbiAgLy8gfVxyXG5cclxuICAubWF0LXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5tYXQtcm93Om50aC1jaGlsZCg0bi0xKSwgLm1hdC1yb3c6bnRoLWNoaWxkKDRuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxLjdlbTtcclxuICB9XHJcblxyXG4gIC5jb2x1bW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi1yaWdodDogNyU7XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWJ0biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gIH1cclxufVxyXG4iLCIuY29udGFjdC1wZXJzb25zLWNvbnRhaW5lciAubWF0LXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhY3QtcGVyc29ucy1jb250YWluZXIgLm1hdC1yb3c6bnRoLWNoaWxkKDRuLTEpLCAuY29udGFjdC1wZXJzb25zLWNvbnRhaW5lciAubWF0LXJvdzpudGgtY2hpbGQoNG4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbi5jb250YWN0LXBlcnNvbnMtY29udGFpbmVyIC5kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMS43ZW07XG59XG4uY29udGFjdC1wZXJzb25zLWNvbnRhaW5lciAuY29sdW1uIHtcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG4uY29udGFjdC1wZXJzb25zLWNvbnRhaW5lciAuYWN0aW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDclO1xufVxuLmNvbnRhY3QtcGVyc29ucy1jb250YWluZXIgLmFjdGlvbi1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDElO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPersonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-persons',
                templateUrl: './contact-persons.component.html',
                styleUrls: ['./contact-persons.component.scss']
            }]
    }], function () { return []; }, { persons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    { path: '', component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_process_details_process_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/process-details/process-details.component */ "./src/app/process-details/process-details.component.ts");
/* harmony import */ var _app_contact_persons_contact_persons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/contact-persons/contact-persons.component */ "./src/app/contact-persons/contact-persons.component.ts");
/* harmony import */ var _app_contact_persons_list_contact_persons_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/contact-persons-list/contact-persons-list.component */ "./src/app/contact-persons-list/contact-persons-list.component.ts");








function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05EA\u05D1\u05D9\u05E2\u05EA \u05E2\u05DC: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05DE\u05E6\u05D1 \u05EA\u05D1\u05D9\u05E2\u05D4: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.refreshProcess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u05E8\u05E2\u05E0\u05D5\u05DF \u05EA\u05D4\u05DC\u05D9\u05DA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-process-details", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-contact-persons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-contact-persons-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const process_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](process_r1 == null ? null : process_r1.superClaim == null ? null : process_r1.superClaim.superClaimNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](process_r1 == null ? null : process_r1.superClaim == null ? null : process_r1.superClaim.superClaimStatus == null ? null : process_r1.superClaim.superClaimStatus.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("process", process_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("persons", process_r1.contactPersons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("persons", process_r1.contactPersons);
} }
class HomeComponent {
    constructor(_httpClient, _messageSrv) {
        this._httpClient = _httpClient;
        this._messageSrv = _messageSrv;
    }
    ngOnInit() {
        this.processObs$ = this._httpClient.get('assets/mocks/ens-process.json');
    }
    refreshProcess() {
        this._messageSrv.refreshProcess(true);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "super-claim-details", "grey-bg"], [1, "column"], [1, "button", 3, "click"], [3, "process"], [3, "persons"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 17, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.processObs$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _app_process_details_process_details_component__WEBPACK_IMPORTED_MODULE_4__["ProcessDetailsComponent"], _app_contact_persons_contact_persons_component__WEBPACK_IMPORTED_MODULE_5__["ContactPersonsComponent"], _app_contact_persons_list_contact_persons_list_component__WEBPACK_IMPORTED_MODULE_6__["ContactPersonsListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".super-claim-details[_ngcontent-%COMP%] {\n  padding: 1em;\n  border-radius: 3px;\n}\n\n.column[_ngcontent-%COMP%] {\n  margin-right: 2em;\n  margin-left: 5em;\n}\n\n.button[_ngcontent-%COMP%] {\n  margin-right: 90%;\n  margin-top: -20px;\n  width: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcbmctcHJvanNcXGVuc2NsaWVudC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1cGVyLWNsYWltLWRldGFpbHMge1xyXG4gIC8vZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogNWVtO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDkwJTtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICB3aWR0aDogNSU7XHJcbn1cclxuIiwiLnN1cGVyLWNsYWltLWRldGFpbHMge1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmNvbHVtbiB7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xuICBtYXJnaW4tbGVmdDogNWVtO1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA5MCU7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICB3aWR0aDogNSU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _app_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_home_home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/home/home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_process_details_process_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/process-details/process-details.component */ "./src/app/process-details/process-details.component.ts");
/* harmony import */ var _app_contact_persons_contact_persons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/contact-persons/contact-persons.component */ "./src/app/contact-persons/contact-persons.component.ts");
/* harmony import */ var _app_contact_persons_list_contact_persons_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/contact-persons-list/contact-persons-list.component */ "./src/app/contact-persons-list/contact-persons-list.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");










class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_home_home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_app_process_details_process_details_component__WEBPACK_IMPORTED_MODULE_5__["ProcessDetailsComponent"],
        _app_contact_persons_contact_persons_component__WEBPACK_IMPORTED_MODULE_6__["ContactPersonsComponent"],
        _app_contact_persons_list_contact_persons_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactPersonsListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_home_home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]], exports: [_app_process_details_process_details_component__WEBPACK_IMPORTED_MODULE_5__["ProcessDetailsComponent"],
        _app_contact_persons_contact_persons_component__WEBPACK_IMPORTED_MODULE_6__["ContactPersonsComponent"],
        _app_contact_persons_list_contact_persons_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactPersonsListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_process_details_process_details_component__WEBPACK_IMPORTED_MODULE_5__["ProcessDetailsComponent"],
                    _app_contact_persons_contact_persons_component__WEBPACK_IMPORTED_MODULE_6__["ContactPersonsComponent"],
                    _app_contact_persons_list_contact_persons_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactPersonsListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _app_home_home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                    _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
                ],
                exports: [
                    _app_process_details_process_details_component__WEBPACK_IMPORTED_MODULE_5__["ProcessDetailsComponent"],
                    _app_contact_persons_contact_persons_component__WEBPACK_IMPORTED_MODULE_6__["ContactPersonsComponent"],
                    _app_contact_persons_list_contact_persons_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactPersonsListComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");













class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, providers: [
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill', floatLabelControl: 'auto' } },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"], useValue: 'en-GB' }
    ], imports: [[
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        ],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                ],
                providers: [
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill', floatLabelControl: 'auto' } },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"], useValue: 'en-GB' }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/process-details/process-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/process-details/process-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProcessDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessDetailsComponent", function() { return ProcessDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");








function ProcessDetailsComponent_div_24_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const superClaim_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", superClaim_r8.val);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", superClaim_r8.desc, " ");
} }
function ProcessDetailsComponent_div_24_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const claimCause_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", claimCause_r9.val);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", claimCause_r9.desc, " ");
} }
function ProcessDetailsComponent_div_24_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const injuryType_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", injuryType_r10.val);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", injuryType_r10.desc, " ");
} }
function ProcessDetailsComponent_div_24_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const submittedBy_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", submittedBy_r11.val);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", submittedBy_r11.desc, " ");
} }
function ProcessDetailsComponent_div_24_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const submissionMethod_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", submissionMethod_r12.val);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", submissionMethod_r12.desc, " ");
} }
function ProcessDetailsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05E1\u05D5\u05D2 \u05EA\u05D1\u05D9\u05E2\u05EA \u05E2\u05DC: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProcessDetailsComponent_div_24_Template_select_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onSuperClaimChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProcessDetailsComponent_div_24_option_8_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D0\u05D9\u05E8\u05D5\u05E2: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-datepicker-toggle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-datepicker", null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u05E1\u05D9\u05D1\u05EA \u05D0\u05D9\u05E8\u05D5\u05E2: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProcessDetailsComponent_div_24_option_23_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u05DE\u05D4\u05D5\u05EA \u05D0\u05D9\u05E8\u05D5\u05E2: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProcessDetailsComponent_div_24_option_29_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u05EA\u05D1\u05D9\u05E2\u05D4 \u05D4\u05D5\u05D2\u05E9\u05D4 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProcessDetailsComponent_div_24_option_36_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05DC\u05EA \u05D4\u05EA\u05D1\u05D9\u05E2\u05D4: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProcessDetailsComponent_div_24_option_42_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const processDetails_r1 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.claimDetailsFormGrp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", processDetails_r1.superClaimDdList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", processDetails_r1.claimCauseDdList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", processDetails_r1.injuryTypeDdList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", processDetails_r1.submittedByDdList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", processDetails_r1.submissionMethodDdList);
} }
class ProcessDetailsComponent {
    constructor(_fb, _httpClient, _messageSrv) {
        this._fb = _fb;
        this._httpClient = _httpClient;
        this._messageSrv = _messageSrv;
    }
    ngOnInit() {
        this.createForm();
        this.populateDetails();
        this._messageSrv.getRefreshMsgObs().subscribe((msg) => {
            if (msg) {
                this.claimDetailsFormGrp.reset();
                this.claimCauseControl.disable();
            }
        });
    }
    createForm() {
        this.claimDetailsFormGrp = this._fb.group({
            superClaimControl: [null],
            claimDateControl: [null],
            claimCauseControl: [{ value: null, disabled: true }],
        });
    }
    populateDetails() {
        this.processDetailsObs$ = this._httpClient.get('assets/mocks/process-details.json');
    }
    get claimCauseControl() {
        return this.claimDetailsFormGrp.controls.claimCauseControl;
    }
    onSuperClaimChange() {
        this.claimCauseControl.enable();
    }
    ngOnDestroy() {
    }
}
ProcessDetailsComponent.ɵfac = function ProcessDetailsComponent_Factory(t) { return new (t || ProcessDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); };
ProcessDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProcessDetailsComponent, selectors: [["app-process-details"]], inputs: { process: "process" }, decls: 26, vars: 9, consts: [[1, "container-area", "process-details-container"], [1, "title"], [1, "details"], [1, "column"], [1, "insured-name"], [1, "insured-age"], [1, "insured-id"], [1, "insured-address"], [1, "column", "row-gap", "bold"], [1, "insured-name-label"], [1, "insured-id-label"], [1, "insured-age-label"], [1, "insured-address-label"], [4, "ngIf"], [1, "grey-bg", 3, "formGroup"], [1, "row-edit"], [1, "details-edit"], ["name", "superClaimDdList", "formControlName", "superClaimControl", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "column", "claim-datepicker"], ["matIconSuffix", "", 3, "for"], ["name", "claimDate", "formControlName", "claimDateControl", "placeholder", "\u05D4\u05D6\u05DF \u05EA\u05D0\u05E8\u05D9\u05DA", 3, "matDatepicker"], ["picker", ""], ["name", "claimCauseDdList", "formControlName", "claimCauseControl"], ["name", "injuryTypeDdList", "formControlName", "injuryTypeControl"], ["name", "submittedByDdList", "formControlName", "submittedByControl"], ["name", "submissionMethodDdList", "formControlName", "submissionMethodControl"], [3, "value"]], template: function ProcessDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E8\u05D9\u05DB\u05D5\u05D6 \u05DE\u05D9\u05D3\u05E2 \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05E4\u05E8\u05D8\u05D9 \u05DE\u05D1\u05D5\u05D8\u05D7: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u05E9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u05EA.\u05D6.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u05D2\u05D9\u05DC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u05DB\u05EA\u05D5\u05D1\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProcessDetailsComponent_div_24_Template, 43, 8, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.process == null ? null : ctx.process.insured == null ? null : ctx.process.insured.firstName, " ", ctx.process == null ? null : ctx.process.insured == null ? null : ctx.process.insured.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.process == null ? null : ctx.process.insured == null ? null : ctx.process.insured.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.process == null ? null : ctx.process.insured == null ? null : ctx.process.insured.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.process == null ? null : ctx.process.insured == null ? null : ctx.process.insured.address == null ? null : ctx.process.insured.address.streetName, ", ", ctx.process == null ? null : ctx.process.insured == null ? null : ctx.process.insured.address == null ? null : ctx.process.insured.address.cityName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 7, ctx.processDetailsObs$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".process-details-container[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.process-details-container[_ngcontent-%COMP%]     .mat-form-field-infix {\n  width: auto;\n}\n.process-details-container[_ngcontent-%COMP%]     .mat-datepicker-toggle .mat-icon-button {\n  border: 1px yellow solid;\n  width: 20px;\n  height: 20px;\n}\n.process-details-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], .process-details-container[_ngcontent-%COMP%]   .row-edit[_ngcontent-%COMP%] {\n  display: flex;\n}\n.process-details-container[_ngcontent-%COMP%]   .row-edit[_ngcontent-%COMP%] {\n  height: 5em;\n}\n.process-details-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%], .process-details-container[_ngcontent-%COMP%]   .details-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1.7em;\n}\n.process-details-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  margin-right: 2em;\n}\n.process-details-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 8em;\n}\n.process-details-container[_ngcontent-%COMP%]   .details-edit[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n}\n.process-details-container[_ngcontent-%COMP%]   .row-gap[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.process-details-container[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.process-details-container[_ngcontent-%COMP%]   .insured-name[_ngcontent-%COMP%], .process-details-container[_ngcontent-%COMP%]   .insured-id[_ngcontent-%COMP%], .process-details-container[_ngcontent-%COMP%]   .insured-age[_ngcontent-%COMP%], .process-details-container[_ngcontent-%COMP%]   .insured-address[_ngcontent-%COMP%] {\n  margin-right: 3.5em;\n  margin-left: 3.5em;\n}\n.process-details-container[_ngcontent-%COMP%]   .insured-name-label[_ngcontent-%COMP%] {\n  margin-right: 8.8em;\n  margin-left: 5.8em;\n}\n.process-details-container[_ngcontent-%COMP%]   .insured-id-label[_ngcontent-%COMP%] {\n  margin-right: 3.5em;\n  margin-left: 7.9em;\n}\n.process-details-container[_ngcontent-%COMP%]   .insured-age-label[_ngcontent-%COMP%] {\n  margin-right: 3.5em;\n  margin-left: 3.3em;\n}\n.process-details-container[_ngcontent-%COMP%]   .insured-address-label[_ngcontent-%COMP%] {\n  margin-right: 3.5em;\n  margin-left: 3.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy1kZXRhaWxzL0M6XFxuZy1wcm9qc1xcZW5zY2xpZW50L3NyY1xcYXBwXFxwcm9jZXNzLWRldGFpbHNcXHByb2Nlc3MtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvY2Vzcy1kZXRhaWxzL3Byb2Nlc3MtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FERUU7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7QUNESjtBRElFO0VBRUUsV0FBQTtBQ0hKO0FETUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDSko7QURPRTtFQUNFLGlCQUFBO0FDTEo7QURPSTtFQUNFLFVBQUE7QUNMTjtBRFNFO0VBRUcsbUJBQUE7QUNSTDtBRFdFO0VBQ0UsZ0JBQUE7QUNUSjtBRFlFO0VBQ0UsaUJBQUE7QUNWSjtBRGFFOztFQUVFLG1CQUFBO0VBQ0Esa0JBQUE7QUNYSjtBRGNFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ1pKO0FEZUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDYko7QURnQkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDZEo7QURpQkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDZkoiLCJmaWxlIjoic3JjL2FwcC9wcm9jZXNzLWRldGFpbHMvcHJvY2Vzcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2Nlc3MtZGV0YWlscy1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIC5tYXQtaWNvbi1idXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggeWVsbG93IHNvbGlkO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAucm93LWVkaXQge1xyXG4gICAgQGV4dGVuZCAucm93O1xyXG4gICAgaGVpZ2h0OiA1ZW07XHJcbiAgfVxyXG5cclxuICAuZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEuN2VtO1xyXG4gIH1cclxuXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICB3aWR0aDogOGVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRldGFpbHMtZWRpdCB7XHJcbiAgICAgQGV4dGVuZCAuZGV0YWlscztcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gIH1cclxuXHJcbiAgLnJvdy1nYXAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmluc3VyZWQtbmFtZSwgLmluc3VyZWQtaWQsXHJcbiAgLmluc3VyZWQtYWdlLCAuaW5zdXJlZC1hZGRyZXNzIHtcclxuICAgIG1hcmdpbi1yaWdodDogMy41ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMy41ZW07XHJcbiAgfVxyXG5cclxuICAuaW5zdXJlZC1uYW1lLWxhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogOC44ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogNS44ZW07XHJcbiAgfVxyXG5cclxuICAuaW5zdXJlZC1pZC1sYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcuOWVtO1xyXG4gIH1cclxuXHJcbiAgLmluc3VyZWQtYWdlLWxhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMy41ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMy4zZW07XHJcbiAgfVxyXG5cclxuICAuaW5zdXJlZC1hZGRyZXNzLWxhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMy41ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMy41ZW07XHJcbiAgfVxyXG5cclxuICAuY2xhaW0tZGF0ZXBpY2tlciB7XHJcblxyXG4gIH1cclxufVxyXG4iLCIucHJvY2Vzcy1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5wcm9jZXNzLWRldGFpbHMtY29udGFpbmVyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICB3aWR0aDogYXV0bztcbn1cbi5wcm9jZXNzLWRldGFpbHMtY29udGFpbmVyIDo6bmctZGVlcCAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIC5tYXQtaWNvbi1idXR0b24ge1xuICBib3JkZXI6IDFweCB5ZWxsb3cgc29saWQ7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4ucHJvY2Vzcy1kZXRhaWxzLWNvbnRhaW5lciAucm93LCAucHJvY2Vzcy1kZXRhaWxzLWNvbnRhaW5lciAucm93LWVkaXQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2Nlc3MtZGV0YWlscy1jb250YWluZXIgLnJvdy1lZGl0IHtcbiAgaGVpZ2h0OiA1ZW07XG59XG4ucHJvY2Vzcy1kZXRhaWxzLWNvbnRhaW5lciAuZGV0YWlscywgLnByb2Nlc3MtZGV0YWlscy1jb250YWluZXIgLmRldGFpbHMtZWRpdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEuN2VtO1xufVxuLnByb2Nlc3MtZGV0YWlscy1jb250YWluZXIgLmNvbHVtbiB7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuLnByb2Nlc3MtZGV0YWlscy1jb250YWluZXIgLmNvbHVtbiBzZWxlY3Qge1xuICB3aWR0aDogOGVtO1xufVxuLnByb2Nlc3MtZGV0YWlscy1jb250YWluZXIgLmRldGFpbHMtZWRpdCB7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG4ucHJvY2Vzcy1kZXRhaWxzLWNvbnRhaW5lciAucm93LWdhcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucHJvY2Vzcy1kZXRhaWxzLWNvbnRhaW5lciAuYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2Nlc3MtZGV0YWlscy1jb250YWluZXIgLmluc3VyZWQtbmFtZSwgLnByb2Nlc3MtZGV0YWlscy1jb250YWluZXIgLmluc3VyZWQtaWQsXG4ucHJvY2Vzcy1kZXRhaWxzLWNvbnRhaW5lciAuaW5zdXJlZC1hZ2UsIC5wcm9jZXNzLWRldGFpbHMtY29udGFpbmVyIC5pbnN1cmVkLWFkZHJlc3Mge1xuICBtYXJnaW4tcmlnaHQ6IDMuNWVtO1xuICBtYXJnaW4tbGVmdDogMy41ZW07XG59XG4ucHJvY2Vzcy1kZXRhaWxzLWNvbnRhaW5lciAuaW5zdXJlZC1uYW1lLWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiA4LjhlbTtcbiAgbWFyZ2luLWxlZnQ6IDUuOGVtO1xufVxuLnByb2Nlc3MtZGV0YWlscy1jb250YWluZXIgLmluc3VyZWQtaWQtbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDMuNWVtO1xuICBtYXJnaW4tbGVmdDogNy45ZW07XG59XG4ucHJvY2Vzcy1kZXRhaWxzLWNvbnRhaW5lciAuaW5zdXJlZC1hZ2UtbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDMuNWVtO1xuICBtYXJnaW4tbGVmdDogMy4zZW07XG59XG4ucHJvY2Vzcy1kZXRhaWxzLWNvbnRhaW5lciAuaW5zdXJlZC1hZGRyZXNzLWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAzLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDMuNWVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-process-details',
                templateUrl: './process-details.component.html',
                styleUrls: ['./process-details.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }]; }, { process: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class MessageService {
    constructor() {
        this.refreshMsgSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.refreshMsgObs$ = this.refreshMsgSubject.asObservable();
    }
    refreshProcess(refresh = false) {
        this.refreshMsgSubject.next(refresh);
    }
    getRefreshMsgObs() {
        return this.refreshMsgObs$;
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/phone.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/phone.pipe.ts ***!
  \********************************************/
/*! exports provided: PhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PhonePipe {
    transform(phoneNum) {
        const phoneStr = '0' + phoneNum.toString();
        const phoneStrFmt = phoneStr.slice(0, 3) + '-' + phoneStr.slice(3);
        return phoneStrFmt;
    }
}
PhonePipe.ɵfac = function PhonePipe_Factory(t) { return new (t || PhonePipe)(); };
PhonePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "phone", type: PhonePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhonePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'phone'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/pipes/phone.pipe */ "./src/app/shared/pipes/phone.pipe.ts");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_app_shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__["PhonePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_app_shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__["PhonePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__["PhonePipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [_app_shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__["PhonePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ng-projs\ensclient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map