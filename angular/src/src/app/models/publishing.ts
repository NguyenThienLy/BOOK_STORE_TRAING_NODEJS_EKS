export interface IPublishing {
  _id: string;
  name: string;
  products: Array<string>;
  slug: string;
  createAt: Date;
  status: 'active' | 'deactive';
  updateAt: Date;
}

export interface IPublishings {
  publishings: IPublishing[];
}
