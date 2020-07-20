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
exports.UserErrorService = exports.UserException = void 0;
var base_1 = require("./base");
var UserException = /** @class */ (function (_super) {
    __extends(UserException, _super);
    function UserException(key, message, code) {
        return _super.call(this, {
            code: code || 403,
            type: "user_exception_" + key,
            message: message
        }) || this;
    }
    return UserException;
}(base_1.BaseError));
exports.UserException = UserException;
var UserErrorService = /** @class */ (function () {
    function UserErrorService() {
    }
    Object.defineProperty(UserErrorService, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    UserErrorService.prototype.loginFail = function () {
        return new UserException('info_login_do_not_match', "Email or Password don't match", 400);
    };
    return UserErrorService;
}());
exports.UserErrorService = UserErrorService;
//# sourceMappingURL=user.js.map