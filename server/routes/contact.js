const express = require('express')
const { handleGetContact, handlePostContact } = require('../controller/contact')
const router = express.Router();


router.route("/").get(handleGetContact).post(handlePostContact);

module.exports = router; 
