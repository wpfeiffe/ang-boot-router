import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtLoginRoutingModule } from './jwt-login-routing.module';
import { JwtLoginComponent } from './jwt-login.component';
import { JwtLoginService } from './jwt-login.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions} from "@angular/http";


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}

@NgModule({
  imports: [
    CommonModule,
    JwtLoginRoutingModule,
    Angular2FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [JwtLoginComponent],
  providers: [JwtLoginService, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [ Http, RequestOptions ]
  }]
})
export class JwtLoginModule { }
