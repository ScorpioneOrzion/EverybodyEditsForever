import imageClass from "./imageClass.js"

/**
 * @typedef JSONObject
 * @property {string} sprite
 * @property {number} width
 * @property {number} height
 * @property {number} hFrames
 * @property {number} vFrames
 * @property {Object<string,number|boolean|string>[]} states
 */

export default class {
  /** @type {Map<string, imageClass>} */
  #blocks = new Map()
  /** @param {string} name @param {Object<string,JSONObject>} json */
  constructor(name, json) {
    this.name = name

    for (const key in json) {
      this.#blocks.set(key, new imageClass({ imageSrc: `./mods/${name}/${json[key].sprite}`, ...json[key] }))
    }
  }
}