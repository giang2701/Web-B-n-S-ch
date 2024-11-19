import express from "express";

import cors from "cors";
import { connectDB } from "./src/utils/connectDB.js";
import router from "./src/router/indexRouter.js";
const app = express();
// cross origin resource sharing
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", router);

const errorNotFound = (req, res, next) => {
    const error = new Error(`Not found`);
    error.status = 404;
    next(error);
};

const errorCommon = (err, req, res, next) => {
    return res.status(err.status || 500).json({
        message: err.message || "Loi server",
    });
};

app.use(errorNotFound, errorCommon);
app.listen(3000, () => {
    `server is running on port 3000`;
});
