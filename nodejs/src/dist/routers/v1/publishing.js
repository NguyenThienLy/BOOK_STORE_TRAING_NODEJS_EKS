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
var crud_1 = require("../crud");
var controllers_1 = require("../../controllers");
var PublishingRouter = /** @class */ (function (_super) {
    __extends(PublishingRouter, _super);
    function PublishingRouter() {
        return _super.call(this, controllers_1.publishingController) || this;
    }
    PublishingRouter.prototype.customRouter = function () {
    };
    return PublishingRouter;
}(crud_1.CrudRouter));
exports.default = PublishingRouter;
//# sourceMappingURL=publishing.js.map