import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        price: {
            type: Number,
        },
        description: {
            type: String,
        },
        images: {
            type: [String],
        },
        imgCategory: {
            type: [String],
        },
        supplierName: {
            type: String,
        },
        author: {
            type: String,
        },
        NXB: {
            type: String,
        },
        DateXB: {
            type: String,
        },
        weight: {
            type: String,
        },
        category: [
            {
                type: mongoose.Schema.Types.ObjectId, // Liên kết tới danh mục
                refPath: "ParentCategory",
            },
        ],
        childrenCate: [
            {
                type: mongoose.Schema.Types.ObjectId, // Liên kết tới danh mục
                refPath: "ChildrenCate",
            },
        ],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

export default mongoose.model("Products", productSchema);
