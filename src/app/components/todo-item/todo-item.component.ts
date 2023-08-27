import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Todo> = new EventEmitter();
  faTimes = faTimes;
  onDelete(todo: Todo) {
    this.onDeleteTodo.emit(todo);
  }
  onToggle(todo: Todo) {
    this.onToggleReminder.emit(todo);
  }
}

// ERROR
// typescript error must be initialized

//     Definite Assignment Assertion: Since you know that the value for todo will be provided by the parent component through the @Input() binding, you can use the definite assignment assertion ! to tell TypeScript that the property will be assigned later:

// @Input() todo!: Todo;

// Constructor Initialization: Alternatively, you can initialize the todo property in the constructor to satisfy TypeScript's initialization rules:

// @Input() todo: Todo;

// constructor() {
//   this.todo = {} as Todo; // Initialize with a default value, but it will be overridden by the actual input value.
// }

// Both of these options will suppress the TypeScript error. Using the definite assignment assertion is generally safer if you are confident that the property will be properly assigned by the parent component.

// Choose the option that best fits your design and preference.
