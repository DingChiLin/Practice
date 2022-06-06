const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("Hi");
});

app.listen(5000, () => {
  console.log("Server conn");
});
