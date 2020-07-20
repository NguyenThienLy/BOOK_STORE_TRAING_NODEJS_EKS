import { createAction, props, Action } from '@ngrx/store';
import { IPublishing, IPublishings } from '../../models/publishing';
import { IError } from '../../models/response';

export enum EPublishingActions {
  GetItem = '[Publishing] Get Item',
  GetItemSuccess = '[Publishing] Get Item Success',
  GetItemFail = '[Publishing] Get Item Fail',

  GetList = '[Publishing] Get List',
  GetListSuccess = '[Publishing] Get List Success',
  GetListFail = '[Publishing] Get List Fail',
}

// export const GetItem = createAction(
//   EPublishingActions.GetItem,
//   props<{ authorId: string }>()
// );

// export const GetItemSuccess = createAction(
//   EPublishingActions.GetItemSuccess,
//   props<{ publishing: IPublishing }>()
// );

// export const GetItemFail = createAction(
//   EPublishingActions.GetItemFail,
//   props<{  error: IError }>()
// );

// export const GetList = createAction(
//   EPublishingActions.GetList
// );

// export const GetListSuccess = createAction(
//   EPublishingActions.GetListSuccess,
//   props<{ pushlishing: IPublishings }>()
// );

// export const GetListFail = createAction(
//   EPublishingActions.GetItemFail,
//   props<{ error: IError }>()
// );

export class GetList implements Action {
  public readonly type = EPublishingActions.GetList;
}

export class GetListSuccess implements Action {
  public readonly type = EPublishingActions.GetListSuccess;
  constructor(public payload) {}
}

export class GetListFail implements Action {
  public readonly type = EPublishingActions.GetListFail;
  constructor(public payload) {}
}

export class GetItem implements Action {
  public readonly type = EPublishingActions.GetItem;
}

export class GetItemSuccess implements Action {
  public readonly type = EPublishingActions.GetItemSuccess;
  constructor(public payload) {}
}

export class GetItemFail implements Action {
  public readonly type = EPublishingActions.GetItemFail;
  constructor(public payload) {}
}

export type PublishingActions = GetListSuccess | GetItemSuccess;
