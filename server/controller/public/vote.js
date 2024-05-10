const express = require('express')
const router = express.Router();
const { handleCreateVote,
    handleGetVote } = require('../vote')

function handleCreateVoteMiddle(req, res, next) {
    if (req.body.candidate_id && req.body.voter_id && req.body.date_time && req.body.ballot_id && req.body.client_id) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

function handleGetMiddle(req, res, next) {
    if (req.body.candidate_id || req.body.voter_id || req.body.ballot_id || req.body.client_id) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

router.route("/").post(handleCreateVoteMiddle, handleCreateVote);
router.route("/getvote").post(handleGetMiddle, handleGetVote);

module.exports = router;
