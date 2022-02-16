require("dotenv").config();
const debug = require("debug")("calculator:root");
const { program } = require("commander");
const { suma } = require("./functions");

program.option("--a <number>");
program.option("--b <number>");

program.parse();

const { a, b } = program.opts();

console.log(suma(a, b));
