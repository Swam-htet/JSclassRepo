var express = require("express");
const { route } = require(".");
var router = express.Router();

var movies = require("./../controller/movieController");

// get all
router.get("/", movies.getAllMovie);

// get id
router.get("/:movieId", movies.getMovieById);

// get title
router.get("/title/:title", movies.findMovieByTitle);

// create new
router.post("/", movies.newMovie);

// update with id
router.put("/:movieId", movies.updateMovie);

// delete with id
router.delete("/:movieId", movies.deleteMovie);


module.exports = router;