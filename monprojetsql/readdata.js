let mysql = require('mysql');

console.log('Get connection ...');

var connection = mysql.createConnection({
 database: 'testnodejs',
  host: "localhost",
 user: "root",
 password: ""
});

connection.connect(function(err) {
 if (err) throw err;
 console.log("Connected!");

 var sql_template = "SELECT * FROM employes WHERE Hire_date >='1995-11-20'";

 var replaces = ['employes'];
 sql = mysql.format(sql_template, replaces);


 connection.query(sql, function(err, rows, fields) {
if (err) throw err;

// console.log(rows);
for (var i = 0; i < rows.length; i++) {
console.log(rows[i]);

}

});
});