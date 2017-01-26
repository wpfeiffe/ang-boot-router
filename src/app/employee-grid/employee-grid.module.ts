import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeGridRoutingModule } from './employee-grid-routing.module';
import { EmployeeGridComponent } from './employee-grid.component';
import { EmpGridBoot4Component } from './emp-grid-boot4.component';
import { DataTableModule } from 'angular2-datatable'
import { PaginationModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    EmployeeGridRoutingModule,
    DataTableModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
    TabsModule,
    FormsModule
  ],
  declarations: [EmployeeGridComponent, EmpGridBoot4Component],
  providers: [],
})
export class EmployeeGridModule { }
