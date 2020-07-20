import { environment } from '../../environments/environment';
import * as _ from 'lodash';

export class CrudApi {
  _path: string;

  constructor(path) {
    this._path = path;
  }

  baseUrl(subpath = '') {
    return `${environment.host}/api/${environment.version}/${this._path}/${subpath}`;
  }

  _serialize(obj) {
    const keys = Object.keys(obj);
    let query = '?';
    for (const key of keys) {
      query += typeof (obj[key]) === 'string' ? `${key}=${obj[key]}&` : `${key}=${JSON.stringify(obj[key])}&`;
    }
    return query;
  }

  async exec(url, options) {
    try {
      return await fetch(url, options).then(result => {
        return result.json();
      });
    } catch (err) {
      console.log("CrudApi -> exec -> err", err)
    }
  }
}
