import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { switchMap, map, withLatestFrom, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import {
  ECategoryActions,
  GetList,
  GetListSuccess,
  GetListFail,
  GetListBookSame,
  GetListBookSameSuccess,
  GetListBookSameFail
} from '../actions/category';

import { IAppState } from '../state/app';

import { CategoryService } from '../../services/apis/category/category';
import { selectBookList } from '../selectors/book';
import { IUser, IUsers } from '../../models/user';
import { IResponse } from '../../models/response';

@Injectable()
export class CategoryEffects {

  @Effect()
  getList$ = this.actions$.pipe(
    ofType<GetList>(ECategoryActions.GetList),
    mergeMap(() => this.categoryService.getList()
      .pipe(
        map(res => (new GetListSuccess(res.results.objects.rows))),
        catchError(error => of(new GetListFail(error)))
      )
    )
  );

  @Effect()
  getListBookSame$ = this.actions$.pipe(
    ofType<GetListBookSame>(ECategoryActions.GetListBookSame),
    mergeMap((action) => this.categoryService.getListBookSame(action.payload)
      .pipe(
        map(res => (new GetListBookSameSuccess(res.results.objects.rows))),
        catchError(error => of(new GetListBookSameFail(error)))
      )
    )
  );

  constructor(
    private categoryService: CategoryService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) { }
}
