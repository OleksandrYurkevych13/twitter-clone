import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";






const app = express();
dotenv.config();
const PORT = process.env.PORT || 7000;

console.log(process.env.MONGO_URI);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`);
    connectMongoDB();
})

