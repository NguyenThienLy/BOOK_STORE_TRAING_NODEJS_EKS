import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app';
import { userReducers } from './user';
import { bookReducers } from './book';
import { authorReducers } from './author';
import { categoryReducers } from './category';
import { publishingReducers } from './publishing';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  books: bookReducers,
  authors: authorReducers,
  categories: categoryReducers,
  publishings: publishingReducers
};
