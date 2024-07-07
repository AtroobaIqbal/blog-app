const mongoose = require("mongoose")

async function dbconnect() {
    // database connection
    mongoose.connect("mongodb+srv://atroobaiqbal28:1NnQHGgd6ky55anr@cluster0.hpb1ezb.mongodb.net/blogapp")
    // mongoose.connect("mongodb://localhost:27017")
}
module.exports = dbconnect