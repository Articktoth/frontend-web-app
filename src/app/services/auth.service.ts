import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url: string;

  constructor(private http: HttpClient,
    private router: Router) {
    this.url = Global.url;

   }

  signUp(user){
    return this.http.post<any>(this.url + 'register', user);
  }

  signIn(user){
    return this.http.post<any>(this.url + 'login', user);
  }

  loggedIn(){
    return !!localStorage.getItem('accessToken');
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }

  logout(){
    localStorage.removeItem('accessToken');
    this.router.navigate(['/signin']);
  }

}
