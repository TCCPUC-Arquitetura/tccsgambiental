(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-base-base-module"],{

/***/ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js ***!
  \*******************************************************************************/
/*! exports provided: AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionConfig", function() { return AccordionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return AccordionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
var AccordionConfig = /** @class */ (function () {
    function AccordionConfig() {
        /**
         * Whether the other panels should be closed when a panel is opened
         */
        this.closeOthers = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
    }
    AccordionConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return AccordionConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Displays collapsible content panels for presenting information in a limited amount of space.
 */
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent(config) {
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        this.groups = [];
        Object.assign(this, config);
    }
    /**
     * @param {?} openGroup
     * @return {?}
     */
    AccordionComponent.prototype.closeOtherPanels = /**
     * @param {?} openGroup
     * @return {?}
     */
    function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        }));
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.addGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        group.isAnimated = this.isAnimated;
        this.groups.push(group);
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.removeGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'accordion',
                    template: "<ng-content></ng-content>",
                    host: {
                        '[attr.aria-multiselectable]': 'closeOthers',
                        role: 'tablist',
                        class: 'panel-group',
                        style: 'display: block'
                    }
                }] }
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: AccordionConfig }
    ]; };
    AccordionComponent.propDecorators = {
        isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closeOthers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return AccordionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
var AccordionPanelComponent = /** @class */ (function () {
    function AccordionPanelComponent(accordion) {
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * Emits when the opened state changes
         */
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isOpen = false;
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        // Questionable, maybe .panel-open should be on child div.panel element?
        /** Is accordion group open or closed. This property supports two-way binding */
        get: 
        // Questionable, maybe .panel-open should be on child div.panel element?
        /**
         * Is accordion group open or closed. This property supports two-way binding
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (value !== this.isOpen) {
                if (value) {
                    this.accordion.closeOtherPanels(this);
                }
                this._isOpen = value;
                Promise.resolve(null).then((/**
                 * @return {?}
                 */
                function () {
                    _this.isOpenChange.emit(value);
                }))
                    .catch((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    /* tslint:disable: no-console */
                    console.log(error);
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AccordionPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    /**
     * @return {?}
     */
    AccordionPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.accordion.removeGroup(this);
    };
    /**
     * @return {?}
     */
    AccordionPanelComponent.prototype.toggleOpen = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    AccordionPanelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'accordion-group, accordion-panel',
                    template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div\n    class=\"panel-heading card-header\"\n    role=\"tab\"\n    (click)=\"toggleOpen()\"\n    [ngClass]=\"isDisabled ? 'panel-disabled' : 'panel-enabled'\"\n  >\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{ 'text-muted': isDisabled }\" type=\"button\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                    host: {
                        class: 'panel',
                        style: 'display: block'
                    },
                    styles: [":host .card-header.panel-enabled{cursor:pointer}:host .card-header.panel-disabled .btn.btn-link{cursor:default;text-decoration:none}"]
                }] }
    ];
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: AccordionComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [AccordionComponent,] }] }
    ]; };
    AccordionPanelComponent.propDecorators = {
        heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.panel-open',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return AccordionPanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    /**
     * @return {?}
     */
    AccordionModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AccordionModule, providers: [AccordionConfig] };
    };
    AccordionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"]],
                    declarations: [AccordionComponent, AccordionPanelComponent],
                    exports: [AccordionComponent, AccordionPanelComponent]
                },] }
    ];
    return AccordionModule;
}());


//# sourceMappingURL=ngx-bootstrap-accordion.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js ***!
  \***************************************************************************/
/*! exports provided: add, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, defineLocale, enGbLocale, endOf, esDoLocale, esLocale, esUsLocale, etLocale, fiLocale, formatDate, frLocale, getDay, getFirstDayOfMonth, getFullYear, getLocale, getMonth, getSetGlobalLocale, glLocale, heLocale, hiLocale, hrLocale, huLocale, idLocale, isAfter, isArray, isBefore, isDate, isDateValid, isDisabledDay, isFirstDayOfWeek, isSame, isSameDay, isSameMonth, isSameYear, itLocale, jaLocale, koLocale, listLocales, ltLocale, lvLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, parseDate, plLocale, ptBrLocale, roLocale, ruLocale, setFullDate, shiftDate, skLocale, slLocale, startOf, subtract, svLocale, thLocale, trLocale, ukLocale, updateLocale, utcAsLocal, viLocale, zhCnLocale, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arLocale", function() { return arLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgLocale", function() { return bgLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caLocale", function() { return caLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csLocale", function() { return csLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daLocale", function() { return daLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deLocale", function() { return deLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return defineLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enGbLocale", function() { return enGbLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return endOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esDoLocale", function() { return esDoLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esLocale", function() { return esLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esUsLocale", function() { return esUsLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "etLocale", function() { return etLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fiLocale", function() { return fiLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frLocale", function() { return frLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDay", function() { return getDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstDayOfMonth", function() { return getFirstDayOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullYear", function() { return getFullYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return getLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return getMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return getSetGlobalLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glLocale", function() { return glLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heLocale", function() { return heLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiLocale", function() { return hiLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrLocale", function() { return hrLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "huLocale", function() { return huLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idLocale", function() { return idLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return isAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return isBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateValid", function() { return isDateValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisabledDay", function() { return isDisabledDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirstDayOfWeek", function() { return isFirstDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return isSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return isSameDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return isSameMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return isSameYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itLocale", function() { return itLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jaLocale", function() { return jaLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "koLocale", function() { return koLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return listLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ltLocale", function() { return ltLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lvLocale", function() { return lvLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mnLocale", function() { return mnLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbLocale", function() { return nbLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nlBeLocale", function() { return nlBeLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nlLocale", function() { return nlLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plLocale", function() { return plLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ptBrLocale", function() { return ptBrLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roLocale", function() { return roLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruLocale", function() { return ruLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFullDate", function() { return setFullDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftDate", function() { return shiftDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skLocale", function() { return skLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slLocale", function() { return slLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return startOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svLocale", function() { return svLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thLocale", function() { return thLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trLocale", function() { return trLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ukLocale", function() { return ukLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return updateLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcAsLocal", function() { return utcAsLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viLocale", function() { return viLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zhCnLocale", function() { return zhCnLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return createDate; });
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} n
 * @param {?} x
 * @return {?}
 */
function mod(n, x) {
    return (n % x + x) % x;
}
/**
 * @param {?} num
 * @return {?}
 */
function absFloor(num) {
    return num < 0 ? Math.ceil(num) || 0 : Math.floor(num);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} str
 * @return {?}
 */
function isString(str) {
    return typeof str === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */
function isDate(value) {
    return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
/**
 * @param {?} date
 * @return {?}
 */
function isDateValid(date) {
    return date && date.getTime && !isNaN(date.getTime());
}
/**
 * @param {?} fn
 * @return {?}
 */
function isFunction(fn) {
    return (fn instanceof Function ||
        Object.prototype.toString.call(fn) === '[object Function]');
}
/**
 * @param {?=} value
 * @return {?}
 */
function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}
/**
 * @template T
 * @param {?=} input
 * @return {?}
 */
function isArray(input) {
    return (input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]');
}
/**
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function hasOwnProp(a /*object*/, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}
/**
 * @template T
 * @param {?} input
 * @return {?}
 */
function isObject(input /*object*/) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (input != null && Object.prototype.toString.call(input) === '[object Object]');
}
/**
 * @param {?} obj
 * @return {?}
 */
function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    }
    /** @type {?} */
    var k;
    for (k in obj) {
        if (obj.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} input
 * @return {?}
 */
function isUndefined(input) {
    return input === void 0;
}
/**
 * @template T
 * @param {?} argumentForCoercion
 * @return {?}
 */
function toInt(argumentForCoercion) {
    /** @type {?} */
    var coercedNumber = +argumentForCoercion;
    /** @type {?} */
    var value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }
    return value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var aliases = {};
/** @type {?} */
var _mapUnits = {
    date: 'day',
    hour: 'hours',
    minute: 'minutes',
    second: 'seconds',
    millisecond: 'milliseconds'
};
/**
 * @param {?} unit
 * @param {?} shorthand
 * @return {?}
 */
function addUnitAlias(unit, shorthand) {
    /** @type {?} */
    var lowerCase = unit.toLowerCase();
    /** @type {?} */
    var _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = _unit;
}
/**
 * @param {?} units
 * @return {?}
 */
function normalizeUnits(units) {
    return isString(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}
/**
 * @param {?} inputObject
 * @return {?}
 */
function normalizeObjectUnits(inputObject) {
    /** @type {?} */
    var normalizedInput = {};
    /** @type {?} */
    var normalizedProp;
    /** @type {?} */
    var prop;
    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }
    return (/** @type {?} */ (normalizedInput));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// place in new Date([array])
/** @type {?} */
var YEAR = 0;
/** @type {?} */
var MONTH = 1;
/** @type {?} */
var DATE = 2;
/** @type {?} */
var HOUR = 3;
/** @type {?} */
var MINUTE = 4;
/** @type {?} */
var SECOND = 5;
/** @type {?} */
var MILLISECOND = 6;
/** @type {?} */
var WEEK = 7;
/** @type {?} */
var WEEKDAY = 8;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} num
 * @param {?} targetLength
 * @param {?=} forceSign
 * @return {?}
 */
function zeroFill(num, targetLength, forceSign) {
    /** @type {?} */
    var absNumber = "" + Math.abs(num);
    /** @type {?} */
    var zerosToFill = targetLength - absNumber.length;
    /** @type {?} */
    var sign = num >= 0;
    /** @type {?} */
    var _sign = sign ? (forceSign ? '+' : '') : '-';
    // todo: this is crazy slow
    /** @type {?} */
    var _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
    return (_sign + _zeros + absNumber);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var formatFunctions = {};
/** @type {?} */
var formatTokenFunctions = {};
// tslint:disable-next-line
/** @type {?} */
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
/**
 * @param {?} token
 * @param {?} padded
 * @param {?} ordinal
 * @param {?} callback
 * @return {?}
 */
function addFormatToken(token, padded, ordinal, callback) {
    if (token) {
        formatTokenFunctions[token] = callback;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = (/**
         * @return {?}
         */
        function () {
            return zeroFill(callback.apply(null, arguments), padded[1], padded[2]);
        });
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = (/**
         * @param {?} date
         * @param {?} opts
         * @return {?}
         */
        function (date, opts) {
            return opts.locale.ordinal(callback.apply(null, arguments), token);
        });
    }
}
/**
 * @param {?} format
 * @return {?}
 */
function makeFormatFunction(format) {
    /** @type {?} */
    var array = format.match(formattingTokens);
    /** @type {?} */
    var length = array.length;
    /** @type {?} */
    var formatArr = new Array(length);
    for (var i = 0; i < length; i++) {
        formatArr[i] = formatTokenFunctions[array[i]]
            ? formatTokenFunctions[array[i]]
            : removeFormattingTokens(array[i]);
    }
    return (/**
     * @param {?} date
     * @param {?} locale
     * @param {?} isUTC
     * @param {?=} offset
     * @return {?}
     */
    function (date, locale, isUTC, offset) {
        if (offset === void 0) { offset = 0; }
        /** @type {?} */
        var output = '';
        for (var j = 0; j < length; j++) {
            output += isFunction(formatArr[j])
                ? ((/** @type {?} */ (formatArr[j]))).call(null, date, { format: format, locale: locale, isUTC: isUTC, offset: offset })
                : formatArr[j];
        }
        return output;
    });
}
/**
 * @param {?} input
 * @return {?}
 */
function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} y
 * @param {?=} m
 * @param {?=} d
 * @return {?}
 */
function createUTCDate(y, m, d) {
    /** @type {?} */
    var date = new Date(Date.UTC.apply(null, arguments));
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}
/**
 * @param {?=} y
 * @param {?=} m
 * @param {?=} d
 * @param {?=} h
 * @param {?=} M
 * @param {?=} s
 * @param {?=} ms
 * @return {?}
 */
function createDate(y, m, d, h, M, s, ms) {
    if (m === void 0) { m = 0; }
    if (d === void 0) { d = 1; }
    if (h === void 0) { h = 0; }
    if (M === void 0) { M = 0; }
    if (s === void 0) { s = 0; }
    if (ms === void 0) { ms = 0; }
    /** @type {?} */
    var date = new Date(y, m, d, h, M, s, ms);
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getHours(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCHours() : date.getHours();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getMinutes(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMinutes() : date.getMinutes();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getSeconds(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCSeconds() : date.getSeconds();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getMilliseconds(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
}
/**
 * @param {?} date
 * @return {?}
 */
function getTime(date) {
    return date.getTime();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDay(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCDay() : date.getDay();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDate(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCDate() : date.getDate();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getMonth(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMonth() : date.getMonth();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getFullYear(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCFullYear() : date.getFullYear();
}
/**
 * @param {?} date
 * @return {?}
 */
function unix(date) {
    return Math.floor(date.valueOf() / 1000);
}
/**
 * @param {?} date
 * @return {?}
 */
function getFirstDayOfMonth(date) {
    return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
}
/**
 * @param {?} date
 * @param {?} firstDayOfWeek
 * @return {?}
 */
function isFirstDayOfWeek(date, firstDayOfWeek) {
    return date.getDay() === firstDayOfWeek;
}
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
function isSameMonth(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
}
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
function isSameYear(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return getFullYear(date1) === getFullYear(date2);
}
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
function isSameDay(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return (isSameYear(date1, date2) &&
        isSameMonth(date1, date2) &&
        getDate(date1) === getDate(date2));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var match1 = /\d/;
//       0 - 9
/** @type {?} */
var match2 = /\d\d/;
//      00 - 99
/** @type {?} */
var match3 = /\d{3}/;
//     000 - 999
/** @type {?} */
var match4 = /\d{4}/;
//    0000 - 9999
/** @type {?} */
var match6 = /[+-]?\d{6}/;
// -999999 - 999999
/** @type {?} */
var match1to2 = /\d\d?/;
//       0 - 99
/** @type {?} */
var match3to4 = /\d\d\d\d?/;
//     999 - 9999
/** @type {?} */
var match5to6 = /\d\d\d\d\d\d?/;
//   99999 - 999999
/** @type {?} */
var match1to3 = /\d{1,3}/;
//       0 - 999
/** @type {?} */
var match1to4 = /\d{1,4}/;
//       0 - 9999
/** @type {?} */
var match1to6 = /[+-]?\d{1,6}/;
// -999999 - 999999
/** @type {?} */
var matchUnsigned = /\d+/;
//       0 - inf
/** @type {?} */
var matchSigned = /[+-]?\d+/;
// +00:00 -00:00 +0000 -0000 or Z
/** @type {?} */
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
// +00 -00 +00:00 -00:00 +0000 -0000 or Z
/** @type {?} */
var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
// 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
// tslint:disable-next-line
/** @type {?} */
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
/** @type {?} */
var regexes = {};
/**
 * @param {?} token
 * @param {?} regex
 * @param {?=} strictRegex
 * @return {?}
 */
function addRegexToken(token, regex, strictRegex) {
    if (isFunction(regex)) {
        regexes[token] = regex;
        return;
    }
    regexes[token] = (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    });
}
/**
 * @param {?} token
 * @param {?} locale
 * @return {?}
 */
function getParseRegexForToken(token, locale) {
    /** @type {?} */
    var _strict = false;
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }
    return regexes[token](_strict, locale);
}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
/**
 * @param {?} str
 * @return {?}
 */
function unescapeFormat(str) {
    // tslint:disable-next-line
    return regexEscape(str
        .replace('\\', '')
        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (/**
     * @param {?} matched
     * @param {?} p1
     * @param {?} p2
     * @param {?} p3
     * @param {?} p4
     * @return {?}
     */
    function (matched, p1, p2, p3, p4) { return p1 || p2 || p3 || p4; })));
}
/**
 * @param {?} str
 * @return {?}
 */
function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var tokens = {};
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
function addParseToken(token, callback) {
    /** @type {?} */
    var _token = isString(token) ? [token] : token;
    /** @type {?} */
    var func = callback;
    if (isNumber(callback)) {
        func = (/**
         * @param {?} input
         * @param {?} array
         * @param {?} config
         * @return {?}
         */
        function (input, array, config) {
            array[callback] = toInt(input);
            return config;
        });
    }
    if (isArray(_token) && isFunction(func)) {
        /** @type {?} */
        var i = void 0;
        for (i = 0; i < _token.length; i++) {
            tokens[_token[i]] = func;
        }
    }
}
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
function addWeekParseToken(token, callback) {
    addParseToken(token, (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @param {?} _token
     * @return {?}
     */
    function (input, array, config, _token) {
        config._w = config._w || {};
        return callback(input, config._w, config, _token);
    }));
}
/**
 * @param {?} token
 * @param {?} input
 * @param {?} config
 * @return {?}
 */
function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
    return config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initDayOfMonth() {
    // FORMATTING
    addFormatToken('D', ['DD', 2, false], 'Do', (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getDate(date, opts.isUTC)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('date', 'D');
    // PARSING
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
    }));
    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        array[DATE] = toInt(input.match(match1to2)[0]);
        return config;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
    };
}
/**
 * @param {?} config
 * @return {?}
 */
function getParsingFlags(config) {
    if (config._pf == null) {
        config._pf = defaultParsingFlags();
    }
    return config._pf;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// FORMATTING
/**
 * @param {?} date
 * @param {?} opts
 * @return {?}
 */
function getYear(date, opts) {
    return getFullYear(date, opts.isUTC).toString();
}
/**
 * @return {?}
 */
function initYear() {
    addFormatToken('Y', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        /** @type {?} */
        var y = getFullYear(date, opts.isUTC);
        return y <= 9999 ? y.toString(10) : "+" + y;
    }));
    addFormatToken(null, ['YY', 2, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return (getFullYear(date, opts.isUTC) % 100).toString(10);
    }));
    addFormatToken(null, ['YYYY', 4, false], null, getYear);
    addFormatToken(null, ['YYYYY', 5, false], null, getYear);
    addFormatToken(null, ['YYYYYY', 6, true], null, getYear);
    // ALIASES
    addUnitAlias('year', 'y');
    // PARSING
    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        array[YEAR] = input.length === 2 ? parseTwoDigitYear(input) : toInt(input);
        return config;
    }));
    addParseToken('YY', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        array[YEAR] = parseTwoDigitYear(input);
        return config;
    }));
    addParseToken('Y', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        array[YEAR] = parseInt(input, 10);
        return config;
    }));
}
/**
 * @param {?} input
 * @return {?}
 */
function parseTwoDigitYear(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
}
/**
 * @param {?} year
 * @return {?}
 */
function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
/**
 * @param {?} year
 * @return {?}
 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: this is duplicate, source in date-getters.ts
/**
 * @param {?} year
 * @param {?} month
 * @return {?}
 */
function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    /** @type {?} */
    var modMonth = mod(month, 12);
    /** @type {?} */
    var _year = year + (month - modMonth) / 12;
    return modMonth === 1
        ? isLeapYear(_year) ? 29 : 28
        : (31 - modMonth % 7 % 2);
}
/**
 * @return {?}
 */
function initMonth() {
    // FORMATTING
    addFormatToken('M', ['MM', 2, false], 'Mo', (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return (getMonth(date, opts.isUTC) + 1).toString(10);
    }));
    addFormatToken('MMM', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.locale.monthsShort(date, opts.format, opts.isUTC);
    }));
    addFormatToken('MMMM', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.locale.months(date, opts.format, opts.isUTC);
    }));
    // ALIASES
    addUnitAlias('month', 'M');
    // PARSING
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    }));
    addRegexToken('MMMM', (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    }));
    addParseToken(['M', 'MM'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        array[MONTH] = toInt(input) - 1;
        return config;
    }));
    addParseToken(['MMM', 'MMMM'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @param {?} token
     * @return {?}
     */
    function (input, array, config, token) {
        /** @type {?} */
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        }
        else {
            getParsingFlags(config).invalidMonth = !!input;
        }
        return config;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultTimeUnit = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    seconds: 0
};
/**
 * @param {?} date
 * @param {?} unit
 * @return {?}
 */
function shiftDate(date, unit) {
    /** @type {?} */
    var _unit = Object.assign({}, defaultTimeUnit, unit);
    /** @type {?} */
    var year = date.getFullYear() + (_unit.year || 0);
    /** @type {?} */
    var month = date.getMonth() + (_unit.month || 0);
    /** @type {?} */
    var day = date.getDate() + (_unit.day || 0);
    if (_unit.month && !_unit.day) {
        day = Math.min(day, daysInMonth(year, month));
    }
    return createDate(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
}
/**
 * @param {?} date
 * @param {?} unit
 * @return {?}
 */
function setFullDate(date, unit) {
    return createDate(getNum(date.getFullYear(), unit.year), getNum(date.getMonth(), unit.month), 1, // day, to avoid issue with wrong months selection at the end of current month (#5371)
    getNum(date.getHours(), unit.hour), getNum(date.getMinutes(), unit.minute), getNum(date.getSeconds(), unit.seconds), getNum(date.getMilliseconds(), unit.milliseconds));
}
/**
 * @param {?} def
 * @param {?=} num
 * @return {?}
 */
function getNum(def, num) {
    return isNumber(num) ? num : def;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setMonth(date, value, isUTC) {
    /** @type {?} */
    var dayOfMonth = Math.min(getDate(date), daysInMonth(getFullYear(date), value));
    isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setHours(date, value, isUTC) {
    isUTC ? date.setUTCHours(value) : date.setHours(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setMinutes(date, value, isUTC) {
    isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setSeconds(date, value, isUTC) {
    isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setMilliseconds(date, value, isUTC) {
    isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setDate(date, value, isUTC) {
    isUTC ? date.setUTCDate(value) : date.setDate(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @return {?}
 */
function setTime(date, value) {
    date.setTime(value);
    return date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// fastest way to clone date
// https://jsperf.com/clone-date-object2
/**
 * @param {?} date
 * @return {?}
 */
function cloneDate(date) {
    return new Date(date.getTime());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} unit
 * @param {?=} isUTC
 * @return {?}
 */
function startOf(date, unit, isUTC) {
    /** @type {?} */
    var _date = cloneDate(date);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (unit) {
        case 'year':
            setMonth(_date, 0, isUTC);
        /* falls through */
        case 'quarter':
        case 'month':
            setDate(_date, 1, isUTC);
        /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            setHours(_date, 0, isUTC);
        /* falls through */
        case 'hours':
            setMinutes(_date, 0, isUTC);
        /* falls through */
        case 'minutes':
            setSeconds(_date, 0, isUTC);
        /* falls through */
        case 'seconds':
            setMilliseconds(_date, 0, isUTC);
    }
    // weeks are a special case
    if (unit === 'week') {
        setLocaleDayOfWeek(_date, 0, { isUTC: isUTC });
    }
    if (unit === 'isoWeek') {
        setISODayOfWeek(_date, 1);
    }
    // quarters are also special
    if (unit === 'quarter') {
        setMonth(_date, Math.floor(getMonth(_date, isUTC) / 3) * 3, isUTC);
    }
    return _date;
}
/**
 * @param {?} date
 * @param {?} unit
 * @param {?=} isUTC
 * @return {?}
 */
function endOf(date, unit, isUTC) {
    /** @type {?} */
    var _unit = unit;
    // 'date' is an alias for 'day', so it should be considered as such.
    if (_unit === 'date') {
        _unit = 'day';
    }
    /** @type {?} */
    var start = startOf(date, _unit, isUTC);
    /** @type {?} */
    var _step = add(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
    /** @type {?} */
    var res = subtract(_step, 1, 'milliseconds', isUTC);
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initDayOfYear() {
    // FORMATTING
    addFormatToken('DDD', ['DDDD', 3, false], 'DDDo', (/**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return getDayOfYear(date)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('dayOfYear', 'DDD');
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        config._dayOfYear = toInt(input);
        return config;
    }));
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDayOfYear(date, isUTC) {
    /** @type {?} */
    var date1 = +startOf(date, 'day', isUTC);
    /** @type {?} */
    var date2 = +startOf(date, 'year', isUTC);
    /** @type {?} */
    var someDate = date1 - date2;
    /** @type {?} */
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.round(someDate / oneDay) + 1;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} year
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    /** @type {?} */
    var fwd = dow - doy + 7;
    // first-week day local weekday -- which local weekday is fwd
    /** @type {?} */
    var fwdlw = (createUTCDate(year, 0, fwd).getUTCDay() - dow + 7) % 7;
    return -fwdlw + fwd - 1;
}
// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
/**
 * @param {?} year
 * @param {?} week
 * @param {?} weekday
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    /** @type {?} */
    var localWeekday = (7 + weekday - dow) % 7;
    /** @type {?} */
    var weekOffset = firstWeekOffset(year, dow, doy);
    /** @type {?} */
    var dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
    /** @type {?} */
    var resYear;
    /** @type {?} */
    var resDayOfYear;
    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    }
    else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    }
    else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }
    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}
/**
 * @param {?} date
 * @param {?} dow
 * @param {?} doy
 * @param {?=} isUTC
 * @return {?}
 */
function weekOfYear(date, dow, doy, isUTC) {
    /** @type {?} */
    var weekOffset = firstWeekOffset(getFullYear(date, isUTC), dow, doy);
    /** @type {?} */
    var week = Math.floor((getDayOfYear(date, isUTC) - weekOffset - 1) / 7) + 1;
    /** @type {?} */
    var resWeek;
    /** @type {?} */
    var resYear;
    if (week < 1) {
        resYear = getFullYear(date, isUTC) - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    }
    else if (week > weeksInYear(getFullYear(date, isUTC), dow, doy)) {
        resWeek = week - weeksInYear(getFullYear(date, isUTC), dow, doy);
        resYear = getFullYear(date, isUTC) + 1;
    }
    else {
        resYear = getFullYear(date, isUTC);
        resWeek = week;
    }
    return {
        week: resWeek,
        year: resYear
    };
}
/**
 * @param {?} year
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
function weeksInYear(year, dow, doy) {
    /** @type {?} */
    var weekOffset = firstWeekOffset(year, dow, doy);
    /** @type {?} */
    var weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
/** @type {?} */
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
/** @type {?} */
var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
/** @type {?} */
var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
/** @type {?} */
var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
/** @type {?} */
var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
/** @type {?} */
var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
/** @type {?} */
var defaultOrdinal = '%d';
/** @type {?} */
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
/** @type {?} */
var defaultMonthsShortRegex = matchWord;
/** @type {?} */
var defaultMonthsRegex = matchWord;
var Locale = /** @class */ (function () {
    function Locale(config) {
        if (!!config) {
            this.set(config);
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    Locale.prototype.set = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var confKey;
        for (confKey in config) {
            if (!config.hasOwnProperty(confKey)) {
                continue;
            }
            /** @type {?} */
            var prop = config[(/** @type {?} */ (confKey))];
            /** @type {?} */
            var key = (/** @type {?} */ ((isFunction(prop) ? confKey : "_" + confKey)));
            this[key] = (/** @type {?} */ (prop));
        }
        this._config = config;
    };
    /**
     * @param {?} key
     * @param {?} date
     * @param {?} now
     * @return {?}
     */
    Locale.prototype.calendar = /**
     * @param {?} key
     * @param {?} date
     * @param {?} now
     * @return {?}
     */
    function (key, date, now) {
        /** @type {?} */
        var output = this._calendar[key] || this._calendar.sameElse;
        return isFunction(output) ? output.call(null, date, now) : output;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    Locale.prototype.longDateFormat = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var format = this._longDateFormat[key];
        /** @type {?} */
        var formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, (/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            return val.slice(1);
        }));
        return this._longDateFormat[key];
    };
    Object.defineProperty(Locale.prototype, "invalidDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._invalidDate;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._invalidDate = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} num
     * @param {?=} token
     * @return {?}
     */
    Locale.prototype.ordinal = /**
     * @param {?} num
     * @param {?=} token
     * @return {?}
     */
    function (num, token) {
        return this._ordinal.replace('%d', num.toString(10));
    };
    /**
     * @param {?} str
     * @return {?}
     */
    Locale.prototype.preparse = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    Locale.prototype.postformat = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str;
    };
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} str
     * @param {?} isFuture
     * @return {?}
     */
    Locale.prototype.relativeTime = /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} str
     * @param {?} isFuture
     * @return {?}
     */
    function (num, withoutSuffix, str, isFuture) {
        /** @type {?} */
        var output = this._relativeTime[str];
        return (isFunction(output)) ?
            output(num, withoutSuffix, str, isFuture) :
            output.replace(/%d/i, num.toString(10));
    };
    /**
     * @param {?} diff
     * @param {?} output
     * @return {?}
     */
    Locale.prototype.pastFuture = /**
     * @param {?} diff
     * @param {?} output
     * @return {?}
     */
    function (diff, output) {
        /** @type {?} */
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.months = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (isUTC === void 0) { isUTC = false; }
        if (!date) {
            return isArray(this._months)
                ? this._months
                : this._months.standalone;
        }
        if (isArray(this._months)) {
            return this._months[getMonth(date, isUTC)];
        }
        /** @type {?} */
        var key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
            ? 'format'
            : 'standalone';
        return this._months[key][getMonth(date, isUTC)];
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.monthsShort = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (isUTC === void 0) { isUTC = false; }
        if (!date) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
        }
        if (isArray(this._monthsShort)) {
            return this._monthsShort[getMonth(date, isUTC)];
        }
        /** @type {?} */
        var key = MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone';
        return this._monthsShort[key][getMonth(date, isUTC)];
    };
    /**
     * @param {?} monthName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    Locale.prototype.monthsParse = /**
     * @param {?} monthName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    function (monthName, format, strict) {
        /** @type {?} */
        var date;
        /** @type {?} */
        var regex;
        if (this._monthsParseExact) {
            return this.handleMonthStrictParse(monthName, format, strict);
        }
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        /** @type {?} */
        var i;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(Date.UTC(2000, i));
            if (strict && !this._longMonthsParse[i]) {
                /** @type {?} */
                var _months = this.months(date, '', true).replace('.', '');
                /** @type {?} */
                var _shortMonths = this.monthsShort(date, '', true).replace('.', '');
                this._longMonthsParse[i] = new RegExp("^" + _months + "$", 'i');
                this._shortMonthsParse[i] = new RegExp("^" + _shortMonths + "$", 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = "^" + this.months(date, '', true) + "|^" + this.monthsShort(date, '', true);
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && ((/** @type {?} */ (this._longMonthsParse[i]))).test(monthName)) {
                return i;
            }
            if (strict && format === 'MMM' && ((/** @type {?} */ (this._shortMonthsParse[i]))).test(monthName)) {
                return i;
            }
            if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    };
    /**
     * @param {?} isStrict
     * @return {?}
     */
    Locale.prototype.monthsRegex = /**
     * @param {?} isStrict
     * @return {?}
     */
    function (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this.computeMonthsParse();
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            }
            return this._monthsRegex;
        }
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    };
    /**
     * @param {?} isStrict
     * @return {?}
     */
    Locale.prototype.monthsShortRegex = /**
     * @param {?} isStrict
     * @return {?}
     */
    function (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this.computeMonthsParse();
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            }
            return this._monthsShortRegex;
        }
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    };
    /** Week */
    /**
     * Week
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.week = /**
     * Week
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, isUTC) {
        return weekOfYear(date, this._week.dow, this._week.doy, isUTC).week;
    };
    /**
     * @return {?}
     */
    Locale.prototype.firstDayOfWeek = /**
     * @return {?}
     */
    function () {
        return this._week.dow;
    };
    /**
     * @return {?}
     */
    Locale.prototype.firstDayOfYear = /**
     * @return {?}
     */
    function () {
        return this._week.doy;
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.weekdays = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return isArray(this._weekdays)
                ? this._weekdays
                : this._weekdays.standalone;
        }
        if (isArray(this._weekdays)) {
            return this._weekdays[getDay(date, isUTC)];
        }
        /** @type {?} */
        var _key = this._weekdays.isFormat.test(format)
            ? 'format'
            : 'standalone';
        return this._weekdays[_key][getDay(date, isUTC)];
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.weekdaysMin = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        return date ? this._weekdaysMin[getDay(date, isUTC)] : this._weekdaysMin;
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.weekdaysShort = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        return date ? this._weekdaysShort[getDay(date, isUTC)] : this._weekdaysShort;
    };
    // proto.weekdaysParse  =        localeWeekdaysParse;
    // proto.weekdaysParse  =        localeWeekdaysParse;
    /**
     * @param {?=} weekdayName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    Locale.prototype.weekdaysParse = 
    // proto.weekdaysParse  =        localeWeekdaysParse;
    /**
     * @param {?=} weekdayName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    function (weekdayName, format, strict) {
        /** @type {?} */
        var i;
        /** @type {?} */
        var regex;
        if (this._weekdaysParseExact) {
            return this.handleWeekStrictParse(weekdayName, format, strict);
        }
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // fix: here is the issue
            /** @type {?} */
            var date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(date, '', true).replace('.', '\.?') + "$", 'i');
                this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(date, '', true).replace('.', '\.?') + "$", 'i');
                this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(date, '', true).replace('.', '\.?') + "$", 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = "^" + this.weekdays(date, '', true) + "|^" + this.weekdaysShort(date, '', true) + "|^" + this.weekdaysMin(date, '', true);
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            if (!isArray(this._fullWeekdaysParse)
                || !isArray(this._shortWeekdaysParse)
                || !isArray(this._minWeekdaysParse)
                || !isArray(this._weekdaysParse)) {
                return;
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    };
    // proto.weekdaysRegex       =        weekdaysRegex;
    // proto.weekdaysRegex       =        weekdaysRegex;
    /**
     * @param {?} isStrict
     * @return {?}
     */
    Locale.prototype.weekdaysRegex = 
    // proto.weekdaysRegex       =        weekdaysRegex;
    /**
     * @param {?} isStrict
     * @return {?}
     */
    function (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            }
            else {
                return this._weekdaysRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = matchWord;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    };
    // proto.weekdaysShortRegex  =        weekdaysShortRegex;
    // proto.weekdaysMinRegex    =        weekdaysMinRegex;
    // proto.weekdaysShortRegex  =        weekdaysShortRegex;
    // proto.weekdaysMinRegex    =        weekdaysMinRegex;
    /**
     * @param {?=} isStrict
     * @return {?}
     */
    Locale.prototype.weekdaysShortRegex = 
    // proto.weekdaysShortRegex  =        weekdaysShortRegex;
    // proto.weekdaysMinRegex    =        weekdaysMinRegex;
    /**
     * @param {?=} isStrict
     * @return {?}
     */
    function (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            }
            else {
                return this._weekdaysShortRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = matchWord;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    };
    /**
     * @param {?=} isStrict
     * @return {?}
     */
    Locale.prototype.weekdaysMinRegex = /**
     * @param {?=} isStrict
     * @return {?}
     */
    function (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            }
            else {
                return this._weekdaysMinRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = matchWord;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    };
    /**
     * @param {?} input
     * @return {?}
     */
    Locale.prototype.isPM = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return input.toLowerCase().charAt(0) === 'p';
    };
    /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    Locale.prototype.meridiem = /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        }
        return isLower ? 'am' : 'AM';
    };
    /**
     * @param {?} key
     * @return {?}
     */
    Locale.prototype.formatLongDate = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
        /** @type {?} */
        var format = this._longDateFormat[key];
        /** @type {?} */
        var formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, (/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            return val.slice(1);
        }));
        return this._longDateFormat[key];
    };
    /**
     * @private
     * @param {?} monthName
     * @param {?} format
     * @param {?=} strict
     * @return {?}
     */
    Locale.prototype.handleMonthStrictParse = /**
     * @private
     * @param {?} monthName
     * @param {?} format
     * @param {?=} strict
     * @return {?}
     */
    function (monthName, format, strict) {
        /** @type {?} */
        var llc = monthName.toLocaleLowerCase();
        /** @type {?} */
        var i;
        /** @type {?} */
        var ii;
        /** @type {?} */
        var mom;
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = new Date(2000, i);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'MMM') {
                ii = ((/** @type {?} */ (this._shortMonthsParse))).indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            ii = ((/** @type {?} */ (this._longMonthsParse))).indexOf(llc);
            return ii !== -1 ? ii : null;
        }
        if (format === 'MMM') {
            ii = ((/** @type {?} */ (this._shortMonthsParse))).indexOf(llc);
            if (ii !== -1) {
                return ii;
            }
            ii = ((/** @type {?} */ (this._longMonthsParse))).indexOf(llc);
            return ii !== -1 ? ii : null;
        }
        ii = ((/** @type {?} */ (this._longMonthsParse))).indexOf(llc);
        if (ii !== -1) {
            return ii;
        }
        ii = ((/** @type {?} */ (this._shortMonthsParse))).indexOf(llc);
        return ii !== -1 ? ii : null;
    };
    /**
     * @private
     * @param {?} weekdayName
     * @param {?} format
     * @param {?} strict
     * @return {?}
     */
    Locale.prototype.handleWeekStrictParse = /**
     * @private
     * @param {?} weekdayName
     * @param {?} format
     * @param {?} strict
     * @return {?}
     */
    function (weekdayName, format, strict) {
        /** @type {?} */
        var ii;
        /** @type {?} */
        var llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            /** @type {?} */
            var i = void 0;
            for (i = 0; i < 7; ++i) {
                /** @type {?} */
                var date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
                this._minWeekdaysParse[i] = this.weekdaysMin(date).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(date).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(date, '').toLocaleLowerCase();
            }
        }
        if (!isArray(this._weekdaysParse)
            || !isArray(this._shortWeekdaysParse)
            || !isArray(this._minWeekdaysParse)) {
            return;
        }
        if (strict) {
            if (format === 'dddd') {
                ii = this._weekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else if (format === 'ddd') {
                ii = this._shortWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
        }
        else {
            if (format === 'dddd') {
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._shortWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else if (format === 'ddd') {
                ii = this._shortWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = this._minWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._shortWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    Locale.prototype.computeMonthsParse = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shortPieces = [];
        /** @type {?} */
        var longPieces = [];
        /** @type {?} */
        var mixedPieces = [];
        /** @type {?} */
        var date;
        /** @type {?} */
        var i;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(2000, i);
            shortPieces.push(this.monthsShort(date, ''));
            longPieces.push(this.months(date, ''));
            mixedPieces.push(this.months(date, ''));
            mixedPieces.push(this.monthsShort(date, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._monthsRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
        this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
    };
    /**
     * @private
     * @return {?}
     */
    Locale.prototype.computeWeekdaysParse = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var minPieces = [];
        /** @type {?} */
        var shortPieces = [];
        /** @type {?} */
        var longPieces = [];
        /** @type {?} */
        var mixedPieces = [];
        /** @type {?} */
        var i;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // let mom = createUTC([2000, 1]).day(i);
            /** @type {?} */
            var date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
            /** @type {?} */
            var minp = this.weekdaysMin(date);
            /** @type {?} */
            var shortp = this.weekdaysShort(date);
            /** @type {?} */
            var longp = this.weekdays(date);
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
        this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
        this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join('|') + ")", 'i');
    };
    return Locale;
}());
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function cmpLenRev(a, b) {
    return b.length - a.length;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultInvalidDate = 'Invalid date';
/** @type {?} */
var defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 1st is the first week of the year.
};
/** @type {?} */
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
/** @type {?} */
var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
};
/** @type {?} */
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} array1
 * @param {?} array2
 * @param {?} dontConvert
 * @return {?}
 */
function compareArrays(array1, array2, dontConvert) {
    /** @type {?} */
    var len = Math.min(array1.length, array2.length);
    /** @type {?} */
    var lengthDiff = Math.abs(array1.length - array2.length);
    /** @type {?} */
    var diffs = 0;
    /** @type {?} */
    var i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i])
            || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// FORMATTING
/**
 * @return {?}
 */
function initWeek() {
    addFormatToken('w', ['ww', 2, false], 'wo', (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getWeek(date, opts.locale)
            .toString(10);
    }));
    addFormatToken('W', ['WW', 2, false], 'Wo', (/**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return getISOWeek(date)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    // PARSING
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken(['w', 'ww', 'W', 'WW'], (/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */
    function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
        return config;
    }));
    // export function getSetWeek (input) {
    //   var week = this.localeData().week(this);
    //   return input == null ? week : this.add((input - week) * 7, 'd');
    // }
}
/**
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
function getWeek(date, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    return locale.week(date, isUTC);
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getISOWeek(date, isUTC) {
    return weekOfYear(date, 1, 4, isUTC).week;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// FORMATTING
/**
 * @return {?}
 */
function initWeekYear() {
    addFormatToken(null, ['gg', 2, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        // return this.weekYear() % 100;
        return (getWeekYear(date, opts.locale) % 100).toString();
    }));
    addFormatToken(null, ['GG', 2, false], null, (/**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // return this.isoWeekYear() % 100;
        return (getISOWeekYear(date) % 100).toString();
    }));
    addWeekYearFormatToken('gggg', _getWeekYearFormatCb);
    addWeekYearFormatToken('ggggg', _getWeekYearFormatCb);
    addWeekYearFormatToken('GGGG', _getISOWeekYearFormatCb);
    addWeekYearFormatToken('GGGGG', _getISOWeekYearFormatCb);
    // ALIASES
    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');
    // PARSING
    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], (/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */
    function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
        return config;
    }));
    addWeekParseToken(['gg', 'GG'], (/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */
    function (input, week, config, token) {
        week[token] = parseTwoDigitYear(input);
        return config;
    }));
}
/**
 * @param {?} token
 * @param {?} getter
 * @return {?}
 */
function addWeekYearFormatToken(token, getter) {
    addFormatToken(null, [token, token.length, false], null, getter);
}
/**
 * @param {?} date
 * @param {?} opts
 * @return {?}
 */
function _getWeekYearFormatCb(date, opts) {
    return getWeekYear(date, opts.locale).toString();
}
/**
 * @param {?} date
 * @return {?}
 */
function _getISOWeekYearFormatCb(date) {
    return getISOWeekYear(date).toString();
}
/**
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
function getWeekYear(date, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    return weekOfYear(date, locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC).year;
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getISOWeekYear(date, isUTC) {
    return weekOfYear(date, 1, 4, isUTC).year;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: add support for timezones
/**
 * @return {?}
 */
function initTimezone() {
    // FORMATTING
    addFormatToken('z', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.isUTC ? 'UTC' : '';
    }));
    addFormatToken('zz', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.isUTC ? 'Coordinated Universal Time' : '';
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initTimestamp() {
    // FORMATTING
    addFormatToken('X', null, null, (/**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return unix(date)
            .toString(10);
    }));
    addFormatToken('x', null, null, (/**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.valueOf()
            .toString(10);
    }));
    // PARSING
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
        return config;
    }));
    addParseToken('x', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        config._d = new Date(toInt(input));
        return config;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initSecond() {
    // FORMATTING
    addFormatToken('s', ['ss', 2, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getSeconds(date, opts.isUTC)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('second', 's');
    // PARSING
    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initQuarter() {
    // FORMATTING
    addFormatToken('Q', null, 'Qo', (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getQuarter(date, opts.isUTC)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('quarter', 'Q');
    // PARSING
    addRegexToken('Q', match1);
    addParseToken('Q', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        array[MONTH] = (toInt(input) - 1) * 3;
        return config;
    }));
}
// MOMENTS
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getQuarter(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return Math.ceil((getMonth(date, isUTC) + 1) / 3);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} token
 * @param {?} separator
 * @return {?}
 */
function addOffsetFormatToken(token, separator) {
    addFormatToken(token, null, null, (/**
     * @param {?} date
     * @param {?} config
     * @return {?}
     */
    function (date, config) {
        /** @type {?} */
        var offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
        /** @type {?} */
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    }));
}
/**
 * @return {?}
 */
function initOffset() {
    addOffsetFormatToken('Z', ':');
    addOffsetFormatToken('ZZ', '');
    // PARSING
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
        return config;
    }));
}
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
/** @type {?} */
var chunkOffset = /([\+\-]|\d\d)/gi;
/**
 * @param {?} matcher
 * @param {?} str
 * @return {?}
 */
function offsetFromString(matcher, str) {
    /** @type {?} */
    var matches = (str || '').match(matcher);
    if (matches === null) {
        return null;
    }
    /** @type {?} */
    var chunk = matches[matches.length - 1];
    /** @type {?} */
    var parts = chunk.match(chunkOffset) || ['-', '0', '0'];
    /** @type {?} */
    var minutes = parseInt(parts[1], 10) * 60 + toInt(parts[2]);
    /** @type {?} */
    var _min = parts[0] === '+' ? minutes : -minutes;
    return minutes === 0 ? 0 : _min;
}
// Return a moment from input, that is local/utc/zone equivalent to model.
/**
 * @param {?} input
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */
function cloneWithOffset(input, date, config) {
    if (config === void 0) { config = {}; }
    if (!config._isUTC) {
        return input;
    }
    /** @type {?} */
    var res = cloneDate(date);
    // todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000
    /** @type {?} */
    var offsetDiff = (config._offset || 0) * 60000;
    /** @type {?} */
    var diff = input.valueOf() - res.valueOf() + offsetDiff;
    // Use low-level api, because this fn is low-level api.
    res.setTime(res.valueOf() + diff);
    // todo: add timezone handling
    // hooks.updateOffset(res, false);
    return res;
}
/**
 * @param {?} date
 * @return {?}
 */
function getDateOffset(date) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(date.getTimezoneOffset() / 15) * 15;
}
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
// todo: it's from moment timezones
// hooks.updateOffset = function () {
// };
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
/**
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */
function getUTCOffset(date, config) {
    if (config === void 0) { config = {}; }
    /** @type {?} */
    var _offset = config._offset || 0;
    return config._isUTC ? _offset : getDateOffset(date);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initMinute() {
    // FORMATTING
    addFormatToken('m', ['mm', 2, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getMinutes(date, opts.isUTC)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('minute', 'm');
    // PARSING
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initMillisecond() {
    addFormatToken('S', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return (~~(getMilliseconds(date, opts.isUTC) / 100)).toString(10);
    }));
    addFormatToken(null, ['SS', 2, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return (~~(getMilliseconds(date, opts.isUTC) / 10)).toString(10);
    }));
    addFormatToken(null, ['SSS', 3, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return (getMilliseconds(date, opts.isUTC)).toString(10);
    }));
    addFormatToken(null, ['SSSS', 4, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 10).toString(10);
    }));
    addFormatToken(null, ['SSSSS', 5, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 100).toString(10);
    }));
    addFormatToken(null, ['SSSSSS', 6, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 1000).toString(10);
    }));
    addFormatToken(null, ['SSSSSSS', 7, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 10000).toString(10);
    }));
    addFormatToken(null, ['SSSSSSSS', 8, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 100000).toString(10);
    }));
    addFormatToken(null, ['SSSSSSSSS', 9, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 1000000).toString(10);
    }));
    // ALIASES
    addUnitAlias('millisecond', 'ms');
    // PARSING
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    /** @type {?} */
    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }
    /**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function parseMs(input, array, config) {
        array[MILLISECOND] = toInt(parseFloat("0." + input) * 1000);
        return config;
    }
    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initHour() {
    // FORMATTING
    // FORMATTING
    /**
     * @param {?} date
     * @param {?} isUTC
     * @return {?}
     */
    function hFormat(date, isUTC) {
        return getHours(date, isUTC) % 12 || 12;
    }
    /**
     * @param {?} date
     * @param {?} isUTC
     * @return {?}
     */
    function kFormat(date, isUTC) {
        return getHours(date, isUTC) || 24;
    }
    addFormatToken('H', ['HH', 2, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getHours(date, opts.isUTC)
            .toString(10);
    }));
    addFormatToken('h', ['hh', 2, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return hFormat(date, opts.isUTC)
            .toString(10);
    }));
    addFormatToken('k', ['kk', 2, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return kFormat(date, opts.isUTC)
            .toString(10);
    }));
    addFormatToken('hmm', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        /** @type {?} */
        var _h = hFormat(date, opts.isUTC);
        /** @type {?} */
        var _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        return "" + _h + _mm;
    }));
    addFormatToken('hmmss', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        /** @type {?} */
        var _h = hFormat(date, opts.isUTC);
        /** @type {?} */
        var _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        /** @type {?} */
        var _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
        return "" + _h + _mm + _ss;
    }));
    addFormatToken('Hmm', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        /** @type {?} */
        var _H = getHours(date, opts.isUTC);
        /** @type {?} */
        var _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        return "" + _H + _mm;
    }));
    addFormatToken('Hmmss', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        /** @type {?} */
        var _H = getHours(date, opts.isUTC);
        /** @type {?} */
        var _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        /** @type {?} */
        var _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
        return "" + _H + _mm + _ss;
    }));
    /**
     * @param {?} token
     * @param {?} lowercase
     * @return {?}
     */
    function meridiem(token, lowercase) {
        addFormatToken(token, null, null, (/**
         * @param {?} date
         * @param {?} opts
         * @return {?}
         */
        function (date, opts) {
            return opts.locale.meridiem(getHours(date, opts.isUTC), getMinutes(date, opts.isUTC), lowercase);
        }));
    }
    meridiem('a', true);
    meridiem('A', false);
    // ALIASES
    addUnitAlias('hour', 'h');
    // PARSING
    /**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        /** @type {?} */
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
        return config;
    }));
    addParseToken(['a', 'A'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
        return config;
    }));
    addParseToken(['h', 'hh'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
        return config;
    }));
    addParseToken('hmm', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        /** @type {?} */
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
        return config;
    }));
    addParseToken('hmmss', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        /** @type {?} */
        var pos1 = input.length - 4;
        /** @type {?} */
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
        return config;
    }));
    addParseToken('Hmm', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        /** @type {?} */
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        return config;
    }));
    addParseToken('Hmmss', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        /** @type {?} */
        var pos1 = input.length - 4;
        /** @type {?} */
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        return config;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var locales = {};
/** @type {?} */
var localeFamilies = {};
/** @type {?} */
var globalLocale;
/**
 * @param {?} key
 * @return {?}
 */
function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least,
// but move to the next array item if it's a more specific variant than the current root
/**
 * @param {?} names
 * @return {?}
 */
function chooseLocale(names) {
    /** @type {?} */
    var next;
    /** @type {?} */
    var locale;
    /** @type {?} */
    var i = 0;
    while (i < names.length) {
        /** @type {?} */
        var split = normalizeLocale(names[i]).split('-');
        /** @type {?} */
        var j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                // the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}
/**
 * @param {?} parentConfig
 * @param {?} childConfig
 * @return {?}
 */
function mergeConfigs(parentConfig, childConfig) {
    /** @type {?} */
    var res = Object.assign({}, parentConfig);
    for (var childProp in childConfig) {
        if (!hasOwnProp(childConfig, childProp)) {
            continue;
        }
        if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
            res[(/** @type {?} */ (childProp))] = {};
            Object.assign(res[childProp], parentConfig[childProp]);
            Object.assign(res[childProp], childConfig[childProp]);
        }
        else if (childConfig[childProp] != null) {
            res[(/** @type {?} */ (childProp))] = childConfig[childProp];
        }
        else {
            delete res[(/** @type {?} */ (childProp))];
        }
    }
    for (var parentProp in parentConfig) {
        if (hasOwnProp(parentConfig, parentProp) &&
            !hasOwnProp(childConfig, parentProp) &&
            isObject(parentConfig[(/** @type {?} */ (parentProp))])) {
            // make sure changes to properties don't modify parent config
            res[(/** @type {?} */ (parentProp))] = Object.assign({}, res[(/** @type {?} */ (parentProp))]);
        }
    }
    return res;
}
/**
 * @param {?} name
 * @return {?}
 */
function loadLocale(name) {
    // no way!
    /* var oldLocale = null;
     // TODO: Find a better way to register and load all the locales in Node
     if (!locales[name] && (typeof module !== 'undefined') &&
       module && module.exports) {
       try {
         oldLocale = globalLocale._abbr;
         var aliasedRequire = require;
         aliasedRequire('./locale/' + name);
         getSetGlobalLocale(oldLocale);
       } catch (e) {}
     }*/
    if (!locales[name]) {
        // tslint:disable-next-line
        console.error("Khronos locale error: please load locale \"" + name + "\" before using it");
        // throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
    }
    return locales[name];
}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
/**
 * @param {?=} key
 * @param {?=} values
 * @return {?}
 */
function getSetGlobalLocale(key, values) {
    /** @type {?} */
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else if (isString(key)) {
            data = defineLocale(key, values);
        }
        if (data) {
            globalLocale = data;
        }
    }
    return globalLocale && globalLocale._abbr;
}
/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */
function defineLocale(name, config) {
    if (config === null) {
        // useful for testing
        delete locales[name];
        globalLocale = getLocale('en');
        return null;
    }
    if (!config) {
        return;
    }
    /** @type {?} */
    var parentConfig = baseConfig;
    config.abbr = name;
    if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
        }
        else {
            if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({ name: name, config: config });
            return null;
        }
    }
    locales[name] = new Locale(mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
        localeFamilies[name].forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            defineLocale(x.name, x.config);
        }));
    }
    // backwards compat for now: also set the locale
    // make sure we set the locale AFTER all child locales have been
    // created, so we won't end up with the child locale set.
    getSetGlobalLocale(name);
    return locales[name];
}
/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */
function updateLocale(name, config) {
    /** @type {?} */
    var _config = config;
    if (_config != null) {
        /** @type {?} */
        var parentConfig = baseConfig;
        // MERGE
        /** @type {?} */
        var tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        _config = mergeConfigs(parentConfig, _config);
        /** @type {?} */
        var locale = new Locale(_config);
        locale.parentLocale = locales[name];
        locales[name] = locale;
        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    }
    else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            }
            else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}
// returns locale data
/**
 * @param {?=} key
 * @return {?}
 */
function getLocale(key) {
    setDefaultLocale();
    if (!key) {
        return globalLocale;
    }
    // let locale;
    /** @type {?} */
    var _key = isArray(key) ? key : [key];
    return chooseLocale(_key);
}
/**
 * @return {?}
 */
function listLocales() {
    return Object.keys(locales);
}
/**
 * @return {?}
 */
function setDefaultLocale() {
    if (locales["en"]) {
        return undefined;
    }
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            /** @type {?} */
            var b = num % 10;
            /** @type {?} */
            var output = toInt((num % 100) / 10) === 1
                ? 'th'
                : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return num + output;
        }
    });
    initWeek();
    initWeekYear();
    initYear();
    initTimezone();
    initTimestamp();
    initSecond();
    initQuarter();
    initOffset();
    initMonth();
    initMinute();
    initMillisecond();
    initHour();
    initDayOfYear();
    initDayOfWeek();
    initDayOfMonth();
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
var ɵ0 = /**
 * @param {?} mem
 * @param {?} order
 * @return {?}
 */
function (mem, order) {
    mem[order] = true;
    return mem;
};
/** @type {?} */
var orderingHash = ordering.reduce((ɵ0), {});
/**
 * @param {?} duration
 * @return {?}
 */
function isDurationValid(duration) {
    /** @type {?} */
    var durationKeys = Object.keys(duration);
    if (durationKeys
        .some((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return (key in orderingHash)
            && duration[key] === null
            || isNaN(duration[key]);
    }))) {
        return false;
    }
    // for (let key in duration) {
    //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
    //     return false;
    //   }
    // }
    /** @type {?} */
    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (duration[ordering[i]]) {
            // only allow non-integers for smallest unit
            if (unitHasDecimal) {
                return false;
            }
            if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }
    return true;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} number
 * @return {?}
 */
function absCeil(number) {
    return number < 0 ? Math.floor(number) : Math.ceil(number);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} dur
 * @return {?}
 */
function bubble(dur) {
    /** @type {?} */
    var milliseconds = dur._milliseconds;
    /** @type {?} */
    var days = dur._days;
    /** @type {?} */
    var months = dur._months;
    /** @type {?} */
    var data = dur._data;
    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
        (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }
    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;
    /** @type {?} */
    var seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    /** @type {?} */
    var minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    /** @type {?} */
    var hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);
    // convert days to months
    /** @type {?} */
    var monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));
    // 12 months -> 1 year
    /** @type {?} */
    var years = absFloor(months / 12);
    months %= 12;
    data.day = days;
    data.month = months;
    data.year = years;
    return dur;
}
/**
 * @param {?} day
 * @return {?}
 */
function daysToMonths(day) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return day * 4800 / 146097;
}
/**
 * @param {?} month
 * @return {?}
 */
function monthsToDays(month) {
    // the reverse of daysToMonths
    return month * 146097 / 4800;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var round = Math.round;
/** @type {?} */
var thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month
    M: 11 // months to year
};
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
/**
 * @param {?} str
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} isFuture
 * @param {?} locale
 * @return {?}
 */
function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
}
/**
 * @param {?} posNegDuration
 * @param {?} withoutSuffix
 * @param {?} locale
 * @return {?}
 */
function relativeTime(posNegDuration, withoutSuffix, locale) {
    /** @type {?} */
    var duration = createDuration(posNegDuration).abs();
    /** @type {?} */
    var seconds = round(duration.as('s'));
    /** @type {?} */
    var minutes = round(duration.as('m'));
    /** @type {?} */
    var hours = round(duration.as('h'));
    /** @type {?} */
    var days = round(duration.as('d'));
    /** @type {?} */
    var months = round(duration.as('M'));
    /** @type {?} */
    var years = round(duration.as('y'));
    /** @type {?} */
    var a = seconds <= thresholds.ss && ['s', seconds] ||
        seconds < thresholds.s && ['ss', seconds] ||
        minutes <= 1 && ['m'] ||
        minutes < thresholds.m && ['mm', minutes] ||
        hours <= 1 && ['h'] ||
        hours < thresholds.h && ['hh', hours] ||
        days <= 1 && ['d'] ||
        days < thresholds.d && ['dd', days] ||
        months <= 1 && ['M'] ||
        months < thresholds.M && ['MM', months] ||
        years <= 1 && ['y'] || ['yy', years];
    /** @type {?} */
    var b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
    // a[2] = withoutSuffix;
    // a[3] = +posNegDuration > 0;
    // a[4] = locale;
    return substituteTimeAgo.apply(null, b);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Duration = /** @class */ (function () {
    function Duration(duration, config) {
        if (config === void 0) { config = {}; }
        this._data = {};
        this._locale = getLocale();
        this._locale = config && config._locale || getLocale();
        // const normalizedInput = normalizeObjectUnits(duration);
        /** @type {?} */
        var normalizedInput = duration;
        /** @type {?} */
        var years = normalizedInput.year || 0;
        /** @type {?} */
        var quarters = normalizedInput.quarter || 0;
        /** @type {?} */
        var months = normalizedInput.month || 0;
        /** @type {?} */
        var weeks = normalizedInput.week || 0;
        /** @type {?} */
        var days = normalizedInput.day || 0;
        /** @type {?} */
        var hours = normalizedInput.hours || 0;
        /** @type {?} */
        var minutes = normalizedInput.minutes || 0;
        /** @type {?} */
        var seconds = normalizedInput.seconds || 0;
        /** @type {?} */
        var milliseconds = normalizedInput.milliseconds || 0;
        this._isValid = isDurationValid(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1000 +
            minutes * 60 * 1000 + // 1000 * 60
            hours * 1000 * 60 * 60; // using 1000 * 60 * 60
        // instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;
        // this._data = {};
        // this._locale = getLocale();
        // this._bubble();
        return bubble(this);
    }
    /**
     * @return {?}
     */
    Duration.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return this._isValid;
    };
    /**
     * @param {?=} withSuffix
     * @return {?}
     */
    Duration.prototype.humanize = /**
     * @param {?=} withSuffix
     * @return {?}
     */
    function (withSuffix) {
        // throw new Error(`TODO: implement`);
        if (!this.isValid()) {
            return this.localeData().invalidDate;
        }
        /** @type {?} */
        var locale = this.localeData();
        /** @type {?} */
        var output = relativeTime(this, !withSuffix, locale);
        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
    };
    /**
     * @return {?}
     */
    Duration.prototype.localeData = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    /**
     * @param {?=} localeKey
     * @return {?}
     */
    Duration.prototype.locale = /**
     * @param {?=} localeKey
     * @return {?}
     */
    function (localeKey) {
        if (!localeKey) {
            return this._locale._abbr;
        }
        this._locale = getLocale(localeKey) || this._locale;
        return this;
    };
    /**
     * @return {?}
     */
    Duration.prototype.abs = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var mathAbs = Math.abs;
        /** @type {?} */
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.month = mathAbs(data.month);
        data.year = mathAbs(data.year);
        return this;
    };
    /**
     * @param {?} _units
     * @return {?}
     */
    Duration.prototype.as = /**
     * @param {?} _units
     * @return {?}
     */
    function (_units) {
        if (!this.isValid()) {
            return NaN;
        }
        /** @type {?} */
        var days;
        /** @type {?} */
        var months;
        /** @type {?} */
        var milliseconds = this._milliseconds;
        /** @type {?} */
        var units = normalizeUnits(_units);
        if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        }
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week':
                return days / 7 + milliseconds / 6048e5;
            case 'day':
                return days + milliseconds / 864e5;
            case 'hours':
                return days * 24 + milliseconds / 36e5;
            case 'minutes':
                return days * 1440 + milliseconds / 6e4;
            case 'seconds':
                return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'milliseconds':
                return Math.floor(days * 864e5) + milliseconds;
            default:
                throw new Error("Unknown unit " + units);
        }
    };
    /**
     * @return {?}
     */
    Duration.prototype.valueOf = /**
     * @return {?}
     */
    function () {
        if (!this.isValid()) {
            return NaN;
        }
        return (this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6);
    };
    return Duration;
}());
/**
 * @param {?} obj
 * @return {?}
 */
function isDuration(obj) {
    return obj instanceof Duration;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function isValid(config) {
    if (config._isValid == null) {
        /** @type {?} */
        var flags = getParsingFlags(config);
        /** @type {?} */
        var parsedParts = Array.prototype.some.call(flags.parsedDateParts, (/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            return i != null;
        }));
        /** @type {?} */
        var isNowValid = !isNaN(config._d && config._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));
        if (config._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }
        if (Object.isFrozen == null || !Object.isFrozen(config)) {
            config._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return config._isValid;
}
/**
 * @param {?} config
 * @param {?=} flags
 * @return {?}
 */
function createInvalid(config, flags) {
    config._d = new Date(NaN);
    Object.assign(getParsingFlags(config), flags || { userInvalidated: true });
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
function markInvalid(config) {
    config._isValid = false;
    return config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
// tslint:disable-next-line
/** @type {?} */
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
// tslint:disable-next-line
/** @type {?} */
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
/** @type {?} */
var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
/** @type {?} */
var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/, true],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/, true],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/, true],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/, true],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/, true],
    ['YYYYMMDD', /\d{8}/, true],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/, true],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/, true]
];
// iso time formats and regexes
/** @type {?} */
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];
/** @type {?} */
var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
/** @type {?} */
var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};
// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
// tslint:disable-next-line
/** @type {?} */
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
// date from iso format
/**
 * @param {?} config
 * @return {?}
 */
function configFromISO(config) {
    if (!isString(config._i)) {
        return config;
    }
    /** @type {?} */
    var input = config._i;
    /** @type {?} */
    var match = extendedIsoRegex.exec(input) || basicIsoRegex.exec(input);
    /** @type {?} */
    var allowTime;
    /** @type {?} */
    var dateFormat;
    /** @type {?} */
    var timeFormat;
    /** @type {?} */
    var tzFormat;
    if (!match) {
        config._isValid = false;
        return config;
    }
    // getParsingFlags(config).iso = true;
    /** @type {?} */
    var i;
    /** @type {?} */
    var l;
    for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
        }
    }
    if (dateFormat == null) {
        config._isValid = false;
        return config;
    }
    if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
            if (isoTimes[i][1].exec(match[3])) {
                // match[2] should be 'T' or space
                timeFormat = (match[2] || ' ') + isoTimes[i][0];
                break;
            }
        }
        if (timeFormat == null) {
            config._isValid = false;
            return config;
        }
    }
    if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return config;
    }
    if (match[4]) {
        if (tzRegex.exec(match[4])) {
            tzFormat = 'Z';
        }
        else {
            config._isValid = false;
            return config;
        }
    }
    config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
    return configFromStringAndFormat(config);
}
// tslint:disable-next-line
/**
 * @param {?} yearStr
 * @param {?} monthStr
 * @param {?} dayStr
 * @param {?} hourStr
 * @param {?} minuteStr
 * @param {?} secondStr
 * @return {?}
 */
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    /** @type {?} */
    var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];
    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }
    return result;
}
/**
 * @param {?} yearStr
 * @return {?}
 */
function untruncateYear(yearStr) {
    /** @type {?} */
    var year = parseInt(yearStr, 10);
    return year <= 49 ? year + 2000 : year;
}
/**
 * @param {?} str
 * @return {?}
 */
function preprocessRFC2822(str) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return str
        .replace(/\([^)]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ').trim();
}
/**
 * @param {?} weekdayStr
 * @param {?} parsedInput
 * @param {?} config
 * @return {?}
 */
function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        /** @type {?} */
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr);
        /** @type {?} */
        var weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}
/**
 * @param {?} obsOffset
 * @param {?} militaryOffset
 * @param {?} numOffset
 * @return {?}
 */
function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    }
    else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    }
    else {
        /** @type {?} */
        var hm = parseInt(numOffset, 10);
        /** @type {?} */
        var m = hm % 100;
        /** @type {?} */
        var h = (hm - m) / 100;
        return h * 60 + m;
    }
}
// date and time from ref 2822 format
/**
 * @param {?} config
 * @return {?}
 */
function configFromRFC2822(config) {
    if (!isString(config._i)) {
        return config;
    }
    /** @type {?} */
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (!match) {
        return markInvalid(config);
    }
    /** @type {?} */
    var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
    if (!checkWeekday(match[1], parsedArray, config)) {
        return config;
    }
    config._a = parsedArray;
    config._tzm = calculateOffset(match[8], match[9], match[10]);
    config._d = createUTCDate.apply(null, config._a);
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    getParsingFlags(config).rfc2822 = true;
    return config;
}
// date from iso format or fallback
/**
 * @param {?} config
 * @return {?}
 */
function configFromString(config) {
    if (!isString(config._i)) {
        return config;
    }
    /** @type {?} */
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return config;
    }
    // todo: update logic processing
    // isISO -> configFromISO
    // isRFC -> configFromRFC
    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    }
    else {
        return config;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    }
    else {
        return config;
    }
    // Final attempt, use Input Fallback
    // hooks.createFromInputFallback(config);
    return createInvalid(config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} format
 * @param {?=} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
function formatDate(date, format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    /** @type {?} */
    var _locale = getLocale(locale || 'en');
    if (!_locale) {
        throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
    }
    /** @type {?} */
    var _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
    /** @type {?} */
    var output = formatMoment(date, _format, _locale, isUTC, offset);
    if (!output) {
        return output;
    }
    return _locale.postformat(output);
}
// format date using native date object
/**
 * @param {?} date
 * @param {?} _format
 * @param {?} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
function formatMoment(date, _format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    if (!isDateValid(date)) {
        return locale.invalidDate;
    }
    /** @type {?} */
    var format = expandFormat(_format, locale);
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](date, locale, isUTC, offset);
}
/**
 * @param {?} _format
 * @param {?} locale
 * @return {?}
 */
function expandFormat(_format, locale) {
    /** @type {?} */
    var format = _format;
    /** @type {?} */
    var i = 5;
    /** @type {?} */
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    /** @type {?} */
    var replaceLongDateFormatTokens = (/**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return locale.formatLongDate(input) || input;
    });
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }
    return format;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Pick the first defined of two or three arguments.
/**
 * @template T
 * @param {?=} a
 * @param {?=} b
 * @param {?=} c
 * @return {?}
 */
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function currentDateArray(config) {
    /** @type {?} */
    var nowValue = new Date();
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
/**
 * @param {?} config
 * @return {?}
 */
function configFromArray(config) {
    /** @type {?} */
    var input = [];
    /** @type {?} */
    var i;
    /** @type {?} */
    var date;
    /** @type {?} */
    var currentDate;
    /** @type {?} */
    var expectedWeekday;
    /** @type {?} */
    var yearToUse;
    if (config._d) {
        return config;
    }
    currentDate = currentDateArray(config);
    // compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }
    // if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }
        date = new Date(Date.UTC(yearToUse, 0, config._dayOfYear));
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }
    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }
    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }
    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
        config._a[MINUTE] === 0 &&
        config._a[SECOND] === 0 &&
        config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
    }
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
function dayOfYearFromWeekInfo(config) {
    /** @type {?} */
    var w;
    /** @type {?} */
    var weekYear;
    /** @type {?} */
    var week;
    /** @type {?} */
    var weekday;
    /** @type {?} */
    var dow;
    /** @type {?} */
    var doy;
    /** @type {?} */
    var temp;
    /** @type {?} */
    var weekdayOverflow;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;
        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(new Date(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    }
    else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        /** @type {?} */
        var curWeek = weekOfYear(new Date(), dow, doy);
        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
        // Default to current week.
        week = defaults(w.w, curWeek.week);
        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        }
        else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        }
        else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    }
    else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    }
    else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
    return config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function checkOverflow(config) {
    /** @type {?} */
    var overflow;
    /** @type {?} */
    var a = config._a;
    if (a && getParsingFlags(config).overflow === -2) {
        // todo: fix this sh*t
        overflow =
            a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
                a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                    a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                        a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE :
                            a[SECOND] < 0 || a[SECOND] > 59 ? SECOND :
                                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                                    -1;
        if (getParsingFlags(config)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(config)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(config)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }
        getParsingFlags(config).overflow = overflow;
    }
    return config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// constant that refers to the ISO standard
// hooks.ISO_8601 = function () {};
/** @type {?} */
var ISO_8601 = 'ISO_8601';
// constant that refers to the RFC 2822 form
// hooks.RFC_2822 = function () {};
/** @type {?} */
var RFC_2822 = 'RFC_2822';
// date from string and format string
/**
 * @param {?} config
 * @return {?}
 */
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === ISO_8601) {
        return configFromISO(config);
    }
    if (config._f === RFC_2822) {
        return configFromRFC2822(config);
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    if (isArray(config._f) || (!config._i && config._i !== 0)) {
        return config;
    }
    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    /** @type {?} */
    var input = config._i.toString();
    /** @type {?} */
    var totalParsedInputLength = 0;
    /** @type {?} */
    var inputLength = input.length;
    /** @type {?} */
    var tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    /** @type {?} */
    var i;
    /** @type {?} */
    var token;
    /** @type {?} */
    var parsedInput;
    /** @type {?} */
    var skipped;
    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (input.match(getParseRegexForToken(token, config._locale)) || [])[0];
        if (parsedInput) {
            skipped = input.substr(0, input.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            input = input.slice(input.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }
    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = inputLength - totalParsedInputLength;
    if (input.length > 0) {
        getParsingFlags(config).unusedInput.push(input);
    }
    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = void 0;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    configFromArray(config);
    return checkOverflow(config);
}
/**
 * @param {?} locale
 * @param {?} _hour
 * @param {?} meridiem
 * @return {?}
 */
function meridiemFixWrap(locale, _hour, meridiem) {
    /** @type {?} */
    var hour = _hour;
    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    }
    if (locale.isPM == null) {
        // this is not supposed to happen
        return hour;
    }
    // Fallback
    /** @type {?} */
    var isPm = locale.isPM(meridiem);
    if (isPm && hour < 12) {
        hour += 12;
    }
    if (!isPm && hour === 12) {
        hour = 0;
    }
    return hour;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// date from string and array of format strings
/**
 * @param {?} config
 * @return {?}
 */
function configFromStringAndArray(config) {
    /** @type {?} */
    var tempConfig;
    /** @type {?} */
    var bestMoment;
    /** @type {?} */
    var scoreToBeat;
    /** @type {?} */
    var currentScore;
    if (!config._f || config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        return createInvalid(config);
    }
    /** @type {?} */
    var i;
    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = Object.assign({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);
        if (!isValid(tempConfig)) {
            continue;
        }
        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;
        // or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;
        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }
    return Object.assign(config, bestMoment || tempConfig);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function configFromObject(config) {
    if (config._d) {
        return config;
    }
    /** @type {?} */
    var input = config._i;
    if (isObject(input)) {
        /** @type {?} */
        var i = normalizeObjectUnits((/** @type {?} */ (input)));
        config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds]
            // todo: obsolete -> remove it
            .map((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; }));
    }
    return configFromArray(config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function createFromConfig(config) {
    /** @type {?} */
    var res = checkOverflow(prepareConfig(config));
    // todo: remove, in moment.js it's never called cuz of moment constructor
    res._d = new Date(res._d != null ? res._d.getTime() : NaN);
    if (!isValid(Object.assign({}, res, { _isValid: null }))) {
        res._d = new Date(NaN);
    }
    // todo: update offset
    /*if (res._nextDay) {
      // Adding is smart enough around DST
      res._d = add(res._d, 1, 'day');
      res._nextDay = undefined;
    }*/
    return res;
}
/**
 * @param {?} config
 * @return {?}
 */
function prepareConfig(config) {
    /** @type {?} */
    var input = config._i;
    /** @type {?} */
    var format = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || (format === undefined && input === '')) {
        return createInvalid(config, { nullInput: true });
    }
    if (isString(input)) {
        config._i = input = config._locale.preparse(input);
    }
    if (isDate(input)) {
        config._d = cloneDate(input);
        return config;
    }
    // todo: add check for recursion
    if (isArray(format)) {
        configFromStringAndArray(config);
    }
    else if (format) {
        configFromStringAndFormat(config);
    }
    else {
        configFromInput(config);
    }
    if (!isValid(config)) {
        config._d = null;
    }
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
function configFromInput(config) {
    /** @type {?} */
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date();
    }
    else if (isDate(input)) {
        config._d = cloneDate(input);
    }
    else if (isString(input)) {
        configFromString(config);
    }
    else if (isArray(input) && input.length) {
        /** @type {?} */
        var _arr = input.slice(0);
        config._a = _arr.map((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; }));
        configFromArray(config);
    }
    else if (isObject(input)) {
        configFromObject(config);
    }
    else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    }
    else {
        //   hooks.createFromInputFallback(config);
        return createInvalid(config);
    }
    return config;
}
/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
    /** @type {?} */
    var config = {};
    /** @type {?} */
    var _input = input;
    // params switch -> skip; test it well
    // if (localeKey === true || localeKey === false) {
    //     strict = localeKey;
    //     localeKey = undefined;
    // }
    // todo: fail fast and return not valid date
    if ((isObject(_input) && isObjectEmpty(_input)) || (isArray(_input) && _input.length === 0)) {
        _input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    // config._isAMomentObject = true;
    config._useUTC = config._isUTC = isUTC;
    config._l = localeKey;
    config._i = _input;
    config._f = format;
    config._strict = strict;
    return createFromConfig(config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
function parseDate(input, format, localeKey, strict, isUTC) {
    if (isDate(input)) {
        return input;
    }
    /** @type {?} */
    var config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
    return config._d;
}
/**
 * @param {?} date
 * @return {?}
 */
function utcAsLocal(date) {
    if (!(date instanceof Date)) {
        return null;
    }
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} num
 * @return {?}
 */
function absRound(num) {
    return num < 0 ? Math.round(num * -1) * -1 : Math.round(num);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
function isAfter(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() > date2.valueOf();
    }
    return date2.valueOf() < startOf(date1, units).valueOf();
}
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
function isBefore(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() < date2.valueOf();
    }
    return endOf(date1, units).valueOf() < date2.valueOf();
}
/**
 * @param {?} date
 * @param {?} daysDisabled
 * @return {?}
 */
function isDisabledDay(date, daysDisabled) {
    if (daysDisabled === undefined || !daysDisabled || !daysDisabled.length) {
        return false;
    }
    return daysDisabled.some((/**
     * @param {?} day
     * @return {?}
     */
    function (day) { return day === date.getDay(); }));
}
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
function isSame(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() === date2.valueOf();
    }
    /** @type {?} */
    var inputMs = date2.valueOf();
    return (startOf(date1, units).valueOf() <= inputMs &&
        inputMs <= endOf(date1, units).valueOf());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
// tslint:disable-next-line
/** @type {?} */
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
/**
 * @param {?=} input
 * @param {?=} key
 * @param {?=} config
 * @return {?}
 */
function createDuration(input, key, config) {
    if (config === void 0) { config = {}; }
    /** @type {?} */
    var duration = convertDuration(input, key);
    // matching against regexp is expensive, do it on demand
    return new Duration(duration, config);
}
/**
 * @param {?} input
 * @param {?} key
 * @return {?}
 */
function convertDuration(input, key) {
    var _a;
    // checks for null or undefined
    if (input == null) {
        return {};
    }
    if (isDuration(input)) {
        return {
            milliseconds: input._milliseconds,
            day: input._days,
            month: input._months
        };
    }
    if (isNumber(input)) {
        // duration = {};
        return key ? (_a = {}, _a[key] = input, _a) : { milliseconds: input };
    }
    if (isString(input)) {
        /** @type {?} */
        var match = aspNetRegex.exec(input);
        if (match) {
            /** @type {?} */
            var sign = (match[1] === '-') ? -1 : 1;
            return {
                year: 0,
                day: toInt(match[DATE]) * sign,
                hours: toInt(match[HOUR]) * sign,
                minutes: toInt(match[MINUTE]) * sign,
                seconds: toInt(match[SECOND]) * sign,
                // the millisecond decimal point is included in the match
                milliseconds: toInt(absRound(toInt(match[MILLISECOND]) * 1000)) * sign
            };
        }
        match = isoRegex.exec(input);
        if (match) {
            /** @type {?} */
            var sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
            return {
                year: parseIso(match[2], sign),
                month: parseIso(match[3], sign),
                week: parseIso(match[4], sign),
                day: parseIso(match[5], sign),
                hours: parseIso(match[6], sign),
                minutes: parseIso(match[7], sign),
                seconds: parseIso(match[8], sign)
            };
        }
    }
    if (isObject(input) && ('from' in input || 'to' in input)) {
        /** @type {?} */
        var diffRes = momentsDifference(parseDate(input.from), parseDate(input.to));
        return {
            milliseconds: diffRes.milliseconds,
            month: diffRes.months
        };
    }
    return input;
}
// createDuration.fn = Duration.prototype;
// createDuration.invalid = invalid;
/**
 * @param {?} inp
 * @param {?} sign
 * @return {?}
 */
function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    /** @type {?} */
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}
/**
 * @param {?} base
 * @param {?} other
 * @return {?}
 */
function positiveMomentsDifference(base, other) {
    /** @type {?} */
    var res = { milliseconds: 0, months: 0 };
    res.months = getMonth(other) - getMonth(base) +
        (getFullYear(other) - getFullYear(base)) * 12;
    /** @type {?} */
    var _basePlus = add(cloneDate(base), res.months, 'month');
    if (isAfter(_basePlus, other)) {
        --res.months;
    }
    res.milliseconds = +other - +(add(cloneDate(base), res.months, 'month'));
    return res;
}
/**
 * @param {?} base
 * @param {?} other
 * @return {?}
 */
function momentsDifference(base, other) {
    if (!(isDateValid(base) && isDateValid(other))) {
        return { milliseconds: 0, months: 0 };
    }
    /** @type {?} */
    var res;
    /** @type {?} */
    var _other = cloneWithOffset(other, base, { _offset: base.getTimezoneOffset() });
    if (isBefore(base, _other)) {
        res = positiveMomentsDifference(base, _other);
    }
    else {
        res = positiveMomentsDifference(_other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} val
 * @param {?} period
 * @param {?=} isUTC
 * @return {?}
 */
function add(date, val, period, isUTC) {
    /** @type {?} */
    var dur = createDuration(val, period);
    return addSubtract(date, dur, 1, isUTC);
}
/**
 * @param {?} date
 * @param {?} val
 * @param {?} period
 * @param {?=} isUTC
 * @return {?}
 */
function subtract(date, val, period, isUTC) {
    /** @type {?} */
    var dur = createDuration(val, period);
    return addSubtract(date, dur, -1, isUTC);
}
/**
 * @param {?} date
 * @param {?} duration
 * @param {?} isAdding
 * @param {?=} isUTC
 * @return {?}
 */
function addSubtract(date, duration, isAdding, isUTC) {
    /** @type {?} */
    var milliseconds = duration._milliseconds;
    /** @type {?} */
    var days = absRound(duration._days);
    /** @type {?} */
    var months = absRound(duration._months);
    // todo: add timezones support
    // const _updateOffset = updateOffset == null ? true : updateOffset;
    if (months) {
        setMonth(date, getMonth(date, isUTC) + months * isAdding, isUTC);
    }
    if (days) {
        setDate(date, getDate(date, isUTC) + days * isAdding, isUTC);
    }
    if (milliseconds) {
        setTime(date, getTime(date) + milliseconds * isAdding);
    }
    return cloneDate(date);
    // todo: add timezones support
    // if (_updateOffset) {
    //   hooks.updateOffset(date, days || months);
    // }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initDayOfWeek() {
    // FORMATTING
    addFormatToken('d', null, 'do', (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getDay(date, opts.isUTC)
            .toString(10);
    }));
    addFormatToken('dd', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
    }));
    addFormatToken('ddd', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
    }));
    addFormatToken('dddd', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.locale.weekdays(date, opts.format, opts.isUTC);
    }));
    addFormatToken('e', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getLocaleDayOfWeek(date, opts.locale, opts.isUTC)
            .toString(10);
        // return getDay(date, opts.isUTC).toString(10);
    }));
    addFormatToken('E', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getISODayOfWeek(date, opts.isUTC)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    // PARSING
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    }));
    addRegexToken('ddd', (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    }));
    addRegexToken('dddd', (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    }));
    addWeekParseToken(['dd', 'ddd', 'dddd'], (/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */
    function (input, week, config, token) {
        /** @type {?} */
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        }
        else {
            getParsingFlags(config).invalidWeekday = !!input;
        }
        return config;
    }));
    addWeekParseToken(['d', 'e', 'E'], (/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */
    function (input, week, config, token) {
        week[token] = toInt(input);
        return config;
    }));
}
// HELPERS
/**
 * @param {?} input
 * @param {?} locale
 * @return {?}
 */
function parseWeekday(input, locale) {
    if (!isString(input)) {
        return input;
    }
    /** @type {?} */
    var _num = parseInt(input, 10);
    if (!isNaN(_num)) {
        return _num;
    }
    /** @type {?} */
    var _weekDay = locale.weekdaysParse(input);
    if (isNumber(_weekDay)) {
        return _weekDay;
    }
    return null;
}
/**
 * @param {?} input
 * @param {?=} locale
 * @return {?}
 */
function parseIsoWeekday(input, locale) {
    if (locale === void 0) { locale = getLocale(); }
    if (isString(input)) {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNumber(input) && isNaN(input) ? null : input;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
function setDayOfWeek(date, input, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    /** @type {?} */
    var day = getDay(date, isUTC);
    /** @type {?} */
    var _input = parseWeekday(input, locale);
    return add(date, _input - day, 'day');
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDayOfWeek(date, isUTC) {
    return getDay(date, isUTC);
}
/**
 * ****************************************
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
// todo: utc
// getSetLocaleDayOfWeek
function getLocaleDayOfWeek(date, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */
function setLocaleDayOfWeek(date, input, opts) {
    if (opts === void 0) { opts = {}; }
    /** @type {?} */
    var weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
    return add(date, input - weekday, 'day');
}
// getSetISODayOfWeek
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getISODayOfWeek(date, isUTC) {
    return getDay(date, isUTC) || 7;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */
function setISODayOfWeek(date, input, opts) {
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    if (opts === void 0) { opts = {}; }
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    /** @type {?} */
    var weekday = parseIsoWeekday(input, opts.locale);
    return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi
/** @type {?} */
var symbolMap = {
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
    0: '٠'
};
/** @type {?} */
var numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};
/** @type {?} */
var pluralForm = (/**
 * @param {?} num
 * @return {?}
 */
function (num) {
    return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
});
/** @type {?} */
var plurals = {
    s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
/** @type {?} */
var pluralize = (/**
 * @param {?} u
 * @return {?}
 */
function (u) {
    return (/**
     * @param {?} num
     * @param {?} withoutSuffix
     * @return {?}
     */
    function (num, withoutSuffix) {
        /** @type {?} */
        var f = pluralForm(num);
        /** @type {?} */
        var str = plurals[u][pluralForm(num)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return ((/** @type {?} */ (str))).replace(/%d/i, num.toString());
    });
});
/** @type {?} */
var months = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
];
/** @type {?} */
var arLocale = {
    abbr: 'ar',
    months: months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'D/\u200FM/\u200FYYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return 'م' === input;
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        }
        else {
            return 'م';
        }
    },
    calendar: {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'بعد %s',
        past: 'منذ %s',
        s: pluralize('s'),
        ss: pluralize('s'),
        m: pluralize('m'),
        mm: pluralize('m'),
        h: pluralize('h'),
        hh: pluralize('h'),
        d: pluralize('d'),
        dd: pluralize('d'),
        M: pluralize('M'),
        MM: pluralize('M'),
        y: pluralize('y'),
        yy: pluralize('y')
    },
    preparse: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (/**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            return numberMap[match];
        })).replace(/،/g, ',');
    },
    postformat: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/\d/g, (/**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            return symbolMap[match];
        })).replace(/,/g, '،');
    },
    week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Iskren Ivov Chernev : https://github.com/ichernev
//! author : Kunal Marwaha : https://github.com/marwahaha
//! author : Matt Grande : https://github.com/mattgrande
//! author : Isaac Cambron : https://github.com/icambron
//! author : Venelin Manchev : https://github.com/vmanchev
var ɵ0$1 = /**
 * @param {?} d
 * @return {?}
 */
function (d) {
    switch (d) {
        case 0:
        case 3:
        case 6:
            return '[В изминалата] dddd [в] LT';
        case 1:
        case 2:
        case 4:
        case 5:
            return '[В изминалия] dddd [в] LT';
    }
};
/** @type {?} */
var bgLocale = {
    abbr: 'bg',
    months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'D.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[Днес в] LT',
        nextDay: '[Утре в] LT',
        nextWeek: 'dddd [в] LT',
        lastDay: '[Вчера в] LT',
        lastWeek: (ɵ0$1),
        sameElse: 'L'
    },
    relativeTime: {
        future: 'след %s',
        past: 'преди %s',
        s: 'няколко секунди',
        ss: '%d секунди',
        m: 'минута',
        mm: '%d минути',
        h: 'час',
        hh: '%d часа',
        d: 'ден',
        dd: '%d дни',
        M: 'месец',
        MM: '%d месеца',
        y: 'година',
        yy: '%d години'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: (/**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var number = Number(_num);
        /** @type {?} */
        var lastDigit = number % 10;
        /** @type {?} */
        var last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        }
        else if (last2Digits === 0) {
            return number + '-ен';
        }
        else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        }
        else if (lastDigit === 1) {
            return number + '-ви';
        }
        else if (lastDigit === 2) {
            return number + '-ри';
        }
        else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        }
        else {
            return number + '-ти';
        }
    }),
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Xavier Arbat : https://github.com/XavisaurusRex
/** @type {?} */
var monthsShortDot = 'gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.'.split('_');
/** @type {?} */
var monthsShort = 'ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des'.split('_');
/** @type {?} */
var monthsParse = [/^gen/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^oct/i, /^nov/i, /^des/i];
/** @type {?} */
var monthsRegex = /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i;
/** @type {?} */
var caLocale = {
    abbr: 'ca',
    months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort[getMonth(date, isUTC)];
        }
        return monthsShortDot[getMonth(date, isUTC)];
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,
    monthsShortStrictRegex: /^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
    weekdaysShort: 'diu._dil._dim._dix._dij._div._dis.'.split('_'),
    weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[avui a ' + ( true ? 'les' : undefined) + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[dema a ' + ( true ? 'les' : undefined) + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a ' + ( true ? 'les' : undefined) + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ahir a ' + ( true ? 'les' : undefined) + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [' + ( true ? 'passades les' : undefined) + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'fa %s',
        s: 'uns segons',
        ss: '%d segons',
        m: 'un minut',
        mm: '%d minuts',
        h: 'una hora',
        hh: '%d hores',
        d: 'un dia',
        dd: '%d dies',
        M: 'un mes',
        MM: '%d mesos',
        y: 'un any',
        yy: '%d anys'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|on|er|rt|é)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */
        var output = (num > 4) ? 'é' :
            (num === 1 || num === 3) ? 'r' :
                (num === 2) ? 'n' :
                    (num === 4) ? 't' : 'é';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela
/** @type {?} */
var months$1 = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
/** @type {?} */
var monthsShort$1 = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural(num) {
    return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = num + ' ';
    switch (key) {
        case 's': // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'sekundy' : 'sekund');
            }
            else {
                return result + 'sekundami';
            }
        // break;
        case 'm': // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'minuty' : 'minut');
            }
            else {
                return result + 'minutami';
            }
        // break;
        case 'h': // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'hodiny' : 'hodin');
            }
            else {
                return result + 'hodinami';
            }
        // break;
        case 'd': // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'dny' : 'dní');
            }
            else {
                return result + 'dny';
            }
        // break;
        case 'M': // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'měsíce' : 'měsíců');
            }
            else {
                return result + 'měsíci';
            }
        // break;
        case 'y': // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'roky' : 'let');
            }
            else {
                return result + 'lety';
            }
        // break;
    }
}
var ɵ0$2 = /**
 * @param {?} months
 * @param {?} monthsShort
 * @return {?}
 */
function (months, monthsShort) {
    /** @type {?} */
    var i;
    /** @type {?} */
    var _monthsParse = [];
    for (i = 0; i < 12; i++) {
        // use custom parser to solve problem with July (červenec)
        _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
    }
    return _monthsParse;
}, ɵ1 = /**
 * @param {?} monthsShort
 * @return {?}
 */
function (monthsShort) {
    /** @type {?} */
    var i;
    /** @type {?} */
    var _shortMonthsParse = [];
    for (i = 0; i < 12; i++) {
        _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
    }
    return _shortMonthsParse;
}, ɵ2 = /**
 * @param {?} months
 * @return {?}
 */
function (months) {
    /** @type {?} */
    var i;
    /** @type {?} */
    var _longMonthsParse = [];
    for (i = 0; i < 12; i++) {
        _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
    }
    return _longMonthsParse;
};
/** @type {?} */
var csLocale = {
    abbr: 'cs',
    months: months$1,
    monthsShort: monthsShort$1,
    monthsParse: ((ɵ0$2)(months$1, monthsShort$1)),
    shortMonthsParse: ((ɵ1)(monthsShort$1)),
    longMonthsParse: ((ɵ2)(months$1)),
    weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd D. MMMM YYYY H:mm',
        l: 'D. M. YYYY'
    },
    calendar: {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
            }
        },
        lastDay: '[včera v] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: 'před %s',
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format
//! moment.js locale configuration
//! locale : Danish (Denmark) [da]
//! author : Per Hansen : https://github.com/perhp
/** @type {?} */
var daLocale = {
    abbr: 'da',
    months: 'Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
    weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'),
    weekdaysShort: 'Søn_Man_Tir_Ons_Tor_Fre_Lør'.split('_'),
    weekdaysMin: 'Sø_Ma_Ti_On_To_Fr_Lø'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'på dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[i] dddd[s kl.] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'få sekunder',
        m: 'et minut',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dage',
        M: 'en måned',
        MM: '%d måneder',
        y: 'et år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-key-quotes
//! moment.js locale configuration
//! locale : German [de]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Mikolaj Dadela : https://github.com/mik01aj
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function processRelativeTime(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [num + ' Tage', num + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [num + ' Monate', num + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [num + ' Jahre', num + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}
/** @type {?} */
var deLocale = {
    abbr: 'de',
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        ss: '%d Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim
/** @type {?} */
var enGbLocale = {
    abbr: 'en-gb',
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */
        var b = num % 10;
        /** @type {?} */
        var output = (~~(num % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Spanish (Dominican Republic) [es-do]
/** @type {?} */
var monthsShortDot$1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
/** @type {?} */
var monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
/** @type {?} */
var monthsParse$1 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
/** @type {?} */
var monthsRegex$1 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
/** @type {?} */
var esDoLocale = {
    abbr: 'es-do',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot$1;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShort$2[getMonth(date, isUTC)];
        }
        else {
            return monthsShortDot$1[getMonth(date, isUTC)];
        }
    },
    monthsRegex: monthsRegex$1,
    monthsShortRegex: monthsRegex$1,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse$1,
    longMonthsParse: monthsParse$1,
    shortMonthsParse: monthsParse$1,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY h:mm A',
        LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
/** @type {?} */
var monthsShortDot$2 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
/** @type {?} */
var monthsShort$3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
/** @type {?} */
var monthsParse$2 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
/** @type {?} */
var monthsRegex$2 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
/** @type {?} */
var esLocale = {
    abbr: 'es',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot$2;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort$3[getMonth(date, isUTC)];
        }
        return monthsShortDot$2[getMonth(date, isUTC)];
    },
    monthsRegex: monthsRegex$2,
    monthsShortRegex: monthsRegex$2,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse$2,
    longMonthsParse: monthsParse$2,
    shortMonthsParse: monthsParse$2,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Spanish (United States) [es-us]
//! author : bustta : https://github.com/bustta
/** @type {?} */
var monthsShortDot$3 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
/** @type {?} */
var monthsShort$4 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
/** @type {?} */
var esUsLocale = {
    abbr: 'es-us',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot$3;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShort$4[getMonth(date, isUTC)];
        }
        else {
            return monthsShortDot$3[getMonth(date, isUTC)];
        }
    },
    monthsParseExact: true,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM [de] D [de] YYYY',
        LLL: 'MMMM [de] D [de] YYYY h:mm A',
        LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Chris Gedrim : https://github.com/a90machado
/** @type {?} */
var processRelativeTime$1 = (/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function (num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var format = {
        s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
        ss: [num + 'sekundi', num + 'sekundit'],
        m: ['ühe minuti', 'üks minut'],
        mm: [num + ' minuti', num + ' minutit'],
        h: ['ühe tunni', 'tund aega', 'üks tund'],
        hh: [num + ' tunni', num + ' tundi'],
        d: ['ühe päeva', 'üks päev'],
        M: ['kuu aja', 'kuu aega', 'üks kuu'],
        MM: [num + ' kuu', num + ' kuud'],
        y: ['ühe aasta', 'aasta', 'üks aasta'],
        yy: [num + ' aasta', num + ' aastat']
    };
    if (withoutSuffix) {
        return format[key][2] ? format[key][2] : format[key][1];
    }
    return isFuture ? format[key][0] : format[key][1];
});
/** @type {?} */
var etLocale = {
    abbr: 'et',
    months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
    monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
    weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
    weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
    weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[Täna,] LT',
        nextDay: '[Homme,] LT',
        nextWeek: '[Järgmine] dddd LT',
        lastDay: '[Eile,] LT',
        lastWeek: '[Eelmine] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s pärast',
        past: '%s tagasi',
        s: processRelativeTime$1,
        ss: processRelativeTime$1,
        m: processRelativeTime$1,
        mm: processRelativeTime$1,
        h: processRelativeTime$1,
        hh: processRelativeTime$1,
        d: processRelativeTime$1,
        dd: '%d päeva',
        M: processRelativeTime$1,
        MM: processRelativeTime$1,
        y: processRelativeTime$1,
        yy: processRelativeTime$1
    },
    dayOfMonthOrdinalParse: /\d{1,2}./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
// https://github.com/moment/moment/blob/develop/locale/fi.js
/** @type {?} */
var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' ');
/** @type {?} */
var numbersFuture = [
    'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
    numbersPast[7], numbersPast[8], numbersPast[9]
];
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$1(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = '';
    switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'ss':
            return isFuture ? 'sekunnin' : 'sekuntia';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'päivän' : 'päivä';
        case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
    }
    result = verbalNumber(num, isFuture) + ' ' + result;
    return result;
}
/**
 * @param {?} num
 * @param {?} isFuture
 * @return {?}
 */
function verbalNumber(num, isFuture) {
    return num < 10 ? (isFuture ? numbersFuture[num] : numbersPast[num]) : num;
}
/** @type {?} */
var fiLocale = {
    abbr: 'fi',
    months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD.MM.YYYY',
        LL: 'Do MMMM[ta] YYYY',
        LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
        LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
        l: 'D.M.YYYY',
        ll: 'Do MMM YYYY',
        lll: 'Do MMM YYYY, [klo] HH.mm',
        llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
    },
    calendar: {
        sameDay: '[tänään] [klo] LT',
        nextDay: '[huomenna] [klo] LT',
        nextWeek: 'dddd [klo] LT',
        lastDay: '[eilen] [klo] LT',
        lastWeek: '[viime] dddd[na] [klo] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s päästä',
        past: '%s sitten',
        s: translate$1,
        ss: translate$1,
        m: translate$1,
        mm: translate$1,
        h: translate$1,
        hh: translate$1,
        d: translate$1,
        dd: translate$1,
        M: translate$1,
        MM: translate$1,
        y: translate$1,
        yy: translate$1
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice
/** @type {?} */
var frLocale = {
    abbr: 'fr',
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Aujourd’hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dans %s',
        past: 'il y a %s',
        s: 'quelques secondes',
        ss: '%d secondes',
        m: 'une minute',
        mm: '%d minutes',
        h: 'une heure',
        hh: '%d heures',
        d: 'un jour',
        dd: '%d jours',
        M: 'un mois',
        MM: '%d mois',
        y: 'un an',
        yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        /** @type {?} */
        var num = Number(_num);
        switch (period) {
            // TODO: Return 'e' when day of month > 1. Move this case inside
            // block for masculine words below.
            // See https://github.com/moment/moment/issues/3375
            case 'D':
                return num + (num === 1 ? 'er' : '');
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
                return num + (num === 1 ? 'er' : 'e');
            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return num + (num === 1 ? 're' : 'e');
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Galician [gl]
//! author : Darío Beiró : https://github.com/quinobravo
/** @type {?} */
var monthsShortDot$4 = 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_');
/** @type {?} */
var monthsShort$5 = 'xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec'.split('_');
/** @type {?} */
var monthsParse$3 = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
/** @type {?} */
var monthsRegex$3 = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
/** @type {?} */
var glLocale = {
    abbr: 'gl',
    months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot$4;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort$5[getMonth(date, isUTC)];
        }
        return monthsShortDot$4[getMonth(date, isUTC)];
    },
    monthsRegex: monthsRegex$3,
    monthsShortRegex: monthsRegex$3,
    monthsStrictRegex: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
    monthsShortStrictRegex: /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse$3,
    longMonthsParse: monthsParse$3,
    shortMonthsParse: monthsParse$3,
    weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoxe á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañan á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[onte á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[o] dddd [pasado á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'fai %s',
        s: 'uns segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'unha hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un ano',
        yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter
/** @type {?} */
var heLocale = {
    abbr: 'he',
    months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [ב]MMMM YYYY',
        LLL: 'D [ב]MMMM YYYY HH:mm',
        LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
        l: 'D/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[היום ב־]LT',
        nextDay: '[מחר ב־]LT',
        nextWeek: 'dddd [בשעה] LT',
        lastDay: '[אתמול ב־]LT',
        lastWeek: '[ביום] dddd [האחרון בשעה] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'בעוד %s',
        past: 'לפני %s',
        s: 'מספר שניות',
        ss: '%d שניות',
        m: 'דקה',
        mm: '%d דקות',
        h: 'שעה',
        hh: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'שעתיים';
            }
            return num + ' שעות';
        },
        d: 'יום',
        dd: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'יומיים';
            }
            return num + ' ימים';
        },
        M: 'חודש',
        MM: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'חודשיים';
            }
            return num + ' חודשים';
        },
        y: 'שנה',
        yy: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'שנתיים';
            }
            else if (num % 10 === 0 && num !== 10) {
                return num + ' שנה';
            }
            return num + ' שנים';
        }
    },
    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 5) {
            return 'לפנות בוקר';
        }
        else if (hour < 10) {
            return 'בבוקר';
        }
        else if (hour < 12) {
            return isLower ? 'לפנה"צ' : 'לפני הצהריים';
        }
        else if (hour < 18) {
            return isLower ? 'אחה"צ' : 'אחרי הצהריים';
        }
        else {
            return 'בערב';
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal
/** @type {?} */
var symbolMap$1 = {
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
    0: '०'
};
/** @type {?} */
var numberMap$1 = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};
/** @type {?} */
var hiLocale = {
    abbr: 'hi',
    months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
    monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    monthsParseExact: true,
    weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
        LT: 'A h:mm बजे',
        LTS: 'A h:mm:ss बजे',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, A h:mm बजे',
        LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
    },
    calendar: {
        sameDay: '[आज] LT',
        nextDay: '[कल] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[कल] LT',
        lastWeek: '[पिछले] dddd, LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s में',
        past: '%s पहले',
        s: 'कुछ ही क्षण',
        ss: '%d सेकंड',
        m: 'एक मिनट',
        mm: '%d मिनट',
        h: 'एक घंटा',
        hh: '%d घंटे',
        d: 'एक दिन',
        dd: '%d दिन',
        M: 'एक महीने',
        MM: '%d महीने',
        y: 'एक वर्ष',
        yy: '%d वर्ष'
    },
    preparse: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/[१२३४५६७८९०]/g, (/**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            return numberMap$1[match];
        }));
    },
    postformat: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/\d/g, (/**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            return symbolMap$1[match];
        }));
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
        }
        else if (meridiem === 'सुबह') {
            return hour;
        }
        else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
        }
        else if (meridiem === 'शाम') {
            return hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 4) {
            return 'रात';
        }
        else if (hour < 10) {
            return 'सुबह';
        }
        else if (hour < 17) {
            return 'दोपहर';
        }
        else if (hour < 20) {
            return 'शाम';
        }
        else {
            return 'रात';
        }
    },
    week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
/** @type {?} */
var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$2(num, withoutSuffix, key, isFuture) {
    switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'ss':
            return num + ((isFuture || withoutSuffix) ? ' másodperc' : ' másodperce');
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
}
/**
 * @param {?} date
 * @param {?} isFuture
 * @return {?}
 */
function week(date, isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[getDayOfWeek(date)] + '] LT[-kor]';
}
/** @type {?} */
var huLocale = {
    abbr: 'hu',
    months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'YYYY.MM.DD.',
        LL: 'YYYY. MMMM D.',
        LLL: 'YYYY. MMMM D. H:mm',
        LLLL: 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
        }
        else {
            return isLower === true ? 'du' : 'DU';
        }
    },
    calendar: {
        sameDay: '[ma] LT[-kor]',
        nextDay: '[holnap] LT[-kor]',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return week(date, true);
        },
        lastDay: '[tegnap] LT[-kor]',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return week(date, false);
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s múlva',
        past: '%s',
        s: translate$2,
        ss: translate$2,
        m: translate$2,
        mm: translate$2,
        h: translate$2,
        hh: translate$2,
        d: translate$2,
        dd: translate$2,
        M: translate$2,
        MM: translate$2,
        y: translate$2,
        yy: translate$2
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Croatian [hr]
//! author : Danijel Grmec : https://github.com/cobaltsis
/** @type {?} */
var hrLocale = {
    abbr: 'hr',
    months: 'Siječanj_Veljača_Ožujak_Travanj_Svibanj_Lipanj_Srpanj_Kolovoz_Rujan_Listopad_Studeni_Prosinac'.split('_'),
    monthsShort: 'Sij_Velj_Ožu_Tra_Svi_Lip_Srp_Kol_Ruj_Lis_Stu_Pro'.split('_'),
    weekdays: 'Nedjelja_Ponedjeljak_Utorak_Srijeda_Četvrtak_Petak_Subota'.split('_'),
    weekdaysShort: 'Ned_Pon_Uto_Sri_Čet_Pet_Sub'.split('_'),
    weekdaysMin: 'Ne_Po_Ut_Sr_Če_Pe_Su'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Danas u] LT',
        nextDay: '[Sutra u] LT',
        nextWeek: 'dddd [u] LT',
        lastDay: '[Jučer u] LT',
        lastWeek: '[Zadnji] dddd [u] LT',
        sameElse: 'L'
    },
    invalidDate: 'Neispravan datum',
    relativeTime: {
        future: 'za %s',
        past: '%s prije',
        s: 'nekoliko sekundi',
        ss: '%d sekundi',
        m: 'minuta',
        mm: '%d minuta',
        h: 'sat',
        hh: '%d sati',
        d: 'dan',
        dd: '%d dana',
        M: 'mjesec',
        MM: '%d mjeseci',
        y: 'godina',
        yy: '%d godina'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */
        var b = num % 10;
        /** @type {?} */
        var output = (~~(num % 100 / 10) === 1) ? '.' :
            (b === 1) ? '.' :
                (b === 2) ? '.' :
                    (b === 3) ? '.' : '.';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Indonesia [id]
//! author : Romy Kusuma : https://github.com/rkusuma
//! reference: https://github.com/moment/moment/blob/develop/locale/id.js
/** @type {?} */
var idLocale = {
    abbr: 'id',
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [pukul] HH.mm',
        LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        }
        else if (meridiem === 'siang') {
            return hour >= 11 ? hour : hour + 12;
        }
        else if (meridiem === 'sore' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        }
        else if (hours < 15) {
            return 'siang';
        }
        else if (hours < 19) {
            return 'sore';
        }
        else {
            return 'malam';
        }
    },
    calendar: {
        sameDay: '[Hari ini pukul] LT',
        nextDay: '[Besok pukul] LT',
        nextWeek: 'dddd [pukul] LT',
        lastDay: '[Kemarin pukul] LT',
        lastWeek: 'dddd [lalu pukul] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dalam %s',
        past: '%s yang lalu',
        s: 'beberapa detik',
        ss: '%d detik',
        m: 'semenit',
        mm: '%d menit',
        h: 'sejam',
        hh: '%d jam',
        d: 'sehari',
        dd: '%d hari',
        M: 'sebulan',
        MM: '%d bulan',
        y: 'setahun',
        yy: '%d tahun'
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
/** @type {?} */
var itLocale = {
    abbr: 'it',
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[la scorsa] dddd [alle] LT';
                default:
                    return '[lo scorso] dddd [alle] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            return ((/^[0-9].+$/).test(num.toString(10)) ? 'tra' : 'in') + ' ' + num;
        },
        past: '%s fa',
        s: 'alcuni secondi',
        ss: '%d secondi',
        m: 'un minuto',
        mm: '%d minuti',
        h: 'un\'ora',
        hh: '%d ore',
        d: 'un giorno',
        dd: '%d giorni',
        M: 'un mese',
        MM: '%d mesi',
        y: 'un anno',
        yy: '%d anni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon
/** @type {?} */
var jaLocale = {
    abbr: 'ja',
    months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日 HH:mm',
        LLLL: 'YYYY年M月D日 HH:mm dddd',
        l: 'YYYY/MM/DD',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日 HH:mm dddd'
    },
    meridiemParse: /午前|午後/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === '午後';
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return '午前';
        }
        else {
            return '午後';
        }
    },
    calendar: {
        sameDay: '[今日] LT',
        nextDay: '[明日] LT',
        nextWeek: '[来週]dddd LT',
        lastDay: '[昨日] LT',
        lastWeek: '[前週]dddd LT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal: /**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */
    function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            default:
                return num.toString(10);
        }
    },
    relativeTime: {
        future: '%s後',
        past: '%s前',
        s: '数秒',
        ss: '%d秒',
        m: '1分',
        mm: '%d分',
        h: '1時間',
        hh: '%d時間',
        d: '1日',
        dd: '%d日',
        M: '1ヶ月',
        MM: '%dヶ月',
        y: '1年',
        yy: '%d年'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>
/** @type {?} */
var koLocale = {
    abbr: 'ko',
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
    longDateFormat: {
        LT: 'A h:mm',
        LTS: 'A h:mm:ss',
        L: 'YYYY.MM.DD',
        LL: 'YYYY년 MMMM D일',
        LLL: 'YYYY년 MMMM D일 A h:mm',
        LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
        l: 'YYYY.MM.DD',
        ll: 'YYYY년 MMMM D일',
        lll: 'YYYY년 MMMM D일 A h:mm',
        llll: 'YYYY년 MMMM D일 dddd A h:mm'
    },
    calendar: {
        sameDay: '오늘 LT',
        nextDay: '내일 LT',
        nextWeek: 'dddd LT',
        lastDay: '어제 LT',
        lastWeek: '지난주 dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s 후',
        past: '%s 전',
        s: '몇 초',
        ss: '%d초',
        m: '1분',
        mm: '%d분',
        h: '한 시간',
        hh: '%d시간',
        d: '하루',
        dd: '%d일',
        M: '한 달',
        MM: '%d달',
        y: '일 년',
        yy: '%d년'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal: (/**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */
    function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '일';
            case 'M':
                return num + '월';
            case 'w':
            case 'W':
                return num + '주';
            default:
                return num.toString(10);
        }
    }),
    meridiemParse: /오전|오후/,
    isPM: (/**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        return token === '오후';
    }),
    meridiem: (/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isUpper
     * @return {?}
     */
    function (hour, minute, isUpper) {
        return hour < 12 ? '오전' : '오후';
    })
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Stanislavas Guk : https://github.com/ixoster
/** @type {?} */
var units = {
    ss: 'sekundė_sekundžių_sekundes',
    m: 'minutė_minutės_minutę',
    mm: 'minutės_minučių_minutes',
    h: 'valanda_valandos_valandą',
    hh: 'valandos_valandų_valandas',
    d: 'diena_dienos_dieną',
    dd: 'dienos_dienų_dienas',
    M: 'mėnuo_mėnesio_mėnesį',
    MM: 'mėnesiai_mėnesių_mėnesius',
    y: 'metai_metų_metus',
    yy: 'metai_metų_metus'
};
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translateSeconds(num, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
        return 'kelios sekundės';
    }
    else {
        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
    }
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translateSingular(num, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
}
/**
 * @param {?} num
 * @return {?}
 */
function special(num) {
    return num % 10 === 0 || (num > 10 && num < 20);
}
/**
 * @param {?} key
 * @return {?}
 */
function forms(key) {
    return ((/** @type {?} */ (units)))[key].split('_');
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$3(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = num + ' ';
    if (num === 1) {
        return result + translateSingular(num, withoutSuffix, key[0], isFuture);
    }
    else if (withoutSuffix) {
        return result + (special(num) ? forms(key)[1] : forms(key)[0]);
    }
    else {
        if (isFuture) {
            return result + forms(key)[1];
        }
        else {
            return result + (special(num) ? forms(key)[1] : forms(key)[2]);
        }
    }
}
/** @type {?} */
var ltLocale = {
    abbr: 'lt',
    months: {
        format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
        standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays: {
        format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
        standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
        isFormat: /dddd HH:mm/
    },
    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY [m.] MMMM D [d.]',
        LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
        l: 'YYYY-MM-DD',
        ll: 'YYYY [m.] MMMM D [d.]',
        lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar: {
        sameDay: '[Šiandien] LT',
        nextDay: '[Rytoj] LT',
        nextWeek: 'dddd LT',
        lastDay: '[Vakar] LT',
        lastWeek: '[Praėjusį] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'po %s',
        past: 'prieš %s',
        s: translateSeconds,
        ss: translate$3,
        m: translateSingular,
        mm: translate$3,
        h: translateSingular,
        hh: translate$3,
        d: translateSingular,
        dd: translate$3,
        M: translateSingular,
        MM: translate$3,
        y: translateSingular,
        yy: translate$3
    },
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal: /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return num + '-oji';
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Latvian [lv]
//! author : Matiss Janis Aboltins : https://github.com/matissjanis
/** @type {?} */
var lvLocale = {
    abbr: 'lv',
    months: 'Janvāris_Februāris_Marts_Aprīlis_Maijs_Jūnijs_Jūlijs_Augusts_Septembris_Oktobris_Novembris_Decembris'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mai_Jūn_Jūl_Aug_Sep_Okt_Nov_Dec'.split('_'),
    weekdays: 'Svētdiena_Pirmdiena_Otrdiena_Trešdiena_Ceturtdiena_Piektdiena_Sestdiena'.split('_'),
    weekdaysShort: 'Svētd_Pirmd_Otrd_Trešd_Ceturtd_Piektd_Sestd'.split('_'),
    weekdaysMin: 'Sv_Pi_Ot_Tr_Ce_Pk_Se'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'pēc %s',
        past: 'pirms %s',
        s: 'dažām sekundēm',
        ss: '%d sekundēm',
        m: 'minūtes',
        mm: '%d minūtēm',
        h: 'stundas',
        hh: '%d stundām',
        d: 'dienas',
        dd: '%d dienām',
        M: 'mēneša',
        MM: '%d mēnešiem',
        y: 'gada',
        yy: '%d gadiem'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return num + '.';
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
//! moment.js locale configuration
//! locale : Mongolian [mn]
//! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$4(num, withoutSuffix, key, isFuture) {
    switch (key) {
        case 's':
            return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
        case 'ss':
            return num + (withoutSuffix ? ' секунд' : ' секундын');
        case 'm':
        case 'mm':
            return num + (withoutSuffix ? ' минут' : ' минутын');
        case 'h':
        case 'hh':
            return num + (withoutSuffix ? ' цаг' : ' цагийн');
        case 'd':
        case 'dd':
            return num + (withoutSuffix ? ' өдөр' : ' өдрийн');
        case 'M':
        case 'MM':
            return num + (withoutSuffix ? ' сар' : ' сарын');
        case 'y':
        case 'yy':
            return num + (withoutSuffix ? ' жил' : ' жилийн');
        default:
            return num.toString(10);
    }
}
/** @type {?} */
var mnLocale = {
    abbr: 'mn',
    months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
    monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
    monthsParseExact: true,
    weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
    weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
    weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY оны MMMMын D',
        LLL: 'YYYY оны MMMMын D HH:mm',
        LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
    },
    meridiemParse: /ҮӨ|ҮХ/i,
    isPM: (/**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === 'ҮХ';
    }),
    meridiem: (/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ҮӨ';
        }
        else {
            return 'ҮХ';
        }
    }),
    calendar: {
        sameDay: '[Өнөөдөр] LT',
        nextDay: '[Маргааш] LT',
        nextWeek: '[Ирэх] dddd LT',
        lastDay: '[Өчигдөр] LT',
        lastWeek: '[Өнгөрсөн] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s дараа',
        past: '%s өмнө',
        s: translate$4,
        ss: translate$4,
        m: translate$4,
        mm: translate$4,
        h: translate$4,
        hh: translate$4,
        d: translate$4,
        dd: translate$4,
        M: translate$4,
        MM: translate$4,
        y: translate$4,
        yy: translate$4
    },
    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
    ordinal: (/**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */
    function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + ' өдөр';
            default:
                return num.toString(10);
        }
    })
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga
/** @type {?} */
var nbLocale = {
    abbr: 'nb',
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact: true,
    weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
    weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[forrige] dddd [kl.] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'noen sekunder',
        ss: '%d sekunder',
        m: 'ett minutt',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dager',
        M: 'en måned',
        MM: '%d måneder',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
/** @type {?} */
var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
/** @type {?} */
var monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
/** @type {?} */
var monthsParse$4 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
/** @type {?} */
var monthsRegex$4 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
/** @type {?} */
var nlBeLocale = {
    abbr: 'nl-be',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortWithDots;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[getMonth(date, isUTC)];
        }
        else {
            return monthsShortWithDots[getMonth(date, isUTC)];
        }
    },
    monthsRegex: monthsRegex$4,
    monthsShortRegex: monthsRegex$4,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse$4,
    longMonthsParse: monthsParse$4,
    shortMonthsParse: monthsParse$4,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
/** @type {?} */
var monthsShortWithDots$1 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
/** @type {?} */
var monthsShortWithoutDots$1 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
/** @type {?} */
var monthsParse$5 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
/** @type {?} */
var monthsRegex$5 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
/** @type {?} */
var nlLocale = {
    abbr: 'nl',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortWithDots$1;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots$1[getMonth(date, isUTC)];
        }
        else {
            return monthsShortWithDots$1[getMonth(date, isUTC)];
        }
    },
    monthsRegex: monthsRegex$5,
    monthsShortRegex: monthsRegex$5,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse$5,
    longMonthsParse: monthsParse$5,
    shortMonthsParse: monthsParse$5,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL
/** @type {?} */
var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
/** @type {?} */
var monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural$1(num) {
    return (num % 10 < 5) && (num % 10 > 1) && ((~~(num / 10) % 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function translate$5(num, withoutSuffix, key) {
    /** @type {?} */
    var result = num + ' ';
    switch (key) {
        case 'ss':
            return result + (plural$1(num) ? 'sekundy' : 'sekund');
        case 'm':
            return withoutSuffix ? 'minuta' : 'minutę';
        case 'mm':
            return result + (plural$1(num) ? 'minuty' : 'minut');
        case 'h':
            return withoutSuffix ? 'godzina' : 'godzinę';
        case 'hh':
            return result + (plural$1(num) ? 'godziny' : 'godzin');
        case 'MM':
            return result + (plural$1(num) ? 'miesiące' : 'miesięcy');
        case 'yy':
            return result + (plural$1(num) ? 'lata' : 'lat');
    }
}
/** @type {?} */
var plLocale = {
    abbr: 'pl',
    months: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsNominative;
        }
        else if (format === '') {
            // Hack: if format empty we know this is used to generate
            // RegExp by moment. Give then back both valid forms of months
            // in RegExp ready format.
            return '(' + monthsSubjective[getMonth(date, isUTC)] + '|' + monthsNominative[getMonth(date, isUTC)] + ')';
        }
        else if (/D MMMM/.test(format)) {
            return monthsSubjective[getMonth(date, isUTC)];
        }
        else {
            return monthsNominative[getMonth(date, isUTC)];
        }
    },
    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
    weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Dziś o] LT',
        nextDay: '[Jutro o] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[W niedzielę o] LT';
                case 2:
                    return '[We wtorek o] LT';
                case 3:
                    return '[W środę o] LT';
                case 5:
                    return '[W piątek o] LT';
                case 6:
                    return '[W sobotę o] LT';
                default:
                    return '[W] dddd [o] LT';
            }
        },
        lastDay: '[Wczoraj o] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[W zeszłą niedzielę o] LT';
                case 3:
                    return '[W zeszłą środę o] LT';
                case 4:
                    return '[W zeszłą czwartek o] LT';
                case 5:
                    return '[W zeszłą piątek o] LT';
                case 6:
                    return '[W zeszłą sobotę o] LT';
                default:
                    return '[W zeszły] dddd [o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: '%s temu',
        s: 'kilka sekund',
        ss: translate$5,
        m: translate$5,
        mm: translate$5,
        h: translate$5,
        hh: translate$5,
        d: '1 dzień',
        dd: '%d dni',
        M: 'miesiąc',
        MM: translate$5,
        y: 'rok',
        yy: translate$5
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
/** @type {?} */
var ptBrLocale = {
    abbr: 'pt-br',
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar: {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return (getDayOfWeek(date) === 0 || getDayOfWeek(date) === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'em %s',
        past: '%s atrás',
        s: 'poucos segundos',
        ss: '%d segundos',
        m: 'um minuto',
        mm: '%d minutos',
        h: 'uma hora',
        hh: '%d horas',
        d: 'um dia',
        dd: '%d dias',
        M: 'um mês',
        MM: '%d meses',
        y: 'um ano',
        yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// ! moment.js locale configuration
// ! locale : Romanian [ro]
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly
// ! author : Earle white: https://github.com/5earle
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural(num, withoutSuffix, key) {
    /** @type {?} */
    var format = {
        ss: 'secunde',
        mm: 'minute',
        hh: 'ore',
        dd: 'zile',
        MM: 'luni',
        yy: 'ani'
    };
    /** @type {?} */
    var separator = ' ';
    if (num % 100 >= 20 || (num >= 100 && num % 100 === 0)) {
        separator = ' de ';
    }
    return num + separator + format[key];
}
/** @type {?} */
var roLocale = {
    abbr: 'ro',
    months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
    monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
    weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
    weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[azi la] LT',
        nextDay: '[mâine la] LT',
        nextWeek: 'dddd [la] LT',
        lastDay: '[ieri la] LT',
        lastWeek: '[fosta] dddd [la] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'peste %s',
        past: '%s în urmă',
        s: 'câteva secunde',
        ss: relativeTimeWithPlural,
        m: 'un minut',
        mm: relativeTimeWithPlural,
        h: 'o oră',
        hh: relativeTimeWithPlural,
        d: 'o zi',
        dd: relativeTimeWithPlural,
        M: 'o lună',
        MM: relativeTimeWithPlural,
        y: 'un an',
        yy: relativeTimeWithPlural
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! Author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair
/**
 * @param {?} word
 * @param {?} num
 * @return {?}
 */
function plural$2(word, num) {
    /** @type {?} */
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural$1(num, withoutSuffix, key) {
    /** @type {?} */
    var format = {
        ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
        mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        hh: 'час_часа_часов',
        dd: 'день_дня_дней',
        MM: 'месяц_месяца_месяцев',
        yy: 'год_года_лет'
    };
    if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
    }
    return num + ' ' + plural$2(format[key], +num);
}
/** @type {?} */
var monthsParse$6 = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
/** @type {?} */
var ruLocale = {
    abbr: 'ru',
    months: {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort: {
        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays: {
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    },
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse: monthsParse$6,
    longMonthsParse: monthsParse$6,
    shortMonthsParse: monthsParse$6,
    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    // Выражение, которое соотвествует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., H:mm',
        LLLL: 'dddd, D MMMM YYYY г., H:mm'
    },
    calendar: {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',
        nextWeek: /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        function (date, now) {
            if (getWeek(now) !== getWeek(date)) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[В следующее] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В следующий] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В следующую] dddd [в] LT';
                }
            }
            else {
                if (getDayOfWeek(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        lastWeek: /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        function (date, now) {
            if (getWeek(now) !== getWeek(date)) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[В прошлое] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd [в] LT';
                }
            }
            else {
                if (getDayOfWeek(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'через %s',
        past: '%s назад',
        s: 'несколько секунд',
        ss: relativeTimeWithPlural$1,
        m: relativeTimeWithPlural$1,
        mm: relativeTimeWithPlural$1,
        h: 'час',
        hh: relativeTimeWithPlural$1,
        d: 'день',
        dd: relativeTimeWithPlural$1,
        M: 'месяц',
        MM: relativeTimeWithPlural$1,
        y: 'год',
        yy: relativeTimeWithPlural$1
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^(дня|вечера)$/.test(input);
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночи';
        }
        else if (hour < 12) {
            return 'утра';
        }
        else if (hour < 17) {
            return 'дня';
        }
        else {
            return 'вечера';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        /** @type {?} */
        var num = Number(_num);
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return num + '-й';
            case 'D':
                return num + '-го';
            case 'w':
            case 'W':
                return num + '-я';
            default:
                return num.toString(10);
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Jozef Pažin : https://github.com/atiris
/** @type {?} */
var months$2 = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_');
/** @type {?} */
var monthsShort$6 = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural$3(num) {
    return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$6(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = num + ' ';
    switch (key) {
        case 's': // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
        case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'sekundy' : 'sekúnd');
            }
            else {
                return result + 'sekundami';
            }
        // break;
        case 'm': // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'minúty' : 'minút');
            }
            else {
                return result + 'minútami';
            }
        // break;
        case 'h': // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'hodiny' : 'hodín');
            }
            else {
                return result + 'hodinami';
            }
        // break;
        case 'd': // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'dni' : 'dní');
            }
            else {
                return result + 'dňami';
            }
        // break;
        case 'M': // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'mesiace' : 'mesiacov');
            }
            else {
                return result + 'mesiacmi';
            }
        // break;
        case 'y': // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'roky' : 'rokov');
            }
            else {
                return result + 'rokmi';
            }
        // break;
    }
}
/** @type {?} */
var skLocale = {
    abbr: 'sk',
    months: months$2,
    monthsShort: monthsShort$6,
    weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
    weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
    weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd D. MMMM YYYY H:mm',
        l: 'D. M. YYYY'
    },
    calendar: {
        sameDay: '[dnes o] LT',
        nextDay: '[zajtra o] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v nedeľu o] LT';
                case 1:
                case 2:
                    return '[v] dddd [o] LT';
                case 3:
                    return '[v stredu o] LT';
                case 4:
                    return '[vo štvrtok o] LT';
                case 5:
                    return '[v piatok o] LT';
                case 6:
                    return '[v sobotu o] LT';
            }
        },
        lastDay: '[včera o] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[minulú nedeľu o] LT';
                case 1:
                case 2:
                    return '[minulý] dddd [o] LT';
                case 3:
                    return '[minulú stredu o] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [o] LT';
                case 6:
                    return '[minulú sobotu o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'o %s',
        past: 'pred %s',
        s: translate$6,
        ss: translate$6,
        m: translate$6,
        mm: translate$6,
        h: translate$6,
        hh: translate$6,
        d: translate$6,
        dd: translate$6,
        M: translate$6,
        MM: translate$6,
        y: translate$6,
        yy: translate$6
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Slovenian [sl]
//! author : mihan : https://github.com/mihan
/**
 * @param {?} number
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function processRelativeTime$2(number, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = number + ' ';
    switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
        case 'ss':
            if (number === 1) {
                result += withoutSuffix ? 'sekundo' : 'sekundi';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
            }
            else {
                result += withoutSuffix || isFuture ? 'sekund' : 'sekund';
            }
            return result;
        case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';
        case 'mm':
            if (number === 1) {
                result += withoutSuffix ? 'minuta' : 'minuto';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
            }
            else {
                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';
        case 'hh':
            if (number === 1) {
                result += withoutSuffix ? 'ura' : 'uro';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'uri' : 'urama';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'ure' : 'urami';
            }
            else {
                result += withoutSuffix || isFuture ? 'ur' : 'urami';
            }
            return result;
        case 'd':
            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
        case 'dd':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
            }
            else {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
            }
            return result;
        case 'M':
            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
        case 'MM':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
            }
            else {
                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
            }
            return result;
        case 'y':
            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
        case 'yy':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'leto' : 'letom';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'leta' : 'leti';
            }
            else {
                result += withoutSuffix || isFuture ? 'let' : 'leti';
            }
            return result;
    }
}
/** @type {?} */
var slLocale = {
    abbr: 'sl',
    months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
    weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
    weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[danes ob] LT',
        nextDay: '[jutri ob] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v] [nedeljo] [ob] LT';
                case 3:
                    return '[v] [sredo] [ob] LT';
                case 6:
                    return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[v] dddd [ob] LT';
            }
        },
        lastDay: '[včeraj ob] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[prejšnjo] [nedeljo] [ob] LT';
                case 3:
                    return '[prejšnjo] [sredo] [ob] LT';
                case 6:
                    return '[prejšnjo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prejšnji] dddd [ob] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'čez %s',
        past: 'pred %s',
        s: processRelativeTime$2,
        ss: processRelativeTime$2,
        m: processRelativeTime$2,
        mm: processRelativeTime$2,
        h: processRelativeTime$2,
        hh: processRelativeTime$2,
        d: processRelativeTime$2,
        dd: processRelativeTime$2,
        M: processRelativeTime$2,
        MM: processRelativeTime$2,
        y: processRelativeTime$2,
        yy: processRelativeTime$2
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus
/** @type {?} */
var svLocale = {
    abbr: 'sv',
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: 'för %s sedan',
        s: 'några sekunder',
        ss: '%d sekunder',
        m: 'en minut',
        mm: '%d minuter',
        h: 'en timme',
        hh: '%d timmar',
        d: 'en dag',
        dd: '%d dagar',
        M: 'en månad',
        MM: '%d månader',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */
        var b = num % 10;
        /** @type {?} */
        var output = (~~(num % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// moment.js locale configuration
// locale : Thai [th]
// author : Watcharapol Sanitwong : https://github.com/tumit
/** @type {?} */
var thLocale = {
    abbr: 'th',
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    // yes, three characters difference
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY เวลา H:mm',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === 'หลังเที่ยง';
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ก่อนเที่ยง';
        }
        else {
            return 'หลังเที่ยง';
        }
    },
    calendar: {
        sameDay: '[วันนี้ เวลา] LT',
        nextDay: '[พรุ่งนี้ เวลา] LT',
        nextWeek: 'dddd[หน้า เวลา] LT',
        lastDay: '[เมื่อวานนี้ เวลา] LT',
        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'อีก %s',
        past: '%sที่แล้ว',
        s: 'ไม่กี่วินาที',
        ss: '%d วินาที',
        m: '1 นาที',
        mm: '%d นาที',
        h: '1 ชั่วโมง',
        hh: '%d ชั่วโมง',
        d: '1 วัน',
        dd: '%d วัน',
        M: '1 เดือน',
        MM: '%d เดือน',
        y: '1 ปี',
        yy: '%d ปี'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK
/** @type {?} */
var suffixes = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    6: '\'ncı',
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    60: '\'ıncı',
    90: '\'ıncı'
};
/** @type {?} */
var trLocale = {
    abbr: 'tr',
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[bugün saat] LT',
        nextDay: '[yarın saat] LT',
        nextWeek: '[gelecek] dddd [saat] LT',
        lastDay: '[dün] LT',
        lastWeek: '[geçen] dddd [saat] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s sonra',
        past: '%s önce',
        s: 'birkaç saniye',
        ss: '%d saniye',
        m: 'bir dakika',
        mm: '%d dakika',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir gün',
        dd: '%d gün',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir yıl',
        yy: '%d yıl'
    },
    dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        if (num === 0) { // special case for zero
            return num + '\'ıncı';
        }
        /** @type {?} */
        var a = num % 10;
        /** @type {?} */
        var b = num % 100 - a;
        /** @type {?} */
        var c = num >= 100 ? 100 : null;
        return num + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion Elensúle : https://github.com/Oire
/**
 * @param {?} word
 * @param {?} num
 * @return {?}
 */
function plural$4(word, num) {
    /** @type {?} */
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural$2(num, withoutSuffix, key) {
    /** @type {?} */
    var format = {
        ss: withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
        mm: withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
        hh: withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
        dd: 'день_дні_днів',
        MM: 'місяць_місяці_місяців',
        yy: 'рік_роки_років'
    };
    if (key === 'm') {
        return withoutSuffix ? 'хвилина' : 'хвилину';
    }
    if (key === 'h') {
        return withoutSuffix ? 'година' : 'годину';
    }
    return num + ' ' + plural$4(format[key], +num);
}
/**
 * @param {?} date
 * @param {?} format
 * @param {?=} isUTC
 * @return {?}
 */
function weekdaysCaseReplace(date, format, isUTC) {
    /** @type {?} */
    var weekdays = {
        nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
        accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
        genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
    };
    if (!date) {
        return weekdays.nominative;
    }
    /** @type {?} */
    var nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
        'accusative' :
        ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
            'genitive' :
            'nominative');
    return weekdays[nounCase][getDayOfWeek(date, isUTC)];
}
/**
 * @param {?} str
 * @return {?}
 */
function processHoursFunction(str) {
    return (/**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return str + 'о' + (getHours(date) === 11 ? 'б' : '') + '] LT';
    });
}
/** @type {?} */
var ukLocale = {
    abbr: 'uk',
    months: {
        format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
        standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
    },
    monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
    weekdays: weekdaysCaseReplace,
    weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY р.',
        LLL: 'D MMMM YYYY р., HH:mm',
        LLLL: 'dddd, D MMMM YYYY р., HH:mm'
    },
    calendar: {
        sameDay: processHoursFunction('[Сьогодні '),
        nextDay: processHoursFunction('[Завтра '),
        lastDay: processHoursFunction('[Вчора '),
        nextWeek: processHoursFunction('[У] dddd ['),
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return processHoursFunction('[Минулої] dddd [')(date);
                case 1:
                case 2:
                case 4:
                    return processHoursFunction('[Минулого] dddd [')(date);
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'за %s',
        past: '%s тому',
        s: 'декілька секунд',
        ss: relativeTimeWithPlural$2,
        m: relativeTimeWithPlural$2,
        mm: relativeTimeWithPlural$2,
        h: 'годину',
        hh: relativeTimeWithPlural$2,
        d: 'день',
        dd: relativeTimeWithPlural$2,
        M: 'місяць',
        MM: relativeTimeWithPlural$2,
        y: 'рік',
        yy: relativeTimeWithPlural$2
    },
    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
    meridiemParse: /ночі|ранку|дня|вечора/,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^(дня|вечора)$/.test(input);
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночі';
        }
        else if (hour < 12) {
            return 'ранку';
        }
        else if (hour < 17) {
            return 'дня';
        }
        else {
            return 'вечора';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        /** @type {?} */
        var num = Number(_num);
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return num + '-й';
            case 'D':
                return num + '-го';
            default:
                return num.toString();
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Việt Nam [vi]
//! author : Chris Gedrim : https://github.com/chrisgedrim
/** @type {?} */
var viLocale = {
    abbr: 'vi',
    months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
    monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
    monthsParseExact: true,
    weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
    weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysParseExact: true,
    meridiemParse: /sa|ch/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^ch$/i.test(input);
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower ? 'sa' : 'SA';
        }
        else {
            return isLower ? 'ch' : 'CH';
        }
    },
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM [năm] YYYY',
        LLL: 'D MMMM [năm] YYYY HH:mm',
        LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
        l: 'DD/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Hôm nay lúc] LT',
        nextDay: '[Ngày mai lúc] LT',
        nextWeek: 'dddd [tuần tới lúc] LT',
        lastDay: '[Hôm qua lúc] LT',
        lastWeek: 'dddd [tuần trước lúc] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s tới',
        past: '%s trước',
        s: 'vài giây',
        ss: '%d giây',
        m: 'một phút',
        mm: '%d phút',
        h: 'một giờ',
        hh: '%d giờ',
        d: 'một ngày',
        dd: '%d ngày',
        M: 'một tháng',
        MM: '%d tháng',
        y: 'một năm',
        yy: '%d năm'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        return '' + _num;
    },
    week: {
        dow: 1,
        // Thứ Hai là ngày đầu tuần.
        doy: 4 // Tuần chứa ngày 4 tháng 1 là tuần đầu tiên trong năm.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
/** @type {?} */
var zhCnLocale = {
    abbr: 'zh-cn',
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日Ah点mm分',
        LLLL: 'YYYY年M月D日ddddAh点mm分',
        l: 'YYYY/M/D',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
            meridiem === '上午') {
            return hour;
        }
        else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
        else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        /** @type {?} */
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        }
        else if (hm < 900) {
            return '早上';
        }
        else if (hm < 1130) {
            return '上午';
        }
        else if (hm < 1230) {
            return '中午';
        }
        else if (hm < 1800) {
            return '下午';
        }
        else {
            return '晚上';
        }
    },
    calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        /** @type {?} */
        var num = Number(_num);
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            case 'M':
                return num + '月';
            case 'w':
            case 'W':
                return num + '周';
            default:
                return num.toString();
        }
    },
    relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        ss: '%d 秒',
        m: '1 分钟',
        mm: '%d 分钟',
        h: '1 小时',
        hh: '%d 小时',
        d: '1 天',
        dd: '%d 天',
        M: '1 个月',
        MM: '%d 个月',
        y: '1 年',
        yy: '%d 年'
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};


//# sourceMappingURL=ngx-bootstrap-chronos.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js ***!
  \*********************************************************************************/
/*! exports provided: BsDatepickerConfig, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineConfig, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineConfig, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatePickerInnerComponent, DatepickerConfig, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerConfig", function() { return BsDatepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerContainerComponent", function() { return BsDatepickerContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerDirective", function() { return BsDatepickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineConfig", function() { return BsDatepickerInlineConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineContainerComponent", function() { return BsDatepickerInlineContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineDirective", function() { return BsDatepickerInlineDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInputDirective", function() { return BsDatepickerInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerModule", function() { return BsDatepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerConfig", function() { return BsDaterangepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerContainerComponent", function() { return BsDaterangepickerContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerDirective", function() { return BsDaterangepickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInlineConfig", function() { return BsDaterangepickerInlineConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInlineContainerComponent", function() { return BsDaterangepickerInlineContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInlineDirective", function() { return BsDaterangepickerInlineDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInputDirective", function() { return BsDaterangepickerInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsLocaleService", function() { return BsLocaleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return DateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerInnerComponent", function() { return DatePickerInnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerConfig", function() { return DatepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerModule", function() { return DatepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayPickerComponent", function() { return DayPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return MonthPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearPickerComponent", function() { return YearPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DATEPICKER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return BsDatepickerAbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return BsDatepickerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return BsDatepickerEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return BsDatepickerActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return datepickerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return BsCalendarLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return BsCurrentDateViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return BsCustomDatesViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return BsDatepickerDayDecoratorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return BsDatepickerNavigationViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return BsDaysCalendarViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return BsMonthCalendarViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return BsTimepickerViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return BsYearsCalendarViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/mini-ngrx */ "./node_modules/ngx-bootstrap/mini-ngrx/fesm5/ngx-bootstrap-mini-ngrx.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
var BsDatepickerConfig = /** @class */ (function () {
    function BsDatepickerConfig() {
        /**
         * sets use adaptive position
         */
        this.adaptivePosition = false;
        /**
         * sets use UTC date time format
         */
        this.useUtc = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
         * Allows to hide week numbers in datepicker
         */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        /**
         * Date format for date range input field
         */
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
    }
    BsDatepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return BsDatepickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
BsDatepickerAbstractComponent = /** @class */ (function () {
    function BsDatepickerAbstractComponent() {
        this._customRangesFish = [];
    }
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMinDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMaxDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDaysDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDatesDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "dateCustomClasses", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDateCustomClasses(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.setViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.dayHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.weekHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype._stopPropagation = /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    return BsDatepickerAbstractComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerActions = /** @class */ (function () {
    function BsDatepickerActions() {
    }
    /**
     * @return {?}
     */
    BsDatepickerActions.prototype.calculate = /**
     * @return {?}
     */
    function () {
        return { type: BsDatepickerActions.CALCULATE };
    };
    /**
     * @return {?}
     */
    BsDatepickerActions.prototype.format = /**
     * @return {?}
     */
    function () {
        return { type: BsDatepickerActions.FORMAT };
    };
    /**
     * @return {?}
     */
    BsDatepickerActions.prototype.flag = /**
     * @return {?}
     */
    function () {
        return { type: BsDatepickerActions.FLAG };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDatepickerActions.prototype.select = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerActions.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerActions.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    };
    /**
     * @param {?} step
     * @return {?}
     */
    BsDatepickerActions.prototype.navigateStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    };
    /**
     * @param {?} options
     * @return {?}
     */
    BsDatepickerActions.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    };
    // date range picker
    // date range picker
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerActions.prototype.selectRange = 
    // date range picker
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerActions.prototype.hoverDay = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDatepickerActions.prototype.minDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDatepickerActions.prototype.maxDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    };
    /**
     * @param {?} days
     * @return {?}
     */
    BsDatepickerActions.prototype.daysDisabled = /**
     * @param {?} days
     * @return {?}
     */
    function (days) {
        return {
            type: BsDatepickerActions.SET_DAYSDISABLED,
            payload: days
        };
    };
    /**
     * @param {?} dates
     * @return {?}
     */
    BsDatepickerActions.prototype.datesDisabled = /**
     * @param {?} dates
     * @return {?}
     */
    function (dates) {
        return {
            type: BsDatepickerActions.SET_DATESDISABLED,
            payload: dates
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerActions.prototype.isDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerActions.prototype.setDateCustomClasses = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: BsDatepickerActions.SET_DATE_CUSTOM_CLASSES,
            payload: value
        };
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    BsDatepickerActions.prototype.setLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
        };
    };
    BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
    BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
    BsDatepickerActions.FLAG = '[datepicker] set flags';
    BsDatepickerActions.SELECT = '[datepicker] select date';
    BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
    BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
    BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
    BsDatepickerActions.HOVER = '[datepicker] hover date';
    BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
    BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
    BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
    BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
    BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
    BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
    BsDatepickerActions.SET_DATE_CUSTOM_CLASSES = '[datepicker] set date custom classes';
    BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
    BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
    BsDatepickerActions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return BsDatepickerActions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsLocaleService = /** @class */ (function () {
    function BsLocaleService() {
        this._defaultLocale = 'en';
        this._locale = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._defaultLocale);
        this._localeChange = this._locale.asObservable();
    }
    Object.defineProperty(BsLocaleService.prototype, "locale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsLocaleService.prototype, "localeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localeChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsLocaleService.prototype, "currentLocale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._locale.getValue();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} locale
     * @return {?}
     */
    BsLocaleService.prototype.use = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        if (locale === this.currentLocale) {
            return;
        }
        this._locale.next(locale);
    };
    BsLocaleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return BsLocaleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerEffects = /** @class */ (function () {
    function BsDatepickerEffects(_actions, _localeService) {
        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
    }
    /**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */
    BsDatepickerEffects.prototype.init = /**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */
    function (_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    };
    /** setters */
    /**
     * setters
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setValue = /**
     * setters
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.select(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setRangeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.selectRange(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setMinDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.minDate(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setMaxDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.maxDate(value));
        return this;
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    BsDatepickerEffects.prototype.setDaysDisabled = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._store.dispatch((/** @type {?} */ (this))._actions.daysDisabled(value));
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    BsDatepickerEffects.prototype.setDatesDisabled = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._store.dispatch((/** @type {?} */ (this))._actions.datesDisabled(value));
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.isDisabled(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setDateCustomClasses = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.setDateCustomClasses(value));
        return this;
    };
    /* Set rendering options */
    /* Set rendering options */
    /**
     * @param {?} _config
     * @return {?}
     */
    BsDatepickerEffects.prototype.setOptions = /* Set rendering options */
    /**
     * @param {?} _config
     * @return {?}
     */
    function (_config) {
        /** @type {?} */
        var _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
        this._store.dispatch(this._actions.setOptions(_options));
        return this;
    };
    /** view to mode bindings */
    /**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */
    BsDatepickerEffects.prototype.setBindings = /**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */
    function (container) {
        container.daysCalendar = this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.flaggedMonths; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} months
         * @return {?}
         */
        function (months) { return !!months; })));
        // month calendar
        container.monthsCalendar = this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.flaggedMonthsCalendar; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} months
         * @return {?}
         */
        function (months) { return !!months; })));
        // year calendar
        container.yearsCalendar = this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.yearsCalendarFlagged; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} years
         * @return {?}
         */
        function (years) { return !!years; })));
        container.viewMode = this._store.select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.view.mode; }));
        container.options = this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.showWeekNumbers; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} showWeekNumbers
         * @return {?}
         */
        function (showWeekNumbers) { return ({ showWeekNumbers: showWeekNumbers }); })));
        return this;
    };
    /** event handlers */
    /**
     * event handlers
     * @param {?} container
     * @return {?}
     */
    BsDatepickerEffects.prototype.setEventHandlers = /**
     * event handlers
     * @param {?} container
     * @return {?}
     */
    function (container) {
        var _this = this;
        container.setViewMode = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._store.dispatch(_this._actions.changeViewMode(event));
        });
        container.navigateTo = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._store.dispatch(_this._actions.navigateStep(event.step));
        });
        container.dayHoverHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var _cell = (/** @type {?} */ (event.cell));
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        });
        container.monthHoverHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.cell.isHovered = event.isHovered;
        });
        container.yearHoverHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.cell.isHovered = event.isHovered;
        });
        container.monthSelectHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: {
                    month: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["getMonth"])(event.date),
                    year: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["getFullYear"])(event.date)
                },
                viewMode: 'day'
            }));
        });
        container.yearSelectHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: {
                    year: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["getFullYear"])(event.date)
                },
                viewMode: 'month'
            }));
        });
        return this;
    };
    /**
     * @return {?}
     */
    BsDatepickerEffects.prototype.registerDatepickerSideEffects = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subs.push(this._store.select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.view; })).subscribe((/**
         * @param {?} view
         * @return {?}
         */
        function (view) {
            _this._store.dispatch(_this._actions.calculate());
        })));
        // format calendar values on month model change
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.monthsModel; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} monthModel
         * @return {?}
         */
        function (monthModel) { return !!monthModel; })))
            .subscribe((/**
         * @param {?} month
         * @return {?}
         */
        function (month) { return _this._store.dispatch(_this._actions.format()); })));
        // flag day values
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.formattedMonths; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} month
         * @return {?}
         */
        function (month) { return !!month; })))
            .subscribe((/**
         * @param {?} month
         * @return {?}
         */
        function (month) { return _this._store.dispatch(_this._actions.flag()); })));
        // flag day values
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.selectedDate; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} selectedDate
         * @return {?}
         */
        function (selectedDate) { return !!selectedDate; })))
            .subscribe((/**
         * @param {?} selectedDate
         * @return {?}
         */
        function (selectedDate) { return _this._store.dispatch(_this._actions.flag()); })));
        // flag for date range picker
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.selectedRange; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} selectedRange
         * @return {?}
         */
        function (selectedRange) { return !!selectedRange; })))
            .subscribe((/**
         * @param {?} selectedRange
         * @return {?}
         */
        function (selectedRange) { return _this._store.dispatch(_this._actions.flag()); })));
        // monthsCalendar
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.monthsCalendar; }))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this._store.dispatch(_this._actions.flag()); })));
        // years calendar
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.yearsCalendarModel; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return !!state; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this._store.dispatch(_this._actions.flag()); })));
        // on hover
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.hoveredDate; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} hoveredDate
         * @return {?}
         */
        function (hoveredDate) { return !!hoveredDate; })))
            .subscribe((/**
         * @param {?} hoveredDate
         * @return {?}
         */
        function (hoveredDate) { return _this._store.dispatch(_this._actions.flag()); })));
        // date custom classes
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.dateCustomClasses; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} dateCustomClasses
         * @return {?}
         */
        function (dateCustomClasses) { return !!dateCustomClasses; })))
            .subscribe((/**
         * @param {?} dateCustomClasses
         * @return {?}
         */
        function (dateCustomClasses) { return _this._store.dispatch(_this._actions.flag()); })));
        // on locale change
        this._subs.push(this._localeService.localeChange
            .subscribe((/**
         * @param {?} locale
         * @return {?}
         */
        function (locale) { return _this._store.dispatch(_this._actions.setLocale(locale)); })));
        return this;
    };
    /**
     * @return {?}
     */
    BsDatepickerEffects.prototype.destroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BsDatepickerEffects.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BsDatepickerEffects.ctorParameters = function () { return [
        { type: BsDatepickerActions },
        { type: BsLocaleService }
    ]; };
    return BsDatepickerEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultMonthOptions = {
    width: 7,
    height: 6
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var _initialView = { date: new Date(), mode: 'day' };
/** @type {?} */
var initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
    locale: 'en',
    view: _initialView,
    selectedRange: [],
    monthViewOptions: defaultMonthOptions
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} options
 * @return {?}
 */
function getStartingDayOfCalendar(date, options) {
    if (Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isFirstDayOfWeek"])(date, options.firstDayOfWeek)) {
        return date;
    }
    /** @type {?} */
    var weekDay = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["getDay"])(date);
    /** @type {?} */
    var offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(date, { day: -offset });
}
/**
 * @param {?} weekday
 * @param {?} startingDayOffset
 * @return {?}
 */
function calculateDateOffset(weekday, startingDayOffset) {
    if (startingDayOffset === 0) {
        return weekday;
    }
    /** @type {?} */
    var offset = weekday - startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function isMonthDisabled(date, min, max) {
    /** @type {?} */
    var minBound = min && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isBefore"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["endOf"])(date, 'month'), min, 'day');
    /** @type {?} */
    var maxBound = max && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isAfter"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["startOf"])(date, 'month'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function isYearDisabled(date, min, max) {
    /** @type {?} */
    var minBound = min && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isBefore"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["endOf"])(date, 'year'), min, 'day');
    /** @type {?} */
    var maxBound = max && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isAfter"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["startOf"])(date, 'year'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} datesDisabled
 * @return {?}
 */
function isDisabledDate(date, datesDisabled) {
    if (datesDisabled === undefined || !datesDisabled || !datesDisabled.length) {
        return false;
    }
    return datesDisabled.some((/**
     * @param {?} dateDisabled
     * @return {?}
     */
    function (dateDisabled) { return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isSame"])(date, dateDisabled, 'date'); }));
}
/**
 * @param {?} state
 * @param {?=} calendarIndex
 * @return {?}
 */
function getYearsCalendarInitialDate(state, calendarIndex) {
    if (calendarIndex === void 0) { calendarIndex = 0; }
    /** @type {?} */
    var model = state && state.yearsCalendarModel && state.yearsCalendarModel[calendarIndex];
    return model && model.years && model.years[0] && model.years[0][0] && model.years[0][0].date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} options
 * @param {?} fn
 * @return {?}
 */
function createMatrix(options, fn) {
    /** @type {?} */
    var prevValue = options.initialDate;
    /** @type {?} */
    var matrix = new Array(options.height);
    for (var i = 0; i < options.height; i++) {
        matrix[i] = new Array(options.width);
        for (var j = 0; j < options.width; j++) {
            matrix[i][j] = fn(prevValue);
            prevValue = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(prevValue, options.shift);
        }
    }
    return matrix;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} startingDate
 * @param {?} options
 * @return {?}
 */
function calcDaysCalendar(startingDate, options) {
    /** @type {?} */
    var firstDay = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["getFirstDayOfMonth"])(startingDate);
    /** @type {?} */
    var initialDate = getStartingDayOfCalendar(firstDay, options);
    /** @type {?} */
    var matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate: initialDate,
        shift: { day: 1 }
    };
    /** @type {?} */
    var daysMatrix = createMatrix(matrixOptions, (/**
     * @param {?} date
     * @return {?}
     */
    function (date) { return date; }));
    return {
        daysMatrix: daysMatrix,
        month: firstDay
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} daysCalendar
 * @param {?} formatOptions
 * @param {?} monthIndex
 * @return {?}
 */
function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
    return {
        month: daysCalendar.month,
        monthTitle: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
        yearTitle: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
        weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
        weekdays: getShiftedWeekdays(formatOptions.locale),
        weeks: daysCalendar.daysMatrix.map((/**
         * @param {?} week
         * @param {?} weekIndex
         * @return {?}
         */
        function (week, weekIndex) { return ({
            days: week.map((/**
             * @param {?} date
             * @param {?} dayIndex
             * @return {?}
             */
            function (date, dayIndex) { return ({
                date: date,
                label: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, formatOptions.dayLabel, formatOptions.locale),
                monthIndex: monthIndex,
                weekIndex: weekIndex,
                dayIndex: dayIndex
            }); }))
        }); }))
    };
}
/**
 * @param {?} daysMatrix
 * @param {?} format
 * @param {?} locale
 * @return {?}
 */
function getWeekNumbers(daysMatrix, format, locale) {
    return daysMatrix.map((/**
     * @param {?} days
     * @return {?}
     */
    function (days) { return (days[0] ? Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(days[0], format, locale) : ''); }));
}
/**
 * @param {?} locale
 * @return {?}
 */
function getShiftedWeekdays(locale) {
    /** @type {?} */
    var _locale = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["getLocale"])(locale);
    /** @type {?} */
    var weekdays = (/** @type {?} */ (_locale.weekdaysShort()));
    /** @type {?} */
    var firstDayOfWeek = _locale.firstDayOfWeek();
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(weekdays.slice(firstDayOfWeek), weekdays.slice(0, firstDayOfWeek));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} formattedMonth
 * @param {?} options
 * @return {?}
 */
function flagDaysCalendar(formattedMonth, options) {
    formattedMonth.weeks.forEach((/**
     * @param {?} week
     * @return {?}
     */
    function (week) {
        /* tslint:disable-next-line: cyclomatic-complexity */
        week.days.forEach((/**
         * @param {?} day
         * @param {?} dayIndex
         * @return {?}
         */
        function (day, dayIndex) {
            // datepicker
            /** @type {?} */
            var isOtherMonth = !Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(day.date, formattedMonth.month);
            /** @type {?} */
            var isHovered = !isOtherMonth && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(day.date, options.hoveredDate);
            // date range picker
            /** @type {?} */
            var isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(day.date, options.selectedRange[0]);
            /** @type {?} */
            var isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(day.date, options.selectedRange[1]);
            /** @type {?} */
            var isSelected = (!isOtherMonth && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            /** @type {?} */
            var isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            /** @type {?} */
            var isDisabled = options.isDisabled ||
                Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isBefore"])(day.date, options.minDate, 'day') ||
                Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isAfter"])(day.date, options.maxDate, 'day') ||
                Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isDisabledDay"])(day.date, options.daysDisabled) ||
                isDisabledDate(day.date, options.datesDisabled);
            /** @type {?} */
            var currentDate = new Date();
            /** @type {?} */
            var isToday = !isOtherMonth && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(day.date, currentDate);
            /** @type {?} */
            var customClasses = options.dateCustomClasses && options.dateCustomClasses
                .map((/**
             * @param {?} dcc
             * @return {?}
             */
            function (dcc) { return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(day.date, dcc.date) ? dcc.classes : []; }))
                .reduce((/**
             * @param {?} previousValue
             * @param {?} currentValue
             * @return {?}
             */
            function (previousValue, currentValue) { return previousValue.concat(currentValue); }), [])
                .join(' ')
                || '';
            // decide update or not
            /** @type {?} */
            var newDay = Object.assign({}, day, {
                isOtherMonth: isOtherMonth,
                isHovered: isHovered,
                isSelected: isSelected,
                isSelectionStart: isSelectionStart,
                isSelectionEnd: isSelectionEnd,
                isInRange: isInRange,
                isDisabled: isDisabled,
                isToday: isToday,
                customClasses: customClasses
            });
            if (day.isOtherMonth !== newDay.isOtherMonth ||
                day.isHovered !== newDay.isHovered ||
                day.isSelected !== newDay.isSelected ||
                day.isSelectionStart !== newDay.isSelectionStart ||
                day.isSelectionEnd !== newDay.isSelectionEnd ||
                day.isDisabled !== newDay.isDisabled ||
                day.isInRange !== newDay.isInRange ||
                day.customClasses !== newDay.customClasses) {
                week.days[dayIndex] = newDay;
            }
        }));
    }));
    // todo: add check for linked calendars
    formattedMonth.hideLeftArrow =
        options.isDisabled ||
            (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
    formattedMonth.hideRightArrow =
        options.isDisabled ||
            (options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths);
    formattedMonth.disableLeftArrow = isMonthDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
    formattedMonth.disableRightArrow = isMonthDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
    return formattedMonth;
}
/**
 * @param {?} date
 * @param {?} selectedRange
 * @param {?} hoveredDate
 * @return {?}
 */
function isDateInRange(date, selectedRange, hoveredDate) {
    if (!date || !selectedRange[0]) {
        return false;
    }
    if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
    }
    if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
    }
    return false;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} mode
 * @param {?=} minMode
 * @return {?}
 */
function canSwitchMode(mode, minMode) {
    return minMode ? mode >= minMode : true;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var height = 4;
/** @type {?} */
var width = 3;
/** @type {?} */
var shift = { month: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
function formatMonthsCalendar(viewDate, formatOptions) {
    /** @type {?} */
    var initialDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["startOf"])(viewDate, 'year');
    /** @type {?} */
    var matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    /** @type {?} */
    var monthMatrix = createMatrix(matrixOptions, (/**
     * @param {?} date
     * @return {?}
     */
    function (date) { return ({
        date: date,
        label: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, formatOptions.monthLabel, formatOptions.locale)
    }); }));
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(viewDate, formatOptions.yearTitle, formatOptions.locale)
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} monthCalendar
 * @param {?} options
 * @return {?}
 */
function flagMonthsCalendar(monthCalendar, options) {
    monthCalendar.months.forEach((/**
     * @param {?} months
     * @param {?} rowIndex
     * @return {?}
     */
    function (months, rowIndex) {
        months.forEach((/**
         * @param {?} month
         * @param {?} monthIndex
         * @return {?}
         */
        function (month, monthIndex) {
            /** @type {?} */
            var isHovered = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(month.date, options.hoveredMonth);
            /** @type {?} */
            var isDisabled = options.isDisabled ||
                isMonthDisabled(month.date, options.minDate, options.maxDate);
            /** @type {?} */
            var isSelected = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(month.date, options.selectedDate);
            /** @type {?} */
            var newMonth = Object.assign(/*{},*/ month, {
                isHovered: isHovered,
                isDisabled: isDisabled,
                isSelected: isSelected
            });
            if (month.isHovered !== newMonth.isHovered ||
                month.isDisabled !== newMonth.isDisabled ||
                month.isSelected !== newMonth.isSelected) {
                monthCalendar.months[rowIndex][monthIndex] = newMonth;
            }
        }));
    }));
    // todo: add check for linked calendars
    monthCalendar.hideLeftArrow =
        options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
    monthCalendar.hideRightArrow =
        options.monthIndex < options.displayMonths &&
            options.monthIndex + 1 !== options.displayMonths;
    monthCalendar.disableLeftArrow = isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    monthCalendar.disableRightArrow = isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
    return monthCalendar;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var height$1 = 4;
/** @type {?} */
var width$1 = 4;
/** @type {?} */
var yearsPerCalendar = height$1 * width$1;
/** @type {?} */
var initialYearShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
/** @type {?} */
var shift$1 = { year: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @param {?=} previousInitialDate
 * @return {?}
 */
function formatYearsCalendar(viewDate, formatOptions, previousInitialDate) {
    /** @type {?} */
    var initialDate = calculateInitialDate(viewDate, previousInitialDate);
    /** @type {?} */
    var matrixOptions = { width: width$1, height: height$1, initialDate: initialDate, shift: shift$1 };
    /** @type {?} */
    var yearsMatrix = createMatrix(matrixOptions, (/**
     * @param {?} date
     * @return {?}
     */
    function (date) { return ({
        date: date,
        label: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, formatOptions.yearLabel, formatOptions.locale)
    }); }));
    /** @type {?} */
    var yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle: yearTitle
    };
}
/**
 * @param {?} viewDate
 * @param {?=} previousInitialDate
 * @return {?}
 */
function calculateInitialDate(viewDate, previousInitialDate) {
    if (previousInitialDate
        && viewDate.getFullYear() >= previousInitialDate.getFullYear()
        && viewDate.getFullYear() < previousInitialDate.getFullYear() + yearsPerCalendar) {
        return previousInitialDate;
    }
    return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(viewDate, { year: initialYearShift });
}
/**
 * @param {?} yearsMatrix
 * @param {?} formatOptions
 * @return {?}
 */
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    /** @type {?} */
    var from = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    /** @type {?} */
    var to = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return from + " - " + to;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} yearsCalendar
 * @param {?} options
 * @return {?}
 */
function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach((/**
     * @param {?} years
     * @param {?} rowIndex
     * @return {?}
     */
    function (years, rowIndex) {
        years.forEach((/**
         * @param {?} year
         * @param {?} yearIndex
         * @return {?}
         */
        function (year, yearIndex) {
            /** @type {?} */
            var isHovered = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isSameYear"])(year.date, options.hoveredYear);
            /** @type {?} */
            var isDisabled = options.isDisabled ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            /** @type {?} */
            var isSelected = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isSameYear"])(year.date, options.selectedDate);
            /** @type {?} */
            var newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled, isSelected: isSelected });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled ||
                year.isSelected !== newMonth.isSelected) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        }));
    }));
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    /** @type {?} */
    var i = yearsCalendar.years.length - 1;
    /** @type {?} */
    var j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable-next-line: cyclomatic-complexity */
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function bsDatepickerReducer(state, action) {
    if (state === void 0) { state = initialDatepickerState; }
    switch (action.type) {
        case BsDatepickerActions.CALCULATE: {
            return calculateReducer(state);
        }
        case BsDatepickerActions.FORMAT: {
            return formatReducer(state);
        }
        case BsDatepickerActions.FLAG: {
            return flagReducer(state);
        }
        case BsDatepickerActions.NAVIGATE_OFFSET: {
            return navigateOffsetReducer(state, action);
        }
        case BsDatepickerActions.NAVIGATE_TO: {
            /** @type {?} */
            var payload = action.payload;
            /** @type {?} */
            var date = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["setFullDate"])(state.view.date, payload.unit);
            /** @type {?} */
            var newState = void 0;
            /** @type {?} */
            var mode = void 0;
            if (canSwitchMode(payload.viewMode, state.minMode)) {
                mode = payload.viewMode;
                newState = { view: { date: date, mode: mode } };
            }
            else {
                mode = state.view.mode;
                newState = { selectedDate: date, view: { date: date, mode: mode } };
            }
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.CHANGE_VIEWMODE: {
            if (!canSwitchMode(action.payload, state.minMode)) {
                return state;
            }
            /** @type {?} */
            var date = state.view.date;
            /** @type {?} */
            var mode = action.payload;
            /** @type {?} */
            var newState = { view: { date: date, mode: mode } };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.HOVER: {
            return Object.assign({}, state, { hoveredDate: action.payload });
        }
        case BsDatepickerActions.SELECT: {
            /** @type {?} */
            var newState = {
                selectedDate: action.payload,
                view: state.view
            };
            /** @type {?} */
            var mode = state.view.mode;
            /** @type {?} */
            var _date = action.payload || state.view.date;
            /** @type {?} */
            var date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode: mode, date: date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_OPTIONS: {
            /** @type {?} */
            var newState = action.payload;
            // preserve view mode
            /** @type {?} */
            var mode = newState.minMode ? newState.minMode : state.view.mode;
            /** @type {?} */
            var _viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isDateValid"])(newState.value) && newState.value
                || Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isArray"])(newState.value) && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isDateValid"])(newState.value[0]) && newState.value[0]
                || state.view.date;
            /** @type {?} */
            var date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
            newState.view = { mode: mode, date: date };
            // update selected value
            if (newState.value) {
                // if new value is array we work with date range
                if (Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isArray"])(newState.value)) {
                    newState.selectedRange = newState.value;
                }
                // if new value is a date -> datepicker
                if (newState.value instanceof Date) {
                    newState.selectedDate = newState.value;
                }
                // provided value is not supported :)
                // need to report it somehow
            }
            return Object.assign({}, state, newState);
        }
        // date range picker
        case BsDatepickerActions.SELECT_RANGE: {
            /** @type {?} */
            var newState = {
                selectedRange: action.payload,
                view: state.view
            };
            /** @type {?} */
            var mode = state.view.mode;
            /** @type {?} */
            var _date = action.payload && action.payload[0] || state.view.date;
            /** @type {?} */
            var date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode: mode, date: date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_MIN_DATE: {
            return Object.assign({}, state, {
                minDate: action.payload
            });
        }
        case BsDatepickerActions.SET_MAX_DATE: {
            return Object.assign({}, state, {
                maxDate: action.payload
            });
        }
        case BsDatepickerActions.SET_IS_DISABLED: {
            return Object.assign({}, state, {
                isDisabled: action.payload
            });
        }
        case BsDatepickerActions.SET_DATE_CUSTOM_CLASSES: {
            return Object.assign({}, state, {
                dateCustomClasses: action.payload
            });
        }
        default:
            return state;
    }
}
/**
 * @param {?} state
 * @return {?}
 */
function calculateReducer(state) {
    // how many calendars
    /** @type {?} */
    var displayMonths = state.displayMonths;
    // use selected date on initial rendering if set
    /** @type {?} */
    var viewDate = state.view.date;
    if (state.view.mode === 'day') {
        state.monthViewOptions.firstDayOfWeek = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["getLocale"])(state.locale).firstDayOfWeek();
        /** @type {?} */
        var monthsModel = new Array(displayMonths);
        for (var monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
            viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(viewDate, { month: 1 });
        }
        return Object.assign({}, state, { monthsModel: monthsModel });
    }
    if (state.view.mode === 'month') {
        /** @type {?} */
        var monthsCalendar = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        /** @type {?} */
        var yearsCalendarModel = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state), state.minMode === 'year' ? getYearsCalendarInitialDate(state, calendarIndex) : undefined);
            viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(viewDate, { year: yearsPerCalendar });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function formatReducer(state, action) {
    if (state.view.mode === 'day') {
        /** @type {?} */
        var formattedMonths = state.monthsModel.map((/**
         * @param {?} month
         * @param {?} monthIndex
         * @return {?}
         */
        function (month, monthIndex) {
            return formatDaysCalendar(month, getFormatOptions(state), monthIndex);
        }));
        return Object.assign({}, state, { formattedMonths: formattedMonths });
    }
    // how many calendars
    /** @type {?} */
    var displayMonths = state.displayMonths;
    // check initial rendering
    // use selected date on initial rendering if set
    /** @type {?} */
    var viewDate = state.view.date;
    if (state.view.mode === 'month') {
        /** @type {?} */
        var monthsCalendar = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        /** @type {?} */
        var yearsCalendarModel = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(viewDate, { year: 16 });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function flagReducer(state, action) {
    if (state.view.mode === 'day') {
        /** @type {?} */
        var flaggedMonths = state.formattedMonths.map((/**
         * @param {?} formattedMonth
         * @param {?} monthIndex
         * @return {?}
         */
        function (formattedMonth, monthIndex) {
            return flagDaysCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                daysDisabled: state.daysDisabled,
                datesDisabled: state.datesDisabled,
                hoveredDate: state.hoveredDate,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: state.displayMonths,
                dateCustomClasses: state.dateCustomClasses,
                monthIndex: monthIndex
            });
        }));
        return Object.assign({}, state, { flaggedMonths: flaggedMonths });
    }
    if (state.view.mode === 'month') {
        /** @type {?} */
        var flaggedMonthsCalendar = state.monthsCalendar.map((/**
         * @param {?} formattedMonth
         * @param {?} monthIndex
         * @return {?}
         */
        function (formattedMonth, monthIndex) {
            return flagMonthsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredMonth: state.hoveredMonth,
                selectedDate: state.selectedDate,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        }));
        return Object.assign({}, state, { flaggedMonthsCalendar: flaggedMonthsCalendar });
    }
    if (state.view.mode === 'year') {
        /** @type {?} */
        var yearsCalendarFlagged = state.yearsCalendarModel.map((/**
         * @param {?} formattedMonth
         * @param {?} yearIndex
         * @return {?}
         */
        function (formattedMonth, yearIndex) {
            return flagYearsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredYear: state.hoveredYear,
                selectedDate: state.selectedDate,
                displayMonths: state.displayMonths,
                yearIndex: yearIndex
            });
        }));
        return Object.assign({}, state, { yearsCalendarFlagged: yearsCalendarFlagged });
    }
    return state;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function navigateOffsetReducer(state, action) {
    /** @type {?} */
    var newState = {
        view: {
            mode: state.view.mode,
            date: shiftViewDate(state, action)
        }
    };
    return Object.assign({}, state, newState);
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function shiftViewDate(state, action) {
    if (state.view.mode === 'year' && state.minMode === 'year') {
        /** @type {?} */
        var initialDate = getYearsCalendarInitialDate(state, 0);
        /** @type {?} */
        var middleDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(initialDate, { year: -initialYearShift });
        return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(middleDate, action.payload);
    }
    return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["startOf"])(state.view.date, 'month'), action.payload);
}
/**
 * @param {?} state
 * @return {?}
 */
function getFormatOptions(state) {
    return {
        locale: state.locale,
        monthTitle: state.monthTitle,
        yearTitle: state.yearTitle,
        dayLabel: state.dayLabel,
        monthLabel: state.monthLabel,
        yearLabel: state.yearLabel,
        weekNumbers: state.weekNumbers
    };
}
/**
 * if view date is provided (bsValue|ngModel) it should be shown
 * if view date is not provider:
 * if minDate>currentDate (default view value), show minDate
 * if maxDate<currentDate(default view value) show maxDate
 * @param {?} viewDate
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function getViewDate(viewDate, minDate, maxDate) {
    /** @type {?} */
    var _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
    if (minDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isAfter"])(minDate, _date, 'day')) {
        return minDate;
    }
    if (maxDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isBefore"])(maxDate, _date, 'day')) {
        return maxDate;
    }
    return _date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerStore = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BsDatepickerStore, _super);
    function BsDatepickerStore() {
        var _this = this;
        /** @type {?} */
        var _dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            type: '[datepicker] dispatcher init'
        });
        /** @type {?} */
        var state = new ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_5__["MiniState"](initialDatepickerState, _dispatcher, bsDatepickerReducer);
        _this = _super.call(this, _dispatcher, bsDatepickerReducer, state) || this;
        return _this;
    }
    BsDatepickerStore.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BsDatepickerStore.ctorParameters = function () { return []; };
    return BsDatepickerStore;
}(ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_5__["MiniStore"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DATEPICKER_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
/** @type {?} */
var datepickerAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('datepickerAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('animated-down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*', overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => animated-down', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: 0, overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(DATEPICKER_ANIMATION_TIMING)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('animated-up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*', overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => animated-up', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*', overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(DATEPICKER_ANIMATION_TIMING)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => unanimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('0s'))
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerContainerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BsDatepickerContainerComponent, _super);
    function BsDatepickerContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._store = _store;
        _this._element = _element;
        _this._actions = _actions;
        _this._positionService = _positionService;
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.animationState = 'void';
        _this._subs = [];
        _this._effects = _effects;
        _renderer.setStyle(_element.nativeElement, 'display', 'block');
        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
        return _this;
    }
    Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._positionService.setOptions({
            modifiers: { flip: { enabled: this._config.adaptivePosition } },
            allowedPositions: ['top', 'bottom']
        });
        this._positionService.event$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._positionService.disable();
            if (_this._config.isAnimated) {
                _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';
                return;
            }
            _this.animationState = 'unanimated';
        }));
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this.containerClass = this._config.containerClass;
        this._effects
            .init(this._store)
            // intial state options
            .setOptions(this._config)
            // data binding view --> model
            .setBindings(this)
            // set event handlers
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            /* tslint:disable-next-line: no-any */
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.selectedDate; }))
            /* tslint:disable-next-line: no-any */
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) { return _this.valueChange.emit(date); })));
    };
    Object.defineProperty(BsDatepickerContainerComponent.prototype, "isTopPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element.nativeElement.classList.contains('top');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.positionServiceEnable = /**
     * @return {?}
     */
    function () {
        this._positionService.enable();
    };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        /** @type {?} */
        var isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    };
    /**
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._effects.destroy();
    };
    BsDatepickerContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-datepicker-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        class: 'bottom',
                        '(click)': '_stopPropagation($event)',
                        role: 'dialog',
                        'aria-label': 'calendar'
                    },
                    animations: [datepickerAnimation]
                }] }
    ];
    /** @nocollapse */
    BsDatepickerContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: BsDatepickerConfig },
        { type: BsDatepickerStore },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: BsDatepickerActions },
        { type: BsDatepickerEffects },
        { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"] }
    ]; };
    return BsDatepickerContainerComponent;
}(BsDatepickerAbstractComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerDirective = /** @class */ (function () {
    function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close datepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the datepicker should be appended to.
         */
        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDatepickerDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the datepicker is currently being shown
         */
        get: /**
         * Returns whether or not the datepicker is currently being shown
         * @return {?}
         */
        function () {
            return this._datepicker.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerDirective.prototype, "bsValue", {
        /**
         * Initial value of datepicker
         */
        set: /**
         * Initial value of datepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            function () { return _this.show(); })
        });
        this.setConfig();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.daysDisabled) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDatepickerDirective.prototype.show = /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._datepickerRef.instance.value = value;
        })));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.bsValue = value;
            _this.hide();
        })));
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDatepickerDirective.prototype.hide = /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (this.isOpen) {
            this._datepicker.hide();
        }
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    BsDatepickerDirective.prototype.toggle = /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDatepickerDirective.prototype.setConfig = /**
     * Set config for datepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
        });
    };
    /**
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDatepickerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDatepicker]',
                    exportAs: 'bsDatepicker'
                },] }
    ];
    /** @nocollapse */
    BsDatepickerDirective.ctorParameters = function () { return [
        { type: BsDatepickerConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_8__["ComponentLoaderFactory"] }
    ]; };
    BsDatepickerDirective.propDecorators = {
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outsideEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        bsValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        daysDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        datesDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateCustomClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bsValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return BsDatepickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerInlineConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BsDatepickerInlineConfig, _super);
    function BsDatepickerInlineConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BsDatepickerInlineConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return BsDatepickerInlineConfig;
}(BsDatepickerConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerInlineContainerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BsDatepickerInlineContainerComponent, _super);
    function BsDatepickerInlineContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
        var _this = _super.call(this, _renderer, _config, _store, _element, _actions, _effects, _positioningService) || this;
        _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
        _renderer.setStyle(_element.nativeElement, 'position', 'static');
        return _this;
    }
    BsDatepickerInlineContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-datepicker-inline-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        '(click)': '_stopPropagation($event)'
                    },
                    animations: [datepickerAnimation]
                }] }
    ];
    /** @nocollapse */
    BsDatepickerInlineContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: BsDatepickerConfig },
        { type: BsDatepickerStore },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: BsDatepickerActions },
        { type: BsDatepickerEffects },
        { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"] }
    ]; };
    return BsDatepickerInlineContainerComponent;
}(BsDatepickerContainerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerInlineDirective = /** @class */ (function () {
    function BsDatepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    Object.defineProperty(BsDatepickerInlineDirective.prototype, "bsValue", {
        /**
         * Initial value of datepicker
         */
        set: /**
         * Initial value of datepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._datepickerRef.instance.value = value;
        })));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.bsValue = value;
        })));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
            this._datepickerRef.instance.value = this._bsValue;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
            this._datepickerRef.instance.value = this._bsValue;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            this._datepickerRef.instance.value = this._bsValue;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
    };
    /**
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.setConfig = /**
     * Set config for datepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
        });
    };
    /**
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDatepickerInlineDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'bs-datepicker-inline',
                    exportAs: 'bsDatepickerInline'
                },] }
    ];
    /** @nocollapse */
    BsDatepickerInlineDirective.ctorParameters = function () { return [
        { type: BsDatepickerInlineConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_8__["ComponentLoaderFactory"] }
    ]; };
    BsDatepickerInlineDirective.propDecorators = {
        bsValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateCustomClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        datesDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bsValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return BsDatepickerInlineDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDaterangepickerInlineConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BsDaterangepickerInlineConfig, _super);
    function BsDaterangepickerInlineConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // DatepickerRenderOptions
        _this.displayMonths = 2;
        /**
         * turn on/off animation
         */
        _this.isAnimated = false;
        return _this;
    }
    BsDaterangepickerInlineConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return BsDaterangepickerInlineConfig;
}(BsDatepickerConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDaterangepickerContainerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BsDaterangepickerContainerComponent, _super);
    function BsDaterangepickerContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._store = _store;
        _this._element = _element;
        _this._actions = _actions;
        _this._positionService = _positionService;
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.animationState = 'void';
        _this._rangeStack = [];
        _this._subs = [];
        _this._effects = _effects;
        _renderer.setStyle(_element.nativeElement, 'display', 'block');
        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
        return _this;
    }
    Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setRangeValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDaterangepickerContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._positionService.setOptions({
            modifiers: { flip: { enabled: this._config.adaptivePosition } },
            allowedPositions: ['top', 'bottom']
        });
        this._positionService.event$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._positionService.disable();
            if (_this._config.isAnimated) {
                _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';
                return;
            }
            _this.animationState = 'unanimated';
        }));
        this.containerClass = this._config.containerClass;
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this._effects
            .init(this._store)
            // intial state options
            // todo: fix this, split configs
            .setOptions(this._config)
            // data binding view --> model
            .setBindings(this)
            // set event handlers
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.selectedRange; }))
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) { return _this.valueChange.emit(date); })));
    };
    Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "isTopPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element.nativeElement.classList.contains('top');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDaterangepickerContainerComponent.prototype.positionServiceEnable = /**
     * @return {?}
     */
    function () {
        this._positionService.enable();
    };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDaterangepickerContainerComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        /** @type {?} */
        var isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        // if only one date is already selected
        // and user clicks on previous date
        // start selection from new date
        // but if new date is after initial one
        // than finish selection
        if (this._rangeStack.length === 1) {
            this._rangeStack =
                day.date >= this._rangeStack[0]
                    ? [this._rangeStack[0], day.date]
                    : [day.date];
        }
        if (this._rangeStack.length === 0) {
            this._rangeStack = [day.date];
        }
        this._store.dispatch(this._actions.selectRange(this._rangeStack));
        if (this._rangeStack.length === 2) {
            this._rangeStack = [];
        }
    };
    /**
     * @return {?}
     */
    BsDaterangepickerContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._effects.destroy();
    };
    BsDaterangepickerContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-daterangepicker-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        class: 'bottom',
                        '(click)': '_stopPropagation($event)',
                        role: 'dialog',
                        'aria-label': 'calendar'
                    },
                    animations: [datepickerAnimation]
                }] }
    ];
    /** @nocollapse */
    BsDaterangepickerContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: BsDatepickerConfig },
        { type: BsDatepickerStore },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: BsDatepickerActions },
        { type: BsDatepickerEffects },
        { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"] }
    ]; };
    return BsDaterangepickerContainerComponent;
}(BsDatepickerAbstractComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDaterangepickerInlineContainerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BsDaterangepickerInlineContainerComponent, _super);
    function BsDaterangepickerInlineContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
        var _this = _super.call(this, _renderer, _config, _store, _element, _actions, _effects, _positioningService) || this;
        _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
        _renderer.setStyle(_element.nativeElement, 'position', 'static');
        return _this;
    }
    BsDaterangepickerInlineContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-daterangepicker-inline-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        '(click)': '_stopPropagation($event)'
                    },
                    animations: [datepickerAnimation]
                }] }
    ];
    /** @nocollapse */
    BsDaterangepickerInlineContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: BsDatepickerConfig },
        { type: BsDatepickerStore },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: BsDatepickerActions },
        { type: BsDatepickerEffects },
        { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"] }
    ]; };
    return BsDaterangepickerInlineContainerComponent;
}(BsDaterangepickerContainerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDaterangepickerInlineDirective = /** @class */ (function () {
    function BsDaterangepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    Object.defineProperty(BsDaterangepickerInlineDirective.prototype, "bsValue", {
        /**
         * Initial value of datepicker
         */
        set: /**
         * Initial value of datepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._datepickerRef.instance.value = value;
        })));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} range
         * @return {?}
         */
        function (range) { return range && range[0] && !!range[1]; })))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.bsValue = value;
        })));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
    };
    /**
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.setConfig = /**
     * Set config for datepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
        });
    };
    /**
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDaterangepickerInlineDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'bs-daterangepicker-inline',
                    exportAs: 'bsDaterangepickerInline'
                },] }
    ];
    /** @nocollapse */
    BsDaterangepickerInlineDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerInlineConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_8__["ComponentLoaderFactory"] }
    ]; };
    BsDaterangepickerInlineDirective.propDecorators = {
        bsValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateCustomClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        datesDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bsValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return BsDaterangepickerInlineDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var BS_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return BsDatepickerInputDirective; })),
    multi: true
};
/** @type {?} */
var BS_DATEPICKER_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALIDATORS"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return BsDatepickerInputDirective; })),
    multi: true
};
var BsDatepickerInputDirective = /** @class */ (function () {
    function BsDatepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
        var _this = this;
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        /* tslint:disable-next-line: no-unused-variable */
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._setInputValue(value);
            if (_this._value !== value) {
                _this._value = value;
                _this._onChange(value);
                _this._onTouched();
            }
            _this.changeDetection.markForCheck();
        }));
        // update input value on locale change
        this._localeService.localeChange.subscribe((/**
         * @return {?}
         */
        function () {
            _this._setInputValue(_this._value);
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerInputDirective.prototype._setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var initialDate = !value ? ''
            : Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* tslint:disable-next-line: no-any*/
        this.writeValue(((/** @type {?} */ (event.target))).value);
        this._onChange(this._value);
        this._onTouched();
    };
    /**
     * @param {?} c
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var _value = c.value;
        /* tslint:disable-next-line: prefer-switch */
        if (_value === null || _value === undefined || _value === '') {
            return null;
        }
        if (Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isDate"])(_value)) {
            /** @type {?} */
            var _isDateValid = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isDateValid"])(_value);
            if (!_isDateValid) {
                return { bsDate: { invalid: _value } };
            }
            if (this._picker && this._picker.minDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isBefore"])(_value, this._picker.minDate, 'date')) {
                return { bsDate: { minDate: this._picker.minDate } };
            }
            if (this._picker && this._picker.maxDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isAfter"])(_value, this._picker.maxDate, 'date')) {
                return { bsDate: { maxDate: this._picker.maxDate } };
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._validatorChange = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            this._value = null;
        }
        else {
            /** @type {?} */
            var _localeKey = this._localeService.currentLocale;
            /** @type {?} */
            var _locale = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["getLocale"])(_localeKey);
            if (!_locale) {
                throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
            }
            this._value = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["parseDate"])(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
            if (this._picker._config.useUtc) {
                this._value = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["utcAsLocal"])(this._value);
            }
        }
        this._picker.bsValue = this._value;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._onTouched();
    };
    /**
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    };
    BsDatepickerInputDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "input[bsDatepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
                },] }
    ];
    /** @nocollapse */
    BsDatepickerInputDirective.ctorParameters = function () { return [
        { type: BsDatepickerDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
        { type: BsLocaleService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    return BsDatepickerInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDaterangepickerConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BsDaterangepickerConfig, _super);
    function BsDaterangepickerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // DatepickerRenderOptions
        _this.displayMonths = 2;
        return _this;
    }
    BsDaterangepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return BsDaterangepickerConfig;
}(BsDatepickerConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDaterangepickerDirective = /** @class */ (function () {
    function BsDaterangepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close daterangepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the daterangepicker should be appended to.
         */
        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subs = [];
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        Object.assign(this, _config);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDaterangepickerDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the daterangepicker is currently being shown
         */
        get: /**
         * Returns whether or not the daterangepicker is currently being shown
         * @return {?}
         */
        function () {
            return this._datepicker.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDaterangepickerDirective.prototype, "bsValue", {
        /**
         * Initial value of daterangepicker
         */
        set: /**
         * Initial value of daterangepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            function () { return _this.show(); })
        });
        this.setConfig();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.show = /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._datepickerRef.instance.value = value;
        })));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} range
         * @return {?}
         */
        function (range) { return range && range[0] && !!range[1]; })))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.bsValue = value;
            _this.hide();
        })));
    };
    /**
     * Set config for daterangepicker
     */
    /**
     * Set config for daterangepicker
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.setConfig = /**
     * Set config for daterangepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
        });
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.hide = /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (this.isOpen) {
            this._datepicker.hide();
        }
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.toggle = /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDaterangepickerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDaterangepicker]',
                    exportAs: 'bsDaterangepicker'
                },] }
    ];
    /** @nocollapse */
    BsDaterangepickerDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_8__["ComponentLoaderFactory"] }
    ]; };
    BsDaterangepickerDirective.propDecorators = {
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outsideEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        bsValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateCustomClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        datesDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bsValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return BsDaterangepickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return BsDaterangepickerInputDirective; })),
    multi: true
};
/** @type {?} */
var BS_DATERANGEPICKER_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALIDATORS"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return BsDaterangepickerInputDirective; })),
    multi: true
};
var BsDaterangepickerInputDirective = /** @class */ (function () {
    function BsDaterangepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
        var _this = this;
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        /* tslint:disable-next-line: no-unused-variable */
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._setInputValue(value);
            if (_this._value !== value) {
                _this._value = value;
                _this._onChange(value);
                _this._onTouched();
            }
            _this.changeDetection.markForCheck();
        }));
        // update input value on locale change
        this._localeService.localeChange.subscribe((/**
         * @return {?}
         */
        function () {
            _this._setInputValue(_this._value);
        }));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype._setInputValue = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var range = '';
        if (date) {
            /** @type {?} */
            var start = !date[0] ? ''
                : Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            /** @type {?} */
            var end = !date[1] ? ''
                : Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
        }
        this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* tslint:disable-next-line: no-any*/
        this.writeValue(((/** @type {?} */ (event.target))).value);
        this._onChange(this._value);
        this._onTouched();
    };
    /**
     * @param {?} c
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var _value = c.value;
        if (_value === null || _value === undefined || !Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isArray"])(_value)) {
            return null;
        }
        /** @type {?} */
        var _isFirstDateValid = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isDateValid"])(_value[0]);
        /** @type {?} */
        var _isSecondDateValid = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isDateValid"])(_value[1]);
        if (!_isFirstDateValid) {
            return { bsDate: { invalid: _value[0] } };
        }
        if (!_isSecondDateValid) {
            return { bsDate: { invalid: _value[1] } };
        }
        if (this._picker && this._picker.minDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isBefore"])(_value[0], this._picker.minDate, 'date')) {
            return { bsDate: { minDate: this._picker.minDate } };
        }
        if (this._picker && this._picker.maxDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["isAfter"])(_value[1], this._picker.maxDate, 'date')) {
            return { bsDate: { maxDate: this._picker.maxDate } };
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._validatorChange = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (!value) {
            this._value = null;
        }
        else {
            /** @type {?} */
            var _localeKey = this._localeService.currentLocale;
            /** @type {?} */
            var _locale = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["getLocale"])(_localeKey);
            if (!_locale) {
                throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
            }
            /** @type {?} */
            var _input = [];
            if (typeof value === 'string') {
                _input = value.split(this._picker._config.rangeSeparator);
            }
            if (Array.isArray(value)) {
                _input = value;
            }
            this._value = ((/** @type {?} */ (_input)))
                .map((/**
             * @param {?} _val
             * @return {?}
             */
            function (_val) {
                if (_this._picker._config.useUtc) {
                    return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["utcAsLocal"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["parseDate"])(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale));
                }
                return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["parseDate"])(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale);
            }))
                .map((/**
             * @param {?} date
             * @return {?}
             */
            function (date) { return (isNaN(date.valueOf()) ? null : date); }));
        }
        this._picker.bsValue = this._value;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.registerOnChange = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.registerOnTouched = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._onTouched();
    };
    /**
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    };
    BsDaterangepickerInputDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "input[bsDaterangepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
                },] }
    ];
    /** @nocollapse */
    BsDaterangepickerInputDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
        { type: BsLocaleService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    return BsDaterangepickerInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsCalendarLayoutComponent = /** @class */ (function () {
    function BsCalendarLayoutComponent() {
    }
    BsCalendarLayoutComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-calendar-layout',
                    template: "\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "
                }] }
    ];
    return BsCalendarLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsCurrentDateViewComponent = /** @class */ (function () {
    function BsCurrentDateViewComponent() {
    }
    BsCurrentDateViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-current-date',
                    template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
                }] }
    ];
    BsCurrentDateViewComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return BsCurrentDateViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsCustomDatesViewComponent = /** @class */ (function () {
    function BsCustomDatesViewComponent() {
    }
    BsCustomDatesViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-custom-date-view',
                    template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\" type=\"button\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\" type=\"button\">Custom Range</button>\n    </div>\n  ",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    BsCustomDatesViewComponent.propDecorators = {
        isCustomRangeShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ranges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return BsCustomDatesViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerDayDecoratorComponent = /** @class */ (function () {
    function BsDatepickerDayDecoratorComponent(_config, _elRef, _renderer) {
        this._config = _config;
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    BsDatepickerDayDecoratorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.day.isToday && this._config && this._config.customTodayClass) {
            this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
        }
        if (typeof this.day.customClasses === 'string') {
            this.day.customClasses.split(' ')
                .filter((/**
             * @param {?} className
             * @return {?}
             */
            function (className) { return className; }))
                .forEach((/**
             * @param {?} className
             * @return {?}
             */
            function (className) {
                _this._renderer.addClass(_this._elRef.nativeElement, className);
            }));
        }
    };
    BsDatepickerDayDecoratorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: '[bsDatepickerDayDecorator]',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[class.disabled]': 'day.isDisabled',
                        '[class.is-highlighted]': 'day.isHovered',
                        '[class.is-other-month]': 'day.isOtherMonth',
                        '[class.is-active-other-month]': 'day.isOtherMonthHovered',
                        '[class.in-range]': 'day.isInRange',
                        '[class.select-start]': 'day.isSelectionStart',
                        '[class.select-end]': 'day.isSelectionEnd',
                        '[class.selected]': 'day.isSelected'
                    },
                    template: "{{ day.label }}"
                }] }
    ];
    /** @nocollapse */
    BsDatepickerDayDecoratorComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    BsDatepickerDayDecoratorComponent.propDecorators = {
        day: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return BsDatepickerDayDecoratorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var BsNavigationDirection = {
    UP: 0,
    DOWN: 1,
};
BsNavigationDirection[BsNavigationDirection.UP] = 'UP';
BsNavigationDirection[BsNavigationDirection.DOWN] = 'DOWN';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerNavigationViewComponent = /** @class */ (function () {
    function BsDatepickerNavigationViewComponent() {
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} down
     * @return {?}
     */
    BsDatepickerNavigationViewComponent.prototype.navTo = /**
     * @param {?} down
     * @return {?}
     */
    function (down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    };
    /**
     * @param {?} viewMode
     * @return {?}
     */
    BsDatepickerNavigationViewComponent.prototype.view = /**
     * @param {?} viewMode
     * @return {?}
     */
    function (viewMode) {
        this.onViewMode.emit(viewMode);
    };
    BsDatepickerNavigationViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-datepicker-navigation-view',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            type=\"button\"\n            (click)=\"navTo(true)\">\n      <span>&lsaquo;</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\"\n            *ngIf=\"calendar.monthTitle\"\n            type=\"button\"\n            (click)=\"view('month')\">\n      <span>{{ calendar.monthTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\" (click)=\"view('year')\" type=\"button\">\n      <span>{{ calendar.yearTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            type=\"button\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                }] }
    ];
    BsDatepickerNavigationViewComponent.propDecorators = {
        calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onNavigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onViewMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return BsDatepickerNavigationViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDaysCalendarViewComponent = /** @class */ (function () {
    function BsDaysCalendarViewComponent(_config) {
        this._config = _config;
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHoverWeek = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onViewMode.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.selectDay = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onSelect.emit(event);
    };
    /**
     * @param {?} week
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.selectWeek = /**
     * @param {?} week
     * @return {?}
     */
    function (week) {
        var _this = this;
        if (!this._config.selectWeek) {
            return;
        }
        if (week.days
            && week.days[0]
            && !week.days[0].isDisabled
            && this._config.selectFromOtherMonth) {
            this.onSelect.emit(week.days[0]);
            return;
        }
        if (week.days.length === 0) {
            return;
        }
        /** @type {?} */
        var selectedDay = week.days.find((/**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            return _this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        }));
        this.onSelect.emit(selectedDay);
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.weekHoverHandler = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        var _this = this;
        if (!this._config.selectWeek) {
            return;
        }
        /** @type {?} */
        var hasActiveDays = cell.days.find((/**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            return _this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        }));
        if (hasActiveDays) {
            cell.isHovered = isHovered;
            this.isWeekHovered = isHovered;
            this.onHoverWeek.emit(cell);
        }
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.hoverDay = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
            cell.isOtherMonthHovered = isHovered;
        }
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsDaysCalendarViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-days-calendar-view',
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" [class.active-week]=\"isWeekHovered\"  *ngIf=\"options.showWeekNumbers\">\n            <span\n                (click)=\"selectWeek(week)\"\n                (mouseenter)=\"weekHoverHandler(week, true)\"\n                (mouseleave)=\"weekHoverHandler(week, false)\">{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDaysCalendarViewComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig }
    ]; };
    BsDaysCalendarViewComponent.propDecorators = {
        calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onNavigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onViewMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHoverWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return BsDaysCalendarViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsMonthCalendarViewComponent = /** @class */ (function () {
    function BsMonthCalendarViewComponent() {
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsMonthCalendarViewComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step } });
    };
    /**
     * @param {?} month
     * @return {?}
     */
    BsMonthCalendarViewComponent.prototype.viewMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.onSelect.emit(month);
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsMonthCalendarViewComponent.prototype.hoverMonth = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsMonthCalendarViewComponent.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onViewMode.emit(event);
    };
    BsMonthCalendarViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-month-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span [class.selected]=\"month.isSelected\">{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                }] }
    ];
    BsMonthCalendarViewComponent.propDecorators = {
        calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onNavigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onViewMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return BsMonthCalendarViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsTimepickerViewComponent = /** @class */ (function () {
    function BsTimepickerViewComponent() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
    BsTimepickerViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-timepicker',
                    template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <button class=\"switch-time-format\" type=\"button\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
                }] }
    ];
    return BsTimepickerViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsYearsCalendarViewComponent = /** @class */ (function () {
    function BsYearsCalendarViewComponent() {
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
    };
    /**
     * @param {?} year
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.viewYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.onSelect.emit(year);
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.hoverYear = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onViewMode.emit(event);
    };
    BsYearsCalendarViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-years-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span [class.selected]=\"year.isSelected\">{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                }] }
    ];
    BsYearsCalendarViewComponent.propDecorators = {
        calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onNavigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onViewMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return BsYearsCalendarViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var _exports = [
    BsDatepickerContainerComponent,
    BsDatepickerDirective,
    BsDatepickerInlineContainerComponent,
    BsDatepickerInlineDirective,
    BsDatepickerInputDirective,
    BsDaterangepickerContainerComponent,
    BsDaterangepickerDirective,
    BsDaterangepickerInlineContainerComponent,
    BsDaterangepickerInlineDirective,
    BsDaterangepickerInputDirective
];
var BsDatepickerModule = /** @class */ (function () {
    function BsDatepickerModule() {
    }
    /**
     * @return {?}
     */
    BsDatepickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_8__["ComponentLoaderFactory"],
                ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"],
                BsDatepickerStore,
                BsDatepickerActions,
                BsDatepickerConfig,
                BsDaterangepickerConfig,
                BsDatepickerInlineConfig,
                BsDaterangepickerInlineConfig,
                BsDatepickerEffects,
                BsLocaleService
            ]
        };
    };
    BsDatepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([
                        BsCalendarLayoutComponent,
                        BsCurrentDateViewComponent,
                        BsCustomDatesViewComponent,
                        BsDatepickerDayDecoratorComponent,
                        BsDatepickerNavigationViewComponent,
                        BsDaysCalendarViewComponent,
                        BsMonthCalendarViewComponent,
                        BsTimepickerViewComponent,
                        BsYearsCalendarViewComponent
                    ], _exports),
                    entryComponents: [
                        BsDatepickerContainerComponent,
                        BsDaterangepickerContainerComponent,
                        BsDatepickerInlineContainerComponent,
                        BsDaterangepickerInlineContainerComponent
                    ],
                    exports: _exports
                },] }
    ];
    return BsDatepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateFormatter = /** @class */ (function () {
    function DateFormatter() {
    }
    /**
     * @param {?} date
     * @param {?} format
     * @param {?} locale
     * @return {?}
     */
    DateFormatter.prototype.format = /**
     * @param {?} date
     * @param {?} format
     * @param {?} locale
     * @return {?}
     */
    function (date, format, locale) {
        return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, format, locale);
    };
    return DateFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatePickerInnerComponent = /** @class */ (function () {
    function DatePickerInnerComponent() {
        this.selectionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);
        /* tslint:disable-next-line: no-any*/
        this.stepDay = {};
        /* tslint:disable-next-line: no-any*/
        this.stepMonth = {};
        /* tslint:disable-next-line: no-any*/
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new DateFormatter();
    }
    Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    // todo: add formatter value to Date object
    // todo: add formatter value to Date object
    /**
     * @return {?}
     */
    DatePickerInnerComponent.prototype.ngOnInit = 
    // todo: add formatter value to Date object
    /**
     * @return {?}
     */
    function () {
        // todo: use date for unique value
        this.uniqueId = "datepicker--" + Math.floor(Math.random() * 10000);
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    };
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    /**
     * @param {?} changes
     * @return {?}
     */
    DatePickerInnerComponent.prototype.ngOnChanges = 
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.refreshView();
        this.checkIfActiveDateGotUpdated(changes.activeDate);
    };
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    /* tslint:disable-next-line: no-any */
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} activeDate
     * @return {?}
     */
    DatePickerInnerComponent.prototype.checkIfActiveDateGotUpdated = 
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} activeDate
     * @return {?}
     */
    function (activeDate) {
        if (activeDate && !activeDate.firstChange) {
            /** @type {?} */
            var previousValue = activeDate.previousValue;
            if (previousValue &&
                previousValue instanceof Date &&
                previousValue.getTime() !== activeDate.currentValue.getTime()) {
                this.activeDateChange.emit(this.activeDate);
            }
        }
    };
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    DatePickerInnerComponent.prototype.setCompareHandler = /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    function (handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    };
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    DatePickerInnerComponent.prototype.compare = /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function (date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    };
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    DatePickerInnerComponent.prototype.setRefreshViewHandler = /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    function (handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    };
    /**
     * @return {?}
     */
    DatePickerInnerComponent.prototype.refreshView = /**
     * @return {?}
     */
    function () {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    };
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    DatePickerInnerComponent.prototype.dateFilter = /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    function (date, format) {
        return this.dateFormatter.format(date, format, this.locale);
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} dateObject
     * @return {?}
     */
    DatePickerInnerComponent.prototype.isActive = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} dateObject
     * @return {?}
     */
    function (dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    DatePickerInnerComponent.prototype.createDateObject = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    function (date, format) {
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        var dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.date = this.fixTimeZone(dateObject.date);
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */
    DatePickerInnerComponent.prototype.split = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */
    function (arr, size) {
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        var arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    };
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    /**
     * @param {?} date
     * @return {?}
     */
    DatePickerInnerComponent.prototype.fixTimeZone = 
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    };
    /**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */
    DatePickerInnerComponent.prototype.select = /**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */
    function (date, isManual) {
        if (isManual === void 0) { isManual = true; }
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            }
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    DatePickerInnerComponent.prototype.move = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        var expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep) {
            /** @type {?} */
            var year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            /** @type {?} */
            var month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
        }
    };
    /**
     * @param {?} _direction
     * @return {?}
     */
    DatePickerInnerComponent.prototype.toggleMode = /**
     * @param {?} _direction
     * @return {?}
     */
    function (_direction) {
        /** @type {?} */
        var direction = _direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    };
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    DatePickerInnerComponent.prototype.getCustomClassForDate = /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        /** @type {?} */
        var customClassObject = this.customClass.find((/**
         * @param {?} customClass
         * @return {?}
         */
        function (customClass) {
            return (customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === _this.datepickerMode);
        }), this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    };
    /**
     * @protected
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */
    DatePickerInnerComponent.prototype.compareDateDisabled = /**
     * @protected
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */
    function (date1Disabled, date2) {
        if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
        }
        if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
        }
        return undefined;
    };
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    DatePickerInnerComponent.prototype.isDisabled = /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        /** @type {?} */
        var isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach((/**
             * @param {?} disabledDate
             * @return {?}
             */
            function (disabledDate) {
                if (_this.compareDateDisabled(disabledDate, date) === 0) {
                    isDateDisabled = true;
                }
            }));
        }
        if (this.dayDisabled) {
            isDateDisabled =
                isDateDisabled ||
                    this.dayDisabled.indexOf(date.getDay()) > -1;
        }
        return (isDateDisabled ||
            (this.minDate && this.compare(date, this.minDate) < 0) ||
            (this.maxDate && this.compare(date, this.maxDate) > 0));
    };
    DatePickerInnerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datepicker-inner',
                    template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "
                }] }
    ];
    DatePickerInnerComponent.propDecorators = {
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        datepickerMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        startingDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        yearRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showWeeks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatYear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatDayHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatDayTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatMonthTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onlyCurrentMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        shortcutPropagation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        monthColLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        yearColLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        initDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectionDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return DatePickerInnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatepickerConfig = /** @class */ (function () {
    function DatepickerConfig() {
        this.locale = 'en';
        this.datepickerMode = 'day';
        this.startingDay = 0;
        this.yearRange = 20;
        this.minMode = 'day';
        this.maxMode = 'year';
        this.showWeeks = true;
        this.formatDay = 'DD';
        this.formatMonth = 'MMMM';
        this.formatYear = 'YYYY';
        this.formatDayHeader = 'dd';
        this.formatDayTitle = 'MMMM YYYY';
        this.formatMonthTitle = 'YYYY';
        this.onlyCurrentMonth = false;
        this.monthColLimit = 3;
        this.yearColLimit = 5;
        this.shortcutPropagation = false;
    }
    DatepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return DatepickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return DatePickerComponent; })),
    multi: true
};
/* tslint:disable:component-selector-name component-selector-type */
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent(config) {
        /**
         * sets datepicker mode, supports: `day`, `month`, `year`
         */
        this.datepickerMode = 'day';
        /**
         * if false week numbers will be hidden
         */
        this.showWeeks = true;
        this.selectionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);
        /**
         * callback to invoke when the activeDate is changed.
         */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);
        /* tslint:disable-next-line: no-any*/
        this.onChange = Function.prototype;
        /* tslint:disable-next-line: no-any*/
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        /** currently active date */
        get: /**
         * currently active date
         * @return {?}
         */
        function () {
            return this._activeDate || this._now;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.configureOptions = /**
     * @return {?}
     */
    function () {
        Object.assign(this, this.config);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onUpdate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activeDate = event;
        this.onChange(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onSelectionDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectionDone.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onActiveDateChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activeDateChange.emit(event);
    };
    // todo: support null value
    /* tslint:disable-next-line: no-any*/
    // todo: support null value
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} value
     * @return {?}
     */
    DatePickerComponent.prototype.writeValue = 
    // todo: support null value
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    DatePickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datepicker',
                    template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () { return [
        { type: DatepickerConfig }
    ]; };
    DatePickerComponent.propDecorators = {
        datepickerMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        initDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showWeeks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatYear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatDayHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatDayTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatMonthTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        startingDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        yearRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onlyCurrentMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        shortcutPropagation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        monthColLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        yearColLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectionDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        _datePicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DatePickerInnerComponent, { static: true },] }]
    };
    return DatePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DayPickerComponent = /** @class */ (function () {
    function DayPickerComponent(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_11__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /*protected getDaysInMonth(year:number, month:number) {
     return ((month === 1) && (year % 4 === 0) &&
     ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
     }*/
    /*protected getDaysInMonth(year:number, month:number) {
       return ((month === 1) && (year % 4 === 0) &&
       ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
       }*/
    /**
     * @return {?}
     */
    DayPickerComponent.prototype.ngOnInit = /*protected getDaysInMonth(year:number, month:number) {
       return ((month === 1) && (year % 4 === 0) &&
       ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
       }*/
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var year = this.activeDate.getFullYear();
            /** @type {?} */
            var month = this.activeDate.getMonth();
            /** @type {?} */
            var firstDayOfMonth = new Date(year, month, 1);
            /** @type {?} */
            var difference = this.startingDay - firstDayOfMonth.getDay();
            /** @type {?} */
            var numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
            /** @type {?} */
            var firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            /** @type {?} */
            var _days = self.getDates(firstDate, 42);
            /** @type {?} */
            var days = [];
            for (var i = 0; i < 42; i++) {
                /** @type {?} */
                var _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (var j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                /** @type {?} */
                var thursdayIndex = (4 + 7 - this.startingDay) % 7;
                /** @type {?} */
                var numWeeks = self.rows.length;
                for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }), 'day');
        this.datePicker.setCompareHandler((/**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
        function (date1, date2) {
            /** @type {?} */
            var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            /** @type {?} */
            var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }), 'day');
        this.datePicker.refreshView();
    };
    /**
     * @protected
     * @param {?} startDate
     * @param {?} n
     * @return {?}
     */
    DayPickerComponent.prototype.getDates = /**
     * @protected
     * @param {?} startDate
     * @param {?} n
     * @return {?}
     */
    function (startDate, n) {
        /** @type {?} */
        var dates = new Array(n);
        /** @type {?} */
        var current = new Date(startDate.getTime());
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
        return dates;
    };
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    DayPickerComponent.prototype.getISO8601WeekNumber = /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        /** @type {?} */
        var time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
    };
    DayPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'daypicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    DayPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent }
    ]; };
    return DayPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MonthPickerComponent = /** @class */ (function () {
    function MonthPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_11__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MonthPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.datePicker.stepMonth = { years: 1 };
        this.datePicker.setRefreshViewHandler((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var months = new Array(12);
            /** @type {?} */
            var year = this.activeDate.getFullYear();
            /** @type {?} */
            var date;
            for (var i = 0; i < 12; i++) {
                date = new Date(year, i, 1);
                date = this.fixTimeZone(date);
                months[i] = this.createDateObject(date, this.formatMonth);
                months[i].uid = this.uniqueId + '-' + i;
            }
            self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
            self.rows = this.split(months, self.datePicker.monthColLimit);
        }), 'month');
        this.datePicker.setCompareHandler((/**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
        function (date1, date2) {
            /** @type {?} */
            var d1 = new Date(date1.getFullYear(), date1.getMonth());
            /** @type {?} */
            var d2 = new Date(date2.getFullYear(), date2.getMonth());
            return d1.getTime() - d2.getTime();
        }), 'month');
        this.datePicker.refreshView();
    };
    MonthPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'monthpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong> \n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    MonthPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent }
    ]; };
    return MonthPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var YearPickerComponent = /** @class */ (function () {
    function YearPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_11__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    YearPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.datePicker.stepYear = { years: this.datePicker.yearRange };
        this.datePicker.setRefreshViewHandler((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var years = new Array(this.yearRange);
            /** @type {?} */
            var date;
            /** @type {?} */
            var start = self.getStartingYear(this.activeDate.getFullYear());
            for (var i = 0; i < this.yearRange; i++) {
                date = new Date(start + i, 0, 1);
                date = this.fixTimeZone(date);
                years[i] = this.createDateObject(date, this.formatYear);
                years[i].uid = this.uniqueId + '-' + i;
            }
            self.title = [years[0].label, years[this.yearRange - 1].label].join(' - ');
            self.rows = this.split(years, self.datePicker.yearColLimit);
        }), 'year');
        this.datePicker.setCompareHandler((/**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
        function (date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
        }), 'year');
        this.datePicker.refreshView();
    };
    /**
     * @protected
     * @param {?} year
     * @return {?}
     */
    YearPickerComponent.prototype.getStartingYear = /**
     * @protected
     * @param {?} year
     * @return {?}
     */
    function (year) {
        // todo: parseInt
        return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
    };
    YearPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'yearpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    YearPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent }
    ]; };
    return YearPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatepickerModule = /** @class */ (function () {
    function DatepickerModule() {
    }
    /**
     * @return {?}
     */
    DatepickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
    };
    DatepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
                    declarations: [
                        DatePickerComponent,
                        DatePickerInnerComponent,
                        DayPickerComponent,
                        MonthPickerComponent,
                        YearPickerComponent
                    ],
                    exports: [
                        DatePickerComponent,
                        DatePickerInnerComponent,
                        DayPickerComponent,
                        MonthPickerComponent,
                        YearPickerComponent
                    ],
                    entryComponents: [DatePickerComponent]
                },] }
    ];
    return DatepickerModule;
}());


//# sourceMappingURL=ngx-bootstrap-datepicker.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js ***!
  \**********************************************************/
/*! exports provided: listLocales, setTheme, AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent, AlertComponent, AlertConfig, AlertModule, ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, CarouselComponent, CarouselConfig, CarouselModule, SlideComponent, CollapseDirective, CollapseModule, BsDatepickerConfig, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInputDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatepickerConfig, DatePickerInnerComponent, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, ModalDirective, ModalOptions, ModalBackdropOptions, ModalBackdropComponent, ModalModule, BsModalRef, BsModalService, BsDropdownModule, BsDropdownConfig, BsDropdownState, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule, RatingComponent, RatingModule, DraggableItemService, SortableComponent, SortableModule, NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, TimepickerComponent, TimepickerConfig, TimepickerModule, TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, TypeaheadOptions, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule, OnChange, document, window, parseTriggers, LinkedList, isBs3, Trigger, warnOnce, Utils, listenToTriggersV2, registerOutsideClick, ComponentLoader, ComponentLoaderFactory, ContentRef, BsComponentRef, Positioning, PositioningService, positionElements, MiniState, MiniStore, defineLocale, getSetGlobalLocale, parseDate, formatDate, getDay, isFirstDayOfWeek, isSameYear, isSameDay, isSameMonth, getFullYear, getFirstDayOfMonth, getMonth, getLocale, updateLocale, isAfter, isBefore, isArray, isDateValid, isDate, shiftDate, setFullDate, endOf, startOf, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, etLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, hrLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, lvLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, ukLocale, viLocale, zhCnLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./node_modules/ngx-bootstrap/esm5/public_api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["listLocales"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["setTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionPanelComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonCheckboxDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonRadioDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonRadioGroupDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CarouselComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CarouselConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CarouselModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SlideComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CollapseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CollapseModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerInlineContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerInlineDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInputDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInputDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsLocaleService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsLocaleService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatePickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerInnerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatePickerInnerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayPickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DayPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MonthPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearPickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["YearPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalBackdropOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalBackdropComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsModalRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsModalService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownMenuDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PagerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PaginationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PaginationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PaginationModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressbarConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressbarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RatingComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RatingModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableItemService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DraggableItemService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SortableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SortableModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgTranscludeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabHeadingDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabsetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabsetConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimepickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOptions", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMatch", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["OnChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["parseTriggers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isBs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["warnOnce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["listenToTriggersV2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["registerOutsideClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentLoaderFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ContentRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsComponentRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsComponentRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Positioning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PositioningService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["positionElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniState", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MiniState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniStore", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MiniStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["defineLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getSetGlobalLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["parseDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDay", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFirstDayOfWeek", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isFirstDayOfWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isSameYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isSameDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFullYear", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getFullYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstDayOfMonth", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getFirstDayOfMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["updateLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateValid", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isDateValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shiftDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["shiftDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFullDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["setFullDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["endOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["startOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["arLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["bgLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["caLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["csLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "daLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["daLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["deLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enGbLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["enGbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esDoLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["esDoLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["esLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esUsLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["esUsLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "etLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["etLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fiLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["fiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["frLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["glLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["heLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["hiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "huLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["huLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hrLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["hrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["idLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["itLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jaLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["jaLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "koLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["koLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ltLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ltLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lvLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["lvLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mnLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["mnLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["nbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlBeLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["nlBeLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["nlLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["plLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ptBrLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ptBrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["roLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ruLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ruLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["skLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["slLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["svLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["thLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["trLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ukLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ukLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["viLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zhCnLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["zhCnLocale"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvIiwic291cmNlcyI6WyJuZ3gtYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSw2cEZBQWMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY19hcGknO1xuIl19

/***/ }),

/***/ "./node_modules/ngx-bootstrap/esm5/public_api.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-bootstrap/esm5/public_api.js ***!
  \*******************************************************/
/*! exports provided: listLocales, setTheme, AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent, AlertComponent, AlertConfig, AlertModule, ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, CarouselComponent, CarouselConfig, CarouselModule, SlideComponent, CollapseDirective, CollapseModule, BsDatepickerConfig, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInputDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatepickerConfig, DatePickerInnerComponent, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, ModalDirective, ModalOptions, ModalBackdropOptions, ModalBackdropComponent, ModalModule, BsModalRef, BsModalService, BsDropdownModule, BsDropdownConfig, BsDropdownState, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule, RatingComponent, RatingModule, DraggableItemService, SortableComponent, SortableModule, NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, TimepickerComponent, TimepickerConfig, TimepickerModule, TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, TypeaheadOptions, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule, OnChange, document, window, parseTriggers, LinkedList, isBs3, Trigger, warnOnce, Utils, listenToTriggersV2, registerOutsideClick, ComponentLoader, ComponentLoaderFactory, ContentRef, BsComponentRef, Positioning, PositioningService, positionElements, MiniState, MiniStore, defineLocale, getSetGlobalLocale, parseDate, formatDate, getDay, isFirstDayOfWeek, isSameYear, isSameDay, isSameMonth, getFullYear, getFirstDayOfMonth, getMonth, getLocale, updateLocale, isAfter, isBefore, isArray, isDateValid, isDate, shiftDate, setFullDate, endOf, startOf, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, etLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, hrLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, lvLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, ukLocale, viLocale, zhCnLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["listLocales"]; });

/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["setTheme"]; });

/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionConfig", function() { return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionPanelComponent"]; });

/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"]; });

/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonCheckboxDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonRadioDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function() { return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonRadioGroupDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"]; });

/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["SlideComponent"]; });

/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"]; });

/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerConfig", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerContainerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerDirective", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineContainerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerInlineContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineDirective", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerInlineDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInputDirective", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerModule", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerConfig", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerContainerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerDirective", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInputDirective", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsLocaleService", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatePickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerConfig", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerInnerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatePickerInnerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerModule", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayPickerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DayPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["MonthPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearPickerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["YearPickerComponent"]; });

/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalBackdropOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalBackdropComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]; });

/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownMenuDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownToggleDirective"]; });

/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PagerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"]; });

/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["BarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"]; });

/* harmony import */ var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/rating */ "./node_modules/ngx-bootstrap/rating/fesm5/ngx-bootstrap-rating.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__["RatingComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__["RatingModule"]; });

/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/sortable */ "./node_modules/ngx-bootstrap/sortable/fesm5/ngx-bootstrap-sortable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableItemService", function() { return ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__["DraggableItemService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__["SortableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__["SortableModule"]; });

/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["NgTranscludeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabHeadingDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetConfig", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsetConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsModule"]; });

/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm5/ngx-bootstrap-timepicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__["TimepickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerConfig", function() { return ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__["TimepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerModule", function() { return ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__["TimepickerModule"]; });

/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"]; });

/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOptions", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContainerComponent", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadDirective", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMatch", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadModule"]; });

/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["parseTriggers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"]; });

/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["ComponentLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["ComponentLoaderFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["ContentRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsComponentRef", function() { return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["BsComponentRef"]; });

/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__["Positioning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__["PositioningService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__["positionElements"]; });

/* harmony import */ var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/mini-ngrx */ "./node_modules/ngx-bootstrap/mini-ngrx/fesm5/ngx-bootstrap-mini-ngrx.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniState", function() { return ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_21__["MiniState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniStore", function() { return ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_21__["MiniStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["defineLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getSetGlobalLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["parseDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDay", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFirstDayOfWeek", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isFirstDayOfWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isSameYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isSameDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFullYear", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getFullYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstDayOfMonth", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getFirstDayOfMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["updateLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateValid", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isDateValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shiftDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["shiftDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFullDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["setFullDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["endOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["startOf"]; });

/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["arLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["bgLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["caLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["csLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "daLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["daLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["deLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enGbLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["enGbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esDoLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["esDoLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["esLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esUsLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["esUsLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "etLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["etLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fiLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["fiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["frLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["glLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["heLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["hiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "huLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["huLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hrLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["hrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["idLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["itLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jaLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["jaLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "koLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["koLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ltLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ltLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lvLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["lvLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mnLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["mnLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["nbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlBeLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["nlBeLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["nlLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["plLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ptBrLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ptBrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["roLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ruLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ruLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["skLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["slLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["svLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["thLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["trLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ukLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ukLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["viLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zhCnLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["zhCnLocale"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

























//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvIiwic291cmNlcyI6WyJwdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFvQkEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixlQUFlLEVBQ2YsdUJBQXVCLEVBQ3hCLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0UsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIseUJBQXlCLEVBQ3pCLGFBQWEsRUFDZCxNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGNBQWMsRUFDZCxjQUFjLEVBQ2YsTUFBTSx3QkFBd0IsQ0FBQztBQUVoQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFM0UsT0FBTyxFQUNMLGtCQUFrQixFQUNsQiw4QkFBOEIsRUFDOUIscUJBQXFCLEVBQ3JCLG9DQUFvQyxFQUNwQywyQkFBMkIsRUFDM0IsMEJBQTBCLEVBQzFCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsbUNBQW1DLEVBQ25DLDBCQUEwQixFQUMxQiwrQkFBK0IsRUFDL0IsZUFBZSxFQUNmLGFBQWEsRUFDYixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDcEIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLFdBQVcsRUFDWCxVQUFVLEVBQ1YsY0FBYyxFQUNmLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLDRCQUE0QixFQUM1QixtQkFBbUIsRUFDbkIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUMxQixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFFakIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2xCLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRSxPQUFPLEVBRUwsb0JBQW9CLEVBRXBCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2YsTUFBTSx3QkFBd0IsQ0FBQztBQUVoQyxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsZUFBZSxFQUNmLFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDakIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQ0wsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNkLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUNMLGdCQUFnQixFQUNoQiwyQkFBMkIsRUFDM0Isa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxlQUFlLEVBQ2hCLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUNMLGFBQWEsRUFDYix5QkFBeUIsRUFDekIsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDZCxNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFDTCxRQUFRLEVBQ1IsUUFBUSxFQUNSLE1BQU0sRUFDTixhQUFhLEVBQ2IsVUFBVSxFQUNWLEtBQUssRUFDTCxPQUFPLEVBQ1AsUUFBUSxFQUNSLEtBQUssRUFDTCxrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3JCLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUNMLGVBQWUsRUFDZixzQkFBc0IsRUFDdEIsVUFBVSxFQUNWLGNBQWMsRUFDZixNQUFNLGdDQUFnQyxDQUFDO0FBRXhDLE9BQU8sRUFDTCxXQUFXLEVBRVgsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNqQixNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUNMLFlBQVksRUFDWixrQkFBa0IsRUFFbEIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBQ1osT0FBTyxFQUNQLFFBQVEsRUFDUixPQUFPLEVBQ1AsV0FBVyxFQUNYLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxPQUFPLEVBRVIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQiwyYUFBYyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQgeyBBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2FjY29yZGlvbic7XG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYWxlcnQnO1xuaW1wb3J0IHsgQnV0dG9uc01vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYnV0dG9ucyc7XG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2Fyb3VzZWwnO1xuaW1wb3J0IHsgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbGxhcHNlJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyJztcbmltcG9ydCB7IERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgQnNEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgUG9wb3Zlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9wb3Zlcic7XG5pbXBvcnQgeyBQcm9ncmVzc2Jhck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXInO1xuaW1wb3J0IHsgUmF0aW5nTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9yYXRpbmcnO1xuaW1wb3J0IHsgU29ydGFibGVNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3NvcnRhYmxlJztcbmltcG9ydCB7IFRhYnNNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3RhYnMnO1xuaW1wb3J0IHsgVGltZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdGltZXBpY2tlcic7XG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90b29sdGlwJztcbmltcG9ydCB7IFR5cGVhaGVhZE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdHlwZWFoZWFkJztcblxuZXhwb3J0IHsgbGlzdExvY2FsZXMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuZXhwb3J0IHsgc2V0VGhlbWUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuZXhwb3J0IHtcbiAgQWNjb3JkaW9uQ29tcG9uZW50LFxuICBBY2NvcmRpb25Db25maWcsXG4gIEFjY29yZGlvbk1vZHVsZSxcbiAgQWNjb3JkaW9uUGFuZWxDb21wb25lbnRcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9hY2NvcmRpb24nO1xuXG5leHBvcnQgeyBBbGVydENvbXBvbmVudCwgQWxlcnRDb25maWcsIEFsZXJ0TW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9hbGVydCc7XG5cbmV4cG9ydCB7XG4gIEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlLFxuICBCdXR0b25SYWRpb0RpcmVjdGl2ZSxcbiAgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSxcbiAgQnV0dG9uc01vZHVsZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2J1dHRvbnMnO1xuXG5leHBvcnQge1xuICBDYXJvdXNlbENvbXBvbmVudCxcbiAgQ2Fyb3VzZWxDb25maWcsXG4gIENhcm91c2VsTW9kdWxlLFxuICBTbGlkZUNvbXBvbmVudFxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nhcm91c2VsJztcblxuZXhwb3J0IHsgQ29sbGFwc2VEaXJlY3RpdmUsIENvbGxhcHNlTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb2xsYXBzZSc7XG5cbmV4cG9ydCB7XG4gIEJzRGF0ZXBpY2tlckNvbmZpZyxcbiAgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0RhdGVwaWNrZXJEaXJlY3RpdmUsXG4gIEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlLFxuICBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSxcbiAgQnNEYXRlcGlja2VyTW9kdWxlLFxuICBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyxcbiAgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQsXG4gIEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlLFxuICBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlLFxuICBCc0xvY2FsZVNlcnZpY2UsXG4gIERhdGVGb3JtYXR0ZXIsXG4gIERhdGVQaWNrZXJDb21wb25lbnQsXG4gIERhdGVwaWNrZXJDb25maWcsXG4gIERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCxcbiAgRGF0ZXBpY2tlck1vZHVsZSxcbiAgRGF5UGlja2VyQ29tcG9uZW50LFxuICBNb250aFBpY2tlckNvbXBvbmVudCxcbiAgWWVhclBpY2tlckNvbXBvbmVudFxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXInO1xuXG5leHBvcnQge1xuICBNb2RhbERpcmVjdGl2ZSxcbiAgTW9kYWxPcHRpb25zLFxuICBNb2RhbEJhY2tkcm9wT3B0aW9ucyxcbiAgTW9kYWxCYWNrZHJvcENvbXBvbmVudCxcbiAgTW9kYWxNb2R1bGUsXG4gIEJzTW9kYWxSZWYsXG4gIEJzTW9kYWxTZXJ2aWNlXG59IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5leHBvcnQge1xuICBCc0Ryb3Bkb3duTW9kdWxlLFxuICBCc0Ryb3Bkb3duQ29uZmlnLFxuICBCc0Ryb3Bkb3duU3RhdGUsXG4gIEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQsXG4gIEJzRHJvcGRvd25EaXJlY3RpdmUsXG4gIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlLFxuICBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXG59IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xuXG5leHBvcnQge1xuICBQYWdlckNvbXBvbmVudCxcbiAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgUGFnaW5hdGlvbkNvbmZpZyxcbiAgUGFnaW5hdGlvbk1vZHVsZSxcbiAgUGFnZUNoYW5nZWRFdmVudFxufSBmcm9tICduZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24nO1xuXG5leHBvcnQge1xuICBCYXJDb21wb25lbnQsXG4gIFByb2dyZXNzYmFyQ29tcG9uZW50LFxuICBQcm9ncmVzc2JhckNvbmZpZyxcbiAgUHJvZ3Jlc3NiYXJNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhcic7XG5cbmV4cG9ydCB7IFJhdGluZ0NvbXBvbmVudCwgUmF0aW5nTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9yYXRpbmcnO1xuXG5leHBvcnQge1xuICBEcmFnZ2FibGVJdGVtLFxuICBEcmFnZ2FibGVJdGVtU2VydmljZSxcbiAgU29ydGFibGVJdGVtLFxuICBTb3J0YWJsZUNvbXBvbmVudCxcbiAgU29ydGFibGVNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9zb3J0YWJsZSc7XG5cbmV4cG9ydCB7XG4gIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSxcbiAgVGFiRGlyZWN0aXZlLFxuICBUYWJIZWFkaW5nRGlyZWN0aXZlLFxuICBUYWJzZXRDb21wb25lbnQsXG4gIFRhYnNldENvbmZpZyxcbiAgVGFic01vZHVsZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL3RhYnMnO1xuXG5leHBvcnQge1xuICBUaW1lcGlja2VyQ29tcG9uZW50LFxuICBUaW1lcGlja2VyQ29uZmlnLFxuICBUaW1lcGlja2VyTW9kdWxlXG59IGZyb20gJ25neC1ib290c3RyYXAvdGltZXBpY2tlcic7XG5cbmV4cG9ydCB7XG4gIFRvb2x0aXBDb25maWcsXG4gIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQsXG4gIFRvb2x0aXBEaXJlY3RpdmUsXG4gIFRvb2x0aXBNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC90b29sdGlwJztcblxuZXhwb3J0IHtcbiAgVHlwZWFoZWFkT3B0aW9ucyxcbiAgVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50LFxuICBUeXBlYWhlYWREaXJlY3RpdmUsXG4gIFR5cGVhaGVhZE1hdGNoLFxuICBUeXBlYWhlYWRNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQnO1xuXG5leHBvcnQge1xuICBQb3BvdmVyQ29uZmlnLFxuICBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50LFxuICBQb3BvdmVyRGlyZWN0aXZlLFxuICBQb3BvdmVyTW9kdWxlXG59IGZyb20gJ25neC1ib290c3RyYXAvcG9wb3Zlcic7XG5cbmV4cG9ydCB7XG4gIE9uQ2hhbmdlLFxuICBkb2N1bWVudCxcbiAgd2luZG93LFxuICBwYXJzZVRyaWdnZXJzLFxuICBMaW5rZWRMaXN0LFxuICBpc0JzMyxcbiAgVHJpZ2dlcixcbiAgd2Fybk9uY2UsXG4gIFV0aWxzLFxuICBsaXN0ZW5Ub1RyaWdnZXJzVjIsXG4gIHJlZ2lzdGVyT3V0c2lkZUNsaWNrXG59IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5leHBvcnQge1xuICBDb21wb25lbnRMb2FkZXIsXG4gIENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gIENvbnRlbnRSZWYsXG4gIEJzQ29tcG9uZW50UmVmXG59IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5cbmV4cG9ydCB7XG4gIFBvc2l0aW9uaW5nLFxuICBQb3NpdGlvbmluZ09wdGlvbnMsXG4gIFBvc2l0aW9uaW5nU2VydmljZSxcbiAgcG9zaXRpb25FbGVtZW50c1xufSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcblxuZXhwb3J0IHtcbiAgQWN0aW9uLFxuICBNaW5pU3RhdGUsXG4gIE1pbmlTdG9yZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5cbmV4cG9ydCB7XG4gIGRlZmluZUxvY2FsZSxcbiAgZ2V0U2V0R2xvYmFsTG9jYWxlLFxuICBMb2NhbGVEYXRhLFxuICBwYXJzZURhdGUsXG4gIGZvcm1hdERhdGUsXG4gIGdldERheSxcbiAgaXNGaXJzdERheU9mV2VlayxcbiAgaXNTYW1lWWVhcixcbiAgaXNTYW1lRGF5LFxuICBpc1NhbWVNb250aCxcbiAgZ2V0RnVsbFllYXIsXG4gIGdldEZpcnN0RGF5T2ZNb250aCxcbiAgZ2V0TW9udGgsXG4gIGdldExvY2FsZSxcbiAgdXBkYXRlTG9jYWxlLFxuICBpc0FmdGVyLFxuICBpc0JlZm9yZSxcbiAgaXNBcnJheSxcbiAgaXNEYXRlVmFsaWQsXG4gIGlzRGF0ZSxcbiAgc2hpZnREYXRlLFxuICBzZXRGdWxsRGF0ZSxcbiAgZW5kT2YsXG4gIHN0YXJ0T2YsXG4gIFRpbWVVbml0XG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmV4cG9ydCAqIGZyb20gJ25neC1ib290c3RyYXAvbG9jYWxlJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js ***!
  \*************************************************************************/
/*! exports provided: arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, etLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, hrLocale, huLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, lvLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, ukLocale, viLocale, zhCnLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["arLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["bgLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["caLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["csLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "daLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["daLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["deLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enGbLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["enGbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esDoLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esDoLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esUsLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esUsLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "etLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["etLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fiLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["fiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["frLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["glLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["heLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["hiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hrLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["hrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "huLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["huLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["idLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["itLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jaLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["jaLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "koLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["koLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ltLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ltLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lvLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["lvLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mnLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["mnLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlBeLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nlBeLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nlLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["plLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ptBrLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ptBrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["roLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ruLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ruLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["skLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["slLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["svLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["thLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["trLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ukLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ukLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["viLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zhCnLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["zhCnLocale"]; });


//# sourceMappingURL=ngx-bootstrap-locale.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/mini-ngrx/fesm5/ngx-bootstrap-mini-ngrx.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/mini-ngrx/fesm5/ngx-bootstrap-mini-ngrx.js ***!
  \*******************************************************************************/
/*! exports provided: MiniState, MiniStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniState", function() { return MiniState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStore", function() { return MiniStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
MiniState = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MiniState, _super);
    function MiniState(_initialState, actionsDispatcher$, reducer) {
        var _this = _super.call(this, _initialState) || this;
        /** @type {?} */
        var actionInQueue$ = actionsDispatcher$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_1__["queueScheduler"]));
        /** @type {?} */
        var state$ = actionInQueue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
         * @param {?} state
         * @param {?} action
         * @return {?}
         */
        function (state, action) {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }), _initialState));
        state$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.next(value); }));
        return _this;
    }
    return MiniState;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
MiniStore = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MiniStore, _super);
    function MiniStore(_dispatcher, _reducer, 
    /* tslint:disable-next-line: no-any */
    state$) {
        var _this = _super.call(this) || this;
        _this._dispatcher = _dispatcher;
        _this._reducer = _reducer;
        /* tslint:disable-next-line: deprecation */
        _this.source = state$;
        return _this;
    }
    /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    MiniStore.prototype.select = /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    function (pathOrMapFn) {
        /* tslint:disable-next-line: deprecation */
        /** @type {?} */
        var mapped$ = this.source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(pathOrMapFn));
        return mapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    };
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    MiniStore.prototype.lift = /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    function (operator) {
        /** @type {?} */
        var store = new MiniStore(this._dispatcher, this._reducer, this);
        /* tslint:disable-next-line: deprecation */
        store.operator = operator;
        return store;
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MiniStore.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this._dispatcher.next(action);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MiniStore.prototype.next = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this._dispatcher.next(action);
    };
    /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} err
     * @return {?}
     */
    MiniStore.prototype.error = /* tslint:disable-next-line: no-any */
    /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this._dispatcher.error(err);
    };
    /**
     * @return {?}
     */
    MiniStore.prototype.complete = /**
     * @return {?}
     */
    function () {
        /*noop*/
    };
    return MiniStore;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]));


//# sourceMappingURL=ngx-bootstrap-mini-ngrx.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/rating/fesm5/ngx-bootstrap-rating.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/rating/fesm5/ngx-bootstrap-rating.js ***!
  \*************************************************************************/
/*! exports provided: RatingComponent, RatingModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return RatingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return RATING_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return RatingComponent; })),
    multi: true
};
var RatingComponent = /** @class */ (function () {
    function RatingComponent(changeDetection) {
        this.changeDetection = changeDetection;
        /**
         * number of icons
         */
        this.max = 5;
        /**
         * fired when icon selected, $event:number equals to selected rating
         */
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when icon selected, $event:number equals to previous rating value
         */
        this.onLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    RatingComponent.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* tslint:disable-next-line: deprecation */
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        /* tslint:disable-next-line: deprecation */
        /** @type {?} */
        var sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    };
    /**
     * @return {?}
     */
    RatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : [];
        this.range = this.buildTemplateObjects(this.max);
    };
    // model -> view
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.writeValue = 
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.enter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    };
    /**
     * @return {?}
     */
    RatingComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.value = this.preValue;
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RatingComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RatingComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.rate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    };
    /**
     * @protected
     * @param {?} max
     * @return {?}
     */
    RatingComponent.prototype.buildTemplateObjects = /**
     * @protected
     * @param {?} max
     * @return {?}
     */
    function (max) {
        /** @type {?} */
        var result = [];
        for (var i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    };
    RatingComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'rating',
                    template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\n      role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\"\n      [attr.aria-valuenow]=\"value\">\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n    <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n    <span class=\"bs-rating-star\"\n          (mouseenter)=\"enter(index + 1)\"\n          (click)=\"rate(index + 1)\"\n          [title]=\"r.title\"\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\n          [class.active]=\"index < value\">\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\n      </ng-template>\n    </span>\n  </ng-template>\n</span>\n",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    RatingComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    RatingComponent.propDecorators = {
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
    };
    return RatingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RatingModule = /** @class */ (function () {
    function RatingModule() {
    }
    /**
     * @return {?}
     */
    RatingModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: RatingModule,
            providers: []
        };
    };
    RatingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [RatingComponent],
                    exports: [RatingComponent]
                },] }
    ];
    return RatingModule;
}());


//# sourceMappingURL=ngx-bootstrap-rating.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/sortable/fesm5/ngx-bootstrap-sortable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/sortable/fesm5/ngx-bootstrap-sortable.js ***!
  \*****************************************************************************/
/*! exports provided: DraggableItemService, SortableComponent, SortableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableItemService", function() { return DraggableItemService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return SortableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return SortableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DraggableItemService = /** @class */ (function () {
    function DraggableItemService() {
        this.onCapture = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    DraggableItemService.prototype.dragStart = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.draggableItem = item;
    };
    /**
     * @return {?}
     */
    DraggableItemService.prototype.getItem = /**
     * @return {?}
     */
    function () {
        return this.draggableItem;
    };
    /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    DraggableItemService.prototype.captureItem = /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    function (overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex: overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    };
    /**
     * @return {?}
     */
    DraggableItemService.prototype.onCaptureItem = /**
     * @return {?}
     */
    function () {
        return this.onCapture;
    };
    DraggableItemService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return DraggableItemService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
var SortableComponent = /** @class */ (function () {
    function SortableComponent(transfer) {
        var _this = this;
        /**
         * class name for items wrapper
         */
        this.wrapperClass = '';
        /**
         * style object for items wrapper
         */
        this.wrapperStyle = {};
        /**
         * class name for item
         */
        this.itemClass = '';
        /**
         * style object for item
         */
        this.itemStyle = {};
        /**
         * class name for active item
         */
        this.itemActiveClass = '';
        /**
         * style object for active item
         */
        this.itemActiveStyle = {};
        /**
         * class name for placeholder
         */
        this.placeholderClass = '';
        /**
         * style object for placeholder
         */
        this.placeholderStyle = {};
        /**
         * placeholder item which will be shown if collection is empty
         */
        this.placeholderItem = '';
        /**
         * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        /* tslint:disable-next-line: no-any */
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPlaceholder = false;
        this.activeItem = -1;
        /* tslint:disable-next-line: no-any */
        this.onTouched = Function.prototype;
        /* tslint:disable-next-line: no-any */
        this.onChanged = Function.prototype;
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.onDrop(item); }));
    }
    Object.defineProperty(SortableComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._items = value;
            /** @type {?} */
            var out = this.items.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.initData; }));
            this.onChanged(out);
            this.onChange.emit(out);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    SortableComponent.prototype.onItemDragstart = /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    function (event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event: event,
            item: item,
            i: i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    };
    /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    SortableComponent.prototype.onItemDragover = /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    function (event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        /** @type {?} */
        var dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        /* tslint:disable-next-line: no-any */
        /** @type {?} */
        var newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(this.items.slice(0, i), [
                dragItem.item
            ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
        }
        else {
            // this.draggedItem.i < i
            newArray = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(this.items.slice(0, dragItem.i), this.items.slice(dragItem.i + 1, i + 1), [
                dragItem.item
            ], this.items.slice(i + 1));
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.cancelEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SortableComponent.prototype.onDrop = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter((/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */
            function (x, i) { return i !== item.i; }));
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.resetActiveItem = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    SortableComponent.prototype.registerOnChange = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.onChanged = callback;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    SortableComponent.prototype.registerOnTouched = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.onTouched = callback;
    };
    /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    SortableComponent.prototype.writeValue = /* tslint:disable-next-line: no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value) {
            /* tslint:disable-next-line: no-any */
            this.items = value.map((/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */
            function (x, i) { return ({
                id: i,
                initData: x,
                value: _this.fieldName ? x[_this.fieldName] : x
            }); }));
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    };
    /**
     * @return {?}
     */
    SortableComponent.prototype.updatePlaceholderState = /**
     * @return {?}
     */
    function () {
        this.showPlaceholder = !this._items.length;
    };
    /**
     * @param {?} isActive
     * @return {?}
     */
    SortableComponent.prototype.getItemStyle = /**
     * @param {?} isActive
     * @return {?}
     */
    function (isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    };
    // tslint:disable-next-line
    // tslint:disable-next-line
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.initDragstartEvent = 
    // tslint:disable-next-line
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    };
    SortableComponent.globalZoneIndex = 0;
    SortableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-sortable',
                    exportAs: 'bs-sortable',
                    template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return SortableComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    SortableComponent.ctorParameters = function () { return [
        { type: DraggableItemService }
    ]; };
    SortableComponent.propDecorators = {
        fieldName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        wrapperClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        wrapperStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        itemClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        itemStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        itemActiveClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        itemActiveStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholderClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholderStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholderItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return SortableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SortableModule = /** @class */ (function () {
    function SortableModule() {
    }
    /**
     * @return {?}
     */
    SortableModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    };
    SortableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [SortableComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    exports: [SortableComponent]
                },] }
    ];
    return SortableModule;
}());


//# sourceMappingURL=ngx-bootstrap-sortable.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/timepicker/fesm5/ngx-bootstrap-timepicker.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/timepicker/fesm5/ngx-bootstrap-timepicker.js ***!
  \*********************************************************************************/
/*! exports provided: TimepickerActions, TimepickerComponent, TimepickerConfig, TimepickerModule, TimepickerStore, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerActions", function() { return TimepickerActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return TimepickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerConfig", function() { return TimepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerModule", function() { return TimepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerStore", function() { return TimepickerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TIMEPICKER_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/mini-ngrx */ "./node_modules/ngx-bootstrap/mini-ngrx/fesm5/ngx-bootstrap-mini-ngrx.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimepickerActions = /** @class */ (function () {
    function TimepickerActions() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeHours = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeMinutes = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeSeconds = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.setTime = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.updateControls = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    };
    TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
    TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
    TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
    TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
    TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
    TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
    TimepickerActions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return TimepickerActions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var dex = 10;
/** @type {?} */
var hoursPerDay = 24;
/** @type {?} */
var hoursPerDayHalf = 12;
/** @type {?} */
var minutesPerHour = 60;
/** @type {?} */
var secondsPerMinute = 60;
/**
 * @param {?=} value
 * @return {?}
 */
function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
/**
 * @param {?} controls
 * @param {?} newDate
 * @return {?}
 */
function isValidLimit(controls, newDate) {
    if (controls.min && newDate < controls.min) {
        return false;
    }
    if (controls.max && newDate > controls.max) {
        return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
/**
 * @param {?} value
 * @param {?=} isPM
 * @return {?}
 */
function parseHours(value, isPM) {
    if (isPM === void 0) { isPM = false; }
    /** @type {?} */
    var hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseMinutes(value) {
    /** @type {?} */
    var minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseSeconds(value) {
    /** @type {?} */
    var seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
/**
 * @param {?} value
 * @param {?} diff
 * @return {?}
 */
function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    /** @type {?} */
    var hour = value.getHours();
    /** @type {?} */
    var minutes = value.getMinutes();
    /** @type {?} */
    var seconds = value.getSeconds();
    if (diff.hour) {
        hour = (hour + toNumber(diff.hour)) % hoursPerDay;
        if (hour < 0) {
            hour += hoursPerDay;
        }
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
/**
 * @param {?} value
 * @param {?} opts
 * @return {?}
 */
function setTime(value, opts) {
    /** @type {?} */
    var hour = parseHours(opts.hour);
    /** @type {?} */
    var minute = parseMinutes(opts.minute);
    /** @type {?} */
    var seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM && hour !== 12) {
        hour += hoursPerDayHalf;
    }
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
/**
 * @param {?} value
 * @param {?} hours
 * @param {?} minutes
 * @param {?} seconds
 * @return {?}
 */
function createDate(value, hours, minutes, seconds) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
}
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    /** @type {?} */
    var _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return "0" + _value;
}
/**
 * @param {?} hours
 * @param {?} isPM
 * @return {?}
 */
function isHourInputValid(hours, isPM) {
    return !isNaN(parseHours(hours, isPM));
}
/**
 * @param {?} minutes
 * @return {?}
 */
function isMinuteInputValid(minutes) {
    return !isNaN(parseMinutes(minutes));
}
/**
 * @param {?} seconds
 * @return {?}
 */
function isSecondInputValid(seconds) {
    return !isNaN(parseSeconds(seconds));
}
/**
 * @param {?} diff
 * @param {?} max
 * @param {?} min
 * @return {?}
 */
function isInputLimitValid(diff, max, min) {
    /** @type {?} */
    var newDate = setTime(new Date(), diff);
    if (max && newDate > max) {
        return false;
    }
    if (min && newDate < min) {
        return false;
    }
    return true;
}
/**
 * @param {?} hours
 * @param {?=} minutes
 * @param {?=} seconds
 * @param {?=} isPM
 * @return {?}
 */
function isInputValid(hours, minutes, seconds, isPM) {
    if (minutes === void 0) { minutes = '0'; }
    if (seconds === void 0) { seconds = '0'; }
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */
function canChangeValue(state, event) {
    if (state.readonlyInput || state.disabled) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
/**
 * @param {?} state
 * @return {?}
 */
function getControlsValue(state) {
    var hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, readonlyInput = state.readonlyInput, disabled = state.disabled, mousewheel = state.mousewheel, arrowkeys = state.arrowkeys, showSpinners = state.showSpinners, showMeridian = state.showMeridian, showSeconds = state.showSeconds, meridians = state.meridians, min = state.min, max = state.max;
    return {
        hourStep: hourStep,
        minuteStep: minuteStep,
        secondsStep: secondsStep,
        readonlyInput: readonlyInput,
        disabled: disabled,
        mousewheel: mousewheel,
        arrowkeys: arrowkeys,
        showSpinners: showSpinners,
        showMeridian: showMeridian,
        showSeconds: showSeconds,
        meridians: meridians,
        min: min,
        max: max
    };
}
/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */
function timepickerControls(value, state) {
    /** @type {?} */
    var hoursPerDayHalf = 12;
    var min = state.min, max = state.max, hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, showSeconds = state.showSeconds;
    /** @type {?} */
    var res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        /** @type {?} */
        var _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour;
        if (!res.canIncrementHours) {
            /** @type {?} */
            var _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            /** @type {?} */
            var _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
        if (value.getHours() < hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
        }
    }
    if (min) {
        /** @type {?} */
        var _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            /** @type {?} */
            var _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            /** @type {?} */
            var _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
        if (value.getHours() >= hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
        }
    }
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides default configuration values for timepicker
 */
var TimepickerConfig = /** @class */ (function () {
    function TimepickerConfig() {
        /**
         * hours change step
         */
        this.hourStep = 1;
        /**
         * hours change step
         */
        this.minuteStep = 5;
        /**
         * seconds changes step
         */
        this.secondsStep = 10;
        /**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */
        this.showMeridian = true;
        /**
         * meridian labels based on locale
         */
        this.meridians = ['AM', 'PM'];
        /**
         * if true hours and minutes fields will be readonly
         */
        this.readonlyInput = false;
        /**
         * if true hours and minutes fields will be disabled
         */
        this.disabled = false;
        /**
         * if true scroll inside hours and minutes inputs will change time
         */
        this.mousewheel = true;
        /**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */
        this.arrowkeys = true;
        /**
         * if true spinner arrows above and below the inputs will be shown
         */
        this.showSpinners = true;
        /**
         * show seconds in timepicker
         */
        this.showSeconds = false;
        /**
         * show minutes in timepicker
         */
        this.showMinutes = true;
        /**
         * placeholder for hours field in timepicker
         */
        this.hoursPlaceholder = 'HH';
        /**
         * placeholder for minutes field in timepicker
         */
        this.minutesPlaceholder = 'MM';
        /**
         * placeholder for seconds field in timepicker
         */
        this.secondsPlaceholder = 'SS';
    }
    TimepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return TimepickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState = {
    value: null,
    config: new TimepickerConfig(),
    controls: {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    }
};
// tslint:disable-next-line:cyclomatic-complexity
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function timepickerReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case TimepickerActions.WRITE_VALUE: {
            return Object.assign({}, state, { value: action.payload });
        }
        case TimepickerActions.CHANGE_HOURS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeHours(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            var _newTime = changeTime(state.value, { hour: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_MINUTES: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeMinutes(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            var _newTime = changeTime(state.value, { minute: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_SECONDS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeSeconds(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            var _newTime = changeTime(state.value, {
                seconds: action.payload.step
            });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.SET_TIME_UNIT: {
            if (!canChangeValue(state.config)) {
                return state;
            }
            /** @type {?} */
            var _newTime = setTime(state.value, action.payload);
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.UPDATE_CONTROLS: {
            /** @type {?} */
            var _newControlsState = timepickerControls(state.value, action.payload);
            /** @type {?} */
            var _newState = {
                value: state.value,
                config: action.payload,
                controls: _newControlsState
            };
            if (state.config.showMeridian !== _newState.config.showMeridian) {
                if (state.value) {
                    _newState.value = new Date(state.value);
                }
            }
            return Object.assign({}, state, _newState);
        }
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimepickerStore = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimepickerStore, _super);
    function TimepickerStore() {
        var _this = this;
        /** @type {?} */
        var _dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            type: '[mini-ngrx] dispatcher init'
        });
        /** @type {?} */
        var state = new ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_4__["MiniState"](initialState, _dispatcher, timepickerReducer);
        _this = _super.call(this, _dispatcher, timepickerReducer, state) || this;
        return _this;
    }
    TimepickerStore.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    TimepickerStore.ctorParameters = function () { return []; };
    return TimepickerStore;
}(ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_4__["MiniStore"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return TimepickerComponent; })),
    multi: true
};
var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent(_config, _cd, _store, _timepickerActions) {
        var _this = this;
        this._cd = _cd;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /**
         * emits true if value is a valid date
         */
        this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // min\max validation for input fields
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
        // control value accessor methods
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
        Object.assign(this, _config);
        this.timepickerSub = _store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.value; }))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // update UI values if date changed
            _this._renderTime(value);
            _this.onChange(value);
            _this._store.dispatch(_this._timepickerActions.updateControls(getControlsValue(_this)));
        }));
        _store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.controls; }))
            .subscribe((/**
         * @param {?} controlsState
         * @return {?}
         */
        function (controlsState) {
            _this.isValid.emit(isInputValid(_this.hours, _this.minutes, _this.seconds, _this.isPM()));
            Object.assign(_this, controlsState);
            _cd.markForCheck();
        }));
    }
    Object.defineProperty(TimepickerComponent.prototype, "isSpinnersVisible", {
        /** @deprecated - please use `isEditable` instead */
        get: /**
         * @deprecated - please use `isEditable` instead
         * @return {?}
         */
        function () {
            return this.showSpinners && !this.readonlyInput;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerComponent.prototype, "isEditable", {
        get: /**
         * @return {?}
         */
        function () {
            return !(this.readonlyInput || this.disabled);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.resetValidation = /**
     * @return {?}
     */
    function () {
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.isPM = /**
     * @return {?}
     */
    function () {
        return this.showMeridian && this.meridian === this.meridians[1];
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TimepickerComponent.prototype.prevDef = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TimepickerComponent.prototype.wheelSign = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        return Math.sign($event.deltaY) * -1;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TimepickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    };
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    TimepickerComponent.prototype.changeHours = /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    function (step, source) {
        if (source === void 0) { source = ''; }
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeHours({ step: step, source: source }));
    };
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    TimepickerComponent.prototype.changeMinutes = /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    function (step, source) {
        if (source === void 0) { source = ''; }
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeMinutes({ step: step, source: source }));
    };
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    TimepickerComponent.prototype.changeSeconds = /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    function (step, source) {
        if (source === void 0) { source = ''; }
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeSeconds({ step: step, source: source }));
    };
    /**
     * @param {?} hours
     * @return {?}
     */
    TimepickerComponent.prototype.updateHours = /**
     * @param {?} hours
     * @return {?}
     */
    function (hours) {
        this.resetValidation();
        this.hours = hours;
        /** @type {?} */
        var isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
        if (!isValid) {
            this.invalidHours = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    };
    /**
     * @param {?} minutes
     * @return {?}
     */
    TimepickerComponent.prototype.updateMinutes = /**
     * @param {?} minutes
     * @return {?}
     */
    function (minutes) {
        this.resetValidation();
        this.minutes = minutes;
        /** @type {?} */
        var isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
        if (!isValid) {
            this.invalidMinutes = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    };
    /**
     * @param {?} seconds
     * @return {?}
     */
    TimepickerComponent.prototype.updateSeconds = /**
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) {
        this.resetValidation();
        this.seconds = seconds;
        /** @type {?} */
        var isValid = isSecondInputValid(this.seconds) && this.isValidLimit();
        if (!isValid) {
            this.invalidSeconds = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.isValidLimit = /**
     * @return {?}
     */
    function () {
        return isInputLimitValid({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }, this.max, this.min);
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype._updateTime = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _seconds = this.showSeconds ? this.seconds : void 0;
        /** @type {?} */
        var _minutes = this.showMinutes ? this.minutes : void 0;
        if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._store.dispatch(this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }));
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.toggleMeridian = /**
     * @return {?}
     */
    function () {
        if (!this.showMeridian || !this.isEditable) {
            return;
        }
        /** @type {?} */
        var _hoursPerDayHalf = 12;
        this._store.dispatch(this._timepickerActions.changeHours({
            step: _hoursPerDayHalf,
            source: ''
        }));
    };
    /**
     * Write a new value to the element.
     */
    /**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */
    TimepickerComponent.prototype.writeValue = /**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (isValidDate(obj)) {
            this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
        }
        else if (obj == null) {
            this._store.dispatch(this._timepickerActions.writeValue(null));
        }
    };
    /**
     * Set the function to be called when the control receives a change event.
     */
    // tslint:disable-next-line:no-any
    /**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    TimepickerComponent.prototype.registerOnChange = /**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function (fn) {
        this.onChange = fn;
    };
    /**
     * Set the function to be called when the control receives a touch event.
     */
    /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    TimepickerComponent.prototype.registerOnTouched = /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */
    TimepickerComponent.prototype.setDisabledState = /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.timepickerSub.unsubscribe();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimepickerComponent.prototype._renderTime = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!isValidDate(value)) {
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = this.meridians[0];
            return;
        }
        /** @type {?} */
        var _value = parseTime(value);
        /** @type {?} */
        var _hoursPerDayHalf = 12;
        /** @type {?} */
        var _hours = _value.getHours();
        if (this.showMeridian) {
            this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
            _hours = _hours % _hoursPerDayHalf;
            // should be 12 PM, not 00 PM
            if (_hours === 0) {
                _hours = _hoursPerDayHalf;
            }
        }
        this.hours = padNumber(_hours);
        this.minutes = padNumber(_value.getMinutes());
        this.seconds = padNumber(_value.getUTCSeconds());
    };
    TimepickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'timepicker',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                    template: "<table>\n  <tbody>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- increment hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\n         (click)=\"changeHours(hourStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- increment minutes button -->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(minuteStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- increment seconds button -->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-up\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  <tr>\n    <!-- hours -->\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"hoursPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"hours\"\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\n             (change)=\"updateHours($event.target.value)\"></td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\n    <!-- minutes -->\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"minutesPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"minutes\"\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\n             (change)=\"updateMinutes($event.target.value)\">\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\n    <!-- seconds -->\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"secondsPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"seconds\"\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\n             (change)=\"updateSeconds($event.target.value)\">\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian -->\n    <td *ngIf=\"showMeridian\">\n      <button type=\"button\" class=\"btn btn-default text-center\"\n              [disabled]=\"!isEditable || !canToggleMeridian\"\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\n              (click)=\"toggleMeridian()\"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- decrement hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\n         (click)=\"changeHours(-hourStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- decrement minutes button-->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(-minuteStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- decrement seconds button-->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(-secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  </tbody>\n</table>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n      padding: .375rem .55rem;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    TimepickerComponent.ctorParameters = function () { return [
        { type: TimepickerConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: TimepickerStore },
        { type: TimepickerActions }
    ]; };
    TimepickerComponent.propDecorators = {
        hourStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minuteStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        secondsStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        readonlyInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        mousewheel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        arrowkeys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showSpinners: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showMeridian: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showMinutes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showSeconds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        meridians: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hoursPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minutesPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        secondsPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isValid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return TimepickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimepickerModule = /** @class */ (function () {
    function TimepickerModule() {
    }
    /**
     * @return {?}
     */
    TimepickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerConfig, TimepickerActions, TimepickerStore]
        };
    };
    TimepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [TimepickerComponent],
                    exports: [TimepickerComponent]
                },] }
    ];
    return TimepickerModule;
}());


//# sourceMappingURL=ngx-bootstrap-timepicker.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js ***!
  \*******************************************************************************/
/*! exports provided: TypeaheadConfig, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, TypeaheadOptions, escapeRegexp, getValueFromObject, latinMap, latinize, tokenize, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadConfig", function() { return TypeaheadConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContainerComponent", function() { return TypeaheadContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadDirective", function() { return TypeaheadDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMatch", function() { return TypeaheadMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return TypeaheadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOptions", function() { return TypeaheadOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegexp", function() { return escapeRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFromObject", function() { return getValueFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latinMap", function() { return latinMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latinize", function() { return latinize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return typeaheadAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/** @type {?} */
var latinMap = {
    'Á': 'A',
    'Ă': 'A',
    'Ắ': 'A',
    'Ặ': 'A',
    'Ằ': 'A',
    'Ẳ': 'A',
    'Ẵ': 'A',
    'Ǎ': 'A',
    'Â': 'A',
    'Ấ': 'A',
    'Ậ': 'A',
    'Ầ': 'A',
    'Ẩ': 'A',
    'Ẫ': 'A',
    'Ä': 'A',
    'Ǟ': 'A',
    'Ȧ': 'A',
    'Ǡ': 'A',
    'Ạ': 'A',
    'Ȁ': 'A',
    'À': 'A',
    'Ả': 'A',
    'Ȃ': 'A',
    'Ā': 'A',
    'Ą': 'A',
    'Å': 'A',
    'Ǻ': 'A',
    'Ḁ': 'A',
    'Ⱥ': 'A',
    'Ã': 'A',
    'Ꜳ': 'AA',
    'Æ': 'AE',
    'Ǽ': 'AE',
    'Ǣ': 'AE',
    'Ꜵ': 'AO',
    'Ꜷ': 'AU',
    'Ꜹ': 'AV',
    'Ꜻ': 'AV',
    'Ꜽ': 'AY',
    'Ḃ': 'B',
    'Ḅ': 'B',
    'Ɓ': 'B',
    'Ḇ': 'B',
    'Ƀ': 'B',
    'Ƃ': 'B',
    'Ć': 'C',
    'Č': 'C',
    'Ç': 'C',
    'Ḉ': 'C',
    'Ĉ': 'C',
    'Ċ': 'C',
    'Ƈ': 'C',
    'Ȼ': 'C',
    'Ď': 'D',
    'Ḑ': 'D',
    'Ḓ': 'D',
    'Ḋ': 'D',
    'Ḍ': 'D',
    'Ɗ': 'D',
    'Ḏ': 'D',
    'ǲ': 'D',
    'ǅ': 'D',
    'Đ': 'D',
    'Ƌ': 'D',
    'Ǳ': 'DZ',
    'Ǆ': 'DZ',
    'É': 'E',
    'Ĕ': 'E',
    'Ě': 'E',
    'Ȩ': 'E',
    'Ḝ': 'E',
    'Ê': 'E',
    'Ế': 'E',
    'Ệ': 'E',
    'Ề': 'E',
    'Ể': 'E',
    'Ễ': 'E',
    'Ḙ': 'E',
    'Ë': 'E',
    'Ė': 'E',
    'Ẹ': 'E',
    'Ȅ': 'E',
    'È': 'E',
    'Ẻ': 'E',
    'Ȇ': 'E',
    'Ē': 'E',
    'Ḗ': 'E',
    'Ḕ': 'E',
    'Ę': 'E',
    'Ɇ': 'E',
    'Ẽ': 'E',
    'Ḛ': 'E',
    'Ꝫ': 'ET',
    'Ḟ': 'F',
    'Ƒ': 'F',
    'Ǵ': 'G',
    'Ğ': 'G',
    'Ǧ': 'G',
    'Ģ': 'G',
    'Ĝ': 'G',
    'Ġ': 'G',
    'Ɠ': 'G',
    'Ḡ': 'G',
    'Ǥ': 'G',
    'Ḫ': 'H',
    'Ȟ': 'H',
    'Ḩ': 'H',
    'Ĥ': 'H',
    'Ⱨ': 'H',
    'Ḧ': 'H',
    'Ḣ': 'H',
    'Ḥ': 'H',
    'Ħ': 'H',
    'Í': 'I',
    'Ĭ': 'I',
    'Ǐ': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ḯ': 'I',
    'İ': 'I',
    'Ị': 'I',
    'Ȉ': 'I',
    'Ì': 'I',
    'Ỉ': 'I',
    'Ȋ': 'I',
    'Ī': 'I',
    'Į': 'I',
    'Ɨ': 'I',
    'Ĩ': 'I',
    'Ḭ': 'I',
    'Ꝺ': 'D',
    'Ꝼ': 'F',
    'Ᵹ': 'G',
    'Ꞃ': 'R',
    'Ꞅ': 'S',
    'Ꞇ': 'T',
    'Ꝭ': 'IS',
    'Ĵ': 'J',
    'Ɉ': 'J',
    'Ḱ': 'K',
    'Ǩ': 'K',
    'Ķ': 'K',
    'Ⱪ': 'K',
    'Ꝃ': 'K',
    'Ḳ': 'K',
    'Ƙ': 'K',
    'Ḵ': 'K',
    'Ꝁ': 'K',
    'Ꝅ': 'K',
    'Ĺ': 'L',
    'Ƚ': 'L',
    'Ľ': 'L',
    'Ļ': 'L',
    'Ḽ': 'L',
    'Ḷ': 'L',
    'Ḹ': 'L',
    'Ⱡ': 'L',
    'Ꝉ': 'L',
    'Ḻ': 'L',
    'Ŀ': 'L',
    'Ɫ': 'L',
    'ǈ': 'L',
    'Ł': 'L',
    'Ǉ': 'LJ',
    'Ḿ': 'M',
    'Ṁ': 'M',
    'Ṃ': 'M',
    'Ɱ': 'M',
    'Ń': 'N',
    'Ň': 'N',
    'Ņ': 'N',
    'Ṋ': 'N',
    'Ṅ': 'N',
    'Ṇ': 'N',
    'Ǹ': 'N',
    'Ɲ': 'N',
    'Ṉ': 'N',
    'Ƞ': 'N',
    'ǋ': 'N',
    'Ñ': 'N',
    'Ǌ': 'NJ',
    'Ó': 'O',
    'Ŏ': 'O',
    'Ǒ': 'O',
    'Ô': 'O',
    'Ố': 'O',
    'Ộ': 'O',
    'Ồ': 'O',
    'Ổ': 'O',
    'Ỗ': 'O',
    'Ö': 'O',
    'Ȫ': 'O',
    'Ȯ': 'O',
    'Ȱ': 'O',
    'Ọ': 'O',
    'Ő': 'O',
    'Ȍ': 'O',
    'Ò': 'O',
    'Ỏ': 'O',
    'Ơ': 'O',
    'Ớ': 'O',
    'Ợ': 'O',
    'Ờ': 'O',
    'Ở': 'O',
    'Ỡ': 'O',
    'Ȏ': 'O',
    'Ꝋ': 'O',
    'Ꝍ': 'O',
    'Ō': 'O',
    'Ṓ': 'O',
    'Ṑ': 'O',
    'Ɵ': 'O',
    'Ǫ': 'O',
    'Ǭ': 'O',
    'Ø': 'O',
    'Ǿ': 'O',
    'Õ': 'O',
    'Ṍ': 'O',
    'Ṏ': 'O',
    'Ȭ': 'O',
    'Ƣ': 'OI',
    'Ꝏ': 'OO',
    'Ɛ': 'E',
    'Ɔ': 'O',
    'Ȣ': 'OU',
    'Ṕ': 'P',
    'Ṗ': 'P',
    'Ꝓ': 'P',
    'Ƥ': 'P',
    'Ꝕ': 'P',
    'Ᵽ': 'P',
    'Ꝑ': 'P',
    'Ꝙ': 'Q',
    'Ꝗ': 'Q',
    'Ŕ': 'R',
    'Ř': 'R',
    'Ŗ': 'R',
    'Ṙ': 'R',
    'Ṛ': 'R',
    'Ṝ': 'R',
    'Ȑ': 'R',
    'Ȓ': 'R',
    'Ṟ': 'R',
    'Ɍ': 'R',
    'Ɽ': 'R',
    'Ꜿ': 'C',
    'Ǝ': 'E',
    'Ś': 'S',
    'Ṥ': 'S',
    'Š': 'S',
    'Ṧ': 'S',
    'Ş': 'S',
    'Ŝ': 'S',
    'Ș': 'S',
    'Ṡ': 'S',
    'Ṣ': 'S',
    'Ṩ': 'S',
    'Ť': 'T',
    'Ţ': 'T',
    'Ṱ': 'T',
    'Ț': 'T',
    'Ⱦ': 'T',
    'Ṫ': 'T',
    'Ṭ': 'T',
    'Ƭ': 'T',
    'Ṯ': 'T',
    'Ʈ': 'T',
    'Ŧ': 'T',
    'Ɐ': 'A',
    'Ꞁ': 'L',
    'Ɯ': 'M',
    'Ʌ': 'V',
    'Ꜩ': 'TZ',
    'Ú': 'U',
    'Ŭ': 'U',
    'Ǔ': 'U',
    'Û': 'U',
    'Ṷ': 'U',
    'Ü': 'U',
    'Ǘ': 'U',
    'Ǚ': 'U',
    'Ǜ': 'U',
    'Ǖ': 'U',
    'Ṳ': 'U',
    'Ụ': 'U',
    'Ű': 'U',
    'Ȕ': 'U',
    'Ù': 'U',
    'Ủ': 'U',
    'Ư': 'U',
    'Ứ': 'U',
    'Ự': 'U',
    'Ừ': 'U',
    'Ử': 'U',
    'Ữ': 'U',
    'Ȗ': 'U',
    'Ū': 'U',
    'Ṻ': 'U',
    'Ų': 'U',
    'Ů': 'U',
    'Ũ': 'U',
    'Ṹ': 'U',
    'Ṵ': 'U',
    'Ꝟ': 'V',
    'Ṿ': 'V',
    'Ʋ': 'V',
    'Ṽ': 'V',
    'Ꝡ': 'VY',
    'Ẃ': 'W',
    'Ŵ': 'W',
    'Ẅ': 'W',
    'Ẇ': 'W',
    'Ẉ': 'W',
    'Ẁ': 'W',
    'Ⱳ': 'W',
    'Ẍ': 'X',
    'Ẋ': 'X',
    'Ý': 'Y',
    'Ŷ': 'Y',
    'Ÿ': 'Y',
    'Ẏ': 'Y',
    'Ỵ': 'Y',
    'Ỳ': 'Y',
    'Ƴ': 'Y',
    'Ỷ': 'Y',
    'Ỿ': 'Y',
    'Ȳ': 'Y',
    'Ɏ': 'Y',
    'Ỹ': 'Y',
    'Ź': 'Z',
    'Ž': 'Z',
    'Ẑ': 'Z',
    'Ⱬ': 'Z',
    'Ż': 'Z',
    'Ẓ': 'Z',
    'Ȥ': 'Z',
    'Ẕ': 'Z',
    'Ƶ': 'Z',
    'Ĳ': 'IJ',
    'Œ': 'OE',
    'ᴀ': 'A',
    'ᴁ': 'AE',
    'ʙ': 'B',
    'ᴃ': 'B',
    'ᴄ': 'C',
    'ᴅ': 'D',
    'ᴇ': 'E',
    'ꜰ': 'F',
    'ɢ': 'G',
    'ʛ': 'G',
    'ʜ': 'H',
    'ɪ': 'I',
    'ʁ': 'R',
    'ᴊ': 'J',
    'ᴋ': 'K',
    'ʟ': 'L',
    'ᴌ': 'L',
    'ᴍ': 'M',
    'ɴ': 'N',
    'ᴏ': 'O',
    'ɶ': 'OE',
    'ᴐ': 'O',
    'ᴕ': 'OU',
    'ᴘ': 'P',
    'ʀ': 'R',
    'ᴎ': 'N',
    'ᴙ': 'R',
    'ꜱ': 'S',
    'ᴛ': 'T',
    'ⱻ': 'E',
    'ᴚ': 'R',
    'ᴜ': 'U',
    'ᴠ': 'V',
    'ᴡ': 'W',
    'ʏ': 'Y',
    'ᴢ': 'Z',
    'á': 'a',
    'ă': 'a',
    'ắ': 'a',
    'ặ': 'a',
    'ằ': 'a',
    'ẳ': 'a',
    'ẵ': 'a',
    'ǎ': 'a',
    'â': 'a',
    'ấ': 'a',
    'ậ': 'a',
    'ầ': 'a',
    'ẩ': 'a',
    'ẫ': 'a',
    'ä': 'a',
    'ǟ': 'a',
    'ȧ': 'a',
    'ǡ': 'a',
    'ạ': 'a',
    'ȁ': 'a',
    'à': 'a',
    'ả': 'a',
    'ȃ': 'a',
    'ā': 'a',
    'ą': 'a',
    'ᶏ': 'a',
    'ẚ': 'a',
    'å': 'a',
    'ǻ': 'a',
    'ḁ': 'a',
    'ⱥ': 'a',
    'ã': 'a',
    'ꜳ': 'aa',
    'æ': 'ae',
    'ǽ': 'ae',
    'ǣ': 'ae',
    'ꜵ': 'ao',
    'ꜷ': 'au',
    'ꜹ': 'av',
    'ꜻ': 'av',
    'ꜽ': 'ay',
    'ḃ': 'b',
    'ḅ': 'b',
    'ɓ': 'b',
    'ḇ': 'b',
    'ᵬ': 'b',
    'ᶀ': 'b',
    'ƀ': 'b',
    'ƃ': 'b',
    'ɵ': 'o',
    'ć': 'c',
    'č': 'c',
    'ç': 'c',
    'ḉ': 'c',
    'ĉ': 'c',
    'ɕ': 'c',
    'ċ': 'c',
    'ƈ': 'c',
    'ȼ': 'c',
    'ď': 'd',
    'ḑ': 'd',
    'ḓ': 'd',
    'ȡ': 'd',
    'ḋ': 'd',
    'ḍ': 'd',
    'ɗ': 'd',
    'ᶑ': 'd',
    'ḏ': 'd',
    'ᵭ': 'd',
    'ᶁ': 'd',
    'đ': 'd',
    'ɖ': 'd',
    'ƌ': 'd',
    'ı': 'i',
    'ȷ': 'j',
    'ɟ': 'j',
    'ʄ': 'j',
    'ǳ': 'dz',
    'ǆ': 'dz',
    'é': 'e',
    'ĕ': 'e',
    'ě': 'e',
    'ȩ': 'e',
    'ḝ': 'e',
    'ê': 'e',
    'ế': 'e',
    'ệ': 'e',
    'ề': 'e',
    'ể': 'e',
    'ễ': 'e',
    'ḙ': 'e',
    'ë': 'e',
    'ė': 'e',
    'ẹ': 'e',
    'ȅ': 'e',
    'è': 'e',
    'ẻ': 'e',
    'ȇ': 'e',
    'ē': 'e',
    'ḗ': 'e',
    'ḕ': 'e',
    'ⱸ': 'e',
    'ę': 'e',
    'ᶒ': 'e',
    'ɇ': 'e',
    'ẽ': 'e',
    'ḛ': 'e',
    'ꝫ': 'et',
    'ḟ': 'f',
    'ƒ': 'f',
    'ᵮ': 'f',
    'ᶂ': 'f',
    'ǵ': 'g',
    'ğ': 'g',
    'ǧ': 'g',
    'ģ': 'g',
    'ĝ': 'g',
    'ġ': 'g',
    'ɠ': 'g',
    'ḡ': 'g',
    'ᶃ': 'g',
    'ǥ': 'g',
    'ḫ': 'h',
    'ȟ': 'h',
    'ḩ': 'h',
    'ĥ': 'h',
    'ⱨ': 'h',
    'ḧ': 'h',
    'ḣ': 'h',
    'ḥ': 'h',
    'ɦ': 'h',
    'ẖ': 'h',
    'ħ': 'h',
    'ƕ': 'hv',
    'í': 'i',
    'ĭ': 'i',
    'ǐ': 'i',
    'î': 'i',
    'ï': 'i',
    'ḯ': 'i',
    'ị': 'i',
    'ȉ': 'i',
    'ì': 'i',
    'ỉ': 'i',
    'ȋ': 'i',
    'ī': 'i',
    'į': 'i',
    'ᶖ': 'i',
    'ɨ': 'i',
    'ĩ': 'i',
    'ḭ': 'i',
    'ꝺ': 'd',
    'ꝼ': 'f',
    'ᵹ': 'g',
    'ꞃ': 'r',
    'ꞅ': 's',
    'ꞇ': 't',
    'ꝭ': 'is',
    'ǰ': 'j',
    'ĵ': 'j',
    'ʝ': 'j',
    'ɉ': 'j',
    'ḱ': 'k',
    'ǩ': 'k',
    'ķ': 'k',
    'ⱪ': 'k',
    'ꝃ': 'k',
    'ḳ': 'k',
    'ƙ': 'k',
    'ḵ': 'k',
    'ᶄ': 'k',
    'ꝁ': 'k',
    'ꝅ': 'k',
    'ĺ': 'l',
    'ƚ': 'l',
    'ɬ': 'l',
    'ľ': 'l',
    'ļ': 'l',
    'ḽ': 'l',
    'ȴ': 'l',
    'ḷ': 'l',
    'ḹ': 'l',
    'ⱡ': 'l',
    'ꝉ': 'l',
    'ḻ': 'l',
    'ŀ': 'l',
    'ɫ': 'l',
    'ᶅ': 'l',
    'ɭ': 'l',
    'ł': 'l',
    'ǉ': 'lj',
    'ſ': 's',
    'ẜ': 's',
    'ẛ': 's',
    'ẝ': 's',
    'ḿ': 'm',
    'ṁ': 'm',
    'ṃ': 'm',
    'ɱ': 'm',
    'ᵯ': 'm',
    'ᶆ': 'm',
    'ń': 'n',
    'ň': 'n',
    'ņ': 'n',
    'ṋ': 'n',
    'ȵ': 'n',
    'ṅ': 'n',
    'ṇ': 'n',
    'ǹ': 'n',
    'ɲ': 'n',
    'ṉ': 'n',
    'ƞ': 'n',
    'ᵰ': 'n',
    'ᶇ': 'n',
    'ɳ': 'n',
    'ñ': 'n',
    'ǌ': 'nj',
    'ó': 'o',
    'ŏ': 'o',
    'ǒ': 'o',
    'ô': 'o',
    'ố': 'o',
    'ộ': 'o',
    'ồ': 'o',
    'ổ': 'o',
    'ỗ': 'o',
    'ö': 'o',
    'ȫ': 'o',
    'ȯ': 'o',
    'ȱ': 'o',
    'ọ': 'o',
    'ő': 'o',
    'ȍ': 'o',
    'ò': 'o',
    'ỏ': 'o',
    'ơ': 'o',
    'ớ': 'o',
    'ợ': 'o',
    'ờ': 'o',
    'ở': 'o',
    'ỡ': 'o',
    'ȏ': 'o',
    'ꝋ': 'o',
    'ꝍ': 'o',
    'ⱺ': 'o',
    'ō': 'o',
    'ṓ': 'o',
    'ṑ': 'o',
    'ǫ': 'o',
    'ǭ': 'o',
    'ø': 'o',
    'ǿ': 'o',
    'õ': 'o',
    'ṍ': 'o',
    'ṏ': 'o',
    'ȭ': 'o',
    'ƣ': 'oi',
    'ꝏ': 'oo',
    'ɛ': 'e',
    'ᶓ': 'e',
    'ɔ': 'o',
    'ᶗ': 'o',
    'ȣ': 'ou',
    'ṕ': 'p',
    'ṗ': 'p',
    'ꝓ': 'p',
    'ƥ': 'p',
    'ᵱ': 'p',
    'ᶈ': 'p',
    'ꝕ': 'p',
    'ᵽ': 'p',
    'ꝑ': 'p',
    'ꝙ': 'q',
    'ʠ': 'q',
    'ɋ': 'q',
    'ꝗ': 'q',
    'ŕ': 'r',
    'ř': 'r',
    'ŗ': 'r',
    'ṙ': 'r',
    'ṛ': 'r',
    'ṝ': 'r',
    'ȑ': 'r',
    'ɾ': 'r',
    'ᵳ': 'r',
    'ȓ': 'r',
    'ṟ': 'r',
    'ɼ': 'r',
    'ᵲ': 'r',
    'ᶉ': 'r',
    'ɍ': 'r',
    'ɽ': 'r',
    'ↄ': 'c',
    'ꜿ': 'c',
    'ɘ': 'e',
    'ɿ': 'r',
    'ś': 's',
    'ṥ': 's',
    'š': 's',
    'ṧ': 's',
    'ş': 's',
    'ŝ': 's',
    'ș': 's',
    'ṡ': 's',
    'ṣ': 's',
    'ṩ': 's',
    'ʂ': 's',
    'ᵴ': 's',
    'ᶊ': 's',
    'ȿ': 's',
    'ɡ': 'g',
    'ᴑ': 'o',
    'ᴓ': 'o',
    'ᴝ': 'u',
    'ť': 't',
    'ţ': 't',
    'ṱ': 't',
    'ț': 't',
    'ȶ': 't',
    'ẗ': 't',
    'ⱦ': 't',
    'ṫ': 't',
    'ṭ': 't',
    'ƭ': 't',
    'ṯ': 't',
    'ᵵ': 't',
    'ƫ': 't',
    'ʈ': 't',
    'ŧ': 't',
    'ᵺ': 'th',
    'ɐ': 'a',
    'ᴂ': 'ae',
    'ǝ': 'e',
    'ᵷ': 'g',
    'ɥ': 'h',
    'ʮ': 'h',
    'ʯ': 'h',
    'ᴉ': 'i',
    'ʞ': 'k',
    'ꞁ': 'l',
    'ɯ': 'm',
    'ɰ': 'm',
    'ᴔ': 'oe',
    'ɹ': 'r',
    'ɻ': 'r',
    'ɺ': 'r',
    'ⱹ': 'r',
    'ʇ': 't',
    'ʌ': 'v',
    'ʍ': 'w',
    'ʎ': 'y',
    'ꜩ': 'tz',
    'ú': 'u',
    'ŭ': 'u',
    'ǔ': 'u',
    'û': 'u',
    'ṷ': 'u',
    'ü': 'u',
    'ǘ': 'u',
    'ǚ': 'u',
    'ǜ': 'u',
    'ǖ': 'u',
    'ṳ': 'u',
    'ụ': 'u',
    'ű': 'u',
    'ȕ': 'u',
    'ù': 'u',
    'ủ': 'u',
    'ư': 'u',
    'ứ': 'u',
    'ự': 'u',
    'ừ': 'u',
    'ử': 'u',
    'ữ': 'u',
    'ȗ': 'u',
    'ū': 'u',
    'ṻ': 'u',
    'ų': 'u',
    'ᶙ': 'u',
    'ů': 'u',
    'ũ': 'u',
    'ṹ': 'u',
    'ṵ': 'u',
    'ᵫ': 'ue',
    'ꝸ': 'um',
    'ⱴ': 'v',
    'ꝟ': 'v',
    'ṿ': 'v',
    'ʋ': 'v',
    'ᶌ': 'v',
    'ⱱ': 'v',
    'ṽ': 'v',
    'ꝡ': 'vy',
    'ẃ': 'w',
    'ŵ': 'w',
    'ẅ': 'w',
    'ẇ': 'w',
    'ẉ': 'w',
    'ẁ': 'w',
    'ⱳ': 'w',
    'ẘ': 'w',
    'ẍ': 'x',
    'ẋ': 'x',
    'ᶍ': 'x',
    'ý': 'y',
    'ŷ': 'y',
    'ÿ': 'y',
    'ẏ': 'y',
    'ỵ': 'y',
    'ỳ': 'y',
    'ƴ': 'y',
    'ỷ': 'y',
    'ỿ': 'y',
    'ȳ': 'y',
    'ẙ': 'y',
    'ɏ': 'y',
    'ỹ': 'y',
    'ź': 'z',
    'ž': 'z',
    'ẑ': 'z',
    'ʑ': 'z',
    'ⱬ': 'z',
    'ż': 'z',
    'ẓ': 'z',
    'ȥ': 'z',
    'ẕ': 'z',
    'ᵶ': 'z',
    'ᶎ': 'z',
    'ʐ': 'z',
    'ƶ': 'z',
    'ɀ': 'z',
    'ﬀ': 'ff',
    'ﬃ': 'ffi',
    'ﬄ': 'ffl',
    'ﬁ': 'fi',
    'ﬂ': 'fl',
    'ĳ': 'ij',
    'œ': 'oe',
    'ﬆ': 'st',
    'ₐ': 'a',
    'ₑ': 'e',
    'ᵢ': 'i',
    'ⱼ': 'j',
    'ₒ': 'o',
    'ᵣ': 'r',
    'ᵤ': 'u',
    'ᵥ': 'v',
    'ₓ': 'x'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TypeaheadOptions = /** @class */ (function () {
    function TypeaheadOptions(options) {
        Object.assign(this, options);
    }
    return TypeaheadOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TypeaheadMatch = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function TypeaheadMatch(item, value, header) {
        if (value === void 0) { value = item; }
        if (header === void 0) { header = false; }
        this.item = item;
        this.value = value;
        this.header = header;
    }
    /**
     * @return {?}
     */
    TypeaheadMatch.prototype.isHeader = /**
     * @return {?}
     */
    function () {
        return this.header;
    };
    /**
     * @return {?}
     */
    TypeaheadMatch.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    return TypeaheadMatch;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} str
 * @return {?}
 */
function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, (/**
     * @param {?} a
     * @return {?}
     */
    function (a) {
        return latinMap[a] || a;
    }));
}
/**
 * @param {?} queryToEscape
 * @return {?}
 */
function escapeRegexp(queryToEscape) {
    // Regex: capture the whole query string and replace it with the string
    // that will be used to match the results, for example if the capture is
    // 'a' the result will be \a
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/* tslint:disable */
/**
 * @param {?} str
 * @param {?=} wordRegexDelimiters
 * @param {?=} phraseRegexDelimiters
 * @return {?}
 */
function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
    if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
    if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
    /* tslint:enable */
    /** @type {?} */
    var regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
        ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
    /** @type {?} */
    var preTokenized = str.split(new RegExp(regexStr, 'g'));
    /** @type {?} */
    var result = [];
    /** @type {?} */
    var preTokenizedLength = preTokenized.length;
    /** @type {?} */
    var token;
    /** @type {?} */
    var replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
    for (var i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} object
 * @param {?} option
 * @return {?}
 */
function getValueFromObject(object, option) {
    var e_1, _a;
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        /** @type {?} */
        var functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    /** @type {?} */
    var properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    /** @type {?} */
    var propertiesArray = properties.split('.');
    try {
        for (var propertiesArray_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(propertiesArray), propertiesArray_1_1 = propertiesArray_1.next(); !propertiesArray_1_1.done; propertiesArray_1_1 = propertiesArray_1.next()) {
            var property = propertiesArray_1_1.value;
            if (property in object) {
                // tslint:disable-next-line
                object = object[property];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (propertiesArray_1_1 && !propertiesArray_1_1.done && (_a = propertiesArray_1.return)) _a.call(propertiesArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (!object) {
        return '';
    }
    return object.toString();
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TYPEAHEAD_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
/** @type {?} */
var typeaheadAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('typeaheadAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('animated-down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => animated-down', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: 0, overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(TYPEAHEAD_ANIMATION_TIMING)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('animated-up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => animated-up', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(TYPEAHEAD_ANIMATION_TIMING)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => unanimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0s'))
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TypeaheadContainerComponent = /** @class */ (function () {
    function TypeaheadContainerComponent(positionService, renderer, element) {
        this.positionService = positionService;
        this.renderer = renderer;
        this.element = element;
        this.isFocused = false;
        this.visibility = 'hidden';
        this.height = 0;
        this._matches = [];
        this.isScrolledIntoView = (/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) {
            /** @type {?} */
            var containerViewTop = this.ulElement.nativeElement.scrollTop;
            /** @type {?} */
            var containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
            /** @type {?} */
            var elemTop = elem.offsetTop;
            /** @type {?} */
            var elemBottom = elemTop + elem.offsetHeight;
            return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
        });
    }
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._matches;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this.positionService.setOptions({
                modifiers: { flip: { enabled: this.adaptivePosition } },
                allowedPositions: ['top', 'bottom']
            });
            this.positionService.event$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
             * @return {?}
             */
            function () {
                _this.positionService.disable();
                _this.visibility = _this.typeaheadScrollable ? 'hidden' : 'visible';
                if (_this.isAnimated) {
                    _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';
                    return;
                }
                _this.positionService.enable();
                _this.animationState = 'unanimated';
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(parseInt(TYPEAHEAD_ANIMATION_TIMING, 10)))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.positionService.enable();
            }));
            this._matches = value;
            this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
            if (this.typeaheadScrollable) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.setScrollableMode();
                }));
            }
            if (this.typeaheadIsFirstItemActive && this._matches.length > 0) {
                this._active = this._matches[0];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
            }
            if (this._active && !this.typeaheadIsFirstItemActive) {
                /** @type {?} */
                var concurrency = this._matches.find((/**
                 * @param {?} match
                 * @return {?}
                 */
                function (match) { return match.value === _this._active.value; }));
                if (concurrency) {
                    this.selectActive(concurrency);
                    return;
                }
                this._active = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isTopPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this.element.nativeElement.classList.contains('top');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
        // tslint:disable-next-line:no-any
        get: 
        // tslint:disable-next-line:no-any
        /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.optionsListTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.isAnimated : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "adaptivePosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.adaptivePosition : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadScrollable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.typeaheadScrollable : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadOptionsInScrollableView", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadIsFirstItemActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.typeaheadIsFirstItemActive : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
        // tslint:disable-next-line:no-any
        get: 
        // tslint:disable-next-line:no-any
        /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} isActiveItemChanged
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.selectActiveMatch = /**
     * @param {?=} isActiveItemChanged
     * @return {?}
     */
    function (isActiveItemChanged) {
        if (this._active && this.parent.typeaheadSelectFirstItem) {
            this.selectMatch(this._active);
        }
        if (!this.parent.typeaheadSelectFirstItem && isActiveItemChanged) {
            this.selectMatch(this._active);
        }
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.prevActiveMatch = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollPrevious(index);
        }
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.nextActiveMatch = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollNext(index);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.selectActive = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isFocused = true;
        this._active = value;
    };
    /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.highlight = /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    function (match, query) {
        /** @type {?} */
        var itemStr = match.value;
        /** @type {?} */
        var itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? latinize(itemStr)
            : itemStr).toLowerCase();
        /** @type {?} */
        var startIdx;
        /** @type {?} */
        var tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            /** @type {?} */
            var queryLen = query.length;
            for (var i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                            ("" + itemStr.substring(startIdx + tokenLen));
                    itemStrHelper =
                        itemStrHelper.substring(0, startIdx) + "        " + ' '.repeat(tokenLen) + "         " +
                            ("" + itemStrHelper.substring(startIdx + tokenLen));
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr =
                    itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                        ("" + itemStr.substring(startIdx + tokenLen));
            }
        }
        return itemStr;
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.focusLost = /**
     * @return {?}
     */
    function () {
        this.isFocused = false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.isActive = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this._active === value;
    };
    /**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.selectMatch = /**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */
    function (value, e) {
        var _this = this;
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.parent.typeaheadOnSelect.emit(value); }), 0);
        return false;
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.setScrollableMode = /**
     * @return {?}
     */
    function () {
        if (!this.ulElement) {
            this.ulElement = this.element;
        }
        if (this.liElements.first) {
            /** @type {?} */
            var ulStyles = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getStyles(this.ulElement.nativeElement);
            /** @type {?} */
            var liStyles = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getStyles(this.liElements.first.nativeElement);
            /** @type {?} */
            var ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                .replace('px', ''));
            /** @type {?} */
            var ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                .replace('px', ''));
            /** @type {?} */
            var optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                .replace('px', ''));
            /** @type {?} */
            var height = this.typeaheadOptionsInScrollableView * optionHeight;
            this.guiHeight = height + ulPaddingTop + ulPaddingBottom + "px";
        }
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.scrollPrevious = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index === 0) {
            this.scrollToBottom();
            return;
        }
        if (this.liElements) {
            /** @type {?} */
            var liElement = this.liElements.toArray()[index - 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.scrollNext = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index + 1 > this.matches.length - 1) {
            this.scrollToTop();
            return;
        }
        if (this.liElements) {
            /** @type {?} */
            var liElement = this.liElements.toArray()[index + 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop =
                    liElement.nativeElement.offsetTop -
                        Number(this.ulElement.nativeElement.offsetHeight) +
                        Number(liElement.nativeElement.offsetHeight);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.scrollToBottom = /**
     * @private
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
    };
    /**
     * @private
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.scrollToTop = /**
     * @private
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.scrollTop = 0;
    };
    TypeaheadContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'typeahead-container',
                    template: "<!-- inject options list template -->\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n             [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template>\n\n<!-- default options item template -->\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"highlight(match, query)\"></span>\n</ng-template>\n\n<!-- Bootstrap 3 options list template -->\n<ng-template #bs3Template>\n  <ul class=\"dropdown-menu\"\n      #ulElement\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\n      <li #liElements\n          *ngIf=\"!match.isHeader()\"\n          [@typeaheadAnimation]=\"animationState\"\n          [class.active]=\"isActive(match)\"\n          (mouseenter)=\"selectActive(match)\">\n\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                       [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n        </a>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<!-- Bootstrap 4 options list template -->\n<ng-template #bs4Template>\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\n    <ng-template [ngIf]=\"!match.isHeader()\">\n      <button #liElements\n              [@typeaheadAnimation]=\"animationState\"\n              class=\"dropdown-item\"\n              (click)=\"selectMatch(match, $event)\"\n              (mouseenter)=\"selectActive(match)\"\n              [class.active]=\"isActive(match)\">\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                     [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n      </button>\n    </ng-template>\n  </ng-template>\n</ng-template>\n",
                    host: {
                        class: 'dropdown open bottom',
                        '[class.dropdown-menu]': 'isBs4',
                        '[style.height]': "isBs4 && needScrollbar ? guiHeight: 'auto'",
                        '[style.visibility]': "visibility",
                        '[class.dropup]': 'dropup',
                        style: 'position: absolute;display: block;'
                    },
                    animations: [typeaheadAnimation],
                    styles: ["\n    :host.dropdown {\n      z-index: 1000;\n    }\n\n    :host.dropdown-menu, .dropdown-menu {\n      overflow-y: auto;\n      height: 100px;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    TypeaheadContainerComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    TypeaheadContainerComponent.propDecorators = {
        ulElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['ulElement', { static: false },] }],
        liElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['liElements',] }],
        focusLost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseleave',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['blur',] }]
    };
    return TypeaheadContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values provider for typeahead
 */
var TypeaheadConfig = /** @class */ (function () {
    function TypeaheadConfig() {
        /**
         * sets use adaptive position
         */
        this.adaptivePosition = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * used to hide results on blur
         */
        this.hideResultsOnBlur = true;
        /**
         * used to choose the first item in typeahead container
         */
        this.selectFirstItem = true;
        /**
         * used to active/inactive the first item in typeahead container
         */
        this.isFirstItemActive = true;
        /**
         * used to choose set minimal no of characters that needs to
         * be entered before typeahead kicks-in
         */
        this.minLength = 1;
    }
    TypeaheadConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return TypeaheadConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TypeaheadDirective = /** @class */ (function () {
    function TypeaheadDirective(cis, config, changeDetection, element, ngControl, renderer, viewContainerRef) {
        this.changeDetection = changeDetection;
        this.element = element;
        this.ngControl = ngControl;
        this.renderer = renderer;
        /**
         * minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         */
        this.typeaheadMinLength = void 0;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * should be used only in case of typeahead attribute is array.
         * If true - loading of options will be async, otherwise - sync.
         * true make sense if options array is large.
         */
        this.typeaheadAsync = void 0;
        /**
         * match latin symbols.
         * If true the word súper would match super and vice versa.
         */
        this.typeaheadLatinize = true;
        /**
         * Can be use to search words by inserting a single white space between each characters
         *  for example 'C a l i f o r n i a' will match 'California'.
         */
        this.typeaheadSingleWords = true;
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         */
        this.typeaheadWordDelimiters = ' ';
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         */
        this.typeaheadPhraseDelimiters = '\'"';
        /**
         * specifies if typeahead is scrollable
         */
        this.typeaheadScrollable = false;
        /**
         * specifies number of options to show in scroll view
         */
        this.typeaheadOptionsInScrollableView = 5;
        /**
         * fired when an options list was opened and the user clicked Tab
         * If a value equal true, it will be chosen first or active item in the list
         * If value equal false, it will be chosen an active item in the list or nothing
         */
        this.typeaheadSelectFirstItem = true;
        /**
         * makes active first item in a list
         */
        this.typeaheadIsFirstItemActive = true;
        /**
         * fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         */
        this.typeaheadLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * fired when option was selected, return object with data of this option
         */
        this.typeaheadOnSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * fired when blur event occurs. returns the active item
         */
        // tslint:disable-next-line:no-any
        this.typeaheadOnBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This attribute indicates that the dropdown should be opened upwards
         */
        this.dropup = false;
        this.isActiveItemChanged = false;
        this.isTypeaheadOptionsListActive = false;
        // tslint:disable-next-line:no-any
        this.keyUpEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.placement = 'bottom-left';
        this._subscriptions = [];
        this._typeahead = cis.createLoader(element, viewContainerRef, renderer)
            .provide({ provide: TypeaheadConfig, useValue: config });
        Object.assign(this, {
            typeaheadHideResultsOnBlur: config.hideResultsOnBlur,
            typeaheadSelectFirstItem: config.selectFirstItem,
            typeaheadIsFirstItemActive: config.isFirstItemActive,
            typeaheadMinLength: config.minLength,
            adaptivePosition: config.adaptivePosition,
            isAnimated: config.isAnimated
        });
    }
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined &&
            !(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["isObservable"])(this.typeahead))) {
            this.typeaheadAsync = false;
        }
        if (Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["isObservable"])(this.typeahead)) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    TypeaheadDirective.prototype.onInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        /** @type {?} */
        var value = e.target.value !== undefined
            ? e.target.value
            : e.target.textContent !== undefined
                ? e.target.textContent
                : e.target.innerText;
        if (value != null && value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TypeaheadDirective.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._container) {
            // esc
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 27 || event.key === 'Escape') {
                this.hide();
                return;
            }
            // up
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 38 || event.key === 'ArrowUp') {
                this.isActiveItemChanged = true;
                this._container.prevActiveMatch();
                return;
            }
            // down
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 40 || event.key === 'ArrowDown') {
                this.isActiveItemChanged = true;
                this._container.nextActiveMatch();
                return;
            }
            // enter
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 13 || event.key === 'Enter') {
                this._container.selectActiveMatch();
                return;
            }
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TypeaheadDirective.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        /* tslint:disable-next-line: deprecation */
        if (event.keyCode === 9 || event.key === 'Tab' || event.keyCode === 13 || event.key === 'Enter') {
            event.preventDefault();
            if (this.typeaheadSelectFirstItem) {
                this._container.selectActiveMatch();
                return;
            }
            if (!this.typeaheadSelectFirstItem) {
                this._container.selectActiveMatch(this.isActiveItemChanged);
                this.isActiveItemChanged = false;
                this.hide();
            }
        }
    };
    /**
     * @param {?} match
     * @return {?}
     */
    TypeaheadDirective.prototype.changeModel = /**
     * @param {?} match
     * @return {?}
     */
    function (match) {
        /** @type {?} */
        var valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    };
    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._typeahead
            .attach(TypeaheadContainerComponent)
            .to(this.container)
            .position({ attachment: (this.dropup ? 'top' : 'bottom') + " start" })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer.listen('document', 'click', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (_this.typeaheadMinLength === 0 && _this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            if (!_this.typeaheadHideResultsOnBlur || _this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            _this.onOutsideClick();
        }));
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        /** @type {?} */
        var normalizedQuery = (this.typeaheadLatinize
            ? latinize(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.onOutsideClick = /**
     * @return {?}
     */
    function () {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            // clean up subscriptions
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._typeahead.dispose();
    };
    /**
     * @protected
     * @return {?}
     */
    TypeaheadDirective.prototype.asyncActions = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(this.typeaheadWaitMs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((/**
         * @return {?}
         */
        function () { return _this.typeahead; })))
            .subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        function (matches) {
            _this.finalizeAsyncCall(matches);
        })));
    };
    /**
     * @protected
     * @return {?}
     */
    TypeaheadDirective.prototype.syncActions = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(this.typeaheadWaitMs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var normalizedQuery = _this.normalizeQuery(value);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(_this.typeahead)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return (option &&
                    _this.testMatch(_this.normalizeOption(option), normalizedQuery));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])());
        })))
            .subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        function (matches) {
            _this.finalizeAsyncCall(matches);
        })));
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @protected
     * @param {?} option
     * @return {?}
     */
    TypeaheadDirective.prototype.normalizeOption = 
    // tslint:disable-next-line:no-any
    /**
     * @protected
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var optionValue = getValueFromObject(option, this.typeaheadOptionField);
        /** @type {?} */
        var normalizedOption = this.typeaheadLatinize
            ? latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    };
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    TypeaheadDirective.prototype.normalizeQuery = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        /** @type {?} */
        var normalizedQuery = (this.typeaheadLatinize
            ? latinize(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    };
    /**
     * @protected
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    TypeaheadDirective.prototype.testMatch = /**
     * @protected
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    function (match, test) {
        /** @type {?} */
        var spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (var i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    };
    /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    TypeaheadDirective.prototype.finalizeAsyncCall = /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    function (matches) {
        this.prepareMatches(matches || []);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // fix: remove usage of ngControl internals
            /** @type {?} */
            var _controlValue = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value) || '';
            // This improves the speed as it won't have to be done for each list item
            /** @type {?} */
            var normalizedQuery = _controlValue.toString().toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    };
    /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    TypeaheadDirective.prototype.prepareMatches = /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        /** @type {?} */
        var limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            /** @type {?} */
            var matches_1 = [];
            // extract all group names
            /** @type {?} */
            var groups = limited
                .map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return getValueFromObject(option, _this.typeaheadGroupField);
            }))
                .filter((/**
             * @param {?} v
             * @param {?} i
             * @param {?} a
             * @return {?}
             */
            function (v, i, a) { return a.indexOf(v) === i; }));
            groups.forEach((/**
             * @param {?} group
             * @return {?}
             */
            function (group) {
                // add group header to array of matches
                matches_1.push(new TypeaheadMatch(group, group, true));
                // add each item of group to array of matches
                matches_1 = matches_1.concat(limited
                    .filter((
                // tslint:disable-next-line:no-any
                // tslint:disable-next-line:no-any
                /**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return getValueFromObject(option, _this.typeaheadGroupField) === group;
                }))
                    .map((
                // tslint:disable-next-line:no-any
                // tslint:disable-next-line:no-any
                /**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                })));
            }));
            this._matches = matches_1;
        }
        else {
            this._matches = limited.map((
            // tslint:disable-next-line:no-any
            // tslint:disable-next-line:no-any
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
            }));
        }
    };
    /**
     * @protected
     * @return {?}
     */
    TypeaheadDirective.prototype.hasMatches = /**
     * @protected
     * @return {?}
     */
    function () {
        return this._matches.length > 0;
    };
    TypeaheadDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] }
    ];
    /** @nocollapse */
    TypeaheadDirective.ctorParameters = function () { return [
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_8__["ComponentLoaderFactory"] },
        { type: TypeaheadConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    TypeaheadDirective.propDecorators = {
        typeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadMinLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        adaptivePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadWaitMs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadOptionsLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadOptionField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadGroupField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadAsync: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadLatinize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadSingleWords: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadWordDelimiters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadPhraseDelimiters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadItemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        optionsListTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadScrollable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadOptionsInScrollableView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadHideResultsOnBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadSelectFirstItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadIsFirstItemActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeaheadLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        typeaheadNoResults: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        typeaheadOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        typeaheadOnBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dropup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input', ['$event'],] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keyup', ['$event'],] }],
        onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['focus',] }],
        onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['blur',] }],
        onKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] }]
    };
    return TypeaheadDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TypeaheadModule = /** @class */ (function () {
    function TypeaheadModule() {
    }
    /**
     * @return {?}
     */
    TypeaheadModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TypeaheadModule,
            providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_8__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"], TypeaheadConfig]
        };
    };
    TypeaheadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]],
                    declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                    exports: [TypeaheadContainerComponent, TypeaheadDirective],
                    entryComponents: [TypeaheadContainerComponent]
                },] }
    ];
    return TypeaheadModule;
}());


//# sourceMappingURL=ngx-bootstrap-typeahead.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/cards.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/cards.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Card title\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n        <div class=\"card-footer\">Card footer</div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-check\"></i>Card with icon\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Card with switch\r\n          <div class=\"card-header-actions\" style=\"height: 21px;\" >\r\n            <label class=\"switch switch-sm switch-label switch-info\" >\r\n              <input type=\"checkbox\" class=\"switch-input\" checked>\r\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Card with label\r\n          <div class=\"card-header-actions\">\r\n            <span class=\"badge badge-success\">Success</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Card with label\r\n          <div class=\"card-header-actions\">\r\n            <span class=\"badge badge-pill badge-danger\">42</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card border-primary\">\r\n        <div class=\"card-header\">\r\n          Card outline\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card border-secondary\">\r\n        <div class=\"card-header\">\r\n          Card outline\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card border-success\">\r\n        <div class=\"card-header\">\r\n          Card outline\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card border-info\">\r\n        <div class=\"card-header\">\r\n          Card outline\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card border-warning\">\r\n        <div class=\"card-header\">\r\n          Card outline\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card border-danger\">\r\n        <div class=\"card-header\">\r\n          Card outline\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card card-accent-primary\">\r\n        <div class=\"card-header\">\r\n          Card with accent\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card card-accent-secondary\">\r\n        <div class=\"card-header\">\r\n          Card with accent\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card card-accent-success\">\r\n        <div class=\"card-header\">\r\n          Card with accent\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card card-accent-info\">\r\n        <div class=\"card-header\">\r\n          Card with accent\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card card-accent-warning\">\r\n        <div class=\"card-header\">\r\n          Card with accent\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card card-accent-danger\">\r\n        <div class=\"card-header\">\r\n          Card with accent\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card text-white bg-primary text-center\">\r\n        <div class=\"card-body\">\r\n          <blockquote class=\"card-bodyquote\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer>Someone famous in\r\n              <cite title=\"Source Title\">Source Title</cite>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card text-white bg-success text-center\">\r\n        <div class=\"card-body\">\r\n          <blockquote class=\"card-bodyquote\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer>Someone famous in\r\n              <cite title=\"Source Title\">Source Title</cite>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card text-white bg-info text-center\">\r\n        <div class=\"card-body\">\r\n          <blockquote class=\"card-bodyquote\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer>Someone famous in\r\n              <cite title=\"Source Title\">Source Title</cite>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card text-white bg-warning text-center\">\r\n        <div class=\"card-body\">\r\n          <blockquote class=\"card-bodyquote\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer>Someone famous in\r\n              <cite title=\"Source Title\">Source Title</cite>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card text-white bg-danger text-center\">\r\n        <div class=\"card-body\">\r\n          <blockquote class=\"card-bodyquote\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer>Someone famous in\r\n              <cite title=\"Source Title\">Source Title</cite>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card text-white bg-primary text-center\">\r\n        <div class=\"card-body\">\r\n          <blockquote class=\"card-bodyquote\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer>Someone famous in\r\n              <cite title=\"Source Title\">Source Title</cite>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card text-white bg-primary\">\r\n        <div class=\"card-header\">\r\n          Card title\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card text-white bg-success\">\r\n        <div class=\"card-header\">\r\n          Card title\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card text-white bg-info\">\r\n        <div class=\"card-header\">\r\n          Card title\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card text-white bg-warning\">\r\n        <div class=\"card-header\">\r\n          Card title\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <div class=\"card text-white bg-danger\">\r\n        <div class=\"card-header\">\r\n          Card title\r\n        </div>\r\n        <div class=\"card-body\">\r\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/carousels.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/carousels.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Pesquisar Zona de Mineração</strong>\r\n        </div>\r\n        <form [formGroup] = \"searchForm\" (ngSubmit)=\"onSubmit(searchForm.value)\" >\r\n\r\n        <div class=\"card-body\">\r\n            \r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Identificação</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"text-input\" name=\"text-input\" formControlName = \"id\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Nome</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"text-input\" name=\"text-input\" formControlName = \"name\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Tipo de Minério</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"text-input\" name=\"text-input\" formControlName = \"oreType\"class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n                                  \r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fas fa-search\"></i> Pesquisar</button>\r\n        </div>\r\n      </form>\r\n      </div>\r\n   \r\n\r\n      <table class=\"table table-bordered  table-striped table-light\">\r\n        <thead >\r\n          <tr>\r\n            <th scope=\"col\">Identificação</th>\r\n            <th scope=\"col\">Nome</th>\r\n            <th scope=\"col\">Tipo de Minério</th>\r\n            <th scope=\"col\">Lavra</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody >\r\n          <tr *ngFor=\"let miningZone of miningZones | async\">\r\n            <th scope=\"row\">{{miningZone.id}}</th>\r\n            <td>{{miningZone.name}}</td>\r\n            <td>{{miningZone.oreType}}</td>\r\n            <td>{{miningZone.mining}}</td>\r\n          </tr>\r\n          \r\n        </tbody>\r\n      </table>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/choose-dam/choose-dam.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/choose-dam/choose-dam.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            Selecione a Barragem\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"animated fadeIn\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 col-md-12\">\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-3 col-form-label\" for=\"tipo-processamento\">Barragem</label>\r\n                    <div class=\"col-md-9\">\r\n                      <select  id=\"tipo-processamento\" name=\"proccessingType\" class=\"form-control\" >\r\n                        <option >Barragem 1</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n            \r\n                  \r\n              \r\n              </div><!--/.row-->\r\n              \r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a type=\"button\" class=\"btn btn-sm btn-primary\" [routerLink]=\"['../monitor-dam']\" ><i class=\"fa far fa-file\"></i> OK</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n           \r\n           \r\n            ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/collapses.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/collapses.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Bootstrap Collapse\r\n      <div class=\"card-header-actions\">\r\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/collapse\" target=\"_blank\">\r\n          <small className=\"text-muted\">docs</small>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\"\r\n         (collapsed)=\"collapsed($event)\"\r\n         (expanded)=\"expanded($event)\"\r\n         [collapse]=\"isCollapsed\">\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo\r\n        consequat.\r\n      </p>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <button type=\"button\" class=\"btn btn-primary\"\r\n              (click)=\"isCollapsed = !isCollapsed\">Toggle collapse\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/dam-create/dam-create.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/dam-create/dam-create.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dam-create works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/forms.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/forms.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Zona de Mineração</strong>\r\n        </div>\r\n        <form [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\" class=\"form-horizontal\">\r\n\r\n        <div class=\"card-body\">\r\n            \r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"identificacao\">Identificação</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"identificação\"  formControlName=\"id\" name=\"text-input\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"nome\">Nome</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"nome\" name=\"text-input\" formControlName=\"name\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"localizacao\">Localização</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"localizacao\" name=\"localizacao\" formControlName=\"location\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"tipo-minerio\">Tipo de Minério</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"tipo-minerio\" name=\"tipo-minerio\" formControlName=\"oreType\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"lavra\">Lavra</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"lavra\" name=\"lavra\" formControlName=\"mining\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"area\">Área</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"area\" name=\"area\" formControlName=\"area\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"tipo-processamento\">Tipo de Processamento</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"tipo-processamento\" name=\"proccessType\" formControlName=\"tipoprocessamento\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n                      \r\n         \r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\" ></i> Salvar</button>\r\n          <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"reset()\"><i class=\"fa fa-ban\"></i> Apagar</button>\r\n        </div>\r\n      </form>\r\n      </div>\r\n     \r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/monitor-dam/monitor-dam.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/monitor-dam/monitor-dam.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            Informações Climáticas\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"col-sm-6 \">\r\n              Local: {{weatherData?.name}}, {{weatherData?.state}}\r\n            </div>\r\n            <div class=\"col-sm-6 \">\r\n              Data e Hora: {{weatherData?.data[0].date_br}}\r\n            </div>\r\n            <div class=\"col-sm-6 \">\r\n              Temperatura: Min {{weatherData?.data[0].temperature.min}} º, Max  {{weatherData?.data[0].temperature.max}}º\r\n            </div>\r\n            <div class=\"col-sm-6 \" >\r\n              Descrição: {{weatherData?.data[0].text_icon.text.pt}}\r\n            </div>\r\n  \r\n          </div>\r\n        </div>\r\n  \r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              Nível da Água\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"col-lg-12\">\r\n            \r\n                <progressbar [value]=\"setDynamic(waterSensorData?.level)\"   [striped]=\"true\" max=\"100\" [animate]=\"true\">{{waterSensorData?.level}}% </progressbar>\r\n              </div>\r\n              <br>  \r\n            </div>\r\n          </div>\r\n  \r\n\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              Vibração\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <table class=\"table table-bordered table-striped table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Date do Registro</th>\r\n                    <th>Intensidade</th>\r\n                    \r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let vibrationData of vibrationDataList\">\r\n                   <td>{{vibrationData.date}}</td>\r\n                   <td>{{vibrationData.intensity}}</td>\r\n                    \r\n                  </tr>\r\n                  \r\n                </tbody>\r\n              </table>\r\n    \r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              Mapa\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"col-lg-12 \">\r\n                <agm-map [latitude]=\"-20.141991\" [zoom]=\"17\" [longitude]=\"-44.200729\">\r\n                  <agm-marker  [latitude]=\"-20.141991\" [longitude]=\"-44.200729\"></agm-marker>\r\n                </agm-map>\r\n              </div>\r\n    \r\n            </div>\r\n          </div>\r\n    \r\n    </div><!--/.row-->\r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/navbars/navbars.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/navbars/navbars.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Bootstrap Navbar\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n            <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n            <button aria-controls=\"navbarSupportedContent\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" class=\"navbar-toggler\" type=\"button\" aria-label=\"Toggle navigation\">\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\r\n              <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active\">\r\n                  <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"#\">Link</a>\r\n                </li>\r\n                <li class=\"nav-item dropdown\" dropdown>\r\n                  <a id=\"link-dropdown\" class=\"nav-link dropdown-toggle\" href dropdownToggle (click)=\"false\" aria-controls=\"your-dropdown\">\r\n                    Dropdown\r\n                  </a>\r\n                  <div id=\"your-dropdown\" class=\"dropdown-menu\" aria-labelledby=\"link-dropdown\" *dropdownMenu>\r\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                  </div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n                </li>\r\n              </ul>\r\n              <form class=\"form-inline my-2 my-lg-0\">\r\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n              </form>\r\n            </div>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/ocurrences/ocurrences-create.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/ocurrences/ocurrences-create.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>Zona de Mineração</strong>\r\n          </div>\r\n          <form [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\" class=\"form-horizontal\">\r\n  \r\n          <div class=\"card-body\">\r\n              \r\n           \r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"nome\">Data</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"date\" id=\"nome\" name=\"text-input\" formControlName=\"name\" class=\"form-control\"  autocomplete=\"off\" >\r\n                </div>\r\n              </div>\r\n             \r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"tipo-minerio\">Latitude</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" id=\"tipo-minerio\" name=\"tipo-minerio\" formControlName=\"oreType\" class=\"form-control\"   autocomplete=\"off\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"tipo-minerio\">Longitude</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" id=\"tipo-minerio\" name=\"tipo-minerio\" formControlName=\"oreType\" class=\"form-control\"   autocomplete=\"off\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"tipo-minerio\">Descrição</label>\r\n                <div class=\"col-md-9\">\r\n                  <textarea type=\"text\" id=\"tipo-minerio\" name=\"tipo-minerio\" formControlName=\"oreType\" class=\"form-control\"   autocomplete=\"off\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"tipo-minerio\">Tipo</label>\r\n                <div class=\"col-md-9\">\r\n                    <select id=\"select1\" name=\"select1\"  class=\"form-control\">\r\n                        <option value=\"0\">Por favor, selecione</option>\r\n                        <option value=\"1\">Tremor de Terra</option>\r\n                        <option value=\"2\">Quedas, Tombamentos e rolamentos</option>\r\n                        <option value=\"3\">Deslizamentos</option>\r\n                        <option value=\"4\">Corridas de Massa</option>\r\n                       <option value=\"5\">Erosão de Margem Fluvial</option>\r\n\r\n                    </select>                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"mining\">Nivel</label>\r\n                <div class=\"col-md-9\">\r\n                    <select id=\"select1\" name=\"select1\"  class=\"form-control\">\r\n                        <option value=\"0\">Por favor, selecione</option>\r\n                        <option value=\"1\">Vigilância</option>\r\n                        <option value=\"2\">Observação</option>\r\n                        <option value=\"3\">Atenção</option>\r\n                        <option value=\"4\">Alerta</option>\r\n                       <option value=\"5\">Alerta  Máximo</option>\r\n\r\n                    </select>\r\n                </div>\r\n              </div>\r\n            \r\n\r\n      \r\n                        \r\n           \r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\" ></i> Salvar</button>\r\n            <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"reset()\"><i class=\"fa fa-ban\"></i> Limpar</button>\r\n          </div>\r\n        </form>\r\n        </div>\r\n       \r\n  \r\n        \r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/ocurrences/ocurrences.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/ocurrences/ocurrences.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"animated fadeIn\">\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"container-fluid\">\r\n        \r\n     \r\n  \r\n        <div class=\"table-responsive\">\r\n                  <table class=\"table  table-sm table-bordered  table-striped table-light\">\r\n          <thead >\r\n            <tr>\r\n              <th scope=\"col\">Identificação</th>\r\n              <th scope=\"col\">Tipo</th>\r\n              <th scope=\"col\">Nível</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody >\r\n            <tr *ngFor=\"let ocurrence of ocurrenceList\" >\r\n              <td>{{ocurrence.identificacao}}</td>\r\n              <td>{{ocurrence.tipo}}</td>\r\n              <td>{{ocurrence.nivel}}</td>\r\n            \r\n    \r\n            </tr>\r\n         \r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/paginations.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/paginations.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Bootstrap Pagination\r\n      <div class=\"card-header-actions\">\r\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/pagination\" target=\"_blank\">\r\n          <small className=\"text-muted\">docs</small>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n          <pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\r\n        </div>\r\n        <div class=\"col-xs-12 col-12\">\r\n          <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" class=\"pagination-sm\" [maxSize]=\"6\"\r\n                      previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\r\n        </div>\r\n        <div class=\"col-xs-12 col-12 d-sm-down-none\">\r\n          <pagination [directionLinks]=\"false\" [boundaryLinks]=\"true\" [totalItems]=\"totalItems\"\r\n                      [(ngModel)]=\"currentPage\"></pagination>\r\n        </div>\r\n        <div class=\"col-xs-12 col-12\">\r\n          <pagination [directionLinks]=\"false\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\"\r\n                      (numPages)=\"smallnumPages = $event\"></pagination>\r\n        </div>\r\n      </div>\r\n      <pre class=\"card card-body card-header mb-3\">The selected page no: {{currentPage}}/{{smallnumPages}}</pre>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"setPage(3)\">Set current page to: 3</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Pagination <small>states & limits</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-12\">\r\n          <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\"\r\n                      previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" [boundaryLinks]=\"true\"></pagination>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-12\">\r\n          <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\"\r\n                      previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\r\n                      [boundaryLinks]=\"true\" [rotate]=\"false\" (numPages)=\"numPages = $event\"></pagination>\r\n        </div>\r\n      </div>\r\n      <pre class=\"card card-body card-header\">Page: {{bigCurrentPage}} / {{numPages}}</pre>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Pager\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-12 col-md-6\">\r\n          <pagination\r\n            [directionLinks]=\"false\"\r\n            [totalItems]=\"totalItems\"\r\n            [(ngModel)]=\"currentPager\"\r\n            (numPages)=\"smallnumPages = $event\">\r\n          </pagination>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-12 col-md-6\">\r\n          <pager\r\n            [totalItems]=\"totalItems\"\r\n            [(ngModel)]=\"currentPager\"\r\n            (pageChanged)=\"pageChanged($event)\"\r\n            pageBtnClass=\"btn\"\r\n            [itemsPerPage]=\"10\"\r\n            class=\"pull-left\">\r\n          </pager>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/popovers.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/popovers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Bootstrap Popover\r\n      <div class=\"card-header-actions\">\r\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/popover\" target=\"_blank\">\r\n          <small className=\"text-muted\">docs</small>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <button type=\"button\" class=\"btn btn-primary\"\r\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n        Live demo\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Popover\r\n      <small>positioning</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on top\"\r\n              placement=\"top\">\r\n        Popover on top\r\n      </button>\r\n\r\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on right\"\r\n              placement=\"right\">\r\n        Popover on right\r\n      </button>\r\n\r\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover auto\"\r\n              placement=\"auto\">\r\n        Popover auto\r\n      </button>\r\n\r\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on left\"\r\n              placement=\"left\">\r\n        Popover on left\r\n      </button>\r\n\r\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on bottom\"\r\n              placement=\"bottom\">\r\n        Popover on bottom\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Popover\r\n      <small><code>focus</code> trigger</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <button type=\"button\" class=\"btn btn-success\"\r\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Dismissible popover\"\r\n              triggers=\"focus\">\r\n        Dismissible popover\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Popover\r\n      <small>dynamic content</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <button type=\"button\" class=\"btn btn-info\"\r\n              [popover]=\"content\" [popoverTitle]=\"title\">\r\n        Simple binding\r\n      </button>\r\n\r\n      <ng-template #popTemplate>Just another: {{content}}</ng-template>\r\n      <button type=\"button\" class=\"btn btn-warning\"\r\n              [popover]=\"popTemplate\" popoverTitle=\"Template ref content inside\">\r\n        TemplateRef binding\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Popover\r\n      <small>dynamic HTML</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <ng-template #popTemplateHtml>Here we go:\r\n        <div [innerHtml]=\"html\"></div>\r\n      </ng-template>\r\n      <button type=\"button\" class=\"btn btn-success\"\r\n              [popover]=\"popTemplateHtml\" popoverTitle=\"Dynamic html inside\">\r\n        Show me popover with html\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Popover\r\n      <small>append to <code>body</code></small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row panel\" style=\"position: relative; overflow: hidden;\">\r\n        <div class=\"card-body panel-body\">\r\n          <button type=\"button\" class=\"btn btn-danger\"\r\n                  popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n            Default popover\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-success\"\r\n                  popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n                  container=\"body\">\r\n            Popover appended to body\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Popover\r\n      <small>custom triggers</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <button type=\"button\" class=\"btn btn-info\"\r\n              popover=\"I will hide on blur\"\r\n              triggers=\"mouseenter:mouseleave\">\r\n        Hover over me!\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Popover\r\n      <small>manual triggering</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <p>\r\n        <span popover=\"Hello there! I was triggered manually\"\r\n              triggers=\"\" #pop=\"bs-popover\">\r\n        This text has attached popover\r\n        </span>\r\n      </p>\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"pop.show()\">\r\n        Show\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"pop.hide()\">\r\n        Hide\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/progress.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/progress.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Bootstrap Progress\r\n      <div class=\"card-header-actions\">\r\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/progressbar\" target=\"_blank\">\r\n          <small className=\"text-muted\">docs</small>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <progressbar class=\"progress\" [value]=\"55\" [max]=\"100\"></progressbar>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <progressbar class=\"progress progress-striped\" [value]=\"22\" [max]=\"100\" type=\"warning\">22%</progressbar>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <progressbar class=\"progress progress-striped active\" [max]=\"200\" [value]=\"166\" type=\"danger\"><i>166 / 200</i></progressbar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Progress <small>dynamic</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <progressbar class=\"progress progress-striped progress-animated\" [max]=\"max\" [value]=\"dynamic\">\r\n        <span style=\"color:white; white-space:nowrap;\">{{dynamic}} / {{max}}</span>\r\n      </progressbar>\r\n\r\n      <small><em>No animation</em></small>\r\n      <progressbar class=\"progress progress-success\" [value]=\"dynamic\" [max]=\"100\" type=\"success\"><b>{{dynamic}}%</b></progressbar>\r\n\r\n      <small><em>Object (changes type based on value)</em></small>\r\n      <progressbar class=\"progress-bar progress-bar-striped progress-bar-animated\" [value]=\"dynamic\" [max]=\"max\" [type]=\"type\">\r\n        {{type}} <i *ngIf=\"showWarning\">!!! Watch out !!!</i>\r\n      </progressbar>\r\n      <br>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"random()\">Randomize</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Progress <small>stacked</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row col-lg-12\">\r\n        <progressbar class=\"progress\" [value]=\"stacked\" [max]=\"100\"></progressbar>\r\n      </div>\r\n      <br>\r\n      <div class=\"row col-md-12\">\r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"randomize()\">{{buttonCaption}} randomize</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/switches.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/switches.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          3d Switch\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-3d switch-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-3d switch-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-3d switch-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-3d switch-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-3d switch-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-3d switch-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch default\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch default - pills\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-pill switch-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch outline\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-outline-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-outline-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-outline-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-outline-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-outline-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-outline-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch outline - pills\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-pill switch-outline-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-outline-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-outline-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-outline-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-outline-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-outline-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch outline alternative\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-outline-primary-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-outline-secondary-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-outline-success-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-outline-warning-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-outline-info-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-outline-danger-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch outline alternative - pills\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-pill switch-outline-primary-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-outline-secondary-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-outline-success-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-outline-warning-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-outline-info-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-pill switch-outline-danger-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch with text\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-label switch-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch with text - pills\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-label switch-pill switch-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch with text outline\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n          <label class=\"switch switch-label switch-outline-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch with text outline - pills\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-label switch-pill switch-outline-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch with text outline alternative\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-label switch-outline-primary-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-secondary-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-success-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-warning-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-info-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-danger-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch with text outline alternative - pills\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-label switch-pill switch-outline-primary-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-secondary-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-success-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-warning-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-info-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-danger-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch with icon\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-label switch-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch with icon - pills\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-label switch-pill switch-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch with icon outline\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-label switch-outline-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch with icon outline - pills\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-label switch-pill switch-outline-primary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-secondary\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-success\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-warning\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-info\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-danger\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch with icon outline alternative\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-label switch-outline-primary-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-secondary-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-success-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-warning-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-info-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-outline-danger-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Switch with icon outline alternative - pills\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <label class=\"switch switch-label switch-pill switch-outline-primary-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-secondary-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-success-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-warning-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-info-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n          &nbsp;&nbsp;&nbsp;\r\n          <label class=\"switch switch-label switch-pill switch-outline-danger-alt\">\r\n            <input type=\"checkbox\" class=\"switch-input\" checked>\r\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Sizes\r\n        </div>\r\n        <div class=\"card-body p-0\">\r\n          <table class=\"table table-hover table-striped table-align-middle mb-0\">\r\n            <thead>\r\n              <th>Size</th>\r\n              <th>Example</th>\r\n              <th>CSS Class</th>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  Large\r\n                </td>\r\n                <td>\r\n                  <label class=\"switch switch-lg switch-3d switch-primary\">\r\n                    <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                    <span class=\"switch-slider\"></span>\r\n                  </label>\r\n                </td>\r\n                <td>\r\n                  Add following class <code>.switch-lg</code>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  Normal\r\n                </td>\r\n                <td>\r\n                  <label class=\"switch switch-3d switch-primary\">\r\n                    <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                    <span class=\"switch-slider\"></span>\r\n                  </label>\r\n                </td>\r\n                <td>\r\n                  -\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  Small\r\n                </td>\r\n                <td>\r\n                  <label class=\"switch switch-sm switch-3d switch-primary\">\r\n                    <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                    <span class=\"switch-slider\"></span>\r\n                  </label>\r\n                </td>\r\n                <td>\r\n                  Add following class <code>.switch-sm</code>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tables.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tables.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Simple Table\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Username</th>\r\n                <th>Date registered</th>\r\n                <th>Role</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>Samppa Nori</td>\r\n                <td>2012/01/01</td>\r\n                <td>Member</td>\r\n                <td>\r\n                  <span class=\"badge badge-success\">Active</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Estavan Lykos</td>\r\n                <td>2012/02/01</td>\r\n                <td>Staff</td>\r\n                <td>\r\n                  <span class=\"badge badge-danger\">Banned</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Chetan Mohamed</td>\r\n                <td>2012/02/01</td>\r\n                <td>Admin</td>\r\n                <td>\r\n                  <span class=\"badge badge-secondary\">Inactive</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Derick Maximinus</td>\r\n                <td>2012/03/01</td>\r\n                <td>Member</td>\r\n                <td>\r\n                  <span class=\"badge badge-warning\">Pending</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Friderik Dávid</td>\r\n                <td>2012/01/21</td>\r\n                <td>Staff</td>\r\n                <td>\r\n                  <span class=\"badge badge-success\">Active</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <ul class=\"pagination\">\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n            <li class=\"page-item active\">\r\n              <a class=\"page-link\" href=\"#\">1</a>\r\n            </li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Striped Table\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>Username</th>\r\n                <th>Date registered</th>\r\n                <th>Role</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>Yiorgos Avraamu</td>\r\n                <td>2012/01/01</td>\r\n                <td>Member</td>\r\n                <td>\r\n                  <span class=\"badge badge-success\">Active</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Avram Tarasios</td>\r\n                <td>2012/02/01</td>\r\n                <td>Staff</td>\r\n                <td>\r\n                  <span class=\"badge badge-danger\">Banned</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Quintin Ed</td>\r\n                <td>2012/02/01</td>\r\n                <td>Admin</td>\r\n                <td>\r\n                  <span class=\"badge badge-secondary\">Inactive</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Enéas Kwadwo</td>\r\n                <td>2012/03/01</td>\r\n                <td>Member</td>\r\n                <td>\r\n                  <span class=\"badge badge-warning\">Pending</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Agapetus Tadeáš</td>\r\n                <td>2012/01/21</td>\r\n                <td>Staff</td>\r\n                <td>\r\n                  <span class=\"badge badge-success\">Active</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <ul class=\"pagination\">\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n            <li class=\"page-item active\">\r\n              <a class=\"page-link\" href=\"#\">1</a>\r\n            </li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Condensed Table\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <table class=\"table table-sm\">\r\n            <thead>\r\n              <tr>\r\n                <th>Username</th>\r\n                <th>Date registered</th>\r\n                <th>Role</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>Carwyn Fachtna</td>\r\n                <td>2012/01/01</td>\r\n                <td>Member</td>\r\n                <td>\r\n                  <span class=\"badge badge-success\">Active</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Nehemiah Tatius</td>\r\n                <td>2012/02/01</td>\r\n                <td>Staff</td>\r\n                <td>\r\n                  <span class=\"badge badge-danger\">Banned</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Ebbe Gemariah</td>\r\n                <td>2012/02/01</td>\r\n                <td>Admin</td>\r\n                <td>\r\n                  <span class=\"badge badge-secondary\">Inactive</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Eustorgios Amulius</td>\r\n                <td>2012/03/01</td>\r\n                <td>Member</td>\r\n                <td>\r\n                  <span class=\"badge badge-warning\">Pending</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Leopold Gáspár</td>\r\n                <td>2012/01/21</td>\r\n                <td>Staff</td>\r\n                <td>\r\n                  <span class=\"badge badge-success\">Active</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <ul class=\"pagination\">\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n            <li class=\"page-item active\">\r\n              <a class=\"page-link\" href=\"#\">1</a>\r\n            </li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Bordered Table\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Username</th>\r\n                <th>Date registered</th>\r\n                <th>Role</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>Pompeius René</td>\r\n                <td>2012/01/01</td>\r\n                <td>Member</td>\r\n                <td>\r\n                  <span class=\"badge badge-success\">Active</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Paĉjo Jadon</td>\r\n                <td>2012/02/01</td>\r\n                <td>Staff</td>\r\n                <td>\r\n                  <span class=\"badge badge-danger\">Banned</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Micheal Mercurius</td>\r\n                <td>2012/02/01</td>\r\n                <td>Admin</td>\r\n                <td>\r\n                  <span class=\"badge badge-secondary\">Inactive</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Ganesha Dubhghall</td>\r\n                <td>2012/03/01</td>\r\n                <td>Member</td>\r\n                <td>\r\n                  <span class=\"badge badge-warning\">Pending</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Hiroto Šimun</td>\r\n                <td>2012/01/21</td>\r\n                <td>Staff</td>\r\n                <td>\r\n                  <span class=\"badge badge-success\">Active</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <ul class=\"pagination\">\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n            <li class=\"page-item active\">\r\n              <a class=\"page-link\" href=\"#\">1</a>\r\n            </li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Combined All Table\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <table class=\"table table-bordered table-striped table-sm\">\r\n            <thead>\r\n              <tr>\r\n                <th>Username</th>\r\n                <th>Date registered</th>\r\n                <th>Role</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>Vishnu Serghei</td>\r\n                <td>2012/01/01</td>\r\n                <td>Member</td>\r\n                <td>\r\n                  <span class=\"badge badge-success\">Active</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Zbyněk Phoibos</td>\r\n                <td>2012/02/01</td>\r\n                <td>Staff</td>\r\n                <td>\r\n                  <span class=\"badge badge-danger\">Banned</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Einar Randall</td>\r\n                <td>2012/02/01</td>\r\n                <td>Admin</td>\r\n                <td>\r\n                  <span class=\"badge badge-secondary\">Inactive</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Félix Troels</td>\r\n                <td>2012/03/01</td>\r\n                <td>Member</td>\r\n                <td>\r\n                  <span class=\"badge badge-warning\">Pending</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Aulus Agmundr</td>\r\n                <td>2012/01/21</td>\r\n                <td>Staff</td>\r\n                <td>\r\n                  <span class=\"badge badge-success\">Active</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <nav>\r\n            <ul class=\"pagination\">\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n              <li class=\"page-item active\">\r\n                <a class=\"page-link\" href=\"#\">1</a>\r\n              </li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tabs.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tabs.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mb-4\">\r\n      <!-- Nav tabs -->\r\n      <tabset>\r\n        <tab heading=\"Home\">\r\n          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </tab>\r\n        <tab heading=\"Profile\">\r\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </tab>\r\n        <tab heading=\"Messages\">\r\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </tab>\r\n      </tabset>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6 mb-4\">\r\n      <!-- Nav tabs -->\r\n      <tabset>\r\n        <tab>\r\n          <ng-template tabHeading><i class=\"icon-calculator\"></i></ng-template>\r\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </tab>\r\n        <tab>\r\n          <ng-template tabHeading><i class=\"icon-basket-loaded\"></i></ng-template>\r\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </tab>\r\n        <tab>\r\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i></ng-template>\r\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </tab>\r\n      </tabset>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6 mb-4\">\r\n      <!-- Nav tabs -->\r\n      <tabset>\r\n        <tab>\r\n          <ng-template tabHeading><i class=\"icon-calculator\"></i> Calculator</ng-template>\r\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </tab>\r\n        <tab>\r\n          <ng-template tabHeading><i class=\"icon-basket-loaded\"></i> Shoping cart</ng-template>\r\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </tab>\r\n        <tab>\r\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i> Charts</ng-template>\r\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </tab>\r\n      </tabset>\r\n    </div><!--/.col-->\r\n    <div class=\"col-md-6 mb-4\">\r\n      <!-- Nav tabs -->\r\n      <tabset>\r\n        <tab>\r\n          <ng-template tabHeading><i class=\"icon-list\"></i> Menu &nbsp;<span class=\"badge badge-success\">New</span></ng-template>\r\n          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </tab>\r\n        <tab>\r\n          <ng-template tabHeading><i class=\"icon-calculator\"></i> Calculator &nbsp;<span class=\"badge badge-pill badge-danger\">29</span></ng-template>\r\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </tab>\r\n        <tab>\r\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i> Charts</ng-template>\r\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </tab>\r\n      </tabset>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tests/tests.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tests/tests.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tests works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tooltips.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tooltips.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Bootstrap Tooltips\r\n      <div class=\"card-header-actions\">\r\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/tooltip\" target=\"_blank\">\r\n          <small className=\"text-muted\">docs</small>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <button type=\"button\" class=\"btn btn-primary\"\r\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n        Simple demo\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Tooltips <small>positioning</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              placement=\"top\">\r\n        Tooltip on top\r\n      </button>\r\n\r\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              placement=\"right\">\r\n        Tooltip on right\r\n      </button>\r\n\r\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              placement=\"auto\">\r\n        Tooltip auto\r\n      </button>\r\n\r\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              placement=\"left\">\r\n        Tooltip on left\r\n      </button>\r\n\r\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              placement=\"bottom\">\r\n        Tooltip on bottom\r\n      </button>\r\n    </div>\r\n</div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Tooltips <small>dismissible</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <button type=\"button\" class=\"btn btn-success\"\r\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              triggers=\"focus\">\r\n        Dismissible tooltip\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Tooltips <small>dynamic content</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <button type=\"button\" class=\"btn btn-info\" [tooltip]=\"content\">\r\n        Simple binding\r\n      </button>\r\n\r\n      <ng-template #tolTemplate>Just another: {{content}}</ng-template>\r\n      <button type=\"button\" class=\"btn btn-warning\" [tooltip]=\"tolTemplate\">\r\n        TemplateRef binding\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Tooltips <small>dynamic html</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <ng-template #popTemplate>Here we go: <div [innerHtml]=\"html\"></div></ng-template>\r\n      <button type=\"button\" class=\"btn btn-success\"\r\n              [tooltip]=\"popTemplate\">\r\n        Show me tooltip with html\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Tooltips <small>append to <code>body</code></small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\" style=\"position: relative; overflow: hidden; padding-top: 10px;\">\r\n        <div class=\"col-xs-12 col-12\">\r\n          <button type=\"button\" class=\"btn btn-danger\"\r\n                  tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n            Default tooltip\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-success\"\r\n                  tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n                  container=\"body\">\r\n            Tooltip appended to body\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Tooltips <small>custom triggers</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-6 col-6\">\r\n          <p>Desktop</p>\r\n          <button type=\"button\" class=\"btn btn-info\"\r\n                  tooltip=\"I will hide on click\"\r\n                  triggers=\"mouseenter:click\">\r\n            Hover over me!\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-xs-6 col-6\">\r\n          <p>Mobile</p>\r\n          <button type=\"button\" class=\"btn btn-info\"\r\n                  tooltip=\"I will hide on click\"\r\n                  triggers=\"click\">\r\n            Click on me!\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Tooltips <small>manual triggers</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <p>\r\n  <span tooltip=\"Hello there! I was triggered manually\"\r\n        triggers=\"\" #pop=\"bs-tooltip\">\r\n  This text has attached tooltip\r\n  </span>\r\n      </p>\r\n\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"pop.show()\">\r\n        Show\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"pop.hide()\">\r\n        Hide\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/views/base/base-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/base/base-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function() { return BaseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms.component */ "./src/app/views/base/forms.component.ts");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.component */ "./src/app/views/base/tabs.component.ts");
/* harmony import */ var _carousels_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carousels.component */ "./src/app/views/base/carousels.component.ts");
/* harmony import */ var _collapses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collapses.component */ "./src/app/views/base/collapses.component.ts");
/* harmony import */ var _paginations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paginations.component */ "./src/app/views/base/paginations.component.ts");
/* harmony import */ var _popovers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popovers.component */ "./src/app/views/base/popovers.component.ts");
/* harmony import */ var _progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress.component */ "./src/app/views/base/progress.component.ts");
/* harmony import */ var _tooltips_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tooltips.component */ "./src/app/views/base/tooltips.component.ts");
/* harmony import */ var _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbars/navbars.component */ "./src/app/views/base/navbars/navbars.component.ts");
/* harmony import */ var _dam_create_dam_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dam-create/dam-create.component */ "./src/app/views/base/dam-create/dam-create.component.ts");
/* harmony import */ var _choose_dam_choose_dam_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./choose-dam/choose-dam.component */ "./src/app/views/base/choose-dam/choose-dam.component.ts");
/* harmony import */ var _monitor_dam_monitor_dam_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./monitor-dam/monitor-dam.component */ "./src/app/views/base/monitor-dam/monitor-dam.component.ts");
/* harmony import */ var _ocurrences_ocurrences_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ocurrences/ocurrences.component */ "./src/app/views/base/ocurrences/ocurrences.component.ts");
/* harmony import */ var _ocurrences_ocurrences_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ocurrences/ocurrences-create.component */ "./src/app/views/base/ocurrences/ocurrences-create.component.ts");

















var routes = [
    {
        path: '',
        data: {
            title: 'Monitoramento de Barragens'
        },
        children: [
            {
                path: 'monitor-dam',
                component: _monitor_dam_monitor_dam_component__WEBPACK_IMPORTED_MODULE_14__["MonitorDamComponent"],
                data: {
                    title: 'B1'
                }
            },
            {
                path: 'forms',
                component: _forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"],
                data: {
                    title: 'Cadastro'
                }
            },
            {
                path: 'dam-create',
                component: _dam_create_dam_create_component__WEBPACK_IMPORTED_MODULE_12__["DamCreateComponent"],
                data: {
                    title: 'Cadastro'
                }
            },
            {
                path: '',
                redirectTo: 'choose-dam'
            },
            {
                path: 'choose-dam',
                component: _choose_dam_choose_dam_component__WEBPACK_IMPORTED_MODULE_13__["ChooseDamComponent"],
                data: {
                    title: 'Selecionar Barragem'
                }
            },
            {
                path: 'ocurrences',
                component: _ocurrences_ocurrences_component__WEBPACK_IMPORTED_MODULE_15__["OcurrencesComponent"],
                data: {
                    title: 'Ocorrências'
                }
            },
            {
                path: 'ocurrences-create',
                component: _ocurrences_ocurrences_create_component__WEBPACK_IMPORTED_MODULE_16__["OcurrencesCreateComponent"],
                data: {
                    title: 'Criação Ocorrências'
                }
            },
            {
                path: 'tabs',
                component: _tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"],
                data: {
                    title: 'Tabs'
                }
            },
            {
                path: 'carousels',
                component: _carousels_component__WEBPACK_IMPORTED_MODULE_5__["CarouselsComponent"],
                data: {
                    title: 'Pesquisar'
                }
            },
            {
                path: 'collapses',
                component: _collapses_component__WEBPACK_IMPORTED_MODULE_6__["CollapsesComponent"],
                data: {
                    title: 'Collapses'
                }
            },
            {
                path: 'paginations',
                component: _paginations_component__WEBPACK_IMPORTED_MODULE_7__["PaginationsComponent"],
                data: {
                    title: 'Pagination'
                }
            },
            {
                path: 'popovers',
                component: _popovers_component__WEBPACK_IMPORTED_MODULE_8__["PopoversComponent"],
                data: {
                    title: 'Popover'
                }
            },
            {
                path: 'progress',
                component: _progress_component__WEBPACK_IMPORTED_MODULE_9__["ProgressComponent"],
                data: {
                    title: 'Progress'
                }
            },
            {
                path: 'tooltips',
                component: _tooltips_component__WEBPACK_IMPORTED_MODULE_10__["TooltipsComponent"],
                data: {
                    title: 'Tooltips'
                }
            },
            {
                path: 'navbars',
                component: _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_11__["NavbarsComponent"],
                data: {
                    title: 'Navbars'
                }
            }
        ]
    }
];
var BaseRoutingModule = /** @class */ (function () {
    function BaseRoutingModule() {
    }
    BaseRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BaseRoutingModule);
    return BaseRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/base/base.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/base/base.module.ts ***!
  \*******************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards.component */ "./src/app/views/base/cards.component.ts");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms.component */ "./src/app/views/base/forms.component.ts");
/* harmony import */ var _switches_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switches.component */ "./src/app/views/base/switches.component.ts");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tables.component */ "./src/app/views/base/tables.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs.component */ "./src/app/views/base/tabs.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _carousels_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carousels.component */ "./src/app/views/base/carousels.component.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _collapses_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collapses.component */ "./src/app/views/base/collapses.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var _popovers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./popovers.component */ "./src/app/views/base/popovers.component.ts");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var _paginations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./paginations.component */ "./src/app/views/base/paginations.component.ts");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var _progress_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./progress.component */ "./src/app/views/base/progress.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _tooltips_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tooltips.component */ "./src/app/views/base/tooltips.component.ts");
/* harmony import */ var _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./navbars/navbars.component */ "./src/app/views/base/navbars/navbars.component.ts");
/* harmony import */ var _base_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./base-routing.module */ "./src/app/views/base/base-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tests_tests_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tests/tests.component */ "./src/app/views/base/tests/tests.component.ts");
/* harmony import */ var _dam_create_dam_create_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dam-create/dam-create.component */ "./src/app/views/base/dam-create/dam-create.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _choose_dam_choose_dam_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./choose-dam/choose-dam.component */ "./src/app/views/base/choose-dam/choose-dam.component.ts");
/* harmony import */ var _monitor_dam_monitor_dam_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./monitor-dam/monitor-dam.component */ "./src/app/views/base/monitor-dam/monitor-dam.component.ts");
/* harmony import */ var _ocurrences_ocurrences_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ocurrences/ocurrences.component */ "./src/app/views/base/ocurrences/ocurrences.component.ts");
/* harmony import */ var _ocurrences_ocurrences_create_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ocurrences/ocurrences-create.component */ "./src/app/views/base/ocurrences/ocurrences-create.component.ts");

// Angular




// Forms Component



// Tabs Component


// Carousel Component


// Collapse Component


// Dropdowns Component

// Pagination Component


// Popover Component


// Progress Component


// Tooltip Component


// navbars

// Components Routing









var BaseModule = /** @class */ (function () {
    function BaseModule() {
    }
    BaseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _base_routing_module__WEBPACK_IMPORTED_MODULE_24__["BaseRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__["CollapseModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__["PopoverModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_19__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_28__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyA_GRu2pdnNTC6gRBBs1NT9OIp7gNXt800'
                })
            ],
            declarations: [
                _cards_component__WEBPACK_IMPORTED_MODULE_4__["CardsComponent"],
                _forms_component__WEBPACK_IMPORTED_MODULE_5__["FormsComponent"],
                _switches_component__WEBPACK_IMPORTED_MODULE_6__["SwitchesComponent"],
                _tables_component__WEBPACK_IMPORTED_MODULE_7__["TablesComponent"],
                _tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"],
                _carousels_component__WEBPACK_IMPORTED_MODULE_11__["CarouselsComponent"],
                _collapses_component__WEBPACK_IMPORTED_MODULE_13__["CollapsesComponent"],
                _paginations_component__WEBPACK_IMPORTED_MODULE_18__["PaginationsComponent"],
                _popovers_component__WEBPACK_IMPORTED_MODULE_16__["PopoversComponent"],
                _progress_component__WEBPACK_IMPORTED_MODULE_20__["ProgressComponent"],
                _tooltips_component__WEBPACK_IMPORTED_MODULE_22__["TooltipsComponent"],
                _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_23__["NavbarsComponent"],
                _tests_tests_component__WEBPACK_IMPORTED_MODULE_26__["TestsComponent"],
                _dam_create_dam_create_component__WEBPACK_IMPORTED_MODULE_27__["DamCreateComponent"],
                _choose_dam_choose_dam_component__WEBPACK_IMPORTED_MODULE_29__["ChooseDamComponent"],
                _monitor_dam_monitor_dam_component__WEBPACK_IMPORTED_MODULE_30__["MonitorDamComponent"],
                _ocurrences_ocurrences_component__WEBPACK_IMPORTED_MODULE_31__["OcurrencesComponent"],
                _ocurrences_ocurrences_create_component__WEBPACK_IMPORTED_MODULE_32__["OcurrencesCreateComponent"],
            ]
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ }),

/***/ "./src/app/views/base/cards.component.ts":
/*!***********************************************!*\
  !*** ./src/app/views/base/cards.component.ts ***!
  \***********************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/cards.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/carousels.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/base/carousels.component.ts ***!
  \***************************************************/
/*! exports provided: CarouselsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselsComponent", function() { return CarouselsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_mining_zone_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/mining-zone.service */ "./src/app/views/base/mining-zone.service.ts");





var CarouselsComponent = /** @class */ (function () {
    function CarouselsComponent(formBuilder, miningZoneService) {
        this.formBuilder = formBuilder;
        this.miningZoneService = miningZoneService;
        this.myInterval = 6000;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
        this.searchForm = this.formBuilder.group({
            id: '',
            name: '',
            oreType: ''
        });
    }
    CarouselsComponent.prototype.onSubmit = function (dados) {
        console.log('dados: ', dados);
    };
    CarouselsComponent.prototype.ngOnDestroy = function () {
        this.myInterval = 0;
        this.noWrapSlides = true;
        this.myInterval = false;
    };
    CarouselsComponent.prototype.ngOnInit = function () {
        this.miningZones = this.miningZoneService.getMiningZoneList();
        console.log('mining-zone', this.miningZones);
    };
    CarouselsComponent.prototype.addSlide = function () {
        this.slides.push({
            image: "https://lorempixel.com/900/500/abstract/" + (this.slides.length % 8 + 1) + "/"
        });
    };
    CarouselsComponent.prototype.removeSlide = function (index) {
        var toRemove = index ? index : this.activeSlideIndex;
        this.slides.splice(toRemove, 1);
    };
    CarouselsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _base_mining_zone_service__WEBPACK_IMPORTED_MODULE_4__["MiningZoneService"] }
    ]; };
    CarouselsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carousels.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/carousels.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _base_mining_zone_service__WEBPACK_IMPORTED_MODULE_4__["MiningZoneService"]])
    ], CarouselsComponent);
    return CarouselsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/choose-dam/choose-dam.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/base/choose-dam/choose-dam.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3MvYmFzZS9jaG9vc2UtZGFtL2Nob29zZS1kYW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/base/choose-dam/choose-dam.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/base/choose-dam/choose-dam.component.ts ***!
  \***************************************************************/
/*! exports provided: ChooseDamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseDamComponent", function() { return ChooseDamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChooseDamComponent = /** @class */ (function () {
    function ChooseDamComponent() {
    }
    ChooseDamComponent.prototype.ngOnInit = function () {
    };
    ChooseDamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-dam',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./choose-dam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/choose-dam/choose-dam.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./choose-dam.component.css */ "./src/app/views/base/choose-dam/choose-dam.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ChooseDamComponent);
    return ChooseDamComponent;
}());



/***/ }),

/***/ "./src/app/views/base/collapses.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/base/collapses.component.ts ***!
  \***************************************************/
/*! exports provided: CollapsesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsesComponent", function() { return CollapsesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollapsesComponent = /** @class */ (function () {
    function CollapsesComponent() {
        this.isCollapsed = false;
    }
    CollapsesComponent.prototype.collapsed = function (event) {
        // console.log(event);
    };
    CollapsesComponent.prototype.expanded = function (event) {
        // console.log(event);
    };
    CollapsesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./collapses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/collapses.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CollapsesComponent);
    return CollapsesComponent;
}());



/***/ }),

/***/ "./src/app/views/base/dam-create/dam-create.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/base/dam-create/dam-create.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3MvYmFzZS9kYW0tY3JlYXRlL2RhbS1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/base/dam-create/dam-create.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/base/dam-create/dam-create.component.ts ***!
  \***************************************************************/
/*! exports provided: DamCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DamCreateComponent", function() { return DamCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DamCreateComponent = /** @class */ (function () {
    function DamCreateComponent() {
    }
    DamCreateComponent.prototype.ngOnInit = function () {
    };
    DamCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dam-create',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dam-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/dam-create/dam-create.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dam-create.component.css */ "./src/app/views/base/dam-create/dam-create.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DamCreateComponent);
    return DamCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/base/forms.component.ts":
/*!***********************************************!*\
  !*** ./src/app/views/base/forms.component.ts ***!
  \***********************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FormsComponent = /** @class */ (function () {
    function FormsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.checkoutForm = this.formBuilder.group({
            id: '',
            name: '',
            location: '',
            oreType: '',
            mining: '',
            area: '',
            processType: ''
        });
    }
    FormsComponent.prototype.onSubmit = function (customerData) {
        // Process checkout data here
        console.warn('Dados:', customerData);
    };
    FormsComponent.prototype.reset = function () {
        this.checkoutForm.reset();
    };
    FormsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    FormsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/forms.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/mining-zone.service.ts":
/*!***************************************************!*\
  !*** ./src/app/views/base/mining-zone.service.ts ***!
  \***************************************************/
/*! exports provided: MiningZoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiningZoneService", function() { return MiningZoneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MiningZoneService = /** @class */ (function () {
    function MiningZoneService(client) {
        this.client = client;
    }
    MiningZoneService.prototype.getMiningZoneList = function () {
        return this.client.get("./assets/mining-zone-list.json");
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



/***/ }),

/***/ "./src/app/views/base/monitor-dam/monitor-dam.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/base/monitor-dam/monitor-dam.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3MvYmFzZS9tb25pdG9yLWRhbS9tb25pdG9yLWRhbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/base/monitor-dam/monitor-dam.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/base/monitor-dam/monitor-dam.component.ts ***!
  \*****************************************************************/
/*! exports provided: MonitorDamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorDamComponent", function() { return MonitorDamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sensorsservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sensorsservice.service */ "./src/app/views/base/monitor-dam/sensorsservice.service.ts");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather.service */ "./src/app/views/base/monitor-dam/weather.service.ts");




var MonitorDamComponent = /** @class */ (function () {
    function MonitorDamComponent(sensorsService, weatherService) {
        this.sensorsService = sensorsService;
        this.weatherService = weatherService;
        this.max = 100;
        this.stacked = [];
        this.timer = null;
        this.buttonCaption = 'Start';
    }
    MonitorDamComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
        // console.log(`onDestroy`, this.timer);
    };
    MonitorDamComponent.prototype.setDynamic = function (num) {
        this.dynamic = num;
        this.showWarning = true;
        return this.dynamic;
    };
    MonitorDamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sensorsService.getVibrationSensorData().subscribe(function (data) {
            _this.vibrationDataList = data;
        });
        this.getWaterSensorData();
        this.weatherService.getWeatherData().subscribe(function (data) { return _this.weatherData = {
            name: data['name'],
            state: data['state'],
            data: data['data']
        }; });
    };
    MonitorDamComponent.prototype.getWaterSensorData = function () {
        var _this = this;
        return this.sensorsService.getWaterSensorData().subscribe(function (data) { return _this.waterSensorData = {
            level: data.level
        }; });
    };
    MonitorDamComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var n = 75;
        for (var i = 0; i < n; i++) {
            var index = Math.floor(Math.random() * 4);
            var value = Math.floor(Math.random() * 27 + 3);
            this.stacked.push({
                value: value,
                type: types[index],
                label: value + ' %'
            });
        }
    };
    MonitorDamComponent.ctorParameters = function () { return [
        { type: _sensorsservice_service__WEBPACK_IMPORTED_MODULE_2__["SensorService"] },
        { type: _weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"] }
    ]; };
    MonitorDamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monitor-dam',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./monitor-dam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/monitor-dam/monitor-dam.component.html")).default,
            providers: [_sensorsservice_service__WEBPACK_IMPORTED_MODULE_2__["SensorService"]],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./monitor-dam.component.css */ "./src/app/views/base/monitor-dam/monitor-dam.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_sensorsservice_service__WEBPACK_IMPORTED_MODULE_2__["SensorService"],
            _weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]])
    ], MonitorDamComponent);
    return MonitorDamComponent;
}());



/***/ }),

/***/ "./src/app/views/base/monitor-dam/sensorsservice.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/base/monitor-dam/sensorsservice.service.ts ***!
  \******************************************************************/
/*! exports provided: SensorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorService", function() { return SensorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SensorService = /** @class */ (function () {
    function SensorService(client) {
        this.client = client;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' })
        };
    }
    SensorService.prototype.getVibrationSensorData = function () {
        return this.client.get('https://907e3d5e-47ba-4503-a394-6fe53c2615a9.mock.pstmn.io/apimonitoramento/sensor/vibracao/atividades', this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    SensorService.prototype.getWaterSensorData = function () {
        return this.client.get('https://907e3d5e-47ba-4503-a394-6fe53c2615a9.mock.pstmn.io/apimonitoramento/sensor/nivel-agua', this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    SensorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SensorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SensorService);
    return SensorService;
}());



/***/ }),

/***/ "./src/app/views/base/monitor-dam/weather.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/base/monitor-dam/weather.service.ts ***!
  \***********************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WeatherService = /** @class */ (function () {
    function WeatherService(client) {
        this.client = client;
    }
    WeatherService.prototype.getWeatherData = function () {
        return this.client.get('http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/8560/days/15?token=a08be75cfc6cb3cdbea2ea3e293752bb');
    };
    WeatherService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WeatherService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/views/base/navbars/navbars.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/base/navbars/navbars.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3MvYmFzZS9uYXZiYXJzL25hdmJhcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/base/navbars/navbars.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/base/navbars/navbars.component.ts ***!
  \*********************************************************/
/*! exports provided: NavbarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarsComponent", function() { return NavbarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



var NavbarsComponent = /** @class */ (function () {
    function NavbarsComponent(renderer) {
        this.renderer = renderer;
        this._isCollapsed = true;
    }
    Object.defineProperty(NavbarsComponent.prototype, "isCollapsed", {
        get: function () {
            if (this.collapseRef) {
                // temp fix for "overflow: hidden"
                if (getComputedStyle(this.collapseRef.nativeElement).getPropertyValue('display') === 'flex') {
                    this.renderer.removeStyle(this.collapseRef.nativeElement, 'overflow');
                }
            }
            return this._isCollapsed;
        },
        set: function (value) {
            this._isCollapsed = value;
        },
        enumerable: true,
        configurable: true
    });
    NavbarsComponent.prototype.ngOnInit = function () { };
    NavbarsComponent.prototype.ngAfterViewChecked = function () {
        this.collapseRef = this.collapse;
    };
    NavbarsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["CollapseDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["CollapseDirective"])
    ], NavbarsComponent.prototype, "collapse", void 0);
    NavbarsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbars',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbars.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/navbars/navbars.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbars.component.css */ "./src/app/views/base/navbars/navbars.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], NavbarsComponent);
    return NavbarsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/ocurrences/ocurrences-create.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/base/ocurrences/ocurrences-create.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3MvYmFzZS9vY3VycmVuY2VzL29jdXJyZW5jZXMtY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/base/ocurrences/ocurrences-create.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/base/ocurrences/ocurrences-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: OcurrencesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcurrencesCreateComponent", function() { return OcurrencesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OcurrencesCreateComponent = /** @class */ (function () {
    function OcurrencesCreateComponent() {
    }
    OcurrencesCreateComponent.prototype.ngOnInit = function () {
    };
    OcurrencesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ocurrences-create',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ocurrences-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/ocurrences/ocurrences-create.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ocurrences-create.component.css */ "./src/app/views/base/ocurrences/ocurrences-create.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], OcurrencesCreateComponent);
    return OcurrencesCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/base/ocurrences/ocurrences.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/base/ocurrences/ocurrences.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3MvYmFzZS9vY3VycmVuY2VzL29jdXJyZW5jZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/base/ocurrences/ocurrences.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/base/ocurrences/ocurrences.component.ts ***!
  \***************************************************************/
/*! exports provided: OcurrencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcurrencesComponent", function() { return OcurrencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _ocurrences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ocurrences.service */ "./src/app/views/base/ocurrences/ocurrences.service.ts");



//import {MiningZoneService} from './mining-zone.service'
//import { MiningZone } from './mining-zone';



var OcurrencesComponent = /** @class */ (function () {
    function OcurrencesComponent(formBuilder, ocurrenceService) {
        this.formBuilder = formBuilder;
        this.ocurrenceService = ocurrenceService;
        this.searchForm = this.formBuilder.group({
            id: '',
            name: '',
            oreType: ''
        });
    }
    OcurrencesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ocurrenceService.getOcurrencesList().subscribe((function (data) {
            _this.ocurrenceList = data;
        }));
    };
    OcurrencesComponent.prototype.toggleVisibility = function (id) {
        console.log(id);
        document.getElementById(id).style.display = "none";
    };
    OcurrencesComponent.prototype.onSubmit = function (searchFormData) {
        // Process checkout data here
    };
    OcurrencesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ocurrences_service__WEBPACK_IMPORTED_MODULE_4__["OcurrencesService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], OcurrencesComponent.prototype, "myModal", void 0);
    OcurrencesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ocurrences',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ocurrences.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/ocurrences/ocurrences.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ocurrences.component.css */ "./src/app/views/base/ocurrences/ocurrences.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ocurrences_service__WEBPACK_IMPORTED_MODULE_4__["OcurrencesService"]])
    ], OcurrencesComponent);
    return OcurrencesComponent;
}());



/***/ }),

/***/ "./src/app/views/base/ocurrences/ocurrences.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/base/ocurrences/ocurrences.service.ts ***!
  \*************************************************************/
/*! exports provided: OcurrencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcurrencesService", function() { return OcurrencesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var OcurrencesService = /** @class */ (function () {
    function OcurrencesService(client) {
        this.client = client;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    OcurrencesService.prototype.getOcurrencesList = function () {
        return this.client.get('https://907e3d5e-47ba-4503-a394-6fe53c2615a9.mock.pstmn.io/apimonitoramento/ocorrencias', this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    OcurrencesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OcurrencesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OcurrencesService);
    return OcurrencesService;
}());



/***/ }),

/***/ "./src/app/views/base/paginations.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/base/paginations.component.ts ***!
  \*****************************************************/
/*! exports provided: PaginationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationsComponent", function() { return PaginationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationsComponent = /** @class */ (function () {
    function PaginationsComponent() {
        this.totalItems = 64;
        this.currentPage = 4;
        this.smallnumPages = 0;
        this.maxSize = 5;
        this.bigTotalItems = 675;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.currentPager = 4;
    }
    PaginationsComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    PaginationsComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    PaginationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./paginations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/paginations.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [".pager li.btn:active { box-shadow: none; }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PaginationsComponent);
    return PaginationsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/popovers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/base/popovers.component.ts ***!
  \**************************************************/
/*! exports provided: PopoversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoversComponent", function() { return PopoversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var PopoversComponent = /** @class */ (function () {
    function PopoversComponent(sanitizer) {
        this.title = 'Welcome word';
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-warning\">Never trust not sanitized <code>HTML</code>!!!</span>";
        this.html = sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, this.html);
    }
    PopoversComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    PopoversComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popovers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/popovers.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], PopoversComponent);
    return PopoversComponent;
}());



/***/ }),

/***/ "./src/app/views/base/progress.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/base/progress.component.ts ***!
  \**************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.max = 200;
        this.stacked = [];
        this.timer = null;
        this.buttonCaption = 'Start';
        this.random();
        this.randomStacked();
    }
    ProgressComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
        // console.log(`onDestroy`, this.timer);
    };
    ProgressComponent.prototype.random = function () {
        var value = Math.floor(Math.random() * 100 + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.showWarning = type === 'danger' || type === 'warning';
        this.dynamic = value;
        this.type = type;
    };
    ProgressComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var n = Math.floor(Math.random() * 4 + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor(Math.random() * 4);
            var value = Math.floor(Math.random() * 27 + 3);
            this.stacked.push({
                value: value,
                type: types[index],
                label: value + ' %'
            });
        }
    };
    ProgressComponent.prototype.randomize = function () {
        var _this = this;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        else {
            this.timer = setInterval(function () { return _this.randomStacked(); }, 2000);
        }
        this.buttonCaption = this.timer ? 'Stop' : 'Start';
    };
    ProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./progress.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/progress.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/views/base/switches.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/base/switches.component.ts ***!
  \**************************************************/
/*! exports provided: SwitchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchesComponent", function() { return SwitchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwitchesComponent = /** @class */ (function () {
    function SwitchesComponent() {
    }
    SwitchesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./switches.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/switches.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SwitchesComponent);
    return SwitchesComponent;
}());



/***/ }),

/***/ "./src/app/views/base/tables.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/base/tables.component.ts ***!
  \************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tables.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/views/base/tabs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/base/tabs.component.ts ***!
  \**********************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tabs.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/tests/tests.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/base/tests/tests.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3MvYmFzZS90ZXN0cy90ZXN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/base/tests/tests.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/base/tests/tests.component.ts ***!
  \*****************************************************/
/*! exports provided: TestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsComponent", function() { return TestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestsComponent = /** @class */ (function () {
    function TestsComponent() {
    }
    TestsComponent.prototype.ngOnInit = function () {
    };
    TestsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tests',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tests/tests.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tests.component.css */ "./src/app/views/base/tests/tests.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TestsComponent);
    return TestsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/tooltips.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/base/tooltips.component.ts ***!
  \**************************************************/
/*! exports provided: TooltipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function() { return TooltipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var TooltipsComponent = /** @class */ (function () {
    function TooltipsComponent(sanitizer) {
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-danger\">Never trust not sanitized HTML!!!</span>";
        this.html = sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, this.html);
    }
    TooltipsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    TooltipsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tooltips.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tooltips.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], TooltipsComponent);
    return TooltipsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-base-base-module.js.map