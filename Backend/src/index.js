import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express";
import { app } from "./app.js";

dotenv.config({
    path:"./.env"
})


connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("MONGO DB NOT CONNECT WITH EXPRESS :: ",error);
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`your server is running on ${process.env.PORT || 8000} port`);
    })
})
.catch((error)=>{
    console.log("MONGO DB NOT CONNECT :: ERROR",error);
})

