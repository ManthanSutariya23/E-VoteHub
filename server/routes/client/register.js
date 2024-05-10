const express = require('express')
const {
    handleRegisterClient,
    handleGetClient,
    handleLoginClient,
    handleCheckEmail,
    handleUpdateTitle,
    handleUpdateResult,
    handleUpdateAgreement,
    handleUpdatePassword,
    handleUpdateProfile,
    handleUpdateReview,
    handleUpdateApiKey,
    handleGetDetail
} = require('../../controller/client/register')
const router = express.Router();


router.route("/").post(handleRegisterClient).get(handleGetClient);
router.route("/login").post(handleLoginClient);
router.route("/checkemail").post(handleCheckEmail);
router.route("/getdetail").post(handleGetDetail);
router.route("/title").put(handleUpdateTitle);
router.route("/password").put(handleUpdatePassword);
router.route("/result").put(handleUpdateResult);
router.route("/agreement").put(handleUpdateAgreement);
router.route("/profile").put(handleUpdateProfile);
router.route("/review").put(handleUpdateReview);
router.route("/apikey").put(handleUpdateApiKey);

module.exports = router; 
