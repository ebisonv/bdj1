(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cat-menu-right></cat-menu-right>\n<cat-menu-left></cat-menu-left>\n<cat-top-bar></cat-top-bar>\n<div class=\"cat__content\">\n<router-outlet></router-outlet>\n<cat-footer></cat-footer>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/top-bar/top-bar.component */ "./src/app/layout/top-bar/top-bar.component.ts");
/* harmony import */ var _layout_menu_left_menu_left_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/menu-left/menu-left.component */ "./src/app/layout/menu-left/menu-left.component.ts");
/* harmony import */ var _layout_menu_right_menu_right_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/menu-right/menu-right.component */ "./src/app/layout/menu-right/menu-right.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/components.module */ "./src/app/core/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = /** @class */ (function () {
    function AppModule(router) {
        this.router = router;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                NProgress.start();
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                setTimeout(function () {
                    NProgress.done();
                }, 200);
            }
        });
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _layout_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_9__["TopBarComponent"],
                _layout_menu_left_menu_left_component__WEBPACK_IMPORTED_MODULE_10__["MenuLeftComponent"],
                _layout_menu_right_menu_right_component__WEBPACK_IMPORTED_MODULE_11__["MenuRightComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _core_components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: false });


/***/ }),

/***/ "./src/app/core/components/components.module.ts":
/*!******************************************************!*\
  !*** ./src/app/core/components/components.module.ts ***!
  \******************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/core/components/dashboard/dashboard.module.ts");
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.module */ "./src/app/core/components/products/products.module.ts");
/* harmony import */ var _sales_sales_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales/sales.module */ "./src/app/core/components/sales/sales.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__["DashboardModule"],
                _products_products_module__WEBPACK_IMPORTED_MODULE_3__["ProductsModule"],
                _sales_sales_module__WEBPACK_IMPORTED_MODULE_4__["SalesModule"],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/core/components/dashboard/dashboard.html":
/*!**********************************************************!*\
  !*** ./src/app/core/components/dashboard/dashboard.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START: dashboard -->\n<nav style=\"background-color: #545b62; height: 40px;\" class=\"cat__core__top-sidebar cat__core__top-sidebar--bg\">\n    <div style=\"float:left; padding: 10px 10px 5px 10px;color: #FFFFFF;\">\n        <span><i class=\"far fa-plus-circle\"></i></span>&nbsp;Category Group\n    </div>\n    <div  style=\"float:right; padding:5px 20px; height:40px;\">\n        <div id=\"slt-prev-mnth\" class=\"prev-btn\" style=\"width:auto; float: left;font-size: 25px; color: #efa31f;\" ><i class=\"far fa-chevron-circle-left\"></i></div> \n        <div style=\"width:auto; float: left;\" class='input-group date' id='datepicker'>\n            <input  type='hidden' class=\"form-control\" id=\"inputDate\" placeholder=\"Date\" value=\"\">\n            <span style=\"width: 150px; height: 20px; color:white;padding-top: 15px;\" class=\"budget-date-select input-group-addon\"></span>\n        </div>\n\n        <div id=\"slt-next-mnth\" class=\"next-btn\"  style=\"width:auto; float: left;font-size: 25px;color: #efa31f;\"><i class=\"far fa-chevron-circle-right\"></i></div>\n    </div>\n</nav>\n<div class=\"row\" >\n    <div class=\"col-xl-12\" style=\"display: none\">\n        <div style=\"background-color: #f8f4ea; padding: 10px;border-bottom: 1px solid #e4e9f0;color: #866a3a;\">\n            <span><i class=\"far fa-plus-circle\"></i></span>&nbsp;Category Group\n        </div>\n    </div>\n    <div class=\"col-xl-7\" style=\"padding-right: 2px;\">\n        <section>\n            <div style=\"background-color: #73777b; color:white;height: 30px; padding: 5px;overflow:hidden\">\n                <div class=\"row\" >\n                    <div class=\"col-lg-1 col-md-1 col-sm-1 col-1 text-center\" style=\"padding:0px 3px;\">\n                        <div  class=\"ember-view ynab-checkbox\">\n                            <input class=\"form-control\" type=\"checkbox\" >\n                        </div>\n                    </div>\n                    <div class=\"col-lg-5 col-md-5 col-sm-5 col-5 text-left\" style=\"\" >CATEGORY</div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 text-left \" style=\"padding-left:3px\">BUDGETED</div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 text-left\" style=\"padding-left:3px\">ACTIVITY</div>\n                    <div class=\"col-ld-2 col-md-2 col-sm-2 col-2 text-left\" style=\"padding-left:3px\">\n                        <strong>AVAILABLE</strong>\n                    </div>\n                </div>\n            </div>\n            <div id=\"category_list\" style=\"padding: 5px; height: 470px; background-color: #f8f4ea; overflow-y: auto; overflow-x: hidden\">\n                <div class=\"budgetcat\" *ngFor=\"let bj of budgetData\" >\n                    <div class=\"row\" style=\"background-color: #ddb67c; padding:10px 0px;border-bottom: .05em solid #f4e9d4\">  \n                        <div class=\"col-lg-1 col-md-1 col-sm-1 col-1 text-center\" style=\"padding:0px 3px; \">\n                            <div  title=\"\" class=\"ember-view ynab-checkbox\">\n                                <input type=\"checkbox\">\n                            </div>\n                        </div>\n                        <div class=\"col-lg-5 col-md-5 col-sm-5 col-5 text-left\" style=\"font-weight: bold;\">\n                            <span class=\"budgetcatetoggle clickable\" style=\"display: block;min-width:13px;float:left;margin-right:3px;\"><i class=\" fa fa-caret-right fa-lg\"></i></span><span class=\"clickable\">Immediate Obligations</span><span class=\"addsubcatbtn clickable\" style=\"padding-left:3px\"><i class=\"far fa-plus-circle\"></i></span>\n                        </div>\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 text-left\">\n                            <bdi>$</bdi>10.00\n                        </div>\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\n                            <bdi>$</bdi>0.00\n                        </div>\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\n                            <bdi>$</bdi>10.00\n                        </div>\n                    </div>\n                    <div *ngFor=\"let categ of bj.sub\" class=\"budgetsubcat row\" style=\"background-color: white;border-bottom: .05em solid #f4e9d4\" >\n                        <div class=\"col-1 text-center\" style=\"padding:0px 3px;\">\n                            <div  title=\"\" class=\"ember-view ynab-checkbox\">\n                                <input type=\"checkbox\">\n                            </div>\n                        </div>\n                        <div class=\"col-5 text-left\" style=\"padding-left: 25px; \">\n                            Rent/Mortgage\n                        </div>\n                        <div class=\"col-2\">\n                            $10\n                        </div>\n                        <div class=\"col-2\">\n                            $10\n                        </div>\n                        <div class=\"col-2\">\n                            $10\n                        </div>\n                    </div>\n                </div> \n            </div>\n        </section> \n    </div>\n\n\n    <div class=\"col-xl-5\" style=\"padding: 0px 0px;display:flex;flex-direction: column;\">\n\n        <section style=\"margin-bottom: 2px;\" class=\"card\" order-id=\"card-6\">\n\n\n\n\n            <div style=\"display: none\" class=\"card-header\">\n\n                <h5 class=\"mb-0 mr-3 d-inline-block text-black\">\n                    <strong>Server Configuration</strong>\n                </h5>\n            </div>\n            <div class=\"card-block\" style=\"padding: 0 .2em;\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\" >\n                        <div class=\"cat__core__widget cat__core__widget__3 bg-default\" style=\"margin-bottom: 2px;\">\n                            <a href=\"javascript: void(0);\" class=\"cat__core__widget__3__body text-white\" style=\"height: 130px;padding:0px; font-weight: bold; background-color: #e9f0d2; border-bottom: 1px solid rgba(22, 163, 54)\">\n                                <div style=\" height:56px; \">\n                                    <div  style=\"background-color: rgba(22, 163, 54); height: 40px; font-size: 20px; font-weight: bold; padding:5px 15px; \">\n                                        <bdi>$</bdi>9,980.00\n                                        <small><i>To be budgeted</i></small>\n                                    </div>\n                                    <div style=\" height:16px; padding: 0 30% 0 0%; \">\n                                        <div style=\"width: 16px; height:16px; border-top: 8px solid rgba(22, 163, 54);border-right: 8px solid rgba(0, 0, 0, 0);border-bottom: 8px solid rgba(0, 0, 0, 0);border-left: 8px solid rgb(0, 0, 0, 0);\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div style=\"margin-top: -15px;padding: 0px 5px;color:black\">\n                                    <div style=\"width: 20%; float:left;text-align: right; padding-right: 2px;\">+$9,980.00</div><div style=\"width: 80%; float:left; text-align: left; padding-left: 2px; font-weight: normal;font-style: italic\">Funds for Jan</div>\n                                    <div style=\"width: 20%; float:left;text-align: right; padding-right: 2px;\">-$0.00</div><div style=\"width: 80%; float:left; text-align: left; padding-left: 2px;font-weight: normal;font-style: italic\">Overspent in Dec</div>\n                                    <div style=\"width: 20%; float:left;text-align: right; padding-right: 2px;\">-$0.00</div><div style=\"width: 80%; float:left; text-align: left; padding-left: 2px;font-weight: normal;font-style: italic\">Budgeted in Jan</div>\n                                    <div style=\"width: 20%; float:left;text-align: right; padding-right: 2px;\">-$0.00</div><div style=\"width: 80%; float:left; text-align: left; padding-left: 2px;font-weight: normal;font-style: italic\">Budgeted in Future</div>\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12\" >\n                        <div class=\"cat__core__widget cat__core__widget__3 bg-default\" style=\"margin-bottom: 17px;\">\n                            <div style=\"height: 100px;padding:0px; font-weight: bold; background-color: rgb(245, 245, 245); border-bottom: 1px solid #195895\" >\n                                <div style=\" height:56px; \">\n                                    <div  style=\"color:white; background-color: rgba(25, 88, 149); height: 40px; font-size: 20px; font-weight: bold; padding:5px 15px; \">\n                                        Summary\n                                    </div>\n                                    <div style=\" height:16px; padding: 0 30% 0 0%; \">\n                                        <div style=\"width: 16px; height:16px; border-top: 8px solid rgba(25, 88, 149);border-right: 8px solid rgba(0, 0, 0, 0);border-bottom: 8px solid rgba(0, 0, 0, 0);border-left: 8px solid rgb(0, 0, 0, 0);\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n\n                                    <div class=\"col-12\" style=\"margin-top: -15px;\">\n                                        <div class=\"col-6\" style=\"border-bottom: 1px solid lightgrey;float:left;text-align: left; font-size: 14px;\"><label style=\"padding-right: 5px; padding-left: 10px;\">Total Budgeted :</label>$1000000</div>\n                                        <div class=\"col-6\" style=\"border-bottom: 1px solid lightgrey;float:left;text-align: left;  font-size: 14px\"><label style=\"padding-right: 5px\">&nbsp;Total Activity :</label>$1000000</div>\n                                    </div>                                                \n                                    <div class=\"col-12\" style=\"\">\n                                        <div class=\"col-6\" style=\"float:left; text-align: left; font-size: 14px;\"><label style=\"padding-right: 5px;padding-left: 10px;\">&nbsp;Total Available :</label>$10000</div>\n                                        <div class=\"col-6\" style=\"float:left;text-align: left;  font-size: 14px\"><label style=\"padding-right: 5px\">&nbsp;&nbsp;Total Inflows :</label>$10</div>\n                                    </div>     \n                                    <div class=\"col-12\" style=\"display:none;padding: 5px;color:black\">\n                                        <div style=\"padding: 2.5px 0;height:15px;width: 45%; float:left;text-align: right; padding-right: 2px; font-size: 14px;border-bottom: 1px solid grey;\">Total Available : </div><div style=\"height:25px; width: 55%; float:left; text-align: left; padding-left: 2px; color: #665c4d; font-size: 16px;border-bottom: 1px solid grey;\">$100000000</div>\n                                        <div style=\"padding: 2.5px 0;height:25px;width: 45%; float:left;text-align: right; padding-right: 2px; font-size: 14px\">Total Inflows : </div><div style=\"height:25px; width: 55%; float:left; text-align: left; padding-left: 2px; color: #665c4d; font-size: 16px;\">$100000000</div> \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12\" ></div>\n                    <div class=\"col-lg-6\" style=\"display: none\">\n                        <div class=\"cat__core__widget cat__core__widget__3 bg-default\">\n                            <div class=\"carousel slide\" id=\"carousel-2\" data-ride=\"carousel\">\n                                <ol class=\"carousel-indicators\">\n                                    <li data-target=\"#carousel-2\" data-slide-to=\"0\" class=\"active\"></li>\n                                    <li data-target=\"#carousel-2\" data-slide-to=\"1\" class=\"\"></li>\n                                </ol>\n                                <div class=\"carousel-inner\" role=\"listbox\">\n                                    <div class=\"carousel-item active\">\n                                        <a href=\"javascript: void(0);\" class=\"cat__core__widget__3__body text-white\">\n                                            <div class=\"cat__core__widget__3__icon\">\n                                                <i class=\"icmn-books\"></i>\n                                            </div>\n                                            <h2>\n                                                <i class=\"icmn-books\"></i> Todo\n                                            </h2>\n                                            <p>\n                                                1. Upgrade\n                                                <br />\n                                                2. Finish\n                                            </p>\n                                        </a>\n                                    </div>\n                                    <div class=\"carousel-item\">\n                                        <a href=\"javascript: void(0);\" class=\"cat__core__widget__3__body text-white\">\n                                            <div class=\"cat__core__widget__3__icon\">\n                                                <i class=\"icmn-download\"></i>\n                                            </div>\n                                            <h2>\n                                                <i class=\"icmn-download\"></i> Finish\n                                            </h2>\n                                            <p>\n                                                1. Upgrade\n                                                <br />\n                                                2. Prepare\n                                            </p>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"cat__core__margin-fix\"><!-- --></div>\n            </div>\n        </section>\n        <section style=\"display:none;padding-top: 2px; margin-bottom: 0\" class=\"card\" order-id=\"card-10\">\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div  class=\"cat__core__widget cat__core__widget__3\">\n                            <div class=\"carousel slide\" id=\"carousel-12\" data-ride=\"carousel\">\n                                <ol class=\"carousel-indicators\">\n                                    <li data-target=\"#carousel-12\" data-slide-to=\"0\" class=\"active\"></li>\n                                    <li data-target=\"#carousel-12\" data-slide-to=\"1\" class=\"\"></li>\n                                </ol>\n                                <div class=\"carousel-inner\" role=\"listbox\">\n                                    <div  style=\"height: 320px\" class=\"carousel-item active\">\n                                        <div style=\"padding:0;height: 320px;  text-align: left\" class=\"cat__core__widget__3__body\">\n                                            <div style=\"padding:0\" class=\"card-header\">\n                                                <h5 class=\"mb-0 mr-3 d-inline-block text-black\">\n                                                    <strong>Revenue Statistics, Billions</strong>\n                                                </h5>\n                                                <span class=\"mr-2 nowrap text-black\">\n                                                    <span class=\"cat__core__donut cat__core__donut--success\"></span>\n                                                    Guns\n                                                </span>\n                                                <span class=\"mr-2 nowrap\">\n                                                    <span class=\"cat__core__donut cat__core__donut--primary\"></span>\n                                                    Girls\n                                                </span>\n                                                <span class=\"mr-2 nowrap\">\n                                                    <span class=\"cat__core__donut cat__core__donut--yellow\"></span>\n                                                    Drugs\n                                                </span>\n                                            </div>\n                                            <div style=\"width: 100%;\">\n                                                <div class=\"chart-line1 height-300 chartist1\"></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div style=\"height: 320px\"  class=\"carousel-item\">\n                                        <div id=\"chart-doughnut2\" ></div> \n                                    </div>\n                                </div>                  \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"cat__core__margin-fix\"><!-- --></div>\n        </section>\n        <section style=\"padding-top: 2px; margin-bottom: 0;flex:1;\" class=\"card\" order-id=\"card-10\">\n            <!-- Nav tabs -->\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li class=\"nav-item \">\n                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\" role=\"tab\">Account summary</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\">Expenses</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#messages\" role=\"tab\">Growth</a>\n                </li>\n            </ul>\n\n            <!-- Tab panes -->\n            <div class=\"tab-content\" style=\" flex: 1\">\n                <div class=\"tab-pane active\" id=\"home\" role=\"tabpanel\">\n\n                    <div class=\"col-12\" style=\"border-bottom: 1px solid lightgrey\">\n                        <div class=\"row\" style=\"padding: 10px 0px; font-size: 14px;font-weight: bold; color: #6d6868\">\n                            <div class=\"col-6 text-left\"><label style=\"padding: 0\" class=\"col-6 text-right\"><strong>Total Assets :&nbsp;</strong></label><span style=\"color:#455e45\">$100000000</span></div>\n                            <div class=\"col-6 text-left\"><label style=\"padding: 0\" class=\"col-7 text-right\"><strong>Total Liabilities :&nbsp;</strong></label><span style=\"color:red\">$90000000</span></div>\n                            <div class=\"col-6 text-left\"><label style=\"padding: 0\" class=\"col-6 text-right\"><strong>Net Worth :&nbsp;</strong></label><span style=\"color:#0c850f;\">$800000000</span></div>\n                        </div>\n                    </div>\n\n                    <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"false\">\n                        <div class=\"card\" style=\"margin: 0\">\n                            <div style=\"padding:0\"  role=\"tab\" id=\"headingOne\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\" >\n                                <h5 style=\"border-bottom: 1px solid #c0c0c0;background:#f1f1f1; padding: 5px 10px; margin:0\" >\n                                    Accounts\n                                </h5>\n                            </div>\n                            <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                                <div class=\"card-block\" style=\"padding: 0\">\n                                    <div style=\"height: 100px; overflow-y: auto;\">\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>American Express</strong> </label>\n                                            <label class=\"col-4 text-right\">$500000009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card\" style=\"margin: 0\">\n                            <div class=\"collapsed\" style=\"padding:0\"  role=\"tab\" id=\"headingOne\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\" >\n                                <h5 style=\"background:#f1f1f1; padding: 5px 10px;border-bottom: 1px solid #c0c0c0; margin:0\" >\n                                    Loans\n                                </h5>\n                            </div>\n                            <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                                <div class=\"card-block\" style=\"padding: 0\">\n                                    <div style=\"height: 100px; overflow-y: auto;\">\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>American Express</strong> </label>\n                                            <label class=\"col-4 text-right\">$500000009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card\" style=\"margin: 0\">\n                            <div class=\"collapsed\" style=\"padding:0\"  role=\"tab\" id=\"headingOne\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\" >\n                                <h5 style=\"background:#f1f1f1; padding: 5px 10px;\" >\n                                    Credit Cards\n                                </h5>\n                            </div>\n                            <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                                <div class=\"card-block\" style=\"padding: 0\">\n                                    <div style=\"height: 100px; overflow-y: auto;\">\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>American Express</strong> </label>\n                                            <label class=\"col-4 text-right\">$500000009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                        <div class=\"text-left col-12\" style=\"border-bottom: 1px solid #eee;\">\n                                            <label style=\"\" class=\"col-8 text-left\"><strong>Bank of America</strong> </label>\n                                            <label class=\"col-4 text-right\">$5430009</label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n\n\n                </div>\n                <div style=\"height: 100%;\" class=\"tab-pane\" id=\"profile\" role=\"tabpanel\">\n                    <div id=\"chart-doughnut\" style=\"width: 100%; height: 100%\" ></div> \n                </div>\n                <div style=\"position: relative; height:100%;\" class=\"tab-pane \" id=\"messages\" role=\"tabpanel\">\n                    <div class=\"growthtab\"  style=\"margin-top: 10px;bottom:0;\">\n\n                        <div style=\"width: 100%;\">\n                            <div class=\"chart-line chartist\"></div>\n                        </div>\n                        <div style=\"border:0; padding:0 5px; font-size: 12px;\" class=\"card-header\">\n                            <h5 class=\"mb-0 mr-3 d-inline-block text-black\">\n                                <strong>Revenue Statistics, Billions</strong>\n                            </h5>\n                            <span class=\"mr-2 nowrap text-black\">\n                                <span class=\"cat__core__donut cat__core__donut--success\"></span>\n                                Guns\n                            </span>\n                            <span class=\"mr-2 nowrap\">\n                                <span class=\"cat__core__donut cat__core__donut--primary\"></span>\n                                Girls\n                            </span>\n                            <span class=\"mr-2 nowrap\">\n                                <span class=\"cat__core__donut cat__core__donut--yellow\"></span>\n                                Drugs\n                            </span>\n                        </div>\n                    </div>              \n                </div>\n            </div>\n\n        </section>       \n\n\n        <div class=\"row\" style=\"display: none\">\n            <div class=\"col-lg-12\">\n                <br/>   \n                <div class=\"cat__core__widget cat__core__widget__3 bg-default\" style=\"background-color: #dbccb8 !important\">\n\n                    <div class=\"carousel slide\" id=\"carousel-1\" data-ride=\"carousel\">\n                        <ol class=\"carousel-indicators\">\n                            <li data-target=\"#carousel-1\" data-slide-to=\"0\" class=\"active\"></li>\n                            <li data-target=\"#carousel-1\" data-slide-to=\"1\" class=\"\"></li>\n                        </ol>\n                        <div class=\"carousel-inner\" role=\"listbox\">\n                            <div class=\"carousel-item active\" style=\"height: 400px;border:3px white solid;\">\n                                <div id=\"chart-doughnut1\" style=\"width: 100%; height: 100%\" ></div>   \n                            </div>\n                            <div class=\"carousel-item\" style=\"height: 200px; border:3px white solid;\">\n                                <div id=\"chart1-doughnut\" ></div>  \n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"cat__core__widget cat__core__widget__3 bg-default\">\n                    <div class=\"carousel slide\" id=\"carousel-2\" data-ride=\"carousel\">\n                        <ol class=\"carousel-indicators\">\n                            <li data-target=\"#carousel-2\" data-slide-to=\"0\" class=\"active\"></li>\n                            <li data-target=\"#carousel-2\" data-slide-to=\"1\" class=\"\"></li>\n                        </ol>\n                        <div class=\"carousel-inner\" role=\"listbox\">\n                            <div class=\"carousel-item active\">\n                                <a href=\"javascript: void(0);\" class=\"cat__core__widget__3__body text-white\">\n                                    <div class=\"cat__core__widget__3__icon\">\n                                        <i class=\"icmn-books\"></i>\n                                    </div>\n                                    <h2>\n                                        <i class=\"icmn-books\"></i> Todo\n                                    </h2>\n                                    <p>\n                                        1. Upgrade\n                                        <br />\n                                        2. Finish\n                                    </p>\n                                </a>\n                            </div>\n                            <div class=\"carousel-item\">\n                                <a href=\"javascript: void(0);\" class=\"cat__core__widget__3__body text-white\">\n                                    <div class=\"cat__core__widget__3__icon\">\n                                        <i class=\"icmn-download\"></i>\n                                    </div>\n                                    <h2>\n                                        <i class=\"icmn-download\"></i> Finish\n                                    </h2>\n                                    <p>\n                                        1. Upgrade\n                                        <br />\n                                        2. Prepare\n                                    </p>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"cat__core__widget p-3\">\n                    <p class=\"m-0\">Text widget. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                        Lorem Ipsum has been the industry's standard dummy.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- END: page scripts -->\n"

/***/ }),

/***/ "./src/app/core/components/dashboard/dashboard.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/components/dashboard/dashboard.module.ts ***!
  \***************************************************************/
/*! exports provided: routes, DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard */ "./src/app/core/components/dashboard/dashboard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _dashboard__WEBPACK_IMPORTED_MODULE_3__["Dashboard"] },
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _dashboard__WEBPACK_IMPORTED_MODULE_3__["Dashboard"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/core/components/dashboard/dashboard.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/dashboard/dashboard.ts ***!
  \********************************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_budget_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/budget.service */ "./src/app/core/services/budget.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Dashboard = /** @class */ (function () {
    function Dashboard(budget) {
        this.budget = budget;
    }
    Dashboard.prototype.ngOnInit = function () {
        var _this = this;
        var mmt = moment();
        $(function () {
            var dte = $('#datepicker').datetimepicker({
                date: Date(),
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down",
                    previous: 'fa fa-arrow-left',
                    next: 'fa fa-arrow-right'
                },
                inline: false,
                format: 'M/Y',
            });
            dte.on("dp.change", function (e) {
                var g = moment(e.date).format("MMM YYYY");
                $('.budget-date-select').html(g);
            });
            $('.budget-date-select').html(mmt.format("MMM YYYY"));
            $("#slt-prev-mnth").on('click', function () {
                var selectedDate = $('#datepicker').data('date');
                var nxtDate = moment(selectedDate, 'M/Y').add(-1, 'months').format('M/Y');
                $('#datepicker').data("DateTimePicker").date(nxtDate);
            });
            $("#slt-next-mnth").on('click', function () {
                var selectedDate = $('#datepicker').data('date');
                var nxtDate = moment(selectedDate, 'M/Y').add(1, 'months').format('M/Y');
                $('#datepicker').data("DateTimePicker").date(nxtDate);
            });
            $(".budgetcatetoggle").click(function () {
                if ($(this).parents(".budgetcat:eq(0)").hasClass('isactive')) {
                    $(this).parents(".budgetcat:eq(0)").removeClass('isactive');
                    $(this).find('i').removeClass("fa-caret-down").addClass("fa-caret-right");
                }
                else {
                    $(this).parents(".budgetcat:eq(0)").addClass('isactive');
                    $(this).find('i').removeClass("fa-caret-right").addClass("fa-caret-down");
                }
            });
            var colors = {
                one: '#283250',
                two: '#902C2D',
                three: '#D13F3A',
                four: '#F05440',
                five: '#F26958'
            };
            c3.generate({
                bindto: '#chart-doughnut',
                size: {
                    width: $(".chart-line").parents(".tab-content").eq(0).width() - 10,
                    height: ($(".chart-line").parents(".tab-content").eq(0).height() - 10)
                },
                data: {
                    columns: [
                        ['Danger', 30],
                        ['Success', 40],
                        ['Success1', 50],
                        ['Success2', 60],
                        ['Success2', 70]
                    ],
                    type: 'donut'
                },
                legend: {
                    show: false
                },
                color: {
                    pattern: [colors.one, colors.two, colors.three, colors.four, colors.five]
                },
                donut: {
                    title: "Connections"
                }
            });
        });
        this.budget.getBudgetData().subscribe(function (data) {
            _this.budgetData = data['data'];
        });
    };
    Dashboard.prototype.ngAfterViewInit = function () {
        $("#category_list").height(Math.max($(window).height() - 155, 520));
        var aspRatio = .67;
        ///////////////////////////////////////////////////////////
        // chart1
        new Chartist.Line(".chart-line", {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            series: [
                [5, 0, 7, 8, 12],
                [2, 1, 3.5, 7, 3],
                [1, 3, 4, 5, 6]
            ]
        }, {
            width: $(".chart-line").parents(".tab-content").eq(0).width() - 10,
            height: ($(".chart-line").parents(".tab-content").eq(0).width() - 25) * aspRatio,
            fullWidth: true,
            chartPadding: {
                top: 40,
                right: 40
            },
            plugins: [
                Chartist.plugins.tooltip()
            ]
        });
    };
    Dashboard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-page',
            template: __webpack_require__(/*! ./dashboard.html */ "./src/app/core/components/dashboard/dashboard.html"),
            styles: [__webpack_require__(/*! ../../../../assets/modules/dashboard/dashboard.css */ "./src/assets/modules/dashboard/dashboard.css")]
        }),
        __metadata("design:paramtypes", [_services_budget_service__WEBPACK_IMPORTED_MODULE_1__["BudgetService"]])
    ], Dashboard);
    return Dashboard;
}());



/***/ }),

/***/ "./src/app/core/components/products/brand-add.html":
/*!*********************************************************!*\
  !*** ./src/app/core/components/products/brand-add.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START: forms/basic-forms-elements -->\n<section class=\"card\">\n    <div class=\"card-header\">\n        <span class=\"cat__core__title\">\n            <strong>Add New Brand</strong>\n        </span>\n    </div>\n    <div class=\"card-block\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"mb-5\">\n                    <form>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l0\">Name</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Default Input\" id=\"l0\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l10\">Logo</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"file\" id=\"l16\">\n                                <br />\n                                <small class=\"text-muted\">Technical information for user</small>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l11\">Readonly</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Readonly\" readonly=\"\" id=\"l11\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l4\">With Actions on Left</label>\n                            <div class=\"col-md-9\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                                            Action\n                                        </button>\n                                        <ul class=\"dropdown-menu\">\n                                            <a class=\"dropdown-item\" href=\"javascript: void(0);\">Action</a>\n                                            <a class=\"dropdown-item\" href=\"javascript: void(0);\">Another action</a>\n                                            <a class=\"dropdown-item\" href=\"javascript: void(0);\">Something else here</a>\n                                            <li class=\"dropdown-divider\"> </li>\n                                            <a class=\"dropdown-item\" href=\"javascript: void(0);\">Separated link</a>\n                                        </ul>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" id=\"l4\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l5\">With Actions on Right</label>\n                            <div class=\"col-md-9\">\n                                <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"l5\">\n                                    <div class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                                            Action\n                                        </button>\n                                        <ul class=\"dropdown-menu dropdown-menu-right\">\n                                            <a class=\"dropdown-item\" href=\"javascript: void(0);\">Action</a>\n                                            <a class=\"dropdown-item\" href=\"javascript: void(0);\">Another action</a>\n                                            <a class=\"dropdown-item\" href=\"javascript: void(0);\">Something else here</a>\n                                            <li class=\"dropdown-divider\"> </li>\n                                            <a class=\"dropdown-item\" href=\"javascript: void(0);\">Separated link</a>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l8\">Search</label>\n                            <div class=\"col-md-9\">\n                                <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control\" name=\"\" placeholder=\"Search...\" id=\"l8\">\n                                    <span class=\"input-group-btn\">\n                                        <a href=\"javascript: void(0);\" class=\"btn btn-success\">\n                                            Search files\n                                        </a>\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l1\">Block Help</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" id=\"l1\">\n                                <small class=\"text-muted\">Technical information for user</small>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l2\">Email Address</label>\n                            <div class=\"col-md-9\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"icmn-mail2\"></i>\n                                    </span>\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" id=\"l2\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l3\">Password</label>\n                            <div class=\"col-md-9\">\n                                <div class=\"input-group\">\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"l3\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"icmn-key\"></i>\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l6\">Left Icon</label>\n                            <div class=\"col-md-9\">\n                                <div class=\"form-input-icon\">\n                                    <i class=\"icmn-search\"></i>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Left icon\" id=\"l6\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l7\">Right Icon</label>\n                            <div class=\"col-md-9\">\n                                <div class=\"form-input-icon form-input-icon-right\">\n                                    <i class=\"icmn-database\"></i>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Right icon\" id=\"l7\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l9\">Input With Spinner</label>\n                            <div class=\"col-md-9\">\n                                <div class=\"form-input-icon form-input-icon-right\">\n                                    <i class=\"icmn-spinner11 util-spin\"></i>\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"l9\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\">Static Control</label>\n                            <div class=\"col-md-9\">\n                                <p class=\"form-control-static\"> email@example.com </p>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l13\">Dropdown</label>\n                            <div class=\"col-md-9\">\n                                <select class=\"form-control\" id=\"l13\">\n                                    <option>Option 1</option>\n                                    <option>Option 2</option>\n                                    <option>Option 3</option>\n                                    <option>Option 4</option>\n                                    <option>Option 5</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l14\">Multiple Select</label>\n                            <div class=\"col-md-9\">\n                                <select multiple=\"\" class=\"form-control\" id=\"l14\">\n                                    <option>Option 1</option>\n                                    <option>Option 2</option>\n                                    <option>Option 3</option>\n                                    <option>Option 4</option>\n                                    <option>Option 5</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l15\">Textarea</label>\n                            <div class=\"col-md-9\">\n                                <textarea class=\"form-control\" rows=\"3\" id=\"l15\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"l16\">File input</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"file\" id=\"l16\">\n                                <br />\n                                <small class=\"text-muted\">Technical information for user</small>\n                            </div>\n                        </div>\n                        <div class=\"form-actions\">\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-9 offset-md-3\">\n                                    <button type=\"button\" class=\"btn btn-primary\">Submit</button>\n                                    <button type=\"button\" class=\"btn btn-default\">Cancel</button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                    <!-- End Horizontal Form -->\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"mb-5\">\n                    <h5 class=\"text-black\"><strong>Vertical Form</strong></h5>\n                    <p class=\"text-muted\">Element: read <a href=\"https://v4-alpha.getbootstrap.com/components/forms/\" target=\"_blank\">official documentation<small><i class=\"icmn-link ml-1\"><!-- --></i></small></a></p>\n                    <!-- Vertical Form -->\n                    <form>\n                        <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"l30\">Default Input</label>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\" id=\"l30\">\n                                </div>\n                            </div>\n                            <div class=\"col-lg-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"l31\">Password</label>\n                                    <div class=\"input-group\">\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"l31\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"icmn-key\"></i>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"l32\">Left Icon</label>\n                                    <div class=\"form-input-icon\">\n                                        <i class=\"icmn-pie-chart font-green\"></i>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Left icon\" id=\"l32\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"l33\">Right Icon</label>\n                                    <div class=\"form-input-icon form-input-icon-right\">\n                                        <i class=\"icmn-download\"></i>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Right icon\" id=\"l33\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"l34\">Input with Icon</label>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"icmn-search\"></i>\n                                        </span>\n                                        <input class=\"input-error form-control\" type=\"text\" value=\"\" id=\"l34\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"l35\">Input With Spinner</label>\n                                    <div class=\"form-input-icon form-input-icon-right\">\n                                        <i class=\"icmn-spinner11 util-spin\"></i>\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"l35\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"l36\">Disabled</label>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Disabled\" disabled=\"\" id=\"l36\">\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"l37\">Readonly</label>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Readonly\" readonly=\"\" id=\"l37\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"l38\">Textarea</label>\n                            <textarea class=\"form-control\" rows=\"3\" id=\"l38\"></textarea>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"l39\">File input</label>\n                            <br />\n                            <input type=\"file\" id=\"l39\">\n                            <br />\n                            <small class=\"text-muted\">Technical information for user</small>\n                        </div>\n                        <div class=\"form-actions\">\n                            <button type=\"button\" class=\"btn btn-primary\">Submit</button>\n                            <button type=\"button\" class=\"btn btn-default\">Cancel</button>\n                        </div>\n                    </form>\n                    <!-- End Vertical Form -->\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"mb-5\">\n                    <h5 class=\"text-black\"><strong>Rounded Inputs</strong></h5>\n                    <p class=\"text-muted\">Modifier: <code>.form-control-rounded</code></p>\n                    <!-- Rounded Inputs -->\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\" for=\"l81\">Rounded Input</label>\n                                <input type=\"text\" class=\"form-control form-control-rounded\" id=\"l81\">\n                            </div>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <label class=\"form-label\" for=\"l82\">Disabled Rounded Input</label>\n                            <input type=\"password\" class=\"form-control form-control-rounded\" disabled=\"\" placeholder=\"Password\" id=\"l82\">\n                        </div>\n                    </div>\n                    <!-- End Rounded Inputs -->\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"mb-5\">\n                    <h5 class=\"text-black\"><strong>Input States</strong></h5>\n                    <p class=\"text-muted\">Modifier: <code>.has-success</code>, <code>.has-warning</code>, <code>.has-danger</code>, <code>.has-focused</code></p>\n                    <!-- Input States -->\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"form-group has-success\">\n                                <label class=\"form-label\" for=\"l51\">Input with success</label>\n                                <input type=\"text\" class=\"form-control\" id=\"l51\">\n                            </div>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <div class=\"form-group has-warning\">\n                                <label class=\"form-label\" for=\"l52\">Input with warning</label>\n                                <input type=\"text\" class=\"form-control\" id=\"l52\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"form-group has-danger\">\n                                <label class=\"form-label\" for=\"l53\">Input with danger</label>\n                                <input type=\"text\" class=\"form-control\" id=\"l53\">\n                            </div>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <div class=\"form-group has-focused\">\n                                <label class=\"form-label\" for=\"l54\">Focused state</label>\n                                <input type=\"text\" class=\"form-control\" id=\"l54\">\n                            </div>\n                        </div>\n                    </div>\n                    <!-- End Input States -->\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"mb-5\">\n                    <h5 class=\"text-black\"><strong>Inline Form</strong></h5>\n                    <p class=\"text-muted\">Element: read <a href=\"https://v4-alpha.getbootstrap.com/components/forms/\">official documentation<small><i class=\"icmn-link ml-1\"><!-- --></i></small></a></p>\n                    <!-- Inline Form -->\n                    <form class=\"form-inline\">\n                        <div class=\"form-group mr-2\">\n                            <label class=\"sr-only\" for=\"exampleInputAmount\">Amount</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-addon\">$</div>\n                                <input type=\"text\" class=\"form-control\" id=\"exampleInputAmount\" placeholder=\"Amount\">\n                                <div class=\"input-group-addon\">.00</div>\n                            </div>\n                        </div>\n                        <a href=\"javascript: void(0);\" class=\"btn btn-primary\">Transfer cash</a>\n                    </form>\n                    <!-- End Inline Form -->\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"mb-5\">\n                    <h5 class=\"text-black\"><strong>Column Sizing</strong></h5>\n                    <p class=\"text-muted\">Element: read <a href=\"https://v4-alpha.getbootstrap.com/components/forms/\" target=\"_blank\">official documentation<small><i class=\"icmn-link ml-1\"><!-- --></i></small></a></p>\n                    <!-- Column Sizing -->\n                    <form role=\"form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-2\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\".col-md-2\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\".col-md-3\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\".col-md-2\">\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                    <!-- End Column Sizing -->\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- END: forms/basic-forms-elements -->"

/***/ }),

/***/ "./src/app/core/components/products/brand-add.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/components/products/brand-add.ts ***!
  \*******************************************************/
/*! exports provided: BrandAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandAdd", function() { return BrandAdd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BrandAdd = /** @class */ (function () {
    function BrandAdd() {
    }
    BrandAdd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-page',
            template: __webpack_require__(/*! ./brand-add.html */ "./src/app/core/components/products/brand-add.html")
        })
    ], BrandAdd);
    return BrandAdd;
}());



/***/ }),

/***/ "./src/app/core/components/products/brands-list.html":
/*!***********************************************************!*\
  !*** ./src/app/core/components/products/brands-list.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START: ecommerce/products-list -->\n<section class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"dropdown pull-right\">\n            <a [routerLink]=\"['/brand/add']\" ><button type=\"button\" class=\"btn btn-primary btn-sm\">Add New Brand</button></a>\n        </div>\n        <span class=\"cat__core__title\">\n            <strong>Brands List</strong>\n        </span>\n    </div>\n    <div class=\"card-block\">\n        <table class=\"table table-hover nowrap\" id=\"example1\" width=\"100%\">\n            <thead class=\"thead-default\">\n            <tr>\n                <th>ID</th>\n                <th>Logo</th>\n                <th>Name</th>\n                <th>Action</th>\n            </tr>\n            </thead>\n            <tfoot>\n            <tr>\n                <th>ID</th>\n                <th>Logo</th>\n                <th>Name</th>\n                <th>Action</th>\n            </tr>\n            </tfoot>\n            <tbody>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000010</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/001.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">CK Glasses</a></td>\n                <td>\n                    <a [routerLink]=\"['edit']\" class=\"control cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> Edit</a>\n                    <a href=\"javascript: void(0);\" class=\"control cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000011</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/002.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Harmann Glasses</a></td>\n                <td>\n                    <a [routerLink]=\"['edit']\" class=\"control cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> Edit</a>\n                    <a href=\"javascript: void(0);\" class=\"control cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000012</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/003.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">D&G Glasses</a></td>\n                <td>\n                    <a [routerLink]=\"['edit']\" class=\"control cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> Edit</a>\n                    <a href=\"javascript: void(0);\" class=\"control cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000013</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/004.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Adidas Glasses</a></td>\n                <td>\n                    <a [routerLink]=\"['edit']\" class=\"control cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> Edit</a>\n                    <a href=\"javascript: void(0);\" class=\"control cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000014</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/003.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Gucci Glasses</a></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000015</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/001.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">CK Glasses</a></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000016</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/002.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Harmann Glasses</a></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000017</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/003.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">D&G Glasses</a></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000018</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/004.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Adidas Glasses</a></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000019</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/003.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Gucci Glasses</a></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000020</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/001.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">CK Glasses</a></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000021</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/002.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Harmann Glasses</a></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000022</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/003.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">D&G Glasses</a></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000023</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/004.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Adidas Glasses</a></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000024</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/003.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Gucci Glasses</a></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</section>\n<!-- END: ecommerce/products-list -->\n"

/***/ }),

/***/ "./src/app/core/components/products/brands-list.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/components/products/brands-list.ts ***!
  \*********************************************************/
/*! exports provided: BrandsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsList", function() { return BrandsList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BrandsList = /** @class */ (function () {
    function BrandsList() {
    }
    BrandsList.prototype.ngOnInit = function () {
        $(function () {
            // Datatables
            $('#example1').DataTable({
                "lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
                responsive: true,
                columnDefs: [
                    { responsivePriority: 1, targets: 0 },
                    { responsivePriority: 2, orderable: false, targets: -1 }
                ],
                "autoWidth": false
            });
        });
    };
    BrandsList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-page',
            template: __webpack_require__(/*! ./brands-list.html */ "./src/app/core/components/products/brands-list.html")
        })
    ], BrandsList);
    return BrandsList;
}());



/***/ }),

/***/ "./src/app/core/components/products/product-categories.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/components/products/product-categories.ts ***!
  \****************************************************************/
/*! exports provided: ProductCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategories", function() { return ProductCategories; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductCategories = /** @class */ (function () {
    function ProductCategories() {
    }
    ProductCategories.prototype.ngOnInit = function () {
        $(function () {
            // Datatables
            $('#example1').DataTable({
                "lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
                responsive: true,
                columnDefs: [
                    { responsivePriority: 1, targets: 0 },
                    { responsivePriority: 2, orderable: false, targets: -1 }
                ],
                "autoWidth": false
            });
            // Select the main list and add the class "hasSubmenu" in each LI that contains an UL
            $('#product_categorylst ul').each(function () {
                $(this).find("li").has("ul").addClass("hasSubmenu");
            });
            // Find the last li in each level
            $('#product_categorylst  li:last-child').each(function () {
                // Check if LI has children
                if ($(this).children('ul').length === 0) {
                    // Add border-left in every UL where the last LI has not children
                    $(this).closest('ul').css("border-left", "1px solid gray");
                }
                else {
                    // Add border in child LI, except in the last one
                    $(this).closest('ul').children("li").not(":last").css("border-left", "1px solid gray");
                    // Add the class "addBorderBefore" to create the pseudo-element :defore in the last li
                    $(this).closest('ul').children("li").last().children("a").addClass("addBorderBefore");
                    // Add margin in the first level of the list
                    $(this).closest('ul').css("margin-top", "20px");
                    // Add margin in other levels of the list
                    $(this).closest('ul').find("li").children("ul").css("margin-top", "20px");
                }
                ;
            });
            // Add bold in li and levels above
            $('#product_categorylst  ul li').each(function () {
                $(this).mouseenter(function () {
                    $(this).children("a").css({ "font-weight": "bold", "color": "#336b9b" });
                });
                $(this).mouseleave(function () {
                    $(this).children("a").css({ "font-weight": "normal", "color": "#428bca" });
                });
            });
            // Add button to expand and condense - Using FontAwesome
            $('#product_categorylst  ul li.hasSubmenu').each(function () {
                $(this).prepend("<a href='#'><i class='fa fa-minus-circle'></i><i style='display:none;' class='fa fa-plus-circle'></i></a>");
                $(this).children("a").not(":last").removeClass().addClass("toogle");
            });
            // Actions to expand and consense
            $('#product_categorylst  ul li.hasSubmenu a.toogle').click(function () {
                $(this).closest("li").children("ul").toggle("slow");
                $(this).children("i").toggle();
                return false;
            });
        });
    };
    ProductCategories = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-page',
            template: __webpack_require__(/*! ./products-categories.html */ "./src/app/core/components/products/products-categories.html")
        })
    ], ProductCategories);
    return ProductCategories;
}());



/***/ }),

/***/ "./src/app/core/components/products/product-details.html":
/*!***************************************************************!*\
  !*** ./src/app/core/components/products/product-details.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START: ecommerce/product-details -->\n<section class=\"card\">\n    <div class=\"card-header\">\n        <span class=\"cat__core__title\">\n            <strong>Product Details</strong>\n        </span>\n    </div>\n    <div class=\"card-block\">\n        <div class=\"row\">\n            <div class=\"col-lg-4\">\n                <div class=\"cat__ecommerce__catalog__item\">\n                    <div class=\"cat__ecommerce__catalog__item__img\">\n                        <div class=\"cat__ecommerce__catalog__item__status\">\n                            <span class=\"cat__ecommerce__catalog__item__status__title\">New</span>\n                        </div>\n                        <div class=\"cat__ecommerce__catalog__item__like cat__ecommerce__catalog__item__like--selected\">\n                            <i class=\"icmn-heart\"><!-- --></i>\n                        </div>\n                        <a href=\"javascript: void(0);\">\n                            <img id=\"targetPhoto\" src=\"assets/modules/ecommerce/common/img/001.jpg\" />\n                        </a>\n                    </div>\n                </div>\n                <div class=\"cat__ecommerce__product__photos clearfix\">\n                    <div class=\"cat__ecommerce__product__photos-item cat__ecommerce__product__photos-item--active\">\n                        <img src=\"assets/modules/ecommerce/common/img/001.jpg\" />\n                    </div>\n                    <div class=\"cat__ecommerce__product__photos-item\">\n                        <img src=\"assets/modules/ecommerce/common/img/002.jpg\" />\n                    </div>\n                    <div class=\"cat__ecommerce__product__photos-item\">\n                        <img src=\"assets/modules/ecommerce/common/img/003.jpg\" />\n                    </div>\n                    <div class=\"cat__ecommerce__product__photos-item\">\n                        <img src=\"assets/modules/ecommerce/common/img/004.jpg\" />\n                    </div>\n                    <div class=\"cat__ecommerce__product__photos-item\">\n                        <img src=\"assets/modules/ecommerce/common/img/002.jpg\" />\n                    </div>\n                    <div class=\"cat__ecommerce__product__photos-item\">\n                        <img src=\"assets/modules/ecommerce/common/img/003.jpg\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-8\">\n                <ul class=\"breadcrumb breadcrumb--custom\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"javascript: void(0);\">Catalog</a>\n                    </li>\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"javascript: void(0);\">Chairs</a>\n                    </li>\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"javascript: void(0);\">With background</a>\n                    </li>\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"javascript: void(0);\">White</a>\n                    </li>\n                </ul>\n                <div class=\"cat__ecommerce__product__sku\">\n                    SKU: #0000235\n                    <br />\n                    <div class=\"cat__ecommerce__product__rating\">\n                        <i class=\"icmn-star-full\"></i>\n                        <i class=\"icmn-star-full\"></i>\n                        <i class=\"icmn-star-full\"></i>\n                        <i class=\"icmn-star-full\"></i>\n                        <i class=\"icmn-star-empty\"></i>\n                    </div>\n                </div>\n                <h4 class=\"cat__ecommerce__product__main-title\">\n                    <strong>Beautiful Chair for Kids</strong>\n                </h4>\n                <div class=\"cat__ecommerce__product__price\">\n                    $189.95\n                    <div class=\"cat__ecommerce__product__price-before\">\n                        $220.95\n                    </div>\n                </div>\n                <hr />\n                <div class=\"cat__ecommerce__product__descr\">\n                    <p>A chair is a piece of furniture with a raised surface, commonly used to seat a single person.\n                        Chairs are supported most often by four legs and have a back; however, a chair can have three\n                        legs or can have a different shape.</p>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"cat__ecommerce__product__option_title\">\n                            Color\n                        </div>\n                        <div class=\"cat__ecommerce__product__option\">\n                            <select class=\"select2\">\n                                <optgroup label=\"Group 1\">\n                                    <option selected>Option 1</option>\n                                    <option>Option 2</option>\n                                </optgroup>\n                                <optgroup label=\"Group 2\">\n                                    <option selected>Option 3</option>\n                                    <option>Option 4</option>\n                                    <option>Option 5</option>\n                                </optgroup>\n                            </select>\n                        </div>\n                        <div class=\"cat__ecommerce__product__option_title\">\n                            Available Size\n                        </div>\n                        <div class=\"cat__ecommerce__product__option\">\n                            <div class=\"cat__ecommerce__catalog__item__descr__sizes\">\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title=\"Size S\">S</span>\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title=\"Size M\">M</span>\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title=\"Size XL\">XL</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <hr />\n                <div class=\"cat__ecommerce__product__controls\">\n                    <button type=\"button\" class=\"btn btn-icon btn-primary btn-lg mr-3\">\n                        <i class=\"icmn-cart mr-3\"></i>\n                        Buy Now\n                    </button>\n                    <a href=\"javascript: void(0);\" class=\"btn btn-link\">\n                        <i class=\"icmn-heart\"></i>\n                        Add to Wishlist\n                    </a>\n                    <a href=\"javascript: void(0);\" class=\"btn btn-link\">\n                        <i class=\"icmn-stats-bars\"></i>\n                        Add to Compare\n                    </a>\n                </div>\n                <div class=\"cat__ecommerce__product__info\">\n                    <div class=\"nav-tabs-horizontal\">\n                        <ul class=\"nav nav-tabs\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" href=\"javascript: void(0);\" data-toggle=\"tab\" data-target=\"#tab1\" role=\"tab\">Information</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"javascript: void(0);\" data-toggle=\"tab\" data-target=\"#tab2\" role=\"tab\">Description</a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content pt-3 pb-3\">\n                            <div class=\"tab-pane active\" id=\"tab1\" role=\"tabcard\">\n                                <dl class=\"dl-horizontal user-profile-dl\">\n                                    <dt>Description lists</dt>\n                                    <dd>A description list is perfect for defining terms</dd>\n                                    <dt>Euismod</dt>\n                                    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia\n                                        odio sem nec elit</dd>\n                                    <dd>Donec id elit non mi porta gravida</dd>\n                                    <dt>Malesuada porta</dt>\n                                    <dd>Etiam porta sem malesuada magna mollis euismod</dd>\n                                    <dt>Qui eiusmod magna</dt>\n                                    <dd>Lorem ipsum In enim nostrud ut in mollit sint cillum laborum\n                                        ea quis qui</dd>\n                                </dl>\n                            </div>\n                            <div class=\"tab-pane\" id=\"tab2\" role=\"tabcard\">\n                                <p>\n                                    Mnesarchum velit cumanum utuntur tantam deterritum, democritum vulgo contumeliae\n                                    abest studuisse quanta telos. Inmensae. Arbitratu dixisset\n                                    invidiae ferre constituto gaudeat contentam, omnium nescius,\n                                    consistat interesse animi, amet fuisset numen graecos incidunt\n                                    euripidis praesens, homines religionis dirigentur postulant.\n                                    Magnum utrumvis gravitate appareat fabulae facio perveniri\n                                    fruenda indicaverunt texit, frequenter probet diligenter\n                                    sententia meam distinctio theseo legerint corporis quoquo,\n                                    optari futurove expedita.\n                                </p>\n                                <p>\n                                    Cumanum utuntur tantam deterritum, democritum vulgo contumeliae\n                                    abest studuisse quanta telos. Inmensae. Arbitratu dixisset\n                                    invidiae ferre constituto gaudeat contentam, omnium nescius,\n                                    consistat interesse animi, amet fuisset numen graecos incidunt\n                                    euripidis praesens.\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section class=\"card\">\n    <div class=\"card-header\">\n        <span class=\"cat__core__title\">\n            <strong>Related Products</strong>\n        </span>\n    </div>\n    <div class=\"card-block\">\n        <div class=\"cat__ecommerce__catalog\">\n            <div class=\"row\">\n                <div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-12\">\n                    <div class=\"cat__ecommerce__catalog__item\">\n                        <div class=\"cat__ecommerce__catalog__item__img\">\n                            <div class=\"cat__ecommerce__catalog__item__status\">\n                                <span class=\"cat__ecommerce__catalog__item__status__title\">New</span>\n                            </div>\n                            <div class=\"cat__ecommerce__catalog__item__like cat__ecommerce__catalog__item__like--selected\">\n                                <i class=\"icmn-heart\"><!-- --></i>\n                            </div>\n                            <a href=\"javascript: void(0);\">\n                                <img src=\"assets/modules/ecommerce/common/img/001.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"cat__ecommerce__catalog__item__title\">\n                            <a href=\"javascript: void(0);\">Elliot Glasses</a>\n                            <div class=\"cat__ecommerce__catalog__item__price\">\n                                $678.00\n                                <div class=\"cat__ecommerce__catalog__item__price--old\">\n                                    $754.00\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"cat__ecommerce__catalog__item__descr\">\n                            <div class=\"cat__ecommerce__catalog__item__descr__sizes\">\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Size S\">S</span>\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Size M\">M</span>\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Size XL\">XL</span>\n                            </div>\n                            Including Lenses\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-12\">\n                    <div class=\"cat__ecommerce__catalog__item\">\n                        <div class=\"cat__ecommerce__catalog__item__img\">\n                            <div class=\"cat__ecommerce__catalog__item__status\">\n                                <span class=\"cat__ecommerce__catalog__item__status__title\">New</span>\n                            </div>\n                            <div class=\"cat__ecommerce__catalog__item__like\">\n                                <i class=\"icmn-heart\"><!-- --></i>\n                            </div>\n                            <a href=\"javascript: void(0);\">\n                                <img src=\"assets/modules/ecommerce/common/img/002.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"cat__ecommerce__catalog__item__title\">\n                            <a href=\"javascript: void(0);\">Maxtor Chair</a>\n                            <div class=\"cat__ecommerce__catalog__item__price\">\n                                $245.00\n                                <div class=\"cat__ecommerce__catalog__item__price--old\">\n                                    $166.00\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"cat__ecommerce__catalog__item__descr\">\n                            <div class=\"cat__ecommerce__catalog__item__descr__sizes\">\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Size S\">S</span>\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Size M\">M</span>\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Size XL\">XL</span>\n                            </div>\n                            Including Lenses\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-12\">\n                    <div class=\"cat__ecommerce__catalog__item\">\n                        <div class=\"cat__ecommerce__catalog__item__img\">\n                            <div class=\"cat__ecommerce__catalog__item__like cat__ecommerce__catalog__item__like--selected\">\n                                <i class=\"icmn-heart\"><!-- --></i>\n                            </div>\n                            <a href=\"javascript: void(0);\">\n                                <img src=\"assets/modules/ecommerce/common/img/003.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"cat__ecommerce__catalog__item__title\">\n                            <a href=\"javascript: void(0);\">Manroad Glasses</a>\n                            <div class=\"cat__ecommerce__catalog__item__price\">\n                                $199.00\n                            </div>\n                        </div>\n                        <div class=\"cat__ecommerce__catalog__item__descr\">\n                            <div class=\"cat__ecommerce__catalog__item__descr__sizes\">\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Size S\">S</span>\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Size M\">M</span>\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Size XL\">XL</span>\n                            </div>\n                            Including Lenses\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-12\">\n                    <div class=\"cat__ecommerce__catalog__item\">\n                        <div class=\"cat__ecommerce__catalog__item__img\">\n                            <div class=\"cat__ecommerce__catalog__item__status\">\n                                <span class=\"cat__ecommerce__catalog__item__status__title\">New</span>\n                            </div>\n                            <div class=\"cat__ecommerce__catalog__item__like\">\n                                <i class=\"icmn-heart\"><!-- --></i>\n                            </div>\n                            <a href=\"javascript: void(0);\">\n                                <img src=\"assets/modules/ecommerce/common/img/004.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"cat__ecommerce__catalog__item__title\">\n                            <a href=\"javascript: void(0);\">Align Glasses</a>\n                            <div class=\"cat__ecommerce__catalog__item__price\">\n                                $542.00\n                                <div class=\"cat__ecommerce__catalog__item__price--old\">\n                                    $356.00\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"cat__ecommerce__catalog__item__descr\">\n                            <div class=\"cat__ecommerce__catalog__item__descr__sizes\">\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Size S\">S</span>\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Size M\">M</span>\n                                <span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Size XL\">XL</span>\n                            </div>\n                            Including Lenses\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- END: ecommerce/product-details -->\n"

/***/ }),

/***/ "./src/app/core/components/products/product-details.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/components/products/product-details.ts ***!
  \*************************************************************/
/*! exports provided: ProductDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetails", function() { return ProductDetails; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductDetails = /** @class */ (function () {
    function ProductDetails() {
    }
    ProductDetails.prototype.ngOnInit = function () {
        $(function () {
            // Heart toggle
            $('.cat__ecommerce__catalog__item__like').on('click', function () {
                $(this).toggleClass('cat__ecommerce__catalog__item__like--selected');
            });
            // Active photo toggle
            $('.cat__ecommerce__product__photos-item').on('click', function () {
                $('#targetPhoto').attr('src', $(this).find('img').attr('src'));
                $('.cat__ecommerce__product__photos-item').removeClass('cat__ecommerce__product__photos-item--active');
                $(this).addClass('cat__ecommerce__product__photos-item--active');
            });
            // Tooltip
            $("[data-toggle=tooltip]").tooltip();
            // Select 2
            $('.select2').select2();
        });
    };
    ProductDetails = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-page',
            template: __webpack_require__(/*! ./product-details.html */ "./src/app/core/components/products/product-details.html")
        })
    ], ProductDetails);
    return ProductDetails;
}());



/***/ }),

/***/ "./src/app/core/components/products/product-edit.html":
/*!************************************************************!*\
  !*** ./src/app/core/components/products/product-edit.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START: ecommerce/product-edit -->\n<section class=\"card\">\n    <div class=\"card-header\">\n        <span class=\"cat__core__title\">\n            <strong>Product Edit</strong>\n        </span>\n    </div>\n    <div class=\"card-block\">\n        <div class=\"row\">\n            <div class=\"col-lg-8\">\n\n                <h4 class=\"text-black mb-3\"><strong>Main Parameters</strong></h4>\n                <div class=\"row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"form-group\">\n                            <label for=\"l301\">Title</label>\n                            <input type=\"text\" class=\"form-control\" id=\"l301\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"form-group\">\n                            <label for=\"l302\">SKU</label>\n                            <input type=\"text\" class=\"form-control\" id=\"l302\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"l20\">Category</label>\n                    <select multiple=\"\" class=\"form-control height-200\" id=\"l20\">\n                        <option value=\"Option 1\">— Furniture</option>\n                        <option value=\"Option 2\">&nbsp; &nbsp; — Tables</option>\n                        <option value=\"Option 3\">&nbsp;&nbsp;  — Chairs</option>\n                        <option value=\"Option 4\">&nbsp; &nbsp; &nbsp; &nbsp; — Rounded Chairs</option>\n                        <option value=\"Option 4\">&nbsp; &nbsp; &nbsp; &nbsp; — Squared Chairs</option>\n                        <option value=\"Option 5\">— Electronics</option>\n                        <option value=\"Option 2\">&nbsp; &nbsp; — TV-set</option>\n                        <option value=\"Option 2\">&nbsp; &nbsp; — Monitors</option>\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"l15\">Short Description</label>\n                    <textarea class=\"form-control\" rows=\"3\" id=\"l15\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"l151\">Full Description</label>\n                    <textarea class=\"form-control\" rows=\"3\" id=\"l151\"></textarea>\n                </div>\n                <br />\n\n                <h4 class=\"text-black mb-3\"><strong>Pricing</strong></h4>\n                <div class=\"row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"form-group\">\n                            <label for=\"l30\">Total Price</label>\n                            <input type=\"text\" class=\"form-control\" id=\"l30\">\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"form-group\">\n                            <label for=\"l30\">Discount Price</label>\n                            <input type=\"text\" class=\"form-control\" id=\"l30\">\n                        </div>\n                    </div>\n                </div>\n                <br />\n\n                <h4 class=\"text-black mb-3\"><strong>Attributes</strong></h4>\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"l14\">Colors</label>\n                    <select multiple=\"\" class=\"form-control\" id=\"l14\">\n                        <option value=\"Option 1\">Option 1</option>\n                        <option value=\"Option 2\">Option 2</option>\n                        <option value=\"Option 3\">Option 3</option>\n                        <option value=\"Option 4\">Option 4</option>\n                        <option value=\"Option 5\">Option 5</option>\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"l13\">Size</label>\n                    <select class=\"form-control\" id=\"l13\">\n                        <option value=\"Option 1\">Option 1</option>\n                        <option value=\"Option 2\">Option 2</option>\n                        <option value=\"Option 3\">Option 3</option>\n                        <option value=\"Option 4\">Option 4</option>\n                        <option value=\"Option 5\">Option 5</option>\n                    </select>\n                </div>\n                <div class=\"form-actions\">\n                    <button type=\"button\" class=\"btn btn-primary width-150\">Save Product</button>\n                    <button type=\"button\" class=\"btn btn-default\">Cancel</button>\n                </div>\n\n            </div>\n\n            <div class=\"col-lg-4\">\n                <h4 class=\"text-black mb-3\"><strong>Product Image</strong></h4>\n                <div class=\"cat__ecommerce__catalog__item\">\n                    <div class=\"cat__ecommerce__catalog__item__img\">\n                        <a href=\"javascript: void(0);\">\n                            <img src=\"assets/modules/ecommerce/common/img/ecommerce-empty.jpg\" />\n                        </a>\n                    </div>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined cat__ecommerce__catalog__item__img-remove\">\n                        <small><i class=\"icmn-cross\"><!-- --></i></small> Remove\n                    </a>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"file\" id=\"l16\">\n                    <br>\n                    <small>Technical information for user</small>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- END: ecommerce/product-edit -->\n"

/***/ }),

/***/ "./src/app/core/components/products/product-edit.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/products/product-edit.ts ***!
  \**********************************************************/
/*! exports provided: ProductEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEdit", function() { return ProductEdit; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductEdit = /** @class */ (function () {
    function ProductEdit() {
    }
    ProductEdit = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-page',
            template: __webpack_require__(/*! ./product-edit.html */ "./src/app/core/components/products/product-edit.html")
        })
    ], ProductEdit);
    return ProductEdit;
}());



/***/ }),

/***/ "./src/app/core/components/products/product-variations.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/components/products/product-variations.ts ***!
  \****************************************************************/
/*! exports provided: ProductVariations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductVariations", function() { return ProductVariations; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductVariations = /** @class */ (function () {
    function ProductVariations() {
    }
    ProductVariations.prototype.ngOnInit = function () {
        $(function () {
            // Datatables
            $('#example1').DataTable({
                "lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
                responsive: true,
                columnDefs: [
                    { responsivePriority: 1, targets: 0 },
                    { responsivePriority: 2, orderable: false, targets: -1 }
                ],
                "autoWidth": false
            });
            // Select the main list and add the class "hasSubmenu" in each LI that contains an UL
            $('#product_categorylst ul').each(function () {
                $(this).find("li").has("ul").addClass("hasSubmenu");
            });
            // Find the last li in each level
            $('#product_categorylst  li:last-child').each(function () {
                // Check if LI has children
                if ($(this).children('ul').length === 0) {
                    // Add border-left in every UL where the last LI has not children
                    $(this).closest('ul').css("border-left", "1px solid gray");
                }
                else {
                    // Add border in child LI, except in the last one
                    $(this).closest('ul').children("li").not(":last").css("border-left", "1px solid gray");
                    // Add the class "addBorderBefore" to create the pseudo-element :defore in the last li
                    $(this).closest('ul').children("li").last().children("a").addClass("addBorderBefore");
                    // Add margin in the first level of the list
                    $(this).closest('ul').css("margin-top", "20px");
                    // Add margin in other levels of the list
                    $(this).closest('ul').find("li").children("ul").css("margin-top", "20px");
                }
                ;
            });
            // Add bold in li and levels above
            $('#product_categorylst  ul li').each(function () {
                $(this).mouseenter(function () {
                    $(this).children("a").css({ "font-weight": "bold", "color": "#336b9b" });
                });
                $(this).mouseleave(function () {
                    $(this).children("a").css({ "font-weight": "normal", "color": "#428bca" });
                });
            });
            // Add button to expand and condense - Using FontAwesome
            $('#product_categorylst  ul li.hasSubmenu').each(function () {
                $(this).prepend("<a href='#'><i class='fa fa-minus-circle'></i><i style='display:none;' class='fa fa-plus-circle'></i></a>");
                $(this).children("a").not(":last").removeClass().addClass("toogle");
            });
            // Actions to expand and consense
            $('#product_categorylst  ul li.hasSubmenu a.toogle').click(function () {
                $(this).closest("li").children("ul").toggle("slow");
                $(this).children("i").toggle();
                return false;
            });
        });
    };
    ProductVariations = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-page',
            template: __webpack_require__(/*! ./products-variations.html */ "./src/app/core/components/products/products-variations.html")
        })
    ], ProductVariations);
    return ProductVariations;
}());



/***/ }),

/***/ "./src/app/core/components/products/products-categories.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/products/products-categories.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START: ecommerce/products-list -->\n<section id=\"product_categorylst\" class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"dropdown pull-right\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm\">\n                Add Category\n            </button>\n        </div>\n        <span class=\"cat__core__title\">\n            <strong>Products Categories</strong>\n        </span>\n    </div>\n    <div class=\"card-block\">\n        <ul>\n            <li><a href=\"#\">Manchester</a>\n                <ul>\n                    <li><a href=\"#\">Magazine</a>\n                        <ul>\n                            <li><a href=\"#\">Spiral Scratch</a></li>\n                            <li><a href=\"#\">Real Life</a></li>\n                            <li><a href=\"#\">Secondhand Daylight</a></li>\n                            <li><a href=\"#\">The Correct Use</a></li>\n                        </ul>\n                    </li>\n                    <li><a href=\"#\">Buzzcocks</a>\n                        <ul>\n                            <li><a href=\"#\">Time's Up</a></li>\n                            <li><a href=\"#\">Another Music in A Different Kitchen</a></li>\n                            <li><a href=\"#\">Love Bites</a></li>\n                            <li><a href=\"#\">A Different Kind Of Tension</a></li>\n                        </ul>\n                    </li>\n                    <li><a href=\"#\">Joy Division</a>\n                        <ul>\n                            <li><a href=\"#\">Unknown Pleasures</a></li>\n                            <li><a href=\"#\">Closer</a></li>\n                            <li><a href=\"#\">Still</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n            <li><a href=\"#\">Liverpool</a>\n                <ul>\n                    <li><a href=\"#\">OMD</a>\n                        <ul>\n                            <li><a href=\"#\">OMD</a></li>\n                            <li><a href=\"#\">Organisation</a></li>\n                        </ul>\n                    </li>\n                    <li><a href=\"#\">Echo & the Bunnymen</a>\n                        <ul>\n                            <li><a href=\"#\">Crocodiles</a></li>\n                            <li><a href=\"#\">Heaven Up Here</a></li>\n                            <li><a href=\"#\">Prcupine</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</section>\n<!-- END: ecommerce/products-list -->\n"

/***/ }),

/***/ "./src/app/core/components/products/products-list.html":
/*!*************************************************************!*\
  !*** ./src/app/core/components/products/products-list.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START: ecommerce/products-list -->\n<section class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"dropdown pull-right\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                Add Product\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"\" role=\"menu\">\n                <a class=\"dropdown-item\" href=\"javascript: void(0)\">Simple Product</a>\n                <a class=\"dropdown-item\" href=\"javascript: void(0)\">Configurable Product</a>\n                <a class=\"dropdown-item\" href=\"javascript: void(0)\">Grouped Product</a>\n                <a class=\"dropdown-item\" href=\"javascript: void(0)\">Virtual Product</a>\n                <a class=\"dropdown-item\" href=\"javascript: void(0)\">Bundle Product</a>\n                <a class=\"dropdown-item\" href=\"javascript: void(0)\">Downloadable Product</a>\n            </ul>\n        </div>\n        <span class=\"cat__core__title\">\n            <strong>Products List</strong>\n        </span>\n    </div>\n    <div class=\"card-block\">\n        <table class=\"table table-hover nowrap\" id=\"example1\" width=\"100%\">\n            <thead class=\"thead-default\">\n            <tr>\n                <th>ID</th>\n                <th>Thumbnail</th>\n                <th>Name</th>\n                <th>Type</th>\n                <th>Attribute Set</th>\n                <th>SKU</th>\n                <th>Price</th>\n                <th>Quantity</th>\n                <th>Status</th>\n                <th>Action</th>\n            </tr>\n            </thead>\n            <tfoot>\n            <tr>\n                <th>ID</th>\n                <th>Thumbnail</th>\n                <th>Name</th>\n                <th>Type</th>\n                <th>Attribute Set</th>\n                <th>SKU</th>\n                <th>Price</th>\n                <th>Quantity</th>\n                <th>Status</th>\n                <th>Action</th>\n            </tr>\n            </tfoot>\n            <tbody>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000010</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/001.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">CK Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0001</td>\n                <td>$120.00</td>\n                <td>85.000</td>\n                <td><span class=\"label label-success\">Enabled</span></td>\n                <td>\n                    <a [routerLink]=\"['details']\" class=\"control cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a [routerLink]=\"['edit']\" class=\"control cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> Edit</a>\n                    <a href=\"javascript: void(0);\" class=\"control cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000011</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/002.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Harmann Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0002</td>\n                <td>$149.00</td>\n                <td>64.000</td>\n                <td><span class=\"label label-success\">Enabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000012</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/003.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">D&G Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0003</td>\n                <td>$89.00</td>\n                <td>42.000</td>\n                <td><span class=\"label label-success\">Enabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000013</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/004.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Adidas Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0004</td>\n                <td>$67.00</td>\n                <td>421.000</td>\n                <td><span class=\"label label-success\">Enabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000014</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/003.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Gucci Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0005</td>\n                <td>$91.00</td>\n                <td>124.000</td>\n                <td><span class=\"label label-default\">Disabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000015</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/001.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">CK Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0001</td>\n                <td>$120.00</td>\n                <td>85.000</td>\n                <td><span class=\"label label-success\">Enabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000016</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/002.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Harmann Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0002</td>\n                <td>$149.00</td>\n                <td>64.000</td>\n                <td><span class=\"label label-success\">Enabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000017</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/003.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">D&G Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0003</td>\n                <td>$89.00</td>\n                <td>42.000</td>\n                <td><span class=\"label label-success\">Enabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000018</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/004.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Adidas Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0004</td>\n                <td>$67.00</td>\n                <td>421.000</td>\n                <td><span class=\"label label-success\">Enabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000019</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/003.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Gucci Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0005</td>\n                <td>$91.00</td>\n                <td>124.000</td>\n                <td><span class=\"label label-default\">Disabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000020</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/001.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">CK Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0001</td>\n                <td>$120.00</td>\n                <td>85.000</td>\n                <td><span class=\"label label-success\">Enabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000021</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/002.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Harmann Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0002</td>\n                <td>$149.00</td>\n                <td>64.000</td>\n                <td><span class=\"label label-success\">Enabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000022</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/003.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">D&G Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0003</td>\n                <td>$89.00</td>\n                <td>42.000</td>\n                <td><span class=\"label label-success\">Enabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000023</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/004.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Adidas Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0004</td>\n                <td>$67.00</td>\n                <td>421.000</td>\n                <td><span class=\"label label-success\">Enabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000024</a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__ecommerce__dashboard__list__img\"><img src=\"assets/modules/ecommerce/common/img/003.jpg\" /></a></td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Gucci Glasses</a></td>\n                <td>Simple Product</td>\n                <td>Glasses</td>\n                <td>ITEM-0005</td>\n                <td>$91.00</td>\n                <td>124.000</td>\n                <td><span class=\"label label-default\">Disabled</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-3\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</section>\n<!-- END: ecommerce/products-list -->\n"

/***/ }),

/***/ "./src/app/core/components/products/products-list.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/components/products/products-list.ts ***!
  \***********************************************************/
/*! exports provided: ProductsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsList", function() { return ProductsList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductsList = /** @class */ (function () {
    function ProductsList() {
    }
    ProductsList.prototype.ngOnInit = function () {
        $(function () {
            // Datatables
            $('#example1').DataTable({
                "lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
                responsive: true,
                columnDefs: [
                    { responsivePriority: 1, targets: 0 },
                    { responsivePriority: 2, orderable: false, targets: -1 }
                ],
                "autoWidth": false
            });
        });
    };
    ProductsList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-page',
            template: __webpack_require__(/*! ./products-list.html */ "./src/app/core/components/products/products-list.html")
        })
    ], ProductsList);
    return ProductsList;
}());



/***/ }),

/***/ "./src/app/core/components/products/products-variations.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/products/products-variations.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START: ecommerce/products-variations -->\n<section id=\"product_variationlst\" class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"dropdown pull-right\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm\">\n                Add Category\n            </button>\n        </div>\n        <span class=\"cat__core__title\">\n            <strong>Products Categories</strong>\n        </span>\n    </div>\n    <div class=\"card-block\">\n        <ul>\n            <li><a href=\"#\">Manchester</a>\n                <ul>\n                    <li><a href=\"#\">Magazine</a>\n                        <ul>\n                            <li><a href=\"#\">Spiral Scratch</a></li>\n                            <li><a href=\"#\">Real Life</a></li>\n                            <li><a href=\"#\">Secondhand Daylight</a></li>\n                            <li><a href=\"#\">The Correct Use</a></li>\n                        </ul>\n                    </li>\n                    <li><a href=\"#\">Buzzcocks</a>\n                        <ul>\n                            <li><a href=\"#\">Time's Up</a></li>\n                            <li><a href=\"#\">Another Music in A Different Kitchen</a></li>\n                            <li><a href=\"#\">Love Bites</a></li>\n                            <li><a href=\"#\">A Different Kind Of Tension</a></li>\n                        </ul>\n                    </li>\n                    <li><a href=\"#\">Joy Division</a>\n                        <ul>\n                            <li><a href=\"#\">Unknown Pleasures</a></li>\n                            <li><a href=\"#\">Closer</a></li>\n                            <li><a href=\"#\">Still</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n            <li><a href=\"#\">Liverpool</a>\n                <ul>\n                    <li><a href=\"#\">OMD</a>\n                        <ul>\n                            <li><a href=\"#\">OMD</a></li>\n                            <li><a href=\"#\">Organisation</a></li>\n                        </ul>\n                    </li>\n                    <li><a href=\"#\">Echo & the Bunnymen</a>\n                        <ul>\n                            <li><a href=\"#\">Crocodiles</a></li>\n                            <li><a href=\"#\">Heaven Up Here</a></li>\n                            <li><a href=\"#\">Prcupine</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</section>\n<!-- END: ecommerce/products-list -->\n"

/***/ }),

/***/ "./src/app/core/components/products/products.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/components/products/products.module.ts ***!
  \*************************************************************/
/*! exports provided: routes, ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-list */ "./src/app/core/components/products/products-list.ts");
/* harmony import */ var _product_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-edit */ "./src/app/core/components/products/product-edit.ts");
/* harmony import */ var _product_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details */ "./src/app/core/components/products/product-details.ts");
/* harmony import */ var _product_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-categories */ "./src/app/core/components/products/product-categories.ts");
/* harmony import */ var _product_variations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-variations */ "./src/app/core/components/products/product-variations.ts");
/* harmony import */ var _brands_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./brands-list */ "./src/app/core/components/products/brands-list.ts");
/* harmony import */ var _brand_add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./brand-add */ "./src/app/core/components/products/brand-add.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'products', component: _products_list__WEBPACK_IMPORTED_MODULE_3__["ProductsList"] },
    { path: 'products/edit', component: _product_edit__WEBPACK_IMPORTED_MODULE_4__["ProductEdit"] },
    { path: 'products/details', component: _product_details__WEBPACK_IMPORTED_MODULE_5__["ProductDetails"] },
    { path: 'products/categories', component: _product_categories__WEBPACK_IMPORTED_MODULE_6__["ProductCategories"] },
    { path: 'products/variations', component: _product_variations__WEBPACK_IMPORTED_MODULE_7__["ProductVariations"] },
    { path: 'products/brands', component: _brands_list__WEBPACK_IMPORTED_MODULE_8__["BrandsList"] },
    { path: 'brand/add', component: _brand_add__WEBPACK_IMPORTED_MODULE_9__["BrandAdd"] },
];
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _products_list__WEBPACK_IMPORTED_MODULE_3__["ProductsList"],
                _product_edit__WEBPACK_IMPORTED_MODULE_4__["ProductEdit"],
                _product_details__WEBPACK_IMPORTED_MODULE_5__["ProductDetails"],
                _product_categories__WEBPACK_IMPORTED_MODULE_6__["ProductCategories"],
                _product_variations__WEBPACK_IMPORTED_MODULE_7__["ProductVariations"],
                _brands_list__WEBPACK_IMPORTED_MODULE_8__["BrandsList"],
                _brand_add__WEBPACK_IMPORTED_MODULE_9__["BrandAdd"]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/core/components/sales/orders.html":
/*!***************************************************!*\
  !*** ./src/app/core/components/sales/orders.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- END: ecommerce/orders -->\n<section class=\"card\">\n    <div class=\"card-header\">\n        <a href=\"javascript: void(0);\" class=\"pull-right btn btn-sm btn-primary\">Create New Order</a>\n        <span class=\"cat__core__title\">\n            <strong>Orders</strong>\n        </span>\n    </div>\n    <div class=\"card-block\">\n        <table class=\"table table-hover nowrap\" id=\"example1\" width=\"100%\">\n            <thead class=\"thead-default\">\n            <tr>\n                <th>ID</th>\n                <th>Purchase Date</th>\n                <th>Customer</th>\n                <th>Grand Total</th>\n                <th>Tax</th>\n                <th>Shipping</th>\n                <th>Quantity</th>\n                <th>Status</th>\n                <th>Action</th>\n            </tr>\n            </thead>\n            <tfoot>\n            <tr>\n                <th>ID</th>\n                <th>Date</th>\n                <th>Customer</th>\n                <th>Grand Total</th>\n                <th>Tax</th>\n                <th>Shipping</th>\n                <th>Quantity</th>\n                <th>Status</th>\n                <th>Action</th>\n            </tr>\n            </tfoot>\n            <tbody>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000010</a></td>\n                <td>2014/06/13</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Damon</a></td>\n                <td>$56.00</td>\n                <td>$5.60</td>\n                <td>$10.00</td>\n                <td>85</td>\n                <td><span class=\"badge badge-primary\">Processing</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000011</a></td>\n                <td>2014/09/12</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Torrey</a></td>\n                <td>$63.40</td>\n                <td>$6.34</td>\n                <td>$10.00</td>\n                <td>77</td>\n                <td><span class=\"badge badge-primary\">Processing</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000012</a></td>\n                <td>2013/09/27</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Miracle</a></td>\n                <td>$456.00</td>\n                <td>$45.60</td>\n                <td>$0.00</td>\n                <td>82</td>\n                <td><span class=\"badge badge-primary\">Processing</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000013</a></td>\n                <td>2013/06/28</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Wilhelmine</a></td>\n                <td>$871.14</td>\n                <td>$87.11</td>\n                <td>$10.00</td>\n                <td>68</td>\n                <td><span class=\"badge badge-primary\">Processing</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000014</a></td>\n                <td>2013/05/28</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Hubert</a></td>\n                <td>$19.10</td>\n                <td>$1.91</td>\n                <td>$10.00</td>\n                <td>63</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000015</a></td>\n                <td>2014/06/13</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Damon</a></td>\n                <td>$56.00</td>\n                <td>$5.60</td>\n                <td>$10.00</td>\n                <td>85</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000016</a></td>\n                <td>2014/09/12</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Torrey</a></td>\n                <td>$63.40</td>\n                <td>$6.34</td>\n                <td>$10.00</td>\n                <td>77</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000017</a></td>\n                <td>2013/09/27</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Miracle</a></td>\n                <td>$456.00</td>\n                <td>$45.60</td>\n                <td>$0.00</td>\n                <td>82</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000018</a></td>\n                <td>2013/06/28</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Wilhelmine</a></td>\n                <td>$871.14</td>\n                <td>$87.11</td>\n                <td>$10.00</td>\n                <td>68</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000019</a></td>\n                <td>2013/05/28</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Hubert</a></td>\n                <td>$19.10</td>\n                <td>$1.91</td>\n                <td>$10.00</td>\n                <td>63</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000021</a></td>\n                <td>2014/06/13</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Damon</a></td>\n                <td>$56.00</td>\n                <td>$5.60</td>\n                <td>$10.00</td>\n                <td>85</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000022</a></td>\n                <td>2014/09/12</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Torrey</a></td>\n                <td>$63.40</td>\n                <td>$6.34</td>\n                <td>$10.00</td>\n                <td>77</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000023</a></td>\n                <td>2013/09/27</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Miracle</a></td>\n                <td>$456.00</td>\n                <td>$45.60</td>\n                <td>$0.00</td>\n                <td>82</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000024</a></td>\n                <td>2013/06/28</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Wilhelmine</a></td>\n                <td>$871.14</td>\n                <td>$87.11</td>\n                <td>$10.00</td>\n                <td>68</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000025</a></td>\n                <td>2013/05/28</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Hubert</a></td>\n                <td>$19.10</td>\n                <td>$1.91</td>\n                <td>$10.00</td>\n                <td>63</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000026</a></td>\n                <td>2014/06/13</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Damon</a></td>\n                <td>$56.00</td>\n                <td>$5.60</td>\n                <td>$10.00</td>\n                <td>85</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000027</a></td>\n                <td>2014/09/12</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Torrey</a></td>\n                <td>$63.40</td>\n                <td>$6.34</td>\n                <td>$10.00</td>\n                <td>77</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000028</a></td>\n                <td>2013/09/27</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Miracle</a></td>\n                <td>$456.00</td>\n                <td>$45.60</td>\n                <td>$0.00</td>\n                <td>82</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000029</a></td>\n                <td>2013/06/28</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Wilhelmine</a></td>\n                <td>$871.14</td>\n                <td>$87.11</td>\n                <td>$10.00</td>\n                <td>68</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            <tr>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">000030</a></td>\n                <td>2013/05/28</td>\n                <td><a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\">Hubert</a></td>\n                <td>$19.10</td>\n                <td>$1.91</td>\n                <td>$10.00</td>\n                <td>63</td>\n                <td><span class=\"badge badge-default\">Complete</span></td>\n                <td>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined mr-2\"><i class=\"icmn-pencil\"><!-- --></i> View</a>\n                    <a href=\"javascript: void(0);\" class=\"cat__core__link--underlined\"><small><i class=\"icmn-cross\"><!-- --></i></small> Remove</a>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</section>\n<!-- END: ecommerce/orders -->\n"

/***/ }),

/***/ "./src/app/core/components/sales/orders.ts":
/*!*************************************************!*\
  !*** ./src/app/core/components/sales/orders.ts ***!
  \*************************************************/
/*! exports provided: Orders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orders", function() { return Orders; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Orders = /** @class */ (function () {
    function Orders() {
    }
    Orders.prototype.ngOnInit = function () {
        $(function () {
            // Datatables
            $('#example1').DataTable({
                "lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
                responsive: true,
                "autoWidth": false
            });
        });
    };
    Orders = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-page',
            template: __webpack_require__(/*! ./orders.html */ "./src/app/core/components/sales/orders.html")
        })
    ], Orders);
    return Orders;
}());



/***/ }),

/***/ "./src/app/core/components/sales/sales.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/components/sales/sales.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, SalesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesModule", function() { return SalesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders */ "./src/app/core/components/sales/orders.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'orders', component: _orders__WEBPACK_IMPORTED_MODULE_3__["Orders"] },
];
var SalesModule = /** @class */ (function () {
    function SalesModule() {
    }
    SalesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _orders__WEBPACK_IMPORTED_MODULE_3__["Orders"]
            ]
        })
    ], SalesModule);
    return SalesModule;
}());



/***/ }),

/***/ "./src/app/core/services/budget.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/budget.service.ts ***!
  \*************************************************/
/*! exports provided: BudgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetService", function() { return BudgetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BudgetService = /** @class */ (function () {
    function BudgetService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    BudgetService.prototype.getBudgetData = function () {
        var url = this.baseUrl + 'budget';
        //url='https://reqres.in/api/users';
        return this.http.get(url);
    };
    BudgetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BudgetService);
    return BudgetService;
}());



/***/ }),

/***/ "./src/app/layout/footer/common/footer.cleanui.css":
/*!*********************************************************!*\
  !*** ./src/app/layout/footer/common/footer.cleanui.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* FOOTER */\n.cat__footer {\n    margin-bottom: -1.36rem;\n    background: #e4e9f0;\n    border-radius: 5px 5px 0px 0px;\n    padding: 3.57rem 1.42rem 2.14rem;\n}\n.cat__footer__bottom {\n    margin-top: 1.42rem;\n    padding-top: 2.14rem;\n    border-top: 1px solid #d2d9e5;\n}\n.cat__footer__company {\n    padding-left: 3.57rem;\n    position: relative;\n    display: inline-block;\n    float: right;\n}\n@media (max-width: 767px) {\n    .cat__footer__company {\n        float: none;\n        margin-top: 2.14rem;\n    }\n}\n.cat__footer__company-logo {\n    position: absolute;\n    top: 0.35rem;\n    left: 0;\n    width: 2.14rem;\n}\n.cat__config--superclean .cat__footer {\n    margin-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9jb21tb24vZm9vdGVyLmNsZWFudWkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7QUFDWjtJQUNJLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFFWiwrQkFBK0I7SUFDdkMsaUNBQWlDO0NBQ3BDO0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDhCQUE4QjtDQUNqQztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtDQUNoQjtBQUVEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osb0JBQW9CO0tBQ3ZCO0NBQ0o7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsUUFBUTtJQUNSLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvY29tbW9uL2Zvb3Rlci5jbGVhbnVpLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZPT1RFUiAqL1xuLmNhdF9fZm9vdGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMS4zNnJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZTRlOWYwO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6IDMuNTdyZW0gMS40MnJlbSAyLjE0cmVtO1xufVxuXG4uY2F0X19mb290ZXJfX2JvdHRvbSB7XG4gICAgbWFyZ2luLXRvcDogMS40MnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMi4xNHJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QyZDllNTtcbn1cblxuLmNhdF9fZm9vdGVyX19jb21wYW55IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuNTdyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5jYXRfX2Zvb3Rlcl9fY29tcGFueSB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBtYXJnaW4tdG9wOiAyLjE0cmVtO1xuICAgIH1cbn1cblxuLmNhdF9fZm9vdGVyX19jb21wYW55LWxvZ28ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuMzVyZW07XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMi4xNHJlbTtcbn1cblxuLmNhdF9fY29uZmlnLS1zdXBlcmNsZWFuIC5jYXRfX2Zvb3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./common/footer.cleanui.css */ "./src/app/layout/footer/common/footer.cleanui.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/menu-left/common/menu-left.cleanui.css":
/*!***************************************************************!*\
  !*** ./src/app/layout/menu-left/common/menu-left.cleanui.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MENU LEFT */\n.cat__menu-left {\n    position: fixed;\n    z-index: 1000;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 17.85rem;\n    height: 100%;\n    background: #222034;\n    -webkit-transform: translate3d(-17.86rem, 0, 0);\n            transform: translate3d(-17.86rem, 0, 0);\n    transition: -webkit-transform .2s ease-in-out;\n    transition: transform .2s ease-in-out;\n    transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;\n}\n@media (min-width: 768px) {\n    .cat__config--shadow .cat__menu-left {\n        box-shadow: 0 0 200px -30px rgba(57, 55, 73, 0.4);\n    }\n}\n.cat__top-bar {\n    padding-left: 3.57rem;\n}\n@media (min-width: 768px) {\n    .cat__menu-left {\n        -webkit-transform: translate3d(-14.29rem, 0, 0);\n                transform: translate3d(-14.29rem, 0, 0);\n    }\n    .cat__menu-left:hover {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0);\n    }\n    body.cat__menu-left--visible .cat__menu-left {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0);\n    }\n    .cat__content {\n        margin-left: 3.57rem;\n    }\n    body.cat__menu-left--visible .cat__content {\n        margin-left: 17.85rem;\n    }\n}\n@media (max-width: 767px) {\n    .cat__menu-left .cat__menu-left__lock {\n        right: -3.58rem;\n        transition: right .2s ease-in-out;\n    }\n    body.cat__menu-left--visible--mobile .cat__menu-left {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0);\n    }\n    body.cat__menu-left--visible--mobile .cat__menu-left .cat__menu-left__lock {\n        right: 0rem;\n    }\n}\n.cat__menu-left__logo {\n    width: 17.85rem;\n    height: 4.64rem;\n    display: inline-block;\n    background: #0e0b20;\n    padding: 1rem 1.28rem;\n}\n.cat__menu-left__logo a {\n    line-height: 2.35rem;\n}\n.cat__menu-left__logo img {\n    max-height: 2.5rem;\n    max-width: 90%;\n    vertical-align: bottom;\n}\n.cat__menu-left__inner {\n    position: absolute;\n    top: 4.64rem;\n    bottom: 0;\n    width: 100% !important;\n}\n@media (max-width: 767px) {\n    .cat__menu-left__inner {\n        overflow-y: auto;\n    }\n}\n.cat__menu-left__submenu > .cat__menu-left__list {\n    display: none;\n    background: #0e0b20;\n}\n.cat__menu-left__submenu.cat__menu-left__item > a:after {\n    display: block;\n    content: '';\n    border-width: 0.35rem 0.35rem 0.35rem 0;\n    border-color: transparent #393749 transparent transparent;\n    border-style: solid;\n    position: absolute;\n    top: 1.21rem;\n    right: 3.85rem;\n    transition: -webkit-transform .1s ease-in-out;\n    transition: transform .1s ease-in-out;\n    transition: transform .1s ease-in-out, -webkit-transform .1s ease-in-out;\n}\n.cat__menu-left__submenu--toggled.cat__menu-left__item {\n    background: #0e0b20;\n    color: #ffffff;\n}\n.cat__menu-left__submenu--toggled.cat__menu-left__item > a:after {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n}\n.cat__menu-left__submenu--toggled.cat__menu-left__item > .cat__menu-left__icon {\n    color: #ffffff;\n}\n.cat__menu-left__list {\n    list-style: none;\n    padding-left: 0;\n}\n.cat__menu-left__list--root {\n    margin: 1.42rem 0;\n}\n.cat__menu-left__divider {\n    background: #393749;\n    height: 1px;\n    margin: 0.71rem 1.42rem;\n}\n.cat__menu-left__item > a {\n    position: relative;\n    min-height: 3.21rem;\n    padding: 0.85rem 3.57rem 0.85rem 1.42rem;\n    display: block;\n    color: #b8beca;\n}\n.cat__menu-left__item > a > .badge {\n    margin-top: 0.21rem;\n}\n.cat__menu-left__item--active > a, .cat__menu-left__item:hover > a, .cat__menu-left__item:active > a, .cat__menu-left__item:focus > a {\n    background: #0e0b20;\n    color: #ffffff;\n}\n.cat__menu-left__item--active > a > .cat__menu-left__icon, .cat__menu-left__item:hover > a > .cat__menu-left__icon, .cat__menu-left__item:active > a > .cat__menu-left__icon, .cat__menu-left__item:focus > a > .cat__menu-left__icon {\n    color: #ffffff;\n}\n.cat__menu-left__item--disabled > a {\n    cursor: default;\n    background: transparent !important;\n    color: #b8beca !important;\n    opacity: .4;\n}\n.cat__menu-left__item--disabled > a > .cat__menu-left__icon {\n    color: #74708d !important;\n}\n.cat__menu-left__icon {\n    position: absolute;\n    width: 1.42rem;\n    text-align: center;\n    top: 1.07rem;\n    right: 1.14rem;\n    color: #74708d;\n    font-weight: bold;\n    line-height: 1.1;\n    text-transform: uppercase;\n}\n.cat__menu-left__lock {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 3.57rem;\n    height: 4.64rem;\n    cursor: pointer;\n    background: #0e0b20;\n    padding: 1.64rem 0.14rem 0 0;\n    text-align: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.cat__menu-left__list--root > .cat__menu-left__item {\n    position: relative;\n}\n.cat__menu-left__list--root > .cat__menu-left__item:before {\n    content: '';\n    position: absolute;\n    z-index: 2;\n    left: 0;\n    top: 0;\n    width: 2px;\n    height: 100%;\n    background: transparent;\n}\n.cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--primary:hover:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--primary.cat__menu-left__submenu--toggled:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--primary.cat__menu-left__item--active:before {\n    background-color: #0190fe;\n}\n.cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--secondary:hover:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--secondary.cat__menu-left__submenu--toggled:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--secondary.cat__menu-left__item--active:before {\n    background-color: #6a7a84;\n}\n.cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--default:hover:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--default.cat__menu-left__submenu--toggled:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--default.cat__menu-left__item--active:before {\n    background-color: #acb7bf;\n}\n.cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--info:hover:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--info.cat__menu-left__submenu--toggled:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--info.cat__menu-left__item--active:before {\n    background-color: #0887c9;\n}\n.cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--success:hover:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--success.cat__menu-left__submenu--toggled:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--success.cat__menu-left__item--active:before {\n    background-color: #46be8a;\n}\n.cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--warning:hover:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--warning.cat__menu-left__submenu--toggled:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--warning.cat__menu-left__item--active:before {\n    background-color: #f39834;\n}\n.cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--danger:hover:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--danger.cat__menu-left__submenu--toggled:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--danger.cat__menu-left__item--active:before {\n    background-color: #fb434a;\n}\n.cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--yellow:hover:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--yellow.cat__menu-left__submenu--toggled:before, .cat__menu-left__list--root > .cat__menu-left__item.cat__menu-left--colorful--yellow.cat__menu-left__item--active:before {\n    background-color: yellow;\n}\n@media (max-width: 767px) {\n    .cat__menu-left__backdrop {\n        position: fixed;\n        z-index: 999;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        background: #0e0b20;\n        opacity: 0;\n        visibility: hidden;\n        transition: opacity 0.2s ease-in-out;\n    }\n    body.cat__menu-left--visible--mobile .cat__menu-left__backdrop {\n        opacity: .4;\n        visibility: visible;\n        transition: opacity 0.2s ease-in-out;\n    }\n    body.cat__menu-left--visible--mobile {\n        overflow: hidden;\n    }\n}\n/*  ANIMATED BUTTON (MENU TOGGLE) */\n.cat__menu-left__pin-button {\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    width: 1.35rem;\n    height: 1.42rem;\n    font-size: 0;\n    text-indent: -9999px;\n    outline: none;\n}\n.cat__menu-left__pin-button div {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    right: 0;\n    height: 2px;\n    background: #514d6a;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n}\n.cat__menu-left__pin-button div:before, .cat__menu-left__pin-button div:after {\n    position: absolute;\n    display: block;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background: #514d6a;\n    content: \"\";\n}\n.cat__menu-left__pin-button div:before {\n    top: -0.43rem;\n    -webkit-transform-origin: top right;\n            transform-origin: top right;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n}\n.cat__menu-left__pin-button div:after {\n    bottom: -0.43rem;\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right;\n    transition: width .2s, -webkit-transform .2s;\n    transition: transform .2s, width .2s;\n    transition: transform .2s, width .2s, -webkit-transform .2s;\n}\n.cat__menu-left__pin-button:hover div {\n    background: #74708d;\n}\n.cat__menu-left__pin-button:hover div:before, .cat__menu-left__pin-button:hover div:after {\n    background-color: #74708d;\n}\n@media (max-width: 767px) {\n    body.cat__menu-left--visible--mobile .cat__menu-left__pin-button div {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg);\n        background: transparent;\n    }\n    body.cat__menu-left--visible--mobile .cat__menu-left__pin-button div:before {\n        top: 0;\n        -webkit-transform: translateX(-0.15rem) translateY(0.42rem) rotate(45deg);\n                transform: translateX(-0.15rem) translateY(0.42rem) rotate(45deg);\n    }\n    body.cat__menu-left--visible--mobile .cat__menu-left__pin-button div:after {\n        bottom: 0;\n        -webkit-transform: translateX(-0.15rem) translateY(-0.58rem) rotate(-45deg);\n                transform: translateX(-0.15rem) translateY(-0.58rem) rotate(-45deg);\n    }\n}\n@media (min-width: 768px) {\n    body.cat__menu-left--visible .cat__menu-left__pin-button div {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg);\n        background: transparent;\n    }\n    body.cat__menu-left--visible .cat__menu-left__pin-button div:before {\n        top: 0;\n        -webkit-transform: translateX(-0.15rem) translateY(0.5rem) rotate(45deg);\n                transform: translateX(-0.15rem) translateY(0.5rem) rotate(45deg);\n    }\n    body.cat__menu-left--visible .cat__menu-left__pin-button div:after {\n        bottom: 0;\n        -webkit-transform: translateX(-0.15rem) translateY(-0.5rem) rotate(-45deg);\n                transform: translateX(-0.15rem) translateY(-0.5rem) rotate(-45deg);\n    }\n}\n/*  JSCROLLPNAE CUSTOM STYLES */\n.cat__menu-left .jspScrollable {\n    outline: none;\n}\n.cat__menu-left .jspScrollable:hover .jspVerticalBar {\n    opacity: .7;\n    transition: all 0.4s ease-in-out;\n}\n.cat__menu-left .jspScrollable:hover .jspHorizontalBar {\n    opacity: .7;\n    transition: all 0.4s ease-in-out;\n}\n.cat__menu-left .jspScrollable .jspTrack {\n    left: -2px !important;\n}\n.cat__menu-left .jspScrollable .jspVerticalBar {\n    background: transparent;\n    width: 3px;\n    opacity: 0;\n    transition: all 0.2s ease-in-out;\n}\n.cat__menu-left .jspScrollable .jspHorizontalBar {\n    background: transparent;\n    height: 4px;\n    opacity: 0;\n    bottom: 1px;\n    transition: all 0.2s ease-in-out;\n}\n.cat__menu-left .jspScrollable .jspHorizontalBar .jspDrag:after {\n    background: #514d6a;\n    top: 0;\n    bottom: 0;\n}\n.cat__menu-left .jspScrollable .jspPane, .cat__menu-left .jspScrollable .jspContainer {\n    width: 100% !important;\n}\n.cat__menu-left .jspScrollable .jspCap {\n    display: none;\n}\n.cat__menu-left .jspScrollable .jspTrack {\n    background: transparent;\n    position: relative;\n    width: 2px;\n    left: -5px;\n}\n.cat__menu-left .jspScrollable .jspDrag {\n    background: transparent;\n    position: relative;\n    top: 0;\n    left: -1px;\n    width: 5px;\n    cursor: pointer;\n    border-radius: 0;\n}\n.cat__menu-left .jspScrollable .jspDrag:after {\n    display: block;\n    content: '';\n    background: #514d6a;\n    position: absolute;\n    width: 100%;\n    top: 4px;\n    bottom: 4px;\n    border-radius: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21lbnUtbGVmdC9jb21tb24vbWVudS1sZWZ0LmNsZWFudWkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7QUFDZjtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0RBQWdEO1lBQ3hDLHdDQUF3QztJQUVoRCw4Q0FBOEM7SUFDOUMsc0NBQXNDO0lBQ3RDLHlFQUF5RTtDQUM1RTtBQUVEO0lBQ0k7UUFFWSxrREFBa0Q7S0FDN0Q7Q0FDSjtBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSTtRQUNJLGdEQUFnRDtnQkFDeEMsd0NBQXdDO0tBQ25EO0lBQ0Q7UUFDSSx3Q0FBd0M7Z0JBQ2hDLGdDQUFnQztLQUMzQztJQUNEO1FBQ0ksd0NBQXdDO2dCQUNoQyxnQ0FBZ0M7S0FDM0M7SUFDRDtRQUNJLHFCQUFxQjtLQUN4QjtJQUNEO1FBQ0ksc0JBQXNCO0tBQ3pCO0NBQ0o7QUFFRDtJQUNJO1FBQ0ksZ0JBQWdCO1FBRWhCLGtDQUFrQztLQUNyQztJQUNEO1FBQ0ksd0NBQXdDO2dCQUNoQyxnQ0FBZ0M7S0FDM0M7SUFDRDtRQUNJLFlBQVk7S0FDZjtDQUNKO0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7Q0FDMUI7QUFFRDtJQUNJO1FBQ0ksaUJBQWlCO0tBQ3BCO0NBQ0o7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLDBEQUEwRDtJQUMxRCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBRWYsOENBQThDO0lBQzlDLHNDQUFzQztJQUN0Qyx5RUFBeUU7Q0FDNUU7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxrQ0FBa0M7WUFFMUIsMEJBQTBCO0NBQ3JDO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25CO0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osd0JBQXdCO0NBQzNCO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsWUFBWTtDQUNmO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQiwwQkFBMEI7T0FDdkIsdUJBQXVCO1FBQ3RCLHNCQUFzQjtZQUNsQixrQkFBa0I7Q0FDN0I7QUFFRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtDQUMzQjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7QUFFRDtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixPQUFPO1FBQ1AsVUFBVTtRQUNWLFNBQVM7UUFDVCxRQUFRO1FBQ1Isb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxtQkFBbUI7UUFFbkIscUNBQXFDO0tBQ3hDO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osb0JBQW9CO1FBRXBCLHFDQUFxQztLQUN4QztJQUNEO1FBQ0ksaUJBQWlCO0tBQ3BCO0NBQ0o7QUFFRCxvQ0FBb0M7QUFDcEM7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsY0FBYztDQUNqQjtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixvQkFBb0I7SUFFcEIsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixpREFBaUQ7Q0FDcEQ7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksY0FBYztJQUNkLG9DQUFvQztZQUU1Qiw0QkFBNEI7SUFFcEMsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixpREFBaUQ7Q0FDcEQ7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQix1Q0FBdUM7WUFFL0IsK0JBQStCO0lBRXZDLDZDQUE2QztJQUM3QyxxQ0FBcUM7SUFDckMsNERBQTREO0NBQy9EO0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0k7UUFDSSxtQ0FBbUM7Z0JBRTNCLDJCQUEyQjtRQUNuQyx3QkFBd0I7S0FDM0I7SUFDRDtRQUNJLE9BQU87UUFDUCwwRUFBMEU7Z0JBRWxFLGtFQUFrRTtLQUM3RTtJQUNEO1FBQ0ksVUFBVTtRQUNWLDRFQUE0RTtnQkFFcEUsb0VBQW9FO0tBQy9FO0NBQ0o7QUFFRDtJQUNJO1FBQ0ksbUNBQW1DO2dCQUUzQiwyQkFBMkI7UUFDbkMsd0JBQXdCO0tBQzNCO0lBQ0Q7UUFDSSxPQUFPO1FBQ1AseUVBQXlFO2dCQUVqRSxpRUFBaUU7S0FDNUU7SUFDRDtRQUNJLFVBQVU7UUFDViwyRUFBMkU7Z0JBRW5FLG1FQUFtRTtLQUM5RTtDQUNKO0FBRUQsZ0NBQWdDO0FBQ2hDO0lBQ0ksY0FBYztDQUNqQjtBQUVEO0lBQ0ksWUFBWTtJQUVaLGlDQUFpQztDQUNwQztBQUVEO0lBQ0ksWUFBWTtJQUVaLGlDQUFpQztDQUNwQztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFdBQVc7SUFFWCxpQ0FBaUM7Q0FDcEM7QUFFRDtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFFWixpQ0FBaUM7Q0FDcEM7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixPQUFPO0lBQ1AsVUFBVTtDQUNiO0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7QUFFRDtJQUNJLGNBQWM7Q0FDakI7QUFFRDtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7Q0FDZDtBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFFUixpQkFBaUI7Q0FDNUI7QUFFRDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osU0FBUztJQUNULFlBQVk7SUFFSixvQkFBb0I7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWVudS1sZWZ0L2NvbW1vbi9tZW51LWxlZnQuY2xlYW51aS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNRU5VIExFRlQgKi9cbi5jYXRfX21lbnUtbGVmdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxNy44NXJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzIyMjAzNDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE3Ljg2cmVtLCAwLCAwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE3Ljg2cmVtLCAwLCAwKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5jYXRfX2NvbmZpZy0tc2hhZG93IC5jYXRfX21lbnUtbGVmdCB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIwMHB4IC0zMHB4IHJnYmEoNTcsIDU1LCA3MywgMC40KTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjAwcHggLTMwcHggcmdiYSg1NywgNTUsIDczLCAwLjQpO1xuICAgIH1cbn1cblxuLmNhdF9fdG9wLWJhciB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjU3cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuY2F0X19tZW51LWxlZnQge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE0LjI5cmVtLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNC4yOXJlbSwgMCwgMCk7XG4gICAgfVxuICAgIC5jYXRfX21lbnUtbGVmdDpob3ZlciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIH1cbiAgICBib2R5LmNhdF9fbWVudS1sZWZ0LS12aXNpYmxlIC5jYXRfX21lbnUtbGVmdCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIH1cbiAgICAuY2F0X19jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMuNTdyZW07XG4gICAgfVxuICAgIGJvZHkuY2F0X19tZW51LWxlZnQtLXZpc2libGUgLmNhdF9fY29udGVudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNy44NXJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5jYXRfX21lbnUtbGVmdCAuY2F0X19tZW51LWxlZnRfX2xvY2sge1xuICAgICAgICByaWdodDogLTMuNThyZW07XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogcmlnaHQgLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiByaWdodCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIGJvZHkuY2F0X19tZW51LWxlZnQtLXZpc2libGUtLW1vYmlsZSAuY2F0X19tZW51LWxlZnQge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gICAgYm9keS5jYXRfX21lbnUtbGVmdC0tdmlzaWJsZS0tbW9iaWxlIC5jYXRfX21lbnUtbGVmdCAuY2F0X19tZW51LWxlZnRfX2xvY2sge1xuICAgICAgICByaWdodDogMHJlbTtcbiAgICB9XG59XG5cbi5jYXRfX21lbnUtbGVmdF9fbG9nbyB7XG4gICAgd2lkdGg6IDE3Ljg1cmVtO1xuICAgIGhlaWdodDogNC42NHJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogIzBlMGIyMDtcbiAgICBwYWRkaW5nOiAxcmVtIDEuMjhyZW07XG59XG5cbi5jYXRfX21lbnUtbGVmdF9fbG9nbyBhIHtcbiAgICBsaW5lLWhlaWdodDogMi4zNXJlbTtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19sb2dvIGltZyB7XG4gICAgbWF4LWhlaWdodDogMi41cmVtO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5jYXRfX21lbnUtbGVmdF9faW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQuNjRyZW07XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5jYXRfX21lbnUtbGVmdF9faW5uZXIge1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbn1cblxuLmNhdF9fbWVudS1sZWZ0X19zdWJtZW51ID4gLmNhdF9fbWVudS1sZWZ0X19saXN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMwZTBiMjA7XG59XG5cbi5jYXRfX21lbnUtbGVmdF9fc3VibWVudS5jYXRfX21lbnUtbGVmdF9faXRlbSA+IGE6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvcmRlci13aWR0aDogMC4zNXJlbSAwLjM1cmVtIDAuMzVyZW0gMDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMzOTM3NDkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxLjIxcmVtO1xuICAgIHJpZ2h0OiAzLjg1cmVtO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjFzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4xcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIC4xcyBlYXNlLWluLW91dDtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19zdWJtZW51LS10b2dnbGVkLmNhdF9fbWVudS1sZWZ0X19pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiAjMGUwYjIwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2F0X19tZW51LWxlZnRfX3N1Ym1lbnUtLXRvZ2dsZWQuY2F0X19tZW51LWxlZnRfX2l0ZW0gPiBhOmFmdGVyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19zdWJtZW51LS10b2dnbGVkLmNhdF9fbWVudS1sZWZ0X19pdGVtID4gLmNhdF9fbWVudS1sZWZ0X19pY29uIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290IHtcbiAgICBtYXJnaW46IDEuNDJyZW0gMDtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19kaXZpZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzkzNzQ5O1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogMC43MXJlbSAxLjQycmVtO1xufVxuXG4uY2F0X19tZW51LWxlZnRfX2l0ZW0gPiBhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMy4yMXJlbTtcbiAgICBwYWRkaW5nOiAwLjg1cmVtIDMuNTdyZW0gMC44NXJlbSAxLjQycmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjYjhiZWNhO1xufVxuXG4uY2F0X19tZW51LWxlZnRfX2l0ZW0gPiBhID4gLmJhZGdlIHtcbiAgICBtYXJnaW4tdG9wOiAwLjIxcmVtO1xufVxuXG4uY2F0X19tZW51LWxlZnRfX2l0ZW0tLWFjdGl2ZSA+IGEsIC5jYXRfX21lbnUtbGVmdF9faXRlbTpob3ZlciA+IGEsIC5jYXRfX21lbnUtbGVmdF9faXRlbTphY3RpdmUgPiBhLCAuY2F0X19tZW51LWxlZnRfX2l0ZW06Zm9jdXMgPiBhIHtcbiAgICBiYWNrZ3JvdW5kOiAjMGUwYjIwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2F0X19tZW51LWxlZnRfX2l0ZW0tLWFjdGl2ZSA+IGEgPiAuY2F0X19tZW51LWxlZnRfX2ljb24sIC5jYXRfX21lbnUtbGVmdF9faXRlbTpob3ZlciA+IGEgPiAuY2F0X19tZW51LWxlZnRfX2ljb24sIC5jYXRfX21lbnUtbGVmdF9faXRlbTphY3RpdmUgPiBhID4gLmNhdF9fbWVudS1sZWZ0X19pY29uLCAuY2F0X19tZW51LWxlZnRfX2l0ZW06Zm9jdXMgPiBhID4gLmNhdF9fbWVudS1sZWZ0X19pY29uIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19pdGVtLS1kaXNhYmxlZCA+IGEge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjYjhiZWNhICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogLjQ7XG59XG5cbi5jYXRfX21lbnUtbGVmdF9faXRlbS0tZGlzYWJsZWQgPiBhID4gLmNhdF9fbWVudS1sZWZ0X19pY29uIHtcbiAgICBjb2xvcjogIzc0NzA4ZCAhaW1wb3J0YW50O1xufVxuXG4uY2F0X19tZW51LWxlZnRfX2ljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMS40MnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAxLjA3cmVtO1xuICAgIHJpZ2h0OiAxLjE0cmVtO1xuICAgIGNvbG9yOiAjNzQ3MDhkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19sb2NrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAzLjU3cmVtO1xuICAgIGhlaWdodDogNC42NHJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzBlMGIyMDtcbiAgICBwYWRkaW5nOiAxLjY0cmVtIDAuMTRyZW0gMCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY2F0X19tZW51LWxlZnRfX2xpc3QtLXJvb3QgPiAuY2F0X19tZW51LWxlZnRfX2l0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290ID4gLmNhdF9fbWVudS1sZWZ0X19pdGVtOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYXRfX21lbnUtbGVmdF9fbGlzdC0tcm9vdCA+IC5jYXRfX21lbnUtbGVmdF9faXRlbS5jYXRfX21lbnUtbGVmdC0tY29sb3JmdWwtLXByaW1hcnk6aG92ZXI6YmVmb3JlLCAuY2F0X19tZW51LWxlZnRfX2xpc3QtLXJvb3QgPiAuY2F0X19tZW51LWxlZnRfX2l0ZW0uY2F0X19tZW51LWxlZnQtLWNvbG9yZnVsLS1wcmltYXJ5LmNhdF9fbWVudS1sZWZ0X19zdWJtZW51LS10b2dnbGVkOmJlZm9yZSwgLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290ID4gLmNhdF9fbWVudS1sZWZ0X19pdGVtLmNhdF9fbWVudS1sZWZ0LS1jb2xvcmZ1bC0tcHJpbWFyeS5jYXRfX21lbnUtbGVmdF9faXRlbS0tYWN0aXZlOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxOTBmZTtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290ID4gLmNhdF9fbWVudS1sZWZ0X19pdGVtLmNhdF9fbWVudS1sZWZ0LS1jb2xvcmZ1bC0tc2Vjb25kYXJ5OmhvdmVyOmJlZm9yZSwgLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290ID4gLmNhdF9fbWVudS1sZWZ0X19pdGVtLmNhdF9fbWVudS1sZWZ0LS1jb2xvcmZ1bC0tc2Vjb25kYXJ5LmNhdF9fbWVudS1sZWZ0X19zdWJtZW51LS10b2dnbGVkOmJlZm9yZSwgLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290ID4gLmNhdF9fbWVudS1sZWZ0X19pdGVtLmNhdF9fbWVudS1sZWZ0LS1jb2xvcmZ1bC0tc2Vjb25kYXJ5LmNhdF9fbWVudS1sZWZ0X19pdGVtLS1hY3RpdmU6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE3YTg0O1xufVxuXG4uY2F0X19tZW51LWxlZnRfX2xpc3QtLXJvb3QgPiAuY2F0X19tZW51LWxlZnRfX2l0ZW0uY2F0X19tZW51LWxlZnQtLWNvbG9yZnVsLS1kZWZhdWx0OmhvdmVyOmJlZm9yZSwgLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290ID4gLmNhdF9fbWVudS1sZWZ0X19pdGVtLmNhdF9fbWVudS1sZWZ0LS1jb2xvcmZ1bC0tZGVmYXVsdC5jYXRfX21lbnUtbGVmdF9fc3VibWVudS0tdG9nZ2xlZDpiZWZvcmUsIC5jYXRfX21lbnUtbGVmdF9fbGlzdC0tcm9vdCA+IC5jYXRfX21lbnUtbGVmdF9faXRlbS5jYXRfX21lbnUtbGVmdC0tY29sb3JmdWwtLWRlZmF1bHQuY2F0X19tZW51LWxlZnRfX2l0ZW0tLWFjdGl2ZTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhY2I3YmY7XG59XG5cbi5jYXRfX21lbnUtbGVmdF9fbGlzdC0tcm9vdCA+IC5jYXRfX21lbnUtbGVmdF9faXRlbS5jYXRfX21lbnUtbGVmdC0tY29sb3JmdWwtLWluZm86aG92ZXI6YmVmb3JlLCAuY2F0X19tZW51LWxlZnRfX2xpc3QtLXJvb3QgPiAuY2F0X19tZW51LWxlZnRfX2l0ZW0uY2F0X19tZW51LWxlZnQtLWNvbG9yZnVsLS1pbmZvLmNhdF9fbWVudS1sZWZ0X19zdWJtZW51LS10b2dnbGVkOmJlZm9yZSwgLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290ID4gLmNhdF9fbWVudS1sZWZ0X19pdGVtLmNhdF9fbWVudS1sZWZ0LS1jb2xvcmZ1bC0taW5mby5jYXRfX21lbnUtbGVmdF9faXRlbS0tYWN0aXZlOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4ODdjOTtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290ID4gLmNhdF9fbWVudS1sZWZ0X19pdGVtLmNhdF9fbWVudS1sZWZ0LS1jb2xvcmZ1bC0tc3VjY2Vzczpob3ZlcjpiZWZvcmUsIC5jYXRfX21lbnUtbGVmdF9fbGlzdC0tcm9vdCA+IC5jYXRfX21lbnUtbGVmdF9faXRlbS5jYXRfX21lbnUtbGVmdC0tY29sb3JmdWwtLXN1Y2Nlc3MuY2F0X19tZW51LWxlZnRfX3N1Ym1lbnUtLXRvZ2dsZWQ6YmVmb3JlLCAuY2F0X19tZW51LWxlZnRfX2xpc3QtLXJvb3QgPiAuY2F0X19tZW51LWxlZnRfX2l0ZW0uY2F0X19tZW51LWxlZnQtLWNvbG9yZnVsLS1zdWNjZXNzLmNhdF9fbWVudS1sZWZ0X19pdGVtLS1hY3RpdmU6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZiZThhO1xufVxuXG4uY2F0X19tZW51LWxlZnRfX2xpc3QtLXJvb3QgPiAuY2F0X19tZW51LWxlZnRfX2l0ZW0uY2F0X19tZW51LWxlZnQtLWNvbG9yZnVsLS13YXJuaW5nOmhvdmVyOmJlZm9yZSwgLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290ID4gLmNhdF9fbWVudS1sZWZ0X19pdGVtLmNhdF9fbWVudS1sZWZ0LS1jb2xvcmZ1bC0td2FybmluZy5jYXRfX21lbnUtbGVmdF9fc3VibWVudS0tdG9nZ2xlZDpiZWZvcmUsIC5jYXRfX21lbnUtbGVmdF9fbGlzdC0tcm9vdCA+IC5jYXRfX21lbnUtbGVmdF9faXRlbS5jYXRfX21lbnUtbGVmdC0tY29sb3JmdWwtLXdhcm5pbmcuY2F0X19tZW51LWxlZnRfX2l0ZW0tLWFjdGl2ZTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzk4MzQ7XG59XG5cbi5jYXRfX21lbnUtbGVmdF9fbGlzdC0tcm9vdCA+IC5jYXRfX21lbnUtbGVmdF9faXRlbS5jYXRfX21lbnUtbGVmdC0tY29sb3JmdWwtLWRhbmdlcjpob3ZlcjpiZWZvcmUsIC5jYXRfX21lbnUtbGVmdF9fbGlzdC0tcm9vdCA+IC5jYXRfX21lbnUtbGVmdF9faXRlbS5jYXRfX21lbnUtbGVmdC0tY29sb3JmdWwtLWRhbmdlci5jYXRfX21lbnUtbGVmdF9fc3VibWVudS0tdG9nZ2xlZDpiZWZvcmUsIC5jYXRfX21lbnUtbGVmdF9fbGlzdC0tcm9vdCA+IC5jYXRfX21lbnUtbGVmdF9faXRlbS5jYXRfX21lbnUtbGVmdC0tY29sb3JmdWwtLWRhbmdlci5jYXRfX21lbnUtbGVmdF9faXRlbS0tYWN0aXZlOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNDM0YTtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290ID4gLmNhdF9fbWVudS1sZWZ0X19pdGVtLmNhdF9fbWVudS1sZWZ0LS1jb2xvcmZ1bC0teWVsbG93OmhvdmVyOmJlZm9yZSwgLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290ID4gLmNhdF9fbWVudS1sZWZ0X19pdGVtLmNhdF9fbWVudS1sZWZ0LS1jb2xvcmZ1bC0teWVsbG93LmNhdF9fbWVudS1sZWZ0X19zdWJtZW51LS10b2dnbGVkOmJlZm9yZSwgLmNhdF9fbWVudS1sZWZ0X19saXN0LS1yb290ID4gLmNhdF9fbWVudS1sZWZ0X19pdGVtLmNhdF9fbWVudS1sZWZ0LS1jb2xvcmZ1bC0teWVsbG93LmNhdF9fbWVudS1sZWZ0X19pdGVtLS1hY3RpdmU6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5jYXRfX21lbnUtbGVmdF9fYmFja2Ryb3Age1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMGUwYjIwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIGJvZHkuY2F0X19tZW51LWxlZnQtLXZpc2libGUtLW1vYmlsZSAuY2F0X19tZW51LWxlZnRfX2JhY2tkcm9wIHtcbiAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIGJvZHkuY2F0X19tZW51LWxlZnQtLXZpc2libGUtLW1vYmlsZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxufVxuXG4vKiAgQU5JTUFURUQgQlVUVE9OIChNRU5VIFRPR0dMRSkgKi9cbi5jYXRfX21lbnUtbGVmdF9fcGluLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxLjM1cmVtO1xuICAgIGhlaWdodDogMS40MnJlbTtcbiAgICBmb250LXNpemU6IDA7XG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19waW4tYnV0dG9uIGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogIzUxNGQ2YTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4ycztcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMnM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzLCAtd2Via2l0LXRyYW5zZm9ybSAuMnM7XG59XG5cbi5jYXRfX21lbnUtbGVmdF9fcGluLWJ1dHRvbiBkaXY6YmVmb3JlLCAuY2F0X19tZW51LWxlZnRfX3Bpbi1idXR0b24gZGl2OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjNTE0ZDZhO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5jYXRfX21lbnUtbGVmdF9fcGluLWJ1dHRvbiBkaXY6YmVmb3JlIHtcbiAgICB0b3A6IC0wLjQzcmVtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjJzO1xuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4ycztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMsIC13ZWJraXQtdHJhbnNmb3JtIC4ycztcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19waW4tYnV0dG9uIGRpdjphZnRlciB7XG4gICAgYm90dG9tOiAtMC40M3JlbTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcbiAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC4ycywgLXdlYmtpdC10cmFuc2Zvcm0gLjJzO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycywgLXdlYmtpdC10cmFuc2Zvcm0gLjJzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMsIHdpZHRoIC4ycztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzLCB3aWR0aCAuMnMsIC13ZWJraXQtdHJhbnNmb3JtIC4ycztcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19waW4tYnV0dG9uOmhvdmVyIGRpdiB7XG4gICAgYmFja2dyb3VuZDogIzc0NzA4ZDtcbn1cblxuLmNhdF9fbWVudS1sZWZ0X19waW4tYnV0dG9uOmhvdmVyIGRpdjpiZWZvcmUsIC5jYXRfX21lbnUtbGVmdF9fcGluLWJ1dHRvbjpob3ZlciBkaXY6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDcwOGQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGJvZHkuY2F0X19tZW51LWxlZnQtLXZpc2libGUtLW1vYmlsZSAuY2F0X19tZW51LWxlZnRfX3Bpbi1idXR0b24gZGl2IHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIGJvZHkuY2F0X19tZW51LWxlZnQtLXZpc2libGUtLW1vYmlsZSAuY2F0X19tZW51LWxlZnRfX3Bpbi1idXR0b24gZGl2OmJlZm9yZSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMTVyZW0pIHRyYW5zbGF0ZVkoMC40MnJlbSkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMTVyZW0pIHRyYW5zbGF0ZVkoMC40MnJlbSkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMTVyZW0pIHRyYW5zbGF0ZVkoMC40MnJlbSkgcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgYm9keS5jYXRfX21lbnUtbGVmdC0tdmlzaWJsZS0tbW9iaWxlIC5jYXRfX21lbnUtbGVmdF9fcGluLWJ1dHRvbiBkaXY6YWZ0ZXIge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjE1cmVtKSB0cmFuc2xhdGVZKC0wLjU4cmVtKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMTVyZW0pIHRyYW5zbGF0ZVkoLTAuNThyZW0pIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4xNXJlbSkgdHJhbnNsYXRlWSgtMC41OHJlbSkgcm90YXRlKC00NWRlZyk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBib2R5LmNhdF9fbWVudS1sZWZ0LS12aXNpYmxlIC5jYXRfX21lbnUtbGVmdF9fcGluLWJ1dHRvbiBkaXYge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgYm9keS5jYXRfX21lbnUtbGVmdC0tdmlzaWJsZSAuY2F0X19tZW51LWxlZnRfX3Bpbi1idXR0b24gZGl2OmJlZm9yZSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMTVyZW0pIHRyYW5zbGF0ZVkoMC41cmVtKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4xNXJlbSkgdHJhbnNsYXRlWSgwLjVyZW0pIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjE1cmVtKSB0cmFuc2xhdGVZKDAuNXJlbSkgcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgYm9keS5jYXRfX21lbnUtbGVmdC0tdmlzaWJsZSAuY2F0X19tZW51LWxlZnRfX3Bpbi1idXR0b24gZGl2OmFmdGVyIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4xNXJlbSkgdHJhbnNsYXRlWSgtMC41cmVtKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMTVyZW0pIHRyYW5zbGF0ZVkoLTAuNXJlbSkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjE1cmVtKSB0cmFuc2xhdGVZKC0wLjVyZW0pIHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cbn1cblxuLyogIEpTQ1JPTExQTkFFIENVU1RPTSBTVFlMRVMgKi9cbi5jYXRfX21lbnUtbGVmdCAuanNwU2Nyb2xsYWJsZSB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNhdF9fbWVudS1sZWZ0IC5qc3BTY3JvbGxhYmxlOmhvdmVyIC5qc3BWZXJ0aWNhbEJhciB7XG4gICAgb3BhY2l0eTogLjc7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmNhdF9fbWVudS1sZWZ0IC5qc3BTY3JvbGxhYmxlOmhvdmVyIC5qc3BIb3Jpem9udGFsQmFyIHtcbiAgICBvcGFjaXR5OiAuNztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2F0X19tZW51LWxlZnQgLmpzcFNjcm9sbGFibGUgLmpzcFRyYWNrIHtcbiAgICBsZWZ0OiAtMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRfX21lbnUtbGVmdCAuanNwU2Nyb2xsYWJsZSAuanNwVmVydGljYWxCYXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAzcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2F0X19tZW51LWxlZnQgLmpzcFNjcm9sbGFibGUgLmpzcEhvcml6b250YWxCYXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGhlaWdodDogNHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm90dG9tOiAxcHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNhdF9fbWVudS1sZWZ0IC5qc3BTY3JvbGxhYmxlIC5qc3BIb3Jpem9udGFsQmFyIC5qc3BEcmFnOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTE0ZDZhO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG59XG5cbi5jYXRfX21lbnUtbGVmdCAuanNwU2Nyb2xsYWJsZSAuanNwUGFuZSwgLmNhdF9fbWVudS1sZWZ0IC5qc3BTY3JvbGxhYmxlIC5qc3BDb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRfX21lbnUtbGVmdCAuanNwU2Nyb2xsYWJsZSAuanNwQ2FwIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2F0X19tZW51LWxlZnQgLmpzcFNjcm9sbGFibGUgLmpzcFRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDJweDtcbiAgICBsZWZ0OiAtNXB4O1xufVxuXG4uY2F0X19tZW51LWxlZnQgLmpzcFNjcm9sbGFibGUgLmpzcERyYWcge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTFweDtcbiAgICB3aWR0aDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uY2F0X19tZW51LWxlZnQgLmpzcFNjcm9sbGFibGUgLmpzcERyYWc6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6ICM1MTRkNmE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogNHB4O1xuICAgIGJvdHRvbTogNHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/menu-left/menu-left-vertical.component.html":
/*!********************************************************************!*\
  !*** ./src/app/layout/menu-left/menu-left-vertical.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"cat__menu-left\">\n    <div class=\"cat__menu-left__lock cat__menu-left__action--menu-toggle\">\n        <div class=\"cat__menu-left__pin-button\">\n            <div><!-- --></div>\n        </div>\n    </div>\n    <div class=\"cat__menu-left__logo\">\n        <a [routerLink]=\"['/']\">\n            \n        </a>\n    </div>\n    <div class=\"cat__menu-left__inner\">\n        <ul class=\"cat__menu-left__list cat__menu-left__list--root\">\n            <li class=\"cat__menu-left__item\" [routerLinkActive]=\"['cat__menu-left__item--active']\">\n                <a style=\"padding-right: 0\" [routerLink]=\"['/']\">\n                    <span class=\"cat__menu-left__icon fa fa-calculator\"></span>\n                    Budget\n                    <span style=\"margin-left: 70px\" class=\"font-size-12\"><button style=\"outline: none; background: transparent; color:lightgray; border-radius:5px; padding: 3px; border .5em white\"><span style=\"color: lightgrey\">New&nbsp;</span><strong><i class=\"font-size-15 far fa-plus-circle\"></i></strong></button> </span>\n                </a>\n               \n            </li>        \n            <li class=\"cat__menu-left__item cat__menu-left__submenu\" [routerLinkActive]=\"['cat__menu-left__item--active']\">\n                <a [routerLink]=\"['dashboards/alpha']\">\n                    <span class=\"cat__menu-left__icon icmn-office\"></span>\n                    Reports\n                </a>\n            </li>\n            <li class=\"cat__menu-left__item cat__menu-left__submenu\" [routerLinkActive]=\"['cat__menu-left__item--active']\">\n                <a [routerLink]=\"['dashboards/alpha']\">\n                    <span class=\"cat__menu-left__icon icmn-stack\"></span>\n                    Accounts\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/menu-left/menu-left.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/menu-left/menu-left.component.ts ***!
  \*********************************************************/
/*! exports provided: MenuLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLeftComponent", function() { return MenuLeftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuLeftComponent = /** @class */ (function () {
    function MenuLeftComponent() {
    }
    MenuLeftComponent.prototype.ngOnInit = function () {
        $(function () {
            // scripts for "menu-left" module
            /////////////////////////////////////////////////////////////////////////////////////////
            // add backdrop
            $('.cat__menu-left').after('<div class="cat__menu-left__backdrop cat__menu-left__action--backdrop-toggle"><!-- --></div>');
            /////////////////////////////////////////////////////////////////////////////////////////
            // submenu
            $('.cat__menu-left__submenu > a').on('click', function () {
                if ($('body').hasClass('cat__config--vertical') || $('body').width() < 768) {
                    var parent = $(this).parent(), opened = $('.cat__menu-left__submenu--toggled');
                    if (!parent.hasClass('cat__menu-left__submenu--toggled') && !parent.parent().closest('.cat__menu-left__submenu').length)
                        opened.removeClass('cat__menu-left__submenu--toggled').find('> .cat__menu-left__list').slideUp(200);
                    parent.toggleClass('cat__menu-left__submenu--toggled');
                    parent.find('> .cat__menu-left__list').slideToggle(200);
                }
            });
            // remove submenu toggle class when viewport back to full view
            $(window).on('resize', function () {
                if ($('body').hasClass('cat__config--horizontal') || $('body').width() > 768) {
                    $('.cat__menu-left__submenu--toggled').removeClass('cat__menu-left__submenu--toggled').find('> .cat__menu-left__list').attr('style', '');
                }
            });
            /////////////////////////////////////////////////////////////////////////////////////////
            // custom scroll init
            if ($('body').hasClass('cat__config--vertical')) {
                if (!(/Mobi/.test(navigator.userAgent)) && jQuery().jScrollPane) {
                    $('.cat__menu-left__inner').each(function () {
                        $(this).jScrollPane({
                            contentWidth: '0px',
                            autoReinitialise: true,
                            autoReinitialiseDelay: 100
                        });
                        var api = $(this).data('jsp'), throttleTimeout;
                        $(window).bind('resize', function () {
                            if (!throttleTimeout) {
                                throttleTimeout = setTimeout(function () {
                                    api.reinitialise();
                                    throttleTimeout = null;
                                }, 50);
                            }
                        });
                    });
                }
            }
            /////////////////////////////////////////////////////////////////////////////////////////
            // toggle menu
            $('.cat__menu-left__action--menu-toggle').on('click', function () {
                if ($('body').width() < 768) {
                    $('body').toggleClass('cat__menu-left--visible--mobile');
                }
                else {
                    $('body').toggleClass('cat__menu-left--visible');
                }
            });
            $('.cat__menu-left__action--backdrop-toggle').on('click', function () {
                $('body').removeClass('cat__menu-left--visible--mobile');
            });
            /////////////////////////////////////////////////////////////////////////////////////////
            // colorful menu
            var colorfulClasses = 'cat__menu-left--colorful--primary cat__menu-left--colorful--secondary cat__menu-left--colorful--primary cat__menu-left--colorful--default cat__menu-left--colorful--info cat__menu-left--colorful--success cat__menu-left--colorful--warning cat__menu-left--colorful--danger cat__menu-left--colorful--yellow', colorfulClassesArray = colorfulClasses.split(' ');
            function setColorfulClasses() {
                $('.cat__menu-left__list--root > .cat__menu-left__item').each(function () {
                    var randomClass = colorfulClassesArray[Math.floor(Math.random() * colorfulClassesArray.length)];
                    $(this).addClass(randomClass);
                });
            }
            function removeColorfulClasses() {
                $('.cat__menu-left__list--root > .cat__menu-left__item').removeClass(colorfulClasses);
            }
            if ($('body').hasClass('cat__menu-left--colorful')) {
                setColorfulClasses();
            }
            $('body').on('setColorfulClasses', function () {
                setColorfulClasses();
            });
            $('body').on('removeColorfulClasses', function () {
                removeColorfulClasses();
            });
        });
    };
    MenuLeftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-menu-left',
            template: __webpack_require__(/*! ./menu-left-vertical.component.html */ "./src/app/layout/menu-left/menu-left-vertical.component.html"),
            styles: [__webpack_require__(/*! ./common/menu-left.cleanui.css */ "./src/app/layout/menu-left/common/menu-left.cleanui.css")]
        })
    ], MenuLeftComponent);
    return MenuLeftComponent;
}());



/***/ }),

/***/ "./src/app/layout/menu-right/common/menu-right.cleanui.css":
/*!*****************************************************************!*\
  !*** ./src/app/layout/menu-right/common/menu-right.cleanui.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*  MENU RIGHT */\n.cat__menu-right {\n    position: fixed;\n    z-index: 995;\n    top: 0;\n    right: 0;\n    width: 17.85rem;\n    height: 100%;\n    background: #eef0f4;\n    -webkit-transform: translate3d(17.85rem, 0, 0);\n            transform: translate3d(17.85rem, 0, 0);\n    transition: -webkit-transform .2s ease-in-out;\n    transition: transform .2s ease-in-out;\n    transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;\n    overflow-y: auto;\n}\n.cat__menu-right__inner {\n    padding: 1.42rem;\n}\n.cat__menu-right__header {\n    border-bottom: 1px solid #e4e9f0;\n    padding: 0.35rem 0;\n    font-weight: bold;\n    color: #74708d;\n    min-height: 3.21rem;\n}\n.cat__menu-right__header span {\n    cursor: pointer;\n    position: relative;\n    top: 0.21rem;\n    color: #d2d9e5;\n    font-size: 1.14rem;\n}\n.cat__menu-right__header span:hover {\n    color: #b8beca;\n}\n.cat__menu-right__content {\n    padding: 1.42rem 0;\n}\n.cat__menu-right__descr {\n    font-size: 0.85rem;\n    color: #74708d;\n    margin-bottom: 1.42rem;\n    line-height: 1.8;\n}\n.cat__menu-right__label {\n    color: #74708d;\n    font-size: 0.85rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    margin-bottom: 0.71rem;\n}\n.cat__menu-right__setting {\n    margin-bottom: 1.07rem;\n}\nbody.cat__menu-right--visible .cat__menu-right {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    box-shadow: 0 0 200px -30px rgba(57, 55, 73, 0.4);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21lbnUtcmlnaHQvY29tbW9uL21lbnUtcmlnaHQuY2xlYW51aS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FBQ2pCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixPQUFPO0lBQ1AsU0FBUztJQUNULGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLCtDQUErQztZQUN2Qyx1Q0FBdUM7SUFFL0MsOENBQThDO0lBQzlDLHNDQUFzQztJQUN0Qyx5RUFBeUU7SUFDekUsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7QUFFRDtJQUNJLHdDQUF3QztZQUNoQyxnQ0FBZ0M7SUFFaEMsa0RBQWtEO0NBQzdEIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L21lbnUtcmlnaHQvY29tbW9uL21lbnUtcmlnaHQuY2xlYW51aS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAgTUVOVSBSSUdIVCAqL1xuLmNhdF9fbWVudS1yaWdodCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5NTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE3Ljg1cmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZWVmMGY0O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNy44NXJlbSwgMCwgMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDE3Ljg1cmVtLCAwLCAwKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNhdF9fbWVudS1yaWdodF9faW5uZXIge1xuICAgIHBhZGRpbmc6IDEuNDJyZW07XG59XG5cbi5jYXRfX21lbnUtcmlnaHRfX2hlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU5ZjA7XG4gICAgcGFkZGluZzogMC4zNXJlbSAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNzQ3MDhkO1xuICAgIG1pbi1oZWlnaHQ6IDMuMjFyZW07XG59XG5cbi5jYXRfX21lbnUtcmlnaHRfX2hlYWRlciBzcGFuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMC4yMXJlbTtcbiAgICBjb2xvcjogI2QyZDllNTtcbiAgICBmb250LXNpemU6IDEuMTRyZW07XG59XG5cbi5jYXRfX21lbnUtcmlnaHRfX2hlYWRlciBzcGFuOmhvdmVyIHtcbiAgICBjb2xvcjogI2I4YmVjYTtcbn1cblxuLmNhdF9fbWVudS1yaWdodF9fY29udGVudCB7XG4gICAgcGFkZGluZzogMS40MnJlbSAwO1xufVxuXG4uY2F0X19tZW51LXJpZ2h0X19kZXNjciB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGNvbG9yOiAjNzQ3MDhkO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuODtcbn1cblxuLmNhdF9fbWVudS1yaWdodF9fbGFiZWwge1xuICAgIGNvbG9yOiAjNzQ3MDhkO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzFyZW07XG59XG5cbi5jYXRfX21lbnUtcmlnaHRfX3NldHRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMDdyZW07XG59XG5cbmJvZHkuY2F0X19tZW51LXJpZ2h0LS12aXNpYmxlIC5jYXRfX21lbnUtcmlnaHQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjAwcHggLTMwcHggcmdiYSg1NywgNTUsIDczLCAwLjQpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwMHB4IC0zMHB4IHJnYmEoNTcsIDU1LCA3MywgMC40KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/menu-right/menu-right.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/menu-right/menu-right.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cat__menu-right\">\n  <div class=\"cat__menu-right__inner\">\n    <div class=\"cat__menu-right__header\">\n      <span class=\"fa fa-times pull-right cat__menu-right__action--menu-toggle\"><!-- --></span>\n      Theme Settings\n    </div>\n    <div class=\"cat__menu-right__content\">\n      <div class=\"cat__menu-right__descr\">\n        This module \"block-menu-right\" gives possibility to construct custom blocks with any widgets, components and elements inside, like this theme settings\n      </div>\n      <div class=\"cat__menu-right__label\">\n        Theme Style\n      </div>\n      <div class=\"cat__menu-right__setting cat__menu-right--example-option\">\n        <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-theme\" value=\"\" autocomplete=\"off\"> Dark\n            </label>\n          </div>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-theme\" value=\"cat__theme--light\" autocomplete=\"off\"> Light\n            </label>\n          </div>\n        </div>\n        <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-theme\" value=\"cat__theme--green\" autocomplete=\"off\"> Green\n            </label>\n          </div>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-theme\" value=\"cat__theme--blue\" autocomplete=\"off\"> Blue\n            </label>\n          </div>\n        </div>\n        <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-theme\" value=\"cat__theme--red\" autocomplete=\"off\"> Red\n            </label>\n          </div>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-theme\" value=\"cat__theme--orange\" autocomplete=\"off\"> Orange\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"cat__menu-right__label\">\n        Boxed Layout\n      </div>\n      <div class=\"cat__menu-right__setting cat__menu-right--example-option\">\n        <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-boxed\" value=\"cat__config--boxed\" autocomplete=\"off\"> On\n            </label>\n          </div>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-boxed\" value=\"\" autocomplete=\"off\"> Off\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"cat__menu-right__label\">\n        Compact Menu\n      </div>\n      <div class=\"cat__menu-right__setting cat__menu-right--example-option\">\n        <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-boxed\" value=\"cat__config--compact\" autocomplete=\"off\"> On\n            </label>\n          </div>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-boxed\" value=\"\" autocomplete=\"off\"> Off\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"cat__menu-right__label\">\n        Fixed Top Bar\n      </div>\n      <div class=\"cat__menu-right__setting cat__menu-right--example-option\">\n        <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-topbar\" value=\"\" autocomplete=\"off\"> On\n            </label>\n          </div>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-topbar\" value=\"cat__config--unfixed\" autocomplete=\"off\"> Off\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"cat__menu-right__label\">\n        Super Clean Mode\n      </div>\n      <div class=\"cat__menu-right__setting cat__menu-right--example-option\">\n        <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-superclean\" value=\"cat__config--superclean\" autocomplete=\"off\"> On\n            </label>\n          </div>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-superclean\" value=\"\" autocomplete=\"off\"> Off\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"cat__menu-right__label\">\n        Colorful Menu\n      </div>\n      <div class=\"cat__menu-right__setting cat__menu-right--example-option\">\n        <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-colorful\" value=\"cat__menu-left--colorful\" autocomplete=\"off\"> On\n            </label>\n          </div>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-colorful\" value=\"\" autocomplete=\"off\"> Off\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"cat__menu-right__label\">\n        Menu Shadow\n      </div>\n      <div class=\"cat__menu-right__setting cat__menu-right--example-option\">\n        <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-shadow\" value=\"cat__config--shadow\" autocomplete=\"off\"> On\n            </label>\n          </div>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-shadow\" value=\"\" autocomplete=\"off\"> Off\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"cat__menu-right__label\">\n        Squared Corners\n      </div>\n      <div class=\"cat__menu-right__setting cat__menu-right--example-option\">\n        <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-corners\" value=\"cat__config--squared-corners\" autocomplete=\"off\"> On\n            </label>\n          </div>\n          <div class=\"btn-group\">\n            <label class=\"btn btn-default\">\n              <input type=\"radio\" name=\"options-corners\" value=\"\" autocomplete=\"off\"> Off\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/menu-right/menu-right.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/menu-right/menu-right.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRightComponent", function() { return MenuRightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuRightComponent = /** @class */ (function () {
    function MenuRightComponent() {
    }
    MenuRightComponent.prototype.ngOnInit = function () {
        $(function () {
            // scripts for "menu-right" module
            /////////////////////////////////////////////////////////////////////////////////////////
            // toggle right menu
            $('.cat__menu-right__action--menu-toggle').on('click', function () {
                $('body').toggleClass('cat__menu-right--visible');
            });
            /////////////////////////////////////////////////////////////////////////////////////////
            // custom scroll init
            if (!(/Mobi/.test(navigator.userAgent)) && jQuery().jScrollPane) {
                $('.cat__menu-right').each(function () {
                    $(this).jScrollPane({
                        contentWidth: '0px',
                        autoReinitialise: true,
                        autoReinitialiseDelay: 100
                    });
                    var api = $(this).data('jsp'), throttleTimeout;
                    $(window).bind('resize', function () {
                        if (!throttleTimeout) {
                            throttleTimeout = setTimeout(function () {
                                api.reinitialise();
                                throttleTimeout = null;
                            }, 50);
                        }
                    });
                });
            }
            /////////////////////////////////////////////////////////////////////////////////////////
            // options scripts
            $('.cat__menu-right--example-option').each(function () {
                var inputs = $(this).find('input'), buttons = $(this).find('.btn');
                // detect current options and set active buttons
                var found = false;
                inputs.each(function () {
                    if ($('body').hasClass($(this).val())) {
                        $(this).parent().trigger('click');
                        found = true;
                    }
                });
                if (!found) {
                    $(this).find('input[value=""]').parent().trigger('click');
                    $('.cat__menu-right .jspPane').css({ top: 0 });
                }
                // change options on click
                $(this).find('.btn').on('click', function () {
                    var removeClasses = '', addClass = $(this).find('input').val();
                    buttons.removeClass('active');
                    $(this).addClass('active');
                    inputs.each(function () {
                        removeClasses += $(this).val() + ' ';
                    });
                    $('body').removeClass(removeClasses).addClass(addClass);
                    if ($(this).find('input').attr('name') == 'options-colorful' && $(this).find('input').val() == 'cat__menu-left--colorful') {
                        $('body').trigger('removeColorfulClasses');
                        $('body').trigger('setColorfulClasses');
                    }
                    if ($(this).find('input').attr('name') == 'options-colorful' && $(this).find('input').val() == '') {
                        $('body').trigger('removeColorfulClasses');
                    }
                });
            });
        });
    };
    MenuRightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-menu-right',
            template: __webpack_require__(/*! ./menu-right.component.html */ "./src/app/layout/menu-right/menu-right.component.html"),
            styles: [__webpack_require__(/*! ./common/menu-right.cleanui.css */ "./src/app/layout/menu-right/common/menu-right.cleanui.css")]
        })
    ], MenuRightComponent);
    return MenuRightComponent;
}());



/***/ }),

/***/ "./src/app/layout/top-bar/common/top-bar.cleanui.css":
/*!***********************************************************!*\
  !*** ./src/app/layout/top-bar/common/top-bar.cleanui.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*  STYLES FOR \"TOP-BAR\" MODULE */\nbody {\n    padding-top: 4.64rem;\n}\n.cat__top-bar {\n    position: fixed;\n    z-index: 990;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 4.64rem;\n    background: #ffffff;\n    border-bottom: 1px solid #e4e9f0;\n    padding-right: 1.42rem;\n    color: #74708d;\n}\n.cat__top-bar__logo {\n    width: 14.28rem;\n    height: 4.64rem;\n    display: inline-block;\n    padding: 1rem 1.28rem;\n    margin-right: 1.42rem;\n}\n.cat__top-bar__logo img {\n    max-height: 2.5rem;\n}\n.cat__top-bar__avatar {\n    width: 2.5rem;\n    height: 2.5rem;\n    background-color: #eef0f4;\n    border-color: #d2d9e5;\n    display: inline-block;\n    overflow: hidden;\n    border-radius: 500px;\n}\n.cat__top-bar__avatar img {\n    width: 100%;\n    height: auto;\n}\n.cat__top-bar__avatar-dropdown .dropdown-toggle {\n    padding-right: 1.28rem;\n    display: inline-block;\n}\n.cat__top-bar__avatar-dropdown .dropdown-toggle:after {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.08rem;\n    right: 0rem;\n}\n.cat__top-bar__left {\n    float: left;\n    display: flex;\n    align-items: center;\n    height: 100%;\n}\n.cat__top-bar__left .cat__top-bar__item {\n    margin-right: 2.14rem;\n}\n.cat__top-bar__right {\n    float: right;\n    display: flex;\n    align-items: center;\n    height: 100%;\n}\n.cat__top-bar__right .cat__top-bar__item {\n    margin-left: 2.14rem;\n}\n.cat__top-bar__item {\n    padding-top: 0.35rem;\n}\n.cat__top-bar__mini-chart {\n    height: 2.14rem;\n    line-height: 2.14rem;\n}\n.cat__top-bar__mini-chart__inner {\n    height: 80%;\n    display: inline-flex;\n    vertical-align: sub;\n    margin: 0 0.35rem;\n}\n.cat__top-bar__mini-chart__inner i {\n    display: inline-block;\n    float: left;\n    width: 4px;\n    background: #0190fe;\n    margin-right: 1px;\n    align-self: flex-end;\n}\n.cat__top-bar__menu-button {\n    cursor: pointer;\n    height: 2.14rem;\n    padding-top: 0.28rem;\n    color: #d2d9e5;\n    font-size: 1.14rem;\n    transition: color 0.2s ease-in-out;\n}\n.cat__top-bar__menu-button:hover {\n    color: #b8beca;\n}\n.cat__top-bar__search {\n    border-bottom: 1px solid #e4e9f0;\n    margin-top: 0.28rem;\n}\n.cat__top-bar__search input {\n    border: none;\n    position: relative;\n    top: -1px;\n    opacity: .6;\n    width: 11.42rem;\n}\n.cat__top-bar__search input:focus {\n    opacity: 1;\n}\n.cat__top-bar__search i {\n    cursor: pointer;\n    color: #d2d9e5;\n    margin-right: 0.35rem;\n}\n.cat__top-bar__search i:hover {\n    color: #615d7c;\n}\n/*  NOTIFICATION BLOCK (TOP MENU) */\n.cat__top-bar__activity {\n    width: 20.71rem;\n    margin: -0.5rem 0;\n    background: #ffffff;\n}\n.cat__top-bar__activity__item {\n    border-bottom: 1px solid #e4e9f0;\n    padding: 0.71rem 0;\n    position: relative;\n}\n.cat__top-bar__activity__item:last-child {\n    border-bottom: 0;\n}\n.cat__top-bar__activity__item:hover {\n    background: #eef0f4;\n}\n.cat__top-bar__activity__item:hover .cat__top-bar__activity__icon {\n    background: #c0bdd0;\n    color: #ffffff;\n    border-color: #c0bdd0;\n}\n.cat__top-bar__activity__icon {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    padding-top: 0.85rem;\n    font-size: 1.14rem;\n    width: 2.85rem;\n    text-align: center;\n    color: #d2d9e5;\n    background: #f2f4f8;\n    border-bottom: 1px solid #eef0f4;\n}\n.cat__top-bar__activity__inner {\n    margin-left: 3.57rem;\n    padding-right: 1.07rem;\n}\n.cat__top-bar__activity__inner label {\n    font-size: 0.85rem;\n}\n.cat__top-bar__activity__descr {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.cat__top-bar__activity__title > span {\n    font-size: 0.92rem;\n    color: #d2d9e5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RvcC1iYXIvY29tbW9uL3RvcC1iYXIuY2xlYW51aS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDO0lBQ0kscUJBQXFCO0NBQ3hCO0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtDQUN4QjtBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksWUFBWTtJQUlaLGNBQWM7SUFJTixvQkFBb0I7SUFDNUIsYUFBYTtDQUNoQjtBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSxhQUFhO0lBSWIsY0FBYztJQUlOLG9CQUFvQjtJQUM1QixhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7QUFFRDtJQUNJLHFCQUFxQjtDQUN4QjtBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtDQUN4QjtBQUVEO0lBQ0ksWUFBWTtJQUlaLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBR1YscUJBQXFCO0NBQ2hDO0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1CO0lBRW5CLG1DQUFtQztDQUN0QztBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksaUNBQWlDO0lBQ2pDLG9CQUFvQjtDQUN2QjtBQUVEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksV0FBVztDQUNkO0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVELG9DQUFvQztBQUNwQztJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUNBQWlDO0NBQ3BDO0FBRUQ7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90b3AtYmFyL2NvbW1vbi90b3AtYmFyLmNsZWFudWkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIFNUWUxFUyBGT1IgXCJUT1AtQkFSXCIgTU9EVUxFICovXG5ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogNC42NHJlbTtcbn1cblxuLmNhdF9fdG9wLWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5MDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDQuNjRyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTlmMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjQycmVtO1xuICAgIGNvbG9yOiAjNzQ3MDhkO1xufVxuXG4uY2F0X190b3AtYmFyX19sb2dvIHtcbiAgICB3aWR0aDogMTQuMjhyZW07XG4gICAgaGVpZ2h0OiA0LjY0cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxcmVtIDEuMjhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjQycmVtO1xufVxuXG4uY2F0X190b3AtYmFyX19sb2dvIGltZyB7XG4gICAgbWF4LWhlaWdodDogMi41cmVtO1xufVxuXG4uY2F0X190b3AtYmFyX19hdmF0YXIge1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjBmNDtcbiAgICBib3JkZXItY29sb3I6ICNkMmQ5ZTU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcbn1cblxuLmNhdF9fdG9wLWJhcl9fYXZhdGFyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY2F0X190b3AtYmFyX19hdmF0YXItZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgcGFkZGluZy1yaWdodDogMS4yOHJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jYXRfX3RvcC1iYXJfX2F2YXRhci1kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTAuMDhyZW07XG4gICAgcmlnaHQ6IDByZW07XG59XG5cbi5jYXRfX3RvcC1iYXJfX2xlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXRfX3RvcC1iYXJfX2xlZnQgLmNhdF9fdG9wLWJhcl9faXRlbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjE0cmVtO1xufVxuXG4uY2F0X190b3AtYmFyX19yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXRfX3RvcC1iYXJfX3JpZ2h0IC5jYXRfX3RvcC1iYXJfX2l0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAyLjE0cmVtO1xufVxuXG4uY2F0X190b3AtYmFyX19pdGVtIHtcbiAgICBwYWRkaW5nLXRvcDogMC4zNXJlbTtcbn1cblxuLmNhdF9fdG9wLWJhcl9fbWluaS1jaGFydCB7XG4gICAgaGVpZ2h0OiAyLjE0cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjE0cmVtO1xufVxuXG4uY2F0X190b3AtYmFyX19taW5pLWNoYXJ0X19pbm5lciB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gICAgbWFyZ2luOiAwIDAuMzVyZW07XG59XG5cbi5jYXRfX3RvcC1iYXJfX21pbmktY2hhcnRfX2lubmVyIGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMTkwZmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogZW5kO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5jYXRfX3RvcC1iYXJfX21lbnUtYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAyLjE0cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjI4cmVtO1xuICAgIGNvbG9yOiAjZDJkOWU1O1xuICAgIGZvbnQtc2l6ZTogMS4xNHJlbTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNhdF9fdG9wLWJhcl9fbWVudS1idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiAjYjhiZWNhO1xufVxuXG4uY2F0X190b3AtYmFyX19zZWFyY2gge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlOWYwO1xuICAgIG1hcmdpbi10b3A6IDAuMjhyZW07XG59XG5cbi5jYXRfX3RvcC1iYXJfX3NlYXJjaCBpbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xcHg7XG4gICAgb3BhY2l0eTogLjY7XG4gICAgd2lkdGg6IDExLjQycmVtO1xufVxuXG4uY2F0X190b3AtYmFyX19zZWFyY2ggaW5wdXQ6Zm9jdXMge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5jYXRfX3RvcC1iYXJfX3NlYXJjaCBpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNkMmQ5ZTU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjM1cmVtO1xufVxuXG4uY2F0X190b3AtYmFyX19zZWFyY2ggaTpob3ZlciB7XG4gICAgY29sb3I6ICM2MTVkN2M7XG59XG5cbi8qICBOT1RJRklDQVRJT04gQkxPQ0sgKFRPUCBNRU5VKSAqL1xuLmNhdF9fdG9wLWJhcl9fYWN0aXZpdHkge1xuICAgIHdpZHRoOiAyMC43MXJlbTtcbiAgICBtYXJnaW46IC0wLjVyZW0gMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uY2F0X190b3AtYmFyX19hY3Rpdml0eV9faXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU5ZjA7XG4gICAgcGFkZGluZzogMC43MXJlbSAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhdF9fdG9wLWJhcl9fYWN0aXZpdHlfX2l0ZW06bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLmNhdF9fdG9wLWJhcl9fYWN0aXZpdHlfX2l0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZWYwZjQ7XG59XG5cbi5jYXRfX3RvcC1iYXJfX2FjdGl2aXR5X19pdGVtOmhvdmVyIC5jYXRfX3RvcC1iYXJfX2FjdGl2aXR5X19pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiAjYzBiZGQwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2MwYmRkMDtcbn1cblxuLmNhdF9fdG9wLWJhcl9fYWN0aXZpdHlfX2ljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDAuODVyZW07XG4gICAgZm9udC1zaXplOiAxLjE0cmVtO1xuICAgIHdpZHRoOiAyLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2QyZDllNTtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmNGY4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVmMGY0O1xufVxuXG4uY2F0X190b3AtYmFyX19hY3Rpdml0eV9faW5uZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAzLjU3cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMDdyZW07XG59XG5cbi5jYXRfX3RvcC1iYXJfX2FjdGl2aXR5X19pbm5lciBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4uY2F0X190b3AtYmFyX19hY3Rpdml0eV9fZGVzY3Ige1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNhdF9fdG9wLWJhcl9fYWN0aXZpdHlfX3RpdGxlID4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjkycmVtO1xuICAgIGNvbG9yOiAjZDJkOWU1O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/top-bar/top-bar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/top-bar/top-bar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cat__top-bar\">\n    <!-- left aligned items -->\n    <div class=\"cat__top-bar__left\">\n        <div class=\"cat__top-bar__logo\">\n            <a href=\"dashboards-alpha.html\">\n                <img src=\"assets/modules/dummy-assets/common/img/logo.png\" />\n            </a>\n        </div>\n        <div class=\"cat__top-bar__item hidden-sm-down\" >\n            <div class=\"dropdown\">\n                <a href=\"javascript: void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <i class=\"far fa-calculator mr-2\"></i>\n                    <span class=\"hidden-lg-down\"><strong>Home Budget</strong></span>\n                </a>\n                <ul style=\"min-width: 250px;\" class=\"dropdown-menu\" aria-labelledby=\"\" role=\"menu\">\n\n                    <div  class=\"dropdown-item\">\n                        <div  class=\"input-group input-append\">\n                            <input class=\"form-control\" placeholder=\"choose budget\" >\n                            <span  class=\"add-on input-group-addon\" ><i class=\"icmn-search\"></i></span>\n                        </div>\n                    </div>\n                    <div class=\"dropdown-divider\"></div>\n                    <li class=\"dropdown-item\"><i class=\"dropdown-icon icmn-checkmark\"></i>Home Budget</li>\n                    <li class=\"dropdown-item\"><i class=\"dropdown-icon\" style=\"margin-left:13.5px;\"></i>Company Budget</li>\n                    <li class=\"dropdown-item\"><i class=\"dropdown-icon\" style=\"margin-left:13.5px;\"></i>Children Budget</li>       \n                </ul>\n            </div>\n        </div>\n    </div>\n    <!-- right aligned items -->\n    <div class=\"cat__top-bar__right\">\n        <div class=\"cat__top-bar__item hidden-sm-down\">\n        </div>\n        <div class=\"cat__top-bar__item hidden-xxl-down hidden-sm-down\">\n            <div class=\"cat__top-bar__mini-chart\">\n                Server Load:\n                <div class=\"cat__top-bar__mini-chart__inner\">\n                    <i style=\"height: 30%;\"></i>\n                    <i style=\"height: 78%;\"></i>\n                    <i style=\"height: 10%;\"></i>\n                    <i style=\"height: 46%;\"></i>\n                    <i style=\"height: 26%;\"></i>\n                    <i style=\"height: 29%;\"></i>\n                    <i style=\"height: 50%;\"></i>\n                    <i style=\"height: 89%;\"></i>\n                    <i style=\"height: 30%;\"></i>\n                </div>\n                20%\n            </div>\n        </div>\n        <div class=\"cat__top-bar__item hidden-sm-down\">\n            <div class=\"dropdown\">\n                <a href=\"javascript: void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <i class=\"menu-notification-icon icmn-home\"></i>\n                </a>\n                <ul class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"\" role=\"menu\">\n\n                    <div class=\"cat__top-bar__activity\">\n                        <div class=\"cat__top-bar__activity__item\">\n                            <i class=\"cat__top-bar__activity__icon icmn-star-full\"></i>\n                            <div class=\"cat__top-bar__activity__inner\">\n                                <div class=\"cat__top-bar__activity__title\">\n                                    <span class=\"pull-right\">now</span>\n                                    <a href=\"javascript: void(0);\">Update Status: <span class=\"badge badge-danger\">New</span></a>\n                                </div>\n                                <div class=\"cat__top-bar__activity__descr\">\n                                    Failed to get available update data. To ensure the proper functioning of your application, update now.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"cat__top-bar__activity__item\">\n                            <i class=\"cat__top-bar__activity__icon icmn-stack\"></i>\n                            <div class=\"cat__top-bar__activity__inner\">\n                                <div class=\"cat__top-bar__activity__title\">\n                                    <span class=\"pull-right\">24 min ago</span>\n                                    <a href=\"javascript: void(0);\">Income: <span class=\"badge badge-default\">$299.00</span></a>\n                                </div>\n                                <div class=\"cat__top-bar__activity__descr\">\n                                    Failed to get available update data. To ensure the proper functioning of your application, update now.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"cat__top-bar__activity__item\">\n                            <i class=\"cat__top-bar__activity__icon icmn-list\"></i>\n                            <div class=\"cat__top-bar__activity__inner\">\n                                <div class=\"cat__top-bar__activity__title\">\n                                    <span class=\"pull-right\">30 min ago</span>\n                                    <a href=\"javascript: void(0);\">Inbox Message</a>\n                                </div>\n                                <div class=\"cat__top-bar__activity__descr\">\n                                    From: <a href=\"javascript: void(0);\">David Bowie</a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"cat__top-bar__activity__item\">\n                            <i class=\"cat__top-bar__activity__icon icmn-home\"></i>\n                            <div class=\"cat__top-bar__activity__inner\">\n                                <div class=\"cat__top-bar__activity__title\">\n                                    <span class=\"pull-right\">now</span>\n                                    <a href=\"javascript: void(0);\">Update Status: <span class=\"badge badge-primary\">New</span></a>\n                                </div>\n                                <div class=\"cat__top-bar__activity__descr\">\n                                    Failed to get available update data. To ensure the proper functioning of your application, update now.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"cat__top-bar__activity__item\">\n                            <i class=\"cat__top-bar__activity__icon icmn-loop\"></i>\n                            <div class=\"cat__top-bar__activity__inner\">\n                                <div class=\"cat__top-bar__activity__title\">\n                                    <span class=\"pull-right\">24 min ago</span>\n                                    <a href=\"javascript: void(0);\">Income: <span class=\"badge badge-warning\">$299.00</span></a>\n                                </div>\n                                <div class=\"cat__top-bar__activity__descr\">\n                                    Failed to get available update data. To ensure the proper functioning of your application, update now.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"cat__top-bar__activity__item\">\n                            <i class=\"cat__top-bar__activity__icon icmn-cog cat__core__spin-delayed--pseudo-selector\"></i>\n                            <div class=\"cat__top-bar__activity__inner\">\n                                <div class=\"cat__top-bar__activity__title\">\n                                    <span class=\"pull-right\">30 min ago</span>\n                                    <a href=\"javascript: void(0);\">Inbox Message</a>\n                                </div>\n                                <div class=\"cat__top-bar__activity__descr\">\n                                    From: <a href=\"javascript: void(0);\">David Bowie</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </ul>\n            </div>\n        </div>\n        <div class=\"cat__top-bar__item\">\n            <div class=\"dropdown cat__top-bar__avatar-dropdown\">\n                <a href=\"javascript: void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <span class=\"cat__top-bar__avatar\" href=\"javascript:void(0);\">\n                        <img src=\"/assets/modules/dummy-assets/common/img/avatars/1.jpg\" />\n                    </span>\n                </a>\n                <ul class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"\" role=\"menu\">\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"dropdown-icon icmn-user\"></i> Profile</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <div class=\"dropdown-header\">Home</div>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"dropdown-icon icmn-circle-right\"></i> System Dashboard</a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"dropdown-icon icmn-circle-right\"></i> User Boards</a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"dropdown-icon icmn-circle-right\"></i> Issue Navigator (35 New)</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" id=\"logoutbtn\" ><i class=\"dropdown-icon icmn-exit\"></i> Logout</a>\n                    <form id=\"logout-form\" action=\"/logout\" method=\"POST\" style=\"display: none;\">\n                        <input type=\"hidden\" name=\"_token\" value=\"{{token}}\">\n                    </form>\n                </ul>\n            </div>\n        </div>\n        <div class=\"cat__top-bar__item\">\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/top-bar/top-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/top-bar/top-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_budget_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/budget.service */ "./src/app/core/services/budget.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(budget) {
        this.budget = budget;
    }
    TopBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.budget.getBudgetData().subscribe(function (data) {
            _this.budgetData = data['data'];
            _this.token = data['token'];
        });
        $("#logoutbtn").click(function () {
            $("#logout-form").submit();
        });
    };
    TopBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cat-top-bar',
            template: __webpack_require__(/*! ./top-bar.component.html */ "./src/app/layout/top-bar/top-bar.component.html"),
            styles: [__webpack_require__(/*! ./common/top-bar.cleanui.css */ "./src/app/layout/top-bar/common/top-bar.cleanui.css")]
        }),
        __metadata("design:paramtypes", [_core_services_budget_service__WEBPACK_IMPORTED_MODULE_1__["BudgetService"]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/assets/modules/dashboard/dashboard.css":
/*!****************************************************!*\
  !*** ./src/assets/modules/dashboard/dashboard.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jc3MifQ== */"

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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://budget.local/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abison/www/acntngfrnt/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map