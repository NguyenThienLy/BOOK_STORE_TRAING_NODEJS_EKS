import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptor/auth';
import { ErrorInterceptor } from '../interceptor/error';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { UserService } from './services/apis/user/user';
import { BookService } from './services/apis/book/book';
import { CategoryService } from './services/apis/category/category';
import { AuthorService } from './services/apis/author/author';
import { PublishingService } from './services/apis/publishing/publishing';

import { appReducers } from './store/reducers/app';
import { UserEffects } from './store/effects/user';
import { BookEffects } from './store/effects/book';
import { CategoryEffects } from './store/effects/category';
import { AuthorEffects } from './store/effects/author';
import { PublishingEffects } from './store/effects/publishing';

import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AuthKeycloakGuard } from './guard/auth-keycloak';
import { initializer } from './utils/app-init';

registerLocaleData(en);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    AppRoutingModule,
    HttpClientModule,
    NzNotificationModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, BookEffects, CategoryEffects, AuthorEffects, PublishingEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US },
    UserService,
    BookService, CategoryService,
    AuthorService,
    PublishingService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
