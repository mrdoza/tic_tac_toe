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

document.getElementById("restart").addEventListener("click", function () {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  turnDiv.innerHTML = `${players[0].name}'s turn!`;
  winnerDiv.innerHTML = "";
});

const turnDiv = document.getElementById("turn");
const winnerDiv = document.getElementById("gameWinner");

let currentPlayerIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", function () {
      if (this.innerHTML === "") {
        this.innerHTML = players[currentPlayerIndex].symbol;

        checkWinner();
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        turnDiv.innerHTML = `${players[currentPlayerIndex].name}'s turn!`;
      }
    });
  });
});

function checkWinner() {
  const cells = document.querySelectorAll(".cell");

  const board = Array.from(cells, (cell) => cell.textContent);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winnerDiv.innerHTML = `${players[currentPlayerIndex].name} wins!`;
      return board[a];
    }
  }

  const isTie = board.every((cell) => cell !== "");
  if (isTie) {
    winnerDiv.innerHTML = "It's a tie!";
    return "Tie";
  }

  return null;
}
