const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    client_name: String,
    client_title: String,
    review: String,
    status: Boolean

})

const model = mongoose.model("reviews", schema)
module.exports = model
