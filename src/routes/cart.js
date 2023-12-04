import express from "express";
import { getAll,deleteCart,createCart,update, getAllByStatus } from "../controllers/cart.js";

const routers = express.Router();


routers.get('/',getAll)
routers.get('/status',getAllByStatus)
routers.patch('/delete/:id',deleteCart)
routers.patch('/:id',update)
routers.post('/',createCart)


export default routers;