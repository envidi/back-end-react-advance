import express from 'express'
import dotenv from "dotenv";
import bodyParser from "body-parser"
import router from './routes/index.js';
import connectDB from '../db/connect.js';
import cors from 'cors'
const app = express()
dotenv.config();
const { PORT } = process.env;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.json());
app.use("/api", router);


const start =async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,()=>{
            console.log(`http://localhost:${PORT}` )
        })
    } catch (error) {
        console.log(error)
    }
}
start()
