const path = require("path");
const fs = require("fs");

const vueProjectJS = path.join(__dirname, "../../src/main.js");
const vueProjectTS = path.join(__dirname, "../../src/main.ts");
const nuxtProject = path.join(__dirname, "../../nuxt.config.js");

const vueDetectorJS = () => {
  let vue = "";
  try {
    fs.accessSync(vueProjectJS, fs.F_OK);
    vue = "Vue Detected";
    return vue;
  } catch (e) {
    vue = false;
    return vue;
  }
};

const vueDetectorTS = () => {
  let vue = "";
  try {
    fs.accessSync(vueProjectTS, fs.F_OK);
    vue = "Vue Detected";
    return vue;
  } catch (e) {
    vue = false;
    return vue;
  }
};

const nuxtDetector = () => {
  let nuxt = "";
  try {
    fs.accessSync(nuxtProject, fs.F_OK);
    nuxt = "Nuxt Detected";
    return nuxt;
  } catch (e) {
    nuxt = false;
    return nuxt;
  }
};

module.exports = {
  vueDetectorJS,
  vueDetectorTS,
  nuxtDetector
};
