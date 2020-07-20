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
var ImageRouter = /** @class */ (function (_super) {
    __extends(ImageRouter, _super);
    function ImageRouter() {
        return _super.call(this, controllers_1.imageController) || this;
    }
    ImageRouter.prototype.customRouter = function () {
    };
    return ImageRouter;
}(crud_1.CrudRouter));
exports.default = ImageRouter;
//# sourceMappingURL=image.js.map