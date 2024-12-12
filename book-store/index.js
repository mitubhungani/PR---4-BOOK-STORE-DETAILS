const express = require("express");
const DBConnect = require("./config/db");
const bookRouter = require("./router/book.router");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/books", bookRouter);

app.listen(8090, () => {
  console.log("Server is running on port 8090");
  DBConnect();
});
