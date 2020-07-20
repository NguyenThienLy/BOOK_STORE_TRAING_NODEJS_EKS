"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("./configEnv");
var production_1 = __importDefault(require("./production"));
var development_1 = __importDefault(require("./development"));
var testing_1 = __importDefault(require("./testing"));
function getConfig(environment) {
    if (environment === 'development') {
        return development_1.default;
    }
    else if (environment === 'production') {
        return production_1.default;
    }
    else if (environment === 'testing') {
        return testing_1.default;
    }
    else {
        return development_1.default;
    }
}
exports.config = getConfig(process.env.NODE_ENV || "development");
//# sourceMappingURL=index.js.map