var connection = require("./connection"); 


var orm = { 
    // CREATE A METHOD TO SELECT ALL FROM THE DB
    all: function(table, cb) {
        var queryString = `SELECT * FROM ${table}`;
        console.log(queryString); 
        connection.query(queryString, function(err, res) {
            if (err) throw err; 
            cb(res); 
        }); 
    }, 

    // CREATE A METHOD TO INSERT A BURGER INTO THE DB
    // addBurger: function (table, cols, vals, cb) {
    //     var queryString = `INSERT INTO ${table} ${cols} ${vals}`
    //     console.log(queryString); 
    // }

    // CREATE A METHOD TO UPDATE A BURGER IN THE DB 
    update: function (table, objColVals, condition, cb) {
        var queryString = `UPDATE ${table} SET devoured = ${objColVals} WHERE ID = ${condition}`; 
        console.log(queryString); 

        connection.query(queryString, function (err, res) {
            if (err){
                throw err; 
            } 
            cb(res); 

        })
    }

}; 


module.exports = orm; 