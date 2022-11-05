import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-edit-todo-modal',
  templateUrl: './edit-todo-modal.component.html',
  styleUrls: ['./edit-todo-modal.component.scss'],
})
export class EditTodoModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    private Ref: MatDialogRef<EditTodoModalComponent>
  ) {}

  ngOnInit(): void {
  }
  
  Closepopup() {
    this.Ref.close()
  }

  handleEditTodo(newValue : string) {
    const updatedTodo = {
      ...this.data,
      name: newValue
    }

    this.Ref.close(updatedTodo)
  }
}
