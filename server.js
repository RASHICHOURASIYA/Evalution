const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const orderRouter = require('./src/routes/OrderRouter');
const reviewRouter = require('./src/routes/ReviewRouter');
const sequelize = require('./src/config/db');
const customerRoute = require('./src/routes/CustomerRouter');
const cors = require('cors');

const app = express();
const port =  8083;

app.use(cors());
app.use(express.json());
app.use(orderRouter);
app.use(reviewRouter);
app.use('/api/customers', customerRoute);

app.get("/", (req, res) => {
  res.send("This is the home route");
});



mongoose.connect("mongodb+srv://bookstore:bookstore@cluster0.7szyrkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log('Connected with mongoose'))
.catch((err) => console.log('Failed to connect with mongoose', err));

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});


//sequelize.sync().then(()=>{
//app.listen(port, ()=>{
//connectionDB.connect((err)=>{
//    if(err) console.log(err);
//    else console.log("we are connected with mysql");
//})
   // console.log(`Server running on port no ${port}`);
//});
//});