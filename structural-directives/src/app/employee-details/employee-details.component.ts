import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
      <h2>Employee Details</h2>
      <h3>{{errorMsg}}</h3>
      <ul *ngFor="let employee of employees">
        <li>{{employee.id}}.{{employee.name}} -- {{employee.age}}</li>
      </ul>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];
  public errorMsg;
  constructor(private employeeList : EmployeeService) { }

  ngOnInit() {
    this.employeeList.getEmployees().subscribe(data => this.employees = data,
                                               error =>this.errorMsg = error );
  }

}
