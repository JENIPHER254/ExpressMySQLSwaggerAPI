//importing libraries and frameworks
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
app.listen(3000, ()=>{
    console.log("Server is running ...")
})