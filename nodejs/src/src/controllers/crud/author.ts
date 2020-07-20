import { CrudController } from '../crud'
import {
    DJContainer,
    AuthorService
} from '../../services';
import { TYPES } from '../../types';

export class AuthorController extends CrudController<any>{
    constructor() {
        super(DJContainer.get<AuthorService>(TYPES.AuthorService));
    }

    async getListBookSameAuthor(params: any) {

        return DJContainer.get<AuthorService>(TYPES.AuthorService).getListBookSameAuthor(params);
    }
}