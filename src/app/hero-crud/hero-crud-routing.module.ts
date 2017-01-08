import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroCrudComponent} from "./hero-crud.component";

const routes: Routes = [{
  path: '',
  component: HeroCrudComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HeroCrudRoutingModule { }

