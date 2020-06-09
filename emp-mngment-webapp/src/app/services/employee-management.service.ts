import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../modes/employee';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {

  ///////////////////////////////////////////////////////////////////
  // For requests to persistence
  private address = 'http://localhost:8080/emp-mngment-app/';
  private getAllEmployeesTag = 'employees';
  private createNewEmployeesTag = 'save';
  private archiveEmployeesByIdTag = 'archiveEmployeeById';
  private archiveEmployeeByObjectTag = 'archiveEmployeeByObject';
  private archiveAllEmployeesTag = 'archiveAllEmployees';
  private requestUrl = '';
  private postUrl = '';
  //////////////////////////////////////////////////////////////////

  // For Live Search
  private employees: Employee[];
  constructor(
    private http: HttpClient
  ) { }

  getAllEmployees(): Observable<Employee[]> {
    this.requestUrl = this.address + this.getAllEmployeesTag;
    return this.http.get<Employee[]>(this.requestUrl);
  }

  // @input - Employee object
  // @process - perform a post request through the employee postUrl
  registerEmployee(employee: Employee): Observable<any> {
    this.postUrl = this.address + this.createNewEmployeesTag;
    return this.http.post(this.postUrl, employee);
  }

  // Removing an employee from the database
  deleteEmployeeById(employee: Employee){
    console.log('Attempting To Delete Employee:' + employee.bpid);
    this.postUrl = this.address + this.archiveEmployeesByIdTag;
    console.log('Using address:' + this.postUrl);
    return this.http.post(this.postUrl, employee.bpid);
  }

  deleteEmployeeByObject(employee: Employee){
    console.log('Attempting To Delete Employee:' + employee.bpid);
    this.postUrl = this.address + this.archiveEmployeeByObjectTag;
    console.log('Using address:' + this.postUrl);
    return this.http.post(this.postUrl, employee);
  }
  deleteAllEmployees(){
    console.log('Attempting To Delete All Employees');
    this.postUrl = this.address + this.archiveAllEmployeesTag;
    return this.http.post(this.postUrl, '');
  }

  getEmployee(userId: string): Observable<Employee[]> {
    console.log(userId)
    this.requestUrl = this.address + this.getAllEmployeesTag;
    return this.http.get<Employee[]>(this.requestUrl);
  }

  searchEmployeeByName(userId: string, employees: Employee[]): Observable<Employee[]> {
    // this.requestUrl = this.address + this.getAllEmployeesTag;
    this.employees = [];
    employees.forEach((tempEmployee: Employee) => {
      if (tempEmployee.firstName.indexOf(userId) >= 0) {
        this.employees.push(tempEmployee);
      }
    }
    );
    return this.employees.length > 0 ? of(this.employees) : of(employees);
    // return this.http.get<Employee[]>(this.requestUrl);
  }

}

