import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IAppState } from '../../../store/state/app';
import { selectBookList, selectStatusBook } from '../../../store/selectors/book';
import { GetList } from './../../../store/actions/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: [
    './books-list.component.css',
    '../../../../styles/color.css',
    '../../../../styles/spacing.css',
    '../../../../styles/display.css',
    '../../../../styles/flex.css',
    '../../../../styles/position.css',
    '../../../../styles/z-index.css',
    '../../../../styles/text.css',
    '../../../../styles/font.css',
    '../../../../styles/transform.css',
    '../../../../styles/cursor.css',
    '../../../../styles/sizing.css',
    '../../../../styles/border.css',
    '../../../../styles/float.css',
    '../../../../styles/grid.css',
    '../../../../css/list-item.css',
  ]
})
export class BooksListComponent implements OnInit {
  books$ = this.store.pipe(select(selectBookList));
  status$ = this.store.pipe(select(selectStatusBook));

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.books$.subscribe(res => {
      if (!res) {
        this.store.dispatch(new GetList());
      }
    });
  }
}
