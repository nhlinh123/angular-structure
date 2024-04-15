import { InjectionToken, Injector } from "@angular/core";
import { IPageTodo } from "../interfaces/todo.interface";
import { TodoPageService } from "../services/todo-page.service";

export const TODO_TOKEN = new InjectionToken<IPageTodo>('token for todo page service');

export function todoFactory (
  // localization if needed
  injector: Injector
): IPageTodo {
  //
  // if we need to implement multiple versions/services
  // use switch case or anything to return implementation of IPageTodo.
  // switch (condition)
  //  return TodoPageService1
  //  return TodoPageService2
  //

  // inject some services if needed.
  // const someService = injector.get<Interface_Here>(TOKEN_HERE);
  // return new TodoPageService(someService);
  return new TodoPageService();
}