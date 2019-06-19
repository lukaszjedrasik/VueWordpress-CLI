const path = require("path");
const fs = require("fs");

const vueProjectJS = path.join(__dirname, "../../src/main.js");
const vueProjectTS = path.join(__dirname, "../../src/main.ts");
const nuxtProject = path.join(__dirname, "../../nuxt.config.js");

const VUE_DETECTED = "Vue Detected";
const NUXT_DETECTED = "Nuxt Detected";

const detector = () => {
  try {
    fs.accessSync(vueProjectJS, fs.F_OK);
    return vueProjectJS;
  } catch (e) {
    try {
      fs.accessSync(vueProjectTS, fs.F_OK);
      return vueProjectTS;
    } catch (e) {
      try {
        fs.accessSync(nuxtProject, fs.F_OK);
        return nuxtProject;
      } catch (e) {
        return false;
      }
    }
  }
};

// const vueDetectorJS = () => {
//   let vue = "";
//   try {
//     fs.accessSync(vueProjectJS, fs.F_OK);
//     vue = "Vue Detected";
//     return vue;
//   } catch (e) {
//     vue = false;
//     return vue;
//   }
// };

// const vueDetectorTS = () => {
//   let vue = "";
//   try {
//     fs.accessSync(vueProjectTS, fs.F_OK);
//     vue = "Vue Detected";
//     return vue;
//   } catch (e) {
//     vue = false;
//     return vue;
//   }
// };

// const nuxtDetector = () => {
//   let nuxt = "";
//   try {
//     fs.accessSync(nuxtProject, fs.F_OK);
//     nuxt = "Nuxt Detected";
//     return nuxt;
//   } catch (e) {
//     nuxt = false;
//     return nuxt;
//   }
// };

module.exports = detector;
