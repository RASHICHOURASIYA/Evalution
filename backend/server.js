const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const orderRouter = require('./src/routes/OrderRouter');
const reviewRouter = require('./src/routes/reviewRouter');
const connectionDB = require('./src/config/db');
const sequelize = require('./src/config/db');



const app = express();
const port =  8081;

app.use(express.json());
app.use(orderRouter);
app.use(reviewRouter);


app.get("/", (req, res)=>{
    res.send(" this is home route");
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