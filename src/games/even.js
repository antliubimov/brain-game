import gameplay from '..';

const rules = "Answer 'yes' if the number even otherwise answer 'no'.";

let randomNumber = () => Math.floor(Math.random() * 100);
const isEven = (num) => num % 2 === 0;

const generateAnswer = () => {
  const question = randomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    answer
  };
};

const play = () => gameplay(rules, generateAnswer);

export default play;