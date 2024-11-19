import express from "express";
import {
    CreateProduct,
    GetAllProducts,
    GetProductById,
    getProductsByCategory,
    getProductsByChildCategory,
    RemoveProduct,
    UpdateProduct,
} from "../controller/products.js";
const routerProducts = express.Router();
routerProducts.get("/", GetAllProducts);
routerProducts.post("/", CreateProduct);
routerProducts.get("/:id", GetProductById);
routerProducts.get("/cate/:id", getProductsByCategory);
routerProducts.get("/child/:id", getProductsByChildCategory);
routerProducts.put("/:id", UpdateProduct);
routerProducts.delete("/:id", RemoveProduct);
export default routerProducts;
