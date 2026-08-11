const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    publishYear: Number,
    price:Number,
    description:String
});
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;