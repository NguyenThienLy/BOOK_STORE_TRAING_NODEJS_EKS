export interface IUser {
  _id: string;
  fullName: string;
  role: string;
  gender: string;
  address: string;
  email: string;
  avatar: string;
  password: string;
  createAt: Date;
  status: 'active' | 'deactive';
  updateAt: Date;
}

export interface IUsers {
  users: IUser[];
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILogout {
  token: string;
}
