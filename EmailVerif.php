<?php

$verificationCode = rand(100000, 999999);


$to = $_POST['email']; 
$subject = 'Verification Code for Password Reset';
$message = 'Your verification code is: ' . $verificationCode;
$headers = 'From: yasuowear@gmail.com' . "\r\n" .
    'Reply-To: yasuowear@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);


echo json_encode(['code' => $verificationCode]);
?>
