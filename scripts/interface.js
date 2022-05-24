document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

let msg = document.querySelector('.msg');

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      alert(
        "Jogo finalizado! O jogador do emoji: " + emojiWinner + ", ganhou."
      );
      msg.innerHTML = "<p class='msg'>Jogo finalizado! O jogador do emoji: " + emojiWinner + ", ganhou. <br/>Reinicie para um novo jogo</p>  ";

    }, 10);
  }
  if (isTie()) {
    setTimeout(() => {
      alert("Ops... o jogo deu empate.");
      msg.innerHTML = `<p class='msg'>Ops... o jogo deu empate. <br/> Reinicie para um novo jogo</p>`;

    }, 10);
  }
  
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let simbol = board[position];
  square.innerHTML = `<div class="${simbol}"></div>`;
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;

  msg.innerHTML = '<div></div>';

  updateAllSquares();
}

function updateAllSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.innerHTML = `<div class""></div>`;
  });
}
