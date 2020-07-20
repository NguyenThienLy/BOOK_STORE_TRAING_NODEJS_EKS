import { createAction, props, Action } from '@ngrx/store';
import { ICategory, ICategories } from '../../models/category';
import { IError } from '../../models/response';

export enum ECategoryActions {
  GetItem = '[Category] Get Item',
  GetItemSuccess = '[Category] Get Item Success',
  GetItemFail = '[Category] Get Item Fail',

  GetList = '[Category] Get List',
  GetListSuccess = '[Category] Get List Success',
  GetListFail = '[Category] Get List Fail',

  GetListBookSame = '[Category] Get List Book Same',
  GetListBookSameSuccess = '[Category] Get List Book Same Success',
  GetListBookSameFail = '[Category] Get List Book Same Fail',
}

// export const GetItem = createAction(
//   ECategoryActions.GetItem,
//   props<{ categoryId: string }>()
// );

// export const GetItemSuccess = createAction(
//   ECategoryActions.GetItemSuccess,
//   props<{ category: ICategory }>()
// );

// export const GetItemFail = createAction(
//   ECategoryActions.GetItemFail,
//   props<{  error: IError }>()
// );

// export const GetList = createAction(
//   ECategoryActions.GetList
// );

// export const GetListSuccess = createAction(
//   ECategoryActions.GetListSuccess,
//   props<{ categories: ICategories }>()
// );

// export const GetListFail = createAction(
//   ECategoryActions.GetItemFail,
//   props<{ error: IError }>()
// );

export class GetList implements Action {
  public readonly type = ECategoryActions.GetList;
}

export class GetListSuccess implements Action {
  public readonly type = ECategoryActions.GetListSuccess;
  constructor(public payload) {}
}

export class GetListFail implements Action {
  public readonly type = ECategoryActions.GetListFail;
  constructor(public payload) {}
}

export class GetListBookSame implements Action {
  public readonly type = ECategoryActions.GetListBookSame;
  constructor(public payload) {}
}

export class GetListBookSameSuccess implements Action {
  public readonly type = ECategoryActions.GetListBookSameSuccess;
  constructor(public payload) {}
}

export class GetListBookSameFail implements Action {
  public readonly type = ECategoryActions.GetListBookSameFail;
  constructor(public payload) {}
}

export class GetItem implements Action {
  public readonly type = ECategoryActions.GetItem;
}

export class GetItemSuccess implements Action {
  public readonly type = ECategoryActions.GetItemSuccess;
  constructor(public payload) {}
}

export class GetItemFail implements Action {
  public readonly type = ECategoryActions.GetItemFail;
  constructor(public payload) {}
}

export type CategoryActions = GetListSuccess | GetListBookSameSuccess | GetItemSuccess;