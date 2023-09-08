const startButton = document.getElementById('start-button');
const introMessege = document.getElementById('intro');

const gameContainer = document.getElementById('game-container');
const buttons = document.querySelectorAll('.game-button');
const chancesDisplay = document.getElementById('chances');
const resultMessage = document.getElementById('result-message');

let correctButtonIndex = Math.floor(Math.random() * buttons.length);
let chances = 5;

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  gameContainer.style.display = 'block';
  introMessege.style.display = 'none';
});

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (chances > 0) {
      if (index === correctButtonIndex) {
        button.style.backgroundImage = 'url("nemo.png")';
        button.style.backgroundSize = 'cover';
        button.style.backgroundColor = 'green';
        resultMessage.textContent = 'Congratulations! You found Nemo!';
        resultMessage.style.color = 'green';
        resultMessage.style.fontSize = '30px'
        chances = 0;
      } else {
        button.style.backgroundImage = 'url("x.png")';
        button.style.backgroundSize = 'cover';
        button.style.backgroundColor = 'black';
        chances--;
        chancesDisplay.textContent = chances;
        if (chances === 0) {
          resultMessage.textContent = 'Game Over. You ran out of chances.';
          resultMessage.style.color = 'red';
        }
      }
    }
  });
});

const refreshButton = document.getElementById('refresh-button');

refreshButton.addEventListener('click', () => {
  resetGame();
});

function resetGame() {
  buttons.forEach(button => {
    button.style.backgroundImage = 'none';
    button.style.backgroundColor = 'white';
  });
  chances = 5;
  chancesDisplay.textContent = chances;
  resultMessage.textContent = '';
  resultMessage.style.color = 'white';
  correctButtonIndex = Math.floor(Math.random() * buttons.length);
  startButton.style.display = 'none';
  gameContainer.style.display = 'block';
  

}
