let Movie = require("../model/movie");

// get all movie
async function get_all_movie() {
  return Movie.find();
}

// get movie by id
async function get_byid_movie(p) {
  return Movie.findById(p);
}

// get movie by title
async function get_title_movie(movieTitle) {
  return Movie.find({
    title: {
      // regular expression
      $regex: movieTitle,
    },
  });
}

// create movie
async function create_movie(movie) {
  let newMovie = new Movie(movie);
  return newMovie.save();
}

// update by id
async function update_byid_movie(id, movie) {
  let updateMoive = Movie.findByIdAndUpdate(id, movie);
  return updateMoive;
}

// delete by id
async function delete_byid_movie(id) {
  let deleteMoive = Movie.findByIdAndDelete(id);
  return deleteMoive;
}

// export service functin
module.exports = {
  get_all_movie,
  get_byid_movie,
  get_title_movie,
  create_movie,
  update_byid_movie,
  delete_byid_movie,
};
