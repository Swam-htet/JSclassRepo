let Todos = require("./../model/Todo");

// get all todo service
async function getAll_todo() {
  return Todos.find();
}

// create todo service
async function create_todo(todo) {
  let newTodo = new Todos(todo);
  return newTodo.save();
}

// get todo by id service
async function get_todo_id(p) {
  let todo = await Todos.findById(p);
  return todo;
}

// get todo by complete
async function get_todo_complete() {
  let todo = await Todos.find({ complete: true });
  return todo;
}

// update todo
async function update_todo_id(id, todo) {
  let updateTodo = await Todos.findByIdAndUpdate(id, todo, { new: true });
  return updateTodo;
}

async function delete_todo_id(id) {
  let todo = await Todos.findOneAndDelete(id);
  return todo;
}
module.exports = {
  getAll_todo,
  create_todo,
  get_todo_id,
  get_todo_complete,
  update_todo_id,
  delete_todo_id,
};
