import {
  converAnswer,
  getRandomIntInclusive,
  isPrime,
  makeQuestion,
} from '../cli.js';

import generator from '../index.js';

const data = makeQuestion(() => {
  const question = getRandomIntInclusive(1, 100);
  const answer = converAnswer(isPrime(question));
  return [question, answer];
}, []);

const primeGame = () => generator('Answer "yes" if given number is prime. Otherwise answer "no".', data);

export default primeGame;
