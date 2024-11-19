import mongoose from "mongoose";

const ParentCategory = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        slug: {
            type: String,
        },
        children: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ChildrenCate",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
// Tạo slug của tên
ParentCategory.pre("save", function (next) {
    this.slug = this.name.toLowerCase().replace(/ /g, "-");
    next();
});

export default mongoose.model("ParentCategory", ParentCategory);
