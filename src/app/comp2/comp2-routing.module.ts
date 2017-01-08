import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Comp2Component} from "./comp2.component";

const routes: Routes = [
  {
    path: '',
    component: Comp2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Comp2RoutingModule { }
