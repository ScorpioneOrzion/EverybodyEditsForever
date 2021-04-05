import BlockClass from './blockClass.js';

export default class {
  /** @type {Map<string,BlockClass>} */
  #block = new Map()

  /** @param {number} x @param {number} y @param {number} w @param {number} h */
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    for (let xBlock = 0; xBlock < w; xBlock++) {
      for (let yBlock = 0; yBlock < h; yBlock++) {
        this.#block.set(`${xBlock},${yBlock},0`, new BlockClass('air', 0));
        this.#block.set(`${xBlock},${yBlock},1`, new BlockClass('air', 0));
      }
    }
  }

  /** @param {number} x @param {number} y @param {number} layer @param {BlockClass} block */
  setBlock(x, y, layer, block) {
    if ((block instanceof BlockClass)
      && (x >= this.x) && (x < this.x + this.w)
      && (y >= this.y) && (y < this.y + this.h)) { this.#block.set(`${x},${y},${layer}`, block); }
  }

  /** @param {number} x @param {number} y @param {number} layer @return {BlockClass | undefined} */
  getBlock(x, y, layer) {
    if ((x >= this.x) && (x < this.x + this.w)
      && (y >= this.y) && (y < this.y + this.h)) { return this.#block.get(`${x},${y},${layer}`); }
    return undefined;
  }

  /** @param {number} x @param {number} y @param {CanvasRenderingContext2D} ctx */
  drawChunk(x, y, ctx) {
    for (const [key, block] of this.#block) {
      const keys = key.split(',')
      block.draw(keys[0] - x, keys[1] - y, ctx)
    }
  }
}
