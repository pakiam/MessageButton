$(document).ready(function () {
    var open = 0;

    $(".message-button-holder").on("click", function () {
        if (open == 1) {
            $(this).removeClass("message-button-holder-active");
            open--;
        } else {
            open++;
            $(this).addClass("message-button-holder-active")
        }
    });

});