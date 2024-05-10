const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    client_id: String,
    email: String,
    password: String,
    fname: String,
    lname: String,
    photo: {
        type: String,
        maxlength: 2000000
    },
    address: String,
    postcode: String,
    gender: String,
    identity_proof: {
        type: String,
        maxlength: 2000000
    },
    address_proof: {
        type: String,
        maxlength: 2000000
    },
    approved: Number,
    approved_date: String,

})

const model = mongoose.model("voters", schema)
module.exports = model
