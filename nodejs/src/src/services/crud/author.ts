import { Mongoose } from 'mongoose';
import { CrudService } from '../crud';
import { injectable } from 'inversify';
import { Author } from '../../models';
import { ObjectId } from 'bson';
import "reflect-metadata";

@injectable()
export class AuthorService extends CrudService<typeof Author> {
    constructor() {
        super(Author);
    }

    async pushBookId(params: any) {
        const { _idOwner, _idOw } = params;

        return await Author.findOneAndUpdate(
            { _id: _idOwner },
            { $push: { books: _idOw } },
            { new: true }
        );
    }

    async pullBookId(params: any) {
        const { _idOwner, _idOw } = params;

        return await Author.findOneAndUpdate(
            { _id: _idOwner },
            { $pull: { books: _idOw } },
            { new: true }
        );
    }

    async getListBookSameAuthor(params: any) {
        const { _idAuthor, _idBook } = params;

        const item = await Author.aggregate([
            {
                $match: { _id: new ObjectId(`${_idAuthor}`) }
            },
            {
                $lookup:
                {
                    from: "book",
                    localField: "books",
                    foreignField: "_id",
                    as: "books"
                }
            },
            {
                $project: {
                    books: {
                        $filter: {
                            input: "$books",
                            as: "element",
                            cond: { $ne: ["$$element._id", new ObjectId(`${_idBook}`)] }
                        }
                    }
                }
            },
            {
                $project: {
                    books: {
                        $slice: ["$books", 3]
                    }
                }
            },
            {
                $project: {
                    books: 1,
                    _id: 0
                }
            },
            {
                $unwind: "$books"
            },
            {
                $replaceRoot: {
                    newRoot: "$books"
                }
            },
            {
                $lookup:
                {
                    from: "author",
                    localField: "author",
                    foreignField: "_id",
                    as: "author"
                },
            },
            {
                $unwind: "$author"
            },
            {
                $lookup:
                {
                    from: "category",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"
                },
            },
            {
                $unwind: "$category"
            },
            {
                $lookup:
                {
                    from: "publishing",
                    localField: "publishing",
                    foreignField: "_id",
                    as: "publishing"
                },
            },
            {
                $unwind: "$publishing"
            },
        ]);
    
        return {count: item.length, rows: item};
    }
}