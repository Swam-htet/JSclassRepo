// mongoose import for foreign key data type 
const mongoose = require("mongoose");

// review model and movie model import
let Reviews = require("./../model/review");
let Movies = require("./../model/movie");

// get all review
const getAllReview = async () => {
  return Reviews.find();
};

// get review by id
const getReviewById = async (reviewId) => {
  // difference between .populate and without
  return Reviews.findById(reviewId).populate("movie");
};

// get review by movie name
const getReviewByMovieId = async (movieId) => {
  return Reviews.find({ movie: movieId }).populate("movie");
};

// create review
const saveReview = async (review) => {

  const newReview = new Reviews({
    movie: mongoose.Types.ObjectId(review.movie),
    rating: review.rating,
    review: review.review,
  });

  await newReview.save();
  //return newReview;
  return newReview.populate("movie");
};

// update review by id
const updateReview = async (reviewId, review) => {
  review.movie = mongoose.Types.ObjectId(review.movie);
  //console.log('Review Id ',reviewId, ' Review ',review);
  const updatedReview = await Reviews.findByIdAndUpdate(reviewId, review, {
    new: true,
  });
  return updatedReview.populate("movie");
};

// delete review by review id
const deleteReview = async (reviewId) => {
  const deletedReview = await Reviews.findByIdAndDelete(reviewId);
  return deletedReview;
};

// module export
module.exports = {
  getAllReview,
  getReviewById,
  saveReview,
  getReviewByMovieId,
  updateReview,
  deleteReview,
};
