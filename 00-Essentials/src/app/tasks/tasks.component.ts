import { Component, OnInit, Input } from '@angular/core';
import { NewTaskData as NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() userId!: string;
  @Input() name!: string;

  isAddingTask:boolean = false;  

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompleteTask(id: string){
    this.tasksService.removeTask(id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddingTask(){
    this.isAddingTask = false;
  }

}
