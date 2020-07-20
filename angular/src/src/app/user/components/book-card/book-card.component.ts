import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { IBook } from '../../../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: [
    './book-card.component.css',
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
    '../../../../css/list-item.css'
  ]
})
export class BookCardComponent implements OnInit {
  @Input() book: IBook;
  @Output() onSelectBookChange = new EventEmitter<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(() => this.changeSelectBook());
  }

  onGoAnotherBook(slug) {
    this.router.navigate(['/' + slug ], { relativeTo: this.route });
  }

  changeSelectBook() {
    this.onSelectBookChange.emit(true);
  }
}
