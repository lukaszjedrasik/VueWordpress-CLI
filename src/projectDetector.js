const path = require("path");
const fs = require("fs");

const vueProject = path.join(__dirname, "../../src/main.js");
const nuxtProject = path.join(__dirname, "../../nuxt.config.js");

const vueDetector = () => {
  let vue = "";
  try {
    fs.accessSync(vueProject, fs.F_OK);
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
  vueDetector,
  nuxtDetector
};
