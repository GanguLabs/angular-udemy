import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user!: User;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return "assets/users/" + this.user.avatar
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
