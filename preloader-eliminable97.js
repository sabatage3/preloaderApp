// Create the overlay and SVG elements
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://cdn.jsdelivr.net/gh/sabatage3/preloaderApp@main/Preloader-Energie-Check-24-Transparent.gif';
svgImage.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
svgImage.style.display = 'none';

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(svgImage);

// Function to hide the overlay and display the SVG
function hideOverlay() {
    overlay.style.display = 'none';
    svgImage.style.display = 'block';
}

// Add an event listener to hide the overlay when all resources are loaded
document.addEventListener('DOMContentLoaded', checkResourcesLoaded);
window.addEventListener('load', checkResourcesLoaded);

// Función para comprobar si todos los recursos se han cargado
function checkResourcesLoaded() {
  if (document.readyState === 'complete') { // Verifica si el DOM ya está completamente cargado
    // Oculta y elimina el preloader
    overlay.style.display = 'none';
    svgImage.style.display = 'none';
  }
}
