import { CrudController } from '../crud'
import { 
    DJContainer,
    CategoryService
} from '../../services';
import { TYPES } from '../../types';

export class CategoryController extends CrudController<any>{
    constructor() {
        super(DJContainer.get<CategoryService>(TYPES.CategoryService));
    }

    async getListBookSameCategory(params: any) {

        return DJContainer.get<CategoryService>(TYPES.CategoryService).getListBookSameCategory(params);
    }
}