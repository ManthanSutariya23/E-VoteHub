const express = require('express')
const {
    handleCreateReview,
    handleGetReview,
    handleUpdateReviewStats
} = require('../../controller/review')
const router = express.Router();


router.route("/").post(handleCreateReview).put(handleUpdateReviewStats).get(handleGetReview);

module.exports = router;
