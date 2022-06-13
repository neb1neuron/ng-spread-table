"use strict";
(self["webpackChunkspread_table_test"] = self["webpackChunkspread_table_test"] || []).push([["main"],{

/***/ 809:
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

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var spread_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! spread-table */ 4017);
/* harmony import */ var _custom_validators_required_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-validators/required-validator */ 1213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);







const _c0 = ["spreadTable"];
class AppComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.columns = [
            new spread_table__WEBPACK_IMPORTED_MODULE_1__.Column({ displayName: 'Id', name: 'id', editable: false, resizable: false }),
            new spread_table__WEBPACK_IMPORTED_MODULE_1__.Column({ displayName: 'Album Id', name: 'albumId' }),
            new spread_table__WEBPACK_IMPORTED_MODULE_1__.Column({ displayName: 'Title', name: 'title', minWidth: 400, validators: [_custom_validators_required_validator__WEBPACK_IMPORTED_MODULE_0__.RequiredValidator.required(), _custom_validators_required_validator__WEBPACK_IMPORTED_MODULE_0__.RequiredValidator.requiredString()] }),
            new spread_table__WEBPACK_IMPORTED_MODULE_1__.Column({ displayName: 'Url', name: 'url', minWidth: 300 }),
            new spread_table__WEBPACK_IMPORTED_MODULE_1__.Column({ displayName: 'Thumbnail Url', name: 'thumbnailUrl', minWidth: 300 })
        ];
        this.gridInstance = new spread_table__WEBPACK_IMPORTED_MODULE_1__.SpreadTable();
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
                faIconName: 'fas fa-american-sign-language-interpreting',
                menuText: 'Column Test 1',
                menuEvent: 'columnTest1Event',
                disabled: false,
            },
            {
                faIconName: 'fas fa-archway',
                menuText: 'Column Test 2',
                menuEvent: 'columnTest2Event',
                disabled: true
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // const products: any = await lastValueFrom(this.httpClient.get('../assets/data.json'));
            const products = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(this.httpClient.get('https://jsonplaceholder.typicode.com/photos'));
            this.data = products;
        });
    }
    // addColumn() {
    //   this.gridInstance.columns.push(new Column({ displayName: 'New Column', name: 'aaa', minWidth: 150 }));
    // }
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
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    } }, decls: 13, vars: 9, consts: [[3, "click"], ["href", "https://www.paypal.com/paypalme/CFeder/5", 2, "padding-right", "82px", "padding-bottom", "20px", "background", "url(https://raw.githubusercontent.com/neb1neuron/ng-spread-table/master/buy-me-a-beer.svg)", "background-repeat", "no-repeat", "background-size", "cover", "display", "inline-block"], [1, "p-3", "w-100", 2, "height", "700px"], [3, "columns", "minColumnWidth", "rowHeight", "indexWidth", "rawData", "extraContextMenuItems", "extraColumnMenuItems", "cellValueChange", "contextMenuEvent", "columnMenuEvent"], ["spreadTable", ""], [1, "result", 3, "innerHtml"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Spread table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.getSpreadTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Get spread table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.getSelectedCells(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Selected Cells");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.getGridData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Get Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "spread-table", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cellValueChange", function AppComponent_Template_spread_table_cellValueChange_9_listener($event) { return ctx.onCellValueChange($event); })("contextMenuEvent", function AppComponent_Template_spread_table_contextMenuEvent_9_listener($event) { return ctx.onContextMenuEvent($event); })("columnMenuEvent", function AppComponent_Template_spread_table_columnMenuEvent_9_listener($event) { return ctx.onContextMenuEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "pre", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("columns", ctx.columns)("minColumnWidth", 100)("rowHeight", 36)("indexWidth", 60)("rawData", ctx.data)("extraContextMenuItems", ctx.extraContextMenuItems)("extraColumnMenuItems", ctx.extraColumnMenuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.event, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.result, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    } }, directives: [spread_table__WEBPACK_IMPORTED_MODULE_1__.SpreadTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);
/* harmony import */ var spread_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! spread-table */ 4017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            spread_table__WEBPACK_IMPORTED_MODULE_7__.SpreadTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.ScrollingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        spread_table__WEBPACK_IMPORTED_MODULE_7__.SpreadTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.ScrollingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule] }); })();


/***/ }),

/***/ 1213:
/*!*********************************************************!*\
  !*** ./src/app/custom-validators/required-validator.ts ***!
  \*********************************************************/
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

/***/ 4766:
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

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map