
//2nd approach
import connectDB from "./db/indexdb.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
    path:'./env'
})
connectDB().then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR :",error)
        throw error;
     });
app.listen(process.env.PORT||8000,()=>{
    console.log(`Server  is running at port: ${process.env.PORT}`);
})
}).catch((err)=>{
console.log("MONGODB connection failed!!!", err)
})








//1st approch in which index.js contain all connectivity code
/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app=express()
(async()=>{//it is an ifies
try {
     await mongoose.connect(`${process.env.MONGODB_URL}/ ${DB_NAME}`)
     app.on("error",(error)=>{
        console.log("ERROR :",error)
        throw error;
     })
     app.listen(process.env.PORT,()=>{
        console.log(`App is listenning on port ${process.env.PORT}`);
     })
} catch (error) {
    console.error("ERROR:",error)
    throw err
}
})()  */