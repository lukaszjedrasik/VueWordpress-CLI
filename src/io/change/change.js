const fs = require("fs");
const path = require("path");
const detector = require("../../projectDetector");

const newMain = require("./changeFileJsTs");

module.exports = async answers => {
  const detectedPath = detector();
  if (detectedPath === false) {
    return;
  }

  try {
    const data = answers;

    if (
      detectedPath === path.join(__dirname, "../../../../src/main.js") ||
      detectedPath === path.join(__dirname, "../../../../src/main.ts")
    ) {
      const mainFile = fs.readFileSync(detectedPath, "utf-8");
      const newContent = newMain(mainFile, data);

      if (newContent) {
        fs.writeFileSync(detectedPath, newContent, "utf-8");
      }
    } else {
      const oldNuxtConfigFile = fs.readFileSync(detectedPath, "utf-8");
      const newContent = newMain(oldNuxtConfigFile, data);

      if (newContent) {
        fs.writeFileSync(detectedPath, newContent, "utf-8");
      }
    }
  } catch (e) {
    console.log(e);
  }
};
