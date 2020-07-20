export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  products: Array<string>;
  description: string;
  createAt: Date;
  status: 'active' | 'deactive';
  updateAt: Date;
}

export interface ICategories {
  categories: ICategory[];
}
