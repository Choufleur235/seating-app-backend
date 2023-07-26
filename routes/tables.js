const express = require("express");
const Person = require("../models/personModel")
const {
    getPeople,
    getPerson
} = require("../controllers/personController")

const router = express.Router();

router.get("/", getPeople)
 
router.get("/:id", getPerson)

router.post("/", async (req, res) => {
    const {firstName, lastName, table} = req.body

    try {
        const person = await Person.create({firstName, lastName, table})
        res.status(200).json(person)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router;