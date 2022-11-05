import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo

  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editTodoClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteTodoClicked: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {}
  
  onTodoClicked() {
    this.todoClicked.emit()
  }

  onEditTodoClicked() {
    this.editTodoClicked.emit()
  }

  onDeleteTodoClicked() {
    this.deleteTodoClicked.emit()
  }
}
