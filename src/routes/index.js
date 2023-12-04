import express from "express";
import routerProduct from "./product.js";
import routerCategory from "./category.js";
import routerUser from "./auth.js";
import routerCart from "./cart.js";
const router = express.Router();



router.use('/products',routerProduct)
router.use('/categories',routerCategory)
router.use('/users',routerUser)
router.use('/carts',routerCart)
export default router;