const mongoose = require('mongoose');
const book = require('./book');
const Customer = require('./customer');


const reviewSchema = new mongoose.Schema({
    book:{type : mongoose.Schema.Types.ObjectId, ref : book},
    customer:{type : mongoose.Schema.Types.ObjectId, ref : Customer},
    rating : Number,
    Comment : String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;