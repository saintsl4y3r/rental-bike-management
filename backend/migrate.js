const mongoose = require("mongoose");
const Bike = require("./models/Bike");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const bikes = [
    { name: "Honda Blade số", price: 100000, quantity: 3 },
    { name: "Honda Wave số", price: 110000, quantity: 4 },
    { name: "Yamaha Exciter", price: 120000, quantity: 7 },
    { name: "Honda SH", price: 105000, quantity: 2 },
    { name: "Honda Future", price: 200000, quantity: 3 },
    { name: "Yamaha Sirius", price: 150000, quantity: 5 },
    { name: "Suzuki VIva", price: 100000, quantity: 11 },
    { name: "Piagio Liberty", price: 110000, quantity: 6 },
    { name: "Honda Click", price: 120000, quantity: 12 },
    { name: "Yamaha FZ", price: 125000, quantity: 8 },
];

Bike.insertMany(bikes)
    .then(() => {
        console.log("Data inserted");
        mongoose.connection.close();
    })
    .catch((err) => console.log(err));