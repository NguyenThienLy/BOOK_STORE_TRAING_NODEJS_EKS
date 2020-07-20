import * as express from 'express';
import { Request, Response } from '../routers/base';
import { TYPES } from '../types';
import {
  DJContainer,
  IErrorService,
  ITokenService,
  UserService,
  InvalidTokenService
} from '../services';
import { BaseMiddleware } from './base';
import { isUndefined } from 'util';
import { UserModel } from '../models';

export class AuthSessionMiddleware extends BaseMiddleware {
  async use(req: Request, res: Response, next: express.NextFunction, providers: string[]) {
    try {
        const authorization = req.cookies.token;

        if (!authorization) throw DJContainer.get<IErrorService>(TYPES.IErrorService).auth.unauthonized();

        // bearer
        const token: string = authorization.split(' ')[1];

        const item = await DJContainer.get<InvalidTokenService>(TYPES.InvalidTokenService).getItem({
            filter: { token }
        });

        if (!item) {
            const options = {
                issuer: "",
                subject: "",
                audience: "http://localhost:4200",
                expiresIn: "15d",
                algorithm: "RS256"
            };

            const tokenPayload: any = await DJContainer.get<ITokenService>(TYPES.ITokenService).verify(token as string, options);

            if (providers.indexOf(tokenPayload.role) !== -1 && tokenPayload.role === providers[0]) {
                const user: UserModel = await DJContainer.get<UserService>(TYPES.UserService).getItem({ filter: { _id: tokenPayload._id } });
                req.authInfo = { user };
            }
            else {
                throw DJContainer.get<IErrorService>(TYPES.IErrorService).auth.permissionDenied();
            }

            next();
        }
        else {
            throw DJContainer.get<IErrorService>(TYPES.IErrorService).auth.permissionDenied();
        }

    } catch (err) {
        throw DJContainer.get<IErrorService>(TYPES.IErrorService).auth.unauthonized();
    }
}
}