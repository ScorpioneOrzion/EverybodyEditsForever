import BlockClass from './blockClass.js';
import ChunkClass from './chunkClass.js';

export default class {
  /** @type {Map<string,ChunkClass>} */
  #chunks = new Map()

  constructor(width, height) {
    this.width = width;
    this.height = height;

    const rows = width >> 4;
    const columns = height >> 4;
    const lastRow = width - (rows << 4);
    const lastColumn = height - (columns << 4);

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) this.#chunks.set(`${row},${column}`, new ChunkClass(row << 4, column << 4, 16, 16));
      this.#chunks.set(`${row},${columns}`, new ChunkClass(row << 4, columns << 4, lastRow, 16));
    }
    for (let column = 0; column < columns; column++) this.#chunks.set(`${rows},${column}`, new ChunkClass(rows << 4, column << 4, 16, lastColumn));
    this.#chunks.set(`${rows},${columns}`, new ChunkClass(rows << 4, columns << 4, lastRow, lastColumn));
  }

  /** @param {number} x @param {number} y @param {number} layer @param {BlockClass} block */
  setBlock(x, y, layer, block) {
    if ((block instanceof BlockClass)
      && (x >= 0) && (x < this.width)
      && (y >= 0) && (y < this.height)) this.#chunks.get(`${x << 4},${y << 4}`).setBlock(x, y, layer, block);
  }

  /** @param {number} x @param {number} y @param {number} layer @return {BlockClass | undefined} */
  getBlock(x, y, layer) {
    if ((x >= 0) && (x < this.width)
      && (y >= 0) && (y < this.height)) return this.#chunks.get(`${x << 4},${y << 4}`).getBlock(x, y, layer);
    return undefined;
  }

  draw(playerViewX, playerViewY, playerViewW, playerViewH) {
    const startX = Math.max(0, playerViewX) << 4
    const startY = Math.max(0, playerViewY) << 4
    const endX = Math.min(this.width, playerViewX + playerViewW) << 4
    const endY = Math.min(this.height, playerViewY + playerViewH) << 4
  }
}
