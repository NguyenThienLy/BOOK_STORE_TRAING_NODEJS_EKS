import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guard/auth';
import { AuthKeycloakGuard } from './guard/auth-keycloak';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';


const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    // canActivate: [AuthKeycloakGuard]
  },
  {
    path: '',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    data: { preload: true }
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: 'page-result',
    loadChildren: () => import('./page-result/page-result.module').then(m => m.PageResultModule)
  },
  { path: '**', redirectTo: 'page-result/404' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  // providers: [AuthKeycloakGuard]
})

export class AppRoutingModule { }
