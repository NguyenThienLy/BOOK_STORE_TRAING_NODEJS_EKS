import { createAction, Action, props } from '@ngrx/store';
import { IUser, IUsers, ILogin } from '../../models/user';
import { IError } from '../../models/response';

export enum EUserActions {
  GetItem = '[User] Get Item',
  GetItemSuccess = '[User] Get Item Success',
  GetItemFail = '[User] Get Item Fail',

  GetList = '[User] Get List',
  GetListSuccess = '[User] Get List Success',
  GetListFail = '[User] Get List Fail',

  Create = '[User] Create User',
  CreateSuccess = '[User] Create User Success',
  CreateFail = '[User] Create User Fail',

  Login = '[User] Login',
  LoginSuccess = '[User] Login Sucess',
  LoginFail = '[User] Login Fail',

  Logout = '[User] Logout',
  LogoutSuccess = '[User] Logout Sucess',
  LogoutFail = '[User] Logout Fail',

  Reset = '[User] Reset User State'
}


export class GetList implements Action {
  public readonly type = EUserActions.GetList;
}

export class GetListSuccess implements Action {
  public readonly type = EUserActions.GetListSuccess;
  constructor(public payload) { }
}

export class GetListFail implements Action {
  public readonly type = EUserActions.GetListFail;
  constructor(public payload) { }
}

export class Create implements Action {
  public readonly type = EUserActions.Create;
  constructor(public payload) { }
}

export class CreateSuccess implements Action {
  public readonly type = EUserActions.CreateSuccess;
  constructor(public payload) { }
}

export class CreateFail implements Action {
  public readonly type = EUserActions.CreateFail;
  constructor(public payload) { }
}

export class Login implements Action {
  public readonly type = EUserActions.Login;
  constructor(public payload) { }
}

export class LoginSuccess implements Action {
  public readonly type = EUserActions.LoginSuccess;
  constructor(public payload) { }
}

export class LoginFail implements Action {
  public readonly type = EUserActions.LoginFail;
  constructor(public payload) { }
}

export class Logout implements Action {
  public readonly type = EUserActions.Logout;
  constructor(public payload) { }
}

export class LogoutSuccess implements Action {
  public readonly type = EUserActions.LogoutSuccess;
  constructor(public payload) { }
}

export class LogoutFail implements Action {
  public readonly type = EUserActions.LogoutFail;
  constructor(public payload) { }
}

export class Reset implements Action {
  public readonly type = EUserActions.Reset;
}

export type UserActions = GetListSuccess | Login | LoginSuccess | LoginFail | Create | CreateSuccess | CreateFail | Logout | LogoutSuccess | LogoutFail | Reset;
