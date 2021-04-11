import modClass from './mod.js'

export default class Block {
  /** @param {String} id @param {number} state @param {modClass} mod */
  constructor(id, state, mod) {
    if (mod instanceof modClass) {
      this.id = id
      this.state = state
      this.imageObject = mod.getBlock(id)
    }
  }

  /** @param {number} x @param {number} y @param {CanvasRenderingContext2D} ctx */
  draw(ctx, x, y) {
    ctx.drawImage(this.imageObject.image, x, y, 16, 16)
  }
}