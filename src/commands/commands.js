const program = require("commander");
const vueWpInit = require("../surveys/init");
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
