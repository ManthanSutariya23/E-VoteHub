const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    candidate_id: String,
    ballot_id: String,
    client_id: String,
    voter_id: String,
    date_time: Date
})

const model = mongoose.model("votes", schema)
module.exports = model
