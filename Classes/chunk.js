import Block from "./block.js";

export default class Chunk {
  /** @type {Map<string,Block|null>} */
  #block = new Map()
  /** @type {HTMLCanvasElement} canvas */
  #ctx
  /** @param {number} x @param {number} y @param {number} w @param {number} h */
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.#ctx = ctx

    for (let xBlock = 0; xBlock < w; xBlock++)
      for (let yBlock = 0; yBlock < h; yBlock++) {
        this.#block.set(`${xBlock},${yBlock},0`, null);
        this.#block.set(`${xBlock},${yBlock},1`, null);
      }
  }

  update() {
    this.#block.forEach(block => block?.update?.())
  }

  /** @param {number} x @param {number} y @param {number} layer @param {Block} block */
  setBlock(x, y, layer, block) {
    if ((block instanceof Block)
      && (x >= this.x) && (x < this.x + this.w)
      && (y >= this.y) && (y < this.y + this.h)) {
      this.#block.set(`${x - this.x},${y - this.y},${layer}`, block);
      this.#block.get(`${x - this.x},${y - this.y},${layer}`)?.draw(this.#ctx, x, y)
    }
  }

  /** @param {number} x @param {number} y @param {number} layer @return {Block | undefined} */
  getBlock(x, y, layer) {
    if ((x >= this.x) && (x < this.x + this.w)
      && (y >= this.y) && (y < this.y + this.h)) {
      return this.#block.get(`${x - this.x},${y - this.y},${layer}`);
    }
    return undefined;
  }
}