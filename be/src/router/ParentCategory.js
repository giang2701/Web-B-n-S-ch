import express from "express";
import {
    CreateParentCategory,
    GetAllParentCategory,
    GetAllParentCategoryById,
    RemoveParentCategory,
    UpdateParentCategory,
} from "../controller/ParentCategory.js";
const RouterParentCategory = express.Router();
RouterParentCategory.get("/", GetAllParentCategory);
RouterParentCategory.post("/", CreateParentCategory);
RouterParentCategory.get("/:id", GetAllParentCategoryById);
RouterParentCategory.put("/:id", UpdateParentCategory);
RouterParentCategory.delete("/:id", RemoveParentCategory);
export default RouterParentCategory;
