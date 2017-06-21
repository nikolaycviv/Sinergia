$('.form-group').on('submit', function(event) {
    var data = {
        'name': $('#name').val(),
        'email': $('#email').val(),
        'message': $('#message').val()
    };
    $.ajax({
        type: "POST",
        url: "../emailHandler.php",
        data: data,
        dataType: "json",
        encode: true
    }).done(function(data) {
    });
    event.preventDefault();
});
