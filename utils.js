import { rollDice } from "./randomDice.js";

function notEmpty (value) {
  return !!value
}

function countNotEmpty (sum, curr) {
  return sum + !!curr
}

function rollOnEmpty (rollFunction = () => rollDice(2)) {
  return function (entry) {
    return entry.length ? entry : rollFunction()
  }
}

function initRolls (rolls, number, rollFunction) {
  return (rolls || new Array(number).fill([])).map(rollOnEmpty(rollFunction))
}

export { notEmpty, countNotEmpty, initRolls }
