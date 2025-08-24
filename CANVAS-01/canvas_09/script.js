/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');

// 09

ctx.moveTo(200, 50);
ctx.quadraticCurveTo(150, 0, 100, 50);
ctx.quadraticCurveTo(50, 150, 200, 180);
ctx.quadraticCurveTo(350, 150, 300, 50);
ctx.quadraticCurveTo(250, 0, 200, 50);
ctx.stroke();
ctx.fillStyle = 'red';
ctx.fill();

ctx.moveTo(50, 50);
ctx.quadraticCurveTo(100, 100, 50, 150);
ctx.stroke();
