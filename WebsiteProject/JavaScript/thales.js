$(document).ready(function () {

    $('.carousel[data-type="multi"] .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });

    $('#submit').click(function (e) {

        $('#validation_out').text("");
        $('#first_name_out').text("");
        $('#last_name_out').text("");
        $('#email_out').text("");

        // Initializing Variables With Form Element Values
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var email = $('#email').val();

        // Initializing Variables With Regular Expressions
        var name_regex = /^[a-zA-Z]+$/;
        var email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;

        // To Check Empty Form Fields.
        if (firstname.length == 0 || lastname.length == 0 || email.length == 0 || firstname == null || lastname == null || email == null) {
            $('#validation_out').text("* First name, Last name and email fields are mandatory *");
            console.log("* All fields are mandatory *");

            // This Segment Displays The Validation Rule For All Fields
            $("#firstname").focus();
            return false;
        }

        // Validating First Name Field.
        if (!firstname.match(name_regex) || firstname.length == 0) {
            $('#first_name_out').text("* For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
            console.log("* For your name please use alphabets only *");
            $("#firstname").focus();
            return false;
        }

        // Validating Last Name Field.
        else if (!lastname.match(name_regex) || lastname.length == 0) {
            $('#last_name_out').text("* For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
            $("#lastname").focus();
            return false;
        }

        // Validating Email Field.
        else if (!email.match(email_regex) || email.length == 0) {
            $('#email_out').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
            console.log("* Please enter a valid email address *");
            $("#email").focus();
            return false;
        } else {
            $('#validation_out').text("Form Submitted Successfuly!");
            $('#first_name_out').text("");
            $('#last_name_out').text("");
            $('#email_out').text("");
            // alert("Form Submitted Successfuly!");
            return true;
        }
    });
});
    