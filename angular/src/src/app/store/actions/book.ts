import { createAction, props, Action } from '@ngrx/store';
import { IBook, IBooks, IBookCreate, IBookUpdate } from '../../models/book';
import { IError } from '../../models/response';

export enum EBookActions {
  GetItem = '[Book] Get Item',
  GetItemSuccess = '[Book] Get Item Success',
  GetItemFail = '[Book] Get Item Fail',

  GetList = '[Book] Get List',
  GetListSuccess = '[Book] Get List Success',
  GetListFail = '[Book] Get List Fail',

  Create = '[Book] Create Item',
  CreateSuccess = '[Book] Create Item Success',
  CreateFail = '[Book] Create Item Fail',

  Update = '[Book] Update Item',
  UpdateSuccess = '[Book] Update Item Success',
  UpdateFail = '[Book] Update Item Fail',

  Delete = '[Book] Delete Item',
  DeleteSuccess = '[Book] Delete Item Success',
  DeleteFail = '[Book] Delete Item Fail'
}

export class GetList implements Action {
  public readonly type = EBookActions.GetList;
}

export class GetListSuccess implements Action {
  public readonly type = EBookActions.GetListSuccess;
  constructor(public payload) { }
}

export class GetListFail implements Action {
  public readonly type = EBookActions.GetListFail;
  constructor(public payload) { }
}

export class GetItem implements Action {
  public readonly type = EBookActions.GetItem;
  constructor(public payload) { }
}

export class GetItemSuccess implements Action {
  public readonly type = EBookActions.GetItemSuccess;
  constructor(public payload) { }
}

export class GetItemFail implements Action {
  public readonly type = EBookActions.GetItemFail;
  constructor(public payload) { }
}

export class Create implements Action {
  public readonly type = EBookActions.Create;
  constructor(public payload) { }
}

export class CreateSuccess implements Action {
  public readonly type = EBookActions.CreateSuccess;
  constructor(public payload) { }
}

export class CreateFail implements Action {
  public readonly type = EBookActions.CreateFail;
  constructor(public payload) { }
}

export class Delete implements Action {
  public readonly type = EBookActions.Delete;
  constructor(public payload) { }
}

export class DeleteSuccess implements Action {
  public readonly type = EBookActions.DeleteSuccess;
  constructor(public payload) { }
}

export class DeleteFail implements Action {
  public readonly type = EBookActions.DeleteFail;
  constructor(public payload) { }
}

export class Update implements Action {
  public readonly type = EBookActions.Update;
  constructor(public payload) { }
}

export class UpdateSuccess implements Action {
  public readonly type = EBookActions.UpdateSuccess;
  constructor(public payload) { }
}

export class UpdateFail implements Action {
  public readonly type = EBookActions.UpdateFail;
  constructor(public payload) { }
}


export type BookActions = GetList | GetListSuccess | GetListFail | Create | CreateSuccess | CreateFail | DeleteSuccess | GetItemSuccess | UpdateSuccess;
