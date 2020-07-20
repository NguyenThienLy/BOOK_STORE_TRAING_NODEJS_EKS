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
exports.DatabaseErrorService = void 0;
var base_1 = require("./base");
var DatabaseException = /** @class */ (function (_super) {
    __extends(DatabaseException, _super);
    function DatabaseException(key, message, code) {
        return _super.call(this, {
            code: code || 500,
            type: "database_exception_" + key,
            message: message
        }) || this;
    }
    return DatabaseException;
}(base_1.BaseError));
var DatabaseErrorService = /** @class */ (function () {
    function DatabaseErrorService() {
    }
    Object.defineProperty(DatabaseErrorService, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    DatabaseErrorService.prototype.recordNotFound = function () {
        return new DatabaseException('record_not_found', 'Record Not Found');
    };
    DatabaseErrorService.prototype.queryFail = function (message) {
        if (message === void 0) { message = "Query Fail"; }
        return new DatabaseException('query_fail', message);
    };
    return DatabaseErrorService;
}());
exports.DatabaseErrorService = DatabaseErrorService;
//# sourceMappingURL=database.js.map