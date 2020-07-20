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
exports.PublishingController = void 0;
var crud_1 = require("../crud");
var services_1 = require("../../services");
var types_1 = require("../../types");
var PublishingController = /** @class */ (function (_super) {
    __extends(PublishingController, _super);
    function PublishingController() {
        return _super.call(this, services_1.DJContainer.get(types_1.TYPES.PublishingService)) || this;
    }
    return PublishingController;
}(crud_1.CrudController));
exports.PublishingController = PublishingController;
//# sourceMappingURL=publishing.js.map