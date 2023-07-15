// let Movie = require("../model/movie");
//
// // get all movie
// async function get_all_movie() {
//   return Movie.find();
// }
//
// // get movie by id
// async function get_byid_movie(p) {
//   return Movie.findById(p);
// }
//
// // get movie by title
// async function get_title_movie(movieTitle) {
//   return Movie.find({
//     title: {
//       // regular expression
//       $regex: movieTitle,
//     },
//   });
// }
//
// // create movie
// async function create_movie(movie) {
//   let newMovie = new Movie(movie);
//   return newMovie.save();
// }
//
// // update by id
// async function update_byid_movie(id, movie) {
//   let updateMoive = Movie.findByIdAndUpdate(id, movie);
//   return updateMoive;
// }
//
// // delete by id
// async function delete_byid_movie(id) {
//   let deleteMoive = Movie.findByIdAndDelete(id);
//   return deleteMoive;
// }
let Movie = require("./../model/movie");


// get all movie
async function getAllMovie() {
    return Movie.find();
}

// get by id
async function getMovieByID(id) {
    return Movie.findById(id);
}

// get by title
async function getMovieByTitle(title) {
    let find = await Movie.find({
        title: {
            $regex: title,
        }
    });
    return find;
}

// create
async function createMovie(body) {
    let newMovie = new Movie(body);
    return newMovie.save();
}

// update
async function updateMovieByID(id,body) {
    let updateMovie = await Movie.findByIdAndUpdate(id,body);
    return updateMovie;
}

// delete
async function deleteMovieByID(id) {
    let deleteMovie = await Movie.findByIdAndDelete(id);
    return deleteMovie;

}

// export service function
module.exports = {
    getAllMovie,
    getMovieByID,
    getMovieByTitle,
    createMovie,
    updateMovieByID,
    deleteMovieByID,
};
