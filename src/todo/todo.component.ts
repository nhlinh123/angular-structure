import { Component, Inject, Injector } from '@angular/core';
import { TODO_TOKEN, todoFactory } from '../injection-token/todo.token';
import { IPageTodo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  template: '',
  providers: [
    {
      provide: TODO_TOKEN,
      useFactory: todoFactory,
      deps: [
        // localization token if needed
        Injector,
      ],
    },
  ],
})
export class TodoAppComponent {
  constructor(@Inject(TODO_TOKEN) protected todoService: IPageTodo) {}

  add() {
    this.todoService.addTodo();
  }

  remove() {
    this.todoService.removeTodo();
  }

  edit() {
    this.todoService.editTodo();
  }
}
