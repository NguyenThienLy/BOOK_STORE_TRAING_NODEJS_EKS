import * as express from 'express';
import { Request, Response } from '../routers/base';
import { BaseMiddleware } from './base';
import * as _ from 'lodash';
import { config } from '../config';

export class QueryInfoMiddleware extends BaseMiddleware {
    async use(req: Request, res: Response, next: express.NextFunction) {
        const filter = this._parseFilter(req)
        const order = this._parseOrder(req)
        const page = parseInt((req.query['page'] as any) || 1)
        const limit = Number(req.query['limit'] || config.database.defaultPageSize)
        const offset = Number(req.query['offset']) || (page - 1) * limit
        const fields = this._parseFields(req)
        const populates = this._parsePopulates(req)
        req.queryInfo = {
            filter,
            limit,
            offset,
            fields,
            populates,
            order
        }
        next()
    }

    _parseFilter(req: Request): any {
        let filter = req.query['filter'] as any;
        try {
            filter = JSON.parse(filter)
        } catch (ignore) {
            filter = undefined
        }
        return filter || {}
    }

    _parseOrder(req: Request): any {
        let order = req.query['order'] as any;
        try {
            order = JSON.parse(order)
        } catch (ignore) {
            order = undefined
        }
        return order || { 'updatedAt': -1 }
    }

    _parseFields(req: Request) {
        let fields = req.query['fields'] as any;
        try {
            fields = JSON.parse(fields)
        } catch (ignore) {
            fields = undefined
        }
        return fields;
    }
    
    _parsePopulates(req: Request) {
        let populates = req.query['populates'] as any;
        try {
            populates = JSON.parse(populates);
        } catch (ignore) {
            populates = undefined;
        }
        return populates;
    }
}
