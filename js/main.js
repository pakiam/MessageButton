$(document).ready(function () {
    var open = 0;
    $("#incredible-button").on("click", function () {
        if (open == 1) {
            $(this).removeClass("message-center-button-holder-active").addClass("message-center-button-holder");
            function unFillWindow() {
                return $("#incredible-button").removeClass("message-center-button-holder").addClass("message-button-holder");
            }
            setTimeout(unFillWindow, 900);
            open--;
        } else {
            open++;
            $("#incredible-button").removeClass("message-button-holder").addClass("message-center-button-holder");
            function fillWindow() {
                return $("#incredible-button").removeClass("message-center-button-holder").addClass("message-center-button-holder-active");
            }

            setTimeout(fillWindow, 900);
        }
    });
});