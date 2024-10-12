import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    // shared module reference: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43797802#overview
    SharedModule, // this makes the shared components available in all components 
    TasksModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
