import modClass from './modClass.js'

export default class Mod {
  /** @param {String} id @param {number} state @param {modClass} mod */
  constructor(id, state, mod) {
    if (mod instanceof modClass) {
      this.id = id
      this.state = state
      this.imageObject = mod.getBlock(id)

    }
  }

  /** @param {number} x @param {number} y @param {CanvasRenderingContext2D} ctx */
  draw(x, y, ctx) {
    ctx.drawImage(this.imageObject.image, x, y, 16, 16)
  }
}