import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private link:string ='';
  constructor (private http: HttpClient){
  }
  signUp(userObj:any){
    return this.http.post<any>(`${this.link}register`, userObj);
  }
  signIn(loginObj : any){
    return this.http.post<any>(`${this.link}authenticate`,loginObj)
  }
}


