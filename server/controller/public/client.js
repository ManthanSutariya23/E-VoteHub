const express = require('express')
const {
    handleLoginClient,
    handleGetDetail
} = require('../../controller/client/register')
const router = express.Router();


router.route("/").post(handleLoginClient);
router.route("/getdetail").post(handleGetDetail);

module.exports = router; 
