"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerMiddleware = exports.authSessionMiddleware = exports.setCookieMiddleware = exports.googleOAuthMiddleware = exports.blockMiddleware = exports.queryInfoMiddleware = exports.authInfoMiddleware = void 0;
var auth_1 = require("./auth");
var query_1 = require("./query");
var block_1 = require("./block");
var googleOauth_1 = require("./googleOauth");
var setCookie_1 = require("./setCookie");
var authSession_1 = require("./authSession");
var multer_1 = require("./multer");
var authInfoMiddleware = new auth_1.AuthInfoMiddleware();
exports.authInfoMiddleware = authInfoMiddleware;
var queryInfoMiddleware = new query_1.QueryInfoMiddleware();
exports.queryInfoMiddleware = queryInfoMiddleware;
var blockMiddleware = new block_1.BlockMiddleware();
exports.blockMiddleware = blockMiddleware;
var googleOAuthMiddleware = new googleOauth_1.GoogleOAuthMiddleware();
exports.googleOAuthMiddleware = googleOAuthMiddleware;
var setCookieMiddleware = new setCookie_1.SetCookieMiddleware();
exports.setCookieMiddleware = setCookieMiddleware;
var authSessionMiddleware = new authSession_1.AuthSessionMiddleware();
exports.authSessionMiddleware = authSessionMiddleware;
var multerMiddleware = new multer_1.MulterMiddleware();
exports.multerMiddleware = multerMiddleware;
//# sourceMappingURL=index.js.map