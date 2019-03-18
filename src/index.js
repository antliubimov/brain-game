import readlineSync from 'readline-sync';

const printWelcome = () => console.log('Welcome to the Brain Games');
const printRules = () => (rules) ? console.log(rules) : console.log('');

const gameplay = (rules, generateAnswer) => {
  printWelcome();
  printRules();
  console.log('');

  const userName = readlineSync.question('What your name?', {defaultInput: 'Noname'});
  console.log(`Hi, ${userName}!`);
  console.log('');


}

export default gameplay;