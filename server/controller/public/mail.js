const express = require('express')
const router = express.Router();
const nodemailer = require("nodemailer");


const sendMail = async (email, pass, message, receiverEmail, subject, html) => {

    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: 'gmail',
            secure: false,
            auth: {
                user: email,
                pass: pass,
            },
        });

        let info = await transporter.sendMail({
            from: email,
            to: receiverEmail,
            subject: subject,
            text: message,
            html: html,
        });
    } catch (error) {
        return error;
    }

    console.log("Message sent: %s", info.messageId);
};

// message, receiverEmail, subject, html
router.route("/").post((req, res) => {
    const message = req.body.message
    const receiverEmail = req.body.receiverEmail
    const subject = req.body.subject
    const html = req.body.html
    const email = req.body.email
    const pass = req.body.password

    if ((message || html) && subject && email && pass && receiverEmail) {
        sendMail(email, pass, message, receiverEmail, subject, html).then(() => res.json({ message: 'Email has been sent' })).catch((e) => console.log(e));
    } else {
        res.status(404).json({ message: 'Invalid body parameter' })
    }
});

module.exports = router;
