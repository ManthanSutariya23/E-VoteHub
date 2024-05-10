const express = require('express')
const {
    handleCreateCandidate,
    handleGetCandidate,
    handleLogin,
    handleUpdatePassword,
    handleUpdateStatus,
    handleUpdateProfile
} = require('../../controller/candidate')
const router = express.Router();

function candidateMiddle(req, res, next) {
    if (req.body.client_id || req.body._id || req.body.ballot_id || req.body.email || req.body.password) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

function profileMiddle(req, res, next) {
    if (req.body.fname && req.body.id && req.body.lname && req.body.email && req.body.photo && req.body.description) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

function passwordMiddle(req, res, next) {
    if (req.body.password && req.body.id) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

function statusMiddle(req, res, next) {
    if (req.body.id && req.body.status !== null) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

router.route("/").post(candidateMiddle, handleGetCandidate);
router.route("/singlecandidate").post(candidateMiddle, handleLogin);
router.route("/profile").put(profileMiddle, handleUpdateProfile);
router.route("/password").put(passwordMiddle, handleUpdatePassword);
router.route("/status").put(statusMiddle, handleUpdateStatus);

module.exports = router;
