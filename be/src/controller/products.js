import ParentCategory from "../model/ParentCategory.js";

import Product from "../model/products.js";

export const GetAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        if (products) {
            res.status(200).json({
                message: "Get all products successfully",
                success: true,
                data: products,
            });
        } else {
            res.status(404).json({
                message: "Not found",
                success: false,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const GetProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.status(200).json({
                message: "Get product successfully",
                success: true,
                data: product,
            });
        } else {
            res.status(404).json({
                message: "Not found",
                success: false,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const CreateProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        console.log(req.body);

        if (product) {
            res.status(200).json({
                message: "Create product successfully",
                success: true,
                product: product,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const UpdateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        console.log(req.body);
        if (product) {
            res.status(200).json({
                message: "Update product successfully",
                success: true,
                product: product,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const RemoveProduct = async (req, res, next) => {
    try {
        const product = await Product.findOneAndDelete(req.params.id);
        console.log(req.body);
        if (product) {
            res.status(200).json({
                message: "Delete product successfully",
                success: true,
                product,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const getProductsByCategory = async (req, res, next) => {
    try {
        console.log("tôi đã ở đây");
        console.log(req.params.id);
        // Lấy tất cả sản phẩm từ danh mục cha và các danh mục con
        const parentCategory = await ParentCategory.findById(
            req.params.id
        ).populate("children");
        console.log(parentCategory);

        const childrenIds = parentCategory.children.map((child) => child._id);
        console.log("id con", childrenIds);

        const products = await Product.find({
            category: { $in: [req.params.id, ...childrenIds] },
        });
        if (products) {
            return res.status(200).json({
                message: "Get all products successfully",
                success: true,
                data: products,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const getProductsByChildCategory = async (req, res, next) => {
    try {
        console.log("tôi đã ở đây child");
        console.log(req.params.id);
        const products = await Product.find({
            childrenCate: { $in: [req.params.id] },
        });
        console.log(products);
        if (products) {
            return res.status(200).json({
                message: "Get all products successfully",
                success: true,
                data: products,
            });
        }
    } catch (error) {
        next(error);
    }
};
