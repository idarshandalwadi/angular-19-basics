import { Component, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})

export class ToDoListComponent {

  // Define an array of the Tasks
  taskList = signal<Task[]>([]);

  taskName = signal('');

  addTask() {
    if(this.taskName().trim()){
      const newTask: Task = { id: this.taskList().length + 1, title: this.taskName(), isCompleted : false};
      this.taskList.update(tasks => [...tasks, newTask]);
      this.taskName.set('');
      console.log('Added.!');
    }
  }

  removeTask(taskId : number) {
    this.taskList.update(tasks => tasks.filter(t => t.id !== taskId));
    console.log('Deleted.!');
  }

  toggleTask(taskId: number) {
    this.taskList.update(
      tasks => tasks.map(task => task.id === taskId ? {...task, completed: !task.isCompleted} : task
      ));
      console.log('Toggeled.!');
  }

  editTask(taskId : number) {
    // Need to implement this
  }
}

interface Task { 
  id: number,
  title: string,
  isCompleted: boolean
}
