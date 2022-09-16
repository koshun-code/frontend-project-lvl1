import { checkAnswer, setTextQuestion, welcome } from './cli.js';

const generator = (description, data) => {
  console.log(welcome());
  const name = setTextQuestion('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < data.length; i += 1) {
    const [question, answer] = data[i];
    const userAnswer = setTextQuestion(`Question: ${question}`);
    if (checkAnswer(userAnswer, answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default generator;
