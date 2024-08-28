<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);


$mail->isSMTP(); //Send using SMTP
$mail->Host = 'smtp.example.com'; //Set the SMTP server to send through
$mail->SMTPAuth = true; //Enable SMTP authentication
$mail->Username = 'xSAIIIKAx@gmail.com'; //SMTP username
$mail->Password = 'ynsmjplhpcldhvsx'; //SMTP password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //Enable implicit TLS encryption
$mail->Port = 465;


// От кого письмо
$mail->setFrom ('xSAIIIKAx@gmail.com'); // указать нужный E-mail
// Кому отправить
$mail->addAddress ('xSAIIIKAx@gmail.com'); // указать нужный E-mail
// Тема письма
$mail->Subject = 'Заявка с сайта loungehouse';

// Тело листа
$body = ' <h1 >Заявка с сайта</h1>';

//if(trim(!empty($_POST['email']))){
//$body.=$_POST['email'];
//}


// Прикрепить файл
if (!empty($_FILES['image']['tmp_name'])) {
// путь загрузки файла
$filePath = __DIR__ . "/files/sendmail/attachments/" . $_FILES['image']['name'];
// грузим файл
if (copy($_FILES['image']['tmp_name'], $filePath)){
$fileAttach = $filePath;
$body.= '<p><strong>Документ в приложении < / strong>';
$mail->addAttachment($fileAttach);
}
}


$mail->Body = $body;

// Отправляем
if (!$mail->send()) {
$message = 'ошибка';
} else {
$message = ' данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>