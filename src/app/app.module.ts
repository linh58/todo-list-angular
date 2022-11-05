import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { EditTodoModalComponent } from './edit-todo-modal/edit-todo-modal.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from '../Material-Module';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component'

@NgModule({
  declarations: [
    AppComponent,
    EditTodoModalComponent,
    TodosComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
