import { rollDice } from "./randomDice.js";

function notEmpty (value) {
  return !!value
}

function countNotEmpty (sum, curr) {
  return sum + !!curr
}

function rollOnEmpty (entry) {
  return entry.length ? entry : rollDice(2)
}

function initRolls (rolls, number) {
  return (rolls || new Array(number).fill([])).map(rollOnEmpty)
}

export { notEmpty, countNotEmpty, initRolls }
