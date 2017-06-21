document.addEventListener("DOMContentLoaded", function(event) {
    var data = {
        name: $("#formName").val(),
        email: $("#formEmail").val(),
        message: $("#formMessage").val()
    };
    $.ajax({
        type: "POST",
        url: "../emailHandler.php",
        data: data,
        success: function() {
            $('.form-group').fadeIn(1000);
        }
    });
});
