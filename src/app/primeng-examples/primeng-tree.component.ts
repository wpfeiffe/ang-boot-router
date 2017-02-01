import { Component, OnInit } from '@angular/core';
import { TreeModule, TreeNode } from 'primeng/primeng'
import {Http} from "@angular/http";
import {EmployeeService} from "../employee-grid/employee.service";
import {Employee} from "../employee-grid/employee";

@Component({
  selector: 'app-primeng-tree',
  templateUrl: './primeng-tree.component.html',
  styleUrls: ['./primeng-tree.component.css']
})
export class PrimengTreeComponent implements OnInit {

  data: TreeNode[];

  employeeData: TreeNode[];

  selectedNodes: TreeNode[];

  constructor(private http: Http, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getCompanyTreeData().then(data => this.data = data);
  }

  nodeSelect(event) {
    //event.node = selected node
  }

  getTreeData() {
    return this.http.get('/app/primeng-examples/files.json')
        .toPromise()
        .then(res => <TreeNode[]> res.json().data)
        .then(data => { return data; });
  }

  getCompanyTreeData() {
    return this.http.get('http://localhost:8080/companies/treenodes')
        .toPromise()
        .then(res => <TreeNode[]> res.json())
        .then(data => { return data; });
  }
}
