const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
    email: String,
    subject: String,
    message: String
})

const ContactModel = mongoose.model("contacts", ContactSchema)
module.exports = ContactModel
