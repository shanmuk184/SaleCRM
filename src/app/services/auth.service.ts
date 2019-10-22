import { Platform } from '@ionic/angular';
import { RegisterAuthResponse } from './../interfaces/auth-response';
import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
// import {} from '';
const AUTH_TOKEN = 'ACCESS_TOKEN';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isloggedin = new BehaviorSubject(false);
  AUTH_SERVER_ADDRESS: string = 'http://localhost:8888';
  constructor(
    private httpClient: HttpClient,
    private storage: Storage,
    private router: Router,
    private platform:Platform
  ) {
    this.platform.ready().then(()=>{
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(AUTH_TOKEN).then(res => {
      if (res) {
        this.isloggedin.next(true);
      }
    });
  }
  isLoggedIn(){
    return this.isloggedin.value;
  }

  register(user: User): Observable<RegisterAuthResponse> {
    return this.httpClient
      .post<RegisterAuthResponse>(
        `${this.AUTH_SERVER_ADDRESS}/api/register`,
        user
      )
      .pipe(
        tap(
          async (res: RegisterAuthResponse) => {
            if (res) {
              this.isloggedin.next(true);
              await this.storage.set(AUTH_TOKEN, res.auth_token);
              // await this.storage.set('EXPIRES_IN', res.user.expires_in);
            }
          },
          async (res: any) => {
            console.log(res.error);
          }
        )
      );
  }

  login(user: User): Observable<RegisterAuthResponse> {
    return this.httpClient
      .post(`${this.AUTH_SERVER_ADDRESS}/api/login`, user)
      .pipe(
        tap(
          async (res: RegisterAuthResponse) => {
            if (res) {
              await this.storage.set('ACCESS_TOKEN', res.auth_token);
              // await this.storage.set('EXPIRES_IN', res.expires_in);
              this.isloggedin.next(true);
            }
          },
          async (err: any) => {
            console.log(err);
          }
        )
      );
  }
   
  logout() {
    return this.storage.remove(AUTH_TOKEN).then(() => {
      this.isloggedin.next(false);
    });
  }
}
