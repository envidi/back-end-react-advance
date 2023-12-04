import express from "express";
// import { getAll,details,deleteProduct,createProduct,update } from '../controllers/products.js';
import { getAll,details,deleteCategory,createCategory,update } from "../controllers/category.js";

const routers = express.Router();


routers.get('/',getAll)
routers.get('/:id',details)
routers.delete('/:id',deleteCategory)
routers.patch('/:id',update)
routers.post('/',createCategory)


export default routers;