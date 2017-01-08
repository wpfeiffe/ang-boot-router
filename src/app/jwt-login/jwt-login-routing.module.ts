import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JwtLoginComponent} from "./jwt-login.component";

const routes: Routes = [
  {
    path: '',
    component: JwtLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class JwtLoginRoutingModule { }
