// src/app/user.dto.ts

export class UserDTO {
    name: string;
    surname: string;
    username: string;
    email: string;
    dateOfBirth: Date;
    password: string;
  
    constructor(
      name: string,
      surname: string,
      username: string,
      email: string,
      dateOfBirth: Date,
      password: string
    ) {
      this.name = name;
      this.surname = surname;
      this.username = username;
      this.email = email;
      this.dateOfBirth = dateOfBirth;
      this.password = password;
    }
  }
  