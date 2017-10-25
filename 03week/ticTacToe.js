'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

// Check for winning horizontal with if
// 00 01 02
// 10 11 12
// 20 21 22
const horizontalWin = () => {
  if ((board[0][0] === board[0][1] && board[0][1] === board[0][2]) || (board[1][0] === board[1][1] && board[1][1] === board[1][2]) || (board[2][0] === board[2][1] &&
      board[2][1] === board[2][2])) {
    return true;
  }
}

//Check for winning vertical with if
//00 10 20
//01 11 21
//02 12 22
const verticalWin = () => {
  if ((board[0][0] === board[1][0] && board[1][0] === board[2][0]) || (board[0][1] === board[1][1] && board[1][1] === board[2][1]) || (board[0][2] === board[1][2] &&
      board[1][2] === board[2][2])) {
    return true;
  }
}

// Check for winning diagonalWin with if
// 00 11 22
// 02 11 20
const diagonalWin = () => {
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] || (board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
    return true;
  }
}

// Got help from eddy, I do not completely understand yet
const checkForWin = () => {
  // if (horizontalWin() || verticalWin() || diagonalWin()) {
  //   console.log(`Player ${playerTurn} Wins!`);
  // } else if (turnCount === 9) {
  //   console.log("It's a tie!")
  // } else {
  //   return false;
  //}

}

// Got help from eddy, I do not completely understand yet
function ticTacToe(row, column) {
  //
  // if (playerTurn === 'X') {
  //   playerTurn = 'O';
  // } else {
  //   playerTurn = 'X';
  // }
  // if (board[row][column] === ' ') {
  //   board[row].splice(column, 1, playerTurn);
  // }
  // return false;

}



function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', '', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
