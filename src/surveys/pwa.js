"use strict";
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "networkTimeoutSeconds",
    message: "Time to fallback to offline storage (default value is 5s)",
    validate: val => {
      const expression = /^\d+$/g;
      const pass = val.match(expression);
      if (pass) {
        return true;
      }
      return "Please enter a valid number";
    }
  }
];

module.exports = () => inquirer.prompt(questions);
