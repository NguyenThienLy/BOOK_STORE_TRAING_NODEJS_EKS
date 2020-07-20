import { createAction, props, Action } from '@ngrx/store';
import { IAuthor, IAuthors } from '../../models/author';
import { IError } from '../../models/response';

export enum EAuthorActions {
  GetItem = '[Author] Get Item',
  GetItemSuccess = '[Author] Get Item Success',
  GetItemFail = '[Author] Get Item Fail',

  GetList = '[Author] Get List',
  GetListSuccess = '[Author] Get List Success',
  GetListFail = '[Author] Get List Fail',

  GetListBookSame = '[Author] Get List Book Same',
  GetListBookSameSuccess = '[Author] Get List Book Same Success',
  GetListBookSameFail = '[Author] Get List Book Same Fail',
}

export class GetList implements Action {
  public readonly type = EAuthorActions.GetList;
}

export class GetListSuccess implements Action {
  public readonly type = EAuthorActions.GetListSuccess;
  constructor(public payload) {}
}

export class GetListFail implements Action {
  public readonly type = EAuthorActions.GetListFail;
  constructor(public payload) {}
}

export class GetListBookSame implements Action {
  public readonly type = EAuthorActions.GetListBookSame;
  constructor(public payload) {}
}

export class GetListBookSameSuccess implements Action {
  public readonly type = EAuthorActions.GetListBookSameSuccess;
  constructor(public payload) {}
}

export class GetListBookSameFail implements Action {
  public readonly type = EAuthorActions.GetListBookSameFail;
  constructor(public payload) {}
}

export class GetItem implements Action {
  public readonly type = EAuthorActions.GetItem;
}

export class GetItemSuccess implements Action {
  public readonly type = EAuthorActions.GetItemSuccess;
  constructor(public payload) {}
}

export class GetItemFail implements Action {
  public readonly type = EAuthorActions.GetItemFail;
  constructor(public payload) {}
}

export type AuthorActions = GetList | GetListSuccess | GetListFail | GetListBookSameSuccess | GetItemSuccess;
