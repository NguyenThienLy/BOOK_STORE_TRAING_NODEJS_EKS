import { Category } from './../../models/category';
import { CrudController, } from '../crud';
import { ICrudOption } from '../../services';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import {
    DJContainer,
    BookService,
    AuthorService,
    CategoryService,
    PublishingService,
    IFireBaseService
} from '../../services';
import { TYPES } from '../../types';

export class BookController extends CrudController<any>{
    // private _authorService: AuthorService;
    // private _bookService: BookService;
    // private _categoryService: CategoryService;
    // private _publishingService: PublishingService;
    // private _iFireBaseService: IFireBaseService;

    // constructor(@inject(TYPES.AuthorService) authorService: AuthorService,
    //     @inject(TYPES.BookService) bookService: BookService,
    //     @inject(TYPES.CategoryService) categoryService: CategoryService,
    //     @inject(TYPES.PublishingService) publishingService: PublishingService,
    //     @inject(TYPES.IFireBaseService) iFireBaseService: IFireBaseService
    // ) {
    //     super(bookService);

    //     this._authorService = authorService;
    //     this._bookService = bookService;
    //     this._categoryService = categoryService;
    //     this._publishingService = publishingService;
    //     this._iFireBaseService = iFireBaseService;
    // }


    constructor() {
        super(DJContainer.get<BookService>(TYPES.BookService));
    }

    async pushBookIdInAuthor(params: any) {
        const { _idOwner, _idOw } = params;

        DJContainer.get<AuthorService>(TYPES.AuthorService).pushBookId({
            _idOwner,
            _idOw
        });
    }

    async pullBookIdInAuthor(params: any) {
        const { _idOwner, _idOw } = params;

        DJContainer.get<AuthorService>(TYPES.AuthorService).pullBookId({
            _idOwner,
            _idOw
        });
    }

    async pushBookIdInCategory(params: any) {
        const { _idOwner, _idOw } = params;

        DJContainer.get<CategoryService>(TYPES.CategoryService).pushBookId({
            _idOwner,
            _idOw
        });
    }

    async pullBookIdInCategory(params: any) {
        const { _idOwner, _idOw } = params;

        DJContainer.get<CategoryService>(TYPES.CategoryService).pullBookId({
            _idOwner,
            _idOw
        });
    }

    async pushBookIdInPublishing(params: any) {
        const { _idOwner, _idOw } = params;

        DJContainer.get<PublishingService>(TYPES.PublishingService).pushBookId({
            _idOwner,
            _idOw
        });
    }

    async pullBookIdInPublishing(params: any) {
        const { _idOwner, _idOw } = params;

        DJContainer.get<PublishingService>(TYPES.PublishingService).pullBookId({
            _idOwner,
            _idOw
        });
    }

    async uploadImageToFireBase(params: any) {
        return await DJContainer.get<IFireBaseService>(TYPES.IFireBaseService).updateImage(params);
    }

    async create(params: any, option?: ICrudOption) {
        const { files, body } = params;

        let item = await DJContainer.get<BookService>(TYPES.BookService).create({
            ...body,
            slug: body.title.replace(/ /g, "-")
        }, option);

        if (item) {
            this.pushBookIdInAuthor({
                _idOwner: item.author,
                _idOw: item._id
            });

            this.pushBookIdInCategory({
                _idOwner: item.category,
                _idOw: item._id
            });

            this.pushBookIdInPublishing({
                _idOwner: item.publishing,
                _idOw: item._id
            });

            if (files.length > 0) {
                const listUrl: Array<string> = await this.uploadImageToFireBase({
                    files,
                    _id: item._id
                })

                if (listUrl.length > 0) {
                    item = await DJContainer.get<BookService>(TYPES.BookService).update(
                        {
                            ...item._doc,
                            mainImg: listUrl[0],
                            subImgs: listUrl
                        },
                        {
                            filter: {
                                _id: item._id
                            }
                        }
                    );
                }
            }
        }

        return await await DJContainer.get<BookService>(TYPES.BookService).getItem({
            ...option,
            filter: {
                _id: item._id
            }
        });
    }

    async update(params: any, option?: ICrudOption) {
        const { files, body } = params;

        let item = await DJContainer.get<BookService>(TYPES.BookService).update({
            ...body,
            slug: body.title.replace(/ /g, "-")
        }, option);

        if (item) {

            if (item.author !== body.oldAuthor) {
                this.pullBookIdInAuthor({
                    _idOwner: body.oldAuthor,
                    _idOw: item._id
                });

                this.pushBookIdInAuthor({
                    _idOwner: item.author,
                    _idOw: item._id
                });
            }

            if (item.category !== body.oldCategory) {
                this.pullBookIdInCategory({
                    _idOwner: body.oldCategory,
                    _idOw: item._id
                });

                this.pushBookIdInCategory({
                    _idOwner: item.category,
                    _idOw: item._id
                });
            }

            if (item.publishing !== body.oldPublishing) {
                this.pullBookIdInPublishing({
                    _idOwner: body.oldPublishing,
                    _idOw: item._id
                });

                this.pushBookIdInPublishing({
                    _idOwner: item.publishing,
                    _idOw: item._id
                });
            }

            if (files.length > 0) {
                const listUrl: Array<string> = await this.uploadImageToFireBase({
                    files,
                    _id: item._id
                })

                if (listUrl.length > 0) {

                    item = await this.service.update(
                        {
                            ...item.docs,
                            mainImg: listUrl[0],
                            subImgs: listUrl
                        },
                        {
                            ...option,
                            filter: {
                                _id: item._id
                            }
                        }
                    );
                }
            }
        }

        return item;
    }

    async delete(option?: ICrudOption) {
        const item = await DJContainer.get<BookService>(TYPES.BookService).delete(option);

        if (item) {
            this.pullBookIdInAuthor({ _idOwner: item.author, _idOw: item._id });
            this.pullBookIdInCategory({ _idOwner: item.category, _idOw: item._id });
            this.pullBookIdInPublishing({ _idOwner: item.publishing, _idOw: item._id });
        }

        return item;
    }
}