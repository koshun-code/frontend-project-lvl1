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
  index.log('Find the greatest common divisor of given numbers.');
  // here we question
  index.log(`Question: ${numOne} ${numTwo}`);
  const userAnswer = readlineSync.questionInt('Your answer:');
  resIn = index.gcdRec(numOne, numTwo);
  if (userAnswer !== resIn) {
    index.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${resIn}'. Let's try again, ${name}!`);
    break;
  } else {
    index.log('Correct!');
  }
  i += 1;
  if (i === 3) {
    index.log(`Congratulations, ${name}`);
  }
}
