import { NotifiCationService } from '../../../services/notification';
import { AuthService } from '../../../services/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';
import { take, last, filter, mergeMap, map } from 'rxjs/operators';

import { Store, select, on } from '@ngrx/store';

import { IAppState } from '../../../store/state/app';
import { selectStatusLoginUser, selectStatusUser } from '../../../store/selectors/user';
import { Login } from '../../../store/actions/user';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
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
export class LoginComponent {
  initLoginForm: any;

  loginForm: FormGroup;

  isLoginSuccess$ = this.store.pipe(select(selectStatusLoginUser));
  status$ = this.store.pipe(select(selectStatusUser));
  resultLogin;

  constructor(
    private notifiCationService: NotifiCationService,
    private authService: AuthService,
    private store: Store<IAppState>,
    private formBuilder: FormBuilder,
    private notification: NzNotificationService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.initLoginForm = this.loginForm.value;
  }

  onSubmitForm(customerData) {

    this.store.dispatch(new Login(customerData));

    const resultLogin = this.isLoginSuccess$.subscribe(isLogin => {
      if (isLogin === true) {
        resultLogin.unsubscribe();  

        this.notifiCationService.create('Login success', 'Congratulations, welcome back');
        this.authService.login();
      }
      else if (isLogin === false){
        resultLogin.unsubscribe();
        
        this.notifiCationService.create('Login fail', 'Sorry, your infomation some thing wrong, you can relogin again');
      }
    });
  }
}

