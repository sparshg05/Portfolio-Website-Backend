import { app} from "./app.js";
import dotenv from "dotenv";
// import {connectDatabase} from "./config/database.js";
import cloudinary from "cloudinary";
import mongoose from 'mongoose';

const port = process.env.PORT || 4000;

dotenv.config({path: "./backend/config/config.env"});

// connectDatabase();
mongoose.connect("mongodb+srv://mesparshg05:befearless@clusters.r9q9z.mongodb.net/portfolio?retryWrites=true" )
.then(c=>{
    console.log(`Mongodb connect to: ${c.connection.host}`);
}).catch(e=>{
    console.log(e);
})

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.listen(port , ()=>{
    console.log(`Server is running on port: ${port}` );
})