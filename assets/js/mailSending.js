"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
    main.nodes.contactForm = document.body.querySelector("#contactFormID");
    main.nodes.formGroup = main.nodes.contactForm.querySelector(".form-group");
    main.nodes.formName = main.nodes.formGroup[0];
    main.nodes.formEmail = main.nodes.formGroup[1];
    main.nodes.formMessage = main.nodes.formGroup[2];

    main.nodes.formGroup.addEventListener('submit', function(event) {
        var data = {
            'name': main.nodes.formName.value,
            'email': main.nodes.formEmail.value,
            'message': main.nodes.formMessage.value
        };
        $.ajax({
            type: "POST",
            url: "/emailHandler.php",
            data: data,
            dataType: "json",
            encode: true
        }).done(function(data) {
            if (data.success) {
                // Clear input on click in the form
                main.nodes.formName.value = "";
                main.nodes.formEmail.value = "";
                main.nodes.formMessage.value = "";
                // alert(data.message);
            }
        });
        event.preventDefault();
    });
});
