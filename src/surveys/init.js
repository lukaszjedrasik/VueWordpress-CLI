"use strict";
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const projectDetector = require("../projectDetector");
projectDetector.vueDetectorJS();
projectDetector.vueDetectorTS();
projectDetector.nuxtDetector();

module.exports = () => {
  (() => {
    if (projectDetector.vueDetectorJS()) {
      console.log("vue/js");
      const questions = [
        {
          type: "input",
          name: "url",
          message: "API URL:",
          validate: val => {
            const expression = /^(http: \/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
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
          message: "Lang:",
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
          message: "Do You wanna fetch menus?",
          choices: ["Yes, all", "Yes, but only special", "No"]
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
            if (val.fetch_menu === "Yes, but only special") {
              return "enter slugs after comma";
            }
            return;
          }
        },
        {
          type: " confirm",
          name: "menus",
          message: "Confirm default menus (just hit enter for YES)?",
          when: val => {
            if (val.fetch_menu === "Yes, all") {
              return ["main-menu", "footer-menu"];
            }
          },
          default: ["main-menu", "footer-menu"]
        }
      ];
      inquirer.prompt(questions).then(answers => {
        fs.readFile(
          path.join(__dirname, "../../../src/main.js"),
          "utf-8",
          (err, data) => {
            if (err) throw err;
            const dat = `
  import Vue from 'vue'
  import store from 'store'
  import router from 'router'
  import Wordpress from '@vue-wordpress/core'

  Vue.use(Wordpress, {
    config: {
      url: '${answers.url}',
      lang: '${answers.lang}',
      menus: [${answers.menus ? answers.menus.map(v => `"${v}"`) : false}]
    },
    store,
    router
  })`;
            fs.writeFile(
              path.join(__dirname, "../../../src/main.js"),
              dat,
              "utf-8",
              err => {
                if (err) throw err;
              }
            );
          }
        );
      });
    } else if (projectDetector.vueDetectorTS()) {
      console.log("vue/ts");
      const questions = [
        {
          type: "input",
          name: "url",
          message: "API URL:",
          validate: val => {
            const expression = /^(http: \/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
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
          message: "Lang:",
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
          message: "Do You wanna fetch menus?",
          choices: ["Yes, all", "Yes, but only special", "No"]
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
            if (val.fetch_menu === "Yes, but only special") {
              return "enter slugs after comma";
            }
            return;
          }
        },
        {
          type: " confirm",
          name: "menus",
          message: "Confirm default menus (just hit enter for YES)?",
          when: val => {
            if (val.fetch_menu === "Yes, all") {
              return ["main-menu", "footer-menu"];
            }
          },
          default: ["main-menu", "footer-menu"]
        }
      ];
      inquirer.prompt(questions).then(answers => {
        fs.readFile(
          path.join(__dirname, "../../../src/main.ts"),
          "utf-8",
          (err, data) => {
            if (err) throw err;
            const dat = `
  import Vue from 'vue'
  import store from 'store'
  import router from 'router'
  import Wordpress from '@vue-wordpress/core'

  Vue.use(Wordpress, {
    config: {
      url: '${answers.url}',
      lang: '${answers.lang}',
      menus: [${answers.menus ? answers.menus.map(v => `"${v}"`) : false}]
    },
    store,
    router
  })`;
            fs.writeFile(
              path.join(__dirname, "../../../src/main.ts"),
              dat,
              "utf-8",
              err => {
                if (err) throw err;
              }
            );
          }
        );
      });
    } else if (projectDetector.nuxtDetector()) {
      console.log("nuxt");
    }
  })();
};
