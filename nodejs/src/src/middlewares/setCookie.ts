import * as express from 'express';
import { Request, Response } from '../routers/base';
import { BaseMiddleware } from './base';
import { isUndefined } from 'util';

export class SetCookieMiddleware extends BaseMiddleware {
  async use(req: Request, res: Response, next: express.NextFunction, providers: string[]) {
    if (!isUndefined(res.locals.authUser) && req.cookies.userId === 'undefined') {
      res.cookie("userId", res.locals.authUser._id, { secure: false });
    }
    if (isUndefined(res.locals.authUser && req.cookies.userId !== 'undefined')) {
      res.cookie("userId", undefined);
      req.cookies.userId = undefined;
    }

    next();
  }
}