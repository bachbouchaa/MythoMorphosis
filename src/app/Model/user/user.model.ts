export class User {
  id?: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  dateOfBirth: Date;
  token?: string;

  constructor(
    name: string,
    surname: string,
    username: string,
    email: string,
    dateOfBirth: Date,
    id?: number,
    token?: string
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.username = username;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.token = token;
  }
}
