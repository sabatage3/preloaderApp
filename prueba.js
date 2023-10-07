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