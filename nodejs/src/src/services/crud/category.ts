import { CrudService } from '../crud';
import { injectable } from 'inversify';
import { Category } from '../../models';
import { ObjectId } from 'bson';
import mongoose from 'mongoose';
import "reflect-metadata";

@injectable()
export class CategoryService extends CrudService<typeof Category> {
    constructor() {
        super(Category);
    }

    async pushBookId(params: any) {
        const { _idOwner, _idOw } = params;

        return await Category.findOneAndUpdate(
            { _id: _idOwner },
            { $push: { books: _idOw } },
            { new: true }
        );
    }

    async pullBookId(params: any) {
        const { _idOwner, _idOw } = params;

        return await Category.findOneAndUpdate(
            { _id: _idOwner },
            { $pull: { books: _idOw } },
            { new: true }
        );
    }

    async getListBookSameCategory(params: any) {
        const { _idCategory, _idBook } = params;

        const item = await Category.aggregate([
            {
                $match: { _id: new ObjectId(`${_idCategory}`) }
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

        return { count: item.length, rows: item };
    }
}