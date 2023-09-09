const {createPool} = require('mysql2');
require('dotenv').config();

// connecting
const connection = createPool ({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_name,
    multipleStatements: true,
    waitForConnections: true,
    queueLimit: 0,
    connectionLimit: 100
}); 

connection.getConnection((error) =>{
    if(error){
        console.log(error);
    } else{
        console.log("Database connected successfully");
    }
})

module.exports = connection;
