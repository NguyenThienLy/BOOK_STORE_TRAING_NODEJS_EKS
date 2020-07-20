import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NotifiCationService } from '../../../services/notification';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IAppState } from '../../../store/state/app';
import { selectBookList, selectStatusBook } from '../../../store/selectors/book';
import { GetList, Delete } from '../../../store/actions/book';
import { IBook, IBooks } from '../../../models/book';

@Component({
  selector: 'app-manage-crises',
  templateUrl: './main-book.component.html',
  styleUrls: ['./main-book.component.css']
})
export class MainBookComponent implements OnInit {
  books$ = this.store.pipe(select(selectBookList));
  status$ = this.store.pipe(select(selectStatusBook));

  constructor(
    private store: Store<IAppState>,
    private notificationService: NotifiCationService
  ) { }

  ngOnInit() {
    this.books$.subscribe(res => {
      if (!res) {
        this.store.dispatch(new GetList());
      }
    });
  }

  onRefresh() {
    this.store.dispatch(new GetList());
  }

  delete(id: string) {
    // this.store.dispatch(new Delete(id));
    this.notificationService.create('Unauthorized ', `Sorry, you are not authorized to access this feature, thanks`);
  }
}
