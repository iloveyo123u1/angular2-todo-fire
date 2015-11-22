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
var TodoComponent = (function () {
    function TodoComponent() {
        this.change = new angular2_1.EventEmitter();
    }
    TodoComponent.prototype.onDelete = function () {
        this.change.next({ type: "delete", todo: this.todo, index: this.index });
    };
    TodoComponent.prototype.onMarkDone = function () {
        this.change.next({ type: "done", todo: this.todo, index: this.index });
    };
    TodoComponent.prototype.onEdit = function () {
        this.change.next({ type: "edit", todo: this.todo, index: this.index });
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Todo)
    ], TodoComponent.prototype, "todo");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Number)
    ], TodoComponent.prototype, "index");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], TodoComponent.prototype, "change");
    TodoComponent = __decorate([
        angular2_1.Component({
            selector: "to-do",
            template: "\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <h5 [ng-class]=\"{done: todo.done}\">\n          <span class=\"glyphicon glyphicon-hand-right\" aria-hidden=\"true\"></span>\n          &nbsp;\n          {{todo.name}}\n        </h5>\n      </div>\n      <div class=\"col-md-5 pull-right\">\n        <button (click)=\"onMarkDone()\"  class=\"btn btn-success hide\" [class.hide]=\"todo.done\">\n          <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\n        </button>\n        <button (click)=\"onEdit()\"  class=\"btn btn-default\" [class.hide]=\"todo.done\">\n          <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n        </button>\n        <button (click)=\"onDelete()\"  class=\"btn btn-danger\">\n          <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n        </button>\n      </div>\n    </div>\n    <hr style=\"width: 100%; color: grey; margin: 2% 0 2% 0\">\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoComponent);
    return TodoComponent;
})();
exports.TodoComponent = TodoComponent;
var Todo = (function () {
    function Todo() {
        this.done = false;
    }
    return Todo;
})();
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map