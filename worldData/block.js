/* eslint-disable no-unused-vars,no-bitwise,no-plusplus */
/* global window, document, requestAnimationFrame */
/* eslint linebreak-style: ["error", "windows"] */
export default class {
  /** @param {number} id @param {number} state @param {String} img */
  constructor(id, state, img) {
    this.id = Number(id);
    this.state = Number(state);
    this.img = String(img);
  }
}
