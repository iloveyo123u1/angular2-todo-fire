var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var todo_1 = require("../todo/todo");
var todoService_1 = require("../todoService/todoService");
var Todolist = (function () {
    function Todolist(todoService) {
        var _this = this;
        this.edit = new angular2_1.EventEmitter();
        this.todos = new Array();
        this.todoService = todoService;
        this.loading = false;
        this.todoService.getTodos().on("value", function (snapshot) {
            _this.todos = [];
            snapshot.forEach(function (element) {
                var todo = new todo_1.Todo();
                todo.name = element.val().name;
                todo.done = element.val().done;
                todo.key = element.key();
                _this.todos.push(todo);
                _this.loading = true;
            });
        });
    }
    Todolist.prototype.onChange = function (event) {
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
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', todoService_1.TodoService)
    ], Todolist.prototype, "todoService");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], Todolist.prototype, "edit");
    Todolist = __decorate([
        angular2_1.Component({
            selector: "todo-list",
            template: "\n    <div class=\"row\">\n      <h6 class=\"hide text-center\" [class.hide]=\"loading\">Loading...</h6>\n      <to-do *ng-for=\"#todo of todos; var index=index\" [todo]=\"todo\" [index]=\"index\" (change)=\"onChange($event)\"></to-do>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, todo_1.TodoComponent]
        }), 
        __metadata('design:paramtypes', [todoService_1.TodoService])
    ], Todolist);
    return Todolist;
})();
exports.Todolist = Todolist;
//# sourceMappingURL=todolist.js.map