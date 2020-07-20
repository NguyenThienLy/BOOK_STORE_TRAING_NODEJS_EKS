"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyKeyCloak = exports.MyMemoryStore = void 0;
var express_session_1 = __importDefault(require("express-session"));
var keycloak_connect_1 = __importDefault(require("keycloak-connect"));
var MyMemoryStore = /** @class */ (function () {
    function MyMemoryStore() {
        this.memoryStore = new express_session_1.default.MemoryStore();
    }
    Object.defineProperty(MyMemoryStore, "Instance", {
        get: function () {
            // Do you need arguments? Make it a regular static method instead.
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    return MyMemoryStore;
}());
exports.MyMemoryStore = MyMemoryStore;
var MyKeyCloak = /** @class */ (function () {
    function MyKeyCloak() {
        this.keycloak = new keycloak_connect_1.default({
            store: MyMemoryStore.Instance.memoryStore,
        });
    }
    Object.defineProperty(MyKeyCloak, "Instance", {
        get: function () {
            // Do you need arguments? Make it a regular static method instead.
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    return MyKeyCloak;
}());
exports.MyKeyCloak = MyKeyCloak;
//# sourceMappingURL=keycloak.js.map