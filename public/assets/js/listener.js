$(function() {
    $(".changeEat").on("click", function(event) {
        var id       = $(this).data("id");
        var newEaten = $(this).data("eat");

        console.log(id);
        console.log(newEaten);

        var newState = {
            devoured: newEaten
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(
            function() {
                console.log("changed devoured to " + newEaten);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger: $("#bur").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("New burger added!");
                location.reload();
            });
    });
});