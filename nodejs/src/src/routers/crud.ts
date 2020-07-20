import * as express from "express";
import * as _ from "lodash";
import { BaseRouter, Request, Response } from "./base";
import { CrudController } from "../controllers/";
import { queryInfoMiddleware, authInfoMiddleware } from "../middlewares/";
import { MyKeyCloak } from "../helpers/keycloak";

export class CrudRouter<T extends CrudController<any>> extends BaseRouter {
  router: express.Router;
  controller: T;

  constructor(controller: T) {
    super();
    this.controller = controller;
    this.router = express.Router();
    this.customRouter();
    this.defaultRouter();
  }

  defaultRouter() {
    this.router.get(
      "/",
      // MyKeyCloak.Instance.keycloak.enforcer(["resource-user#view"], {
      //   resource_server_id: "nodejs-apiserver",
      // }),
      MyKeyCloak.Instance.keycloak.protect(),
      this.getListMiddlewares(),
      this.route(this.getList)
    );
    this.router.get(
      "/:_id",
      this.getItemMiddlewares(),
      this.route(this.getItem)
    );
    this.router.post("/", this.createMiddlewares(), this.route(this.create));
    this.router.put("/:_id", this.updateMiddlewares(), this.route(this.update));
    this.router.delete(
      "/:_id",
      this.deleteMiddlewares(),
      this.route(this.delete)
    );
    this.router.delete(
      "/",
      this.deleteAllMiddlewares(),
      this.route(this.deleteAll)
    );
    this.router.get("/find", this.findMiddlewares(), this.route(this.find));
  }

  customRouter() {}

  findMiddlewares(): any {
    return [queryInfoMiddleware.run()];
  }

  async find(req: Request, res: Response) {
    const result = await this.controller.getItem(req.queryInfo);
    this.onSuccess(res, result);
  }

  getListMiddlewares(): any {
    return [queryInfoMiddleware.run()];
  }

  async getList(req: Request, res: Response) {
    // console.log(req.headers["authorization"]);
    const result = await this.controller.getList(req.queryInfo);
    this.onSuccessAsList(res, result, undefined, req.queryInfo);
  }

  getItemMiddlewares(): any {
    return [queryInfoMiddleware.run()];
  }

  async getItem(req: Request, res: Response) {
    const { _id } = req.params;
    req.queryInfo = req.queryInfo ? req.queryInfo : {};
    if (req.queryInfo) {
      req.queryInfo.filter._id = _id;
    }
    const result = await this.controller.getItem(req.queryInfo);
    this.onSuccess(res, result);
  }

  createMiddlewares(): any {
    return [queryInfoMiddleware.run()];
  }

  async create(req: Request, res: Response) {
    const result = await this.controller.create(req.body, req.queryInfo);
    this.onSuccess(res, result);
  }

  updateMiddlewares(): any {
    return [queryInfoMiddleware.run()];
  }

  async update(req: Request, res: Response) {
    const { _id } = req.params;
    const result = await this.controller.update(req.body, {
      filter: { _id },
    });
    this.onSuccess(res, result);
  }

  deleteMiddlewares(): any {
    return [queryInfoMiddleware.run(), authInfoMiddleware.run(["admin"])];
  }

  async delete(req: Request, res: Response) {
    const { _id } = req.params;
    const result = await this.controller.delete({
      filter: { _id },
    });
    this.onSuccess(res, result);
  }

  deleteAllMiddlewares(): any {
    return [queryInfoMiddleware.run()];
  }

  async deleteAll(req: Request, res: Response) {
    if (_.has(req.query, "items")) {
      req.query.items = JSON.parse(req.query.items as any) || {};
    }
    await this.validateJSON(req.query, {
      type: "object",
      properties: {
        items: {
          type: "array",
          uniqueItems: true,
          minItems: 1,
          items: { type: "string" },
        },
      },
      required: ["items"],
      additionalProperties: false,
    });
    const { items } = req.query;
    const result = await this.controller.deleteAll({
      filter: { _id: { $in: items } },
    });
    this.onSuccess(res, result);
  }
}
