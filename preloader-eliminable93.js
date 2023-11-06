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
    background-color: rgba(255, 255, 255, 0);
    z-index: 999;
`;

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://cdn.jsdelivr.net/gh/sabatage3/preloaderApp@main/Energie-check-24-preloaderTransparencia.gif';
svgImage.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(svgImage);

// Function to hide the overlay and display the SVG
function hideOverlay() {
    overlay.style.display = 'none';
    svgImage.style.display = 'block';
    // Agregar una función para eliminar el preloader después de 10 segundos (10000 milisegundos)
    setTimeout(() => {
        document.body.removeChild(overlay);
        document.body.removeChild(svgImage);
    }, 10000);
}

// Add an event listener to hide the overlay when all resources are loaded
document.addEventListener('DOMContentLoaded', hideOverlay);
window.addEventListener('load', hideOverlay);
