import WorldClass from './Classes/worldClass.js';
import PlayerClass from './Classes/playerClass.js';
import ImageClass from './Classes/imageHandelerClass.js';
import BlockClass from './Classes/blockClass.js'

/**@type {ImageClass} */
const images = window[window.randomString].images;
delete window[window.randomString];
delete window.randomString;
images.loadImages()

const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
const world = new WorldClass(100, 100);
const player = new PlayerClass("");
const basicGrey = new BlockClass('grey', 0, images.getMod('_'));

for (let i = 0; i < 100; i++) {
  world.setBlock(i, 0, 0, basicGrey)
  world.setBlock(i, 99, 0, basicGrey)
  world.setBlock(0, i, 0, basicGrey)
  world.setBlock(99, i, 0, basicGrey)
}

window.world = world
window.ctx = ctx

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

ctx.fillStyle = "#000"

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  world.draw(0, 0, window.innerWidth, window.innerHeight, ctx);
  ctx.fillRect(0, 0, window.innerWidth, 0)
  ctx.fillRect(0, 0, 0, window.innerHeight)
  // ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
  // ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
  // need to complete player first
}

function loop() {
  requestAnimationFrame(loop);
  draw();
}

window.addEventListener('resize', resize);
resize();
loop();
