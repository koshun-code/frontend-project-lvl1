import readlineSync from 'readline-sync';

export const welcome = () => 'Welcome to the Brain Games!' 

export const getName = () =>  readlineSync.question('May I have your name? ');