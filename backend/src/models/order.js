const { DataTypes } = require('sequelize');
const Customer = require('./customer');
const sequelize = require('../config/db');



const order = sequelize.define('order',{
    totalAmount : DataTypes.FLOAT,
    date : DataTypes.DATE,
});

order.belongsTo(Customer);
Customer.hasMany(order);

module.exports = order;

