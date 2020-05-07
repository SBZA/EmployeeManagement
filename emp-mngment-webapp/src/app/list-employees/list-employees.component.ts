import { Component, OnInit } from '@angular/core';
import { EmployeeManagementService } from '../services/employee-management.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor(
    public empService: EmployeeManagementService
  ) {
    this.empService.getAllEmployees().subscribe(
      (obj) => {
        console.log('Result is ' + obj);
      }
    );
  }

  ngOnInit(): void {
  }

}
