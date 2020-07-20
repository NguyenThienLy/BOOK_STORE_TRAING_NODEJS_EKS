import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { switchMap, map, withLatestFrom, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import {
  EAuthorActions,
  GetList,
  GetListSuccess,
  GetListFail,
  GetListBookSame,
  GetListBookSameSuccess,
  GetListBookSameFail
} from '../actions/author';

import { IAppState } from '../state/app';

import { AuthorService } from '../../services/apis/author/author';
import { selectBookList } from '../selectors/book';
import { IResponse } from '../../models/response';

@Injectable()
export class AuthorEffects {

  @Effect()
  getList$ = this.actions$.pipe(
    ofType<GetList>(EAuthorActions.GetList),
    mergeMap(() => this.authorService.getList()
      .pipe(
        map(res => (new GetListSuccess(res.results.objects.rows))),
        catchError(error => of(new GetListFail(error)))
      )
    )
  );

  @Effect()
  getListBookSame$ = this.actions$.pipe(
    ofType<GetListBookSame>(EAuthorActions.GetListBookSame),
    mergeMap((action) => this.authorService.getListBookSame(action.payload)
      .pipe(
        map(res => (new GetListBookSameSuccess(res.results.objects.rows))),
        catchError(error => of(new GetListBookSameFail(error)))
      )
    )
  );

  constructor(
    private authorService: AuthorService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) { }
}
