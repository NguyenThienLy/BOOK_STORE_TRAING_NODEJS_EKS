import { CrudService } from '../crud';
import { injectable } from 'inversify';
import { Image } from '../../models';
import mongoose from 'mongoose';
import "reflect-metadata";

@injectable()
export class ImageService extends CrudService<typeof Image> {
    constructor() {
        super(Image);
    }
}