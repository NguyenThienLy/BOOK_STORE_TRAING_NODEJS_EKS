import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageResultRoutingModule } from './page-result-routing.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotAuthorizedComponent } from './page-not-authorized/page-not-authorized.component';
import { PageErrorOnServerComponent } from './page-error-on-server/page-error-on-server.component';

import { IconsProviderModule } from './../icons-provider.module';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
// import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    PageResultRoutingModule,
    IconsProviderModule,
    NzResultModule,
    NzButtonModule
  ],
  declarations: [
    PageNotFoundComponent,
    PageNotAuthorizedComponent,
    PageErrorOnServerComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class PageResultModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
