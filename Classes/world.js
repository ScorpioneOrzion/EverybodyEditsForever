import Block from "./block.js"
import Chunk from "./chunk.js"

export default class World {
  /** @type {Map<string,Chunk>} */
  #chunks = new Map()

  /** @param {Number} width @param {Number} height @param {HTMLCanvasElement} canvas */
  constructor(width, height, canvas) {
    this.width = width
    this.height = height
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')

    const rows = width >> 4;
    const columns = height >> 4;
    const lastRow = width - (rows << 4);
    const lastColumn = height - (columns << 4);

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++)
        this.#chunks.set(`${row},${column}`, new Chunk(row << 4, column << 4, 16, 16, this.ctx));
      this.#chunks.set(`${row},${columns}`, new Chunk(row << 4, columns << 4, 16, lastRow, this.ctx));
    }
    for (let column = 0; column < columns; column++)
      this.#chunks.set(`${rows},${column}`, new Chunk(rows << 4, column << 4, lastColumn, 16, this.ctx));
    this.#chunks.set(`${rows},${columns}`, new Chunk(rows << 4, columns << 4, lastColumn, lastRow, this.ctx));

    this.canvas.width = width << 4
    this.canvas.height = height << 4
  }

  /** @param {number} x @param {number} y @param {number} layer @param {Block} blockObj */
  setBlock(x, y, layer, blockObj) {
    if ((blockObj instanceof Block) && (x >= 0) && (x < this.width)
      && (y >= 0) && (y < this.height)) {
      this.#chunks.get(`${x >> 4},${y >> 4}`).setBlock(x, y, layer, blockObj);
    }
  }

  /** @param {number} x @param {number} y @param {number} layer @return {Block | undefined} */
  getBlock(x, y, layer) {
    if ((x >= 0) && (x < this.width)
      && (y >= 0) && (y < this.height)) return this.#chunks.get(`${x >> 4},${y >> 4}`).getBlock(x, y, layer);
    return undefined;
  }
}