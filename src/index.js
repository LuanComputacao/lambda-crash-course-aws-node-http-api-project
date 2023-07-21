const { addTodo } = require("./todos/addTodo");
const { fetchTodos } = require("./todos/fetchTodos");
const { fetchTodo } = require("./todos/fetchTodo");
const { updateTodo } = require("./todos/updateTodo");

module.exports = {
  addTodo: addTodo,
  fetchTodos: fetchTodos,
  fetchTodo: fetchTodo,
  updateTodo: updateTodo,
};
