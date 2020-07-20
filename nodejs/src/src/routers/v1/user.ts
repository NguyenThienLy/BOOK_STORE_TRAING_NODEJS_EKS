import * as express from "express";
import { CrudRouter } from "../crud";
import { Request, Response } from "../base";
import { userController } from "../../controllers";
import { queryInfoMiddleware, authInfoMiddleware } from "../../middlewares";
import { MyKeyCloak } from "../../helpers/keycloak";
import { result } from "lodash";
import {
  DJContainer,
  ITokenService,
} from "../../services";
import { TYPES } from "../../types";

export default class UserRouter extends CrudRouter<typeof userController> {
  constructor() {
    super(userController);
  }

  customRouter() {
    this.router.post(
      "/login",
      this.postLoginMiddlewares(),
      this.route(this.postLogin)
    );
    this.router.get(
      "/login",
      this.getLoginMiddlewares(),
      this.route(this.getLogin)
    );
    this.router.post(
      "/logout",
      this.postLogoutMiddlewares(),
      this.route(this.postLogout)
    );
    // this.router.get(
    //   "/logout",
    //   this.getLogoutMiddlewares(),
    //   this.route(this.getLogout)
    // );
  }

  postLoginMiddlewares(): any {
    return [queryInfoMiddleware.run()];
  }

  async postLogin(req: Request, res: Response) {
    await this.validateJSON(req.body, {
      type: "object",
      properties: {
        email: { format: "email", type: "string" },
        password: { type: "string", minLength: 6 },
      },
      additionalProperties: true,
    });

    const result = await this.controller.login({
      email: req.body.email,
      password: req.body.password,
    });

    this.onSuccess(res, result);
  }

  getLoginMiddlewares(): any {
    return [queryInfoMiddleware.run()];
  }

  async getLogin(req: Request, res: Response) {
    let tmp = "";

    if (req.session != null) {
      tmp = req.session["keycloak-token"];
    }

    let result = JSON.parse(tmp);
  
    const options = {
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
  }

  postLogoutMiddlewares(): any {
    return [queryInfoMiddleware.run(), authInfoMiddleware.run(["user"])];
  }

  async postLogout(req: Request, res: Response) {
    await this.validateJSON(req.body, {
      type: "object",
      properties: {
        token: { type: "string", minLength: 10 },
      },
      additionalProperties: true,
    });

    const result = await this.controller.logout(req.body, req.queryInfo);
    this.onSuccess(res, result);
  }

  getLogoutMiddlewares(): any {
    return [queryInfoMiddleware.run()];
  }

  async getLogout(req: Request, res: Response) {
    res.redirect("/login");
  }
}
