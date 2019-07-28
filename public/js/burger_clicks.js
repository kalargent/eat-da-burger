$(function () {
    $(".eat-burger").on("click", function (){
        console.log("you're trying to eat me.")
        var id = $(this).data("id"); 
        var devoured = $(this).data("devoured"); 

        var newDevouredState = {
            devoured: devoured, 
        }; 
        console.log(newDevouredState); 
    
        $.ajax ("/api/burgers/" + id, {
            type: "PUT", 
            data: newDevouredState
        })
        .then (
            function() {
                console.log("changed devoured property to " + devoured); 
                location.reload(); 
            }
        )
    }); 

    $("addAburger").on("submit", function (event) {
        event.preventdefault(); 

        var newBurger = {
            name: $("addNew").val(), 
            devoured: "0"
        }
        console.log(newBurger); 

        $.ajax ("api/burgers", {
            type: "POST", 
            data: newBurger
        })

        .then(
            function (){ 
                console.log("new cat added"); 
                location.reload()
            }
        )
    
    })
})