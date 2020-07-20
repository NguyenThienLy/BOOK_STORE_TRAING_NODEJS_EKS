import { ICategory } from './category';
import { IPublishing } from './publishing';
import { IAuthor } from './author';

export interface IBook {
  _id: string;
  title: string;
  slug: string;
  author: IAuthor;
  publishing: IPublishing;
  category: ICategory;
  mainImg: string;
  subImgs: Array<string>;
  price: number;
  quantity: number;
  description: string;
  createdAt: Date;
  status: 'active' | 'deactive';
  updatedAt: Date;
}

export interface IBooks {
  books: IBook[];
}

export interface IBookCreate {
  title: string;
  slug: string;
  author: string;
  publishing: string;
  category: string;
  subImgs: Array<any>;
  price: number;
  quantity: number;
  description: string;
}

export interface IBookUpdate {
  _id: string;
  title: string;
  slug: string;
  author: string;
  publishing: string;
  category: string;
  subImgs: Array<any>;
  price: number;
  quantity: number;
  description: string;
}
