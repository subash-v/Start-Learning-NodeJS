var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err){
    if(err) return err;
    con.query("SELECT * FROM customers ORDER BY name",function(err,result){
        if(err) return err;
        console.log(result);
    })
    con.query("SELECT * FROM customers ORDER BY name DESC",function(err,result){
        if(err) return err;
        console.log(result);
    })
})