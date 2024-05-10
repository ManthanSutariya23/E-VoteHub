const mongoose = require("mongoose")

const ClientSchema = new mongoose.Schema({
    client_name: String,
    title: String,
    password: String,
    email: String,
    logo: String,
    start_time: Date,
    end_time: Date,
    address: String,
    api_key: String,
    agreement: {
        type: String,
        maxlength: 2000000
    },
    isresult: Boolean,
    isreview: Boolean,
    status: Number,

})

const ClientModel = mongoose.model("clients", ClientSchema)
module.exports = ClientModel
