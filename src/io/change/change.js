const fs = require("fs");
const path = require("path");
const detector = require("../../projectDetector");

module.exports = async answers => {
  const detectedPath = detector();
  if (detectedPath === false) {
    return;
  }

  try {
    if (
      detectedPath === path.join(__dirname, "../../../../src/main.js") ||
      detectedPath === path.join(__dirname, "../../../../src/main.ts")
    ) {
      const data = answers;
      console.log(data);
    } else {
      console.log("nuxt");
    }
  } catch (e) {
    console.log(e);
  }
};
