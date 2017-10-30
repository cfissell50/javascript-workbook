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

const movePiece = (startStack, endStack) => {
  stacks[endStack].push(stacks[startStack].pop());
}


const isLegal = (startStack, endStack) => {
  // Your code here
  if (stacks[endStack].length === 0) {
    return true;
  } else if (stacks[startStack].pop() < stacks[endStack].pop()) {
    return true;
  } else {
    return false;
  }
}


const checkForWin = () => {
  // Your code here
  if (stacks.c.length === 4) {
    return true;
  } else {
    return false;
  }
}


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
