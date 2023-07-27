require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");
const tableRoutes = require("./routes/tables");
const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


const app = express();


//middleware
app.use(express.json());
app.use(express.static("./my-app/public"));
app.use(cors(corsOptions)) // Use this after the variable declaration

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
