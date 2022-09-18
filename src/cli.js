import readlineSync from 'readline-sync';

/**
 * @returns string
 */
export const welcome = () => 'Welcome to the Brain Games!';

/**
 * @param {string} textQuestion
 * @returns string
 */
export const setTextQuestion = (textQuestion) => readlineSync.question(`${textQuestion} `);

/**
 * Function give pseudo random number
 * @param {int} minValue
 * @param {int} maxValue
 * @returns int
 */
export const getRandomIntInclusive = (minValue, maxValue) => {
  const min = Math.ceil(minValue);
  const max = Math.floor(maxValue);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * @param {integer} num
 * @returns bool
 */
export const isEven = (num) => num % 2 === 0;

/**
 * this Function need to conver bool answer to string
 * @param {Bool} boolAnswer
 * @returns string
 */
export const converAnswer = (boolAnswer) => {
  const answer = boolAnswer ? 'yes' : 'no';
  return answer;
};

/**
 * @param {string} userAnswer
 * @param {string} answer
 * @returns bool
 */
export const checkAnswer = (userAnswer, answer) => userAnswer === answer;

/**
 * Function use calback function to calculate data and set it to array
 * @param {function} callback
 * @param {array} resultArray
 * @returns array
 */
export const makeQuestion = (callback, resultArray) => {
  for (let i = 0; i < 3; i += 1) {
    resultArray.push(callback());
  }
  return resultArray;
};

/**
 * @param {int} intNum1
 * @param {int} intNum2
 * @param {string} stringSymbol
 * @returns int
 */
export const calc = (intNum1, intNum2, stringSymbol) => {
  switch (stringSymbol) {
    case '-':
      return intNum1 - intNum2;
    case '+':
      return intNum1 + intNum2;
    case '*':
      return intNum1 * intNum2;
    default:
      return 0;
  }
};

/**
 * @param {int} a
 * @param {int} b
 * @returns int
 */
export const gcd = (a, b) => {
  const res = !b ? a : gcd(b, a % b);
  return res;
};

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
