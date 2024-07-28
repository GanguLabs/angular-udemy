import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();
  
  enteredTitle = '';
  enteredDate = '';
  enteredSummary = '';


  constructor() { }

  ngOnInit(): void {
  }

  onCancelDialog(){
    this.cancel.emit();
  }

  onNewTaskSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }

}
