//importing libraries and frameworks
require("dotenv").config();
const express = require("express");

//setting up vertual server
const app = express();

// callback url / routes
app.get('/api',(req,res)=>{
    res.json({
        success: 1,
        message: "api is working"
    })
})

//listening for server
app.listen(process.env.APP_PORT, ()=>{
    console.log("Server is running on port", process.env.APP_PORT)
})