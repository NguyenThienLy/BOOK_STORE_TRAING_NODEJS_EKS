import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeaderBookStoreComponent } from './components/header-book-store/header-book-store.component';
import { EmailComponent } from './components/email/email.component';
import { SocialComponent } from './components/social/social.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookCardDetailComponent } from './components/book-card-detail/book-card-detail.component';
import { BookDetailComponent } from './containers/book-detail/book-detail.component';
import { BooksListComponent } from './containers/books-list/books-list.component';
import { UserComponent } from './pages/user/user.component';

import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { UserRoutingModule } from './user-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    NzIconModule,
    NzEmptyModule,
    NzSkeletonModule
  ],
  declarations: [
    HeaderBookStoreComponent,
    EmailComponent,
    SocialComponent,
    UserComponent,
    BookCardComponent,
    BookCardDetailComponent,
    BooksListComponent,
    BookDetailComponent,
    PaginationComponent,
    BreadcrumbComponent
  ]
})
export class UserModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
