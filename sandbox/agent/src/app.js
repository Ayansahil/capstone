import express from "express";
// import cors from "cors";
import morgan from "morgan";
import fs from "fs";
// import pty from "node-pty";

const WORKING_DIR = "/workspace";
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from sandbox agent!",
    status: "success",
  });
});

app.get("list-files", async (req, res) => {

    const elements = await fs.promises.readdir(WORKING_DIR)

    res.status(200).json({
        message:"Elements in working directory",
        elements
    })
});

export default app;
