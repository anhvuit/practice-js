const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  console.log("anhvu");
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running  at ${PORT}`);
});
