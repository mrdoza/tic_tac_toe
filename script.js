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

function createPlayer(name, symbol) {
  return { name, symbol };
}

const player1 = createPlayer("player1", "X");
const player2 = createPlayer("player2", "O");

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

function playGame() {
  let currentPlayer = player1;
  let winner = null;
  let moves = 0;

  while (winner === null && moves < 9) { 
    console.log(`${currentPlayer.name} plays`);
    let row, column;
    let validMove = false;

    while (!validMove) {
      row = Math.floor(Math.random() * 3);
      column = Math.floor(Math.random() * 3);
      if (board[row][column] === `${row} ${column}`) {
        validMove = true;
      }
    }

    play(currentPlayer, row, column);
    console.log(board);
    winner = checkWinner();
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    moves++;
  }

  if (winner) {
    console.log(`${winner} wins!`);
  } else {
    console.log("It's a tie!");
  }
}
playGame();
