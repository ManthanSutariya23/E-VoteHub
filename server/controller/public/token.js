const express = require('express')
const router = express.Router();
const { handleCreateToken, handleRemoveToken, handleGetToken } = require('../token')

function createTokenMiddle(req, res, next) {
    if (req.body.token && req.body.status !== null) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

function removeTokenMiddle(req, res, next) {
    if (req.body.token) {
        next()
    } else {
        res.status(404).json({ message: 'Invalid body parameters' })
    }
}

router.route("/").post(createTokenMiddle, handleCreateToken);
router.route("/removetoken").put(removeTokenMiddle, handleRemoveToken);
router.route("/gettoken").post(removeTokenMiddle, handleGetToken);

module.exports = router;
