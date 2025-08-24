const canvas = document.querySelector('#c1');
const ctx = canvas.getContext('2d');

// 05

let x = 200;
let y = 100;

let myX;
let myY;

let stepCount = 0;
let direction;
let timer;

function drawDot() {
  ctx.clearRect(0, 0, 400, 200);
  if (stepCount === 0) {
    stepCount = Math.floor(15 * Math.random());
    direction = Math.floor(8 * Math.random());
  } else {
    stepCount -= 1;
  }

  switch (direction) {
    case 0:
      y -= 1;
      break;
    case 1:
      x += 1;
      break;
    case 2:
      y += 1;
      break;
    case 3:
      x -= 1;
      break;
    case 4:
      x += 1;
      y -= 1;
      break;
    case 5:
      x += 1;
      y += 1;
      break;
    case 6:
      x -= 1;
      y += 1;
      break;
    case 7:
      x -= 1;
      y -= 1;
      break;

    default:
      break;
  }

  if (x < 0 || x > 400 || y < 0 || y > 200) {
    stepCount = 0;
  }

  ctx.fillRect(x - 3, y - 3, 6, 6);

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(myX, myY);
  ctx.stroke();

  timer = setTimeout(drawDot, 100);
}

drawDot();

canvas.addEventListener('mousemove', (event) => {
  myX = event.offsetX;
  myY = event.offsetY;
});
