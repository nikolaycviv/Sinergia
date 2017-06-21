document.addEventListener("DOMContentLoaded", function(event) {
    var data = {
        name: document.body.querySelector('#formName').value,
        email: document.body.querySelector('#formEmail').value,
        message: document.body.querySelector('#formMessage').value
    };
    $.ajax({
        type: "POST",
        url: "/emailHandler.php",
        data: data,
        dataType: "json",
        success: function(response) {
            if (!response) {
                console.log("errrrrror");
            }
            console.log(response);
        }
    });
});
