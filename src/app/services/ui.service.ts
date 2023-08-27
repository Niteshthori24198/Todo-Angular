import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTodo: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  toggleAddTodo(): void {
    this.showAddTodo = !this.showAddTodo;
    this.subject.next(this.showAddTodo);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
