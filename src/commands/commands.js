const program = require("commander");
const vueWpInit = require("../survey/vueWpInit_Survey");
module.exports = () => {
  (() => {
    program
      .command("vue-wp-init")
      .alias("vwi")
      .description("Module Creator")
      .action(() => vueWpInit());

    program.parse(process.argv);
  })();
};
