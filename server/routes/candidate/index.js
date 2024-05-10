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


router.route("/").post(handleCreateCandidate);
router.route("/getcandidate").post(handleGetCandidate);
router.route("/login").post(handleLogin);
router.route("/profile").put(handleUpdateProfile);
router.route("/password").put(handleUpdatePassword);
router.route("/status").put(handleUpdateStatus);

module.exports = router;
