import express from "express";
import {
    CreateChildrenCategory,
    GetAllChildrenCategory,
    GetChildrenCategoryById,
    RemoveChildrenCategory,
    UpdateChildrenCategory,
} from "../controller/ChildrenCate.js";

const RouterChildrenCategory = express.Router();
RouterChildrenCategory.get("/", GetAllChildrenCategory);
RouterChildrenCategory.post("/", CreateChildrenCategory);
RouterChildrenCategory.get("/:id", GetChildrenCategoryById);
RouterChildrenCategory.put("/:id", UpdateChildrenCategory);
RouterChildrenCategory.delete("/:id", RemoveChildrenCategory);
export default RouterChildrenCategory;
