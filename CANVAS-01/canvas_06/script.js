const canvas = document.querySelector('#c1');
const ctx = canvas.getContext('2d');

// 06

let x = 0;

function drawSin() {
  let y = 100 + 30 * Math.sin(x);
  if (x >= 400) {
    x = 0;
  } else {
    x += 0.3;
  }
  ctx.fillRect(5 * x, y, 2, 2);
  const timer = setTimeout(drawSin, 50);
}

drawSin();
