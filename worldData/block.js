export default class {
  /** @param {number} id @param {number} state @param {String} img */
  constructor(id, state, img) {
    this.id = Number(id);
    this.state = Number(state);
    this.img = String(img);
  }
}
