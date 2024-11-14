// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"

import { app } from "./app.js"
import connectDB from "./DB/index.js"
import dotenv from "dotenv"


dotenv.config({
    path :'./env'
})

connectDB().then(()=> {
  app.listen(process.env.PORT || 8000 ,() =>{
    console.log(`Server is Running on PORT ${process.env.PORT}`);
  })
  app.on("error" , () =>{
    console.log("Error",error);
    throw error
})
}).catch((error) => {
  console.log(error,":Error  mongoDB Connected Fail");
  
})










 /* 
import express from "express"
const app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error" , () =>{
        console.log("Error",error);
        throw error
    })
    app.listen(process.env.PORT , () =>{
        console.log(`App is listing on ${process.env,PORT}` );
        
    })
  }
   catch (error) {
    console.log(error, "Error");
    throw error
  }
})();
*/