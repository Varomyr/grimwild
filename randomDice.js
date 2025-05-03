function rollDice (diceNum) {
  return new Array(diceNum).fill(1).map(x => randomDie());
}

function randomDie () {
  return randomInt(5) + 1;
}

function randomInt (maxNum) {
  return Math.round(Math.random() * maxNum);
}

export {rollDice, randomDie, randomInt};
