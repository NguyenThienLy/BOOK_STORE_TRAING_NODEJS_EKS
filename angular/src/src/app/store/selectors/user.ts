import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app';
import { IUserState } from '../state/user';

const selectUsers = (state: IAppState) => state.users;

export const selectUserList = createSelector(
  selectUsers,
  (state: IUserState) => state.users
);

export const selectStatusCreateUser = createSelector(
  selectUsers,
  (state: IUserState) => state.isCreateSucess
);

export const selectStatusLoginUser = createSelector(
  selectUsers,
  (state: IUserState) => state.isLoginSuccess
);

export const selectStatusLogoutUser = createSelector(
  selectUsers,
  (state: IUserState) => state.isLogoutSucess
);

export const selectStatusUser = createSelector(
  selectUsers,
  (state: IUserState) => state.status
);

export const selectUserLogin = createSelector(
  selectUsers,
  (state: IUserState) => state.user
);
