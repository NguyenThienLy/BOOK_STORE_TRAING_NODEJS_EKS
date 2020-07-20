export interface IResponses {
  code: number;
  results: IObjects;
}

export interface IResponse {
  code: number;
  result: IObject;
}

export interface IObjects {
  objects: IRows;
}

export interface IRows {
  rows: any;
}

export interface IObject {
  object: any;
}

export interface IError {
  code?: number;
  type: string;
  message: string;
}
