document.getElementById("contact-form").addEventListener("submit", function (event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !subject || !message) {
        alert("Todos los campos son obligatorios.");
        event.preventDefault();
    }
});

const burgerMenu = document.querySelector(".burger-menu");
const navbar = document.querySelector(".navbar");

burgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("open");
});

