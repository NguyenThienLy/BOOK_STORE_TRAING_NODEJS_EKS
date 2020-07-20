import * as mongoose from 'mongoose';
import { BaseModel } from './base';

const Schema = mongoose.Schema;

export type AuthorModel = BaseModel & {
  name: string,
  books: Array<string>,
  slug: string
}

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  books: { 
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
    default: [] 
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    index: true
  }
}, {
  timestamps: true,
  collection: 'author'
})

export let Author: mongoose.Model<AuthorModel> = mongoose.model('Author', AuthorSchema);