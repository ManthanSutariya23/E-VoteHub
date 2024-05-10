const express = require('express')
const { sendMail } = require('../controller/otp')
const router = express.Router();

// message, receiverEmail, subject, html
router.route("/").post((req, res) => {
    const message = req.body.message
    const receiverEmail = req.body.receiverEmail
    const subject = req.body.subject
    const html = req.body.html

    sendMail(message, receiverEmail, subject, html).then(() => res.json({ message: 'Email has been sent' })).catch((e) => console.log(e));
});

module.exports = router;
