import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './pages/user/user.component';

import { BooksListComponent } from './containers/books-list/books-list.component';
import { BookDetailComponent } from './containers/book-detail/book-detail.component';

// import { CrisisDetailResolverService } from './user-detail-resolver.service';
// import { BookCardDirective } from './book-card.directive';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: BooksListComponent
      },
      {
        path: ':slug',
        component: BookDetailComponent,
        // resolve: {
        //   crisis: CrisisDetailResolverService
        // }
      }
    ]
  }
];

@NgModule({
   imports: [
      RouterModule.forChild(userRoutes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      // BookCardDirective
   ]
})
export class UserRoutingModule { }
