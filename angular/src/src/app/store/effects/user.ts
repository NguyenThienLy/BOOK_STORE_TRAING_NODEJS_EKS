import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { switchMap, map, withLatestFrom, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import {
  EUserActions,
  GetList,
  GetListSuccess,
  GetListFail,
  Create,
  CreateSuccess,
  CreateFail,
  Logout, 
  LogoutSuccess,
  LogoutFail,
  Login,
  LoginSuccess,
  LoginFail
} from '../actions/user';

import { UserService } from '../../services/apis/user/user';
import { IUser, IUsers } from '../../models/user';
import { IResponse } from '../../models/response';

@Injectable()
export class UserEffects {

  @Effect()
  getList$ = this.actions$.pipe(
    ofType<GetList>(EUserActions.GetList),
    mergeMap(() => this.userService.getList()
      .pipe(
        map(res => (new GetListSuccess(res.results.objects.rows))),
        catchError(error => of(new GetListFail(error)))
      )
    )
  );

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(EUserActions.Login),
    exhaustMap(action => this.userService.login(action.payload)
      .pipe(
        map(res => (new LoginSuccess(res.result.object))),
        catchError(error => of(new LoginFail(error)))
      )
    )
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType<Logout>(EUserActions.Logout),
    exhaustMap(action => this.userService.logout(action.payload)
      .pipe(
        map(res => (new LogoutSuccess(res.result.object))),
        catchError(error => of(new LogoutFail(error)))
      )
    )
  );

  @Effect()
  create$ = this.actions$.pipe(
    ofType<Create>(EUserActions.Create),
    exhaustMap(action =>
      this.userService.create(action.payload)
        .pipe(
          map(res => (new CreateSuccess(res.result.object))),
          catchError(error => of(new CreateFail(error)))
        )
    )
  );

  constructor(
    private userService: UserService,
    private actions$: Actions,
  ) { }
}
