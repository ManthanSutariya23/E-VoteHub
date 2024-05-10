const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    client_id: String,
    ballot_id: String,
    email: String,
    password: String,
    fname: String,
    lname: String,
    photo: {
        type: String,
        maxlength: 2000000
    },
    description: String,
    status: Boolean,

})

const model = mongoose.model("candidates", schema)
module.exports = model
