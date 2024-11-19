import mongoose from "mongoose";
import ChildrenCate from "../model/ChildrenCate.js";
import ParentCategory from "../model/ParentCategory.js";

export const CreateChildrenCategory = async (req, res, next) => {
    try {
        const ChildrenCategory = await ChildrenCate.create(req.body);
        console.log(req.body);
        console.log(req.body.parent); // lấy parent trong body
        // kiểm tra dạnh mục cha có tồn tại hay ko
        const parentCategory = await ParentCategory.findById(req.body.parent);
        if (!parentCategory) {
            return res
                .status(400)
                .json({ message: "Danh mục cha không tồn tại" });
        }
        if (ChildrenCategory) {
            await ParentCategory.findByIdAndUpdate(req.body.parent, {
                $push: { children: ChildrenCategory._id },
            });
            return res.status(200).json({
                message: "Create ChildrenCate successfully",
                success: true,
                product: ChildrenCategory,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const GetChildrenCategoryById = async (req, res, next) => {
    try {
        const categories = await ChildrenCate.findById(req.params.id).populate(
            "parent"
        );
        console.log(categories);

        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({
            message: "Không thể lấy danh mục con",
            error: error.message,
        });
    }
};
export const GetAllChildrenCategory = async (req, res, next) => {
    try {
        const childrenCate = await ChildrenCate.find();
        if (childrenCate) {
            res.status(200).json({
                message: "Get all ChildrenCate successfully",
                success: true,
                data: childrenCate,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const UpdateChildrenCategory = async (req, res, next) => {
    try {
        // Tạo slug mới từ tên nếu có thay đổi tên
        if (req.body.name) {
            req.body.slug = req.body.name.toLowerCase().replace(/ /g, "-");
        }
        const childrenCate = await ChildrenCate.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        if (childrenCate) {
            res.status(200).json({
                message: "Update products successfully",
                success: true,
                data: childrenCate,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const RemoveChildrenCategory = async (req, res, next) => {
    try {
        const parentCategory = await ChildrenCate.findByIdAndDelete(
            req.params.id
        );
        if (parentCategory) {
            return res.status(200).json({
                message: "Delete ChildrenCate successfully",
                success: true,
                data: parentCategory,
            });
        }
    } catch (error) {
        next(error);
    }
};
