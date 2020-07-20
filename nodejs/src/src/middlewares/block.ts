import * as express from 'express';
import { Request, Response } from '../routers/base';
import { TYPES } from '../types';
import { DJContainer, IErrorService } from '../services';
import { BaseMiddleware } from './base';

export class BlockMiddleware extends BaseMiddleware {

    async use(req: Request, res: Response, next: express.NextFunction, providers: string[]) {
        throw DJContainer.get<IErrorService>(TYPES.IErrorService).auth.permissionDenied();
    }
}