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
  requestUrl = '';
  constructor(
    private http: HttpClient
  ) { }

  getAllEmployees(): Observable<Employee[]> {
    this.requestUrl = this.address + this.getAllEmployeesTag;
    return this.http.get<Employee[]>(this.requestUrl);
  }
}
