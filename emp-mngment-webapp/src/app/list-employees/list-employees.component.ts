import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeManagementService } from '../services/employee-management.service';
import { Employee } from '../modes/employee';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

import { DialogService } from '../services/dialog.service';
import { AuthService } from '../auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employeeList: Employee[];
  searchArray: Employee[];
  location: 'Location: ';
  isLoggedIn: boolean;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  value = '';
  private userIdSubject = new Subject<string>();
  private employees: Employee[] = [];
  readonly blogPosts$ = this.userIdSubject.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(userId => this.empService.searchEmployeeByName(userId, this.employees))
  );
  public employee: Employee = {
    bpid: '',
    firstName: '',
    lastName: '',
    location: '',
    position: '',
    phoneNumber: 0,
    profile_pic_address: ''
  };
  firstName: string;
  constructor(
    public empService: EmployeeManagementService,
    public dialogService: DialogService,
    private authService: AuthService,
  ) {
    this.empService.getAllEmployees().subscribe(
      employees => {
        this.employeeList = employees;
      }
    );
    this.isLoggedIn = this.authenticated;

  }


  ngOnInit(): void {

  }

  // Is a user logged in?
  get authenticated(): boolean {
    return this.authService.authenticated;
  }

  openDialog(){
    this.dialogService.openDialog();
  }

  viewEmployeeDialog(employee: Employee){
    this.dialogService.openDialog(employee);
  }

  registerEmployee() {
    this.empService.registerEmployee(this.employee).subscribe();
  }

   // Removing an employee from the database
   deleteEmployee(employee: Employee){
    this.empService.deleteEmployeeById(employee).subscribe();
  }

  deleteAllEmployees() {
    this.empService.deleteAllEmployees().subscribe();
  }

  searchPosts(userId: string) {
    this.searchArray = [...this.employeeList];
    if(userId.length < 1) {
      this.clearSearch();
    }else {
      this.empService.searchEmployeeByName(userId, this.searchArray).subscribe(
        (res) => {
          this.employeeList = res;
        }
      );
    }
  }

  clearSearch(){
    this.empService.getAllEmployees().subscribe(
      employees => {
        this.employeeList = employees;
      }
    );

  }
}
