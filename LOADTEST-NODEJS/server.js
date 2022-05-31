const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan('combined'));

const PORT = 3001;

app.get("/", (req, res) => {
  console.log("anhvu");
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running  at ${PORT}`);
});
