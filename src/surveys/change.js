"use strict";
const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    name: "menuFetchMode",
    message: "Which menu You wanna fetch?",
    choices: ["each", "certain", "none"]
  },
  {
    type: "input",
    name: "menus",
    message: "Confirm default menus (just hit enter for YES)?",
    when: val => {
      if (val.menuFetchMode === "each") {
        return "each";
      }
    },
    default: "default"
  },
  {
    type: "input",
    name: "menus",
    message: "Enter slugs after comma",
    filter: val => {
      while (val) {
        return val.split(",").map(v => v.trim());
      }
    },
    when: val => {
      if (val.menuFetchMode === "certain") {
        return "Enter slugs after comma";
      }
      return;
    }
  },
  {
    type: "input",
    name: "menus",
    message: "Confirm disable menus (just hit enter for YES)?",
    when: val => {
      if (val.menuFetchMode == "none") {
        return "disable";
      }
    },
    default: "disable"
  }
];

module.exports = () => inquirer.prompt(questions);
