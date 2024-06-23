const board = [];

function createBoard() {
  let rows = 3;
  let columns = 3;
  let value = 0;
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i][j] = value++;
    }
  }
}

createBoard();

console.log(board);
