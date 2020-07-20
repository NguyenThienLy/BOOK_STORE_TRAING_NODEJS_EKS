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
exports.AuthErrorService = exports.AuthException = void 0;
var base_1 = require("./base");
var AuthException = /** @class */ (function (_super) {
    __extends(AuthException, _super);
    function AuthException(key, message, code) {
        return _super.call(this, {
            code: code || 403,
            type: "auth_exception_" + key,
            message: message
        }) || this;
    }
    return AuthException;
}(base_1.BaseError));
exports.AuthException = AuthException;
var AuthErrorService = /** @class */ (function () {
    function AuthErrorService() {
    }
    Object.defineProperty(AuthErrorService, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    AuthErrorService.prototype.unauthonized = function () {
        return new AuthException('unauthornized', "unauthornized", 401);
    };
    AuthErrorService.prototype.permissionDenied = function () {
        return new AuthException('permistion_denied', "Your permission denied");
    };
    AuthErrorService.prototype.badToken = function () {
        return new AuthException('bad_token', "Bad token");
    };
    return AuthErrorService;
}());
exports.AuthErrorService = AuthErrorService;
//# sourceMappingURL=auth.js.map