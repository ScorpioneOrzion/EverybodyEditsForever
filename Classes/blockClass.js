import imageClass from "./imageClass.js"

export default class {
  /** @param {String} id @param {number} state @param {imageClass} image */
  constructor(id, state, image) {
    this.id = id;
    this.state = state;
    this.imageObject = image;
  }

  /** @param {number} x @param {number} y @param {CanvasRenderingContext2D} ctx */
  draw(x, y, ctx) {
    ctx.drawImage(this.imageObject.image,
      16, 16,
      16, 16, x, y, 16, 16)
  }
}