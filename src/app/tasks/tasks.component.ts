import { Component, OnInit, Input } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() userId!: string;
  @Input() name!: string;
  tasks = dummyTasks

  get selectedUserTasks(){
    return this.tasks.filter((task)=> task.userId === this.userId)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
