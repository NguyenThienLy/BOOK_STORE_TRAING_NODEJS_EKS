import { BaseError } from './base'

export class RouterException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `router_exception_${key}`,
            message
        })
    }
}

export class RouterErrorService {
    private static _instance: RouterErrorService;

    private constructor() {
        //...
    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    requestDataInvalid(message: string) {
        return new RouterException('data_invalid', message, 403)
    }
    somethingWentWrong() {
        return new RouterException('something_went_wrong', "Something went wrong!")
    }
    googleMapApiWrong(error: any) {
        return new RouterException('google_map_api', error)
    }
}