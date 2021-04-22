import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModal } from 'src/app/model/login.model';
import { URLS } from 'src/app/_baseurl/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  loginUserApi(login: LoginModal){
    const url: string = URLS.loginUrl;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "POST",
      })
    }
    return this.http.post(url, login, httpOptions)
  }
}
