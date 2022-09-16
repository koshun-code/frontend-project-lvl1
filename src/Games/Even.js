import generator from '../index.js';
import {
  converAnswer, getRandomIntInclusive, isEven, makeQuestion,
} from '../cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const data = makeQuestion(() => {
  const question = getRandomIntInclusive(0, 100);
  const answer = converAnswer(isEven(question));
  return [question, answer];
}, []);

const even = () => {
  generator(description, data);
};

export default even;
