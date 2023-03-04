// review service import
var reviewService = require("./../service/reviewService");

// get all review
const getAllReview = async (req, res, next) => {
    try {
        const reviews = await reviewService.getAllReview();
        if (!reviews) throw Error("No reviews");
        await res.status(200).json(reviews);
    } catch (err) {
        await res.status(400).json({message: err});
    }
};

// get review by review id
const getReviewByID = async (req, res, next) => {
    let reviewId = req.params["id"];
    console.log("Delete review ID : ", reviewId);

    try {
        const review = await reviewService.getReviewByID(reviewId);
        if (!review) throw Error("No review");
        await res.status(200).json(review);
    } catch (err) {
        await res.status(400).json({message: err});
    }
};

// get review by movie id
const getReviewByMovieID = async (req, res, next) => {
    try {
        let movieId = req.params["id"];
        const review = await reviewService.getReviewByMovieID(movieId);
        if (!review) throw Error("No review");
        await res.status(200).json(review);
    } catch (err) {
        await res.status(400).json({message: err});
    }
};

// create new review
const createReview = async (req, res, next) => {
    try {
        const body = req.body;
        const review = await reviewService.createReview(body);
        if (!review) throw Error("review cannot be saved");
        await res.status(201).json(review);
    } catch (err) {
        await res.status(400).json({message: err});
    }
};

// update review
const updateReviewByID = async function (req, res, next) {
    let reviewId = req.params["id"];
    let review = req.body;
    console.log(`update review ${reviewId} `, req.body);
    try {
        const updateReview = await reviewService.updateReviewByID(reviewId, review);
        console.log("Updated Review ", updateReview);
        if (!updateReview) throw Error("Cannot update Review");
        await res.status(200).json(updateReview);
    } catch (err) {
        await res.status(400).json({message: err});
    }
};

// delete review
const deleteReviewByID = async (req, res, next) => {
    let reviewId = req.params["id"];
    console.log("Delete review ID : ", reviewId);
    try {
        const deleteReview = await reviewService.deleteReviewByID(reviewId);
        if (!deleteReview) throw Error("Cannot delete review");
        await res.status(200).json(deleteReview);
    } catch (err) {
        await res.status(400).json({message: err});
    }
};


// module export
module.exports = {
    getAllReview,
    getReviewByID,
    getReviewByMovieID,
    createReview,
    updateReviewByID,
    deleteReviewByID,
}

//
// // review service import
// let ReviewService = require("./../service/reviewService");
//
// // get all review
// async function getAllReview(req, res, next) {
//     try {
//         let reviews = await ReviewService.getAllReview();
//         if (!reviews) {
//             throw new Error("No Review");
//         } else {
//             console.log("Get all review.");
//             res.status(200).json(reviews);
//         }
//     } catch (e) {
//         console.log("Error >> ", e);
//         res.status(400).json({message: e})
//     }
// }
//
// // get review by id
// async function getReviewByID(req, res, next) {
//     let id = req.params["id"];
//     console.log("Movie ID: ", id);
//     try {
//         let review = ReviewService.getReviewByID(id);
//         if (!review) {
//             throw new Error("No such review.");
//         } else {
//             console.log("Get Review by id");
//             res.status(200).json(review);
//         }
//     } catch (e) {
//         console.log("Error >> ", e);
//         res.status(400).json({message: e})
//     }
// }
//
//
// // get review by movie id
// async function getReviewByMovieID(req, res, next) {
//     let id = req.params["id"];
//     console.log("Movie ID: ", id);
//     try {
//         let review = ReviewService.getReviewByMovieID(id);
//         if (!review) {
//             throw new Error("No such review.");
//         } else {
//             console.log("Get Review by movie id");
//             res.status(200).json(review);
//         }
//     } catch (e) {
//         console.log("Error >> ", e);
//         res.status(400).json({message: e})
//     }
// }
//
// // create review
// async function createReview(req, res, next) {
//     let body = req.body;
//     try {
//         let newReview = await ReviewService.createReview(body);
//         if (!newReview) {
//             throw new Error("Can't create review.");
//         } else {
//             console.log("Create new Review");
//             res.status(201).json(newReview);
//         }
//     } catch (e) {
//         console.log("Error >> ", e);
//         res.status(400).json({message: e})
//     }
// }
//
// // update review
// async function updateReviewByID(req, res, next) {
//     let id = req.params["id"];
//     console.log("Movie ID: ", id);
//     let body = req.body;
//
//     try {
//         let update = await ReviewService.updateReviewByID(id, body);
//         if (!update) {
//             throw new Error("Can't update review.");
//         } else {
//             console.log("Update the review with review ID.")
//             res.status(200).json(update);
//         }
//     } catch (e) {
//         console.log("Error >> ", e);
//         res.status(400).json({message: e})
//     }
// }
//
// // delete review
// async function deleteReviewByID(req, res, next) {
//     let id = req.params["id"];
//     console.log("Movie ID: ", id);
//     try {
//         let deleteReview = await ReviewService.deleteReviewByID(id);
//         if (!deleteReview) {
//             throw new Error("Can't delete review by id.");
//         } else {
//             console.log("Delete the review by ID.");
//             res.status(200).json(deleteReview);
//         }
//     } catch (e) {
//         console.log("Error >> ", e);
//         res.status(400).json({message: e})
//     }
// }
//
// // module export
// module.exports = {
//     getAllReview,
//     getReviewByID,
//     getReviewByMovieID,
//     createReview,
//     updateReviewByID,
//     deleteReviewByID,
// }
