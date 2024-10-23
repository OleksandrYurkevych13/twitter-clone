import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 7000;

app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`);
    connectMongoDB();
})

