const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');

// 07

const R = 150;
const r = 90;
const d = 80;

let teta = 0;
let timer;

function spiro() {
  let x = (R - r) * Math.cos(teta) + d * Math.cos(((R - r) * teta) / r);
  let y = (R - r) * Math.sin(teta) - d * Math.sin(((R - r) * teta) / r);
  teta += 0.1;

  ctx.fillRect(300 + x, 300 + y, 4, 4);

  timer = setTimeout(spiro, 50);
}

spiro();
