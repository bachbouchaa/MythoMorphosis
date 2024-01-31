// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import FormValidator from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: NgToastService,
    ) {}

  type: string="password";
  isText: boolean=false;
  eyeIcon: string="fa-eye-slash";
  loginForm! : FormGroup;

  ngOnInit(){
    this.loginForm=this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
}
onSubmit() {
  if (this.loginForm.valid) {
    this.auth.signIn(this.loginForm.value).subscribe(
      {
        next:(res)=>{
          //store the token i got in my response
          this.auth.storeToken(res.token);
          this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});
          this.router.navigate(['dashboard']);
        }, 
        error:(err)=> {
          this.toast.error({detail:"ERROR", summary:"Something when wrong!", duration: 5000});
          console.log(err);        }
      }
    )  
  } else {
    FormValidator.markFormGroupTouched(this.loginForm);
  }
}
}