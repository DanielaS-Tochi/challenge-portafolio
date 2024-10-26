document.getElementById("contact-form").addEventListener("submit", function (event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Expresión regular para validar el correo electrónico
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !subject || !message) {
        alert("Todos los campos son obligatorios.");
        event.preventDefault(); // Evita el envío si hay campos vacíos
    } else if (!email.match(emailPattern)) {
        alert("Por favor, introduce un correo electrónico válido.");
        event.preventDefault(); // Evita el envío si el correo no es válido
    } else {
        // Formspree manejará el envío si la validación es exitosa
        alert("Formulario enviado con éxito.");
    }
});

function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    const menuLinks = document.querySelector(".menu-links");
    navbar.classList.toggle("open");
    menuLinks.classList.toggle("open");
}
