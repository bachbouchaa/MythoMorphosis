import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private link : string ='';
  constructor (private http: HttpClient, private router: Router){
  }
  signUp(userObj:any){
    return this.http.post<any>(`${this.link}register`, userObj);
  }
  signIn(loginObj : any){
    return this.http.post<any>(`${this.link}authenticate`,loginObj)
  }
  signOut(){
    localStorage.clear();
    this.router.navigate(['/'])
  }
  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }
  storeRefreshToken(tokenValue: string){
    localStorage.setItem('refreshToken', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  getRefreshToken(){
    return localStorage.getItem('refreshToken')
  }

  isAuthenticated(): boolean{
    //convert string to boolean
    return !!localStorage.getItem('token')
  }
  

}


