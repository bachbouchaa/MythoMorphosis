// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginDto } from 'src/app/Model/user-login-dto.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userLoginDto: UserLoginDto = new UserLoginDto('', ''); // Model for the login form

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.userLoginDto).subscribe(
      (response) => {
        console.log('Login successful', response);
        // Redirect to a protected page, e.g., dashboard
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login failed', error);
        alert('Invalid credentials. Please try again.');
      }
    );
  }
}

