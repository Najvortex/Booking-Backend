const mongoose = require('mongoose');

const book = new mongoose.Schema(
    {
        name: {
            type:String,
            required: [true, "Kitobning nomi muhim nomini kiriting"]
        },
        price: {
            type:Number,
            required: [true, "Narhini kiritish majburiy"]
        },
    },
    {timeseries: true}
)

module.exports = mongoose.model("Books", book);
