import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  text!: string;
  reminder: boolean = false;
  showAddTodo!: boolean;
  subscription!: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTodo = value));
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTodo = {
      text: this.text,
      day: new Date().toLocaleDateString(),
      reminder: this.reminder,
    };
    this.onAddTodo.emit(newTodo);
  }
}
