const mongoose = require('mongoose');

const users = new mongoose.Schema(
    {
        name: {
            type:String,
            required: [true, "Ishmingizni kiriting"]
        },
        password: {
            type:Number,
            required: [true, "Parol qoyish majburiy"]
        },
        email: {
            type:String,
            required:true,
        }
    },
    {timeseries: true}
)

module.exports = mongoose.model("User", users);
