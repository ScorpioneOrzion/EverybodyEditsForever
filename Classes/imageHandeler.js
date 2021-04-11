import modClass from "./mod.js"

export default class ImageHandeler {
  /** @type {Map<string,modClass>} */
  #mods = new Map()
  /** @type {Map<string,JSON>} */
  #json = new Map()

  /** @param {{fileName:string,storeString:string}[]} files @returns {Promise[]} */
  loadJsonGroup(files) {
    return Promise.all(
      files.map(({ fileName, storeString }) =>
        fetch(fileName).then(json => json.json()).then(json =>
          this.#json.set(storeString, json)
        )
      )
    )
  }

  loadImages() {
    Array.from(this.#json.entries()).map(([key, json]) =>
      this.#mods.set(key, new modClass(key, json))
    )
  }

  /** @param {string} modName @returns {modClass} */
  getMod(modName) {
    return this.#mods.get(modName)
  }
  /** @param {string} storeString @returns {JSON} */
  readJson(storeString) {
    return this.#json.get(storeString)
  }
}
