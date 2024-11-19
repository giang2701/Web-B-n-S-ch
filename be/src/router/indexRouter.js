import express from "express";
import routerProducts from "./products.js";
import RouterParentCategory from "./ParentCategory.js";
import RouterChildrenCategory from "./ChildrenCategory.js";
const router = express.Router();
router.use("/products", routerProducts);
router.use("/parentCate", RouterParentCategory);
router.use("/childrenCate", RouterChildrenCategory);
export default router;
