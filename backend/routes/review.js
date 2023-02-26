var express = require("express");
var router = express.Router();
var review = require("./../controller/ReviewController");

// get all reviews
router.get("/", review.getAllReview);

// get review by movie id  
router.get("/movie/:movieId", review.getReviewByMovieId);

// get by review id 
router.get("/:reviewId", review.getReviewById);

// create review 
router.post("/", review.saveReview);

// update review with review id 
router.put("/:reviewId", review.updateReview);

// delete review with review id 
router.delete("/:reviewId", review.deleteReview);


module.exports = router;
