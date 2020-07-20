import { Component, OnInit, OnChanges } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Observable, Observer, of, BehaviorSubject } from 'rxjs';
import { first, last, take } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { Store, select, on } from '@ngrx/store';

import { IAppState } from '../../../store/state/app';
import { selectCategoryList } from '../../../store/selectors/category';
import { selectAuthorList } from '../../../store/selectors/author';
import { selectPublishingList } from '../../../store/selectors/publishing';
import { selectBookList, selectNewBook, selectStatusCreateBook } from '../../../store/selectors/book';
import { GetList as GetListAuthor } from '../../../store/actions/author';
import { GetList as GetListCategory } from '../../../store/actions/category';
import { GetList as GetListPublishing } from '../../../store/actions/publishing';
import { GetList as GetListBook } from '../../../store/actions/book';
import { Create } from '../../../store/actions/book';
import { NotifiCationService } from '../../../services/notification';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: [
    './create-book.component.css',
    '../../../../styles/font.css',
  ]
})

export class CreateBookComponent implements OnInit {
  isChangeUpload: boolean;
  fileList: Array<any>;
  initCreateBookForm: any;

  createBookForm: FormGroup;
  confirmModal: NzModalRef;

  categories$ = this.store.pipe(select(selectCategoryList));
  authors$ = this.store.pipe(select(selectAuthorList));
  publishings$ = this.store.pipe(select(selectPublishingList));
  books$ = this.store.pipe(select(selectBookList));
  book$ = this.store.pipe(select(selectNewBook));
  isCreateSuccess$ = this.store.pipe(select(selectStatusCreateBook));

  constructor(
    private store: Store<IAppState>,
    private formBuilder: FormBuilder,
    private modal: NzModalService,
    private notificationService: NotifiCationService
  ) {
    this.fileList = [];

    this.isChangeUpload = false;

    this.createBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      author: ['', Validators.required],
      publishing: ['', Validators.required],
      price: 1,
      quantity: 1,
      description: ['', Validators.required], 
      fileList: []
    });

    this.initCreateBookForm = this.createBookForm.value;
  }

  ngOnInit() {
    this.setState();
  }

  setState() {
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

  resetForm() {
    this.isChangeUpload = false;
    this.fileList = [];

    this.createBookForm.reset(this.initCreateBookForm);
  }

  onSubmitForm(customerData) {
    let myFileList = [];
    this.fileList.forEach(item => {
      myFileList.push(item.originFileObj);
    });

    if (JSON.stringify(customerData) === JSON.stringify(this.initCreateBookForm)) {
      this.notificationService.create('Please input infomation', `Warning,  You have not filled in the information, please check again, thanks`);
    }
    else {
      this.store.dispatch(new Create({
        ...customerData,
        fileList: myFileList
      }));
    }


    const resultCreate = this.isCreateSuccess$.subscribe(isCreate => {
      if (isCreate === true) {
        resultCreate.unsubscribe();

        this.notificationService.create('Create success', `Congratulations,  your new book was created, you can check in route main/book`);
        this.resetForm();
      }
      else if (isCreate == false) {
        resultCreate.unsubscribe();

        this.notificationService.create('Create fail', `Sorry, your new book was not created, some thing wrong, you can recreated again`);
      }
    });
  }

  onCreateConfirm(): void {
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
    if (JSON.stringify(this.initCreateBookForm) === JSON.stringify(this.createBookForm.value)
      && !this.isChangeUpload) {
      return true;
    }

    this.onCreateConfirm();
    return this.confirmModal.afterClose;
  }
}
