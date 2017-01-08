import { Component, OnInit } from '@angular/core';
import { LoginUser } from './login-user';
import { JwtLoginService } from './jwt-login.service';
import { UserInfo } from "./user-info";
import {userInfo} from "os";

@Component({
  selector: 'app-jwt-login',
  templateUrl: './jwt-login.component.html',
  styleUrls: ['./jwt-login.component.css']
})
export class JwtLoginComponent implements OnInit {

  loginUser: LoginUser = {username: "", password: ""};
  showUserInfo:boolean = false;
  message:string = "";
  userInfo: UserInfo;



  constructor(private loginService: JwtLoginService) { }

  ngOnInit() {
  }

  doLogin(form: any): void {
    this.loginService.doLogin(this.loginUser)
        .then(function(tokenValue){
            console.log(`The token value is ${tokenValue}`);
            localStorage.setItem("id_token", tokenValue);
        });
  }

  logout() {
      this.loginService.logout();
  }

  loggedIn(): boolean {
      return this.loginService.loggedIn();
  }

  logUser(): void {
      this.loginService.getUser()
          .then(jsonUser => {
              console.log(jsonUser);
              this.userInfo = jsonUser as UserInfo;
              console.log(this.userInfo);
          });
  }



}
