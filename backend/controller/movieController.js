// movie service import
var movieService = require("./../service/MovieService");

// functional programming
const handle = function (func, httpErrorCode) {
  // update the argument parameter to new function
  return async function (req, res, next) {
    try {
      // run function / if error catch/ return error
      func(req, res, next).catch((err) => {
        return res.status(httpErrorCode).json({ message: err });
      });
    } catch (err) {
      console.log("Error is ", err);
      await res.status(httpErrorCode).json({ message: err });
    }
  };
};

// get all handler
async function getAllMovieHandler(req, res, next) {
  // check movie from db
  const movies = await movieService.get_all_movie();

  // no movie
  if (!movies) {
    throw Error("No movies");
  } else {
    await res.status(200).json(movies);
  }
}

// get all after updating
const getAllMovie = async function (req, res, next) {
  // req user
  //   console.log("Movie controller user ", req.user);

  // update by using function programming
  await handle(getAllMovieHandler, 400)(req, res, next);
};

// get by id handler
async function getMovieByIdHandler(req, res, next) {
  // id from request paramter
  let movieId = req.params["movieId"];
  console.log("Req movie Id ", movieId);

  // get id with id
  const movies = await movieService.get_byid_movie(movieId);
  // no movie
  if (!movies) {
    throw Error("No movies found");
  } else {
    await res.status(200).json(movies);
  }
}

// get by id after updating
const getMovieById = async function (req, res, next) {
  // new get movie with id
  await handle(getMovieByIdHandler, 404)(req, res, next);
};

// get by title
const findMovieByTitle = async function (req, res, next) {
  // title from req.parameter
  let title = req.params["title"];
  try {
    // search movie with tile
    const movies = await movieService.get_title_movie(title);
    // no movie
    if (!movies) {
      throw Error("No movies found");
    } else {
      await res.status(200).json(movies);
    }
  } catch (err) {
    await res.status(404).json({ message: err });
  }
};

// create new movie
const newMovie = async function (req, res, next) {
  console.log("new movie ", req.body);
  try {
    const movie = await movieService.create_movie(req.body);
    if (!movie) {
      throw Error("Cannot save movie");
    } else {
      await res.status(201).json(movie);
    }
  } catch (err) {
    console.log(err);
    await res.status(400).json({ message: err });
  }
};

// update movie
const updateMovie = async function (req, res, next) {
  let movie = req.body;
  let movieId = req.params["movieId"];

  // log output
  console.log("Update movie ID : ", movieId);
  console.log(`new movie ${movieId} `, req.body);
  
  try {
    const updateMovie = await movieService.update_byid_movie(movieId, movie);
    if (!updateMovie) throw Error("Cannot update movie");
    await res.status(200).json(updateMovie);
  } catch (err) {
    await res.status(400).json({ message: err });
  }
};

// delete movie
const deleteMovie = async (req, res, next) => {
  let movieId = req.params["movieId"];
  console.log("Delete movie ID : ", movieId);

  try {
    const deletedMovie = await movieService.delete_byid_movie(movieId);
    if (!deletedMovie) {
      throw Error("Cannot delete movie");
    } else {
      await res.status(200).json(deletedMovie);
    }
  } catch (err) {
    await res.status(400).json({ message: err });
  }
};

// module export
module.exports = {
  getAllMovie,
  getMovieById,
  findMovieByTitle,
  newMovie,
  updateMovie,
  deleteMovie,
};
