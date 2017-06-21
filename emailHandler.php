<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    //send email
    mail("office@sinergiaplus.eu", "This is an email from: " .$email, $message);

    echo json_encode('success');
}
?>
