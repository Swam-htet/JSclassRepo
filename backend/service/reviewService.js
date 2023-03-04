// const mongoose = require('mongoose');
// let Reviews = require('../model/review');
// let Movies = require('../model/movie');
//
// const getAllReview = async ()=>{
//     return Reviews.find().populate("movie");
// }
// const getReviewByID = async(id)=>{
//     return Reviews.findById(id).populate("movie");
// }
// const getReviewByMovieID = async(id)=>{
//     return Reviews.find({movie:id}).populate("movie");
// }
// const createReview = async(review)=>{
//     const newReview = new Reviews({
//         movie: mongoose.Types.ObjectId(review.movie),
//         rating: review.rating,
//         review: review.review,
//
//     });
//
//     await newReview.save();
//     //return newReview;
//     return newReview.populate('movie');
// }
// const updateReviewByID = async(reviewId,review)=>{
//     review.movie = mongoose.Types.ObjectId(review.movie);
//     //console.log('Review Id ',reviewId, ' Review ',review);
//     const updatedReview = await Reviews.findByIdAndUpdate(reviewId, review,{new: true});
//     return updatedReview.populate("movie");
// }
// const deleteReviewByID= async(reviewId)=>{
//     const deletedReview = await Reviews.findByIdAndDelete(reviewId);
//     return deletedReview;
// }
// module.exports = {
//     getAllReview,
//     getReviewByID,
//     getReviewByMovieID,
//     createReview,
//     updateReviewByID,
//     deleteReviewByID,
//
// }






// review model import
let Review = require("./../model/review");

// get all reviews
async function getAllReview() {
    return Review.find().populate("movie");
}

// get review by id
async function getReviewByID(id) {
    return Review.findById(id).populate("movie");
}

// get review by movie id
async function getReviewByMovieID(id) {
    return Review.find({movie: id}).populate("movie");
}

// create new review
async function createReview(review) {

    let newReview = new Review({
        movie:review.movie,
        rating:review.rating,
        review:review.review,
    });
    await newReview.save();
    return newReview.populate("movie")
}

// update review by id
async function updateReviewByID(id, review) {
    review.movie = mongoose.Types.ObjectId(review.movie);
    let updateReview = await Review.findByIdAndUpdate(id, review);
    return updateReview.populate("movie");
}

// delete review by id
async function deleteReviewByID(id) {
    return Review.findByIdAndDelete(id);
}


// module export
module.exports = {
    getAllReview,
    getReviewByID,
    getReviewByMovieID,
    createReview,
    updateReviewByID,
    deleteReviewByID,
};
