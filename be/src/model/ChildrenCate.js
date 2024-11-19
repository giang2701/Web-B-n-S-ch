import mongoose from "mongoose";

const ChildrenCate = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        slug: {
            type: String,
        },
        parent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ParentCategory",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
ChildrenCate.pre("save", function (next) {
    this.slug = this.name.toLowerCase().replace(/ /g, "-");
    next();
});
export default mongoose.model("ChildrenCate", ChildrenCate);
