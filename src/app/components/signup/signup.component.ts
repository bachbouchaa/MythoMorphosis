import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import FormValidator from 'src/app/helpers/validateform';
import { StrongPasswordRegx } from 'src/app/strongPassword';

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
  
  constructor(private fb:FormBuilder){}
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "passwprd";
}
ngOnInit(){
  this.signUpForm=this.fb.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    email:['', Validators.required],
    username:['', Validators.required],
    password:['', Validators.required,/*Validators.pattern(StrongPasswordRegx)*/]
  })
}
onSubmit() {
  if (this.signUpForm.valid) {
    console.log(this.signUpForm.value);
      
  } else {
    FormValidator.markFormGroupTouched(this.signUpForm);
  }
}
}
