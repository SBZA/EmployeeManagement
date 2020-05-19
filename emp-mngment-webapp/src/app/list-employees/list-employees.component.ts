import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeManagementService } from '../services/employee-management.service';
import { Employee } from '../modes/employee';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RegisterEmployeeDialogComponent} from './register-employee-dialog/register-employee-dialog.component';
import { Route } from '@angular/compiler/src/core';
import { DialogService } from '../services/dialog.service';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employeeList: Employee[];
  location: 'Location: ';
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
    public dialogService: DialogService
  ) {
    this.empService.getAllEmployees().subscribe(
      employees => {
        this.employeeList = employees;
      }
    );
  }

  ngOnInit(): void {

  }

  openDialog(){
    this.dialogService.openDialog();
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


}
