import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app';
import { IAuthorState } from '../state/author';

const selectAuthors = (state: IAppState) => state.authors;

export const selectAuthorList = createSelector(
    selectAuthors,
  (state: IAuthorState) => state.authors
);

export const selectBooksSameAuthor = createSelector(
    selectAuthors,
  (state: IAuthorState) => state.booksSameAuthor
);
