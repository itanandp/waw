$(document).ready(function () {

    emailReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    $("#rsvp-form").submit(function (e) {
        e.preventDefault();

        nameField = document.getElementById("rsvp-input-name").value;
        emailField = document.getElementById("rsvp-input-email").value;
        companyField = document.getElementById("rsvp-input-company").value;
        titleField = document.getElementById("rsvp-input-title").value;

        if(nameField && emailField && companyField && titleField) {
            if (emailField.match(emailReg)) {
                $("#rsvp-form").removeClass("error");
                $("#rsvp-form").trigger("reset");
                return
            }
        }
        $("#rsvp-form").addClass("error");
    });

    $("#sponsor-form").submit(function (e) {
        e.preventDefault();
        emailField = document.getElementById("sponsor-input-email").value;
        if(emailField){
            if(emailField.match(emailReg)){
                $("#sponsor-form").removeClass("error");
                $("#sponsor-form").trigger('reset');
                return;
            }
        }
        $("#sponsor-form").addClass("error");
        console.log('Error State due to empty')
    });

    $("#footer-form").submit(function (e) {
        e.preventDefault();
        emailField = document.getElementById("footer-input-email").value;
        if(emailField){
            if(emailField.match(emailReg)){
                $("#footer-form").removeClass("error");
                $("#footer-form").trigger('reset');
                // window.alert('Submit!')
                return;
            }
        }
        $("#footer-form").addClass("error");
        console.log('Error State due to empty')
    });
});