// route handler function refactoring

// normal get
function todo_normal(req, res, next) {
  console.log("todo router");
  res.send([]);
}

// post with value
function todo_post(req, res, next) {
  console.log("todo push request body >> ", req.body);
  res.json({
    ...req.body,
    query: "successful",
  });
}

// todo id
function todo_id(req, res, next) {
  todoID = req.params;
  console.log("ID: ", todoID);

  res.json({
    url: req.url,
    query: "successful",
    id: todoID,
  });
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
  console.log("Send staus 401");
  res.sendStatus(401);
}

module.exports = {
  todo_normal,
  todo_post,
  todo_id,
  todo_multipleFirst,
  todo_multipleSecond,
  todo_reqCheck,
  todo_download,
  todo_redirect,
  todo_status,
};
