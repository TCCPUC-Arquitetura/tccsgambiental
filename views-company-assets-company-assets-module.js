(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-company-assets-company-assets-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/company-assets/mining-zone-create.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/company-assets/mining-zone-create.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>Zona de Mineração</strong>\r\n          </div>\r\n          <form [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\" class=\"form-horizontal\">\r\n  \r\n          <div class=\"card-body\">\r\n              \r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"identificacao\">Identificação</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" id=\"identificação\"  formControlName=\"id\" name=\"text-input\" class=\"form-control\" autocomplete=\"off\" >\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"nome\">Nome</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" id=\"nome\" name=\"text-input\" formControlName=\"name\" class=\"form-control\"  autocomplete=\"off\" >\r\n                </div>\r\n              </div>\r\n             \r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"tipo-minerio\">Tipo de Minério</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" id=\"tipo-minerio\" name=\"tipo-minerio\" formControlName=\"oreType\" class=\"form-control\"   autocomplete=\"off\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"mining\">Lavra</label>\r\n                <div class=\"col-md-9\">\r\n                  <select  id=\"mining\" name=\"mining\" class=\"form-control\" formControlName=\"mining\"   >\r\n                    <option *ngFor=\"let miningType of miningTypes\" >{{miningType}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"area\">Área</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" id=\"area\" name=\"area\" formControlName=\"area\" class=\"form-control\"  autocomplete=\"off\" >\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"tipo-processamento\">Tipo de Processamento</label>\r\n                <div class=\"col-md-9\">\r\n                  <select  id=\"tipo-processamento\" name=\"proccessingType\" formControlName=\"processingType\" class=\"form-control\" >\r\n                    <option *ngFor=\"let processingType of processingTypes\">{{processingType}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"latitude\">Latitude</label>\r\n  \r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" id=\"latitude\" name=\"Latitude\" formControlName=\"latitude\" class=\"form-control\" >\r\n                </div> \r\n            </div>\r\n  \r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"longitude\">Longitude</label>\r\n  \r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"longitude\" name=\"Longitude\" formControlName=\"longitude\" class=\"form-control\" >\r\n              </div> \r\n          </div>\r\n\r\n      \r\n                        \r\n           \r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\" ></i> Salvar</button>\r\n            <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"reset()\"><i class=\"fa fa-ban\"></i> Apagar</button>\r\n          </div>\r\n        </form>\r\n        </div>\r\n       \r\n  \r\n        \r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/company-assets/mining-zone-details.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/company-assets/mining-zone-details.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Zona de Mineração</strong>\r\n        </div>\r\n        <form [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\" class=\"form-horizontal\">\r\n\r\n        <div class=\"card-body\">\r\n            \r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"identificacao\">Identificação</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"identificação\"  formControlName=\"id\" name=\"text-input\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"nome\">Nome</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"nome\" name=\"text-input\" formControlName=\"name\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n           \r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"tipo-minerio\">Tipo de Minério</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"tipo-minerio\" name=\"tipo-minerio\" formControlName=\"oreType\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"mining\">Lavra</label>\r\n              <div class=\"col-md-9\">\r\n                <select  id=\"mining\" name=\"mining\" class=\"form-control\" formControlName=\"mining\"   >\r\n                  <option *ngFor=\"let miningType of miningTypes\" >{{miningType}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"area\">Área</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"area\" name=\"area\" formControlName=\"area\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"tipo-processamento\">Tipo de Processamento</label>\r\n              <div class=\"col-md-9\">\r\n                <select  id=\"tipo-processamento\" name=\"proccessingType\" formControlName=\"processingType\" class=\"form-control\" >\r\n                  <option *ngFor=\"let processingType of processingTypes\">{{processingType}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            \r\n             \r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"latitude\">Latitude</label>\r\n\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"latitude\" name=\"Latitude\" formControlName=\"latitude\" class=\"form-control\" >\r\n              </div> \r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-md-3 col-form-label\" for=\"longitude\">Longitude</label>\r\n\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" id=\"longitude\" name=\"Longitude\" formControlName=\"longitude\" class=\"form-control\" >\r\n            </div> \r\n        </div>\r\n\r\n          <agm-map [latitude]=\"checkoutForm.value.latitude\" [zoom]=\"zoom\" [longitude]=\"checkoutForm.value.longitude\">\r\n            <agm-marker  [latitude]=\"checkoutForm.value.latitude\" [longitude]=\"checkoutForm.value.longitude\"></agm-marker>\r\n          </agm-map>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\" ></i> Salvar</button>\r\n          <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"reset()\"><i class=\"fa fa-ban\"></i> Apagar</button>\r\n        </div>\r\n      </form>\r\n      </div>\r\n     \r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/company-assets/mining-zone.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/company-assets/mining-zone.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"animated fadeIn\">\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>Pesquisar Zona de Mineração</strong>\r\n          </div>\r\n          <form [formGroup] = \"searchForm\" (ngSubmit)=\"onSubmit(searchForm.value)\" >\r\n  \r\n          <div class=\"card-body\">\r\n              \r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"text-input\">Identificação</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" id=\"text-input\" name=\"text-input\" formControlName = \"id\" class=\"form-control\" >\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"text-input\">Nome</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" id=\"text-input\" name=\"text-input\" formControlName = \"name\" class=\"form-control\" >\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"text-input\">Tipo de Minério</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" id=\"text-input\" name=\"text-input\" formControlName = \"oreType\"class=\"form-control\" >\r\n                </div>\r\n              </div>\r\n              \r\n                                    \r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fas fa-search\"></i> Pesquisar</button>\r\n            <a type=\"button\" class=\"btn btn-sm btn-primary\" [routerLink]=\"['../mining-zone-create']\" ><i class=\"fa far fa-file\"></i> Novo</a>\r\n\r\n          </div>\r\n        </form>\r\n        </div>\r\n     \r\n  \r\n        <table class=\"table table-bordered  table-striped table-light\">\r\n          <thead >\r\n            <tr>\r\n              <th scope=\"col\">Identificação</th>\r\n              <th scope=\"col\">Nome</th>\r\n              <th scope=\"col\">Tipo de Minério</th>\r\n              <th scope=\"col\">Lavra</th>\r\n              <th scope=\"col\">Ações</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody >\r\n            <tr *ngFor=\"let miningZone of miningZones; index as miningZoneId\" class=\"{{visibility}}\" id=\"{{miningZoneId}}\">\r\n              <th scope=\"row\">{{miningZone.id}}</th>\r\n              <td>{{miningZone.name}}</td>\r\n              <td>{{miningZone.oreType}}</td>\r\n              <td>{{miningZone.mining}}</td>\r\n              <td><a type=\"button\" class=\"btn btn-sm btn-primary\" [routerLink]=\"['../mining-zones/' + miningZoneId]\" ><i class=\"fa far fa-edit\"></i></a>\r\n              <button type=\"button\"  class=\"btn btn-sm btn-danger\" data-toggle=\"modal\" (click)=\"myModal.show()\"  ><i class=\"fa fa-trash\"></i></button>\r\n                \r\n              </td>\r\n              <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                <div class=\"modal-dialog modal-danger\" role=\"document\">\r\n                  <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                      <h4 class=\"modal-title\">Remover Zona de Mineração</h4>\r\n                      <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                      <p>Deseja remover a Zona de Mineração?&hellip;</p>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">Fechar</button>\r\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"toggleVisibility(miningZoneId); myModal.hide()\">Apagar</button>\r\n                    </div>\r\n                  </div><!-- /.modal-content -->\r\n                </div><!-- /.modal-dialog -->\r\n              </div><!-- /.modal -->\r\n            </tr>\r\n            \r\n          </tbody>\r\n        </table>\r\n\r\n  </div>\r\n");

/***/ }),

/***/ "./src/app/views/company-assets/company-assets-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/company-assets/company-assets-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CompanyAssetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAssetsRoutingModule", function() { return CompanyAssetsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mining_zone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mining-zone.component */ "./src/app/views/company-assets/mining-zone.component.ts");
/* harmony import */ var _mining_zone_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mining-zone-create.component */ "./src/app/views/company-assets/mining-zone-create.component.ts");
/* harmony import */ var _mining_zone_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mining-zone-details.component */ "./src/app/views/company-assets/mining-zone-details.component.ts");






var routes = [
    {
        path: '',
        data: {
            title: 'Ativos'
        },
        children: [
            {
                path: '',
                redirectTo: 'mining-zone'
            },
            {
                path: 'mining-zone',
                component: _mining_zone_component__WEBPACK_IMPORTED_MODULE_3__["MiningZoneComponent"],
                data: {
                    title: 'Zona de Mineração'
                }
            },
            {
                path: 'mining-zone-create',
                component: _mining_zone_create_component__WEBPACK_IMPORTED_MODULE_4__["MiningZoneCreateComponent"],
                data: {
                    title: 'Nova Zona de Mineração'
                }
            },
            {
                path: 'mining-zones/:miningZoneId',
                component: _mining_zone_details_component__WEBPACK_IMPORTED_MODULE_5__["MiningZoneDetailsComponent"],
                data: {
                    title: 'Editar Zona de Mineração'
                }
            }
        ]
    }
];
var CompanyAssetsRoutingModule = /** @class */ (function () {
    function CompanyAssetsRoutingModule() {
    }
    CompanyAssetsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CompanyAssetsRoutingModule);
    return CompanyAssetsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/company-assets/company-assets.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/company-assets/company-assets.module.ts ***!
  \***************************************************************/
/*! exports provided: CompanyAssetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAssetsModule", function() { return CompanyAssetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _company_assets_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-assets-routing.module */ "./src/app/views/company-assets/company-assets-routing.module.ts");
/* harmony import */ var _mining_zone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mining-zone.component */ "./src/app/views/company-assets/mining-zone.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mining_zone_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mining-zone-create.component */ "./src/app/views/company-assets/mining-zone-create.component.ts");
/* harmony import */ var _mining_zone_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mining-zone-details.component */ "./src/app/views/company-assets/mining-zone-details.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");






// Tabs Component

// Carousel Component

// Collapse Component

// Dropdowns Component

// Pagination Component

// Popover Component

// Progress Component

// Tooltip Component






var CompanyAssetsModule = /** @class */ (function () {
    function CompanyAssetsModule() {
    }
    CompanyAssetsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_mining_zone_component__WEBPACK_IMPORTED_MODULE_4__["MiningZoneComponent"], _mining_zone_create_component__WEBPACK_IMPORTED_MODULE_16__["MiningZoneCreateComponent"], _mining_zone_details_component__WEBPACK_IMPORTED_MODULE_17__["MiningZoneDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _company_assets_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyAssetsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_11__["PopoverModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_12__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_18__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyA_GRu2pdnNTC6gRBBs1NT9OIp7gNXt800'
                })
            ]
        })
    ], CompanyAssetsModule);
    return CompanyAssetsModule;
}());



/***/ }),

/***/ "./src/app/views/company-assets/mining-zone-create.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/company-assets/mining-zone-create.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbXBhbnktYXNzZXRzL21pbmluZy16b25lLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/company-assets/mining-zone-create.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/company-assets/mining-zone-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: MiningZoneCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiningZoneCreateComponent", function() { return MiningZoneCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mining_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mining-zone.service */ "./src/app/views/company-assets/mining-zone.service.ts");




var MiningZoneCreateComponent = /** @class */ (function () {
    function MiningZoneCreateComponent(formBuilder, miningZoneService) {
        this.formBuilder = formBuilder;
        this.miningZoneService = miningZoneService;
        this.checkoutForm = this.formBuilder.group({
            id: '',
            name: '',
            location: '',
            oreType: '',
            mining: '',
            area: '',
            processingType: '',
            latitude: null,
            longitude: null,
            test: ''
        });
    }
    MiningZoneCreateComponent.prototype.ngOnInit = function () {
        this.miningTypes = ['Céu aberto', 'Subterrânea'];
        this.processingTypes = ['Úmido', 'Seco'];
    };
    MiningZoneCreateComponent.prototype.onSubmit = function (miningZoneData) {
        // Process checkout data here
        this.checkoutForm.reset();
        console.warn('Your order has been submitted', miningZoneData);
        this.miningZoneService.save(miningZoneData);
    };
    MiningZoneCreateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _mining_zone_service__WEBPACK_IMPORTED_MODULE_3__["MiningZoneService"] }
    ]; };
    MiningZoneCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mining-zone-create',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mining-zone-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/company-assets/mining-zone-create.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mining-zone-create.component.css */ "./src/app/views/company-assets/mining-zone-create.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _mining_zone_service__WEBPACK_IMPORTED_MODULE_3__["MiningZoneService"]])
    ], MiningZoneCreateComponent);
    return MiningZoneCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/company-assets/mining-zone-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/company-assets/mining-zone-details.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbXBhbnktYXNzZXRzL21pbmluZy16b25lLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/company-assets/mining-zone-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/company-assets/mining-zone-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: MiningZoneDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiningZoneDetailsComponent", function() { return MiningZoneDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mining_zone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mining-zone.service */ "./src/app/views/company-assets/mining-zone.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var MiningZoneDetailsComponent = /** @class */ (function () {
    function MiningZoneDetailsComponent(miningZoneService, route, formBuilder) {
        this.miningZoneService = miningZoneService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.lat = -20.167030;
        this.lng = -44.021588;
        this.zoom = 16;
        this.checkoutForm = this.formBuilder.group({
            id: '',
            name: '',
            location: '',
            oreType: '',
            mining: '',
            area: '',
            processingType: '',
            latitude: 0,
            longitude: 0
        });
    }
    MiningZoneDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miningZoneService.getMiningZoneList().subscribe(function (miningZones) { return _this.miningZone = miningZones[+_this.route.snapshot.paramMap.get('miningZoneId')]; });
        this.miningZoneService.getMiningZoneList().subscribe(function (data) {
            _this.miningZone = data[+_this.route.snapshot.paramMap.get('miningZoneId')];
            _this.checkoutForm.patchValue({
                id: _this.miningZone.id,
                name: _this.miningZone.name,
                location: _this.miningZone.location,
                oreType: _this.miningZone.oreType,
                mining: _this.miningZone.mining,
                area: _this.miningZone.area,
                processingType: _this.miningZone.processingType,
                latitude: _this.miningZone.latitude,
                longitude: _this.miningZone.longitude
            });
        });
        this.miningTypes = ['céu aberto', 'subterranea'];
        this.processingTypes = ['umido', 'seco'];
    };
    MiningZoneDetailsComponent.ctorParameters = function () { return [
        { type: _mining_zone_service__WEBPACK_IMPORTED_MODULE_2__["MiningZoneService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    MiningZoneDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mining-zone-details',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mining-zone-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/company-assets/mining-zone-details.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mining-zone-details.component.css */ "./src/app/views/company-assets/mining-zone-details.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_mining_zone_service__WEBPACK_IMPORTED_MODULE_2__["MiningZoneService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], MiningZoneDetailsComponent);
    return MiningZoneDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/company-assets/mining-zone.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/company-assets/mining-zone.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbXBhbnktYXNzZXRzL21pbmluZy16b25lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/company-assets/mining-zone.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/company-assets/mining-zone.component.ts ***!
  \***************************************************************/
/*! exports provided: MiningZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiningZoneComponent", function() { return MiningZoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mining_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mining-zone.service */ "./src/app/views/company-assets/mining-zone.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");






var MiningZoneComponent = /** @class */ (function () {
    function MiningZoneComponent(formBuilder, miningZoneService) {
        this.formBuilder = formBuilder;
        this.miningZoneService = miningZoneService;
        this.searchForm = this.formBuilder.group({
            id: '',
            name: '',
            oreType: ''
        });
    }
    MiningZoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miningZoneService.getMiningZoneList().subscribe(function (data) {
            _this.miningZones = data;
        });
    };
    MiningZoneComponent.prototype.toggleVisibility = function (id) {
        console.log(id);
        document.getElementById(id).style.display = "none";
    };
    MiningZoneComponent.prototype.onSubmit = function (searchFormData) {
        // Process checkout data here
        console.warn('Your order has been submitted', searchFormData);
        var foundItems = [];
        for (var i = 0; i < this.miningZones.length; i++) {
            var mZ = this.miningZones[i];
            if (this.checkArray(searchFormData, mZ)) {
                foundItems.push(mZ);
            }
        }
        this.miningZones = foundItems;
    };
    MiningZoneComponent.prototype.checkArray = function (searchFormData, miningZone) {
        if (searchFormData.id != '') {
            return parseInt(searchFormData.id) == miningZone.id;
        }
        else {
            return searchFormData.name == miningZone.name || searchFormData.oreType == miningZone.oreType;
        }
    };
    MiningZoneComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _mining_zone_service__WEBPACK_IMPORTED_MODULE_3__["MiningZoneService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], MiningZoneComponent.prototype, "myModal", void 0);
    MiningZoneComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mining-zone',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mining-zone.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/company-assets/mining-zone.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mining-zone.component.css */ "./src/app/views/company-assets/mining-zone.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _mining_zone_service__WEBPACK_IMPORTED_MODULE_3__["MiningZoneService"]])
    ], MiningZoneComponent);
    return MiningZoneComponent;
}());



/***/ }),

/***/ "./src/app/views/company-assets/mining-zone.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/company-assets/mining-zone.service.ts ***!
  \*************************************************************/
/*! exports provided: MiningZoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiningZoneService", function() { return MiningZoneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MiningZoneService = /** @class */ (function () {
    function MiningZoneService(client) {
        this.client = client;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    MiningZoneService.prototype.getMiningZoneList = function () {
        return this.client.get("https://8e3cd95b-967c-4075-a754-c3354b017cab.mock.pstmn.io/ativos/zonademineracao", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    MiningZoneService.prototype.save = function (miningZoneData) {
        console.warn(miningZoneData);
    };
    MiningZoneService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MiningZoneService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MiningZoneService);
    return MiningZoneService;
}());



/***/ })

}]);
//# sourceMappingURL=views-company-assets-company-assets-module.js.map