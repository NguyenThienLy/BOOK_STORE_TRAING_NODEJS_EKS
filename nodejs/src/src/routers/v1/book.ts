import { CrudRouter } from "../crud";
import { Request, Response } from "../base";
import { bookController } from "../../controllers";
import { queryInfoMiddleware, authInfoMiddleware } from "../../middlewares/";
import { MyKeyCloak } from "../../helpers/keycloak";

const Multer = require("multer");

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 1 * 1024 * 1024, // no larger than 1mb
  },
});

export default class BookRouter extends CrudRouter<typeof bookController> {
  constructor() {
    super(bookController);
  }

  customRouter() {
    this.router.post(
      "/",
      MyKeyCloak.Instance.keycloak.enforcer(["resource-admin:view", "resource-admin:write"], {
        resource_server_id: "nodejs-apiserver",
      }),
      this.createMiddlewares(),
      this.route(this.create)
    );
    this.router.put(
      "/",
      MyKeyCloak.Instance.keycloak.enforcer(["resource-admin:view", "resource-admin:write"], {
        resource_server_id: "nodejs-apiserver",
      }),
      this.updateMiddlewares(),
      this.route(this.update)
    );
  }

  createMiddlewares(): any {
    return [
      multer.array("subImgs"),
      authInfoMiddleware.run(["user"]),
      queryInfoMiddleware.run(),
    ];
  }

  async create(req: Request, res: Response) {
    await this.validateJSON(req.body, {
      type: "object",
      properties: {
        title: { type: "string", minLength: 10 },
        category: { type: "string" },
        author: { type: "string" },
        publishing: { type: "string" },
        price: { type: "string" },
        quantity: { type: "string" },
        description: { type: "string", minLength: 10 },
      },
      additionalProperties: true,
    });

    const result = await this.controller.create(
      { files: req.files, body: req.body },
      req.queryInfo
    );

    this.onSuccess(res, result);
  }

  updateMiddlewares(): any {
    return [
      multer.array("subImgs"),
      authInfoMiddleware.run(["user"]),
      queryInfoMiddleware.run(),
    ];
  }

  async update(req: Request, res: Response) {
    const { _id } = req.params;

    await this.validateJSON(req.body, {
      type: "object",
      properties: {
        title: { type: "string", minLength: 8, maxLength: 30 },
        category: { type: "string" },
        oldCategory: { type: "string" },
        author: { type: "string" },
        oldAuthor: { type: "string" },
        publishing: { type: "string" },
        oldPublishing: { type: "string" },
        price: { type: "string" },
        quantity: { type: "string" },
        description: { type: "string", minLength: 8 },
      },
      additionalProperties: true,
    });

    const result = await this.controller.update(
      { files: req.files, body: req.body },
      {
        filter: { _id },
      }
    );

    this.onSuccess(res, result);
  }
}
