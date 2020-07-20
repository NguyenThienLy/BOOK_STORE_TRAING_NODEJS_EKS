import * as mongoose from 'mongoose';

export type BaseModel = mongoose.Document & {
    createAt: Date,
    status: "active" | "deactive",
    updateAt: Date
}

export type Model = mongoose.Model<BaseModel>;
export type DocumentQuery = mongoose.DocumentQuery<any, any>;