const mongoose = require('mongoose');

const orders = new mongoose.Schema(
    {
        name: {
            type:String,
            required: [true, "Kitobning nomi muhim nomini kiriting"]
        },
    },
    {timeseries: true}
)

module.exports = mongoose.model("Buyurtmalar", orders);
