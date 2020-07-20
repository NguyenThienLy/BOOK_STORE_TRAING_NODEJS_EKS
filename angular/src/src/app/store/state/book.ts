import { IBook } from '../../models/book';

export interface IBookState {
  books: IBook[];
  selectedBook: IBook;
  newBook: IBook;
  isCreateSucess: null | true | false;
  status: 'null' | 'loading' | 'loaded';
}

export const initialBookState: IBookState = {
  books: null,
  selectedBook: null,
  newBook: null,
  isCreateSucess: null,
  status: 'null'
};
