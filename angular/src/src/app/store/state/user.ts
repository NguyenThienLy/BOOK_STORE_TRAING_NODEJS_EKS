import { IUser } from '../../models/user';

export interface IUserState {
  users: IUser[];
  user: IUser;
  isCreateSucess: null | true | false;
  isLoginSuccess: null | true | false;
  isLogoutSucess: null | true | false;
  status: 'null' | 'loading' | 'loaded';
}

export const initialUserState: IUserState = {
  users: null,
  user: null,
  isCreateSucess: null,
  isLoginSuccess: null,
  isLogoutSucess: null,
  status: 'null'
};
