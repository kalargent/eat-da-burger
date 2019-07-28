var express = require ("express"); 
var burger = require ("../models/burger"); 
var router = express.Router(); 

// CREATE THE ROUTER 

router.get ("/", function (req, res) {
    burger.allBurgers(function(data) {
        console.log("before the var"); 
        var burgerObj = {
            burgers: data 
        };
        console.log(burgerObj); 
        res.render("index", burgerObj); 
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = req.params.id; 
    console.log(condition);
    console.log(req.body); 


    burger.updateBurgers(
        req.body.devoured, condition, function (result) { 
            console.log(result); 
        if (result.changedRows === 0) {
            return res.status(200).end(); 
        }
        else {
            res.status(200).end(); 
        }
    }); 
}); 


// EXPORT 
module.exports = router;  