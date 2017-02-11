import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {

    // private employeesUrl = 'app/employees';  // URL to web api
    private employeesUrl = `http://${window.location.hostname}:8080/employees`;  // URL to web api

    constructor(private http: Http) { }

    getEmployeees(): Promise<Employee[]> {
        //return this.http.get(this.employeesUrl,  new RequestOptions({headers: new Headers({'Content-Type': 'application/json', "Authorization": localStorage.getItem('id_token')})}))
        return this.http.get(this.employeesUrl)
            .toPromise()
            //.then(response => response.json().data as Employee[])
            .then(response => response.json() as Employee[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getEmployee(id: number): Promise<Employee> {
        return this.getEmployeees()
            .then(employees => employees.find(employee => employee.id === id));
    }

    getSingleEmployee(id: number): Promise<Employee> {
        const url = `${this.employeesUrl}/${id}`;

        return this.http
            .get(url, {headers: this.headers})
            .toPromise()
            .then((res) => res.json())
            .catch(this.handleError);
    }

    private headers = new Headers({'Content-Type': 'application/json'});

    update(employee: Employee): Promise<Employee> {
        const url = `${this.employeesUrl}/${employee.id}`;

        return this.http
            .put(url, JSON.stringify(employee), {headers: this.headers})
            .toPromise()
            .then(() => employee)
            .catch(this.handleError);
    }

    create(name: string): Promise<Employee> {
        return this.http
            .post(this.employeesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            //            .then(res => res.json().data)
            .then(res => res.json())
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.employeesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}
