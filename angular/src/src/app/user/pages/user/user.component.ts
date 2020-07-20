import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

import { IAppState } from '../../../store/state/app';
import { selectCategoryList } from '../../../store/selectors/category';
import { selectUserLogin } from '../../../store/selectors/user';
import { GetList } from './../../../store/actions/category';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [
    './user.component.css',
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
    '../../../../styles/grid.css'
  ]
})
export class UserComponent implements OnInit {
  categories$ = this.store.pipe(select(selectCategoryList));
  user$ = this.store.pipe(select(selectUserLogin));
  userDetails: KeycloakProfile;

  constructor(
    private store: Store<IAppState>,
    private keycloakService: KeycloakService
  ) { }

  async ngOnInit() {
    this.categories$.subscribe(res => {
      if (!res) {
        this.store.dispatch(new GetList());
      }
    });
    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
      console.log(this.userDetails);
    }
  }

  // onActivate(event) {
  //   window.scroll(0, 0);

  // }
}
