const fieldButtons = document.querySelectorAll('.field-button');
const resetButton = document.querySelector('.reset');
const title = document.querySelector('.title');

const carrentGame = {
  X: {
    clicked: [],
    score: 0,
  },
  O: {
    clicked: [],
    score: 0,
  },
  firstMove: 'X'
};

let option = carrentGame.firstMove;

const winCases = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [3, 5, 7],
  [1, 5, 9]
];

const checkWinner = (current) => {
    let count;
    for (let i = 0; i < winCases.length; i++) {
      
    count = 0;
    
    winCases[i].forEach((num)=>{
      if (current.includes(num)){
        count++;
      }
    });

    if (count === 3) return true;
  }
}

fieldButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    

    carrentGame[option].clicked.push(Number(button.id));
    button.innerText = option;
    button.disabled = true;

    if (checkWinner(carrentGame[option].clicked)){
      carrentGame[option].score++;
      title.innerText = `${option} is the WINNER - Score ${carrentGame[option].score}`;
      
    } else {
      if (option === 'X') {
        option = 'O';
      } else {
        option = 'X';
      }
    }
  });
});

resetButton.addEventListener('click', () => {
  fieldButtons.forEach((button) => {
    button.innerText = '';
    button.disabled = false;
  });

  title.innerText = `Noughts and Crosses`;
  carrentGame.X.clicked = [];
  carrentGame.O.clicked = [];
  

  if (carrentGame.firstMove === 'X') {
    carrentGame.firstMove = 'O';
  } else {
    carrentGame.firstMove = 'X';
  }

  option = carrentGame.firstMove;
});
