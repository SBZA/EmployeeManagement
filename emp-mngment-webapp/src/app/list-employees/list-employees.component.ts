import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeManagementService } from '../services/employee-management.service';
import { Employee } from '../modes/employee';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
    public dialog: MatDialog
  ) {
    this.empService.getAllEmployees().subscribe(
      employees => {
        this.employeeList = employees;
      }
    );
  }

  ngOnInit(): void {

  }

  // Removing an employee from the database
  deleteEmployee(employee: Employee){

  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
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
      console.log('The dialog was closed with: ' + JSON.stringify(result));
      this.employee = result;
      this.empService.registerEmployee(this.employee);
    });
  }

}

@Component({
  selector: 'dialog-employee',
  templateUrl: 'dialog-employee.html',
})
export class DialogOverviewExampleDialog {

  bpid = '';
  firstName = '';
  lastName = '';
  location = '';
  position = '';
  phoneNumber = undefined;
  profilePicAddress = '';
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Employee) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
