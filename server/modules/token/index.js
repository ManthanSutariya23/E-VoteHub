const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    token: String,
    status: Boolean
})

const model = mongoose.model("tokens", schema)
module.exports = model
