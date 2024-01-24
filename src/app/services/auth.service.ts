// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserLoginDto } from '../models/user-login-dto.model';
import { UserDTO } from '../models/user/user-dto.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'your_backend_api_url'; 
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  get isAuthenticated$() {
    return this.isAuthenticated.asObservable();
  }
  constructor(private http: HttpClient) {}

  login(userLoginDto: UserLoginDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userLoginDto);
  }

  logout(): void {
    this.isAuthenticated.next(false);
  }

  register(userDTO: UserDTO): void {
    // Simulate a registration request to a server 
    this.http.post<any>(this.apiUrl, userDTO)
      .subscribe(
        (response) => {
          // Registration successful
          console.log('Registration successful:', response);
          this.isAuthenticated.next(true);
        },
        (error) => {
          // Handle registration error
          console.error('Registration error:', error);
        }
      );
  }
}


