"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var app_1 = __importDefault(require("./app"));
var PORT = config_1.config.server.port;
app_1.default.listen(PORT, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Listening on port " + PORT);
});
//# sourceMappingURL=server.js.map