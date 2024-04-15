export interface IPageTodo {
  todos: {[key: string]: string}[];

  addTodo(): void;
  removeTodo(): void;
  editTodo(): void;
}