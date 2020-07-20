import { BaseError } from './base';

export class FirebaseException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `firebase_exception_${key}`,
            message
        })
    }
}

export class FirebaseErrorService {
    private static _instance: FirebaseErrorService;

    private constructor() {
        //...
    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    requestFireBaseInvalid(message: string) {
        return new FirebaseException('upload_image_fail', message)
    }
}