const express = require('express')
const router = express.Router();
const { handleCreateToken, handleRemoveToken, handleGetToken } = require('../controller/token')


// message, receiverEmail, subject, html
router.route("/").post(handleCreateToken);
router.route("/removetoken").put(handleRemoveToken);
router.route("/gettoken").post(handleGetToken);

module.exports = router;
