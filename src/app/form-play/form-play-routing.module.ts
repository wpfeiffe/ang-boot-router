import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormPlayComponent} from "./form-play.component";

const routes: Routes = [
  {
    path: '',
    component: FormPlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormPlayRoutingModule { }
