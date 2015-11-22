import {bootstrap, Injectable} from "angular2/angular2";
import {Todo} from "../todo/todo";

@Injectable()
export class TodoService {
  private todoRef: Firebase;
  private firebaseUrl: string;

  public constructor() {
    this.firebaseUrl = "https://popping-inferno-3802.firebaseio.com/todos";
    this.todoRef = new Firebase(this.firebaseUrl);
  }

  public addTodo(todo: Todo): void {
    this.todoRef.push(todo);
  }

  public deleteTodo(todo: Todo, index: number): void {
    this.todoRef.child(todo.key).remove();
  }

  public markDone(todo: Todo, index: number): void {
    todo.done = true;
    this.todoRef.child(todo.key).set(todo);
  }

  public saveTodo(todo: Todo, index: number): void {
    this.todoRef.child(todo.key).set(todo);
  }

  public getTodos(): Firebase {
    return this.todoRef;
  }
}
