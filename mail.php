<html>
<head>

<title>Hotel Bahia Paraiso</title>
</head>
<body>

<?php

require_once('mailer/class.phpmailer.php');
//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

$mail = new PHPMailer(true); // the true param means it will throw exceptions on errors, which we need to catch

$mail->IsSMTP(); // telling the class to use SMTP

try {
  $mail->Host       = "smtpout.secureserver.net"; // SMTP server
  $mail->SMTPDebug  = 1;                     // enables SMTP debug information (for testing)
  $mail->SMTPAuth   = true;                  // enable SMTP authentication
  $mail->Host       = "smtpout.secureserver.net"; // sets the SMTP server
  $mail->Port       = 25;                    // set the SMTP port for the GMAIL server
  $mail->Username   = "smtp@holboxdesign.com"; // SMTP account username
  $mail->Password   = "h0lb0x";        // SMTP account password
  $mail->AddReplyTo('info@hotelbahiaparaiso.com', 'Ventas Holbox'); //a quien se le deve responder ( de quien viene)
  $mail->AddAddress('josemanuel@hotelbahiaparaiso.com', 'DESTINATARIO');
  $mail->SetFrom('info@hotelbahiaparaiso.com', 'Bahia Paraiso');// SENDER
  $mail->Subject = 'Contacto Hotel Bahia Paraiso';
  $mail->AltBody = 'Este mensaje esta en Html!!'; // optional - MsgHTML will create an alternate automatically
  $msgCont = "Nuevo mensaje de contacto. www.hotelbahiaparaiso.com"."\r\n\r\n".$_POST['name']."\r\n".$_POST['email']."\r\n\r\n".$_POST['subject']."\r\n".$_POST['txtA'];
  //$mail->MsgHTML(file_get_contents('mailer/contents.html'), $_POST["mensaje"]);
  $mail->MsgHTML(file_get_contents('mailer/contents.html'), $msgCont);
  //$mail->AddAttachment('images/phpmailer.gif');      // attachment
  //$mail->AddAttachment('images/phpmailer_mini.gif'); // attachment
  $mail->AddStringAttachment($msgCont, "contactoHotelBahia_-_".date('Y/m/d').".txt");
  
$subject = $_POST['subject'];
$name = $_POST['name'];
$txtA = $_POST['txtA'];
$email = $_POST['email'];

//Form Validation(regular expresions)

  echo $_POST['email'];

if (!preg_match("/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/", $email)) 
{
  echo "<h4>Tienes que ingresar una cuenta de correo valida</h4>\r\n";
  echo "<a href='javascript:history.back(1);'>Regresar</a>";
} 

elseif ($subject == "") 
{
  echo "<h4>Tu mensaje deve llevar asunto</h4>\r\n";
  echo "<a href='javascript:history.back(1);'>Regresar</a>";
}
elseif ($name == "") 
{
  echo "<h4>Olvidaste poner tu nombre en el mensaje</h4>\r\n";
  echo "<a href='javascript:history.back(1);'>Regresar</a>";
}
elseif ($txtA == "") 
{
  echo "<h4>Debes escribir un mensaje!</h4>\r\n";
  echo "<a href='javascript:history.back(1);'>Regresar</a>";
}
else
{
$mail->Send();
echo "tu mensaje se envio con exito,\r\n muy pronto nos pondremos en contacto con usted.</p>\r\n\r\n";
echo "<a href='javascript:history.back(1);'>Regresar</a>";
}

//Form Validation
  

} catch (phpmailerException $e) {
  echo $e->errorMessage(); //Pretty error messages from PHPMailer
} catch (Exception $e) {
  echo $e->getMessage(); //Boring error messages from anything else!
}
?>

</body>
</html>
