import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrimengGridComponent} from "./primeng-grid.component";
import {PrimengTreeComponent} from "./primeng-tree.component";

const routes: Routes = [
  {
    path: 'grid',
    component: PrimengGridComponent
  },
  {
    path: 'tree',
    component: PrimengTreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PrimengExamplesRoutingModule { }
