// REQUIRED PACKAGES 
var mysql = require ("mysql"); 
var express = require("express"); 

// INITIALIZING APP VAR TO USE EXPRESS 
var app = express(); 

// DECLARING PORT 
var PORT = process.env.PORT || 3000; 

// DATABASE CONNECTION
// connection var
var connection = mysql.createConnection ({
    host: "localhost", 
    port: 3306, 
    user: "root", 
    password: "", 
    database: "burger_db" 
}); 

// actually connecting to the db 
connection.connect (function (err) {
    if (err) {
        console.log("Connection error: " + err.stack);
        return; 
    }
    console.log ("Connected as id + " + connection.threadId); 
})

// LISTENER 
app.listen (PORT, function (){ 
    console.log ("Server is listening on port " + PORT); 
})