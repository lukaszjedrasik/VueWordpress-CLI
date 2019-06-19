const fs = require("fs");
const path = require("path");
const detector = require("../../projectDetector");
const newFileJsTs = require("./initNewFileJsTs");
const newFileNuxt = require("./initNewFileNuxt");

module.exports = async answers => {
  const detectedPath = detector();
  if (detectedPath === false) {
    return false;
  }
  try {
    let file = await fs.readFileSync(detectedPath, "utf-8");

    if (
      detectedPath === path.join(__dirname, "../../../../src/main.js") ||
      detectedPath === path.join(__dirname, "../../../../src/main.ts")
    ) {
      const bodyJsTs = newFileJsTs(answers);
      fs.writeFileSync(detectedPath, bodyJsTs, "utf-8");
    } else {
      const bodyNuxt = newFileNuxt(answers, file);
      fs.writeFileSync(detectedPath, bodyNuxt, "utf-8");
    }
  } catch (e) {
    return false;
  }
};
