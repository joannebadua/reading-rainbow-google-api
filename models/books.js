const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId: { type: String},
  title: { type: String},
  author: { type: Array},
  description: String,
  image: String,
  link: String,
  date: { type: Date, default: Date.now }
});


const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
