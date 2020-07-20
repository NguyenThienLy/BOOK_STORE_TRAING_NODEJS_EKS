import { Action, createReducer, on } from '@ngrx/store';

import { ECategoryActions, CategoryActions } from './../actions/category';
import { initialCategoryState, ICategoryState } from '../state/category';

export const categoryReducers = (
  state = initialCategoryState,
  action: CategoryActions
): ICategoryState => {
  switch (action.type) {
    case ECategoryActions.GetListSuccess: {
      return {
        ...state,
        categories: action.payload
      };
    }

    case ECategoryActions.GetListBookSameSuccess: {
      return {
        ...state,
        booksSameCategory: action.payload
      };
    }

    default:
      return state;
  }
};
