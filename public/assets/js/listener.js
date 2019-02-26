$(function() {
    $(".changeEat").on("click", function(event) {
        var id       = $(this).data("id");
        var newEaten = $(this).data("data-eaten");

        var newEatenState = {
            devoured: newEaten
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                console.log("changed devoured to " + newEaten);
                location.reload();
            }
        );
    });
});