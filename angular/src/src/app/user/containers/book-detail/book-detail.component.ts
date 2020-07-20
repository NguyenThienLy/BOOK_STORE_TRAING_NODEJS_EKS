import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select, on, On } from '@ngrx/store';

import { IBook } from '../../../models/book';
import { IAppState } from '../../../store/state/app';
import { selectSelectedBook } from '../../../store/selectors/book';
import { selectBooksSameAuthor } from '../../../store/selectors/author';
import { selectBooksSameCategory } from '../../../store/selectors/category';
import { GetItem } from '../../../store/actions/book';
import { GetListBookSame as GetListBookSameAuthor } from '../../../store/actions/author';
import { GetListBookSame as GetListBookSameCategory } from '../../../store/actions/category';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [
    './book-detail.component.css',
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
    '../../../../css/other-project.css',
    '../../../../css/title.css',
    '../../../../css/list-item.css',
  ]
})

export class BookDetailComponent implements OnInit, OnChanges, OnDestroy {
  book$ = this.store.pipe(select(selectSelectedBook));
  bookSameAuthor$ = this.store.pipe(select(selectBooksSameAuthor));
  bookSameCategory$ = this.store.pipe(select(selectBooksSameCategory));
  slug: string;

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.slug = this.route.snapshot.params.slug;
    this.store.dispatch(new GetItem(this.slug));

    this.book$.subscribe(res => {
      if (!res) {
        this.onGoBack();
      }
      else {
        this.store.dispatch(new GetListBookSameAuthor({ _idAuthor: res.author._id, _idBook: res._id }));
        this.store.dispatch(new GetListBookSameCategory({ _idCategory: res.category._id, _idBook: res._id }));
      }
    });
  }

  ngOnChanges() {
  }
  
  ngOnDestroy() {
  }

  onGoBack() {
    this.router.navigate([''], { relativeTo: this.route });
  }

  onReloadComponent(event) {
    this.slug = this.route.snapshot.params.slug;
    this.store.dispatch(new GetItem(this.slug));
    window.scroll(0, 0);
  }
}
