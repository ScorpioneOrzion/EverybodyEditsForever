export default class {
  /** @type {Map<string,HTMLImageElement>} */
  #images = new Map()
  /** @type {Map<string,JSON>} */
  #json = new Map()

  /** @param {Object[]} files @param {string} files[].fileName @param {string} files[].storeString @returns {Promise[]} */
  loadJsonGroup(files) {
    return Promise.all(
      files.map(({ fileName, storeString }) => {
        return { value: fetch(fileName), storeString }
      })
    ).then(
      valueMap => valueMap.map(({ value, storeString }) => {
        return { value: value.json(), storeString }
      })
    ).then(
      valueMap => valueMap.map(({ value, storeString }) => {
        this.#json.set(storeString, value)
      })
    )
  }

  /** @param {Object[]} files @param {string} files[].fileName @param {string} files[].storeString @returns {Promise[]} */
  loadImages(files) {
    if (files.length === 0) return
    return Promise.all(
      files.map(({ fileName, storeString }) => {
        return {
          value: fetch(fileName), storeString
        }
      })
    ).then(
      valueMap => valueMap.map(({ value, storeString }) => {
        return {
          value: value.text(), storeString
        }
      })
    ).then(
      valueMap => valueMap.map(({ value, storeString }) => {
        const image = new HTMLImageElement()
        image.src = value
        this.#images.set(storeString, image)
      })
    )
  }

  /** @param {string} storeString @returns {HTMLImageElement} */
  getImage(storeString) {
    return this.#images.get(storeString)
  }
  /** @param {string} storeString @returns {JSON} */
  readJson(storeString) {
    return this.#json.get(storeString)
  }
}
