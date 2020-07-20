import { CrudService } from '../crud';
import { injectable } from 'inversify';
import { Publishing } from '../../models';
import { ObjectId } from 'bson';
import "reflect-metadata";

@injectable()
export class PublishingService extends CrudService<typeof Publishing> {
    constructor() {
        super(Publishing);
    }

    async pushBookId(params: any) {
        const { _idOwner, _idOw } = params;

        return await Publishing.findOneAndUpdate(
            { _id: _idOwner },
            { $push: { books: _idOw } },
            { new: true }
        );
    }

    async pullBookId(params: any) {
        const { _idOwner, _idOw } = params;

        return await Publishing.findOneAndUpdate(
            { _id: _idOwner },
            { $pull: { books: _idOw } },
            { new: true }
        );
    }
}