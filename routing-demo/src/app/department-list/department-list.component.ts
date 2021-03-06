import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department Names</h3>
    <div>
      <ul class='items'>
        <li (click)="onSelect(department)" [class.select]="isSelected(department)" *ngFor="let department of departments">
          <span class="badge">{{department.id}}</span> {{department.name}}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['departmentCSS.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id": 1, "name" : "Angular1"},
    {"id": 2, "name" : "Angular2"},
    {"id": 3, "name" : "Angular3"},
    {"id": 4, "name" : "Angular4"},
    {"id": 5, "name" : "Angular5"}
  ]

  public selectedId;

  constructor(private router : Router, private route:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.selectedId = id;
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
