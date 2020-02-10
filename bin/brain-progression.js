#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as index from '../src/index.js';

let i = 0;
// function return ask name, greeting and return name
const name = index.welcomeUser();
while (i < 3) {
  index.log('What number is missing in the progression?');
  // here progressin
  const showProgression = index.progression();
  const userAnswer = readlineSync.questionInt('Your answer:');
  if (userAnswer !== Number(showProgression)) {
    index.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${showProgression}'. Let's try again, ${name}!`);
    break;
  } else {
    index.log('Correct!');
  }
  i += 1;
  if (i === 3) {
    index.log(`Congratulations, ${name}`);
  }
}
