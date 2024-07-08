const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{type : String, required : true },
    author:{type : String, required : true },
    isbn: {type : String, required : true },
    price:{type : Number, required : true }
});

const book = mongoose.model('book', bookSchema);

module.exports = book;