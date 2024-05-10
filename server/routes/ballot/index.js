const express = require('express')
const {
    handleCreateBallot,
    handleGetBallot,
    handleUpdateBallot
} = require('../../controller/ballot')
const router = express.Router();


router.route("/").post(handleCreateBallot).put(handleUpdateBallot);
router.route("/getballot").post(handleGetBallot);

module.exports = router;
 