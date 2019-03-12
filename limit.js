var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  //select first 5 records 
  var sql = "SELECT * FROM customers LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  //start from 2nd position
  var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  //shorthand of limit and offset
  var sql = "SELECT * FROM customers LIMIT 2,5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

});
