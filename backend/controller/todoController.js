// route handler function refactoring

// service import
let todoService = require("./../service/todoService");

//get all todo
async function getall_todo(req, res, next) {
  console.log("Get all todo");
  let todos = await todoService.getAll_todo();
  console.log("all todo from db >> ", todos);
  res.status(200).json(todos);
}

// get byid
async function get_todo_id(req, res, next) {
  let id = req.params["id"];
  console.log("Get todo by ID : ", id);

  try {
    let todo = await todoService.get_todo_id(id);
    if (!todo) {
      throw Error("Todo not found.");
    } else {
      await res.status(200).json(todo);
    }
  } catch (err) {
    console.log(err);
    // 404 for unfound
    await res.status(404).json({ err: "Todo by id not found" });
  }
}

// get
async function get_todo_complete(req, res, next) {
  console.log("Get complete = true todo");
  let todos = await todoService.get_todo_complete();
  console.log("get complete = true todo from db >> ", todos);
  res.status(200).json(todos);
}

// post with value
async function create_todo(req, res, next) {
  console.log("Create todo", req.body);
  try {
    const todo = await todoService.create_todo(req.body);
    if (!todo) {
      throw Error("Cannot save todo");
    } else {
      // 201 for created success
      await res.status(201).json(todo);
    }
  } catch (err) {
    console.log(err);
    // 400 for bad request
    await res.status(400).json({ message: err });
  }
}

// update todo
async function update_todo(req, res, next) {
  let id = req.params["id"];
  console.log("Update todo ID: ", id);
  try {
    const todo = await todoService.update_todo_id(id, req.body);
    if (!todo) {
      throw Error("Cannot update todo.");
    } else {
      await res.status(200).json(todo);
    }
  } catch (err) {
    console.log(err);
    await res.status(400).json({ message: err });
  }
}

async function delete_todo(req, res, next) {
  let id = req.params["id"];
  console.log("Update todo ID: ", id);
  try {
    const todo = await todoService.delete_todo_id(id);
    if (!todo) {
      throw Error("Cannot delete todo.");
    } else {
      await res.status(200).json(todo);
    }
  } catch (err) {
    console.log(err);
    await res.status(400).json({ message: err });
  }
}

// first multiple
function todo_multipleFirst(req, res, next) {
  console.log("This is first");
  next();
}

// second multiple
function todo_multipleSecond(req, res, next) {
  console.log("This is second.");
  res.send("This is second route.");
}

// req check
function todo_reqCheck(req, res, next) {
  console.log("request body >> ", req.body);
  console.log("request header >> ", req.headers);
  console.log("request parameter >> ", req.params);
  res.send("Request log successful.");
}

// download file
function todo_download(req, res, next) {
  console.log("To do download");
  res.download("./public/images/download.jpg");
}

// redirect
function todo_redirect(req, res, next) {
  console.log("To do redirect.");
  res.redirect("/");
}

// send status
function todo_status(req, res, next) {
  console.log("Send status 401");
  // 401 for Unauthorized
  res.sendStatus(401);
}

module.exports = {
  getall_todo,
  create_todo,
  get_todo_id,
  get_todo_complete,
  update_todo,
  delete_todo,
  todo_multipleFirst,
  todo_multipleSecond,
  todo_reqCheck,
  todo_download,
  todo_redirect,
  todo_status,
};
