import readlineSync from 'readline-sync';

export const welcome = () => 'Welcome to the Brain Games!';

export const setTextQuestion = (textQuestion) => readlineSync.question(`${textQuestion} `);

export const getRandomIntInclusive = (minValue, maxValue) => {
  const min = Math.ceil(minValue);
  const max = Math.floor(maxValue);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const isEven = (num) => num % 2 === 0;

export const converAnswer = (boolAnswer) => {
  const answer = boolAnswer ? 'yes' : 'no';
  return answer;
};

export const checkAnswer = (userAnswer, answer) => userAnswer === answer;

export const makeQuestion = (callback, resultArray) => {
  for (let i = 0; i < 3; i += 1) {
    resultArray.push(callback());
  }
  return resultArray;
};
