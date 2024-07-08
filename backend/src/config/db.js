const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('evauser', 'root', 'rakhi9026', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

// Test the connection
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;