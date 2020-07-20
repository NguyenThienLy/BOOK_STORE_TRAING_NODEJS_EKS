import { Model, BaseModel, DocumentQuery } from '../models';
import { TYPES } from '../types';
import { DJContainer, IErrorService } from '../services';
import { config } from '../config';
import { BaseError } from './error/base';

export interface ICrudOption {
    filter?: any
    limit?: number
    offset?: number
    fields?: string[]
    populates?: any
    lean?: boolean
    order?: any
}

export interface ICrudExecOption {
    allowNull?: boolean
}

export interface ICrudService {
    exec(promise: Promise<any> | any, option: ICrudExecOption): any;
    getList(option: ICrudOption): any;
    getItem(option: ICrudOption): any;
    create(params: any, option: ICrudOption): any;
    update(params: any, option: ICrudOption): any;
    delete(option?: ICrudOption): any;
    deleteAll(option?: ICrudOption): any;
    applyQueryOptions(query: DocumentQuery, option: ICrudOption): any;
}

export class CrudService<T extends Model>  {
    constructor(model: T) {
        this.model = model
    }
    model: T;

    async exec(promise: Promise<any> | any, option: ICrudExecOption = { allowNull: true }) {
        try {
            let result;
            if (promise.hasOwnProperty("exec")) {
                result = await promise.exec();
            } else {
                result = await promise;
            }
            if ((result === undefined || result === null) && !option.allowNull)
                throw DJContainer.get<IErrorService>(TYPES.IErrorService).database.recordNotFound()
            return result;
        } catch (err) {
            if (err instanceof BaseError) throw err
            if (config.server.debug) {
                if (err.errors && err.errors[0]) {
                    throw DJContainer.get<IErrorService>(TYPES.IErrorService).database.queryFail(err.errors[0].message)
                } else {
                    throw DJContainer.get<IErrorService>(TYPES.IErrorService).database.queryFail(err.message)
                }
            } else {
                throw err
            }
        }
    }

    async getList(option: ICrudOption = {
        filter: {},
        limit: 10,
        offset: 0
    }) {
        let query = this.model.find();
        option.limit = Number(option.limit);
        query = this.applyQueryOptions(query, option);
        query.setOptions({
            toJson: { virtual: true }
        });

        const rows = await this.exec(query);


        let query1 = this.model.find();
        query1 = this.applyQueryOptions(query1, option = {
            ...option,
            limit: 0,
            offset: 0
        });
        query1.setOptions({
            toJson: { virtual: true }
        });
        const count = await query1.countDocuments();

        return { count, rows };
    }

    async getItem(option?: ICrudOption) {
        let query = this.model.findOne();
        query = this.applyQueryOptions(query, option)
        return await this.exec(query, { allowNull: true })
    }

    async create(params: any, option: ICrudOption = {}) {   
        const query = this.model.create(params)
        return await this.exec(query);
    }

    async update(params: any, option: ICrudOption = {}) {
        const query = this.model.findOneAndUpdate(option.filter, params, { new: true });
        return await this.exec(query);
    }

    async delete(option?: ICrudOption) {
        let query = this.model.findOne()
        query = this.applyQueryOptions(query, option)
        const item = await this.exec(query, { allowNull: false })
        return this.exec(item.remove())
    }

    async deleteAll(option: ICrudOption = {
        filter: {}
    }) {
        let query = this.model.deleteMany(option.filter)
        query = this.applyQueryOptions(query, option)
        return await this.exec(query)
    }

    applyQueryOptions(query: DocumentQuery, option: ICrudOption = {}) {
        if (option.filter) query.where(option.filter)
        if (option.limit) query.limit(option.limit)
        if (option.offset) query.skip(option.offset)
        if (option.fields) query.select(option.fields)
        if (option.order) query.sort(option.order)
        if (option.populates) {
            for (const populate of option.populates) {
                query.populate(populate)
            }
        }
        if (option.lean) query.lean()
        return query
    }
}