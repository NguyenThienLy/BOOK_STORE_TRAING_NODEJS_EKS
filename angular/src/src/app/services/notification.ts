import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotifiCationService {
  constructor(
    private notification: NzNotificationService
  ) {
  }

  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');

    return of(confirmation);
  }

  create(title, content): void {
    this.notification
      .blank(
        title,
        content
      );
  }
}
