const express = require('express')
const {
    handleCreateVote,
    handleCreateMultiVote,
    handleGetVote
} = require('../../controller/vote')
const router = express.Router();


router.route("/").post(handleCreateVote);
router.route("/multiinsert").post(handleCreateMultiVote);
router.route("/getvote").post(handleGetVote);

module.exports = router;

