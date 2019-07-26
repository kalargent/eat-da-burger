var connection = require("./connection"); 


var orm = { 
    // CREATE A METHOD TO SELECT ALL FROM THE DB
    allBurgers: function(table, res) {
        var queryString = `SELECT * FROM ${table}`  ;
        console.log(queryString); 
        connection.query(queryString, function(err, res) {
            if (err) throw err; 
            console.log(res); 
        }); 
    }, 

    // CREATE A METHOD TO INSERT A BURGER INTO THE DB
    // addBurger: function (name, res) {
    //     var queryString = "INSERT INTO burger_db (burgers) VALUES ()"
    // }

    // CREATE A METHOD TO UPDATE A BURGER IN THE DB 

}; 


module.exports = orm; 