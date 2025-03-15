const mongoose = require("mongoose");

const BikeSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
});

module.exports = mongoose.model("Bike", BikeSchema);