export interface IAuthor {
  _id: string;
  name: string;
  products: Array<string>;
  slug: string;
  createAt: Date;
  status: 'active' | 'deactive';
  updateAt: Date;
}

export interface IAuthors {
  authors: IAuthor[];
}
