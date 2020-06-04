(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * CoreUI Plugins - Custom Tooltips for Chart.js (v1.3.1): custom-tooltips.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  function CustomTooltips(tooltipModel) {
    var _this = this;

    // Add unique id if not exist
    var _setCanvasId = function _setCanvasId() {
      var _idMaker = function _idMaker() {
        var _hex = 16;
        var _multiplier = 0x10000;
        return ((1 + Math.random()) * _multiplier | 0).toString(_hex);
      };

      var _canvasId = "_canvas-" + (_idMaker() + _idMaker());

      _this._chart.canvas.id = _canvasId;
      return _canvasId;
    };

    var ClassName = {
      ABOVE: 'above',
      BELOW: 'below',
      CHARTJS_TOOLTIP: 'chartjs-tooltip',
      NO_TRANSFORM: 'no-transform',
      TOOLTIP_BODY: 'tooltip-body',
      TOOLTIP_BODY_ITEM: 'tooltip-body-item',
      TOOLTIP_BODY_ITEM_COLOR: 'tooltip-body-item-color',
      TOOLTIP_BODY_ITEM_LABEL: 'tooltip-body-item-label',
      TOOLTIP_BODY_ITEM_VALUE: 'tooltip-body-item-value',
      TOOLTIP_HEADER: 'tooltip-header',
      TOOLTIP_HEADER_ITEM: 'tooltip-header-item'
    };
    var Selector = {
      DIV: 'div',
      SPAN: 'span',
      TOOLTIP: (this._chart.canvas.id || _setCanvasId()) + "-tooltip"
    };
    var tooltip = document.getElementById(Selector.TOOLTIP);

    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = Selector.TOOLTIP;
      tooltip.className = ClassName.CHARTJS_TOOLTIP;

      this._chart.canvas.parentNode.appendChild(tooltip);
    } // Hide if no tooltip


    if (tooltipModel.opacity === 0) {
      tooltip.style.opacity = 0;
      return;
    } // Set caret Position


    tooltip.classList.remove(ClassName.ABOVE, ClassName.BELOW, ClassName.NO_TRANSFORM);

    if (tooltipModel.yAlign) {
      tooltip.classList.add(tooltipModel.yAlign);
    } else {
      tooltip.classList.add(ClassName.NO_TRANSFORM);
    } // Set Text


    if (tooltipModel.body) {
      var titleLines = tooltipModel.title || [];
      var tooltipHeader = document.createElement(Selector.DIV);
      tooltipHeader.className = ClassName.TOOLTIP_HEADER;
      titleLines.forEach(function (title) {
        var tooltipHeaderTitle = document.createElement(Selector.DIV);
        tooltipHeaderTitle.className = ClassName.TOOLTIP_HEADER_ITEM;
        tooltipHeaderTitle.innerHTML = title;
        tooltipHeader.appendChild(tooltipHeaderTitle);
      });
      var tooltipBody = document.createElement(Selector.DIV);
      tooltipBody.className = ClassName.TOOLTIP_BODY;
      var tooltipBodyItems = tooltipModel.body.map(function (item) {
        return item.lines;
      });
      tooltipBodyItems.forEach(function (item, i) {
        var tooltipBodyItem = document.createElement(Selector.DIV);
        tooltipBodyItem.className = ClassName.TOOLTIP_BODY_ITEM;
        var colors = tooltipModel.labelColors[i];
        var tooltipBodyItemColor = document.createElement(Selector.SPAN);
        tooltipBodyItemColor.className = ClassName.TOOLTIP_BODY_ITEM_COLOR;
        tooltipBodyItemColor.style.backgroundColor = colors.backgroundColor;
        tooltipBodyItem.appendChild(tooltipBodyItemColor);

        if (item[0].split(':').length > 1) {
          var tooltipBodyItemLabel = document.createElement(Selector.SPAN);
          tooltipBodyItemLabel.className = ClassName.TOOLTIP_BODY_ITEM_LABEL;
          tooltipBodyItemLabel.innerHTML = item[0].split(': ')[0];
          tooltipBodyItem.appendChild(tooltipBodyItemLabel);
          var tooltipBodyItemValue = document.createElement(Selector.SPAN);
          tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
          tooltipBodyItemValue.innerHTML = item[0].split(': ').pop();
          tooltipBodyItem.appendChild(tooltipBodyItemValue);
        } else {
          var _tooltipBodyItemValue = document.createElement(Selector.SPAN);

          _tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
          _tooltipBodyItemValue.innerHTML = item[0];
          tooltipBodyItem.appendChild(_tooltipBodyItemValue);
        }

        tooltipBody.appendChild(tooltipBodyItem);
      });
      tooltip.innerHTML = '';
      tooltip.appendChild(tooltipHeader);
      tooltip.appendChild(tooltipBody);
    }

    var position = this._chart.canvas.getBoundingClientRect();

    var positionY = this._chart.canvas.offsetTop;
    var positionX = this._chart.canvas.offsetLeft;
    var positionLeft = positionX + tooltipModel.caretX;
    var positionTop = positionY + tooltipModel.caretY; // eslint-disable-next-line

    var halfWidth = tooltipModel.width / 2;

    if (positionLeft + halfWidth > position.width) {
      positionLeft -= halfWidth;
    } else if (positionLeft < halfWidth) {
      positionLeft += halfWidth;
    } // Display, position, and set styles for font


    tooltip.style.opacity = 1;
    tooltip.style.left = positionLeft + "px";
    tooltip.style.top = positionTop + "px";
  }

  var customTooltips = CustomTooltips; // TODO: camel-case

  exports.CustomTooltips = CustomTooltips;
  exports.customTooltips = customTooltips;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=custom-tooltips.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js ***!
  \***********************************************************************/
/*! exports provided: AlertComponent, AlertConfig, AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return AlertConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertConfig = /** @class */ (function () {
    function AlertConfig() {
        /**
         * default alert type
         */
        this.type = 'warning';
        /**
         * is alerts are dismissible by default
         */
        this.dismissible = false;
        /**
         * default time before alert will dismiss
         */
        this.dismissOnTimeout = undefined;
    }
    AlertConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return AlertConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertComponent = /** @class */ (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /**
         * If set, displays an inline "Close" button
         */
        this.dismissible = false;
        /**
         * Is alert visible
         */
        this.isOpen = true;
        /**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */
        this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.classes = '';
        this.dismissibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe((/**
         * @param {?} dismissible
         * @return {?}
         */
        function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.close(); }), parseInt((/** @type {?} */ (this.dismissOnTimeout)), 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    AlertComponent.prototype.close = 
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    AlertComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'alert,bs-alert',
                    template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: AlertConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    AlertComponent.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dismissible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dismissOnTimeout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["OnChange"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    /**
     * @return {?}
     */
    AlertModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AlertModule, providers: [AlertConfig] };
    };
    AlertModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    declarations: [AlertComponent],
                    exports: [AlertComponent],
                    entryComponents: [AlertComponent]
                },] }
    ];
    return AlertModule;
}());


//# sourceMappingURL=ngx-bootstrap-alert.js.map


/***/ })

}]);
//# sourceMappingURL=common.js.map