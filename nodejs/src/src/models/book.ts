import * as mongoose from 'mongoose';
import { BaseModel } from './base';

const Schema = mongoose.Schema;

export type BookModel = BaseModel & {
    title: string,
    slug: string,
    author: string
    publishing: string
    category: string,
    mainImg: string,
    subImgs: Array<string>,
    price: number,
    quantity: number,
    description: string
}

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    slug: {
        type: String,
        unique: true,
        index: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    publishing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publishing',
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    mainImg: {
        type: String,
        default: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    subImgs: {
        type: [{ type: String }],
        default: []
    },
    price: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 1
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: 'book'
})

export let Book: mongoose.Model<BookModel> = mongoose.model('Book', BookSchema);