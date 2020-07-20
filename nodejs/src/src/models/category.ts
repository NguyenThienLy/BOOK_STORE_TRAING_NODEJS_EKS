import * as mongoose from 'mongoose';
import { BaseModel } from './base';

const Schema = mongoose.Schema;

export type CategoryModel = BaseModel & {
  name: string,
  slug: string,
  books: Array<string>,
  description: string
}

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  books: { 
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
    default: [] 
  },
  description: {
    type: String,
  }
}, {
  timestamps: true,
  collection: 'category'
})

export let Category: mongoose.Model<CategoryModel> = mongoose.model('Category', CategorySchema);