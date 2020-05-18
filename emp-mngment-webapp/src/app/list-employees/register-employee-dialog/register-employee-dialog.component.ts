import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/modes/employee';
import {Location} from 'src/app/modes/location';
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

  locations: Location[] = [
    {
      displayName: 'Rosebank',
      address: '30 Baker Street, 8Th Floor, East Wing, Standard Bank Centre, Rosebank, Johannesburg, City Of Johannesburg, 2196'
    },
    {
      displayName: 'Simmonds',
      address: '5 Simmonds St, Selby, Johannesburg, 2001'
    },
  ];
  constructor(
    public dialogRef: MatDialogRef<RegisterEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  registerEmployee() {

  }
}
