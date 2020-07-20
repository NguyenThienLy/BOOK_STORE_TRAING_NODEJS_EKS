import { CrudService } from '../crud';
import { injectable, decorate } from 'inversify';
import { User, UserModel } from '../../models';
import "reflect-metadata";

@injectable()
export class UserService extends CrudService<typeof User> {
    constructor() {
        super(User);
    }
}