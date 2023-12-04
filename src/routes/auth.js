import express from "express";
import { getAllUser,deleteUser,update, signIn, signUp } from "../controllers/authen.js";

const routers = express.Router();


routers.get('/',getAllUser)
routers.delete('/:id',deleteUser)
routers.patch('/:id',update)
routers.post('/signup',signUp)
routers.post('/signin',signIn)


export default routers;