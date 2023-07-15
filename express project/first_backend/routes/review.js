var express = require("express");
var router = express.Router();
var review = require("./../controller/ReviewController");

// get all reviews
router.get("/", review.getAllReview);

// get review by movie id  
router.get("/movie/:id", review.getReviewByMovieID);

// get by review id 
router.get("/:id", review.getReviewByID);

// create review 
router.post("/", review.createReview);

// update review with review id 
router.put("/:id", review.updateReviewByID);

// delete review with review id 
router.delete("/:id", review.deleteReviewByID);


module.exports = router;
