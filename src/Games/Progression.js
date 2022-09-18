import generator from '../index.js';
import { getRandomIntInclusive, makeQuestion } from '../cli.js';

const data = makeQuestion(() => {
  let min = getRandomIntInclusive(0, 1000);
  const step = getRandomIntInclusive(0, 10);
  let max = min + step * 10;
  /**
   *  const progressionLength = getRandomIntInclusive(5, 10);
      const max = min + step * progressionLength;
   */

  if (min > max) {
    [min, max] = [max, min];
  }
  const res = [];

  // const randI = getRandomIntInclusive(0, progressionLength - 1);
  const randI = getRandomIntInclusive(0, 9);

  let answer;
  for (let val = min, i = 0; val < max; val += step) {
    if (i === randI) {
      res.push('..');
      answer = val;
    } else {
      res.push(val);
    }
    i += 1;
  }
  return [res.join(' '), answer.toString()];
}, []);

const progressionGame = () => generator('What number is missing in the progression?', data);

export default progressionGame;
