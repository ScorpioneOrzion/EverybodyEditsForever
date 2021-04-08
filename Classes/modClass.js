import imageClass from "./imageClass.js"

/**
 * @typedef JSONObject
 * @property {number} width
 * @property {number} height
 * @property {Object<string,number|boolean|string>[]} states
 */

export default class {
  /** @type {Map<string, imageClass>} */
  #blocks = new Map()
  /** @param {string} name @param {Object<string,JSONObject>} json */
  constructor(name, json) {
    this.name = name
    for (const key in json) {
      this.#blocks.set(key, new imageClass(json[key].width, json[key].height, json[key].states, this.name))
      console.log(key)
    }
  }

  getBlock(name) {
    return this.#blocks.get(name)
  }
}