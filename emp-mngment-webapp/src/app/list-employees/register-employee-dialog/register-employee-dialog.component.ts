import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/modes/employee';

@Component({
  selector: 'app-register-employee-dialog',
  templateUrl: './register-employee-dialog.component.html',
  styleUrls: ['./register-employee-dialog.component.css']
})
export class RegisterEmployeeDialogComponent {
  bpid = '';
  firstName = '';
  lastName = '';
  location = '';
  position = '';
  phoneNumber = undefined;
  profilePicAddress = '';

  constructor(
    public dialogRef: MatDialogRef<RegisterEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  registerEmployee() {

  }
}
