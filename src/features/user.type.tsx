export interface User {
  _id: string;
  id: string;
  fname: string;
  lname: string;
  email: string;
}

export interface IUserEntry {
  fname: string;
  lname: string;
  email: string;
  password: string;
}
