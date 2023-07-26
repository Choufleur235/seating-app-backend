const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstName: {
        type: String
    }, 
    lastName: {
        type: String
    },
    table: {
        type: Number
    }
}, { timeStamps: true })

module.exports = mongoose.model("Person", personSchema)