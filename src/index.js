import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name ');
const getRandNum = () => Math.floor(Math.random() * 100);
const isEven = (num) => num % 2 === 0 ? true : false;

export { askName, getRandNum, isEven };

export const getRunSymbol = (arr) => {
  const arrLen = arr.length;
  const index = Math.floor(Math.random() * arrLen);
  return arr[index];
};

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games');
  const name = askName();
  console.log(`Hello, ${name}`);
  return name;
};

export const wrongAnswer = (name) => {
  console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
};

export const log = (str) => {
  return console.log(str);
};

export const gcdRec = (a, b) => {
  if (b) {
    return gcdRec(b, a % b);
  }
  return Math.abs(a);
};
