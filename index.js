require("dotenv").config();
const debug = require("debug")("calculator:root");
const { program } = require("commander");
const chalk = require("chalk");
const { suma, resta, multiplicacion, division } = require("./functions");

program.option("--a <number>");
program.option("--b <number>");

program.parse();

const { a, b } = program.opts();

if (typeof a !== "number" || typeof b !== "number") {
  debug("ERROR, you have to enter numbers");
  process.exit();
}

const resultadoSuma = suma(a, b);
const resultadoResta = resta(a, b);
const resultadoMultiplicacion = multiplicacion(a, b);
const resultadoDivision = division(a, b);

debug(
  `Resultados: 
  ${a}+${b} = ${chalk.bold.yellow(resultadoSuma)},
  ${a}-${b} =${chalk.bold.red(resultadoResta)},
  ${a}*${b} = ${chalk.bold.green(resultadoMultiplicacion)}
  ${a}/${b} = ${chalk.bold.blue(resultadoDivision)}`
);
