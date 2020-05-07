import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getAllEmployees(){
    this.requestUrl = this.address + this.getAllEmployeesTag;
    return this.http.get(this.requestUrl);
  }
}
