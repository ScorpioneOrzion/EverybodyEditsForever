import BlockClass from './blockClass.js';

export default class Chunk {
  /** @type {Map<string,BlockClass|null>} */
  #block = new Map()

  /** @param {number} x @param {number} y @param {number} w @param {number} h */
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    for (let xBlock = 0; xBlock < w; xBlock++) {
      for (let yBlock = 0; yBlock < h; yBlock++) {
        this.#block.set(`${xBlock},${yBlock},0`, null);
        this.#block.set(`${xBlock},${yBlock},1`, null);
      }
    }
  }

  /** @param {number} x @param {number} y @param {number} layer @param {BlockClass} block */
  setBlock(x, y, layer, block) {
    if ((block instanceof BlockClass)
      && (x >= this.x) && (x < this.x + this.w)
      && (y >= this.y) && (y < this.y + this.h)) {
      this.#block.set(`${x - this.x},${y - this.y},${layer}`, block);
    }
  }

  /** @param {number} x @param {number} y @param {number} layer @return {BlockClass | undefined} */
  getBlock(x, y, layer) {
    if ((x >= this.x) && (x < this.x + this.w)
      && (y >= this.y) && (y < this.y + this.h)) { return this.#block.get(`${x - this.x},${y - this.y},${layer}`); }
    return undefined;
  }

  /** @param {number} x @param {number} y @param {CanvasRenderingContext2D} ctx */
  drawChunk(x, y, ctx) {
    for (const [key, block] of this.#block) {
      if (block === null) continue
      const keys = key.split(',').map(string => Number(string))
      block.draw(x + (keys[0] << 4), y + (keys[1] << 4), ctx)
    }
  }
}
