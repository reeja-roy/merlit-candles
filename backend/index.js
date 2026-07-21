import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./router/auth.js";
import connectDB from "./config/db.js";
import productRoute from "./router/product.js";
import cart from "./router/cart.js";
import payment from "./router/payment.js";

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // React/Vite frontend
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Routes
app.use(authRoute);
app.use("/products", productRoute);
app.use("/cart", cart);
app.use("/payment", payment);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});