import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDb from "./db/index.js";
import userRoutes from "./routes/user.js";
import rewardRoutes from "./routes/rewards.js";
const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/rewards", rewardRoutes);
app.get("/", (req, res) => res.send("Root endpoint"));

app.listen(process.env.APP_PORT, () => {
  try {
    console.log(`Server is running on port ${process.env.APP_PORT}`);
  } catch (err) {
    console.log("Error ", err);
  }
});

connectDb();
