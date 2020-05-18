import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeManagementService } from '../services/employee-management.service';
import { Employee } from '../modes/employee';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RegisterEmployeeDialogComponent} from './register-employee-dialog/register-employee-dialog.component';
import { Route } from '@angular/compiler/src/core';
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
    public dialog: MatDialog,
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
    const dialogRef = this.dialog.open(RegisterEmployeeDialogComponent, {
      width: '500px',
      data: {
        bpid: this.employee.bpid,
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        phoneNumber: this.employee.phoneNumber,
        position: this.employee.position,
        location: this.employee.location
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        console.log('The dialog was closed with: ' + JSON.stringify(result));
        this.employee = result;
        this.registerEmployee();
        // this.empService.registerEmployee(this.employee);
      }
    });
  }

  registerEmployee() {
    this.empService.registerEmployee(this.employee).subscribe();
  }

   // Removing an employee from the database
   deleteEmployee(employee: Employee){
    console.log('Attempting To Delete Employee: ' + employee.firstName);
    this.empService.deleteEmployeeById(employee);
  }

  deleteAllEmployees() {
    this.empService.deleteAllEmployees().subscribe();
  }
}
