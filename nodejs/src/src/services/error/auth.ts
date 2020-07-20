import { BaseError } from './base';

export class AuthException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `auth_exception_${key}`,
            message
        })
    }
}

export class AuthErrorService {
    private static _instance: AuthErrorService;

    private constructor(){
        
    }

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }

    unauthonized(){
        return new AuthException('unauthornized',"unauthornized",401);
    }

    permissionDenied(){
        return new AuthException('permistion_denied',"Your permission denied");
    }

    badToken(){
        return new AuthException('bad_token',"Bad token");
    }
}