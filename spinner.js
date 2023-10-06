const canvas = document.createElement("canvas");
canvas.width = 100;
canvas.height = 100;
document.body.appendChild(canvas);

// Obtiene el contexto de dibujo del canvas
const ctx = canvas.getContext("2d");

// Inicializa el spinner
ctx.fillStyle = "#000";
ctx.beginPath();
ctx.arc(50, 50, 25, 0, 2 * Math.PI);
ctx.fill();

// Crea un temporizador para actualizar el spinner
const timer = setInterval(() => {
  // Rota el spinner
  ctx.rotate(0.01);

  // Redibuja el spinner
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(50, 50, 25, 0, 2 * Math.PI);
  ctx.fill();
}, 10);

// Detiene el temporizador al salir de la página
window.addEventListener("unload", () => {
  clearInterval(timer);
});


