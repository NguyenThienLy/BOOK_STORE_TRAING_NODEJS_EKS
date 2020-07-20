import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app';
import { IBookState } from '../state/book';

const selectBooks = (state: IAppState) => state.books;

export const selectBookList = createSelector(
  selectBooks,
  (state: IBookState) => state.books
);

export const selectSelectedBook = createSelector(
  selectBooks,
  (state: IBookState) => state.selectedBook
);

export const selectNewBook = createSelector(
  selectBooks,
  (state: IBookState) => state.newBook
);

export const selectStatusBook = createSelector(
  selectBooks,
  (state: IBookState) => state.status
);

export const selectStatusCreateBook = createSelector(
  selectBooks,
  (state: IBookState) => state.isCreateSucess
);

