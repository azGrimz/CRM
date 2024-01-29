import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private role = '';
  private readonly loginAPI = 'http://localhost:8081/api/login';
  constructor
    (
      private http: HttpClient,
      private router: Router,

    ) {}


  public get roleValue() {
    return this.role
  }


  login(users: Login) {
    return this.http.post<any>(this.loginAPI, users)
  }

}
