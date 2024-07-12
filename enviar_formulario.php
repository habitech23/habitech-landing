<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    // Correo electrónico al que se enviará el formulario
    $destinatario = 'personal.emedina@gmail.com.com';

    // Construir el cuerpo del correo
    $cuerpoCorreo = "Nombre: $nombre\n";
    $cuerpoCorreo .= "Asunto: $asunto\n";
    $cuerpoCorreo .= "Mensaje: $mensaje\n";

    // Enviar el correo
    mail($destinatario, $asunto, $cuerpoCorreo);

    // Redireccionar de vuelta a la página del formulario después de enviar el correo
    header('Location: formulario_enviado.html');
    exit;
}
?>