import image from "./image.js"

/**
 * @typedef JSONObject
 * @property {number} width
 * @property {number} height
 * @property {Object<string,number|boolean|string>[]} states
 */

export default class Mod {
  /** @type {Map<string, image>} */
  #blocks = new Map()
  /** @param {string} name @param {Object<string,JSONObject>} json */
  constructor(name, json) {
    this.name = name
    for (const key in json) {
      this.#blocks.set(key, new image(json[key].width, json[key].height, json[key].states))
    }
  }

  getBlock(name) {
    return this.#blocks.get(name)
  }
}