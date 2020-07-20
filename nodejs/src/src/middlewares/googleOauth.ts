import * as express from 'express';
import { Request, Response } from '../routers/base';
import { TYPES } from '../types';
import { DJContainer, IErrorService } from '../services';
import { BaseMiddleware } from './base';

export class GoogleOAuthMiddleware extends BaseMiddleware {

    async use(req: Request, res: Response, next: express.NextFunction, providers: string[]) {
        try {
            if ( req.user) {
                res.locals.authUser =  req.user;
                res.locals.isAuthenticated = true;
            }
            else {
                res.locals.isAuthenticated = false;
            }
             
            next();
        } catch (err) {
            throw DJContainer.get<IErrorService>(TYPES.IErrorService).auth.unauthonized();
        }
    }
}