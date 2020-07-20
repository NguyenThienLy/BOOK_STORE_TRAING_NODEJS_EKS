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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
exports.CategoryService = void 0;
var crud_1 = require("../crud");
var inversify_1 = require("inversify");
var models_1 = require("../../models");
var bson_1 = require("bson");
require("reflect-metadata");
var CategoryService = /** @class */ (function (_super) {
    __extends(CategoryService, _super);
    function CategoryService() {
        return _super.call(this, models_1.Category) || this;
    }
    CategoryService.prototype.pushBookId = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _idOwner, _idOw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _idOwner = params._idOwner, _idOw = params._idOw;
                        return [4 /*yield*/, models_1.Category.findOneAndUpdate({ _id: _idOwner }, { $push: { books: _idOw } }, { new: true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoryService.prototype.pullBookId = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _idOwner, _idOw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _idOwner = params._idOwner, _idOw = params._idOw;
                        return [4 /*yield*/, models_1.Category.findOneAndUpdate({ _id: _idOwner }, { $pull: { books: _idOw } }, { new: true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoryService.prototype.getListBookSameCategory = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _idCategory, _idBook, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _idCategory = params._idCategory, _idBook = params._idBook;
                        return [4 /*yield*/, models_1.Category.aggregate([
                                {
                                    $match: { _id: new bson_1.ObjectId("" + _idCategory) }
                                },
                                {
                                    $lookup: {
                                        from: "book",
                                        localField: "books",
                                        foreignField: "_id",
                                        as: "books"
                                    }
                                },
                                {
                                    $project: {
                                        books: {
                                            $filter: {
                                                input: "$books",
                                                as: "element",
                                                cond: { $ne: ["$$element._id", new bson_1.ObjectId("" + _idBook)] }
                                            }
                                        }
                                    }
                                },
                                {
                                    $project: {
                                        books: {
                                            $slice: ["$books", 3]
                                        }
                                    }
                                },
                                {
                                    $project: {
                                        books: 1,
                                        _id: 0
                                    }
                                },
                                {
                                    $unwind: "$books"
                                },
                                {
                                    $replaceRoot: {
                                        newRoot: "$books"
                                    }
                                },
                                {
                                    $lookup: {
                                        from: "author",
                                        localField: "author",
                                        foreignField: "_id",
                                        as: "author"
                                    },
                                },
                                {
                                    $unwind: "$author"
                                },
                                {
                                    $lookup: {
                                        from: "category",
                                        localField: "category",
                                        foreignField: "_id",
                                        as: "category"
                                    },
                                },
                                {
                                    $unwind: "$category"
                                },
                                {
                                    $lookup: {
                                        from: "publishing",
                                        localField: "publishing",
                                        foreignField: "_id",
                                        as: "publishing"
                                    },
                                },
                                {
                                    $unwind: "$publishing"
                                },
                            ])];
                    case 1:
                        item = _a.sent();
                        return [2 /*return*/, { count: item.length, rows: item }];
                }
            });
        });
    };
    CategoryService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], CategoryService);
    return CategoryService;
}(crud_1.CrudService));
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.js.map