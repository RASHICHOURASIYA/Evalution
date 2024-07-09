const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const orderRouter = require('./src/routes/OrderRouter');
const reviewRouter = require('./src/routes/ReviewRouter');
const sequelize = require('./src/config/db');
const customerRouter = require('./src/routes/CustomerRouter');

const app = express();
const port = 8082;


app.use(express.json());


app.use('/api/orders', orderRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/customers', customerRouter);

app.get("/", (req, res) => {
    res.send("This is the home route");
});


mongoose.connect("mongodb+srv://bookstore:bookstore@cluster0.7szyrkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log('Connected with mongoose'));

sequelize.sync().then(()=>{
app.listen(port, ()=>{
//connectionDB.connect((err)=>{
//    if(err) console.log(err);
//    else console.log("we are connected with mysql");
//})
    console.log(`Server running on port no ${port}`);
});
});