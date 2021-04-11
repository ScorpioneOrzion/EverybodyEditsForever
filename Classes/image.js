export default class Image {
  constructor(width, height, states) {
    this.image = document.createElement('img')
    this.width = width
    this.height = height
    /** @type {Array<Object>} */
    this.states = states
    this.image.src = `./Sprites/${states[0].sprite}`
    this.image.width = width
    this.image.height = height
  }
}
