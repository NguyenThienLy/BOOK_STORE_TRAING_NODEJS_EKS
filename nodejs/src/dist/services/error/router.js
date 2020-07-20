"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterErrorService = exports.RouterException = void 0;
var base_1 = require("./base");
var RouterException = /** @class */ (function (_super) {
    __extends(RouterException, _super);
    function RouterException(key, message, code) {
        return _super.call(this, {
            code: code || 403,
            type: "router_exception_" + key,
            message: message
        }) || this;
    }
    return RouterException;
}(base_1.BaseError));
exports.RouterException = RouterException;
var RouterErrorService = /** @class */ (function () {
    function RouterErrorService() {
        //...
    }
    Object.defineProperty(RouterErrorService, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    RouterErrorService.prototype.requestDataInvalid = function (message) {
        return new RouterException('data_invalid', message, 403);
    };
    RouterErrorService.prototype.somethingWentWrong = function () {
        return new RouterException('something_went_wrong', "Something went wrong!");
    };
    RouterErrorService.prototype.googleMapApiWrong = function (error) {
        return new RouterException('google_map_api', error);
    };
    return RouterErrorService;
}());
exports.RouterErrorService = RouterErrorService;
//# sourceMappingURL=router.js.map