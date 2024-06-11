const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

app.get("/api/data", (req, res) => {
  const data = { message: "Hello from the backend" };
  res.json(data);
});

app.get("/api/message", (req, res) => {
  const data = { message: "A day without laughter is a day wasted." };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
