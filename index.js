require("dotenv").config();
const debug = require("debug")("calculator:root");
const { program } = require("commander");
const { suma, resta, multiplicacion } = require("./functions");

program.option("--a <number>");
program.option("--b <number>");

program.parse();

const { a, b } = program.opts();

const resultadoSuma = suma(a, b);
const resultadoResta = resta(a, b);
const resultadoMultiplicacion = multiplicacion(a, b);

debug(
  `Resultados: 
  ${a}+${b} = ${resultadoSuma},
  ${a}-${b} =${resultadoResta},
  ${a}*${b} = ${resultadoMultiplicacion}`
);
