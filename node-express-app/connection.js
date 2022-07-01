
const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

 


app.listen(5000, () => {
    console.log('Server is listening @5000');
});

let mysql = require('mysql');
console.log('Get connection ...');

var connection = mysql.createConnection({
    database: 'restaurant',
    host: "localhost",
    user: "root",
    password: ""
});




connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");


});

module.exports = {connection, app, express,mysql,cors,axios}; 