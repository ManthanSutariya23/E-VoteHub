const nodemailer = require("nodemailer");

const sendMail = async (message, receiverEmail, subject, html) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        secure: false,
        auth: {
            user: 'evotehub36@gmail.com',
            pass: 'qwoaddlflngcyiuz',
        },
    });

    let info = await transporter.sendMail({
        from: 'evotehub36@gmail.com',
        to: receiverEmail,
        subject: subject,
        text: message,
        html: html,
    });

    console.log("Message sent: %s", info.messageId);
};

async function handlePostOTP(req, res) {
    sendMail(`Your OTP is: ${req.body.otp}`, req.body.email, 'OTP from E-VoteHub');
}

module.exports = {
    handlePostOTP,
    sendMail
}
