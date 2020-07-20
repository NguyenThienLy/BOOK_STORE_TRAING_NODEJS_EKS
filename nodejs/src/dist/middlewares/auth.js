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
exports.AuthInfoMiddleware = void 0;
var types_1 = require("../types");
var services_1 = require("../services");
var base_1 = require("./base");
var AuthInfoMiddleware = /** @class */ (function (_super) {
    __extends(AuthInfoMiddleware, _super);
    function AuthInfoMiddleware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthInfoMiddleware.prototype.use = function (req, res, next, providers) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, token, item, options, tokenPayload, user, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        authorization = req.headers['authorization'];
                        if (!authorization)
                            throw services_1.DJContainer.get(types_1.TYPES.IErrorService).auth.unauthonized();
                        token = authorization.split(' ')[1];
                        return [4 /*yield*/, services_1.DJContainer.get(types_1.TYPES.InvalidTokenService).getItem({
                                filter: { token: token }
                            })];
                    case 1:
                        item = _a.sent();
                        if (!!item) return [3 /*break*/, 6];
                        options = {
                            issuer: "",
                            subject: "",
                            audience: "http://localhost:4200",
                            expiresIn: "15d",
                            algorithm: "RS256"
                        };
                        return [4 /*yield*/, services_1.DJContainer.get(types_1.TYPES.ITokenService).verify(token, options)];
                    case 2:
                        tokenPayload = _a.sent();
                        if (!(providers.indexOf(tokenPayload.role) !== -1 && tokenPayload.role === providers[0])) return [3 /*break*/, 4];
                        return [4 /*yield*/, services_1.DJContainer.get(types_1.TYPES.UserService).getItem({ filter: { _id: tokenPayload._id } })];
                    case 3:
                        user = _a.sent();
                        req.authInfo = { user: user };
                        return [3 /*break*/, 5];
                    case 4: throw services_1.DJContainer.get(types_1.TYPES.IErrorService).auth.permissionDenied();
                    case 5:
                        next();
                        return [3 /*break*/, 7];
                    case 6: throw services_1.DJContainer.get(types_1.TYPES.IErrorService).auth.permissionDenied();
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        err_1 = _a.sent();
                        throw services_1.DJContainer.get(types_1.TYPES.IErrorService).auth.unauthonized();
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return AuthInfoMiddleware;
}(base_1.BaseMiddleware));
exports.AuthInfoMiddleware = AuthInfoMiddleware;
//# sourceMappingURL=auth.js.map