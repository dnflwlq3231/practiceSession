const mysql = require('mysql');
const dbOption = require('../config/db.js');

var db = mysql.createConnection(dbOption);

db.connect();

db.query('SELECT * FROM login', (error, result, fields) => {
    if (error) {
        console.log(error);
    } else {
        console.log('db query success');
    }
});

module.exports = db;