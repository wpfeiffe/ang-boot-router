import { Component, OnInit } from '@angular/core';
import { Company } from '../employee-grid/company';
import { EmployeeService } from '../employee-grid/employee.service';
import { Employee } from '../employee-grid/employee';
import { Department } from '../employee-grid/department';

@Component({
  selector: 'app-primeng-examples',
  templateUrl: './primeng-grid.component.html',
  styleUrls: [
      './primeng-grid.component.css',
  ]
})
export class PrimengGridComponent implements OnInit {

  employees: Employee [] = [];
  selectionMessage: string = "No selection";

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployeees()
        .then(employees => this.employees = employees);
  }

  onRowSelect(event){
    console.log(event);
    this.selectionMessage = `You selected employee "${event.data.firstName} ${event.data.lastName}"`;
  }

  onRowUnselect(event){
    console.log(event);
    this.selectionMessage = `No selection`
  }
}
