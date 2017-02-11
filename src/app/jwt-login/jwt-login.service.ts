import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { LoginUser } from './login-user';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JwtLoginService {

  private authUrl = `http://${window.location.hostname}:8080/auth`;  // URL to web api
  private userUrl = `http://${window.location.hostname}:8080/user`;  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
  private authenticated: boolean = false;

  constructor(private http: Http, private authHttp: AuthHttp) {
    if (localStorage.getItem('id_token'))
    {
      this.authenticated = true;
    }
  }

  doLogin(loginUser: LoginUser): Promise<any> {
    return this.http
        .post(this.authUrl, JSON.stringify(loginUser), {headers: this.headers})
        .toPromise()
        .then(res => this.storeToken(res))
        .catch(this.handleError);

  }

  getUser(): Promise<any> {
    return this.authHttp
        .get(this.userUrl, {headers: this.headers})
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
  }

  logout() {
    if (this.loggedIn) {
      localStorage.removeItem("id_token");
      this.authenticated = false;
    }
  }

  loggedIn(): boolean {
    return this.authenticated;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private storeToken(res): string {
    var tokenValue: string = res.json().token;
    console.log(`The token value is ${tokenValue}`);
    localStorage.setItem("id_token", tokenValue);
    this.authenticated = true;
    return tokenValue;
  }



}
