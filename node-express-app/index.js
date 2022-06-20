const express = require('express');
const app = express();

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

    //  // Drop EMPLOYEES table if Exists!!
    //  var sql1 = "DROP TABLE IF EXISTS restaurants ";

    //  connection.query(sql1, function(err, results) {
    //  if (err) throw err;
    //  console.log("Table restaurants dropped");
    //  });



    // // Create restaurants Table.
    // var sql2 = "CREATE TABLE restaurants (Id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), city VARCHAR(100), nbcouverts INT(10), terrasse VARCHAR(3), parking VARCHAR(3))";

    // connection.query(sql2, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table created");

    // });

    // // Drop EMPLOYEES table if Exists!!
    // var sql3 = "DROP TABLE IF EXISTS employes ";

    // connection.query(sql3, function(err, results) {
    // if (err) throw err;
    // console.log("Table Employes dropped");
    // });

    // // Create employes Table.
    // var sql4 = "CREATE TABLE employes (Id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100), hire_date Date, restaurant_id INT(10))";

    // connection.query(sql4, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table created");

    // });


});

//RESTAURANT
// Middleware
app.use(express.json());
//Mehtod POST pour ajouter un restaurant
app.post('/restaurant', (req, res) => {
    let sql = "INSERT INTO restaurants (name, city, nbcouverts, terrasse, parking) " +
        " VALUES ('" + req.body.name + "', '"
        + req.body.city + "', '"
        + req.body.nbcouverts + "', '"
        + req.body.terrasse + "', '"
        + req.body.parking + "')";

    connection.query(sql, function (err, results) {
        if (err) throw err;
        console.log("Insert a record !");
    });

    res.status(200);
});

//Method GET pour afficher la liste des restaurants
app.get('/restaurants', (req, res) => {
    var sql_template = "Select * from ?? ";
    var replaces = ['restaurants'];

    sql = mysql.format(sql_template, replaces);

    connection.query(sql, function (err, rows) {
        if (err) throw err;
        res.send(rows)
    });
    res.status(200);
});

//Method GET pour afficher un restaurant particulier
app.get('/restaurants/:id', (req, res) => {
    let id = parseInt(req.params.id);

    let sql_template = "Select * from ?? WHERE ?? =" + id;
    let replaces = ['restaurants', 'Id'];

    sql = mysql.format(sql_template, replaces);

    connection.query(sql, function (err, row, fields) {
        if (err) throw err;
        res.send(row);
    });
    res.status(200);
});

//Method PUT pour modifier un restaurant en particulier
app.put('/restaurants/:id', (req, res) => {
    let id = parseInt(req.params.id);

    // Coder ici la requête
    let sql_update = "UPDATE ?? SET name='" + req.body.name + "', city='" + req.body.city + "', nbcouverts='" + req.body.nbcouverts + "', terrasse='" + req.body.terrasse + "', parking='" + req.body.parking + "' WHERE ?? =" + id;

    // Formater la requête
    let replaces = ['restaurants', 'Id'];
    sql = mysql.format(sql_update, replaces);

    // Executer la requête
    connection.query(sql, function (err, rows) {
        if (err) throw err;
        res.send(rows)
    });

    res.status(200);
})

//Method DELETE pour supprimer un restaurant en particulier
app.delete('/restaurants/:id', (req, res) => {
    let id = parseInt(req.params.id)

 // Coder ici la requête
 let sql_delete ="DELETE FROM ?? WHERE ?? =" + id;
    // Formater la requête
    let replaces = ['restaurants', 'Id'];
    sql = mysql.format(sql_delete, replaces);

    // Executer la requête
    connection.query(sql, function (err, rows) {
        if (err) throw err;
        res.send(rows)
    });
    
 res.status(200);
 })

//EMPLOYES

//Mehtod POST pour ajouter un restaurant
app.post('/restaurants/:idResto/employe', (req, res) => {
    let id = parseInt(req.params.idResto);

    let sql = "INSERT INTO employes (first_name, last_name, hire_date, restaurant_id) " +
        " VALUES ('" + req.body.first_name + "', '"
        + req.body.last_name + "', '"
        + req.body.hire_date + "', '"
        + id + "')";

    connection.query(sql, function (err, results) {
        if (err) throw err;
        console.log("Insert a record !");
    });

    res.status(200);
});
