export default class {
  /** @param {{imageSrc: string, width: number, height: number, hFrames: number, vFrames: number, states:{frame:number}[]}} */
  constructor({ imageSrc, width, height, hFrames, vFrames, states }) {
    this.image = document.createElement("img")
    this.hFrames = hFrames
    this.vFrames = vFrames
    this.width = width
    this.height = height
    this.states = states
    this.image.src = imageSrc
    this.image.width = width
    this.image.height = height
  }
}