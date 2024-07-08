const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const register = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await User.create({ username, email, password: hashedPassword, role });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid login credentials');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ user, token });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

module.exports = { register, login };
