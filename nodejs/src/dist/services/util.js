"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilService = void 0;
var _ = __importStar(require("lodash"));
var crypto_1 = __importDefault(require("crypto"));
var ajv_1 = __importDefault(require("ajv"));
var inversify_1 = require("inversify");
var ajv_errors_1 = __importDefault(require("ajv-errors"));
var ajv_keywords_1 = __importDefault(require("ajv-keywords"));
var bcrypt = __importStar(require("bcryptjs"));
var SALT_WORK_FACTOR = 10;
var UtilService = /** @class */ (function () {
    // private static _instance: UtilService;
    function UtilService() {
    }
    // public static get Instance()
    // {
    //     return this._instance || (this._instance = new this());
    // }
    UtilService.prototype.validateJSON = function (schema, json) {
        if (json === void 0) { json = {}; }
        var ajv = new ajv_1.default({ allErrors: true, jsonPointers: true });
        ajv_errors_1.default(ajv, { singleError: true });
        ajv_keywords_1.default(ajv, ['switch']);
        var valid = ajv.validate(schema, json);
        return {
            isValid: valid,
            message: ajv.errorsText()
        };
    };
    UtilService.prototype.hashPassword = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var salt, hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcrypt.genSalt(SALT_WORK_FACTOR)];
                    case 1:
                        salt = _a.sent();
                        return [4 /*yield*/, bcrypt.hash(data, salt)];
                    case 2:
                        hash = _a.sent();
                        return [2 /*return*/, hash];
                }
            });
        });
    };
    UtilService.prototype.hashParams = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, crypto_1.default.createHash('sha256').update(info, 'utf8').digest('hex')];
            });
        });
    };
    UtilService.prototype.parseMessengeWithInfo = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var message, info, regex, regex2, replaceText, _i, replaceText_1, item;
            return __generator(this, function (_a) {
                message = params.message, info = params.info;
                regex = /({|})/g;
                regex2 = /({{\w+}})|({{\w+(?:\.\w+)+)}}/g;
                if (regex.test(message)) {
                    replaceText = message.match(regex2);
                    for (_i = 0, replaceText_1 = replaceText; _i < replaceText_1.length; _i++) {
                        item = replaceText_1[_i];
                        item = item.replace(regex, '');
                        message = message.replace(item, _.get(info, item));
                    }
                    message = message.replace(regex, '');
                }
                return [2 /*return*/, message];
            });
        });
    };
    UtilService.prototype.generateShortId = function (length) {
        var d = new Date().valueOf();
        var n = d.toString();
        var result = '';
        var p = 0;
        var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
        for (var i = length; i > 0; --i) {
            result += ((i & 1) && n.charAt(p) ? n.charAt(p) : chars[Math.floor(Math.random() * chars.length)]);
            if (i & 1)
                p++;
        }
        ;
        return result;
    };
    UtilService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());
exports.UtilService = UtilService;
//# sourceMappingURL=util.js.map