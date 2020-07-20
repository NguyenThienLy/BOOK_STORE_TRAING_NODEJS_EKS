import { CrudRouter } from '../crud';
import { Request, Response } from '../base';
import { authorController } from '../../controllers';
import { queryInfoMiddleware, multerMiddleware } from '../../middlewares/';

export default class AuthorRouter extends CrudRouter<typeof authorController>{

    constructor() {
        super(authorController);
    }

    customRouter() {
        this.router.get('/:_idAuthor/:_idBook', this.getListBookSameAuthorMiddlewares(), this.route(this.getListBookSameAuthor));
    }

    getListBookSameAuthorMiddlewares(): any {
        return [queryInfoMiddleware.run()]
    }

    async getListBookSameAuthor(req: Request, res: Response) {
        const { _idAuthor, _idBook } = req.params;

        const result = await this.controller.getListBookSameAuthor({_idAuthor, _idBook});

            this.onSuccessAsList(res, result, undefined, req.queryInfo)
    }
}
