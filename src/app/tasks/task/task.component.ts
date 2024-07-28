import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() complete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }

}
