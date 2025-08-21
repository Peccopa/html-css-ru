// const canvas = document.querySelector('#c1');
// const ctx = canvas.getContext('2d');

// 01

// ctx.fillRect(x, y, w, h);

// ctx.fillStyle = 'red';
// ctx.fillRect(100, 50, 150, 75);
// ctx.fillStyle = 'blue';
// ctx.fillRect(150, 100, 100, 50);

// ctx.clearRect(0, 0, 400, 200);

// ctx.strokeStyle = 'green';
// ctx.lineWidth = 10;
// ctx.rect(50, 10, 100, 100);
// ctx.stroke();
// ctx.fillStyle = 'orange';
// ctx.fill();

// 02

// ctx.beginPath();
// ctx.strokeStyle = 'red';
// ctx.lineWidth = 5;
// ctx.moveTo(100, 50);
// ctx.lineTo(150, 150);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = 20;
// ctx.moveTo(200, 50);
// ctx.lineTo(300, 50);
// ctx.lineTo(300, 100);
// ctx.lineCap = 'round';
// // ctx.lineCap = 'square';
// // ctx.lineCap = 'butt';
// ctx.stroke();

// ctx.clearRect(0, 0, 400, 200);

// ctx.beginPath();
// // ctx.strokeStyle = 'blue';
// // ctx.lineWidth = 20;
// ctx.moveTo(50, 150);
// ctx.lineTo(150, 50);
// ctx.lineTo(200, 150);
// // ctx.lineTo(50, 150);
// ctx.lineWidth = 10;
// // ctx.lineCap = 'round';
// ctx.fillStyle = 'orange';
// ctx.fill();
// // ctx.lineCap = 'square';
// // ctx.lineCap = 'butt';
// ctx.closePath();
// ctx.stroke();

// 03

// let myColor = 'red';
// document.querySelector('#color').addEventListener('input', function () {
//   myColor = this.value;
// });

// canvas.addEventListener('mouseup', () => {
//   canvas.removeEventListener('mousemove', paint);
// });

// canvas.addEventListener('mousedown', () => {
//   canvas.addEventListener('mousemove', paint);
// });

// function paint(event) {
//   const x = event.offsetX;
//   const y = event.offsetY;
//   ctx.fillRect(x - 5, y - 5, 10, 10);
//   ctx.fillStyle = myColor;
//   ctx.fill();
// }

// test

// 1.
// const canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = '#001d3d';
// ctx.fillRect(0, 0, canvas.width, canvas.height);
// function drawStar(x, y, size) {
//   ctx.beginPath();
//   ctx.arc(x, y, size, 0, Math.PI * 2);
//   ctx.fillStyle = '#fff';
//   ctx.fill();
//   ctx.closePath();
// }
// for (let i = 0; i < 100; i++) {
//   const x = Math.random() * canvas.width;
//   const y = Math.random() * canvas.height;
//   const size = Math.random() * 2 + 1;
//   drawStar(x, y, size);
// }

// 2.
// const canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
// const ctx = canvas.getContext('2d');
// canvas.width = 500;
// canvas.height = 200;
// ctx.font = '42px Arial';
// ctx.fillText("Hello, I'm Canvas!", 50, 100);

// 5.
// const canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
// const ctx = canvas.getContext('2d');
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 120);
// ctx.closePath();
// ctx.fillStyle = 'orange';
// ctx.fill();
// // Forgetting beginPath()
// // // ctx.beginPath();
// ctx.moveTo(150, 50);
// ctx.lineTo(200, 50);
// ctx.lineTo(150, 120);
// ctx.closePath();
// ctx.fillStyle = 'blue';

// 10.
// const canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(20, 25, 500, 100);

// 11.
// const canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'red';
// ctx.fillRect(10, 15, 150, 100);

// 13.
// const canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
// const ctx = canvas.getContext('2d');
// const img = new Image();
// img.onload = function () {
//   ctx.drawImage(img, 0, 0, img.width, img.height);
// };
// img.src = 'pic.jpg'; // image size is 600x300px;

// 19.
// const canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
// const ctx = canvas.getContext('2d');
// canvas.width = 400;
// canvas.height = 200;
// ctx.fillStyle = 'blue';
// ctx.fillRect(50, 50, 100, 100);
// ctx.clearRect(75, 75, 50, 50);

// 23.
// const canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.arc(150, 75, 50, 0, Math.PI * 2);
// ctx.fill();

// 25.
// const canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
// const ctx = canvas.getContext('2d');
// ctx.strokeStyle = 'yellow';
// ctx.lineWidth = 5;
// ctx.fillStyle = 'blue';
// ctx.beginPath();
// ctx.moveTo(100, 10);
// ctx.lineTo(10, 150);
// ctx.lineTo(190, 150);
// ctx.fill();

// ...
// const canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
// const ctx = canvas.getContext('2d');
// ctx.beginPath();
// ctx.arc(19, 15, 9, 1, 10);
// ctx.fill();

// 36.
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 300, 150);
ctx.globalAlpha = 0.5;
ctx.fillStyle = 'yellow';
ctx.fillRect(50, 50, 200, 300);

// TESTS!!!!

// const canvasTest = document.createElement('canvas');
// document.body.appendChild(canvasTest);
// const ctx = canvasTest.getContext('2d');
// ctx.fillStyle = 'red';
// ctx.fillRect(10, 15, 150, 100);
