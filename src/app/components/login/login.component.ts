// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import FormValidator from 'src/app/helpers/validateform';
import { UserLoginDto } from 'src/app/models/user/user-login-dto.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router,
    private userStore: UserStoreService
  ) {}

  type: string = "password";
  loginForm!: FormGroup;
  isText: boolean = false;
  eyeIcon:string = "fa-eye-slash"
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"; // Corrected typo: "passwprd" -> "password"
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Create a UserLoginDto object from form values
      const userLoginDto = new UserLoginDto(
        this.loginForm.value.email,
        this.loginForm.value.password
      );

      // Call the signIn method with userLoginDto
      this.auth.signIn(userLoginDto).subscribe({
        next: (res) => {
          console.log(res.message);
          //this.loginForm.reset();
          this.auth.storeToken(res.accessToken);
          this.auth.storeRefreshToken(res.refreshToken);
          const tokenPayload = this.auth.decodedToken();
          this.userStore.setFullNameForStore(tokenPayload.name);
          this.userStore.setRoleForStore(tokenPayload.role);
          this.toastr.success('Logged in successfully');
          this.router.navigate(['dashboard']);
        },
        error: (err) => {
          this.toastr.error('Error', 'Try again', { timeOut: 3000 });
          console.log(err);
        },
      });
    } else {
      FormValidator.markFormGroupTouched(this.loginForm);
    }
  }
}
