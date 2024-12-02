const Book = require('../models/Book');

// Add a new book
const addBook = async (req, res) => {
  try {
    const { title, description } = req.body;
    const book = new Book({ title, description, creator: req.userId });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all books
const getAllBooks = async (req, res) => {
  const books = await Book.find().populate('creator', 'firstName lastName');
  res.json(books);
};
// Add/remove favourites
exports.toggleFavourite = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const isFavourite = book.likes.includes(req.userId);

    if (isFavourite) {
      book.likes = book.likes.filter(id => id.toString() !== req.userId);
    } else {
      book.likes.push(req.userId);
    }
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Delete a book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book.creator.equals(req.userId)) {
      return res.status(403).json({ error: 'Not authorized' });
    }
    await book.remove();
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports={
  addBook,
  getAllBooks,
  deleteBook
}