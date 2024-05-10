const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    client_id: String,
    ballot_name: String,
    max_vote: Number,
    min_vote: Number,

})

const model = mongoose.model("ballots", schema)
module.exports = model
