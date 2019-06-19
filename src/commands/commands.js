const program = require("commander");
const makeSurvey = require("../surveys/init");
const writeFileInit = require("../io/init/init");

module.exports = () => {
  (() => {
    program
      .command("vue-wp-init")
      .alias("vwi")
      .description("Module Creator")
      .action(async () => {
        let answers = await makeSurvey();
        writeFileInit(answers);
      });

    program.parse(process.argv);
  })();
};
