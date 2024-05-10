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


router.route("/").post(handleCreateVoter).put(handleUpdateVoter);
router.route("/getvoter").post(handleGetVoter);
router.route("/voterdetail").post(handleGetVoterDetail);
router.route("/login").post(handleLoginVoter);
router.route("/password").put(handleUpdatePassword);
router.route("/updatestatus").put(handleUpdateVoterStatus);
router.route("/checkemail").post(handleCheckEmail);

module.exports = router;

