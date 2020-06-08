import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { EmployeeManagementService } from '../services/employee-management.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private userIdSubject = new Subject<string>();
  readonly blogPosts$ = this.userIdSubject.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(userId => this.employeeService.getEmployee(userId))
  );
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  value = '';

  constructor(
    public employeeService: EmployeeManagementService
  ) { }

  ngOnInit(): void {
  }

  searchPosts(userId: string) {
    this.userIdSubject.next(userId);
    console.log(userId);
  }
}
