const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const grid = {
  width: canvas.clientWidth,
  height: canvas.clientHeight,
  scaleX: 50,
  scaleY: 50,
  color: '#f5f0e8',
};

function drawGrid({ width, height, scaleX, scaleY, color }) {
  ctx.beginPath();
  ctx.strokeStyle = color;

  for (let i = 0; i <= width; i += scaleX) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
  }
  for (let i = 0; i <= height; i += scaleY) {
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
  }

  ctx.stroke();
  ctx.closePath();
}

drawGrid(grid);

const axis = {
  axisX: grid.width / 2,
  axisY: grid.height / 2,
  color: '#000000',
};

function drawAxis({ axisX, axisY, color }) {
  ctx.beginPath();
  ctx.strokeStyle = color;

  ctx.moveTo(axisX, 0);
  ctx.lineTo(axisX, grid.height);

  ctx.moveTo(0, axisY);
  ctx.lineTo(grid.width, axisY);

  ctx.stroke();
  ctx.closePath();
}

drawAxis(axis);
