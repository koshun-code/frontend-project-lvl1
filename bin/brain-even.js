#!/usr/bin/env node

import readlineSync from 'readline-sync';
import * as index from '../src/index.js';

let i = 0;
const name = index.welcomeUser();
while (i < 3) {
  const num = index.getRandNum();
  const isEv = index.isEven(num);
  console.log(num);
  const userAnswer = readlineSync.keyInYN('Answer "yes" if the number is even, otherwise answer "no"');
  if ((!isEv && userAnswer) || (isEv && !userAnswer)) {
    index.wrongAnswer(name);
    break;
  } else {
    console.log('Correct');
  }
  i += 1;
  if (i === 3) {
    console.log(`Congratulations, ${name}`);
  }
}
