// Crear un div para el fondo negro del spinner
var overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 1)";
overlay.style.zIndex = "9999";

// Crear el contenedor del spinner
var spinnerContainer = document.createElement("div");
spinnerContainer.style.position = "absolute";
spinnerContainer.style.top = "50%";
spinnerContainer.style.left = "50%";
spinnerContainer.style.transform = "translate(-50%, -50%)";
spinnerContainer.style.textAlign = "center";

// Crear el spinner de tipo barsfade
var spinner = document.createElement("div");
spinner.className = "spinner-barsfade";

// Crear la imagen del logo
var logo = document.createElement("img");
logo.src = "https://firebasestorage.googleapis.com/v0/b/energie-check-24.appspot.com/o/Preloader-Energie-Check-24.gif?alt=media&token=759c7eb5-2d12-480b-9eb2-4e9b058fda87";
logo.alt = "Logo";

// Agregar el spinner y la imagen al contenedor
spinnerContainer.appendChild(spinner);
spinnerContainer.appendChild(logo);

// Agregar el contenedor al overlay
overlay.appendChild(spinnerContainer);

// Agregar el overlay al cuerpo del documento
document.body.appendChild(overlay);

// Función para ocultar el preloader con fade
function hideOverlay() {
    // Aplicar una transición de fade
    overlay.style.transition = "opacity 0.5s";
    overlay.style.opacity = "0"; // Establecer la opacidad en 0 gradualmente
    setTimeout(function() {
        overlay.style.display = "none"; // Ocultar el overlay después de la transición
    }, 500); // Esperar 0.5 segundos para que termine la transición
}
// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Replace the following lines with the actual code that loads your external JS files
    // For demonstration purposes, we'll use a setTimeout to simulate loading external JS files.
    setTimeout(hideOverlay, 100); // Replace with your actual loading code.
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);