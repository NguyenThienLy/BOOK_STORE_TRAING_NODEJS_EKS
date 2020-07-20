import * as mongoose from 'mongoose';
import { BaseModel } from './base';

const Schema = mongoose.Schema;

export type ImageModel = BaseModel & {
  link: string,
  linkThumbnail: string,
  isMain: boolean, 
}

const ImageSchema = new Schema({
  link: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  linkThumbnail: {
    type: String,
    unique: true,
    index: true
  },
  isMain: {
    type: Boolean,
    required: true,
  }
}, {
  timestamps: true,
  collection: 'image'
})

export let Image: mongoose.Model<ImageModel> = mongoose.model('Image', ImageSchema);