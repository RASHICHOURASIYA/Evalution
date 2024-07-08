const Order = require('../models/order');
const Book = require('../models/book');

const getOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByPk(id, {
      include: [
        {
          model: Book,
          as: 'books'
        }
      ]
    });

    if (!order) {
      return res.status(404).send();
    }

    res.send(order);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOrdersByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.findAll({ where: { userId } });
    res.send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getOrder, getOrdersByUser };
