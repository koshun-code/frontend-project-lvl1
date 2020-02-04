#!/usr/bin/env node

import readlineSync from 'readline-sync';
import * as index from '../src/index.js';
let i = 0;
console.log("Welcome to the Brain Games");
const name = index.askName();
console.log(`Hello, ${name}`);
while (i < 3){
    const num = index.getRandNum();
    const isEv = index.isEven(num);
    console.log(num);
    const userAnswer = readlineSync.keyInYN('Answer "yes" if the number is even, otherwise answer "no"');
    if ((!isEv && userAnswer) || (isEv && !userAnswer)) {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
        break;
    } else {
        console.log('Correct');
    }
  i += 1;
  if (i === 3) {
      console.log(`Congratulations, ${name}`);
  }
}