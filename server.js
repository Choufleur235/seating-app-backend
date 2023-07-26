require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");
const tableRoutes = require("./routes/tables");


const app = express();


//middleware
    //only for the post ?
app.use(express.json());
app.use(express.static("./my-app/public"));

    //

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes

app.use("/api/tables", tableRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("connected to db and listening on port", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })
