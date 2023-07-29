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
        type: String
    }
}, { timeStamps: true })

module.exports = mongoose.model("Person", personSchema)