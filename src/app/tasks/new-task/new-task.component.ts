import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Input() userId!: string;

  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();
  
  enteredTitle = '';
  enteredDate = '';
  enteredSummary = '';

  private tasksService = inject(TasksService);

  constructor() { }

  ngOnInit(): void {
  }

  onCancelDialog(){
    this.close.emit();
  }

  onNewTaskSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    },
      this.userId
    );
    this.close.emit();
  }

}
