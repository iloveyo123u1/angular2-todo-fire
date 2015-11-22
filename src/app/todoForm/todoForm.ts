import {Component, CORE_DIRECTIVES, EventEmitter, FORM_DIRECTIVES, Input, Output} from "angular2/angular2";
import { Todo } from "../todo/todo";
import { TodoService } from "../todoService/todoService";

@Component({
  selector: "todo-form",
  templateUrl: "app/todoForm/todoForm.html",
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class TodoForm {
  @Input() public todoService: TodoService;
  @Input() public model: Todo;
  @Input() public index: number;
  @Output() public save: EventEmitter<any> = new EventEmitter<any>();
  public submitted: boolean;

  public constructor(todoService: TodoService) {
    this.todoService = todoService;
    this.submitted = false;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.index === -1) {
      this.todoService.addTodo(this.model);
    } else {
      this.todoService.saveTodo(this.model, this.index);
    }
    this.submitted = false;
    this.save.next({});
  }
}