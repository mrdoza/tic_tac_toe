const board = [];

function createBoard() {
  let rows = 3;
  let columns = 3;
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i][j] = `${i} ${j}`;
    }
  }
}
createBoard();
console.log(board);

const players = [];

document.getElementById("submit1").addEventListener("click", function () {
  const player1Name = document.getElementById("player1").value;
  if (player1Name) {
    const player1 = {
      name: player1Name,
      symbol: "X",
    };
    players[0] = player1;
  } else {
    alert("Please enter a name for Player 1");
  }
});

document.getElementById("submit2").addEventListener("click", function () {
  const player2Name = document.getElementById("player2").value;
  if (player2Name) {
    const player2 = {
      name: player2Name,
      symbol: "O",
    };
    players[1] = player2;
  } else {
    alert("Please enter a name for Player 2");
  }
});

function checkWinner() {
  let winner = null;
  let rows = 3;
  let columns = 3;

  for (let i = 0; i < rows; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      winner = board[i][0];
    }
  }

  for (let i = 0; i < columns; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      winner = board[0][i];
    }
  }

  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    winner = board[0][0];
  }

  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    winner = board[0][2];
  }

  return winner;
}

function play(player, row, column) {
  if (board[row][column] === `${row} ${column}`) {
    board[row][column] = player.symbol;
  } else {
    console.log("Invalid move");
  }
}

const turnDiv = document.getElementById("turn");
const winnerDiv = document.getElementById("winner");

function handleCellClick(event) {
  const [row, column] = event.target.id.split("-").map(Number);
  let currentPlayer = players[0];

  if (board[row][column] !== "X" && board[row][column] !== "O") {
    play(currentPlayer, row, column);
    console.log(board);
    const winner = checkWinner();
    if (winner) {
      winnerDiv.innerHTML = `${winner} wins!`;
    } else {
      currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
      turnDiv.innerHTML = `${currentPlayer.name} plays`;
    }
  } else {
    alert("Invalid move");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let currentPlayer = players[0];
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.addEventListener('click', function() {

      if (this.innerHTML === '') {
        this.innerHTML = currentPlayer.symbol; 
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
        turnDiv.innerHTML = `${currentPlayer}'s turn!`
      }
    });
  });
});
