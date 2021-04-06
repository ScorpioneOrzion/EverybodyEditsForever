import imageLoader from "./imageData/imageLoaderClass.js"

const images = new imageLoader()

images.loadJsonGroup([]).then(() => {
  const script = document.createElement('script')
  script.src = "everybodyedits.js"
  script.type = "module"
  script.nodeValue
  document.head.append(script)
})

const randomString = "EveryBody" + Array(20).fill().reduce(string => string + "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random())], "")
window.randomString = randomString
window[randomString] = { images }