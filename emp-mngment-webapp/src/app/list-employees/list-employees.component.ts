import { Component, OnInit, Input } from '@angular/core';
import { EmployeeManagementService } from '../services/employee-management.service';
import { Employee } from '../modes/employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employeeList: Employee[];
  location: 'Location: ';
  constructor(
    public empService: EmployeeManagementService
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
}
