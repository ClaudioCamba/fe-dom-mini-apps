const fieldButtons = document.querySelectorAll('.field-button');
const resetButton = document.querySelector('.reset');
let option = 'X';
const carrentGame = {
  X: [],
  O: [],
};
const winCases = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [3, 5, 7],
  [1, 5, 9],
];

fieldButtons.forEach((button) => {
  button.addEventListener('click', () => {
    carrentGame[option].push(button.id);
    console.log(carrentGame);
    button.innerText = option;
    if (option === 'X') {
      option = 'O';
    } else {
      option = 'X';
    }
  });
});

resetButton.addEventListener('click', () => {
  fieldButtons.forEach((button) => (button.innerText = ''));
});
