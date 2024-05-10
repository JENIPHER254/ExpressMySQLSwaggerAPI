//importing libraries and frameworks
require("dotenv").config();
const express = require("express");

//setting up vertual server
const app = express();
const userRouter= require("./apis/users/user.router");
const productRouter = require("./apis/product/user.router");
//prevent TypeError: Cannot read properties of undefined 
app.use(express.json());
app.use("/api/users",userRouter);
app.use("/api/product",productRouter);

//listening for server
app.listen(process.env.APP_PORT, ()=>{
    console.log("Server is running on port", process.env.APP_PORT)
})