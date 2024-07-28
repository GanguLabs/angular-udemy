import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { NewTaskData } from "./new-task/new-task.model";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks = dummyTasks

    getUserTasks(userId: string){
        return this.tasks.filter((task)=>task.userId === userId)
    }

    addTask(taskData: NewTaskData, userId: string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId,
            ...taskData,
        })
    }

    removeTask(taskId: string){
        this.tasks = this.tasks.filter((task)=>task.id !== taskId);
    }
}