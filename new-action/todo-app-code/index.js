const http = require("http");
const Todo = require("./todo");

const tasks = [
  new Todo("Clean Cat Litter"),
  new Todo("Buy Groceries"),
  new Todo("Finish Homework")
];

tasks[0].markComplete();

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  tasks.forEach(task => res.write(task.toString() + "\n"));
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

