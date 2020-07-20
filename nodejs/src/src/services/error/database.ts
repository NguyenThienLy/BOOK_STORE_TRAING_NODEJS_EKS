import { BaseError } from './base';

class DatabaseException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 500,
            type: `database_exception_${key}`,
            message
        })
    }
}

export class DatabaseErrorService {
    private static _instance: DatabaseErrorService;

    private constructor() {

    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }
    recordNotFound() {
        return new DatabaseException('record_not_found', 'Record Not Found')
    }
    queryFail(message: string = "Query Fail") {
        return new DatabaseException('query_fail', message)
    }
}