import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainBookComponent } from './containers/main-book/main-book.component';
import { CreateBookComponent } from './containers/create-book/create-book.component';
import { UpdateBookComponent } from './containers/update-book/update-book.component';

import { CanDeactivateGuard } from '../guard/can-deactivate';
import { AdminComponent } from './pages/admin/admin.component';


import { AuthGuard } from '../guard/auth';
import { AuthKeycloakGuard } from '../guard/auth-keycloak';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthKeycloakGuard],
    children: [
      {
        path: 'book',
        canActivateChild: [AuthKeycloakGuard],
        children: [
          { path: 'main', component: MainBookComponent },
          {
            path: 'create',
            component: CreateBookComponent,
            // canActivateChild: [AuthKeycloakGuard],
            canDeactivate: [CanDeactivateGuard]
          },
          {
            path: 'update/:slug',
            component: UpdateBookComponent,
            // canActivateChild: [AuthKeycloakGuard],
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
