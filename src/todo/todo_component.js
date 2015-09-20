import {ComponentMetadata as Component, ViewMetadata as View, NgFor} from 'angular2/angular2';
import {TodoService} from './todo_service';

@Component({
  selector: 'todo'
})

@View({
  template: `
    <ul>
      <li *ng-for="#todo of todos">
        {{ todo }}
      </li>
    </ul>
    <input #todotext (keyup)="doneTyping($event)">
    <button (click)="addTodo(todotext.value)">Add Todo</button>
  `,
  directives: [NgFor]
})

export class TodoComponent {
  todos: Array<string>;

  constructor() {
    this.todoService = new TodoService();
    this.todos = this.todoService.todos;
  }

  addTodo(todo: string) {
    this.todoService.addTodo(todo);
    this.todos = this.todoService.todos;
  }

  doneTyping($event) {
    if($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}
