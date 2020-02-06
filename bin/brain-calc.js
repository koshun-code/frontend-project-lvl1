#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as index from '../src/index.js';

let i = 0;
let resIn = 0;
// function return ask name, greeting and return name
const name = index.welcomeUser();
while (i < 3) {
  // function return random number
  const numOne = index.getRandNum();
  const numTwo = index.getRandNum();
  // function get random symbol from array
  const randSymbol = index.getRunSymbol(['+', '-', '*']);
  // here we're concat string. Maybe `${numOne} ${randSymbol} ${numTwo}` will be better;
  const str = String(numOne) + randSymbol + String(numTwo);
  // here we choose what action use.
  switch (randSymbol) {
    case '-': resIn = numOne - numTwo;
      break;
    case '*': resIn = numOne * numTwo;
      break;
    default:
      resIn = numOne + numTwo;
  }
  // here we output string that made in before step
  console.log(`Question: ${str}`);
  const userAnswer = readlineSync.questionInt('What is the result of the expression? ');
  if (userAnswer !== resIn) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${resIn}'. Let's try again, ${name}!`);
    break;
  } else {
    console.log('Correct!');
  }
  i += 1;
  if (i === 3) {
    console.log(`Congratulations, ${name}`);
  }
}
