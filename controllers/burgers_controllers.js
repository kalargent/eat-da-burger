var express = require ("express"); 
var burgerModel = require ("../models/burger"); 
var router = express.Router(); 

// CREATE THE ROUTER 

router.get ("/", function (req, res) {
    burgerModel.allBurgers(function(data) {
        console.log("before the var"); 
        var burgerObj = {
            burgers: data 
        };
        console.log(burgerObj); 
        res.render("index", burgerObj); 
    });
});


// EXPORT 
module.exports = router;  