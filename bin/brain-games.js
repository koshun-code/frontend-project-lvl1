#!/usr/bin/env node

import { getName, welcome } from "../src/cli.js";

welcome();
const name = getName();
console.log(`Hello, ${name}!`);
