const mysql = require('mysql2');

const pool = mysql.createPool ({
    host : 'localhost' ,
    user : 'root' ,
    password : '1234' ,
    database : 'task1',
    port : '3308'

} );


module.exports = pool.promise();