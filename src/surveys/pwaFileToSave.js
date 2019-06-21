const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    name: "package_or_config",
    message: "Where You wanna create config file ?",
    choices: ["package.json", "vue.config.js"]
  }
];

module.exports = () => inquirer.prompt(questions);
