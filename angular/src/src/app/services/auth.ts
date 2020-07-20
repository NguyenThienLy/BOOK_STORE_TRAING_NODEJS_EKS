import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select, on } from '@ngrx/store';

import { IAppState } from '../store/state/app';
import { selectStatusLoginUser } from '../store/selectors/user';
import { Login } from '../store/actions/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoginSuccess$ = this.store.pipe(select(selectStatusLoginUser));

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<IAppState>, ) { }

  checkLogin(credentials) {

  }

  login() {
    this.router.navigate(['/admin/book/main']);
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem('ACCESS_TOKEN'));
  }

  checkLogout() {
  }

  gotoLogin() {
    this.router.navigate(['']);
  }  

  gotoAuth() {
    this.router.navigate(['../page-result/403']);
  } 

  removeLocalStorage() {
    localStorage.removeItem('IS_LOGIN');
    localStorage.removeItem('ACCESS_TOKEN');
  }

  addLocalStorage(params: any) {
    const { isLogin, token } = params;

    localStorage.setItem('IS_LOGIN', JSON.stringify(isLogin));
    localStorage.setItem('ACCESS_TOKEN', JSON.stringify(token));
  }

  islogin() {
    return (JSON.parse(localStorage.getItem('IS_LOGIN')) === 'true');
  }
}
