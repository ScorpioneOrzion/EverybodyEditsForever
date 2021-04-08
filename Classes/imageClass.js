export default class Image {
  constructor(width, height, states, name) {
    this.image = document.createElement('img')
    this.width = width
    this.height = height
    this.states = states
    this.image.src = `./mods/${name}/${states[0].sprite}`
    this.image.width = width
    this.image.height = height
  }
}
