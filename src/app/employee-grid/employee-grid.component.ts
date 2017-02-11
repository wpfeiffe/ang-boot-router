import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: [
      './employee-grid.component.css',
  ]
})
export class EmployeeGridComponent implements OnInit {

  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "id";
  public sortOrder = "asc";

  constructor(private http: Http) {
  }

  ngOnInit(): void {
    // this.http.get("app/employee-grid/data.json")
    this.http.get(`http://${window.location.hostname}:8080/employees`)
        .subscribe((data) => {
          setTimeout(() => {
            this.data = data.json();
          }, 1000);
        });
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }
}
