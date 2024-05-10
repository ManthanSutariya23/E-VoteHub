const express = require('express')
const {
    handleCreateVoter,
    handleUpdateVoter,
    handleUpdateVoterStatus,
    handleLoginVoter,
    handleGetVoterDetail,
    handleUpdatePassword,
    handleGetVoter,
    handleCheckEmail
} = require('../../controller/voter')
const router = express.Router();

function createMiddle(req, res, next) {
    if (req.body.client_id && req.body.fname && req.body.lname && req.body.email && req.body.password && req.body.address && req.body.photo && req.body.postcode && req.body.gender && req.body.approved !== null && req.body.approved_date && (req.body.identity_proof || req.body.identity_proof === '') && (req.body.address_proof || req.body.address_proof === '')) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

function updateVoterMiddle(req, res, next) {
    if (req.body.id && req.body.fname && req.body.lname && req.body.address && req.body.postcode && req.body.gender) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

function getVoterMiddle(req, res, next) {
    if (req.body.client_id || req.body._id || req.body.approved || req.body.email || req.body.password) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

function voterDetailMiddle(req, res, next) {
    if (req.body.id) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}



function voterLoginMiddle(req, res, next) {
    if ((req.body.client_id && req.body.email && req.body.password) || req.body.approved) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

function updatePasswordMiddle(req, res, next) {
    if (req.body.id && req.body.password) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

function updateApprovedMiddle(req, res, next) {
    if (req.body.id && req.body.approved !== null) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

function checkEmailMiddle(req, res, next) {
    if (req.body.email) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

router.route("/").post(createMiddle, handleCreateVoter).put(updateVoterMiddle, handleUpdateVoter);
router.route("/getvoter").post(getVoterMiddle, handleGetVoter);
router.route("/voterdetail").post(voterDetailMiddle, handleGetVoterDetail);
router.route("/login").post(voterLoginMiddle, handleLoginVoter);
router.route("/password").put(updatePasswordMiddle, handleUpdatePassword);
router.route("/approvestatus").put(updateApprovedMiddle, handleUpdateVoterStatus);
router.route("/checkemail").post(checkEmailMiddle, handleCheckEmail);

module.exports = router;
