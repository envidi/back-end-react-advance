import express from "express";
// import { getAll,details,deleteProduct,createProduct,update } from '../controllers/products.js';
import { getAll,details,deleteProduct,createProduct,update } from "../controllers/product.js";

const routers = express.Router();


routers.get('/',getAll)
routers.get('/:id',details)
routers.delete('/:id',deleteProduct)
routers.patch('/:id',update)
routers.post('/',createProduct)


export default routers;