"use strict";
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "url",
    message: "URL address: (It should has http/https and dot)",
    validate: val => {
      const expression = /^http: \/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
      const pass = val.match(expression);
      if (pass) {
        return true;
      }
      return "Please enter a valid URL";
    }
  },
  {
    type: "input",
    name: "lang",
    message: "Base language: (It has to be 2 chars long)",
    validate: val => {
      if (val.length === 2) {
        return true;
      }
      return "wrong";
    }
  },
  {
    type: "list",
    name: "fetch_menu",
    message: "Should module fetch menus ?",
    choices: ["Yes, all", "Yes, but only certain", "No"]
  },
  {
    type: "input",
    name: "menus",
    message: "enter slugs after comma",
    filter: val => {
      while (val) {
        return val.split(",").map(v => v.trim());
      }
    },
    when: val => {
      if (val.fetch_menu === "Yes, but only certain") {
        return "enter slugs after comma";
      }
      return;
    }
  },
  {
    type: "input",
    name: "menus",
    message: "Confirm default menus (just hit enter for YES)?",
    when: val => {
      if (val.fetch_menu === "Yes, all") {
        return "default";
      }
    },
    default: "default"
  },
  {
    type: "input",
    name: "menus",
    message: "Confirm disable menus (just hit enter for YES)?",
    when: val => {
      if (val.fetch_menu == "No") {
        return "disable";
      }
    },
    default: "disable"
  }
];

module.exports = () => inquirer.prompt(questions);
