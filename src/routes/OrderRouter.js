const { Router } = require('express');
const order = require('../models/order');
const Customer = require('../models/customer');


const orderRouter = Router();

orderRouter.get('./order/:customerId', async (req, res)=>{
    try{
    const orders = await order.findAll({
        where :{CustomerId:req.params.customerId},
        include : Customer
    });
    res.send(orders);
 }catch(err){
    res.status(500).send(err);
 }
});

module.exports = orderRouter;