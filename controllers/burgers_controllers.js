var express = require ("express"); 
var burgers = require ("../models/burger"); 
var router = express.Router(); 

// CREATE THE ROUTER 

router.get ("/", function (req, res) {
    burgers.allBurgers (function  (data) {
        var burgerObj = {
            burger: data, 
        }
        console.log(burgerObj); 
        res.render("index", burgerObj); 
    })
})


// EXPORT 
module.exports = router;  