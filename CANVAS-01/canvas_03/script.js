const canvas = document.querySelector('#c1');
const ctx = canvas.getContext('2d');

// 03

let myColor = 'red';
document.querySelector('#color').addEventListener('input', function () {
  myColor = this.value;
});

canvas.addEventListener('mouseup', () => {
  canvas.removeEventListener('mousemove', paint);
});

canvas.addEventListener('mousedown', () => {
  canvas.addEventListener('mousemove', paint);
});

function paint(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  ctx.fillRect(x - 5, y - 5, 10, 10);
  ctx.fillStyle = myColor;
  ctx.fill();
}
