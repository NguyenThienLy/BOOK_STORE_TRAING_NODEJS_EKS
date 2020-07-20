import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../../../models/book';

@Component({
  selector: 'app-book-card-detail',
  templateUrl: './book-card-detail.component.html',
  styleUrls: [
    './book-card-detail.component.css',
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
export class BookCardDetailComponent implements OnInit {
  @Input() book: IBook;

  constructor() { }

  ngOnInit() {
  }

}
