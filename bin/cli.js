#!/usr/bin/env node
const express = require("express");
const chalk = require("chalk");
const program = require("commander");
const Listr = require("listr");
const execa = require("execa");

const projectDetector = require("../src/projectDetector");
// projectDetector.nuxtDetector(); // nuxt detected if true || nuxt.config.js not found
// projectDetector.vueDetector(); // vue detected if true || main.js not found

console.log(chalk.blueBright.green.inverse("VueWordpress CLI v1.0"));

const tasks = new Listr([
  {
    title: `${
      projectDetector.vueDetector()
        ? projectDetector.vueDetector()
        : projectDetector.nuxtDetector()
    }`,
    task: () =>
      `${
        projectDetector.vueDetector()
          ? projectDetector.vueDetector()
          : projectDetector.nuxtDetector()
      }`
  }
]).run();
