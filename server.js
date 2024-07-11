const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const sequelize = require('./src/config/db');
const orderRouter = require('./src/routes/OrderRouter');
const customerRoute = require('./src/routes/CustomerRouter');
const reviewRouter = require('./src/routes/ReviewRouter');

const app = express();
const port = 8083;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/orders', orderRouter);
app.use('/api/customers', customerRoute);
app.use('/api/reviews', reviewRouter);

app.get("/", (req, res) => {
  res.send("This is the home route");
});

// MongoDB Connection
mongoose.connect("mongodb+srv://bookstore:bookstore@cluster0.7szyrkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Connected to MongoDB with Mongoose'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// Sequelize (SQL) Connection
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.log('Failed to sync with Sequelize', err));
