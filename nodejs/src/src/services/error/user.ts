import { BaseError } from './base';

export class UserException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `user_exception_${key}`,
            message
        })
    }
}

export class UserErrorService {
    private static _instance: UserErrorService;

    private constructor() {

    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    loginFail(){
        return new UserException('info_login_do_not_match',"Email or Password don't match",400);
    }
}