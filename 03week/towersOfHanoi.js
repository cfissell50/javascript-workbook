'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// RUBRIC
// Move piece from stack to stack 17
// Working is legal function 17
// Working check for win function 17
// Working reset function 17
// Clean PR , es6 syntax/linting 8
// Function plan in comments (each function has a stated purpose and method) 16
// At least 2 tests 8

// es6 notation fat arrow everything//const everything

// movePiece should use array method and dot method to select last index and grab it through push and pop
const movePiece = (startStack, endStack) => {
  stacks[endStack].push(stacks[startStack].pop());
}

// Hierarchy of logic, if the stack has nothing in it, legal move, else the starting index popped should be less then the pop of the end stack. Or else move will not work.
const isLegal = (startStack, endStack) => {
  if (stacks[endStack].length === 0) {
    return true;
  } else if (stacks[startStack].pop() < stacks[endStack].pop()) {
    return true;
  } else {
    return false;
  }
}


// checkforwin should use dot method in if statement, legal function should protect argument from c having out of order values.
// length of c === 4 should result in win
const checkForWin = () => {
  if (stacks.c.length === 4) {
    console.log('Winner, Winner, Chicken Dinner!!');
  } else {
    return false;
  }
}

// use previous functions to put game together
// if move function is valid run call back legal function, if nothing else run win function.
const towersOfHanoi = (startStack, endStack) => {
  if (movePiece(startStack, endStack)) {
    isLegal(startStack, endStack)
  }
  checkForWin();
}


function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();

// Test for legal move where [startStack] < [endStack] where a larger number cant follow a smaller number
// Win function recognizing key c = 4,3,2,1 printing 'YOU WIN!'
// guard against random letters and redundancies
// checking against different data type
// Moving stack should be from (a,c) should end a: 4,3,2 | b: | c: 1
// top disc
