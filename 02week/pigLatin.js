'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}


// Global Storage, what do I need to keep on the largest scope
// None I can think of maybe using a variable = 'ay'?

//Break the string into an array, method to use
// const stringToArray , using word.split(',')

// Save the first value in the array, method to use
// Using a const firstLetter = stringToArray[0]

// Remove the first letter, method to use
// const removeFirstLetter = using stringToArray.shift() as the method

//Name of function, turning the array back into a string, method to use
// const removeFirstLetter using .join()

//Function to join the variable to the rest of the string and add "ay"
// Return the var of + removeFirstLetter + "ay"
