/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = [];
  }
  add(str) {
    this.todo.push(str);
  }
  remove(index) {
    if (index > this.todo.length - 1) return this.todo;
    else {
      this.todo.splice(index, 1);
    }
  }
  update(index, str) {
    if (index > this.todo.length - 1) return this.todo;
    else {
      this.todo[index] = str;
    }
  }
  getAll() {
    return this.todo;
  }
  get(index) {
    if (index > this.todo.length - 1) return null;
    return this.todo[index];
  }
  clear() {
    this.todo = [];
  }
}
let arr = new Todo();

arr.add("lund lele");
arr.add("gand dede");
arr.update(1, "nhi dunga");
console.log(arr.get(5));

module.exports = Todo;
