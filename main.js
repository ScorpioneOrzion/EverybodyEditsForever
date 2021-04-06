import imageLoader from "./imageData/imageLoaderClass.js"

const images = new imageLoader();

function loadMain() {
  const script = document.createElement('script');
  script.src = "everybodyedits.js";
  script.type = "module";
  script.nodeValue;
  document.head.append(script);
}

fetch("./mods/modList.json").then(value => value.json()).then(json =>
  images.loadJsonGroup(
    Object.keys(json).map(key => json[key])
  ).then(loadMain)
).catch(loadMain)

const randomString = "EveryBody" + String.fromCodePoint([...Array(20)].map(() => Math.floor(48 + 74 * Math.random())));
window.randomString = randomString;
window[randomString] = { images };