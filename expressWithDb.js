var express = require('express')
var app = express();var http = require ('http');var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb"
});
con.connect(function(err){
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', async function (req, res) {
    await con.query("SELECT * FROM customers", (err,rows)=>{

        res.json(rows)


    });
  })

  app.post('/user',function(req,res){
    var user_name=req.body.name;
    var address=req.body.address;
    console.log("User name = "+user_name+", password is "+address);
    res.end("yes");
  });
http.createServer(app).listen(8000,()=>{console.log("server running")});