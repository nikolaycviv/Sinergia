<?php
if($_POST){
    $name = $_POST['formName'];
    $email = $_POST['formEmail'];
    $message = $_POST['formMessage'];

//send email
    mail("office@sinergiaplus.eu", "This is an email from: " .$email, $message);
}
?>
