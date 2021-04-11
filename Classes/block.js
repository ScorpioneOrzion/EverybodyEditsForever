import Mod from './mod.js'

export default class Block {
  #x = 0
  #y = 0
  #ctx = null
  /** @param {String} id @param {number} state @param {Mod} mod */
  constructor(id, state, mod) {
    this.id = id
    this.state = state
    this.imageObject = mod.getBlock(id)
  }

  /** @param {number} x @param {number} y @param {CanvasRenderingContext2D} ctx */
  draw(ctx = this.#ctx, x = this.#x, y = this.#y) {
    ctx.drawImage(this.imageObject.image, x * 16, y * 16)
    this.#x = x
    this.#y = y
    this.#ctx = ctx
  }

  updateState(newState) {
    this.state = newState % this.imageObject.states.length
    if (this.imageObject.states[this.state].sprite != this.imageObject.image.src) {
      this.imageObject.image.src = this.imageObject.states[this.state].sprite
      this.draw()
    }
  }
}