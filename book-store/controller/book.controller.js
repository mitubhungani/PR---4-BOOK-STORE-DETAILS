const Book = require("../model/book.model");

const getBook = async (req, res) => {
  try {
    let book = await Book.find();
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ error: "Server Error" });
  }
};

const getBookById = async (req, res) => {
  try {
    let { bookId } = req.params;
    let book = await Book.findById(bookId);
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ error: "Server Error" });
  }
};

const createBook = async (req, res) => {
  try {
    let book = await Book.create(req.body);
    console.log(book);    
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ error: "Server Error" });
  }
};

const updateBook = async (req, res) => {
  try {
    let { bookId } = req.params;
    let book = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ error: "Server Error" });
  }
};

const deleteBook = async (req, res) => {
  try {
    let { bookId } = req.params;
    let book = await Book.findByIdAndDelete(bookId);
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ error: "Server Error" });
  }
};

const bookFilter = async (req, res) => {
  try {
    const { author, category, title, price } = req.query;

    // Step 1: Build a filter object
    const filter = {};
    if (author) filter.author = author;
    if (category) filter.category = category;
    if (title) filter.title = title;

    // Step 2: Fetch books from the database based on the filter
    let booksQuery = Book.find(filter);

    // Step 3: Apply sorting based on price
    if (price === "lth") {
      booksQuery = booksQuery.sort({ price: 1 }); // Low to High
    } else if (price === "htl") {
      console.log(true)
      booksQuery = booksQuery.sort({ price: -1 }); // High to Low
    }

    // Step 4: Execute the query
    const books = await booksQuery;   

    res.status(200).send(books);
  } catch (error) {
    res.status(500).send({ error: error.message || "Internal Server Error" });
  }
};


module.exports = {
  getBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  bookFilter,
};
