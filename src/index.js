import readlineSync from 'readline-sync';

const askName = () => {
  return readlineSync.question('May I have your name ');
};
const getRandNum = () => Math.floor(Math.random() * 100);
const isEven = (num) => num % 2 === 0 ? true : false;

export { askName, getRandNum, isEven };
