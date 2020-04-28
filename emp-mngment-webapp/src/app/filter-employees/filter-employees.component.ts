import { Component, OnInit } from '@angular/core';
import { EmployeeTile } from 'src/models/employee-tile';

@Component({
  selector: 'app-filter-employees',
  templateUrl: './filter-employees.component.html',
  styleUrls: ['./filter-employees.component.css']
})
export class FilterEmployeesComponent implements OnInit {
  tiles: EmployeeTile[] = [
    {text: 'Graduates', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Joined In The Last Month', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Veterans', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Retired', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
