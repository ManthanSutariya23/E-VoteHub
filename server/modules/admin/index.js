
const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    username: String,
    password: String,

})

const model = mongoose.model("admins", schema)
module.exports = model
