import { Component, OnInit, Input } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTask as NewTaskData } from './new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() userId!: string;
  @Input() name!: string;

  isAddingTask:boolean = false;
  
  tasks = dummyTasks

  get selectedUserTasks(){
    return this.tasks.filter((task)=> task.userId === this.userId)
  }

  constructor() { }

  ngOnInit(): void {
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task)=>task.id !== id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCalcelAddingTask(){
    this.isAddingTask = false;
  }

  onAddTask(newTask: NewTaskData){

    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      ...newTask,
      dueDate: newTask.date
    })
    this.isAddingTask = false;
  }

}
