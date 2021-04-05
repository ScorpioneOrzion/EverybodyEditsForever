import WorldClass from './worldData/world.js';
import playerClass from './playerData/player.js';

const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
const world = new WorldClass(100, 100);

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function loop() {
  requestAnimationFrame(loop);
  draw();
}

window.addEventListener('resize', resize);
resize();
loop();
