var orm = require ("../config/orm"); 

// CALL THE ORM FUNCTIONS USING BURGER SPECIFIC INPUTS FOR ORM 
var burgers = {
    allBurgers: function(cb) {
        orm.all("burgers", function (res){ 
            cb(res); 
        }); 
    }, 
}

// EXPORT 
module.exports = burgers; 
