import { ICategory } from '../../models/category';

export interface ICategoryState {
    categories: ICategory[];
    booksSameCategory: ICategory[];
}

export const initialCategoryState: ICategoryState = {
    categories: null,
    booksSameCategory: null
};
