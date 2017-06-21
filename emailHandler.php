<?php

$errors = array();
$data = array();

if ($_POST['name'] == "") {
    $errors['name'] = 'Моля въведете Вашето име.';
}
if ($_POST['email'] == "") {
    $errors['email'] = 'Моля въведете email.';
}
if ($_POST['message'] == "") {
    $errors['message'] = 'Моля въведете запитване.';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    $email_to = "office@sinergiaplus.eu";
    $subject = "Запитването е направено от уеб страницата www.sinergiaplus.eu";
    $message = 'Име и Фамилия: '.$_POST['name'].PHP_EOL.
                    'E-mail: '.$_POST['email'].PHP_EOL.
                    'Запитване:'.$_POST['message'].PHP_EOL;
    mail($email_to, $subject, $message);
    $data['success'] = true;
    $data['message'] = 'Вашето съобщение беше изпратено!';
}
    echo json_encode($data);
?>
