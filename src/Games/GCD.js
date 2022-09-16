import { gcd, getRandomIntInclusive, makeQuestion } from '../cli.js';
import generator from '../index.js';

const data = makeQuestion(() => {
  const num1 = getRandomIntInclusive(0, 100);
  const num2 = getRandomIntInclusive(0, 100);
  const stringQuestion = `${num1} ${num2}`;
  const answer = gcd(num1, num2);
  return [stringQuestion, answer.toString()];
}, []);

const gcdGame = () => generator('Find the greatest common divisor of given numbers.', data);

export default gcdGame;
