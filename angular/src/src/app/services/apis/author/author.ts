import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { CrudApi } from '../../crud';
import { IResponse, IResponses } from '../../../models/response';

@Injectable()
export class AuthorService extends CrudApi {

  constructor(private http: HttpClient) {
    super('author');
  }

  getList(option = {}): Observable<IResponses> {
    let url = this.baseUrl();
    const query = this._serialize(option || {});
    url += `${query}`;

    return this.http.get<IResponses>(url);
  }

  getListBookSame(body,option = {}): Observable<IResponses> {
    const { _idAuthor, _idBook } = body;

    let url = this.baseUrl(`${_idAuthor}/${_idBook}`);
    const query = this._serialize(option || {});
    url += `${query}`;

    return this.http.get<IResponses>(url);
  }
}
