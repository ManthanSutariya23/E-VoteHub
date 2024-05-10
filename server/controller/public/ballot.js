const express = require('express')
const {
    handleGetBallot,
} = require('../../controller/ballot')
const router = express.Router();

function middle(req, res, next) {
    if (req.body.client_id || req.body._id) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

router.route("/").post(middle, handleGetBallot);

module.exports = router;
