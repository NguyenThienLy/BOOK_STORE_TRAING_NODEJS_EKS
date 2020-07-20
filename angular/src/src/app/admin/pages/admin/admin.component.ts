import { AuthService } from '../../../services/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Store, select, on } from '@ngrx/store';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

import { IAppState } from '../../../store/state/app';
import { IUser } from '../../../models/user';
import { selectUserLogin, selectStatusLogoutUser } from '../../../store/selectors/user';
import { Login, Logout, Reset } from '../../../store/actions/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit, OnDestroy {
  isCollapsed = false;

  user$ = this.store.pipe(select(selectUserLogin));
  isLogoutUser$ = this.store.pipe(select(selectStatusLogoutUser));
  user: IUser = null;
  userDetails: KeycloakProfile;

  constructor(
    private router: Router,
    private store: Store<IAppState>,
    private authService: AuthService,
    private keycloakService: KeycloakService
  ) { }

  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
    }
    window.onbeforeunload = () => this.ngOnDestroy();
  }

  ngOnDestroy() {
    this.authService.removeLocalStorage();
  }

  async onLogout() {
    // this.store.dispatch(new Logout({ token: this.authService.getAccessToken() }));

    // const reusultLogout = this.isLogoutUser$.subscribe(res => {
    //   if (res === true) {
    //     reusultLogout.unsubscribe();

    //     this.authService.removeLocalStorage();
    //     this.authService.gotoLogin();
    //   }
    // })

    await this.keycloakService.logout();
  }
}

