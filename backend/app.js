import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down server due to Uncaught Exception`);
    // Close server & exit process
    process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

// Connecting to database
connectDatabase();

app.use(express.json({ limit: '10mb'}));
app.use(cookieParser());

// Import all routes 
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";

app.use("/api/v1", productRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", orderRoutes);

app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

// Handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down server due to Unhandled Promise Rejection`)
    // Close server & exit process
    server.close(() => process.exit(1));
});
