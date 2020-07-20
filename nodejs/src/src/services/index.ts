import { TYPES } from '../types';
import { Container } from 'inversify';

import { CrudService, ICrudExecOption, ICrudOption } from './crud';

import { BookService } from './crud/book';
import { UserService } from './crud/user';
import { ImageService } from './crud/image';
import { AuthorService } from './crud/author';
import { PublishingService } from './crud/publishing';
import { CategoryService } from './crud/category';
import { InvalidTokenService } from './crud/invalidToken';
import { ErrorService, IErrorService} from './error';
import { TokenService, ITokenService } from './token';
import { UtilService, IUtilService } from './util';
import { FireBaseService, IFireBaseService } from './firebase';

const DJContainer = new Container();

DJContainer.bind<IErrorService>(TYPES.IErrorService).to(ErrorService);
DJContainer.bind<ITokenService>(TYPES.ITokenService).to(TokenService);
DJContainer.bind<IUtilService>(TYPES.IUtilService).to(UtilService);
DJContainer.bind<IFireBaseService>(TYPES.IFireBaseService).to(FireBaseService);
DJContainer.bind<UserService>(TYPES.UserService).toConstantValue(new UserService());
DJContainer.bind<BookService>(TYPES.BookService).toConstantValue(new BookService());
DJContainer.bind<ImageService>(TYPES.ImageService).toConstantValue(new ImageService());
DJContainer.bind<AuthorService>(TYPES.AuthorService).toConstantValue(new AuthorService());
DJContainer.bind<PublishingService>(TYPES.PublishingService).toConstantValue(new PublishingService());
DJContainer.bind<CategoryService>(TYPES.CategoryService).toConstantValue(new CategoryService());
DJContainer.bind<InvalidTokenService>(TYPES.InvalidTokenService).toConstantValue(new InvalidTokenService());

export {
    DJContainer,
    CrudService, 
    ICrudExecOption, 
    ICrudOption,
    UserService,
    BookService,
    ImageService,
    AuthorService,
    PublishingService,
    CategoryService,
    InvalidTokenService,
    IErrorService,
    ITokenService,
    IUtilService,
    IFireBaseService
}