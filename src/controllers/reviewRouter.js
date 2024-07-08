const Review = require('../models/review');

const getReviewsForBook = async (req, res) => {
  const { bookId } = req.params;

  try {
    const reviews = await Review.find({ bookId }).populate('userId', 'username email');
    res.send(reviews);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getReviewsForBook };
