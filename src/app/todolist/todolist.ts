import {Component, Input, CORE_DIRECTIVES, EventEmitter, FORM_DIRECTIVES, Output} from "angular2/angular2";
import {Todo, TodoComponent} from "../todo/todo";
import {TodoService} from "../todoService/todoService";

@Component({
  selector: "todo-list",
  template: `
    <div class="row">
      <h6 class="hide text-center" [class.hide]="loading">Loading...</h6>
      <to-do *ng-for="#todo of todos; var index=index" [todo]="todo" [index]="index" (change)="onChange($event)"></to-do>
    </div>
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, TodoComponent]
})
export class Todolist {
  @Input() public todoService: TodoService;
  @Output() public edit: EventEmitter<any> = new EventEmitter<any>();
  private todos: Array<Todo> = new Array<Todo>();
  private loading: boolean;

  public constructor(todoService: TodoService) {
    this.todoService = todoService;
    this.loading = false;
    this.todoService.getTodos().on("value", (snapshot: any) => {
      this.todos = [];
      snapshot.forEach((element: any) => {
        let todo: Todo = new Todo();
        todo.name = element.val().name;
        todo.done = element.val().done;
        todo.key = element.key();
        this.todos.push(todo);
        this.loading = true;
      });
    });
  }

  public onChange(event: any): void {
    switch (event.type) {
      case "delete":
        this.todoService.deleteTodo(event.todo, event.index);
        break;
      case "done":
        this.todoService.markDone(event.todo, event.index);
        break;
      case "edit":
        this.edit.next({ todo: event.todo, index: event.index });
        break;
      default: break;
    }
  }
}
