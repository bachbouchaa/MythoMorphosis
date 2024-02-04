import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import FormValidator from 'src/app/helpers/validateform';
import { UserDTO } from 'src/app/models/user/user-dto.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type: string = 'password';
  isText: boolean = false;
  eyeIcon:string = "fa-eye-slash"
  signUpForm!: FormGroup;
  
  constructor(private fb:FormBuilder, private auth: AuthService, private router: Router){}
  
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"; // Corrected typo: "passwprd" -> "password"
  }

  ngOnInit(){
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      let signUpObj = new UserDTO(
        this.signUpForm.value.firstName,
        this.signUpForm.value.lastName,
        this.signUpForm.value.username,
        this.signUpForm.value.email,
        new Date(), // You might want to change this to get the actual date of birth from the form
        this.signUpForm.value.password
      );

      this.auth.signUp(signUpObj)
        .subscribe({
          next: (res => {
            console.log(res.message);
            this.signUpForm.reset();
            this.router.navigate(['login']);
            alert(res.message);
          }),
          error: (err => {
            alert(err?.error.message);
          })
        });
    } else {
      FormValidator.markFormGroupTouched(this.signUpForm); 
    }
  }
}
