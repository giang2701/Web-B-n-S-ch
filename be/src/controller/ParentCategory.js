import ParentCategory from "../model/ParentCategory.js";
import Products from "../model/products.js";

export const CreateParentCategory = async (req, res, next) => {
    try {
        const parentCategory = await ParentCategory.create(req.body);
        console.log(req.body);

        if (parentCategory) {
            res.status(200).json({
                message: "Create product successfully",
                success: true,
                product: parentCategory,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const GetAllParentCategory = async (req, res, next) => {
    try {
        const parentCategory = await ParentCategory.find().populate("children");
        if (parentCategory) {
            res.status(200).json({
                message: "Get all products successfully",
                success: true,
                data: parentCategory,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const UpdateParentCategory = async (req, res, next) => {
    try {
        // Tạo slug mới từ tên nếu có thay đổi tên
        if (req.body.name) {
            req.body.slug = req.body.name.toLowerCase().replace(/ /g, "-");
        }
        const parentCategory = await ParentCategory.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        if (parentCategory) {
            res.status(200).json({
                message: "Update products successfully",
                success: true,
                data: parentCategory,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const RemoveParentCategory = async (req, res, next) => {
    try {
        const defaultParentCategory = "673c43e39af01762f5b1118e"; // Thêm dòng này để định nghĩa ID của danh mục mặc định
        // Kiểm tra nếu danh mục là danh mục mặc định
        if (req.params.id === defaultParentCategory) {
            return res.status(400).json({
                message:
                    "Cannot delete default parent category(Không xóa được danh mục mặc định)",
                success: false,
            });
        }
        const parentCategory = await ParentCategory.findByIdAndDelete(
            req.params.id
        );
        // Chuyển toàn bộ sản phẩm thuộc danh mục bị xóa về danh mục mặc định
        if (parentCategory) {
            // Thêm điều kiện kiểm tra nếu danh mục tồn tại và đã được xóa
            const productsToUpdate = await Products.find({
                category: req.params.id,
            });

            await Promise.all(
                productsToUpdate.map(async (product) => {
                    product.category = defaultCategoryId; // Sửa dòng này để sử dụng defaultCategoryId đã định nghĩa
                    await product.save();
                })
            );
            res.status(200).json({
                message: "Delete products successfully",
                success: true,
                data: parentCategory,
            });
        }
    } catch (error) {
        next(error);
    }
};
export const GetAllParentCategoryById = async (req, res, next) => {
    try {
        console.log("alo");
        const parentCategory = await ParentCategory.findById(
            req.params.id
        ).populate("children");
        console.log(parentCategory);

        if (parentCategory) {
            res.status(200).json({
                message: "Get all products successfully",
                success: true,
                data: parentCategory,
            });
        }
    } catch (error) {
        next(error);
    }
};
