import { Component, OnInit } from '@angular/core';
import { EditTodoModalComponent } from '../edit-todo-modal/edit-todo-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { v4 as uuid } from 'uuid'
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  ngOnInit(): void {}
  
  todoItem: string = ''
  todoList: Todo[] = []

  constructor(private matDiaLog: MatDialog) {
  }

  handleAddTodo() {
    if(this.todoItem.trim()) {
      this.todoList.push({id: uuid(), name: this.todoItem, completed: false})
      this.todoItem = ''
    } else return
  }
  handleRemoveTodo(id: string) {
    this.todoList = this.todoList.filter(todoItem => id !== todoItem.id)
  }

  handleCompleteTodo(id: string) {
     const toggleTodo = this.todoList.map((todoItem) => {
      if(todoItem.id === id) {
        todoItem.completed = !todoItem.completed
      }
     })
     return toggleTodo
  }

  handleEditTodo(todo: Todo) {
    const index = this.todoList.indexOf(todo) 

    let dialogRef = this.matDiaLog.open(EditTodoModalComponent, {
      width: '40%',
      data: todo
    })

    dialogRef.afterClosed().subscribe((result) => {
      if(result.name !== '' && result.name.trim()) {
        this.todoList[index] = result
      }
    })
  }
}
