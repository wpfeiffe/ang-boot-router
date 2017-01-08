import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCrudRoutingModule } from './hero-crud-routing.module';
import { HeroCrudComponent } from './hero-crud.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from "./hero.service";
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { Http, RequestOptions} from "@angular/http";

//
// The method for using the angular2-jwt authHttp came from this github post:
//
// https://github.com/auth0/angular2-jwt/issues/258
// (it should be simpler?!)
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
  //return new AuthHttp( new AuthConfig({noTokenScheme: true}), http, options);

  // return new AuthHttp( new AuthConfig({
  //   headerPrefix: '',
  //   noJwtError: true,
  //   tokenName:'id_token',
  //   globalHeaders: [{'Accept': 'application/json'}],
  //   tokenGetter: (() => localStorage.getItem('id_token'))
  // }), http, options);
}

@NgModule({
  imports: [
    CommonModule,
    HeroCrudRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Angular2FontAwesomeModule
  ],
  declarations: [HeroCrudComponent, HeroDetailComponent],
  providers: [HeroService, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [ Http, RequestOptions ]
  }]
})
export class HeroCrudModule { }
