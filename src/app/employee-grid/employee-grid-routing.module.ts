import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeGridComponent } from './employee-grid.component'
import { EmpGridBoot4Component } from './emp-grid-boot4.component'

const routes: Routes = [
  {
    path: 'grid',
    component: EmployeeGridComponent
  },
  {
    path: 'boot4',
    component: EmpGridBoot4Component
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EmployeeGridRoutingModule { }
