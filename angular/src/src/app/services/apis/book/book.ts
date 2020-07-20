import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { CrudApi } from '../../crud';
import { IBook, IBooks, IBookCreate, IBookUpdate } from '../../../models/book';
import { IResponse, IResponses } from '../../../models/response';

@Injectable()
export class BookService extends CrudApi {

  constructor(private http: HttpClient) {
    super('book');
  }

  getItem(_id: string, option = { populates: ['author', 'category', 'publishing'], limit: 9 }): Observable<IResponse> {
    let url = this.baseUrl(_id);
    const query = this._serialize(option || {});
    url += `${query}`;

    return this.http.get<IResponse>(url);
  }

  getList(option = { populates: ['author', 'category', 'publishing'], limit: 9 }): Observable<IResponses> {
    let url = this.baseUrl();
    const query = this._serialize(option || {});
    url += `${query}`;

    return this.http.get<IResponses>(url);
  }

  create(body, option = { populates: ['author', 'category', 'publishing'] }): Observable<IResponse> {
    let url = this.baseUrl();
    const query = this._serialize(option || {});
    url += `${query}`;

    const formdata = new FormData();

    body.fileList.forEach(item => {
      formdata.append('subImgs', item);
    });

    formdata.append('title', body.title);
    formdata.append('category', body.category);
    formdata.append('author', body.author);
    formdata.append('publishing', body.publishing);
    formdata.append('price', body.price);
    formdata.append('quantity', body.quantity);
    formdata.append('description', body.description);

    return this.http.post<IResponse>(url, formdata);
  }

  update(body: IBookUpdate, option = {}): Observable<IResponse> {
    let url = this.baseUrl(body._id);
    const query = this._serialize(option || {});
    url += `${query}`;

    return this.http.put<IResponse>(url, body);
  }

  delete(_id: string, option = {}): Observable<IResponse> {
    let url = this.baseUrl(_id);
    const query = this._serialize(option || {});
    url += `${query}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': 'bearer 123456'
      })
    };

    return this.http.delete<IResponse>(url, httpOptions);
  }
}
