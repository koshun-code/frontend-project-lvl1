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

export const progression = () => {
  let result = '';
  const rand = Math.floor(Math.random() * 100);
  const randIn = Math.floor(Math.random() * 10);
  let bg = '';
  for (let i = 0; i < 10; i += 1) {
    if (i === randIn) {
      bg += rand + i * 2 + ' '; 
      result += '... ';
      continue;
    }
    result += rand + i * 2 + ' ' ;
  }
  console.log(`Question: ${result}`);
  return bg;
};

//cheak num is prime number
export const isPrime = (n) => {
  if (n < 2) {
    return false;
  } else if (n === 2) {
  return true;
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};
