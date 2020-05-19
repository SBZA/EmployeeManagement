import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterEmployeeDialogComponent } from '../list-employees/register-employee-dialog/register-employee-dialog.component';
import { Employee } from '../modes/employee';
import { EmployeeManagementService } from './employee-management.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private employee: Employee = {
    bpid: '',
    firstName: '',
    lastName: '',
    location: '',
    position: '',
    phoneNumber: 0,
    profile_pic_address: ''
  };
  constructor(
    public dialog: MatDialog,
    public empService: EmployeeManagementService
  ) { }

  openDialog(data?: Employee){
    let dialogRef;
    if (data != null) {
      dialogRef = this.dialog.open(RegisterEmployeeDialogComponent, {
        width: '500px',
        data: {
          bpid: data.bpid,
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          position: data.position,
          location: data.location
        }
      });
    }
    else {
      dialogRef = this.dialog.open(RegisterEmployeeDialogComponent, {
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
    }
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log('The dialog was closed with: ' + JSON.stringify(result));
        this.employee = result;
        this.empService.registerEmployee(this.employee);
        // this.empService.registerEmployee(this.employee);
      }
    });
  }
}
