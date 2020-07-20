import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { switchMap, map, withLatestFrom, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import {
  EPublishingActions,
  GetList,
  GetListSuccess,
  GetListFail
} from '../actions/publishing';

import { IAppState } from '../state/app';

import { PublishingService } from '../../services/apis/publishing/publishing';
import { selectBookList } from '../selectors/book';
import { IResponse } from '../../models/response';

@Injectable()
export class PublishingEffects {

  @Effect()
  getList$ = this.actions$.pipe(
    ofType<GetList>(EPublishingActions.GetList),
    mergeMap(() => this.publishingService.getList()
      .pipe(
        map(res => (new GetListSuccess(res.results.objects.rows))),
        catchError(error => of(new GetListFail(error)))
      )
    )
  );

  constructor(
    private publishingService: PublishingService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) { }
}
