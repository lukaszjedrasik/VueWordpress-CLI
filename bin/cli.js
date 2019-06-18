#!/usr/bin/env node
const chalk = require("chalk");

console.log(chalk.blueBright.green.inverse("\nVueWordpress CLI v1.0\n"));

const commands = require("../src/commands/commands");
commands();
