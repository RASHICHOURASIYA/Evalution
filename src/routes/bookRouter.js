const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const { createBook, getBooks, getBook } = require('../controllers/bookController');

const router = express.Router();

router.post('/', authenticate, authorize(['admin']), createBook);
router.get('/', getBooks);
router.get('/:id', getBook);

module.exports = router;
