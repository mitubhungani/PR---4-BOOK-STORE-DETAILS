const { Router } = require("express");
const {
  getBook,
  getBookById,
  deleteBook,
  updateBook,
  createBook,
  bookFilter,
} = require("../controller/book.controller");
const requireFild = require("../middleware/book.middleware");

const bookRoute = Router();

bookRoute.get("/", getBook);
bookRoute.get("/book/:bookId", getBookById);
bookRoute.post("/addbooks",requireFild, createBook);
bookRoute.delete("/delete/:bookId", deleteBook);
bookRoute.patch("/update/:bookId", updateBook);
bookRoute.get("/filter",bookFilter)


module.exports = bookRoute;