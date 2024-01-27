// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import FormValidator from 'src/app/helpers/validateform';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  // initialisation et déclarations des variables du fa-eye et du m2p par défaut 
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
          alert(res.message);
        }, 
        error:(err)=> {
          alert(err?.error.message);     
        }
      }
    )  
  } else {
    FormValidator.markFormGroupTouched(this.loginForm);
  }
}
}