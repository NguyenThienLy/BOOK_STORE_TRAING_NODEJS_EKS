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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path = __importStar(require("path"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = require("./config");
var routers_1 = __importDefault(require("./routers/"));
var morgan_1 = __importDefault(require("morgan"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var js_yaml_1 = __importDefault(require("js-yaml"));
var express_session_1 = __importDefault(require("express-session"));
var keycloak_1 = require("./helpers/keycloak");
var App = /** @class */ (function () {
    function App() {
        this.development = process.env.NODE_ENV === "development" ? true : false;
        this.testing = process.env.NODE_ENV === "testing" ? true : false;
        this.production = process.env.NODE_ENV === "production" ? true : false;
        this.app = express_1.default();
        this.initSwagger();
        this.initKeycloak();
        this.initPassport();
        this.initConfig();
        this.initMongoConfig();
        this.initRoutes();
        this.initTracking();
    }
    App.prototype.initConfig = function () {
        this.app.use(body_parser_1.default.json({ limit: "50mb" }));
        this.app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
        this.app.use(cookie_parser_1.default());
    };
    App.prototype.initPassport = function () {
        // this.app.use(session({
        //     secret: config.session.secret as string,
        //     resave: true,
        //     saveUninitialized: true,
        //     rolling: true,
        //     cookie: {
        //         httpOnly: true,
        //         maxAge: 60 * 1000
        //     }
        // }));
        // this.app.use(passport.initialize());
        // this.app.use(passport.session());
    };
    App.prototype.initTracking = function () {
        this.app.use(morgan_1.default("dev"));
    };
    App.prototype.initMongoConfig = function () {
        mongoose_1.default.Promise = global.Promise;
        var mongo = process.env.DEFAULT_DB;
        if (config_1.config.database.mongo) {
            mongo = config_1.config.database.mongo;
        }
        mongoose_1.default.connect("mongodb+srv://nguyenmit2012:HOANGHANH2703@cluster0-zrt5w.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        mongoose_1.default.connection.once("open", function () {
            console.log("MongoDB successfully connected to " + mongo);
        });
    };
    App.prototype.initSwagger = function () {
        var spec = fs_1.default.readFileSync(path.join(__dirname, "api/swagger.yaml"), "utf8");
        var swaggerDocs = js_yaml_1.default.safeLoad(spec);
        this.app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
    };
    App.prototype.initKeycloak = function () {
        this.app.use(express_session_1.default({
            secret: "mySecret",
            resave: false,
            saveUninitialized: true,
            store: keycloak_1.MyMemoryStore.Instance.memoryStore,
        }));
        this.app.use(keycloak_1.MyKeyCloak.Instance.keycloak.middleware({
            logout: "/api/v1/user/logout",
            admin: "/",
        }));
    };
    App.prototype.initRoutes = function () {
        this.app.all("*", cors_1.default());
        this.app.use("/api", routers_1.default);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map