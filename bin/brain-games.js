#!/usr/bin/env node

import { setTextQuestion, welcome } from '../src/cli.js';

welcome();
const name = setTextQuestion('May I have your name?');
console.log(`Hello, ${name}!`);
