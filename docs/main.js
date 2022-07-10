"use strict";
(self["webpackChunkspread_table_test"] = self["webpackChunkspread_table_test"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo/demo.component */ 9793);
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentation/documentation.component */ 4547);




function AppComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { "selected-page": a0 }; };
class AppComponent {
    constructor() {
        this.pages = {
            demo: 'demo',
            docs: 'docs',
        };
        this.selectedPage = this.pages.demo;
    }
    setPage(page) {
        this.selectedPage = page;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 8, consts: [[1, "menu-button", 3, "ngClass", "click"], [1, "page-wrapper"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.setPage(ctx.pages.demo); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.setPage(ctx.pages.docs); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_ng_container_6_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_ng_container_7_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx.selectedPage === "demo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.selectedPage === "docs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedPage === ctx.pages.demo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedPage === ctx.pages.docs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _demo_demo_component__WEBPACK_IMPORTED_MODULE_0__.DemoComponent, _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_1__.DocumentationComponent], styles: [".cell-in-edit {\n  height: 100%;\n  outline: none;\n  border: none;\n}\n  .cell-in-edit:focus {\n  outline: none;\n  border: none;\n}\n.menu-button[_ngcontent-%COMP%] {\n  padding: 9px 24px;\n  background-color: #634be3;\n  color: white;\n  border: none;\n  margin: 10px 5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.menu-button.selected-page[_ngcontent-%COMP%] {\n  background-color: #321bad;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5wbSUyMGxpYnJhcnlcXG5nLXNwcmVhZC10YWJsZVxccHJvamVjdHNcXGV4YW1wbGVcXHNyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNDSjtBREdBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBRjtBREVFO0VBQ0UseUJBQUE7QUNBSjtBRElBO0VBQ0UsaUJBQUE7QUNERiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmNlbGwtaW4tZWRpdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDlweCAyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgNzUsIDIyNyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDEwcHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICYuc2VsZWN0ZWQtcGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4ocmdiKDk5LCA3NSwgMjI3KSwgMjApO1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2Utd3JhcHBlciB7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbn1cclxuIiwiOjpuZy1kZWVwIC5jZWxsLWluLWVkaXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbjo6bmctZGVlcCAuY2VsbC1pbi1lZGl0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubWVudS1idXR0b24ge1xuICBwYWRkaW5nOiA5cHggMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNGJlMztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMTBweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1lbnUtYnV0dG9uLnNlbGVjdGVkLXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIxYmFkO1xufVxuXG4ucGFnZS13cmFwcGVyIHtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59Il19 */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);
/* harmony import */ var spread_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! spread-table */ 4017);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _shared_st_dropdown_editor_st_dropdown_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/st-dropdown-editor/st-dropdown-editor.component */ 8885);
/* harmony import */ var _shared_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/custom-modal/custom-modal.component */ 9523);
/* harmony import */ var _shared_st_custom_renderer_st_custom_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/st-custom-renderer/st-custom-renderer.component */ 638);
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo/demo.component */ 9793);
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation/documentation.component */ 4547);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-highlightjs */ 386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [{
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__.HIGHLIGHT_OPTIONS,
            useValue: {
                fullLibraryLoader: () => __webpack_require__.e(/*! import() */ "assets/node_modules_highlight_js_es_index_js").then(__webpack_require__.bind(__webpack_require__, /*! assets/highlight.js */ 7722)),
                themePath: 'assets/androidstudio.css' // Optional, and useful if you want to change the theme dynamically
            }
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            spread_table__WEBPACK_IMPORTED_MODULE_13__.SpreadTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.ScrollingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__.HighlightModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _shared_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_3__.CustomModalComponent,
        _shared_st_dropdown_editor_st_dropdown_editor_component__WEBPACK_IMPORTED_MODULE_2__.StDropdownEditorComponent,
        _shared_st_custom_renderer_st_custom_renderer_component__WEBPACK_IMPORTED_MODULE_4__.StCustomRendererComponent,
        _demo_demo_component__WEBPACK_IMPORTED_MODULE_5__.DemoComponent,
        _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__.DocumentationComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        spread_table__WEBPACK_IMPORTED_MODULE_13__.SpreadTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.ScrollingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__.HighlightModule] }); })();


/***/ }),

/***/ 9793:
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoComponent": () => (/* binding */ DemoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var spread_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! spread-table */ 4017);
/* harmony import */ var _shared_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/custom-modal/custom-modal.component */ 9523);
/* harmony import */ var _shared_custom_validators_required_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/custom-validators/required-validator */ 8082);
/* harmony import */ var _shared_st_custom_renderer_st_custom_renderer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/st-custom-renderer/st-custom-renderer.component */ 638);
/* harmony import */ var _shared_st_dropdown_editor_st_dropdown_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/st-dropdown-editor/st-dropdown-editor.component */ 8885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);












const _c0 = ["spreadTable"];
function DemoComponent_spread_table_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "spread-table", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cellValueChange", function DemoComponent_spread_table_14_Template_spread_table_cellValueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.onCellValueChange($event); })("contextMenuEvent", function DemoComponent_spread_table_14_Template_spread_table_contextMenuEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.onContextMenuEvent($event); })("columnMenuEvent", function DemoComponent_spread_table_14_Template_spread_table_columnMenuEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.onColumnMenuEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("columns", ctx_r0.columns)("minColumnWidth", 100)("rowHeight", 36)("indexWidth", 60)("rawData", ctx_r0.data)("undoRedoStackSize", 20)("extraContextMenuItems", ctx_r0.extraContextMenuItems)("extraColumnMenuItems", ctx_r0.extraColumnMenuItems);
} }
class DemoComponent {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.frameworkComponents = {
            dropdownEditor: _shared_st_dropdown_editor_st_dropdown_editor_component__WEBPACK_IMPORTED_MODULE_3__.StDropdownEditorComponent,
            customRenderer: _shared_st_custom_renderer_st_custom_renderer_component__WEBPACK_IMPORTED_MODULE_2__.StCustomRendererComponent
        };
        this.columns = [
            new spread_table__WEBPACK_IMPORTED_MODULE_5__.Column({ displayName: 'Id', name: 'id', editable: false, resizable: false }),
            new spread_table__WEBPACK_IMPORTED_MODULE_5__.Column({ displayName: 'Album Id', name: 'albumId', editorComponent: this.frameworkComponents.dropdownEditor, editorParams: { items: [1, 2, 3, 4] } }),
            new spread_table__WEBPACK_IMPORTED_MODULE_5__.Column({ displayName: 'Title', name: 'title', minWidth: 400, validators: [_shared_custom_validators_required_validator__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator.required(), _shared_custom_validators_required_validator__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator.requiredString()] }),
            new spread_table__WEBPACK_IMPORTED_MODULE_5__.Column({ displayName: 'Url', name: 'url', minWidth: 300, rendererComponent: this.frameworkComponents.customRenderer }),
            new spread_table__WEBPACK_IMPORTED_MODULE_5__.Column({ displayName: 'Thumbnail Url', name: 'thumbnailUrl', minWidth: 300, rendererComponent: this.frameworkComponents.customRenderer })
        ];
        this.gridInstance = new spread_table__WEBPACK_IMPORTED_MODULE_5__.SpreadTableComponent(new spread_table__WEBPACK_IMPORTED_MODULE_5__.UndoRedoService());
        this.extraContextMenuItems = [{
                menuText: 'separator'
            }, {
                faIconName: 'fas fa-american-sign-language-interpreting',
                menuText: 'Test 1',
                menuEvent: 'test1Event',
                disabled: false,
            },
            {
                faIconName: 'fas fa-archway',
                menuText: 'Test 2',
                menuEvent: 'test2Event',
                disabled: true
            },];
        this.extraColumnMenuItems = [{
                menuText: 'separator'
            }, {
                faIconName: 'fas fa-edit',
                menuText: 'Rename column',
                menuEvent: 'renameColumnEvent',
                disabled: false,
            }, {
                faIconName: 'fas fa-plus-square',
                menuText: 'Add column',
                menuEvent: 'addColumnEvent',
                disabled: false,
            },
            {
                faIconName: 'fas fa-trash',
                menuText: 'Remove column',
                menuEvent: 'removeColumnEvent',
                disabled: false
            },];
        this.randomColor = () => {
            let color = Math.floor(Math.random() * 16777215).toString(16);
            /* sometimes the returned value does not have
             * the 6 digits needed, so we do it again until
             * it does
             */
            while (color.length < 6) {
                color = Math.floor(Math.random() * 16777215).toString(16);
            }
            let red = parseInt(color.substring(0, 2), 16);
            let green = parseInt(color.substring(2, 4), 16);
            let blue = parseInt(color.substring(4, 6), 16);
            let brightness = red * 0.299 + green * 0.587 + blue * 0.114;
            /* if (red*0.299 + green*0.587 + blue*0.114) > 180
             * use #000000 else use #ffffff
             */
            if (brightness > 180) {
                return {
                    backgroundColor: '#' + color,
                    color: '#000000',
                };
            }
            else
                return {
                    backgroundColor: '#' + color,
                    color: '#ffffff',
                };
        };
        this.getData();
    }
    set grid(gridInstance) {
        this.gridInstance = gridInstance;
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const products = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)(this.httpClient.get('https://jsonplaceholder.typicode.com/photos'));
            console.log(products);
            this.data = products;
        });
    }
    getSpreadTable() {
        console.log(this.gridInstance);
        this.gridInstance.headerBgColor = this.randomColor().backgroundColor;
        this.gridInstance.headerColor = this.randomColor().color;
        this.result = Object.keys(this.gridInstance).join('<br>');
        this.event = 'Grid properties';
    }
    getSelectedCells() {
        console.log(this.gridInstance.getSelectedCells());
        this.result = JSON.stringify(this.gridInstance.getSelectedCells(), null, 2);
        this.event = 'Selected Cells';
    }
    getGridData() {
        console.log(this.gridInstance.getData());
        this.result = JSON.stringify(this.gridInstance.getData(), null, 2);
        this.event = 'Grid instance';
    }
    onCellValueChange(event) {
        console.log('changes:', event);
        this.result = JSON.stringify(event, null, 2);
        this.event = 'Cell value change';
    }
    onContextMenuEvent(event) {
        console.log('contextMenuEvent', event);
        this.result = JSON.stringify(event, null, 2);
        this.event = 'Menu event';
    }
    onColumnMenuEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('contextMenuEvent', event);
            this.result = JSON.stringify(event, null, 2);
            this.event = 'Menu event';
            if (event.menuEvent === 'addColumnEvent') {
                const result = yield this.openDialog(`Add new column`, 'Column name', 'Add', 'Cancel');
                if (!result)
                    return;
                // define the new column
                const newColumn = new spread_table__WEBPACK_IMPORTED_MODULE_5__.Column({ name: result, displayName: result, editable: true, resizable: true, minWidth: 200, });
                // add the new column to the columns array
                this.columns.splice(this.columns.indexOf(event.column) + 1, 0, newColumn);
                this.columns = [...this.columns];
                // add cells in the data array for the new column
                this.gridInstance.data.forEach((row) => {
                    row.cells.splice(this.columns.indexOf(newColumn), 0, new spread_table__WEBPACK_IMPORTED_MODULE_5__.Cell({ columnName: newColumn.name, value: '', originalValue: '', rowIndex: row.rowIndex }));
                });
                this.gridInstance.setColumnsWidth();
            }
            if (event.menuEvent === 'removeColumnEvent') {
                this.gridInstance.data.forEach((row) => {
                    let cells = row.cells.filter((cell) => cell.columnName !== event.column.name);
                    row.cells = [...cells];
                });
                this.columns.splice(this.columns.indexOf(event.column), 1);
                this.columns = [...this.columns];
                // if there were changes in the undo stack on this column remove them
                this.gridInstance.undoRedoService._changesForUndo.forEach((changes) => {
                    changes.forEach((change) => {
                        if (change.coordinates.columnName === event.column.name)
                            changes.splice(changes.indexOf(change), 1);
                    });
                });
                this.gridInstance.setColumnsWidth();
            }
            if (event.menuEvent === 'renameColumnEvent') {
                const result = yield this.openDialog(`Rename - ${event.column.displayName}`, 'Column name', 'Rename', 'Cancel', event.column.displayName);
                if (!result)
                    return;
                // change cells column name value to the renamed column name
                this.gridInstance.data.forEach((row) => {
                    let cell = row.cells.find((cell) => cell.columnName === event.column.name);
                    cell.columnName = result;
                });
                // if there were changes in the undo stack on this column set them to the new column name
                this.gridInstance.undoRedoService._changesForUndo.forEach((changes) => {
                    changes.forEach((change) => {
                        if (change.coordinates.columnName === event.column.name)
                            change.coordinates.columnName = result;
                    });
                });
                // rename column in the columns array
                const columnIndex = this.columns.indexOf(event.column);
                this.columns[columnIndex].displayName = result;
                this.columns[columnIndex].name = result;
                this.columns = [...this.columns];
                this.gridInstance.setColumnsWidth();
            }
        });
    }
    openDialog(headerText, bodyText, okButtonText, cancelButtonText, value = '') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const dialogRef = this.dialog.open(_shared_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_0__.CustomModalComponent);
            dialogRef.componentInstance.headerText = headerText;
            dialogRef.componentInstance.bodyText = bodyText;
            dialogRef.componentInstance.okButtonText = okButtonText;
            dialogRef.componentInstance.cancelButtonText = cancelButtonText;
            dialogRef.componentInstance.value = value;
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(dialogRef.afterClosed());
            return result;
        });
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
DemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], viewQuery: function DemoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    } }, decls: 17, vars: 3, consts: [[1, "m-2", "btn", "btn-danger", 3, "click"], [1, "m-2", "btn", "btn-success", 3, "click"], [1, "m-2", "btn", "btn-primary", 3, "click"], ["href", "https://www.paypal.com/paypalme/CFeder/5", 1, "btn", 2, "width", "124px", "height", "32px", "background", "url(https://raw.githubusercontent.com/neb1neuron/ng-spread-table/master/buy-me-a-beer.svg)", "background-repeat", "no-repeat", "background-size", "cover", "display", "inline-block"], [1, "p-3", "w-100", 2, "height", "700px"], [3, "columns", "minColumnWidth", "rowHeight", "indexWidth", "rawData", "undoRedoStackSize", "extraContextMenuItems", "extraColumnMenuItems", "cellValueChange", "contextMenuEvent", "columnMenuEvent", 4, "ngIf"], [1, "result", 3, "innerHtml"], [3, "columns", "minColumnWidth", "rowHeight", "indexWidth", "rawData", "undoRedoStackSize", "extraContextMenuItems", "extraColumnMenuItems", "cellValueChange", "contextMenuEvent", "columnMenuEvent"], ["spreadTable", ""]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "This is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Spread Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, ", a customizable Angular table that tends to look and feel like a basic spreadsheet.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_6_listener() { return ctx.getSpreadTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Get spread table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_8_listener() { return ctx.getSelectedCells(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Selected Cells");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_10_listener() { return ctx.getGridData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Get Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, DemoComponent_spread_table_14_Template, 2, 8, "spread-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "h3", 6)(16, "pre", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.event, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.result, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, spread_table__WEBPACK_IMPORTED_MODULE_5__.SpreadTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4547:
/*!**********************************************************!*\
  !*** ./src/app/documentation/documentation.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationComponent": () => (/* binding */ DocumentationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-highlightjs */ 386);


class DocumentationComponent {
    constructor() {
        this.appModuleSetup = `import { SpreadTableModule } from 'spread-table';
@NgModule({
  imports: [
    // Other module imports
    ...
    // spread-table modules
    SpreadTableModule,
  ],
})
export class AppModule { }
`;
        this.appComponentTsSetup = `import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Column } from "spread-table";

@Component({
selector: "app-root",
templateUrl: "./app.component.html",
styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  columns: Column[] = [
    new Column({ displayName: 'Id', name: 'id', editable: false, resizable: false }),
    new Column({ displayName: 'Album Id', name: 'albumId'),
    new Column({ displayName: 'Title', name: 'title', minWidth: 400, validators: [RequiredValidator.required(), RequiredValidator.requiredString()] }),
    new Column({ displayName: 'Url', name: 'url', minWidth: 300}),
    new Column({ displayName: 'Thumbnail Url', name: 'thumbnailUrl', minWidth: 300 })
  ];

  data: any;

  gridInstance: SpreadTableComponent = new SpreadTableComponent(new UndoRedoService());

  @ViewChild('spreadTable') set grid(gridInstance: SpreadTableComponent) {
    this.gridInstance = gridInstance;
  }

  // this is how you would add custom context menu items
  extraContextMenuItems: ContextMenuModel[] =
    [{
      menuText: 'separator'
    }, {
      faIconName: 'fas fa-american-sign-language-interpreting',
      menuText: 'Test 1',
      menuEvent: 'test1Event',
      disabled: false,
    },
    {
      faIconName: 'fas fa-archway',
      menuText: 'Test 2',
      menuEvent: 'test2Event',
      disabled: true
    },];

  // this is how you would add custom column menu items
  extraColumnMenuItems: ContextMenuModel[] =
    [{
      menuText: 'separator'
    }, {
      faIconName: 'fas fa-edit',
      menuText: 'Rename column',
      menuEvent: 'renameColumnEvent',
      disabled: false,
    }, {
      faIconName: 'fas fa-plus-square',
      menuText: 'Add column',
      menuEvent: 'addColumnEvent',
      disabled: false,
    },
    {
      faIconName: 'fas fa-trash',
      menuText: 'Remove column',
      menuEvent: 'removeColumnEvent',
      disabled: false
    },];

  constructor(private httpClient: HttpClient) {
  this.getData();
  }

  private async getData() {
  const products: any = this.httpClient.get("https://jsonplaceholder.typicode.com/photos");
  }

  // this is how you would change grid properties like headerBgColor, headerColor etc.
  getSpreadTable() {
    console.log(this.gridInstance as SpreadTableComponent);
    this.gridInstance.headerBgColor = '#f5f5f5';
    this.gridInstance.headerColor = '#000';
    this.result = Object.keys(this.gridInstance).join('<br>');
    this.event = 'Grid properties';
  }

  // this is how you would get selected cells
  getSelectedCells() {
    console.log(this.gridInstance.getSelectedCells());
    this.result = JSON.stringify(this.gridInstance.getSelectedCells(), null, 2);
    this.event = 'Selected Cells';
  }

  // this is how you would get all the data in the grid
  getGridData() {
    console.log(this.gridInstance.getData());
    this.result = JSON.stringify(this.gridInstance.getData(), null, 2);
    this.event = 'Grid instance';
  }

  // cell value change event
  onCellValueChange(event: Change[]) {
    console.log('changes:', event);
    this.result = JSON.stringify(event, null, 2);
    this.event = 'Cell value change';
  }

  // context menu event
  onContextMenuEvent(event: ContextMenuModel) {
    console.log('contextMenuEvent', event);
    this.result = JSON.stringify(event, null, 2);
    this.event = 'Menu event';
  }

  // column menu event
  async onColumnMenuEvent(event: ContextMenuModel) {
    console.log('contextMenuEvent', event);
    this.result = JSON.stringify(event, null, 2);
    this.event = 'Menu event';
    if (event.menuEvent === 'addColumnEvent') {
      const result = await this.openDialog(\`Add new column\`, 'Column name', 'Add', 'Cancel');

      if (!result) return;

      // define the new column
      const newColumn = new Column({ name: result, displayName: result, editable: true, resizable: true, minWidth: 200, });
      // add the new column to the columns array
      this.columns.splice(this.columns.indexOf(event.column!) + 1, 0, newColumn);
      this.columns = [...this.columns];

      // add cells in the data array for the new column
      this.gridInstance.data.forEach((row: Row) => {
        row.cells.splice(this.columns.indexOf(newColumn), 0, new Cell({ columnName: newColumn.name, value: '', originalValue: '', rowIndex: row.rowIndex }));
      });
      this.gridInstance.setColumnsWidth();
    }

    if (event.menuEvent === 'removeColumnEvent') {
      this.gridInstance.data.forEach((row: Row) => {
        let cells = row.cells.filter((cell: Cell) => cell.columnName !== event.column!.name);
        row.cells = [...cells];
      });

      this.columns.splice(this.columns.indexOf(event.column!), 1);
      this.columns = [...this.columns];

      // if there were changes in the undo stack on this column remove them
      this.gridInstance.undoRedoService._changesForUndo.forEach((changes: Change[]) => {
        changes.forEach((change: Change) => {
          if (change.coordinates.columnName === event.column!.name)
            changes.splice(changes.indexOf(change), 1);
        });
      });

      this.gridInstance.setColumnsWidth();
    }

    if (event.menuEvent === 'renameColumnEvent') {
      const result = await this.openDialog(\`Rename - \${event.column!.displayName}\`, 'Column name', 'Rename', 'Cancel', event.column!.displayName);

      if (!result) return;

      // change cells column name value to the renamed column name
      this.gridInstance.data.forEach((row: Row) => {
        let cell = row.cells.find((cell: Cell) => cell.columnName === event.column!.name);
        cell!.columnName = result;
      });

      // if there were changes in the undo stack on this column set them to the new column name
      this.gridInstance.undoRedoService._changesForUndo.forEach((changes: Change[]) => {
        changes.forEach((change: Change) => {
          if (change.coordinates.columnName === event.column!.name)
            change.coordinates.columnName = result;
        });
      });

      // rename column in the columns array
      const columnIndex = this.columns.indexOf(event.column!);
      this.columns[columnIndex].displayName = result;
      this.columns[columnIndex].name = result;
      this.columns = [...this.columns];

      this.gridInstance.setColumnsWidth();
    }
  }

  async openDialog(headerText: string, bodyText: string, okButtonText: string, cancelButtonText: string, value: string = '') {
    const dialogRef = this.dialog.open(CustomModalComponent);

    dialogRef.componentInstance.headerText = headerText;
    dialogRef.componentInstance.bodyText = bodyText;
    dialogRef.componentInstance.okButtonText = okButtonText;
    dialogRef.componentInstance.cancelButtonText = cancelButtonText;
    dialogRef.componentInstance.value = value;

    const result = await firstValueFrom(dialogRef.afterClosed());

    return result;
  }
}`;
        this.appComponentHtmlSetup = `<spread-table *ngIf="data"
                #spreadTable
                [columns]="columns"
                [minColumnWidth]="100"
                [rowHeight]="36"
                [indexWidth]="60"
                [rawData]="data"
                [undoRedoStackSize]="20"
                [extraContextMenuItems]="extraContextMenuItems"
                [extraColumnMenuItems]="extraColumnMenuItems"
                (cellValueChange)="onCellValueChange($event)"
                (contextMenuEvent)="onContextMenuEvent($event)"
                (columnMenuEvent)="onColumnMenuEvent($event)">
  </spread-table>`;
        this.customRendererTs = `import { Component } from '@angular/core';
import { IRendererComponent, IRendererParams } from 'test-packages/spread-table/lib/models/renderer.models';

@Component({
  selector: 'app-st-custom-renderer',
  templateUrl: './st-custom-renderer.component.html',
  styleUrls: ['./st-custom-renderer.component.css']
})
export class StCustomRendererComponent implements IRendererComponent {
  params: IRendererParams | undefined;

  text: string = '';
  constructor() { }
  stInit(params: IRendererParams) {
    this.params = params;
    this.text = params.value.split('/').pop();
  }
}
`;
        this.customRendererHtml = `<div style="white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;">
  <img [src]="params?.value"
       height="26px"
       width="26px"
       alt="placeholder"
       style="margin-right:5px">
  <span style="vertical-align: top">{{text}}</span>
</div>
`;
        this.customEditorTs = `import { Component, EventEmitter } from '@angular/core';
import { IEditorComponent, IEditorParams } from 'test-packages/spread-table/lib/models/editor.models';

@Component({
  selector: 'app-st-dropdown-editor',
  templateUrl: './st-dropdown-editor.component.html',
  styleUrls: ['./st-dropdown-editor.component.scss']
})
export class StDropdownEditorComponent implements IEditorComponent {
  setValue: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  params: IEditorParams | undefined;

  stInit(params: IEditorParams) {
    this.params = params;
  }

  select(item: any) {
    this.setValue.emit(+item.target.value);
  }
}
`;
        this.customEditorHtml = `<select style="width: 100%;height:100%;"
        autofocus
        [formControl]="params?.input"
        (change)="select($event)"
        class="form-control">
  <option [style.background]="item == params?.input.value ? '#dbf2ff' : ''"
          *ngFor="let item of params?.column?.editorParams?.items"
          [value]="item">{{item}}</option>
</select>
`;
        this.addCustomRendererAndEditor = `frameworkComponents = {
    dropdownEditor: StDropdownEditorComponent,
    customRenderer: StCustomRendererComponent
  };

  columns: Column[] = [
    new Column({ displayName: 'Id', name: 'id', editable: false, resizable: false }),
    new Column({ displayName: 'Album Id', name: 'albumId', editorComponent: this.frameworkComponents.dropdownEditor, editorParams: { items: [1, 2, 3, 4] } }),
    new Column({ displayName: 'Title', name: 'title', minWidth: 400, validators: [RequiredValidator.required(), RequiredValidator.requiredString()] }),
    new Column({ displayName: 'Url', name: 'url', minWidth: 300, rendererComponent: this.frameworkComponents.customRenderer }),
    new Column({ displayName: 'Thumbnail Url', name: 'thumbnailUrl', minWidth: 300, rendererComponent: this.frameworkComponents.customRenderer })];
    `;
    }
    ngOnInit() {
    }
}
DocumentationComponent.ɵfac = function DocumentationComponent_Factory(t) { return new (t || DocumentationComponent)(); };
DocumentationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentationComponent, selectors: [["app-documentation"]], decls: 101, vars: 8, consts: [[1, "table-of-contents"], ["href", "#features"], ["href", "#instalation"], ["href", "#setup"], ["href", "#customRenderer"], ["href", "#customEditor"], ["id", "features"], ["id", "instalation"], [1, "code"], ["id", "setup"], [3, "highlight"], ["id", "customRenderer"], ["id", "customEditor"], ["href", "https://www.paypal.com/paypalme/CFeder/5", 1, "btn", 2, "width", "124px", "height", "32px", "background", "url(https://raw.githubusercontent.com/neb1neuron/ng-spread-table/master/buy-me-a-beer.svg)", "background-repeat", "no-repeat", "background-size", "cover", "display", "inline-block"]], template: function DocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Spread Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ", a customizable Angular table that tends to look and feel like a basic spreadsheet.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Table of contents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 0)(8, "li")(9, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Custom Renderer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Custom Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul")(26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u2705 virtual scroll for displaying big data super fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u2705 copy/paste/cut functionality with keyboard shortcuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u2705 copy/paste/cut in bulk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u2705 copy/paste/cut from and into excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u2705 custom validators support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u2705 custom renderer and editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u2705 disabled columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u2705 undo/redo on single or batch changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u2705 resizable columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u2705 extensible column/context menus with events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "npm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code")(51, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "npm i spread-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "or yarn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code")(56, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "yarn add spread-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Module Setup (app.module.ts)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "code", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Usage (app.component.ts) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "code", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Usage (app.component.html) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "code", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Custom Renderer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "st-custom-renderer.component.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "code", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "st-custom-renderer.component.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "code", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Custom Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "st-dropdown-editor.component.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "code", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "st-dropdown-editor.component.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "code", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "This is how you add the custom renderers and editors to columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "app.component.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "code", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "a", 13)(99, "br")(100, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.appModuleSetup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.appComponentTsSetup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.appComponentHtmlSetup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.customRendererTs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.customRendererHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.customRendererTs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.customRendererHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.addCustomRendererAndEditor);
    } }, directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__.Highlight], styles: ["pre.code[_ngcontent-%COMP%] {\n  background: #282b2e;\n  color: white;\n  padding: 1rem;\n  border-radius: 5px;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 0;\n  font-weight: bold;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0 10px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbnBtJTIwbGlicmFyeVxcbmctc3ByZWFkLXRhYmxlXFxwcm9qZWN0c1xcZXhhbXBsZVxcc3JjXFxhcHBcXGRvY3VtZW50YXRpb25cXGRvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTs7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNDRiIsImZpbGUiOiJkb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHJlLmNvZGUge1xyXG4gIGJhY2tncm91bmQ6ICMyODJiMmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5oMSxcclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiIsInByZS5jb2RlIHtcbiAgYmFja2dyb3VuZDogIzI4MmIyZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmgxLFxuaDIge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"] });


/***/ }),

/***/ 9523:
/*!***************************************************************!*\
  !*** ./src/app/shared/custom-modal/custom-modal.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomModalComponent": () => (/* binding */ CustomModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);








function CustomModalComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CustomModalComponent {
    constructor() {
        this.headerText = "";
        this.bodyText = "";
        this.okButtonText = "";
        this.cancelButtonText = "";
        this.value = "";
        this.input = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
    }
    ngOnInit() {
        this.input.setValue(this.value);
    }
    getValue() {
        return this.input.value;
    }
}
CustomModalComponent.ɵfac = function CustomModalComponent_Factory(t) { return new (t || CustomModalComponent)(); };
CustomModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomModalComponent, selectors: [["app-custom-modal"]], inputs: { headerText: "headerText", bodyText: "bodyText", okButtonText: "okButtonText", cancelButtonText: "cancelButtonText", value: "value" }, decls: 14, vars: 8, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["type", "text", "autocomplete", "off", "matInput", "", 3, "formControl"], [4, "ngIf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", "disabled"]], template: function CustomModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "form", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomModalComponent_mat_error_8_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bodyText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.input);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cancelButtonText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.getValue())("disabled", ctx.input.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.okButtonText);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8082:
/*!****************************************************************!*\
  !*** ./src/app/shared/custom-validators/required-validator.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequiredValidator": () => (/* binding */ RequiredValidator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 587);

class RequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators {
    static required() {
        return (control) => control.value ? null : { required: 'This field is required' };
    }
    static requiredString() {
        return (control) => control.value ? null : { requiredString: 'This field must be a string' };
    }
}


/***/ }),

/***/ 638:
/*!***************************************************************************!*\
  !*** ./src/app/shared/st-custom-renderer/st-custom-renderer.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StCustomRendererComponent": () => (/* binding */ StCustomRendererComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class StCustomRendererComponent {
    constructor() {
        this.text = '';
    }
    stInit(params) {
        this.params = params;
        this.text = params.value.split('/').pop();
    }
}
StCustomRendererComponent.ɵfac = function StCustomRendererComponent_Factory(t) { return new (t || StCustomRendererComponent)(); };
StCustomRendererComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StCustomRendererComponent, selectors: [["app-st-custom-renderer"]], decls: 4, vars: 2, consts: [[2, "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], ["height", "26px", "width", "26px", "alt", "placeholder", 2, "margin-right", "5px", 3, "src"], [2, "vertical-align", "top"]], template: function StCustomRendererComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.params == null ? null : ctx.params.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdC1jdXN0b20tcmVuZGVyZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8885:
/*!***************************************************************************!*\
  !*** ./src/app/shared/st-dropdown-editor/st-dropdown-editor.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StDropdownEditorComponent": () => (/* binding */ StDropdownEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function StDropdownEditorComponent_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r1 == (ctx_r0.params == null ? null : ctx_r0.params.input.value) ? "#dbf2ff" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class StDropdownEditorComponent {
    constructor() {
        this.setValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    stInit(params) {
        this.params = params;
    }
    select(item) {
        this.setValue.emit(+item.target.value);
    }
}
StDropdownEditorComponent.ɵfac = function StDropdownEditorComponent_Factory(t) { return new (t || StDropdownEditorComponent)(); };
StDropdownEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StDropdownEditorComponent, selectors: [["app-st-dropdown-editor"]], decls: 2, vars: 2, consts: [["autofocus", "", 1, "form-control", 2, "width", "100%", "height", "100%", 3, "formControl", "change"], [3, "background", "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function StDropdownEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StDropdownEditorComponent_Template_select_change_0_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StDropdownEditorComponent_option_1_Template, 2, 4, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.params == null ? null : ctx.params.input);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.params == null ? null : ctx.params.column == null ? null : ctx.params.column.editorParams == null ? null : ctx.params.column.editorParams.items);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdC1kcm9wZG93bi1lZGl0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });


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
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map