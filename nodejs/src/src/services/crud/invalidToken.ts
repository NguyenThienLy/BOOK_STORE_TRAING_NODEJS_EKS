import { CrudService } from '../crud';
import { injectable } from 'inversify';
import { InvalidToken } from '../../models';
import mongoose from 'mongoose';
import "reflect-metadata";

@injectable()
export class InvalidTokenService extends CrudService<typeof InvalidToken> {
    constructor() {
        super(InvalidToken);
    }
}