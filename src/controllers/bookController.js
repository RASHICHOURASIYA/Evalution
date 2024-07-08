const Book = require('../models/book');

const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.send(books);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send();
    }
    res.send(book);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { createBook, getBooks, getBook };
