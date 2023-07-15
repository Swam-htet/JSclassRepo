var express = require("express");
const { route } = require(".");
var router = express.Router();

var todo = require("./../controller/todoController");

// todo get all
router.get("/", todo.getall_todo);

// todo create
router.post("/", todo.create_todo);


// todo get complete=true
router.get("/complete", todo.get_todo_complete);

// todo get id
router.get("/:id", todo.get_todo_id);


// todo update id
router.post("/:id", todo.update_todo);

// todo delete
router.delete("/:id", todo.delete_todo);

// to do multiple route
router.get("/multiple", todo.todo_multipleFirst);
router.get("/multiple", todo.todo_multipleSecond);

// to do download
router.get("/download/file", todo.todo_download);

// response redirect
router.get("/response/redirect", todo.todo_redirect);

// send status
router.get("/status", todo.todo_status);

module.exports = router;
