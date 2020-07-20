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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.CrudRouter = void 0;
var express = __importStar(require("express"));
var _ = __importStar(require("lodash"));
var base_1 = require("./base");
var middlewares_1 = require("../middlewares/");
var CrudRouter = /** @class */ (function (_super) {
    __extends(CrudRouter, _super);
    function CrudRouter(controller) {
        var _this = _super.call(this) || this;
        _this.controller = controller;
        _this.router = express.Router();
        _this.customRouter();
        _this.defaultRouter();
        return _this;
    }
    CrudRouter.prototype.defaultRouter = function () {
        this.router.get('/', this.getListMiddlewares(), this.route(this.getList));
        this.router.get('/:_id', this.getItemMiddlewares(), this.route(this.getItem));
        this.router.post('/', this.createMiddlewares(), this.route(this.create));
        this.router.put('/:_id', this.updateMiddlewares(), this.route(this.update));
        this.router.delete('/:_id', this.deleteMiddlewares(), this.route(this.delete));
        this.router.delete('/', this.deleteAllMiddlewares(), this.route(this.deleteAll));
        this.router.get("/find", this.findMiddlewares(), this.route(this.find));
    };
    CrudRouter.prototype.customRouter = function () {
    };
    CrudRouter.prototype.findMiddlewares = function () {
        return [middlewares_1.queryInfoMiddleware.run()];
    };
    CrudRouter.prototype.find = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.getItem(req.queryInfo)];
                    case 1:
                        result = _a.sent();
                        this.onSuccess(res, result);
                        return [2 /*return*/];
                }
            });
        });
    };
    CrudRouter.prototype.getListMiddlewares = function () {
        return [middlewares_1.queryInfoMiddleware.run()];
    };
    CrudRouter.prototype.getList = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.getList(req.queryInfo)];
                    case 1:
                        result = _a.sent();
                        this.onSuccessAsList(res, result, undefined, req.queryInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    CrudRouter.prototype.getItemMiddlewares = function () {
        return [
            middlewares_1.queryInfoMiddleware.run()
        ];
    };
    CrudRouter.prototype.getItem = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = req.params._id;
                        req.queryInfo = req.queryInfo ? req.queryInfo : {};
                        if (req.queryInfo) {
                            req.queryInfo.filter._id = _id;
                        }
                        return [4 /*yield*/, this.controller.getItem(req.queryInfo)];
                    case 1:
                        result = _a.sent();
                        this.onSuccess(res, result);
                        return [2 /*return*/];
                }
            });
        });
    };
    CrudRouter.prototype.createMiddlewares = function () {
        return [middlewares_1.queryInfoMiddleware.run()];
    };
    CrudRouter.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.create(req.body, req.queryInfo)];
                    case 1:
                        result = _a.sent();
                        this.onSuccess(res, result);
                        return [2 /*return*/];
                }
            });
        });
    };
    CrudRouter.prototype.updateMiddlewares = function () {
        return [middlewares_1.queryInfoMiddleware.run()];
    };
    CrudRouter.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = req.params._id;
                        return [4 /*yield*/, this.controller.update(req.body, {
                                filter: { _id: _id }
                            })];
                    case 1:
                        result = _a.sent();
                        this.onSuccess(res, result);
                        return [2 /*return*/];
                }
            });
        });
    };
    CrudRouter.prototype.deleteMiddlewares = function () {
        return [middlewares_1.queryInfoMiddleware.run(), middlewares_1.authInfoMiddleware.run(['admin'])];
    };
    CrudRouter.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = req.params._id;
                        return [4 /*yield*/, this.controller.delete({
                                filter: { _id: _id }
                            })];
                    case 1:
                        result = _a.sent();
                        this.onSuccess(res, result);
                        return [2 /*return*/];
                }
            });
        });
    };
    CrudRouter.prototype.deleteAllMiddlewares = function () {
        return [middlewares_1.queryInfoMiddleware.run()];
    };
    CrudRouter.prototype.deleteAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var items, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (_.has(req.query, "items")) {
                            req.query.items = JSON.parse(req.query.items) || {};
                        }
                        return [4 /*yield*/, this.validateJSON(req.query, {
                                type: "object",
                                properties: {
                                    items: {
                                        type: 'array',
                                        uniqueItems: true,
                                        minItems: 1,
                                        items: { type: "string" }
                                    }
                                },
                                required: ['items'],
                                additionalProperties: false
                            })];
                    case 1:
                        _a.sent();
                        items = req.query.items;
                        return [4 /*yield*/, this.controller.deleteAll({
                                filter: { _id: { $in: items } }
                            })];
                    case 2:
                        result = _a.sent();
                        this.onSuccess(res, result);
                        return [2 /*return*/];
                }
            });
        });
    };
    return CrudRouter;
}(base_1.BaseRouter));
exports.CrudRouter = CrudRouter;
//# sourceMappingURL=crud.js.map