import mongoose from 'mongoose';

const uri = process.env.MONGO_URI;

export const connectDatabase = ()=>{
    mongoose.connect(uri).then(c=>{
        console.log(`Mongodb connect to: ${c.connection.host}`);
    }).catch(e=>{
        console.log(e);
    })
} 