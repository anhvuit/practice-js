const express = require("express");
const app = express();

const PORT = 3000;
const DEPLAY_TIME_TOKEN_EXPIRE = 1000;

app.get("/", (req, res) => {
  console.log("anhvu");
  res.sendFile(__dirname + "/index.html");
});

// API LOGIN
app.get("/api/login", (req, res) => {
  return res.status(200).json({
    status: "success",
    elements: {
      token: "accessToken",
      timeExpired: Date.now() + DEPLAY_TIME_TOKEN_EXPIRE,
    },
  });
});

// API USER
app.get("/api/user", (req, res) => {
  return res.status(200).json({
    status: "success",
    elements: {
      name: "vu.nguyen3",
    },
  });
});

// API REFRESHTOKEN
app.get("/api/refreshToken", (req, res) => {
  return res.status(200).json({
    status: "success",
    elements: {
      token: "refreshToken",
      timeExpired: Date.now() + DEPLAY_TIME_TOKEN_EXPIRE,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running  at ${PORT}`);
});
