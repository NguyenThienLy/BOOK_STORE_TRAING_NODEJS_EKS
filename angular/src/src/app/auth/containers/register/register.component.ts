import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store, select, on } from '@ngrx/store';

import { UserService } from '../../../services/apis/user/user';
import { NotifiCationService } from '../../../services/notification';

import { IAppState } from '../../../store/state/app';
import { selectStatusCreateUser, selectStatusUser } from '../../../store/selectors/user';
import { Create } from '../../../store/actions/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css',
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
    '../../../../css/container/header.css',
    '../../../../css/button.css'
  ]
})
export class RegisterComponent implements OnInit {
  initCreateUserForm: any;

  createUserForm: FormGroup;

  isCreateSuccess$ = this.store.pipe(select(selectStatusCreateUser));
  status$ = this.store.pipe(select(selectStatusUser));

  constructor(
    private store: Store<IAppState>,
    private formBuilder: FormBuilder,
    private notificationService: NotifiCationService
  ) {
    this.createUserForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.initCreateUserForm = this.createUserForm.value;
   }

  ngOnInit() {
  }

  onSubmitForm(customerData) {
    if (JSON.stringify(customerData) === JSON.stringify(this.initCreateUserForm)) {
      this.notificationService.create('Please input infomation', `Warning,  You have not filled in the information, please check again, thanks`);
    }
    else {
      this.store.dispatch(new Create(customerData));
    }

    const resultCreate = this.isCreateSuccess$.subscribe(isCreate => {
      if (isCreate === true) {
        resultCreate.unsubscribe();

        this.notificationService.create('Create success', `Congratulations,  your new account was created, you can login in route /login`);
        this.resetForm();
      }
      else if (isCreate === false){
        resultCreate.unsubscribe();

        this.notificationService.create('Create fail', `Sorry, your new account was not created, some thing wrong, you can recreated again`);
      }
    });
  }

  resetForm() {
    this.createUserForm.reset(this.initCreateUserForm);
  }
}
