document
  .getElementById("contacto")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    // Verificar si algún campo está vacío
    if (!nombre || !asunto || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Construir el cuerpo del correo
    var body = "Nombre: " + nombre + "\n";
    body += "Asunto: " + asunto + "\n";
    body += "Mensaje: " + mensaje;

    // Enviar el correo usando el servicio de correo electrónico del usuario

    window.location.href =
      "mailto:personal.emedina@gmail.com?subject=" +
      encodeURIComponent(asunto) +
      "&body=" +
      encodeURIComponent(body);
  });
