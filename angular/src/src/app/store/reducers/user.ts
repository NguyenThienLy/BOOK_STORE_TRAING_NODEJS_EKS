import { AuthService } from './../../services/auth';
import { Action, createReducer, on } from '@ngrx/store';

import { EUserActions, UserActions, LogoutSuccess, LogoutFail } from './../actions/user';
import { initialUserState, IUserState } from '../state/user';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetListSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }

    case EUserActions.Create: {
      return {
        ...state,
        isCreateSucess: null,
        status: 'loading'
      };
    }

    case EUserActions.CreateSuccess: {
      return {
        ...state,
        isCreateSucess: true,
        status: 'loaded'
      };
    }

    case EUserActions.CreateFail: {
      return {
        ...state,
        isCreateSucess: false,
        status: 'loaded'
      };
    }

    case EUserActions.Login: {
      return {
        ...state,
        user: null,
        isLoginSuccess: null,
        status: 'loading',
      };
    }

    case EUserActions.LoginSuccess: {
      AuthService.prototype.addLocalStorage({
        isLogin: 'true',
        token: action.payload.token
      });

      return {
        ...state,
        user: action.payload,
        isLoginSuccess: true,
        status: 'loaded'
      };
    }

    case EUserActions.LoginFail: {
      return {
        ...state,
        user: null,
        isLoginSuccess: false,
        status: 'loaded'
      };
    }

    case EUserActions.Logout: {
      return {
        ...state,
        status: 'loading',
        isLogoutSucess: null
      };
    }

    case EUserActions.LogoutSuccess: {
      return {
        ...state,
        status: 'loaded',
        user: null,
        isLogoutSucess: true,
        isLoginSuccess: false
      };
    }

    case EUserActions.LogoutFail: {
      return {
        ...state,
        status: 'loaded',
        isLogoutSucess: false,
      };
    }

    case EUserActions.Reset: {
      return Object.assign({}, initialUserState);
    }

    default:
      return state;
  }
};
