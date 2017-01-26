import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengExamplesRoutingModule } from './primeng-examples-routing.module';
import { PrimengGridComponent } from './primeng-grid.component';
import { PrimengTreeComponent } from './primeng-tree.component';
import { DataTableModule, SharedModule, TreeModule } from 'primeng/primeng';
import { Company } from '../employee-grid/company';
import { EmployeeService } from '../employee-grid/employee.service';
import { Employee } from '../employee-grid/employee';
import { Department } from '../employee-grid/department';


@NgModule({
  imports: [
    CommonModule,
    PrimengExamplesRoutingModule,
    DataTableModule,
    SharedModule,
    TreeModule
  ],
  declarations: [PrimengGridComponent, PrimengTreeComponent],
  providers: [EmployeeService]
})
export class PrimengExamplesModule { }
