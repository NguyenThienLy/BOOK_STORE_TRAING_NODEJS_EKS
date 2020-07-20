import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadFile, UploadChangeParam } from 'ng-zorro-antd/upload';
import { Observable, Observer, of } from 'rxjs';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../../store/state/app';
import { selectCategoryList } from '../../../store/selectors/category';
import { selectAuthorList } from '../../../store/selectors/author';
import { selectPublishingList } from '../../../store/selectors/publishing';
import { selectBookList, selectSelectedBook } from '../../../store/selectors/book';
import { GetList as GetListAuthor } from '../../../store/actions/author';
import { GetList as GetListCategory } from '../../../store/actions/category';
import { GetList as GetListPublishing } from '../../../store/actions/publishing';
import { GetList as GetListBook, Update, GetItem } from '../../../store/actions/book';
import { NotifiCationService } from '../../../services/notification';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent implements OnInit {
  isChangeUpload: boolean;
  fileList: Array<any>;
  slug: string;
  initUpdateBookForm: any;
  
  updateBookForm: FormGroup;
  confirmModal: NzModalRef;

  categories$ = this.store.pipe(select(selectCategoryList));
  authors$ = this.store.pipe(select(selectAuthorList));
  publishings$ = this.store.pipe(select(selectPublishingList));
  books$ = this.store.pipe(select(selectBookList));
  book$ = this.store.pipe(select(selectSelectedBook));

  constructor(
    private store: Store<IAppState>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private modal: NzModalService,
    private notificationService: NotifiCationService
  ) {
    this.fileList = [];

    this.updateBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      author: ['', Validators.required],
      publishing: ['', Validators.required],
      price: 1,
      quantity: 1,
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.slug = this.route.snapshot.params.slug;
    this.store.dispatch(new GetItem(this.slug));

    this.book$.subscribe(res => {
      if (!res) {
        this.onGoBack();
      }
      else {
        this.setState();
        this.setUpUpdate(res);
      }
    });
  }

  setUpUpdate = (book) => {
    book.subImgs.forEach(item => {
      this.fileList.push({ 'url': item });
    });

    this.isChangeUpload = false;

    this.updateBookForm = this.formBuilder.group({
      title: [book.title, Validators.required],
      category: [book.category._id, Validators.required],
      author: [book.author._id, Validators.required],
      publishing: [book.publishing._id, Validators.required],
      price: book.price,
      quantity: book.quantity,
      description: [book.description, Validators.required]
    });

    this.initUpdateBookForm = this.updateBookForm.value;
  }

  setState = () => {
    this.categories$.subscribe(res => {
      if (!res) {
        this.store.dispatch(new GetListCategory());
      }
    });

    this.authors$.subscribe(res => {
      if (!res) {
        this.store.dispatch(new GetListAuthor());
      }
    });

    this.publishings$.subscribe(res => {
      if (!res) {
        this.store.dispatch(new GetListPublishing());
      }
    });

    this.books$.subscribe(res => {
      if (!res) {
        this.store.dispatch(new GetListBook());
      }
    });
  }

  onSubmitForm(customerData) {
    this.notificationService.create('Apologize', `So sorry, current function has not completed you, thank you for your interest in this function`);
  }

  onGoBack() {
    this.router.navigate(['../../main'], { relativeTo: this.route });
  }

  onShowConfirm() {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you want to ignore these information?',
      nzContent: 'When clicked the OK button, these information  is not saved',
      nzOnOk: () => true
    });
  }

  onChangeListUpload() {
    this.isChangeUpload = true;
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (JSON.stringify(this.initUpdateBookForm) === JSON.stringify(this.updateBookForm.value)
    && !this.isChangeUpload) {
      return true;
    }

    this.onShowConfirm();
    return this.confirmModal.afterClose;
  }
}
