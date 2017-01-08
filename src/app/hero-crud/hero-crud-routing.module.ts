import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroCrudComponent} from "./hero-crud.component";
import {HeroDetailComponent} from './hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HeroCrudComponent
  },
  {
    path: ':id',
    component: HeroDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HeroCrudRoutingModule { }

