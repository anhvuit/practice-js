// require("dotenv/config");
// require("dotenv").config();
import 'dotenv/config'
import mongoose from "mongoose";
import express from "express";
import router from "./routes/money.routes.js";

const PORT = 3000;
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGDODB_LOCAL_URI)
  .then(() => console.log("CONNECTED"))
  .catch((err) => {
    console.log(err);
  });

app.use(router);
app.get("/", (req, res) => {
  console.log("anhvu");
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running  at ${PORT}`);
});
