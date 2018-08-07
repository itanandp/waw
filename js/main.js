$(document).ready(function () {
    $("#rsvp-form").submit(function (e) {
        e.preventDefault();
        console.log('rsvp!');
        $("#rsvp-input-name").addClass("error");
        $("#rsvp-input-email").addClass("error");
        $("#rsvp-input-company").addClass("error");
        $("#rsvp-input-title").addClass("error");
    });
    $("#sponsor-form").submit(function (e) {
        e.preventDefault();
        console.log('sponsor!');
    });
    $("#footer-form").submit(function (e) {
        e.preventDefault();
        console.log('footer!');
    });
});