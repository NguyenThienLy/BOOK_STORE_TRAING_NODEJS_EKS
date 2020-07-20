import { Action, createReducer, on } from '@ngrx/store';

import { EAuthorActions, AuthorActions } from './../actions/author';
import { initialAuthorState, IAuthorState } from '../state/author';

export const authorReducers = (
  state = initialAuthorState,
  action: AuthorActions
): IAuthorState => {
  
  switch (action.type) {

    case EAuthorActions.GetList: {
      return {
        ...state,
        authors: null
      };
    }

    case EAuthorActions.GetListSuccess: {
      return {
        ...state,
        authors: action.payload
      };
    }

    case EAuthorActions.GetListFail: {
      return {
        ...state,
      };
    }

    case EAuthorActions.GetListBookSameSuccess: {
      return {
        ...state,
        booksSameAuthor: action.payload
      };
    }

    default:
      return state;
  }
};
