import { BaseError } from './error/base';
import { UserErrorService } from './error/user';
import { FirebaseErrorService } from './error/firebase';
import { RouterErrorService } from './error/router';
import { AuthErrorService } from './error/auth';
import { DatabaseErrorService } from './error/database';
import { injectable}  from 'inversify';
import "reflect-metadata";

export interface IErrorService {
    user: UserErrorService;
    firebase: FirebaseErrorService;
    router: RouterErrorService;
    auth: AuthErrorService;
    database: DatabaseErrorService;
}

@injectable()
export class ErrorService implements IErrorService{
    user: UserErrorService;
    firebase: FirebaseErrorService;
    router: RouterErrorService;
    auth: AuthErrorService;
    database: DatabaseErrorService;

    constructor() {
        this.user = UserErrorService.Instance;
        this.firebase = FirebaseErrorService.Instance;
        this.router = RouterErrorService.Instance;
        this.auth = AuthErrorService.Instance;
        this.database = DatabaseErrorService.Instance;
    }
}