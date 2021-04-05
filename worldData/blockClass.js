export default class {
  /** @param {String} id @param {number} state @param {string|undefined} mod */
  constructor(id, state, mod) {
    this.id = id;
    this.state = state;
    this.imageInfo
  }

  /** @param {number} x @param {number} y @param {CanvasRenderingContext2D} ctx */
  draw(x, y, ctx) {
    ctx.draw(this.id, x, y)
  }
}
