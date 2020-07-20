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
var middlewares_1 = require("../../middlewares");
var keycloak_1 = require("../../helpers/keycloak");
var UserRouter = /** @class */ (function (_super) {
    __extends(UserRouter, _super);
    function UserRouter() {
        return _super.call(this, controllers_1.userController) || this;
    }
    UserRouter.prototype.customRouter = function () {
        this.router.post("/login", this.postLoginMiddlewares(), this.route(this.postLogin));
        this.router.get("/login", this.getLoginMiddlewares(), keycloak_1.MyKeyCloak.Instance.keycloak.protect(), this.route(this.getLogin));
        this.router.post("/logout", this.postLogoutMiddlewares(), this.route(this.postLogout));
        // this.router.get(
        //   "/logout",
        //   this.getLogoutMiddlewares(),
        //   this.route(this.getLogout)
        // );
    };
    UserRouter.prototype.postLoginMiddlewares = function () {
        return [middlewares_1.queryInfoMiddleware.run()];
    };
    UserRouter.prototype.postLogin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateJSON(req.body, {
                            type: "object",
                            properties: {
                                email: { format: "email", type: "string" },
                                password: { type: "string", minLength: 6 },
                            },
                            additionalProperties: true,
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.controller.login({
                                email: req.body.email,
                                password: req.body.password,
                            })];
                    case 2:
                        result = _a.sent();
                        this.onSuccess(res, result);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserRouter.prototype.getLoginMiddlewares = function () {
        return [middlewares_1.queryInfoMiddleware.run()];
    };
    UserRouter.prototype.getLogin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var tmp, result, options;
            return __generator(this, function (_a) {
                tmp = "";
                if (req.session != null) {
                    tmp = req.session["keycloak-token"];
                }
                result = JSON.parse(tmp);
                options = {
                    issuer: "",
                    subject: "",
                    audience: "",
                    expiresIn: "",
                    algorithm: "",
                };
                // const tokenPayload: any = await DJContainer.get<ITokenService>(
                //   TYPES.ITokenService
                // ).verify(result.access_token, options);
                this.onSuccess(res, result);
                return [2 /*return*/];
            });
        });
    };
    UserRouter.prototype.postLogoutMiddlewares = function () {
        return [middlewares_1.queryInfoMiddleware.run(), middlewares_1.authInfoMiddleware.run(["user"])];
    };
    UserRouter.prototype.postLogout = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateJSON(req.body, {
                            type: "object",
                            properties: {
                                token: { type: "string", minLength: 10 },
                            },
                            additionalProperties: true,
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.controller.logout(req.body, req.queryInfo)];
                    case 2:
                        result = _a.sent();
                        this.onSuccess(res, result);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserRouter.prototype.getLogoutMiddlewares = function () {
        return [middlewares_1.queryInfoMiddleware.run()];
    };
    UserRouter.prototype.getLogout = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                res.redirect("/login");
                return [2 /*return*/];
            });
        });
    };
    return UserRouter;
}(crud_1.CrudRouter));
exports.default = UserRouter;
//# sourceMappingURL=user.js.map