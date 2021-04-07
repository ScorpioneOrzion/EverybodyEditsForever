import imageHandelerClass from "./Classes/imageHandelerClass.js"

/** @type {imageHandelerClass} */
const images = new imageHandelerClass();

function loadMain() {
  const script = document.createElement('script');
  script.src = "everybodyedits.js";
  script.type = "module";
  script.nodeValue;
  document.head.append(script);
}

fetch("./mods/modList.json").then(value => value.json()).then(json =>
  images.loadJsonGroup(
    Object.keys(json).map(key => {
      return { storeString: key, fileName: "./mods/" + key + "/blocks.json" }
    })
  ).then(loadMain)
).catch(loadMain)

const randomString = "EveryBody" + String.fromCodePoint(...[...Array(20)].map(() => Math.floor(48 + 74 * Math.random())));
window.randomString = randomString;
window[randomString] = { images };