import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user';
import { IBookState, initialBookState } from './book';
import { IAuthorState, initialAuthorState } from './author';
import { ICategoryState, initialCategoryState } from './category';
import { IPublishingState, initialPublishingState } from './publishing';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  books: IBookState;
  authors: IAuthorState;
  categories: ICategoryState;
  publishings: IPublishingState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  books: initialBookState,
  authors: initialAuthorState,
  categories: initialCategoryState,
  publishings: initialPublishingState

};

export function getInitialState(): IAppState {
  return initialAppState;
}
