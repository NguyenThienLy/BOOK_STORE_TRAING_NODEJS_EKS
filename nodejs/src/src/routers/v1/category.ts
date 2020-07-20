import { CrudRouter } from '../crud';
import { Request, Response } from '../base';
import { categoryController } from '../../controllers';
import { queryInfoMiddleware, multerMiddleware } from '../../middlewares/';

export default class CategoryRouter extends CrudRouter<typeof categoryController>{
   
    constructor() {
        super(categoryController);
    }

    customRouter() {
        this.router.get('/:_idCategory/:_idBook', this.getListBookSameCategoryMiddlewares(), this.route(this.getListBookSameCategory));
    }

    getListBookSameCategoryMiddlewares(): any {
        return [queryInfoMiddleware.run()]
    }

    async getListBookSameCategory(req: Request, res: Response) {
        const { _idCategory, _idBook } = req.params;

        const result = await this.controller.getListBookSameCategory({_idCategory, _idBook});

            this.onSuccessAsList(res, result, undefined, req.queryInfo)
    }
}
