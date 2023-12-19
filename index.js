import readline from 'readline-sync';
import _ from 'lodash';

const selections = [
  'камень',
  'ножницы',
  'бумага',
];

const rates = {
  камень: {
    ножницы: 'Вы победили!',
    бумага: 'Вы проиграли!',
  },

  ножницы: {
    бумага: 'Вы победили!',
    камень: 'Вы проиграли!',
  },

  бумага: {
    камень: 'Вы победили!',
    ножницы: 'Вы проиграли!',
  },
};

const runGame = () => {
  const userSelection = readline.question('Выберите фигуру. (камень, ножницы, бумага) ==> ').toLowerCase();
  const randomSelection = _.sample(selections);

  const result = rates[userSelection][randomSelection];

  if (result === undefined) {
    return `У вас ничья! У обоих ${userSelection}`;
  }

  return `${result} \nУ вас ${userSelection}, у программы ${randomSelection}`;
};

console.log(runGame());
