class Todo {
  constructor(task) {
    this.task = task;
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }

  markIncomplete() {
    this.completed = false;
  }

  toString() {
    return `${this.task} has ${this.completed ? "been completed" : "not been completed"}`;
  }
}

module.exports = Todo;
