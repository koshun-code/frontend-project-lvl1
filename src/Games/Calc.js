import { calc, getRandomIntInclusive, makeQuestion } from '../cli.js';
import generator from '../index.js';

const description = 'What is the result of the expression?';

const data = makeQuestion(() => {
  const mathOperations = ['*', '-', '+'];
  const mathOperation = mathOperations[getRandomIntInclusive(0, 2)];
  const num1 = getRandomIntInclusive(0, 10);
  const num2 = getRandomIntInclusive(0, 10);
  const questionString = `${num1} ${mathOperation} ${num2}`;
  const answer = calc(num1, num2, mathOperation);
  return [questionString, answer.toString()];
}, []);

const calculation = () => generator(description, data);

export default calculation;
