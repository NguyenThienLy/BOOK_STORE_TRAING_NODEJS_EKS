import * as jwt from 'jsonwebtoken';
import { injectable, inject } from 'inversify';
import "reflect-metadata";
import { IErrorService } from './error';
import { TYPES } from "../types";
import { ErrorService } from './error';
import * as fs from 'fs';
import * as path from 'path';

const privateKEY = `
-----BEGIN RSA PRIVATE KEY-----
MIIBPAIBAAJBAKjSE3dpSdlYopImQOSGAKNSusljgehLF7bQTuUzOZHm6GngI3z6
5UboCrPPhjFMsJclXl6iCudWC/HDXNPLS18CAwEAAQJBAKXEohi+6iThQ8D+jvnW
GwpEUeUuMIFIOyDnqpCknAMGgSv5OFcEe2DSux/o4ZFQfudYNnCck3bWcy2FQkwx
SAECIQDP5UbSrUxqDEV4m6NpNJ48mD0Zu7esfemCSPATOXO1/wIhAM/iL8RVva8l
cnerUKR1CQateIH1tkl1GJt3NV9t1iqhAiBn67xTY71m5Wt0tpgg5uSSdadVTbiq
yOYI8lzPv1BQEQIhAJJMkmVQGiAq8HX7oNM8ck+6wXZkoBbuS5UNvggc2n5BAiEA
nGUTaB1/DJRWubqvPEJH+LKaJtmXKB5PiYvZvBPnNg4=
-----END RSA PRIVATE KEY-----
`;

const publicKEY = `
-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKjSE3dpSdlYopImQOSGAKNSusljgehL
F7bQTuUzOZHm6GngI3z65UboCrPPhjFMsJclXl6iCudWC/HDXNPLS18CAwEAAQ==
-----END PUBLIC KEY-----
`;

export interface ITokenService {
    sign(payload: object, Options: any): any;
    verify(token: string, Options: any): any;
    decode(token: string): any;
}

@injectable()
export class TokenService implements ITokenService {
    private _iErrorService: IErrorService;

    constructor(@inject(TYPES.IErrorService) iErrorService: IErrorService) {
        this._iErrorService = iErrorService;
    }

    async sign(payload: object, Options: any) {
        let signOptions: object = {
            issuer: Options.issuer,
            subject: Options.subject,
            audience: Options.audience,
            expiresIn: Options.expiresIn,
            algorithm: "RS256"
        };

        return jwt.sign(payload, privateKEY, signOptions);
    }

    async verify(token: string, Options: any) {
        let verifyOptions = {
            issuer: Options.issuer,
            subject: Options.subject,
            audience: Options.audience,
            expiresIn: Options.expiresIn,
            algorithm: "RS256"
        };

        try {
            return jwt.verify(token, publicKEY, verifyOptions);
        } catch (err) {
            throw this._iErrorService.auth.badToken();
        }
    }

    async decode(token: string) {
        return jwt.decode(token, { complete: true });
    }
}