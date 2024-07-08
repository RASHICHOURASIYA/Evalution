//const mysql = require('mysql2');
//
//const connectionDB = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    database: 'evauser',
//    password:"rakhi9026"
//  });
//
//
//  module.exports = connectionDB;


const{Sequelize} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URl,{
    dialect:"mysql",
    logging: console.log,
    define:{
        timestamps : false
    }
});

sequelize.authenticate().then(()=>{
    console.log('Connected successfully');
})
.catch(err=>{
    console.error(err);
});

module.exports = sequelize;
