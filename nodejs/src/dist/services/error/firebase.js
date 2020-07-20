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
exports.FirebaseErrorService = exports.FirebaseException = void 0;
var base_1 = require("./base");
var FirebaseException = /** @class */ (function (_super) {
    __extends(FirebaseException, _super);
    function FirebaseException(key, message, code) {
        return _super.call(this, {
            code: code || 403,
            type: "firebase_exception_" + key,
            message: message
        }) || this;
    }
    return FirebaseException;
}(base_1.BaseError));
exports.FirebaseException = FirebaseException;
var FirebaseErrorService = /** @class */ (function () {
    function FirebaseErrorService() {
        //...
    }
    Object.defineProperty(FirebaseErrorService, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    FirebaseErrorService.prototype.requestFireBaseInvalid = function (message) {
        return new FirebaseException('upload_image_fail', message);
    };
    return FirebaseErrorService;
}());
exports.FirebaseErrorService = FirebaseErrorService;
//# sourceMappingURL=firebase.js.map