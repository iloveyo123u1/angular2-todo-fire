import {bootstrap, Component, CORE_DIRECTIVES, EventEmitter, FORM_DIRECTIVES, Input, Output} from "angular2/angular2";

@Component({
  selector: "to-do",
  template: `
    <div class="row">
      <div class="col-md-7">
        <h5 [ng-class]="{done: todo.done}">
          <span class="glyphicon glyphicon-hand-right" aria-hidden="true"></span>
          &nbsp;
          {{todo.name}}
        </h5>
      </div>
      <div class="col-md-5 pull-right">
        <button (click)="onMarkDone()"  class="btn btn-success hide" [class.hide]="todo.done">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
        </button>
        <button (click)="onEdit()"  class="btn btn-default" [class.hide]="todo.done">
          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        </button>
        <button (click)="onDelete()"  class="btn btn-danger">
          <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    <hr style="width: 100%; color: grey; margin: 2% 0 2% 0">
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class TodoComponent {
  @Input() public todo: Todo;
  @Input() public index: number;
  @Output() public change: EventEmitter<any>= new EventEmitter<any>();

  public onDelete(): void {
    this.change.next({ type: "delete", todo: this.todo, index: this.index });
  }

  public onMarkDone(): void {
    this.change.next({ type: "done", todo: this.todo, index: this.index });
  }

  public onEdit(): void {
    this.change.next({ type: "edit", todo: this.todo, index: this.index });
  }
}

export class Todo {
  public name: string;
  public key: string;
  public done: boolean = false;
}
