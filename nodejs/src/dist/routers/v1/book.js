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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var crud_1 = require("../crud");
var controllers_1 = require("../../controllers");
var middlewares_1 = require("../../middlewares/");
var Multer = require('multer');
var multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 1 * 1024 * 1024 // no larger than 1mb
    }
});
var BookRouter = /** @class */ (function (_super) {
    __extends(BookRouter, _super);
    function BookRouter() {
        return _super.call(this, controllers_1.bookController) || this;
    }
    BookRouter.prototype.customRouter = function () {
        this.router.post('/', this.createMiddlewares(), this.route(this.create));
        this.router.put('/', this.updateMiddlewares(), this.route(this.update));
    };
    BookRouter.prototype.createMiddlewares = function () {
        return [
            multer.array("subImgs"),
            middlewares_1.authInfoMiddleware.run(['user']),
            middlewares_1.queryInfoMiddleware.run()
        ];
    };
    BookRouter.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateJSON(req.body, {
                            type: 'object',
                            properties: {
                                title: { type: 'string', minLength: 10 },
                                category: { type: 'string' },
                                author: { type: 'string' },
                                publishing: { type: 'string' },
                                price: { type: 'string' },
                                quantity: { type: 'string' },
                                description: { type: "string", minLength: 10 }
                            },
                            additionalProperties: true
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.controller.create({ files: req.files, body: req.body }, req.queryInfo)];
                    case 2:
                        result = _a.sent();
                        this.onSuccess(res, result);
                        return [2 /*return*/];
                }
            });
        });
    };
    BookRouter.prototype.updateMiddlewares = function () {
        return [
            multer.array("subImgs"),
            middlewares_1.authInfoMiddleware.run(['user']),
            middlewares_1.queryInfoMiddleware.run()
        ];
    };
    BookRouter.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = req.params._id;
                        return [4 /*yield*/, this.validateJSON(req.body, {
                                type: 'object',
                                properties: {
                                    title: { type: 'string', minLength: 8, maxLength: 30 },
                                    category: { type: 'string' },
                                    oldCategory: { type: 'string' },
                                    author: { type: 'string' },
                                    oldAuthor: { type: 'string' },
                                    publishing: { type: 'string' },
                                    oldPublishing: { type: 'string' },
                                    price: { type: 'string' },
                                    quantity: { type: 'string' },
                                    description: { type: "string", minLength: 8 }
                                },
                                additionalProperties: true
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.controller.update({ files: req.files, body: req.body }, {
                                filter: { _id: _id }
                            })];
                    case 2:
                        result = _a.sent();
                        this.onSuccess(res, result);
                        return [2 /*return*/];
                }
            });
        });
    };
    return BookRouter;
}(crud_1.CrudRouter));
exports.default = BookRouter;
//# sourceMappingURL=book.js.map