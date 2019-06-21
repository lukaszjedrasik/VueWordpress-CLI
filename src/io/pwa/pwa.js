const fs = require("fs");
const path = require("path");
const detector = require("../../projectDetector");
const vueConfigBody = require("./vueConfigBody");
const addWorkbox = require("./workbox");
const pwaFileToSave = require("../../surveys/pwaFileToSave");

module.exports = async answers => {
  const detectedPath = detector();
  if (detectedPath === false) {
    return false;
  }

  try {
    if (
      detectedPath === path.join(__dirname, "../../../../src/main.js") ||
      detectedPath === path.join(__dirname, "../../../../src/main.ts")
    ) {
      // const packageOrConfig = await pwaFileToSave();

      const vueConfigFilePath = path.join(
        __dirname,
        "../../../../vue.config.js"
      );
      const content = vueConfigBody(answers);
      fs.writeFileSync(vueConfigFilePath, content, "utf-8");
    } else {
      const nuxtConfigFile = fs.readFileSync(
        path.join(__dirname, "../../../../nuxt.config.js"),
        "utf-8"
      );
      const nuxtConfigFilePath = path.join(
        __dirname,
        "../../../../nuxt.config.js"
      );

      const workbox = addWorkbox(answers, nuxtConfigFile);
      fs.writeFileSync(nuxtConfigFilePath, workbox, "utf-8");
    }
  } catch (e) {
    return false;
  }
};
