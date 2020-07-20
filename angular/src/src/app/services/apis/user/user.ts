import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { CrudApi } from '../../crud';
import { IUser, IUsers, ILogin, ILogout } from '../../../models/user';
import { IResponse, IResponses } from '../../../models/response';

@Injectable()
export class UserService extends CrudApi {

  constructor(private http: HttpClient) {
    super('user');
  }

  getList(option = {}): Observable<IResponses> {
    let url = this.baseUrl();
    const query = this._serialize(option || {});
    url += `${query}`;

    return this.http.get<IResponses>(url);
  }

  login(body: ILogin, option = {}): Observable<IResponse>{
    let url = this.baseUrl('login');
    const query = this._serialize(option || {});
    url += `${query}`;

    // return this.http.post<IResponse>(url, body);
    return this.http.get<IResponse>(url);
  }

  logout(body: ILogout, option = {}): Observable<IResponse> {
    let url = this.baseUrl('logout');
    const query = this._serialize(option || {});
    url += `${query}`;

    return this.http.post<IResponse>(url, body);
  }

  create(body, option = { }): Observable<IResponse> {
    let url = this.baseUrl();
    const query = this._serialize(option || {});
    url += `${query}`;

    return this.http.post<IResponse>(url, body);
  }
}
