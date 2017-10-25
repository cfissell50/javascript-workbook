'use strict';

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should be a valid entry', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('hand one should win', () => {
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('hand two should win', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
    });
  });
} else {

  getPrompt();

}

// Test for all possible scenarios in which "Hand one wins!".
// Test for all possible scenarios in which "Hand two wins!".
// Test to make sure user must input a valid entry (e.g. 'rock', 'paper', or 'scissors')
// Think of more tests you could write and try writing them.
