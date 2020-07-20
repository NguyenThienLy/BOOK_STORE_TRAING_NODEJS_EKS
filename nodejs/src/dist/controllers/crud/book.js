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
exports.BookController = void 0;
var crud_1 = require("../crud");
require("reflect-metadata");
var services_1 = require("../../services");
var types_1 = require("../../types");
var BookController = /** @class */ (function (_super) {
    __extends(BookController, _super);
    // private _authorService: AuthorService;
    // private _bookService: BookService;
    // private _categoryService: CategoryService;
    // private _publishingService: PublishingService;
    // private _iFireBaseService: IFireBaseService;
    // constructor(@inject(TYPES.AuthorService) authorService: AuthorService,
    //     @inject(TYPES.BookService) bookService: BookService,
    //     @inject(TYPES.CategoryService) categoryService: CategoryService,
    //     @inject(TYPES.PublishingService) publishingService: PublishingService,
    //     @inject(TYPES.IFireBaseService) iFireBaseService: IFireBaseService
    // ) {
    //     super(bookService);
    //     this._authorService = authorService;
    //     this._bookService = bookService;
    //     this._categoryService = categoryService;
    //     this._publishingService = publishingService;
    //     this._iFireBaseService = iFireBaseService;
    // }
    function BookController() {
        return _super.call(this, services_1.DJContainer.get(types_1.TYPES.BookService)) || this;
    }
    BookController.prototype.pushBookIdInAuthor = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _idOwner, _idOw;
            return __generator(this, function (_a) {
                _idOwner = params._idOwner, _idOw = params._idOw;
                services_1.DJContainer.get(types_1.TYPES.AuthorService).pushBookId({
                    _idOwner: _idOwner,
                    _idOw: _idOw
                });
                return [2 /*return*/];
            });
        });
    };
    BookController.prototype.pullBookIdInAuthor = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _idOwner, _idOw;
            return __generator(this, function (_a) {
                _idOwner = params._idOwner, _idOw = params._idOw;
                services_1.DJContainer.get(types_1.TYPES.AuthorService).pullBookId({
                    _idOwner: _idOwner,
                    _idOw: _idOw
                });
                return [2 /*return*/];
            });
        });
    };
    BookController.prototype.pushBookIdInCategory = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _idOwner, _idOw;
            return __generator(this, function (_a) {
                _idOwner = params._idOwner, _idOw = params._idOw;
                services_1.DJContainer.get(types_1.TYPES.CategoryService).pushBookId({
                    _idOwner: _idOwner,
                    _idOw: _idOw
                });
                return [2 /*return*/];
            });
        });
    };
    BookController.prototype.pullBookIdInCategory = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _idOwner, _idOw;
            return __generator(this, function (_a) {
                _idOwner = params._idOwner, _idOw = params._idOw;
                services_1.DJContainer.get(types_1.TYPES.CategoryService).pullBookId({
                    _idOwner: _idOwner,
                    _idOw: _idOw
                });
                return [2 /*return*/];
            });
        });
    };
    BookController.prototype.pushBookIdInPublishing = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _idOwner, _idOw;
            return __generator(this, function (_a) {
                _idOwner = params._idOwner, _idOw = params._idOw;
                services_1.DJContainer.get(types_1.TYPES.PublishingService).pushBookId({
                    _idOwner: _idOwner,
                    _idOw: _idOw
                });
                return [2 /*return*/];
            });
        });
    };
    BookController.prototype.pullBookIdInPublishing = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _idOwner, _idOw;
            return __generator(this, function (_a) {
                _idOwner = params._idOwner, _idOw = params._idOw;
                services_1.DJContainer.get(types_1.TYPES.PublishingService).pullBookId({
                    _idOwner: _idOwner,
                    _idOw: _idOw
                });
                return [2 /*return*/];
            });
        });
    };
    BookController.prototype.uploadImageToFireBase = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, services_1.DJContainer.get(types_1.TYPES.IFireBaseService).updateImage(params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BookController.prototype.create = function (params, option) {
        return __awaiter(this, void 0, void 0, function () {
            var files, body, item, listUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        files = params.files, body = params.body;
                        return [4 /*yield*/, services_1.DJContainer.get(types_1.TYPES.BookService).create(__assign(__assign({}, body), { slug: body.title.replace(/ /g, "-") }), option)];
                    case 1:
                        item = _a.sent();
                        if (!item) return [3 /*break*/, 4];
                        this.pushBookIdInAuthor({
                            _idOwner: item.author,
                            _idOw: item._id
                        });
                        this.pushBookIdInCategory({
                            _idOwner: item.category,
                            _idOw: item._id
                        });
                        this.pushBookIdInPublishing({
                            _idOwner: item.publishing,
                            _idOw: item._id
                        });
                        if (!(files.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.uploadImageToFireBase({
                                files: files,
                                _id: item._id
                            })];
                    case 2:
                        listUrl = _a.sent();
                        if (!(listUrl.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, services_1.DJContainer.get(types_1.TYPES.BookService).update(__assign(__assign({}, item._doc), { mainImg: listUrl[0], subImgs: listUrl }), {
                                filter: {
                                    _id: item._id
                                }
                            })];
                    case 3:
                        item = _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, services_1.DJContainer.get(types_1.TYPES.BookService).getItem(__assign(__assign({}, option), { filter: {
                                _id: item._id
                            } }))];
                    case 5: return [4 /*yield*/, _a.sent()];
                    case 6: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BookController.prototype.update = function (params, option) {
        return __awaiter(this, void 0, void 0, function () {
            var files, body, item, listUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        files = params.files, body = params.body;
                        return [4 /*yield*/, services_1.DJContainer.get(types_1.TYPES.BookService).update(__assign(__assign({}, body), { slug: body.title.replace(/ /g, "-") }), option)];
                    case 1:
                        item = _a.sent();
                        if (!item) return [3 /*break*/, 4];
                        if (item.author !== body.oldAuthor) {
                            this.pullBookIdInAuthor({
                                _idOwner: body.oldAuthor,
                                _idOw: item._id
                            });
                            this.pushBookIdInAuthor({
                                _idOwner: item.author,
                                _idOw: item._id
                            });
                        }
                        if (item.category !== body.oldCategory) {
                            this.pullBookIdInCategory({
                                _idOwner: body.oldCategory,
                                _idOw: item._id
                            });
                            this.pushBookIdInCategory({
                                _idOwner: item.category,
                                _idOw: item._id
                            });
                        }
                        if (item.publishing !== body.oldPublishing) {
                            this.pullBookIdInPublishing({
                                _idOwner: body.oldPublishing,
                                _idOw: item._id
                            });
                            this.pushBookIdInPublishing({
                                _idOwner: item.publishing,
                                _idOw: item._id
                            });
                        }
                        if (!(files.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.uploadImageToFireBase({
                                files: files,
                                _id: item._id
                            })];
                    case 2:
                        listUrl = _a.sent();
                        if (!(listUrl.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.service.update(__assign(__assign({}, item.docs), { mainImg: listUrl[0], subImgs: listUrl }), __assign(__assign({}, option), { filter: {
                                    _id: item._id
                                } }))];
                    case 3:
                        item = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, item];
                }
            });
        });
    };
    BookController.prototype.delete = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, services_1.DJContainer.get(types_1.TYPES.BookService).delete(option)];
                    case 1:
                        item = _a.sent();
                        if (item) {
                            this.pullBookIdInAuthor({ _idOwner: item.author, _idOw: item._id });
                            this.pullBookIdInCategory({ _idOwner: item.category, _idOw: item._id });
                            this.pullBookIdInPublishing({ _idOwner: item.publishing, _idOw: item._id });
                        }
                        return [2 /*return*/, item];
                }
            });
        });
    };
    return BookController;
}(crud_1.CrudController));
exports.BookController = BookController;
//# sourceMappingURL=book.js.map