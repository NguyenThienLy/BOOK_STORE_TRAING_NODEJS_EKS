import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  switchMap,
  map,
  withLatestFrom,
  mergeMap,
  exhaustMap,
  catchError,
  concatMap,
  tap
} from 'rxjs/operators';

import {
  EBookActions,
  GetList,
  GetListSuccess,
  GetListFail,
  GetItem,
  GetItemSuccess,
  GetItemFail,
  Create,
  CreateSuccess,
  CreateFail,
  Delete,
  DeleteSuccess,
  DeleteFail
} from '../actions/book';

import { IAppState } from '../state/app';

import { BookService } from '../../services/apis/book/book';
import { selectBookList } from '../selectors/book';
import { IUser, IUsers } from '../../models/user';
import { IResponse } from '../../models/response';

@Injectable()
export class BookEffects {

  @Effect()
  getItem$ = this.actions$.pipe(
    ofType<GetItem>(EBookActions.GetItem),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectBookList))),
    switchMap(([slug, books]) => {
      let selectedBook = null;
      if (books) {
        selectedBook = books.filter(book => book.slug === slug)[0];
      }
      return of(new GetItemSuccess(selectedBook));
    })
  );

  @Effect()
  getList$ = this.actions$.pipe(
    ofType<GetList>(EBookActions.GetList),
    mergeMap(() => this.bookService.getList()
      .pipe(
        map(res => (new GetListSuccess(res.results.objects.rows))),
        catchError(error => of(new GetListFail(error)))
      )
    )
  );

  @Effect()
  create$ = this.actions$.pipe(
    ofType<Create>(EBookActions.Create),
    exhaustMap(action =>
      this.bookService.create(action.payload)
        .pipe(
          map((res) => (new CreateSuccess(res.result.object))),
          catchError(error => of(new CreateFail(error)))
        )
    )
  );

  @Effect()
  Delete$ = this.actions$.pipe(
    ofType<Delete>(EBookActions.Delete),
    exhaustMap(action =>
      this.bookService.delete(action.payload)
        .pipe(
          map(res => (new DeleteSuccess(action.payload))),
          catchError(error => of(new CreateFail(error)))
        )
    )
  );

  // @Effect()
  // create$ = this.actions$.pipe(
  //   ofType<Create>(EBookActions.Create),
  //   mergeMap((action) => this.bookService.create(action.payload)
  //     .pipe(
  //       withLatestFrom(this.store.pipe(select(selectBookList))),
  //       switchMap((books) => {
  //          console.log('books', books)
  //         //  return new CreateSuccess(res.result.object);
  //       }),
  //       catchError(error => of(new GetListFail(error))
  //       )
  //     )
  //   )
  // );

  constructor(
    private bookService: BookService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) { }
}
