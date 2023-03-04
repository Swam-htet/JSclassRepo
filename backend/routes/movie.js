var express = require("express");
const { route } = require(".");
var router = express.Router();

// controller import
var movies = require("./../controller/movieController");

// get all
router.get("/", movies.getAllMovie);

// get id
router.get("/:id", movies.getMovieByID);

// get title
router.get("/title/:title", movies.getMovieByTitle);

// create new
router.post("/", movies.createMovie);

// update with id
router.put("/:id", movies.updateMovieByID);

// delete with id
router.delete("/:id", movies.deleteMovieByID);


module.exports = router;