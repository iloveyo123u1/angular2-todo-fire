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
var TodoForm = (function () {
    function TodoForm(todoService) {
        this.save = new angular2_1.EventEmitter();
        this.todoService = todoService;
        this.submitted = false;
    }
    TodoForm.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.index === -1) {
            this.todoService.addTodo(this.model);
        }
        else {
            this.todoService.saveTodo(this.model, this.index);
        }
        this.submitted = false;
        this.save.next({});
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', todoService_1.TodoService)
    ], TodoForm.prototype, "todoService");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', todo_1.Todo)
    ], TodoForm.prototype, "model");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Number)
    ], TodoForm.prototype, "index");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], TodoForm.prototype, "save");
    TodoForm = __decorate([
        angular2_1.Component({
            selector: "todo-form",
            templateUrl: "app/todoForm/todoForm.html",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [todoService_1.TodoService])
    ], TodoForm);
    return TodoForm;
})();
exports.TodoForm = TodoForm;
//# sourceMappingURL=todoForm.js.map