const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const { getOrder, getOrdersByUser } = require('../controllers/orderController');

const router = express.Router();

router.get('/:id', authenticate, authorize(['admin', 'customer']), getOrder);
router.get('/user/:userId', authenticate, authorize(['admin', 'customer']), getOrdersByUser);

module.exports = router;
