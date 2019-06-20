const program = require("commander");

const makeSurveyInit = require("../surveys/init");
const writeFileInit = require("../io/init/init");

const makeSurveyPWA = require("../surveys/pwa");
const writeFilePWA = require("../io/pwa/pwa");

module.exports = () => {
  (() => {
    program
      .command("vue-wp-init")
      .alias("vwi")
      .description("Module Creator")
      .action(async () => {
        let answers = await makeSurveyInit();
        await writeFileInit(answers);
      });

    program
      .command("vue-wp-pwa")
      .alias("vwpwa")
      .description("Time to fallback to offline storage (default value is 5s)")
      .action(async () => {
        let answers = await makeSurveyPWA();
        await writeFilePWA(answers);
      });

    program.parse(process.argv);
  })();
};
