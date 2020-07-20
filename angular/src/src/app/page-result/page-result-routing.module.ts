import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotAuthorizedComponent } from './page-not-authorized/page-not-authorized.component';
import { PageErrorOnServerComponent } from './page-error-on-server/page-error-on-server.component';


const pageResultRoutes: Routes = [
  {
    path: '403',
    component: PageNotAuthorizedComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '500',
    component: PageErrorOnServerComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pageResultRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageResultRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
