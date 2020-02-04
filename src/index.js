import readlineSync from 'readline-sync';
const askName = () => {
  return readlineSync.question('May I have your name ');
};
export {askName};