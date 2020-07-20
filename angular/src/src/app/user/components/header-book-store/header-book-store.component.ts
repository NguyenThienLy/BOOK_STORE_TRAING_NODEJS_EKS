import { Component, Input } from '@angular/core';
import { ICategory } from '../../../models/category';
import { IUser } from '../../../models/user';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header-book-store',
  templateUrl: './header-book-store.component.html',
  styleUrls: [
    './header-book-store.component.css',
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
    '../../../../css/button.css'
  ]
})
export class HeaderBookStoreComponent {
  @Input() categories: ICategory[];
  // @Input() user: IUser;
  @Input() userDetails;

  constructor(
    private keycloakService: KeycloakService
  ) { }

  async onLogout() {
    await this.keycloakService.logout();
  }
}
