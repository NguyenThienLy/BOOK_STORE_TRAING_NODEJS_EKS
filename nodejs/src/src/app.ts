import fs from "fs";
import * as path from "path";

import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "./config";
import api from "./routers/";
import passport from "passport";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import jsyaml from "js-yaml";
import session from "express-session";
import Keycloak from "keycloak-connect";

import { MyKeyCloak, MyMemoryStore } from "./helpers/keycloak";

class App {
  public app: any;
  development: boolean;
  testing: boolean;
  production: boolean;

  constructor() {
    this.development = process.env.NODE_ENV === "development" ? true : false;
    this.testing = process.env.NODE_ENV === "testing" ? true : false;
    this.production = process.env.NODE_ENV === "production" ? true : false;
    this.app = express();
    this.initSwagger();
    this.initKeycloak();
    this.initPassport();
    this.initConfig();
    this.initMongoConfig();
    this.initRoutes();
    this.initTracking();
  }

  private initConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cookieParser());
  }

  private initPassport() {
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
  }

  private initTracking() {
    this.app.use(morgan("dev"));
  }

  private initMongoConfig() {
    mongoose.Promise = global.Promise;
    let mongo = process.env.DEFAULT_DB;

    if (config.database.mongo) {
      mongo = config.database.mongo;
    }

    mongoose.connect(
      "mongodb+srv://nguyenmit2012:HOANGHANH2703@cluster0-zrt5w.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );

    mongoose.connection.once("open", () => {
      console.log(`MongoDB successfully connected to ${mongo}`);
    });
  }

  private initSwagger() {
    const spec = fs.readFileSync(
      path.join(__dirname, "api/swagger.yaml"),
      "utf8"
    );
    const swaggerDocs = jsyaml.safeLoad(spec);

    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocs as any)
    );
  }

  private initKeycloak() {
    this.app.use(
      session({
        secret: "mySecret",
        resave: false,
        saveUninitialized: true,
        store: MyMemoryStore.Instance.memoryStore,
      })
    );

    this.app.use(
      MyKeyCloak.Instance.keycloak.middleware({
        logout: "/api/v1/user/logout",
        admin: "/",
      })
    );

  }

  private initRoutes() {
    this.app.all("*", cors());
    this.app.use("/api", api);
  }
}

export default new App().app;
