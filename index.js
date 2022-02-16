require("dotenv").config();
const debug = require("debug")("calculator:root");
const prompt = require("prompt");
const { program } = require("commander");
const chalk = require("chalk");
const { suma, resta, multiplicacion, division } = require("./functions");

program.option("--a <number>");
program.option("--b <number>");

program.parse();

let { a, b } = program.opts();

const results = async () => {
  if (a === undefined) {
    const firstNumberAsked = await prompt.get("FirstNumber");
    a = firstNumberAsked.FirstNumber;
  }

  if (b === undefined) {
    const secondNumberAsked = await prompt.get("SecondNumber");
    b = secondNumberAsked.SecondNumber;
  }

  a = +a;
  b = +b;

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
};

results();
