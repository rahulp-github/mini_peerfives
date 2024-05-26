import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => res.send("Root endpoint"));

app.listen(process.env.APP_PORT, () => {
    try {
        console.log(`Server is running on port ${process.env.APP_PORT}`);
    }
    catch(err) {
        console.log('Error ', err);
    }
});
