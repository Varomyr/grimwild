function rollDice (diceNum) {
  return new Array(diceNum).fill(1).map(x => randomDie());
}

function randomDie (max = 6) {
  return randomInt(max - 1) + 1;
}

function randomInt (maxNum) {
  return Math.round(Math.random() * maxNum);
}

export {rollDice, randomDie, randomInt};
