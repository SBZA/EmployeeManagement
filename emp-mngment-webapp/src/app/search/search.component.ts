import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { EmployeeManagementService } from '../services/employee-management.service';
import { Employee } from '../modes/employee';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private userIdSubject = new Subject<string>();
  private employees: Employee[] = [];
  readonly blogPosts$ = this.userIdSubject.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(userId => this.employeeService.searchEmployeeByName(userId, this.employees))
  );
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  value = '';

  constructor(
    public employeeService: EmployeeManagementService
  ) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((allEmployees) => {
      this.employees = allEmployees;
    });
  }

  searchPosts(userId: string) {
    this.userIdSubject.next(userId);
    console.log(userId);
  }
}
