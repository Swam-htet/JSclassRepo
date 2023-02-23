var express = require("express");
const { route } = require(".");
var router = express.Router();

var todo = require("./../controller/todoController");

// normal get
router.get("/", todo.todo_normal);

// to do log request
router.get("/check", todo.todo_reqCheck);

// post with value
router.post("/", todo.todo_post);

// to do get id
// router.get("/:todoID", todo.todo_id);

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
