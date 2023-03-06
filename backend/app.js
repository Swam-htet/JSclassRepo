// node module import
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// auth middleware import
var auth = require("./middleware/auth");

// mongoose import
var mongoose = require("mongoose");

// db connection string
var {db} = require("./config/database");

// cors module import
var cors = require("cors");

// node module for route
var indexRouter = require("./routes/index");
var todoRouter = require("./routes/todo");
var movieRouter = require("./routes/movie");
var reviewRouter = require("./routes/review");
var userRouter = require("./routes/users");

// install express framework
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// cors use
app.use(cors());

// middle-ware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// mongoDB connection
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected."))
    .catch((err) => console.log(err));

// route register
app.use("/", indexRouter);
app.use("/api/todos", todoRouter);
app.use("/api/users", userRouter);
app.use("/api/movies", auth.verifyUserToken, movieRouter);
app.use("/api/reviews", auth.verifyUserToken, reviewRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
