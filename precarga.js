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
  background-color: black;
  z-index: 999;
`;

const gifImage = document.createElement('img');
gifImage.id = 'gifImage';
gifImage.src = 'https://cdn.jsdelivr.net/gh/sabatage3/preloaderApp@main/Preloader-Energie-Check-24.gif';
gifImage.style.cssText = `
  max-width: 100%;
  max-height: 100%;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
gifImage.style.display = 'none';

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(gifImage);

// Function to hide the overlay and display the SVG
function hideOverlay() {
  overlay.style.display = 'none';
  gifImage.style.display = 'block';
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
