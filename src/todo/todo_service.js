export class TodoService {
  todos: Array<string>;

  constructor() {
    this.todos = [];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }
}
