import PlayerClass from './Classes/player.js';
import ImageClass from './Classes/imageHandeler.js';
import World from './Classes/world.js';
import Block from './Classes/block.js';

/**@type {ImageClass} */
const images = window[window.randomString].images;
delete window[window.randomString];
delete window.randomString;
images.loadImages()

const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
const world = new World(100, 100, canvas);
const player = new PlayerClass();
const basicGrey = new Block('grey', 0, images.getMod('_'));

for (let i = 0; i < 100; i++) {
  world.setBlock(i, 0, 0, basicGrey)
  world.setBlock(i, 99, 0, basicGrey)
  world.setBlock(0, i, 0, basicGrey)
  world.setBlock(99, i, 0, basicGrey)
}

window.world = world
window.ctx = ctx
window.player = player

function draw() {
  // need to complete player first
}

function update() {
  player.update();
  world?.update?.();
}

function loop() {
  requestAnimationFrame(loop);
  update();
  draw();
}

loop();
