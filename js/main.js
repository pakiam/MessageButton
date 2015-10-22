/*
This button was created by Maksim Loginov
Contact me: akiam@mail.ru
&copy 2015
 */
$(document).ready(function () {
    var open = 0;
    $("#incredible-button").on("click", function () {
        var self = $(this);
        if (open == 1) {
            self.removeClass("message-center-button-holder-active").addClass("message-center-button-holder");
            $("#message-form-holder").fadeOut(350);
            function unFillWindow() {
                self.removeClass("message-center-button-holder").addClass("message-button-holder");
            }

            setTimeout(unFillWindow, 900);
            open--;
        } else {
            open++;
            self.removeClass("message-button-holder").addClass("message-center-button-holder");
            function fillWindow() {
                self.removeClass("message-center-button-holder").addClass("message-center-button-holder-active");
                $("#message-form-holder").fadeIn(1000);
            }

            setTimeout(fillWindow, 900);
        }
    });
});