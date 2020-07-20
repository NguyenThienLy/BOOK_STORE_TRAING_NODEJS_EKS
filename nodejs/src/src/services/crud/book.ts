import { CrudService } from '../crud';
import { injectable } from 'inversify';
import { Book } from '../../models';
import mongoose from 'mongoose';
import "reflect-metadata";

@injectable()
export class BookService extends CrudService<typeof Book> {
    constructor() {
        super(Book);
    }
}