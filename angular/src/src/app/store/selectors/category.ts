import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app';
import { ICategoryState } from '../state/category';

const selectCategories = (state: IAppState) => state.categories;

export const selectCategoryList = createSelector(
    selectCategories,
  (state: ICategoryState) => state.categories
);

export const selectBooksSameCategory = createSelector(
    selectCategories,
  (state: ICategoryState) => state.booksSameCategory
);
