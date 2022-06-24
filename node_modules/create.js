//  // Drop EMPLOYEES table if Exists!!
//      var sql1 = "DROP TABLE IF EXISTS restaurants ";

//      connection.query(sql1, function(err, results) {
//      if (err) throw err;
//      console.log("Table restaurants dropped");
//      });



//     // Create restaurants Table.
//     var sql2 = "CREATE TABLE restaurants (Id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), city VARCHAR(100), nbcouverts INT(10), terrasse VARCHAR(3), parking VARCHAR(3))";

//     connection.query(sql2, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");

//     });

//     // Drop EMPLOYEES table if Exists!!
//     var sql3 = "DROP TABLE IF EXISTS employes ";

//     connection.query(sql3, function(err, results) {
//     if (err) throw err;
//     console.log("Table Employes dropped");
//     });

//     // Create employes Table.
//     var sql4 = "CREATE TABLE employes (Id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100), hire_date Date, restaurant_id INT(10))";

//     connection.query(sql4, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");

//     });