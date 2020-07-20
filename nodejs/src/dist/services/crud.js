"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.CrudService = void 0;
var types_1 = require("../types");
var services_1 = require("../services");
var config_1 = require("../config");
var base_1 = require("./error/base");
var CrudService = /** @class */ (function () {
    function CrudService(model) {
        this.model = model;
    }
    CrudService.prototype.exec = function (promise, option) {
        if (option === void 0) { option = { allowNull: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        result = void 0;
                        if (!promise.hasOwnProperty("exec")) return [3 /*break*/, 2];
                        return [4 /*yield*/, promise.exec()];
                    case 1:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, promise];
                    case 3:
                        result = _a.sent();
                        _a.label = 4;
                    case 4:
                        if ((result === undefined || result === null) && !option.allowNull)
                            throw services_1.DJContainer.get(types_1.TYPES.IErrorService).database.recordNotFound();
                        return [2 /*return*/, result];
                    case 5:
                        err_1 = _a.sent();
                        if (err_1 instanceof base_1.BaseError)
                            throw err_1;
                        if (config_1.config.server.debug) {
                            if (err_1.errors && err_1.errors[0]) {
                                throw services_1.DJContainer.get(types_1.TYPES.IErrorService).database.queryFail(err_1.errors[0].message);
                            }
                            else {
                                throw services_1.DJContainer.get(types_1.TYPES.IErrorService).database.queryFail(err_1.message);
                            }
                        }
                        else {
                            throw err_1;
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CrudService.prototype.getList = function (option) {
        if (option === void 0) { option = {
            filter: {},
            limit: 10,
            offset: 0
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var query, rows, query1, count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = this.model.find();
                        option.limit = Number(option.limit);
                        query = this.applyQueryOptions(query, option);
                        query.setOptions({
                            toJson: { virtual: true }
                        });
                        return [4 /*yield*/, this.exec(query)];
                    case 1:
                        rows = _a.sent();
                        query1 = this.model.find();
                        query1 = this.applyQueryOptions(query1, option = __assign(__assign({}, option), { limit: 0, offset: 0 }));
                        query1.setOptions({
                            toJson: { virtual: true }
                        });
                        return [4 /*yield*/, query1.countDocuments()];
                    case 2:
                        count = _a.sent();
                        return [2 /*return*/, { count: count, rows: rows }];
                }
            });
        });
    };
    CrudService.prototype.getItem = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = this.model.findOne();
                        query = this.applyQueryOptions(query, option);
                        return [4 /*yield*/, this.exec(query, { allowNull: true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CrudService.prototype.create = function (params, option) {
        if (option === void 0) { option = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = this.model.create(params);
                        return [4 /*yield*/, this.exec(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CrudService.prototype.update = function (params, option) {
        if (option === void 0) { option = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = this.model.findOneAndUpdate(option.filter, params, { new: true });
                        return [4 /*yield*/, this.exec(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CrudService.prototype.delete = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var query, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = this.model.findOne();
                        query = this.applyQueryOptions(query, option);
                        return [4 /*yield*/, this.exec(query, { allowNull: false })];
                    case 1:
                        item = _a.sent();
                        return [2 /*return*/, this.exec(item.remove())];
                }
            });
        });
    };
    CrudService.prototype.deleteAll = function (option) {
        if (option === void 0) { option = {
            filter: {}
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = this.model.deleteMany(option.filter);
                        query = this.applyQueryOptions(query, option);
                        return [4 /*yield*/, this.exec(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CrudService.prototype.applyQueryOptions = function (query, option) {
        if (option === void 0) { option = {}; }
        if (option.filter)
            query.where(option.filter);
        if (option.limit)
            query.limit(option.limit);
        if (option.offset)
            query.skip(option.offset);
        if (option.fields)
            query.select(option.fields);
        if (option.order)
            query.sort(option.order);
        if (option.populates) {
            for (var _i = 0, _a = option.populates; _i < _a.length; _i++) {
                var populate = _a[_i];
                query.populate(populate);
            }
        }
        if (option.lean)
            query.lean();
        return query;
    };
    return CrudService;
}());
exports.CrudService = CrudService;
//# sourceMappingURL=crud.js.map