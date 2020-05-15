import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../modes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {
  private address = 'http://localhost:8080/emp-mngment-app/';
  private getAllEmployeesTag = 'employees';
  private createNewEmployeesTag = 'save';
  private requestUrl = '';
  private postUrl = '';
  constructor(
    private http: HttpClient
  ) { }

  getAllEmployees(): Observable<Employee[]> {
    this.requestUrl = this.address + this.getAllEmployeesTag;
    return this.http.get<Employee[]>(this.requestUrl);
  }

  // @input - Employee object
  // @process - perform a post request through the employee postUrl
  registerEmployee(employee: Employee) {
  }
}
