const program = require("commander");

const makeSurveyInit = require("../surveys/init");
const writeFileInit = require("../io/init/init");

const makeSurveyPWA = require("../surveys/pwa");
const writeFilePWA = require("../io/pwa/pwa");

const writeFileChange = require("../io/change/change");
const commandSelect = require("../io/change/commandSelect");

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

    program
      .command("change <setting> <value>")
      .alias("vwc")
      .description(
        "Change the current setting in a config file to the new value"
      )
      .action(async (setting, value) => {
        const answers = await commandSelect(setting, value);
        console.log(answers);
        await writeFileChange(answers);
      });

    program.on("command:*", () => {
      console.error(
        "Invalid command: %s\nSee --help for a list of available commands.",
        program.args.join(" ")
      );
      process.exit(1);
    });

    program.parse(process.argv);
  })();
};
