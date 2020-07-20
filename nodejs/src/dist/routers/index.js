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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var express = __importStar(require("express"));
var _ = __importStar(require("lodash"));
var versions = fs.readdirSync(__dirname);
var route = express.Router();
versions.forEach(function (version) {
    var versionDir = path.join(__dirname, version);
    if (fs.lstatSync(versionDir).isDirectory()) {
        var modules = fs.readdirSync(versionDir);
        var subRoute_1 = express.Router();
        modules.forEach(function (module) {
            if (_.endsWith(module, '.map'))
                return;
            var Router = require(path.join(__dirname, version, module)).default;
            var router = new Router();
            module = module.split('.')[0];
            subRoute_1.use("/" + module, router.router);
        });
        route.use('/' + version, subRoute_1);
    }
});
exports.default = route;
//# sourceMappingURL=index.js.map