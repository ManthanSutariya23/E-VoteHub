const express = require('express')
const { handlePostOTP } = require('../controller/otp')
const router = express.Router();


router.route("/").post(handlePostOTP);

module.exports = router; 
