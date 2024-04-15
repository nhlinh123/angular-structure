import {Injectable} from '@angular/core';
import { IPageTodo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoPageService implements IPageTodo {
  todos: { [key: string]: string; }[] = [];

  constructor(
    //@Inject(TODO_API_SERVICE) protected todoApiService: ITodoApiService
  ) {

  }

  addTodo(): void {
    throw new Error('Method not implemented.');
  }
  removeTodo(): void {
    throw new Error('Method not implemented.');
  }
  editTodo(): void {
    throw new Error('Method not implemented.');
  }

}