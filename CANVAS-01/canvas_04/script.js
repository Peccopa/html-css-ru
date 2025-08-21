const canvas = document.querySelector('#c1');
const ctx = canvas.getContext('2d');

// 04

// ctx.arc(x, y, radius, angle_start, angle_end, anticlockwise);

const pi = Math.PI;

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'green';
// ctx.arc(150, 100, 75, 0, pi, true);
ctx.arc(150, 100, 75, 0, pi * 2, true);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'pink';
ctx.fillStyle = 'blue';
ctx.arc(250, 100, 75, 0, pi * 2, false);
ctx.stroke();
ctx.fill();

ctx.clearRect(0, 0, 400, 200);

canvas.onmousemove = function (event) {
  const x = event.offsetX;
  const y = event.offsetY;
  ctx.clearRect(0, 0, 400, 200);
  ctx.beginPath();
  const radius = Math.pow(Math.pow(x - 200, 2) + Math.pow(y - 100, 2), 0.5);
  ctx.arc(200, 100, radius, 0, 2 * pi, false);
  ctx.stroke();
  ctx.fill();
};
