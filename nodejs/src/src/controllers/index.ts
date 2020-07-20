import { TYPES } from '../types';
import { CrudController } from './crud';
import { UserController } from './crud/user';
import { BookController } from './crud/book';
import { ImageController } from './crud/image';
import { AuthorController } from './crud/author';
import { PublishingController } from './crud/publishing';
import { CategoryController } from './crud/category';

const userController = new UserController();
const bookController = new BookController();
const imageController = new ImageController();
const authorController = new AuthorController();
const publishingController = new PublishingController();
const categoryController = new CategoryController();

export {
    CrudController,
    userController,
    bookController,
    imageController,
    authorController,
    publishingController,
    categoryController
}
