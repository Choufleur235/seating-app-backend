const Person = require("../models/personModel")
const mongoose = require("mongoose");

//get all people
const getPeople = async (req, res) => {
    const people = await Person.find({})

    res.status(200).json({people})
}

// get a single person
const getPerson = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No person with that name-wrong id"})
    }
    const person = await Person.findById(id)

    if(!person) {
        return res.status(404).json({error: "No person with that name"})
    }

    res.status(200).json(person)
}


module.exports = {
    getPeople, 
    getPerson
}