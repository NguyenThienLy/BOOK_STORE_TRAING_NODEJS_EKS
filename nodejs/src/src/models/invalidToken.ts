import * as mongoose from 'mongoose';
import { BaseModel } from './base';

const Schema = mongoose.Schema;

export type InvalidTokenModel = BaseModel & {
  token: string 
}

const InvalidTokenSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
    index: true
  }
}, {
  timestamps: true,
  collection: 'invalidToken'
})

export let InvalidToken: mongoose.Model<InvalidTokenModel> = mongoose.model('InvalidToken', InvalidTokenSchema);