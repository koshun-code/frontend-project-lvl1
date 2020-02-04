#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as index from '../src/index.js';
console.log("Welcome to the Brain Games");
const name = index.askName();
console.log(`Hello, ${name}`);
